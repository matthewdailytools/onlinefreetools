Date: 2026-08-08 14:23
Summary: Committed nine image tools as d048c7b; outlined isolation so new tools do not mutate existing ones by default.

[question]
commit；然后：创建新工具过程中，会影响已有工具的代码，有没有方案创建新工具时候，不影响原有工具，只有指定所有工具才进行所有工具的变更？

[try to solve]
已提交 `d048c7b`：`feat(tools): add nine image tools from brief through implement`（未 push）。

隔离方案（默认只动新工具；仅当用户明确要求「互链/全量」时才改旧工具）：
1. 根因：十语巨型 `src/site/i18n/*.ts`、单体 catalog/`index.ts`、related 反链、首页键、以及 FAQ 互指。
2. 流程闸：新工具默认 allowlist 仅 `work-tasks/{slug}/`、`src/pages/{Page}.ts`、`public/icons/tools/{slug}.svg`、catalog **追加一条**、i18n **只追加本前缀键**、`index` 只追加 register；禁止改其它 `*Page.ts` / 其它工具 FAQ。
3. related：默认只写 新→旧；旧→新 需显式「更新相关工具互链」。
4. 结构演进（可选）：按 slug 拆分 i18n/catalog 片段再合并；约定注册减少手改 `index.ts`；CI/`git diff` 检查越权路径。
5. 注入脚本：只 append 本工具键，禁止重写已有键值。

[actions]
- Commit `d048c7b` (nine image tools + briefs/i18n/catalog/icons)
