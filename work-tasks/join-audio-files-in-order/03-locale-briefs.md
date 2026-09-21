# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：多本地音频按列表顺序首尾相接 → 单 16-bit WAV；**拒绝** overlay 混音与交叉淡化冒充。≠ A1 视频抽音；≠ M1/M2。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | join audio files; merge mp3 | Join audio files in order | Join / Download WAV | FAQ not overlay |
| zh | 合并音频；拼接 mp3 | 按顺序拼接音频文件 | 拼接 / 下载 WAV | FAQ 非叠加；desc≥120 |
| es | unir archivos de audio; fusionar mp3 | Unir archivos de audio en orden | Unir / Descargar | FAQ no mezcla |
| ja | 音声ファイルを結合；mp3 結合 | 音声ファイルを順番に結合する | 結合 / 保存 | FAQ 重ね合わせではない |
| de | Audiodateien verbinden; mp3 zusammenfügen | Audiodateien der Reihe nach verbinden | Verbinden / Herunterladen | FAQ kein Overlay |
| fr | joindre des fichiers audio; fusionner mp3 | Joindre des fichiers audio dans l’ordre | Joindre / Télécharger | FAQ pas de mix |
| pt | juntar ficheiros de áudio; juntar mp3 | Juntar ficheiros de áudio por ordem | Juntar / Baixar | FAQ sem overlay |
| id | gabung file audio; gabung mp3 | Gabungkan file audio berurutan | Gabungkan / Unduh | FAQ bukan overlay |
| ar | دمج ملفات صوت؛ دمج mp3 | دمج ملفات الصوت بالترتيب | دمج / تنزيل | FAQ ليس مزجًا متراكبًا |
| ru | объединить аудио файлы; склеить mp3 | Объединить аудиофайлы по порядку | Объединить / Скачать | FAQ не наложение |

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
| 0b | 2026-09-20 | A1 后启动 A2：收束为按序首尾相接；十语 H1；≠ overlay/crossfade；related 用 extract 与 trim | 02 回写；briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n：长 description（Steps+Example）、article、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Join；WAV；HUD Read/Decode/Join/Write | en 键齐全；空状态不自动样例 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；FAQ 拒叠加；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-20 | 抽查禁词：H1/主按钮无 mix overlay 冒充；占位符 {s}/{seconds}/{channels}/{rate}/{files}/{output} 齐全 | i18n-done |
