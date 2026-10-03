import assert from 'node:assert/strict';
import { readFile, mkdtemp, rm, writeFile, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright-core';
import { parseLines, buildLrc } from '../../public/js/lyric-sync-core.mjs';
const root = path.resolve('public'); const slug = 'sync-song-lyrics-to-lrc-by-tapping'; const base = 'http://localhost:41795';
const temp = await mkdtemp(path.join(tmpdir(), 'lyric-sync-'));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'] });
try {
 const ctx = await browser.newContext({ acceptDownloads: true });
 await ctx.route('**/*', async (route) => { const u = new URL(route.request().url()); if (u.protocol === 'blob:' || u.protocol === 'data:') return route.continue(); if (u.origin !== base || route.request().method() !== 'GET') return route.abort(); const m = u.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/' + slug + '$')); const p = m ? '/_pages/' + (m[1] || 'en') + '/tools/' + slug + '.html' : u.pathname; const f = path.resolve(root, '.' + p); if (!f.startsWith(root + path.sep)) return route.abort(); try { await route.fulfill({ body: await readFile(f), contentType: p.endsWith('.html') ? 'text/html; charset=utf-8' : p.endsWith('.mjs') || p.endsWith('.js') ? 'application/javascript' : p.endsWith('.wav') ? 'audio/wav' : 'application/octet-stream' }); } catch { await route.fulfill({ status: 404, body: 'not found' }); } });
 const page = await ctx.newPage(); const errors = []; page.on('pageerror', (e) => errors.push(e.message));
 const download = async () => { const event = page.waitForEvent('download'); await page.locator('#lsDownload').click(); const result = await event; assert.equal(await result.failure(), null); return (await readFile(await result.path())).toString().replace(/^\ufeff/, ''); };
 await page.goto(base + '/tools/' + slug);
 await page.waitForFunction(() => document.querySelector('#lsDownload')?.disabled === false);
 let file = await download(); assert.deepEqual(file.split('\n').filter(Boolean).map((row) => row.slice(0, 10)), ['[00:00.00]','[00:01.00]','[00:02.00]','[00:03.00]']);
 assert(await page.locator('#lsAudio').evaluate((audio) => audio.duration >= 3.9)); console.log('automatic playable sample and real four-line LRC download');
 await page.locator('#lsAudio').evaluate((audio) => audio.play()); await page.waitForFunction(() => document.querySelector('#lsAudio').currentTime > 2.1);
 await page.locator('#lsRows .ls-row').nth(1).locator('.ls-retap').click(); assert.equal(await page.locator('#lsDownload').isDisabled(), true);
 // Reset sample before independent correction checks.
 await page.locator('#lsSample').click(); await page.locator('details summary').click(); await page.locator('#lsOffset').fill('200'); file = await download(); assert(file.startsWith('[00:00.20]'));
 await page.locator('#lsOffset').fill('-500'); assert.equal(await page.locator('#lsDownload').isDisabled(), true); await page.locator('#lsOffset').fill('0');
 await page.locator('#lsClear').click(); await page.locator('#lsPrepare').click(); assert.match(await page.locator('#lsStatus').innerText(), /Paste/);
 await page.locator('#lsLyrics').fill('One\nTwo'); await page.locator('#lsPrepare').click(); assert.equal(await page.locator('#lsDownload').isDisabled(), true);
 const sample = await readFile(path.join(root, 'samples/lyric-tap-sample.wav'));
 await page.setInputFiles('#lsFile', { name: 'my-song.wav', mimeType: 'audio/wav', buffer: sample });
 await page.locator('#lsAudio').evaluate((a) => { a.currentTime = 0.5; }); await page.locator('#lsTap').click();
 assert.equal(await page.locator('#lsDownload').isDisabled(), true);
 await page.locator('#lsAudio').evaluate((a) => { a.currentTime = 1.5; }); await page.locator('#lsTap').click(); file = await download(); assert(file.includes('[00:00.50]One') && file.includes('[00:01.50]Two')); console.log('real input, tap, missing-line guard, correction and LRC output');
 await page.locator('#lsClear').click(); await page.locator('#lsLyrics').fill(Array.from({ length: 1000 }, (_, i) => `Lyric ${i}`).join('\n')); await page.locator('#lsPrepare').click(); assert.equal(await page.locator('#lsRows .ls-row').count(), 1000); await page.locator('#lsLyrics').fill(Array.from({ length: 1001 }, (_, i) => `Lyric ${i}`).join('\n')); await page.locator('#lsPrepare').click(); assert.match(await page.locator('#lsStatus').innerText(), /1,000/); console.log('1000-line rendering and boundary');
 const longAudio = path.join(temp, 'large.wav'); const header = Buffer.alloc(44); header.write('RIFF', 0); header.writeUInt32LE(0xffffffff, 4); header.write('WAVEfmt ', 8); header.writeUInt32LE(16, 16); header.writeUInt16LE(1, 20); header.writeUInt16LE(1, 22); header.writeUInt32LE(16000, 24); header.writeUInt32LE(32000, 28); header.writeUInt16LE(2, 32); header.writeUInt16LE(16, 34); header.write('data', 36); header.writeUInt32LE(90 * 1024 * 1024, 40); await writeFile(longAudio, header); const fh = await (await import('node:fs/promises')).open(longAudio, 'r+'); await fh.truncate(90 * 1024 * 1024 + 44); await fh.close(); assert((await stat(longAudio)).size > 80 * 1024 * 1024);
 await page.setInputFiles('#lsFile', longAudio); await page.waitForFunction(() => document.querySelector('#lsAudio').readyState >= 1); assert.equal(await page.locator('#lsFile').evaluate((node) => node.files[0].size > 80 * 1024 * 1024), true); console.log('>80 MiB local audio metadata read without PCM load');
 for (const lang of ['en','zh','es','ar','pt','id','fr','ja','ru','de']) { await page.setViewportSize({ width: 390, height: 844 }); await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug); await page.waitForFunction(() => document.querySelector('#lsDownload')?.disabled === false); const bounds = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, bad: [...document.querySelectorAll('*')].filter((node) => node.getBoundingClientRect().right > innerWidth + 1).slice(0, 8).map((node) => [node.tagName,node.className,node.getBoundingClientRect().right]) })); assert(bounds.width <= 391, `horizontal overflow ${lang}: ${JSON.stringify(bounds)}`); const output = await download(); assert.equal(output.split('\n').filter(Boolean).length, 4); if (lang === 'ar') assert.equal(await page.locator('#lyric-sync').evaluate((node) => getComputedStyle(node.parentElement).direction), 'rtl'); console.log('mobile locale LRC download', lang); }
 assert.deepEqual(errors, []);
 assert.equal(parseLines(' A \n\n B ').length, 2); assert.throws(() => buildLrc(['a','b'], [1000,500]), /order/);
} finally { await browser.close(); await rm(temp, { recursive: true, force: true }); }
