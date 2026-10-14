# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-circle`  
**路径**：`/tools/how-to-calculate-circle`  
**主方向**：C  
**catalog 分类**：`calculator`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #27，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：How 不足 3 步、无 Why choose、正文 < 350 词、九语为旧稿。en FAQ 4 条为「Sample? / Diameter? / Exact π? / Advice?」式两词问答，Formula 列表含「Pair with triangle / volume tools」这类非内容条目。功能缺口：

- 只能输入半径；「已知直径 / 周长 / 面积求半径」是同意图高频追问（尤其「radius from area」「diameter from circumference」）却完全无法完成；
- 无单位：面积不标平方单位，用户无法确认 cm 与 cm² 的关系；
- π 固定为 Math.PI：中小学课本与考试常要求 3.14（中、日）或 22/7（印度、印尼），结果对不上答案；
- 无过程、无「含 π」精确答案、无半圆、无面积换算。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：作业里由半径 / 直径求面积和周长（按老师要求的 π 取值并写出步骤）；或者手里只有周长（卷尺绕一圈）或面积，反求半径 / 直径
- [x] 竞品（Omni circle calculator、Calculator.net、Mathsisfun、各教科书页）：多数可从任一量求其余；少有 3.14 / 22/7 切换；几乎都不给代入过程与「含 π」形式；半圆周长常漏掉直径那一段
- [x] 缺口：π 取值切换；逐行代入过程；精确 π 形式；半圆面积与周长；面积公制 / 英制换算；生活场景（树干、花坛、比萨、烤模）
- [x] 增益：① 已知量四选一（r / d / C / A）② 长度 8 单位（mm·cm·m·km·in·ft·yd·mi），面积自动为平方单位 ③ π / 3.14 / 22/7 ④ 小数位 2 / 4 / 6 ⑤ 每个结果附代入过程（最多 6 位有效数字）⑥ 已知 r 或 d 且用精确 π 时给出 49π 式答案 ⑦ 半圆面积与周长（πr + 2r）⑧ 面积换算 cm²、m²、in²、ft²（5 位有效数字）⑨ Example：r = 7 cm → 49π ≈ 153.94 cm²、14π ≈ 43.98 cm；22/7 → 154、44；3.14 → 153.86、43.96；树干周长 100 cm → 直径 31.83 cm ⑩ FAQ ×7 ⑪ 权威引用（Wolfram MathWorld — Circle；Wikipedia — Approximations of π）
- [x] Related：`how-to-calculate-triangle-area`（另一常见平面图形）、`how-to-calculate-volume`（圆柱 / 球体积要用到圆面积）、`square-feet`（圆形区域面积换算平方英尺）、`how-to-calculate-pythagorean-theorem`（圆内接、弦长等几何作业常一起用）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | 纯前端；Intl.NumberFormat（固定小数位 + 有效数字）；`page.style: opts` |
| Title (en) | Circle Calculator — Area and Circumference from Radius or Diameter, or Radius from Area or Circumference |
| Description (en) | Calculate a circle's area and circumference from the radius or diameter, or find the radius from the area or circumference, with every step shown. Choose π, 3.14 or 22/7. Example: r = 7 cm → A = 49π ≈ 153.94 cm², C = 14π ≈ 43.98 cm. |
| related | how-to-calculate-triangle-area, how-to-calculate-volume, square-feet, how-to-calculate-pythagorean-theorem |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-circle`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Circle Calculator — Area and Circumference from Radius or Diameter, or Radius from Area or Circumference**；他语按 03 当地搜法（圆的面积怎么算、円の面積の求め方、área de un círculo、Kreisfläche berechnen、aire d’un disque、luas lingkaran 等） |
| 次要关键词 → desc/FAQ | area of a circle formula → FAQ q1 + Formula；circumference formula → FAQ q2；radius from area → 已知量「Area」+ FAQ q3；diameter from circumference → 已知量「Circumference」+ FAQ q4 + Example；π vs 3.14 vs 22/7 → π 下拉 + FAQ q5；semicircle area / perimeter → 半圆行 + FAQ q6；pizza size comparison → FAQ q7 + Use case 4 |
| 用户搜索习惯判断 | 「circle calculator」「area of a circle」是结果型主词；H1 写清两个方向（由 r / d 求 A、C；由 A / C 反求 r），不把 r、d、C、A 四项串成参数枚举 |
| 优化摘要 | 保留 slug；H1 由「Circle Calculator — Area and Circumference」扩为正向 + 反向；desc 写步骤 + π 选项 + 可验证例子；FAQ 由 4 条两词问答扩为 7 条 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| circle calculator / area of a circle / area of circle formula | 吸（主词） | title / H1；How；Formula；FAQ q1 |
| circumference of a circle / circumference formula | 吸 | title；FAQ q2；Formula item 1 |
| area of a circle with diameter | 吸 | 已知量「Diameter」；FAQ q1 |
| radius from area / how to find radius of a circle | 吸 | 已知量「Area」；FAQ q3 |
| diameter from circumference / how to measure diameter of a tree | 吸 | 已知量「Circumference」；FAQ q4；Example；Use case 2 |
| area from circumference | 吸 | 已知量「Circumference」→ A = C² ÷ 4π；Formula item 2 |
| area of a circle in terms of π / exact answer | 吸 | 「In terms of π」行 |
| π = 3.14 / 22/7 circle area | 吸 | π 下拉；FAQ q5；Formula item 4 |
| semicircle area / perimeter of a semicircle | 吸 | 半圆两行；FAQ q6；Formula item 5 |
| cm² to m² / in² to ft² (circle area) | 吸 | 面积换算表；Formula item 5 |
| pizza size comparison / cake tin size | 吸 | FAQ q7；Use case 4 |
| arc length / sector area | **不吸**（需圆心角，另属扇形计算） | — |
| circle equation (x − h)² + (y − k)² = r² | **不吸**（解析几何，另一意图） | — |
| volume of a cylinder / sphere | **不吸**（交给 `how-to-calculate-volume`） | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 本工具无独立 Planner 文件；主词与长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 圆面积与周长计算器，仍成立 |
| 主词搜索者任务 | 「由半径 / 直径算面积和周长并写出步骤」——改写前只能输半径、π 固定、无单位、无过程 → **部分满足**；改写后四向求解、π 三选一、单位、过程、π 形式、半圆、换算 → **满足** |
| 超出 | 半圆与面积换算放在主结果下方，不干扰四个主值 |
| 有意不满足 | 扇形 / 弧长、圆方程、立体体积：未吸 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 已知量：半径（默认）/ 直径 / 周长 / 面积；数值栏标签随之切换
- 单位：mm / cm（默认）/ m / km / in / ft / yd / mi；面积单位 = 所选单位²
- π：π（Math.PI，默认）/ 3.14 / 22/7；过程行中 π 写作「π」「3.14」「22/7」
- 小数位：2（默认）/ 4 / 6；绝对值 ≥ 1e12 或小于 10^-小数位 时改用科学记数
- 结果：r、d、C、A 四行（已知量高亮）；每行过程（最多 6 位有效数字）；已知 r / d 且 π 精确时显示「A = r²π · C = dπ」；半圆面积 A ÷ 2、半圆周长 πr + 2r；面积换算 cm²、m²、in²、ft²（5 位有效数字，避免固定小数把 0.0154 m² 截成 0.02）
- 报错：非数字；≤ 0
- 输入即时重算；改单位 / π / 小数位时若已有结果立即重算；切换已知量时若有数值立即重算
- 样例：r = 7 cm、π、2 位 → d 14.00 cm、C 43.98 cm、A 153.94 cm²、49π / 14π、半圆 76.97 cm² / 35.99 cm、0.015394 m²；进页自动运行
- Clear：清空数值与结果，选项恢复默认，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×4 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
