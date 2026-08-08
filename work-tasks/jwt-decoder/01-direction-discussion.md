# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内粘贴 JWT 字符串，自动拆成 header / payload / signature 三段；对 header 与 payload 做 **Base64url 解码**并格式化 JSON 展示；**不验证签名**；可选把 `exp`/`iat`/`nbf` 等 claims 转成人类可读时间。
- 谁在什么任务里用：后端、全栈、安全工程师在调试 OAuth/API Bearer token、核对 claims、教学 JWT 结构时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 方向文档 A.6 明确「JWT 解码 · 纯 JS（Base64url）· **不验签**，须声明」；Tier 0 |
| **B** 场景桥接 | 弱（次要互链） | 可与 `unix-timestamp`（claims 时间）、`base64`（Base64url）衔接，但工具本身是通用 JWT 解码 |
| **C** 行业专属 | 否 | 非单一垂直规范页 |

**选定主方向**：A  
**次要互链参考**（可选）：`base64`（Base64url 链）、`unix-timestamp`（`exp`/`iat` 人类可读）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实解码 + claims 解读 + 不验签声明）
- [x] 不是无增量机翻铺量（十语 brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端；无上传）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝** `jwt-parser`、`jwt-debugger`、`decode-jwt-online` 等薄页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；**Tier 0** 原生 `split` + Base64url padding 修正 + `JSON.parse`；无需 jwt 库即可 MVP
- Tier（0 / 1 / 2）：**0**
- CWV / 懒加载注意：即时 debounce 解码；超大 token 软上限；signature 段仅展示原文

### 若选 B

- （不适用为主方向）

### 若选 C

- （不适用）

## 结论

- 继续立项：**是**
- 建议 slug：`jwt-decoder`（路径 `/tools/jwt-decoder`）
- 与已上线工具关系：**新建**；Related 挂 `base64`、`unix-timestamp`（后者上线后互链）
- 进入 `02-tool-info.md` 前仍缺的信息：无
