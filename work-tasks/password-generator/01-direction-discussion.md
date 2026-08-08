# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。

## 候选一句话

- 工具做什么：用 **`crypto.getRandomValues`** 按用户选项（长度、大小写、数字、符号）生成随机密码；展示**诚实强度说明**（非密码管理器、非破解工具、不保证绝对安全）。
- 谁在什么任务里用：全体用户注册账号、轮换 API key、临时共享口令时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.6「密码强度/随机密码 · Tier 0」 |
| **B** 场景桥接 | 弱 | 链 `uuid-generator`、`file-hash` |
| **C** 行业专属 | 否 | |

**选定主方向**：A  
**次要互链**：`uuid-generator`, `file-hash`

## 红线自检

- [x] 不是空壳变体
- [x] 不是机翻铺量
- [x] 不依赖重后端
- [x] 不拆 `strong-password` / `random-password` 薄页

## 方向专属检查（A）

- 成熟度：✅✅✅；CSPRNG 原生
- Tier：**0**
- CWV：即时；Disclaimer 可见

## 结论

- 继续立项：**是**
- 建议 slug：`password-generator`
- YMYL：否，但须轻量安全 Disclaimer
