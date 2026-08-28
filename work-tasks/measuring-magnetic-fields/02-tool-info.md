# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`measuring-magnetic-fields`  
**路径**：`/tools/measuring-magnetic-fields`  
**主方向**：C  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **measuring magnetic fields**（Planner 1,000–1万，**唯一 H1 核心**）
  2. magnetic field strength / magnetic field calculator / measure magnetic field / measuring magnetic field strength（→ 副标题 + description + FAQ）
  3. magnetic field of magnet / gauss strength of magnet / bar magnet magnetic field / magnet strength chart（→ desc / Use cases / 典型值表）
  4. magnetic field formula / magnetic field strength formula / magnetic flux equation（→ Formula；magnetic moment 只作估算假设一句）
  5. magnetic force / magnetic force formula / magnetic force between two magnets（→ **仅 FAQ**，解释场 vs 力；**不进 H1、不拆 Lorentz 计算器 URL**）
- 用户真实任务：拿到一次磁场测量读数（霍尔探头、高斯计、手机磁力计），换成特斯拉/高斯等单位，对照地磁场与常见磁体量级（magnet strength chart），判断是否超出廉价传感器量程；可选再按条形/圆片磁铁估算轴上场（magnetic field of a magnet），而不是求解洛伦兹力或库仑力。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - 「measuring magnetic fields」：霍尔探头操作文、厂商目录、课堂实验步骤、百科定义。
  - 少量 tesla↔gauss↔oersted 转换器（输入非负值、真空近似 Oe）。
  - 磁铁商店：吸力/气隙计算器 + N 级规格表（同意图是 pull force，不是测量读数）。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 一次 **200 G** 级读数同时给出 T / mT / µT，并标出相对地磁场（~50 µT）的倍数。
  2. **仪器量程**：手机磁力计（µT 级、近钕铁硼易饱和）vs 霍尔探头/高斯计（mT–T），文章只讲原理不让用户对照自己的数字。
  3. **B vs H**：把 Oe 与 G 当成同一物理量时的真空/空气近似与失败条件。
  4. N 级轴向估算与「吸力公斤数」的差别：商店做后者；测量页应把前者当次模块并写误差带。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **①** Formula：magnetic field formula（1 T = 10⁴ G）；magnetic field strength formula（真空 B = μ₀H）；圆片轴上场；flux/moment 边界句 → `#formula`
  - **②** 边界：负值拒绝；Oe 仅真空/空气；探头离面几毫米读数可剧变；非医疗安全结论 → FAQ + Disclaimer
  - **③** Use cases：实验读数换算、磁铁高斯强度 / magnet strength chart、条形磁铁轴上场
  - **④** 典型场强对照表（**磁铁高斯数量级**为主：冰箱磁 / 钕铁硼表面；地磁作弱场对照；MRI 只作数量级，不作设备说明书）
  - **⑤** References：BIPM SI tesla、NIST CODATA μ₀
  - **⑥** 本地：数值不出浏览器；无文件上传
  - **⑧** 固定样例 200 G → 0.02 T
  - **⑨** related ≥ 2
- [x] 长尾：合并进本页。禁止拆 tesla-to-gauss、magnetic-field-calculator、magnetic-force、lorentz-force、coulomb-force、bar-magnet-field、magnet-pull-force-calculator 近义 URL。
- [x] 权威来源 URL：
  - https://www.bipm.org/en/si-brochure（tesla 为磁通密度 SI 单位）
  - https://physics.nist.gov/cgi-bin/cuu/Value?mu0（真空磁导率 μ₀）
  - https://www.ngdc.noaa.gov/geomag/faqgeom.shtml（地磁场量级语境）
- [x] 行业/场景 Use case 文案草稿：
  1. 实验员把高斯计 200 G 记成 0.02 T 写入报告（measure magnetic field / measuring magnetic field strength）。
  2. 查 magnetic field of a magnet / gauss strength of a magnet：对照 magnet strength chart（地磁 vs 冰箱磁 vs 钕铁硼数量级），避免把手机饱和读数当成表面场。
  3. 条形磁铁（bar magnet magnetic field）：输入尺寸与离面距离，得到轴上场粗估；FAQ 说明这不是两磁铁吸力，也不是洛伦兹力作业题。
