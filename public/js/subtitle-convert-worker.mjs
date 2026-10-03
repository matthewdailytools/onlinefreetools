import { decodeSubtitle, detectFormat, convertSubtitle } from './subtitle-convert-engine.mjs';

self.onmessage = (event) => {
  const { bytes, name, target, encoding, bom } = event.data;
  try {
    const decoded = decodeSubtitle(new Uint8Array(bytes), encoding);
    const source = detectFormat(name, decoded.text);
    const result = convertSubtitle(decoded.text, source, target, bom);
    const outputBytes = new TextEncoder().encode(result.output);
    self.postMessage({ ok: true, bytes: outputBytes.buffer, source, encoding: decoded.encoding, count: result.count, first: result.first, last: result.last, losses: result.losses, preview: result.cues[0].text.slice(0, 140) }, [outputBytes.buffer]);
  } catch (error) {
    self.postMessage({ ok: false, error: String(error?.message || error) });
  }
};
