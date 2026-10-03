# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-convert-audio-files-to-mp3`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] **清单前检索覆盖已做**（见 02 的实测搜法与页面落点）
- [x] **同意图相关搜索词已写入 02**
- [x] **用户意图审查已做**（混合队列，各自产物）
- [x] **检索覆盖已优化**（主词、首屏描述、四语抽查与十语标题复审）
- [x] 无造词、残缺缩写、同构灌语或英语回退；隐私句逐语说清文件留在设备、不上传服务器；阿语、日语、俄语已重写并抽查。

## 每语 brief

| 语种 | 当地检索词（3–5） | Title/H1 结果向措辞 | 场景、按钮与禁用 |
|---|---|---|---|
| en | batch audio to MP3; convert multiple audio files to MP3; mixed audio to MP3; bulk MP3 converter | Batch Convert Mixed Audio Files to MP3 | voice memos + lossless tracks; Convert / Download; 禁“any format works” |
| zh | 批量音频转MP3; 多个音频转MP3; 混合格式音频转MP3; 批量转MP3 | 批量把混合音频转成MP3 | 手机录音与无损曲库；转换/下载；禁“无损MP3” |
| es | convertir audios a MP3 por lotes; varios archivos de audio a MP3; conversor MP3 por lotes; audios mezclados a MP3 | Convertir varios audios a MP3 por lotes | notas de voz; Convertir/Descargar; evitar “sin pérdida” |
| ar | تحويل ملفات صوتية إلى MP3 دفعة واحدة; تحويل عدة ملفات إلى MP3; محول صوت جماعي; صيغ صوتية مختلفة | تحويل عدة ملفات صوتية إلى MP3 دفعة واحدة | تسجيلات الهاتف; تحويل/تنزيل; لا تعد بكل الترميزات |
| pt | converter áudio em lote para MP3; vários áudios para MP3; conversor MP3 em lote; formatos mistos | Converter vários áudios para MP3 em lote | gravações do celular; Converter/Baixar; não prometer sem perda |
| id | konversi audio ke MP3 massal; ubah banyak audio ke MP3; konverter MP3 batch; format audio campuran | Ubah banyak file audio ke MP3 sekaligus | rekaman ponsel; Konversi/Unduh; jangan klaim semua codec |
| fr | convertir plusieurs fichiers audio en MP3; conversion audio MP3 par lot; formats audio mélangés; convertisseur MP3 en lot | Convertir plusieurs fichiers audio en MP3 par lot | mémos vocaux; Convertir/Télécharger; éviter sans perte |
| ja | 音声ファイルをまとめてMP3に変換; 複数の音声をMP3に変換; 音声一括MP3変換; 異なる形式の音声 | 複数の音声をまとめてMP3に変換 | ボイスメモ; 変換/ダウンロード; 「劣化なし」は不可 |
| ru | пакетно конвертировать аудио в MP3; несколько аудиофайлов в MP3; аудио разных форматов в MP3; массовый конвертер | Конвертировать несколько аудиофайлов в MP3 | голосовые заметки; Конвертировать/Скачать; не обещать без потерь |
| de | Audiodateien stapelweise in MP3 umwandeln; mehrere Audiodateien in MP3; MP3 Stapelkonverter; gemischte Audioformate | Mehrere Audiodateien stapelweise in MP3 umwandeln | Sprachmemos; Umwandeln/Herunterladen; nicht verlustfrei versprechen |

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 核对混合格式批量 MP3 的英文 SERP、现有单格式页面和浏览器解码边界；主词进入 H1 与首屏描述，相关搜法逐一归属 | 保留单个混合格式 batch slug，独立意图成立；0i 审查要求逐行结果与部分成功 |
| 1 母版+lint | 2026-10-03 | 写英语原生页面文案与混合队列交互，首屏点明不同格式输入、逐文件 MP3 输出和失败仍可下载；运行页面 wiring 检查 | `lint:tool-page` 通过，母版不依赖英文回退 |
| 1b 母版检索覆盖优化 | 2026-10-03 | 对照 02 的主词与同意图搜法，确认 title/H1 包含 batch audio files to MP3，描述前句覆盖 M4A、FLAC、OGG、WAV 混合队列 | 避免泛称万能转换器，补齐独立产物和逐行失败说明 |
| 2 按 brief 重写 | 2026-10-03 | 按 en、zh、es、ja、pt、id、fr、ar、ru、de 各自的当地搜法逐语写完 76 个字段，保留统一功能但分别写任务示例、边界和隐私说明 | 十语字段与占位符集合逐项一致；未用英文回退作为交付 |
| 2b 抽查语检索覆盖优化 | 2026-10-03 | 抽查 en,zh,es,ja 的 title/H1、首段关键词与自然口语；并复核 ar,pt,id,fr,ru,de 的结果向标题、码率与有损边界 | 主词在各语标题或前部描述，例子和 FAQ 对应混合批量任务，没有按格式拆近义页面 |
| 3 抽查+禁词+lint | 2026-10-03 | 浏览器逐一打开十语移动页，自动样例产生两条 MP3 结果；查横向溢出、阿语方向、英文标题回退及 JS 错误 | 十语样例与页面检查全部通过，阿语/日语/俄语已独立重写并抽查 |
