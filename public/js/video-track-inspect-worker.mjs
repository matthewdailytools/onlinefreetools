import * as mb from '/vendor/mediabunny/mediabunny.min.mjs';
import { getTrackContainerCodecSupport, summarizeContainerCodecSupport } from './video-track-container-fit.mjs';

function internalId(value) {
  if (value == null) return null;
  if (value instanceof Uint8Array) return [...value].map((v) => v.toString(16).padStart(2, '0')).join('');
  return String(value);
}

self.onmessage = async (event) => {
  const file = event.data.file;
  const input = new mb.Input({ source: new mb.BlobSource(file, { maxCacheSize: 8 * 1024 * 1024 }), formats: mb.ALL_FORMATS });
  try {
    if (!await input.canRead()) throw new Error('Unsupported or damaged container');
    const tracks = await input.getTracks();
    if (!tracks.some((track) => track.isVideoTrack())) throw new Error('No video track in this file');
    const format = await input.getFormat();
    const data = [];
    const supportedCodecs = { mp4: new Set(new mb.Mp4OutputFormat().getSupportedCodecs()), webm: new Set(new mb.WebMOutputFormat().getSupportedCodecs()) };
    for (const track of tracks) {
      if (!track.isVideoTrack() && !track.isAudioTrack()) continue;
      const item = {
        type: track.type, id: track.id, number: track.number,
        codec: await track.getCodec(), codecParameter: await track.getCodecParameterString(),
        internalCodecId: internalId(await track.getInternalCodecId()),
        language: await track.getLanguageCode(), name: await track.getName(),
        canDecodeHere: await track.canDecode(),
        startSeconds: await track.getFirstTimestamp(),
        metadataEndSeconds: await track.getDurationFromMetadata(),
        averageBitrate: await track.getAverageBitrate(),
        disposition: await track.getDisposition(),
      };
      item.containerCodecSupport = getTrackContainerCodecSupport(item.codec, supportedCodecs);
      if (track.isVideoTrack()) {
        item.width = await track.getDisplayWidth(); item.height = await track.getDisplayHeight(); item.rotation = await track.getRotation();
      } else if (track.isAudioTrack()) {
        item.channels = await track.getNumberOfChannels(); item.sampleRate = await track.getSampleRate();
      }
      data.push(item);
    }
    self.postMessage({ ok: true, report: { fileName: file.name, fileBytes: file.size, container: format.name, mimeType: await input.getMimeType(), tracks: data, targetContainerCodecFamilies: summarizeContainerCodecSupport(data), durationBasis: 'container and track metadata; may be approximate', checkedAt: new Date().toISOString() } });
  } catch (error) { self.postMessage({ ok: false, error: String(error?.message || error) }); }
  finally { input.dispose(); }
};
