# 03 — 各语言 Locale Brief 与多轮记录

**工具 slug**：`inspect-video-file-tracks`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做，见 02。
- [x] 同意图相关搜索词已写入 02。
- [x] 用户意图审查已做：真实所有轨道、当前设备解码能力和元数据时长边界。
- [x] 检索覆盖已优化：十语 H1/首段使用各地视频/音轨检查搜法；How、Rules、FAQ 区分无音轨与当前设备无法解码。

| 语种 | 当地检索说法（3–5） | H1 方向 | 边界 |
|---|---|---|---|
| en | inspect video tracks; video codec checker; check MP4 audio tracks; video file info | Inspect video and audio tracks in a local file | browser-specific decode |
| zh | 视频音轨查看; 检查 MP4 音轨; 视频编码查询; 视频无声原因 | 查看视频文件中的画面与声音轨道 | 当前浏览器 |
| es | ver pistas de vídeo; comprobar audio MP4; códec de vídeo; vídeo sin sonido | Inspeccionar pistas de vídeo y audio | compatibilidad local |
| ar | فحص مسارات الفيديو; مسارات الصوت MP4; ترميز الفيديو; فيديو بلا صوت | افحص مسارات الفيديو والصوت | المتصفح الحالي |
| pt | ver faixas de vídeo; conferir áudio MP4; codec de vídeo; vídeo sem som | Inspecionar faixas de vídeo e áudio | navegador atual |
| id | cek trek video; trek audio MP4; codec video; video tanpa suara | Periksa trek video dan audio | browser ini |
| fr | inspecter pistes vidéo; pistes audio MP4; codec vidéo; vidéo sans son | Examiner les pistes vidéo et audio | navigateur actuel |
| ja | 動画の音声トラック確認; MP4 音声トラック; 動画コーデック調査; 音が出ない | 動画ファイルの映像・音声トラックを調べる | このブラウザー |
| ru | проверить дорожки видео; аудиодорожки MP4; кодек видео; нет звука | Проверить видео- и аудиодорожки | этот браузер |
| de | Videospuren prüfen; MP4-Tonspuren; Videocodec anzeigen; Video ohne Ton | Video- und Tonspuren prüfen | dieser Browser |

## 多轮记录

| 阶段 | 日期 | 做了什么 | 结果与回写 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 video codec checker、check audio tracks in MP4、无声诊断和 Mediabunny track API，核实页面应列全部轨道而非只列主轨道 | H1 用真实检查任务，诊断报告容器/codec、轨道数与可解码性，短时元数据时长明确为估计，转换/抽音列为相邻作业 |
| 1b 英语母版复查 | 2026-10-03 | 英语 H1 与首段写 inspect video/audio tracks、video codec checker、MP4 audio tracks；How 从选择文件到查看全部轨道和下载 JSON，FAQ 解释无声与解码不支持 | 同时表达容器/codec 区别、多语言音轨和当前设备范围；避免把元数据时长描述成逐包精确测量 |
| 2b 十语复查 | 2026-10-03 | 逐语检查 en、zh、es、ja 的 inspect video tracks / 视频音轨查看 / inspeccionar pistas / 動画の音声トラック確認，再查 ar、pt、id、fr、ru、de 的无声诊断、当前设备和元数据时长说法 | 十语独立写成检查任务而非转换页模板；动态占位符保持一致，移动端和阿拉伯 RTL 留给浏览器实测 |
