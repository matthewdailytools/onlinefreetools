# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-pdf-flipbook`  
**路径**：`/tools/make-pdf-flipbook`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #45，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：why-choose < 3、正文 < 350 词、九语未本地化（locale-untranslated）；FAQ 一句答；Use cases 为泛泛的「办公 / 学生 / 隐私」。功能缺口：

- 「pdf to flipbook / flipbook maker」SERP（Heyzine、FlipHTML5、Flipsnack、Issuu 类）主意图：**把 PDF 变成像书一样翻页、能分享或嵌入网站的电子书**；竞品均为上传 + 托管链接（常有水印、页数上限、需注册），书本跨页、键盘 / 滑动翻页、全屏是标配；
- 本页原为单页 canvas 预览 + 极简导出（无跨页、无键盘 / 滑动、无全屏、无清晰度选择、无体积提示），H1 仅「Make a PDF flipbook」；页面上的「拖放到这里」实际不生效（input 隐藏且无 drop 处理）→ **部分满足**。

## 与站内相邻工具的分工

- `open-pdf-in-browser`：在浏览器里直接阅读 PDF（保留文字与链接）。本页产出可分享的翻页书文件。
- `pdf-to-jpg`：把每页导出为图片文件。本页把页面图片打包进一个可翻页的 HTML。
- `combine-files-into-one-pdf`：多个文件先合并成一份 PDF，再来做翻页书（新增 related）。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把目录 / 价目表 / 校刊 / 宣传册做成翻页电子书发给客户或放到自己网站；展会离线循环展示；给客户看跨页排版
- [x] 竞品（Heyzine、FlipHTML5、Flipsnack、Issuu）：上传托管、分享链接、嵌入代码、跨页翻页动画、全屏；免费版常带水印 / 页数上限 / 需注册；文件留在第三方服务器
- [x] 缺口：本地生成的可下载文件；跨页版式；多种翻页方式；清晰度与体积取舍；如何自托管 / 嵌入的说明；图片化导致链接与文字丢失的诚实说明
- [x] 增益：① 下载单个 HTML，离线可开、无水印、无过期 ② 书本版式（封面单独、之后 2–3 / 4–5 跨页，偶数页时封底单独）与单页版式 ③ 窄屏 / 竖屏自动单页 ④ 按钮、方向键、PageUp/PageDown、Home/End、点击左右半边、手机滑动、全屏 ⑤ 三档清晰度（72 / 108 / 144 dpi）并在下载前显示文件体积 ⑥ 预览即下载文件本身 ⑦ 金标进度 HUD（读取 / 渲染第 n 页 / 打包）⑧ 自托管与 iframe 嵌入示例（FAQ）⑨ 拖放修复、页数上限与大文件提示
- [x] 权威：PDF.js（渲染库）；MDN — iframe 元素（嵌入说明）
- [x] Related：`open-pdf-in-browser`、`pdf-to-jpg`、`combine-files-into-one-pdf`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | PDF Flipbook Maker — Turn a PDF into a Page-Turning HTML Flipbook You Can Open Offline |
| Description (en) | Make a flipbook from a PDF in your browser. Pages turn as two-page book spreads or one at a time, and you download one HTML file that opens offline with no account. Example: a 4-page catalogue in seconds. |
| related | open-pdf-in-browser, pdf-to-jpg, combine-files-into-one-pdf |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-09-03） |
| slug 结论 | **保留** `make-pdf-flipbook`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**PDF Flipbook Maker — Turn a PDF into a Page-Turning HTML Flipbook You Can Open Offline**；zh：**PDF 翻页书制作 — 把 PDF 转成能像书一样翻页的 HTML 电子书，离线也能打开** |
| 次要关键词 → desc/FAQ | pdf to flipbook / how to make a flipbook → FAQ q1 + How；embed flipbook on website / share → FAQ q2；flipbook links clickable → FAQ q3；flipbook file size → FAQ q4 + 结果体积；two-page spread / mobile → FAQ q5 + Rules 1–2；scanned / password PDF → FAQ q7；free flipbook no watermark → Why choose 1 |
| 用户搜索习惯判断 | 工具名向（flipbook maker / pdf to flipbook）；H1 以「PDF Flipbook Maker」开头，副句写产物（翻页 HTML）与差异（离线） |
| 优化摘要 | 保留 slug；H1 由「Make a PDF flipbook」改为工具名 + 产物 + 离线；desc 写跨页 / 单页、单个 HTML、离线、无账号与示例 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| pdf flipbook maker / pdf to flipbook / make a flipbook from pdf | 吸（主词） | title / H1 / How |
| free flipbook maker no watermark / without sign up | 吸 | Why choose 1；desc |
| embed flipbook on website / share flipbook link | 吸（说明性） | FAQ q2（自托管 + iframe 示例） |
| two page spread pdf viewer / book view | 吸 | 书本版式；Rules 1–2；FAQ q5 |
| offline flipbook / flipbook html download | 吸 | 产物；Why choose 1；FAQ q1 |
| flipbook with links / searchable flipbook | **不吸**（诚实说明不支持） | FAQ q3 |
| flipbook with sound / video / analytics / lead form | **不吸** | FAQ q8 |
| hosted flipbook link（平台托管） | **不吸** | FAQ q2 给自托管方案 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用分析路径：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`（make a pdf flipbook → H1；近义 absorb 进 FAQ / desc）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 做 PDF 翻页书，仍成立 |
| 主检索词任务 | 「PDF → 像书一样翻页、可分享」——改写前单页预览 + 简陋导出 → **部分满足**；改写后跨页、多种翻页、全屏、清晰度、体积、自托管 / 嵌入说明 → **满足（文件型，不托管）** |
| 超出 | 无第二工具抢首屏 |
| 有意不满足 | 托管分享链接；保留链接 / 可选文字；翻页音效、视频、统计、表单；从右往左翻（阿拉伯文 / 日文竖排书） |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：一个 PDF（点选或拖放，`accept="application/pdf,.pdf"`）；读取后显示文件名、页数、首页尺寸（mm）；非 PDF / 损坏 / 加密 / 超过 300 页 → 红色错误卡片并清掉旧结果；超过 80 页 → 黄色提示
- 设置（默认折叠）：版式 书本（默认）/ 单页；清晰度 Compact 72 dpi（JPEG 0.72）/ Standard 108 dpi（默认，JPEG 0.82）/ High 144 dpi（JPEG 0.88），单页最长边上限 2600 px；标题（空则用 PDF 文件名；用于导出页标题与文件名「{标题}-flipbook.html」）
- 主按钮「Create flipbook」→ 金标 HUD：读取 PDF → 渲染第 n / 总页 → 打包 HTML；完成后 HUD 停在 100%，写「{页数} pages, {体积}. Next: click Download HTML flipbook to save {文件名}.」；「Download HTML flipbook」此时才可用
- 预览：iframe 加载将要下载的同一个 HTML（sandbox allow-scripts，允许全屏）
- 改版式或标题：即时重建 HTML 与预览（不重新渲染）；改清晰度：作废结果并提示重新点 Create flipbook
- 导出 HTML：页面为内嵌 JPEG；书本版式视图 [空, 1]、[2, 3]…、末页奇偶自动；窗口宽 < 560 px 或高 > 宽时自动单页，尺寸变化时保持当前页；按钮 / ←→ / PageUp PageDown / 空格 / Home End / 点击左右半边 / 滑动 > 40 px；全屏按钮（浏览器不支持时隐藏）；翻页动画
- 样例：pdf-lib 生成 4 页 A5「Garden shop」目录（绿色封面、目录、新品、营业时间封底），标题填本地化样例名，进页自动生成（4 页很轻，不卡标签页）
- Clear：清空文件、结果、标题，设置恢复默认，隐藏 HUD，不重载样例

## 固定数字（实测 2026-10-15，Chrome）

- 样例：4 页 A5（148 × 210 mm），Standard → 约 98 KB；Standard 下每页 630 × 892 px
- A4 在 Standard 为 892 × 1263 px；Compact 595 × 842；High 1190 × 1684
- 常规 A4 文字页（标题 + 36 行 11 pt）：Compact ≈ 116 KB、Standard ≈ 230 KB、High ≈ 335 KB
- 满版小字 A4（58 行 10 pt）：Compact ≈ 150 KB、Standard ≈ 347 KB、High ≈ 612 KB
- 上限 300 页；提示阈值 80 页（81 页提示、301 页报错）

## 验收记录（2026-10-15，英文本地预渲染页）

- 进页样例：文件信息「sample-catalogue.pdf · 4 pages · first page 148 × 210 mm」；HUD 100%「4 pages, 98 KB…」；下载可用；预览出现
- 导出文件在 1280 × 900 下：视图 [空, 1] → [2, 3] → [4, 空]；→ 键与 Home 正常；首页上一页禁用、末页下一页禁用；窄 iframe（488 px）自动单页
- 改版式为单页 → 导出参数变「single」；改标题 → 文件名「Price list 2026-flipbook.html」与 `<title>` 同步；改清晰度 → 提示重新生成、下载禁用
- 拖放 12 页 A4 测试 PDF：信息行正确、提示点 Create；生成完成 12 页 4.7 MB（10 页满版小字 + 2 页图片）
- 错误：.txt → 非 PDF 卡片且清掉旧结果；损坏 PDF → 无法读取；301 页 → 超限；81 页 → 黄色提示；未选文件点 Create → 提示先选文件
- Clear 恢复默认设置、隐藏 HUD

## 页面模块清单

- [x] H1 + 交互 + 进页样例 + lead
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×6 / Example / Use cases ×4 / FAQ ×8 / Related ×3 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
