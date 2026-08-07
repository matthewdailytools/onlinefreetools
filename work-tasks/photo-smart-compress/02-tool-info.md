# 02 — 工具信息定稿

**状态**：`wont-create`（映射既有工具；**不**注册新 slug）  
**映射 slug**：`image-compress`  
**映射路径**：`/tools/image-compress`  
**本夹讨论 slug（废弃）**：`photo-smart-compress` / `smart-image-compress` / `compress-photo`  
**主方向**：A（A.2 图片处理 · 智能压缩别名）  
**catalog 分类**：`image`（沿用既有页）  
**YMYL**：否  
**Locale briefs**：不新建；沿用 `work-tasks/image-compress/03-locale-briefs.md`（`i18n-done`）

> 权威依据：方向文档 A.2「智能压缩」；红线「长尾一带多场景 / 禁近义 doorway」；既有定稿 `work-tasks/image-compress/02-tool-info.md`（`implemented`）。

---

## 判定摘要

用户「照片图片智能压缩」与已上线 **图片压缩** 为同一用户任务与同一技术流水线：

1. **智能** = 方向表对目标体积策略 / `browser-image-compression` 的叫法；现页已用质量迭代逼近目标 KB，并展示达不到时的「最接近」结果。  
2. **照片** = 输入类型（手机 JPEG 等），非独立品类；与「截图 PNG」共用控件，不拆 URL。  
3. 再开 `photo-compress` / `smart-image-compress` 易成仅换 title 的近义薄页（doorway / scaled thin URL 风险）。

**产品动作**：不新建工具页；需要入口时链到 `/tools/image-compress`。  
**可选后续（非本立项范围）**：在 `image-compress` 上做增强（库切换、批量、照片向预设文案微调）——另开增强 brief。

---

## IG 预审（为何不拆页）

- 目标主词 / 长尾：compress photo / 照片压缩 / smart compress / 压到 100KB → **已列入** `image-compress` 长尾合并清单，FAQ/Use cases 覆盖。  
- 长尾：合并进 `image-compress`，**不**满足 §3.3 拆页条件（无独立规则表、无独立失败语义、无平台规格差异）。  
- Related：不变（format-converter、exif、crop）。

### 计划勾选的 §3.1 维度

不适用新建页。既有页已覆盖 ①②③④⑤⑥⑦⑧⑨（见 `image-compress/02`）。

---

## 开发 / SEO 卡片（占位 · 不实现）

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | —（不排期新建） |
| 技术 | 沿用 `imageCompressPage.ts`（Canvas + 目标体积迭代） |
| Title / Schema / FAQ | 不另写；勿新建近义 title 变体页 |
| related | 无新 slug |
| 验收 | 本夹结论被确认：**无** `/tools/photo-smart-compress` 等路由；首页/目录不重复挂「智能压缩」第二张卡指不同 URL |

## 页面模块清单

- [x] 不新建模块清单（指向既有页）
- [x] **不**注册 `photo-smart-compress` / `smart-image-compress` / `compress-photo` / `photo-compress`

## 与相邻工具边界

| 工具 | 关系 |
|---|---|
| `image-compress` | **本请求的正式落地页** |
| `image-format-converter` | 换 MIME 为主；压缩页可为体积选 JPEG/WebP |
| `image-crop` | 构图/固定像素框；非体积逼近 |
| 方向 B 平台图包 | 具名规格 + ZIP；非本请求 |
