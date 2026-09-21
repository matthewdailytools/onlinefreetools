# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：更高/更低人声听感（resample+WSOLA 旨在保时长）→ 16-bit WAV；**不承诺性别转换**；≠ S38 玩具；≠ S33 歌曲移调场景。SERP 英语摘录见 02。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | higher or lower voice; voice pitch | Shift a recording toward a higher or lower voice | Shift / Download WAV | FAQ no gender claim |
| zh | 人声变高；人声变低；男变女 | 把录音调向更高或更低的人声 | 调整 / 下载 WAV | FAQ 不承诺性别；desc≥120 |
| es | voz más aguda; voz más grave | Desplazar una grabación hacia una voz más aguda o más grave | Desplazar / Descargar WAV | FAQ sin afirmación de género |
| ja | 声を高く；声を低く | 録音を高めまたは低めの声へシフトする | シフト / WAVを保存 | FAQ 性別変換を約束しない |
| de | höhere Stimme; tiefere Stimme | Eine Aufnahme zu einer höheren oder tieferen Stimme verschieben | Verschieben / WAV herunterladen | FAQ kein Geschlechtsversprechen |
| fr | voix plus aiguë; voix plus grave | Décaler un enregistrement vers une voix plus aiguë ou plus grave | Décaler / Télécharger le WAV | FAQ sans promesse de genre |
| pt | voz mais aguda; voz mais grave | Deslocar uma gravação para uma voz mais aguda ou mais grave | Deslocar / Baixar WAV | FAQ sem promessa de gênero |
| id | suara lebih tinggi; suara lebih rendah | Geser rekaman menuju suara lebih tinggi atau lebih rendah | Geser / Unduh WAV | FAQ tanpa klaim gender |
| ar | صوت أعلى؛ صوت أخفض | إزاحة تسجيل نحو صوت أعلى أو أخفض | إزاحة / تنزيل WAV | FAQ بلا وعد بتحويل الجنس |
| ru | выше голос; ниже голос | Сдвинуть запись к более высокому или низкому голосу | Сдвинуть / Скачать WAV | FAQ без обещания смены пола |

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
| 0b | 2026-09-20 | 将性别变声卖点收束为更高/更低诚实听感；十语 H1；≠ S38/S33 场景；related 用玩具变声与歌曲移调 | 02 回写；briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example）、article、How×4 / Why×4 / Rules×4 / FAQ×6（含 anti-gender）；按钮 Shift / Download WAV；四预设 voice_label；占位符 `{seconds}` `{outSeconds}` `{preset}` `{output}`；HUD Read/Decode/Shift/Write | en 键齐全；默认 Higher；样例自动 Shift |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用玩具变声与歌曲移调当地标题；占位符完好；zh description ≥120；FAQ anti-gender 各语落地 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查禁词：无 gender changer H1；无 chipmunk/robot 主卖点；占位符 {s}/{seconds}/{outSeconds}/{preset}/{output} 齐全 | i18n-done；coverage gate 通过 |
