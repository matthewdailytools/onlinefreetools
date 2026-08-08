Date: 2026-08-09 00:31
Summary: Shipped §12 #8 how-to-calculate-emi (brief → ten locales → build).

[question]
Omni §12 #8–62 串行立项+实现（本轮执行 #8 EMI）

[try to solve]
已完成 `how-to-calculate-emi`：立项 00–03 + coverage 0b/2/4/all；等额本息公式、房价/首付与双周频率同页、摊还表、YMYL 免责与 Investopedia/CFPB 引用；十语 i18n；catalog 60；`build:site`（sitemap 650）；清单 §9 #100 / §12 #8 / TSV / README 已标已上线。下一序号为 #9 `how-to-calculate-bmr-tdee`（未在本轮开工）。

[actions]
- 新增 `work-tasks/how-to-calculate-emi/`、`src/pages/howToCalculateEmiPage.ts`、i18n 十语分片、catalog shard、icon
- `npm run merge:tools` / `coverage:gate` / `build:site` / `lint:seo` / `CROSS_TOOL_UPDATE=1 lint:tool-isolation`
- 回写 inventory、Omni TSV、README；复利 related 增加 emi
