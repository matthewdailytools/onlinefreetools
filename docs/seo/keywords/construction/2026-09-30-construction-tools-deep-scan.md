# 2026-09-30 建筑施工：网站与工具专项深度调研

本次是规划调研：**不新建工具、不建 `work-tasks/`、不改已有工具文案、不部署**。
接续 [`../industry-scan/2026-09-30-industry-tool-gap-scan.md`](../industry-scan/2026-09-30-industry-tool-gap-scan.md) 中「施工工种」一节，对施工方向做纵深调研。
结论写入 [`../../keyword-daily-pool.tsv`](../../keyword-daily-pool.tsv)（`seed_query=construction`，`source_batch=2026-09-30-construction-tools-deep-scan`）与 [`../../keyword-to-tool-tracker.md`](../../keyword-to-tool-tracker.md) 决策日志。

> **证据强度**：竞品与 SERP 来自 WebSearch 前 5 抽查（en/ja/ru/zh/id/es/ar/de 共 20 次）+ 已存档的 Omni / ToolDone 施工清单 + 本站 GSC 导出（2026-09-10）。WebSearch ≠ 人工 Google/Bing SERP，`competition_tier` 均为**草稿**；未跑 Keyword Planner。任何条目转 `build` 前须按 `docs/seo/2026-08-20-long-tail-gap-strategy.md` §3.3 补人工 SERP 与量级。

---

## 0. 结论速览

1. **施工计算器 SERP 已饱和**。Omni 施工分类 156 个工具，ToolDone 138 个（近乎镜像）；2025–2026 又涌现一批垂直小站（Easy Takeoffs、ProjectCalcs、TakeoffCalc、ContractorCalcs 等），每个品类都有 5 个以上「免费、无需注册」的页面。**本批 0 个 `long_gap`**。
2. **本站最值得做的不是新页，而是把现有 4 个施工页补到 SERP 基线**，其中混凝土页收益最高：
   - 中文混凝土页已有 56 次展示、平均排名 7.7，但页面只算几何体积 + 一个固定袋容积；
   - zh / id / es / ar 四个市场的主流需求是「**按强度等级查每立方配合比 → 本地规格袋数的水泥 + 砂石方量**」，各地标准不同（中国 C 级、印尼 SNI 7394 K-225、拉美 ACI 211.1 f'c、阿语区 1:2:4 干体积系数 1.54）；
   - en 市场则期望 40/60/80 lb 预拌袋、损耗率、基础 / 柱坑 / 台阶形状。
3. **本地化单位缺口**：`unit-converter` 面积没有 坪 / 畳 / 亩。日本 SERP 的标准做法是「坪 = 400/121 m²，畳分 不動産表示 1.62 / 京間 / 中京間 / 江戸間 / 団地間」；台湾同用「坪」；中国农村与土地场景用「亩」（10000/15 m²）。GSC 已有 `sqft m2 換算` 这类日文查询。
4. **文件类施工作业**是本站差异化方向，因为能复用已 vendor 的引擎：
   - PDF 图纸按比例量长度、面积（pdfjs）；
   - 工地照片批量印拍摄时间 / GPS（exifr + 现有水印能力）；
   - 施工照片报告 PDF（pdf-lib + 现有 images-to-pdf）。

   这三类 SERP 同样已有浏览器本地竞品，定为 `mid_covered`，但竞品多为单点功能，组合空间大于纯计算器。
5. 新入池 **14 行，全部 `defer`**（其中 3 行落点是「在现有 slug 内补能力」，不新建 URL）。楼梯规范行已在上一轮入池，本轮不重复。

---

## 1. 本站现状

### 1.1 施工场景工具（`scenario: construction`，`primaryTopic: home-diy`）

