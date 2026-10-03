# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-reduce-mp3-file-sizes`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] **清单前检索覆盖已做**（见 02）
- [x] **同意图相关搜索词已写入 02**
- [x] **用户意图审查已做**（真实减重与未缩小分开）
- [x] **检索覆盖已优化**（母版和他语后复审）
- [x] 十语独立改写、隐私表述明确“留在设备、不上传服务器”、无无损缩小承诺或英文回退。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | batch MP3 compressor; reduce MP3 files in bulk; compress multiple MP3s; shrink MP3 size | Batch reduce MP3 file sizes | podcast/email; no “lossless” |
| zh | 批量压缩MP3; 批量缩小MP3文件; 多个MP3减小体积; MP3批量压缩工具 | 批量缩小 MP3 文件体积 | 会议录音；不说无损压缩 |
| es | comprimir MP3 por lotes; reducir tamaño de varios MP3; compresor MP3 múltiple; MP3 más pequeños | Reducir el tamaño de varios MP3 por lotes | entrevistas; evitar “sin pérdida” |
| ar | ضغط ملفات MP3 دفعة واحدة; تقليل حجم عدة ملفات MP3; ضاغط MP3 جماعي; تصغير MP3 | تقليل حجم عدة ملفات MP3 دفعة واحدة | تسجيلات؛ لا وعد بتقليل كل ملف |
| pt | comprimir MP3 em lote; reduzir tamanho de vários MP3; compactar arquivos MP3; MP3 menores | Reduzir o tamanho de vários MP3 em lote | podcasts; sem promessa sem perdas |
| id | kompres MP3 massal; perkecil banyak file MP3; ukuran MP3 lebih kecil; kompresor MP3 batch | Perkecil banyak file MP3 sekaligus | rekaman; jangan klaim tanpa kehilangan |
| fr | compresser des MP3 par lot; réduire la taille de plusieurs MP3; fichiers MP3 plus petits; compresseur MP3 | Réduire la taille de plusieurs MP3 par lot | mémos; ne pas promettre sans perte |
| ja | MP3をまとめて圧縮; 複数MP3の容量を減らす; MP3一括圧縮; MP3を小さくする | 複数の MP3 をまとめて小さくする | 録音; 無劣化禁止 |
| ru | пакетно сжать MP3; уменьшить размер нескольких MP3; массовый компрессор MP3; MP3 для отправки | Пакетно уменьшить размер файлов MP3 | подкасты; не обещать без потерь |
| de | MP3-Dateien stapelweise verkleinern; mehrere MP3 komprimieren; MP3 Stapelkompressor; MP3-Dateigröße reduzieren | Mehrere MP3-Dateien stapelweise verkleinern | Sprachaufnahmen; nicht verlustfrei versprechen |

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照批量 MP3 压缩 SERP、单件缩小页和 §11.4 候选；主词放 title/H1、次词规划到首屏/FAQ，并区分精确目标体积与实测结果 | 保留独立 batch slug；0i 审查要求低码率导致变大时显示未缩小，不作虚假成功 |
| 1 母版+lint | 2026-10-03 | 实现英语母版，首屏说明批量缩小 MP3、真实体积对比和低码率可能变大；页面接线 lint 已通过 | 母版内容与交互均落在同一批量任务，没有承诺无损或精确目标 MB |
| 1b 母版检索覆盖优化 | 2026-10-03 | 复核 title/H1 的 batch reduce MP3 file sizes，描述含批量文件、实际大小和内置高低码率示例；对照单件页补齐未缩小边界 | 主词与独立结果前置，避免只列码率参数或以预测体积冒充实测 |
| 2 按 brief 重写 | 2026-10-03 | 按十语当地词表分别写 title、首屏、操作说明、实例和 FAQ；保留逐行实测缩小率、低码率可能变大、再次有损与设备内处理 | 十语均有 81 个同名键和对应占位符，无英语回填；通用按钮沿用同语既有批量音频表达并针对本作业改写 |
| 2b 抽查语检索覆盖优化 | 2026-10-03 | en 的 batch reduce、zh 的批量压缩、es 的 comprimir por lotes、ja 的一括圧縮均在 title 或首段；另复核 ar/fr/de/pt/id/ru 的批量与缩小词在标题/开头；十语都把实测尺寸和增长例放在正文前部，不把精确 MB 或无损当主词 | 各语 title 与 FAQ 句式按当地习惯独立处理；未用统一英模；相关词自然落在 How/FAQ 而非关键词展示区 |
| 3 抽查+禁词+lint | 2026-10-03 | 静态核对十语键和占位符；抽查 en/zh/es/ja 的标题、首段、How、FAQ，并检查其余六语首段均明确文件不上传服务器 | 待完成页面构建、SEO 与运行门禁后以实测结果收口 |
