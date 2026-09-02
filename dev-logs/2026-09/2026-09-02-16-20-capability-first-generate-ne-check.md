Date: 2026-09-02 16:20
Summary: Corrected funnel judgment to capability-first: unimplemented checker jobs must be built; generators cannot absorb checkers; head only constrains H1 attack, not whether to implement.
Visibility: people

[question]
现在的判断逻辑有问题：例如robots.txt checker / sitemap checker，判断结论是场景并进生成器页，不新建 URL。一个工具是需要帮助用户提高效率的。生成器无法checker。判断规则是目前工具是否实现。没有实现的都需要实现，区别在于用什么关键词和title，内容以及info gain来承接

[try to solve]
## Context
The Web-Check Bing review had marked `robots.txt checker` and `sitemap checker` as absorb into existing generator pages. That treated SEO clustering as product coverage. The user rejected it: a tool must help finish the job; generate ≠ check; judgment is whether the capability exists; unimplemented jobs must be implemented; keywords/title/content/IG only decide how to position.

## Process
1. Updated the durable rule in `keyword-planner-analysis-rules.md` §0 / §7 (capability-first; absorb only if the page already finishes the same job).
2. Aligned long-tail strategy §3.3 E and H.2, Skill `keyword-to-tool-funnel`, and `.cursor/rules/keyword-to-tool-funnel.mdc`.
3. Rewrote web-check inventory cluster E/F and §4.2 rows; Bing human-review table already listed build-for-implement for checker/SSL/DMARC.
4. Updated pool rows for robots/sitemap/ssl/dmarc/spf/security.txt to `verdict=build` with `implement_owed` and forbid absorb-into-generator notes.
5. Tracker snapshot + decision log; no `work-tasks/` created.

## Root cause / analysis
`absorb` had been applied when a neighboring catalog slug existed in the same file format family (robots/sitemap), ignoring primary controls. Coverage requires interactive capability matching the user job. `competition_tier=head` correctly blocks attacking the bare head as the sole H1; it must not cancel implementation.

## Solution
- Rule: unimplemented → implement; difference = keywords / title / content / IG.
- Example fix: robots/sitemap checkers are build-owed with suggested checker slugs and scene/G H1 strategy; generators stay absorb-only for generate intent.
- Same logic applied to SSL certificate check and DMARC/SPF explainers (TXT dump ≠ policy tool).

## Notes / boundaries
- Opening `work-tasks/` still requires an explicit create request.
- Week offensive KPI can stay empty of long_gap while the implement queue is non-empty.

[actions]
- Updated playbook, long-tail strategy §E/H.2, Skill, funnel rule
- Updated web-check inventory + keyword-daily-pool + tracker
