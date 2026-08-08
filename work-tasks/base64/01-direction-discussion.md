# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。

## 候选一句话

- 工具做什么：在浏览器内对**文本或文件字节**做 Base64 **编码/解码**；UTF-8；可选 **Base64url**；同页 Tab 切换；与 `image-to-base64` **分工明确**（本页通用文本/字节，不主打图片）。
- 谁在什么任务里用：开发者在做 API payload、JWT 片段、配置串、二进制调试时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | A.6「Base64 / URL · 原生 · Tier 0」 |
| **B** 场景桥接 | 弱 | 链 `jwt-decoder`、`html-entity`、`image-to-base64` |
| **C** 行业专属 | 否 | |

**选定主方向**：A  
**次要互链**：`image-to-base64`, `jwt-decoder`, `html-entity`

## 红线自检

- [x] 不是空壳变体
- [x] 不是机翻铺量
- [x] 不依赖重后端
- [x] 不拆 encoder/decoder 薄页；**不与 image-to-base64 撞 intent**

## 方向专属检查（A）

- 成熟度：✅✅✅；`btoa`/`atob` + UTF-8 `TextEncoder`；Base64url 转换
- Tier：**0**
- CWV：即时；大文本软上限

## 结论

- 继续立项：**是**
- 建议 slug：`base64`（**非** image-to-base64）
- 关系：**新建**；Related 见上
