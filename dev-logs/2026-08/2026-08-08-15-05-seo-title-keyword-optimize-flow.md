Date: 2026-08-08 15:05
Summary: Clarified that post-draft title/desc/keyword coverage optimization is a required Agent checklist, not an automatic SEO analyzer; lint:seo does not cover search-habit fit.

[question]
回答：上述创建过程中，seo的slug， title，关键词，desc处理流程，是否生成后，根据规则，自动分析是否符合用户搜索习惯和关键覆盖进行优化

[try to solve]
规则要求「生成后」做检索覆盖优化，但是 **Agent/人工清单**，不是仓库里的自动分析脚本。

- **slug**：立项/方向文档锁定（如 `json-schema-validator`），不走「生成后再自动改 slug」流水线。
- **title / description / 检索词**：`tool-i18n-localization.mdc` 稳妥常态步 1 写初稿后，**必须**再跑步 2（母版）与步 4（抽查语）的「Title / 描述 / 检索词覆盖优化」清单（主词进 H1、次词进 desc/FAQ、去参数枚举、intent 不撞 related 等），并记入 `03`。
- **不是自动**：没有脚本会抓 SERP/分析搜索习惯后改文案；`lint:seo` 只做长度/FAQ/YMYL 等结构门禁，**不等于**检索覆盖已优化。
- **本次工具**：按 brief 写了检索向文案并勾了轮次，属规则要求的人工/Agent 优化；并非独立自动分析器输出。

[actions]
- （无代码改动）
