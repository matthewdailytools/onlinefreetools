# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

commit and push；然后立项工具页面：bing seo indexnow

## 已知约束（若有）

- 参考现有工具：`website-headers`、`add-www-to-dns`（站长/SEO 技术链）；站内已有运维脚本 `ops/seo/submit-indexnow.mjs`（**本工具是面向站长的网页交互**，不是把 ops CLI 搬上前台）
- 必须本地处理：部分（密钥生成、URL 列表解析、payload 预览、下载 `{key}.txt` 可纯前端；**检查线上 key / 向 IndexNow 端点提交**需 Worker 代理，避免浏览器 CORS）
- YMYL：否（技术站长工具；勿承诺「保证收录/排名」）
- 优先语言：十语（en 母版 → 按 `03-locale-briefs.md` 逐语重写）
- 其他：方向文档 A.12「站长 / SEO 辅助」；协议权威 https://www.indexnow.org/documentation；长尾「key checker / Bing submit / 202 vs 403」合并同页，不拆薄 URL

## 建议 slug（可空，由讨论阶段拟定）

- `indexnow`（路径 `/tools/indexnow`；覆盖 Bing IndexNow、key 校验、批量提交；不拆 `bing-indexnow` / `indexnow-key-checker` 薄页）
