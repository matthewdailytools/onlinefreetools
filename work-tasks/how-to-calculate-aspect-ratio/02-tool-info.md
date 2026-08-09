# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-aspect-ratio`  
**路径**：`/tools/how-to-calculate-aspect-ratio`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：aspect ratio calculator；how to calculate aspect ratio；宽高比计算器
- 用户任务：输入宽×高（或选预设）→ 最简比；再填目标宽 → 等比高
- [x] 竞品：常拆 16:9/4:3 多 URL；缩放与求比分页；单位换算内链弱
- [x] 缺口：求比+缩放同页；预设仅选项；related unit-converter + square-feet
- [x] 增益：① GCD 公式 ② 边界（零/负）⑤ NIST 长度引用 ⑧ Example 1920×1080→16:9；1280→720 ⑨ related
- [x] 长尾：16:9/4:3/1:1/pixel 合并本页预设与 FAQ，不拆 URL
- [x] 权威：NIST SP 811（长度换算语境）
- [x] Related：`unit-converter`、`square-feet`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | ratio = (W÷g):(H÷g)，g=gcd；scaleH = targetW×H÷W |
| 2 | 边界/失败 | 宽/高须 >0；无效不显示比例 |
| 5 | 权威引用 | NIST SP 811 |
| 8 | 数值示例 | 1920×1080 → **16:9**；目标宽 1280 → 高 **720** |
| 9 | 主题内链 | unit-converter、square-feet |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | Omni other §12 #20 · P2 |
| 场景与行业 | 视频、设计、前端分辨率 |
| 技术 | 纯前端 GCD + 等比缩放；localProcessing: true |
| Title (en) | Aspect Ratio Calculator — How to Calculate and Scale Ratios |
| Description 要点 | Find the simplified aspect ratio from width × height, then scale to a target width (or height). Presets 16:9, 4:3, and 1:1 are options on one page. Example: 1920×1080 → 16:9; scale width to 1280 → height 720. Runs in your browser. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 如何化简；预设是否拆页；按宽还是按高缩放；是否上传 |
| Disclaimer / References | 非 YMYL；References ≥1（NIST） |
| related | unit-converter, square-feet |
| 验收 | coverage:gate all；lint:seo；进页样例 **16:9** 与高 **720** |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-aspect-ratio`（与 Omni aspect-ratio 合并意图 / §12 #20 / §9 #112 一致；禁拆 16:9/4:3 URL） |
| 主检索词 → title/H1 | en：**Aspect Ratio Calculator — How to Calculate and Scale Ratios**；zh：**宽高比计算器 — 如何计算与缩放比例**（主词 Aspect Ratio / 宽高比 / Scale / 缩放 落 H1） |
| 次要关键词 → desc / FAQ / Use cases | 16:9 / 4:3 / 1:1 → desc + UI presets + FAQ；scale / 缩放 → title 副句 + Formula；1920×1080 / 720 → Example |
| 用户搜索习惯判断 | en 搜 aspect ratio calculator / scale aspect ratio；zh 搜宽高比计算器/比例缩放；勿把「宽、高、预设」参数枚举进 H1 |
| 优化摘要 | 结果向 Aspect Ratio Calculator + Calculate and Scale；禁参数枚举副标题；预设仅选项；次词 16:9/scale 落 desc/FAQ；related 用 unit-converter + square-feet |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> `npm run coverage:gate -- --slug=how-to-calculate-aspect-ratio --phase=0b`

## 交互规格（给实现用）

- 输入：宽度 W、高度 H（须 >0）；可选预设 Custom / 16:9 / 4:3 / 1:1（填入常见像素，非独立 URL）
- 缩放：目标宽度 targetW（须 >0）→ 目标高度 = targetW × H ÷ W；可选按目标高度反算宽（同页）
- 输出：最简比 `W/g : H/g`（g = gcd 取整后）；缩放后的另一边尺寸
- 失败：W/H/target ≤0 或非数字 → 错误文案
- 示例：W=1920，H=1080 → **16:9**；targetW=1280 → H=**720**
- **进页样例**：默认 1920×1080、目标宽 1280，`loadSample()` 显示 16:9 与 720

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（非 YMYL，不强制）
- [x] `03-locale-briefs.md` 已填（实现十语前）
