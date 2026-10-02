# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本地 **.webm** → MediaElement 回退抓取 Opus（约 **500 MiB / 4 h**）→ WAV/MP3；**拒 YouTube/URL**；**不**宣称 5 GiB demux/OPFS；≠ hub 混容器；≠ 静音成片。SERP 英语摘录见 02；他语按当地 WebM 抽音搜法独立 brief。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | extract audio from webm; webm to mp3; not uploaded | Extract audio from an WebM file | Extract / Download WAV·MP3 | FAQ no URL；hub/batch related |
| zh | webm 提取音频；webm 转 mp3；不上传服务器 | 从 WebM 文件提取音频 | 提取 / 下载 WAV·MP3 | desc≥120；FAQ 拒链接；混格式指 hub |
| es | extraer audio de webm; webm a mp3; sin subir | Extraer audio de un archivo WebM | Extraer / Descargar | FAQ sin URL |
| ja | webm から音声抽出；webm を mp3；アップロードなし | WebMファイルから音声を抽出する | 抽出 / 保存 | FAQ URL 不可 |
| de | Audio aus WebM extrahieren; webm zu mp3; ohne Upload | Audio aus einer WebM-Datei extrahieren | Extrahieren / Herunterladen | FAQ keine URL |
| fr | extraire audio webm; webm en mp3; sans envoi | Extraire l’audio d’un fichier WebM | Extraire / Télécharger | FAQ sans lien |
| pt | extrair áudio de webm; webm para mp3; sem enviar | Extrair áudio de um ficheiro WebM | Extrair / Baixar | FAQ sem URL |
| id | ekstrak audio dari webm; webm ke mp3; tanpa unggah | Ekstrak audio dari file WebM | Ekstrak / Unduh | FAQ tanpa URL |
| ar | استخراج صوت من webm؛ webm إلى mp3؛ دون رفع | استخراج الصوت من ملف WebM | استخراج / تنزيل | FAQ بلا رابط |
| ru | извлечь аудио из webm; webm в mp3; без загрузки | Извлечь аудио из WebM-файла | Извлечь / Скачать | FAQ без URL |

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
| 0b | 2026-10-01 | WebM 容器立项：与 hub 分工的 H1/accept/IG（Opus+ISOBMFF+OPFS）；同意图全表（webm to mp3/wav、中文、批量/hub 导流、YouTube drop）；十语 H1 方向；意图审查满足本地 WebM 抽音 | 02 ready；03 briefs-ready；待 coverage 0b |
| 1b | 2026-10-01 | 母版 en 完整键：H1「Extract audio from an WebM file」；desc/FAQ 落 webm to mp3、OPFS caps、拒 URL；How Demux 步骤与 WebM-only accept 一致 | coverage:gate phase=2 绿 |
| 2b | 2026-10-01 | 十语分片：zh/es/pt/de/fr/ja/ar/ru/id 独立 H1 与隐私句；次词 webm 转 mp3/批量导流写入 FAQ/usecase；抽查 en,zh,es,ja | coverage:gate phase=4 绿 |
| 2b | 2026-10-02 | Rewrite fr/pt/id/ja/ru/ar from EN master: remove Spanish body leakage; WebM-only H1 + 500 MiB fallback honesty; spot-check en,zh,es,ja | coverage:gate phase=4 |
