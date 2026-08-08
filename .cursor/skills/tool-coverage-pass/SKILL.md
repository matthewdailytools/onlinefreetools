---
name: tool-coverage-pass
description: >-
  Run SEO search-coverage passes (0b, step 2, step 4) when creating or batching
  tools. Use for 立项, 实现, 多工具, Plan with multiple slugs, coverage:gate,
  清单前检索覆盖, or title/keyword optimization. Forces per-slug gates before
  ready / i18n-done / build:site.
---

# Tool coverage pass（0b / 步 2 / 步 4）

分析由 Agent 完成；脚本只验收。对齐 `.cursor/rules/tool-i18n-localization.mdc`。  
**禁止**跳过本 Skill 直接灌十语或勾选「检索覆盖已优化」。

## 何时必须使用

- 新建工具、批量工具、Plan 含多个 slug
- 用户提到立项 / 实现 / 清单前覆盖 / coverage:gate
- 准备把 `02` 标 `ready` 或 `03` 标 `i18n-done`

## 每 slug 强制顺序

允许并行写多个 slug 的 **0b brief**；**页面 / i18n 实现必须串行**：slug A 的 `phase=4` 绿之前，不得开始 slug B 的 `*Page.ts` / i18n。

### 1) phase=0b（清单前）

对照 `03` 检索词与用户搜法，写满 `02`「清单前检索覆盖」表（slug / 主词→H1 / 次词→desc·FAQ / 习惯判断 / **优化摘要** / 已回写）。必要时改建议 title（结果/场景向，禁参数枚举）。  
写 `03` 多轮行 **`0b`**（日期 YYYY-MM-DD + ≥20 字摘要），勾选「清单前检索覆盖已做」。

```bash
npm run coverage:gate -- --slug={slug} --phase=0b
```

须绿 → 才可 `02=ready`、勾页面模块清单、开始工程文件。

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
npm run build:site && npm run lint:seo
TOOL_SLUG={slug} npm run lint:tool-isolation
```

## 分析提示词（每步自问）

1. 用户会搜什么？主词是否落在 title/H1？
2. 副标题是否参数目录腔（控件名顿号/逗号罗列）？
3. 次要词是否在 desc/FAQ/Use cases 有落点（勿拆近义 URL）？
4. 与 catalog `related` / 邻近工具 H1 是否撞 intent？
5. 本步是否**改了文案**还是只勾选？（只勾选 → 不合格）

## Plan 多工具 todos 模板

每个 slug 展开（禁止单一「实现全部工具」）：

- `brief-0b-{slug}` → coverage:gate phase=0b  
- `i18n-master-{slug}`  
- `cover-step2-{slug}` → phase=2  
- `i18n-locales-{slug}`  
- `cover-step4-{slug}` → phase=4  
- `ship-{slug}` → build:site + lint:seo  

然后下一 slug。
