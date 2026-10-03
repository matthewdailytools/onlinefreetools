import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm,stat} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright-core';

const root=path.resolve('public'),slug='batch-normalize-audio-files-to-peak',base='http://localhost:41739';
const chrome=process.env.CHROMIUM_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const fixtureDir=await mkdtemp(path.join(tmpdir(),'batch-peak-'));
const longPath=path.join(fixtureDir,'four-minutes.mp3');
const shortPath=path.join(fixtureDir,'one-second.mp3');
execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','sine=frequency=440:duration=240','-ac','2','-c:a','libmp3lame','-b:a','128k',longPath]);
execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','sine=frequency=440:duration=1','-ac','2','-c:a','libmp3lame','-b:a','128k',shortPath]);
const browser=await chromium.launch({executablePath:chrome,headless:true,args:['--no-sandbox']});
const errors=[],unexpected=[];
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
  await page.waitForFunction(()=>document.querySelectorAll('#bnList li').length===2&&[...document.querySelectorAll('#bnList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),2,await page.locator('#bnList').innerText());
  const rows=await page.locator('#bnList li').allInnerTexts();
  assert(rows.every(row=>row.includes('dBFS')&&row.includes('gain')),rows.join('\n'));
  const gains=rows.map(row=>Number(row.match(/gain ([+-]?\d+\.\d+) dB/)?.[1]));
  assert(gains[0]>gains[1]+5,gains.join(','));
  let seed;
  for(const index of [0,1]){
    const event=page.waitForEvent('download');await page.locator('#bnList li').nth(index).locator('button').first().click();
    const download=await event;assert.equal(await download.failure(),null);
    const bytes=await readFile(await download.path());
    if(index===0)seed=bytes;
    assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');
    const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
    assert.equal(view.getUint16(20,true),1);assert.equal(view.getUint16(34,true),16);
    let peak=0;for(let at=44;at+1<bytes.length;at+=2)peak=Math.max(peak,Math.abs(view.getInt16(at,true)/32768));
    const db=20*Math.log10(peak);assert(db> -1.1&&db<-.9,`output ${index} peak ${db}`);
    console.log('PASS downloaded sample target peak',index,db,bytes.length);
  }
  const silent=Buffer.from(seed);silent.fill(0,44);
  const ogg=await readFile(path.join(root,'samples/convert-an-ogg-file-to-mp3.ogg'));
  await page.click('#bnClear');
  await page.setInputFiles('#bnFile',[
    {name:'valid.ogg',mimeType:'audio/ogg',buffer:ogg},
    {name:'valid.mp3',mimeType:'audio/mpeg',buffer:await readFile(shortPath)},
    {name:'silent.wav',mimeType:'audio/wav',buffer:silent},
    {name:'damaged.mp3',mimeType:'audio/mpeg',buffer:Buffer.from('broken MP3')},
  ]);
  await page.click('#bnConvert');
  await page.waitForFunction(()=>[...document.querySelectorAll('#bnList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),2);
  assert.equal(await page.locator('#bnList [data-status="failed"]').count(),2);
  assert((await page.locator('#bnList li').nth(2).innerText()).includes('silence'));
  await page.click('#bnRetry');await page.waitForFunction(()=>!document.querySelector('#bnConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),2);
  console.log('PASS OGG and ID3 MP3 plus silent WAV and damaged MP3, partial success and retry');
  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});
    await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
    await page.waitForFunction(()=>document.querySelectorAll('#bnList li').length===2&&[...document.querySelectorAll('#bnList li')].every(el=>el.dataset.status==='ready'),null,{timeout:60000});
    assert.equal(await page.locator('h1').count(),1);
    assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
    if(lang==='ar')assert.equal(await page.locator('#bnPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
    console.log('PASS locale mobile sample',lang);
  }
  await page.click('#bnClear');
  await page.setInputFiles('#bnFile',Array.from({length:20},()=>({name:'same-name.wav',mimeType:'audio/wav',buffer:seed})));
  await page.click('#bnConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===20,null,{timeout:120000});
  const one=page.waitForEvent('download');await page.locator('#bnList li').first().locator('button').first().click();
  const firstName=(await one).suggestedFilename();
  const two=page.waitForEvent('download');await page.locator('#bnList li').nth(1).locator('button').first().click();
  const secondName=(await two).suggestedFilename();
  assert.notEqual(firstName,secondName);
  console.log('PASS 20-file same-name queue and independent outputs');
  await page.click('#bnClear');
  await page.setInputFiles('#bnFile',Array.from({length:3},(_,i)=>({name:'stop-'+i+'.wav',mimeType:'audio/wav',buffer:seed})));
  await page.click('#bnConvert');await page.click('#bnStop');
  await page.waitForFunction(()=>!document.querySelector('#bnConvert').disabled,null,{timeout:30000});
  assert((await page.locator('#bnList [data-status="pending"]').count())>=1);
  assert((await page.locator('#bnList [data-status="ready"]').count())>=1);
  await page.click('#bnConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===3,null,{timeout:30000});
  console.log('PASS stop after current file and resume');
  await page.click('#bnClear');
  await page.setInputFiles('#bnFile',{name:'oversized.wav',mimeType:'audio/wav',buffer:Buffer.alloc(20*1024*1024+1)});
  await page.click('#bnConvert');await page.waitForFunction(()=>!document.querySelector('#bnConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bnList [data-status="failed"]').count(),1);
  console.log('PASS over-limit input rejected before decode');
  await page.click('#bnClear');
  await page.setInputFiles('#bnFile',{name:'target-change.wav',mimeType:'audio/wav',buffer:seed});
  await page.selectOption('#bnTarget','-6');
  await page.locator('#bnPanel details summary').click();
  await page.selectOption('#bnRate','48000');await page.selectOption('#bnChannels','mono');
  await page.click('#bnConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===1,null,{timeout:30000});
  const targetEvent=page.waitForEvent('download');await page.locator('#bnList li button').first().click();
  const targetBytes=await readFile(await (await targetEvent).path()),targetView=new DataView(targetBytes.buffer,targetBytes.byteOffset,targetBytes.byteLength);
  assert.equal(targetView.getUint16(22,true),1);assert.equal(targetView.getUint32(24,true),48000);
  let targetPeak=0;for(let at=44;at+1<targetBytes.length;at+=2)targetPeak=Math.max(targetPeak,Math.abs(targetView.getInt16(at,true)/32768));
  const targetDb=20*Math.log10(targetPeak);assert(targetDb>-6.1&&targetDb<-5.9,targetDb);
  console.log('PASS -6 dBFS target plus 48 kHz mono changes downloaded PCM',targetDb);
  await page.click('#bnClear');
  assert(await page.evaluate(()=>isSecureContext&&typeof navigator.storage?.getDirectory==='function'));
  await page.setInputFiles('#bnFile',{name:'four-minutes.mp3',mimeType:'audio/mpeg',buffer:await readFile(longPath)});
  await page.selectOption('#bnTarget','-1');await page.selectOption('#bnRate','44100');await page.selectOption('#bnChannels','keep');
  await page.click('#bnConvert');
  try{await page.waitForFunction(()=>[...document.querySelectorAll('#bnList li')].some(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:90000});}
  catch(error){
    const state=await page.evaluate(()=>({row:document.querySelector('#bnList')?.innerText,step:document.querySelector('#bnStep')?.textContent,pct:document.querySelector('#bnPct')?.textContent,seconds:document.querySelector('#bnTime')?.textContent})).catch(e=>({inspectionError:e.message}));
    console.log('LARGE INPUT STATE',state);throw error;
  }
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),1,await page.locator('#bnList').innerText());
  assert(await page.evaluate(async()=>{
    const root=await navigator.storage.getDirectory();
    for await(const [dirName,dir] of root.entries())if(dirName.startsWith('batch-peak-audio-'))
      for await(const name of dir.keys())if(name==='four-minutes-peak-normalized.wav')return true;
    return false;
  }));
  const longEvent=page.waitForEvent('download');await page.locator('#bnList li button').first().click();
  const longOutput=await (await longEvent).path();
  const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',longOutput],{encoding:'utf8'}));
  assert.equal(info.streams[0].codec_name,'pcm_s16le');assert.equal(info.streams[0].sample_rate,'44100');assert.equal(info.streams[0].channels,2);
  assert(Number(info.format.duration)>239&&Number(info.format.duration)<242);
  assert((await stat(longOutput)).size>40*1024*1024);
  console.log('PASS four-minute MP3 to >40 MiB normalized OPFS WAV',info.format.duration);
  await page.click('#bnClear');
  await page.waitForFunction(async()=>{
    const root=await navigator.storage.getDirectory();
    for await(const [dirName,dir] of root.entries())if(dirName.startsWith('batch-peak-audio-'))
      for await(const name of dir.keys())if(name==='four-minutes-peak-normalized.wav')return false;
    return true;
  },null,{timeout:30000});
  const memoryPage=await context.newPage();memoryPage.on('pageerror',e=>errors.push(e.message));
  await memoryPage.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));
  await memoryPage.goto(base+'/tools/'+slug);
  await memoryPage.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===2,null,{timeout:60000});
  await memoryPage.click('#bnClear');
  await memoryPage.setInputFiles('#bnFile',{name:'fallback.wav',mimeType:'audio/wav',buffer:seed});
  await memoryPage.click('#bnConvert');
  await memoryPage.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===1,null,{timeout:30000});
  const fallbackEvent=memoryPage.waitForEvent('download');await memoryPage.locator('#bnList li button').first().click();
  const fallbackBytes=await readFile(await (await fallbackEvent).path());assert.equal(fallbackBytes.toString('ascii',0,4),'RIFF');
  console.log('PASS OPFS cleanup and no-OPFS memory fallback');
  assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);
}finally{await browser.close();await rm(fixtureDir,{recursive:true,force:true});}
