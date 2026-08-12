Date: 2026-08-12 23:02
Summary: Without R2 upload, home/info pages still work via Assets; all /tools/* 404 because tool HTML is gitignored.

[question]
如果现在push到git，然后cloudflare 拉取deploy后，如果没有R2，是否访问就会出错？

[try to solve]
分两层：
1) 若 R2 桶未创建：deploy 常会因 binding 失败，整站上不了。
2) 若桶在但为空 / 未 upload:r2：Worker 会 R2 miss → ASSETS 回退。首页/about/taxonomy 等仍在 git 的 `public/_pages`（约 270 页）→ 可访问；工具页 `public/_pages/*/tools/` 已 gitignore、不进 Assets → `/tools/*` 会 404。

结论：不能只 push 不灌 R2 就当工具站可用；上线须 `upload:r2`（或改 CI 构建并上传）。

[actions]
- （说明，无代码改动）
