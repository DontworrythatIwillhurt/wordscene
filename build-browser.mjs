import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {transform} from 'esbuild';

// Keep global function declarations: mobile.js enhances the existing renderer.
const files=['compatibility.js','dictionary.js','chapters.js','expanded-stories.js','cloze-stories.js','data.js','app.js','learning.js','cloze.js','mobile.js'];
const source=(await Promise.all(files.map(file=>readFile(new URL('./dist/'+file,import.meta.url),'utf8')))).join('\n;\n');
const result=await transform(source,{target:['es2017','chrome60'],charset:'utf8',minifyWhitespace:true,minifyIdentifiers:false,minifySyntax:false,legalComments:'inline'});
if(result.warnings.length)throw Error(result.warnings.map(w=>w.text).join('\n'));
await writeFile(new URL('./dist/wordscene.compat.js',import.meta.url),result.code);
const version=createHash('sha256').update(result.code).digest('hex').slice(0,12);
const indexUrl=new URL('./dist/index.html',import.meta.url);
let html=await readFile(indexUrl,'utf8');
html=html.replace(/wordscene\.compat\.js\?v=[a-z0-9-]+/g,'wordscene.compat.js?v='+version);
for(const file of ['style.css','upgrade.css','mobile.css','cloze.css','startup.js']){
  const hash=createHash('sha256').update(await readFile(new URL('./dist/'+file,import.meta.url))).digest('hex').slice(0,12);
  const pattern=new RegExp('(["\\\'])'+file.replace(/\./g,'\\.')+'(?:\\?[^"\\\']*)?\\1','g');
  html=html.replace(pattern,(_,quote)=>quote+file+'?v='+hash+quote);
}
await writeFile(indexUrl,html);
console.log('Compatible browser bundle: '+version+' ('+Buffer.byteLength(result.code)+' bytes)');
