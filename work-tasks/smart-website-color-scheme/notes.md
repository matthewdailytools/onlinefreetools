# notes — 与本站颜色方案文档的映射

**slug**：`smart-website-color-scheme`（网站配色 + 智能配色；smart = 规则自动推导，非 LLM）

Source: `docs/2026-08-08-site-color-system.md`

| 文档步骤 | 工具 UI / 输出 |
|---|---|
| 1 定 Brand Primary | 主色输入；可选多主题主色 |
| 2 定 Neutrals | 固定灰阶表（跨主题） |
| 3 定 Semantics | 结果表：bg/surface/text/border/**link**/action/focus/danger… |
| 4 组件映射 | 轻量预览：顶栏/侧栏选中/卡片/按钮/链接/错误字 |
| 5 主题切换 | 可选 2–4 套 brand，共用 neutrals |
| 6 对比度自检 | 关键对 AA 徽章；深链 `wcag-contrast-checker` |

**原则落点文案（Rules/FAQ 必现）**

1. 角色优先于颜料  
2. 品牌色预算克制（行动/选中/焦点/少量 pill）  
3. 一层换肤（只改 brand 衍生 + 氛围底）  
4. 中性托底、品牌点睛  
5. 状态色独立  
6. link ≠ action  

**不进本工具 v1**

- 完整 50–950 OKLCH 色阶教学 → `brand-color-token-pack`
- 任意双色精调 → `wcag-contrast-checker`
- 暗色整页方案、色盲模拟、和谐色相环刷色
