# SERP batch 2026-08-13-keyword-planner-magnets

- locale / gl: en / us（Google Keyword Planner 默认导出）
- seed queries: `magnets`（广告组：Type / Neodymium / Magnetic Material / Permanent / Rare Earth / Magnetic Strip / Custom / Fridge / Super Strong / …）
- method note: **Google Keyword Planner 批量导出**（含广告组、平均每月搜索量区间、竞争度、建议出价、展示份额）；仅候选词与量级进池；**无**完整 SERP HTML / 无账号凭证入库（对齐 funnel 脱敏约定）
- 批次规模: ~700 词；头词（"1,000 - 1万"）：`neodymium magnets`、`small magnets`、`rare earth magnets`、`magnetic balls`、`neodymium disc magnets`、`magnets for sale`、`fridge magnets`；其余多为 100–1,000 / 10–100 / 0–10 长尾

## 意图聚类（pre-filter）

| 聚类 / 候选 | 代表词 | 量级 | SERP type notes | IG gap (1 line) | draft verdict |
|---|---|---|---|---|---|
| 磁铁强度 / 吸力（pull force） | magnet strength, strongest magnets, powerful magnets | 100–1,000 | 磁铁商店自带吸力计算器（K&J 等）；**通用工具站几乎空白** | 吸力估算公式 + 误差边界、N 级对照、材料对比、单位换算、安全提示 | **build** |
| 磁铁等级 | magnet grades, n35/n42/n52, grades of neodymium magnets | 10–100 | 商店规格页与知识页混合 | 等级→最大磁能积/剩磁对照表 + 与吸力估算联动 | build（并入主工具） |
| 磁铁材料对比 | neodymium vs ferrite vs regular, different magnetic materials | 10–100 | 问答/博客 | NdFeB vs Ferrite vs Alnico 特性对照（吸力/耐温/成本） | build（并入主工具） |
| 磁铁尺寸规格 | magnet sizes, neodymium magnets size chart, 8x3mm 系列 | 10–100 | 商店尺寸表 | 常见尺寸 + 重量 + inch↔mm 换算 + 吸力联动 | build（并入主工具） |
| 磁铁类型知识 | types of magnets, three types of magnets | 100–1,000 | 百科 / 教育页 | 类别与特性表（作为主工具 How/FAQ 素材） | defer |
| 磁铁原理科普 | how do magnets work, magnets explained, understanding magnets | 100–1,000 | 科普 / 维基 | 无独立交互形态 | drop |
| 磁铁用途列表 | uses of magnets, things that use magnets | 10–100 | 列表型内容 | 可作为主工具 Use cases 素材，无独立工具形态 | drop |
| 购买渠道意图 | buy magnets online, magnets for sale, magnet shop near me, home depot, walmart | 100–1,000（部分 1,000-1万） | 电商 / 零售 / 地图包 | 非本站业务（工具站） | drop |
| 定制 / 冰箱磁铁 | custom magnets, fridge magnets, personalized photo magnets | 100–1,000（部分 1,000-1万） | 定制印刷服务 | 产品定制意图，非工具形态 | drop |
| 品牌 / 厂家词 | first4magnets, kj magnetics, magnets4u, eriez 等 | 10–100 | 品牌导航 | 非工具意图 | drop |
| 产品规格词 | neodymium bar/block/disc/ring magnets, 5mm, 10x3mm 等 | 10–100 | 商品页 | 产品意图；可作主工具输入预设值素材 | drop |

## Picked for pool (~10)

见 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv) 中 `source_batch=2026-08-13-keyword-planner-magnets` 行。

## 本批结论（仅分析）

- **无既有 catalog slug 可 absorb**（`tool-catalog.json` 无磁铁类工具；`work-tasks/magnet-link-decoder` 是 BitTorrent 磁力链接，非物理磁铁）。
- 主 `build` 候选建议名：**`magnet-pull-force-calculator`**（磁铁吸力/强度估算）；等级对照、材料对比、尺寸换算**并入同一页**（一带多场景），**禁止**按 grades/material/size 拆近义 URL。
- **未**因本批创建 `work-tasks/`；开工具立项须另人工决议。
- 多数词（~9 成）为商业购买 / 产品规格 / 品牌导航意图 → `drop`；知识意图 → `defer`（可作主工具 How/FAQ/Use cases 素材）。
- 事项跟进：[`../keyword-to-tool-tracker.md`](../keyword-to-tool-tracker.md)
