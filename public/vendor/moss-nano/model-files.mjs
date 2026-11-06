// LFS sizes and SHA-256 hashes from the pinned OpenMOSS model repositories.
const tts = ['MOSS-TTS-Nano-100M-ONNX', 'f52645cb467506d8e18e746ddd59482685b74e58'];
const codec = ['MOSS-Audio-Tokenizer-Nano-ONNX', 'ceff0d0749bfb3fa2d61149794ec6feef0d1e1ae'];

export const MODEL_VERSION = 'f52645cb-ceff0d07';
export const MODEL_PATH = `/models/moss-nano/${MODEL_VERSION}/`;
export const MODEL_CDN = `https://assets.onlinefreetools.org${MODEL_PATH}`;

function asset([repo, revision], name, size, sha256) {
  return { repo, revision, name, size, sha256 };
}

export const tokenizerFile = asset(tts, 'tokenizer.model', 470897, 'c353ee1479b536bf414c1b247f5542b6607fb8ae91320e5af1781fee200fddff');
export const graphs = {
  prefill: asset(tts, 'moss_tts_prefill.onnx', 283305, 'd56126dcd0574c2f15d98fc6b35eda68d0386b5bd9c5e38e28548d6f2ea8f3db'),
  decode: asset(tts, 'moss_tts_decode_step.onnx', 291483, '698cbc2fc1c2feca16e5895614ed52bbb32ded10f236c076f477b2e69abf32d8'),
  sample: asset(tts, 'moss_tts_local_fixed_sampled_frame.onnx', 471262, '40cdb00efc171c450cf91468e01429caa41b0252222cd308e978f58fe354afa8'),
  audio: asset(codec, 'moss_audio_tokenizer_decode_full.onnx', 681902, '0fbbafe3fd4afa2a019af5c5ced204af6e2d1db044fa40f021525d2aee95b4ac'),
};
export const weights = {
  global: asset(tts, 'moss_tts_global_shared.data', 440813568, 'bce8312c3df6a44545302cae229b61054fe0672e0b252ba59cba47adeed831dc'),
  local: asset(tts, 'moss_tts_local_shared.data', 229678080, 'bae7782032c0fb12490ab42afe009f87ae6c75a0f0596fc7b5c08e4d5ee93916'),
  audio: asset(codec, 'moss_audio_tokenizer_decode_shared.data', 44198912, 'e69d52e0f4e84ca27850557ee54face46632d3a5a16c89bd246c7c408466dcad'),
};
export const speechFiles = [tokenizerFile, ...Object.values(graphs), ...Object.values(weights)];
export const encoderGraph = asset(codec, 'moss_audio_tokenizer_encode.onnx', 815775, 'eadea4a645abdcf98714c7aead122ee2ce7da6e080f9f80b977cd1ca8e19473a');
export const encoderWeights = asset(codec, 'moss_audio_tokenizer_encode.data', 44507136, 'aa751265b2bab2887eac224484546b194875aa7494b607115439b3dc6b228a2c');
export const cloneFiles = [...speechFiles, encoderGraph, encoderWeights];

export function upstreamUrl(host, file) {
  return `https://${host}/OpenMOSS-Team/${file.repo}/resolve/${file.revision}/${file.name}?download=true`;
}
