// Structural regression checks, NOT a substitute for real browser decoding.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const slug='convert-an-m4a-file-to-mp3';
const source=readFileSync('src/pages/convertAnM4aFileToMp3Page.ts','utf8');
const parser=source.match(/    function inspectInput\(bytes\)\{([\s\S]*?)\n    function loadEncoder/);
assert(parser, 'input inspector must be present');
const inspect=vm.runInNewContext('(function inspectInput(bytes){'+parser[1].trim()+')');
const input=b=>b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength);
const box=(type,...parts)=>{const payload=Buffer.concat(parts),b=Buffer.alloc(8);b.writeUInt32BE(payload.length+8);b.write(type,4);return Buffer.concat([b,payload]);};
function container({handler='soun',codec='mp4a',channels=2,duration=44100,tracks=1,fragmented=false}={}){
 const h=Buffer.alloc(12);h.write(handler,8);
 const mdhd=Buffer.alloc(24);mdhd.writeUInt32BE(44100,12);mdhd.writeUInt32BE(duration,16);
 const entry=Buffer.alloc(28);entry.writeUInt16BE(channels,16);
 const count=Buffer.alloc(8);count.writeUInt32BE(1,4);
 const trak=box('trak',box('mdia',box('hdlr',h),box('mdhd',mdhd),box('minf',box('stbl',box('stsd',count,box(codec,entry))))));
 return Buffer.concat([box('ftyp',Buffer.from('M4A \0\0\0\0isom')),box('moov',...Array(tracks).fill(trak)),box('mdat',Buffer.alloc(4)),...(fragmented?[box('moof')]:[])]);
}
assert.equal(inspect(input(container())).channels,2);
assert.equal(inspect(input(container({channels:1,codec:'alac'}))).duration,1);
for(const options of [{handler:'vide'},{codec:'enca'},{channels:6},{duration:44100*601},{tracks:2},{tracks:0},{fragmented:true}])assert.throws(()=>inspect(input(container(options))));
for(const b of [Buffer.alloc(0),Buffer.from('RIFF1234WAVE'),container().subarray(0,35)])assert.throws(()=>inspect(input(b)));
// Minimal ADTS framing fixture; payload is deliberately not valid AAC audio.
const adts=Buffer.from([255,241,80,128,1,31,252,0]);
assert.equal(inspect(input(adts)).channels,2);
assert(Math.abs(inspect(input(adts)).duration-1024/44100)<1e-9);
assert.throws(()=>inspect(input(adts.subarray(0,7))));
console.log('PASS container and ADTS structural validation (synthetic headers only)');

let master;
for(const lang of ['en','zh','es','ja','ar','ru','fr','de','pt','id']){
 const text=readFileSync(`src/site/i18n/tools/${slug}/${lang}.ts`,'utf8');
 const pairs=[...text.matchAll(/\b(tool_convert_an_m4a_file_to_mp3_\w+):\s*("(?:[^"\\]|\\.)*")/g)];
 const dict=Object.fromEntries(pairs.map(([,key,value])=>[key,JSON.parse(value)]));
 assert.equal(pairs.length,Object.keys(dict).length,`${lang}: duplicate keys`);
 assert.equal(pairs.length,59,`${lang}: missing authored fields`);
 if(!master)master=dict;
 assert.deepEqual(Object.keys(dict).sort(),Object.keys(master).sort(),`${lang}: key parity`);
 for(const [key,value] of Object.entries(dict))assert.deepEqual((value.match(/\{\w+\}/g)||[]).sort(),(master[key].match(/\{\w+\}/g)||[]).sort(),`${lang}: ${key} placeholders`);
 const description=dict.tool_convert_an_m4a_file_to_mp3_description;
 assert(description.length>=120,`${lang}: description too short (${description.length})`);
}
assert(source.includes('accept=".m4a,.aac,audio/mp4,audio/x-m4a,audio/aac"'));
assert(!source.includes('renderConvertAWavFileToMp3Page'));
console.log('PASS ten locales: 59 authored keys, placeholder parity, metadata length; independent P3 renderer');
