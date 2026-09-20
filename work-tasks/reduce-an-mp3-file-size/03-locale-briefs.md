# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：有损再编码，源文件不变；128 kbps 保留声道默认；不保证变小或精确 MB；本机处理、不上传；MP3/KB/kbps 可保留。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | reduce MP3 file size; compress MP3; smaller audio attachment; lower MP3 bitrate | Reduce an MP3 file size | Compress MP3 / Download MP3 | 附件 desc；有损 FAQ；码率 rules |
| zh | 压缩 MP3 文件大小；MP3 体积压缩；音频太大怎么发；降低 MP3 码率 | 压缩 MP3 文件大小 | 压缩 MP3 / 下载 MP3 | 体积与动态消歧；发送录音 usecase |
| es | reducir tamaño de MP3; comprimir MP3; audio para enviar por correo; bajar bitrate | Reducir el tamaño de un MP3 | Comprimir MP3 / Descargar MP3 | 邮件附件 desc；不能无损 FAQ |
| ja | MP3 容量を小さく；MP3 圧縮；音声 添付 容量；ビットレート 下げる | MP3の容量を小さくする | MP3を圧縮 / MP3を保存 | 先解释文件变大 FAQ；容量 rules |
| de | MP3 verkleinern; MP3 komprimieren; Audiodatei als Anhang; MP3 Bitrate senken | MP3-Datei verkleinern | MP3 komprimieren / MP3 herunterladen | 附件 desc；总码率解释 rules |
| fr | réduire taille MP3; compresser MP3; fichier audio trop lourd; MP3 mono | Réduire la taille d’un MP3 | Compresser le MP3 / Télécharger le MP3 | 太大无法发送 desc；mono FAQ |
| pt | diminuir tamanho do MP3; comprimir MP3; áudio pesado para enviar; reduzir taxa de bits | Diminuir o tamanho de um MP3 | Comprimir MP3 / Baixar MP3 | 发送练习录音 usecase；有损 FAQ |
| id | mengecilkan ukuran MP3; kompres MP3; audio terlalu besar; menurunkan bitrate MP3 | Mengecilkan ukuran file MP3 | Kompres MP3 / Unduh MP3 | 附件 desc；结果未减小 FAQ |
| ar | تقليل حجم MP3؛ ضغط MP3؛ ملف صوت كبير؛ خفض معدل البت | تقليل حجم ملف MP3 | ضغط MP3 / تنزيل MP3 | 手机发送 usecase；隐私 FAQ；避免绝对质量承诺 |
| ru | уменьшить размер MP3; сжать MP3; аудио для отправки; снизить битрейт MP3 | Уменьшить размер MP3 | Сжать MP3 / Скачать MP3 | 文件大小 desc；原稿保留 How |

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
| 0b | 2026-09-20 | 将音频压缩泛称收束成 MP3 文件减重；按十语用户搜法分配 H1、附件与有损次词 | 02 明确原文件大小比较、mono 总码率和不保证精确 MB，未按码率拆页 |
| 1b | 2026-09-20 | 母版初稿完成后把 description 压成附件减重步骤；主词 Reduce an MP3 file size 保留 H1 | compress MP3 在 desc/article，lower bitrate 与 mono 在 rules/FAQ，明确精确 MB 不保证及再次有损 |
| 2 | 2026-09-20 | 按 zh/es/ja、de/fr/pt、id/ar/ru 三批独立撰写全部键；FAQ 顺序按当地语意重排 | 日本语先处理压后变大，法语先讲 mono，阿语先讲隐私；没有英文回退 |
| 2b | 2026-09-20 | 抽查 en,zh,es,ja 的 H1、desc、附件与码率次词；中文补“体积”与动态压缩消歧，日语首问改成容量增加原因 | en,zh,es,ja 主词在 H1；邮件附件进 usecase，mono 与精确 MB 边界进 FAQ，隐私明确设备与服务器 |
| 3 | 2026-09-20 | 核对十语输入输出始终 MP3→MP3、按钮与 How、192→128 样例及有损语义；重点审查 ar/ja/ru | 未发现错向 WAV 文案、缺语回填、目录腔标题或“无损/必定减半”承诺；执行检查记录见 notes |

运行样例后的回写：实测 71.0 KiB → 47.8 KiB，因此十语 Example 统一近似为约 71→48 KiB；不再使用预估的 72→49。

SEO 执行回写（2026-09-20）：摘要原稿虽含实际操作，但未命中仓库要求的步骤/示例词。按每语表达补充 three steps / tres pasos / trois étapes / Schritten / passos / langkah / خطوات / шага，中文用“示例”、日语用“例”。十语摘要仍为 120–160 字符；`npm run lint:seo` 已 exit 0。主词、隐私和有损边界未改变。
