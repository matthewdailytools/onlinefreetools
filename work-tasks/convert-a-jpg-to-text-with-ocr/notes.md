# notes — convert-a-jpg-to-text-with-ocr

立项补充（实现会话只读 `02`/`03` 即可；本文件给 POC 边界）。

## SERP

Planner 分析日 **未**跑人工 Google/Bing SERP。上线前最少看：`jpg to ocr`、`ocr to text`。不得把未采 SERP 写成 `long_gap`。

## POC 清单（写 Page 前）

1. 点后加载体积（tiny vs 点阿语后的包）。
2. 桌面 Chrome：印刷体中英样例 → 可读行、耗时、峰值内存。
3. 一部 Android：同图是否 OOM。
4. 日语：tiny 若不可用，记录 fallback 包名，FAQ 诚实。
5. 确认 COOP/COEP 是否必须；尽量不扩散到全站无关页。

## 引擎（实现时）

npm `@paddleocr/paddleocr-js` 解包约 24 MB，且默认拉 HuggingFace/CDN 模型，无法干净入库。本页落地 **Tesseract.js 7 LSTM-only**（`createWorker(langs, 1)`），脚本与 `eng/chi_sim/ara/jpn` 语言包在 `/vendor/tesseract/`。用户文案不卖库名；References 链 Tesseract + tesseract.js。

## 邻页 FAQ（实现后另议）

`extract-text-from-pdf` / `images-to-pdf` 失败链回本 slug 须 `CROSS_TOOL_UPDATE=1`，本立项不改邻页分片。