- [x] 边界/失败案例草稿：空/非数字；负数；Oe 模式未勾选真空近似则不输出 H；z&lt;0；牌号表外的「N72」拒绝；声明非植入物/MRI 安全工具。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写死 200 G → 0.02 T（= 20 mT = 2×10⁴ µT，gauss strength 样例）；FAQ 写 how to measure magnetic field strength、magnetic field formula（T↔G）、magnet strength chart、magnetic force vs field（含 two magnets，明确不做 Lorentz / coulomb / tension）。
- [x] Related / 主题内链计划（≥2）：`how-to-calculate-ohms-law`、`how-to-calculate-density`。实现时 catalog `related` 同此；**不**加 `magnet-link-decoder`。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Formula：magnetic field formula（T↔G）；magnetic field strength formula（真空 B=μ₀H）；圆片轴上场；flux/moment 各一句边界 |
| 2 | 边界/失败 | 非法输入、Oe 假设、探头位置、非医疗；不做 Lorentz/库仑/张力 |
| 3 | 场景语境 | Use cases ×3（实验读数 / 磁铁高斯强度对照表 / 条形磁铁轴上场） |
| 4 | 对照表 | magnet strength chart：典型场强数量级 |
| 5 | 权威引用 | BIPM SI、NIST μ₀、NOAA 地磁 FAQ |
| 6 | 本地隐私 | 浏览器内计算；无上传（非文件工具，仍一句说清） |
| 7 | 多语言 | 实现回合按 `03` 逐语重写 |
| 8 | 数值示例 | 200 G → 0.02 T |
| 9 | 主题内链 | ohms-law、density |

