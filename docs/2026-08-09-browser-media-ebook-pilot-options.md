# 浏览器端：电子书 / 视频 / 音频转码试点 — 方案选项

**日期**: 2026-08-09  
**背景**: 对标 Aconvert 音视频与 Ebook 能力，但遵守站内红线（本地优先、禁格式对 doorway、**不做完整转码站**）。  
**关联**: [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md) · [工具方向 A.3/A.4](./2026-07-28-tool-direction.md) · [Aconvert 快照](./competitor-refs/aconvert-2026-08-09/README.md) · [FFmpeg ↔ Aconvert 对照 + 电子书方案](./2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md) · [音视频客户端续研](./2026-08-09-browser-av-client-solutions.md) · [电子书客户端续研](./2026-08-09-browser-ebook-client-solutions.md) · 清单 `audio-wav-mp3` / `audio-recorder` / `audio-trim`

> **用途**：供产品选型。选定前**不**批量建 `work-tasks`、不铺格式矩阵 URL。  
> **共用约束**：单页一带多场景；Tier 2 WASM **点击后再加载**；可见文案写清浏览器限制与隐私；CWV 不因首屏拉 20MB+ WASM 崩盘。

---

## 0. 三品类可行性速览

| 品类 | 浏览器成熟度 | 推荐引擎 | 相对 Aconvert |
|---|---|---|---|
| **音频** | ✅✅ 可用 | Web Audio + `lamejs`（MP3）/ MediaRecorder | 窄格式即可；勿拆 MP3/AAC/FLAC 矩阵 |
| **视频** | ⚠️ 有限 | 轻量：Canvas 截帧；重量：`@ffmpeg/ffmpeg` ~20–30MB | 可试点单页，**不做** `/video/` 全家桶 |
| **电子书** | ⚠️ 分档 | 轻量：JSZip 解 EPUB；重量：Calibre/LibreOffice WASM（巨大/实验） | **禁** AZW/MOBI/EPUB… 格式对矩阵 |

---

## 1. 打包套餐（请选其一）

### 套餐 A — 窄试点三件套（推荐默认）

| # | slug（建议） | 用户任务 | 技术 | SEO |
|---|---|---|---|---|
| 1 | `audio-wav-mp3` | WAV ↔ MP3 | `lamejs` + Web Audio 解码；Tier 2 懒加载 | 清单已有「待 POC」；单页吃 *wav to mp3* / *mp3 to wav* |
| 2 | `video-frame-extractor` | 视频抽封面 / 按秒截帧 → JPG/PNG | `<video>` + Canvas；**无** FFmpeg | 单页吃 *video to jpg* / *extract frame*；不做 avi→mp4 |
| 3 | `epub-unpack` | EPUB 解包：目录、抽封面、导出正文 TXT/HTML（可选 MD） | JSZip + OPF/HTML 解析 | 单页；**不做** epub→mobi / epub→pdf 矩阵 |

**优点**：合规、体积可控、与 Aconvert 差异化（本地隐私）清晰。  
**缺点**：不能宣称「任意格式互转」。  
**工期粗估**：音频 POC 2–3 天 → 视频截帧 1–2 天 → EPUB 解包 2–4 天（含 10 语另计）。

---

### 套餐 B — 音频优先（最低风险）

只立项并 POC：

1. `audio-wav-mp3`（必做）  
2. 可选同迭代：`audio-trim`（Web Audio 切片，输出 WAV/WebM；与转换页 Related）

视频 / 电子书仅保留本文档为备忘，**本迭代不编码**。

**优点**：清单已挂「待 POC」；技术债最少。  
**缺点**：对 Aconvert Video/Ebook 无正面产品回应。

---

### 套餐 C — 视频真转码试点（优先 Mediabunny；FFmpeg 可选兜底）

| slug | 范围（写死边界） | 不做 |
|---|---|---|
| `video-format-converter` / `media-convert` | **仅** 常见容器：输入 MP4/WebM/MOV（及 Mediabunny 已声明可读）→ 输出 MP4 或 WebM 或短 GIF；可选抽音轨 → WAV/MP3 | 不按扩展名拆页；不做 WMV/RM/AVI 全家桶承诺；移动 Safari 未过 POC 不上线 |

