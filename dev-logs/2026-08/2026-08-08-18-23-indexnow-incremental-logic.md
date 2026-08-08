Date: 2026-08-08 18:23
Summary: Explained npm run indexnow:incremental flow (remote sitemap − state → POST → update state).

[question]
npm run indexnow:incremental的逻辑

[try to solve]
`indexnow:incremental` = `--incremental --remote-sitemap`。

流程：拉生产 sitemap 全部 <loc> → 读 `.run/indexnow-state.json` → 去掉状态里已有 URL → 对剩余 URL POST IndexNow（默认 api.indexnow.org）→ 仅 200/202 的批次合并回状态。pending=0 则不提交。不看页面内容/lastmod；已推过的 URL 即使内容更新也不会再推（内容变更请用 --since-git / --tool）。可用 --baseline 先灌状态，--reset-state 清空。

[actions]
- （说明性回答，无代码改动）
