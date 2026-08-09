# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C）。

## 候选一句话

- 工具做什么：输入多语言同一页面的 URL 与各自 hreflang 语言码，生成 `<link rel="alternate">`、HTTP `Link` 头与 XML sitemap `<xhtml:link>` 三种形态的 hreflang 片段。
- 谁在什么任务里用：多语站点的站长 / 前端在发布多语言页面时，为 Google 标注同页语言/地区变体，避免重复内容。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | 纯本地生成三种输出形态 |
| **B** 场景桥接 | 强 | B3 上线检查 / 国际化发布场景 |
| **C** 行业专属 | 弱 | 技术通用任务 |

**选定主方向**：A + B3 场景  
**次要互链参考**：`sitemap-xml-generator`（sitemap 形态互链）、`schema-jsonld-generator`、`meta-tag-generator`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（三种输出形态、x-default、自引用规则、语言码校验是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（link 标签 / HTTP 头 / sitemap 三种形态同页输出，不拆 URL）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无第三方包；语言码表 + 手写拼接
- Tier（0 / 1 / 2）：Tier 0
- CWV / 懒加载注意：零网络依赖

## 结论

- 继续立项：是
- 建议 slug：`hreflang-generator`（保留；主词 hreflang generator / hreflang tag generator）
- 与已上线工具关系：新建；Related → `sitemap-xml-generator`、`schema-jsonld-generator`、`meta-tag-generator`
- 进入 `02-tool-info.md` 前仍缺的信息：无
