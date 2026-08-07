# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内按质量、最长边和/或目标文件体积压缩图片（可选输出 JPEG/WebP/PNG），展示压缩前后对照，文件不离开本机。
- 谁在什么任务里用：站长/前端减小上站图体积；社交/邮件限制附件大小；卖家缩小商品图再上传（通用体积，非平台合规包）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.2 明确「压缩/缩放/裁剪」Canvas 与「智能压缩」`browser-image-compression`；方向文档「只想验证技术（如图片压缩）→ 走方向 A」；A.13/排期亦列图片压缩为方向 A 成熟项 |
| **B** 场景桥接 | 弱（叙事可借，非主） | 确有「上站 / 附件上限」工作流，但本工具**不绑**具名平台尺寸/体积规范表。方向 B 写明：不做「通用图片压缩器换皮」——那是对 **1→N 平台包** 的约束；本页反而是**诚实的通用压缩器**，与 B 线平台包分工 |
| **C** 行业专属 | 否 | 非单一垂直标准计算器 |

**选定主方向**：A  
**次要互链参考**（可选）：Related 链已上线 `image-format-converter` / `image-exif`；未来可链 `amazon-image-resizer`（「先压体积再按平台出尺寸」）。本页不承担 Seller Central 等规格表。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实本地重编码 + 前后体积/尺寸对照 + 目标体积策略说明）
- [x] 不是无增量机翻铺量（十语走 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端；v1 不默认首屏 Squoosh WASM）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝**单独 `/tools/compress-jpg`、`/tools/reduce-image-size`、`/tools/image-optimizer`、`/tools/compress-png` 等近义薄页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；首选 Canvas `drawImage` + `toBlob`（零依赖）；智能目标体积可用质量迭代或可选 `browser-image-compression`（~10KB，Tier 1）；**本工具 v1 不做** `@squoosh/lib`（Tier 2）
- Tier：**0 为主**（Canvas）；目标体积若用官方推荐包则动态 import 升为 **Tier 1**（实现二选一，见 `02`）
- CWV / 懒加载注意：大图 `createImageBitmap` / 可选 OffscreenCanvas + Worker；勿首屏 WASM；批量时队列 + 进度，防主线程卡死

### 若选 B

- （非主）与平台图包边界：通用「压到约 N KB / 最长边 M px」≠ Amazon 主图合规包；平台名规格另立项

### 若选 C

- （不适用）

## 结论

- 继续立项：是
- 建议 slug：`image-compress`（路径 `/tools/image-compress`；质量 / 缩放 / 目标体积同一页，不拆「仅 JPEG 压缩」「仅减小尺寸」URL）
- 与已上线工具关系：**新建**；Related 默认 `image-format-converter`、`image-exif`（二者 brief 中占位 related 可在实现时改为互链本工具）
- 进入 `02-tool-info.md` 前仍缺的信息：无（主方向、与 B 线边界、与格式转换分工已对齐）
