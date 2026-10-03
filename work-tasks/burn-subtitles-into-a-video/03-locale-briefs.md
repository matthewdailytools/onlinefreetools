# 03 — Locale briefs and review

**工具 slug**：`burn-subtitles-into-a-video`  
**母版语言**：en  
**状态**：`i18n-done`

- [x] 清单前检索覆盖已做：主词硬字幕烧录；同义 bake/hardcode/permanent 合并；不承诺自动生成字幕。
- [x] 用户意图审查已做：视频与已有字幕→画面像素→真实 MP4，样式从属主任务。
- [x] 检索覆盖已优化：十语标题、首段、How 与 FAQ 分别落地硬字幕/固定字幕的当地说法；复核 en,zh,es,ja 后修正葡语“embutir”动词。

| Locale | 当地检索词（3–5） | Title/H1 方向 | 按钮用词 |
|---|---|---|---|
| en | burn SRT subtitles into video; hardcode captions; permanent subtitles | Burn SRT subtitles into a local video | Burn subtitles / Download MP4 |
| zh | 视频烧录字幕；SRT 字幕压制；硬字幕 MP4 | 把 SRT 字幕烧录到本地视频 | 烧录字幕 / 下载 MP4 |
| es | incrustar subtítulos SRT en vídeo; subtítulos permanentes; MP4 | Incrustar subtítulos SRT en un vídeo local | Incrustar / Descargar MP4 |
| ar | حرق ترجمة SRT على فيديو; ترجمة ثابتة; فيديو MP4 | حرق ترجمة SRT على فيديو محلي | حرق الترجمة / تنزيل MP4 |
| pt | embutir legendas SRT no vídeo; legendas fixas; MP4 | Gravar legendas SRT em um vídeo local | Gravar legendas / Baixar MP4 |
| id | bakar subtitle SRT ke video; subtitle permanen; MP4 | Bakar subtitle SRT ke video lokal | Bakar subtitle / Unduh MP4 |
| fr | incruster sous-titres SRT vidéo; sous-titres permanents; MP4 | Incruster des sous-titres SRT dans une vidéo locale | Incruster / Télécharger MP4 |
| ja | 動画に SRT 字幕を焼き付け; ハード字幕; MP4 | SRT 字幕をローカル動画に焼き付ける | 字幕を焼き付け / MP4 を保存 |
| ru | вшить субтитры SRT в видео; постоянные субтитры; MP4 | Вшить субтитры SRT в локальное видео | Вшить субтитры / Скачать MP4 |
| de | SRT Untertitel in Video einbrennen; feste Untertitel; MP4 | SRT Untertitel in ein lokales Video einbrennen | Einbrennen / MP4 laden |

禁词：无损、任何格式、所有设备、自动转写、字幕翻译、云端无需说明。每语首段须说明已准备 SRT/VTT、实际像素烧录、重编码和本地处理。

## 多轮覆盖记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 核对 hardcode、burn、permanent subtitles 搜法与已有字幕转换页面的作业差异；首屏改为视频和字幕双输入 | H1 用 SRT 烧录真实结果，description 和 FAQ 吸纳 VTT 与永久字幕搜法，排除自动转写和软字幕 |
| 1b 英语母版复查 | 2026-10-03 | 英文 H1 落在 Burn SRT subtitles，首段解释 hardcode、VTT 和本地隐私；How 与 Burn subtitles 按钮一致 | FAQ 说明永久可见、需要重编码、不是语音转写；Rules 明确播放器字幕轨与画面像素的区别 |
| 2b 十语复查 | 2026-10-03 | 逐语重写 en,zh,es,ja 的 H1、首段、How 与 FAQ，并复核 ar,pt,id,fr,ru,de 对应本地硬字幕用语、重编码边界和本地处理声明 | 69 个键在十语完整落地；葡语改用 embutir 贯穿标题、按钮和 How；各语说明 SRT/VTT 输入与字幕永久可见 |
