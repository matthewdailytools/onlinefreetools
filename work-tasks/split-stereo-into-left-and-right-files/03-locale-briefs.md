# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：立体声拆为左右两个 16-bit mono WAV（ZIP）和/或交换 L-R 导出单个 16-bit stereo WAV；源文件不变；默认 Split to files；本机处理、不上传；WAV/ZIP/left/right/stereo 可保留。≠ 混成一个 mono（S12）、≠ 采样率工具（S11）、≠ MP3 体积压缩（S10）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | split stereo left right; swap left right; extract channels ZIP | Split stereo into left and right files | Convert / Download ZIP | 场景句 H1；Swap chip；≠ mix-to-mono FAQ |
| zh | 分离左右声道；交换左右声道；拆成两个单声道 | 将立体声拆成左右声道文件 | 转换 / 下载 ZIP | 分轨剪辑 usecase；与混成单声道消歧 FAQ |
| es | separar estéreo izquierda derecha; intercambiar canales; ZIP mono | Separar el estéreo en archivos izquierdo y derecho | Convertir / Descargar ZIP | edición por pista desc；≠ mezclar a mono FAQ |
| ja | ステレオ 左右 分離；左右入れ替え；2つのモノラル | ステレオを左右ファイルに分割する | 変換 / ZIPを保存 | 別編集 usecase；≠ モノラルミックス FAQ |
| de | Stereo links rechts trennen; Kanäle tauschen; ZIP Mono | Stereo in linke und rechte Dateien aufteilen | Umwandeln / ZIP herunterladen | Spur-Export usecase；≠ zu Mono mischen FAQ |
| fr | séparer stéréo gauche droite; inverser canaux; ZIP mono | Séparer la stéréo en fichiers gauche et droit | Convertir / Télécharger le ZIP | montage par piste desc；≠ mélanger en mono FAQ |
| pt | separar estéreo esquerda direita; trocar canais; ZIP mono | Separar o estéreo em arquivos esquerdo e direito | Converter / Baixar ZIP | edição por faixa usecase；≠ misturar para mono FAQ |
| id | pisah stereo kiri kanan; tukar saluran; ZIP mono | Memisahkan stereo menjadi file kiri dan kanan | Konversi / Unduh ZIP | edit per trek desc；bukan mix ke mono FAQ |
| ar | فصل الاستريو يمين يسار؛ تبديل القنوات؛ ZIP أحادي | فصل الاستريو إلى ملفات يمين ويسار | تحويل / تنزيل ZIP | تحرير المسارات usecase；خصوصية FAQ |
| ru | разделить стерео левый правый; поменять каналы; ZIP моно | Разделить стерео на левый и правый файлы | Преобразовать / Скачать ZIP | раздельный монтаж desc；не микс в моно FAQ |

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
| 0b | 2026-09-20 | 将万能「声道分离/转换」收束为 split L/R 双文件 ZIP + 同页 swap；十语分配 H1 与 swap/ZIP 次词；明确 ≠ 混成一个 mono（S12）及 S10/S11 | 02 卡片与同意图表已回写；与 S10/S11/S12 边界写入 FAQ 计划 |
| 1b | 2026-09-20 | en 母版落地：长 description（Steps+Example）、article（拆文件 vs 混 mono / ≠S10·S11·S12）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Convert / Download ZIP / Download WAV；占位符 `{seconds}` `{sourceChannels}` `{mode}` `{output}` `{s}` | 键齐全；与 Page Split/Swap HUD 对齐；左预览 + ZIP 双文件边界写入 Rules |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写（抽查 en,zh,es,ja），保留占位符；交叉引用 S12 当地标题（将立体声音频转为单声道 / Convertir audio estéreo a mono / ステレオ音声をモノラルに変換する 等）；ar 的 left_name/right_name 用 latin left/right 保 ZIP 兼容 | zh/es/ja/de/fr/pt/id/ar/ru 全量；en,zh,es,ja 抽查 H1/按钮/FAQ 消歧与 description 步骤词一致 |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/pasos/手順/Schritte/étapes/passos/langkah/خطوات/шаг + Example/示例/ejemplo/例/Beispiel/exemple/exemplo/contoh/مثال/пример）；禁空「免费/最好」；占位符完好 | 通过 |
