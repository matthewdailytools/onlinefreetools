Date: 2026-08-28 17:12
Summary: Moved CIDR SERP/analysis assets into docs/seo/keywords/cidr and taught bing_serp --theme to write theme folders.

[question]
每个主题对应文件应该保存再对应的Keywords/{keyword} 文件下

[try to solve]
Convention: per-theme Planner CSVs, intent clustering, and Bing SERP markdown live under `docs/seo/keywords/{theme}/`. Moved CIDR batches there; added keywords/ and cidr/ READMEs; left a pointer stub in serp-batches. Updated `bing_serp` with `--theme` (default MD path = keywords/{theme}/). Synced ops docs, funnel, Skill, and tracker links.

[actions]
- Moved CIDR analysis MD into `docs/seo/keywords/cidr/`
- Updated `ops/seo/bing_serp/{io_util,run_bing_serp,README,__init__}`
- Updated keywords/serp-batches/ops/funnel/Skill/tracker docs
