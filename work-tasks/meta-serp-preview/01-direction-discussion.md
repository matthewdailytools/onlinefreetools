# 01 — 方向讨论

**主方向**：**A**（浏览器 JS 能力，纯前端计算与渲染）+ 场景 **B3** 站长上线检查（Meta·SERP 模块）。

## 候选一句话

- 工具做什么：输入 title、description 与 URL，按字符与像素估算显示在 Google 桌面/移动搜索结果里的截断效果。
- 谁在什么任务里用：SEO、内容运营、站长在写 title/description 时先预览会被截成什么样，再发布。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | Canvas `measureText` / 近似宽度表即可完成，无后端 |
| **B** 场景桥接 | 弱 | 可写「发布前预览」场景，但核心是本地计算展示 |
| **C** 行业专属 | 否 | 非单一垂直行话 |

**选定主方向**：A  
**次要互链参考**：`website-headers`、`on-page-seo-checker`（P2）、`markdown-to-html`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（像素估算 + 桌面/移动双预览是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（title 长度 / description 长度 / 字符 vs 像素 同页 FAQ）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无需第三方包；Canvas `measureText`（fallback 近似表）
- Tier：**Tier 0**（零请求，纯本地）
- CWV：无网络依赖；首屏即可交互

## 结论

- 继续立项：是
- 建议 slug：`meta-serp-preview`（保留；检索主词 SERP preview / meta description preview）
- 与已上线工具关系：新建；Related → `website-headers`、`indexnow`、`core-web-vitals-checker`
- 进入 `02-tool-info.md` 前仍缺的信息：无
