# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。

## 候选一句话

- 工具做什么：选定一个日期时间与源时区，用 **`Intl.DateTimeFormat`** 对照展示多个目标 IANA 时区的本地时间；支持搜索/选择常见时区；**非**团队会议导出包。
- 谁在什么任务里用：远程协作、运维、支持工程师在安排会议、读全球日志、对照 SLA 窗口时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.8「时区 · luxon/Intl · Tier 0/1」 |
| **B** 场景桥接 | 弱 | 与 `meeting-timezone-pack` **边界分离**（本页即时对照，不做 1→N 导出包） |
| **C** 行业专属 | 否 | |

**选定主方向**：A  
**次要互链**：`unix-timestamp`, `ip-address`

## 红线自检

- [x] 不是空壳变体
- [x] 不是机翻铺量
- [x] 不依赖重后端
- [x] 不拆薄页；**不做 meeting-timezone-pack 功能**

## 方向专属检查（A）

- 成熟度：✅✅✅；`Intl` + IANA tz 列表（`Intl.supportedValuesOf('timeZone')` 或 curated 列表）
- Tier：**0**
- CWV：时区列表虚拟化或分组

## 结论

- 继续立项：**是**
- 建议 slug：`timezone-converter`
- 边界：**非** `meeting-timezone-pack`
