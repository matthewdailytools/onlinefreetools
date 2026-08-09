# 01 — 方向讨论

**主方向**：**A**（浏览器 JS 能力，纯前端 XML 生成）+ 场景 **B3** 站长上线检查（抓取与索引模块）。

## 候选一句话

- 工具做什么：粘贴 URL 列表（可带 lastmod / changefreq / priority）→ 生成 sitemap.xml，复制到站点根目录。
- 谁在什么任务里用：站长、SEO、内容运营给站点生成或更新 XML sitemap，并交给搜索引擎抓取。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 文本模板 + XML 转义，纯本地 |
| **B** 场景桥接 | 弱 | 「更新 sitemap」场景，但核心是生成器 |
| **C** 行业专属 | 否 | 面向所有站点 |

**选定主方向**：A  
**次要互链参考**：`indexnow`、`robots-txt-generator`、`website-headers`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（lastmod/changefreq/priority 规则 + 转义 + 校验是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（URL 列表 / 带元数据 / 校验 同页 FAQ）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无需第三方包；XML 转义函数 + 文本模板
- Tier：**Tier 0**（零请求）
- CWV：无网络依赖

## 结论

- 继续立项：是
- 建议 slug：`sitemap-xml-generator`（保留；检索主词 sitemap generator / xml sitemap）
- 与已上线工具关系：新建；Related → `indexnow`、`robots-txt-generator`、`website-headers`
- 进入 `02-tool-info.md` 前仍缺的信息：无
