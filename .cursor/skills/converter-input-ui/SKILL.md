---
name: converter-input-ui
description: >-
  Design convert/compress/screenshot tool input UI and interaction: one primary
  input surface, Convert then Download, advanced settings collapsed, progress
  and per-row errors. Use when implementing or revising converter Page.ts
  toolbars, dropzones, URL lists, or when learning competitor converter UX
  (FreeConvert webpage-to-jpg). Do not add cloud-drive uploads or mix settings
  into the primary action row.
---

# 转换器输入 UI 与交互

从 [FreeConvert Web Page to JPG](https://www.freeconvert.com/webpage-to-jpg) 抽出**输入区与操作流**，落到本站 `*Page.ts`。  
文案/H1/meta 走 [converter-serp-landing-seo](../converter-serp-landing-seo/SKILL.md)。本 Skill 只管**控件层级与状态机**。

**权威序**：`tool-creation.mdc`（opts、loadSample、隔离）→ 本 Skill → 现有 chrome（`tools-bar`、`tool-dropzone`、`OftPdfWork`）。  
**不学**：Dropbox / Drive / OneDrive、注册升级、1GB 限额广告、账号 Preset。

工作对照：[example-webpage-to-jpg.md](example-webpage-to-jpg.md)

## 何时必须使用

- 新建或改 convert / compress / screenshot / batch-convert 的首屏表单
- 用户对标竞品转换器「输入区 / 按钮 / 高级设置 / 进度」
- `02` 交互规格：输入、输出、忙碌态、失败 skip

计算器、prompt 构建器、纯文本校验：**不要**套本 Skill。

## 学什么 / 不学什么

**学**

1. **一种主输入面**：搜这个作业的人，打开页只看见那一种（贴 URL 或丢文件），不是两套抢首屏
2. **操作流**：输入 → **一个主按钮 Convert** → 状态变 Done → **才启用 Download**
3. **高级设置默认收起**（`details` / Advanced），有合理默认值，不打开也能转
4. **长任务有进度**；批量有逐行状态；失败 skip、不整批作废
5. Sample / Clear 是次按钮，不替代 Convert

**不学**

- 云盘 OAuth（与本站「文件留设备 / URL 代抓一次不落盘」冲突）
- 主按钮行里塞视口、边距、延迟、质量
- 两个 `type=file`、空 `accept`
- 首屏大段 lead 把工具挤下去（lead 用短句；长说明放 How）

## 主输入面（先判作业）

| 作业 | 主输入 | 默认 |
|---|---|---|
| 单 URL / webpage to X | 一个 URL `input`；placeholder 是真实 https 例 | 焦点可进框；补 `https://` |
| 多 URL / batch | `textarea` 一行一条；上限写在 hint | 空行忽略 |
| 本地文件 | 现有 `label.tool-dropzone` + `input[type=file]`；`accept` 写死真实 MIME | 显示文件名 |
| 同页既要 URL 又要文件 | **Tab 切换**两套表面，默认 tab = H1 作业；不要两套同时铺开 | 切换时清空另一种，避免双源 |

URL 与文件是两种作业：邻页已有「粘贴 HTML / 上传 PDF」则本页不要再做第二套编辑器。

## 按钮层级（`tools-bar`）

同一行只放动作，不放设置：

1. **Primary** `btn btn-primary`：Convert / Convert all（作业动词，与 How 同词）
2. **Output** `btn btn-outline-primary`：Download / Download ZIP，**无产物时 disabled**
3. **Tertiary** `btn btn-outline-secondary`：Load sample、Clear

忙碌时：禁用 Convert / Sample / Clear / 设置；Convert 可转圈。Download 仍仅在有产物时可用。

禁止：Convert 旁边再排 4 个 `<select>`。

## 高级设置（progressive disclosure）

可选参数 **≥3** 时，用 `<details class="mb-2">`（或等价折叠），`<summary>` 用当地「高级设置（可选）」。

折叠内才放：等待秒、视口、质量、整页/首屏、边距等。  
**默认值必须让「直接点 Convert」能出合理结果**（例：wait=1、viewport=1280、quality=0.85、capture=full）。

每个控件：`<label for>` + 短 `form-text`。数字要 `min`/`max`/`inputmode`。视口可用 390/768/1280 预设（比 0–10000 空数字更不容易交废图）。

页上可见 How/Rules 仍要解释这些控件（SEO Skill）；折叠只解决**首屏噪音**，不删可索引说明。

## 状态机

```
idle → converting → done | error
              ↘ skip row（批量）→ 继续
```

- `aria-live="polite"` 状态行  
- 长截图 / 批量：进度条 + 步骤胶囊（Fetch / Wait / Render）；可复用 `OftPdfWork`  
- 进页 **不**自动 `loadSample()` 若会卡住标签页（html2canvas）；函数仍须存在并绑在 Sample 按钮上  
- 错误：`role="alert"`，一句人话（坏 URL / 被拦 / 库未加载）  
- 批量：表列 URL / 文件名 / 状态；一行失败其余继续

## 验收清单（写 Page 时勾）

- [ ] 主输入面 = 该页作业；无云盘入口
- [ ] 主按钮行只有动作；设置在折叠或第二区
- [ ] Download 无结果时 disabled
- [ ] 默认不打开高级设置也能 Convert 成功
- [ ] 忙碌禁用输入；`aria-live` 有进度
- [ ] `accept` / URL 校验 / 上限条数有 hint
- [ ] `function loadSample` 存在；自动跑仅在不卡死时
- [ ] chrome：`tool-panel`、`tools-bar`、`form-control-sm`、`page.style: opts`
