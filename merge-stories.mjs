import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const dir=new URL('./',import.meta.url);
const baseline=JSON.parse(await readFile(new URL('content-work/baseline.json',dir),'utf8'));
const targets=new Set(baseline.words);
const files=[1,2,3].map(n=>new URL(`content-work/stories-${n}.json`,dir));
const stories=(await Promise.all(files.map(async file=>JSON.parse(await readFile(file,'utf8'))))).flat();
const ids=new Set(baseline.stories.map(s=>s.id));
const titles=new Set();
for(const s of stories){
  assert(typeof s.id==='string'&&!ids.has(s.id),`Repeated or missing story ID: ${s.id}`);ids.add(s.id);
  assert(typeof s.title==='string'&&s.title.trim(),`Missing title: ${s.id}`);
  assert(!titles.has(s.title),`Repeated new story title: ${s.title}`);titles.add(s.title);
  assert(['修仙志','悬疑案'].includes(s.category),`Unexpected category: ${s.id}`);
  assert(Array.isArray(s.cn)&&Array.isArray(s.en)&&s.cn.length===s.en.length&&s.en.length>=2,`Unaligned scenes: ${s.id}`);
  assert(s.en.every(p=>typeof p==='string'&&p.trim())&&s.cn.every(p=>typeof p==='string'&&p.trim()),`Empty scene: ${s.id}`);
  assert(Array.isArray(s.words)&&s.words.length,`Missing learning words: ${s.id}`);
  const marked=new Set(s.en.flatMap(p=>[...p.matchAll(/\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g)].map(m=>m[1])));
  for(const id of marked)assert(targets.has(id),`Unknown marked word ${id} in ${s.id}`);
  for(const word of s.words){assert(marked.has(word[0]),`Declared word ${word[0]} has no actual story occurrence in ${s.id}`);assert(typeof word[2]==='string'&&word[2].trim(),`Missing contextual meaning ${word[0]}`);}
  for(const cn of s.cn)for(const m of cn.matchAll(/\[\[([^|\]]+)\|[^\]]+\]\]/g))assert(marked.has(m[1]),`Chinese marker ${m[1]} has no English counterpart in ${s.id}`);
}
const covered=new Set([...baseline.stories.flatMap(s=>s.words),...stories.flatMap(s=>s.en.flatMap(p=>[...p.matchAll(/\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g)].map(m=>m[1]))) ]);
const missing=[...targets].filter(id=>!covered.has(id));
if(!process.argv.includes('--allow-incomplete'))assert.equal(missing.length,0,`Story coverage is incomplete (${missing.length} missing): ${missing.slice(0,40).join(', ')}`);
const js=`/* Original bilingual expansion. Source: content-work/stories-{1,2,3}.json. */\nconst EXPANDED_STORIES = ${JSON.stringify(stories,null,2)};\n`;
new vm.Script(js,{filename:'expanded-stories.js'});
await writeFile(new URL('dist/expanded-stories.js',dir),js);
console.log(JSON.stringify({addedStories:stories.length,targetWords:targets.size,coveredWords:[...targets].filter(id=>covered.has(id)).length,uncoveredWords:missing.length,genres:Object.fromEntries(['修仙志','悬疑案'].map(g=>[g,stories.filter(s=>s.category===g).length]))},null,2));
