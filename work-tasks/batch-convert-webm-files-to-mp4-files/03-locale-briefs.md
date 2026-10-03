# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-convert-webm-files-to-mp4-files`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做（见 02）。
- [x] 同意图相关搜索词已写入 02。
- [x] 用户意图审查已做：独立 MP4、部分成功、逐项下载。
- [x] 检索覆盖已优化（母版及他语复审）。
- [x] 十语独立写作，控制与正文均说明独立 MP4、部分成功、逐项下载以及上限。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | batch WebM to MP4; convert multiple WebM files; bulk WebM converter; WebM recordings to MP4 | Batch convert WebM files to H.264 MP4 | separate clips; no merge/ZIP promise |
| zh | 批量 WebM 转 MP4; 多个 WebM 转换; 录屏批量转 MP4; WebM 批量转换器 | 批量将多个 WebM 转成 H.264 MP4 | 每段独立；不说无损 |
| es | convertir varios WebM a MP4; WebM a MP4 por lotes; conversor masivo WebM; grabaciones a MP4 | Convertir archivos WebM a MP4 por lotes | archivos separados; no unir |
| ar | تحويل ملفات WebM إلى MP4 دفعة واحدة; عدة WebM إلى MP4; محول WebM جماعي; تسجيلات الشاشة | تحويل عدة ملفات WebM إلى MP4 على دفعات | ملفات منفصلة؛ لا دمج |
| pt | converter vários WebM para MP4; WebM para MP4 em lote; conversor WebM em massa; gravações | Converter arquivos WebM para MP4 em lote | saídas separadas; não juntar |
| id | konversi banyak WebM ke MP4; WebM ke MP4 massal; batch video WebM; rekaman layar | Konversi beberapa berkas WebM ke MP4 sekaligus | MP4 terpisah; bukan gabung |
| fr | convertir plusieurs WebM en MP4; WebM vers MP4 par lot; convertisseur WebM en masse; captures écran | Convertir plusieurs fichiers WebM en MP4 par lot | fichiers distincts; pas fusion |
| ja | 複数 WebM を MP4 に一括変換; WebM 一括 MP4; 録画をまとめて変換; VP9 を H.264 | 複数の WebM を H.264 MP4 に一括変換 | 個別出力；結合ではない |
| ru | пакетно конвертировать WebM в MP4; несколько WebM в MP4; массовый конвертер WebM; записи экрана | Пакетно конвертировать WebM в MP4 | отдельные файлы; без склейки |
| de | mehrere WebM in MP4 umwandeln; WebM zu MP4 im Stapel; WebM Batch Konverter; Bildschirmaufnahmen | Mehrere WebM Dateien im Stapel in MP4 umwandeln | einzelne Ausgaben; nicht zusammenfügen |

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照三个批量转换 SERP、单件页及本站 MKV 批量页；选主词 batch WebM to MP4，吸收 bulk/multiple/recordings，排除合并/音频输出 | 保留独立 B slug；首屏多选、每段独立 MP4、逐行结果与大文件逐项下载 |
| 1 母版与页面 | 2026-10-03 | 英语母版写实 H.264/AAC、独立队列/下载、坏行保留成功项、OPFS 界限；页面采用真实轨道预检和复检 | 主词在 H1，首段有 multiple WebM/separate MP4；如何操作和下载吻合按钮 |
| 1b 母版检索覆盖优化 | 2026-10-03 | 复核 batch WebM to MP4、bulk WebM converter、browser recordings 与 download all 搜法；将 separate H.264/AAC、逐项 codec/size/error 放进 description 前部，FAQ 解释逐项下载和无内存 ZIP | H1、description、How、FAQ 覆盖同意图，合并和抽音不混入主任务 |
| 2 各语独立写作 | 2026-10-03 | 完成 zh、es、ar、pt、id、fr、ja、ru、de 的 93 键本地化；各语针对多个录屏分别输出、无音轨、坏片、OPFS/80 MiB 以及无 OPFS 的 128 MiB 总结果预算写明限制 | 十语键集合一致；页面主任务未从多文件退化为单件，未把 ZIP 写成可用功能 |
| 2b 复核检索覆盖 | 2026-10-03 | 抽查 en、zh、es、ja：主搜法 batch/批量/por lotes/一括在 H1，multiple/separate 或当地等价说法在 description 开头；FAQ 收入改后缀、部分成功与下载所有结果意图 | en、zh、es、ja 的 title、前段、How 和 FAQ 与真实队列一致，未混淆视频合并与批量转换 |
| 3 功能与禁词核查 | 2026-10-03 | 核对 10×93 键，自动样例两件同名去重、真实下载、坏行/重试、20 项、>80 MiB 输入、无 OPFS 和停止后重试；页面与 SEO 门禁后续记录见 devlog | 无英语回退或虚假 ZIP 承诺；大输出 >80 MiB 的 OPFS 保留仍须独立压力验证 |
