# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：按夜核倍率重采样，同时加速并升高音高（缩短时长），导出 16-bit WAV 并保留声道；源文件不变；本机处理、不上传。诚实写浏览器 resample 质量上限。≠ 变速不变调（S32）、≠ 半音变调保时长（S33）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | nightcore maker; speed up raise pitch | Make a nightcore version of a song | Nightcore / Download WAV | 场景句 H1；speed+pitch；≠ S32/S33 FAQ |
| zh | 夜核；加速升调；nightcore | 制作歌曲的夜核版本 | 夜核 / 下载 WAV | ≠ 变速 / 变调 FAQ；desc≥120 |
| es | nightcore; acelerar subir tono | Crear una versión nightcore de una canción | Nightcore / Descargar WAV | ≠ solo tempo FAQ |
| ja | ナイトコア；高速化＋ピッチ | 曲のナイトコア版を作る | ナイトコア / WAVを保存 | ≠ 速度のみ FAQ |
| de | Nightcore; schneller und höher | Eine Nightcore-Version eines Songs machen | Nightcore / WAV herunterladen | ≠ Tempo FAQ |
| fr | nightcore; accélérer monter hauteur | Faire une version nightcore d’une chanson | Nightcore / Télécharger le WAV | ≠ vitesse FAQ |
| pt | nightcore; acelerar subir tom | Fazer uma versão nightcore de uma música | Nightcore / Baixar WAV | ≠ velocidade FAQ |
| id | nightcore; percepat naik pitch | Buat versi nightcore sebuah lagu | Nightcore / Unduh WAV | ≠ kecepatan FAQ |
| ar | نايت كور؛ تسريع ورفع الطبقة | صنع نسخة نايت كور لأغنية | نايت كور / تنزيل WAV | خصوصية FAQ |
| ru | nightcore; ускорить и поднять высоту | Сделать nightcore-версию песни | Nightcore / Скачать WAV | ≠ скорость FAQ |

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
| 0b | 2026-09-20 | 将万能 speed changer / 只变调收束为夜核加速+升调一条龙；十语分配 H1；明确 ≠ S32、≠ S33；related 用已上线 shift-the-pitch-of-a-song 与 change-audio-speed-without-changing-pitch | 02 卡片与同意图表已回写；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Nightcore / Download WAV；占位符 `{seconds}` `{outSeconds}` `{speed}` `{semitones}` `{output}`；HUD Read/Decode/Nightcore/Write | en 键齐全；默认 1.25×；样例自动 Nightcore |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用变调与变速当地标题；占位符完好；zh description ≥120 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词；禁空「免费/最好」；占位符完好；诚实浏览器夜核上限落 Rules/FAQ | 通过；03 → i18n-done |
