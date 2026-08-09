# FFmpeg.wasm vs Aconvert 音视频能力 + 电子书替代方案调研

**日期**: 2026-08-09  
**关联**: [Aconvert 快照](./competitor-refs/aconvert-2026-08-09/README.md) · [试点选项](./2026-08-09-browser-media-ebook-pilot-options.md) · [电子书客户端续研](./2026-08-09-browser-ebook-client-solutions.md) · [音视频客户端续研](./2026-08-09-browser-av-client-solutions.md) · [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md)

---

## 1. 总结论

| 问题 | 结论 |
|---|---|
| FFmpeg.wasm 能否「完成」Aconvert 全部音视频工具？ | **功能操作层面：大部可覆盖**（转码/裁剪/合并/压缩/抽轨/旋转/裁切/加边/抽帧→GIF）。**格式覆盖与体验：不能对等**——冷门容器/专有编解码、200MB 云端吞吐、批量与移动端稳定性不如 Aconvert 服务端。 |
| 本站是否应复制其全家桶？ | **否**。SEO 禁格式对矩阵；产品红线不做完整转码站。若做：单页 + 有限支持表 + 点击加载 ~31 MiB core。 |
| 电子书？ | FFmpeg **无关** ebook。浏览器侧宜走 **解析/导出文本**，勿跟 Calibre 全格式互转；见 §4。 |

**默认 core 编解码（`@ffmpeg/core` 官方站点列出）**：视频 x264 / x265 / libvpx(VP8/9) / theora；音频 lame(MP3) / vorbis / opus；另有 libwebp、libass、freetype。**不是**桌面完整 FFmpeg 全集。

---

## 2. Aconvert 音视频工具 → 技术能力对照

图例：✅ 可用 · ⚠️ 部分/有条件 · ❌ 不现实或勿承诺 · 🔀 可用更轻方案（不必 FFmpeg）

### 2.1 Video（[sitemap](https://www.aconvert.com/sitemap.html)）

| Aconvert 工具 | 用户任务 | FFmpeg.wasm | 推荐命令/能力要点 | 更轻替代 |
|---|---|---|---|---|
| **Convert** `/video/` | 容器/编码互转（MP4/AVI/MKV/WMV/WEBM/MOV/…） | ⚠️ | `-i in -c:v libx264 -c:a aac out.mp4` 等；**常见** MP4/WebM/MOV/MKV/OGV/GIF 可行。**弱/不可靠**：WMV/ASF、RM/RMVB、部分老 AVI 专有码、部分 HEVC 硬件轨 | — |
| **Cut** `/video/split/` | 按时长裁切 | ✅ | `-ss START -to END -i in -c copy out`（流复制）或重编码 | — |
| **Merge** `/video/merge/` | 多段拼接 | ⚠️ | concat demuxer / filter；需同编码参数，否则先统一再拼 | — |
| **Compress** `/video/compress/` | 降码率/分辨率 | ✅ | `-vf scale=… -b:v … -b:a …` | — |
| **Extract** `/video/extract/` | 抽音轨 / 抽帧 | ✅ | 音轨：`-vn -acodec …`；帧：`-ss t -vframes 1 out.jpg` | 🔀 单帧：**Canvas** `drawImage(video)` |
| **Rotate** `/video/rotate/` | 旋转/转置 | ✅ | `-vf transpose=…` / `rotate` | 🔀 预览向可用 CSS；导出仍要重编码 |
| **Crop** `/video/crop/` | 画面裁切 | ✅ | `-vf crop=w:h:x:y` | — |
| **Pad** `/video/pad/` | 加边/改画幅 | ✅ | `-vf pad=…` | — |
| （Hub 选项）改尺寸/码率/帧率/比例/静音/GIF 时长 | ✅/⚠️ | 均可用 filter + 编码参数；GIF 宜限短片段 | 🔀 GIF：`gif.js` 短片 |

**Aconvert 视频目标格式（Hub）**：MP4 AVI MPG MKV WMV M2TS WEBM FLV ASF MOV M4V RM VOB OGV SWF GIF  

| 格式簇 | FFmpeg.wasm 预期 |
|---|---|
| MP4/M4V/MOV（H.264/AAC） | ✅ 主力 |
| WEBM（VP8/VP9 + Opus/Vorbis） | ✅ |
| MKV（常见 H.264/AAC/Opus） | ⚠️ 解复用多可；编码按编解码器 |
| GIF | ✅ 短片；长片内存爆 |
| OGV（Theora） | ✅（体积/质量一般） |
| MPEG/MPG、VOB | ⚠️ 解码常见；再封装看内容 |
| FLV / 部分 SWF | ⚠️ FLV 偶可；SWF 勿承诺 |
| AVI | ⚠️ 视四字节码 |
| M2TS | ⚠️ 大文件内存敏感 |
| WMV / ASF | ❌/极弱 勿承诺 |
| RM / RMVB | ❌ 勿承诺 |

