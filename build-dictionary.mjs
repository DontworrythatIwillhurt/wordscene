import {writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const base='https://raw.githubusercontent.com/Kaiyiwing/qwerty-learner/master/';
const words=new Map(),sources=[];
for(const file of ['CET4_T','CET6_T']){
  const url=`${base}public/dicts/${file}.json`,response=await fetch(url);
  if(!response.ok)throw Error(`${url}: ${response.status}`);
  const text=await response.text(),data=JSON.parse(text);
  sources.push({name:file,url,count:data.length,sha256:createHash('sha256').update(text).digest('hex')});
  for(const entry of data){
    const id=entry.name.trim().toLowerCase();
    if(!id||!entry.trans?.length)throw Error(`Invalid dictionary entry: ${entry.name}`);
    const old=words.get(id),level=file==='CET6_T'?'六级':'四级基础';
    words.set(id,{id,word:entry.name,meaning:entry.trans.join('；'),pos:'',phrase:'',example:'',source:`${level}参考词表`,storyId:null,ukphone:entry.ukphone||'',usphone:entry.usphone||'',levels:[...new Set([...(old?.levels||[]),level])]});
  }
}
const csvUrl='https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv';
const csvResponse=await fetch(csvUrl);if(!csvResponse.ok)throw Error('ECDICT download failed');
const csv=await csvResponse.text();
function* rows(text){let row=[],field='',quote=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quote&&text[i+1]==='"'){field+='"';i++;}else quote=!quote;}else if(!quote&&(c===','||c==='\n')){row.push(field.replace(/\r$/,''));field='';if(c==='\n'){yield row;row=[];}}else field+=c;}if(field||row.length){row.push(field);yield row;}}
const iterator=rows(csv),headers=iterator.next().value;let count=0;
for(const cells of iterator){const entry=Object.fromEntries(headers.map((h,i)=>[h,cells[i]||'']));const tags=entry.tag.split(' ');if(!tags.some(t=>t==='cet4'||t==='cet6'))continue;count++;const id=entry.word.trim().toLowerCase(),levels=[...(tags.includes('cet4')?['四级基础']:[]),...(tags.includes('cet6')?['六级']:[])],old=words.get(id);words.set(id,{id,word:entry.word,meaning:entry.translation.replace(/\\n/g,'；'),pos:'',phrase:'',example:'',source:'ECDICT 四六级参考词表',storyId:null,ukphone:entry.phonetic,usphone:'',exchange:entry.exchange,...old,levels:[...new Set([...levels,...(old?.levels||[])])]});}
sources.push({name:'ECDICT cet4/cet6',url:csvUrl,count,sha256:createHash('sha256').update(csv).digest('hex')});
const ecLicense=await fetch('https://raw.githubusercontent.com/skywind3000/ECDICT/master/LICENSE');if(!ecLicense.ok)throw Error('Missing ECDICT license');
await writeFile(new URL('./dist/ECDICT-LICENSE.txt',import.meta.url),await ecLicense.text());
const response=await fetch(base+'LICENSE');if(!response.ok)throw Error('Missing upstream license');
await writeFile(new URL('./dist/DICTIONARY-LICENSE.txt',import.meta.url),await response.text());
const meta={retrieved:new Date().toISOString().slice(0,10),unique:words.size,sources,scope:'公开参考词表的完整并集；不同出版词表及派生词口径可能不同。'};
await writeFile(new URL('./dist/dictionary.js',import.meta.url),`/* Sources: SOURCES.md; license: DICTIONARY-LICENSE.txt */\nconst DICTIONARY_META=${JSON.stringify(meta)};\nconst DICTIONARY_WORDS=${JSON.stringify([...words.values()])};\n`);
console.log(JSON.stringify(meta,null,2));
