# Web AI 语音专项

2026-11-06 启动。普通 HTTPS 网页是主要入口。用户的文稿、录音和成品由浏览器处理。模型按需准备，字幕、合并、混音和生成分别验证。

| 工作项 | 范围与验收 |
| --- | --- |
| 首页 AI 入口 | 在三张介绍卡片与最新上线之间推荐授权声音克隆。保留顶部导航和全部工具入口。 |
| 文字转语音 | `/tools/text-to-speech-for-voiceovers`。粘贴短稿、选预设音色，按需准备模型，在浏览器生成、试听和下载 WAV。 |
| 授权声音克隆 | `/tools/clone-a-voice-from-a-recording`。导入或录制短参考，试听并确认授权，输入新稿，生成并下载 WAV。 |
| 音频混音 | 复用现有 mix-a-voiceover-with-background-music。先验收人声与配乐，再评估扩展多轨叠加、偏移和削波提示。 |
| 顺序合并 | 复用现有 join-audio-files-in-order，按输入顺序验收下载结果。 |
| 模型和离线 | 按文件校验 SHA-256 后写入 OPFS，重开页面时可复用。完整离线重开还需要缓存页面和运行时，并单独验收。 |

## 验证记录

- MOSS ONNX 上游提供 TTS 图、共享权重及 SentencePiece 模型，另需配套音频 tokenizer。上游 Reader 可作为移植参考。[模型卡](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M-ONNX) · [Reader](https://github.com/OpenMOSS/MOSS-TTS-Nano-Reader)
- Hugging Face 直连的 TLS 握手在本机失败。镜像提供了两套固定版本的完整文件，浏览器发布目录所需的 10 个对象均对照上游 LFS 校验通过。
- Windows Chrome 156 普通页面，在本机 HTTP 静态源上完成模型下载、Worker 推理、播放和下载。8 个文字转语音对象为 716,889,409 字节，首次成功生成一次约 22 秒。本地静态源耗时不代表用户公网下载耗时。
- 英文渡轮提示和中文渡轮提示分别产生 4.56 秒和 4.24 秒 WAV。重新打开中文页面后模型请求没有增加。空输入、下载失败、取消、保留文稿及重试均通过。
- 授权克隆用合成英语旁白作参考，从文件导入后生成一条 3.60 秒英文新稿，复用语音模型并另取 45,322,911 字节。通过麦克风测试设备录入合成语音后生成 3.28 秒中文新稿。授权项默认勾选，手动取消会随当前页的参考变更保留。授权项取消或录音无效时，生成操作在下载模型前中止。
- 四份输出均为 48 kHz、立体声、16 位 PCM WAV，播放时间能推进，下载文件的 SHA-256 与试听使用的 Blob 一致。验收使用合成参考，未进行真人音色相似度评测。
- 另用本机 Whisper tiny 回读四份输出。英语和中文克隆新稿均可识别，普通文字转语音的渡轮报时样例有词语及数字转写偏差。回读可验证输出为相应语言的语音，无法单独区分合成读音与识别误差。
- Windows Edge 156 使用 Playwright 1.65.0 完成同一套验收。确认首次模型大小、OPFS 存档、中英生成、授权和参考录制、试听与下载、跨语言新稿以及退出均通过。仓库原有 Playwright 1.49.1 的 Edge 测试在所有功能断言完成后退出异常。
- 两个 slug 的 0b、2、4、all 及 `verify:tool` 通过。共享首页和语音模块按专项跨工具模式运行隔离检查。全站 `npm run verify` 通过，生成 319 个工具的十语页面。根首页和各语言首页均有声音克隆推荐位。

## Cloudflare 模型分发

**可以使用 R2 托管完整模型。** 两套 ONNX 仓库的模型卡标注 Apache-2.0。现有前端按固定版本读取 `assets.onlinefreetools.org/models/moss-nano/f52645cb-ceff0d07/`，每个文件单独校验，之后可复用浏览器缓存。[TTS 模型卡](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M-ONNX) · [音频 tokenizer 模型卡](https://huggingface.co/OpenMOSS-Team/MOSS-Audio-Tokenizer-Nano-ONNX)

| 项 | 决策 |
| --- | --- |
| 模型体积 | 文字转语音 8 个对象，716,889,409 字节。克隆另加 2 个，共 762,212,320 字节。最大对象 440,813,568 字节，约 420.4 MiB。 |
| 静态资源限制 | Pages 与 Workers Static Assets 单文件 25 MiB，权重直接放 R2。页面、WASM 和 JS 留在现有同域 Assets。最大对象低于常规 Cloudflare CDN 的 512 MB 单文件缓存上限。 [Pages 限制](https://developers.cloudflare.com/pages/platform/limits/) · [Workers 限制](https://developers.cloudflare.com/workers/platform/limits/#static-assets) · [CDN 缓存限制](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/) |
| R2 上传 | 使用 R2 S3 API 上传 10 个对象到公开 `assets` 桶的版本前缀，保留原文件名与许可证资料。R2 的单次上传上限约 5 GiB，此版本的对象都在范围内。 [R2 限制](https://developers.cloudflare.com/r2/platform/limits/) |
| 跨域与缓存 | 自定义域允许站点源的 GET、HEAD 和 Range。公网下载使用固定版本下的 `.bin` 键，利用 Cloudflare 默认扩展名缓存。浏览器仍按模型原名校验并存入 OPFS。切换模型内容时换版本路径。 [R2 CORS](https://developers.cloudflare.com/r2/buckets/cors/) · [默认缓存扩展名](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#default-cached-file-extensions) |
| 成本 | R2 Standard 的直接公网出站免费，存储和操作按 R2 定价计量。上线后分别观察冷下载量、缓存命中、对象 GET 和失败率。 [R2 定价](https://developers.cloudflare.com/r2/pricing/) |

生产发布先在 R2 校验各模型对象的大小与 SHA-256，再用站点 Origin 探测自定义域的 CORS 和缓存。首次下载和浏览器重开复用使用独立 Chrome 配置验收。

## 本机复现

```powershell
node ops/stage-moss-nano-models.mjs --mirror
npm.cmd run build:site
node scripts/tool-modules/test-moss-voice-browser.mjs --serve
```

如本机能连 Hugging Face，可省略 `--mirror`。模型存放在忽略提交的 `.cache/moss-models`。预览服务器监听 `127.0.0.1:8457`，仅提供静态文件。用仓库现有 Playwright 运行验收时设置 `CHROMIUM_PATH` 指向本机 Chrome，并省略 `--serve`。WAV 和日志可放在 `.cache`。
