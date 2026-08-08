# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**。

## 候选一句话

- 工具做什么：输入品牌主色（可选多主题），生成**网站可用的语义配色方案**——中性色阶 + 品牌衍生（action/hover/soft/focus）+ 语义角色（bg/surface/text/border/**中性 link**/action）+ **与品牌解耦的状态色**；轻量 UI 预览；导出 CSS 变量（primitives → semantics）。
- 谁在什么任务里用：前端 / 独立站主 / 设计师在搭浅色工具站或落地页主题时，需要「能直接贴进 `:root`」的整站色板，而不是只好看的五色灵感板或单色 50–950。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | ✅ 主 | 专题 D.1 设计师簇 A.9：配色桥工具；纯 JS HEX 推衍 + 相对亮度自检；Tier 0 |
| **B** 场景桥接 | 次要叙事 | 「主色 → 可上线 site tokens」是场景，但技术品类仍归设计配色 A |
| **C** 行业专属 | ❌ | 非单一垂直岗位规范工具 |

**选定主方向**：**A**  
**次要互链参考**：`brand-color-token-pack`（色阶/多空间）、`wcag-contrast-checker`（精细对比）、`color-from-image`（从图取主色再导入）

## 与已上线工具边界（防 doorway）

| 工具 | 主任务 | 本工具不抢 |
|---|---|---|
| `brand-color-token-pack` | 1 主色 → HEX/RGB/HSL/OKLCH + **50–950 色阶** + 每档字色 | 不在本页做完整 50–950 / OKLCH 教学主线 |
| `wcag-contrast-checker` | 任意 fg×bg 比率 + AA/AAA | 本页只做方案内关键对自检 + 链过去精调 |
| `color-from-image` | 图 → 主色板 | 本页从 HEX/色板器起步 |
| **本工具** | **整站语义方案**：neutrals + brand 衍生 + semantics（含 link≠action）+ status 解耦 + chrome 预览 + CSS 导出 | — |

对齐方向文档 D.2：可借鉴 Realtime Colors「轻量 UI 预览」，**禁止**做成迷你建站器；Coolors 灵感库不做。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 token 页有语义层 + 中性骨架 + 状态解耦 + 预览）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（本地）
- [x] 长尾默认一带多场景：不拆 `website-css-variables` / `semantic-color-tokens` / `ui-theme-generator` 薄页

## 方向专属检查（A）

- 成熟度 / 推荐包：自研 HEX 推衍 + 已有 WCAG 相对亮度逻辑（可复用对比页算法）；无需 culori CDN
- Tier：**0**
- CWV / 懒加载：首屏表单 + 色块预览即可；无大图/WASM

## 结论

- 继续立项：**是**
- 建议 slug：`smart-website-color-scheme`（网站配色 + 智能配色）
- 与已上线工具关系：**新建**；Related 互链设计簇三件套
- 方法源：`docs/2026-08-08-site-color-system.md`（本站已验证流程）
- 进入 `02-tool-info.md`：检索覆盖、交互规格、IG 缺口相对 Huebert/ColorUI/中文「网站配色」页写清
