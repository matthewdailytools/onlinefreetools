# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：一次选多张图，全部转成 PNG 并尽量保留透明，成功项打 ZIP。
- 谁在什么任务里用：要透明底 logo、截图、贴图的人，手里是 JPG/WebP，需要 PNG 结果。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | Canvas PNG `toBlob` + 队列 + ZIP；失败模式与 JPG 页相反（无垫底） |
| **B** 场景桥接 | 部分 | 「要透明底」是场景，主能力仍是浏览器批量转换 |
| **C** 行业专属 | 否 | — |

**选定主方向**：A  
**次要互链参考**：`image-format-converter`、`image-compress`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（保 alpha、体积变大警告、GIF 首帧、无格式下拉相对单文件转换页是另一套主控件）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」（jpg to png / 转 png 并进本页，不拆第二 URL）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Canvas PNG toBlob；ZIP fflate
- Tier：0
- CWV：串行解码一张

### 若选 B

- 场景链：—
- 上游 / 下游工具：—

### 若选 C

立项三问：不适用。

## 结论

- 继续立项：是
- 建议 slug：`bulk-convert-images-to-png`
- 与已上线工具关系：**新建**。related：`image-format-converter`、`image-compress`。
- 进入 `02` 前仍缺的信息：无
- 用户意图审查：见 `02` 专节
