# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对录音施加 50/60 Hz 市电基波 notch ± 可选 2–5 次谐波，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器陷波上限。≠ 宽带降噪（S24）、≠ 去咔哒（S27）、≠ 闷声 EQ（S20）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | remove hum 50hz; dehum; mains hum | Remove mains hum from a recording | Dehum / Download WAV | 场景句 H1；50/60+谐波；≠ denoise/EQ/declick FAQ |
| zh | 去电流声；去嗡嗡；50Hz | 从录音中去除市电嗡嗡 | 去嗡嗡 / 下载 WAV | ≠ 降噪 / EQ / 咔哒 FAQ |
| es | quitar zumbido 50hz; dehum; hum eléctrico | Quitar el zumbido de red de una grabación | Quitar zumbido / Descargar WAV | ≠ denoise FAQ |
| ja | ハム除去；50Hz；電源ハム | 録音から電源ハムを除去する | ハム除去 / WAVを保存 | ≠ denoise FAQ |
| de | Brummen entfernen; Netzbrummen; 50 Hz | Netzbrummen aus einer Aufnahme entfernen | Entbrummen / WAV herunterladen | ≠ denoise FAQ |
| fr | enlever ronflement 50hz; déhum; ronflement secteur | Retirer le ronflement secteur d’un enregistrement | Déshummer / Télécharger le WAV | ≠ denoise FAQ |
| pt | remover zumbido 50hz; dehum; zumbido elétrico | Remover o zumbido da rede de uma gravação | Remover zumbido / Baixar WAV | ≠ denoise FAQ |
| id | hilangkan dengung 50hz; dehum; dengung listrik | Hapus dengung listrik dari rekaman | Dehum / Unduh WAV | ≠ denoise FAQ |
| ar | إزالة همهمة التيار؛ 50 هرتز؛ dehum | إزالة همهمة التيار الكهربائي من تسجيل | إزالة الهمهمة / تنزيل WAV | خصوصية FAQ |
| ru | убрать гул 50 гц; сетевой гул; dehum | Убрать сетевой гул из записи | Убрать гул / Скачать WAV | ≠ denoise FAQ |

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
| 0b | 2026-09-20 | 将万能 online dehum / EQ 陷波收束为 50/60 Hz 市电基波 + 可选谐波 notch；十语分配 H1 与 hum/dehum 次词；明确 ≠ denoise（S24）、≠ declick（S27）、≠ EQ（S20）；related 用已上线 reduce-background-noise-on-a-voice-memo 与 eq-a-muffled-voice-recording | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（dehum vs denoise vs declick vs EQ）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Dehum / Download WAV；占位符 `{seconds}` `{hz}` `{harmonics}` `{notches}` `{output}`；HUD Read/Decode/Dehum/Write；主词落 H1 | en 键齐全；默认 50 Hz + 谐波；样例自动 Dehum；FAQ 消歧 S20/S24/S27 与浏览器诚实上限 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 denoise「给人声备忘录降低背景噪音」与 EQ「给人声闷录音做均衡」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{hz}` `{harmonics}` `{notches}` `{output}` 完好；诚实浏览器上限落 Rules/FAQ | 通过；03 → i18n-done |
