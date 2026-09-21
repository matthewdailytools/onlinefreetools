# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本机 **改写 ID3v2.3 曲名/艺人/专辑/可选封面**，不重编码 PCM。诚实：复杂标签可能被简化。≠ 体积压缩；≠ 抽封面/歌词独立作业。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | mp3 tag editor; id3; cover art; without re-encode | Edit MP3 title and cover art | Apply tags / Download MP3 | FAQ ID3v2.3 |
| zh | mp3标签；改封面；id3编辑；不重新编码 | 编辑 MP3 曲名与封面 | 写入标签 / 下载 MP3 | desc≥120；FAQ 诚实 |
| es | editor etiquetas MP3; carátula; sin recodificar | Editar título y carátula de un MP3 | Aplicar etiquetas / Descargar | FAQ ID3v2.3 |
| ja | MP3タグ編集；ジャケット；再エンコードなし | MP3の曲名とジャケットを編集 | タグを適用 / ダウンロード | FAQ ID3v2.3 |
| de | MP3 Tags bearbeiten; Cover; ohne Neuencodierung | MP3-Titel und Cover bearbeiten | Tags anwenden / Herunterladen | FAQ ID3v2.3 |
| fr | éditeur balises MP3; pochette; sans réencodage | Modifier le titre et la pochette MP3 | Appliquer / Télécharger | FAQ ID3v2.3 |
| pt | editor tags MP3; capa; sem recodificar | Editar título e capa de um MP3 | Aplicar tags / Baixar | FAQ ID3v2.3 |
| id | editor tag MP3; sampul; tanpa encode ulang | Edit judul dan sampul MP3 | Terapkan tag / Unduh | FAQ ID3v2.3 |
| ar | محرر وسوم MP3؛ غلاف؛ دون إعادة ترميز | تعديل عنوان وغلاف MP3 | تطبيق الوسوم / تنزيل | FAQ ID3v2.3 |
| ru | редактор тегов MP3; обложка; без перекодирования | Изменить название и обложку MP3 | Применить теги / Скачать | FAQ ID3v2.3 |

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
| 0b | 2026-09-21 | A6：ID3v2.3 曲名/封面；不重编码；related A8+WAV | 02 回写；briefs-ready |
| 1b | 2026-09-21 | 母版 en：Steps+Example、How×4 / Why×4 / Rules×4 / FAQ×5 | en 键齐全 |
| 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-21 | 抽查 en,zh,es,ja 禁词与占位符 `{s}` `{title}` `{input}` `{output}` | i18n-done |
