# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：Filter a card list and copy a ready formula; not a condition builder.
- 谁在什么任务里用：有一张表或一条公式、要在浏览器里办完这件事的人。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 公式字符串 / Canvas / SheetJS 本地读写 |
| **B** 场景桥接 | 否 | 填业务字段 → 下载 xlsx |
| **C** 行业专属 | 否 | 无单一岗位规范 |

**选定主方向**：A

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认一带多场景；不建 online-excel 套件壳

## 结论

- 继续立项：是
- 建议 slug：`excel-formulas-cheat-sheet`
- 与已上线工具关系：新建；Related `write-nested-if-formula-for-excel, write-ifs-formula-in-excel`
