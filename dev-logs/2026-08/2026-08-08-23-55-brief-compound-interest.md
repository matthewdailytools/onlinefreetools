Date: 2026-08-08 23:55
Summary: Briefed how-to-calculate-compound-interest to ready with coverage gate 0b green.

[question]
立项工具：how-to-calculate-compound-interest

[try to solve]
已完成立项文档（未写页面代码）：

- `work-tasks/how-to-calculate-compound-interest/00-request.md` — 用户原问与约束
- `01-direction-discussion.md` — 主方向 C（C-V4 财务 YMYL）；合并单利/频率长尾不拆页
- `02-tool-info.md` — 状态 **ready**；IG≥3；交互规格（复利公式 + 单利模式 + 进页样例 P=10000,r=5%,t=10,n=1）；清单前覆盖表已填
- `03-locale-briefs.md` — 十语 brief；状态 `briefs-ready`；多轮行 **0b** 已写

门禁：`npm run coverage:gate -- --slug=how-to-calculate-compound-interest --phase=0b` → OK。

清单 §9 序号 99 进度改为进行中。下一步需用户明确要求实现后再按 `tool-creation` 写 Page/i18n（母版 → phase=2 → 十语 → phase=4）。

[actions]
- 新增 `work-tasks/how-to-calculate-compound-interest/{00,01,02,03}.md`
- 更新 `docs/2026-08-08-tool-inventory-table.md` §9/#99、§12
- 更新 `omnicalculator-intent-merge-howto.tsv` 进度
- `npm run coverage:gate -- --slug=how-to-calculate-compound-interest --phase=0b`
