# 07 — 架构、共享核心与排期

**目的**：以后写代码时不把 206 个 `*Page.ts` 复制进扩展。本文件是工程边界，不是现在就建 monorepo。

## 1. 与站点的关系

```
src/pages/*Page.ts          ← 网站 UI + 文案 + 预渲染（继续）
src/lib/pdf/*、image/*      ← 逐步抽出的纯函数（html2pdf 流水线、jsquash、pdf-lib）
extensions/e1-pdf/          ← MV3：background + sidepanel + 右键（尚未创建）
extensions/e2-image/
extensions/e3-inspector/
```

原则：

- **算法进共享模块**（合并 PDF、压缩图、解析 meta）。
- **chrome.* API 只留在 extensions/**。
- **不要** iframe 套整站当插件（权限、CSP、审核、离线体验都差）。
- Vendor 大包（pdf-lib、jsquash、html2pdf）按需 `import()`，对齐站点 CWV：打开 popup 不要先下 5MB WASM。

现有站点约束仍然有效：库走本仓库 `public/vendor/` 同源拷贝；扩展打包时 **打进 crx**，不要运行时再拉 jsDelivr。

## 2. Manifest V3 要点

| 项 | 建议 |
|---|---|
| 版本 | MV3 only |
| UI | E1/E2：`side_panel` 做文件作业 + `action` 默认「保存当前页 / 压缩这张图」；E3：side panel 报告 |
| 后台 | service worker 短命；长任务用 `offscreen` document 跑 html2pdf |
| 注入 | 仅用户手势后 `scripting.executeScript` |
| 更新 | Chrome 商店托管；隐私政策写清「扩展更新经 Google」 |

## 3. E1 技术路径（增强功能）

当前标签 → PDF 推荐顺序：

1. **用户手势** → 注入读取 `document.documentElement` 外链图片尽量转 data URL（失败则保留 URL，打印时可能缺图）。
2. **offscreen** 里用现有 html2pdf + DOMPurify 路径（与 `convert-html-to-pdf` 对齐），纸张 A4。
3. `chrome.downloads.download` 保存。
4. `chrome://`、Web Store、PDF 内置查看器：明确报错，不要静默失败。

多标签：串行（与网站上限精神一致，可提到 10–20，写进 Rules，禁止整站爬取）。

登录态：因为在标签页自己的 origin 执行，cookie 已在；**不要**把 HTML 发回 Worker。这既是隐私，也是相对网站代抓的产品差异。

可选：用户粘贴外部 URL 时，深链打开网站 `batch-convert-web-pages-to-pdf`（那条路径本来就要代抓）。

## 4. E2 / E3 技术路径

- E2：右键拿到 `srcUrl`；能 fetch 则进 jsquash；canvas 污染则请用户拖文件。编码器与站点同一套。
- E3：读 DOM + `document.querySelectorAll('meta')`；头信息优先扩展能看见的；完整链可选调用现有 headers API（`localProcessing: false` 的那条），UI 分「本页」/「边缘」两栏以免误导。

## 5. 安全与审核材料

准备 Developer Dashboard 的说明：

- 单用途句（`02`）
- 每个权限一句 why
- 远程代码：无；无 eval
- 无广告、不改搜索
- 测试账号：若无登录产品则写 N/A；演示用公开页 + 一个需登录的自有页录屏

## 6. 分期（建议）

| 阶段 | 产出 | 流量动作 |
|---|---|---|
| **M0 抽核** | 把网页→PDF 与 merge/compress 从 Page 里拆出可在 Worker/扩展复用的函数；单测关键路径 | 无商店 |
| **M1 E1 最小增强** | 仅「当前标签 Save as PDF」+ 右键；CWS 提交 | 相关 PDF 工具页徽章；YouTube 主教程 |
| **M2 E1 同用途** | 所选标签 ZIP；popup 合并/压缩 | 商店描述补次词；TikTok 切片 |
| **M3 落地页** | `/extensions` + E1 页 index；SoftwareApplication | GSC + IndexNow |
| **M4 E2** | 右键压缩/转码 | 图片工具页徽章；新一轮社交 |
| **M5 E3** | 当前页 SEO/OG | SEO 工具页徽章 |
| **以后** | Edge；Firefox；E1 被拒则拆 E1a/E1b | — |

不要并行三个 listing 首发：审核队列、内容日历、卸载问题会搅在一起。

## 7. 源码放哪（决策，待开工时执行）

推荐未来目录 `extensions/` 在仓库根（与 `src/` 并列），**不要**放进 `work-tasks/`。  
在真正开工前保持本 `docs/browser-extensions/` 为唯一插件文档源。

## 8. 成功标准（E1 上架 90 天）

- 商店可搜到主词之一且 listing 未被单用途拒。
- 卸载率没有因权限惊吓而异常（对比类目常识）。
- 至少一条 YouTube 教程能从搜索打开。
- 站点 E1 相关工具页有安装点击（有 UTM）。
- 零：假评、空壳多语 listing、206 个扩展 URL。
