Date: 2026-09-01 21:51
Summary: Removed in-repo CloakBrowser venvs; Bing SERP scripts now document aibrowsercrawler venv only.
Visibility: project

[question]
删掉半成品、以后直接用 aibrowsercrawler 的 venv 跑 ops/seo/bing_serp

[try to solve]
## Context
Onlinefreetools had half-finished local venvs (`.venv-bing-serp/`, `ops/seo/bing_serp/.venv/`) from a redundant CloakBrowser install. CloakBrowser already works via sibling `aibrowsercrawler/venv` and `~/.cloakbrowser`.

## Process
Deleted both venv trees. Updated `ops/seo/bing_serp/README.md`, package/CLI docs, `keyword-to-tool-ops.md`, `ops/README.md`, and `.gitignore` comments to forbid project-local install and point at `AIBROWSERCRAWLER_VENV` / `$HOME/vscodeai/aibrowsercrawler/venv`.

## Solution
Run: `PY="${AIBROWSERCRAWLER_VENV:-$HOME/vscodeai/aibrowsercrawler/venv}/bin/python"` then `"$PY" ops/seo/bing_serp/run_bing_serp.py ...`. Accidental local `.venv` paths remain gitignored as a safety net only.

## Notes / boundaries
Do not `pip install cloakbrowser` inside onlinefreetools.

[actions]
- Deleted `ops/seo/bing_serp/.venv/`, `.venv-bing-serp/`
- Docs: `ops/seo/bing_serp/*`, `ops/seo/keyword-to-tool-ops.md`, `ops/README.md`, `.gitignore`
