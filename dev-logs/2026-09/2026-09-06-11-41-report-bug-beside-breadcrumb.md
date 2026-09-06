Date: 2026-09-06 11:41
Summary: Moved the GitHub “report a bug” link to the end of the tool breadcrumb and removed it from the bottom feedback form.
Visibility: people

[question]
将 report bug to github 放在 面包屑后面，页面下面的report bug剔除

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
The GitHub Issue control had been added as a second button in the bottom “Questions or feedback” mail compose. The request was to put “report bug to GitHub” after the tool breadcrumb instead, and to drop the duplicate from the feedback section. The change applies to every tool page that uses the shared layout breadcrumb.

## Process
1. Located two breadcrumb renderers: `renderAutoToolBreadcrumb` in `src/pages/site/layout.ts` (injected when the page HTML does not already contain `tool-topic-breadcrumb`) and `renderToolPrimaryTopicBreadcrumb` in `src/pages/site/toolContent.ts` (exported for pages that render their own trail). Both had to stay in sync so a future caller would not miss the link.
2. Extracted `buildGithubIssueHref` and `renderReportBugLink` in `layout.ts`. The link is a sibling of `<ol class="breadcrumb">`, not a breadcrumb item, so it does not appear in BreadcrumbList JSON-LD.
3. Removed the GitHub `<a>` from `renderToolFeedbackSection`; that block is mail-only again (submit + mailto).
4. Added `.tool-topic-breadcrumb` flex layout in `public/styles/site.css` so the trail stays on the left and the report link sits on the right of the same row.
5. Updated the ten-locale chrome string `tool_feedback_report_bug` so the standalone control names GitHub (English: “Report a bug to GitHub”; Chinese: 「向 GitHub 报告缺陷」).
6. Bumped `PAGES_CACHE_VERSION` 4.25 → 4.26, ran `merge:tools`, prerendered all 205 tools × 10 locales, gzipped, uploaded the local R2 bucket, and restarted wrangler on port 8788.

## Root cause / analysis
The feedback form is for drafting email. A GitHub Issue is a separate, quick action and is easier to find next to the page identity (Home → topic → tool name) than after FAQ and share blocks. Putting the control inside the `<ol>` would have mixed a call-to-action into the trail, so the markup keeps it outside the ordered list.

## Solution
On a tool page the breadcrumb row now ends with an external link to `https://github.com/matthewdailytools/onlinefreetools/issues/new`, with `title` and `body` prefilled as `[bug] {toolName}` plus the production page URL. The bottom feedback section no longer includes that button. Local prerender of `/zh/tools/convert-html-to-pdf` shows the link after the last breadcrumb item and only mailto actions under 咨询与反馈.

## Notes / boundaries
- Shared chrome: every tool page with a primary-topic breadcrumb gets the link; convert-html-to-pdf is the QA sample, not the only affected slug.
- JSON-LD BreadcrumbList is unchanged (Home / topic / tool only).
- `githubIssuesNewUrl` on `siteConfig` remains `${githubRepoUrl}/issues/new` for the same destination.

[actions]
- `src/pages/site/layout.ts`: `buildGithubIssueHref`, `renderReportBugLink`, breadcrumb markup
- `src/pages/site/toolContent.ts`: removed feedback GitHub button; breadcrumb helper uses shared link
- `public/styles/site.css`: `.tool-topic-breadcrumb` / `.tool-report-bug`
- `src/site/i18n/core/*.ts`: `tool_feedback_report_bug` copy
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.26
- `scripts/site/config.mjs`: comment on issues URL placement
