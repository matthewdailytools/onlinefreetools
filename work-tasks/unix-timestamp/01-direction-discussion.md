# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。

## 候选一句话

- 工具做什么：在浏览器内把 **Unix 时间戳（秒/毫秒）** 与 **人类可读日期时间** 互转；同时展示 **UTC** 与**本地时区**；支持「现在」一键填充。
- 谁在什么任务里用：开发者、运维在读日志、调试 API、解读 JWT `exp`/`iat` 时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.8「Unix 时间戳 · dayjs/date-fns/原生 Date · Tier 0」 |
| **B** 场景桥接 | 弱 | 链 `timezone-converter`、`jwt-decoder` |
| **C** 行业专属 | 否 | |

**选定主方向**：A  
**次要互链**：`timezone-converter`, `jwt-decoder`

## 红线自检

- [x] 不是空壳变体
- [x] 不是机翻铺量
- [x] 不依赖重后端
- [x] 不拆 `epoch-converter` 薄页

## 方向专属检查（A）

- 成熟度：✅✅✅；原生 `Date` + `Intl` 即可 MVP
- Tier：**0**
- CWV：即时 debounce

## 结论

- 继续立项：**是**
- 建议 slug：`unix-timestamp`
