# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：整段重采样 + 位深量化导出 WAV；源文件不变；默认 44.1 kHz / 16-bit；本机处理、不上传；Hz/kHz/bit/WAV 可保留。≠ MP3 体积压缩（S10）、≠ 立体声↔单声道主作业（S12）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | convert sample rate; 48khz to 44.1; bit depth converter; 16-bit 24-bit WAV | Convert audio sample rate and bit depth | Convert / Download WAV | 规格交稿 desc；重采样 rules；≠ compress FAQ |
| zh | 音频采样率转换；48k 转 44.1；位深转换；16bit 24bit WAV | 转换音频采样率与位深 | 转换 / 下载 WAV | 交稿规格 usecase；与压缩体积消歧 FAQ |
| es | convertir frecuencia de muestreo; 48 kHz a 44.1; profundidad de bits; WAV 16 bits | Convertir frecuencia de muestreo y profundidad de bits | Convertir / Descargar WAV | podcast entrega desc；cuantización rules |
| ja | サンプリングレート 変換；48kHz を 44.1；ビット深度；16bit WAV | サンプリングレートとビット深度を変換する | 変換 / WAVを保存 | 配信規格 FAQ；再サンプリング How |
| de | Samplerate umrechnen; 48 kHz auf 44,1; Bit-Tiefe; 24-Bit WAV | Audio-Samplerate und Bit-Tiefe umrechnen | Umrechnen / WAV herunterladen | Abgabe usecase；Quantisierung FAQ |
| fr | convertir fréquence d’échantillonnage; 48 kHz vers 44,1; profondeur de bits; WAV 24 bits | Convertir la fréquence d’échantillonnage et la profondeur de bits | Convertir / Télécharger le WAV | livraison podcast desc；≠ compresser taille FAQ |
| pt | converter taxa de amostragem; 48 kHz para 44,1; profundidade de bits; WAV 16 bits | Converter taxa de amostragem e profundidade de bits | Converter / Baixar WAV | entrega de áudio usecase；reamostragem rules |
| id | konversi sample rate; 48 kHz ke 44,1; bit depth; WAV 24-bit | Mengonversi sample rate dan bit depth audio | Konversi / Unduh WAV | spesifikasi unduhan desc；bukan kompres ukuran FAQ |
| ar | تحويل معدل العينة؛ 48 كيلو هرتز إلى 44.1؛ عمق البت؛ WAV 16 بت | تحويل معدل العينة وعمق البت للصوت | تحويل / تنزيل WAV | تسليم الحلقة usecase；خصوصية FAQ |
| ru | изменить частоту дискретизации; 48 кГц в 44,1; разрядность; WAV 24 бит | Изменить частоту дискретизации и разрядность аудио | Преобразовать / Скачать WAV | сдача подкаста desc；не сжатие размера FAQ |

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
| 0b | 2026-09-20 | 将万能「音频转换」收束为采样率+位深单点；十语分配 H1 与 44.1/48、16/24 次词；明确不拆数值 URL | 02 卡片与同意图表已回写；与 S10/S12 边界写入 FAQ 计划 |
| 1b | 2026-09-20 | 母版英文定稿：H1 覆盖 sample rate 与 bit depth；description 用 three steps 满足 SEO；默认 44.1/16 与隐私句写入 | 主词进 title；48k→44.1 与 16/24 进 desc/settings；≠ compress 进 FAQ；description 约 154 字符 |
| 2 | 2026-09-20 | 按 zh/es/ja、de/fr/pt、id/ar/ru 三批独立撰写全部键；按钮与 How 对齐当地语；FAQ 顺序按语意重排 | 十语无英文回填；日语强调配信規格；阿语先讲隐私；法语消歧 compresser taille |
| 2b | 2026-09-20 | 抽查 en,zh,es,ja 的 H1、desc、44.1/48 与位深次词及 S10 消歧；核对 Convert/Download 与 How 一致 | en,zh,es,ja 主词在 H1；交稿/配信 usecase 到位；隐私与 ≠ 体积压缩边界进 FAQ；阶段门禁通过 |
| 3 | 2026-09-20 | 核对十语始终 WAV 导出、16/24-bit 与重采样语义；禁词扫描「无损听感」「必定变小」；抽查 ar/ja/ru | 未发现错向 MP3 体积压缩文案、缺语回填或目录腔标题；执行检查见 notes |
