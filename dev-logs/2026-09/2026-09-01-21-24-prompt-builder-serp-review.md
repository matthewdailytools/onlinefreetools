Date: 2026-09-01 21:24
Summary: Completed Google SERP review for six prompt-builder queries; no long_gap; title_gap_fallback does not apply.
Visibility: people

[question]
SERP 复核

[try to solve]
## Context
The prompt-builder Keyword Planner analysis still marked SERP as pending. The user asked for SERP review.

## Process
1. Tried CloakBrowser Bing path; package not installed. Started a local venv install (Playwright download slow/hung); proceeded with **Google Web** review allowed by strategy §3.3 A.
2. Reviewed six queries: `ai prompt generator`, `ai prompt builder`, `prompt template builder`, `text to prompt generator`, `midjourney prompt builder`, `random prompt generator`.
3. Wrote `keywords/prompt-builder/2026-09-01-prompt-builder-serp.md`, updated the authority planner §3.1/§6, pool rows, tracker, theme README.

## Root cause / analysis
Generator/builder SERPs are packed with LLM SaaS and Prompt Builder products (**head**). Exact phrase **Prompt Template Builder** already appears in multiple organic titles (NewPrompt, ToolboxKit, …) → **mid_covered**, so §3.3 G title_gap_fallback **does not fire**. Differentiation remains local Role/Task/Constraints/Output, not a new H1.

## Solution
- **0 long_gap / 0 week build**
- Keep slug/H1 `prompt-template-builder` / Prompt template builder
- Cover non-primary scenes via FAQ/Use cases; Midjourney/random stay head (defer independent URL unless named)

## Notes / boundaries
Optional later: Bing CloakBrowser cross-check once install works. Do not treat WebSearch snippets as full HTML SERP archives.

[actions]
- Added serp batch md; updated planner, pool, tracker, README
