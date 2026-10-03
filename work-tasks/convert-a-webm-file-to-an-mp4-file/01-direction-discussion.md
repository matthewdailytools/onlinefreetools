# 01 — 方向讨论与搜索样本

**立项结论**：单件 `/tools/convert-a-webm-file-to-an-mp4-file`。用户需要浏览器录屏 WebM 得到可播放的 H.264/AAC MP4，而不是仅改扩展名或把 VP9 包进 MP4。已有 MKV→MP4 工具的默认 Mediabunny 路径实测把 VP9 视频原样拷进 MP4；本工具强制视频 `avc` 重编码并把音频转 AAC。

## 搜索与权威依据

- [Convertio WebM→MP4](https://convertio.co/webm-mp4/) 与 [Format Factory WebM→MP4](https://formatfactory.io/webm-to-mp4)：用户搜法集中在格式对、真编码、画质/体积选择。
- [Mediabunny conversion guide](https://mediabunny.dev/guide/converting-media-files)：自动复制轨道可能留下不兼容 codec；`forceTranscode` 可要求重编码。本站 3 秒 VP9+Opus WebM POC：默认路径的 MP4 仍是 VP9/AAC；显式 `video.codec='avc'` 后外部 `ffprobe` 为 H.264/AAC。
- [MDN WebCodecs codec selection](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection)：H.264/AAC MP4 是广泛播放器兼容的目标组合，但编码能力取决于浏览器和设备，须动态探测并对不可用情况给出错误。
- [MDN VideoEncoder support detection](https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder/isConfigSupported_static)：编码器支持应按实际尺寸探测；WebCodecs 非所有浏览器统一可用。

## 与邻近页区分

- 现有 `convert-an-mkv-file-to-an-mp4-file` 的源容器、轨道组合和失败边界不同，不能只换 title 作为 WebM 页面。
- `convert-a-mov-file-to-an-mp4-file` 另有 QuickTime/H.264/HEVC 兼容与 copy/re-encode 判定。
- `extract-audio-from-a-webm-file` 只生成音频；本页必须保留视频画面和可用音轨。

## 独立 IG

源视频 codec、尺寸/时长、音频 codec、输出目标 H.264/AAC 与真实体积；解释“改后缀”“VP9 装入 MP4”和真正兼容成片的差异；无音轨、损坏文件、设备缺 H.264 encoder 的边界；逐项显示编码进度与可播放下载。
