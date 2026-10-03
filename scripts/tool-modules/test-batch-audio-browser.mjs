import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright-core';

const root = path.resolve('public');
const slug = 'batch-convert-audio-files-to-mp3';
const base = 'http://batch-audio.test';
const chrome = process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({executablePath:chrome, headless:true, args:['--no-sandbox']});
const errors = [], unexpected = [];
try{
  const context = await browser.newContext({acceptDownloads:true});
  await context.route('**/*', async route => {
    const url = new URL(route.request().url());
    if(url.protocol === 'blob:' || url.protocol === 'data:') return route.continue();
    if(url.origin === 'https://www.clarity.ms' && url.pathname.startsWith('/tag/')) return route.abort();
    if(url.origin !== base || route.request().method() !== 'GET'){
      unexpected.push(route.request().url()); return route.abort();
    }
    const match = url.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/' + slug + '$'));
    const mapped = match ? '/_pages/' + (match[1] || 'en') + '/tools/' + slug + '.html' : url.pathname;
    const target = path.resolve(root, '.' + mapped);
    if(!target.startsWith(root + path.sep)) return route.abort();
    try{
      const body = await readFile(target);
      const contentType = mapped.endsWith('.html') ? 'text/html; charset=utf-8' : mapped.endsWith('.js') ? 'application/javascript' : mapped.endsWith('.css') ? 'text/css' : mapped.endsWith('.svg') ? 'image/svg+xml' : 'application/octet-stream';
      await route.fulfill({body, contentType});
    }catch{ await route.fulfill({status:404, body:'not found'}); }
  });
  const page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
  await page.goto(base + '/tools/' + slug);
  await page.waitForFunction(() => document.querySelectorAll('#baList [data-status="ready"]').length + document.querySelectorAll('#baList [data-status="failed"]').length === 2, null, {timeout:60000});
  const sampleRows = await page.locator('#baList li').count();
  const ready = await page.locator('#baList [data-status="ready"]').count();
  assert.equal(sampleRows, 2);
  assert(ready >= 1, 'At least one built-in format must convert; page errors: ' + errors.join('; '));
  const firstDownload = page.waitForEvent('download');
  await page.locator('#baList [data-status="ready"] button').first().click();
  const downloaded = await firstDownload;
  assert.equal(await downloaded.failure(), null);
  assert(downloaded.suggestedFilename().endsWith('.mp3'));
  const output = await readFile(await downloaded.path());
  assert(output.length > 1000);
  const decoded = await page.evaluate(async bytes => {
    const input = Uint8Array.from(bytes).buffer;
    const audio = await new OfflineAudioContext(2,1,44100).decodeAudioData(input);
    const channel = audio.getChannelData(0);
    let energy = 0; for(let i=0;i<channel.length;i++) energy += channel[i]*channel[i];
    return {duration:audio.duration, energy:energy/channel.length};
  }, Array.from(output));
  assert(decoded.duration > 1 && decoded.energy > .00001, JSON.stringify(decoded));
  console.log('PASS built-in mixed sample and downloaded, decoded non-silent MP3', {sampleRows,ready,size:output.length,...decoded});

  const ogg = await readFile(path.join(root,'samples/convert-an-ogg-file-to-mp3.ogg'));
  await page.setInputFiles('#baFile', [
    {name:'sound.ogg',mimeType:'audio/ogg',buffer:ogg},
    {name:'damaged.m4a',mimeType:'audio/mp4',buffer:Buffer.from('not an audio file')},
  ]);
  await page.click('#baConvert');
  await page.waitForFunction(() => [...document.querySelectorAll('#baList li')].slice(-2).every(el => ['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
  assert.equal(await page.locator('#baList [data-status="failed"]').count(),1);
  assert((await page.locator('#baList [data-status="ready"]').count()) >= ready);
  console.log('PASS mixed OGG + damaged M4A, partial success and row error');
  await page.click('#baRetry');
  await page.waitForFunction(() => !document.querySelector('#baConvert').disabled, null, {timeout:30000});
  assert.equal(await page.locator('#baList [data-status="failed"]').count(),1);
  for(const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']){
    await page.setViewportSize({width:390,height:844});
    await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug);
    await page.waitForFunction(() => [...document.querySelectorAll('#baList li')].length === 2 && [...document.querySelectorAll('#baList li')].every(el => ['ready','failed'].includes(el.dataset.status)),null,{timeout:60000});
    assert.equal(await page.locator('h1').count(),1);
    assert(!(await page.locator('h1').innerText()).includes('tool_batch_'));
    if(lang !== 'en') assert.notEqual(await page.locator('h1').innerText(), 'Batch convert mixed audio files to MP3');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'horizontal overflow ' + lang);
    if(lang === 'ar') assert.equal(await page.locator('#baPanel').evaluate(el => getComputedStyle(el).direction),'rtl');
    console.log('PASS locale mobile sample',lang);
  }
  const m4a = await readFile(path.join(root,'samples/convert-an-m4a-file-to-mp3.m4a'));
  await page.click('#baClear');
  await page.setInputFiles('#baFile', Array.from({length:20}, () => ({name:'same-name.m4a',mimeType:'audio/mp4',buffer:m4a})));
  assert.equal(await page.locator('#baList li').count(),20);
  await page.click('#baConvert');
  await page.waitForFunction(() => document.querySelectorAll('#baList [data-status="ready"]').length === 20, null, {timeout:120000});
  const one = page.waitForEvent('download'); await page.locator('#baList li').first().locator('button').first().click();
  const firstName = (await one).suggestedFilename();
  const two = page.waitForEvent('download'); await page.locator('#baList li').nth(1).locator('button').first().click();
  const secondName = (await two).suggestedFilename();
  assert.notEqual(firstName,secondName);
  console.log('PASS 20-file mixed queue, same-name deduplication and individual downloads');
  await page.click('#baClear');
  assert.equal(await page.locator('#baList li').count(),0);
  await page.setInputFiles('#baFile', Array.from({length:3}, (_,i) => ({name:'stop-'+i+'.m4a',mimeType:'audio/mp4',buffer:m4a})));
  await page.click('#baConvert'); await page.click('#baStop');
  await page.waitForFunction(() => !document.querySelector('#baConvert').disabled, null, {timeout:30000});
  assert((await page.locator('#baList [data-status="pending"]').count()) >= 1);
  assert((await page.locator('#baList [data-status="ready"]').count()) >= 1);
  await page.click('#baConvert');
  await page.waitForFunction(() => document.querySelectorAll('#baList [data-status="ready"]').length === 3, null, {timeout:60000});
  console.log('PASS stop after current file and resume pending files');
  await page.click('#baClear');
  await page.setInputFiles('#baFile',{name:'oversized.m4a',mimeType:'audio/mp4',buffer:Buffer.alloc(40*1024*1024+1)});
  await page.click('#baConvert');
  await page.waitForFunction(() => !document.querySelector('#baConvert').disabled, null, {timeout:30000});
  assert.equal(await page.locator('#baList [data-status="failed"]').count(),1);
  console.log('PASS over-limit file rejected without conversion');
  assert.deepEqual(errors, []);
  assert.deepEqual(unexpected, []);
  console.log('PASS failed-file retry; no unexpected network request or page exception');
}finally{ await browser.close(); }
