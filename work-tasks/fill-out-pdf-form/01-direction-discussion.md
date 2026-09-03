# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：Render form fields UI; fill values; flatten optional.
- 谁在什么任务里用：需要 fill out a pdf form 的办公/个人用户

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | pdf-lib / pdf.js / mammoth 等 CDN |
| **B** 场景桥接 | 否 | 单场景页 |
| **C** 行业专属 | 否 | 通用 PDF |

**选定主方向**：A

## 红线自检

- [x] 不是空壳变体
- [x] 一带多场景在同页芯片
- [x] 本地处理

## 结论

- 继续立项：是
- 建议 slug：fill-out-pdf-form
