Date: 2026-08-08 22:21
Summary: Put RDAP above DNS on domain-lookup and added domain format check/auto-normalize.

[question]
注册信息（RDAP）
放在dns上方;增加域名格式核对和自动校准能力。

[try to solve]
结果区改为 Registration (RDAP) 在上、DNS 在下；复制摘要按钮移到 RDAP 卡片。输入支持失焦/提交时格式核对与自动校准（剥 URL/端口/路径/引号、小写、去尾点、IDN→punycode），写回输入框并提示「已校准为 …」。服务端 `normalizeAndValidateHostname` 同步增强；domain-lookup 使用 `requireDot: true`。十语增加 `domain_normalized` / `err_format` 并已 merge。

[actions]
- `src/pages/domainLookupPage.ts`
- `src/endpoints/dnsDoh.ts`
- `src/endpoints/domainLookup.ts`
- `src/site/i18n/tools/domain-lookup/*` + merge 生成物
