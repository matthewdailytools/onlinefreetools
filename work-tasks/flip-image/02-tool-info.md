# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`flip-image`  
**路径**：`/tools/flip-image`  
**主方向**：A  
**catalog**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #9）

## 改写原因（2026-10-14）

审计：222 词；Apply 与 How 动词不一致；导出格式/质量挤占主操作行；无金标 HUD；FAQ/Use cases 偏短；缺 Why choose。

## IG 预审

- 用户任务：本地水平/垂直镜像一张图并下载
- [x] 缺口：按钮词；Advanced 折叠；HUD；Why×5；FAQ JPEG 透明/邻工具分工
- [x] 增益：① Flip 主按钮 ② Advanced（格式/质量/JPEG 底色）③ bcw-hud ④ 样例 A/B/C/D ⑤ FAQ×7
- [x] Related：`image-grayscale`、`image-border`、`image-crop`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Flip Image — Mirror Horizontally or Vertically |
| Description (en) | Flip a photo horizontally or vertically in your browser—mirror selfies or swap layout sides without uploading. Steps: choose an image, tick Flip horizontal and/or Flip vertical, click Flip, Download JPEG/WebP/PNG. Example: sample blocks with A/B/C/D → horizontal flip moves A to the right. Files stay on your device. |
| related | image-grayscale, image-border, image-crop |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14 |
| slug 结论 | **保留** `flip-image` |
| 主检索词 → title/H1 | Flip Image — Mirror Horizontally or Vertically |
| 次要关键词 | mirror image horizontal → flip_h + How；flip photo vertical → flip_v；flip vs rotate → FAQ q3 |
| 优化摘要 | 主按钮改为 Flip；desc 含步骤与 A/B/C/D 样例；Advanced 收导出参数 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| flip image / mirror image | 吸 | title；How |
| flip horizontal / vertical | 吸 | 控件标签；Rules |
| flip selfie / mirror selfie | 吸 | usecase_1 |
| flip vs rotate | 吸（边界） | FAQ q3 |
| crop / grayscale | **不吸**（邻工具） | FAQ q7 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前能翻但 Apply 词弱、设置抢主行 → **部分满足**；Flip + Advanced + HUD → **满足** |
| 有意不满足 | 任意角度旋转、动图全帧、云端批处理 |
| 总判 | 满足（已回写 H1、FAQ、desc、Flip 按钮、Advanced、HUD） |

## 交互规格

- 单图 dropzone；Flip horizontal / Flip vertical（可同时）
- 主按钮 **Flip** → Download；Load sample / Clear
- Advanced：格式 JPEG/WebP/PNG、质量、JPEG 底色
- 金标 HUD：decode → flip → encode
- Clear：**清空**，不调用 loadSample；复位默认 WebP + 水平勾选
- 样例：480×320 A/B/C/D；进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + How×4/Why×5/Rules×5/Example/Use cases×4/FAQ×7/Related/References
