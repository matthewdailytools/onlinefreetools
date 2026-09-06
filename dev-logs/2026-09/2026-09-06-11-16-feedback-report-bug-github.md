Date: 2026-09-06 11:16
Summary: Tool-page “Questions or feedback” now includes a Report a bug button that opens GitHub’s new-issue form with the tool name and page URL prefilled.
Visibility: people

[question]
咨询与反馈 中增加一个：report bug，链接到github issue提交页面

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Every tool page already had a mail-compose “Questions or feedback” block (`#feedback`). The request was to add a Report bug control that opens GitHub’s issue creation page, so defects can be filed in the public tracker instead of only via email.

## Process
1. Located the shared renderer `renderToolFeedbackSection` in `src/pages/site/toolContent.ts` (not the `/contact` page).
2. Added `GITHUB_ISSUES_NEW_URL` pointing at `https://github.com/matthewdailytools/onlinefreetools/issues/new`, matching the footer repo URL.
3. Inserted an outline button next to the existing email CTA; `title`/`body` query params prefill `[bug] {tool name}` and the tool URL (same facts the mailto body already includes).
4. Added `tool_feedback_report_bug` in all ten `src/site/i18n/core/{lang}.ts` shards (zh: 报告缺陷; en: Report a bug; other locales localized).
5. Recorded `githubIssuesNewUrl` on `siteConfig` as `${githubRepoUrl}/issues/new`.
6. Bumped `PAGES_CACHE_VERSION` to 4.22 so prerendered HTML is not served from the previous cache.

## Root cause / analysis
The feedback module was email-only. A GitHub Issue link is a first-party, trackable path for bugs and does not replace mailto.

## Solution
Shared chrome button, new window (`target="_blank"` + `noopener noreferrer`), prefilled new-issue URL. Copy lives in core i18n so every tool page picks it up after `merge:tools` + `build:site`.

## Notes / boundaries
- No issue template exists in `.github/ISSUE_TEMPLATE`; the link uses GitHub’s default blank form plus query prefill.
- `/contact` was not changed.

[actions]
- `src/pages/site/toolContent.ts`: Report bug link in feedback actions
- `src/site/i18n/core/{lang}.ts`: `tool_feedback_report_bug`
- `scripts/site/config.mjs`: `githubIssuesNewUrl`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.22
