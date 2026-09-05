# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`excel-compare-files`  
**母版语言**：en / zh  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题当地说法
- [x] title 非参数枚举；online 不进 H1
- [x] 隐私：留在设备 + 不上服务器
- [x] 十语非同一骨架
- [x] 未英文回退冒充
- [x] 未脚本同构灌语
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

---

## 每语 brief

### en
- 检索词：Excel compare files；compare excel files online；compare two csv；sheet compare
- Title / H1 方向：Excel compare files
- 按钮：Compare / Clear / Load sample；Sheet
- 本地示例：B2 不同的两张小表
- 可保留：xlsx、csv、A1
- SERP：Compare Excel Files Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词：Excel 文件对比；对比两个表格；csv 对比
- Title / H1 方向：对比 Excel 文件
- 按钮：开始对比 / 清空 / 载入样例；工作表
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词：comparar archivos de Excel；comparar hojas
- Title / H1 方向：Comparar archivos de Excel
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词：مقارنة ملفات إكسل
- Title / H1 方向：مقارنة ملفات إكسل
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### pt
- 检索词：comparar arquivos Excel；comparar planilhas
- Title / H1 方向：Comparar arquivos Excel
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词：bandingkan file Excel
- Title / H1 方向：Bandingkan file Excel
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词：comparer des fichiers Excel
- Title / H1 方向：Comparer des fichiers Excel
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词：Excelファイルを比較；表のセル比較
- Title / H1 方向：Excelファイルを比較
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ru
- 检索词：сравнить файлы Excel
- Title / H1 方向：Сравнить файлы Excel
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### de
- 检索词：Excel-Dateien vergleichen
- Title / H1 方向：Excel-Dateien vergleichen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定 Excel compare files；online 进 desc；默认第一张表与空单元格写入规则 | 02 覆盖与 0i 完成；phase=0b |
| 1 母版+lint | 2026-09-01 | en/zh 母版：格子坐标、第一张表、CSV | 待 lint |
| 1b 母版检索覆盖优化 | 2026-09-01 | 母版 H1 锁定 Excel compare files；online 只进 desc | 主词在 H1 |
| 2 按 brief 重写 | 2026-09-01 | 十语独立重写 | 十语分片已写 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja 当地 H1 与空单元格规则 | en,zh,es,ja 四语 title 为任务句 |
| 3 抽查+禁词+lint | 2026-09-01 | coverage:gate phase=4 | 待跑 |
| IG/安全修正复审 | 2026-09-05 | 完整转义工作簿显示文本；十语 FAQ 新增公式缓存值、格式、批注、列宽与工作簿结构不单独比较的边界 | 输出安全且不再暗示完整 Excel 审计能力 |
