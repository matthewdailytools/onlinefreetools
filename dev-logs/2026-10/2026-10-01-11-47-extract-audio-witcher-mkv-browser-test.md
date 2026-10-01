Date: 2026-10-01 11:47
Summary: Local browser full test of a 2.76 GiB Witcher S01E01 MKV failed with err_limit—MKV is outside ISOBMFF demux and exceeds the 500 MiB MediaElement fallback.
Visibility: people

[question]
采用 下载文件夹下的 The.Witcher.S01E01.iNTERNAL.1080p.WEB.X264-AMRAP.mkv进行本地浏览器完整测试

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file

[try to solve]
## Context
Run an end-to-end local browser extract against a real ~2.8 GiB episode file from Downloads.

## Process
1. Resolved path:  
   `/Users/xuli/Downloads/The.Witcher.S01E01.1080p.NF.WEBRip.DDP5.1.Atmos.x264-AMRAP[rartv]/The.Witcher.S01E01.iNTERNAL.1080p.WEB.X264-AMRAP.mkv`
2. Probed: size **2 962 526 417** bytes (~2.76 GiB), duration ~**3665 s** (~61 min), video H.264, audio **E-AC-3 6 ch** @ 48 kHz.
3. Playwright against `http://127.0.0.1:8787/zh/tools/...`:
   - UI pick + Extract → HUD fail in ~0.5 s (page i18n still shows stale “200 MiB / 3 h” from R2 HTML).
   - Direct `OftExtractAudio.extractFile` on the same File → **`err_limit`** in ~30 ms.
4. Caps observed from live vendor: `HARD_MAX=5 GiB` (OPFS), `STREAM_FALLBACK=500 MiB`, `isIsoBmff(mkv)=false`.

## Root cause / analysis
- Demux+WebCodecs path only accepts ISOBMFF (`.mp4/.mov/...`). **`.mkv` is not ISOBMFF.**
- Non-ISOBMFF uses MediaElement fallback capped at **500 MiB** → 2.76 GiB rejects before decode.
- Even after remux to MP4, this source audio is **E-AC-3 5.1**; Chrome WebCodecs often lacks E-AC-3, and the tool only keeps **1–2 channels**—would need AAC stereo (or similar) for the demux path to succeed.

## Solution
Test completed; result is an expected hard fail for this container/size. Reports: `/tmp/ea-witcher-mkv-browser-test.json`, `/tmp/ea-witcher-mkv-api.json`.  
To exercise the 5 GiB demux path on this episode, remux/transcode to MP4 + AAC stereo first (not done in this run).

## Notes / boundaries
- Local tool HTML in R2 still carries old limit copy; vendor JS already has 5 GiB/OPFS logic.
- Cursor browser cannot attach OS filesystem paths to `<input type=file>`; Playwright performed the file pick.

[actions]
- Playwright UI + API test of Witcher MKV on local `:8787`
