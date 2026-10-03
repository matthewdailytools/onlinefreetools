# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-convert-mov-files-to-mp4-files`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做（见 02）。
- [x] 同意图相关搜索词已写入 02。
- [x] 用户意图审查已做：多个独立 MP4、H.264 copy/HEVC 逐行拒绝、部分成功与大结果逐件下载。
- [x] 检索覆盖已优化：十语 H1/首段写明多个 MOV 转独立 MP4；技术段落解释 H.264 复制、PCM→AAC 与 HEVC 设备条件。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | batch MOV to MP4; convert multiple MOV files; bulk iPhone MOV converter; QuickTime videos to MP4 | Batch convert MOV files to H.264 MP4 | separate files; HEVC device dependent |
| zh | 批量 MOV 转 MP4; 多个 iPhone 视频转 MP4; QuickTime 批量转码; MOV 批量转换 | 批量把多个 MOV 转成 H.264 MP4 | 逐段独立；不承诺 HEVC 通用 |
| es | convertir varios MOV a MP4; MOV a MP4 por lotes; vídeos iPhone a MP4; conversor QuickTime masivo | Convertir varios MOV a MP4 H.264 por lotes | archivos separados; HEVC condicional |
| ar | تحويل عدة MOV إلى MP4; تحويل فيديوهات آيفون دفعة واحدة; QuickTime إلى MP4 جماعي; محول MOV | تحويل ملفات MOV متعددة إلى MP4 ‏H.264 | نتائج منفصلة؛ HEVC مشروط |
| pt | converter vários MOV em MP4; MOV para MP4 em lote; vídeos de iPhone para MP4; QuickTime em massa | Converter vários MOV em MP4 H.264 em lote | arquivos distintos; HEVC depende do aparelho |
| id | konversi banyak MOV ke MP4; MOV ke MP4 massal; video iPhone ke MP4; QuickTime batch | Konversi beberapa MOV ke MP4 H.264 sekaligus | keluaran terpisah; HEVC tergantung perangkat |
| fr | convertir plusieurs MOV en MP4; MOV vers MP4 par lot; vidéos iPhone en MP4; QuickTime en série | Convertir plusieurs MOV en MP4 H.264 par lot | fichiers distincts; HEVC selon appareil |
| ja | 複数 MOV を MP4 に一括変換; iPhone 動画をまとめて MP4; QuickTime 一括変換; H.264 をコピー | 複数の MOV を H.264 MP4 に一括変換 | 動画別出力；HEVC は端末依存 |
| ru | пакетно конвертировать MOV в MP4; несколько MOV в MP4; видео iPhone в MP4; QuickTime конвертер | Пакетно конвертировать MOV в MP4 H.264 | отдельные файлы; HEVC зависит от устройства |
| de | mehrere MOV in MP4 umwandeln; MOV zu MP4 im Stapel; iPhone Videos in MP4; QuickTime Stapelkonverter | Mehrere MOV Dateien stapelweise in H.264 MP4 umwandeln | einzelne Ergebnisse; HEVC geräteabhängig |

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 MOV 批量 SERP、单件 MOV 实测和本站批量 WebM；吸收 multiple/bulk/iPhone/QuickTime 及 H.264 copy/HEVC 条件搜法，排除单件、合并和抽音 | 保留独立 B slug；首屏多选，每行报告真实 codec/转换路径，逐项 MP4 下载 |
| 1 母版与页面 | 2026-10-03 | 英语母版写入 QuickTime/iPhone 多源、H.264 copy、PCM→AAC、HEVC 逐行拒绝和 OPFS 独立下载；页面复用已验收的串行队列与竞态修复 | H1 与首段直指 batch MOV to MP4，多文件真实任务和视频+音频验收清楚 |
| 1b 母版检索覆盖优化 | 2026-10-03 | 复查 batch MOV to MP4、multiple iPhone MOV、QuickTime bulk、H.264 without re-encoding 与 HEVC 条件：把 separate MP4、copy/transcode 决策放进 description 前部，How/FAQ 逐词回答 | 单件、合并、抽音词不抢主任务；没有“任意 HEVC”承诺，主词落 title/H1 |
| 2 各语自然表达 | 2026-10-03 | en/zh/es/ar/pt/id/fr/ja/ru/de 各 96 个键；逐语写入本地搜索说法、iPhone/QuickTime、多文件独立下载、H.264 复制及 HEVC 限制 | 共用产品事实且首段有本地意图词；交互文案完整 |
| 2b 各语搜索覆盖优化 | 2026-10-03 | 抽查 en、zh、es、ja、pt、ar 的标题、描述、How、规则和 FAQ；改掉直接套用 WebM 的转码/VP9 陈述，强调 MOV 内部轨道不同、逐行结果与错误 | 未承诺全部 HEVC 均成功；未将 MOV 单件、视频合并和音频提取拆成伪批量词 |
