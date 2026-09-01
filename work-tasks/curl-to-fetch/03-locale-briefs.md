# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`curl-to-fetch`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] title/H1 非参数枚举目录腔
- [x] 隐私句说清设备 + 不上服务器（十语）
- [x] 十语非同构骨架
- [x] 未依赖 t() 英文回退
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

---

### en

- 检索词（3–5）：curl to fetch；curl to javascript fetch；convert curl to fetch；curl command to fetch
- 语气：偏正式开发者
- Title / H1 方向：**curl to fetch**
- 按钮短词：Convert / Load sample / Copy / Clear
- 可保留英文/符号：curl、fetch、Bearer、JSON
- SERP 竞品 title：Curl to Fetch Converter；Convert cURL to JavaScript fetch
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词：curl 转 fetch；curl 转 fetch 代码；curl 命令转 fetch
- Title / H1：**curl 转 fetch**
- 按钮：转换 / 加载样例 / 复制 / 清空
- 隐私：不上传服务器；留在浏览器
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词：curl a fetch；convertir curl a fetch；comando curl a javascript
- Title / H1：**curl a fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词：تحويل curl إلى fetch；curl إلى fetch جافاسكربت
- Title / H1：**تحويل curl إلى fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词：curl para fetch；converter curl para fetch
- Title / H1：**curl para fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词：curl ke fetch；ubah curl ke fetch
- Title / H1：**curl ke fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词：curl vers fetch；convertir curl en fetch
- Title / H1：**curl vers fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词：curlをfetchに変換；curl fetch 変換
- Title / H1：**curlをfetchに変換**
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词：curl в fetch；конвертер curl в fetch
- Title / H1：**curl в fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词：curl zu fetch；curl in fetch umwandeln
- Title / H1：**curl zu fetch**
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | slug/title/关键词/desc；覆盖表在 02；意图满足 | 主词 curl to fetch → H1；次词落 desc/FAQ/usecase |
| 1 母版+lint | 2026-09-01 | en 完整键 + 页面 B 阶段 | lint 绿 |
| 1b 母版检索覆盖优化 | 2026-09-01 | en title 锁定 curl to fetch；desc 加 javascript fetch | coverage phase 2 绿 |
| 2 按 brief 重写 | 2026-09-01 | 十语独立重写 title/FAQ/How | 各语 H1 为当地说法 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | en,zh,es,ja title/desc 再核；次词 axios 进 FAQ | 四语落点明确 |
| 3 抽查+禁词+lint | 2026-09-01 | en+zh+ar+ja 隐私句与 FAQ 句式 | i18n-done |
