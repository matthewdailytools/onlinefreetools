Date: 2026-08-08 16:26
Summary: Proposed systematic link/chrome/accent color roles to stop default-red body links.

[question]
颜色修改要系统性修改，给出颜色搭配的常规处理方案

[try to solve]
建议按角色拆 token：正文/次要/链接(默认正文色)/链接悬停(加深或轻红)/强调红仅用于 CTA·选中·焦点·标签；全局 `a` 改为 `--link` 而非 `--accent`。侧栏选中用 soft 底 + 正文/深色字（可选左边线），相关工具与页脚同 chrome 链接；正文内权威引用可用 `--link-accent` 或保持红。保留现有灰底与红强调，不换品牌主色。待确认后改 site.css。

[actions]
