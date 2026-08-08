Date: 2026-08-08 19:21
Summary: Optimized SEO titles for 7 tools (jwt-decoder, file-hash, base64, uuid-generator, password-generator, unix-timestamp, timezone-converter) from param-enumeration to result/scenario-oriented across 10 languages; refreshed work-tasks coverage tables and README.

[question]
Optimize SEO titles (and home-facing title keys) for 7 tools in /Users/xuli/vscodeai/onlinefreetools to be result/scenario-oriented (NOT parameter-enumeration catalogs). Also refresh work-tasks coverage tables.

[try to solve]
已完成 7 个工具 × 10 语的 `tool_*_title` 更新，统一为「主检索词 — 结果/场景收益」模式，去掉副标题中的 MD5/SHA、UTF-8/Base64url、Seconds/ms/UTC、Charset Options 等参数枚举腔。en/zh 按给定锚点定稿，其余 8 语独立重写同意图。

**典型变更**
| slug | 旧 H1 腔 | 新 H1 |
|---|---|---|
| file-hash | MD5, SHA-256 & More | Verify Digests in Your Browser |
| base64 | Text, UTF-8 & Base64url | Convert Text in Your Browser |
| password-generator | Charset Options, Local | Create Passwords Locally |
| unix-timestamp | Seconds, ms, UTC & Local | Epoch ↔ Readable Time |
| timezone-converter | Compare Times Across Zones, Local | Compare One Moment Worldwide |

**同步**
- en/zh 部分 description 首句轻改（去参数堆叠，保留 ≥120 字步骤+示例）
- 7× `work-tasks/{slug}/02-tool-info.md`：覆盖表 + SEO 卡片 Title (en) + 2026-08-08 优化摘要
- 7× `03-locale-briefs.md`：en/zh Title 方向 + 步 2/4 覆盖 pass 行
- `README.md` 工具清单中英条目
- `npm run merge:tools` 刷新首页 `_title` 生成物

[actions]
- src/site/i18n/tools/{7 slugs}/{10 langs}.ts — title（+ 部分 en/zh desc/description）
- work-tasks/{7 slugs}/02-tool-info.md, 03-locale-briefs.md
- README.md
- scripts/site/i18n-tools.generated.mjs（merge 产出）
