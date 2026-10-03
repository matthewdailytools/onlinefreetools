# 03 — 各语言 Locale Brief 与多轮记录

**工具 slug**：`convert-subtitle-files-between-srt-vtt-and-ass`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做，见 02。
- [x] 同意图相关搜索词已写入 02。
- [x] 用户意图审查已做：实际可读文件、时序与字符编码优先；高级样式损失明确可见。
- [x] 检索覆盖已优化：十语 H1/首段使用当地字幕格式转换搜法，How/Rules/FAQ 保留编码、丢失和批量边界。

| 语种 | 当地检索说法（3–5） | 结果向 H1 方向 | 边界 |
|---|---|---|---|
| en | subtitle file converter; SRT to VTT; VTT to SRT; fix garbled subtitles | Convert subtitle files for a video player or web track | formatting losses shown |
| zh | 字幕格式转换; SRT 转 VTT; VTT 转 SRT; 字幕乱码修复 | 转换字幕文件，供播放器或网页使用 | 显示样式丢失 |
| es | convertir subtítulos; SRT a VTT; VTT a SRT; reparar caracteres | Convierte subtítulos para vídeo o web | pérdida de estilos visible |
| ar | تحويل ملفات الترجمة; SRT إلى VTT; VTT إلى SRT; إصلاح الترميز | حوّل ملفات الترجمة للفيديو والويب | كشف فقدان التنسيق |
| pt | converter legendas; SRT para VTT; VTT para SRT; corrigir codificação | Converta legendas para vídeo ou web | perdas de estilo visíveis |
| id | konversi subtitle; SRT ke VTT; VTT ke SRT; perbaiki karakter | Konversi subtitle untuk video atau web | gaya yang hilang dilaporkan |
| fr | convertir sous-titres; SRT vers VTT; VTT vers SRT; corriger encodage | Convertir des sous-titres pour vidéo ou web | pertes de style annoncées |
| ja | 字幕ファイル変換; SRT から VTT; VTT から SRT; 文字化け修正 | 動画や Web 用に字幕ファイルを変換 | 装飾の欠落を表示 |
| ru | конвертер субтитров; SRT в VTT; VTT в SRT; исправить кодировку | Конвертировать субтитры для видео и сайта | потери оформления показаны |
| de | Untertitel umwandeln; SRT in VTT; VTT in SRT; Kodierung korrigieren | Untertitel für Video oder Web umwandeln | Stilverluste sichtbar |

## 多轮记录

| 阶段 | 日期 | 做了什么 | 结果与回写 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照字幕专项 SERP、能力图双向转换和本仓库空缺；把格式对、乱码修复和批量归为一个上传→字幕文件输出作业，写全搜法与不吸任务 | 采用场景句 H1，首屏默认 SRT→VTT，编码和格式损失以可见控件/报告承接，不拆近义 URL |
| 1b 英语母版复查 | 2026-10-03 | 英语 H1 用 subtitle files + video player/web track 场景，首段自然包含 SRT to VTT、VTT to SRT，How 按文件→目标格式与编码→报告→下载的真实流程写 | 把 ASS/SSA/SBV/LRC、乱码修复和批量放在一条任务的能力说明，明确格式损失和 ZIP 预算，不做无损承诺 |
| 2b 十语复查 | 2026-10-03 | 逐语复查 en、zh、es、ja 的 subtitle file converter / 字幕格式转换 / convertir subtítulos / 字幕ファイル変換，并检查 ar、pt、id、fr、ru、de 的首段、按钮、BOM、30 MiB ZIP 和丢失说明 | 十语分别写结果向 H1、真实转换步骤与示例；占位符一致，RTL 和移动端仍需浏览器验收 |
