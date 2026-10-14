# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-border`  
**路径**：`/tools/image-border`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #23，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文约 157 词；FAQ 为「Uploaded?」「Does it crop?」「Units?」式单词问答，答案只有「No.」；Use case「Print white margins.」一句话；无 How 步骤、无 Why choose；参数（格式 / JPEG 底色）平铺在主操作区，无进度 HUD。功能上只有「四边等宽 px + 颜色」，无法回应本意图最常见的追问：「Instagram 发图不被裁 → 补成正方形 / 4:5」「拍立得白边」「边框多宽合适」「边框颜色跟照片一致 / 模糊背景」。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：给照片加一圈边框（白边最常见）后下载；或把横图补边成正方形 / 4:5 / 9:16 以便社媒不裁切
- [x] 竞品（pinetools add-border、imgonline、Kapwing / Canva「add border」、各语种「图片加白边」「インスタ 余白」站、手机 No Crop 类 App）：多为固定 px 等宽边框；补正方形功能多在 App 内且要上传；几乎不给输出尺寸 / 四边像素，不解释百分比与像素区别
- [x] 缺口：补比例（1:1 / 4:5 / 9:16）；拍立得底边；百分比宽度；边缘色 / 模糊照片填充；圆角、衬线、投影；输出尺寸与四边像素；默认保持原格式
- [x] 增益：① 五种样式（等宽 / 1:1 / 4:5 / 9:16 / 拍立得 4×）② 宽度按短边 % 或 px ③ 五种填充（白 / 黑 / 边缘平均色 / 模糊照片 / 自定义）④ 圆角 + 内衬线 + 投影 ⑤ 统计行给前后尺寸与上右下左像素 ⑥ 可验证 Example（4000 × 3000 → 4180 × 3180 / 4180 × 4180 / 4180 × 5225 / 4180 × 3450）⑦ 打印边框宽度经验值（3 mm ≈ 35 px @300 dpi）⑧ 权威引用
- [x] 权威：Wikipedia — Aspect ratio (image)；MDN — CanvasRenderingContext2D.drawImage()
- [x] Related：`instagram-post-size`、`instagram-story-size`、`image-crop`、`how-to-calculate-aspect-ratio`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Add a Border to a Photo — White Frame or Square Padding for Instagram Without Cropping |
| Description (en) | Add a border around a photo in your browser without cropping it: an even white frame, a Polaroid-style bottom, or padding that turns the picture into a square, 4:5 or 9:16 image for Instagram. Example: a 4000 × 3000 photo with a 3% border becomes 4180 × 3180, or 4180 × 4180 when made square. |
| related | instagram-post-size, instagram-story-size, image-crop, how-to-calculate-aspect-ratio |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `image-border`（已有曝光，不改 URL；不拆 add-white-border / square-photo / no-crop 近义页） |
| 主检索词 → title/H1 | en：**Add a Border to a Photo — White Frame or Square Padding for Instagram Without Cropping**；zh：**图片加边框 — 给照片加白边或补成正方形，不裁切画面也能发 Instagram** |
| 次要关键词 → desc/FAQ | add white border to photo → title 副句 + 默认白色；make photo square without cropping / instagram no crop → 补比例样式 + FAQ q3 + Why choose 1；polaroid frame → 样式 + rules 3 + Use case 4；border width → 宽度单位 + FAQ q4；blur background square → 模糊填充 + FAQ q5；rounded corners / double border → 高级设置 + FAQ q7 |
| 用户搜索习惯判断 | 动作向（add border / add white border / make square）；比例数字不进 H1，只以「Square Padding for Instagram」概括 |
| 优化摘要 | 保留 slug；H1 由「Add Border to Image — Color & Width Online」改为动作 + 白框 + 补方 + 不裁切；desc 写清三种样式与可验证尺寸 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| add border to photo / image | 吸（主词） | title / H1 |
| add white border to photo | 吸 | title 副句；默认填充白色；How |
| make photo square without cropping / instagram no crop | 吸 | 「Pad to a square」样式；FAQ q3；Why choose 1；Example |
| 4:5 instagram border / portrait padding | 吸 | 「Pad to portrait 4:5」；rules 2；Example |
| story / reels 9:16 border | 吸 | 「Pad to 9:16」；FAQ q3 |
| polaroid frame / polaroid border | 吸 | 拍立得样式；rules 3；Use case 4 |
| how thick should a photo border be / print margin | 吸 | FAQ q4；Use case 2 |
| blur background for square photo / border same colour as photo | 吸 | 填充 edge / blur；FAQ q5；Why choose 3 |
| rounded corners / double border / mat | 吸 | 高级设置；FAQ q7 |
| decorative frame templates (flowers, hearts) | **不吸**（素材库方向） | — |
| crop / resize photo | **不吸** | Related：image-crop |
| batch add border to many photos | **不吸**（本页单张） | Why choose 2 提百分比便于逐张统一 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 图片加边框，仍成立 |
| 主检索词任务 | 「给照片加边框 / 白边并下载」——改写前只能等宽 px，无补比例、无进度、说明薄 → **部分满足**；改写后：五种样式 + 百分比 + 五种填充 + 金标 HUD + 尺寸统计 → **满足** |
| 超出 | 无第二工具抢首屏；圆角 / 衬线 / 投影 / 格式收进高级设置 |
| 有意不满足 | 花纹相框模板、批量处理：不吸，FAQ / Related 说明 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：单张图片（点击或拖放；JPEG / PNG / WebP / GIF 首帧）
- 主选项（主按钮上方一行）：边框样式（默认四边等宽）；宽度（默认 5，单位「短边 %」或 px）；填充（默认白色；自定义时显示取色器）
- 主按钮：Add border → Download（文件名 `原名-border.ext`）
- 高级设置（折叠）：照片圆角 %；内衬线 px + 颜色；投影；导出格式（默认与原图相同，GIF 等存 PNG）；质量（JPEG / WebP）
- 规则：b = 宽度（% × 短边 或 px）；等宽四边 = b；拍立得底边 = 4b；补比例先加 b，再沿短方向补到宽 ÷ 高 = 1 / 0.8 / 0.5625，照片居中（奇数像素多出的 1 px 给右 / 下）
- 进度：金标 `.bcw-hud`（Read photo → Draw border → Save file，百分比 + 已用时）
- 预览：随设置实时重绘（≤ 520 px，棋盘格显示透明）；改设置后须重新 Add border 才能下载新结果
- 校验：宽度空 / 负 / > 50 % / > 5000 px → 错误；输出边 > 16384 px 或 > 2.68 亿像素 → 错误；> 8192 px 软警告；> 25 MB、动图首帧警告
- 样例：600 × 400 风景图；进页自动以 5 % 白边导出（640 × 440，四边 20 px）
- Clear 只清空并恢复默认设置，不重载样例

## 页面模块清单

- [x] H1 + 交互 + 进页样例 + 摘要
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
