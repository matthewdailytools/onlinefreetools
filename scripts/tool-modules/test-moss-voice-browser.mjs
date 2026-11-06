import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';
import { chromium } from 'playwright-core';
import { MODEL_PATH, MODEL_VERSION, cloneFiles, encoderGraph, encoderWeights, speechFiles } from '../../public/vendor/moss-nano/model-files.mjs';

const root = resolve('public');
const source = resolve(process.env.MOSS_MODEL_DIR || '.cache/moss-models');
if (!(await stat(source).catch(() => null))?.isDirectory()) {
  throw new Error('Stage model files with node ops/stage-moss-nano-models.mjs. See ai-voice-initiative.md.');
}
const models = new Map(cloneFiles.map((asset) => [MODEL_PATH + asset.name, asset]));
const slug = 'text-to-speech-for-voiceovers';
const cloneSlug = 'clone-a-voice-from-a-recording';
const requests = [];
const outputDir = resolve(process.env.MOSS_OUTPUT_DIR || '.cache/moss-voice-browser');
const serve = process.argv.includes('--serve');
let failModel = false;

const contentTypes = {
  '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript', '.js': 'text/javascript',
  '.json': 'application/json', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.wav': 'audio/wav', '.wasm': 'application/wasm', '.woff2': 'font/woff2',
};
const server = createServer(async (req, res) => {
  try {
    const path = new URL(req.url, 'http://localhost').pathname;
    if (req.method !== 'GET' && req.method !== 'HEAD') return res.writeHead(405).end();
    const asset = models.get(path);
    if (asset) requests.push(asset.name);
    if (asset && failModel) return res.writeHead(503).end();
    const section = /^\/(?:(\w{2})\/)?(tools|topics|tool-type|where-to-use-tools)(?:\/([a-z0-9-]+))?\/?$/.exec(path);
    const infoPage = /^\/(?:(\w{2})\/)?(about|privacy|terms|contact)\/?$/.exec(path);
    let mapped = path;
    if (section) mapped = `/_pages/${section[1] || 'en'}/${section[2]}/${section[3] || 'index'}.html`;
    if (infoPage) mapped = `/_pages/${infoPage[1] || 'en'}/${infoPage[2]}.html`;
    let file = asset
      ? join(source, asset.name)
      : resolve(root, `.${mapped.endsWith('/') ? mapped + 'index.html' : mapped}`);
    if (asset) {
      const flat = await stat(file).catch(() => null);
      if (!flat) file = join(source, asset.repo, asset.name);
    } else if (!file.startsWith(root + sep)) {
      return res.writeHead(404).end();
    }
    const info = await stat(file);
    if (!info.isFile()) return res.writeHead(404).end();
    res.writeHead(200, {
      'Content-Type': contentTypes[extname(file)] ?? 'application/octet-stream',
      'Content-Length': info.size,
    });
    if (req.method === 'HEAD') return res.end();
    createReadStream(file).on('error', () => res.destroy()).pipe(res);
  } catch {
    if (!res.headersSent) res.writeHead(404);
    res.end();
  }
});
const previewPort = serve ? Number(process.env.MOSS_PREVIEW_PORT || 8457) : 0;
await new Promise((ready) => server.listen(previewPort, '127.0.0.1', ready));
const base = `http://127.0.0.1:${server.address().port}`;
console.log(`MOSS preview ${base}/tools/${slug}`);
console.log(`MOSS preview ${base}/tools/${cloneSlug}`);

