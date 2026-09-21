# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对配音检测齿音频段能量并动态高架/频段衰减，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器去齿音上限。≠ 闷声 EQ（S20）、≠ 宽带降噪（S24）、≠ 去咔哒（S27）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | de-esser; remove sibilance; harsh S | De-ess a voiceover | De-ess / Download WAV | 场景句 H1；灵敏度；≠ EQ/denoise/declick FAQ |
| zh | 去齿音；去咝音；配音去齿 | 给人声配音去齿音 | 去齿音 / 下载 WAV | ≠ EQ / 降噪 / 咔哒 FAQ |
| es | de-esser; sibilancia; silbidos | Desesibilizar una locución | Desesibilizar / Descargar WAV | ≠ EQ FAQ |
| ja | ディエッサー；歯擦音；サ行 | ボイスオーバーの歯擦音を抑える | ディエッサー / WAVを保存 | ≠ EQ FAQ |
| de | De-Esser; Zischlaute; Sibilanz | Voiceover de-essen | De-essen / WAV herunterladen | ≠ EQ FAQ |
| fr | dé-esseur; sibilance; sifflantes | Dé-esser une voix off | Dé-esser / Télécharger le WAV | ≠ EQ FAQ |
| pt | de-esser; sibilância; chiados | De-essar uma locução | De-essar / Baixar WAV | ≠ EQ FAQ |
| id | de-esser; desis; sibilance | De-ess voiceover | De-ess / Unduh WAV | ≠ EQ FAQ |
| ar | إزالة الصفير؛ صرير؛ دي إيسر | إزالة الصفير من تعليق صوتي | إزالة الصفير / تنزيل WAV | خصوصية FAQ |
| ru | деэссер; сибилянты; свист | Убрать сибилянты из закадра | Деэссер / Скачать WAV | ≠ EQ FAQ |

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
| 0b | 2026-09-20 | 将万能 online de-esser / EQ 收束为齿音频段能量检测 + 动态高架衰减；十语分配 H1；明确 ≠ EQ（S20）、≠ denoise（S24）、≠ declick（S27）；related 用已上线 remove-clicks-from-a-recording 与 eq-a-muffled-voice-recording | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 De-ess / Download WAV；占位符 `{seconds}` `{sensitivity}` `{active}` `{output}`；HUD Read/Decode/De-ess/Write | en 键齐全；默认 Medium；样例自动 De-ess |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 EQ「给人声闷录音做均衡」与 declick「从录音中去除咔哒与爆音」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实浏览器上限落 Rules/FAQ | 通过；03 → i18n-done |
