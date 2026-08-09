# 01 — 方向讨论

**主方向**：**A**（浏览器 JS 能力，纯前端文本生成）+ 场景 **B3** 站长上线检查（抓取与索引模块）。

## 候选一句话

- 工具做什么：按 User-agent 与规则生成 robots.txt，含常用搜索引擎与常见 AI crawler（GPTBot、ClaudeBot 等）的写法说明。
- 谁在什么任务里用：站长在新站上线或改版时生成 robots.txt，并确认每个 bot 规则的含义。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 表单 → 文本拼接，纯本地 |
| **B** 场景桥接 | 弱 | 「上线检查」场景，但核心是生成器 |
| **C** 行业专属 | 否 | 面向所有站点 |

**选定主方向**：A  
**次要互链参考**：`sitemap-xml-generator`、`website-headers`、`indexnow`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（bot 说明表 + 更新日期 + 语法说明是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（allow/disallow/sitemap/AI bots 同页 FAQ）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无需第三方包；文本模板
- Tier：**Tier 0**（零请求）
- CWV：无网络依赖

## 结论

- 继续立项：是
- 建议 slug：`robots-txt-generator`（保留；检索主词 robots.txt generator）
- 与已上线工具关系：新建；Related → `sitemap-xml-generator`、`website-headers`、`indexnow`
- 进入 `02-tool-info.md` 前仍缺的信息：无
