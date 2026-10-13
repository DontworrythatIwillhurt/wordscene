import {readFile,writeFile} from 'node:fs/promises';
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

async function generateSerialIndex(){
  const source=await readFile(dist('serial-data.js'),'utf8');
  const novels=new Function(source.replace(/(?:const|var)\s+SERIAL_NOVELS\s*=/,'return '))();
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

const cssFiles=['style.css','upgrade.css','mobile.css','cloze.css','listening.css','practice.css','training.css','premium.css'];
const appCss=(await Promise.all(cssFiles.map(async file=>'/* '+file+' */\n'+await readFile(dist(file),'utf8')))).join('\n');
await writeFile(dist('app.css'),appCss);

const serialIndex=await generateSerialIndex();

const runtimeFiles=[
  'compatibility.js','chapters.js','data.js','app.js','learning.js','skills.js','cloze.js',
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
console.log('Concatenated CSS: '+versions['app.css']+' ('+Buffer.byteLength(appCss)+' bytes)');
