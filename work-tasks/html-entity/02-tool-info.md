# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`html-entity`（不新建 `html-entity-encoder` / `html-entity-decoder` / `html-escape` 近义薄页）  
**路径**：`/tools/html-entity`  
**主方向**：A（方向 A.1 文本与文档格式 · Tier 0 原生 / 可选 `he`）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐方向：[A.1 HTML 实体编解码](../../docs/2026-07-28-tool-direction.md)；包调研：[§1.1 `he`](../../docs/2026-07-09-js-tool-packages-survey.md)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. html entity encoder / HTML 实体编码  
  2. html entity decoder / HTML 实体解码  
  3. html escape unescape / HTML 转义 反转义  
  4. encode html entities online / decode `&amp;` `&#39;`（场景意图 → Use cases/FAQ，**不拆页**）  
  5. unicode to html entity / named vs numeric entity（边界意图 → Rules/FAQ）
- 用户真实任务：把含 `<`、`&`、引号或 emoji 的文本转成可在 HTML 中安全显示的实体串；或把 `&lt;p&gt;`、`&#169;`、`&copy;` 等还原成可读字符；需要搞清**命名实体 vs 十进制/十六进制数字实体、编码范围、双重编码、属性值 vs 文本节点**这些坑。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双向或单向粘贴框、即时转换、Copy/Clear、「浏览器本地/隐私」口号；部分支持 encode/decode 切换；少数提供「仅编码特殊字符」或「全 Unicode 转数字实体」选项；解码多支持 `&name;` 与 `&#…;`/`&#x…;`。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **编码范围策略**：「全量转义 / 仅非 ASCII / 最小 HTML 安全集（`<>&"'`）」差在哪、何时用哪种——竞品常只有一个开关或默认行为不明  
  2. **命名 vs 数字实体**：`&copy;` vs `&#169;` vs `&#xA9;` 何时等价、编码输出该用哪种、解码对未知命名实体怎么处理  
  3. **双重编码**：`&amp;amp;`、对已实体化字符串再 encode 会发生什么；decode 一次 vs 多次  
  4. **上下文差异**：HTML **属性值** vs **文本节点** vs **脚本/样式** 中必须转义的字符集不完全相同——SERP 很少区分  
  5. **无效/畸形实体**：`&amp`、`&#xZZ;`、孤立 `&` 的容错 vs 严格模式  
  6. **隐私诚实边界**：文本不上传 vs 若 lazy load `he` 走 CDN 的区别（多数只喊「100% private」）  
  7. **多语言检索向正文**：多数英文或机翻；本站十语 brief + 独立重写是可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：编码/解码步骤 + **编码范围对照表**（minimal / non-ASCII / all）+ 命名 vs 数字实体说明 → `#rules`  
  - **②** 边界：双重编码、无效实体、孤立 `&`、空输入、超软上限 → `FAQ` + 结果区提示  
  - **③** Use cases：前端模板/API 响应去实体化；内容入库前 escape；邮件/HTML 片段含 emoji 转数字实体  
  - **④** 对照表：编码范围 × 输出形式（named / decimal / hex）；属性 vs 文本节点最小集 → Rules  
  - **⑤** References：WHATWG HTML 字符引用、W3C 实体列表、`he`（若使用）  
  - **⑥** 本地隐私：粘贴不离开浏览器；FAQ 区分文本与 CDN 载库  
  - **⑦** 十语 locale brief + 检索向重写 + ≥3 轮（见 `03`）  
  - **⑧** 固定双向 Example（encode 与 decode 各一组；含 `&copy;`、`&#x1F600;`、含 `<script>` 边界例）  
  - **⑨** Related ≥2 → 页底内链
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页（方向 Tab + 选项）**。`html entity encoder`、`html entity decoder`、`html escape`、`unicode to html entity` 都是同一编解码任务的方向/格式变体，靠 Tab + 编码范围选项 + Use cases + FAQ 覆盖；单独建页易成 doorway / scaled content。
- [x] 权威来源 URL：  
  - https://html.spec.whatwg.org/multipage/parsing.html#character-references  
  - https://www.w3.org/TR/html4/sgml/entities.html  
  - https://github.com/mathiasbynens/he（若采用 `he`）