| slug | 现有能力 | 与 SERP 基线的差距 |
| --- | --- | --- |
| `how-to-calculate-concrete` | 板 / 矩形柱 / 圆柱体积；可选袋数（公制固定 `BAG_M3 = 0.015`） | 无损耗率；无多袋规格（40/60/80 lb、25/40/42.5/50 kg）；无配合比 → 水泥 / 砂 / 石；无基础、柱坑、台阶形状 |
| `how-to-calculate-tile` | 面积 + 单片尺寸 + 损耗% → 片数 | 无缝宽；无按箱（每箱片数）取整；无填缝剂 / 瓷砖胶用量 |
| `how-to-calculate-paint` | 面积 × 遍数 ÷ 覆盖率 → 升 | 无门窗扣减；无按罐规格取整 |
| `square-feet` | ft² ↔ m² 等面积换算 | 主要展示来源；已被 sqft↔m² 多语长尾承接 |

相邻可复用：`how-to-calculate-slope`（两点斜率，数学向，**不含**屋面 X/12 坡度）、`how-to-calculate-volume`、`how-to-calculate-triangle-area`、`unit-converter`、`image-exif`（只能查看和清除 GPS，**不能**印到图上）、`add-watermark`、`images-to-pdf`、`pdf-watermark`。

### 1.2 GSC 信号（2026-09-10 导出，展示数 / 平均排名）

- `square-feet`：es 94 / 24.3、de 85 / 53.3、zh 40 / 20.3、fr 37 / 50.6、ja 19 / 10.2、pt 8 / 20.5。查询以 `sqft a m2`、`umrechnung quadratfuß in quadratmeter`、`平方英尺转平方米`、`sqft m2 換算` 等换算词为主。
- `how-to-calculate-concrete`：**zh 56 / 7.7**；id 1 / 2。另有 `beton volumen rechner`（de）1 次展示。
- `how-to-calculate-tile`：**zh 7 / 6.7**。
- `how-to-calculate-paint`：es 16 / 54.5、ar 6 / 9.3；查询含 `calculadora de pintura por m2`。
- `how-to-calculate-slope`：zh 10 / 8.3。

解读：中文施工页排名已进首页边缘，而点击为 0。优先补「页面能力 + 本地化默认值」，比铺新 URL 更可能转化为点击。

---

## 2. 竞品站点地图

### 2.1 综合计算器站（头部，全品类）

| 站点 | 特点 |
| --- | --- |
| Omni Calculator | 施工分类 156 个；混凝土 ×10+、围栏 ×10、屋面、木材、楼梯、钢筋、干墙、碎石、HVAC、金属重量 |
| ToolDone | 138 个，与 Omni 近乎一一对应 |
| Calculator.net / CalculatorSoup | 通用站中的施工子集，权重高 |
| Inch Calculator | 木工 / 装修向，图文说明深 |
| Blocklayer | 带图纸式示意（楼梯、屋面、弧线），老牌 |

### 2.2 2025–2026 新兴垂直小站（en）

Easy Takeoffs、ProjectCalcs、TakeoffCalc、ContractorCalcs、TheSiteMath、remodelcalculators、CrewCalculator、roofing-calculator.io、roof-pitchcalculator.com、drywallcalculator.net、CalcyTools、ProjectCalc。
共同打法：一页一品类、公式 + 例题 + 参考表、损耗率可调、「No signup」。
**Easy Takeoffs** 公开批评部分站点自动生成的参考表数字错误（例如把 6/12 坡度系数写成 1.202，正确值为 √(1+0.5²) ≈ **1.118**）。说明「数值正确 + 可复核例题」本身就是 IG。

### 2.3 厂商工具

CertainTeed Drywall Calculator 等：只给自家板材规格，且明确「不扣门窗」。

### 2.4 本地语种代表站

