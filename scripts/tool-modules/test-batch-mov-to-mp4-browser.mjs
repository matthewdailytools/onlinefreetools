import assert from 'node:assert/strict';
import {readFile, mkdtemp, rm, stat} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {chromium} from 'playwright-core';

const root=path.resolve('public');
const slug='batch-convert-mov-files-to-mp4-files';
const base='http://localhost:41747';
const dir=await mkdtemp(path.join(tmpdir(),'batch-mov-test-'));
const ffmpeg=(args)=>execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error',...args]);
const probe=(file)=>JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,channels','-of','json',file],{encoding:'utf8'}));
const videoHash=(file)=>createHash('sha256').update(execFileSync('ffmpeg',['-nostdin','-v','error','-i',file,'-map','0:v:0','-c','copy','-f','h264','-'])).digest('hex');
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
      await route.fulfill({body,contentType:p.endsWith('.html')?'text/html; charset=utf-8':(p.endsWith('.js')||p.endsWith('.mjs'))?'application/javascript':p.endsWith('.css')?'text/css':p.endsWith('.mov')?'video/quicktime':'application/octet-stream'});
    }catch{await route.fulfill({status:404,body:'not found'});}
  });
  const page=await ctx.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/tools/'+slug);
  try {
    await page.waitForFunction(()=>document.querySelectorAll('#bcmvList .bcmv-status.is-ok').length===2,null,{timeout:90000});
  } catch (e) {
    const inspect=await page.evaluate(async()=>{try{const mod=await import('/vendor/mediabunny/mkv-to-mp4-loader.js');const blob=await (await fetch('/samples/convert-a-mov-file-to-an-mp4-file.mov')).blob();return {size:blob.size,info:await mod.inspectVideoFile(new File([blob],'sample.mov',{type:'video/quicktime'}))};}catch(e){return {message:e.message,stack:e.stack};}});
    console.log('auto sample debug',await page.locator('#bcmvHud').getAttribute('class'),await page.locator('#bcmvStep').innerText(),await page.locator('#bcmvList').innerText(),errors,inspect);
    throw e;
  }
  assert.equal(await page.locator('#bcmvList li').count(),2);
  const sampleButtons=page.locator('#bcmvList button.btn-outline-primary');
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
    assert.equal(videoHash(outputPath),videoHash(path.join(root,'samples','convert-a-mov-file-to-an-mp4-file.mov')));
  }
  assert.notEqual(names[0],names[1]);
  assert(await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');let n=0;for await(const name of d.keys())if(name.endsWith('.mp4'))n++;return n>=2;}),'batch results were copied out of OPFS');
  console.log('auto sample, duplicate names, two real MP4 downloads',names);

  const source=await readFile(path.join(root,'samples','convert-a-mov-file-to-an-mp4-file.mov'));
  await page.setInputFiles('#bcmvFile',{name:'later.mov',mimeType:'video/quicktime',buffer:source});
  assert.equal(await page.locator('#bcmvList button.btn-outline-primary').count(),2,'adding a file discarded earlier results');
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bcmvList .bcmv-status.is-ok').length===3,null,{timeout:90000});
  console.log('appending a new MOV kept earlier MP4s');
  await page.locator('#bcmvList li').nth(2).getByRole('button',{name:'Remove'}).click();
  assert.equal(await page.locator('#bcmvList button.btn-outline-primary').count(),2);
  console.log('removing one finished row kept the others');
  await page.click('#bcmvClear');
  await page.setInputFiles('#bcmvFile',[
    {name:'good.mov',mimeType:'video/quicktime',buffer:source},
    {name:'bad.mov',mimeType:'video/quicktime',buffer:Buffer.from('broken')},
    {name:'also-good.mov',mimeType:'video/quicktime',buffer:source},
  ]);
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:90000});
  assert.equal(await page.locator('#bcmvList .bcmv-status.is-ok').count(),2);
  assert.equal(await page.locator('#bcmvList .bcmv-status.is-fail').count(),1);
  assert.match(await page.locator('#bcmvList').innerText(),/Could not read a usable video track/);
  const oldLinks=await page.locator('#bcmvList button.btn-outline-primary').count();
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:90000});
  assert.equal(await page.locator('#bcmvList button.btn-outline-primary').count(),oldLinks);
  console.log('partial success and retry kept completed MP4s');

  const pcm=path.join(dir,'pcm.mov'),hevc=path.join(dir,'hevc.mov');
  ffmpeg(['-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-f','lavfi','-i','sine=frequency=440:duration=3','-c:v','libx264','-pix_fmt','yuv420p','-c:a','pcm_s16le',pcm]);
  ffmpeg(['-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-f','lavfi','-i','sine=frequency=440:duration=3','-c:v','libx265','-x265-params','log-level=error','-pix_fmt','yuv420p','-c:a','aac',hevc]);
  await page.click('#bcmvClear');
  await page.setInputFiles('#bcmvFile',[pcm,hevc]);
  await page.locator('#bcmvPanel details summary').click();
  await page.selectOption('#bcmvChannels','1');
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:90000});
  assert.equal(await page.locator('#bcmvList .bcmv-status.is-ok').count(),1);
  assert.equal(await page.locator('#bcmvList .bcmv-status.is-fail').count(),1);
  assert.match(await page.locator('#bcmvList').innerText(),/HEVC/);
  assert.match(await page.locator('#bcmvList').innerText(),/H.264 video copied/);
  const pcmEvent=page.waitForEvent('download');
  await page.locator('#bcmvList button.btn-outline-primary').click();
  const pcmOutput=await (await pcmEvent).path();
  assert.deepEqual(probe(pcmOutput).streams.map(s=>s.codec_name),['h264','aac']);
  assert.equal(probe(pcmOutput).streams[1].channels,1);
  assert.equal(videoHash(pcmOutput),videoHash(pcm));
  console.log('PCM to mono AAC with H.264 packet copy; HEVC row rejected without audio-only success');

  await page.click('#bcmvClear');
  const twenty=Array.from({length:20},(_,i)=>({name:'clip-'+i+'.mov',mimeType:'video/quicktime',buffer:source}));
  await page.setInputFiles('#bcmvFile',twenty);
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:240000});
  assert.equal(await page.locator('#bcmvList .bcmv-status.is-ok').count(),20);
  console.log('20-file queue passed');
  await page.click('#bcmvClear');

  const large=path.join(dir,'large.mov');
  execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','testsrc2=size=640x360:rate=30:duration=90','-vf','noise=alls=50:allf=t+u','-c:v','libx264','-preset','ultrafast','-b:v','12M','-maxrate','12M','-bufsize','24M','-an',large]);
  assert((await stat(large)).size>80*1024*1024);
  await page.setInputFiles('#bcmvFile',large);
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:240000});
  assert.equal(await page.locator('#bcmvList .bcmv-status.is-ok').count(),1);
  const event=page.waitForEvent('download');
  await page.locator('#bcmvList button.btn-outline-primary').click();
  const outputPath=await (await event).path();
  const largeProbe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name:format=duration','-of','json',outputPath],{encoding:'utf8'}));
  assert((await stat(outputPath)).size>80*1024*1024,'large OPFS output did not exceed 80 MiB');
  assert.equal(largeProbe.streams[0].codec_name,'h264');
  assert(Number(largeProbe.format.duration)>89);
  console.log('large >80 MiB MOV input downloaded as 90s H.264 MP4');
  const retainedOpfs=await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');for await(const name of d.keys())if(name.endsWith('.mp4'))return true;return false;});
  assert(retainedOpfs,'batch output was removed from OPFS before download');
  await page.click('#bcmvClear');
  assert(await page.evaluate(async()=>{const d=await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');for await(const name of d.keys())if(name.endsWith('.mp4'))return false;return true;}),'OPFS output was not removed by Clear');

  const noOpfs=await ctx.newPage();
  noOpfs.on('pageerror',e=>errors.push(e.message));
  await noOpfs.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));
  await noOpfs.goto(base+'/tools/'+slug);
  await noOpfs.waitForFunction(()=>document.querySelectorAll('#bcmvList .bcmv-status.is-ok').length===2,null,{timeout:90000});
  await noOpfs.click('#bcmvClear');
  await noOpfs.setInputFiles('#bcmvFile',large);
  await noOpfs.click('#bcmvConvert');
  await noOpfs.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:30000});
  assert.equal(await noOpfs.locator('#bcmvList .bcmv-status.is-fail').count(),1);
  assert.match(await noOpfs.locator('#bcmvList').innerText(),/80 MiB/);
  console.log('no-OPFS large-file guard passed');

  await page.setInputFiles('#bcmvFile',large);
  await page.click('#bcmvConvert');
  await page.click('#bcmvStop');
  await page.waitForFunction(()=>!document.querySelector('#bcmvConvert').disabled,null,{timeout:30000});
  assert.match(await page.locator('#bcmvList').innerText(),/Stopped/);
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bcmvList .bcmv-status.is-ok').length===1,null,{timeout:240000});
  console.log('stop and retry large item passed');

  const silent=path.join(dir,'silent.mov');
  execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','testsrc2=size=320x180:rate=24:duration=3','-c:v','libx264','-pix_fmt','yuv420p','-b:v','500k','-an',silent]);
  await page.click('#bcmvClear');
  await page.setInputFiles('#bcmvFile',silent);
  await page.click('#bcmvConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bcmvList .bcmv-status.is-ok').length===1,null,{timeout:90000});
  assert.match(await page.locator('#bcmvList').innerText(),/no audio/);
  const silentEvent=page.waitForEvent('download');
  await page.click('#bcmvDownload');
  const silentPath=await (await silentEvent).path();
  const silentProbe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name','-of','json',silentPath],{encoding:'utf8'}));
  assert.deepEqual(silentProbe.streams.map(x=>x.codec_name),['h264']);
  console.log('video-only MOV, primary download passed');

  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});
    await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
    assert.equal(await page.locator('h1').count(),1);
    assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
    if(lang==='ar')assert.equal(await page.locator('#bcmvPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
    await page.waitForFunction(()=>document.querySelectorAll('#bcmvList .bcmv-status.is-ok').length===2,null,{timeout:90000});
    const dl=page.waitForEvent('download');
    await page.locator('#bcmvList button.btn-outline-primary').first().click();
    const loc=await (await dl).path();
    const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_name','-of','json',loc],{encoding:'utf8'}));
    assert.deepEqual(info.streams.map(x=>x.codec_name),['h264','aac']);
    console.log('locale mobile and real MP4',lang);
  }
  const racePage=await ctx.newPage();
  racePage.on('pageerror',e=>errors.push(e.message));
  await racePage.route('**/samples/convert-a-mov-file-to-an-mp4-file.mov',async route=>{
    await new Promise(resolve=>setTimeout(resolve,400));
    await route.fulfill({body:source,contentType:'video/quicktime'});
  });
  await racePage.goto(base+'/tools/'+slug);
  await racePage.setInputFiles('#bcmvFile',{name:'my-recording.mov',mimeType:'video/quicktime',buffer:source});
  await racePage.waitForTimeout(700);
  assert.equal(await racePage.locator('#bcmvList li').count(),1);
  assert.match(await racePage.locator('#bcmvList').innerText(),/my-recording\.mov/);
  console.log('slow automatic sample did not overwrite user input');
  assert.deepEqual(errors,[]);
} finally {await browser.close();await rm(dir,{recursive:true,force:true});}
