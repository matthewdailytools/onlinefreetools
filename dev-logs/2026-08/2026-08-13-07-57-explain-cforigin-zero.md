Date: 2026-08-13 07:57
Summary: Explain cfOrigin dur=0: no HTTP origin fetch; R2/Assets bindings are not counted.

[question]
origin 仍为 0的含义

[try to solve]
`server-timing: … cfOrigin;dur=0` means this request did not issue an HTTP Origin fetch in Cloudflare’s timing (or that duration is recorded as 0). On this site, tool cold path is Worker R2 binding `get` + gunzip; home may use the ASSETS binding. Those are Worker bindings and generally do not count toward cfOrigin. So origin=0 on HIT is normal; on miss it can still be 0 if only R2/Assets ran, not a traditional origin URL. cfOrigin>0 more often means Worker/`fetch` hit an external or origin host. Do not read origin=0 as “no storage read”—time spent on R2/Cache/Assets lands in `cfWorker`.

[actions]
- Read-only explanation
