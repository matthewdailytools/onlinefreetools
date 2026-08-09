# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C）。

## 候选一句话

- 工具做什么：输入落地页 URL 与 utm_source / medium / campaign / term / content，按 Google Analytics 的 UTM 规范拼出带参数的可分享链接，并给出每个参数的推荐写法。
- 谁在什么任务里用：营销 / 增长运营在投放、社媒、邮件、QR 码里加追踪参数，确保 GA4 里能区分渠道。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是（主） | URL 拼接 + 编码 + 校验全部本地完成 |
| **B** 场景桥接 | 强 | 活动追踪场景；输入 URL+参数 → 输出可发布链接 |
| **C** 行业专属 | 弱 | 营销通用任务，非单一垂直 |

**选定主方向**：A  
**次要互链参考**：`indexnow`（URL 提交场景）、`website-headers`（链接健康检查）、`meta-serp-preview`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（参数校验、URL 编码规则、推荐命名、GA4 归因说明是真实增量）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（纯浏览器）
- [x] 长尾默认「一带多场景」（utm_source/medium/campaign 长度、编码、URL 覆盖同页 FAQ）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：无第三方包；URLSearchParams / 手写编码规则
- Tier（0 / 1 / 2）：Tier 0
- CWV / 懒加载注意：零网络依赖

## 结论

- 继续立项：是
- 建议 slug：`utm-builder`（保留；主词 UTM builder / campaign url builder）
- 与已上线工具关系：新建；Related → `indexnow`、`website-headers`
- 进入 `02-tool-info.md` 前仍缺的信息：无
