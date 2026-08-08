Date: 2026-08-08 16:02
Summary: Explained gitignore vendor chrome lines vs large WASM; recommend tracking bootstrap/fonts only.

[question]
@.gitignore (163-168)

[try to solve]
这几行把同域 vendor 排除出 git：jsquash / wasm-feature-detect / gifenc / bootstrap / fonts，需由 build:site 或 copy-*-vendor 生成。bootstrap+fonts 合计约 512KB，缺了会导致全站样式错位；jsquash 约 13MB 适合继续 ignore。建议：从 .gitignore 去掉 public/vendor/bootstrap/ 与 public/vendor/fonts/ 并纳入版本库；其余大体积 WASM vendor 仍 ignore，部署靠 predeploy/build:site 复制。

[actions]
- Compared vendor sizes; explained gitignore policy for chrome vs image WASM
