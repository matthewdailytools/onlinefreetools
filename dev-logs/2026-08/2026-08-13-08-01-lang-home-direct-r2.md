Date: 2026-08-13 08:01
Summary: Advise against mapping /{lang} directly to R2; Worker-only R2 is possible but slower on cold path.

[question]
是否可以将https://onlinefreetools.org/{lang} 直接指向 R2

[try to solve]
Do not map the public URL straight onto R2 (custom domain / public bucket). Reasons: R2 keys are internal `_pages/{lang}/index.html.gz`, not `/{lang}/`; objects are gzip and must be gunzipped then served as identity + negotiated compression; `/` still needs Accept-Language, trailing slash, 301, Cache-Control, etc. in the Worker. Technically you could serve home only as Cache→R2 (like tools; fallback already exists), but you lose the current Assets cold-path advantage (tool miss is ~300ms class); after HIT the difference is small. Prefer status quo: `/{lang}/` stays Worker + Assets first, R2 fallback.

[actions]
- Read-only architecture advice
