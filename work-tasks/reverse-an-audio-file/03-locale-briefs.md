# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：逐声道样本倒序，时长与采样率不变，导出 16-bit WAV；源文件不变；本机处理、不上传。≠ 8D（S36）、≠ 淡入淡出（S22）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | reverse audio; play backwards | Reverse an audio file | Reverse / Download WAV | 场景句 H1；sample reverse；≠ 8D/fade FAQ |
| zh | 音频倒放；倒放；反向播放 | 倒放音频文件 | 倒放 / 下载 WAV | ≠ 8D / 淡入淡出 FAQ；desc≥120 |
| es | invertir audio; reproducir al revés | Invertir un archivo de audio | Invertir / Descargar WAV | ≠ 8D FAQ |
| ja | 音声を逆再生；リバース | 音声ファイルをリバースする | リバース / WAVを保存 | ≠ 8D FAQ |
| de | Audio umkehren; rückwärts abspielen | Eine Audiodatei umkehren | Umkehren / WAV herunterladen | ≠ 8D FAQ |
| fr | inverser audio; lire à l’envers | Inverser un fichier audio | Inverser / Télécharger le WAV | ≠ 8D FAQ |
| pt | reverter áudio; tocar de trás pra frente | Reverter um arquivo de áudio | Reverter / Baixar WAV | ≠ 8D FAQ |
| id | balik audio; putar mundur | Balikkan berkas audio | Balik / Unduh WAV | ≠ 8D FAQ |
| ar | عكس صوت؛ تشغيل للخلف | عكس ملف صوتي | عكس / تنزيل WAV | خصوصية FAQ |
| ru | реверс аудио; воспроизвести назад | Перевернуть аудиофайл | Реверс / Скачать WAV | ≠ 8D FAQ |

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
| 0b | 2026-09-20 | 将万能 converter 收束为样本倒序单点页；十语分配 H1；明确 ≠ S36、≠ S22；related 用 make-an-8d-panning-version-of-a-song 与 fade-in-and-fade-out-an-audio-clip | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Reverse / Download WAV；占位符 `{seconds}` `{channels}` `{output}`；HUD Read/Decode/Reverse/Write | en 键齐全；样例自动跑 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 8D 与淡入淡出当地标题；占位符完好；zh description ≥120 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实边界落 Rules/FAQ | 通过；03 → i18n-done |
