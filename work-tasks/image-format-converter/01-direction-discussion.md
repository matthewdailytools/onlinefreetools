# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内把图片在 PNG / JPEG / WebP / AVIF 之间互转（质量可调、透明通道策略可讲清、编码结果校验），文件不离开本机。
- 谁在什么任务里用：站长/前端把 PNG 截图或照片压成 WebP/AVIF 上站；设计师把透明 PNG 转 JPEG（需铺底色）；协作者把 AVIF 下载转成 JPEG 给旧软件打开。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.2 明确「格式转换 PNG/JPEG/WebP/AVIF」、Canvas `toBlob`、成熟度 ✅✅✅、零依赖首选；方向文档「只想验证技术（如图片压缩）→ 走方向 A」同类 |
| **B** 场景桥接 | 弱（叙事可借场景，非主） | 确有「上站交付 / 兼容旧工具」工作流，但本工具**不绑**具名平台规格表；方向 B 图片线强调「不做无平台名的万能换皮」，那是 1→N 规格包（Amazon / OG 等），与本页不同 |
| **C** 行业专属 | 否 | 非单一垂直行话/标准计算器 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：未来 Related 可链方向 B 的 `amazon-image-resizer` / `social-share-image-pack`（「转完格式再按平台出尺寸」）；本页不承担平台合规表。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实本地转码 + 格式对照表 + 透明/回退边界）
- [x] 不是无增量机翻铺量（十语走 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端 Canvas；AVIF 编码浏览器受限时诚实降级/提示，不默认首屏拉 Squoosh WASM）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝**单独 `/tools/png-to-webp`、`/tools/jpg-to-png`、`/tools/avif-to-jpg` 等近义薄页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；首选原生 Canvas `drawImage` + `toBlob`（零依赖）；高级编解码可选 `@squoosh/lib`（**本工具 v1 不做**，避免 Tier 2 首屏体积）
- Tier：**0**（原生 API；无动态 import 库）
- CWV / 懒加载注意：大图用 `createImageBitmap` / 可选 OffscreenCanvas + Worker（实现阶段）；勿首屏拉 WASM；批量多文件时防主线程卡死（队列 + 进度）

### 若选 B

- （非主）场景链备注：源格式图 → 目标交付格式；上游截图/导出，下游 CMS/CDN/邮件附件；平台尺寸包另立项

### 若选 C

- （不适用）

## 结论

- 继续立项：是
- 建议 slug：`image-format-converter`（路径 `/tools/image-format-converter`；四格式同一页用目标格式选择器，不拆双向/单对 URL）
- 与已上线工具关系：**新建**（catalog 尚无图片类）；Related 暂用占位（见 `02`），上线图片压缩 / Base64 / 平台图包后替换
- 进入 `02-tool-info.md` 前仍缺的信息：无（技术路径、主方向、合并策略、与 B 线边界已对齐方向文档 A.2）
