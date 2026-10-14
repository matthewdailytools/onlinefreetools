# Todo — spam 断崖挽救（2026-10-13）

## 本周（止血 + 取证）

- [ ] GSC → 人工处置：截图/记录「无」或逐条处理
- [ ] 导出 Performance：日期 + 网页 + 查询（覆盖至少 2026-09-01～10-13）放入本目录
- [ ] 网址检查 ×5：`/`、一条仍有曝光工具、一条计算器、一条 prompt、一条 PDF
- [ ] Cloudflare Analytics：对比 10/1–5 vs 10/6–12 请求 / 404
- [ ] Clarity：清空筛选，确认 10/6 是否同步掉会话
- [ ] **冻结**新 how-to-calculate / 新 prompt 变体 / 近义拆页（写进选题 tracker）
- [ ] 部署 devlogs 全站 noindex（代码已改：meta robots + `X-Robots-Tag` + 移出 sitemap）：`build:site` → `upload:r2` → `git:deploy`
- [ ] **devlogs 第二步**：GSC 网址检查 / 网页索引报告确认 `/devlogs/` 已「被 noindex 排除」且不再有收录后，再在 `public/robots.txt` 加 `Disallow: /devlogs/`（**提前加会让爬虫读不到 noindex**）

## 2–6 周（降表面积）

- [ ] 读 `04-tool-ig-audit.md`：A 桶（71：how-to-calculate 60 + prompt 10 + 1）先定去留；B 桶前 10 作为第一批逐 slug SERP 对比 + IG 补强（每批≤10，十语逐语重写）
- [ ] how-to-calculate 族特别注意：文本并不雷同（最近邻相似度 ≤0.08），问题是**极薄**（多页正文 <200 词、一句话 Use case / FAQ）且部分他语残留英文；合并进 hub 优先于逐页加字

- [ ] 列出全部 `how-to-calculate-*` slug，定 hub 合并方案（面积/体积/…）
- [ ] 选定：301 合并 vs `noindex` vs 下线（产品拍板后执行第一批 ≤10 个最薄页）
- [ ] prompt builder 族：定「保留 slug 清单」+ 其余 301/noindex
- [ ] PDF/batch：只并「无交互差分」页；有真实输出差分的保留
- [ ] 更新 homepage / topic 内链：指向幸存者与 hub，少链薄页
- [ ] `build:site` + `upload:r2` + `git:deploy`（有 HTML/路由变更时）

## 持续（数月）

- [ ] 每 2–4 周导出 Dates，看展示是否离开「近零」
- [ ] 周建工具硬顶：≤1，且必须满 IG、禁止同构簇扩容
- [ ] 勿对自动化 spam 点「验证修复」指望立刻回血

## 已完成

- [x] 确认断崖日 2026-10-06；全站近清零 + 零散残留
- [x] 撰写 `01` / `02` / 本 `03`
