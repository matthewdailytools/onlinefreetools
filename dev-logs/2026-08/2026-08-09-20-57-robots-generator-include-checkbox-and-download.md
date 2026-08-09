Date: 2026-08-09 20:57
Summary: 为 robots-txt-generator 补齐交互规格：预设 User-agent 勾选控件、hint 提示与 robots.txt 下载按钮（10 语新增 3 键）。

[question]
http://localhost:8788/zh/tools/robots-txt-generator 逻辑不对，没有对应的选择项，没有下载功能

[try to solve]
根因：02-tool-info.md 交互规格要求「勾选/新增 User-agent」与输出区复制，但实现仅渲染全部预设 agent（无勾选控件），输出区只有复制按钮。补齐规格：

1. 勾选控件：每个 agent 块新增「包含此 User-agent」勾选框（agent-include）。进页渲染全部 7 个预设（Googlebot/Bingbot/GPTBot/ClaudeBot/Google-Extended/CCBot/PerplexityBot），仅 Googlebot（Allow /）与 GPTBot（Disallow /）默认勾选，保证进页输出与 H2 Example 一致；其余预设可见可勾选。Generate 仅输出勾选分组。
2. hint 提示：agent 标签下新增「勾选要包含的爬虫…」提示。
3. 下载按钮：输出区新增「下载」按钮，Blob 生成 robots.txt（text/plain）下载。

i18n 新增 3 键（10 语独立翻译）：tool_robots_include / tool_robots_agents_hint / tool_robots_download（zh 对应「包含此 User-agent」「勾选要包含的爬虫，再为每个分组添加路径。」「下载」）。

验证：模板转义扫描 0 隐患；工具脚本语法 OK；DOM mock 验证进页 7 块、仅 Googlebot/GPTBot 勾选、Generate 只输出勾选分组、全勾选后输出 7 组、Download 触发 robots.txt；10 语键集合一致（48 keys）；119 工具页脚本语法全过；build:site / lint:seo 全绿。

[actions]
- 修改 src/pages/robotsTxtGeneratorPage.ts（勾选框 + hint + 下载按钮 + JS 过滤）
- 修改 src/site/i18n/tools/robots-txt-generator/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts（新增 3 键）
- 修改 work-tasks/robots-txt-generator/03-locale-briefs.md（追加交互增强轮次）
- 命令：npm run merge:tools、npm run build:site、npm run lint:seo
