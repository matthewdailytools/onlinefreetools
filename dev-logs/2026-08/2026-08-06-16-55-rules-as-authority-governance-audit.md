Date: 2026-08-06 16:55
Summary: Governance audit: propose .cursor/rules as authority; list conflicts for manual confirm before edits.

[question]
以.cursor/rules为核心，所有策略需要对齐rules，如果有冲突，需要重新分析给出判断，手动确认后再修改，所有策略需要同步写入rules

[try to solve]
提出治理模型：Agent/冲突裁决以 `.cursor/rules` 为准，docs 为展开说明且须对齐 rules；代码实现冲突仍以运行代码为准。列出优先冲突（project-core 文档优先于 rules、策略 §3.1 维7 过时、description 80 vs ≥120、策略未入 rules 的链接/节奏/工具方向等）及建议裁决，**等用户确认后再改文件**。未擅自修改规则或策略正文。

[actions]
- 无代码改动（待确认）
