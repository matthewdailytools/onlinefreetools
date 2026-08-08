Date: 2026-08-08 22:52
Summary: Clarified that how-to-calculate can be a selective naming pattern vs Omni, not a mass URL factory.

[question]
是否可以走how to calculate xxx模式来对标

[try to solve]
可以，但应作为「意图层命名策略」，不能当成按 Omni 批量铺 URL 的模板。

结论：可用 `how to calculate xxx` 对标 Omni 的「公式教育」意图；slug/title 按意图选型，一意图一 URL，禁止 how-to + calculator 双 URL，禁止批量套壳。

与 Omni 差异：Omni 多为短 path（`/finance/roi`、`/health/bmi`），靠页内长文吃「how to」流量；本站已有 5/6 计算器用 `how-to-calculate-*`，GSC 也出现 `how to calculate marginal revenue`、`como calcular el roi`、`限界収入 求め方` 等教育向查询——模式已被验证。

推荐规则：
1. 主检索为「how to calculate / 怎么算 / 求め方 / cómo calcular」→ slug 可用 `how-to-calculate-{topic}`；title/H1 写该语自然说法，不必英文套壳。
2. 主检索为「X calculator / 计算器 / calculadora」或工具任务名 → 用短 slug（如清单里的 `compound-interest`、`loan-emi`、`bmr-tdee`）；title 仍可同时覆盖「how to calculate」。
3. 禁止同一主题拆 `how-to-calculate-roi` + `roi-calculator` 两页（doorway / Bing duplicate）。
4. 禁止把 Omni 3867 页改写成 how-to-calculate 矩阵——模式换皮仍是 scaled content。
5. 多语：slug 可统一英文 kebab；可见 title 用当地说法（ja「求め方」、es「cómo calcular / calculadora」、zh「如何计算 / 计算器」）。

落地建议：已上线 5 个 how-to 页保持；P1 财务/健康工具按清单短 slug，靠 title+正文吃双重意图；仅当 coverage 证明「how to」显著强于「calculator」时，新工具才选 how-to-calculate 前缀。

[actions]
- 无代码改动；策略口径澄清（相对 Omni SEO 计划）
