# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对录音检测短瞬态尖峰并用线性插值修复，导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器去咔哒上限。≠ 宽带降噪（S24）、≠ 市电去嗡（S26）、≠ 去齿音（S31）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | remove clicks pops; declick; vinyl crackle | Remove clicks from a recording | Declick / Download WAV | 场景句 H1；灵敏度；≠ denoise/dehum/de-ess FAQ |
| zh | 去咔哒；去爆音；去除爆音 | 从录音中去除咔哒与爆音 | 去咔哒 / 下载 WAV | ≠ 降噪 / 嗡嗡 / 齿音 FAQ |
| es | quitar clics pops; declick; crepitado vinilo | Quitar clics de una grabación | Quitar clics / Descargar WAV | ≠ denoise FAQ |
| ja | クリック除去；ポップノイズ；クラックル | 録音からクリックを除去する | クリック除去 / WAVを保存 | ≠ denoise FAQ |
| de | Klicks entfernen; Knackser; Vinylknistern | Klicks aus einer Aufnahme entfernen | Entklicken / WAV herunterladen | ≠ denoise FAQ |
| fr | enlever clics pops; declick; craquement vinyle | Retirer les clics d’un enregistrement | Décliquer / Télécharger le WAV | ≠ denoise FAQ |
| pt | remover cliques pops; declick; crepitação vinil | Remover cliques de uma gravação | Remover cliques / Baixar WAV | ≠ denoise FAQ |
| id | hapus klik pops; declick; retak vinil | Hapus klik dari rekaman | Declick / Unduh WAV | ≠ denoise FAQ |
| ar | إزالة النقرات؛ فرقعات؛ تشقق فينيل | إزالة النقرات من تسجيل | إزالة النقرات / تنزيل WAV | خصوصية FAQ |
| ru | убрать щелчки; клики; треск винила | Убрать щелчки из записи | Убрать щелчки / Скачать WAV | ≠ denoise FAQ |

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
| 0b | 2026-09-20 | 将万能 online declick / denoise 收束为短尖峰检测 + 插值；十语分配 H1；明确 ≠ denoise（S24）、≠ dehum（S26）、≠ de-ess（S31）；related 用已上线 remove-mains-hum-from-a-recording 与 reduce-background-noise-on-a-voice-memo | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Declick / Download WAV；占位符 `{seconds}` `{sensitivity}` `{clicks}` `{output}`；HUD Read/Decode/Declick/Write | en 键齐全；默认 Medium；样例自动 Declick |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 dehum「从录音中去除市电嗡嗡」与 denoise「给人声备忘录降低背景噪音」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实浏览器上限落 Rules/FAQ | 通过；03 → i18n-done |