### 2.2 Audio（sitemap）

| Aconvert 工具 | 用户任务 | FFmpeg.wasm | 要点 | 更轻替代 |
|---|---|---|---|---|
| **Convert** `/audio/` | MP3/WAV/OGG/AAC/FLAC/M4A/… 互转 | ⚠️ | MP3(`libmp3lame`)、WAV、FLAC、OGG/Vorbis、Opus、AAC（视 build）✅ 常见路径。**弱**：WMA、RA、部分 AC3/AMR | 🔀 WAV↔MP3：`lamejs` + Web Audio（清单 `audio-wav-mp3`） |
| **Cut** `/audio/split/` | 裁片段 | ✅ | `-ss` / `-to`；可 `-c copy` | 🔀 Web Audio 切片 |
| **Merge** `/audio/merge/` | 拼接 | ✅ | concat | 🔀 Web Audio OfflineContext |
| **Compress** `/audio/compress/` | 降码率 | ✅ | `-b:a 128k` 等 | — |
| **Extract** `/audio/extract/` | 从视频抽音频 / 抽流 | ✅ | `-vn`；与 Video Extract 同源 | — |
| （Hub）采样率/码率 | ✅ | `-ar` / `-b:a` | — |

**Aconvert 音频格式**：WAV WMA MP3 OGG AAC AU FLAC M4A MKA AIFF OPUS RA（及 AC3/AMR 等扩展）  

| 格式 | FFmpeg.wasm | 备注 |
|---|---|---|
| WAV / AIFF / AU | ✅ | PCM 友好 |
| MP3 | ✅ | lame |
| OGG / Opus | ✅ | |
| FLAC | ✅ | |
| M4A / AAC | ⚠️ | 视 build 是否含编码器；解码多可 |
| MKA | ⚠️ | 容器 |
| WMA / RA | ❌/弱 | 勿对标 Aconvert |
| AC3 / AMR | ⚠️/弱 | 勿默认承诺 |

### 2.3 跨工具：File Analyzer（音视频元数据）

| 任务 | FFmpeg.wasm | 替代 |
|---|---|---|
| 时长、码率、分辨率、编解码器名 | ⚠️ `ffprobe` 在 wasm 构建中**不一定**以独立二进制暴露；可用 `-i` 日志解析（脆弱）或自定义 core | 🔀 `mediainfo.js` / `mp4box.js` / 浏览器 `HTMLMediaElement` + 容器解析库 |

### 2.4 工程硬限制（相对 Aconvert 云端）

| 维度 | Aconvert | FFmpeg.wasm |
|---|---|---|
| 处理位置 | 多服务器 | 浏览器内存 |
| 体积 | 用户无感知引擎 | **~31 MiB** wasm（gzip ~10 MiB）；须点击加载 |
| 文件上限 | 文案 ~200MB | 实操常 **几十～百 MB** 即内存压力；移动 Safari 高风险 |
| 速度 | 服务端多核 | 单线程慢一个数量级；MT 需 COOP/COEP |
| 许可 | 闭源站 | core **GPL-2.0-or-later** |
| SEO/产品 | 格式对矩阵 | 本站单页有限表，禁薄页 |

---

## 3. 本站工具落地映射（若做音视频）

**不做** Aconvert 式 8+ 独立视频 URL + 5+ 音频 URL。建议合并为少 slug，页内模式覆盖：

| 建议 slug | 吸收的 Aconvert 能力 | 引擎 |
|---|---|---|
| `video-toolkit` 或先 `video-frame-extractor` | Extract 帧/封面；远期同页加 Cut/Compress（FFmpeg） | 截帧 Canvas → 转码再 FFmpeg |
| `audio-wav-mp3` → 可扩 `audio-toolkit` | Convert（窄格式）+ Cut + Compress | 先 lamejs；复杂容器再 FFmpeg |
| `media-convert`（慎） | Video+Audio Convert 合一 | 仅 FFmpeg；支持表写死 |

每工具仍须 IG≥3、本地隐私声明、失败边界 FAQ。

---

## 4. 电子书：其他浏览器方案调研（非 Calibre 全家桶）

Aconvert Ebook Hub：输入 AZW/CBZ/CHM/DJVU/DOCX/EPUB/FB2/HTML/MOBI/PDF/TXT… → 输出 PDF/AZW3/EPUB/MOBI/DOCX/…（**典型 Calibre 服务端矩阵**）。浏览器侧应拆成「读/导出」与「真互转」两档。

### 4.1 方案矩阵

