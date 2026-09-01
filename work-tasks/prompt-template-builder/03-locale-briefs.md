# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`prompt-template-builder`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔
- [x] 隐私句说清设备 + 不上服务器
- [x] 十语非同一句式骨架
- [x] 未依赖 t() 英文回退
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

---

## en

- 检索词（3–5）：prompt template builder；prompt template generator；structured prompt template；prompt structure template
- 语气：口语工具站 / 偏开发者
- Title / H1 方向：**Prompt template builder**（结果向，非 LLM generator 头词）
- 按钮短词：Build template / Load sample / Copy / Download / Clear
- 可保留英文：Role, Task, Prompt, Markdown, JSON
- SERP 竞品 title：Prompt Template Generator — AI…；Structured Prompt Builder
- 轮次2已重写：[x]  轮次3已抽查：[x]

## zh

- 检索词（3–5）：Prompt 模板构建器；Prompt 模板生成；结构化 Prompt 模板；Prompt 模板工具
- Title / H1：**Prompt 模板构建器**
- 按钮：构建模板 / 加载示例 / 复制 / 下载 / 清空
- 隐私：不上传服务器；留在本机
- 轮次2已重写：[x]  轮次3已抽查：[x]

## es

- 检索词：constructor de plantillas de Prompt；plantilla prompt estructurada；generador plantilla prompt
- Title：**constructor de plantillas de Prompt**
- 轮次2已重写：[x]  轮次3已抽查：[x]

## ar

- 检索词：منشئ قوالب Prompt；قالب prompt منظم
- Title：**منشئ قوالب Prompt**
- 待母语抽查：[ ]  轮次2已重写：[x]

## pt

- 检索词：construtor de modelos de Prompt；template prompt estruturado
- Title：**construtor de modelos de Prompt**
- 轮次2已重写：[x]

## id

- 检索词：pembuat templat Prompt；template prompt terstruktur
- Title：**pembuat templat Prompt**
- 轮次2已重写：[x]

## fr

- 检索词：générateur de modèles de Prompt；modèle prompt structuré
- Title：**générateur de modèles de Prompt**
- 轮次2已重写：[x]

## ja

- 检索词：Promptテンプレートビルダー；Prompt テンプレート 作成；構造化 Prompt
- Title：**Promptテンプレートビルダー**
- 待母语抽查：[ ]  轮次2已重写：[x]

## ru

- 检索词：конструктор шаблонов Prompt；шаблон prompt структурированный
- Title：**конструктор шаблонов Prompt**
- 轮次2已重写：[x]

## de

- 检索词：Prompt-Vorlagen-Builder；strukturierte Prompt-Vorlage
- Title：**Prompt-Vorlagen-Builder**
- 轮次2已重写：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | slug 保留 prompt-template-builder；H1 锁定 Prompt template builder；generator 次词 FAQ 划界非 LLM；structured/reusable 落 How+Use cases | 覆盖表已回写 02；意图总判满足；MD/JSON 芯片不拆 URL |
| 1 母版+lint | 2026-09-01 | 写入 en 全键：H1 Prompt template builder；四字段+自由文本；MD/JSON 芯片；FAQ 五条 | 母版 title 非参数枚举；desc 含设备隐私与非 LLM |
| 1b 母版检索覆盖优化 | 2026-09-01 | 再扫 title/desc：主词落 H1；generator/structured 在 FAQ 与 Use cases；vs export 划界 | H1 保持 Prompt template builder；次词均有落点 |
| 2 按 brief 重写 | 2026-09-01 | 按当地搜法重写 zh/es/ar/pt/id/fr/ja/ru/de；各语 H1 用该语检索句 | 十语非同构；隐私均写设备+不上传 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 再扫 en,zh,es,ja 的 title/desc：主词进 H1；generator/JSON 有落点 | en,zh,es,ja 均无参数枚举 H1；次词有落点 |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表全扫；抽查 en/zh/es/ja | 无 LLM 误导 H1；无含糊 local |
