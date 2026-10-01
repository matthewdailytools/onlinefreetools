# 00 — 原始需求

**来源**：能力图 D2（`docs/media/2026-10-01-browser-av-capability-map.md` §4.6 / §6.1 / §8）  
**日期**：2026-10-01  
**用户原话**：立项和实现D2

## 意图

浏览器内**单文件**把本地 **MKV → MP4**，音轨须 **AAC（立体声）转码**（不是纯 remux）。解决抽音页无法处理的超大/DDP 路径中的「先转成可抽音 MP4」一步；与 D1 文案引导互补——本页在浏览器内完成转换。

## 明确不做

- 批量 convert（D3）
- YouTube / URL 下载
- 宣称支持任意 Atmos 直通不转码
- 把 ffmpeg.wasm 整包进 Assets（单文件 >25 MiB 硬限）；底座用 **mediabunny + @mediabunny/ac3 + @mediabunny/aac-encoder**
