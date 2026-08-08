# SEO Todo（2026-08-08）

> 复盘：[`01-analysis-review.md`](./01-analysis-review.md)  
> 策略：[`02-next-strategy.md`](./02-next-strategy.md)

---

## 已完成

- [x] 导入 GSC CSV 至 `docs/seo/2026-08-08/`
- [x] 撰写分析复盘 / 策略 / todo 三文档
- [x] 优化 `ja` 限界収入 title/description（对齐「求め方」）
- [x] 优化 `es` 平方英尺 + ROI title/description
- [x] 优化 `de` IP title/description
- [x] 优化 `pt` ROI title/description
- [x] 优化 `en` 边际收益 title/description
- [x] 同步 `scripts/site/i18n.mjs` 首页卡片 title
- [x] devlogs HTML 增加 `noindex`（`buildDevLogs` → `renderLayout`）
- [x] `npm run lint:seo` 通过

---

## 待办 — 发布与提交（P0）

- [ ] `npm run build:site` + 部署（含 devlogs noindex 与 i18n 变更）
- [ ] IndexNow：日常 `npm run indexnow -- --since-git origin/main --require-live-key` 或 `npm run indexnow:incremental`；全量仅冷启动 / 换 key 后（见 `ops/README.md` §4.1）
- [ ] GSC 确认 `https://onlinefreetools.org/sitemap.xml` 已提交且无报错
- [ ] GSC URL 检查：抽 3 条已改 URL（ja MR、es sqft、de IP）请求编入索引

---

## 待办 — 观察（P1，部署后 2–4 周）

- [ ] 导出下一轮 GSC CSV → 新建 `docs/seo/YYYY-MM-DD/` + 三文档
- [ ] 对比基准线：总点击、CTR、ja MR 页 CTR、devlogs 展示是否归零
- [ ] 若 es/pt ROI 排名仍 >50 且无点击 → 启动 `work-tasks/how-to-calculate-roi/03-locale-briefs.md` 第二轮
- [ ] 若 de IP 排名仍 >70 → 德语文案 FAQ/Example 增补（非仅 meta）
- [ ] 若「已抓取未编入索引」6 条可定位 → 逐 URL 记录于下轮 `01-analysis-review.md`

---

## 待办 —  backlog（P2）

- [ ] fr ROI、es BMI：有 GSC 展示但本轮未改 meta → 下轮数据达标再动
- [ ] 首页 `/zh/` 唯一点击 → 检查 zh 首页 title/description 是否可复用到其他语首页结构
- [ ] 考虑 GA4 或 Plausible（可选）辅助验证 GSC 点击趋势

---

## 负责人 / 日期

| 项 | 目标日 |
|---|---|
| 部署 + IndexNow | 2026-08-08～09 |
| 下轮 GSC 导出 | 2026-08-22～2026-09-05 |
| P1 文案第二轮（若需要） | 下轮复盘后定 |
