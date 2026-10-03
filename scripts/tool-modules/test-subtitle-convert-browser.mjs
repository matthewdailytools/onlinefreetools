import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright-core';
import { parseSubtitle } from '../../public/js/subtitle-convert-engine.mjs';

const root = path.resolve('public');
const slug = 'convert-subtitle-files-between-srt-vtt-and-ass';
const base = 'http://localhost:41791';
const temp = await mkdtemp(path.join(tmpdir(), 'subtitle-convert-'));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'] });
try {
  const ctx = await browser.newContext({ acceptDownloads: true });
  await ctx.route('**/*', async (route) => {
    const u = new URL(route.request().url());
    if (u.protocol === 'blob:' || u.protocol === 'data:') return route.continue();
    if (u.origin !== base || route.request().method() !== 'GET') return route.abort();
    const m = u.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/' + slug + '$'));
    const p = m ? '/_pages/' + (m[1] || 'en') + '/tools/' + slug + '.html' : u.pathname;
    const f = path.resolve(root, '.' + p);
    if (!f.startsWith(root + path.sep)) return route.abort();
    try { await route.fulfill({ body: await readFile(f), contentType: p.endsWith('.html') ? 'text/html; charset=utf-8' : p.endsWith('.js') || p.endsWith('.mjs') ? 'application/javascript' : 'application/octet-stream' }); }
    catch { await route.fulfill({ status: 404, body: 'not found' }); }
  });
  const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const ready = async (count = 1) => page.waitForFunction((n) => document.querySelectorAll('#scRows tr').length >= n && !document.querySelector('#scConvert').disabled, count, { timeout: 120000 });
  const downloadRow = async (index = 0) => { const event = page.waitForEvent('download'); await page.locator('#scRows tr').nth(index).locator('button').click(); const file = await event; assert.equal(await file.failure(), null); return file.path(); };
  const srt = '1\n00:00:01,000 --> 00:00:03,000\nHello\n\n2\n00:00:04,000 --> 00:00:06,000\nWorld\n';
  await page.goto(base + '/tools/' + slug); await ready();
  let output = (await readFile(await downloadRow())).toString();
  assert(output.startsWith('WEBVTT\n')); assert.equal(parseSubtitle(output, 'vtt').cues.length, 2);
  assert.match(await page.locator('#scRows').innerText(), /2 cues/);
  console.log('automatic SRT sample to actual VTT download');
  await page.click('#scClear'); await page.setInputFiles('#scFile', { name: 'input.vtt', mimeType: 'text/vtt', buffer: Buffer.from(output) }); await page.selectOption('#scTarget', 'srt'); await page.click('#scConvert'); await ready();
  output = (await readFile(await downloadRow())).toString(); assert.match(output, /^1\n00:00:01,000 --> 00:00:03,000/m); assert.equal(parseSubtitle(output, 'srt').cues.length, 2);
  console.log('actual VTT to numbered SRT download');
  const styledVtt = 'WEBVTT\n\nintro\n00:00:01.000 --> 00:00:03.000 align:start\n<v Alice>Hello</v> <c.red>world</c>\n';
  await page.click('#scClear'); await page.setInputFiles('#scFile', { name: 'styled.vtt', mimeType: 'text/vtt', buffer: Buffer.from(styledVtt) }); await page.selectOption('#scTarget', 'srt'); await page.click('#scConvert'); await ready(); output = (await readFile(await downloadRow())).toString(); assert.match(output, /Hello world/); assert(!output.includes('<v') && !output.includes('<c.')); assert.match(await page.locator('#scRows').innerText(), /cue identifiers|cue settings/); console.log('VTT settings, identifier and voice/class markup reported and removed from SRT');
  for (const [extension, content] of [['ass', '[Script Info]\nScriptType: v4.00+\n[V4+ Styles]\nFormat: Name\nStyle: Default\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,{\\pos(10,10)}Hello'], ['ssa', '[Script Info]\nScriptType: v4.00\n[Events]\nFormat: Marked, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: Marked=0,0:00:01.00,0:00:03.00,Default,,0,0,0,,Hello'], ['sbv', '0:00:01.000,0:00:03.000\nHello\n'], ['lrc', '[00:01.00]Hello\n[00:04.00]World\n']]) {
    await page.click('#scClear'); await page.setInputFiles('#scFile', { name: 'input.' + extension, mimeType: 'text/plain', buffer: Buffer.from(content) }); await page.click('#scConvert'); await ready();
    const converted = (await readFile(await downloadRow())).toString(); assert(parseSubtitle(converted, 'srt').cues.length > 0, extension); console.log(extension, 'to downloadable SRT');
    if (extension === 'ass') assert.match(await page.locator('#scRows').innerText(), /style|position|override/i);
    if (extension === 'lrc') assert.match(await page.locator('#scRows').innerText(), /estimated/i);
  }
  const gb = execFileSync('python3', ['-c', "import sys;sys.stdout.buffer.write('1\\n00:00:01,000 --> 00:00:03,000\\n字幕\\n'.encode('gb18030'))"]);
  await page.click('#scClear'); await page.setInputFiles('#scFile', { name: 'gb.srt', mimeType: 'text/plain', buffer: gb }); await page.selectOption('#scTarget', 'vtt'); await page.locator('#scPanel details summary').click(); await page.selectOption('#scEncoding', 'gb18030'); await page.check('#scBom'); await page.click('#scConvert'); await ready();
  output = (await readFile(await downloadRow())).toString(); assert(output.startsWith('\uFEFFWEBVTT')); assert.match(output, /字幕/); console.log('GB18030 manual decode and UTF-8 BOM download');
  await page.click('#scClear'); await page.setInputFiles('#scFile', [{ name: 'ok.srt', mimeType: 'text/plain', buffer: Buffer.from(srt) }, { name: 'broken.srt', mimeType: 'text/plain', buffer: Buffer.from('nonsense') }, { name: 'ok.srt', mimeType: 'text/plain', buffer: Buffer.from(srt) }]); await page.click('#scConvert'); await ready(3);
  assert.equal(await page.locator('#scRows button').count(), 2); assert.match(await page.locator('#scRows').innerText(), /No valid|Unrecognized/);
  assert.equal(await page.locator('#scDownloadZip').isEnabled(), true);
  const zipEvent = page.waitForEvent('download'); await page.click('#scDownloadZip'); const zip = await zipEvent; assert.equal(await zip.failure(), null); const entries = execFileSync('unzip', ['-Z1', await zip.path()], { encoding: 'utf8' }).trim().split('\n'); assert.deepEqual(entries, ['ok.vtt', 'ok-2.vtt']);
  console.log('partial success, duplicate names and real ZIP entries');
  await page.click('#scClear'); await page.setInputFiles('#scFile', Array.from({ length: 30 }, (_, i) => ({ name: i === 12 ? 'damaged.srt' : `batch-${i}.srt`, mimeType: 'text/plain', buffer: Buffer.from(i === 12 ? 'broken cue' : srt) }))); await page.click('#scConvert'); await ready(30); assert.equal(await page.locator('#scRows tr').count(), 30); assert.equal(await page.locator('#scRows button').count(), 29); assert.equal(parseSubtitle((await readFile(await downloadRow(29))).toString(), 'vtt').cues.length, 2); console.log('30-file serial queue with one failure and last successful download');
  const large = path.join(temp, 'large.srt');
  const rows = 140000; let contents = ''; for (let i = 0; i < rows; i++) { const start = i * 3; const clock = (s) => `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; contents += `${i + 1}\n${clock(start)},000 --> ${clock(start + 2)},000\nCaption ${i} with repeated text to exercise a large file\n\n`; }
  await writeFile(large, contents); assert((await stat(large)).size > 10 * 1048576);
  await page.click('#scClear'); await page.setInputFiles('#scFile', large); await page.click('#scConvert'); const ping = Date.now(); await page.evaluate(() => performance.now()); assert(Date.now() - ping < 3000, 'worker keeps UI responsive'); await ready(); output = (await readFile(await downloadRow())).toString(); assert.equal(parseSubtitle(output, 'vtt').cues.length, rows); console.log('>10 MiB input, 140000 cues converted, downloaded and reparsed');
  await page.click('#scClear'); await page.setInputFiles('#scFile', large); await page.click('#scConvert'); await page.click('#scStop'); await page.waitForFunction(() => !document.querySelector('#scConvert').disabled, null, { timeout: 120000 }); await page.click('#scClear'); await page.setInputFiles('#scFile', { name: 'retry.srt', mimeType: 'text/plain', buffer: Buffer.from(srt) }); await page.click('#scConvert'); await ready(); assert.equal(parseSubtitle((await readFile(await downloadRow())).toString(), 'vtt').cues.length, 2); console.log('active stop and retry download');
  let firstTitle = '';
  for (const lang of process.env.ONLY_AR === '1' ? ['ar'] : ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) {
    await page.setViewportSize({ width: 390, height: 844 }); await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug); const title = await page.locator('h1').innerText(); if (lang === 'en') firstTitle = title; else assert.notEqual(title, firstTitle, 'English fallback ' + lang);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'mobile overflow ' + lang); if (lang === 'ar') assert.equal(await page.locator('#scPanel').evaluate((node) => getComputedStyle(node).direction), 'rtl'); await ready(); let localeFile; try { localeFile = await downloadRow(); } catch (error) { console.error('locale download failed', lang, 'page errors', errors, 'rows', await page.locator('#scRows').innerText()); throw error; } assert.equal(parseSubtitle((await readFile(localeFile)).toString(), 'vtt').cues.length, 2); console.log('mobile locale actual VTT download', lang);
  }
  assert.deepEqual(errors, []);
} finally { await browser.close(); await rm(temp, { recursive: true, force: true }); }
