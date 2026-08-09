# 01 — 方向讨论

**主方向**：**A**（浏览器 JS 能力，纯前端生成 JSON）+ 场景 **B3** 站长上线检查（结构化数据模块）。

## 候选一句话

- 工具做什么：选类型（FAQ / Article / Breadcrumb / Organization）→ 填字段 → 一键生成 JSON-LD，粘贴到页面 `<head>`。
- 谁在什么任务里用：站长、内容编辑、开发者给页面加结构化数据，并确保 JSON-LD 与可见正文一致。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 表单 → `JSON.stringify`，无需后端；可选 `schema-dts` 类型提示 |
| **B** 场景桥接 | 弱 | 「写文章 → 贴 schema」可作场景，但核心是生成器 |
| **C** 行业专属 | 否 | 面向所有内容站点 |

**选定主方向**：A  
**次要互链参考**：`json-schema-validator`、`markdown-to-html`、`meta-serp-preview`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（多类型 + 校验 + 与正文一致性提示是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（FAQ/Article/Breadcrumb/Organization 单页类型下拉；**禁拆 4 个 URL**）
- [x] 不以「上富结果」为 KPI：FAQ/HowTo 富结果已退役，页面明示「schema 帮助 Google 理解页面，不等于保证富结果展示」

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无需第三方包；JSON.stringify + JSON 校验
- Tier：**Tier 0**（零请求）
- CWV：无网络依赖；首屏即可交互

## 结论

- 继续立项：是
- 建议 slug：`schema-jsonld-generator`（从 `faq-schema-generator` 演进，多类型单页；检索主词 JSON-LD generator / schema markup generator）
- 与已上线工具关系：新建；Related → `json-schema-validator`、`markdown-to-html`、`meta-serp-preview`
- 进入 `02-tool-info.md` 前仍缺的信息：无
