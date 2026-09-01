# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`file-metadata-analyzer`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 错义借译 / 残缺缩写 / 空壳场景标题 / 参数枚举 title / 同构骨架 / 英文回退 / 脚本灌语
- [x] **清单前检索覆盖已做**（`02`，2026-09-01）
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（步 2+4 · 2026-09-01）

**额外禁用**：勿承诺 mediainfo 级深度；勿与 image-exif 抢 EXIF 编辑 intent

---

## 每语 brief

### en
- 检索词：file metadata analyzer；check image resolution；video duration online；file type MIME；file size checker
- 语气：口语工具站
- Title / H1：**File metadata analyzer**
- 按钮：Choose file；Load sample；Clear
- 示例：sample-icon.png 16×16
- 可保留：MIME、PNG、MP4、EXIF（FAQ 边界）
- SERP：File Analyzer；Online EXIF Viewer；MediaInfo

### zh
- 检索词：文件元数据；查看图片分辨率；视频时长；文件类型；文件大小
- Title / H1：**文件元数据分析器**
- 按钮：选择文件；加载示例；清空

### es
- 检索词：analizador metadatos archivo；resolución imagen；duración video；tipo MIME
- Title / H1：**analizador de metadatos de archivos**

### ar
- 检索词：محلل بيانات الملف；دقة الصورة؛ مدة الفيديو؛ نوع الملف
- Title / H1：**محلل بيانات الملفات الوصفية**

### pt
- 检索词：analisador metadados arquivo；resolução imagem；duração vídeo
- Title / H1：**analisador de metadados de arquivos**

### id
- 检索词：metadata berkas；resolusi gambar；durasi video；tipe file
- Title / H1：**penganalisis metadata berkas**

### fr
- 检索词：analyseur métadonnées fichier；résolution image；durée vidéo
- Title / H1：**analyseur de métadonnées de fichiers**

### ja
- 检索词：ファイル メタデータ；画像 解像度；動画 長さ；ファイル 種類
- Title / H1：**ファイルメタデータ分析**

### ru
- 检索词：метаданные файла；разрешение изображения；длительность видео
- Title / H1：**анализатор метаданных файлов**

### de
- 检索词：Datei Metadaten；Bildauflösung；Videodauer；Dateityp
- Title / H1：**Datei-Metadaten-Analysator**

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | 保留 slug；主词 file metadata → H1；次词 resolution/duration/MIME 落 desc/FAQ/usecase | 通过；可 ready |
| 1 母版+lint | 2026-09-01 | en 母版 + fileMetadataAnalyzerPage | 完成 |
| 1b 母版检索覆盖优化 | 2026-09-01 | H1=File metadata analyzer；desc 写步骤+样例 16×16；FAQ 划界 image-exif | 通过 |
| 2 逐语重写 | 2026-09-01 | zh/es/ar/pt/id/fr/ja/ru/de 独立 title/FAQ | 完成 |
| 2b 抽查语覆盖优化 | 2026-09-01 | en/zh/es/ja 重核主词落 H1；次词落 FAQ/usecase | 通过 |
| 3 禁词+隐私抽查 | 2026-09-01 | en/zh/es/ar 隐私句设备+不上服务器；无参数枚举 title | 通过 |
