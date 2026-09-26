# GSC「网页会自动重定向」分析（2026-09-26）

Source: `docs/seo/reviews/2026-09-26/表格.csv`（435 URLs，上次抓取约 2026-08-09～09-22）。

## 1. 分类

| 桶 | 条数 | 现网行为 | 是否应修 |
|---|---:|---|---|
| `/en/...`（含尾斜杠变体） | 134 | **301** → 无前缀规范 URL（`oft_lang=en`） | 否（预期 locale 规范化） |
| 非 en：`topics` / `where-to-use-tools` / `tool-type` / about|privacy|terms|contact | 301 | **308** 无尾斜杠 → 有尾斜杠 | **是**（与 sitemap/canonical 冲突） |

非 en 细分：topics 151、where-to-use-tools 63、tool-type 53、info 页约 34。

## 2. 根因（非 en）

构建侧与索引信号一律使用**无尾斜杠**：

- sitemap `loc`：`/zh/where-to-use-tools`、`/zh/topics/health-body`、`/ru/contact`
- HTML `rel=canonical` / `hreflang` / 内链：`withLangPath` → 无尾斜杠
- 默认语（en）Worker：无尾斜杠 200；有尾斜杠 **301 去掉**

但非默认语 Worker（修复前）把**有尾斜杠**当成规范：

```text
GET /zh/topics/health-body  → 308 → /zh/topics/health-body/  (200)
GET /zh/topics/health-body/ → 200
canonical on that page     → https://onlinefreetools.org/zh/topics/health-body  (无斜杠)
```

Google 按 sitemap/canonical 抓无斜杠 URL → 收到永久重定向 → Coverage「网页会自动重定向」，源 URL 不进索引。工具页 `/{lang}/tools/{slug}` 本来就是无斜杠 200，故未进本表。

各语首页 `/{lang}/` **有**尾斜杠，与 sitemap 一致，不在本问题修复范围。

## 3. `/en/` 桶（不改逻辑）

语言切换器会生成显式 `/en/...`；Worker 自 2026-09-03 起一律 301 到无前缀并写 Cookie。GSC 把这些标为重定向是正确的；信号应落到无前缀 URL。勿为「消红字」去掉该 301。

## 4. 修复

`src/index.ts`：非默认语信息页与 taxonomy hub/leaf 改为与默认语一致——

- 无尾斜杠：**200** 出 HTML
- 有尾斜杠：**301** → 无尾斜杠
- 旧路径 `use-cases` / `subjects` 的目标也改为无尾斜杠

部署 Worker 后，抽查：

```bash
curl -sSI -H 'Accept: text/html' 'https://onlinefreetools.org/zh/topics/health-body'
# 期望：200（非 308）
curl -sSI -H 'Accept: text/html' 'https://onlinefreetools.org/zh/topics/health-body/'
# 期望：301 → /zh/topics/health-body
```

GSC：数周后「网页会自动重定向」中非 en taxonomy/info 应下降；`/en/...` 可仍保留。可对高价值无斜杠 URL 用「验证修复」。

## 5. 相关历史

- `docs/seo/reviews/2026-09-07/04-crawled-not-indexed.md` 已点名 `/zh/...` 308 vs canonical 无斜杠
- `dev-logs/2026-09/2026-09-03-19-43-lang-pref-cookie-en-301.md`：`/en/` 301 设计
