# 01 — 方向讨论

**slug**：`file-metadata-analyzer`  
**主方向**：**A**（A.2 轻量本地读元数据 + A.6 文件检视邻域）  
**日期**：2026-09-01

---

## 方向对照

| 方向 | 是否选用 | 说明 |
|---|---|---|
| **A 转换/编解码** | **部分** | 读 File API + 可选 magic-byte；不做转码 |
| B 语料/归档 | 否 | 不打包/解压 |
| C SEO 站长 | 否 | 非 meta tag 类 |
| D 设计师簇 | 否 | 只读尺寸，不做 SVG 优化 |

## 红线

- 不 clone `image-exif`（无 strip EXIF UI；FAQ 指向 related）
- 不 deep EXIF 编辑；容器/基础字段 + 图宽高 + 音视频时长
- 不上传文件；`localProcessing: true`
- 不拆「image resolution checker / video duration」近义 URL

## 增量（相对 SERP / Aconvert Analyze）

- 首屏样例 PNG 自动出表（name/size/MIME/16×16）
- magic-byte 提示（PNG/JPEG/GIF/WebP/PDF/ZIP/MP4）对照 Rules
- 解码失败仍保留 File 基础字段
- 十语 privacy：留在设备 + 不上服务器
- Related：`image-exif`（深度 EXIF）、`file-hash`（完整性）

## 结论

单 slug `file-metadata-analyzer`；H1 **File metadata analyzer**（各语按 brief）；进入 `02` 清单前覆盖。
