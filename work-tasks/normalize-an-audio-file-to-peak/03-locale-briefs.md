# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：峰值归一化到目标 dBFS（芯片 −0.1 / −1 / −3，默认 −1），导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传；WAV/dBFS/peak 可保留。≠ 固定 dB 增益（S15）、≠ LUFS（S17）、≠ 动态压缩器（S18）、≠ MP3 体积压缩（S10）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | normalize audio; peak normalize; normalize to peak; dBFS | Normalize an audio file to peak | Normalize / Download WAV | 场景句 H1；target peak chips；≠ gain / LUFS / compressor FAQ |
| zh | 音频归一化；峰值归一化；拉齐峰值；dBFS | 将音频文件峰值归一化 | 归一化 / 下载 WAV | 交稿峰值 usecase；与固定增益/LUFS 消歧 FAQ |
| es | normalizar audio; normalizar a pico; pico dBFS | Normalizar un archivo de audio al pico | Normalizar / Descargar WAV | entrega desc；≠ ganancia / LUFS FAQ |
| ja | オーディオ ノーマライズ；ピーク正規化；ピーク揃え | 音声ファイルをピーク正規化する | 正規化 / WAVを保存 | 納品 usecase；≠ ゲイン FAQ |
| de | Audio normalisieren; Peak-Normalisierung; dBFS | Eine Audiodatei auf Peak normalisieren | Normalisieren / WAV herunterladen | Abgabe usecase；≠ Gain / LUFS FAQ |
| fr | normaliser audio; normaliser au pic; dBFS | Normaliser un fichier audio au pic | Normaliser / Télécharger le WAV | livraison desc；≠ gain / LUFS FAQ |
| pt | normalizar áudio; normalizar ao pico; dBFS | Normalizar um arquivo de áudio ao pico | Normalizar / Baixar WAV | entrega usecase；≠ ganho FAQ |
| id | normalisasi audio; normalisasi peak; dBFS | Menormalisasi file audio ke peak | Normalisasi / Unduh WAV | penyerahan desc；bukan gain / LUFS FAQ |
| ar | تطبيع الصوت؛ تطبيع القمة؛ dBFS | تطبيع ملف صوتي إلى الذروة | تطبيع / تنزيل WAV | تسليم usecase；خصوصية FAQ |
| ru | нормализовать аудио; пиковая нормализация; dBFS | Нормализовать аудиофайл по пику | Нормализовать / Скачать WAV | сдача desc；не gain / LUFS FAQ |

- [x] 清单前检索覆盖已做
- [x] 同意图相关搜索词已写入 02
- [x] 用户意图审查已做
- [x] 检索覆盖已优化
- [x] 轮次 1 母版
- [x] 轮次 2 逐语重写
- [x] 轮次 3 抽查及禁词

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-20 | 将万能 normalize 收束为峰值目标 dBFS 等比拉齐单点；十语分配 H1 与 peak/normalize 次词；明确 ≠ 固定增益（S15）、≠ LUFS（S17）、≠ 动态压缩（S18）、≠ 体积压缩（S10）；related 仅用已上线 make-a-quiet-recording-louder 与 convert-stereo-audio-to-mono | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（峰值归一化 vs 固定增益 vs LUFS / ≠S10·S15·S17·S18）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Normalize / Download WAV；占位符 `{seconds}` `{targetDb}` `{peakBefore}` `{peakAfter}` `{output}` | en 键齐全；默认 −1 dBFS；样例自动 Normalize |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S15「把安静的录音调大声」/ Make a quiet recording louder 与 S12「将立体声音频转为单声道」/ Convert stereo… 当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{targetDb}` `{peakBefore}` `{peakAfter}` `{output}` 完好 | 通过；03 → i18n-done |
