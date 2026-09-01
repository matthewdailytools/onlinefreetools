Date: 2026-09-01 10:55
Summary: Wrote nine independent apple-touch-icon locale shards with a shared H1 of apple-touch-icon 180×180, device-local privacy, and optional 32/192/512 in description or FAQ.

[question]
Write 9 locale i18n shards for apple-touch-icon. Titles from 03-locale-briefs: for ALL locales title is apple-touch-icon 180×180 except en. Independent rewrite. description ≥120 chars + lint keyword. Privacy: stay on device + not uploaded. Do NOT use Favicon generator in title. Mention 180×180, optional 32/192/512 in desc or FAQ. Same keys as en.ts.

[try to solve]
Created search-intent rewrites for zh, es, ar, pt, id, fr, ja, ru, and de. Each file uses `SiteLangDict`, the same keys as `en.ts`, and H1 `apple-touch-icon 180×180`. FAQ/How/Use-case openings differ by locale so they are not a locked English skeleton. Descriptions include a lint example/steps keyword, 180×180 as the default job, optional ZIP sizes 32/192/512, and a two-part privacy line (on device + not uploaded to a server). `en.ts` was not edited.

[actions]
- Added `src/site/i18n/tools/apple-touch-icon/{zh,es,ar,pt,id,fr,ja,ru,de}.ts`
