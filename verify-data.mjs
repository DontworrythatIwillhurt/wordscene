import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const box=vm.createContext({console});
for(const file of ['dictionary.js','chapters.js','expanded-stories.js','data.js'])vm.runInContext(await readFile(new URL('./dist/'+file,import.meta.url),'utf8'),box);
const data=vm.runInContext('({STORIES,BUILTIN_WORDS,DICTIONARY_WORDS,COVERAGE})',box);
assert.equal(vm.runInContext(`maskSurface('The witness said he saw the thief.','he')`,box),'The witness said ________ saw the thief.');
assert.equal(vm.runInContext(`maskSurface('A gate was damaged.','a')`,box),'________ gate was damaged.');
assert.equal(vm.runInContext(`maskSurface('They met at 3 p.m. near the platform.','p.m.')`,box),'They met at 3 ________ near the platform.');
assert.equal(new Set(data.BUILTIN_WORDS.map(w=>w.id)).size,data.BUILTIN_WORDS.length);
const index=new Map(data.BUILTIN_WORDS.map(w=>[w.id,w]));
for(const w of data.DICTIONARY_WORDS)assert(index.has(w.id),`Missing reference word ${w.id}`);
for(const story of data.STORIES){assert.equal(story.cn.length,story.en.length);assert(story.words.length>0);for(const w of story.words){assert(w.meaning,`Missing meaning ${w.id}`);assert(w.example.includes(w.surface),`Missing context ${w.id}`);assert(index.has(w.id));}for(const p of story.en)for(const m of p.matchAll(/\[\[([^|\]]+)/g))assert(index.has(m[1]),`Unknown inline word ${m[1]}`);}
const contextualIds=new Set(data.STORIES.flatMap(s=>s.words.map(w=>w.id)));
const missing=data.BUILTIN_WORDS.filter(w=>!contextualIds.has(w.id));
assert.equal(missing.length,0,`Uncovered words: ${missing.map(w=>w.id).join(', ')}`);
const baseline=JSON.parse(await readFile(new URL('./content-work/baseline.json',import.meta.url),'utf8'));
for(const id of baseline.words)assert(index.has(id),`Original vocabulary was removed: ${id}`);
for(const old of baseline.stories){const story=data.STORIES.find(s=>s.id===old.id);assert(story,`Original story was removed: ${old.id}`);assert.equal(story.title,old.title);}
const report={stories:data.STORIES.length,addedStories:data.STORIES.length-baseline.stories.length,words:data.BUILTIN_WORDS.length,coverage:data.COVERAGE,referenceComplete:true,storyCoverageComplete:true,uncoveredWords:[],wordStories:Object.fromEntries(data.BUILTIN_WORDS.map(w=>[w.id,w.storyIds||[w.storyId]]))};
await writeFile(new URL('./dist/story-coverage.json',import.meta.url),JSON.stringify(report,null,2));
console.log(JSON.stringify({...report,wordStories:undefined},null,2));
