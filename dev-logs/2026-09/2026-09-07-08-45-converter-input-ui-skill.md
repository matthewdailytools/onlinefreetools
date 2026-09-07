Date: 2026-09-07 08:45
Summary: Encoded FreeConvert webpage-to-jpg input UX (one input surface, Convert then Download, optional advanced accordion, no cloud drives) as the converter-input-ui skill.
Visibility: project

[question]
学习这个页面的用户输入UI和交互，沉淀为skill

[try to solve]
## Context
After the converter SERP SEO skill, the same FreeConvert page’s input chrome needed a separate, executable UI skill so Page.ts does not copy cloud-drive tabs or bury Convert under settings.

## Process
Inspected https://www.freeconvert.com/webpage-to-jpg (source tabs, file input, advanced accordion: viewport/delay/cookie/print CSS, Convert → Done → Download). Contrasted with `batchConvertWebPagesToJpgPage.ts` (URL list, HUD, settings always visible on the action row).

## Root cause / analysis
Their interaction win is progressive disclosure and a linear Convert/Download state machine. Their cloud-storage tabs and upsell conflict with this site’s local/fetch-once model. Our batch page already has the right primary input and HUD; it fails the skill on mixing wait/viewport/quality into the always-visible action rows.

## Solution
Added `.cursor/skills/converter-input-ui/` and linked it from `AGENTS.md`, `tool-creation.mdc`, coverage-pass item 10, and a pointer from `converter-serp-landing-seo`. Did not change the live JPG tool in this turn.

## Notes / boundaries
Does not replace `tool-dropzone` / `OftPdfWork` chrome. Do not add Dropbox/Drive. Calculators out of scope.

[actions]
- Added converter-input-ui SKILL.md + example
- Wired AGENTS.md, tool-creation.mdc, tool-coverage-pass, converter-serp-landing-seo
