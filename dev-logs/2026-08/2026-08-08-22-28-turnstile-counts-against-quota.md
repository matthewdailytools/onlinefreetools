Date: 2026-08-08 22:28
Summary: Explained Turnstile free tier unlimited challenges vs Worker/upstream request costs.

[question]
验证占不占请求次数？

[try to solve]
Turnstile Free officially states Unlimited challenges (traffic or verification requests); verification itself is not metered against the Turnstile plan. Each Lookup still hits this site’s Worker once (including one siteverify subrequest); DoH/RDAP run only after verification succeeds. Loading the widget without submitting generally does not hit the business API.

[actions]
- No code changes
