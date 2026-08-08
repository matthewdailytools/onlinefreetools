Date: 2026-08-08 17:29
Summary: Implemented /tools/brand-style-guide with modular smart draft, ten-locale i18n, lint and build.

[question]
实现页面

[try to solve]
已落地 `/tools/brand-style-guide`（主方向 A，本地规则引擎，非云端 AI）：

- 交互：品牌名/行业/主色/性格标签/结构 preset（Strict·Product·Friendly）/模块开关；Generate、仅重填未改项、Sample、Copy Markdown/JSON；字段 `smart|manual` 标记；进页自动加载 Northline Studio `#0F6E8C` 样例并出完整预览。
- 模块 M0–M9：预览 + Do/Don’t；关模块不进导出。
- 工程：catalog 分片、`brandStyleGuidePage.ts`、icon、十语 i18n、README 中英条目；`merge:tools`；`lint:seo` OK；`build:site`（420 URLs）。
- work-tasks：`02`→`implemented`；`03`→`pending-native-review`（ar/ja/ru 待母语）。
- 隔离 lint 因工作区其它工具脏文件失败；本工具改动本身在 allowlist（可用 `CROSS_TOOL_UPDATE=1` 跳过脏树）。

预览：`/tools/brand-style-guide` 与 `/zh/tools/brand-style-guide`。

[actions]
- Added `src/pages/brandStyleGuidePage.ts`
- Added `src/site/tool-catalog.d/brand-style-guide.json`
- Added `src/site/i18n/tools/brand-style-guide/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Added `public/icons/tools/brand-style-guide.svg`
- Updated `README.md`, `work-tasks/brand-style-guide/*`
- Ran `npm run merge:tools`, `lint:seo`, `build:site`