| 语种 | 代表站 | 主打作业 |
| --- | --- | --- |
| ja | xenuto、tegaruya（手軽屋）、simple.itlibra、komase、puchi-tool | 坪・平米・畳 换算（畳 4–5 种规格）、坪単価、建ぺい率 / 容積率 |
| ru | kalk.pro、stroy-calc.ru、kalk24.com、zabortver.ru、71-beton.ru | 条形基础（ленточный фундамент）：混凝土 + 钢筋 + 模板 + 图纸，引用 СНиП 52-01-2003 |
| zh | bchrt（木鱼查询）、calc.cultoo、gongdizhishi（工地知识库）、calculatorlib、elysiatools | 混凝土配合比（C15–C40）、钢筋理论重量 0.00617d² |
| id | titoreista、artikata、kalkulatorbangunan、sipilku、engpocket、sumbergriyaabadi | 砌墙材料（bata merah / hebel / batako）、K-225 配合比（SNI 7394:2008） |
| es | planetacalculadoras、cuevadelcivil、dosificaconcreto | f'c 配合比（ACI 211.1 / NMX-C-155 / NSR-10）、bultos |
| ar | hasbaty、snad.io、sarkosa、saudiah.org、softonic-ar | 1:2:4 干体积法（×1.54）、水泥袋、钢筋按 kg/m³ 配筋率 |
| de | deutschland-rechner、rechenfix、buildcalcworld、chillicut、materialbedarf-rechner | Estrich（找平层）按厚度 → 袋数，DIN 18560-2 最小厚度提示 |

### 2.5 文件类施工工具

| 作业 | 竞品 | 备注 |
| --- | --- | --- |
| PDF 图纸算量（takeoff） | Drawliner、OpenTakeoff、bScaler（本地）、measurefloorplan（导出收费）、Foreman | 核心是「用已知尺寸标定比例」再量线长、面积 |
| 工地照片印时间 / GPS | CrewBox、SiteCam、orangebot、LocationTagger、gpsmapcameraonline | 多为 App 或单张；批量 + ZIP + 本地处理的组合少 |
| 施工照片报告 PDF | Timemark、Pixoate、SiteCam、LibreCam、PhotoReport | 多为 App 订阅；网页端「拖入照片 → 带说明的网格报告」少 |
| IFC / BIM 模型查看 | Flinker、IFCfiles、icBIM、3dstudio、Sortdesk | 均用 web-ifc WASM 本地解析，竞争已充分 |

---

## 3. 品类矩阵（对照 Omni / ToolDone）

| 品类 | Omni/ToolDone | 本站 | tier（草稿） | 判断 |
| --- | --- | --- | --- | --- |
| 混凝土体积 / 袋数 | 有，×10+ 变体 | 有（基础版） | head | 补能力（见 §6） |
| 混凝土配合比材料 | 部分 | 无 | mid_covered（本地语种） | 在混凝土页内实现 |
| 找平层 Estrich / screed | 有 | 无 | mid_covered（de） | defer P3 |
| 砌墙：砖 / 砌块 / 砂浆 | 有 | 无 | mid_covered（id/ru/es） | defer P2 |
| 屋面坡度 / 椽长 | 有 | 无（slope 为数学向） | head | defer P2 |
| 楼梯踏步 | 有 | 无 | mid_covered | 上一轮已入池 P1 |
| 干墙 / 石膏板 | 有 | 无 | head（en） | defer P3 |
| 钢筋重量 | 有 | 无 | mid_covered（zh） | defer P2 |
| 条形基础（混凝土 + 钢筋 + 模板） | 部分 | 无 | mid_covered（ru，重） | defer P3 |
| 瓷砖 | 有 | 有 | head | 补缝宽 / 按箱（见 §6） |
| 涂料 | 有 | 有 | head | 补门窗扣减 / 罐规格（见 §6） |
| 面积换算（含本地单位） | 部分 | 有（缺坪 / 畳 / 亩） | mid_covered（ja） | 在 unit-converter 内实现 |
| 围栏 ×10、甲板、护墙板等 | 有 | 无 | head | **不做变体铺量**（doorway / scaled content 风险） |
| 结构设计（梁截面、承载） | 部分 | 无 | — | **drop**：安全责任重，工具只能给出误导性结论 |
| PDF 图纸算量 | 无 | 无 | mid_covered | defer P1 |
| 工地照片印时间 / GPS | 无 | 无（有 exif 查看） | mid_covered | defer P1 |
| 施工照片报告 PDF | 无 | 无（有 images-to-pdf） | mid_covered | defer P2 |
| IFC 查看 | 无 | 无 | mid_covered | defer P3 |

---

## 4. 本地化需求（施工人群的本地搜法）

