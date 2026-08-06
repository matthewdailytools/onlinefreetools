# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`indexnow`（不新建 `bing-indexnow` / `indexnow-key-checker` / `yandex-indexnow` 近义薄页）  
**路径**：`/tools/indexnow`  
**主方向**：A（方向 A.12 站长 / SEO 辅助）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐方向：[A.12 站长 / SEO 辅助](../../docs/2026-07-28-tool-direction.md)；协议：[IndexNow Documentation](https://www.indexnow.org/documentation)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. IndexNow / Bing IndexNow submit URLs  
  2. IndexNow key / `{key}.txt` / key checker / keyLocation  
  3. IndexNow 200 vs 202 / 403 / silent failure  
  4. submit sitemap to Bing IndexNow（同页：粘贴 URL 列表或解析 sitemap 文本，**不**拆独立 sitemap 薄页）  
  5. www vs non-www host mismatch（边界 → Rules/FAQ；互链 `add-www-to-dns`）
- 用户真实任务：为站点配置 IndexNow 所有权验证文件，确认引擎能拉到 key，再把「新增/更新/删除」的 URL 批量通知 Bing 等参与引擎；并理解响应码含义，避免以为 202 就等于 key 已通过。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  InstantIndexNow / CapyToolkit 等：在线提交 URL、共享或自有 key、下载验证文件、部分提供 key checker；官方文档列状态码；Bing Webmaster 有 IndexNow 面板。多数英文；少有把「先验 key + 状态码表 + host/www 坑 + 通知≠收录」做成可交互同页工具。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **静默失败**：Bing / 聚合端点常对「语法合法但从未托管的 key」仍回 **202**，随后异步校验失败丢弃且不一定再通知——绿勾误导  
  2. **host 必须一致**：`www.example.com` 与 `example.com` 是不同 host；key 文件必须在**同一 host**；`keyLocation` Option 2 还有路径前缀约束  
  3. **状态码对照可操作**：200/202/400/403/422/429 与「下一步做什么」缺同页交互结果解释  
  4. **通知 ≠ 收录**：IndexNow 只加速发现；索引仍由引擎质量评估决定——竞品文案常夸大  
  5. **多语言检索向正文**：多数英文 SaaS；本站十语是可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：key 字符集 8–128、`{key}.txt` Option 1/2、host 与 urlList 一致性 → `#rules`  
  - **②** 边界：202 静默失败、403 key、422 host 不符、429、www/apex → FAQ + 结果区文案  
  - **③** Use cases：新站上线批量 ping；发版后增量 URL；删除页通知  
  - **④** 对照表：端点（api.indexnow.org / Bing）× 校验时机（同步 vs 异步）→ Rules  
  - **⑤** References：indexnow.org 文档、Bing IndexNow / Webmaster  
  - **⑥** 隐私：URL 列表经本站 Worker 转发到 IndexNow；不写入业务数据库；结果不缓存为公共页  
  - **⑦** 十语 locale brief + ≥3 轮（见 `03`）  
  - **⑧** 固定 Example：示例 host + 假 key 文件 URL + 样例 POST JSON（可索引）  
  - **⑨** Related ≥2 → 页底内链
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页**。「Bing IndexNow」「key checker」「sitemap 提交」「Yandex 端点」同属 IndexNow 提交通知任务；**禁止**拆 `/tools/bing-indexnow`、`/tools/indexnow-key-checker`。用步骤向导 + FAQ/Rules 覆盖。
- [x] 权威来源 URL：  
  - https://www.indexnow.org/documentation  
  - https://www.bing.com/indexnow  
  - https://www.bing.com/webmasters（IndexNow 接收面板，文案中说明）
- [x] 行业/场景 Use case 文案草稿：  
  1. 新工具/新站：部署 key 文件 → Check key → 提交 sitemap 中的工具 URL  
  2. 内容更新：只提交变更 URL 列表，避免刷未改页面  
  3. 删页：提交已 404/410 的 URL，促使引擎尽快重新抓取  
- [x] 边界/失败案例草稿：空 URL；URL 与 host 不符；key 长度/字符非法；key 文件 404/HTML 错误页/正文不匹配；未 Check 直接 Submit 时警告「202 可能假成功」；www/apex 混交；超过单次 10 000 URL；Worker/端点超时；429  
- [x] 结果区信息如何落到可索引 Example / FAQ：固定 Example JSON + FAQ（202 含义、key 放哪、是否保证收录、隐私）可见 HTML  
- [x] Related / 主题内链计划（≥2）：`website-headers`，`add-www-to-dns`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：key 规范、Option 1/2、host 一致、批量上限 |
| 2 | 边界/失败 | FAQ + 结果区：202 静默失败、403/422/429、www host |
| 3 | 场景语境 | Use cases ×3（上线 / 增量更新 / 删页） |
| 4 | 对照表 | 端点与校验时机；HTTP 状态码 → 下一步 |
| 5 | 权威引用 | indexnow.org；Bing IndexNow |
| 6 | 本地隐私 | FAQ：经 Worker 转发；不落库 |
| 7 | 多语言 | 十语 brief + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：固定 host/key/urlList JSON |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/站长 · 方向 A.12 · P1 |
| 场景与行业 | 站长 / SEO / 前端：Bing IndexNow 与参与引擎 URL 变更通知 |
| 技术（包、Tier、本地处理） | Tier 0：`crypto` 生成 key、下载 txt、URL 列表/sitemap XML 文本解析、payload 预览；Worker：`GET` 探测 keyLocation、`POST` IndexNow（默认 `api.indexnow.org`，可选 Bing）；限流 + URL/host 校验；**不**提供本站私有 IndexNow key 给第三方站点共用 |
| Title (en) | `IndexNow — Bing URL Submit, Key Check & Status Codes \| {Brand}` |
| Description 要点 | ≥120；步骤（生成 key→托管 txt→Check→Submit）+ 202 不等于 key 已通过 + host/www 一致 + 通知≠收录；十语检索向 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 202 算成功吗；key 文件放哪；www 与裸域；会保证收录吗；提交是否上传到本站数据库；和 Bing URL Submission API 区别 |
| Disclaimer / References | 非 YMYL；不保证索引/排名；IndexNow 官方文档；Bing IndexNow；面板数据以 Bing Webmaster 为准 |
| related | `website-headers`, `add-www-to-dns` |
| 验收 | `npm run lint:seo`；`03` ≥3 轮；Check key 与 Submit 可用；状态码释义可见；无近义薄页；README + catalog；Worker 限流 |
| 工期粗估 | ~1d（表单 + Worker 两接口 + Rules/IG + 十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：
  - **Host**（必填）：如 `example.com` 或 `www.example.com`（规范化：去协议、去路径、小写）
  - **Key**：可「Generate」；校验字符集 `[A-Za-z0-9-]`、长度 8–128
  - **keyLocation**（可选）：默认 `{origin}/{key}.txt`；允许同 host 自定义路径（Option 2）
  - **URL 列表**：多行粘贴绝对 URL；或粘贴 **sitemap XML** 抽取 `<loc>`（客户端解析）；可选「Load sample」
  - **Endpoint**：`indexnow`（默认聚合）| `bing`（直连）
  - 操作：**Download key file**；**Check key**（Worker）；**Submit**（Worker）；**Dry-run preview**（只显示将 POST 的 JSON，不发网）；Clear
- 输出：
  - key 文件预览 + 下载（文件名 `{key}.txt`，正文 = key）
  - Check 结果：HTTP 状态、正文是否匹配、常见失败提示（404 / HTML / mismatch）
  - Submit 结果：HTTP 状态 + 本页释义（200/202/…）+ 提醒去 Bing Webmaster → IndexNow 核对
  - 警告条：未 Check 时 Submit 成功码仍可能后续丢弃；通知 ≠ 收录
- 核心规则 / 算法：
  - 生成 key：密码学随机，映射到允许字符集，建议长度 32
  - 所有 `urlList` 的 origin host 必须等于提交 `host`（规范化后比较；禁止跨域夹带）
  - Worker Check：`fetch(keyLocation)`，超时；比对 trim 后正文 === key；记录最终 URL（是否被重定向到他域则失败）
  - Worker Submit：组装 JSON `{ host, key, keyLocation?, urlList }`，`POST` 所选端点；单次上限 ≤ 10 000（UI 可先限更小如 500 防滥用，Rules 说明协议上限）
  - 限流：按 IP 的合理 QPS/日配额（实现定）；拒绝非 http(s) URL
- 失败与边界行为：
  - 非法 key / 空列表 → 前端拦截
  - URL 不属于 host → 列出违规行，不提交
  - Check 失败仍允许用户强制 Submit（需二次确认文案），默认推荐先修 key
  - 端点非 200/202 → 展示 body 摘要 + FAQ 链
- 示例 Input → Output：
  - Input：host=`www.example.com`，key=`indexnowdemokey01`，url=`https://www.example.com/page`  
  - Output（dry-run JSON）：
    ```json
    {
      "host": "www.example.com",
      "key": "indexnowdemokey01",
      "keyLocation": "https://www.example.com/indexnowdemokey01.txt",
      "urlList": ["https://www.example.com/page"]
    }
    ```

## Worker API（实现草案）

| 方法 | 路径 | 作用 |
|---|---|---|
| `GET` | `/api/tools/indexnow/check-key?url=&key=` | 代抓 key 文件并比对 |
| `POST` | `/api/tools/indexnow/submit` | body：host/key/keyLocation/urlList/endpoint；转发 IndexNow |

（具体路径实现时可微调，保持与现有 `/api/tools/*` 风格一致。）

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区（Generate / Download / Check / Submit / Preview）
- [ ] How it works（4 步）
- [ ] Formula / Rules（key、Option 1/2、host、状态码表）
- [ ] Example（固定 JSON）
- [ ] Use cases（2–3）
- [ ] FAQ ≥3（含 202 静默失败、收录承诺否定、www host）
- [ ] Related tools ≥2（`website-headers`, `add-www-to-dns`）
- [ ] References ≥1（indexnow.org + Bing）
- [ ] Disclaimer — 非 YMYL；不保证索引/排名
- [ ] `03-locale-briefs.md` 已填
- [ ] README 工具清单登记
- [ ] `tool-catalog.json` 注册（`faqPrefix: tool_indexnow`；`related` ≥ 2）
- [ ] Worker 路由 + 限流 + host/URL 校验
- [ ] **不**注册独立 `bing-indexnow` / `indexnow-key-checker` 等薄页 slug
- [ ] 可见正文**不**暴露本站运维私钥路径或把 `ops/seo/*` 当作用户工具文档主体
