# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-to-base64`  
**路径**：`/tools/image-to-base64`  
**主方向**：A  
**catalog**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #10）

## 改写原因（2026-10-14）

审计：179 词；FAQ 过短（「No.」）；选文件即编码无主按钮；无 Advanced/HUD；Why/Use cases 薄。

## IG 预审

- 用户任务：图片 ↔ Base64 / data URL，本地
- [x] 缺口：Encode 主按钮；Advanced（strip + 默认 MIME）；HUD；实质 FAQ
- [x] Related：`image-format-converter`、`image-compress`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Image to Base64 Converter — Encode & Decode Locally |
| Description (en) | Convert an image to a Base64 data URL (or back) in your browser—no upload. Steps: Choose image, click Encode, Copy or Download; or paste Base64 and click Decode. Example: sample PNG → data:image/png;base64,… ready for HTML. Files stay on your device. |
| related | image-format-converter, image-compress |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14 |
| slug 结论 | **保留** `image-to-base64` |
| 主检索词 → title/H1 | Image to Base64 Converter — Encode & Decode Locally |
| 次要关键词 | base64 to image → Decode tab；data url → How/FAQ；strip prefix → Advanced |
| 优化摘要 | Encode 主按钮；desc 含步骤；Decode 同页 absorb |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| image to base64 / encode | 吸 | title；Encode |
| base64 to image / decode | 吸 | Decode tab；How item 4 |
| data url | 吸 | Rules；FAQ q2 |
| format convert jpeg/png | **不吸**（邻工具） | FAQ q6 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前能转但 FAQ/按钮弱 → **部分满足**；Encode 按钮 + Advanced + FAQ → **满足** |
| 有意不满足 | 格式转码、压缩、云端批处理 |
| 总判 | 满足（已回写 H1、FAQ、desc、Encode/Decode、Advanced、HUD） |

## 交互规格

- Tab：Encode / Decode（一种主输入面）
- Encode：选文件 → **Encode** → Copy / Download
- Decode：粘贴 → **Decode** → Download
- Advanced：strip prefix；默认 MIME（裸 Base64）
- Clear：**清空**，不 loadSample
- 样例：320×200「Base64」PNG；进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + How×4/Why×5/Rules×5/Example/Use cases×4/FAQ×7/Related/References
