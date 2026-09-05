# 02 — 工具信息定稿

**状态**：`implemented`
**slug**：`magnet-link-decoder`
**路径**：`/tools/magnet-link-decoder`
**主方向**：A（URI parser · Tier 0 原生）
**YMYL**：否

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. magnet link decoder
  2. magnet link parser
  3. decode magnet URI
  4. magnet info hash extractor
  5. torrent magnet link checker
- 用户真实任务：粘贴 magnet URI，不打开 torrent 客户端，不触发下载，直接查看 display name、info hash、tracker URLs、web seeds、exact sources、size、peer hints 和格式警告。
- [x] 竞品 SERP 前 5–10 常见内容：单输入框解码、简单展示 `xt/dn/tr`、部分说明 magnet link 组成，少数提供 torrent 下载或转 `.torrent`。
- [x] 它们没讲清什么？（≥3 条缺口）
  - 很多页把“decode”与“download / convert to torrent”混在一起，边界不清。
  - 对重复 `tr` tracker、多个 `xt`、v1 `btih` 与 v2 `btmh` 的区别解释不足。
  - 百分号编码、`+`、非法 `%`、空参数、重复参数的解析规则少有可见说明。
  - 40-char hex、32-char base32、v2 multihash 形态校验常缺失。
  - 隐私边界不清：是否会上传 magnet link 或联系 tracker。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **① 公式/规则**：Rules 表解释 `xt/dn/tr/xl/ws/xs/x.pe`，以及 repeated params 处理。
  - **② 边界/失败**：FAQ / warning 区说明非 magnet URI、缺 `xt`、非法 hash、malformed percent escape、tracker URL 不合法。
  - **③ 场景语境**：Use cases 写开发调试、审核链接、整理 tracker、教学说明。
  - **④ 对照表**：v1 `urn:btih` 40 hex / 32 base32 与 v2 `urn:btmh` 对照。
  - **⑤ 权威引用**：BEP 9 magnet URI format、W3C Magnet URI scheme note、MDN URI decoding docs。
  - **⑥ 本地隐私**：页面说明只解析文本，不上传、不联网、不连 tracker/DHT/peer。
  - **⑧ 数值示例**：固定 sample magnet → `btih` hash、display name、2 个 trackers、size bytes。
  - **⑨ 主题内链**：Related ≥2：`base64`、`file-hash`、`jwt-decoder`。
- [x] 长尾：合并进本页模块。`magnet link parser`、`info hash extractor`、`tracker viewer` 是同一解析任务的变体；拆页会变 thin URL / doorway。
- [x] 权威来源 URL：
  - https://www.bittorrent.org/beps/bep_0009.html
  - https://www.w3.org/wiki/UriSchemes/magnet
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
- [x] 行业/场景 Use case 文案草稿：
  - Developer debugging：inspect a generated magnet URI before shipping a link.
  - Moderation / support：see whether a pasted link exposes trackers or peer hints without opening a client.
  - Documentation：explain `xt`, `dn`, and repeated `tr` values with a safe sample.
- [x] 边界/失败案例草稿：
  - Input is not `magnet:?`.
  - Missing or unsupported `xt`.
  - `btih` not 40 hex or 32 base32.
  - malformed `%` escape causes decode warning but raw value remains visible.
  - Tracker / web seed is not a URL-like value.
  - Tool does **not** fetch metadata, download content, resolve peers, or verify file legality.
- [x] 结果区信息如何落到可索引 Example / FAQ：
  - Example section uses the same default sample and lists expected field counts.
  - FAQ covers “Does this download anything?”, “What is xt?”, “Why are there multiple tr values?”, “Can this convert magnet to torrent?”.
