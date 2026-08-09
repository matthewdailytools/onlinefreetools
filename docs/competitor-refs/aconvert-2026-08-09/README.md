# Aconvert 工具清单快照（全格式转换对照）

**抓取日期**: 2026-08-09  
**入口**: [https://www.aconvert.com/](https://www.aconvert.com/) · [Sitemap](https://www.aconvert.com/sitemap.html) · [Formats](https://www.aconvert.com/format/) · [Analyze](https://www.aconvert.com/analyze.html)

> **用途**：枚举竞品「全格式云端转换」IA 与能力簇，供本站规划**本地**图片/PDF/归档等桥工具与 SEO 边界。  
> **注意**：Aconvert 为**上传多服务器**处理（自报 32 servers、数百 TB）；本站默认**浏览器本地**。格式对 URL 矩阵、完整音视频转码站、Office/Ebook 高保真默认**不跟风**。

## 竞品结论（一句话）

靠 **品类 Hub + 功能页 + `/format/{ext}/` + 格式对长尾矩阵** 吃流量；与本站 **本地处理优先、禁 doorway / scaled content、禁完整视频转码站** 定位冲突。策略：**能力吸收、结构不抄**。

---

## 1. 信息架构（四层）

| 层 | 代表 URL | 做什么 |
|---|---|---|
| 品类 Hub | `/pdf/` `/document/` `/ebook/` `/image/` `/icon/` `/video/` `/audio/` `/archive/` `/webpage/` | 上传 / URL → 选目标格式 → 批量转换；PDF Hub 含 OCR 语言墙 |
| 功能页 | 见下表「Category × Function」 | 同品类编辑/整理（split/merge/compress…） |
| 格式百科 | `/format/` → `/format/jpg/` 等 | 格式说明 + **双向转换链接表**（如 JPG 单页列出 100+ 对） |
| 格式对长尾 | 自 format 页链出（JPG↔PNG、PDF↔JPG、MP4→MP3…） | SEO 主战场；UI 常回落到同类 Hub 转换器 |
| 辅能力 | `/analyze.html`、Mobile Apps、云盘导出、12 语站点 | 元数据、获客、分发 |

**产品特征（2026-08-09 快照）**：

- 服务端转码；单文件约 **200MB** 上限（image/video/audio 文案）
- 结果临时存约 **1–2 小时**
- 首页 Quick Convert + 批量 Add Files
- 关联站点叙事：扩展自 PDFConvertOnline；「A」= All

---

## 2. Category × Function（sitemap 全量）

| 品类 | 功能页（en 路径） | 格式入口示例 |
|---|---|---|
| **PDF** | [Convert](https://www.aconvert.com/pdf/)、[Split](https://www.aconvert.com/pdf/split/)、[Merge](https://www.aconvert.com/pdf/merge/)、[Compress](https://www.aconvert.com/pdf/compress/)、[Lock](https://www.aconvert.com/pdf/lock/)、[Unlock](https://www.aconvert.com/pdf/unlock/)、[Extract](https://www.aconvert.com/pdf/extract/)、[Rotate](https://www.aconvert.com/pdf/rotate/) | [PDF](https://www.aconvert.com/format/pdf/) |
| **Document** | Convert（与 PDF Hub 重叠入口）、[Edit](https://www.aconvert.com/document/edit/)、[OCR](https://www.aconvert.com/document/ocr/)、[Case](https://www.aconvert.com/document/case/)、[Base64](https://www.aconvert.com/document/base/) | DOC/DOCX/XLS/XLSX/PPT/PPTX/HTML/TXT/CSV/RTF/ODT/ODS/ODP/XPS/OXPS… |
| **Ebook** | [Convert](https://www.aconvert.com/ebook/) | AZW3/DJVU/EPUB/FB2/MOBI… |
| **Image** | [Convert](https://www.aconvert.com/image/)、[Compress](https://www.aconvert.com/image/compress/)、[Resize](https://www.aconvert.com/image/resize/)、[Crop](https://www.aconvert.com/image/crop/)、[Merge](https://www.aconvert.com/image/merge/)、[Rotate](https://www.aconvert.com/image/rotate/)、[Edit](https://www.aconvert.com/image/edit/) | JPG/PNG/WEBP/GIF/HEIC/SVG/BMP/PSD/AVIF…（目标格式极广） |
| **Icon** | [Convert](https://www.aconvert.com/icon/) | ICO 等 |
| **Video** | [Convert](https://www.aconvert.com/video/)、[Cut](https://www.aconvert.com/video/split/)、[Merge](https://www.aconvert.com/video/merge/)、[Compress](https://www.aconvert.com/video/compress/)、[Extract](https://www.aconvert.com/video/extract/)、[Rotate](https://www.aconvert.com/video/rotate/)、[Crop](https://www.aconvert.com/video/crop/)、[Pad](https://www.aconvert.com/video/pad/) | MP4/AVI/MKV/WMV/WEBM/MOV… |
| **Audio** | [Convert](https://www.aconvert.com/audio/)、[Cut](https://www.aconvert.com/audio/split/)、[Merge](https://www.aconvert.com/audio/merge/)、[Compress](https://www.aconvert.com/audio/compress/)、[Extract](https://www.aconvert.com/audio/extract/) | MP3/WAV/WMA/OGG/AAC/FLAC/M4A/OPUS… |
| **Archive** | [Convert](https://www.aconvert.com/archive/) | 7z/TAR/RAR/ZIP/WIM |
| **Webpage** | [Convert](https://www.aconvert.com/webpage/) | URL → 文档/图等（跨域抓取型） |

**Apps（站外获客）**: JPG↔PDF、Word→PDF、Video/Audio/Image Converter 等（`/app/…`）。

---

## 3. 格式矩阵风险示例（Doorway / Scaled content）

`/format/jpg/` 列出 **100+** 转换方向，含：

- 图片互转：JPG↔PNG/WEBP/HEIC/AVIF/SVG/TIFF…
- 文档桥：JPG→PDF/DOC/DOCX；Office/HTML→JPG
- 跨品类：视频帧→JPG、电子书→JPG、字体/CAD→JPG 等

同类矩阵可对每个扩展名复制一遍 → 海量近义 URL。  
**本站禁止**复制该结构（见 `.cursor/rules/seo-google-policy.mdc`、`tool-i18n-seo.mdc`：scaled content abuse / doorway；长尾默认一带多场景）。

---

## 4. Google SEO 冲突裁决 → 本站对策

权威序：Google Search Central（`seo-google-policy.mdc`）→ lint → rules → docs。

| Aconvert 打法 | 判定 | 本站对策 |
|---|---|---|
| 每格式对一 URL | Doorway / scaled content 高风险 | **禁止**；长尾进单页 Use cases + FAQ |
| `/format/{ext}/` 百科 + 链出 | 无实质交互则易薄内容 | **不做** format 站；页内「格式对照表」作 IG |
| Upload → Convert → Download | 须 people-first + 可验证增量 | 每工具 IG≥3；禁零增益口号 |
| 云端全家桶 | 非 spam 本身，弱化隐私差异 | **localProcessing**；文案写清不上传 |
| 完整音视频转码站 | 站内红线：偏离定位重后端默认不做 | 窄场景本地工具可议；**不建** `/video/` 矩阵 |
| Office / Ebook 高保真 | 依赖服务端；易虚假承诺 | **默认不做**；`images-to-word/ppt` 勿标真 Office 转换 |
| 多语言薄站 | 机翻堆页 = scaled content | 10 语检索向重写 ≥3 轮 |

**口号**：学其「用户要完成的任务」，不学其「URL 数量竞赛」。

---

## 5. 能力吸收矩阵（Aconvert → 本站）

| Aconvert 能力簇 | 决策 | 落点 |
|---|---|---|
| 图片格式互转 + 质量/尺寸 | **做深已有** | `image-format-converter`：常见格式表、透明度/DPI/质量边界、HEIC/AVIF；Related → compress/crop/exif |
| 图片编辑（compress/resize/crop/merge/rotate） | **已有 / 清单内** | 不新开近义页；缺口用现有 slug 补 IG |
| PDF 整理套件 | **已有** | 对齐 [iLovePDF 快照](../ilovepdf-2026-08-08/README.md)；不跟 OCR 语言墙 |
| PDF↔Office / Document Hub | **不做** | 服务端高保真 |
| PDF / Document OCR | **POC 后定** | 清单 `ocr-to-text`（Tier 2）；单页吃「扫描件转文字」，不拆百语 URL |
| Ebook 全格式 | **不做** | 矩阵薄、依赖服务端 |
| Archive | **做（已规划）** | P0 `create-zip-file` / `unzip-file` → P1 `extract-archive`；**禁** ZIP→PDF/MP3 伪转换页（见方向文档 A.5.1 / ezyZip） |
| Video 全家桶转码 | **不做站** | 可选远期：单页视频截帧/抽封面（Canvas）；不建格式对 |
| Audio 全家桶 | **窄做** | 清单级如 `audio-wav-mp3`；不拆 MP3/AAC/FLAC 矩阵 |
| File Analyzer | **可立项（P1）** | 建议 slug：`file-metadata-analyzer`；本地可读元数据（图几何/EXIF、音视频容器字段）；IG=对照表+隐私+边界 |
| Webpage 抓取转换 | **不做** | 跨域 / 合规 / 后端重 |
| Format 百科 + 格式对 SEO | **不做** | 违 doorway；用工具页内链 + `/tool-type/{subject}` |
| App / 云盘导出 | **不做** | 非站点范围 |

### 一带多场景映射示例（禁拆薄页）

| 检索意图（示例） | 落入本站 |
|---|---|
| heic to jpg / webp to png / avif to jpg | `image-format-converter`（Use cases + FAQ） |
| jpg to pdf / images to pdf | `images-to-pdf`（已有） |
| pdf to jpg / pdf to png | `pdf-to-jpg`（已有；页内覆盖 PNG 等导出） |
| rar to zip / unzip 7z | `extract-archive`（导出 ZIP 模式）；勿拆 `rar-to-zip` |
| zip to mp3 / zip to pdf | **不做**独立工具（取出/伪转换） |
| mp4 to mp3 / avi to mp4 | **不做**格式对页；非站定位 |
| what is my image resolution / video bitrate | 未来 `file-metadata-analyzer` 单页 |

---

## 6. 本站建议摘要

| 可做 / 做深 | 谨慎 / 默认不做 |
|---|---|
| 加深 `image-format-converter`、`pdf-to-jpg`、`images-to-pdf` 的格式表与长尾 FAQ | `/format/*` 百科站、每格式对一 URL |
| 交付已列归档 P0；再 `extract-archive` | ZIP→任意后缀「转换」矩阵 |
| P1：`file-metadata-analyzer`；`ocr-to-text` POC | 完整视频/音频转码站、Ebook 矩阵 |
| 坚持 taxonomy hub + 工具页 IG | Office 高保真、Webpage 抓取转换、App/云盘 |

**优先级（不插队现有设计师 / ZIP P0）**：

1. 零新 slug：图片/PDF 转换页 SEO 加深  
2. 继续 P0：`create-zip-file`、`unzip-file`  
3. P1 候选：`file-metadata-analyzer`、`extract-archive`、`ocr-to-text` POC  
4. 本文「不做」清单约束后续 Agent，避免跟风铺 `/heic-to-jpg` 等薄页  

---

## 7. 关联

- 方向文档：`docs/2026-07-28-tool-direction.md`（附录竞品启示；A.2 / A.5 / A.5.1 / A.5.2）  
- 清单总表：`docs/2026-08-08-tool-inventory-table.md`  
- SEO：`.cursor/rules/seo-google-policy.mdc`、`tool-i18n-seo.mdc`、`docs/2026-07-28-google-seo-strategy-implementation.md`  
- **浏览器试点选项（Ebook/视频/音频）**：[2026-08-09-browser-media-ebook-pilot-options.md](../../2026-08-09-browser-media-ebook-pilot-options.md)  
- **FFmpeg.wasm ↔ Aconvert 音视频对照 + 电子书替代方案**：[2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md](../../2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md)  
- **电子书客户端续研（库体积/阶段 slug）**：[2026-08-09-browser-ebook-client-solutions.md](../../2026-08-09-browser-ebook-client-solutions.md)  
- **音视频客户端续研（Mediabunny / lamejs / FFmpeg…）**：[2026-08-09-browser-av-client-solutions.md](../../2026-08-09-browser-av-client-solutions.md)  
- 邻近竞品快照： [iLovePDF](../ilovepdf-2026-08-08/README.md) · [ezyZip 对照在方向文档 A.5.1](../../2026-07-28-tool-direction.md)  
