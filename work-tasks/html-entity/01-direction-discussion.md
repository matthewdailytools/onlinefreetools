# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器内对文本做 **HTML 实体编码（escape）** 与 **解码（unescape）**；同页切换方向、即时预览、复制/清空；把命名实体 vs 数字实体、编码范围（全量 / 仅非 ASCII / 最小安全集）、双重编码、属性 vs 文本节点等坑讲清楚。
- 谁在什么任务里用：前端/全栈开发者、内容编辑、SEO/邮件模板作者在粘贴 HTML 片段、修复 `&amp;` 乱码、把 Unicode 符号转成 `&#x…;`、或从 API/爬虫拿到的转义字符串还原成可读文本时使用。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 方向文档 A.1 文本与文档格式明确列出「HTML 实体编解码 · `he` 或原生 · Tier 0」；属成熟文本处理品类 |
| **B** 场景桥接 | 弱（次要互链） | 可与 `markdown-to-html` 工作流衔接（Markdown→HTML 后再实体化/反解），但工具本身是通用编解码，非 1→1 场景桥 |
| **C** 行业专属 | 否 | 非单一垂直岗位/规范工具；邮件/HTML 模板作为 Use cases 场景，不拆行业专页 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：Related 挂 `markdown-to-html`（HTML 内容链）、`text-diff`（转义前后对照）；可选 `website-headers`（调试页面/HTML 响应）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实双向交互 + 编码范围/实体形式对照与边界说明）
- [x] 不是无增量机翻铺量（十语走 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端；Tier 0 原生或极小 `he`；无上传）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝** `/tools/html-entity-encoder`、`/tools/html-entity-decoder`、`/tools/html-escape` 等薄页；用 Tab + Use cases + FAQ 覆盖）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅✅；**Tier 0** 优先原生（`textContent`/`innerHTML` 或 DOMParser 解码；编码用替换表 + 非 ASCII → 数字实体）；完整 HTML5 命名实体集可选动态 import `he`（~小体积）作为增强，非必须
- Tier（0 / 1 / 2）：**0**（默认零依赖可交付 MVP；`he` 仅当需完整命名实体表时再 lazy load）
- CWV / 懒加载注意：首屏纯 textarea + 即时转换；若引入 `he` 则首次编码/解码时 lazy import；超大粘贴软上限 + 可选手动 Convert

### 若选 B

- （不适用为主方向；互链见上）

### 若选 C

- （不适用）

## 结论

- 继续立项：**是**
- 建议 slug：`html-entity`（路径 `/tools/html-entity`；编解码同页 Tab）
- 与已上线工具关系：**新建**；Related 挂文本/HTML 链（`markdown-to-html`、`text-diff`）
- 进入 `02-tool-info.md` 前仍缺的信息：无（方向 A.1、Tier 0、slug、合并策略已由方向文档与包调研明确）