| 语种 | 典型作业 | 本地标准 / 单位 | 本地默认值（写页时用） |
| --- | --- | --- | --- |
| zh | 混凝土配合比、钢筋理论重量 | JGJ 55-2011（配合比设计规程）；强度等级 C15–C40；钢筋 0.00617×d² kg/m | 水泥袋 50 kg；参考配比例：C20 约 水泥 343 / 砂 621 / 石 1261 / 水 175 kg/m³（常见参考表，**须以试配为准**） |
| id | 砌墙材料、K-225 配合比 | SNI 7394:2008；K-225 ≈ 水泥 371 / 砂 698 / 石 1047 kg + 水 215 L | 水泥袋 40 / 50 kg；砂 1400 kg/m³；hebel 60×20 cm ≈ 8.3 块/m²，thin-bed 1 袋 40 kg ≈ 10 m² |
| es | 配合比（dosificación）、bultos | ACI 211.1、NMX-C-155（MX）、NSR-10（CO）；f'c 用 kg/cm² | 袋 50 kg（MX）/ 42.5 kg（CO、PE、VE）；f'c 210 常见约 7 袋 50 kg/m³、比例 1:2:3 |
| ar | 混凝土材料 + 钢筋 | 干体积法：湿体积 × 1.54；水泥 1440 kg/m³ | 1:2:4 为默认；袋 50 kg；钢筋按设计配筋率 kg/m³ 估算 |
| ja | 坪・平米・畳 换算 | 1 坪 = 400/121 m² ≈ 3.305785；畳：不動産表示 1.62 m²（表示規約施行規則第 8 条下限）、京間 1.824、中京間 1.656、江戸間 1.549、団地間 1.445 | 默认 不動産表示 1.62 |
| de | Estrich 袋数 | DIN 18560-2：浮筑 CT 约 45 mm、CA 约 40 mm 最小厚度；CT ≈ 2000–2100 kg/m³ | 袋 25 / 40 kg；损耗 5–10% |
| ru | 条形基础全套 | СНиП 52-01-2003 等 | 竞品已给图纸与模板板材数量，重度占位 |
| en | 预拌袋、损耗、形状 | 80 lb 袋 ≈ 0.60 ft³（45 袋/yd³）、60 lb ≈ 0.45、40 lb ≈ 0.30 | 损耗 5–10%；干墙 4×8 ft = 32 ft²，仅扣大于整板的开口 |

---

## 5. 文件类施工作业（差异化方向）

### 5.1 PDF 图纸按比例量长度和面积（P1）

- **场景**：业主或分包拿到 PDF 平面图，想在不装 CAD 的情况下量墙长、房间面积，估算地板 / 涂料用量。
- **引擎**：pdfjs 渲染 + canvas 画线 / 多边形；比例标定用「点两点 → 输入已知实际长度」。
- **IG（竞品未组合）**：多页切换；公制 / 英制；多边形面积 + 周长；结果表导出 CSV；可直接把面积带入本站瓷砖、涂料页；全程本地。
- **风险**：交互复杂度高（缩放、吸附）；须写清「依赖图纸本身比例准确」。
- **建议 slug**：`measure-lengths-and-areas-on-a-pdf-floor-plan`。

### 5.2 工地照片批量印拍摄时间和 GPS（P1）

- **场景**：施工日志、隐蔽工程验收、索赔留证，需要照片上可见的时间 + 坐标 + 项目名。
- **引擎**：exifr 读 `DateTimeOriginal` / GPS；canvas 绘制角标；jszip 打包。与 `image-exif`、`add-watermark` 相邻。
- **IG**：批量；无 GPS 时明确标记而非伪造；可选项目名 / 部位 / 序号；输出前可逐张预览；本地处理不上传。
- **合规边界**：页面须说明「印上的是文件内 EXIF 值，不能证明真实性」，避免被理解为防篡改证据工具。
- **建议 slug**：`stamp-date-and-gps-on-construction-photos`。

### 5.3 施工照片报告 PDF（P2）

- **场景**：把一批现场照片排成每页 2–6 张、带说明和拍摄时间的 PDF 报告，发给业主或监理。
- **引擎**：pdf-lib + exifr；与 `images-to-pdf` 相邻但作业不同（报告版式 + 逐张说明 + 元数据），不能标 absorb。
- **建议 slug**：`make-a-construction-photo-report-pdf`。

