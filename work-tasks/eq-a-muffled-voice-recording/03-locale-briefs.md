# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对闷人声施加 Clarity / Warmth / Presence 三频段 Biquad 预设，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。≠ 仅低音增强（S21）、≠ 降噪（S24）、≠ 去齿音（S31）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | equalizer; muffled voice EQ; clarity | EQ a muffled voice recording | EQ / Download WAV | 场景句 H1；三预设；≠ bass/denoise FAQ |
| zh | 均衡器；闷声；清晰度 EQ | 给人声闷录音做均衡 | 均衡 / 下载 WAV | ≠ 仅低音 / 降噪 FAQ |
| es | ecualizador; voz apagada; claridad | Ecualizar una grabación de voz apagada | EQ / Descargar WAV | ≠ graves FAQ |
| ja | イコライザー；こもった声；明瞭度 | こもったボイス録音をEQする | EQ / WAVを保存 | ≠ 低音ブースト FAQ |
| de | Equalizer; dumpfe Stimme; Klarheit | Eine dumpfe Sprachaufnahme entzerrern | EQ / WAV herunterladen | ≠ Bass FAQ |
| fr | égaliseur; voix étouffée; clarté | Égaliser un enregistrement vocal étouffé | EQ / Télécharger le WAV | ≠ basses FAQ |
| pt | equalizador; voz abafada; clareza | Equalizar uma gravação de voz abafada | EQ / Baixar WAV | ≠ graves FAQ |
| id | equalizer; suara teredam; kejernihan | EQ rekaman suara yang teredam | EQ / Unduh WAV | ≠ bass FAQ |
| ar | معادل؛ صوت مكتوم؛ وضوح | معادلة تسجيل صوت مكتوم | معادلة / تنزيل WAV | خصوصية FAQ |
| ru | эквалайзер; глухой голос; ясность | Эквалайзер для глухой голосовой записи | EQ / Скачать WAV | ≠ бас FAQ |

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
| 0b | 2026-09-20 | 将万能 online EQ 收束为闷人声三预设 Clarity/Warmth/Presence；十语分配 H1 与 equalizer/muffled 次词；明确 ≠ 仅低音（S21）、≠ 降噪（S24）、≠ 去齿音（S31）；related 用已上线 limit-peaks-so-a-file-does-not-clip 与 compress-dynamic-range-of-a-voice-recording | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（EQ vs bass vs denoise vs de-ess）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 EQ / Download WAV；占位符 `{seconds}` `{preset}` `{peakBefore}` `{peakAfter}` `{output}`；HUD Read/Decode/EQ/Write | en 键齐全；默认 Clarity；样例自动 EQ；FAQ 消歧 S21/S24/S31 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S19「限制峰值以免文件削波」与 S18「压缩人声录音的动态范围」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{preset}` `{peakBefore}` `{peakAfter}` `{output}` 完好 | 通过；03 → i18n-done |
