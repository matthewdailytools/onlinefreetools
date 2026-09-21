# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：整段增益放大（dB 滑条或预设）+ 峰值削波保护，导出 16-bit WAV；源文件不变；默认温和增益（如 +6 dB）；本机处理、不上传；WAV/dB/gain 可保留。≠ peak/LUFS 归一化（S16/S17）、≠ 动态压缩器（S18）、≠ MP3 体积压缩（S10）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | make audio louder; amplify audio; volume booster; increase volume | Make a quiet recording louder | Amplify / Download WAV | 场景句 H1；dB presets；≠ normalize / compressor / compress size FAQ |
| zh | 音频放大；提高音量；录音太小声；增益 dB | 把安静的录音调大声 | 放大 / 下载 WAV | 备忘录偏弱 usecase；与响度归一化/动态压缩消歧 FAQ |
| es | hacer audio más alto; amplificar audio; subir volumen; booster | Hacer más alta una grabación baja | Amplificar / Descargar WAV | memo flojo desc；≠ normalizar / compresor FAQ |
| ja | 音量を上げる；オーディオ 増幅；小さい録音；ゲイン | 小さな録音を大きくする | 増幅 / WAVを保存 | ボイスメモ usecase；≠ ノーマライズ FAQ |
| de | Audio lauter machen; verstärken; Lautstärke erhöhen; Gain | Eine leise Aufnahme lauter machen | Verstärken / WAV herunterladen | leises Memo usecase；≠ Normalisieren FAQ |
| fr | rendre audio plus fort; amplifier audio; augmenter volume; gain | Rendre plus forte un enregistrement faible | Amplifier / Télécharger le WAV | mémo trop bas desc；≠ normaliser / compresseur FAQ |
| pt | deixar áudio mais alto; amplificar áudio; aumentar volume; gain | Deixar uma gravação baixa mais alta | Amplificar / Baixar WAV | memo fraco usecase；≠ normalizar FAQ |
| id | buat audio lebih keras; amplifikasi audio; naikkan volume; gain | Membuat rekaman pelan lebih keras | Amplifikasi / Unduh WAV | memo pelan desc；bukan normalisasi / kompresor FAQ |
| ar | جعل الصوت أعلى؛ تضخيم الصوت؛ رفع مستوى الصوت؛ كسب | جعل تسجيل هادئ أعلى صوتا | تضخيم / تنزيل WAV | مذكرة ضعيفة usecase؛خصوصية FAQ |
| ru | сделать аудио громче; усилить звук; повысить громкость; gain | Сделать тихую запись громче | Усилить / Скачать WAV | тихое мемo desc；не нормализация / компрессор FAQ |

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
| 0b | 2026-09-20 | 将万能 volume booster / amplify 收束为整段 dB 增益 + 峰值削波保护单点；十语分配 H1 与 louder/amplify/gain 次词；明确 ≠ peak/LUFS（S16/S17）、≠ 动态压缩（S18）、≠ 体积压缩（S10）；related 仅用已上线 convert-audio-sample-rate-and-bit-depth 与 convert-stereo-audio-to-mono | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（增益 vs 归一化 vs 动态压缩 / ≠S10·S16·S17·S18）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Amplify / Download WAV；占位符 `{seconds}` `{gainDb}` `{effectiveDb}` `{peakBefore}` `{peakAfter}` `{output}` | en 键齐全；默认 +6 dB；样例自动 Amplify |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S11「转换音频采样率与位深」/ Convert audio sample rate… 与 S12「将立体声音频转为单声道」/ Convert stereo… 当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{gainDb}` `{peakBefore}` `{peakAfter}` `{output}` 完好 | 通过；03 → i18n-done |
