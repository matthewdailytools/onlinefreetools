# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内对照片/图片做「智能」体积压缩（按质量、最长边、目标体积逼近），本地完成、前后对照。
- 谁在什么任务里用：发帖/邮件/上站前缩小照片体积；表单附件上限；需要「压到约 N KB」又不想上传到第三方压缩站。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.2 明确「压缩/缩放」Canvas 与「智能压缩」`browser-image-compression`（Tier 1）；方向文档「只想验证技术（如图片压缩）→ 走方向 A」 |
| **B** 场景桥接 | 弱 | 「照片发帖 / 附件」可作叙事，但不绑具名平台规格表；B 线禁止「通用压缩器换皮」做 1→N 平台包 |
| **C** 行业专属 | 否 | 非单一垂直标准计算器 |

**选定主方向**：A（若独立做页；本夹结论为**不新建页**）  
**次要互链参考**：继续走已上线 `image-compress` 的 related（format-converter / exif / crop）。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — **本请求若新建 URL 即踩此线**（与 `image-compress` 同流水线：缩放 + 质量 + 目标体积）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL — **拒绝** `/tools/photo-compress`、`/tools/smart-image-compress`、`/tools/compress-photo` 等近义薄页

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；Canvas `toBlob` 质量迭代已在 `image-compress` 落地；库名「智能压缩」= 方向表对 `browser-image-compression` 的别称，非独立产品线
- Tier：0（Canvas）为主；目标体积迭代可选 Tier 1
- CWV：同 `image-compress`（大图注意 Worker / 勿首屏 WASM）

### 与已上线工具对照

| 说法 | 是否新意图 | 结论 |
|---|---|---|
| 「图片压缩」 | 否 | 已立项并实现：`work-tasks/image-compress/` → `/tools/image-compress` |
| 「智能压缩」 | 否 | 方向 A.2 功能别名；现页已有目标体积二分逼近（智能策略） |
| 「照片」压缩 | 否 | 同一位图流水线；手机 JPEG 是主场景之一，已在 Use cases / Example 覆盖，不拆「仅照片」URL |

## 结论

- **继续独立立项：否**
- 建议 slug：**不新建**；产品入口与 SEO 主词继续用 `image-compress`
- 与已上线工具关系：**映射 / 等同** → `image-compress`（状态 `implemented`，`03` 为 `i18n-done`）
- 若用户要的是增强（非新页）：可在 `image-compress` 上迭代（例如可选动态 import `browser-image-compression`、批量 ZIP、更多「照片」场景预设）——须另开增强需求，本夹不展开实现
- 进入完整新工具 `02` 前仍缺的信息：无（因不新建）