| 方案 | 能力 | 体积/依赖 | 成熟度 | 本站建议 |
|---|---|---|---|---|
| **JSZip + OPF 自研** | EPUB 解包、封面、章节 HTML/TXT | 小（已有/将有 `fflate`/`jszip`） | ✅ | **P0 级试点** `epub-unpack` |
| **[@likecoin/epub-ts](https://github.com/likecoin/epub.ts)**（epub.js 维护叉） | EPUB 解析 + 阅读渲染；1 依赖 jszip | 中小 | ✅✅ | 预览/目录；导出可接 Turndown |
| **epubjs + Turndown**（如 it-tools EPUB→MD） | EPUB → Markdown/TXT | 中小 | ✅ | 对齐 `pdf-to-markdown` 叙事 |
| **[epub2everything](https://github.com/tamara1031/epub2everything)** 思路 | EPUB → MD / DOCX / 简 PDF / 图库 ZIP | 中（JSZip+Turndown+docx+pdf） | ✅ 产品化参考 | **可借鉴策略**，非必须整站搬 |
| **[markitdownllm](https://github.com/CodeBreaker444/markitdownllm-npm)** 类 | 多格式→MD（含 EPUB spine） | 中 | ✅ | 若做「书→LLM」单页可参考 |
| **[foliate-js](https://github.com/johnfactotum/foliate-js)** | **读**：EPUB、MOBI、AZW3/KF8、FB2、CBZ；PDF 实验 | 模块化、偏小；KF8 字体需 fflate | ✅✅ 阅读器级 | **读/抽文本/封面** 首选多格式库；**不是** AZW3→EPUB 编码器 |
| **@lingo-reader/mobi-parser** | MOBI / KF8 解析 API | npm 包 | ✅ | 可与 foliate 二选一做 Kindle 输入 |
| **CBZ** | ZIP 漫画图序 | fflate/JSZip | ✅ | 可并入解包页或 Related |
| **DJVU / CHM / LIT / LRF…** | 冷门 | 无成熟轻量浏览器全家桶 | ❌ | **不做** |
| **EPUB→PDF** | 重排分页 | pdf-lib / 打印流；非印刷级 | ⚠️ | 可选 P2；须声明布局限制 |
| **写出 MOBI/AZW3** | Kindle 封装 | 浏览器几乎无稳妥开源编码器 | ❌ | **不做**（对标 Aconvert 输出矩阵） |
| **ebook-converter-wasm（Calibre）** | 近 Aconvert 互转 | 自建、巨大、实验、GPLv3 | ❌ POC | **默认不做**（见试点文档 §5） |
| **LibreOffice WASM** | 文档向互转（含部分 ebook 输入） | 传输 ~74 MiB gz / 解压 ~236 MiB | ⚠️ | **默认不做** |

### 4.2 对 Aconvert Ebook 意图的「本站等价」

| 用户意图（检索向） | 浏览器可行落点 | 勿承诺 |
|---|---|---|
| epub to txt / markdown | `epub-unpack` + Turndown | — |
| epub to pdf | 可选简排版 PDF | 印刷级 / 复杂 CSS |
| mobi/azw3 to txt | foliate-js / mobi-parser **只读导出** | azw3→epub 完美互转 |
| epub to mobi | — | ❌ |
| djvu/chm to epub | — | ❌ |
| pdf to epub | 极难（版式） | ❌ 默认 |

### 4.3 电子书推荐技术栈（本站）

```
输入 EPUB ──JSZip/epub-ts──► 目录 + 封面 + HTML
                │
                ├─ Turndown ──► Markdown / TXT     （主交付）
                └─ pdf-lib  ──► 简 PDF（可选）

输入 MOBI/AZW3 ──foliate-js/mobi──► 章节文本/封面 （只读）
输入 FB2 ──foliate-js fb2──► 文本
输入 CBZ ──ZIP 列图──► 预览 / 转 PDF（可选，像漫画）
```

**单页策略**：`ebook-text-export`（或 `epub-unpack` 先做 EPUB，再扩展输入格式 Tab），Use cases 覆盖多 intent；**禁止** `/epub-to-mobi` 等格式对 URL。

---

## 5. 决策摘要（供选型）

1. **FFmpeg.wasm**：能覆盖 Aconvert 音视频**工具动作**的主流路径，**不能**无差别承诺其全部扩展名；WMV/RM/WMA 等划入不支持表。  
2. **产品形态**：1～2 个音视频工具页 + 有限支持表，而非 13 个功能 URL。  
3. **电子书**：优先 **foliate-js / epub-ts + Turndown** 做「读与导出」；拒绝 Calibre/LibreOffice WASM 级互转站。  
4. **许可**：FFmpeg core GPL、Calibre 系 GPLv3 —— 上线前法务/合规确认。

选定套餐后，再写入 `work-tasks/` 与 POC 门禁（文件大小、Safari、COOP 是否启用 MT）。
