Date: 2026-09-01 22:05
Summary: Inventoried Feedough’s Prompt tool matrix (31 entries) for competitive mapping against local prompt-template-builder.
Visibility: people

[question]
调研 https://www.feedough.com/ 的 prompt工具，落成文档清单

[try to solve]
## Context
Need a durable checklist of Feedough’s prompt-related products to contrast with onlinefreetools’ local structured builder and scene table S0–S7.

## Process
Opened the homepage and the category page `ai-tools-for-prompting/`, extracted tool cards and canonical URLs, verified HTTP 200 for key pages (including Claude outside the category list), and skimmed the flagship `ai-prompt-generator/` UI (Text/Image/Video modes, frameworks, optimiser cross-links). Did not log in, scrape full HTML into git, or reverse APIs.

## Root cause / analysis
Feedough competes as an LLM-backed prompt SaaS matrix (model skins, modality skins, technique skins, format skins, library). That explains dense `head` SERP occupancy for generator queries; it is a different product path from a no-LLM Role/Task/Constraints page.

## Solution
Wrote `docs/seo/keywords/prompt-builder/2026-09-01-feedough-prompt-tools-inventory.md` with positioning contrast, flagship notes, numbered inventory tables, clustering A–I, and maintenance checkboxes. Linked from the theme README and tracker.

## Notes / boundaries
Do not copy Feedough titles into empty tool pages. Video coverage on Feedough does not justify inventing scenes without Planner search evidence.

[actions]
- Added feedough inventory doc; updated prompt-builder README + keyword-to-tool-tracker
