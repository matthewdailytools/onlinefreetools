Date: 2026-08-28 17:50
Summary: Added title_gap_fallback rule: when head SERPs are tool-covered, use a same-cluster long-tail absent from organic titles as slug/H1.

[question]
增加一个兜底规则：当大词给工具覆盖，大词意图范围内的长尾词如果在长尾搜索结果中的title没有，则采用这个长尾词作为大词的工具slug和title。分析完善这个规则

[try to solve]
Documented as §3.3 G in the long-tail gap strategy: trigger (head tool-dense + same-intent long-tail + interactive + title literal gap ≤1/5), how to measure “title missing” via distinctive tokens, pick-one ranking, absorb rest, compliance (no doorway fleets, full IG, H1≠head), week-capacity (default defer unless true long_gap), and CIDR examples. Linked from Skill, funnel doc, CIDR planner (`cidr-host-range`), and tracker.

[actions]
- `docs/seo/2026-08-20-long-tail-gap-strategy.md` §3.3 G
- Skill / funnel / tracker / cidr planner cross-links
