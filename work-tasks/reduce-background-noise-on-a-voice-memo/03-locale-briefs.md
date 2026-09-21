# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对人声备忘录施加高通 + 噪声底估计 + 轻柔门控近似降噪（Light/Medium/Strong），导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器上限。≠ Adobe 级 Enhance（S25）、≠ 去市电嗡嗡（S26）、≠ 闷声 EQ（S20）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | reduce background noise; denoise voice; noise reduction | Reduce background noise on a voice memo | Denoise / Download WAV | 场景句 H1；三档；≠ Enhance/EQ/hum FAQ |
| zh | 音频降噪；去除背景噪音；人声备忘录 | 给人声备忘录降低背景噪音 | 降噪 / 下载 WAV | ≠ Enhance / EQ / 嗡嗡 FAQ |
| es | reducir ruido de fondo; denoise voz; reducción de ruido | Reducir el ruido de fondo de un memo de voz | Reducir ruido / Descargar WAV | ≠ Enhance FAQ |
| ja | ノイズ除去；背景ノイズ低減；ボイスメモ | ボイスメモの背景ノイズを減らす | ノイズ低減 / WAVを保存 | ≠ Enhance FAQ |
| de | Hintergrundgeräusche reduzieren; Rauschunterdrückung; Sprachnotiz | Hintergrundgeräusche einer Sprachnotiz reduzieren | Entrauschen / WAV herunterladen | ≠ Enhance FAQ |
| fr | réduire bruit de fond; débruitage audio; mémo vocal | Réduire le bruit de fond d’un mémo vocal | Débruiter / Télécharger le WAV | ≠ Enhance FAQ |
| pt | reduzir ruído de fundo; denoise voz; memo de voz | Reduzir o ruído de fundo de um memo de voz | Reduzir ruído / Baixar WAV | ≠ Enhance FAQ |
| id | kurangi noise latar; denoise suara; memo suara | Kurangi noise latar pada memo suara | Denoise / Unduh WAV | ≠ Enhance FAQ |
| ar | تقليل ضوضاء الخلفية؛ إزالة الضوضاء؛ مذكرة صوتية | تقليل ضوضاء الخلفية في مذكرة صوتية | تقليل الضوضاء / تنزيل WAV | خصوصية FAQ |
| ru | убрать фоновый шум; шумоподавление; голосовая заметка | Снизить фоновый шум в голосовой заметке | Подавить шум / Скачать WAV | ≠ Enhance FAQ |

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
| 0b | 2026-09-20 | 将万能 online denoise / Adobe Enhance 收束为人声备忘录稳态底噪、Light/Medium/Strong、高通+噪声底门控近似；十语分配 H1 与 noise/denoise 次词；明确 ≠ Enhance（S25）、≠ dehum（S26）、≠ EQ（S20）；related 用已上线 fade-in-and-fade-out-an-audio-clip 与 eq-a-muffled-voice-recording | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（denoise vs Enhance vs dehum vs EQ）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Denoise / Download WAV；占位符 `{seconds}` `{preset}` `{floor}` `{output}`；HUD Read/Decode/Denoise/Write；主词落 H1 | en 键齐全；默认 Medium；样例自动 Denoise；FAQ 消歧 S20/S25/S26 与浏览器诚实上限 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 fade「给音频剪辑加淡入淡出」与 EQ「给人声闷录音做均衡」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{preset}` `{floor}` `{output}` 完好；诚实浏览器上限落 Rules/FAQ | 通过；03 → i18n-done |