async function verifyDownload(page, fileName) {
  const player = page.locator('#mossAudio');
  await player.evaluate(async (audio) => {
    audio.muted = true;
    await audio.play();
  });
  await page.waitForFunction(() => document.getElementById('mossAudio').currentTime > 0, null, { timeout: 20_000 });
  const preview = await player.evaluate(async (audio) => {
    audio.pause();
    const data = await (await fetch(audio.src)).arrayBuffer();
    const decoded = await new OfflineAudioContext(2, 1, 48000).decodeAudioData(data.slice(0));
    const digest = await crypto.subtle.digest('SHA-256', data);
    return { seconds: decoded.duration, channels: decoded.numberOfChannels, hash: new Uint8Array(digest).toHex() };
  });
  const [download] = await Promise.all([page.waitForEvent('download'), page.locator('#mossDownload').click()]);
  assert.match(download.suggestedFilename(), /\.wav$/);
  const file = join(outputDir, fileName);
  await download.saveAs(file);
  const wav = await readFile(file);
  assert.equal(wav.toString('ascii', 0, 4), 'RIFF');
  assert.equal(wav.toString('ascii', 8, 12), 'WAVE');
  assert.equal(wav.readUInt16LE(20), 1);
  assert.equal(wav.readUInt16LE(22), 2);
  assert.equal(wav.readUInt32LE(24), 48000);
  assert.equal(wav.readUInt16LE(34), 16);
  assert.equal(wav.readUInt32LE(40), wav.length - 44);
  const pcm = new Int16Array(wav.buffer, wav.byteOffset + 44, (wav.length - 44) / 2);
  const rms = Math.sqrt(pcm.reduce((sum, value) => sum + (value / 32768) ** 2, 0) / pcm.length);
  assert(rms > 0.005 && preview.seconds > 1 && preview.channels === 2);
  assert.equal(createHash('sha256').update(wav).digest('hex'), preview.hash);
  console.log(JSON.stringify({ file, seconds: preview.seconds, bytes: wav.length, rms }));
}

async function waitForTake(page) {
  await page.locator('#mossHud:is(.is-done,.is-fail)').waitFor({ timeout: 240_000 });
  assert(await page.locator('#mossHud.is-done').count(), await page.locator('#mossStatus').textContent());
}

async function verifyModelProgress(page, assets) {
  const total = assets.reduce((sum, asset) => sum + asset.size, 0);
  const megabytes = new Intl.NumberFormat('en', { maximumFractionDigits: 1 }).format(total / 1_000_000);
  const progress = page.getByRole('progressbar', { name: 'Model download progress' });
  assert.equal(await progress.isVisible(), true);
  assert.equal(await progress.getAttribute('value'), '100');
  assert.equal(await page.locator('#mossModelPercent').textContent(), '100%');
  assert.equal(await page.locator('#mossModelBytes').textContent(), `${megabytes} / ${megabytes} MB`);
  console.log(`PASS model download reaches 100% with ${megabytes} MB received`);
}

