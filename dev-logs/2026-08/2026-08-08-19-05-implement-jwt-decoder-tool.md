Date: 2026-08-08 19:05
Summary: Implemented JWT decoder tool page, ten-language i18n, and README entries.

[question]
Implement the jwt-decoder tool for /Users/xuli/vscodeai/onlinefreetools (page, i18n, work-tasks updates, README). Do NOT run merge:tools.

[try to solve]
已完成 JWT 解码工具实现，包含：

1. **`src/pages/jwtDecoderPage.ts`** — 遵循 `htmlEntityPage.ts` 模式：Tier 0 原生 `split` + Base64url + `JSON.parse`；UI 含 JWT 输入、Decode/Copy header/Copy payload/Load sample/Clear；Header/Payload JSON 输出、Signature 原文、工具面板内「不验签」alert；exp/iat/nbf UTC+本地时间；>8KB 软警告；段数/Base64url/JSON 错误；进页 `loadSample()` 自动解码；References RFC 7519/7515。

2. **`src/site/i18n/tools/jwt-decoder/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`** — 十语独立重写（按 `03-locale-briefs.md`）；键前缀 `tool_jwt_decoder_`；含 title/desc/description/How/Rules/Example/Use cases/FAQ/UI 标签等。

3. **`work-tasks/jwt-decoder/02-tool-info.md`** — 状态 → `implemented`

4. **`work-tasks/jwt-decoder/03-locale-briefs.md`** — 多轮记录、禁词勾选、状态 → `i18n-done`

5. **`README.md`** — 中英文工具清单各增 JWT 解码条目

未运行 `merge:tools`（由父任务执行）。

[actions]
- src/pages/jwtDecoderPage.ts (new)
- src/site/i18n/tools/jwt-decoder/*.ts (new ×10)
- work-tasks/jwt-decoder/02-tool-info.md, 03-locale-briefs.md
- README.md
