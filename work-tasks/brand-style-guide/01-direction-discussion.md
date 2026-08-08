# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**。

## 候选一句话

- 工具做什么：根据品牌名 / 行业 / 主色 / 性格标签，**按规则智能预填**一份 Brand Style Guide；结构为 **模块 → 元素 → Do/Don’t 样例**；每一字段可**手动改**；模块可开关；可选用结构 preset（Strict / Product / Friendly）；导出 Markdown / JSON。
- 谁在什么任务里用：独立站站长、小团队品牌负责人、设计师需要可交付的视觉规范草稿，而不是只有色板或 CSS 变量。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | ✅ 主 | 设计师簇：表单 + 规则引擎 + 导出；Tier 0；本地 |
| **B** 场景桥接 | 次要叙事 | 「输入 → 可交付规范文档」是场景 |
| **C** 行业专属 | ❌ | 非单一垂直法规工具 |

**选定主方向**：**A**  
**次要互链参考**：`brand-color-token-pack`、`smart-website-color-scheme`、`wcag-contrast-checker`

## 与邻近工具边界

| 工具 | 主任务 | 本工具不抢 |
|---|---|---|
| `brand-color-token-pack` | 1 主色 → 多空间 + 50–950 | 色阶教学不进本页主线 |
| `smart-website-color-scheme` | 整站语义 CSS tokens | 本页是**规范文档**；色章可链过去细化 |
| `wcag-contrast-checker` | 任意对比度精算 | 本页关键对自检 + Related |
| **本工具** | **Brand style guide 文档**：模块化 + 智能预填 + 手动覆写 + Do/Don’t + 导出 | — |

## 红线自检

- [x] 非空壳变体 / 非机翻铺量 / 非重后端
- [x] 长尾一带多场景：不拆 logo-guide / voice-guide / color-guide 薄页
- [x] 不镜像分发 NASA/Spotify 等官方资产；「智能」不写成云端 AI

## 方向专属检查（A）

- 成熟度：自研映射表 + 现有对比度逻辑；无 WASM
- Tier：**0**
- CWV：表单 + 实时预览文稿；示意用 CSS 块

## 结论

- 继续立项：**是**
- 建议 slug：`brand-style-guide`（覆盖优化后自 `brand-design-guideline` 改名）
- 关系：**新建**；Related 设计簇
- 明细：`notes.md`；定稿：`02-tool-info.md`（`ready`）
