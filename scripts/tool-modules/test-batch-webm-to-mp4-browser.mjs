import assert from 'node:assert/strict';
import {readFile, mkdtemp, rm, stat} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright-core';

const root=path.resolve('public');
const slug='batch-convert-webm-files-to-mp4-files';
const base='http://localhost:41742';
const dir=await mkdtemp(path.join(tmpdir(),'batch-webm-test-'));
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']});
const errors=[];
try {
  const ctx=await browser.newContext({acceptDownloads:true});
  await ctx.route('**/*',async route=>{
    const url=new URL(route.request().url());
    if(url.protocol==='blob:'||url.protocol==='data:')return route.continue();
    if(url.origin!==base||route.request().method()!=='GET')return route.abort();
    const m=url.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/'+slug+'$'));
    const p=m?'/_pages/'+(m[1]||'en')+'/tools/'+slug+'.html':url.pathname;
    const target=path.resolve(root,'.'+p);
    if(!target.startsWith(root+path.sep))return route.abort();
    try{
      const body=await readFile(target);
      await route.fulfill({body,contentType:p.endsWith('.html')?'text/html; charset=utf-8':(p.endsWith('.js')||p.endsWith('.mjs'))?'application/javascript':p.endsWith('.css')?'text/css':'application/octet-stream'});
    }catch{await route.fulfill({status:404,body:'not found'});}
  });
  const page=await ctx.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/tools/'+slug);
  try {
    await page.waitForFunction(()=>document.querySelectorAll('#bcwmList .bcwm-status.is-ok').length===2,null,{timeout:90000});
  } catch (e) {
    const inspect=await page.evaluate(async()=>{try{const mod=await import('/vendor/mediabunny/mkv-to-mp4-loader.js');const blob=await (await fetch('/samples/convert-a-webm-file-to-an-mp4-file.webm')).blob();return {size:blob.size,info:await mod.inspectVideoFile(new File([blob],'sample.webm',{type:'video/webm'}))};}catch(e){return {message:e.message,stack:e.stack};}});
    console.log('auto sample debug',await page.locator('#bcwmHud').getAttribute('class'),await page.locator('#bcwmStep').innerText(),await page.locator('#bcwmList').innerText(),errors,inspect);
    throw e;
  }
  assert.equal(await page.locator('#bcwmList li').count(),2);
  const sampleButtons=page.locator('#bcwmList button.btn-outline-primary');
  assert.equal(await sampleButtons.count(),2);
  const names=[];
  for(let i=0;i<2;i++){
    const event=page.waitForEvent('download');
    await sampleButtons.nth(i).click();
    const download=await event;
    names.push(download.suggestedFilename());
    const outputPath=await download.path();
    const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name:format=duration','-of','json',outputPath],{encoding:'utf8'}));
    assert.deepEqual(probe.streams.map(x=>x.codec_name),['h264','aac']);
    assert((await stat(outputPath)).size>10000);
  }
  assert.notEqual(names[0],names[1]);
  assert(await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');let n=0;for await(const name of d.keys())if(name.endsWith('.mp4'))n++;return n>=2;}),'batch results were copied out of OPFS');
  console.log('auto sample, duplicate names, two real MP4 downloads',names);

  const source=await readFile(path.join(root,'samples','convert-a-webm-file-to-an-mp4-file.webm'));
  await page.setInputFiles('#bcwmFile',{name:'later.webm',mimeType:'video/webm',buffer:source});
  assert.equal(await page.locator('#bcwmList button.btn-outline-primary').count(),2,'adding a file discarded earlier results');
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bcwmList .bcwm-status.is-ok').length===3,null,{timeout:90000});
  console.log('appending a new WebM kept earlier MP4s');
  await page.locator('#bcwmList li').nth(2).getByRole('button',{name:'Remove'}).click();
  assert.equal(await page.locator('#bcwmList button.btn-outline-primary').count(),2);
  console.log('removing one finished row kept the others');
  await page.click('#bcwmClear');
  await page.setInputFiles('#bcwmFile',[
    {name:'good.webm',mimeType:'video/webm',buffer:source},
    {name:'bad.webm',mimeType:'video/webm',buffer:Buffer.from('broken')},
    {name:'also-good.webm',mimeType:'video/webm',buffer:source},
  ]);
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcwmConvert').disabled,null,{timeout:90000});
  assert.equal(await page.locator('#bcwmList .bcwm-status.is-ok').count(),2);
  assert.equal(await page.locator('#bcwmList .bcwm-status.is-fail').count(),1);
  assert.match(await page.locator('#bcwmList').innerText(),/Could not read a usable WebM/);
  const oldLinks=await page.locator('#bcwmList button.btn-outline-primary').count();
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcwmConvert').disabled,null,{timeout:90000});
  assert.equal(await page.locator('#bcwmList button.btn-outline-primary').count(),oldLinks);
  console.log('partial success and retry kept completed MP4s');

  await page.click('#bcwmClear');
  const twenty=Array.from({length:20},(_,i)=>({name:'clip-'+i+'.webm',mimeType:'video/webm',buffer:source}));
  await page.setInputFiles('#bcwmFile',twenty);
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcwmConvert').disabled,null,{timeout:240000});
  assert.equal(await page.locator('#bcwmList .bcwm-status.is-ok').count(),20);
  console.log('20-file queue passed');
  await page.click('#bcwmClear');

  const large=path.join(dir,'large.webm');
  execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','testsrc2=size=640x360:rate=30:duration=90','-vf','noise=alls=50:allf=t+u','-c:v','libvpx-vp9','-deadline','realtime','-cpu-used','8','-b:v','12M','-maxrate','12M','-bufsize','24M','-an',large]);
  assert((await stat(large)).size>80*1024*1024);
  await page.setInputFiles('#bcwmFile',large);
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcwmConvert').disabled,null,{timeout:240000});
  assert.equal(await page.locator('#bcwmList .bcwm-status.is-ok').count(),1);
  const event=page.waitForEvent('download');
  await page.locator('#bcwmList button.btn-outline-primary').click();
  const outputPath=await (await event).path();
  const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name:format=duration','-of','json',outputPath],{encoding:'utf8'}));
  assert.equal(probe.streams[0].codec_name,'h264');
  assert(Number(probe.format.duration)>89);
  console.log('large >80 MiB WebM input downloaded as 90s H.264 MP4');
  const retainedOpfs=await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');for await(const name of d.keys())if(name.endsWith('.mp4'))return true;return false;});
  assert(retainedOpfs,'batch output was removed from OPFS before download');
  await page.click('#bcwmClear');
  assert(await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');for await(const name of d.keys())if(name.endsWith('.mp4'))return false;return true;}),'OPFS output was not removed by Clear');

  const noOpfs=await ctx.newPage();
  noOpfs.on('pageerror',e=>errors.push(e.message));
  await noOpfs.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));
  await noOpfs.goto(base+'/tools/'+slug);
  await noOpfs.waitForFunction(()=>document.querySelectorAll('#bcwmList .bcwm-status.is-ok').length===2,null,{timeout:90000});
  await noOpfs.click('#bcwmClear');
  await noOpfs.setInputFiles('#bcwmFile',large);
  await noOpfs.click('#bcwmConvert');
  await noOpfs.waitForFunction(()=>!document.querySelector('#bcwmConvert').disabled,null,{timeout:30000});
  assert.equal(await noOpfs.locator('#bcwmList .bcwm-status.is-fail').count(),1);
  assert.match(await noOpfs.locator('#bcwmList').innerText(),/80 MiB/);
  console.log('no-OPFS large-file guard passed');

  await page.setInputFiles('#bcwmFile',large);
  await page.click('#bcwmConvert');
  await page.click('#bcwmStop');
  await page.waitForFunction(()=>!document.querySelector('#bcwmConvert').disabled,null,{timeout:30000});
  assert.match(await page.locator('#bcwmList').innerText(),/Stopped/);
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bcwmList .bcwm-status.is-ok').length===1,null,{timeout:240000});
  console.log('stop and retry large item passed');

  const silent=path.join(dir,'silent.webm');
  execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-c:v','libvpx','-b:v','500k','-an',silent]);
  await page.click('#bcwmClear');
  await page.setInputFiles('#bcwmFile',silent);
  await page.click('#bcwmConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bcwmList .bcwm-status.is-ok').length===1,null,{timeout:90000});
  assert.match(await page.locator('#bcwmList').innerText(),/no audio/);
  const silentEvent=page.waitForEvent('download');
  await page.click('#bcwmDownload');
  const silentPath=await (await silentEvent).path();
  const silentProbe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name','-of','json',silentPath],{encoding:'utf8'}));
  assert.deepEqual(silentProbe.streams.map(x=>x.codec_name),['h264']);
  console.log('video-only WebM, primary download passed');

  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});
    await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
    assert.equal(await page.locator('h1').count(),1);
    assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
    if(lang==='ar')assert.equal(await page.locator('#bcwmPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
    await page.waitForFunction(()=>document.querySelectorAll('#bcwmList .bcwm-status.is-ok').length===2,null,{timeout:90000});
    const dl=page.waitForEvent('download');
    await page.locator('#bcwmList button.btn-outline-primary').first().click();
    const loc=await (await dl).path();
    const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name','-of','json',loc],{encoding:'utf8'}));
    assert.deepEqual(info.streams.map(x=>x.codec_name),['h264','aac']);
    console.log('locale mobile and real MP4',lang);
  }
  const racePage=await ctx.newPage();
  racePage.on('pageerror',e=>errors.push(e.message));
  await racePage.route('**/samples/convert-a-webm-file-to-an-mp4-file.webm',async route=>{
    await new Promise(resolve=>setTimeout(resolve,400));
    await route.fulfill({body:source,contentType:'video/webm'});
  });
  await racePage.goto(base+'/tools/'+slug);
  await racePage.setInputFiles('#bcwmFile',{name:'my-recording.webm',mimeType:'video/webm',buffer:source});
  await racePage.waitForTimeout(700);
  assert.equal(await racePage.locator('#bcwmList li').count(),1);
  assert.match(await racePage.locator('#bcwmList').innerText(),/my-recording\.webm/);
  console.log('slow automatic sample did not overwrite user input');
  assert.deepEqual(errors,[]);
} finally {await browser.close();await rm(dir,{recursive:true,force:true});}
