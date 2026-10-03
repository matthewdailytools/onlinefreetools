import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm,stat} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright-core';

const root=path.resolve('public'),slug='batch-remove-silence-from-recordings',base='http://localhost:41739';
const chrome=process.env.CHROMIUM_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const fixtureDir=await mkdtemp(path.join(tmpdir(),'batch-silence-'));
const longPath=path.join(fixtureDir,'long-with-pause.mp3'),shortPath=path.join(fixtureDir,'short.mp3');
execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','sine=frequency=440:duration=285','-af',"volume=0:enable='between(t,120,135)'",'-ac','2','-c:a','libmp3lame','-b:a','128k',longPath]);
execFileSync('ffmpeg',['-nostdin','-y','-loglevel','error','-f','lavfi','-i','sine=frequency=440:duration=1','-ac','2','-c:a','libmp3lame','-b:a','128k',shortPath]);
function makeWav(seconds=3,gaps=[]){
  const rate=44100,frames=Math.round(rate*seconds),bytes=Buffer.alloc(44+frames*4);const tag=(at,str)=>bytes.write(str,at,'ascii');
  tag(0,'RIFF');bytes.writeUInt32LE(bytes.length-8,4);tag(8,'WAVE');tag(12,'fmt ');bytes.writeUInt32LE(16,16);
  bytes.writeUInt16LE(1,20);bytes.writeUInt16LE(2,22);bytes.writeUInt32LE(rate,24);bytes.writeUInt32LE(rate*4,28);bytes.writeUInt16LE(4,32);bytes.writeUInt16LE(16,34);
  tag(36,'data');bytes.writeUInt32LE(frames*4,40);
  for(let i=0;i<frames;i++){const time=i/rate;const value=gaps.some(([a,b])=>time>=a&&time<b)?0:Math.round(Math.sin(2*Math.PI*440*time)*.3*32767);bytes.writeInt16LE(value,44+i*4);bytes.writeInt16LE(value,46+i*4);}
  return bytes;
}
const wav=makeWav(),twoGaps=makeWav(3,[[.45,1.05],[1.7,2.5]]),silent=Buffer.from(wav);silent.fill(0,44);
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
    const target=path.resolve(root,'.'+mapped);if(!target.startsWith(root+path.sep))return route.abort();
    try{const body=await readFile(target);await route.fulfill({body,contentType:mapped.endsWith('.html')?'text/html; charset=utf-8':mapped.endsWith('.js')?'application/javascript':mapped.endsWith('.css')?'text/css':'application/octet-stream'});}
    catch{await route.fulfill({status:404,body:'not found'});}
  });
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/tools/'+slug);
  await page.waitForFunction(()=>document.querySelectorAll('#bnList li').length===2&&[...document.querySelectorAll('#bnList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),2,await page.locator('#bnList').innerText());
  const rows=await page.locator('#bnList li').allInnerTexts();assert(rows[0].includes('3.00s → 2.30s')&&rows[1].includes('3.00s → 1.90s'),rows.join('\n'));
  await page.locator('#bnList li').first().getByRole('button',{name:'Listen to result'}).click();
  assert.equal(await page.locator('#bnList audio').count(),1);
  assert(!(await page.locator('#bnHud').getAttribute('class')).includes('is-error'),'preview playback reported an error');
  for(const [i,expected] of [[0,2.3],[1,1.9]]){
    const event=page.waitForEvent('download');await page.locator('#bnList li').nth(i).getByRole('button',{name:'Download WAV'}).click();
    const d=await event;assert.equal(await d.failure(),null);const b=await readFile(await d.path());
    assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WAVE');
    assert.equal(b.readUInt16LE(20),1);assert.equal(b.readUInt16LE(34),16);
    assert(Math.abs(b.readUInt32LE(40)/4/44100-expected)<.03);
    assert(b.subarray(44).some(byte=>byte!==0));console.log('PASS sample WAV',i,expected,b.length);
  }
  await page.click('#bnClear');await page.setInputFiles('#bnFile',{name:'two-gaps.wav',mimeType:'audio/wav',buffer:twoGaps});
  await page.locator('#bnPanel details summary').click();await page.selectOption('#bnMin','0.7');await page.selectOption('#bnKeep','0.25');
  await page.click('#bnConvert');await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===1,null,{timeout:30000});
  const settingText=await page.locator('#bnList li').innerText();assert(settingText.includes('3.00s → 2.45s'),settingText);
  const setEvent=page.waitForEvent('download');await page.locator('#bnList li button').nth(1).click();const setBytes=await readFile(await (await setEvent).path());assert(Math.abs(setBytes.readUInt32LE(40)/4/44100-2.45)<.03);
  console.log('PASS minimum pause and retained gap change actual downloaded duration');
  await page.click('#bnClear');await page.setInputFiles('#bnFile',{name:'no-long-gap.wav',mimeType:'audio/wav',buffer:wav});await page.click('#bnConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===1,null,{timeout:30000});assert((await page.locator('#bnList li').innerText()).includes('removed 0.00s'));
  console.log('PASS no qualifying pause reports zero removal');
  const ogg=await readFile(path.join(root,'samples/convert-an-ogg-file-to-mp3.ogg'));
  await page.click('#bnClear');await page.setInputFiles('#bnFile',[
    {name:'valid.ogg',mimeType:'audio/ogg',buffer:ogg},{name:'valid.mp3',mimeType:'audio/mpeg',buffer:await readFile(shortPath)},
    {name:'silent.wav',mimeType:'audio/wav',buffer:silent},{name:'damaged.mp3',mimeType:'audio/mpeg',buffer:Buffer.from('broken MP3')}
  ]);await page.click('#bnConvert');
  await page.waitForFunction(()=>[...document.querySelectorAll('#bnList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),2,await page.locator('#bnList').innerText());assert.equal(await page.locator('#bnList [data-status="failed"]').count(),2);
  await page.click('#bnRetry');await page.waitForFunction(()=>!document.querySelector('#bnConvert').disabled,null,{timeout:30000});assert.equal(await page.locator('#bnList [data-status="ready"]').count(),2);
  console.log('PASS OGG plus ID3 MP3 with silent and damaged files, partial success and retry');
  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
    await page.waitForFunction(()=>document.querySelectorAll('#bnList li').length===2&&[...document.querySelectorAll('#bnList li')].every(el=>el.dataset.status==='ready'),null,{timeout:60000});
    assert.equal(await page.locator('h1').count(),1);assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'overflow '+lang);
    if(lang==='ar')assert.equal(await page.locator('#bnPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
    console.log('PASS locale mobile sample',lang);
  }
  await page.click('#bnClear');await page.setInputFiles('#bnFile',Array.from({length:20},()=>({name:'same.wav',mimeType:'audio/wav',buffer:wav})));
  await page.click('#bnConvert');await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===20,null,{timeout:120000});
  const event1=page.waitForEvent('download');await page.locator('#bnList li').first().locator('button').nth(1).click();const name1=(await event1).suggestedFilename();
  const event2=page.waitForEvent('download');await page.locator('#bnList li').nth(1).locator('button').nth(1).click();const name2=(await event2).suggestedFilename();assert.notEqual(name1,name2);
  console.log('PASS 20 same-name inputs and independent outputs');
  await page.click('#bnClear');await page.setInputFiles('#bnFile',Array.from({length:3},(_,i)=>({name:'stop-'+i+'.wav',mimeType:'audio/wav',buffer:wav})));
  await page.click('#bnConvert');await page.click('#bnStop');await page.waitForFunction(()=>!document.querySelector('#bnConvert').disabled,null,{timeout:30000});
  assert((await page.locator('#bnList [data-status="pending"]').count())>=1);await page.click('#bnConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===3,null,{timeout:30000});console.log('PASS stop and resume');
  await page.click('#bnClear');await page.setInputFiles('#bnFile',{name:'oversized.wav',mimeType:'audio/wav',buffer:Buffer.alloc(20*1024*1024+1)});
  await page.click('#bnConvert');await page.waitForFunction(()=>!document.querySelector('#bnConvert').disabled,null,{timeout:30000});assert.equal(await page.locator('#bnList [data-status="failed"]').count(),1);
  console.log('PASS over-limit input rejected before decode');
  await page.click('#bnClear');assert(await page.evaluate(()=>isSecureContext&&typeof navigator.storage?.getDirectory==='function'));
  await page.setInputFiles('#bnFile',{name:'long-with-pause.mp3',mimeType:'audio/mpeg',buffer:await readFile(longPath)});
  await page.click('#bnConvert');await page.waitForFunction(()=>[...document.querySelectorAll('#bnList li')].some(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:120000});
  assert.equal(await page.locator('#bnList [data-status="ready"]').count(),1,await page.locator('#bnList').innerText());
  assert(await page.evaluate(async()=>{const root=await navigator.storage.getDirectory();for await(const [name,dir] of root.entries())if(name.startsWith('batch-silence-audio-'))for await(const file of dir.keys())if(file==='long-with-pause-pauses-shortened.wav')return true;return false;}));
  const longEvent=page.waitForEvent('download');await page.locator('#bnList li button').nth(1).click();const output=await (await longEvent).path();
  const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',output],{encoding:'utf8'}));
  assert.equal(info.streams[0].codec_name,'pcm_s16le');assert.equal(info.streams[0].sample_rate,'44100');assert.equal(info.streams[0].channels,2);
  assert(Number(info.format.duration)>269&&Number(info.format.duration)<271,JSON.stringify(info));assert((await stat(output)).size>40*1024*1024);
  console.log('PASS 285-second MP3 with 15-second gap to >40 MiB OPFS WAV',info.format.duration);
  await page.click('#bnClear');await page.waitForFunction(async()=>{const root=await navigator.storage.getDirectory();for await(const [name,dir] of root.entries())if(name.startsWith('batch-silence-audio-'))for await(const file of dir.keys())if(file==='long-with-pause-pauses-shortened.wav')return false;return true;},null,{timeout:30000});
  const memoryPage=await context.newPage();memoryPage.on('pageerror',e=>errors.push(e.message));
  await memoryPage.addInitScript(()=>Object.defineProperty(navigator.storage,'getDirectory',{value:undefined}));await memoryPage.goto(base+'/tools/'+slug);
  await memoryPage.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===2,null,{timeout:60000});
  await memoryPage.click('#bnClear');await memoryPage.setInputFiles('#bnFile',{name:'fallback.wav',mimeType:'audio/wav',buffer:wav});await memoryPage.click('#bnConvert');
  await memoryPage.waitForFunction(()=>document.querySelectorAll('#bnList [data-status="ready"]').length===1,null,{timeout:30000});
  const fallbackEvent=memoryPage.waitForEvent('download');await memoryPage.locator('#bnList li button').nth(1).click();const fallback=await readFile(await (await fallbackEvent).path());assert.equal(fallback.toString('ascii',0,4),'RIFF');
  console.log('PASS OPFS cleanup and memory fallback');assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);
}finally{await browser.close();await rm(fixtureDir,{recursive:true,force:true});}
