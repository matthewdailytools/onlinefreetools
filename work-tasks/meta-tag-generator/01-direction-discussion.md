# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C）。

## 候选一句话

- 工具做什么：用表单填写 title、description、canonical、robots 与 Open Graph 字段，一键生成可直接粘贴进 `<head>` 的 meta 标签 HTML；同时显示各字段长度与预览。
- 谁在什么任务里用：站长 / 内容运营在发布页面或模板改造时快速产出 head 标签，不用手写 HTML。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | 表单 → 拼接 HTML 纯本地 |
| **B** 场景桥接 | 强 | B3 上线检查；生成后可与 SERP 预览 / OG 预览互链 |
| **C** 行业专属 | 弱 | 通用技术任务 |

**选定主方向**：A + B3 场景  
**次要互链参考**：`meta-serp-preview`（长度预览互链）、`open-graph-preview`、`on-page-seo-checker`、`schema-jsonld-generator`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（长度校验、HTML 转义、OG 输出、SERP 预览联动是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（title/desc/canonical/robots/OG 同页表单，不拆字段 URL）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无第三方包；模板拼接 + escape
- Tier（0 / 1 / 2）：Tier 0
- CWV / 懒加载注意：零网络依赖

## 结论

- 继续立项：是
- 建议 slug：`meta-tag-generator`（保留；主词 meta tag generator / meta tags generator）
- 与已上线工具关系：新建；Related → `meta-serp-preview`、`open-graph-preview`、`on-page-seo-checker`
- 进入 `02-tool-info.md` 前仍缺的信息：无