- [x] 行业/场景 Use case 文案草稿：  
  1. 前端：API 返回的 `&lt;div&gt;…` 批量 decode 后调试或进 Diff  
  2. 内容/CMS：标题/摘要含 `&` 或 `<` 时 encode 再写入 HTML 模板  
  3. 邮件/国际化：emoji 或特殊符号转 `&#x…;` 以兼容旧客户端
- [x] 边界/失败案例草稿：空输入；双重 encode/decode；无效命名实体（严格 vs 宽松）；`&#` 缺分号；超大粘贴（软上限 ~1MB）；decode 结果**仅作文本展示**（不用 `innerHTML` 渲染不可信 HTML）
- [x] 结果区信息如何落到可索引 Example / FAQ：双向固定示例 + FAQ（编码范围、命名/数字实体、双重编码、属性 vs 文本、隐私、无效实体）
- [x] Related / 主题内链计划（≥2）：`markdown-to-html`，`text-diff`（可选第三 `website-headers`）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：编码范围 + 实体形式 + 解码算法说明 |
| 2 | 边界/失败 | FAQ + 结果区：双重编码、无效实体、孤立 `&` |
| 3 | 场景语境 | Use cases ×3（API 调试 / CMS 入库 / 邮件 emoji） |
| 4 | 对照表 | Rules：minimal / non-ASCII / all × named / decimal / hex |
| 5 | 权威引用 | References → WHATWG、W3C 实体、`he`（若用） |
| 6 | 本地隐私 | How/FAQ：内容不上传；诚实说明 CDN（若 lazy `he`） |
| 7 | 多语言 | 十语 brief + 检索向重写 + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：双向固定 Input→Output（含 `&copy;`、`&#x1F600;`） |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/文本 · 方向 A.1 · P1（方向文档 A 候选下一批） |
| 场景与行业 | 前端 / 内容编辑 / 邮件模板：HTML 字符引用编解码 |
| 技术（包、Tier、本地处理） | **Tier 0** 默认零依赖（原生 encode 表 + DOMParser/`textarea` decode）；可选 lazy `he` 补全 HTML5 命名实体；双向 Tab；**粘贴纯客户端、不上传**；decode 预览仅用 `textContent` 展示 |
| Title (en) | `HTML Entity Encoder & Decoder — Escape, Unescape & Local \| {Brand}` |
| Description 要点（步骤/公式 + 示例；≥120 落地时写满） | ≥120；步骤（选 Encode/Decode→粘贴→选范围/形式→复制）+ 命名/数字实体与双重编码说明 + API 调试示例；十语检索向（含 html escape、decode entities） |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；应用名体现双向） |
| FAQ 要点（≥3） | 编码范围有何区别；`&copy;` 与 `&#169;` 是否一样；双重 encode 怎么办；属性值与文本节点转义是否相同；内容是否上传（含 CDN）；无效实体 strict/lenient |
| Disclaimer / References | 非 YMYL；WHATWG HTML、W3C entities、可选 `he` |
| related | `markdown-to-html`, `text-diff` |
| 验收 | `npm run lint:seo`；`03` ≥3 轮；两方向可交互；各编码范围与实体形式选项有效；decode 不执行危险 HTML 渲染；无独立 encoder/decoder 薄页；README 清单登记 |
| 工期粗估 | ~0.5–1d（Tab + Tier 0 逻辑 + Rules/IG 文案 + 十语检索向） |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
  - **模式 Tab / 切换**：`Encode` | `Decode`（默认 Encode，对齐「html entity encoder」主检索）
  - 左侧 textarea（源文本）+ 右侧输出（等宽）；Decode 模式下可选第三行「解码预览」（纯文本 `textContent`，非 HTML 渲染）
  - **Encode 选项**：
    - **编码范围**：Minimal（`< > & " '`）/ Non-ASCII only（ASCII 原样，其余 → 实体）/ All（全部可转义字符）
    - **输出形式**：Named when available（如 `&copy;`）/ Decimal（`&#169;`）/ Hex（`&#xA9;`）——Minimal 范围下 Named 与 Decimal 可并存说明
  - **Decode 选项**：
    - **Strictness**：Strict（畸形实体报错或保留原样）/ Lenient（尽力解码，未知命名实体保留）
    - **Decode passes**：Once / Until stable（防双重编码误操作，带上限防循环）
  - 操作：Convert（可即时 debounce）/ Copy / Clear / Load sample
