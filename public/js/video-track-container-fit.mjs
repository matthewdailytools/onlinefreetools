// Codec-family check only. Packet details, target rules, decoder and encoder support
// must still be checked by a conversion page before it promises an output file.
export function getTrackContainerCodecSupport(codec, supportedCodecs) {
  if (!codec) return { mp4: null, webm: null };
  return {
    mp4: supportedCodecs.mp4.has(codec),
    webm: supportedCodecs.webm.has(codec),
  };
}

export function summarizeContainerCodecSupport(tracks) {
  const summary = {};
  for (const target of ['mp4', 'webm']) {
    const states = tracks.map((track) => track.containerCodecSupport?.[target] ?? null);
    summary[target] = states.includes(false) ? false : states.includes(null) || !states.length ? null : true;
  }
  return summary;
}
