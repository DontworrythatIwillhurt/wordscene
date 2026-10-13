import {readFile,writeFile,mkdir,readdir,unlink} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {transform} from 'esbuild';

const dist=file=>new URL('./dist/'+file,import.meta.url);
const sha12=buffer=>createHash('sha256').update(buffer).digest('hex').slice(0,12);

function extractWordIds(chapter){
  const wordIds=[];
  const seen=new Set();
  const pattern=/\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  for(const paragraph of chapter.cn||[]){
    pattern.lastIndex=0;
    let match;
    const text=String(paragraph);
    while((match=pattern.exec(text))){
      if(!seen.has(match[1])){
        seen.add(match[1]);
        wordIds.push(match[1]);
      }
    }
  }
  return wordIds;
}

async function loadNovels(){
  const source=await readFile(dist('serial-data.js'),'utf8');
  return new Function(source.replace(/(?:const|var)\s+SERIAL_NOVELS\s*=/,'return '))();
}

async function generateSerialIndex(novels){
  const books=novels.map(book=>({
    id:book.id,
    title:book.title,
    category:book.category,
    subtitle:book.subtitle,
    synopsis:book.synopsis,
    characters:book.characters,
    volumes:book.volumes,
    chapters:book.chapters.map(chapter=>({
      id:chapter.id,
      title:chapter.title,
      volume:chapter.volume,
      summary:chapter.summary,
      recap:chapter.recap,
      wordIds:extractWordIds(chapter)
    }))
  }));
  const covered=new Set();
  for(const book of books)for(const chapter of book.chapters)for(const id of chapter.wordIds)covered.add(id);
  const payload='var SERIAL_INDEX=[\n'+books.map(book=>{
    const {chapters,...meta}=book;
    return JSON.stringify(meta).replace(/\}$/,',"chapters":[\n'+chapters.map(chapter=>JSON.stringify(chapter)).join(',\n')+'\n]}');
  }).join(',\n')+'\n];\nvar SERIAL_INDEX_META='+JSON.stringify({
    books:books.length,
    chapters:books.reduce((n,book)=>n+book.chapters.length,0),
    words:covered.size
  })+';\n';
  await writeFile(dist('serial-index.js'),payload);
  return {bytes:Buffer.byteLength(payload),meta:{books:books.length,chapters:books.reduce((n,book)=>n+book.chapters.length,0),words:covered.size}};
}

async function generateSerialChapters(novels){
  const dir=new URL('./dist/serial-chapters/',import.meta.url);
  await mkdir(dir,{recursive:true});
  const existing=await readdir(dir);
  await Promise.all(existing.filter(file=>file.endsWith('.js')).map(file=>unlink(new URL(file,dir))));
  let bytes=0,count=0,maxLine=0;
  for(const book of novels){
    for(const chapter of book.chapters){
      const payload='(function(payload){if(typeof applySerialChapterPayload==="function")applySerialChapterPayload(payload);else (window.SERIAL_CHAPTER_QUEUE||(window.SERIAL_CHAPTER_QUEUE=[])).push(payload);})('+JSON.stringify({
        id:chapter.id,
        book:book.id,
        cn:chapter.cn||[],
        en:chapter.en||[]
      })+');\n';
      await writeFile(new URL(chapter.id+'.js',dir),payload);
      bytes+=Buffer.byteLength(payload);
      count++;
      maxLine=Math.max(maxLine,...payload.split('\n').map(line=>line.length));
    }
  }
  return {count,bytes,maxLine};
}

const cssFiles=['style.css','upgrade.css','mobile.css','cloze.css','listening.css','practice.css','training.css','premium.css'];
const appCss=(await Promise.all(cssFiles.map(async file=>'/* '+file+' */\n'+await readFile(dist(file),'utf8')))).join('\n');
await writeFile(dist('app.css'),appCss);

const novels=await loadNovels();
const serialIndex=await generateSerialIndex(novels);
const serialChapters=await generateSerialChapters(novels);

const runtimeFiles=[
  'serial-index.js','compatibility.js','chapters.js','data.js','app.js','learning.js','skills.js','cloze.js',
  'listening.js','listening-practice.js','practice-training.js','serial.js','mobile.js','loader.js'
];
const source=(await Promise.all(runtimeFiles.map(file=>readFile(dist(file),'utf8')))).join('\n;\n');
const result=await transform(source,{target:['es2017','chrome60'],charset:'utf8',minifyWhitespace:false,minifyIdentifiers:false,minifySyntax:false,legalComments:'inline'});
if(result.warnings.length)throw Error(result.warnings.map(w=>w.text).join('\n'));
await writeFile(dist('wordscene.compat.js'),result.code);

const hashedFiles=[
  'wordscene.compat.js','serial-index.js','serial-data.js','catalog.js','dictionary.js',
  'startup.js','app.css','listening-questions.js','training-data.js',
  'expanded-stories.js','cloze-stories.js'
];
const versions={};
for(const file of hashedFiles)versions[file]=sha12(await readFile(dist(file)));
versions['stories-cultivation.js']=sha12(await readFile(dist('data/stories-cultivation.js')));
versions['stories-mystery.js']=sha12(await readFile(dist('data/stories-mystery.js')));
versions['serial-chapters']=versions['serial-data.js'];

let html=await readFile(dist('index.html'),'utf8');
html=html.replace(
  /<script>window\.WORDSCENE_ASSET_VERSIONS=[\s\S]*?<\/script>/,
  `<script>window.WORDSCENE_ASSET_VERSIONS=${JSON.stringify(versions)};</script>`
);
for(const [file,version] of Object.entries(versions)){
  html=html.replace(new RegExp(file.replace(/\./g,'\\.')+'\\?v=[^"\\s]+','g'),file+'?v='+version);
}
html=html.replace('首次打开需要加载故事与词库，请稍候。','书架先打开，章节正文会在阅读时再下载。');
await writeFile(dist('index.html'),html);

console.log('Compatible browser bundle: '+versions['wordscene.compat.js']+' ('+Buffer.byteLength(result.code)+' bytes)');
console.log('Serial index: '+versions['serial-index.js']+' ('+serialIndex.bytes+' bytes, '+serialIndex.meta.chapters+' chapters, '+serialIndex.meta.words+' words)');
console.log('Serial chapters: '+serialChapters.count+' files, '+serialChapters.bytes+' bytes, maxLine '+serialChapters.maxLine);
console.log('Concatenated CSS: '+versions['app.css']+' ('+Buffer.byteLength(appCss)+' bytes)');
