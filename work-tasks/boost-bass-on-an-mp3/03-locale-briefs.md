# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对偏薄音频施加 Mild / Medium / Strong **单节 lowshelf** 低音增强预设，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。≠ 闷声三频段 EQ（S20）、≠ 整段增益放大（S15）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | bass booster; boost bass mp3; low-shelf | Boost bass on an MP3 | Boost / Download WAV | 场景句 H1；三预设；≠ EQ/louder FAQ |
| zh | 低音增强；bass booster；加低音 | 给 MP3 增强低音 | 增强低音 / 下载 WAV | ≠ 全 EQ / 整段放大 FAQ |
| es | potenciador de graves; subir bajos; low-shelf | Potenciar los graves de un MP3 | Potenciar / Descargar WAV | ≠ ecualizador FAQ |
| ja | 低音ブースト；バスブースター；low-shelf | MP3の低音をブーストする | ブースト / WAVを保存 | ≠ EQ FAQ |
| de | Bass-Booster; Bass anheben; Low-Shelf | Bass in einer MP3 anheben | Anheben / WAV herunterladen | ≠ Equalizer FAQ |
| fr | booster de basses; renforcer les graves; low-shelf | Renforcer les basses d’un MP3 | Renforcer / Télécharger le WAV | ≠ égaliseur FAQ |
| pt | booster de graves; aumentar graves; low-shelf | Aumentar os graves de um MP3 | Aumentar / Baixar WAV | ≠ equalizador FAQ |
| id | bass booster; tingkatkan bass; low-shelf | Tingkatkan bass pada MP3 | Tingkatkan / Unduh WAV | ≠ equalizer FAQ |
| ar | معزز الباس؛ تعزيز الجهير؛ low-shelf | تعزيز الباس في ملف MP3 | تعزيز / تنزيل WAV | خصوصية FAQ |
| ru | бас-бустер; усилить бас; low-shelf | Усилить бас в MP3 | Усилить / Скачать WAV | ≠ эквалайзер FAQ |

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
| 0b | 2026-09-20 | 将万能 bass booster / online EQ 收束为仅 lowshelf 三预设 Mild/Medium/Strong；十语分配 H1 与 bass/boost 次词；明确 ≠ 闷声全 EQ（S20）、≠ 整段增益（S15）；related 用已上线 eq-a-muffled-voice-recording 与 make-a-quiet-recording-louder | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（bass lowshelf vs muffled EQ vs louder）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Boost / Download WAV；占位符 `{seconds}` `{preset}` `{peakBefore}` `{peakAfter}` `{output}`；HUD Read/Decode/Boost/Write | en 键齐全；默认 Medium；样例自动 Boost；FAQ 消歧 S20/S15 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S20「给人声闷录音做均衡」与 S15「把安静录音调大」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{preset}` `{peakBefore}` `{peakAfter}` `{output}` 完好 | 通过；03 → i18n-done |
