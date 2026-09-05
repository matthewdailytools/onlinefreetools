# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`compare-two-word-documents-for-differences`  
**母版语言**：en / zh  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title 非参数枚举
- [x] 隐私：留在设备 + 不上服务器
- [x] 十语非同一骨架
- [x] 未依赖英文回退冒充缺语
- [x] 未脚本同构灌语
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

---

## 每语 brief

### en
- 检索词：compare two Word documents for differences；word compare online；docx diff；track changes vs this page
- Title / H1 方向：Compare two Word documents for differences
- 按钮：Compare / Clear / Load sample
- 本地示例：two short docx, one sentence differs
- 可保留：.docx、mammoth 不进 H1
- 额外禁用：冒充 Microsoft 审阅-比较
- SERP：Online DOCX Diff；Compare Word Documents
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词：对比两份 Word 文档差异；Word 在线对比；docx 文字差异
- Title / H1 方向：对比两份 Word 文档的差异
- 按钮：开始对比 / 清空 / 载入样例
- 额外禁用：写成「微软审阅窗格」功能承诺
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词：comparar dos documentos Word para ver diferencias；comparar docx
- Title / H1 方向：Comparar dos documentos Word para ver diferencias
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词：مقارنة مستندي وورد لمعرفة الاختلافات
- Title / H1 方向：مقارنة مستندي وورد لمعرفة الاختلافات
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### pt
- 检索词：comparar dois documentos Word para diferenças
- Title / H1 方向：Comparar dois documentos Word para ver diferenças
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词：bandingkan dua dokumen Word untuk melihat perbedaan
- Title / H1 方向：Bandingkan dua dokumen Word untuk melihat perbedaan
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词：comparer deux documents Word pour voir les différences
- Title / H1 方向：Comparer deux documents Word pour voir les différences
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词：Word文書の差分を比較；docx 比較
- Title / H1 方向：2つのWord文書の差分を比較
- 额外禁用：ユースケース
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ru
- 检索词：сравнить два документа Word чтобы найти различия
- Title / H1 方向：Сравнить два документа Word и найти различия
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### de
- 检索词：zwei Word-Dokumente auf Unterschiede vergleichen
- Title / H1 方向：Zwei Word-Dokumente auf Unterschiede vergleichen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定 Compare two Word documents for differences；FAQ 划清审阅-比较与 PDF；意图满足抽文本 | 02 覆盖表与 0i 已写；phase=0b |
| 1 母版+lint | 2026-09-01 | en/zh 母版：抽文本 H1、审阅划界 FAQ、how_item | 待 lint |
| 1b 母版检索覆盖优化 | 2026-09-01 | 母版 H1 锁定 Compare two Word documents for differences；desc 含 process/example | 主词在 H1 |
| 2 按 brief 重写 | 2026-09-01 | 十语独立重写 title/desc/FAQ | 十语分片已写 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja 当地任务句与审阅划界 | en,zh,es,ja 四语 title 为任务句 |
| 3 抽查+禁词+lint | 2026-09-01 | coverage:gate phase=4 与 verify | 待跑 |
| IG/输入修正复审 | 2026-09-05 | 将宽松的文件名包含判断收紧为完整 `.docx` 后缀校验，继续保留旧 `.doc`、加密、损坏与无可抽取文本边界 | 伪装后缀不再进入 DOCX 解析路径 |
