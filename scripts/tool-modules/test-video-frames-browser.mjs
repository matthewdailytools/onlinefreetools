import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright-core';

const root = path.resolve('public');
const slug = 'extract-frames-from-a-video-as-images';
const base = 'http://localhost:41762';
const temp = await mkdtemp(path.join(tmpdir(), 'video-frames-test-'));
const ffmpeg = (args) => execFileSync('ffmpeg', ['-nostdin', '-y', '-loglevel', 'error', ...args]);
const probe = (file) => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'stream=codec_name,width,height', '-of', 'json', file], { encoding: 'utf8' }));
const zipList = (file) => execFileSync('unzip', ['-Z', '-1', file], { encoding: 'utf8' }).trim().split('\n');
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox'],
});
const errors = [];
try {
  const ctx = await browser.newContext({ acceptDownloads: true });
  await ctx.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    if (url.protocol === 'blob:' || url.protocol === 'data:') return route.continue();
    if (url.origin !== base || route.request().method() !== 'GET') return route.abort();
    const match = url.pathname.match(new RegExp('^/(?:([a-z]{2})/)?tools/' + slug + '$'));
    const p = match ? '/_pages/' + (match[1] || 'en') + '/tools/' + slug + '.html' : url.pathname;
    const target = path.resolve(root, '.' + p);
    if (!target.startsWith(root + path.sep)) return route.abort();
    try {
      const body = await readFile(target);
      await route.fulfill({
        body,
        contentType: p.endsWith('.html') ? 'text/html; charset=utf-8' : p.endsWith('.js') ? 'application/javascript' : p.endsWith('.mp4') ? 'video/mp4' : 'application/octet-stream',
      });
    } catch { await route.fulfill({ status: 404, body: 'not found' }); }
  });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  const ready = () => page.waitForFunction(() => document.querySelectorAll('.vf-card').length || document.querySelector('#vfHud').classList.contains('is-error'), null, { timeout: 120000 });
  const download = async (selector) => {
    const event = page.waitForEvent('download');
    if (typeof selector === 'string') await page.click(selector);
    else await selector.click();
    const d = await event;
    assert.equal(await d.failure(), null);
    return d.path();
  };
  await page.goto(base + '/tools/' + slug);
  await ready();
  assert.equal(await page.locator('.vf-card').count(), 3, await page.locator('#vfStep').innerText());
  const first = await download('.vf-card:nth-child(1) button');
  const last = await download(page.locator('.vf-card').nth(2).locator('button'));
  assert.deepEqual(probe(first).streams.map(({ codec_name, width, height }) => ({ codec_name, width, height })), [{ codec_name: 'mjpeg', width: 320, height: 180 }]);
  assert.notDeepEqual(await readFile(first), await readFile(last), 'moving sample frames must differ');
  const zip = await download('#vfZip');
  assert.equal(zipList(zip).length, 3);
  console.log('automatic sample: three distinct JPGs, per-image downloads and real ZIP');
  await page.click('#vfClear');
  await page.setInputFiles('#vfFile', { name: 'bad.mp4', mimeType: 'video/mp4', buffer: Buffer.from('broken') });
  await page.click('#vfExtract');
  await ready();
  assert.equal(await page.locator('.vf-card').count(), 0);
  console.log('invalid video rejected');
  await page.click('#vfClear');
  await page.setInputFiles('#vfFile', path.join(root, 'samples', slug + '.mp4'));
  await page.locator('details').first().evaluate((el) => { el.open = true; });
  await page.selectOption('#vfMode', 'single');
  await page.fill('#vfStart', '2');
  await page.selectOption('#vfFormat', 'png');
  await page.selectOption('#vfWidth', '640');
  await page.click('#vfExtract');
  await ready();
  assert.equal(await page.locator('.vf-card').count(), 1);
  assert.match(await page.locator('#vfResult').innerText(), /2\.00–2\.00s/);
  assert.deepEqual(probe(await download('.vf-card:nth-child(1) button')).streams.map(({ codec_name, width, height }) => ({ codec_name, width, height })), [{ codec_name: 'png', width: 320, height: 180 }]);
  console.log('single-timestamp PNG thumbnail and actual time passed');
  await page.click('#vfClear');
  const tooMany = path.join(temp, 'too-many.mp4');
  ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=320x180:rate=12:duration=8', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', tooMany]);
  await page.setInputFiles('#vfFile', tooMany);
  await page.selectOption('#vfMode', 'interval');
  await page.fill('#vfStart', '0');
  await page.fill('#vfEnd', '8');
  await page.fill('#vfInterval', '0.1');
  await page.click('#vfExtract');
  await ready();
  assert.equal(await page.locator('.vf-card').count(), 0);
  assert.match(await page.locator('#vfStep').innerText(), /million|frames|pixels/i);
  console.log('frame/pixel budget rejected oversized job');
  const large = path.join(temp, 'large.mp4');
  ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=24:duration=60', '-vf', 'noise=alls=55:allf=t+u', '-c:v', 'libx264', '-preset', 'ultrafast', '-b:v', '18M', '-maxrate', '18M', '-bufsize', '36M', '-movflags', '+faststart', '-an', large]);
  assert((await stat(large)).size > 80 * 1024 * 1024);
  await page.click('#vfClear');
  await page.setInputFiles('#vfFile', large);
  await page.selectOption('#vfMode', 'single');
  await page.fill('#vfStart', '35');
  await page.click('#vfExtract');
  await ready();
  assert.equal(await page.locator('.vf-card').count(), 1);
  assert.match(await page.locator('#vfResult').innerText(), /35\.00–35\.00s/);
  assert.equal(probe(await download('.vf-card:nth-child(1) button')).streams[0].codec_name, 'png');
  console.log('>80 MiB source: seeked one frame at 35s and downloaded PNG');
  await page.click('#vfClear');
  await page.setInputFiles('#vfFile', large);
  await page.selectOption('#vfMode', 'interval');
  await page.selectOption('#vfFormat', 'jpeg');
  await page.selectOption('#vfWidth', '320');
  await page.fill('#vfStart', '20');
  await page.fill('#vfEnd', '50');
  await page.fill('#vfInterval', '1');
  await page.click('#vfExtract');
  await page.waitForFunction(() => Number(document.querySelector('#vfPct')?.textContent?.replace('%', '')) > 5, null, { timeout: 30000 });
  await page.click('#vfStop');
  await page.waitForFunction(() => !document.querySelector('#vfExtract').disabled);
  assert((await page.locator('.vf-card').count()) < 30);
  await page.click('#vfExtract');
  await page.waitForFunction(() => document.querySelectorAll('.vf-card').length === 30, null, { timeout: 120000 });
  assert.equal(zipList(await download('#vfZip')).length, 30);
  console.log('stop and retry: 30 images and ZIP');
  let enTitle = '';
  for (const lang of process.env.ONLY_EN === '1' ? [] : ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug);
    const title = await page.locator('h1').innerText();
    if (lang === 'en') enTitle = title;
    else assert.notEqual(title, enTitle, 'English title fallback ' + lang);
    assert(!title.includes('tool_extract_'));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'horizontal overflow ' + lang);
    if (lang === 'ar') assert.equal(await page.locator('#vfPanel').evaluate((el) => getComputedStyle(el).direction), 'rtl');
    await page.waitForFunction(() => document.querySelectorAll('.vf-card').length === 3, null, { timeout: 90000 });
    assert.equal(zipList(await download('#vfZip')).length, 3);
    console.log('locale mobile and actual image ZIP', lang);
  }
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
  await rm(temp, { recursive: true, force: true });
}
