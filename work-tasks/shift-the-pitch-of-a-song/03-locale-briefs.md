# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：按半音转调并大致保留时长，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器 resample+WSOLA 质量上限与伪影。≠ 变速不变调（S32）、≠ 夜核（S34）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | pitch shifter; change pitch; transpose | Shift the pitch of a song | Shift / Download WAV | 场景句 H1；半音；≠ speed/nightcore FAQ |
| zh | 音频变调；降调伴奏；半音转调 | 给歌曲变调 | 变调 / 下载 WAV | ≠ 变速 / 夜核 FAQ；desc≥120 |
| es | cambiar tono; transponer; semitonos | Cambiar el tono de una canción | Transponer / Descargar WAV | ≠ speed FAQ |
| ja | ピッチシフト；転調；半音 | 曲のピッチを変える | シフト / WAVを保存 | ≠ 速度 FAQ |
| de | Tonhöhe ändern; Pitch-Shifter; Halbton | Die Tonhöhe eines Songs verschieben | Verschieben / WAV herunterladen | ≠ Tempo FAQ |
| fr | changer la hauteur; transpose; demi-ton | Décaler la hauteur d’une chanson | Décaler / Télécharger le WAV | ≠ vitesse FAQ |
| pt | mudar tom; transpor; semitom | Mudar o tom de uma música | Transpor / Baixar WAV | ≠ velocidade FAQ |
| id | geser pitch; transpose; semitone | Geser pitch sebuah lagu | Geser / Unduh WAV | ≠ kecepatan FAQ |
| ar | تغيير الطبقة؛ نقل نصف نغمة | إزاحة طبقة أغنية | إزاحة / تنزيل WAV | خصوصية FAQ |
| ru | сдвиг высоты; транспонирование; полутон | Сдвинуть высоту песни | Сдвинуть / Скачать WAV | ≠ скорость FAQ |

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
| 0b | 2026-09-20 | 将万能 pitch changer / playbackRate 收束为半音转调+时长保留；十语分配 H1；明确 ≠ speed-without-pitch（S32）、≠ nightcore（S34）；related 用已上线 change-audio-speed-without-changing-pitch 与 boost-bass-on-an-mp3 | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Shift / Download WAV；占位符 `{seconds}` `{outSeconds}` `{semitones}` `{output}`；HUD Read/Decode/Shift/Write | en 键齐全；默认 −2；样例自动 Shift |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用变速「改变音频速度且不改变音高」与低音「给 MP3 增强低音」当地标题；占位符完好；zh description ≥120 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实浏览器变调上限落 Rules/FAQ | 通过；03 → i18n-done |
