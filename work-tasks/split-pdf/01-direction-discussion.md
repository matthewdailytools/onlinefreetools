# 01 — 方向讨论

**结论**：新建 `split-pdf`（`/tools/split-pdf`），catalog `pdf`，pdf-lib + CDN fflate（多文件 ZIP）。

## 与邻近工具

- `merge-pdf`：合并；Related 互链。
- `images-to-pdf`：图→PDF；FAQ 分工。
- 不做：密码破解、organize/rotate 全功能（后续行号）。

## 技术

- 模式：每页一文件 / 自定义范围（`1-3,5`，1-based）。
- 输出：1 个文件直接下载 PDF；>1 用 fflate ZIP。
- 进页样例：3 页迷你 PDF → 每页拆分 → ZIP 可下载。
