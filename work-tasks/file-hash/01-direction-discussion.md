# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。

## 候选一句话

- 工具做什么：在浏览器内对**文本或文件**计算 MD5、SHA-1、SHA-256、SHA-512 等十六进制摘要；SHA 系用 **Web Crypto API**；MD5 用 **lazy `crypto-js`**；纯本地不上传。
- 谁在什么任务里用：开发者、发布工程师、运维在核对安装包 checksum、对比配置/日志指纹、验证下载完整性时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.6「SHA / AES · Web Crypto」+「MD5 · crypto-js」；file hash 为可落地工具 |
| **B** 场景桥接 | 弱 | 可与 `text-diff`（摘要对照）、`base64`（编码链）互链 |
| **C** 行业专属 | 否 | |

**选定主方向**：A  
**次要互链**：`base64`, `text-diff`

## 红线自检

- [x] 不是空壳变体（多算法 + 文本/文件 + 大文件分块说明）
- [x] 不是机翻铺量
- [x] 不依赖重后端
- [x] 不拆 `md5-calculator` / `sha256-hash` 近义 URL

## 方向专属检查（A）

- 成熟度：✅✅✅；Web Crypto `subtle.digest`；MD5 lazy `crypto-js`；大文件 `FileReader` 分块
- Tier：**0/1**（SHA Tier 0；MD5 Tier 1 lazy）
- CWV：大文件异步 + 进度；首次 MD5 才载库

## 结论

- 继续立项：**是**
- 建议 slug：`file-hash`
- 关系：**新建**；Related `base64`, `text-diff`
