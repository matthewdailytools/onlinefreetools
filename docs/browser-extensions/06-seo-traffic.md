# 06 — SEO 流量（站内页 × 插件 × 商店）

权威：`.cursor/rules/seo-google-policy.mdc` 与 Google Search Central。本文件只谈 **插件相关 URL 怎么进索引**，不改计算器长尾策略。

## 1. 角色分工（避免自己和自己抢、避免 doorway）

| 资产 | 意图 | 索引 |
|---|---|---|
| `/tools/{slug}` | 立刻完成任务 | 已有；继续 people-first |
| `/extensions` + 最多 3 个 listing 页 | 安装浏览器扩展 | 扩展 **可安装之后** 再 index |
| Chrome Web Store URL | 商店内安装 | Google 有时会索引 listing；本站仍要自有落地页（可控文案、hreflang、FAQ） |
| YouTube 教程 | 怎么用扩展 | 视频结果；描述链回本站 |
| `dev-logs/` 工程笔记 | 默认可索引的须对人有用 | 不要把内部排期当工具页 |

**禁止**：206 个 `/extensions/{slug}` 复制工具页换 H1。这是 scaled content / doorway。

## 2. 落地页必须有的 Information Gain

相对「只是 CWS 嵌入页」，本站页要多出搜索者用得上的增量：

1. **和网站工具的边界**：何时用扩展（当前登录页）、何时打开 `/tools/batch-convert-web-pages-to-pdf`（URL 列表、没装扩展）。
2. **权限表**：activeTab 做什么、不读历史。
3. **失败边界**：跨域图、chrome:// 页、PDF 查看器内部页。
4. **真实步骤 + 截图**（可见，不是只给爬虫）。
5. **相关工具链接**（已有 related 模型）：E1 页链 merge-pdf、convert-html-to-pdf 等。

H1 用检索句（产品类型是 extension / 插件，不是 “page”）。

en 例：`Save this page as PDF in Chrome`  
zh 例：`用 Chrome 插件把当前网页存成 PDF`  

不要：`PDF tools page` / `选哪张插件页`。

## 3. 结构化数据

- `SoftwareApplication`：name、applicationCategory、operatingSystem（Chrome/Edge）、offers price 0、url 指向本页、downloadUrl 指向 CWS。
- 与可见安装按钮一致；**禁止** `aggregateRating` 除非页上真有同一套评价。
- `FAQPage` 仍可写给人看的问答（富结果已退役，不为 PAA 而堆）。
- 不要为进 AI Overview 做 `llms.txt` 或扩展专用 schema。

## 4. 内链与徽章（把已有展示变成安装）

| 放置点 | 文案方向 | 不要 |
|---|---|---|
| E1 相关 PDF 工具页 How 末或分享模块旁 | 当前标签页已登录？用 Chrome 扩展保存 | 全站页脚统一大横幅 |
| E2 相关图片工具页 | 右键压缩这张图 | 计算器页也挂图片插件 |
| E3 相关 SEO 工具页 | 检查这个标签页 | IndexNow 页强推 E3 |
| 首页 | 扩展枢纽进 developer/pdf 分类说明即可 | 新开一个与 206 卡片重复的插件卡片墙 |

徽章链 CWS + `rel` 正常可跟；UTM 见 `04`。这是 **用户任务连续**，不是买卖链。

## 5. 索引与发现

- 扩展页进 sitemap（`build:site` 生成时加入）；`hreflang` 只为已实质翻译的语种。
- 未上架：落地页 `noindex` 或根本不发布。
- IndexNow：上架当日提交枢纽 + 对应 1 个英文页，不要十语齐推空壳。
- Canonical：工具页永远指工具页；扩展页指扩展页。不要把 `/tools/merge-pdf` canonical 到插件页（意图不同）。

## 6. 与「计算器 SEO」隔离

Omni 对标策略（长尾 how-to、一带多场景）**继续只适用于网站计算器**。  
不要让插件项目带节奏去批量改 66 个计算器 title，也不要在计算器 FAQ 塞「请安装我们的 PDF 插件」。

## 7. 上线检查（扩展页）

对照 `seo-html-defaults` / `lint:seo` 精神：

- [ ] 唯一 H1 = 安装意图，不是工具意图复制
- [ ] description ≥120、含步骤或结果 + 增强点（登录页 / 右键）
- [ ] 可见 FAQ ≥3：上传？权限？和网站工具区别？
- [ ] 权威隐私链到 `/privacy#local`
- [ ] 无假评分、无 keyword 列表模块
- [ ] 安装按钮在首屏，指向真实 CWS 项

## 8. 预期

插件 **不会**替代工具页成为主 SEO 引擎。主流量仍是 206 个可交互页。  
插件 SEO 的成功是：若干个高意图查询（chrome extension + 任务）进入前几页，并把站点 PDF/图片/SEO 页的访客转化成周活安装，从而带动 **商店内** 排名。两条引擎分开优化，用内链和 UTM 接起来。
