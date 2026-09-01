Date: 2026-09-01 20:54
Summary: Planner playbook now requires full coverage of every subdivided scenario; only slug/title/primary keyword differ.
Visibility: people

[question]
细分出来的的场景都需要覆盖，区别在于怎么选slug和title ，主打的关键词

[try to solve]
## Context
Earlier prompt-builder analysis treated some job types as `defer` in a way that read like “skip.” The user clarified: every subdivided scenario must be covered; the decision is how to pick slug, title/H1, and the primary keyword—not whether to cover.

## Process
1. Added playbook §0「场景全覆盖 ≠ 一词一 URL」and rewrote §5–§10 (coverage column, primary flag, `defer` ≠ skip).
2. Synced Skill, `keyword-to-tool-funnel.mdc`, long-tail §3.3 H note, tracker.
3. Rewrote `keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md` so A–H each have a coverage landing; only services/brand/best stay drop; C/D/E keep coverage plans with optional later primary URLs.

## Root cause / analysis
`verdict=defer` was overloaded to mean “out of scope.” It should mean “primary slug/H1 timing not locked,” while copy/capability coverage still has an owner.

## Solution
| Layer | Rule |
|---|---|
| Cover | Every real job type → slug + H1/desc/FAQ/usecase/chip (or planned independent page) |
| Primary | One primary long-tail per URL for slug/title; others are secondary on-page |
| Drop | Only non-tool noise (services, brands, etc.) |

## Notes / boundaries
Refusing LLM generation still requires FAQ/boundary coverage for generator queries; do not make generator the primary H1.

[actions]
- Updated `docs/seo/keyword-planner-analysis-rules.md` §0+
- Updated Skill, mdc, strategy §3.3 H, tracker, prompt-builder analysis
