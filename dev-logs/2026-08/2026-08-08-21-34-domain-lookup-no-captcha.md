Date: 2026-08-08 21:34
Summary: Clarify domain-lookup has no captcha in code; user report about image verification code.

[question]
域名查询提交需要输入验证图片的验证码

[try to solve]
本站 `domain-lookup` 实现中无 captcha/Turnstile/验证码：`domainLookupPage.ts` 与 `/api/tools/domain-lookup` 均无相关逻辑。提交只做域名校验后并行查 DoH + RDAP。

若页面上出现「验证图片」验证码，不是本工具 UI 内置的；常见来源包括浏览器/安全扩展、CDN 人机挑战，或看错第三方 Whois 站。

若产品上要做防滥用，建议用 Cloudflare Turnstile（非传统图片验证码），需另开需求再接入。

[actions]
- 检索 src 无 captcha/turnstile/验证码
