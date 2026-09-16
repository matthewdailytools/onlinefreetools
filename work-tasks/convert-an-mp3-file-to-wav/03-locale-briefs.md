# 03 — Locale briefs

**状态**：`i18n-done`
**母版语言**：en

- [x] 清单前检索覆盖已做
- [x] 用户意图审查已做
- [x] 同意图相关搜索词已写入 02
- [x] 检索覆盖已优化

本地词为独立编辑判断，并非各语实时搜索量数据。实际 SERP 观察 en/zh：W3Schools “WAV to MP3 Converter”、Notevibes “WAV to MP3 Converter Online”。其它语不虚构竞品摘录。技术符号 WAV、MP3、kbps 保留；禁目录腔、无损承诺、含糊 local。

### en
- 检索词：wav to mp3; convert wav file; wav converter online; wav to mp3 320 kbps
- Title / H1：Convert an MP3 file to WAV
- 按钮：Convert to MP3 / Download MP3
- 语气：自然工具站。分享录音，FAQ 先解释有损
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### zh
- 检索词：WAV转MP3; wav格式转换; 音频转mp3不上传; wav压缩
- Title / H1：把 WAV 文件转成 MP3
- 按钮：转成 MP3 / 下载 MP3
- 语气：自然工具站。录音文件太大，先答体积与音质
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### es
- 检索词：pasar WAV a MP3; convertir archivo WAV; reducir peso WAV; WAV a MP3 sin subir
- Title / H1：Pasar un archivo WAV a MP3
- 按钮：Convertir a MP3 / Descargar MP3
- 语气：自然工具站。发录音场景；FAQ 先说明上传隐私
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### ar
- 检索词：تحويل WAV إلى MP3; تصغير ملف WAV; محول صوت بدون رفع; تحويل تسجيل إلى MP3
- Title / H1：تحويل ملف WAV إلى MP3
- 按钮：تحويل إلى MP3 / تنزيل MP3
- 语气：自然工具站。清楚说设备与服务器，先答手机使用
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### pt
- 检索词：converter WAV para MP3; diminuir arquivo WAV; WAV para MP3 online; converter áudio sem enviar
- Title / H1：Converter um arquivo WAV para MP3
- 按钮：Converter para MP3 / Baixar MP3
- 语气：自然工具站。巴葡 baixar，不用欧洲葡语 descarregar
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### id
- 检索词：ubah WAV ke MP3; konversi WAV; kecilkan ukuran WAV; WAV ke MP3 tanpa unggah
- Title / H1：Ubah file WAV menjadi MP3
- 按钮：Ubah ke MP3 / Unduh MP3
- 语气：自然工具站。传录音场景、ukuran 文件大小
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### fr
- 检索词：convertir WAV en MP3; réduire taille WAV; conversion WAV sans envoi; WAV MP3 320 kbps
- Title / H1：Convertir un fichier WAV en MP3
- 按钮：Convertir en MP3 / Télécharger le MP3
- 语气：自然工具站。poids/taille 文件大小；先答采样率
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### ja
- 检索词：WAVをMP3に変換; WAV MP3 ブラウザ; 音声ファイル 容量を小さく; WAV 変換 アップロード不要
- Title / H1：WAVファイルをMP3に変換
- 按钮：MP3に変換 / MP3を保存
- 语气：自然工具站。先答音質，避免ユースケース标题
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### ru
- 检索词：WAV в MP3; конвертировать WAV; уменьшить размер записи; WAV в MP3 без загрузки
- Title / H1：Конвертировать файл WAV в MP3
- 按钮：Конвертировать / Скачать MP3
- 语气：自然工具站。сжать запись 有损说明，先答支持格式
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

### de
- 检索词：WAV in MP3 umwandeln; WAV Datei verkleinern; WAV MP3 ohne Upload; WAV zu MP3 320 kbit
- Title / H1：Eine WAV-Datei in MP3 umwandeln
- 按钮：In MP3 umwandeln / MP3 herunterladen
- 语气：自然工具站。明确 Datei bleibt auf Gerät，先答码率
- 落点：主转换词→title；体积→description/usecase；隐私→FAQ；码率→Rules。

## 多轮记录
| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-16 | 对照 P1 与现有 S1/S6 边界，优化整段 WAV 转换主标题与录音分享摘要 | 十语主词独立确定，次词分配到 FAQ、Rules 和 usecase，不承诺无损或离线首次打开 |
| 1 | 2026-09-16 | 英文母版包含真实设置、损失和头校验边界、样例与文件大小公式 | 首屏按钮与 How 对齐，无上传和无损歧义 |
| 1b | 2026-09-16 | 母版生成后重新检查主词落点，description 收紧为录音分享流程，FAQ 增加低采样率 WAV 可能变大和首次联网区别 | Convert an MP3 file to WAV 进入 H1，without uploading 进入 desc/FAQ，320 kbps 进入 Rules/usecase |
| 2 | 2026-09-16 | 按 zh/es/ja、fr/pt/de、id/ru/ar 三批独立写入；重排 FAQ 顺序，分别从容量、隐私、采样率、手机或格式切入 | 十语全部键齐全，设备与服务器隐私句完整，未用英文回退 |
| 2b | 2026-09-16 | en,zh,es,ja 生成后复核；中文摘要补录音分享及实际大小，日本語 FAQ 明确無劣化不可，西语明确 pasar 和 pesa más 场景，英语限制无损声明 | en,zh,es,ja 主词均在 H1；320 kbps、容量、无上传分别进入 Rules、desc、FAQ，首页摘要与主任务一致 |
| 3 | 2026-09-16 | 抽查 en,zh,es,ja 加 ar/ru；检查按钮与 How、示例数值、完整隐私和失败文案，清理目录腔及词表展示 | 文案不宣称无损或必然缩小；无待母语抽查标记，机械门禁另记录实际结果 |

- [x] 禁词与目录腔核查；无相关词列表、无工程 SEO 元叙述。
- [x] 每语的主转换词在 H1；大小、隐私、码率自然进入正文。
- [x] 轮次 1/2/3 已完成；ar/ja/ru 关键句按本语习惯复核，不冒称真人母语审核。

第三轮追加：九语摘要补充实际步骤提示以通过 lint；阿拉伯语工具内容加 RTL 方向。浏览器音频验证覆盖 PCM8/16/24/32、float32、单/双声道和重采样；完整验收见开发日志。