async function test() {
  await mkdir(outputDir, { recursive: true });
  const executablePath = process.env.CHROMIUM_PATH || undefined;
  const browser = await chromium.launch({
    executablePath,
    channel: /(?:^|[/\\])msedge(?:\.exe)?$/i.test(executablePath || '') ? 'msedge' : undefined,
    headless: true,
    args: [
      '--autoplay-policy=no-user-gesture-required',
      '--use-fake-device-for-media-stream',
      '--use-fake-ui-for-media-stream',
      `--use-file-for-fake-audio-capture=${join(root, 'samples/moss-nano-voiceover-en.wav')}`,
    ],
  });
  try {
    const context = await browser.newContext({ acceptDownloads: true });
    await context.grantPermissions(['microphone'], { origin: base });
    const pageErrors = [];
    const nonGet = [];
    await context.route('**/*', (route) => {
      const request = route.request();
      const url = new URL(request.url());
      if (url.protocol === 'blob:' || url.protocol === 'data:') return route.continue();
      if (request.method() !== 'GET' && request.method() !== 'HEAD') nonGet.push(request.url());
      return url.origin === base ? route.continue() : route.abort();
    });
    const page = await context.newPage();
    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('console', (event) => {
      if (event.type() === 'warning' && event.text().startsWith('MOSS')) console.log(event.text().slice(0, 350));
    });
    await page.goto(base + '/tools/' + slug);
    console.log(`Browser ${browser.version()}, no extension, isolated=${await page.evaluate(() => crossOriginIsolated)}`);
    assert.equal(await page.locator('#mossDownload').isDisabled(), true);
    assert.match(await page.locator('#mossText').inputValue(), /field notes podcast/);
    const demo = await context.request.get(base + await page.locator('#mossSampleAudio').getAttribute('src'));
    assert.equal(demo.ok(), true);
    assert.equal((await demo.body()).toString('ascii', 0, 4), 'RIFF');
    assert.equal(requests.length, 0);
    await page.locator('#mossText').fill('...');
    await page.locator('#mossGenerate').click();
    await page.locator('#mossHud.is-fail').waitFor();
    assert.equal(requests.length, 0);
    await page.locator('#mossSample').click();
    assert.match(await page.locator('#mossText').inputValue(), /field notes podcast/);
    console.log('PASS automatic sample, invalid text, no model network requests before generation');

    const realText = 'The ferry leaves at seven. Bring a jacket for the morning crossing.';
    await page.locator('#mossText').fill(realText);
    failModel = true;
    await page.locator('#mossGenerate').click();
    await page.locator('#mossHud.is-fail').waitFor({ timeout: 45_000 });
    assert.match(await page.locator('#mossStatus').textContent(), /download failed/);
    assert.equal(await page.locator('#mossText').inputValue(), realText);
    assert.equal(await page.locator('#mossModelPercent').textContent(), '0%');
    failModel = false;
    const requestsBefore = requests.length;
    const start = performance.now();
    await page.locator('#mossGenerate').click();
    await page.waitForFunction(() => {
      const progress = document.getElementById('mossModelBar');
      return progress.value > 0 && progress.value < progress.max && document.getElementById('mossWorkTrack').hidden;
    });
    assert.equal(await page.locator('#mossModelDownload').isVisible(), true);
    await waitForTake(page);
    await verifyModelProgress(page, speechFiles);
    const downloaded = requests.slice(requestsBefore);
    assert.deepEqual(downloaded.toSorted(), speechFiles.map((asset) => asset.name).toSorted());
    const stored = await page.evaluate(async (version) => {
      const root = await navigator.storage.getDirectory();
      const directory = await root.getDirectoryHandle(`oft-moss-nano-${version}`);
      const sizes = {};
      for await (const [name, handle] of directory) sizes[name] = (await handle.getFile()).size;
      return sizes;
    }, MODEL_VERSION);
    assert.deepEqual(stored, Object.fromEntries(speechFiles.map((asset) => [asset.name, asset.size])));
    console.log('PASS network failure, preserved script, retry and full cold download', {
      milliseconds: Math.round(performance.now() - start),
      bytes: speechFiles.reduce((sum, asset) => sum + asset.size, 0),
    });
    await verifyDownload(page, 'tts-en.wav');

    const modelRequests = requests.length;
    await page.goto(base + '/zh/tools/' + slug);
    const mandarin = '下一班渡轮七点出发。请带一件外套。';
    await page.locator('#mossText').fill(mandarin);
    await page.locator('#mossGenerate').click();
    await page.locator('#mossCancel').click();
    assert.equal(await page.locator('#mossText').inputValue(), mandarin);
    assert.equal(await page.locator('#mossDownload').isDisabled(), true);
    await page.locator('#mossGenerate').click();
    await waitForTake(page);
    assert.equal(requests.length, modelRequests);
    assert.equal(await page.locator('#mossModelDownload').isVisible(), false);
    await verifyDownload(page, 'tts-zh.wav');
    console.log('PASS cancel and retry, cross-locale reload uses OPFS, actual WAV playback and download');

    await page.goto(base + '/tools/' + cloneSlug);
    const cloneDemo = await context.request.get(base + await page.locator('#mossSampleAudio').getAttribute('src'));
    assert(cloneDemo.ok());
    assert.equal((await cloneDemo.body()).toString('ascii', 0, 4), 'RIFF');
    for (const selector of ['#mossSampleReferenceAudio', '#mossSampleAudio']) {
      await page.locator(selector).evaluate((player) => {
        player.muted = true;
        return player.play();
      });
    }
    await page.waitForFunction(() => document.getElementById('mossSampleReferenceAudio').paused);
    assert.equal(await page.locator('#mossSampleAudio').evaluate((player) => player.paused), false);
    await page.locator('#mossSampleAudio').evaluate((player) => player.pause());
    assert.equal(await page.locator('#mossResultEmpty').isVisible(), true);
    console.log('PASS original and clone examples play separately');

    const reference = page.locator('#mossReference');
    const consent = page.locator('#mossConsent');
    const cloneText = page.locator('#mossText');
    const sampleText = await cloneText.inputValue();
    const runClone = page.locator('#mossGenerate');
    assert.equal(await consent.isChecked(), true);
    assert.equal(await consent.isDisabled(), true);
    const [chooser] = await Promise.all([
      page.waitForEvent('filechooser'), page.locator('#mossDrop').click(),
    ]);
    await chooser.setFiles({
      name: 'damaged.wav', mimeType: 'audio/wav', buffer: Buffer.from('not a recording'),
    });
    assert.equal(await consent.isChecked(), true);
    await runClone.click();
    await page.locator('#mossHud.is-fail').waitFor();
    assert.match(await page.locator('#mossStatus').textContent(), /Choose a readable/);
    await reference.setInputFiles(join(root, 'samples/moss-nano-voiceover-en.wav'));
    await consent.uncheck();
    await reference.setInputFiles(join(root, 'samples/moss-nano-voiceover-en.wav'));
    assert.equal(await consent.isChecked(), false);
    await runClone.click();
    await page.locator('#mossHud.is-fail').waitFor();
    assert.match(await page.locator('#mossStatus').textContent(), /Confirm that you have permission/);
    assert.equal(requests.length, modelRequests);
    assert.equal(await page.locator('#mossDownload').isDisabled(), true);
    const editedText = 'A replacement line for the sample test.';
    await cloneText.fill(editedText);
    assert.equal(await page.locator('#mossTextCount').textContent(), `${editedText.length} / 240`);
    await page.locator('#mossSample').click();
    await page.waitForFunction(() => document.getElementById('mossReferenceName').textContent === 'Synthetic example reference');
    assert.equal(await cloneText.inputValue(), sampleText);
    assert.equal(await page.locator('#mossTextCount').textContent(), `${sampleText.length} / 240`);
    assert.equal(await consent.isChecked(), false);
    assert.equal(await page.locator('#mossReferenceAudio').isVisible(), true);
    assert.equal(requests.length, modelRequests);
    console.log('PASS consent is checked by default, opt-out survives replacement and sample, invalid and unchecked input do not fetch models');

    await page.reload();
    const dataTransfer = await page.evaluateHandle(async () => {
      const response = await fetch(document.getElementById('mossReference').dataset.sample);
      const blob = await response.blob();
      const transfer = new DataTransfer();
      transfer.items.add(new File([blob], 'dropped-reference.wav', { type: 'audio/wav' }));
      return transfer;
    });
    const dropZone = page.locator('#mossDrop');
    await dropZone.dispatchEvent('dragover', { dataTransfer });
    assert.match(await dropZone.getAttribute('class'), /is-dragover/);
    await dropZone.dispatchEvent('drop', { dataTransfer });
    await dataTransfer.dispose();
    assert.equal(await page.locator('#mossReferenceName').textContent(), 'dropped-reference.wav');
    assert.equal(await page.locator('#mossReferenceAudio').isVisible(), true);
    assert.equal(await consent.isChecked(), true);
    const cloneStart = performance.now();
    await runClone.click();
    await waitForTake(page);
    assert.equal(await page.locator('#mossResultEmpty').isVisible(), false);
    await verifyModelProgress(page, [encoderGraph, encoderWeights]);
    assert.deepEqual(requests.slice(modelRequests).toSorted(), [encoderGraph.name, encoderWeights.name].toSorted());
    await verifyDownload(page, 'clone-en.wav');
    console.log('PASS dropped WAV encoded, result player and download enabled, existing speech model reused', {
      milliseconds: Math.round(performance.now() - cloneStart), extraBytes: encoderGraph.size + encoderWeights.size,
    });

    await page.locator('#mossRecord').click();
    const stopRecording = page.getByRole('button', { name: 'Stop recording' });
    await stopRecording.waitFor().catch(async (error) => {
      throw new Error(`Recording did not start: ${await page.locator('#mossRecordStatus').textContent()}`, { cause: error });
    });
    assert.equal(await page.locator('#mossMicFeedback').isVisible(), true);
    await page.waitForTimeout(3200);
    await stopRecording.click();
    await page.waitForFunction(() => document.getElementById('mossReferenceName').textContent === 'Microphone recording');
    assert.equal(await page.locator('#mossMicFeedback').isVisible(), false);
    assert.equal(await page.locator('#mossResultEmpty').isVisible(), true);
    assert.equal(await consent.isChecked(), true);
    await cloneText.fill('欢迎来到录音室。我们马上开始。');
    await runClone.click();
    await waitForTake(page);
    assert.equal(await page.locator('#mossModelDownload').isVisible(), false);
    await verifyDownload(page, 'clone-zh.wav');
    assert.equal(requests.length, modelRequests + 2);
    assert.deepEqual(pageErrors, []);
    assert.deepEqual(nonGet, []);
    console.log('PASS microphone recording with a synthetic test device, default consent, cross-language WAV and no POST requests');
    await page.close();
    await context.close();
  } finally {
    await browser.close();
  }
}

if (!serve) {
  try {
    await test();
  } finally {
    server.closeAllConnections();
    server.close();
  }
}
