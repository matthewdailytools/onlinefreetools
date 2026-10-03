import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright-core';

const root=path.resolve('public'), slug='batch-reduce-mp3-file-sizes', base='http://batch-reduce.test';
const chrome=process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
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
  await page.waitForFunction(()=>document.querySelectorAll('#bsList li').length===2&&[...document.querySelectorAll('#bsList li')].every(el=>['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#bsList [data-status="ready"]').count(),2,await page.locator('#bsList').innerText());
  const rows=await page.locator('#bsList li').allInnerTexts();
  assert(rows[0].includes('% smaller'),rows[0]);assert(rows[1].includes('Not smaller'),rows[1]);
  const event=page.waitForEvent('download');await page.locator('#bsList li').first().locator('button').first().click();
  const download=await event;assert.equal(await download.failure(),null);
  const bytes=await readFile(await download.path());
  const result=await page.evaluate(async data=>{
    const audio=await new OfflineAudioContext(2,1,44100).decodeAudioData(Uint8Array.from(data).buffer);
    let energy=0;const samples=audio.getChannelData(0);for(const x of samples)energy+=x*x;
    return {duration:audio.duration,energy:energy/samples.length};
  },Array.from(bytes));
  assert(result.duration>2.9&&result.duration<3.2&&result.energy>.00001);
  console.log('PASS generated high/low bitrate samples, measured saving/growth, downloaded non-silent MP3',rows,result);
  await page.setInputFiles('#bsFile',{name:'damaged.mp3',mimeType:'audio/mpeg',buffer:Buffer.from('bad MP3')});
  await page.click('#bsConvert');await page.waitForFunction(()=>!document.querySelector('#bsConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bsList [data-status="failed"]').count(),1);
  await page.click('#bsRetry');await page.waitForFunction(()=>!document.querySelector('#bsConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bsList [data-status="ready"]').count(),2);
  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});
    await page.goto(base+(lang==='en'?'':'/'+lang)+'/tools/'+slug);
    await page.waitForFunction(()=>document.querySelectorAll('#bsList li').length===2&&[...document.querySelectorAll('#bsList li')].every(el=>el.dataset.status==='ready'),null,{timeout:60000});
    assert.equal(await page.locator('h1').count(),1);
    assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+lang);
    if(lang==='ar')assert.equal(await page.locator('#bsPanel').evaluate(el=>getComputedStyle(el).direction),'rtl');
    console.log('PASS locale mobile sample',lang);
  }
  await page.click('#bsClear');
  await page.setInputFiles('#bsFile',Array.from({length:20},()=>({name:'same-name.mp3',mimeType:'audio/mpeg',buffer:bytes})));
  assert.equal(await page.locator('#bsList li').count(),20);
  await page.click('#bsConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bsList [data-status="ready"]').length===20,null,{timeout:120000});
  const firstEvent=page.waitForEvent('download');await page.locator('#bsList li').first().locator('button').first().click();
  const firstName=(await firstEvent).suggestedFilename();
  const secondEvent=page.waitForEvent('download');await page.locator('#bsList li').nth(1).locator('button').first().click();
  const secondName=(await secondEvent).suggestedFilename();
  assert.notEqual(firstName,secondName);
  console.log('PASS 20-file queue, same-name deduplication and individual downloads');
  await page.click('#bsClear');
  await page.setInputFiles('#bsFile',Array.from({length:3},(_,i)=>({name:'stop-'+i+'.mp3',mimeType:'audio/mpeg',buffer:bytes})));
  await page.click('#bsConvert');await page.click('#bsStop');
  await page.waitForFunction(()=>!document.querySelector('#bsConvert').disabled,null,{timeout:30000});
  assert((await page.locator('#bsList [data-status="pending"]').count())>=1);
  assert((await page.locator('#bsList [data-status="ready"]').count())>=1);
  await page.click('#bsConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bsList [data-status="ready"]').length===3,null,{timeout:60000});
  console.log('PASS stop after current file and resume pending files');
  await page.click('#bsClear');
  await page.setInputFiles('#bsFile',{name:'oversized.mp3',mimeType:'audio/mpeg',buffer:Buffer.alloc(40*1024*1024+1)});
  await page.click('#bsConvert');
  await page.waitForFunction(()=>!document.querySelector('#bsConvert').disabled,null,{timeout:30000});
  assert.equal(await page.locator('#bsList [data-status="failed"]').count(),1);
  console.log('PASS over-limit file rejected');
  await page.click('#bsClear');
  await page.setInputFiles('#bsFile',{name:'speech-stereo.mp3',mimeType:'audio/mpeg',buffer:bytes});
  await page.locator('#bsPanel details summary').click();
  await page.selectOption('#bsChannels','mono');
  await page.selectOption('#bsBitrate','96');
  await page.click('#bsConvert');
  await page.waitForFunction(()=>document.querySelectorAll('#bsList [data-status="ready"]').length===1,null,{timeout:30000});
  const monoEvent=page.waitForEvent('download');await page.locator('#bsList li button').first().click();
  const monoBytes=await readFile(await (await monoEvent).path());
  const monoChannels=await page.evaluate(async data=>(await new OfflineAudioContext(2,1,44100).decodeAudioData(Uint8Array.from(data).buffer)).numberOfChannels,Array.from(monoBytes));
  assert.equal(monoChannels,1);
  console.log('PASS stereo-to-mono setting changes downloaded MP3 channels');
  assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);
  console.log('PASS damaged input, retry and partial results; no unexpected network request');
}finally{await browser.close();}
