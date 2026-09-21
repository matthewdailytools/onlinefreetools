# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对人声施加阈值/比率预设的动态范围压缩（Light soft / Medium soft / Heavy hard），可选 makeup gain，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。≠ MP3 体积压缩（S10；中英「压缩」须 FAQ 消歧）、≠ 固定 dB 增益（S15）、≠ 峰值归一化（S16）、≠ LUFS（S17）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | audio compressor; vocal compressor; dynamic range | Compress dynamic range of a voice recording | Compress / Download WAV | 场景句 H1；Light/Medium/Heavy；≠ MP3 compress FAQ |
| zh | 音频压缩器；人声压缩；动态范围；压缩录音 | 压缩人声录音的动态范围 | 压缩 / 下载 WAV | 「压缩」≠ 压体积 FAQ；轻/中/重 |
| es | compresor de audio; rango dinámico; voz | Comprimir el rango dinámico de una grabación de voz | Comprimir / Descargar WAV | ≠ tamaño MP3 FAQ |
| ja | オーディオコンプレッサー；ダイナミックレンジ；声 | 音声録音のダイナミックレンジを圧縮する | 圧縮する / WAVを保存 | ≠ 容量圧縮 FAQ |
| de | Audio-Kompressor; Dynamikumfang; Stimme | Dynamikumfang einer Sprachaufnahme komprimieren | Komprimieren / WAV herunterladen | ≠ MP3-Größe FAQ |
| fr | compresseur audio; plage dynamique; voix | Compresser la plage dynamique d’un enregistrement vocal | Compresser / Télécharger le WAV | ≠ taille MP3 FAQ |
| pt | compressor de áudio; faixa dinâmica; voz | Comprimir a faixa dinâmica de uma gravação de voz | Comprimir / Baixar WAV | ≠ tamanho MP3 FAQ |
| id | kompresor audio; rentang dinamis; suara | Mengompres rentang dinamis rekaman suara | Kompres / Unduh WAV | ≠ ukuran MP3 FAQ |
| ar | ضاغط صوت؛ المدى الديناميكي؛ صوت | ضغط المدى الديناميكي لتسجيل صوتي | ضغط / تنزيل WAV | خصوصية FAQ |
| ru | компрессор аудио; динамический диапазон; голос | Сжать динамический диапазон голосовой записи | Сжать / Скачать WAV | ≠ размер MP3 FAQ |

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
| 0b | 2026-09-20 | 将万能 audio compressor 收束为人声动态范围压缩（Light/Medium/Heavy + makeup On/Off）单点；十语分配 H1 与 compressor/dynamic range 次词；明确 ≠ MP3 体积（中英「压缩」）、≠ 固定增益（S15）、≠ 峰值（S16）、≠ LUFS（S17）；related 用已上线 match-podcast-loudness-to-minus-16-lufs 与 make-a-quiet-recording-louder | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（动态压缩 vs 增益 vs 峰值 vs LUFS / ≠S10·S15·S16·S17）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Compress / Download WAV；占位符 `{seconds}` `{preset}` `{makeup}` `{output}`；HUD Read/Decode/Compress/Write | en 键齐全；默认 Medium + Makeup On；样例自动 Compress；FAQ 消歧中英「压缩」 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S17「将播客响度对齐到 −16 LUFS」与 S15「把安静的录音调大声」当地标题；中文 FAQ 明确「压缩」≠ 压小 MP3；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{preset}` `{makeup}` `{output}` 完好 | 通过；03 → i18n-done |
