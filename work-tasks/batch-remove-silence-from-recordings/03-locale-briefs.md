# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-remove-silence-from-recordings`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] **清单前检索覆盖已做**（见 02）
- [x] **同意图相关搜索词已写入 02**
- [x] **用户意图审查已做**（内部/端部长停顿逐文件缩短）
- [x] **检索覆盖已优化**（母版与他语后复审）
- [x] 十语独立改写；每语说明本地处理、阈值误剪与非语义剪辑。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | batch remove silence from audio; remove pauses from multiple recordings; bulk audio silence remover; trim long pauses | Remove silence from multiple recordings in one batch | podcasts/voice clips; not AI editing |
| zh | 批量去除音频静音; 多条录音删除停顿; 批量缩短长静音; 录音去空白 | 批量去除多条录音的长停顿 | 不承诺自动理解语句 |
| es | quitar silencios de varios audios; eliminar pausas por lotes; recortar silencios largos; grabaciones | Quitar silencios de varias grabaciones por lotes | no edición semántica |
| ar | إزالة الصمت من عدة تسجيلات; حذف الوقفات الطويلة دفعة واحدة; عتبة الصمت; معالجة صوتية جماعية | إزالة الصمت من تسجيلات متعددة دفعة واحدة | لا تحرير دلالي |
| pt | remover silêncio de vários áudios; cortar pausas em lote; encurtar silêncio longo; gravações | Remover silêncio de várias gravações em lote | não edição semântica |
| id | hapus hening banyak rekaman; potong jeda panjang massal; ambang hening; beberapa audio | Hapus hening dari banyak rekaman sekaligus | bukan penyuntingan semantik |
| fr | supprimer les silences de plusieurs audios; raccourcir les pauses par lot; seuil de silence; enregistrements | Supprimer les silences de plusieurs enregistrements | pas de montage sémantique |
| ja | 複数録音の無音を一括削除; 長い間をまとめて短縮; 無音しきい値; 音声一括処理 | 複数の録音から長い無音を一括で短縮 | 意味を理解して編集しない |
| ru | пакетно убрать тишину из аудио; сократить паузы в записях; порог тишины; несколько файлов | Пакетно удалить длинные паузы из записей | не смысловой монтаж |
| de | Stille aus mehreren Audios entfernen; lange Pausen stapelweise kürzen; Stille-Schwelle; Aufnahmen | Lange Pausen aus mehreren Aufnahmen entfernen | kein semantischer Schnitt |

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 AudioQC、ClipZeal、Audacity 与站内单件页，区分多文件内部长停顿缩短、只剪首尾、单件拆段和固定时长剪片头 | 保留独立 batch slug；首段写多个录音、逐件删去时长，不吸拆段和语义剪辑词 |
| 1 母版+lint | 2026-10-03 | 完成英语首屏、真实队列和逐文件原后时长、How/FAQ/规则；运行 `lint:tool-page` | 页面接线通过，保留阈值、最短时长和短间隔三个独立概念 |
| 1b 母版检索覆盖优化 | 2026-10-03 | 复查 batch remove silence from audio、remove pauses from multiple recordings 与 trim long pauses inside audio：将多条录音和内部/端部长停顿放在 description 前部；How 解释 RMS、FAQ 标出误剪边界 | 英语 title、description、How 和 FAQ 均覆盖任务词并可核对逐件删去秒数，未承诺语义理解 |
| 2 按 brief 重写 | 2026-10-03 | 完成 zh/es/ar/pt/id/fr/ja/ru/de 的标题、首段、使用场景、规则、公式说明、How、FAQ 与 UI；每语 82 键对齐 | 各语均写明多录音内部长停顿、逐项删去时间、本地处理和轻声误剪风险 |
| 2b 抽查语检索覆盖优化 | 2026-10-03 | 抽查 en、zh、es、ja：主词置于标题或首段前部，逐文件前后时长和删去秒数进入 description；修正 ja 对原件保留的误述，核对设置、样例和输出声明 | 抽查语与真实多文件任务、WAV 输出及停止重试一致，未将批量意图退化成单文件加 multiple |
| 3 抽查+禁词+lint | 2026-10-03 | 核对十语键一致、轻声误剪和本地隐私边界；十语移动端及阿语 RTL 自动样例、逐件真实 WAV 下载通过；运行页面 lint 和覆盖门禁 | i18n-done；无英语回退、MP3-only 误述或跨工具峰值文案 |
