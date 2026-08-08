# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`base64`  
**路径**：`/tools/base64`  
**主方向**：A（A.6 · Tier 0 原生）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> **与 `image-to-base64` 边界**：本页通用文本/字节 Base64；图片专用见 Related。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. base64 encode decode / Base64 编解码  
  2. base64 encoder / base64 decoder  
  3. base64url encode  
  4. text to base64 / utf-8 base64  
  5. base64 online converter
- 用户真实任务：把 UTF-8 文本或文件字节编成 Base64，或反向解码；JWT/API 场景可能需要 **Base64url**。
- [x] 竞品 SERP：双向框、Copy、UTF-8 说明、部分 Base64url
- [x] 缺口（≥3）：UTF-8 多字节；Base64 vs Base64url；文件 vs 文本；padding；与图片 Base64 混淆；Unicode 解码失败
- [x] 增益：Rules 对照表；Base64url 选项；边界 FAQ；Use cases（API/JWT/配置）；Example 固定；Related 分 intent
- [x] 长尾：**合并本页** Tab Encode|Decode + url 选项
- [x] 权威：https://www.rfc-editor.org/rfc/rfc4648
- [x] Use cases：API payload；调试 Base64url；配置串 embed
- [x] 边界：非法字符；padding 错误；超大文本
- [x] Example：`Hello 世界` ↔ Base64
- [x] Related：`image-to-base64`, `jwt-decoder`, `html-entity`

### §3.1 维度

**硬性勾选**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ RFC 4648）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · A.6 · P1（序号 20） |
| 场景与行业 | 开发者：编码调试 |
| 技术 | Tier 0：`TextEncoder`+`btoa`；文件 `FileReader`；Base64url 转换选项；**不上传** |
| Title (en) | `Base64 Encode & Decode — Convert Text in Your Browser \| {Brand}` |
| Description 要点 | ≥120；Encode/Decode 步骤 + UTF-8 + Base64url + 示例 |
| FAQ | Base64 vs Base64url；Unicode；与图片工具区别；是否上传 |
| related | `image-to-base64`, `jwt-decoder`, `html-entity` |
| 验收 | loadSample 自动 encode；url 模式有效 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `base64`（与 `image-to-base64` 分工；用户搜 base64 encode decode） |
| 主检索词 → title/H1 | base64 encode decode / Base64 编解码 → H1「Base64 Encode & Decode — Convert Text in Your Browser」 |
| 次要关键词 → desc / FAQ / Use cases | base64url→Rules+选项；utf-8→FAQ；image→Related 边界 |
| 用户搜索习惯判断 | 用户搜「base64 encode」「text to base64」要转换结果；H1 不写「UTF-8 & Base64url」参数目录 |
| 优化摘要 | 2026-08-08：H1 由「Text, UTF-8 & Base64url」改为「Convert Text in Your Browser」；slug 保留 base64 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- Tab Encode | Decode；选项 **Standard / Base64url**；文本或文件；Convert / Copy / Clear / Load sample
- Encode：`Hello 世界`（UTF-8）→ `SGVsbG8g5LiW55WM`（standard）
- Decode 反向；url 模式 `-`/`_` 无 padding
- **进页样例**：loadSample 填 `Hello 世界`、Encode、**自动 Convert**

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏（进页自动样例）
- [x] How it works
- [x] Rules
- [x] Example
- [x] Use cases ×3
- [x] FAQ ≥3
- [x] Related ≥2
- [x] References
- [x] Disclaimer
- [x] `03` 已填
- [x] README/catalog 实现时
- [x] 不拆 encoder/decoder 薄页

## 与相邻工具边界

| 工具 | 本页不做 | 本页可做 |
|---|---|---|
| `image-to-base64` | 图片预览/下载主流程 | 通用文本/字节 + Base64url |
| `jwt-decoder` | JWT 三段子 | Related 互链 |
| `html-entity` | HTML 实体 | Related 互链 |