### 5.4 IFC 模型查看（P3）

需新 vendor web-ifc（WASM，体积大），且 5 个以上本地竞品已占位。暂只留池。

---

## 6. 现有工具补能力清单（不新建 URL）

这些能力目前**未实现**，按漏斗规则不能标 `absorb`，词池记 `defer`，落点为现有 slug；实现并上线后，相关词再按 absorb 更新文案。

### 6.1 `how-to-calculate-concrete`（优先级最高）

1. **损耗率输入**（默认 5–10%），体积与袋数同步放大。
2. **袋规格选择**：40 / 60 / 80 lb 预拌（en 默认 80 lb）；公制 25 / 40 / 42.5 / 50 kg（按语种给默认值，写明「以包装标注产量为准」）。
3. **配合比模式（按强度等级 → 水泥袋 + 砂 + 石 + 水）**：
   - zh 默认 C20 / C25 / C30 参考表，注明 JGJ 55-2011 以试配为准；
   - id 默认 K-175 / K-225 / K-250（SNI 7394:2008 系数）；
   - es 默认 f'c 175 / 210 / 250 kg/cm²；
   - ar 默认体积比 1:2:4 / 1:1.5:3（干体积 × 1.54）；
   - 另提供自定义体积比。
4. **形状**：条形基础（周长 × 截面）、柱坑（圆柱 × 个数）、台阶（踏步数 × 宽 × 高 × 深）。
5. **IG**：每种形状各给一道例题；把「预拌袋」和「自拌材料」两条路径并列，说明不能混用。

### 6.2 `unit-converter`（面积）

新增 坪（400/121 m²）、畳（5 种规格，默认 1.62 m²）、亩（10000/15 m²）。ja / zh 文案补换算例题与畳规格差异说明。

### 6.3 `how-to-calculate-tile` / `how-to-calculate-paint`（P3，小改）

- 瓷砖：缝宽（mm）参与计算；每箱片数 → 箱数取整。
- 涂料：门窗扣减（按个数 × 标准面积或自填）；罐规格（1 / 2.5 / 5 / 18 L）取整。

---

## 7. 候选池与优先级（全部 `defer`）

| 优先级 | 候选（建议 slug 或落点） | tier | 主要理由 |
| --- | --- | --- | --- |
| P1 | 混凝土配合比材料 → 落点 `how-to-calculate-concrete` | mid_covered | zh 已有展示；四语种共同需求；无需新 URL |
| P1 | 混凝土预拌袋规格 + 损耗 + 形状（en）→ 落点 `how-to-calculate-concrete` | head | SERP 基线能力，补齐才有竞争资格 |
| P1 | `measure-lengths-and-areas-on-a-pdf-floor-plan` | mid_covered | 复用 pdfjs；与瓷砖 / 涂料页联动 |
| P1 | `stamp-date-and-gps-on-construction-photos` | mid_covered | 复用 exifr + 水印；批量本地组合少 |
| P1 | 坪 / 畳 / 亩 → 落点 `unit-converter` | mid_covered | ja / zh-TW / zh 土地场景；与 square-feet 展示簇相邻 |
| P2 | `calculate-rebar-weight-by-diameter-and-length` | mid_covered | zh 施工页已有排名；可合并 GB 0.00617d² / ASTM #3–#18 / BS 规格 |
| P2 | `make-a-construction-photo-report-pdf` | mid_covered | 复用 pdf-lib；网页端少 |
| P2 | `calculate-bricks-or-blocks-for-a-wall` | mid_covered | id / ru / es 高频；砖、hebel、砂浆一页多材料 |
| P2 | `calculate-roof-pitch-and-rafter-length` | head | 以「数值正确 + 参考表可复核」做 IG；H1 不硬刚头词 |
| P3 | `calculate-drywall-sheets-mud-and-tape` | head | en 头部拥挤 |
| P3 | `calculate-screed-bags-by-thickness` | mid_covered | de 本地；需 DIN 18560-2 厚度提示 |
| P3 | `calculate-strip-foundation-concrete-and-rebar` | mid_covered | ru 竞品带图纸，追赶成本高 |
| P3 | 瓷砖缝宽 / 按箱、涂料门窗 / 罐规格 → 落点现有两页 | head | 小改，补基线 |
| P3 | `view-ifc-bim-model-in-browser` | mid_covered | 新 vendor 体积大；竞品充分 |

