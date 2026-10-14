# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`images-to-gif`  
**路径**：`/tools/images-to-gif`  
**主方向**：B  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #17，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄；FAQ 为「Uploaded?」「Quality?」「Audio?」式单词问句；How 一句话；无 Why choose；用例 3 条空泛。功能缺陷：

- 统计行模板写 `{n} frames`，脚本却替换 `{w}/{h}/{frames}/{bytes}` → 页面显示字面 `{n}`；
- 循环次数直接写入 GIF 的 repeat 字段，「1」实际播放两次；无法真正「只播一次」；
- 所有帧共用一个停留时间；无按文件名排序；不同尺寸只能留白边；
- 无进度 HUD（违反 `tool-creation.mdc`「处理中进度必须明显」）。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把多张图片按顺序做成一个动态 GIF，控制速度与播放次数，下载
- [x] 竞品（ezgif / imgflip / canva / adobe express 类）：ezgif 选项全但上传服务器、界面分散；多数只给全局延迟与「loop」数字，不解释 loop=1 播两次；少有来回播放与末帧停留
- [x] 缺口：单帧停留；真正「只播一次」；来回播放；末帧停留；裁剪铺满 vs 留边；颜色数 / 共享调色板；文件大小与时长统计
- [x] 增益：① 帧列表（序号、单帧 ms、上下移、删除、自然排序）② 播放次数下拉（无限 / 一次 / 2× / 3× / 5×，按总播放次数写 repeat）③ 高级：适配、底色、颜色数、调色板、末帧停留、来回播放 ④ 金标 HUD ⑤ 统计：尺寸 · 帧数 · 一轮时长 · 字节 ⑥ Rules：1/100 秒取整、≤10 ms 被浏览器放慢、循环块语义、256 色、无声音与 1 位透明 ⑦ FAQ ×7
- [x] 权威：W3C GIF89a specification；MDN Image file type and format guide
- [x] Related：`images-to-pdf`、`image-merge`、`image-format-converter`、`convert-a-video-file-to-a-gif`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Images to GIF Maker — Turn Photos into an Animated GIF with Your Own Speed and Loop Count |
| Description (en) | Make an animated GIF from several photos or PNG/JPG frames in your browser. Steps: add the images, put them in order, set the delay and how many times it plays, click Create GIF, then download. Example: 8 frames at 100 ms each = 10 fps, a 0.8-second loop. |
| related | images-to-pdf, image-merge, image-format-converter, convert-a-video-file-to-a-gif |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08） |
| slug 结论 | **保留** `images-to-gif`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Images to GIF Maker — Turn Photos into an Animated GIF with Your Own Speed and Loop Count**；他语按 03 |
| 次要关键词 → desc/FAQ | make a gif from pictures → How + FAQ q1；gif frame delay / speed → 主选项 + FAQ q2 + Rules 1–2；gif play once / loop count → 下拉 + FAQ q3 + Rules 3；reduce gif size → FAQ q4 + 颜色数；different size images → 适配选项 + FAQ q6；boomerang gif → 高级选项 + Example |
| 用户搜索习惯判断 | 动作向（make / create / turn into）；speed 与 loop 是主修饰，放副标题，不串列参数名 |
| 优化摘要 | 保留 slug；H1 由「Make an Animated GIF Locally」改为含 maker + photos + speed + loop；desc 写 steps 与例子，去掉隐私口号 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| images to gif / gif maker from images | 吸（主词） | title / H1 |
| make a gif from photos / pictures | 吸 | title；How；FAQ q1 |
| jpg to gif animated / png to gif animation | 吸 | 拖放提示（JPEG/PNG/WebP/GIF）；desc |
| gif frame delay / change gif speed / fps | 吸 | 延迟框 + fps 显示；单帧 ms；FAQ q2；Rules 1–2 |
| gif loop once / loop count | 吸 | 播放次数下拉；FAQ q3；Rules 3；Why choose 2 |
| boomerang gif | 吸 | 高级选项；Example；Why choose 3 |
| reduce gif file size | 吸（本工具内） | 宽度提示；颜色数 / 共享调色板；FAQ q4 |
| gif with different size images | 吸 | 适配选项；FAQ q6 |
| transparent gif / gif with sound | 吸（边界说明） | Rules 5；FAQ q7 |
| video to gif | **不吸**（已有工具） | Related `convert-a-video-file-to-a-gif` |
| single image to gif（静态格式转换） | **不吸**（已有工具） | need_two 报错引导；Related `image-format-converter` |
| images to pdf / collage | **不吸** | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 多图合成动态 GIF，仍成立 |
| 主检索词任务 | 「多张图做成 GIF 并控制速度 / 循环」——改写前统计行坏、loop=1 播两次、无单帧时长、无进度 → **部分满足**；改写后 → **满足** |
| 超出 | 高级设置折叠，不抢首屏；首屏为拖放区 + 帧列表 + 三个主选项 + 生成 / 下载 |
| 有意不满足 | 视频转 GIF、单图转 GIF、GIF 压缩 / 裁剪编辑：Related 或报错引导 |
| 总判 | 满足（已回写 How、Rules、FAQ、desc） |

## 交互规格

- 输入：一个拖放区（多选；JPEG/PNG/WebP/GIF；动图只取首帧并警告）；按选择顺序追加
- 帧列表：序号、缩略图、文件名、单帧 ms（留空 = 全局）、上移 / 下移 / 删除；「按文件名排序」（numeric localeCompare）
- 主选项：帧间隔 ms（20–10000，默认 500，旁显 ≈ fps）；播放次数（无限 repeat 0 / 一次 repeat −1 不写循环块 / 2× repeat 1 / 3× repeat 2 / 5× repeat 4）；宽度 px（64–2048，默认 480；高按首帧宽高比，上限 2048）
- 高级（折叠）：适配（完整显示留边 / 裁剪铺满）；底色（仅留边时显示，亦填透明区）；颜色数 256/128/64/32；调色板（每帧 / 共享，取样 ≤ 40 万像素量化一次）；末帧停留 ms；来回播放（≥3 帧时追加倒序中间帧）
- 生成：读取帧（每源帧渲染一次）→ 调色板 → 逐帧编码（gifenc；共享时仅首帧写全局色表）；金标 HUD 三步 + 百分比 + 已用时
- 输出：GIF 预览；统计「宽×高 px · 帧数 · 一轮时长（按 10 ms 取整累计）· 大小」；下载名 `{首帧文件名}-animated.gif`
- 报错：无图 / 仅一张（引导格式转换器）；部分文件无法解码（跳过并提示）；编码器加载失败；编码失败
- 样例：8 帧 240×180 小球跳跃，100 ms（10 fps），无限循环，一轮 0.8 s；进页自动生成
- 任一设置或帧变化即作废结果；Clear 清空帧并恢复默认，不重载样例

## 页面模块清单

- [x] H1 + 拖放区 + 帧列表 + 主选项 + 生成 / 下载 + 高级折叠 + HUD + 预览 + 摘要
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
