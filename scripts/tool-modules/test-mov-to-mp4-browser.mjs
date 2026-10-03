import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright-core';

const root = path.resolve('public');
const slug = 'convert-a-mov-file-to-an-mp4-file';
const base = 'http://localhost:41746';
const chrome = process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dir = await mkdtemp(path.join(tmpdir(), 'mov-mp4-'));
const fixtures = Object.fromEntries(['pcm', 'hevc', 'silent', 'large'].map((name) => [name, path.join(dir, `${name}.mov`)]));
const runFfmpeg = (args) => execFileSync('ffmpeg', ['-nostdin', '-y', '-loglevel', 'error', ...args]);
runFfmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=320x180:rate=24:duration=3', '-f', 'lavfi', '-i', 'sine=frequency=440:duration=3', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-c:a', 'pcm_s16le', fixtures.pcm]);
runFfmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=320x180:rate=24:duration=3', '-f', 'lavfi', '-i', 'sine=frequency=440:duration=3', '-c:v', 'libx265', '-x265-params', 'log-level=error', '-pix_fmt', 'yuv420p', '-c:a', 'aac', fixtures.hevc]);
runFfmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=320x180:rate=24:duration=3', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-an', fixtures.silent]);
runFfmpeg(['-f', 'lavfi', '-i', 'testsrc2=size=640x360:rate=30:duration=90', '-vf', 'noise=alls=50:allf=t+u', '-c:v', 'libx264', '-preset', 'ultrafast', '-b:v', '12M', '-maxrate', '12M', '-bufsize', '24M', '-an', fixtures.large]);
assert((await stat(fixtures.large)).size > 80 * 1024 * 1024);
const probe = (file) => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:stream=codec_name,channels', '-of', 'json', file], { encoding: 'utf8' }));
const videoHash = (file) => createHash('sha256').update(execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-i', file, '-map', '0:v:0', '-c', 'copy', '-f', 'h264', '-'])).digest('hex');
const browser = await chromium.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox'] });
const pageErrors = [];
const unexpected = [];
try {
  const context = await browser.newContext({ acceptDownloads: true });
  await context.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    if (url.protocol === 'blob:' || url.protocol === 'data:') return route.continue();
    if (url.origin === 'https://www.clarity.ms' && url.pathname.startsWith('/tag/')) return route.abort();
    if (url.origin !== base || route.request().method() !== 'GET') { unexpected.push(url.href); return route.abort(); }
    const match = url.pathname.match(new RegExp(`^/(?:([a-z]{2})/)?tools/${slug}$`));
    const mapped = match ? `/_pages/${match[1] || 'en'}/tools/${slug}.html` : url.pathname;
    const target = path.resolve(root, `.${mapped}`);
    if (!target.startsWith(`${root}${path.sep}`)) return route.abort();
    try {
      const body = await readFile(target);
      const contentType = mapped.endsWith('.html') ? 'text/html; charset=utf-8' : /\.m?js$/.test(mapped) ? 'application/javascript' : mapped.endsWith('.css') ? 'text/css' : mapped.endsWith('.mov') ? 'video/quicktime' : 'application/octet-stream';
      await route.fulfill({ body, contentType });
    } catch { await route.fulfill({ status: 404, body: 'not found' }); }
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => pageErrors.push(error.message));
  const download = async () => {
    const event = page.waitForEvent('download');
    await page.click('#cmkDownload');
    const item = await event;
    assert.equal(await item.failure(), null);
    return item.path();
  };
  const waitReady = () => page.waitForFunction(() => !document.querySelector('#cmkDownload').disabled || document.querySelector('#cmkHud').classList.contains('is-error'), null, { timeout: 240000 });
  const opfsNames = () => page.evaluate(async () => {
    const folder = await (await navigator.storage.getDirectory()).getDirectoryHandle('oft-mkv-to-mp4');
    const names = [];
    for await (const name of folder.keys()) names.push(name);
    return names;
  });
  await page.goto(`${base}/tools/${slug}`);
  await page.click('#cmkSample');
  await waitReady();
  assert(await page.locator('#cmkDownload').isEnabled(), await page.locator('#cmkStep').innerText());
  assert((await page.locator('#cmkResult').innerText()).includes('H.264 video copied'));
  const sampleOutput = await download();
  assert.deepEqual(probe(sampleOutput).streams.map((stream) => stream.codec_name), ['h264', 'aac']);
  assert.equal(videoHash(sampleOutput), videoHash(path.join(root, 'samples', `${slug}.mov`)));
  console.log('PASS H.264/AAC sample download and identical video packets');

  await page.click('#cmkClear');
  await page.setInputFiles('#cmkFile', fixtures.pcm);
  await page.locator('#cmkPanel details summary').click();
  await page.selectOption('#cmkChannels', '1');
  await page.click('#cmkConvert');
  await waitReady();
  assert(await page.locator('#cmkDownload').isEnabled(), await page.locator('#cmkStep').innerText());
  const pcmOutput = await download();
  assert.deepEqual(probe(pcmOutput).streams.map((stream) => stream.codec_name), ['h264', 'aac']);
  assert.equal(probe(pcmOutput).streams[1].channels, 1);
  assert.equal(videoHash(pcmOutput), videoHash(fixtures.pcm));
  console.log('PASS PCM to mono AAC while H.264 video packets remain identical');

  await page.click('#cmkClear');
  await page.setInputFiles('#cmkFile', fixtures.hevc);
  await page.click('#cmkConvert');
  await waitReady();
  assert((await page.locator('#cmkStep').innerText()).includes('HEVC'));
  assert(await page.locator('#cmkDownload').isDisabled());
  assert.equal(await page.locator('#cmkResult').innerText(), '');
  console.log('PASS undecodable HEVC rejected without audio-only output');

  await page.click('#cmkClear');
  await page.setInputFiles('#cmkFile', fixtures.silent);
  await page.click('#cmkConvert');
  await waitReady();
  assert(await page.locator('#cmkDownload').isEnabled());
  assert.deepEqual(probe(await download()).streams.map((stream) => stream.codec_name), ['h264']);
  console.log('PASS video-only MOV remains video-only MP4');

  await page.click('#cmkClear');
  await page.setInputFiles('#cmkFile', { name: 'broken.mov', mimeType: 'video/quicktime', buffer: Buffer.from('broken QuickTime') });
  await page.click('#cmkConvert');
  await waitReady();
  assert((await page.locator('#cmkHud').getAttribute('class')).includes('is-error'));
  assert(await page.locator('#cmkDownload').isDisabled());
  console.log('PASS damaged MOV rejected');

  await page.click('#cmkClear');
  await page.setInputFiles('#cmkFile', fixtures.large);
  await page.click('#cmkConvert');
  await waitReady();
  assert(await page.locator('#cmkDownload').isEnabled(), await page.locator('#cmkStep').innerText());
  assert((await opfsNames()).some((name) => name.endsWith('.mp4')));
  const largeOutput = await download();
  const largeInfo = probe(largeOutput);
  assert((await stat(largeOutput)).size > 80 * 1024 * 1024);
  assert.deepEqual(largeInfo.streams.map((stream) => stream.codec_name), ['h264']);
  assert(Number(largeInfo.format.duration) > 89 && Number(largeInfo.format.duration) < 91);
  console.log('PASS 130 MiB, 90-second MOV to >80 MiB OPFS MP4', (await stat(largeOutput)).size);
  await page.click('#cmkClear');
  assert.equal((await opfsNames()).filter((name) => name.endsWith('.mp4')).length, 0);

  await page.setInputFiles('#cmkFile', fixtures.large);
  await page.click('#cmkConvert');
  await page.click('#cmkStop');
  await page.waitForFunction(() => !document.querySelector('#cmkConvert').disabled, null, { timeout: 30000 });
  assert((await page.locator('#cmkHud').getAttribute('class')).includes('is-error'));
  await page.click('#cmkConvert');
  await waitReady();
  assert(await page.locator('#cmkDownload').isEnabled());
  await page.click('#cmkClear');
  assert.equal((await opfsNames()).filter((name) => name.endsWith('.mp4')).length, 0);
  console.log('PASS stop and retry large MOV with OPFS cleanup');

  const noOpfs = await context.newPage();
  noOpfs.on('pageerror', (error) => pageErrors.push(error.message));
  await noOpfs.addInitScript(() => Object.defineProperty(navigator.storage, 'getDirectory', { value: undefined }));
  await noOpfs.goto(`${base}/tools/${slug}`);
  await noOpfs.click('#cmkSample');
  await noOpfs.waitForFunction(() => !document.querySelector('#cmkDownload').disabled, null, { timeout: 90000 });
  await noOpfs.click('#cmkClear');
  await noOpfs.setInputFiles('#cmkFile', fixtures.large);
  await noOpfs.click('#cmkConvert');
  await noOpfs.waitForFunction(() => document.querySelector('#cmkHud').classList.contains('is-error'), null, { timeout: 30000 });
  assert((await noOpfs.locator('#cmkStep').innerText()).includes('80 MiB'));
  console.log('PASS no-OPFS fallback and 80 MiB code cap');

  const noEncoder = await context.newPage();
  noEncoder.on('pageerror', (error) => pageErrors.push(error.message));
  await noEncoder.addInitScript(() => Object.defineProperty(window, 'VideoEncoder', { value: undefined }));
  await noEncoder.goto(`${base}/tools/${slug}`);
  await noEncoder.click('#cmkSample');
  await noEncoder.waitForFunction(() => !document.querySelector('#cmkDownload').disabled, null, { timeout: 90000 });
  console.log('PASS H.264 packet-copy path needs no VideoEncoder');

  let englishTitle = '';
  for (const lang of ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${base}${lang === 'en' ? '' : `/${lang}`}/tools/${slug}`);
    const title = await page.locator('h1').innerText();
    if (lang === 'en') englishTitle = title;
    else assert.notEqual(title, englishTitle, `English fallback in ${lang}`);
    assert(!(title.includes('tool_convert_')));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `horizontal overflow in ${lang}`);
    if (lang === 'ar') assert.equal(await page.locator('#cmkPanel').evaluate((el) => getComputedStyle(el).direction), 'rtl');
    await page.click('#cmkSample');
    await page.waitForFunction(() => !document.querySelector('#cmkDownload').disabled, null, { timeout: 90000 });
    assert.deepEqual(probe(await download()).streams.map((stream) => stream.codec_name), ['h264', 'aac']);
    console.log('PASS locale mobile sample and actual download', lang);
  }
  assert.deepEqual(pageErrors, []);
  assert.deepEqual(unexpected, []);
} finally {
  await browser.close();
  await rm(dir, { recursive: true, force: true });
}
