# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内用 **WASM 专业编解码器**（MozJPEG / OxiPNG / WebP / AVIF 等）优化图片体积与观感，提供编解码器级参数与前后对照；文件不离开本机；引擎点击后再加载。
- 谁在什么任务里用：站长/前端要「上站前尽量小、又能肉眼接受」的 WebP/AVIF/JPEG；设计/运营要对照前后画质再定稿；需要比 Canvas `toBlob` 更可控的编码器（如 MozJPEG、OxiPNG）时。

## SEO 命名（相对「高级编解码」）

「高级编解码」是方向 A.2 / 包调研里的**工程标签**，用户几乎不会这样搜。

| 说法 | 是否像检索词 | 结论 |
|---|---|---|
| 高级编解码 / advanced codec / image encoder-decoder | 否（工程师黑话） | **不作** title / slug 主词 |
| 图片压缩 / image compressor / compress image | 是（量最大） | **已被** `image-compress` 占用；本页若再抢易 doorway |
| 图片优化 / image optimizer / optimize image for web | 是（偏「上站/体积+画质」） | **推荐主词**；与「只压体积」的 compress 有可讲清差异 |
| 网页图片优化 / optimize images for web / reduce image size for website | 是（场景长尾） | 进 description / Use cases / FAQ，不拆 URL |
| MozJPEG / OxiPNG / compress to AVIF | 偏技术/长尾 | 进控件名、Rules、FAQ；可作副意图，不单开薄页 |
| Squoosh / Squoosh alternative | 品牌/竞品词 | FAQ 可提及「同类本地 WASM」；**不**把竞品名当 H1 |

**建议对外名（en / zh）**

- EN title 主词：`Image Optimizer`（副标题结果向：codec 级优化、本地、前后对照）
- ZH title 主词：`图片优化`（副标题：更小体积、可调编码器、本地完成）
- slug：`image-optimizer`（对齐现有 `image-*` 集群；路径 `/tools/image-optimizer`）

**明确拒绝的 slug**：`advanced-image-codec`、`image-encoder-decoder`、`squoosh-*`、`photo-optimizer`（与 compress 近义）、再建一个 `image-compressor-pro`。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.2 明确「高级编解码」+ Tier 2 Squoosh 系 WASM；加载分层要求「点击后再拉」 |
| **B** 场景桥接 | 弱 | 「上站减体积」可作叙事，但不绑具名平台规格表 |
| **C** 行业专属 | 否 | 非单一垂直标准计算器 |

**选定主方向**：A  
**次要互链参考**：Related → `image-compress`（轻量 Canvas 压体积）、`image-format-converter`（只换 MIME）、`image-exif`（清元数据）；未来平台尺寸包（B 线）可链「优化完再出规格」。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 须有 **WASM 编解码器选择 + 编解码器参数 + 前后对照 + 体积/尺寸结果**；与 Canvas 压缩页流水线不同
- [x] 不是无增量机翻铺量 — 十语走 locale brief + ≥3 轮
- [x] 不依赖偏离定位的重后端 — 纯客户端；**禁止**默认首屏拉全量 WASM
- [x] 长尾默认「一带多场景」— **拒绝** `optimize-webp` / `mozjpeg-compress` / `avif-optimizer` / `oxipng-online` 等近义薄页；同页用「输出格式/编码器」切换覆盖

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅（能力成熟）；方向表写 `@squoosh/lib`，但该包 **已停止维护** → 实现优先 **`@jsquash/*`**（Squoosh 同源编解码器、可按编码器分片懒加载）：`jpeg`（MozJPEG）、`webp`、`avif`、`png` / `oxipng`（按包可用性选型）；可选 resize 预处理
- Tier：**2**（>1MB 量级；**明确按钮「加载优化引擎」后再 `import()`**；按所选编码器再拉对应 WASM）
- CWV / 懒加载注意：首屏零 WASM；Worker 编码防卡死；大图内存上限与超时提示；AVIF 编码慢要诚实写进 UI/FAQ；勿与 `image-compress` 首屏抢同一「一键压」心智而不说明差异

### 与已有图片工具边界

| 工具 | 用户意图 | 技术 | 本页关系 |
|---|---|---|---|
| `image-compress` | 快速减小体积（质量 / 最长边 / 目标 KB） | Tier 0 Canvas `toBlob` | **互补**：轻量入口；本页是「要编码器级控制 / 更好压缩率」 |
| `image-format-converter` | 换 MIME（含透明铺底） | Tier 0 Canvas | **互补**：只转格式时用它；本页主目标是**优化体积/画质**，换格式是手段 |
| `photo-smart-compress` | （曾提议） | — | **已否决新建**；勿再开近义 compress URL |
| 本页 `image-optimizer` | 上站优化：选编码器、调参、对照后再下载 | Tier 2 WASM | **新建** |

## 结论

- 继续立项：**是**（有可验证技术增量 + 检索向主词与 compress 可区分）
- 建议 slug：`image-optimizer`
- 与已上线工具关系：**新建**；Related 互链 compress / format-converter / exif
- 进入 `02-tool-info.md` 前仍缺的信息：无（命名、边界、Tier、包路径替代方案已对齐）；实现前可做一次 `@jsquash` 体积与 AVIF 耗时 POC（不阻塞 `02`）
- **2026-08-07 用户确认**：主词 Image Optimizer / 图片优化；v1 含 AVIF；对照 UI 为滑动对比 → `02` 已改 `ready`
