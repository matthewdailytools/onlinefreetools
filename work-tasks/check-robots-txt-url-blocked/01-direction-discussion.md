# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**。

## 候选一句话

- 工具做什么：User pastes a page URL; Worker fetches origin /robots.txt; tool reports whether that path is allowed for a chosen user-agent (default Googlebot + *), and shows matched Allow/Disallow rules.
- 谁在什么任务里用：站长 / SEO / 安全与运维在发布或排障时检查站点可抓取性、发现文件或邮件认证 DNS。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 表单 + Worker fetch/DoH/CT；成熟站长检测品类；Tier 1 边缘请求 |
| **B** 场景桥接 | 次要 | 与 generator / headers / IndexNow 互链 |
| **C** 行业专属 | 否 | 通用站长任务，非垂直岗位包 |

**选定主方向**：A  
**次要互链参考**：`robots-txt-generator`, `website-headers`, `on-page-seo-checker`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（校验/发现 ≠ 生成）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（Worker 短请求即可）
- [x] 长尾默认一带多场景，不拆近义 URL

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Fetch + 轻量解析（robots / XML / security.txt / CT JSON / DoH TXT）
- Tier：1（边缘请求；首屏不拉大 WASM）
- CWV / 懒加载注意：结果区按需渲染；限流与超时

## 结论

- 继续立项：是
- 建议 slug：`check-robots-txt-url-blocked`
- 与已上线工具关系：新建；Related 见上；Forbid absorb into robots-txt-generator; generation ≠ validation (§3.3 E).
- 进入 `02-tool-info.md` 前仍缺的信息：无（0b+0i 已写入）
- 用户意图审查（标 ready 前）：见 `02` 专节
