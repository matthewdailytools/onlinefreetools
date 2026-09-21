# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对整段剪辑施加头端淡入 + 尾端淡出（时长芯片 0.5/1/2/3 s），曲线可选线性或等功率，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。≠ 无缝循环环绕交叉淡化（S5）、≠ 限幅/EQ。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | fade in fade out audio; soft start; equal-power | Fade in and fade out an audio clip | Fade / Download WAV | 场景句 H1；时长芯片；≠ loop/EQ FAQ |
| zh | 音频淡入淡出；软起软收；等功率 | 给音频剪辑加淡入淡出 | 淡化 / 下载 WAV | ≠ 无缝循环 / EQ FAQ |
| es | fundido de entrada y salida; fade audio; equal-power | Añadir fundido de entrada y salida a un clip | Fundir / Descargar WAV | ≠ bucle FAQ |
| ja | フェードイン フェードアウト；ソフト開始；等パワー | オーディオクリップにフェードイン・アウトを付ける | フェード / WAVを保存 | ≠ ループ FAQ |
| de | Ein- und Ausblenden; Fade Audio; Equal-Power | Audio-Clip ein- und ausblenden | Überblenden / WAV herunterladen | ≠ Loop FAQ |
| fr | fondu enchaîné entrée sortie; fade audio; equal-power | Appliquer un fondu d’entrée et de sortie à un clip | Fondu / Télécharger le WAV | ≠ boucle FAQ |
| pt | fade in fade out; suavizar início fim; equal-power | Aplicar fade in e fade out a um clipe | Aplicar / Baixar WAV | ≠ loop FAQ |
| id | fade in fade out audio; soft start; equal-power | Fade in dan fade out pada klip audio | Fade / Unduh WAV | ≠ loop FAQ |
| ar | تلاشي دخول وخروج؛ فيد إن آوت؛ equal-power | إضافة تلاشي دخول وخروج لمقطع صوتي | تلاشي / تنزيل WAV | خصوصية FAQ |
| ru | фейд ин фейд аут; плавное начало; equal-power | Добавить фейд-ин и фейд-аут к аудиоклипу | Применить / Скачать WAV | ≠ петля FAQ |

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
| 0b | 2026-09-20 | 将万能 online fade / DAW 收束为整段头尾淡入淡出、时长芯片 0.5/1/2/3 s、线性/等功率；十语分配 H1 与 fade 次词；明确 ≠ 无缝循环交叉淡化（S5）、≠ 限幅/EQ；related 用已上线 boost-bass-on-an-mp3 与 trim-an-audio-clip-and-export | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（edge fade vs seamless wrap vs EQ/limiter）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Fade / Download WAV；占位符 `{seconds}` `{fadeIn}` `{fadeOut}` `{curve}` `{output}`；HUD Read/Decode/Fade/Write | en 键齐全；默认 1s/1s equal-power；样例自动 Fade；FAQ 消歧 S5 与 EQ/limiter |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S5「把音频做成无缝循环」与 trim「裁剪一段音频并导出」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{fadeIn}` `{fadeOut}` `{curve}` `{output}` 完好 | 通过；03 → i18n-done |
