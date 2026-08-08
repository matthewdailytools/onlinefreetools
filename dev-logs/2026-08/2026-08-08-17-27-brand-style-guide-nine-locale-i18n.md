Date: 2026-08-08 17:27
Summary: Created nine brand-style-guide i18n locale shards (zh/es/ar/pt/id/fr/ja/ru/de) with 130 keys each aligned to en.ts and locale briefs.

[question]
Create 9 i18n TypeScript files for the tool slug `brand-style-guide` in the repo `/Users/xuli/vscodeai/onlinefreetools`.

## Paths to create
- `/Users/xuli/vscodeai/onlinefreetools/src/site/i18n/tools/brand-style-guide/zh.ts`
- `.../es.ts`, `ar.ts`, `pt.ts`, `id.ts`, `fr.ts`, `ja.ts`, `ru.ts`, `de.ts`

## Format (required)
Each file must look like:
```ts
/**
 * i18n tool shard (brand-style-guide / {lang}). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const {lang}: SiteLangDict = {
  // all keys
};
export default {lang};
```

## Keys
Copy EVERY key from `/Users/xuli/vscodeai/onlinefreetools/src/site/i18n/tools/brand-style-guide/en.ts` — same key names, translated values. Do not omit any key.

## Localization rules (critical)
- Do NOT machine-translate with identical sentence skeletons across all languages.
- Follow briefs in `/Users/xuli/vscodeai/onlinefreetools/work-tasks/brand-style-guide/03-locale-briefs.md` for each language.
- Title/H1 direction from briefs:
  - zh: 品牌手册 — 智能预填的设计规范，可手动改
  - es: Guía de estilo de marca — borrador modular que puedes editar
  - ar: دليل أسلوب العلامة — مسودة وحدات قابلة للتعديل
  - pt: Guia de estilo da marca — rascunho modular editável
  - id: Panduan gaya merek — draf modular yang bisa diedit
  - fr: Charte graphique — brouillon modulaire à modifier
  - ja: ブランドスタイルガイド — 自動下書きを手直しできる
  - ru: Гайд по стилю бренда — модульный черновик, который можно править
  - de: Brand-Style-Guide — modularer Entwurf zum Nachbearbeiten
- `tool_*_desc` ≈ short home card (~160 chars), local search words
- `tool_*_description` ≥120 chars, steps + sample Northline #0F6E8C + local/rule-based (NOT cloud AI)
- Clarify smart = rule-based, not AI/LLM
- Keep HEX, WCAG, Markdown, JSON, Logo, Do/Don’t (or local equivalent), M0–M9 codes
- Industry copy keys `tool_brand_style_guide_copy_*_one` must keep the `{brand}` placeholder literally
- FAQ question order may vary slightly per language for less isomorphism
- Button labels per brief (Generate / Sample / Copy Markdown etc. in local short words)
- No SEO meta-narration (doorway, thin page, slug)
- User rule: respond/write content in the target language for user-facing strings; code comments in files can be English like en.ts

## After writing
Verify each file exports default and has the same number of keys as en.ts (count `tool_brand_style_guide_` keys).

Return a short summary of files written and any keys you struggled with.

[try to solve]
已创建 9 个 locale 分片，路径均在 `src/site/i18n/tools/brand-style-guide/`：`zh.ts`、`es.ts`、`ar.ts`、`pt.ts`、`id.ts`、`fr.ts`、`ja.ts`、`ru.ts`、`de.ts`。

**验证**：十语（含 en）均为 **130** 个 `tool_brand_style_guide_*` 键，键名与 en.ts 完全一致；各文件 `export default {lang}`；6 条 `copy_*_one` 均保留字面 `{brand}` 占位符。

**本地化要点**：
- 各语 title/H1、按钮短词按 `03-locale-briefs.md` 方向撰写
- smart/智能 均明确为规则预填、非云端 AI/LLM
- FAQ 题序在 zh/ja 等语有调整以降低同构
- ja 用「こんなときに」作 use cases 标题；ar 用 افعل/لا تفعل；de 保留 Do’s/Don’ts

**较难键**：`rules_item_*` 与 `description` 需在规则可见性与篇幅间平衡；ar 混合保留 HEX/Logo/Markdown 与 RTL 自然表述；ja 避免「ユースケース」目录腔。

[actions]
- Added `src/site/i18n/tools/brand-style-guide/{zh,es,ar,pt,id,fr,ja,ru,de}.ts`
