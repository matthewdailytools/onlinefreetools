# 01 — 方向决策

主方向 A。用浏览器 Worker 和 ONNX Runtime Web 将短文稿生成 PCM，再导出 WAV。以短视频旁白、课程引导和播客开头为默认场景。浏览器下载版本固定的静态权重，推理无需服务端 API。

将授权参考录音留给独立克隆工作流。试听采用随页提供的实际合成样例，模型在点生成后下载。Cloudflare 只承担静态模型分发。

依据 [工具方向](../../docs/2026-07-28-tool-direction.md)、[IG 策略 §3.1、§3.8](../../docs/2026-07-28-google-seo-strategy-implementation.md) 与 [每工具开发与 SEO 方案](../../docs/2026-07-28-per-tool-dev-seo-plans.md)。
