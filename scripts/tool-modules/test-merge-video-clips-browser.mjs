import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { chromium } from 'playwright-core';

const root = path.resolve('public');
const base = 'http://localhost:41799';
const slug = 'merge-video-clips-in-order';
const temp = await mkdtemp(path.join(tmpdir(), 'merge-video-clips-'));
const ffmpeg = (args) => execFileSync('ffmpeg', ['-nostdin', '-y', '-loglevel', 'error', ...args]);
const probe = (file) => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:stream=codec_name,codec_type,sample_rate,channels', '-of', 'json', file], { encoding: 'utf8' }));
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
    try { await route.fulfill({ body: await readFile(f), contentType: p.endsWith('.html') ? 'text/html; charset=utf-8' : /\.m?js$/.test(p) ? 'application/javascript' : 'application/octet-stream' }); }
    catch { await route.fulfill({ status: 404, body: 'missing ' + p }); }
  });
  const page = await ctx.newPage();
  const errors = []; page.on('pageerror', (e) => errors.push(e.message));
  const ready = () => page.waitForFunction(() => document.querySelector('#mvHud').classList.contains('is-done') || document.querySelector('#mvHud').classList.contains('is-error'), null, { timeout: 300000 });
  const download = async () => { const event = page.waitForEvent('download'); await page.click('#mvDownload'); const d = await event; assert.equal(await d.failure(), null); return d.path(); };
  const assertMp4 = (file, sound = true) => { const p = probe(file); assert.deepEqual(p.streams.map((s) => s.codec_name), sound ? ['h264', 'aac'] : ['h264']); return p; };
  const pixel = async (file, time) => { const png = path.join(temp, 'frame-' + Math.random().toString(36).slice(2) + '.png'); ffmpeg(['-ss', String(time), '-i', file, '-frames:v', '1', png]); const { data, info } = await sharp(png).resize(1, 1).raw().toBuffer({ resolveWithObject: true }); return [...data.slice(0, 3)]; };
  const rms = (file, start) => { const raw = execFileSync('ffmpeg', ['-v', 'error', '-ss', String(start), '-t', '0.5', '-i', file, '-vn', '-ac', '1', '-ar', '48000', '-f', 'f32le', 'pipe:1']); if (!raw.length) return 0; let sum = 0; for (let i = 0; i + 4 <= raw.length; i += 4) { const v = raw.readFloatLE(i); sum += v * v; } return Math.sqrt(sum / (raw.length / 4)); };
  await page.goto(base + '/tools/' + slug); await ready(); assert(await page.locator('#mvDownload').isEnabled(), await page.locator('#mvStep').innerText()); let out = await download(); let info = assertMp4(out); assert(Number(info.format.duration) > 5.5); assert.equal(info.streams[1].sample_rate, '48000'); assert.equal(info.streams[1].channels, 2); assert.match(await page.locator('#mvSources').innerText(), /webm[\s\S]*mov/i); console.log('auto sample WebM+MOV -> one H.264/AAC MP4, 48 kHz stereo');
  const red = path.join(temp, 'red.mp4'), blue = path.join(temp, 'blue.webm'), silent = path.join(temp, 'silent.mp4');
  ffmpeg(['-f', 'lavfi', '-i', 'color=c=red:s=320x180:r=24:d=2', '-f', 'lavfi', '-i', 'sine=frequency=440:sample_rate=44100:duration=2', '-c:v', 'libx264', '-c:a', 'aac', '-shortest', red]);
  ffmpeg(['-f', 'lavfi', '-i', 'color=c=blue:s=480x270:r=24:d=3', '-f', 'lavfi', '-i', 'sine=frequency=880:sample_rate=48000:duration=3', '-c:v', 'libvpx-vp9', '-deadline', 'realtime', '-cpu-used', '8', '-c:a', 'libopus', '-shortest', blue]);
  ffmpeg(['-f', 'lavfi', '-i', 'color=c=red:s=320x180:r=24:d=2', '-c:v', 'libx264', '-an', silent]);
  await page.setInputFiles('#mvFiles', [red, blue]); await page.click('#mvMerge'); await ready(); assert(await page.locator('#mvDownload').isEnabled(), await page.locator('#mvStep').innerText()); out = await download(); info = assertMp4(out); assert(Math.abs(Number(info.format.duration) - 5) < .5); let p0 = await pixel(out, .7), p1 = await pixel(out, 3.3); assert(p0[0] > p0[2] + 50 && p1[2] > p1[0] + 50, `wrong order ${p0} -> ${p1}`); assert(rms(out, .7) > .02 && rms(out, 3.3) > .02); console.log('mixed size/codec/audio rates: red then blue, sound on both sides');
  await page.locator('#mvList li').first().getByRole('button', { name: /Move down/i }).click(); await page.click('#mvMerge'); await ready(); assert(await page.locator('#mvDownload').isEnabled(), await page.locator('#mvStep').innerText()); out = await download(); assertMp4(out); p0 = await pixel(out, .7); p1 = await pixel(out, 3.3); assert(p0[2] > p0[0] + 50 && p1[0] > p1[2] + 50, `reverse order failed ${p0} -> ${p1}`); console.log('row reorder reverses actual video frames');
  await page.setInputFiles('#mvFiles', [silent, blue]); await page.click('#mvMerge'); await ready(); assert(await page.locator('#mvDownload').isEnabled(), await page.locator('#mvStep').innerText()); out = await download(); assertMp4(out); assert(rms(out, .5) < .005 && rms(out, 3.0) > .02, `silent/audio interval incorrect ${rms(out, .5)} ${rms(out, 3.0)}`); console.log('silent first clip then sounding second clip');
  await page.setInputFiles('#mvFiles', [{ name: 'broken.mp4', mimeType: 'video/mp4', buffer: Buffer.from('broken') }, { name: 'blue.webm', mimeType: 'video/webm', buffer: await readFile(blue) }]); await page.click('#mvMerge'); await ready(); assert(await page.locator('#mvDownload').isDisabled()); console.log('broken source rejected');
  const long = path.join(temp, 'long.mp4'); ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=24:duration=65', '-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '29', '-an', long]); await page.setInputFiles('#mvFiles', [long, blue]); await page.click('#mvMerge'); await page.waitForFunction(() => !document.querySelector('#mvStop').disabled); await page.click('#mvStop'); await ready(); assert(await page.locator('#mvDownload').isDisabled()); await page.click('#mvMerge'); await ready(); assert(await page.locator('#mvDownload').isEnabled(), await page.locator('#mvStep').innerText()); out = await download(); assert(Number(assertMp4(out).format.duration) > 67); console.log('stop, cleanup, retry, >65 second timeline');
  const large = path.join(temp, 'large.mp4'); ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=24:duration=56', '-vf', 'noise=alls=55:allf=t+u', '-c:v', 'libx264', '-preset', 'ultrafast', '-b:v', '18M', '-maxrate', '18M', '-bufsize', '36M', '-an', large]); assert((await stat(large)).size > 80 * 1048576); await page.setInputFiles('#mvFiles', [large, blue]); await page.click('#mvMerge'); await ready(); assert(await page.locator('#mvDownload').isEnabled(), await page.locator('#mvStep').innerText()); out = await download(); assertMp4(out); console.log('>80 MiB source through OPFS, real merged download');
  for (const lang of ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) { await page.setViewportSize({ width: 390, height: 844 }); await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug); await ready(); assert(await page.locator('#mvDownload').isEnabled(), lang + ' ' + await page.locator('#mvStep').innerText()); const width = await page.evaluate(() => document.documentElement.scrollWidth); assert(width <= 391, `mobile overflow ${lang}: ${width}`); out = await download(); assertMp4(out); console.log('mobile locale MP4', lang); }
  assert.deepEqual(errors, []);
} finally { await browser.close(); await rm(temp, { recursive: true, force: true }); }
