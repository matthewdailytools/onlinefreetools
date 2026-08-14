Date: 2026-08-14 22:30
Summary: Fixed build-site incremental detection for shared tool renderer changes.

[question]
unzip-file的时间显示逻辑已经被改变，为什么 build site没有重新build。日志命令如下：
uli@Matthew-2023 onlinefreetools % npm run build:site
...
[build-site] incremental tool pages: no updated tool slugs detected
...
[build-site] prerender tool pages skipped (no updated tool slugs)

[try to solve]
Explained that the previous build-site incremental logic only compared each tool shard's `updatedAt` with the local `.cache/tool-build-state.json` `toolGeneratedAt` marker, so shared renderer changes such as `src/pages/site/toolContent.ts` were not detected. Added a shared tool render dependency hash covering the common tool rendering inputs. `build-site --changed-tools` now falls back to a full tool prerender when that hash changes or is missing, then records the hash in `.cache/tool-build-state.json`. Also confirmed the second build returns to normal incremental behavior and skips tool prerendering when neither tool updatedAt nor shared renderer dependencies changed.

[actions]
- Updated `scripts/lib/changed-tools.mjs`
- Updated `scripts/build-site.mjs`
- Ran `node --check scripts/lib/changed-tools.mjs`
- Ran `node --check scripts/build-site.mjs`
- Ran `npm run build:site` twice to verify first full fallback and subsequent incremental skip
