# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C）。

## 候选一句话

- 工具做什么：粘贴网页 head 里的 Open Graph / Twitter Card 标签，按 Facebook、X（Twitter）与通用社交平台的渲染规则预览分享卡片；也可粘贴 URL 由 Worker 拉取标签。
- 谁在什么任务里用：内容运营 / 站长在发布链接到社媒前，检查 og:title、og:image、卡片尺寸与预览效果。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | 粘贴标签本地解析 + CSS 模拟卡片渲染；无需后端 |
| **B** 场景桥接 | 强 | B3 上线检查 / 社交发布前检查场景 |
| **C** 行业专属 | 弱 | 营销/社媒运营通用任务，非单一垂直 |

**选定主方向**：A（本地渲染）+ B3 场景  
**次要互链参考**：`social-share-image-pack`（P1 未上线）、`meta-tag-generator`、`meta-serp-preview`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（Facebook/X 差异、og:image 尺寸规则、预览渲染是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（标签粘贴本地渲染；URL 拉取复用 Worker 模式）
- [x] 长尾默认「一带多场景」（OG + Twitter Card + 多平台预览同页，不拆平台 URL）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无第三方包；正则解析 og: / twitter: 标签；CSS 卡片模拟
- Tier（0 / 1 / 2）：Tier 0（粘贴）/ +Worker（URL 拉取）
- CWV / 懒加载注意：本地渲染；图片懒加载

## 结论

- 继续立项：是
- 建议 slug：`open-graph-preview`（保留；主词 open graph preview / og checker）
- 与已上线工具关系：新建；Related → `meta-tag-generator`、`meta-serp-preview`（`social-share-image-pack` 未上线暂不互链，待其上线后补）
- 进入 `02-tool-info.md` 前仍缺的信息：无
