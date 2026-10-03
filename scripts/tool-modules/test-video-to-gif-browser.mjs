import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright-core';

const root = path.resolve('public');
const slug = 'convert-a-video-file-to-a-gif';
const base = 'http://localhost:41761';
const temp = await mkdtemp(path.join(tmpdir(), 'video-gif-test-'));
const ffmpeg = (args) => execFileSync('ffmpeg', ['-nostdin', '-y', '-loglevel', 'error', ...args]);
const frameMd5 = (file) => execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-i', file, '-f', 'framemd5', '-'], { encoding: 'utf8' })
  .split('\n').filter((line) => line && !line.startsWith('#')).map((line) => line.split(',').at(-1).trim());
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
  const ready = () => page.waitForFunction(() => !document.querySelector('#vgDownload').disabled || document.querySelector('#vgHud').classList.contains('is-error'), null, { timeout: 120000 });
  const download = async () => {
    const e = page.waitForEvent('download');
    await page.click('#vgDownload');
    const d = await e;
    assert.equal(await d.failure(), null);
    return d.path();
  };
  await page.goto(base + '/tools/' + slug);
  await ready();
  assert(await page.locator('#vgDownload').isEnabled(), await page.locator('#vgStep').innerText());
  const sample = await download();
  const hashes = frameMd5(sample);
  assert.equal(hashes.length, 24);
  assert(new Set(hashes).size > 3, 'sample GIF must contain visibly changing frames');
  assert.match(await page.locator('#vgResult').innerText(), /24 frames/);
  console.log('automatic moving sample: 24 different GIF frames and actual download');
  await page.click('#vgClear');
  await page.setInputFiles('#vgFile', { name: 'bad.mp4', mimeType: 'video/mp4', buffer: Buffer.from('broken') });
  await page.click('#vgConvert');
  await ready();
  assert(await page.locator('#vgDownload').isDisabled());
  console.log('invalid video rejected without blank GIF');
  await page.click('#vgClear');
  await page.setInputFiles('#vgFile', path.join(root, 'samples', slug + '.mp4'));
  await page.locator('details').first().evaluate((el) => { el.open = true; });
  await page.fill('#vgStart', '1');
  await page.fill('#vgEnd', '2');
  await page.selectOption('#vgFps', '5');
  await page.selectOption('#vgWidth', '240');
  await page.click('#vgConvert');
  await ready();
  assert(await page.locator('#vgDownload').isEnabled(), await page.locator('#vgStep').innerText());
  const short = await download();
  assert.equal(frameMd5(short).length, 5);
  assert.match(await page.locator('#vgResult').innerText(), /1\.00–2\.00s · 5 frames · 240×136/);
  console.log('trim, fps and width affect actual GIF frames');
  await page.click('#vgClear');
  await page.setInputFiles('#vgFile', path.join(root, 'samples', slug + '.mp4'));
  await page.fill('#vgEnd', '20');
  await page.click('#vgConvert');
  await ready();
  assert(await page.locator('#vgDownload').isDisabled());
  assert.match(await page.locator('#vgStep').innerText(), /10 seconds/);
  console.log('out-of-range clip rejected');
  await page.click('#vgClear');
  const large = path.join(temp, 'large.mp4');
  ffmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=24:duration=60', '-vf', 'noise=alls=55:allf=t+u', '-c:v', 'libx264', '-preset', 'ultrafast', '-b:v', '18M', '-maxrate', '18M', '-bufsize', '36M', '-movflags', '+faststart', '-an', large]);
  assert((await stat(large)).size > 80 * 1024 * 1024);
  await page.setInputFiles('#vgFile', large);
  await page.fill('#vgStart', '35');
  await page.fill('#vgEnd', '36');
  await page.selectOption('#vgFps', '8');
  await page.click('#vgConvert');
  await ready();
  assert(await page.locator('#vgDownload').isEnabled(), await page.locator('#vgStep').innerText());
  assert.equal(frameMd5(await download()).length, 8);
  assert.match(await page.locator('#vgResult').innerText(), /35\.00–36\.00s/);
  console.log('>80 MiB video: seeked one-second window and downloaded real GIF');
  await page.click('#vgClear');
  await page.setInputFiles('#vgFile', large);
  await page.fill('#vgStart', '20');
  await page.fill('#vgEnd', '30');
  await page.selectOption('#vgFps', '12');
  await page.selectOption('#vgWidth', '640');
  await page.click('#vgConvert');
  await ready();
  assert(await page.locator('#vgDownload').isDisabled());
  console.log('frame/pixel budget rejected oversized GIF job');
  await page.selectOption('#vgFps', '8');
  await page.selectOption('#vgWidth', '320');
  await page.click('#vgConvert');
  await page.waitForFunction(() => {
    const pct = Number(document.querySelector('#vgPct')?.textContent?.replace('%', ''));
    return pct > 5 && pct < 95;
  }, null, { timeout: 30000 });
  await page.click('#vgStop');
  await ready();
  assert(await page.locator('#vgDownload').isDisabled());
  await page.click('#vgConvert');
  await ready();
  assert(await page.locator('#vgDownload').isEnabled(), await page.locator('#vgStep').innerText());
  assert.equal(frameMd5(await download()).length, 80);
  console.log('stop and retry produced a complete 80-frame GIF');
  let enTitle = '';
  for (const lang of ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + (lang === 'en' ? '' : '/' + lang) + '/tools/' + slug);
    const title = await page.locator('h1').innerText();
    if (lang === 'en') enTitle = title;
    else assert.notEqual(title, enTitle, 'English H1 fallback in ' + lang);
    assert(!title.includes('tool_convert_'));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'horizontal overflow ' + lang);
    if (lang === 'ar') assert.equal(await page.locator('#vgPanel').evaluate((el) => getComputedStyle(el).direction), 'rtl');
    await ready();
    assert(await page.locator('#vgDownload').isEnabled(), 'sample conversion ' + lang + ': ' + await page.locator('#vgStep').innerText());
    assert.equal(frameMd5(await download()).length, 24);
    console.log('locale mobile and actual GIF download', lang);
  }
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
  await rm(temp, { recursive: true, force: true });
}