**明确不做**：围栏 / 甲板 / 护墙板等按材料拆 10 个变体页（doorway 与 scaled content 风险）；结构构件承载 / 截面设计（安全责任重）；DWG 查看（封闭格式）；造价 / 报价全套 SaaS。

---

## 8. 建议下一步

1. 若只做一件：**给 `how-to-calculate-concrete` 补 §6.1**。这是改现有工具，须走 `tool-coverage-pass`（既有 slug 的相应 phase）与十语重写，并跑 `npm run verify:tool -- --slug=how-to-calculate-concrete`。
2. 新 URL（§5.1 / §5.2）立项前：人工 Google + Bing 前 5–10 核对、Keyword Planner 量级、补齐使用场景表；确认后由用户明确「立项 / 实现 {slug}」再开 `work-tasks/`。
3. 数值型文案（配合比、袋产量、畳规格）上线前逐条对照标准原文或厂商资料，页面注明「参考值，以设计 / 试配 / 包装标注为准」。

---

## 9. 证据链接（抽样）

- 日本坪・畳：[xenuto](https://xenuto.com/tools/tsubo-calc/)、[手軽屋](https://tegaruya.com/tsubo-kansan/)、[itlibra](https://simple.itlibra.com/tsubo)
- 俄语条形基础：[kalk.pro](https://kalk.pro/concrete-base/)、[stroy-calc](https://stroy-calc.ru/raschet-lentochnogo-fundamenta)、[kalk24](https://kalk24.com/fundament/38-raschjot-lentochnogo-fundamenta)
- 中文配合比 / 钢筋：[砼商网参考表](https://www.ccmn.net/xiehui-detail_1-6486.html)、[木鱼查询](https://www.bchrt.com/tools/concrete-mix-ratio-calculator/)、[卡兔钢筋重量](https://calc.cultoo.net/calculators/engineering/rebar-weight-calculator)
- 印尼 K-225 / 砌墙：[indonesiareadymix](https://www.indonesiareadymix.com/campuran-beton-k-225/)、[sipil.uma.ac.id](https://sipil.uma.ac.id/menghitung-takaran-cor-beton-manual-sesuai-sni/)、[artikata hebel](https://www.artikata.com/a/kalkulator-kebutuhan-bata-ringan-hebel/)
- 西语配合比：[planetacalculadoras](https://planetacalculadoras.com/construccion/calculadora-concreto-hormigon/)、[cuevadelcivil](https://www.cuevadelcivil.com/2019/02/dosificacion-de-hormigon-metodo-aci-app.html)
- 阿语混凝土：[snad.io](https://www.snad.io/tools/construction/concrete-calculator)、[hasbaty](https://hasbaty.com/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%83%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%AE%D8%B1%D8%B3%D8%A7%D9%86%D8%A9)
- 德语 Estrich：[deutschland-rechner](https://www.deutschland-rechner.de/estrich-rechner)、[rechenfix](https://www.rechenfix.de/wohnen/estrich-rechner)
- 屋面坡度：[roof-pitchcalculator.com](https://www.roof-pitchcalculator.com/)、[TakeoffCalc](https://takeoffcalc.com/roofing/roof-pitch-calculator)
- 干墙：[Easy Takeoffs](https://easytakeoffs.com/calculators/drywall)、[ProjectCalcs](https://projectcalcs.com/calculators/drywall/)
- IFC：[IFCfiles](https://ifcfiles.com/viewer)、[3dstudio](https://3dstudio.co/tools/ifc-viewer/)
- 竞品清单存档：`docs/competitor-refs/omnicalculator-2026-08-08/lists/construction.md`、`docs/competitor-refs/tooldone-2026-08-08/lists/construction.md`
