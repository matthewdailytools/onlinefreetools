# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。

## 候选一句话

- 工具做什么：在浏览器内生成 **UUID v4** 与 **ULID**；可批量；复制/清空；纯 `crypto.getRandomValues`（UUID）与 ULID 规范实现。
- 谁在什么任务里用：后端、全栈、DBA 在创建测试数据、临时 ID、分布式 trace id 时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.6「UUID / ULID · uuid / ulid · Tier 0/1」 |
| **B** 场景桥接 | 弱 | 链 `password-generator`、`file-hash` |
| **C** 行业专属 | 否 | |

**选定主方向**：A  
**次要互链**：`password-generator`, `file-hash`

## 红线自检

- [x] 不是空壳变体
- [x] 不是机翻铺量
- [x] 不依赖重后端
- [x] 不拆 `uuid-v4` / `ulid-generator` 薄页

## 方向专属检查（A）

- 成熟度：✅✅✅；UUID v4 原生；ULID 可零依赖或 tiny lib lazy
- Tier：**0/1**
- CWV：批量生成异步分批

## 结论

- 继续立项：**是**
- 建议 slug：`uuid-generator`
- 关系：**新建**；P2 排期