**硬性勾选（上线至少 3）**：① ② ③ ④ ⑤ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 物理计算器 · 用户确认立项 · 漏斗主词 pivot |
| 场景与行业 | 实验室记录、物理课、DIY 磁力计、业余永磁粗估 |
| 技术（包、Tier、本地处理） | Tier 0 原生 JS；`localProcessing: true`；无文件、无 WASM |
| Title (en) | Measuring Magnetic Fields — Field strength calculator |
| Description 要点 | Measuring magnetic fields: enter a Hall-probe or gaussmeter reading and convert field strength (sample: 200 G → 0.02 T). Compare gauss strength of a magnet with a simple magnet strength chart, or estimate the axial field of a bar magnet. Numbers stay on your device and are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | ① How do I measure a magnetic field（霍尔探头/高斯计/手机：摆放、量程、饱和；再换算 200 G 样例）？② Magnetic field formula / magnetic field strength formula（T↔G 与真空 B=μ₀H）？③ Gauss strength of a magnet 与 magnet strength chart（常见磁铁高斯数量级，不是吸力公斤）？④ Magnetic force vs magnetic field（含 between two magnets；一句话说明本页算的是场不是 F=qvB）？⑤ Bar magnet magnetic field / field lines（定性：轴上场随距离下降；无交互磁力线图） |
| Disclaimer / References | Disclaimer：估算非标定测量；非医疗/植入物/MRI 安全结论。Refs：BIPM、NIST μ₀、NOAA 地磁 FAQ |
| related | `how-to-calculate-ohms-law`, `how-to-calculate-density` |
| 验收 | `npm run coverage:gate -- --slug=measuring-magnetic-fields --phase=0b`（本步）；实现后 phase=all + `lint:seo` |
| 工期粗估 | 实现 + 十语检索向重写约 1.5–2 d |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |
| catalog 建议 | `category: calculator`；`scenario: physics`；`subject: number`；`faqPrefix: tool_measuring_magnetic_fields`；`ymyl: false` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-28 |
| slug 结论 | **保留** `measuring-magnetic-fields`（相对 Planner 主词 measuring magnetic fields；不改为 magnetic-force 或 magnetic-field-of-magnet，避免头词换皮 doorway）。不与 `magnet-link-decoder` 撞车。 |
| 主检索词 → title/H1 | 核心 **measuring magnetic fields**（1,000–1万）→ en H1：**Measuring Magnetic Fields — Field strength calculator**。破折号前锁定主词；副标题吸收 **magnetic field strength** + **magnetic field calculator**（均为 100–1,000），结果向、非 Tesla/Gauss/Oersted/N52 参数目录。zh：**测量磁场 — 磁场强度计算器**。 |
| 次要关键词 → desc / FAQ / Use cases | **同页吸收（词表）**：**magnetic field of magnet**（1,000–1万）→ description 前半 + Use case「磁铁的场」。**measure magnetic field** / **measuring magnetic field strength** → FAQ①。**gauss strength of magnet** → description + Example 200 G。**magnet strength chart** → 典型值表（对照表）。**bar magnet magnetic field** → Use case③ + 次模式。**magnetic field formula** / **magnetic field strength formula** / **magnetic flux equation** → Formula（flux 一句 Φ=BA 适用边界）。**magnetic moment formula** → Formula 一句「估算用 Br，不是完整磁矩求解器」。**magnetic force** / **magnetic force formula** / **magnetic force between two magnets** / **magnetic force definition** → **仅 FAQ④**（场 vs 力）。**field lines of a magnet** / **magnetic field diagram** / **uniform magnetic field** → FAQ⑤。**force measurement** 只在磁场读数语境出现在 FAQ①，不当力学测力计。**明确不吸收进文案/不拆 URL**：coulomb force、electric force formula、calculating tension force、how to calculate force、physics force diagrams、electromagnet diagram、electromagnetic force、right hand rule magnetic force、magnetic lorentz force（FAQ④ 一句「本页不计算洛伦兹力」即可）。 |
| 用户搜索习惯判断 | Planner 头词三件套里，用户要「测/读磁场」会搜 measuring magnetic fields / measure magnetic field / magnetic field calculator；要「磁铁旁边场有多强」会搜 magnetic field of magnet / gauss strength / bar magnet；要「F=qvB / 库仑 / 张力」是作业向，与本工具任务不同，故 H1 不改 magnetic force。副标题用 Field strength calculator，不堆公式名。 |
| 优化摘要 | 2026-08-28 词表复核：H1 从「Convert tesla and gauss readings」改为 **Field strength calculator**，以 measuring magnetic fields 为核心并吸收 field strength / calculator 量级词；desc 写入 magnetic field of a magnet、gauss strength、magnet strength chart、200 G 样例；force 簇只进 FAQ；库仑/张力/电学力/洛伦兹作业题排除，禁止拆页。来源 `docs/seo/keywords/measuring-magnet-fields/keywords-search-volumns.txt`。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=measuring-magnetic-fields --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 用户意图审查（标 ready 前必做）

> 详表见 `notes.md`「用户意图审查」。规则：`work-tasks-tool-brief.mdc`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-28 |
| 总判 | 主词「怎么测」经 How 优化后**满足**；N 级估算为**可控超出**（次 UI）；magnetic force **有意不满足** |
| 主词搜索者任务 | 选仪器、摆放探头、读单位、把读数换成 T/G 并对照磁铁大概多少高斯 |
| 满足之处 | H1 锁定 measuring magnetic fields；换算 + 200 G 样例；How 先写仪器与量程再换算 |
| 超出 / 应划边界 | 估算模式不得抢首屏；Φ=BA/磁矩各一句；desc 不含 Lorentz 元叙述 |
| 缺口与已做优化 | How 五步改为测法优先；FAQ① 补摆放/饱和；desc 去掉作业器自述；chart 以磁铁高斯为主 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已回写 | |

## 交互规格（给实现用）

- 输入：
  - **主模式 Convert reading**：数值 + 源单位（T, mT, µT, nT, G, mG, kG）。可选勾选「真空/空气下同时显示 H」（A/m 与 Oe）。
  - **次模式 Estimate from magnet**（同页，默认不抢首屏焦点）：牌号 N35/N38/N40/N42/N45/N48/N50/N52（用表内 Br 中点）；形状圆片（直径 mm、厚度 mm）或方块（长×宽×厚 mm）；轴上离表面距离 z（mm，z≥0）。
