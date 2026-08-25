Date: 2026-08-08 16:26
Summary: Proposed systematic link/chrome/accent color roles to stop default-red body links.

[question]
颜色修改要系统性修改，给出颜色搭配的常规处理方案

[try to solve]
Recommend splitting tokens by role: body/muted/link (default body color)/link-hover (darken or light red)/accent red only for CTA·active·focus·tags; change global `a` to `--link` instead of `--accent`. Sidebar active: soft background + body/dark text (optional left border); Related tools and footer use the same chrome link treatment; in-body authority citations may use `--link-accent` or stay red. Keep the existing gray surfaces and red accent; do not change brand primary yet. Await confirmation before editing site.css.

[actions]
