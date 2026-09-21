# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对音频做 WSOLA 时间拉伸以改变速度并大致保留音高，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器 time-stretch 上限与伪影。≠ 变调（S33）、≠ 夜核（S34）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | slow down without pitch; change speed; time stretch | Change audio speed without changing pitch | Stretch / Download WAV | 场景句 H1；WSOLA；≠ pitch/nightcore FAQ |
| zh | 变速不变调；放慢音频；时间拉伸 | 改变音频速度且不改变音高 | 拉伸 / 下载 WAV | ≠ 变调 / 夜核 FAQ |
| es | ralentizar sin tono; estirar tiempo; tempo | Cambiar velocidad de audio sin cambiar tono | Estirar / Descargar WAV | ≠ pitch FAQ |
| ja | ピッチ変えず速度；タイムストレッチ；スロー | 音高を変えずに音声の速度を変える | ストレッチ / WAVを保存 | ≠ ピッチ FAQ |
| de | Tempo ohne Tonhöhe; Time-Stretch; verlangsamen | Audiogeschwindigkeit ändern ohne Tonhöhe | Strecken / WAV herunterladen | ≠ Pitch FAQ |
| fr | ralentir sans pitch; time-stretch; tempo | Changer la vitesse audio sans changer la hauteur | Étirement / Télécharger le WAV | ≠ pitch FAQ |
| pt | desacelerar sem tom; time-stretch; tempo | Mudar velocidade do áudio sem mudar o tom | Esticar / Baixar WAV | ≠ pitch FAQ |
| id | ubah kecepatan tanpa pitch; time-stretch | Ubah kecepatan audio tanpa mengubah pitch | Stretch / Unduh WAV | ≠ pitch FAQ |
| ar | تغيير السرعة دون الطبقة؛ تمديد زمني | تغيير سرعة الصوت دون تغيير الطبقة | تمديد / تنزيل WAV | خصوصية FAQ |
| ru | замедлить без высоты; таймстретч; темп | Изменить скорость аудио без изменения высоты | Растянуть / Скачать WAV | ≠ pitch FAQ |

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
| 0b | 2026-09-20 | 将万能 online speed changer / playbackRate 收束为 WSOLA 时间拉伸；十语分配 H1；明确 ≠ pitch shift（S33）、≠ nightcore（S34）；related 用已上线 de-ess-a-voiceover 与 fade-in-and-fade-out-an-audio-clip | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Stretch / Download WAV；占位符 `{seconds}` `{outSeconds}` `{speed}` `{output}`；HUD Read/Decode/Stretch/Write | en 键齐全；默认 0.75x；样例自动 Stretch |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 de-ess「给人声配音去齿音」与 fade「给音频片段做淡入淡出」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实浏览器 WSOLA 上限落 Rules/FAQ | 通过；03 → i18n-done |
