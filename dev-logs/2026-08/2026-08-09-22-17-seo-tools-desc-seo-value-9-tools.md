Date: 2026-08-09 22:17
Summary: 9 个 SEO 工具 10 语描述前置 SEO 价值句，逐语按当地习惯独立改写，突出工具对搜索排名/点击/收录的作用。

[question]
上面的seo工具对seo的作用需要在描述中体现出来，注意各个语言需要符合用户语言习惯
（延续对 on-page-seo-checker 的处理，用户确认应用到其余 SEO 工具）

[try to solve]
对 S1/S2 批次其余 9 个 SEO 工具，逐语独立重写 `tool_<x>_description`（页面 meta 描述）与 `tool_<x>_home_desc`（首页卡片描述），把「该工具对 SEO 的作用」前置成首句，非直译母版：

- meta-serp-preview：截断标题损失搜索点击（en「Titles that get cut off cost clicks in search」/ zh「标题被截断会白白损失搜索点击」）
- schema-jsonld-generator：结构化数据帮 Google 理解页面、争更丰富搜索展示（zh「结构化数据让 Google 更准确地理解页面内容，有机会获得更丰富、更易被点击的搜索展示」）
- robots-txt-generator：规则写错可致整站失收录（zh「规则写错可能让整个站点从搜索结果中消失」）
- sitemap-xml-generator：帮 Google 更快发现并收录页面（zh「sitemap 能帮 Google 更快发现并收录你的页面」）
- website-headers：HTTP 头决定抓取/缓存/索引，X-Robots-Tag 可阻断收录（zh「一条错误的 X-Robots-Tag 可能直接阻断收录」）
- open-graph-preview：缺图缺标题损失分享点击与转发（zh「缺图或缺标题都会白白损失点击与转发」）
- utm-builder：规范标记才能看清各渠道引流、SEO 投入可归因（zh「你的 SEO 与营销投入在数据里就无从归因」）
- hreflang-generator：避免译文页被判重复内容、正确语言版本被索引（zh「Google 可能把译文页面当成重复内容」）
- meta-tag-generator：title/description 是搜索名片、canonical 配错分散排名（zh「canonical 配错还会让排名分散到重复网址」）

配套更新：9 个 `work-tasks/*/02-tool-info.md` 的 SEO 卡片 Description 行；9 个 `03-locale-briefs.md` 多轮记录各追加「5 描述 SEO 作用增强」行（脚本误用反引号导致 shell 命令替换损坏行，已逐一修复）。

验证：10 个工具（含 on-page-seo-checker）10 语源分片键集合完全一致；`merge:tools` 成功（124 tools / 10 locales）；聚合 home_desc 生效；dev server 上 9 个 zh 页面 meta description 均含 SEO 价值首句；`build:site`、`lint:seo` 通过（0 入链警告、无参数枚举 title）。

[actions]
- 修改 9 个工具 `src/site/i18n/tools/<slug>/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts` 的 tool_<x>_description 与 tool_<x>_home_desc
- 修改 9 个 `work-tasks/<slug>/02-tool-info.md`、`03-locale-briefs.md`
- 运行 `npm run merge:tools`、`npm run build:site`、`npm run lint:seo`
