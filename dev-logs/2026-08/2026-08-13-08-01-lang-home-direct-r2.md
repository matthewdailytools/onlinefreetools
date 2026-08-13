Date: 2026-08-13 08:01
Summary: Advise against mapping /{lang} directly to R2; Worker-only R2 is possible but slower cold path.

[question]
是否可以将https://onlinefreetools.org/{lang} 直接指向 R2

[try to solve]
不建议把公开 URL 直接挂到 R2（自定义域/公开桶）。原因：R2 key 是内部 `_pages/{lang}/index.html.gz`，与 `/{lang}/` 路径不一致；对象为 gzip，需解压后以明文+协商压缩下发；`/` 的 Accept-Language、trailing slash、301、Cache-Control 等仍要 Worker。技术上可做成「首页也只走 Cache→R2」（像工具页，已有兜底），但会失去当前 Assets 冷路径优势（工具页 miss ~300ms 级）；热路径 HIT 后差异小。推荐维持现状：`/{lang}/` 仍 Worker + Assets 优先、R2 兜底。

[actions]
- （只读架构建议）
