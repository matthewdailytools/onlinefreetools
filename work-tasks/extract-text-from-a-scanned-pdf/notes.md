# Local implementation and acceptance

Status: implemented locally; deployment not performed.

## Actual input → output checks

Real image-only PDF sample recognized Order 1042 and 125. Edited text was downloaded and byte-checked. Verified no automatic OCR/model load, invalid PDF, retry and invalid page range.

## Workflow and gate evidence

Applied repository skills: `tool-coverage-pass`, `tool-token-efficiency`,
`converter-serp-landing-seo`, `converter-input-ui`. Master English was followed by
three independent locale batches: zh/es/ja, fr/de/pt, ar/id/ru.

- Phase 0b before implementation; phase 2 master review; phase 4 ten-language review.
- Artifact inventory, `coverage:gate --phase=all`, and `lint:tool-page --require-html`
  passed for the four tools. Final rerun details are in `.cache/four-tools/scoped-gates.json`.
- Browser tests are retained in `scripts/tests/local-file-tools.browser.mjs` and
  `scripts/tests/local-file-tools-cases.mjs`. Run with `--all` after building.
  The executed local wrapper was `node .cache/four-tools/browser-smoke.mjs --all`;
  output is in `.cache/four-tools/browser-final.log`. The final SVG byte-preservation
  follow-up is in `.cache/four-tools/svg-final.log`.
- The ten-language mobile check is retained in
  `scripts/tests/local-file-tools-locales.browser.mjs`. Forty pages passed at 390px,
  with real automatic samples for the three lighter tools and no automatic OCR.
  A French footer wrapping issue was fixed locally in the new workbench stylesheet.
- `lint:tool-isolation --cross` passed. Cross mode is required by the explicit
  four-tool request and the shared workbench. An additional baseline-aware scope
  audit found no unexpected paths; generated site/chrome/devlog outputs account
  for the broad generated diff. Existing user analysis files remain intact.
- All files are processed in the browser using existing same-origin vendor assets.
  No dependency was installed and no remote deployment, commit or push was performed.

## Existing full-site taxonomy failure

The full-site taxonomy check reports four pre-existing `subject: video` values,
which are not in the site's subject enum:

- `add-an-audio-track-to-a-video`
- `make-a-waveform-video-from-audio`
- `remove-the-audio-track-from-a-video`
- `replace-the-audio-in-a-video-file`

The same four failures are present in original HEAD and the current catalog;
`.cache/four-tools/scope-report.json` records the comparison. The four new tools
have valid `pdf`/`image` subjects and `documents`/`media` scenarios. These unrelated
catalog entries were not rewritten. Do not describe the full `npm run verify`
command as green while that baseline issue remains.

## Final recorded command outcomes

- `npm run verify`: exit **1**. Its full `build:site` stage completed:
  **278 tools × 10 locales = 2780 tool pages**, plus site hubs, home pages,
  sitemap, chrome and gzip outputs. `lint:seo` and `lint:vendor` passed.
  The only failing stage was the unchanged four-entry taxonomy issue above.
- Final per-tool executable rerun: **12 / 12 gates passed**, with explicit OK
  output (artifact inventory, all coverage phases, generated HTML/script wiring).
- Full browser conversion suite: **exit 0**, all four tools passed. The subsequent
  SVG BOM regression also passed with **exit 0**.
- Scoped isolation audit: **exit 0**, no unexpected paths. The cross-tool gate
  is paired with the narrower explicit-file audit, not used as a blanket waiver.
- No required gate was silently skipped. `verify:tool` was not redundantly run:
  its inventory, coverage, build, HTML, SEO, vendor and isolation components were
  executed explicitly for this four-tool delivery.

Final generated-page mobile/locale suite: **exit 0**, all **40 / 40** pages passed. The result table scrolls within its container instead of wrapping byte counts into separate digits. `git diff --check` passed.
