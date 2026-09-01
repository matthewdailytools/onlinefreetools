Date: 2026-09-02 01:50
Summary: Upgraded prompt cluster presets with visible Input→Output examples, deduped writing vs film samples, and richer drama/engineering detail.
Visibility: people

[question]
按「每页一条可见 Example 对照 + 去重 + 提升戏剧/工程细节」做一轮样例升级

[try to solve]
## Context
Prompt 工具簇 9 页已有 loadSample 预设，但 Example IG 区块仅描述按钮行为；writing Script 与 film 共用 food-truck premise；工程/戏剧字段较薄。

## Process
1. 新建 `src/pages/site/promptClusterPresets.ts` 集中维护各 slug 预设，页面经 `JSON.stringify` 注入（与 writing/S0 同模式）。
2. 升级预设：film 三幕 + 6 场；short-drama 12×75s + voicemail cliffhanger；MJ 加 --chaos 8；sketch/product/android/ios 补工程细节。
3. **去重**：`WRITING_PROMPT_PRESETS.script` 改为 lighthouse weather-fax 谜题；film 保留餐车 rival 专用页。
4. 九语 `*_example` 键改为 **Input → Output (Markdown)** 可见对照（en 母版 + `scripts/dev/patch-prompt-example-i18n.mjs` 补丁 zh/es/ar/pt/id/fr/ja/ru/de）。
5. S0 `PROMPT_TEMPLATE_PRESETS.code` 强化 security/tests 约束。

## Solution
- 预渲染 9×10 页、gzip、upload:r2；`PAGES_CACHE_VERSION` 4.5→4.6。
- 样例数据与 Example 段落文案同步维护于 presets + i18n。

## Notes / boundaries
- Example 仍为纯文本 `<p>`（escapeHtml），无 HTML 表格；对照用箭头与字段名描述。
- 样例表单内容仍为英文预设（十语 placeholder 本地化不变）；Example 段落已十语化。
- Worker 4.6 须 push 后边缘缓存失效。

[actions]
- `src/pages/site/promptClusterPresets.ts`（新建）
- 9× `*Page.ts` 改 import + JSON.stringify 预设
- 9×10 i18n `*_example` 键
- `scripts/dev/patch-prompt-example-i18n.mjs`
- `wrangler.jsonc` PAGES_CACHE_VERSION 4.6
