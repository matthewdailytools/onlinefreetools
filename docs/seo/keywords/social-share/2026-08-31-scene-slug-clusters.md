# 社交分享图 — 使用场景 → slug 聚类（草案；平台是情境例子）

- date: **2026-08-31**
- 规则：长尾策略 **§3.3 H（全站）** + **§3.3 G**；禁 doorway / 一带多场景
- 说明：H 要求细化到用户**实际使用场景**。本文件用「平台 × 该平台用途」演示渠道类怎么拆；计算器/CIDR/PDF 等用对象、方向、工作流约束拆，不必有平台名。
- 状态：`draft`（无 Planner、无 SERP；**不得**当周 `build`）
- 废止主 slug：`social-share-image-pack`（工程包名，不是使用场景）

像素数字为 2026-08 常见公开规格的**示意**，上线前须按各平台现行官方文档重核，页内写引用与更新日期。

## 0. 用户实际任务（不是「导出多平台 ZIP」）

搜的人要办的是下面某一件，打开页就应已经对准该件：

| 平台 | 用途（场景） | 典型搜法（en 草稿） | 一步到位结果 |
|---|---|---|---|
| 任意站点 | 链接分享预览图（OG） | open graph image size；og image 1200x630 | 画布已是 1.91:1 / 1200×630，可导出并看体积 |
| Facebook | 个人/主页封面 | facebook cover photo size | 封面尺寸 + 被 UI 挡住的安全区 |
| Facebook | 活动封面 | facebook event cover size | 活动封面尺寸（与主页封面不同） |
| Facebook | 资料头像 | facebook profile picture size | 方图头像尺寸 |
| Facebook | 动态配图（非链接卡） | facebook post image size | 动态配图比例（与 OG 卡分场景） |
| LinkedIn | 个人背景横幅 | linkedin banner size；linkedin background photo size | 1584×396 量级 + 安全区 |
| LinkedIn | 公司页封面 | linkedin company page cover size | 公司页尺寸（与个人横幅不同） |
| LinkedIn | 帖子配图 | linkedin post image size | 帖子配图（常近 OG，默认可并入链接卡簇） |
| X / Twitter | 主页横幅 | twitter header size；x banner size | 1500×500 量级 + 安全区 |
| X / Twitter | 摘要卡图 | twitter card image size | 并入 OG/链接卡 |
| YouTube | 视频缩略图 | youtube thumbnail size | 1280×720、体积/文字安全规则 |
| YouTube | 频道封面 | youtube banner size；youtube channel art size | 超宽频道图 + 设备安全区 |
| YouTube | Shorts 封面 | youtube shorts thumbnail size | 并入 9:16 Stories 簇 |
| Instagram | 方形/竖向帖 | instagram post size；instagram portrait post size | 1080×1080 或 4:5，默认方形 |
| Instagram | Stories / Reels | instagram story size | 1080×1920 |
| Pinterest | Pin | pinterest pin size | 2:3 长图 |
| TikTok | 封面 | tiktok thumbnail size | 并入 9:16 |
| WhatsApp | 链接预览 | whatsapp link preview image | 并入 OG/链接卡 |

**不做独立 URL**：Facebook/LinkedIn/X **广告位**矩阵、纯「social media image size」头词 H1。

## 1. 按作业类型聚类（决定 URL 数）

拆页看**主控件是否不同**，不看品牌。

| 作业类型 | 主控件 / IG | 建议主 slug（待 SERP 选用一条） | H1 方向 | 进页默认场景 | 同页芯片 absorb（不另建 URL） |
|---|---|---|---|---|---|
| **A. 链接预览卡** | 约 1.91:1 裁切、1200×630、分享体积、文字勿贴边 | `open-graph-image-size` | Open Graph image size | OG 1200×630 | Facebook 分享卡、LinkedIn 链接/帖子近 1.91:1、X summary card、WhatsApp/Slack 预览 |
| **B. 封面 / 频道安全区** | 超宽画布 + **被头像/UI 遮挡的安全区**叠层 | `linkedin-banner-size`（或 SERP 更强的 `youtube-banner-size` / `facebook-cover-photo-size`） | 选用长尾的自然标题 | H1 对应那一条（如 LinkedIn 个人横幅） | LinkedIn 公司页封面、Facebook 主页封面、X header、YouTube channel art |
| **C. 信息流帖图** | 1:1 / 4:5，无超宽安全区 | `instagram-post-size` | Instagram post size | IG 1080×1080 | IG 4:5 竖帖、Facebook 动态配图（非封面） |
| **D. Stories / 竖屏** | 9:16、1080×1920 | `instagram-story-size` | Instagram story size | IG Story | Reels、FB Story、TikTok 封面、YT Shorts 封面 |
| **E. 视频缩略图** | 16:9、1280×720、平台体积/文字政策（与 OG 不同） | `youtube-thumbnail-size` | YouTube thumbnail size | YT 视频缩略图 | 无则 FAQ；勿与 A 混 H1 |
| **F. 长图 Pin** | 2:3 | `pinterest-pin-size` | Pinterest pin size | Pin 1000×1500 | 产能紧则 absorb 进 C 并声明比例不同 |

Facebook **活动封面**、**资料头像**：优先作 B / C 的芯片，不先拆 URL。SERP 若证明活动封面是独立高需求且 title 缺口，再评是否并入 B 或维持芯片。

## 2. 一步到位（交互规格，立项时写入 `02`）

1. 无查询参数打开 = **H1 场景已选中**（画布尺寸、安全区、导出名）。
2. 其它同簇场景 = 芯片，一键切换；可 `?scene=linkedin-company-cover` 深链。
3. 可导出当前一张，或 ZIP 本簇全部尺寸（子目录按场景名）。
4. 页内规格表 + 官方 References + 「规范核对日期」。
5. Related：`open-graph-preview`（验标签）、`image-merge`（多图拼帖，N→1）、`image-compress`（体积）。

## 3. 与旧包名 / 其它 1→N 的关系

| 旧建议 | 处理 |
|---|---|
| `social-share-image-pack` | **不注册**；本主题簇 ID 仅内部使用 |
| `youtube-channel-art-pack` | 并入作业类型 B 芯片，不单独占周名额 |
| `social-share` vs `image-merge` | B9 = 1 张 → 平台规范尺寸；B13 = 多张 → 1 张拼图 |

其它渠道同样套 H：情境落到用户一次真实任务（Amazon **主图**、当期 iPhone **截图**），不要用 pack 名。其它品类示例：`terraform-cidrsubnet`（工作流约束）、`unlock-pdf`（已知密码这一次使用）、`how-to-calculate-emi`（月供而不是「贷款包」）。

## 4. 下一步（须用户点名 + 词表）

1. Keyword Planner：以上搜法为种子，向下展开长尾。
2. 对候选主 slug 做 Google/Bing SERP，填 `competition_tier`；头词占位则走 §3.3 G。
3. 每作业类型最多 **一条** 主 URL；未过硬条件的维持 `defer`。
4. **不要**按上表一次建 6 个 work-tasks。
