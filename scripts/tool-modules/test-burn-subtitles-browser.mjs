import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { chromium } from 'playwright-core';

const root = path.resolve('public');
const base = 'http://localhost:41798';
const slug = 'burn-subtitles-into-a-video';
const temp = await mkdtemp(path.join(tmpdir(), 'burn-subtitles-'));
const ffmpeg = (args) => execFileSync('ffmpeg', ['-nostdin', '-y', '-loglevel', 'error', ...args]);
const probe = (file) => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:stream=codec_name,codec_type', '-of', 'json', file], { encoding: 'utf8' }));
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
    try { await route.fulfill({ body: await readFile(f), contentType: p.endsWith('.html') ? 'text/html; charset=utf-8' : /\.m?js$/.test(p) ? 'application/javascript' : p.endsWith('.webm') ? 'video/webm' : 'application/octet-stream' }); }
    catch { await route.fulfill({ status: 404, body: 'missing ' + p }); }
  });
  const page = await ctx.newPage();
  const errors = []; page.on('pageerror', (e) => errors.push(e.message));
  const ready = () => page.waitForFunction(() => document.querySelector('#bsHud').classList.contains('is-done') || document.querySelector('#bsHud').classList.contains('is-error'), null, { timeout: 300000 });
  const download = async () => { const event = page.waitForEvent('download'); await page.click('#bsDownload'); const d = await event; assert.equal(await d.failure(), null); return d.path(); };
  const assertMp4 = (file, sound = true) => { const p = probe(file); assert.deepEqual(p.streams.map((s) => s.codec_name), sound ? ['h264', 'aac'] : ['h264']); return p; };
  const whiteCount = async (file, time) => { const png = path.join(temp, 'frame-' + Math.random().toString(36).slice(2) + '.png'); ffmpeg(['-ss', String(time), '-i', file, '-frames:v', '1', png]); const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true }); let count = 0; for (let y = Math.floor(info.height * .57); y < info.height; y++) for (let x = 0; x < info.width; x++) { const i = (y * info.width + x) * info.channels; if (data[i] > 218 && data[i + 1] > 218 && data[i + 2] > 218) count++; } return count; };
  await page.goto(base + '/tools/' + slug); await ready(); assert(await page.locator('#bsDownload').isEnabled(), await page.locator('#bsStep').innerText()); let out = await download(); assertMp4(out); const early = await whiteCount(out, .1), during = await whiteCount(out, 1); assert(during > early + 100, `subtitle not visible only during cue: ${early} -> ${during}`); console.log('auto sample: H.264/AAC download, caption pixels at 1s only', early, during);
  await page.setInputFiles('#bsSubtitleFile', { name: 'bad.srt', mimeType: 'text/plain', buffer: Buffer.from('broken subtitle') }); await page.click('#bsBurn'); await ready(); assert(await page.locator('#bsDownload').isDisabled()); assert.match(await page.locator('#bsStep').innerText(), /SRT|VTT/); console.log('invalid SRT rejected');
  await page.setInputFiles('#bsVideoFile', path.join(root, 'samples/convert-a-webm-file-to-an-mp4-file.webm'));
  await page.setInputFiles('#bsSubtitleFile', { name: 'captions.vtt', mimeType: 'text/vtt', buffer: Buffer.from('WEBVTT\n\n00:00:00.500 --> 00:00:02.300\nVTT caption test\n') }); await page.click('#bsBurn'); await ready(); assert(await page.locator('#bsDownload').isEnabled(), await page.locator('#bsStep').innerText()); out = await download(); assertMp4(out); assert((await whiteCount(out, 1)) > (await whiteCount(out, .1)) + 30); console.log('VTT recovery -> burned MP4');
  const long = path.join(temp, 'long.mp4'); ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=24:duration=65', '-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '29', '-an', long]);
  await page.setInputFiles('#bsVideoFile', long); await page.setInputFiles('#bsSubtitleFile', { name: 'long.srt', mimeType: 'text/plain', buffer: Buffer.from('1\n00:00:01,000 --> 00:01:02,000\nLong caption\n') }); await page.click('#bsBurn'); await page.waitForFunction(() => !document.querySelector('#bsStop').disabled); await page.click('#bsStop'); await ready(); assert(await page.locator('#bsDownload').isDisabled()); console.log('stop rejects partial output');
  await page.click('#bsBurn'); await ready(); assert(await page.locator('#bsDownload').isEnabled(), await page.locator('#bsStep').innerText()); out = await download(); assertMp4(out, false); assert(Number(probe(out).format.duration) > 60); console.log('65 second job finishes after stop/retry');
  const large = path.join(temp, 'large.mp4'); ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=24:duration=56', '-vf', 'noise=alls=55:allf=t+u', '-c:v', 'libx264', '-preset', 'ultrafast', '-b:v', '18M', '-maxrate', '18M', '-bufsize', '36M', '-an', large]); assert((await stat(large)).size > 80 * 1048576); await page.setInputFiles('#bsVideoFile', large); await page.click('#bsBurn'); await ready(); assert(await page.locator('#bsDownload').isEnabled(), await page.locator('#bsStep').innerText()); out = await download(); assertMp4(out, false); console.log('>80 MiB real video through OPFS, output downloaded');
  for (const lang of ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) { await page.setViewportSize({ width: 390, height: 844 }); await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug); await ready(); assert(await page.locator('#bsDownload').isEnabled(), lang + ' ' + await page.locator('#bsStep').innerText()); const width = await page.evaluate(() => document.documentElement.scrollWidth); assert(width <= 391, `mobile overflow ${lang}: ${width}`); out = await download(); assertMp4(out); console.log('mobile locale MP4', lang); }
  assert.deepEqual(errors, []);
} finally { await browser.close(); await rm(temp, { recursive: true, force: true }); }