- 输出：
  - 成功：转义或还原后的字符串 + 轻量摘要（字符数、实体个数估计）
  - 失败：简短错误（空输入、strict 下无效实体）；不静默吞掉用户输入
- 核心规则 / 算法：
  - **Encode（Tier 0）**：
    - Minimal：`& → &amp;`，`< → &lt;`，`> → &gt;`，`" → &quot;`，`' → &#39;`（或 `&apos;` 并在 Rules 说明 HTML5 差异）
    - Non-ASCII：码点 &gt; 127 → 按选定形式输出 `&#…;` 或 `&#x…;`
    - All：Minimal + Non-ASCII + 其余 XML/HTML 特殊空白（可选，Rules 说明）
    - Named：内置常用表（`&copy;`、`&nbsp;`、`&lt;` 等）；完整表可选 lazy `he.encode(text, { useNamedEntities: true })`
  - **Decode（Tier 0）**：
    - 优先用 `DOMParser` 解析片段或 `textarea` trick：`textarea.innerHTML = entities; return textarea.value`（**仅用于解码**，不把结果再注入页面 DOM）
    - Strict：检测未闭合 `&…`、非法码点，返回错误信息
    - Lenient：未知 `&name;` 保留；数字实体非法则保留原串
    - 「Until stable」：重复 decode 直到不变或达 N 次（FAQ 说明双重编码场景）
- 失败与边界行为：
  - 空输入 → 输出清空或轻提示
  - 双重 encode：Example 展示 `Tom & Jerry` → encode → 再 encode 得 `Tom &amp;amp; Jerry`
  - 超大粘贴（建议 ~1MB 软上限）→ 警告；可切手动 Convert
  - **安全**：永不把用户 decode 结果用 `innerHTML` 插入页面；预览区仅 `textContent`
- 示例 Input → Output：
  - Encode（Minimal + Named）：
    - Input：`Tom & Jerry <3 "quotes"`
    - Output：`Tom &amp; Jerry &lt;3 &quot;quotes&quot;`
  - Encode（Non-ASCII + Hex）：
    - Input：`© 微笑 😀`
    - Output：`&#xA9; &#x5FAE;&#x7B11; &#x1F600;`（或等价 decimal，与 UI 选项一致）
  - Decode：
    - Input：`&lt;p&gt;Tom &amp; Jerry &copy; &#x1F600;&lt;/p&gt;`
    - Output：`<p>Tom & Jerry © 😀</p>`（预览区 textContent 展示，不渲染为 HTML）

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 一句话摘要（双向表述）
- [ ] 首屏工具交互区（Tab + Encode/Decode 选项）
- [ ] How it works
- [ ] Formula / Rules（编码范围 + 实体形式 + 双重编码 + 属性 vs 文本）
- [ ] Example（双向固定文案；含 emoji / 双重编码边界例）
- [ ] Use cases（2–3：API 调试 / CMS / 邮件 emoji）
- [ ] FAQ ≥3（编码范围、命名/数字实体、双重编码、属性 vs 文本、隐私、无效实体）
- [ ] Related tools ≥2（`markdown-to-html`, `text-diff`）
- [ ] References ≥1（WHATWG / W3C / 可选 `he`）
- [ ] Disclaimer — 非 YMYL，隐私在 How/FAQ
- [ ] `03-locale-briefs.md` 已填（实现十语前）
- [ ] README 工具清单登记（中英各一条，与 `tool-catalog.json` 一致）
- [ ] `tool-catalog.json` 注册（`faqPrefix: tool_html_entity`；`related` ≥ 2）
- [ ] **不**注册独立 `html-entity-encoder` / `html-entity-decoder` / `html-escape` slug

## 复审修正（2026-09-05）

- `decodeOnce()` 在写入游离 textarea 前先把裸 `<` 转成 `&lt;`：否则输入含 `</textarea>` 时 RCDATA 解析提前结束，「直到稳定」多轮解码会静默丢弃后续文本。
- `rules_item_3` 十语补充「裸 < > 按字面保留」。
