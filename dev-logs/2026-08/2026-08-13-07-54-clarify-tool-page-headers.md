Date: 2026-08-13 07:54
Summary: Clarify second headers were tool page image-format-converter, not home.

[question]
这个的链接是https://onlinefreetools.org/zh/tools/image-format-converter

[try to solve]
更正：第二组 header 属于工具页，路径为 Cache API → R2 `_pages/zh/tools/image-format-converter.html.gz` → gunzip → `identityHtmlResponse`（非首页 Assets）。`cache-control: public, s-maxage=86400, max-age=0` 与设计一致；无 HIT/age + `cfWorker=333ms` + `cfOrigin=0` 符合 Cache miss 后 R2 绑定读取（R2 通常不计入 cfOrigin）再解压组包。与首页 HIT（Worker~37ms、可能带 max-age=14400）不可直接对比：URL/存储层不同。热路径再请求同 URL 应出现更低 Worker 时长或边缘 HIT。

[actions]
- （只读澄清 URL 与 servePrerenderedHtml 路径）
