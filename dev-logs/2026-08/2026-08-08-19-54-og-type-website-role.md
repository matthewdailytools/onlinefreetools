Date: 2026-08-08 19:54
Summary: Explained og:type=website role; confirmed it fits tool/home pages; article stays for editorial/devlogs.

[question]
<meta property="og:type" content="website" /> 的作用，是否合适

[try to solve]
og:type tells social crawlers (Facebook/LinkedIn/etc.) the Open Graph object type; default if omitted is website. Suitable for homepage, tool pages, static utility pages. Use article for blog/news/devlogs (unlocks article:*). Current site pattern (tools/home → website, public/devlogs pieces → article) is appropriate; no change required unless adding a real editorial blog.

[actions]
- None (Q&A only)
