# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：对超限峰值施加 ceiling（−0.1 / −1 dBFS）与 brickwall / soft 限幅，导出 16-bit WAV 并保留声道；未超限样本不放大；源文件不变；本机处理、不上传。≠ 动态压缩（S18）、≠ 峰值归一化（S16）、≠ 固定 dB 增益（S15）、≠ LUFS（S17）。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | audio limiter; prevent clipping; brickwall | Limit peaks so a file does not clip | Limit / Download WAV | 场景句 H1；ceiling/soft；≠ normalize FAQ |
| zh | 限制器；防削波；爆音；砖墙 | 限制峰值以免文件削波 | 限制 / 下载 WAV | ≠ 峰值归一化 / 动态压缩 FAQ |
| es | limitador de audio; recorte; brickwall | Limitar picos para que un archivo no recorte | Limitar / Descargar WAV | ≠ normalizar FAQ |
| ja | リミッター；クリッピング防止；ブリックウォール | ピークを制限してファイルがクリップしないようにする | 制限する / WAVを保存 | ≠ ピーク正規化 FAQ |
| de | Audio-Limiter; Clipping verhindern; Brickwall | Peaks begrenzen, damit eine Datei nicht clipt | Begrenzen / WAV herunterladen | ≠ Peak-Normalisierung FAQ |
| fr | limiteur audio; éviter l’écrêtage; brickwall | Limiter les pics pour qu’un fichier n’écrête pas | Limiter / Télécharger le WAV | ≠ normalisation FAQ |
| pt | limitador de áudio; evitar clipping; brickwall | Limitar picos para que um arquivo não clippe | Limitar / Baixar WAV | ≠ normalizar FAQ |
| id | limiter audio; cegah clipping; brickwall | Batasi puncak agar file tidak clipping | Batasi / Unduh WAV | ≠ normalisasi FAQ |
| ar | محدد صوت؛ منع القص؛ جدار صلب | حدّ القمم حتى لا يقص الملف | تحديد / تنزيل WAV | خصوصية FAQ |
| ru | лимитер аудио; предотвратить клиппинг; brickwall | Ограничить пики, чтобы файл не клипповал | Ограничить / Скачать WAV | ≠ нормализация FAQ |

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
| 0b | 2026-09-20 | 将万能 audio limiter 收束为 ceiling −0.1/−1 + brickwall/soft 单点防削波；十语分配 H1 与 limiter/clipping 次词；明确 ≠ 峰值归一化（S16）、≠ 动态压缩（S18）、≠ 固定增益（S15）、≠ LUFS（S17）；related 用已上线 compress-dynamic-range-of-a-voice-recording 与 normalize-an-audio-file-to-peak | 02 卡片与同意图表已回写；边界写入 FAQ 计划；状态 briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n 落地：长 description（Steps+Example ≥120）、article（limiter vs normalize vs compressor vs gain vs LUFS）、How×4 / Why×4 / Rules×4 / FAQ×6；按钮 Limit / Download WAV；占位符 `{seconds}` `{ceiling}` `{mode}` `{limited}` `{output}`；HUD Read/Decode/Limit/Write | en 键齐全；默认 −1 Soft；样例自动 Limit；FAQ 消歧 S16/S18 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；交叉引用 S18「压缩人声录音的动态范围」与 S16「将音频文件峰值归一化」当地标题；占位符完好 | 十语目录齐；状态推进 i18n-done |
| 3 | 2026-09-20 | 抽查 description≥120 与步骤/示例词（Steps/步骤/Pasos/手順 等）；禁空「免费/最好」；占位符 `{seconds}` `{ceiling}` `{mode}` `{limited}` `{output}` 完好 | 通过；03 → i18n-done |
