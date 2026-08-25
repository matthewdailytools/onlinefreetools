Date: 2026-08-08 16:06
Summary: Clarified Git-connected Cloudflare deploy: only tracked or build-generated vendor ships.

[question]
目前的部署是云flare自动拉github代码

[try to solve]
When Cloudflare pulls from GitHub, only files present in the repo ship by default. Gitignored vendor appears only if the CF build command runs `npm run build:site` (which includes copy-site-chrome + copy-image-optimizer). Local `predeploy` does not run on Git-connected auto-deploy. Bootstrap/fonts are already tracked, so a push should fix site chrome. jsquash/gifenc/wasm remain ignored — if the CF Build command does not run `build:site`, image tools will miss vendor. Recommendation: set CF build to `npm ci && npm run build:site` (or equivalent), or track those three vendor trees as well.

[actions]