- 输出：
  - Convert：同一 B 的 T / mT / µT / nT / G / mG / kG；可选 H(A/m)、Oe。一行对照：「约等于地磁场 ~50 µT 的 N 倍」（50 µT 为教学用中点，Rules 写 25–65 µT 范围）。
  - Estimate：轴上场 B（T 与 G）；注明公式名与「非标定、梯度大」警告。不输出吸力公斤数作为主结果。
- 核心规则 / 算法：
  - 换算（**magnetic field formula** 对用户可见）：1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT；1 G = 10⁻⁴ T；1 kG = 0.1 T；1 mG = 10⁻⁷ T。
  - **magnetic field strength formula**（真空/空气）：B(T) = μ₀ H(A/m)，μ₀ = 4π×10⁻⁷ N·A⁻²；1 Oe ≈ 10³/(4π) A/m ≈ 79.577 A/m；在该近似下 1 G 对应 1 Oe（须在 UI 与 Rules 写清「仅真空/空气、B 与 H 不是同一物理量」）。
  - **magnetic flux equation**（Rules 一句，不另做通量计算器）：均匀场且面与 B 垂直时 Φ = B A；本工具输入输出的是 B，不是 Φ。
  - **magnetic moment formula**（Rules 一句）：次模式用牌号剩磁 Br 与几何，不是求解磁偶极矩 m 的作业器。
  - 圆片（均匀轴向磁化）表面外轴上场：  
    `B_z(z) = (Br/2) * ( (L+z)/sqrt(R²+(L+z)²) - z/sqrt(R²+z²) )`  
    其中 L、R、z 为米；Br 为剩磁（T）。方块用等效或沿厚向的简化（实现时在 Rules 写所用近似；勿假装有限元）。条形磁铁（bar magnet）走同一估算入口。
  - N 级 Br 中点（T，实现用常量表）：N35 1.19、N38 1.24、N40 1.27、N42 1.30、N45 1.35、N48 1.40、N50 1.43、N52 1.45（与常见厂商区间中点一致；Rules 写区间而非唯一真值）。
- 失败与边界行为：NaN/空 → 明确错误；负数 → 拒绝（磁场读数本工具按标量大小）；z&lt;0 → 拒绝；未知牌号 → 拒绝；未勾选真空近似时不显示 Oe/A/m。结果变化时同步更新可见数字，失败不得静默空白。
- 示例 Input → Output（与 H2 Example 一致）：**200 G**（霍尔探头常见高斯档）→ **0.02 T** = **20 mT** = **2×10⁴ µT** = **200 G**；相对 ~50 µT 约 **400×**。
- **进页样例（必填）**：默认填 Convert = 200、单位 G；初始化结束调用与 Load sample 相同路径，结果区显示 0.02 T 等真实数字。H2 Example 使用同一组数。次模式不自动覆盖主结果。无写操作、无密钥，不适用「禁止自动执行」例外。

### How it works 步骤草稿（实现时 `how_item_*`）

1. Pick an instrument that matches the job: a gaussmeter or Hall probe for magnets (mT–T), a phone magnetometer only for weak fields like Earth’s ~50 µT.
2. Place the sensor on the axis you care about, note the distance from the face, and watch for saturation (cheap sensors peg near a neodymium magnet).
3. Read the number and the unit on the device (gauss or tesla).
4. Convert that reading here and compare it with the magnet strength chart (sample: 200 G → 0.02 T).
5. If you do not have a meter yet, optionally estimate the magnetic field of a bar or disc magnet from grade and size — that is an estimate, not a calibrated measurement.

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成上一节「清单前检索覆盖优化」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（YMYL 必备）— 本工具非 YMYL，仍须安全/估算边界 disclaimer
- [x] `03-locale-briefs.md` 已填（实现十语前）
