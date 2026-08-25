Date: 2026-08-13 08:05
Summary: Pure R2 with no Worker works only for fully static HTML; site APIs and language negotiation block it.

[question]
如果坚持所有页面来自R2，不经过worker，是否能够实现

[try to solve]
Pure static HTML could work in theory: drop the Pages Worker, attach an R2 custom domain to the hostname, align object keys to public URLs, store plaintext HTML (or set Content-Encoding:gzip correctly), and rely on CF edge cache. This site cannot do “all pages and zero Worker” without cutting features: `/` Accept-Language, many 301s, verification files, and all `/api/*` (headers/SEO/DNS/IndexNow, etc.) need the Worker. Practical compromises: static pages on a public R2 domain plus APIs on another Worker subdomain; or keep Worker+R2 binding (requests still hit the Worker; hot HIT has almost no origin cost). Strict “every page, never through Worker” is not fully achievable here; only a static subset can.

[actions]
- Read-only architecture conclusion
