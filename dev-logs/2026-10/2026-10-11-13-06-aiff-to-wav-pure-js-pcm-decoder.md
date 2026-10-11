Date: 2026-10-11 13:06
Summary: Fixed AIFF to WAV in Chrome by parsing uncompressed AIFF, AIFF-C and CAF PCM in JavaScript instead of relying on decodeAudioData, which cannot read the AIFF container.
Visibility: people

[question]
修正缺陷

## Tool links (English)
- https://onlinefreetools.org/tools/convert-an-aiff-file-to-wav

[try to solve]
## Context

Production QA of the video and sound tools found one real failure: on the AIFF to WAV page, the automatic Load sample showed "This browser could not decode the AIFF or CAF…" in Chrome, and Download WAV never became available. The sample (`public/samples/convert-an-aiff-file-to-wav.aiff`) is a valid file: `FORM`/`AIFF`, a `COMM` chunk declaring 2 channels, 220,500 frames, 16 bits and 44,100 Hz, followed by an `SSND` chunk. So real user AIFF exports would fail the same way.

## Process

1. Read the page script. The pipeline was: read bytes → magic check (`FORM`+`AIFF|AIFC` or `caff`) → `AudioContext.decodeAudioData` → 16-bit WAV writer.
2. Confirmed the sample header by hand. The 80-bit extended sample rate `400E AC44 0000 0000 0000` resolves to 44,100 Hz, so the file is well-formed.
3. Concluded the failure comes from the decoder. Chromium's `decodeAudioData` does not support the AIFF container at all (Safari does), so any AIFF fails in Chrome no matter how clean it is.
4. Added a parser that does not need Web Audio, and kept `decodeAudioData` as the fallback for compressed formats.
5. Tested in real Chrome by loading the production URL with the tool HTML swapped for the local build. This exercised the auto sample, four generated uploads, a wrong-format file and a retry, and checked the headers and peak amplitude of every downloaded WAV.

## Root cause / analysis

The tool assumed browser decode support for AIFF/CAF. In practice, Chrome and other Chromium browsers reject AIFF, so the main path of the page failed in the most common browser. Uncompressed AIFF is simple big-endian PCM, so decoding it in JavaScript is small, deterministic and works in every browser. Compressed variants (ALAC, IMA4, μ-law and similar) are still sent to the browser, where support truly varies, and the existing honest error message still applies to them.

## Solution

`src/pages/convertAnAiffFileToWavPage.ts` client script:

- `parseAiffPcm`: walks the IFF chunks (padded to even length), reads `COMM` (channels, frames, bit depth, 80-bit extended rate via `readExtended`, and the AIFF-C compression type), then reads `SSND` from its declared offset. Supported: AIFF PCM in 8, 16, 24 and 32 bit, plus AIFF-C `NONE`, `sowt` (little-endian), `fl32` and `fl64`.
- `parseCafPcm`: reads the CAF `desc` chunk (float64 rate, `lpcm`, float and little-endian flags, channels, bits) and the `data` chunk, skipping the 4-byte edit count. A data size of `-1` means "to end of file".
- `readInterleaved` turns interleaved samples into per-channel `Float32Array`s. `pcmBuffer` wraps them in the AudioBuffer shape (`duration`, `sampleRate`, `getChannelData`) that the existing `writeWav` already expects, so the WAV writer and resampling code did not change.
- `decodeAiffOrCaf` tries the built-in parser first and falls back to `decodeAudioData`. It throws `err_decode` only if both fail.
- Bumped the catalog `updatedAt` to 2026-10-11.

Verification:

- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=convert-an-aiff-file-to-wav` passed: HTML smoke, SEO, vendor and isolation lints.
- Full `npm run build:site` passed (3,670 gzip pages).
- Browser test results:

| Case | Result |
| --- | --- |
| Auto sample | 5.00 s, stereo 44.1 kHz WAV, 882,000 data bytes |
| 24-bit mono 48 kHz AIFF | Converted |
| AIFF-C `sowt` stereo | Converted |
| AIFF-C `fl32` stereo | Converted |
| CAF `lpcm` stereo | Converted |
| Plain-text `.aiff` | Format error, Download stays disabled |
| Load sample again after the error | Converts |

- All downloads were valid `RIFF/WAVE` 16-bit files with the expected channel count, and no page errors occurred.

## Notes / boundaries

- Compressed AIFF-C/CAF still depends on browser decode support; the copy "decode support varies" stays accurate for those, so the ten-locale text was not changed.
- Resampling (for example 48 kHz → 44.1 kHz) still uses the existing nearest-sample method; behaviour is unchanged.
- The ad-hoc browser test lives in `scripts/tmp/` and is not committed.

[actions]
- `src/pages/convertAnAiffFileToWavPage.ts`: added `pcmBuffer`, `readInterleaved`, `readExtended`, `parseAiffPcm`, `parseCafPcm`, `decodeAiffOrCaf`; `convert()` now calls `decodeAiffOrCaf`.
- `src/site/tool-catalog.d/convert-an-aiff-file-to-wav.json`: `updatedAt` → 2026-10-11.
- `npm run verify:tool`, `npm run build:site`, local Chrome acceptance script.
