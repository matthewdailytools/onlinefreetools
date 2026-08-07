Date: 2026-08-07 15:43
Summary: 立项图片优化（原「高级编解码」）并按检索习惯定名

[question]
立项：图片高级编解码 （这个名称不太像seo用户搜索名称，需要根据用户搜索习惯确定）

[try to solve]
「高级编解码」是方向 A.2 的工程标签，不是用户检索词。按搜索习惯对外主词定为 Image Optimizer / 图片优化，slug：`image-optimizer`。

与已有页边界：`image-compress`（Canvas 快压）与 `image-format-converter`（换 MIME）互补；本页是 Tier 2 WASM 编码器级优化（MozJPEG/WebP/AVIF 等）+ 前后对照。实现优先 `@jsquash/*`（`@squoosh/lib` 已停更）。已建 `work-tasks/image-optimizer/`（00/01/02，状态 draft），待确认命名与 v1 编码器集合后再改 `ready`。

[actions]
- 新建 `work-tasks/image-optimizer/00-request.md`
- 新建 `work-tasks/image-optimizer/01-direction-discussion.md`
- 新建 `work-tasks/image-optimizer/02-tool-info.md`（draft）
