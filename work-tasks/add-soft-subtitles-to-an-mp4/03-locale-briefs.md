# 03 — Locale briefs and review

**工具 slug**：`add-soft-subtitles-to-an-mp4`  
**母版语言**：en  
**状态**：`i18n-done`

- [x] 清单前检索覆盖已做。
- [x] 同意图相关词已列全并分流。
- [x] 用户意图审查已做。
- [x] 检索覆盖已优化。

| Locale | 当地检索词（3–5） | Title/H1 方向 | 按钮 |
|---|---|---|---|
| en | add soft subtitles to MP4; embed SRT in MP4; mux SRT; selectable captions | Add soft subtitles to an MP4 without re-encoding | Add subtitle track |
| zh | MP4 添加软字幕; SRT 内嵌 MP4; 可切换字幕轨; MP4 封装字幕 | 给 MP4 添加可选软字幕且不重编码 | 添加字幕轨 |
| es | añadir subtítulos opcionales a MP4; incrustar SRT; pista de subtítulos | Añadir subtítulos opcionales a MP4 sin recodificar | Añadir pista |
| ar | إضافة ترجمة اختيارية إلى MP4; تضمين SRT; مسار ترجمة | إضافة مسار ترجمة اختياري إلى MP4 دون إعادة ترميز | إضافة المسار |
| pt | adicionar legendas opcionais ao MP4; incorporar SRT; faixa de legendas | Adicionar legendas opcionais ao MP4 sem recodificar | Adicionar faixa |
| id | tambah subtitle opsional ke MP4; masukkan SRT; trek subtitle | Tambahkan subtitle opsional ke MP4 tanpa encode ulang | Tambah trek |
| fr | ajouter sous-titres optionnels MP4; intégrer SRT; piste de sous-titres | Ajouter des sous-titres optionnels au MP4 sans réencoder | Ajouter la piste |
| ja | MP4にソフト字幕を追加; SRTをMP4に埋め込む; 切替可能な字幕 | MP4 に再エンコードせず切替可能な字幕を追加 | 字幕トラックを追加 |
| ru | добавить мягкие субтитры в MP4; встроить SRT; дорожка субтитров | Добавить отключаемые субтитры в MP4 без перекодирования | Добавить дорожку |
| de | Soft-Untertitel zu MP4 hinzufügen; SRT einbetten; Untertitelspur | Optionale Untertitel ohne Neukodierung in MP4 einfügen | Spur hinzufügen |

禁词：所有播放器保证显示、网页预览能切换字幕、无内存限制、字幕自动识别语音。每语前段解释可选轨、原音视频保留、播放器兼容与 SRT 备用。

## 多轮覆盖记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 MP4 软字幕、SRT 封装、烧录字幕三个意图 | 明确单独 slug、mov_text 轨、播放器兼容和 sidecar |
| 1b 英语母版复查 | 2026-10-03 | 英文首段同时写入 embed SRT、mov_text、保留原音视频和下载 SRT 备用；How 明确选件、封装和兼容播放器验收 | FAQ、规则和示例解释软字幕与烧录差异、浏览器预览限制、时序与 160 MiB 上限 |
| 2b 十语抽查 | 2026-10-03 | 抽查 en、zh、es、ja 首段、H1、How 与交互，并核对其余六语标题和前段搜索词 | 十语前段均说明 MP4 软字幕、原画音保留、SRT 备用和播放器兼容；技术细节保持一致 |
