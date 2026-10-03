# 03 — 各语言 Locale Brief 与多轮记录

**工具 slug**：`change-video-speed`  
**母版语言**：en  
**状态**：`i18n-done`（十语文案与完整浏览器下载验收已完成）

## 共用门禁

- [x] 清单前检索覆盖已做（见 02）。
- [x] 同意图相关搜索词已写入 02。
- [x] 用户意图审查已做：实测下载视频和音轨时长，随速变调与短片 WSOLA 近似保调各有边界。
- [x] 检索覆盖已优化：十语 H1/首段以当地视频变速搜法开篇，How/FAQ 解释真实时长、音频同步和三种声音模式。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 边界 |
|---|---|---|---|
| en | change video speed; speed up MP4 with audio; slow down video | Change video speed and export a timed MP4 | pitch follows speed or approximate WSOLA ≤60 s |
| zh | 视频变速; MP4 加速; 视频慢放; 视频声音同步 | 调整视频速度并导出 MP4 | 随速变调或 60 秒内近似保调 |
| es | cambiar velocidad de vídeo; acelerar MP4 con audio; ralentizar vídeo | Cambiar la velocidad de un vídeo y exportar MP4 | tono proporcional o conservación aproximada ≤60 s |
| ar | تغيير سرعة الفيديو; تسريع MP4 مع الصوت; إبطاء فيديو | تغيير سرعة فيديو وتصدير MP4 | تغيّر النغمة أو حفظ تقريبي حتى 60 ثانية |
| pt | mudar velocidade do vídeo; acelerar MP4 com áudio; abrandar vídeo | Alterar a velocidade do vídeo e exportar MP4 | tom proporcional ou preservação aproximada ≤60 s |
| id | ubah kecepatan video; percepat MP4 dengan audio; perlambat video | Ubah kecepatan video dan ekspor MP4 | nada mengikuti laju atau perkiraan tetap ≤60 dtk |
| fr | changer vitesse vidéo; accélérer MP4 avec audio; ralentir une vidéo | Changer la vitesse d’une vidéo et exporter MP4 | hauteur variable ou préservation approximative ≤60 s |
| ja | 動画の速度を変える; MP4 を倍速; 動画をスロー再生 | 動画の速度を変更して MP4 を書き出す | 音程追従または 60 秒以内の近似保調 |
| ru | изменить скорость видео; ускорить MP4 со звуком; замедлить видео | Изменить скорость видео и экспортировать MP4 | тон меняется либо примерно сохраняется до 60 с |
| de | Videogeschwindigkeit ändern; MP4 mit Ton beschleunigen; Video verlangsamen | Videogeschwindigkeit ändern und MP4 exportieren | Tonhöhe folgt Tempo oder näherungsweise konstant ≤60 s |

## 多轮记录

| 阶段 | 日期 | 做了什么 | 结果与回写 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 change video speed、speed up MP4 with audio、slow down video；本地时间戳 POC、约 440 Hz→220/659/880 Hz 随速变调和 0.5/1.5/2× 约 447 Hz WSOLA 保调测试 | 独立作业是下载真实变速成片；保调仅在 60 秒内近似可用，长/大文件走随速变调或静音，不作绝对音质承诺 |
| 1b 英语母版复查 | 2026-10-03 | 英语 H1 聚焦 change video speed；首段写 speed up MP4 with audio 和 slow down video；How 按选文件→倍率/声音模式→导出→核对实测时长，FAQ 写明 WSOLA 60 秒上限 | 与播放器临时倍速、纯音频保调页区分；结果显示预计/实际时长、音轨、体积，不做绝对保调和精确样本同步承诺 |
| 2b 十语复查 | 2026-10-03 | 逐语核对 en、zh、es、ja 的 change video speed / 视频变速 / cambiar velocidad de vídeo / 動画の速度を変える 搜法，再审 ar、pt、id、fr、ru、de 的首段、三种声音模式及保调边界 | 十语 H1/首段独立写作，结果动态占位符全部修复；文章明确 6 秒→约 4 秒、AAC 尾部、60 秒近似保调上限和长片变调路径，阿拉伯 RTL 留给浏览器验收 |
