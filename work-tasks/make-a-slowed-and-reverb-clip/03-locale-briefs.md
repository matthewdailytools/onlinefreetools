# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：按减速倍率重采样（同时降调并拉长时长）再叠加反馈延迟混响，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器质量上限。≠ 变速不变调（S32）、≠ 夜核（S34）、≠ 只混响（S40）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | slowed and reverb; slow with reverb | Make a slowed and reverb clip | Slowed reverb / Download WAV | 场景句 H1；slow+reverb；≠ S32/S34/S40 FAQ |
| zh | 慢歌混响；slowed reverb；减速混响 | 制作 slowed 混响剪辑 | Slowed 混响 / 下载 WAV | ≠ 变速 / 夜核 / 只混响 FAQ；desc≥120 |
| es | slowed and reverb; ralentizar con reverb | Crear un clip slowed and reverb | Slowed reverb / Descargar WAV | ≠ solo tempo FAQ |
| ja | スロー＋リバーブ；slowed reverb | スロー＆リバーブのクリップを作る | スロー＋リバーブ / WAVを保存 | ≠ 速度のみ FAQ |
| de | Slowed and Reverb; verlangsamen mit Hall | Einen Slowed-and-Reverb-Clip machen | Slowed Reverb / WAV herunterladen | ≠ Tempo FAQ |
| fr | slowed and reverb; ralentir avec réverb | Faire un clip slowed and reverb | Slowed reverb / Télécharger le WAV | ≠ vitesse FAQ |
| pt | slowed and reverb; desacelerar com reverb | Fazer um clipe slowed and reverb | Slowed reverb / Baixar WAV | ≠ velocidade FAQ |
| id | slowed and reverb; perlambat dengan reverb | Buat klip slowed and reverb | Slowed reverb / Unduh WAV | ≠ kecepatan FAQ |
| ar | سلو + ريفرب؛ إبطاء مع صدى | صنع مقطع slowed and reverb | Slowed reverb / تنزيل WAV | خصوصية FAQ |
| ru | slowed and reverb; замедлить с ревербом | Сделать клип slowed and reverb | Slowed reverb / Скачать WAV | ≠ скорость FAQ |

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
| 0b | 2026-09-20 | 将万能 converter / 只减速收束为 slowed+reverb 一条龙；十语分配 H1；明确 ≠ S32、≠ S34、≠ S40；related 用已上线 make-a-nightcore-version-of-a-song 与 change-audio-speed-without-changing-pitch | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Slowed reverb / Download WAV；占位符 `{seconds}` `{outSeconds}` `{speed}` `{semitones}` `{reverb}` `{output}`；HUD Read/Decode/Slow/Reverb/Write | en 键齐全；默认 0.8× + Medium；样例自动跑 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用夜核与变速当地标题；占位符完好；zh description ≥120 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实浏览器上限与无混响空壳禁令落 Rules/FAQ | 通过；03 → i18n-done |
