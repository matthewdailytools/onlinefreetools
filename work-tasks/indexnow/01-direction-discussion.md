# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：帮助站长完成 **IndexNow（Bing 等）提交通知**全流程——生成符合协议的 key、下载根路径验证文件、**先检查线上 `{key}.txt` 是否 HTTP 200 且正文匹配**、再批量提交 URL（或粘贴 sitemap 解析后的 URL），并清楚解释 **200 / 202 / 403 / 422** 与「通知成功 ≠ 已收录」。
- 谁在什么任务里用：站长 / SEO / 前端在发版、新工具上线、改重要页面后，想通知 Bing（及参与引擎）尽快发现变更，又不想被「假绿勾 202」误导。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 对齐方向 **A.12 站长 / SEO 辅助**；key 生成与列表处理为 Tier 0；线上 key 探测与 IndexNow POST 经 **Worker `fetch` 代理**（与 `website-headers` / DoH 同类，规避 CORS） |
| **B** 场景桥接 | 弱（次要） | 「发版 → 通知搜索引擎」是场景语境，核心仍是协议交互与状态码解释，不是两格式互转 |
| **C** 行业专属 | 否 | SEO 作 Use cases；非单一垂直规范专页；不拆「仅 Bing 营销」空壳 |

**选定主方向**：A  
**次要互链参考**：Related → `website-headers`（提交后核对响应/重定向）、`add-www-to-dns`（**www 与 apex 是不同 host**，IndexNow 常见踩坑）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实交互：生成 key + 下载验证文件 + Check key + Submit + 状态码释义）
- [x] 不是无增量机翻铺量（十语 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（Worker 只代理 key 探测与 IndexNow POST；不存用户 URL 列表到业务库；限流防滥用）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝** `/tools/bing-indexnow`、`/tools/indexnow-key-checker`、`/tools/yandex-indexnow` 薄页；同页 Tab/模块覆盖）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅；前端零依赖生成 key（`crypto.getRandomValues`）；解析 URL 列表；Worker 代理 `GET keyLocation` 与 `POST https://api.indexnow.org/indexnow`（可选 Bing 直连）
- Tier：生成/预览 **Tier 0**；Check/Submit 为 Worker 能力，按钮触发、不阻塞首屏
- CWV / 懒加载：首屏表单 + 规则摘要；提交结果区按需渲染；无重包

### 若选 B / C

- （不适用为主方向）

## 结论

- 继续立项：**是**
- 建议 slug：`indexnow`（`/tools/indexnow`）
- 与已上线工具关系：**新建**网页工具；站内 `ops/seo/submit-indexnow.*` 仍为运维 CLI，**不**在工具页暴露仓库路径/密钥运维细节；Related：`website-headers`、`add-www-to-dns`
- 进入 `02-tool-info.md` 前仍缺的信息：无（协议状态码、静默失败缺口、Worker 边界已定；限流数值实现阶段定）