- [x] Related / 主题内链计划（≥2）：`base64`, `file-hash`, `jwt-decoder`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：magnet query 参数、重复参数、decode 规则、hash shape 校验 |
| 2 | 边界/失败 | Warnings + FAQ：非 magnet、缺 `xt`、非法 hash、malformed URI、no download |
| 3 | 场景语境 | Use cases：开发调试、链接审核、tracker 整理、教学说明 |
| 4 | 对照表 | `btih` v1 hex/base32 vs `btmh` v2 multihash；字段表 |
| 5 | 权威引用 | BEP 9、W3C Magnet URI scheme note、MDN URI decode |
| 6 | 本地隐私 | FAQ/description：magnet text stays in browser; no tracker/DHT/peer requests |
| 7 | 多语言 | 实现阶段按 `03` 十语 brief 重写；非脚本同构灌语 |
| 8 | 数值示例 | 固定 sample magnet → hash/display name/2 trackers/size bytes |
| 9 | 主题内链 | Related：`base64`, `file-hash`, `jwt-decoder` |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | Developer / data inspection · P1 |
| 场景与行业 | 开发者、内容审核、技术支持：检查 magnet URI 字段 |
| 技术（包、Tier、本地处理） | Tier 0：原生 `URL` / `URLSearchParams`，decode fallback，regex hash 校验；纯浏览器；不上传、不联网 |
| Title (en) | `Magnet Link Decoder — Parse Info Hash and Trackers Locally \| {Brand}` |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | Paste a magnet URI, decode percent-encoded fields, group repeated trackers, and inspect `xt`, `dn`, `xl`, `ws`, `xs`, and `x.pe` locally. Example: a sample Ubuntu-style magnet shows one `btih` info hash, display name, byte size, and two tracker URLs. No metadata fetch, no torrent download, no tracker request. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | Does this download anything? What does `xt=urn:btih` mean? Why are there multiple `tr` trackers? Can this convert a magnet link to a `.torrent` file? Is my link uploaded? |
| Disclaimer / References | Disclaimer: inspection only; no download, no metadata retrieval, no legal/content verification. References: BEP 9, W3C Magnet URI scheme, MDN URI decode. |
| related | `base64`, `file-hash`, `jwt-decoder` |
| 验收 | `npm run coverage:gate -- --slug=magnet-link-decoder --phase=0b`; 实现后 `npm run verify:tool -- --slug=magnet-link-decoder` |
| 工期粗估 | 0.5–1 day for page + en; 1–1.5 days for ten-locale rewrite and checks |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-13 |
| slug 结论 | 保留 `magnet-link-decoder`：en 用户更常搜 “magnet link decoder / parser”，比工程向 `magnet-uri-parser` 更口语；不拆 `magnet-info-hash-extractor`。 |
| 主检索词 → title/H1 | `magnet link decoder` → H1「Magnet Link Decoder — Parse Info Hash and Trackers Locally」 |
| 次要关键词 → desc / FAQ / Use cases | `magnet link parser` → description + FAQ；`decode magnet URI` → How/Rules；`magnet info hash extractor` → Use cases + result labels；`torrent magnet link checker` → FAQ warning；`tracker list` → result table + Use cases |
| 用户搜索习惯判断 | 用户主要想“看懂/拆开 magnet link”，不是下载内容；title 保留 decoder 主词，副标题写结果，不枚举 `xt,dn,tr,xl` 参数。 |
| 优化摘要 | 2026-08-13：从空模板重新立项；title 由潜在工程向 “Magnet URI Parser” 收敛为搜索向 “Magnet Link Decoder”；description 明确本地解析、info hash、tracker、no download/no tracker request；长尾合并到 FAQ/Use cases。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=magnet-link-decoder --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：
  - Textarea：单个 magnet URI。
  - Load sample：填入安全示例，不含真实版权内容下载承诺。
  - 可选 Normalize toggle：生成 canonical-ish rebuilt URI（保留重复 `tr`，按字段分组），默认只读解析。
- 输出：
  - Summary：valid / warning / invalid；scheme；field counts；privacy note。
  - Exact topics：`xt` 列表，识别 `urn:btih:<hash>`、`urn:btmh:<hash>`、unknown URN。
  - Display name：decoded `dn`。
  - Trackers：重复 `tr` 列表，decoded URL，协议标记 `udp/http/https/other`。
  - Size：`xl` bytes + human-readable size。
  - Web seeds / exact sources：`ws` / `xs`。
  - Peer hints：`x.pe` values with host:port shape warning。
  - Unknown params：保留 raw key/value。
  - Copy buttons：copy info hash、copy tracker list、copy JSON summary、copy rebuilt magnet.
- 核心规则 / 算法：
  - Trim input；must start with `magnet:?`.
  - Parse query after `?` with URL-compatible parser; group repeated keys.
  - Decode component values; if malformed `%`, keep raw value and attach warning.
  - Validate `btih`: 40 hex or 32 base32; validate `btmh`: hex-like multihash prefix, warn if shape unexpected.
  - `tr` / `ws` / `xs` should be URL-like after decode; warn, do not fetch.
  - `xl` numeric bytes; negative/non-numeric warns.
- 失败与边界行为：
  - Empty input → sample prompt, no crash.
  - Not magnet URI → invalid state with example.
  - Missing `xt` → warning because BitTorrent magnet usually needs exact topic.
  - Multiple `xt` → show all, mark primary if first recognized.
  - This tool never contacts trackers, DHT nodes, peers, web seeds, or metadata sources.
- 示例 Input → Output：
  - Input:
    `magnet:?xt=urn:btih:0123456789abcdef0123456789abcdef01234567&dn=sample-linux.iso&xl=1048576&tr=udp%3A%2F%2Ftracker.example.org%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.example.com%2Fannounce`
  - Output:
    - `btih`: `0123456789abcdef0123456789abcdef01234567`（40 hex）
    - Display name: `sample-linux.iso`
    - Size: `1,048,576 bytes` / `1 MiB`
    - Trackers: 2
    - Warnings: none
- **进页样例（必填）**：默认样例为上方 sample；页面初始化后调用 `loadSample()` 并自动解析，首屏直接显示 info hash、display name、size 和 2 个 trackers；H2 Example 与默认样例字段完全一致。

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
- [x] Disclaimer（YMYL 必备：否；但需 inspection-only 边界说明）
- [x] `03-locale-briefs.md` 已填（实现十语前）

## 与相邻工具边界

| 工具 / 可能 slug | 本页不做 | 本页覆盖 |
|---|---|---|
| `base64` | 通用 Base64 编解码 | URI percent decode 后的 magnet 字段展示；可互链编码概念 |
| `file-hash` | 计算文件 hash | 识别 magnet info hash 字段，不声称重新计算或验证内容 |
| `jwt-decoder` | JWT 三段与 claims | 同类“结构化解码但不验证/不联网”的 UX 参考 |
| `magnet-to-torrent` | 不下载 metadata，不生成 `.torrent` | FAQ 解释为什么解析器不能凭空生成 torrent 文件 |
| `torrent-downloader` | 不做下载、不连 tracker/DHT/peer | 只检查链接字段和格式 |

## 复审修正（2026-09-05）

- 样例初始化抽出为具名 loadSample()，进页与 Load sample 按钮共用同一条路径。
