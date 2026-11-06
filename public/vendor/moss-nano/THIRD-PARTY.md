# MOSS Nano browser assets

- OpenMOSS and MOSI.AI, MOSS-TTS-Nano, Apache-2.0. The fixed-sampler flow follows `ort_cpu_runtime.py`. The selected prompt codes and template tokens come from `browser_poc_manifest.json` at revision `f52645cb467506d8e18e746ddd59482685b74e58`. [Source](https://github.com/OpenMOSS/MOSS-TTS-Nano) · [Weights](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M-ONNX/tree/f52645cb467506d8e18e746ddd59482685b74e58)
- OpenMOSS and MOSI.AI, MOSS-Audio-Tokenizer-Nano-ONNX, Apache-2.0. The browser uses the full decoder and loads the encoder for reference audio. [Weights](https://huggingface.co/OpenMOSS-Team/MOSS-Audio-Tokenizer-Nano-ONNX/tree/ceff0d0749bfb3fa2d61149794ec6feef0d1e1ae)
- Microsoft, ONNX Runtime Web `1.31.0-dev.20260914-8d85527a0`, MIT. The WASM pair under `../whisper/` is from the same build. [Source](https://github.com/microsoft/onnxruntime)
- `@sctg/sentencepiece-js` 1.3.3, Apache-2.0, and `@noble/hashes` 2.0.1, MIT. The browser bundle uses the in-memory SentencePiece loader with filesystem and Base64 shims and the streaming SHA-256 implementation. [SentencePiece package](https://github.com/sctg-development/sentencepiece-js) · [Noble hashes](https://github.com/paulmillr/noble-hashes)

The bundled WAV examples contain generated speech. The cloning example uses the English voiceover example as its synthetic reference. See the accompanying license files.
