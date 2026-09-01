---
name: tool-coverage-pass
description: >-
  Run SEO search-coverage passes (0b, step 2, step 4) when creating or batching
  tools. Use for 立项, 实现, 多工具, Plan with multiple slugs, coverage:gate,
  清单前检索覆盖, 用户意图审查, or title/keyword optimization. Forces per-slug gates before
  ready / i18n-done / build:site.
---

# Tool coverage pass（0b / 步 2 / 步 4）

分析由 Agent 完成；脚本只验收。对齐 `.cursor/rules/tool-i18n-localization.mdc`。  
**禁止**跳过本 Skill 直接灌十语或勾选「检索覆盖已优化」。  
单工具且需控上下文成本时，可叠加 `.cursor/skills/tool-token-efficiency/SKILL.md`（**不得**因此跳过本 Skill 任一阶段）。

## 何时必须使用

- 新建工具、批量工具、Plan 含多个 slug
- 用户提到立项 / 实现 / 清单前覆盖 / coverage:gate
- 准备把 `02` 标 `ready` 或 `03` 标 `i18n-done`

## 每 slug 强制顺序

允许并行写多个 slug 的 **0b brief**；**页面 / i18n 实现必须串行**：slug A 的 `phase=4` 绿之前，不得开始 slug B 的 `*Page.ts` / i18n。

### 1) phase=0b（清单前）

对照 `03` 检索词与用户搜法，写满 `02`「清单前检索覆盖」表（slug / 主词→H1 / 次词→desc·FAQ / 习惯判断 / **优化摘要** / 已回写）。必要时改建议 title（结果/场景向，禁参数枚举）。  
**若本意图 slug 已有 Google / Bing Keyword Planner（Ads）长尾分析**（`docs/seo/keywords/{theme}/*-keyword-planner.md` 等）：须填 `02`「Ads / Keyword Planner 长尾」表——归属长尾**融入文案**且**功能覆盖**对应任务（见 `work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」）；仅塞词无能力 → 不合格。  
写 `03` 多轮行 **`0b`**（日期 YYYY-MM-DD + ≥20 字摘要），勾选「清单前检索覆盖已做」。

```bash
npm run coverage:gate -- --slug={slug} --phase=0b
```

须绿 → 才可进入意图审查；审查表未写仍不得 `02=ready`、勾页面模块清单、开始工程文件。

**紧接着（同一 0b 阶段内，标 ready 前）— 用户意图审查并优化**

对照 `00` 原话 + 主检索词用户任务（不是「怎么点本站按钮」）：立项是否**满足**、是否**超出**（次 UI 抢首屏、第二计算器、desc 元叙述）。部分满足或越界则回写 How / 交互主次 / FAQ / desc。写入 `02`「用户意图审查」（可详写 `notes.md`）。细则：`work-tasks-tool-brief.mdc`「用户意图审查」。有 Planner 长尾时须核对长尾任务能否办成。只勾选不回写 → 不合格。

### 2) 母版 i18n 后 → phase=2

写完母版语（通常 en）完整键后，**再扫** title/description/首页 `_desc`：主词在 H1、去参数枚举、次词有落点。  
写 `03` 多轮行 **`1b`**（改动摘要 + 主词落点）。

```bash
npm run coverage:gate -- --slug={slug} --phase=2
```

### 3) 他语后 → phase=4

逐语或每批 ≤3 语独立重写；默认抽查 **en,zh,es,ja**。再优化 title/desc。  
写 `03` 多轮行 **`2b`**，结果中须出现 `en,zh,es,ja`；勾选「检索覆盖已优化」。

```bash
npm run coverage:gate -- --slug={slug} --phase=4
```

### 4) 上线

```bash
npm run coverage:gate -- --slug={slug} --phase=all
npm run build:site
npm run lint:tool-page -- --slug={slug} --require-html
npm run lint:seo
TOOL_SLUG={slug} npm run lint:tool-isolation
# 或：npm run verify:tool -- --slug={slug}
```

母版阶段（phase=2 后、开他语前）另跑：`npm run lint:tool-page -- --slug={slug}`（拦 `page.style` / 模板 `\w` 被吃）。
## 分析提示词（每步自问）

1. 用户会搜什么？主词是否落在 title/H1？是否已落到**实际使用场景**（情境+动作+结果；平台只是例子）？进页默认是否就是该场景？
2. 副标题是否参数目录腔（控件名顿号/逗号罗列）？
3. 次要词是否在 **description / FAQ / Use cases** 有落点（勿拆近义 URL；勿做关键词列表）？
4. **本语**检索词是否按当地习惯重跑（非 en 直搬）？
5. 与 catalog `related` / 邻近工具 H1 是否撞 intent？
6. 本步是否**改了文案**还是只勾选？（只勾选 → 不合格）
7. **意图审查**：搜主词的人打开页能否办成事？How 是否先答用户任务？有无超出（次模式抢首屏、第二工具、元叙述）？有缺口是否已回写？
8. **Ads/Planner 长尾（若有）**：归属本 slug 的长尾是否已融入文案？交互是否覆盖长尾任务（非只出现词）？

硬性两条（`tool-i18n-localization.mdc`「相关关键词落地」）：① 覆盖词写入 H1/desc/FAQ/usecase；② 每语按搜索习惯重跑。  
有 Planner 分析时再加：③ 长尾任务有对应功能（`work-tasks-tool-brief.mdc`）。

## Plan 多工具 todos 模板

每个 slug 展开（禁止单一「实现全部工具」）：

- `brief-0b-{slug}` → coverage:gate phase=0b **+ 用户意图审查并优化**  
- `i18n-master-{slug}`  
- `cover-step2-{slug}` → phase=2  
- `i18n-locales-{slug}`  
- `cover-step4-{slug}` → phase=4  
- `ship-{slug}` → `verify:tool`（含 build:site + lint:tool-page --require-html + lint:seo + isolation）

然后下一 slug。
