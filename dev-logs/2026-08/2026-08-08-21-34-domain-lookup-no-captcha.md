Date: 2026-08-08 21:34
Summary: Clarified that domain-lookup has no captcha in code; user report about an image verification challenge.

[question]
域名查询提交需要输入验证图片的验证码

[try to solve]
This site’s `domain-lookup` has no captcha/Turnstile/image challenge in code: neither `domainLookupPage.ts` nor `/api/tools/domain-lookup` includes that logic. Submit only validates the domain, then queries DoH and RDAP in parallel.

If an image captcha appears on the page, it is not built into this tool UI; common sources are browser/security extensions, a CDN bot challenge, or a mistaken third-party Whois site.

If the product needs anti-abuse later, prefer Cloudflare Turnstile (not a classic image captcha) as a separate follow-up.

[actions]
- Searched src: no captcha/turnstile/image-verification logic
