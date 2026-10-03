# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-normalize-audio-files-to-peak`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] **清单前检索覆盖已做**（见 02）
- [x] **同意图相关搜索词已写入 02**
- [x] **用户意图审查已做**（逐项样本峰值，不等于 LUFS）
- [x] **检索覆盖已优化**（母版与他语后复审）
- [x] 十语独立改写；各语明确音频不上传服务器、峰值目标不是听感响度。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | batch peak normalize audio; normalize multiple audio files; bulk peak normalization; target dBFS | Batch normalize audio files to a peak target | sound effects; not LUFS |
| zh | 批量峰值标准化音频; 多个音频统一峰值; 批量调整音频峰值; dBFS 目标 | 批量将音频标准化到目标峰值 | 不称听感响度统一 |
| es | normalizar pico de varios audios; normalización por lotes; ajustar pico dBFS; archivos de audio | Normalizar varios audios a un pico objetivo | no LUFS |
| ar | توحيد ذروة ملفات صوتية دفعة واحدة; ضبط ذروة عدة تسجيلات; معيار dBFS; معالجة صوت جماعية | تسوية ذروة عدة ملفات صوتية دفعة واحدة | ليست مطابقة LUFS |
| pt | normalizar pico de vários áudios; normalização em lote; ajustar pico dBFS; arquivos de áudio | Normalizar o pico de vários áudios em lote | não LUFS |
| id | normalisasi puncak banyak audio; normalisasi audio massal; target dBFS; beberapa rekaman | Normalisasi puncak banyak file audio | bukan LUFS |
| fr | normaliser le pic de plusieurs audios; normalisation par lot; cible dBFS; fichiers audio | Normaliser le pic de plusieurs fichiers audio | pas LUFS |
| ja | 複数音声のピークを一括正規化; 音声の最大値を揃える; dBFS 目標; バッチ音量調整 | 複数の音声をピーク目標へ一括正規化 | LUFS と別 |
| ru | пакетная нормализация пика аудио; несколько файлов до dBFS; целевой пик; обработка записей | Пакетно нормализовать пик аудиофайлов | не LUFS |
| de | mehrere Audios auf Spitzenpegel normalisieren; Audio-Stapelnormalisierung; dBFS-Ziel; Peak-Normalisierung | Mehrere Audiodateien auf einen Spitzenpegel normalisieren | nicht LUFS |

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照批量峰值工具 SERP、站内单件峰值与 LUFS 页，明确共同目标、逐文件增益/输出与不能声称感知响度相同 | 保留独立 batch slug；不吸 LUFS、true peak 与压缩体积词 |
| 1 母版+lint | 2026-10-03 | 完成英语结果向首段、逐项峰值公式、静音边界、How/FAQ 和真实下载；运行 `lint:tool-page` | 通过；页面首屏明确是样本峰值而非响度 |
| 1b 母版检索覆盖优化 | 2026-10-03 | 复查 batch peak normalize audio、normalize multiple audio files 与 sample peak dBFS 的落点，将输入峰值、逐文件增益、输出峰值移至 description 前部，并加上 LUFS 与 true-peak 的区别 | 英语 title、description、How 和 FAQ 均覆盖任务词及可核验结果，避免泛化音量承诺 |
| 2 按 brief 重写 | 2026-10-03 | 完成 zh/es/ar/pt/id/fr/ja/ru/de 九语标题、开头、实例、公式、限制、How 和 FAQ；保持同一占位符集合 | 十语均说明本地处理与非 LUFS，84 键对齐 |
| 2b 抽查语检索覆盖优化 | 2026-10-03 | 抽查 en、zh、es、ja 的标题和首段：各语将批量峰值任务词放在前部，将逐文件原峰值、增益和输出峰值作为结果承诺；修正 en、zh、es 三语残留的 MP3-only 队列提示 | 抽查语言与混合输入能力一致，未把多格式队列误写成只收 MP3 |
| 3 抽查+禁词+lint | 2026-10-03 | 复查十语隐私、样本峰值与听感响度的边界；十语移动端及 RTL 自动样例、真实 WAV 峰值下载通过，运行覆盖门禁与页面 lint | i18n-done；无英语回退与格式方向错误 |
