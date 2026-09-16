// Requires build:site, generated M4A sample and a browser-capable environment.
// CHROMIUM_PATH=/path/to/chrome node scripts/tool-modules/test-m4a-browser.mjs
import {chromium} from 'playwright-core';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
const slug='convert-an-m4a-file-to-mp3',root=path.resolve('public');
const base=process.env.P3_BASE_URL||'http://p3.test';
const sample=await readFile(path.join(root,'samples',slug+'.m4a'));
const fixtures=[];
if(process.env.FFMPEG_PATH){
 const dir=path.resolve('.cache/m4a-fixtures');mkdirSync(dir,{recursive:true});
 for(const [name,codec,channels,extra] of [
  ['mono.m4a','aac',1,[]],['stereo.aac','aac',2,['-f','adts']],
  ['lossless.m4a','alac',2,[]],['fragmented.mp4','aac',2,['-movflags','frag_keyframe+empty_moov']],
 ]){
  const file=path.join(dir,name);
  const run=spawnSync(process.env.FFMPEG_PATH,['-hide_banner','-loglevel','error','-nostdin','-y','-f','lavfi','-i','sine=frequency=440:sample_rate=48000:duration=1.25','-ac',String(channels),'-c:a',codec,...extra,file],{stdio:'inherit'});
  assert.equal(run.status,0,`generate ${name}: ${run.error||''}`);fixtures.push({name,channels,buffer:await readFile(file),reject:name==='fragmented.mp4'});
 }
}
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox']});
try{
 const context=await browser.newContext({acceptDownloads:true});
 const unexpected=[],errors=[];
 await context.route('**/*',async route=>{
  const url=new URL(route.request().url());
  if(url.protocol==='blob:'||url.protocol==='data:')return route.continue();
  // Site-wide analytics is unrelated to the converter. Block it explicitly;
  // never permit it to execute or mistake its script load for an audio upload.
  if(url.origin==='https://www.clarity.ms'&&url.pathname.startsWith('/tag/')&&route.request().resourceType()==='script'&&route.request().method()==='GET')return route.abort();
  if(url.origin!==base||route.request().method()!=='GET'){unexpected.push(route.request().url());return route.abort();}
  if(process.env.P3_BASE_URL)return route.continue();
  let file=url.pathname;
  const page=file.match(/^\/(?:([a-z]{2})\/)?tools\/convert-an-m4a-file-to-mp3$/);
  if(page)file=`/_pages/${page[1]||'en'}/tools/${slug}.html`;
  if(file.endsWith('/'))file+='index.html';
  const target=path.resolve(root,'.'+file);
  if(!target.startsWith(root+path.sep))return route.abort();
  try{const body=await readFile(target);await route.fulfill({body,contentType:file.endsWith('.html')?'text/html; charset=utf-8':file.endsWith('.js')?'application/javascript':file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':'application/octet-stream'});}
  catch{await route.fulfill({status:404,body:'not found'});}
 });
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 const done=async()=>{try{await page.waitForFunction(()=>!document.querySelector('#m4aDownload').disabled||document.querySelector('#m4aHud.is-error'),null,{timeout:45000});assert(!(await page.isDisabled('#m4aDownload')),await page.locator('#m4aHud').innerText());}catch(e){console.error('Browser diagnostics:',await page.evaluate(()=>({aac:document.createElement('audio').canPlayType('audio/mp4; codecs="mp4a.40.2"'),hud:document.querySelector('#m4aHud')?.innerText})),errors);throw e;}};
 async function output(){return page.evaluate(async()=>{
  const bytes=await(await fetch(document.querySelector('#m4aAudio').src)).arrayBuffer();
  const size=bytes.byteLength; // decodeAudioData detaches its input ArrayBuffer.
  const buffer=await new OfflineAudioContext(2,1,44100).decodeAudioData(bytes);
  return {size,duration:buffer.duration,channels:buffer.numberOfChannels,energy:Array.from({length:buffer.numberOfChannels},(_,ch)=>buffer.getChannelData(ch).reduce((sum,x)=>sum+x*x,0)/buffer.length)};
 });}
 await page.goto(base+'/tools/'+slug);await done();
 const result=await output();console.log('Measured sample:',result,await page.locator('#m4aResult').innerText());assert.equal(result.channels,2);assert(Math.abs(result.duration-5)<.15);assert(result.energy.every(x=>x>.001));assert(result.size>110000&&result.size<130000);
 const event=page.waitForEvent('download');await page.click('#m4aDownload');const download=await event;assert.equal(await download.failure(),null);assert(download.suggestedFilename().endsWith('.mp3'));assert.equal((await readFile(await download.path())).length,result.size);
 await page.locator('#m4aPanel summary').click();await page.selectOption('#m4aBitrate','320');assert(await page.isDisabled('#m4aDownload'));await page.click('#m4aConvert');await done();assert((await output()).size>result.size*1.5);
 await page.setInputFiles('#m4aFile',{name:'invalid.m4a',mimeType:'audio/mp4',buffer:Buffer.from('not audio')});await page.click('#m4aConvert');await page.waitForSelector('#m4aHud.is-error');assert(await page.isDisabled('#m4aDownload'));
 await page.setInputFiles('#m4aFile',{name:'recording.m4a',mimeType:'audio/mp4',buffer:sample});await page.click('#m4aConvert');await done();
 await page.click('#m4aClear');assert(await page.isDisabled('#m4aDownload'));
 console.log('PASS stereo sample → downloaded non-silent MP3, bitrate invalidation, invalid input/retry and clear');
 for(const fixture of fixtures){
  await page.setInputFiles('#m4aFile',{name:fixture.name,mimeType:'audio/mp4',buffer:fixture.buffer});await page.click('#m4aConvert');
  if(fixture.reject){await page.waitForSelector('#m4aHud.is-error');assert(await page.isDisabled('#m4aDownload'));}
  else if(fixture.name==='lossless.m4a'){
   // ALAC decoding is platform-dependent. A clear error is the documented fallback.
   await page.waitForFunction(()=>!document.querySelector('#m4aConvert').disabled);
   if(await page.isDisabled('#m4aDownload'))assert(await page.locator('#m4aHud.is-error').isVisible());
   else {const out=await output();assert.equal(out.channels,2);assert(Math.abs(out.duration-1.25)<.15);}
  }else{await done();const out=await output();assert.equal(out.channels,fixture.channels);assert(Math.abs(out.duration-1.25)<.15);assert(out.energy.every(x=>x>.001));}
  console.log('PASS fixture',fixture.name);
 }
 for(const [name,buffer] of [
  ['video.m4a',Buffer.from(sample.toString('latin1').replace('soun','vide'),'latin1')],
  ['protected.m4a',Buffer.from(sample.toString('latin1').replace('mp4a','enca'),'latin1')],
  ['truncated.m4a',sample.subarray(0,256)],
  ...(process.argv.includes('--skip-oversized')?[]:[['oversized.m4a',Buffer.alloc(40*1024*1024+1)]]),
 ]){await page.setInputFiles('#m4aFile',{name,mimeType:'audio/mp4',buffer});await page.click('#m4aConvert');await page.waitForSelector('#m4aHud.is-error');assert(await page.isDisabled('#m4aDownload'));}
 for(const resource of ['/samples/'+slug+'.m4a','/vendor/lamejs/lamejs.iife.js']){
  const broken=await context.newPage();await broken.route('**'+resource,route=>route.abort());await broken.goto(base+'/tools/'+slug);await broken.waitForSelector('#m4aHud.is-error');assert(await broken.isDisabled('#m4aDownload'));
  await broken.unroute('**'+resource);await broken.click(resource.includes('/samples/')?'#m4aSample':'#m4aConvert');await broken.waitForFunction(()=>!document.querySelector('#m4aDownload').disabled);await broken.close();
 }
 console.log('PASS rejected video/protected/truncated inputs; sample and encoder load failure/retry');
 console.log(process.argv.includes('--skip-oversized')?'SKIP oversized browser input: user-authorized after host OOM; production size guard unchanged':'PASS oversized input rejection');
 for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
  await page.setViewportSize({width:390,height:844});await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);await done();
  assert.equal(await page.locator('h1').count(),1);assert(!(await page.locator('#m4aResult').innerText()).includes('{'));assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  if(lang==='ar')assert.equal(await page.locator('#m4aPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
  console.log('PASS mobile locale',lang);
 }
 for(const home of ['/','/zh/']){await page.goto(base+home);assert(await page.locator('a[href*="/tools/'+slug+'"]').count()>0);assert.equal(await page.locator('a[href*="/tools/convert-an-mp3-file-to-wav"]').count(),0);}
 console.log('PASS English/Chinese home discovery; unfinished P2 not published');
 assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);
 console.log('PASS real M4A → downloaded/decoded non-silent MP3, bitrate, invalid/retry, clear, ten locales; no converter upload (site analytics blocked)');
}finally{await browser.close();}
