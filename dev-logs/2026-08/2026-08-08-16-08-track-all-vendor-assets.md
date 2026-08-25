Date: 2026-08-08 16:08
Summary: Track all public/vendor assets in git; fix /dist ignore blocking wasm-feature-detect.

[question]
按「全部 vendor 入库」修改

[try to solve]
Removed jsquash/gifenc/wasm-feature-detect from `.gitignore`; ran `vendor:image-optimizer` and committed `f428b16`. Then found the root `dist` ignore was blocking `wasm-feature-detect/dist/` (needed by the image-optimizer import map); changed it to `/dist` and followed up with `5a257a2`. Updated `public/vendor/README.md` to state that all vendor is tracked for Cloudflare Git deploys. Local branch is 3 commits ahead of origin (including prior bootstrap/fonts), not pushed.

[actions]
- .gitignore (remove vendor ignore; dist → /dist)
- public/vendor/{jsquash,gifenc,wasm-feature-detect,README.md}
- commits f428b16, 5a257a2
