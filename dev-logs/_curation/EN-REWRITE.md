# Per-article English rewrite instructions

User request: rewrite each published historical dev log into English, article-by-article (editorial quality — not raw machine dump).

## Output template (exact headers)

```markdown
Date: <YYYY-MM-DD HH:MM>
Summary: <one English sentence: outcome or decision>

[question]
<keep the user's original question text verbatim>

[try to solve]
<consolidated answer in clear English>

[actions]
- <optional; omit section if none>
```

## Rules

1. **In-place**: overwrite the same `.md` path. **Do not rename** files (public URL stability).
2. **`[question]`**: keep original language/text exactly.
3. **`Summary` + `[try to solve]`**: English only. Preserve paths, commands, commit hashes, URLs, slug names, code fences.
4. **Editorial rewrite**: tighten thin fluff; keep technical facts; do not invent features or “verified/shipped” claims not in the source.
5. **Date**: normalize to `YYYY-MM-DD HH:MM` when possible (from filename or body). If only a date exists, use `YYYY-MM-DD 00:00` or time from filename.
6. **Skip** files under `dev-logs/_archive/` or `dev-logs/_curation/`.
7. After your batch, append done paths to `dev-logs/_curation/en-rewrite-done.txt` (one path per line).
8. If a file is already fully English (no CJK in Summary/solve narrative), skip and note it.
9. **Done criteria:** English `Summary` + primarily English `[try to solve]` narrative. Allowed residual CJK: verbatim `[question]`, quoted keywords (`「…」`), backtick paths, and labeled locale sample blocks inside i18n draft logs.


## Legacy formats to convert

- `日期：` / `摘要：` → `Date:` / `Summary:`
- `【用户提问】` / `【Copilot回答】` / `【question】` / `【try to solve】` → `[question]` / `[try to solve]`
- `执行的操作：` / `[actions]` → `[actions]`
