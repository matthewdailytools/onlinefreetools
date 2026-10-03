import assert from 'node:assert/strict';
import {readFile,mkdtemp,rm,stat} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright-core';
const root=path.resolve('public'),slug='convert-a-webm-file-to-an-mp4-file',base='http://localhost:41741';
const dir=await mkdtemp(path.join(tmpdir(),'webm-test-'));
const noAudio=path.join(dir,'video-only.webm'),large=path.join(dir,'large-90s.webm');
execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-c:v','libvpx','-b:v','500k','-an',noAudio]);
execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','testsrc2=size=640x360:rate=30:duration=90','-vf','noise=alls=50:allf=t+u','-c:v','libvpx-vp9','-deadline','realtime','-cpu-used','8','-b:v','12M','-maxrate','12M','-bufsize','24M','-an',large]);
assert((await stat(large)).size>80*1024*1024);
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']});
const errors=[];
try{
const ctx=await browser.newContext({acceptDownloads:true});
await ctx.route('**/*',async route=>{const url=new URL(route.request().url());if(url.protocol==='blob:'||url.protocol==='data:')return route.continue();if(url.origin!==base||route.request().method()!=='GET')return route.abort();const m=url.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/'+slug+'$'));const p=m?'/_pages/'+(m[1]||'en')+'/tools/'+slug+'.html':url.pathname;const target=path.resolve(root,'.'+p);if(!target.startsWith(root+path.sep))return route.abort();try{const body=await readFile(target);await route.fulfill({body,contentType:p.endsWith('.html')?'text/html; charset=utf-8':(p.endsWith('.js')||p.endsWith('.mjs'))?'application/javascript':p.endsWith('.css')?'text/css':'application/octet-stream'});}catch{await route.fulfill({status:404,body:'not found'});}});
const page=await ctx.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'/tools/'+slug);
await page.click('#cmkSample');try{await page.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled,null,{timeout:20000});}catch(e){console.log('DEBUG',await page.locator('#cmkStep').innerText(),await page.locator('#cmkHud').getAttribute('class'),await page.locator('#cmkResult').innerText(),errors);throw e;}
assert((await page.locator('#cmkResult').innerText()).includes('vp9 video / opus'));
const event=page.waitForEvent('download');await page.click('#cmkDownload');const downloaded=await event;const loc=await downloaded.path();assert((await stat(loc)).size>10000);const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name,channels:format=duration','-of','json',loc],{encoding:'utf8'}));assert.deepEqual(info.streams.map(s=>s.codec_name),['h264','aac']);console.log('sample',info);
await page.click('#cmkClear');await page.setInputFiles('#cmkFile',{name:'video-only.webm',mimeType:'video/webm',buffer:await readFile(noAudio)});await page.click('#cmkConvert');await page.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled,null,{timeout:90000});assert((await page.locator('#cmkResult').innerText()).includes('no audio track'));
const event2=page.waitForEvent('download');await page.click('#cmkDownload');const info2=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name','-of','json',await (await event2).path()],{encoding:'utf8'}));assert.deepEqual(info2.streams.map(s=>s.codec_name),['h264']);console.log('video only',info2);
await page.click('#cmkClear');await page.setInputFiles('#cmkFile',{name:'broken.webm',mimeType:'video/webm',buffer:Buffer.from('bad')});await page.click('#cmkConvert');await page.waitForFunction(()=>!document.querySelector('#cmkConvert').disabled,null,{timeout:30000});assert((await page.locator('#cmkHud').getAttribute('class')).includes('is-error'));console.log('invalid',await page.locator('#cmkStep').innerText());
const sample=await readFile(path.join(root,'samples',slug+'.webm'));
await page.click('#cmkClear');await page.setInputFiles('#cmkFile',{name:'settings.webm',mimeType:'video/webm',buffer:sample});await page.locator('#cmkPanel details summary').click();await page.selectOption('#cmkChannels','1');await page.selectOption('#cmkQuality','low');await page.click('#cmkConvert');await page.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled,null,{timeout:90000});
const event3=page.waitForEvent('download');await page.click('#cmkDownload');const lowPath=await (await event3).path();const info3=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name,channels','-of','json',lowPath],{encoding:'utf8'}));assert.equal(info3.streams[1].channels,1);assert((await stat(lowPath)).size<(await stat(loc)).size,'low quality did not shrink this sample');console.log('settings mono and lower size',info3.streams);
await page.click('#cmkClear');await page.setInputFiles('#cmkFile',large);await page.click('#cmkConvert');await page.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled||document.querySelector('#cmkHud').classList.contains('is-error'),null,{timeout:240000});assert(await page.locator('#cmkDownload').isEnabled(),await page.locator('#cmkStep').innerText());
const largeEvent=page.waitForEvent('download');await page.click('#cmkDownload');const largeLoc=await (await largeEvent).path();const largeInfo=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name:format=duration','-of','json',largeLoc],{encoding:'utf8'}));assert.equal(largeInfo.streams[0].codec_name,'h264');assert(Number(largeInfo.format.duration)>89);console.log('large WebM >80 MiB to H.264 MP4', (await stat(largeLoc)).size,largeInfo.format.duration);
assert(await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');for await(const f of d.keys())if(f.endsWith('.mp4'))return false;return true;}),'small output OPFS temporary file not cleaned');
await page.click('#cmkClear');assert(await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');for await(const f of d.keys())if(f.endsWith('.mp4'))return false;return true;}),'OPFS output not cleaned');
await page.setInputFiles('#cmkFile',large);await page.click('#cmkConvert');await page.click('#cmkStop');
await page.waitForFunction(()=>!document.querySelector('#cmkConvert').disabled,null,{timeout:30000});
assert((await page.locator('#cmkHud').getAttribute('class')).includes('is-error'),'stop did not abort conversion');
await page.click('#cmkConvert');await page.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled,null,{timeout:240000});
console.log('stop and retry large conversion');
await page.click('#cmkClear');
await page.selectOption('#cmkQuality','high');assert(await page.locator('#cmkDownload').isDisabled());
const noOpfs=await ctx.newPage();noOpfs.on('pageerror',e=>errors.push(e.message));await noOpfs.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));await noOpfs.goto(base+'/tools/'+slug);await noOpfs.click('#cmkSample');await noOpfs.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled,null,{timeout:90000});console.log('no OPFS memory fallback passed',await noOpfs.locator('#cmkResult').innerText());
await noOpfs.click('#cmkClear');await noOpfs.setInputFiles('#cmkFile',large);await noOpfs.click('#cmkConvert');await noOpfs.waitForFunction(()=>document.querySelector('#cmkHud').classList.contains('is-error'),null,{timeout:30000});assert((await noOpfs.locator('#cmkStep').innerText()).includes('80 MiB'));
const noAvc=await ctx.newPage();noAvc.on('pageerror',e=>errors.push(e.message));await noAvc.addInitScript(()=>Object.defineProperty(window,'VideoEncoder',{value:undefined}));await noAvc.goto(base+'/tools/'+slug);await noAvc.click('#cmkSample');await noAvc.waitForFunction(()=>document.querySelector('#cmkHud').classList.contains('is-error'),null,{timeout:30000});console.log('no encoder',await noAvc.locator('#cmkStep').innerText());
for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
  assert.equal(await page.locator('h1').count(),1);
  assert(!(await page.locator('h1').innerText()).includes('tool_convert_'));
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
  if(lang==='ar')assert.equal(await page.locator('#cmkPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
  await page.click('#cmkSample');
  await page.waitForFunction(()=>!document.querySelector('#cmkDownload').disabled,null,{timeout:90000});
  const localeEvent=page.waitForEvent('download');await page.click('#cmkDownload');
  const localePath=await (await localeEvent).path();
  const localeInfo=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name','-of','json',localePath],{encoding:'utf8'}));
  assert.deepEqual(localeInfo.streams.map(s=>s.codec_name),['h264','aac']);
  console.log('locale mobile and downloaded MP4',lang);
}
assert.deepEqual(errors,[]);
}finally{await browser.close();await rm(dir,{recursive:true,force:true});}
