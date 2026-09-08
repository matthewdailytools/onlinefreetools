# notes — 相对 N1 的 Information Gain（实现备忘）

本页存在的唯一理由：主控件与产物和 `convert-a-jpg-to-text-with-ocr` **不是同一作业**。若实现后用户感知仍是「单张页加了多选」，即 doorway，须返工。

## 对照（给 Page 作者）

| 决策 | 采用 | 不要 |
|---|---|---|
| 主输入 | `multiple` 队列，可追加到 10 | 两个 dropzone；PDF 第二输入 |
| 主按钮 | Convert all | 沿用 N1 的 Convert 当唯一主按钮 |
| 失败 | 行内 skip | 一张坏图清空整表 |
| 下载 | ZIP（per-file + 默认 combined） | 只给一个 textarea 让用户自己复制十次 |
| 合并 | `--- filename ---` 纯文本分隔 | 假装成 Word/可检索 PDF |
| 引擎 | 复用 N1 单 Worker 串行 | 并行多个 WASM「更快」 |
| SEO | H1=批量任务句；单张头词 FAQ 链 N1 | H1=JPG to text / Batch OCR 光杆 |
| 互链 | related 第一位 N1 | related 只链 PDF 页、不提单张 OCR |

## 默认 ZIP 清单（Example 须一致）

- `sample-1.txt`
- `sample-2.txt`
- `combined.txt`（两段，中间一行 `--- sample-1.jpg ---` 风格分隔）

关掉「附 combined」时 ZIP 仅 per-file；默认**开**，这样不打开高级设置也有合并增益。

## 实现后必做（非本立项会话）

- N1 FAQ「批量呢？」从「一次一张」改为链本 slug（`CROSS_TOOL_UPDATE=1`）。
- `npm run verify:tool -- --slug=batch-convert-jpg-to-text-with-ocr`