加载策略（推荐）：按钮「开始转换」→ 动态 `import('mediabunny')`（min gzip ~161 KiB）+ 按需 `@mediabunny/mp3-encoder`（~129 KiB gzip）；用 `canEncode`/`canDecode` 探测。  
可选兜底：同页「加载 FFmpeg 引擎」→ `@ffmpeg/core` ~31 MiB（见 [AV 客户端续研](./2026-08-09-browser-av-client-solutions.md)）。

音频：套餐 A 的 `audio-wav-mp3`。  
电子书：套餐 A 的 `epub-unpack` **或**本迭代不做。

**优点**：体积与速度远优于纯 FFmpeg.wasm；更接近现代 Web 转码。  
**缺点**：能力随浏览器 WebCodecs；MPL-2.0 须合规确认；文案仍须硬编码支持表。  
**POC 门禁（未过不上线）**：桌面 Chrome 转换成功；Safari 桌面明确支持或降级文案；进度可取消。

---

### 套餐 D — 电子书优先（EPUB 工作流）

| 档 | slug | 能力 | 引擎 |
|---|---|---|---|
| D1 轻量（推荐） | `epub-unpack` / `ebook-text-export` | 目录树、封面、章节 TXT/HTML/MD、内嵌图 ZIP | `@likecoin/epub-ts` 或 `@lingo-reader/epub-parser` + Turndown（详 [客户端续研](./2026-08-09-browser-ebook-client-solutions.md)） |
| D1b 多格式 | 同上页 Tab | + MOBI/AZW3/FB2/CBZ 只读导出 | **foliate-js**（MIT，按需 import） |
| D2 中量 | `epub-to-pdf` 或页内模式 | EPUB 重排 → PDF（`pdf-lib`） | 排版简化；须声明非印刷级 |
| D3 重量（默认不选） | — | Calibre/`ebook-converter-wasm` 或 LibreOffice WASM 多格式 | 下载百 MB 级、实验性；**本站默认不做** |

音视频：按套餐 A 窄做或仅文档备忘。

**优点**：隐私向「拆书 / 喂 LLM」场景清晰（对齐站内 `pdf-to-markdown` 叙事）。  
**缺点**：D2 排版坑多；D3 违「轻量站点」与 CWV。

---

### 套餐 E — 仅方案、本周不 POC

只维护本文 + Aconvert 快照链接；排期让路给 ZIP / 设计师 P0。

---

## 2. 分品类技术选项（细选）

### 2.1 音频

| 选项 | 方案 | 库 | 备注 |
|---|---|---|---|
| **A1（推荐）** | WAV ↔ MP3 单页 | 解码：Web Audio / `decodeAudioData`；编码：`@breezystack/lamejs` | 与清单一致；见 [AV 续研](./2026-08-09-browser-av-client-solutions.md) |
| A2 | + 录音机同页 Tab | MediaRecorder → WebM/WAV，再可选转 MP3 | 可并入 `audio-recorder` Related，忌拆三薄页 |
| A3 | Mediabunny / FFmpeg 统一音视频 | `mediabunny`（主）或 `@ffmpeg/ffmpeg`（兜底） | 体积与许可见 AV 续研；套餐 C |

### 2.2 视频

| 选项 | 方案 | 库 | 备注 |
|---|---|---|---|
| **V1（推荐窄试点）** | 截帧 / 封面 | Canvas + `requestVideoFrameCallback` | 无 WASM；高成功率 |
| V2 | 短视频 → GIF | **gifenc**（站内已有）+ Canvas 帧 | 限制时长（如 ≤15s）写进 Rules |
| **V3** | 真转码 MP4↔WebM | **Mediabunny**（优先）；FFmpeg.wasm 可选兜底 | 套餐 C；须 POC 门禁 |
| V4 | 抽音轨 | Mediabunny / mp4box demux | 宜作为 V3 页内模式，不拆 URL |

### 2.3 电子书

| 选项 | 方案 | 库 | 备注 |
|---|---|---|---|
| **E1（推荐）** | EPUB 解包 + 文本/封面 | JSZip + OPF | 对齐「归档解包」工程经验 |
| E2 | EPUB → Markdown（LLM） | E1 + Turndown | 与 `pdf-to-markdown` Related |
| E3 | EPUB → PDF | E1 + pdf-lib 简排版 | 声明布局限制 |
| E4 | 多格式（MOBI/AZW…） | Calibre WASM 等 | **默认不做**（体量大 + 易矩阵化） |

---

## 3. SEO / 产品红线（试点也适用）

