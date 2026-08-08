Date: 2026-08-08 16:05
Summary: Explained why jsquash/wasm-feature-detect/gifenc remain gitignored.

[question]
为什么@.gitignore (165-167) 没有去掉

[try to solve]
有意保留。用户要求只去掉 bootstrap/fonts；此前建议：chrome 体积小且全站必需应入库；jsquash 约 13MB（图片优化 WASM）继续 ignore，由 build:site / vendor:image-optimizer 在部署前生成。gifenc、wasm-feature-detect 同属图片工具链、与 jsquash 一并 ignore。缺它们只影响部分图片工具，不会导致全站样式错位。

[actions]
