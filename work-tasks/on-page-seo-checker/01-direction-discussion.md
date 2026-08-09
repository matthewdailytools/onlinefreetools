# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C）。

## 候选一句话

- 工具做什么：粘贴 URL 或 HTML 源码，对 H1、title、meta description、canonical、OG/Twitter、JSON-LD、mixed content、render-blocking 做单项检查并给出修复建议。
- 谁在什么任务里用：站长 / SEO 在发布或改版前，单页核对自己的标签质量，不用跑全站审计 SaaS。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | 粘贴 HTML 用 DOMParser 本地解析即可完成绝大多数检查；URL 模式走 Worker fetch（复用 website-headers 模式） |
| **B** 场景桥接 | 强 | 属于 B3 站长上线检查场景链；输入 URL/HTML → 报告 |
| **C** 行业专属 | 弱 | 站点检测字典虽来自 SeaOcean 审计项，但属通用技术检查，非单一垂直 |

**选定主方向**：A（本地解析为主）+ B3 场景  
**次要互链参考**：`website-headers`、`meta-serp-preview`、`schema-jsonld-generator`、`meta-tag-generator`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（H1/canonical/mixed content/render-blocking 等检查项是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（URL 拉取走现有 Worker 模式，粘贴 HTML 纯本地）
- [x] 长尾默认「一带多场景」（合并 canonical、OG、mixed content、render-blocking 检查，不拆薄页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无第三方包；DOMParser / 正则解析 HTML 片段；URL 模式复用 Worker fetch（`website-headers` 同款）
- Tier（0 / 1 / 2）：Tier 0（粘贴 HTML）/+Worker（URL 模式）
- CWV / 懒加载注意：首屏纯本地；URL 模式按需请求，无大块资源

### 若选 B

- 场景链（从哪到哪）：meta 生成/预览 → 单页检查 → 响应头核对（`meta-serp-preview` / `meta-tag-generator` / `website-headers` 互链）
- 上游 / 下游工具：上游 `meta-tag-generator`（生成标签后检查）；下游 `website-headers`

## 结论

- 继续立项：是
- 建议 slug：`on-page-seo-checker`（保留；主词 on-page SEO checker / meta tag checker）
- 与已上线工具关系：新建；Related → `website-headers`、`meta-serp-preview`、`schema-jsonld-generator`、`meta-tag-generator`
- 进入 `02-tool-info.md` 前仍缺的信息：URL 模式 Worker 端点是否复用现有 fetch 模式（实现时确认）