| 禁止 | 允许 |
|---|---|
| `/mp4-to-mp3`、`/epub-to-mobi`、`/avi-to-mp4` 等格式对 URL | 单工具页 FAQ/Use cases 覆盖长尾 |
| 「支持 200+ 格式」口号无表 | 页内**有限支持表** + 失败边界 |
| 首屏同步加载 FFmpeg/Calibre | 用户点击「加载引擎」 |
| 可见文案写 doorway/不拆 URL 工程理由 | 只写用户任务与技术限制 |

---

## 4. 建议决策（若需默认）

若无额外偏好，默认采用 **套餐 A**：

1. POC：`audio-wav-mp3`（Chrome/Firefox/Safari 桌面）  
2. 实现：`video-frame-extractor`（Canvas）  
3. 实现：`epub-unpack`（JSZip）  
4. **明确不做**：E4 多格式书、V3 全家桶、格式百科站  

选定套餐后下一步：`work-tasks/{slug}/` + `coverage:gate` → 再编码；不插队现有 ZIP/设计师 P0，除非你明确改排期。

---

## 5. 现成引擎体积（实测 2026-08-09）

### FFmpeg.wasm — ✅ 可直接引用（npm / CDN）

| 包 | 版本（实测） | 体积 | 说明 |
|---|---|---|---|
| `@ffmpeg/ffmpeg` | 0.12.15 | 包装器 KB 级 | API：`FFmpeg.load()` / `exec()` |
| `@ffmpeg/util` | 0.12.2 | ~20 KB unpacked | `fetchFile` / `toBlobURL` |
| `@ffmpeg/core` | 0.12.10 | **`ffmpeg-core.wasm` ≈ 31.2 MiB**（32,718,323 B）；同目录 JS ≈ 109 KB | 单线程；npm unpacked ≈ 64.7 MB（含 umd+esm 双份） |
| `@ffmpeg/core-mt` | 0.12.10 | wasm 同量级 ≈ 31 MiB + worker JS | 多线程；需 COOP/COEP（`crossOriginIsolated`） |

- 传输层：对单线程 `ffmpeg-core.wasm` 本地 `gzip -9` ≈ **9.8 MiB**（浏览器/CDN 常接近此量级，视压缩而定）。  
- 引用方式：`npm i @ffmpeg/ffmpeg @ffmpeg/util`，`coreURL`/`wasmURL` 指向自托管 `public/vendor/…` 或 jsDelivr/unpkg；**点击后再 `load()`**。  
- 许可：core 为 **GPL-2.0-or-later**（集成前须合规评审）。  
- 仓库：[ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)

### Calibre WASM — ⚠️ 无官方可「直接 npm 引用」的成品

| 方案 | 状态 | 体积 | 结论 |
|---|---|---|---|
| 官方 Calibre | **无**浏览器 WASM 发行 | — | 不能直接引用 |
| [ebook-converter-wasm](https://github.com/Luc4sguilherme/ebook-converter-wasm) | 实验 POC；**未发 npm**；无 GitHub Release 预编译包；需 Docker 自建（~8 GB 盘、首编 ~10 min） | 未公布制品大小；栈含 **Pyodide + Calibre 移植**。单独 `pyodide@314.0.3` npm：pack ≈ 6.5 MB / unpacked ≈ 13.9 MB（`pyodide.asm.wasm` ≈ 9.6 MB + stdlib ≈ 2.5 MB）——**Calibre 全量必远大于此**，须自建后实测 | **不能当生产依赖直接引用**；GPLv3；作者自标 not production-ready |
| `@matbee/libreoffice-converter`（文档互转，**不是 Calibre**） | npm 有现成包 v2.0.0 | 包内传输：`soffice.wasm.gz` ≈ **46.4 MiB** + `soffice.data.gz` ≈ **27.1 MiB**（合计 ≈ **73.5 MiB**）；解压后 ≈ **140.6 + 95.1 ≈ 236 MiB**（与 README「~240 MB」一致） | EPUB 等在其输入列表中，但体量与定位不适合本站轻量试点 |

**本站默认**：电子书走 **JSZip EPUB 解包（E1）**；需要真转码再评估 FFmpeg（套餐 C）；**不**默认接入 Calibre WASM / LibreOffice WASM。

---

## 6. 请回复选型

请回复下列之一（可微调）：

- `套餐 A` / `B` / `C` / `D`（可写 D1 或 D1+E2）/ `E`  
- 若选 C：是否接受「移动 Safari 降级或不支持」文案  
- 是否允许试点插队现有 P0（默认：**否**）
