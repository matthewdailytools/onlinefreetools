import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtemp,readFile,rm,stat} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {chromium} from 'playwright-core';

const root=path.resolve('public'),slug='convert-an-mp4-file-to-a-webm-file',base='http://localhost:41751';
const dir=await mkdtemp(path.join(tmpdir(),'mp4-webm-test-'));
const ffmpeg=(args)=>execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error',...args]);
const probe=(file)=>JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name:format=duration','-of','json',file],{encoding:'utf8'}));
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']});
const errors=[];
try{
 const ctx=await browser.newContext({acceptDownloads:true});
 await ctx.route('**/*',async route=>{
  const url=new URL(route.request().url());
  if(url.protocol==='blob:'||url.protocol==='data:')return route.continue();
  if(url.origin!==base||route.request().method()!=='GET')return route.abort();
  const m=url.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/'+slug+'$'));
  const p=m?'/_pages/'+(m[1]||'en')+'/tools/'+slug+'.html':url.pathname;
  const target=path.resolve(root,'.'+p);
  if(!target.startsWith(root+path.sep))return route.abort();
  try{const body=await readFile(target);await route.fulfill({body,contentType:p.endsWith('.html')?'text/html; charset=utf-8':/\.m?js$/.test(p)?'application/javascript':p.endsWith('.css')?'text/css':p.endsWith('.mp4')?'video/mp4':'application/octet-stream'});}catch{await route.fulfill({status:404,body:'not found'});}
 });
 const page=await ctx.newPage();page.on('pageerror',e=>errors.push(e.message));
 const ready=()=>page.waitForFunction(()=>!document.querySelector('#cmwDownload').disabled||document.querySelector('#cmwHud').classList.contains('is-error'),null,{timeout:240000});
 const download=async()=>{const e=page.waitForEvent('download');await page.click('#cmwDownload');const d=await e;assert.equal(await d.failure(),null);return d.path();};
 const opfs=()=>page.evaluate(async()=>{const d=await(await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');const a=[];for await(const n of d.keys())a.push(n);return a;});
 await page.goto(base+'/tools/'+slug);await page.click('#cmwSample');await ready();assert(await page.locator('#cmwDownload').isEnabled(),await page.locator('#cmwStep').innerText());
 assert.match(await page.locator('#cmwResult').innerText(),/VP9 \/ Opus/);
 const sample=await download();assert.deepEqual(probe(sample).streams.map(s=>s.codec_name),['vp9','opus']);assert(Number(probe(sample).format.duration)>10);
 assert((await opfs()).some(n=>n.endsWith('.webm')));
 console.log('sample real VP9/Opus WebM download and OPFS retention');
 await page.click('#cmwClear');assert(!(await opfs()).some(n=>n.endsWith('.webm')));
 const silent=path.join(dir,'silent.mp4');ffmpeg(['-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-c:v','libx264','-pix_fmt','yuv420p','-an',silent]);
 await page.setInputFiles('#cmwFile',silent);await page.click('#cmwConvert');await ready();assert(await page.locator('#cmwDownload').isEnabled());assert.deepEqual(probe(await download()).streams.map(s=>s.codec_name),['vp9']);console.log('silent MP4 produced video-only WebM');
 await page.click('#cmwClear');await page.setInputFiles('#cmwFile',{name:'bad.mp4',mimeType:'video/mp4',buffer:Buffer.from('broken')});await page.click('#cmwConvert');await ready();assert(await page.locator('#cmwDownload').isDisabled());console.log('damaged MP4 rejected');
 const hevc=path.join(dir,'hevc.mp4');ffmpeg(['-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-f','lavfi','-i','sine=frequency=440:duration=3','-c:v','libx265','-x265-params','log-level=error','-tag:v','hvc1','-c:a','aac',hevc]);
 await page.click('#cmwClear');await page.setInputFiles('#cmwFile',hevc);await page.click('#cmwConvert');await ready();assert(await page.locator('#cmwDownload').isDisabled());assert.match(await page.locator('#cmwStep').innerText(),/HEVC/);console.log('undecodable HEVC rejected without audio-only WebM');
 const large=path.join(dir,'large.mp4');ffmpeg(['-f','lavfi','-i','testsrc2=size=640x360:rate=30:duration=90','-vf','noise=alls=50:allf=t+u','-c:v','libx264','-preset','ultrafast','-b:v','12M','-maxrate','12M','-bufsize','24M','-an',large]);assert((await stat(large)).size>80*1024*1024);
 await page.click('#cmwClear');await page.setInputFiles('#cmwFile',large);await page.click('#cmwConvert');await ready();assert(await page.locator('#cmwDownload').isEnabled(),await page.locator('#cmwStep').innerText());const largeOut=await download();assert.equal(probe(largeOut).streams[0].codec_name,'vp9');assert(Number(probe(largeOut).format.duration)>89);assert((await opfs()).some(n=>n.endsWith('.webm')));console.log('>80 MiB, 90-second MP4 to OPFS VP9 WebM', (await stat(largeOut)).size);
 await page.click('#cmwClear');assert(!(await opfs()).some(n=>n.endsWith('.webm')));
 await page.setInputFiles('#cmwFile',large);await page.click('#cmwConvert');await page.click('#cmwStop');await page.waitForFunction(()=>!document.querySelector('#cmwConvert').disabled,null,{timeout:30000});assert(await page.locator('#cmwDownload').isDisabled());await page.click('#cmwConvert');await ready();assert(await page.locator('#cmwDownload').isEnabled());console.log('stop and retry passed');
 const noOpfs=await ctx.newPage();noOpfs.on('pageerror',e=>errors.push(e.message));await noOpfs.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));await noOpfs.goto(base+'/tools/'+slug);await noOpfs.setInputFiles('#cmwFile',large);await noOpfs.click('#cmwConvert');await noOpfs.waitForFunction(()=>document.querySelector('#cmwHud').classList.contains('is-error'),null,{timeout:30000});assert.match(await noOpfs.locator('#cmwStep').innerText(),/80 MiB/);console.log('no-OPFS code cap passed');
 const brokenOpfs=await ctx.newPage();brokenOpfs.on('pageerror',e=>errors.push(e.message));
 await brokenOpfs.addInitScript(()=>{const original=navigator.storage.getDirectory.bind(navigator.storage);Object.defineProperty(navigator.storage,'getDirectory',{value:async()=>{const root=await original();return new Proxy(root,{get(target,key){if(key==='getDirectoryHandle')return async(...args)=>{const dir=await target.getDirectoryHandle(...args);return new Proxy(dir,{get(inner,prop){if(prop==='getFileHandle')return async(name,...rest)=>{if(name!=='.__probe')throw new DOMException('Quota reached','QuotaExceededError');return inner.getFileHandle(name,...rest);};const value=inner[prop];return typeof value==='function'?value.bind(inner):value;}});};const value=target[key];return typeof value==='function'?value.bind(target):value;}});}});});
 await brokenOpfs.goto(base+'/tools/'+slug);await brokenOpfs.setInputFiles('#cmwFile',large);await brokenOpfs.click('#cmwConvert');await brokenOpfs.waitForFunction(()=>document.querySelector('#cmwHud').classList.contains('is-error'),null,{timeout:30000});assert.match(await brokenOpfs.locator('#cmwStep').innerText(),/storage|space|write/i);assert(await brokenOpfs.locator('#cmwDownload').isDisabled());console.log('OPFS output-open failure did not fall back to large memory buffer');
 const noVp9=await ctx.newPage();noVp9.on('pageerror',e=>errors.push(e.message));await noVp9.addInitScript(()=>Object.defineProperty(window,'VideoEncoder',{value:undefined}));await noVp9.goto(base+'/tools/'+slug);await noVp9.click('#cmwSample');await noVp9.waitForFunction(()=>document.querySelector('#cmwHud').classList.contains('is-error'),null,{timeout:90000});assert.match(await noVp9.locator('#cmwStep').innerText(),/VP9/);console.log('no VP9 encoder rejected');
 const noOpus=await ctx.newPage();noOpus.on('pageerror',e=>errors.push(e.message));await noOpus.addInitScript(()=>Object.defineProperty(window,'AudioEncoder',{value:undefined}));await noOpus.goto(base+'/tools/'+slug);await noOpus.click('#cmwSample');await noOpus.waitForFunction(()=>document.querySelector('#cmwHud').classList.contains('is-error'),null,{timeout:90000});assert.match(await noOpus.locator('#cmwStep').innerText(),/Opus/);console.log('no Opus encoder rejected');
 let englishTitle='';
 for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
  const title=await page.locator('h1').innerText();
  if(lang==='en')englishTitle=title;else assert.notEqual(title,englishTitle,'English fallback in '+lang);
  assert(!title.includes('tool_convert_'));
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
  if(lang==='ar')assert.equal(await page.locator('#cmwPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
  await page.click('#cmwSample');await ready();assert(await page.locator('#cmwDownload').isEnabled(),'sample conversion '+lang);
  assert.deepEqual(probe(await download()).streams.map(s=>s.codec_name),['vp9','opus']);
  console.log('locale mobile real WebM download',lang);
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await rm(dir,{recursive:true,force:true});}
