Date: 2026-08-06 15:35
Summary: Summarized required inputs for creating a new tool and page under the latest SEO/IG strategy.

[question]
按照最新的策略，如果需要创建一个新的工具和页面，需要提供什么信息

[try to solve]
按最新策略（工具方向 + Information Gain + tool-creation / tool-i18n-seo），创建新工具页时，建议先按「IG 预审」交齐产品与内容信息；工程侧再按清单落地。最少需要提供：

1) 产品与选型
- 工具中英文名、建议 slug、一句话用户真实任务
- 主方向（A 浏览器 JS / B 场景桥接 / C 行业专属，只标一个）
- 目标主词与 1–5 个长尾意图；长尾默认写进本页 Use cases/FAQ（一带多场景），只有功能/参数/算法实质不同才拆 URL
- 是否 YMYL；文件/粘贴类是否本地处理

2) IG 预审（策略 §3.8，上线硬性 ≥3 条 §3.1）
- 竞品 SERP 前 5–10 有什么、缺什么（≥3 缺口）
- 本站补哪 ≥3 条增益（对应九维编号 + 落在页面哪一节）
- 权威来源 URL；行业/场景 Use case 草稿；边界/失败案例草稿
- 结果区如何落到可索引 Example/FAQ；Related ≥2 内链计划

3) 文案与 SEO 填空（10 语最终要齐，立项可先给 en，其余可后补但上线前必须齐）
- title / description（≥120 字，含步骤或公式 + 示例或场景）
- article：How it works、Use cases 2–3、边界等
- example：固定 Input→Output
- FAQ ≥3；YMYL 还要 disclaimer，建议 references ≥2

4) 交互与技术
- 输入/输出、核心算法或规则、边界行为
- Tier（是否 WASM 懒加载）、依赖包、本地处理声明

权威依据：docs/2026-07-28-google-seo-strategy-implementation.md §3.8/§8.2；.cursor/rules/tool-creation.mdc；tool-i18n-seo.mdc；docs/2026-07-28-per-tool-dev-seo-plans.md 卡片字段。

[actions]
- 只读查阅规则与 SEO 策略文档，未改代码
