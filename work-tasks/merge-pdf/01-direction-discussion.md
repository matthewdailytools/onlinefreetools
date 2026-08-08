# 01 — 方向讨论

**结论**：新建 `merge-pdf`（`/tools/merge-pdf`），catalog `pdf`，纯客户端 pdf-lib（CDN 1.17.1）。

## 与邻近工具

- `images-to-pdf`：多图→PDF（image）；本工具多 PDF→一 PDF。
- `split-pdf`（#51）：拆分；Related 互链。
- 不做：Office 互转、电子签、加密合并策略（加密源文件失败提示）。

## 技术

- Tier 1：CDN `pdf-lib@1.17.1`；`copyPages` 按列表序；不上传。
- 进页样例：生成两份迷你 PDF → 自动合并可下载。
