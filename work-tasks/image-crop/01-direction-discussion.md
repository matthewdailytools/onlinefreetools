# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内对图片做裁剪与改尺寸（自由选区 / 常用比例 / 指定宽高），预览后导出，文件不离开本机。
- 谁在什么任务里用：社交发帖定构图；头像/封面按比例裁切；前端把素材改成固定像素再上站（通用尺寸，非平台合规包）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.2 明确「压缩/缩放/裁剪」Canvas / OffscreenCanvas；可落地工具列表含「尺寸裁剪」；成熟度 ✅✅✅ |
| **B** 场景桥接 | 弱（叙事可借，非主） | 确有「头像 / 封面 / 上站」场景，但本工具**不绑**具名平台尺寸表 + ZIP 多规格。方向 B 的 1→N 图包（Amazon、iOS 截图等）另页；本页是通用裁剪器 |
| **C** 行业专属 | 否 | 非单一垂直标准计算器 |

**选定主方向**：A  
**次要互链参考**：Related → `image-compress`、`image-format-converter`；未来可链 `amazon-image-resizer`（「先裁好构图再出平台包」）。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实本地裁剪/缩放 + 选区规则 + 输出尺寸对照）
- [x] 不是无增量机翻铺量（十语走 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端 Canvas；v1 可不引入 cropperjs，或 Tier 1 动态 import）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝**单独 `/tools/crop-image`、`/tools/resize-image`、`/tools/crop-to-square`、`/tools/instagram-crop` 等近义薄页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；首选 Canvas `drawImage` 源矩形→目标画布 + `toBlob`；可选 `cropperjs`（Tier 1，交互更强，须懒加载 CSS/JS）
- Tier：**0 为主**（自绘选区或数值输入）；若 UX 不够再 Tier 1 动态 import cropperjs
- CWV：大图软上限；勿首屏重库；选区拖拽注意触控

### 若选 B

- （非主）与平台图包边界：通用 1:1 / 16:9 / 自定义 px ≠ Amazon 主图多尺寸 ZIP

### 若选 C

- （不适用）

## 结论

- 继续立项：是
- 建议 slug：`image-crop`（路径 `/tools/image-crop`；裁剪 + 改尺寸同一页，不拆「仅 resize」「仅正方形」URL）
- 与已上线工具关系：**新建**；Related：`image-compress`、`image-format-converter`
- 进入 `02-tool-info.md` 前仍缺的信息：无
