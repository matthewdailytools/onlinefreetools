# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：从一张本地图片提取主色板（可调色数），展示并可复制 HEX / RGB / HSL。
- 谁在什么任务里用：设计师/站长从照片或 UI 截图抓品牌主色；写 CSS 变量前快速取样。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.2 主色提取（colorthief / Canvas 量化）；D.1 `color-from-image` P1 |
| **B** 场景桥接 | 弱 | 非平台规格包；输出色值而非多规格 ZIP |
| **C** 行业专属 | 否 | 通用设计任务 |

**选定主方向**：A  
**次要互链参考**：`how-to-calculate-gradient`；图片簇 `image-crop`；未来 `brand-color-token-pack` / `wcag-contrast-checker`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实量化 + Rules 算法 + 边界）
- [x] 不是无增量机翻铺量（十语 brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（拒绝 `extract-palette` / `dominant-color` 双页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；Tier 0：缩略图 + `getImageData` + 中位切/桶量化（可不引 colorthief）；可选 Tier 1 轻量库
- Tier：**0**（首选零依赖）
- CWV / 懒加载注意：大图先缩放到最长边 ≤256 再采样；勿首屏重库

## 结论

- 继续立项：是
- 建议 slug：`color-from-image`（`/tools/color-from-image`）
- 与已上线工具关系：**新建**；catalog `image`；Related：`how-to-calculate-gradient` + `image-crop`
- 进入 `02-tool-info.md` 前仍缺的信息：无（独立页 vs token pack 已按计划锁定独立）
