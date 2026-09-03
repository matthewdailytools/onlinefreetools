# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：一次选多张 PNG（logo、UI、截图），用同一套最长边 / PNG 重编码把体积压小，**输出仍是 PNG 且保留透明**，成功文件打 ZIP。
- 谁在什么任务里用：设计师、前端、运营要一批透明素材变小，但不接受垫底成 JPEG。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | Canvas PNG `toBlob` + 队列 + ZIP 都是成熟浏览器能力；相对单文件页增量在队列与「禁止默认转 JPEG」规则 |
| **B** 场景桥接 | 部分 | 「多张 PNG 仍要 PNG」是场景，但主卖点仍是浏览器批量作业 |
| **C** 行业专属 | 否 | 不是某一平台规范计算器 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：`image-compress`（单张，常劝 JPEG）、`image-format-converter`（改后缀不是本页）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（保 alpha 的 PNG 队列、体积仍大时的对照说明、ZIP 重名、单张失败跳过相对单文件页是另一套主控件）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（`compress png in bulk` / TinyPNG 类说法并进本页，不拆 tinypng 仿品 URL）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Canvas 2D + `HTMLCanvasElement.toBlob('image/png')`（Tier 0）；ZIP 用现有站内 `fflate` UMD 模式
- Tier（0 / 1 / 2）：0（编码）+ 小体积 ZIP 库
- CWV / 懒加载注意：fflate 与现有 ZIP 页一样同步引入；队列串行、一次只解码一张

### 若选 B

- 场景链（从哪到哪）：—
- 上游 / 下游工具：—

### 若选 C

立项三问：不适用。

## 结论

- 继续立项：是
- 建议 slug：`bulk-compress-png-images`
- 与已上线工具关系（增强 / 新建 / Related）：**新建**。单文件 `image-compress` 不加 `multiple`。related 只链 `image-compress`、`image-format-converter`。
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner 本主题未跑，覆盖表标不适用）
- 用户意图审查（标 ready 前）：见 `02` 专节
