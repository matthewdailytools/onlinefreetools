# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：整段立体声混/选为单声道导出 16-bit WAV；源文件不变；默认 Mix to mono；本机处理、不上传；WAV/mono/stereo 可保留。≠ 采样率工具（S11）、≠ MP3 体积压缩（S10）、≠ 拆左右文件（S13）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | stereo to mono; mp3 to mono; mix left right | Convert stereo audio to mono | Convert / Download WAV | 场景句 H1；mix chips；≠ sample-rate / compress / split FAQ |
| zh | 立体声转单声道；mp3 转单声道；混合左右声道 | 将立体声音频转为单声道 | 转换 / 下载 WAV | 交稿 usecase；与采样率/压缩消歧 FAQ |
| es | estéreo a mono; mp3 a mono; mezclar izquierda derecha | Convertir audio estéreo a mono | Convertir / Descargar WAV | podcast entrega desc；mezcla rules |
| ja | ステレオ モノラル 変換；mp3 モノラル；左右ミックス | ステレオ音声をモノラルに変換する | 変換 / WAVを保存 | 配信 usecase；≠ サンプリングレート FAQ |
| de | Stereo zu Mono; mp3 zu mono; links rechts mischen | Stereo-Audio in Mono umwandeln | Umwandeln / WAV herunterladen | Abgabe usecase；Mischung FAQ |
| fr | stéréo en mono; mp3 en mono; mélanger gauche droite | Convertir un audio stéréo en mono | Convertir / Télécharger le WAV | livraison desc；≠ compresser taille FAQ |
| pt | estéreo para mono; mp3 para mono; misturar esquerda direita | Converter áudio estéreo para mono | Converter / Baixar WAV | entrega usecase；mistura rules |
| id | stereo ke mono; mp3 ke mono; mix kiri kanan | Mengonversi audio stereo menjadi mono | Konversi / Unduh WAV | spesifikasi unduhan desc；bukan kompres ukuran FAQ |
| ar | استريو إلى أحادي؛ mp3 إلى أحادي؛ مزج يسار يمين | تحويل الصوت الاستريو إلى أحادي | تحويل / تنزيل WAV | تسليم الحلقة usecase；خصوصية FAQ |
| ru | стерео в моно; mp3 в моно; смешать левый правый | Преобразовать стереоаудио в моно | Преобразовать / Скачать WAV | сдача подкаста desc；не сжатие размера FAQ |

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
| 0b | 2026-09-20 | 将万能「声道/格式转换」收束为 stereo→mono 单点；十语分配 H1 与 mix/left/right、mp3 to mono 次词；明确不拆 L-R 交换 URL（S13） | 02 卡片与同意图表已回写；与 S10/S11/S13 边界写入 FAQ 计划 |
| 1b | 2026-09-20 | en 母版落地：长 description（Steps+Example）、article（混声道/相位/≠S10·S11·S13）、How×4 / Why×4 / Rules×4 / FAQ×6 | 键齐全；与 Page Mix/Left/Right HUD 对齐 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写（抽查 en,zh,es,ja），保留占位符；交叉引用 S10/S11 当地标题 | zh/es/ja/de/fr/pt/id/ar/ru 全量 |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符 `{seconds}` 等完好 | 通过 |
