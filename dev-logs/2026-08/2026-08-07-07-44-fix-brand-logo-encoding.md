Date: 2026-08-07 07:44
Summary: Fixed brand-logo.svg XML encoding error caused by a corrupted comment.

[question]
http://localhost:8788/brand-logo.svg This page contains the following errors: error on line 2 at column 3: Encoding error

[try to solve]
SVG 注释里的中文曾被写成非法字节，XML 解析失败。已重写为纯 ASCII 的 `brand-logo.svg`，并同步到 `favicon.svg`。

[actions]
- `public/brand-logo.svg`、`public/favicon.svg`
