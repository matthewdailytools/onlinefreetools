# SEO Todo（2026-08-12）

> 复盘：[`01-analysis-review.md`](./01-analysis-review.md)  
> 策略：[`02-next-strategy.md`](./02-next-strategy.md)  
> 上轮未闭环项：[`../2026-08-08/03-todo.md`](../2026-08-08/03-todo.md)

---

## 已完成

- [x] 导入 GSC CSV 至 `docs/seo/reviews/2026-08-12/`（Performance + Coverage）
- [x] 撰写分析复盘 / 策略 / todo 三文档
- [x] 与 2026-08-08 基线对照（注明 24h vs 4 日窗口不可直接同比）
- [x] 导入「已抓取未索引」Drilldown（110 URL）并完成分类 → [`04-crawled-not-indexed-sample.md`](./04-crawled-not-indexed-sample.md)

---

## 待办 — 数据与索引（P0）

- [ ] **重新导出效果报告：过去 28 天**（或 ≥16 天），覆盖上轮 meta 改动后；放入新日期目录或本目录补充子文件夹并注明窗口
- [ ] `robots.txt`：确认 / 补充 `Disallow: /api/`（Drilldown 含 `/api/tools/ip-address`）
- [ ] 线上抽查 `/devlogs/*` 响应头/`noindex`（列表内 4 条历史抓取）
- [ ] 信息页尾斜杠：`/fr|ja|pt|zh` 的 privacy/terms/contact **统一规范 + 301**（5 对重复）
- [ ] GSC 展开并记录：**软 404 ×1**、**4xx ×1**、**规范冲突 ×1** 的具体 URL → 修复或说明为误报
- [ ] 确认上轮待办是否已部署：`build:site`、devlogs `noindex`、sitemap 提交、IndexNow incremental
- [ ] GSC URL 检查：抽查 `es/square-feet`、`ru/image-merge`、`tools/schema-jsonld-generator` 编入索引状态

---

## 待办 — CTR / meta（P0，可与索引并行）

> 改前先确认线上已部署上轮 i18n；改后 `lint:seo` + `build:site`。

- [x] `ru` `image-merge`：title/description 对齐「объединить / склеить фото онлайн」等高展示俄语词簇（2026-08-20）
- [x] `en` `schema-jsonld-generator`：title 前置 JSON-LD / Schema generator；去掉过时 richer-results 承诺（2026-08-20）
- [x] `es` `how-to-calculate-volume`：title 前置 calcular volumen / calculadora（2026-08-20）
- [x] `en` `how-to-calculate-npv`：title/description 对齐 “how to calculate npv”（2026-08-20）
- [x] 同步受影响语种的首页卡片 title（`merge:tools` → `i18n-tools.generated` + ru legacy in `i18n.mjs`）
- [x] `npm run lint:seo` + `build:site` 通过（2026-08-20）
- [x] **部署**本轮 meta 改动 + IndexNow（`npm run deploy` + `git push` + `--tool` 四 slug，2026-08-20）
- [ ] CF Dashboard 确认 GitHub 部署成功后，可选 `npm run verify:r2:live`

---

## 待办 — 观察（P1，建议 2–4 周 + 长窗口数据）

- [ ] 用 **≥28 天** 效果数据对比基准线：总点击、CTR、日均展示、es sqft CTR、ru image-merge
- [ ] 复检上轮 P0：`ja` 限界収入、`es`/`pt` ROI — 仅在长窗口有展示时下结论
- [ ] 4 周后若图片簇多语仍大片未收 → 按 **slug** 开 IG（先有展示语），禁止按 110 URL 扫射
- [ ] 若 de IP 28 天排名仍 >70 → 德语文案 FAQ/Example 增补（非仅 meta）
- [ ] 关键词漏斗：图片类俄语/阿语查询优先 absorb 进既有工具（见 `keyword-to-tool-funnel`），不新建 doorway

---

## 待办 — backlog（P2）

- [ ] ar `images-to-gif`：有展示则观察；稳定后 meta 对齐阿语 GIF 词
- [ ] fr/de 图片裁剪、de robots/meta/utm：有展示但排名深 → 长窗口后再排 meta
- [ ] 更新 [`../README.md`](../README.md) 示例链接指向 `reviews/` 或与 `docs/seo/YYYY-MM-DD` 归档约定统一（文档卫生，非 SEO 阻塞）

---

## 负责人 / 日期

| 项 | 目标日 |
|---|---|
| 修 api robots / 尾斜杠 301 / 确认 devlogs noindex + 4xx/软404 | 2026-08-13～15 |
| 新簇 meta（ru merge / schema / es volume / en npv） | 2026-08-13～16 |
| 重新导出 28 天效果 + 下一轮三文档 | 2026-08-26～09-09 |
| 上轮 P0 CTR 结论（ja MR / es ROI） | 同上（须长窗口） |
