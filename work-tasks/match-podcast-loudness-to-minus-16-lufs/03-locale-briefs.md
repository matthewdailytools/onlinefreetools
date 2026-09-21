# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：按目标近似综合响度对齐（芯片 −16 / −14 / −24 LUFS，默认 −16），增益后软峰值保护，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传；须诚实标注 approximate LUFS。≠ 峰值归一化（S16）、≠ 固定 dB 增益（S15）、≠ 动态压缩器（S18）、≠ MP3 体积压缩（S10）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | podcast loudness; LUFS −16; youtube loudness; spotify −14 | Match podcast loudness to −16 LUFS | Match / Download WAV | 场景句 H1；approx LUFS chips；≠ peak / gain / compressor FAQ |
| zh | 播客响度；LUFS −16；对齐响度；YouTube 响度 | 将播客响度对齐到 −16 LUFS | 对齐 / 下载 WAV | 交稿响度 usecase；与峰值/固定增益消歧 FAQ |
| es | sonoridad podcast; LUFS −16; loudness YouTube | Igualar la sonoridad del podcast a −16 LUFS | Igualar / Descargar WAV | entrega desc；≠ pico / ganancia FAQ |
| ja | ポッドキャスト ラウドネス；LUFS −16；音量揃え | ポッドキャストのラウドネスを −16 LUFS に合わせる | 合わせる / WAVを保存 | 納品 usecase；≠ ピーク FAQ |
| de | Podcast-Lautheit; LUFS −16; YouTube Loudness | Podcast-Lautheit auf −16 LUFS abstimmen | Abstimmen / WAV herunterladen | Abgabe usecase；≠ Peak / Gain FAQ |
| fr | loudness podcast; LUFS −16; sonie YouTube | Aligner la sonie podcast sur −16 LUFS | Aligner / Télécharger le WAV | livraison desc；≠ pic / gain FAQ |
| pt | loudness podcast; LUFS −16; sonoridade YouTube | Igualar o loudness do podcast a −16 LUFS | Igualar / Baixar WAV | entrega usecase；≠ pico FAQ |
| id | loudness podcast; LUFS −16; kenyaringan YouTube | Menyamakan loudness podcast ke −16 LUFS | Samakan / Unduh WAV | penyerahan desc；bukan peak / gain FAQ |
| ar | جهارة البودكاست؛ LUFS −16؛ يوتيوب | مطابقة جهارة البودكاست إلى −16 LUFS | مطابقة / تنزيل WAV | تسليم usecase؛خصوصية FAQ |
| ru | громкость подкаста; LUFS −16; YouTube loudness | Выровнять громкость подкаста до −16 LUFS | Выровнять / Скачать WAV | сдача desc；не peak / gain FAQ |

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
| 0b | 2026-09-20 | 将万能 loudness normalize 收束为播客/平台目标综合响度（−16/−14/−24）单点；十语分配 H1 与 podcast loudness/LUFS 次词；明确 ≠ 峰值归一化（S16）、≠ 固定增益（S15）、≠ 动态压缩（S18）；related 仅用已上线 normalize-an-audio-file-to-peak 与 make-a-quiet-recording-louder | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（响度对齐 vs 峰值 vs 固定增益 / ≠S15·S16·S18）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Match / Download WAV；占位符 `{seconds}` `{measured}` `{target}` `{gainDb}` `{requestedGainDb}` `{output}`；HUD Read/Decode/Measure/Match/Write | en 键齐全；默认 −16；样例自动 Match；诚实标注 approximate LUFS |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S16「将音频文件峰值归一化」/ Normalize an audio file to peak 与 S15「把安静的录音调大声」/ Make a quiet recording louder 当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{measured}` `{target}` `{gainDb}` `{output}` 完好 | 通过；03 → i18n-done |
