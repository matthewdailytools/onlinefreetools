Date: 2026-08-07 14:58
Summary: Supplement tool-direction doc with Merge Images competitor image feature analysis

[question]
分析https://mergeimages.co/ 提供的图片功能，对比 @docs/2026-07-28-tool-direction.md 的图片功能，补充进去

[try to solve]
对照 [Merge Images](https://mergeimages.co/) 全站工具链，原文档 A.2 偏单图处理（压缩/格式/裁剪/EXIF/水印），缺 N→1 合成与竞品完整映射。

已在 `docs/2026-07-28-tool-direction.md` 补充：
- **A.2** 能力表：多图拼接、图层叠加、翻转、灰度、边框、多图→PDF
- **A.2.1** Merge Images 逐项对照表（含可做/不做/优先级）
- **B13** 场景「多图合成与平台拼贴（N→1）」及与 B9（1→N）区分
- **B.3 / B.5** 候选 slug：`image-merge`、`images-to-pdf`、`add-watermark` 等
- **附录** 竞品速查表；更新已上线图片四件套与下一批排期

核心结论：Merge Images 强项是 N→1；本站 B.9 强项是 1→N 平台尺寸包——方向相反，宜分页不混 intent。

[actions]
- `docs/2026-07-28-tool-direction.md`
