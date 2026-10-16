# 工作示例：webpage → JPG 输入区

对照：[FreeConvert Web Page to JPG](https://www.freeconvert.com/webpage-to-jpg) vs 本站 [Batch convert web pages to JPG](https://onlinefreetools.org/tools/batch-convert-web-pages-to-jpg)。

## 竞品输入结构（要学的）

| 层 | 他们 | 交互要点 |
|---|---|---|
| 源切换 | From Device / Dropbox / Drive / OneDrive / **Enter Webpage** | 一次只用一种输入面 |
| 文件面 | `input type=file` multiple + “Drop any files here” | 丢文件与点选同一入口 |
| URL 面 | Enter Webpage（How：paste URL → Convert to JPG → Download JPG） | 线性：输入 → 转 → Done 才下载 |
| 高级 | “Advanced settings (optional)” 手风琴 | 默认不挡 Convert；viewport、delay 0–5s、cookie、print CSS、one long page |
| 主 CTA | Convert to JPG；完成后 Download JPG | 下载不是第一步 |

## 竞品（不要学）

- 云盘与「Upgrade / 1GB / Sign Up」
- 账号 Preset / Apply to All
- 设置文案残留 PDF orientation
- 空 `accept=""` 的 file input

## 本站该页现状 vs Skill

**已对齐：**

1. URL 列表主输入；Convert all / Download ZIP（无产物禁用）；逐行表；Fetch→Images→JPG HUD；失败 skip；Sample 仅点击。
2. 等待秒、视口、质量、整页/首屏收进「高级设置（可选）」`<details>`；默认 1280 / 0.85 / full / wait=1，不打开也能 Convert。
3. Hero lead 用短句 `desc`；整段 meta 只进 `<meta name="description">`。
4. 主按钮行只有动作：Convert all / Download ZIP / Load sample / Clear。

**不要加：** Dropbox 标签、第二套文件上传（那是 pdf-to-jpg 的作业）。
