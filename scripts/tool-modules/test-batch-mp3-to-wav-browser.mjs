import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm,stat} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright-core';

const root=path.resolve('public'), slug='batch-convert-mp3-files-to-wav', base='http://localhost:41738';
const chrome=process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const fixtureDir=await mkdtemp(path.join(tmpdir(),'batch-mp3-wav-'));
const shortPath=path.join(fixtureDir,'short.mp3'),longPath=path.join(fixtureDir,'four-minutes.mp3');
for(const [seconds,target] of [[1,shortPath],[240,longPath]])
  execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','sine=frequency=440:duration='+seconds,'-ac','2','-c:a','libmp3lame','-b:a','128k',target]);
const browser=await chromium.launch({executablePath:chrome,headless:true,args:['--no-sandbox']});
const errors=[], unexpected=[];
try{
  const context=await browser.newContext({acceptDownloads:true});
  await context.route('**/*',async route=>{
    const url=new URL(route.request().url());
    if(['blob:','data:'].includes(url.protocol))return route.continue();
    if(url.origin==='https://www.clarity.ms'&&url.pathname.startsWith('/tag/'))return route.abort();
    if(url.origin!==base||route.request().method()!=='GET'){unexpected.push(url.href);return route.abort();}
    const match=url.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/'+slug+'$'));
    const mapped=match?'/_pages/'+(match[1]||'en')+'/tools/'+slug+'.html':url.pathname;
    const target=path.resolve(root,'.'+mapped);
    if(!target.startsWith(root+path.sep))return route.abort();
    try{const body=await readFile(target);await route.fulfill({body,contentType:mapped.endsWith('.html')?'text/html; charset=utf-8':mapped.endsWith('.js')?'application/javascript':mapped.endsWith('.css')?'text/css':'application/octet-stream'});}
    catch{await route.fulfill({status:404,body:'not found'});}
  });
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/tools/'+slug);
  await page.waitForFunction(()=>document.querySelectorAll('#bwList li').length===2&&[...document.querySelectorAll('#bwList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#bwList [data-status="ready"]').count(),2,await page.locator('#bwList').innerText());
  const event=page.waitForEvent('download');await page.locator('#bwList li').first().locator('button').first().click();
  const download=await event;assert.equal(await download.failure(),null);
  assert(download.suggestedFilename().endsWith('.wav'));
  const bytes=await readFile(await download.path());
  assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');
  const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
  assert.equal(view.getUint16(20,true),1);assert.equal(view.getUint16(22,true),2);
  assert.equal(view.getUint32(24,true),44100);assert.equal(view.getUint16(34,true),16);
  assert.equal(view.getUint32(40,true)+44,bytes.length);
  const decoded=await page.evaluate(async data=>{
    const a=await new OfflineAudioContext(2,1,44100).decodeAudioData(Uint8Array.from(data).buffer);
    const pcm=a.getChannelData(0);let energy=0;for(const x of pcm)energy+=x*x;
    return {duration:a.duration,channels:a.numberOfChannels,energy:energy/pcm.length};
  },Array.from(bytes));
  assert(decoded.duration>2.9&&decoded.duration<3.2&&decoded.energy>.00001,JSON.stringify(decoded));
  console.log('PASS built-in MP3 queue to separately downloaded, non-silent 16-bit PCM WAV',bytes.length,decoded);
  const short=await readFile(shortPath);
  await page.click('#bwClear');
  await page.setInputFiles('#bwFile',[{name:'short.mp3',mimeType:'audio/mpeg',buffer:short},{name:'damaged.mp3',mimeType:'audio/mpeg',buffer:Buffer.from('broken MP3')}]);
  await page.click('#bwConvert');
  await page.waitForFunction(()=>[...document.querySelectorAll('#bwList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:30000});
  assert.equal(await page.locator('#bwList [data-status="ready"]').count(),1);
  assert.equal(await page.locator('#bwList [data-status="failed"]').count(),1);
  await page.click('#bwRetry');await page.waitForFunction(()=>!document.querySelector('#bwConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bwList [data-status="failed"]').count(),1);
  console.log('PASS valid plus damaged MP3, partial success and failed-row retry');
  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});
    await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
    await page.waitForFunction(()=>document.querySelectorAll('#bwList li').length===2&&[...document.querySelectorAll('#bwList li')].every(el=>el.dataset.status==='ready'),null,{timeout:60000});
    assert.equal(await page.locator('h1').count(),1);
    assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
    if(lang==='ar')assert.equal(await page.locator('#bwPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
    console.log('PASS locale mobile sample',lang);
  }
  await page.click('#bwClear');
  await page.setInputFiles('#bwFile',Array.from({length:20},()=>({name:'same-name.mp3',mimeType:'audio/mpeg',buffer:short})));
  await page.click('#bwConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bwList [data-status="ready"]').length===20,null,{timeout:120000});
  const one=page.waitForEvent('download');await page.locator('#bwList li').first().locator('button').first().click();
  const firstName=(await one).suggestedFilename();
  const two=page.waitForEvent('download');await page.locator('#bwList li').nth(1).locator('button').first().click();
  const secondName=(await two).suggestedFilename();
  assert.notEqual(firstName,secondName);
  console.log('PASS 20-file queue, same-name deduplication and individual WAV downloads');
  await page.click('#bwClear');
  await page.setInputFiles('#bwFile',Array.from({length:3},(_,i)=>({name:'stop-'+i+'.mp3',mimeType:'audio/mpeg',buffer:short})));
  await page.click('#bwConvert');await page.click('#bwStop');
  await page.waitForFunction(()=>!document.querySelector('#bwConvert').disabled,null,{timeout:30000});
  assert((await page.locator('#bwList [data-status="pending"]').count())>=1);
  assert((await page.locator('#bwList [data-status="ready"]').count())>=1);
  await page.click('#bwConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bwList [data-status="ready"]').length===3,null,{timeout:30000});
  console.log('PASS stop after current file and resume');
  await page.click('#bwClear');
  await page.setInputFiles('#bwFile',{name:'oversized.mp3',mimeType:'audio/mpeg',buffer:Buffer.alloc(20*1024*1024+1)});
  await page.click('#bwConvert');await page.waitForFunction(()=>!document.querySelector('#bwConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bwList [data-status="failed"]').count(),1);
  console.log('PASS over-limit input rejected before decode');
  await page.click('#bwClear');
  await page.setInputFiles('#bwFile',{name:'mono-input.mp3',mimeType:'audio/mpeg',buffer:short});
  await page.locator('#bwPanel details summary').click();
  await page.selectOption('#bwRate','48000');await page.selectOption('#bwChannels','mono');
  await page.click('#bwConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bwList [data-status="ready"]').length===1,null,{timeout:30000});
  const monoEvent=page.waitForEvent('download');await page.locator('#bwList li button').first().click();
  const mono=await readFile(await (await monoEvent).path()),monoView=new DataView(mono.buffer,mono.byteOffset,mono.byteLength);
  assert.equal(monoView.getUint16(22,true),1);assert.equal(monoView.getUint32(24,true),48000);
  console.log('PASS 48 kHz mono setting changes downloaded WAV header');
  await page.click('#bwClear');
  assert(await page.evaluate(()=>isSecureContext&&typeof navigator.storage?.getDirectory==='function'));
  await page.setInputFiles('#bwFile',{name:'four-minutes.mp3',mimeType:'audio/mpeg',buffer:await readFile(longPath)});
  await page.selectOption('#bwRate','44100');await page.selectOption('#bwChannels','keep');
  await page.click('#bwConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bwList [data-status="ready"]').length===1,null,{timeout:180000});
  const opfsOutput=await page.evaluate(async()=>{
    const root=await navigator.storage.getDirectory();
    for await(const [dirName,dir] of root.entries())if(dirName.startsWith('batch-mp3-wav-'))
      for await(const name of dir.keys())if(name==='four-minutes.wav')return true;
    return false;
  });
  assert(opfsOutput,'large WAV was not written to OPFS');
  const longEvent=page.waitForEvent('download');await page.locator('#bwList li button').first().click();
  const longDownload=await longEvent,longOutput=await longDownload.path();
  const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',longOutput],{encoding:'utf8'}));
  assert.equal(info.streams[0].codec_name,'pcm_s16le');assert.equal(info.streams[0].sample_rate,'44100');assert.equal(info.streams[0].channels,2);
  assert(Number(info.format.duration)>239&&Number(info.format.duration)<242);
  assert((await stat(longOutput)).size>40*1024*1024);
  console.log('PASS four-minute real MP3 to >40 MiB OPFS WAV, ffprobe validated',info.format.duration);
  await page.click('#bwClear');
  await page.waitForFunction(async()=>{
    const root=await navigator.storage.getDirectory();
    for await(const [dirName,dir] of root.entries())if(dirName.startsWith('batch-mp3-wav-'))
      for await(const name of dir.keys())if(name==='four-minutes.wav')return false;
    return true;
  },null,{timeout:30000});
  console.log('PASS OPFS result removed after clear');
  const memoryPage=await context.newPage();memoryPage.on('pageerror',e=>errors.push(e.message));
  await memoryPage.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));
  await memoryPage.goto(base+'/tools/'+slug);
  await memoryPage.waitForFunction(()=>document.querySelectorAll('#bwList [data-status="ready"]').length===2,null,{timeout:60000});
  await memoryPage.click('#bwClear');
  await memoryPage.setInputFiles('#bwFile',{name:'fallback.mp3',mimeType:'audio/mpeg',buffer:short});
  await memoryPage.click('#bwConvert');
  await memoryPage.waitForFunction(()=>document.querySelectorAll('#bwList [data-status="ready"]').length===1,null,{timeout:30000});
  const fallbackEvent=memoryPage.waitForEvent('download');await memoryPage.locator('#bwList li button').first().click();
  const fallbackBytes=await readFile(await (await fallbackEvent).path());
  assert.equal(fallbackBytes.toString('ascii',0,4),'RIFF');
  console.log('PASS memory fallback creates downloadable WAV without OPFS');
  assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);
}finally{await browser.close();await rm(fixtureDir,{recursive:true,force:true});}
