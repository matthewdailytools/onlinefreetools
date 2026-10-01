# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **T1**：`make-srt-subtitles-from-an-audio-file`。SpeechRecognition + 时间轴 → SRT；与 A4 相同诚实浏览器边界；无巨大 wasm Whisper。related：`transcribe-an-audio-file-to-text`、`make-a-waveform-video-from-audio`。Rich ten locales。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 2026-09-30 追加（用户）

> 以「在浏览器里跑 Whisper」为基础给出可覆盖工具后：**立项和实现一个，先进行测试，没有问题后再覆盖其他 whisper 工具。**  
> 决策：托管 = 切片入库 `public/vendor/whisper/`；试点 = 升级本 slug（非新建）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` T1（slug 不变）。
- 必须本地处理：是（模型与推理均在标签页；同域 `/vendor/whisper`）。
- YMYL：否。
- 禁止：CDN / huggingface.co 运行时拉取；Assets 单文件 >25 MiB；宣称云端准确率或烧录视频。

## 建议 slug

- `make-srt-subtitles-from-an-audio-file`（保留）
