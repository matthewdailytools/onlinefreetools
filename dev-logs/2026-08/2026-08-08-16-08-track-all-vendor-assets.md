Date: 2026-08-08 16:08
Summary: Track all public/vendor assets in git; fix /dist ignore blocking wasm-feature-detect.

[question]
按「全部 vendor 入库」修改

[try to solve]
已去掉 `.gitignore` 中 jsquash/gifenc/wasm-feature-detect；跑 `vendor:image-optimizer` 后提交 `f428b16`。随后发现根规则 `dist` 挡住 `wasm-feature-detect/dist/`（image-optimizer import map 需要），改为 `/dist` 并补交 `5a257a2`。更新 `public/vendor/README.md` 说明全部入库以适配 Cloudflare 拉 GitHub。本地超前 origin 3 commits（含先前 bootstrap/fonts），未 push。

[actions]
- .gitignore（移除 vendor ignore；dist → /dist）
- public/vendor/{jsquash,gifenc,wasm-feature-detect,README.md}
- commits f428b16, 5a257a2
