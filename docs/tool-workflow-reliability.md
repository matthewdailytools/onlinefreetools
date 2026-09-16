# Tool delivery reliability audit — 2026-09-16

## Conclusion and evidence limits

The M4A-to-MP3 request failed at task execution/recovery, not at a demonstrated
codec limitation. The last recorded implementation attempt had a JavaScript
syntax error in the tool-call wrapper before its edits executed, then ended the
turn instead of repairing the call. The repository contains four brief files;
`02-tool-info.md` and `03-locale-briefs.md` are still `draft`. The latter explicitly
requires adding local search phrases and copy. There is no P3 catalog shard,
page, icon or locale implementation. Neither “brief complete” nor “implemented”
is supported.

Conversation evidence explains agent behavior; current source files establish
present state. Neither provides the exact prior model ID, reasoning budget,
backend trace or final exit status of every earlier build. A GPT-5 capability
failure, context exhaustion, OOM and PTY failure are therefore **not established**.
Instruction conflict and brittle editing are contributing risks, not a measured
model comparison. The official [Codex prompting guide](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide)
supports end-to-end persistence and correct tool use; it does not diagnose this
particular run or identify the model that served it.

## Failure chain

| Observed issue | Why it mattered | Change / boundary |
| --- | --- | --- |
| Agent stopped after scaffolding or a recoverable syntax error | User repeatedly had to say continue; the requested result was never reached | AGENTS delivery contract: continue through authorized local stages, repair local errors, report genuine blockers precisely |
| Token-efficiency skill prescribed new conversations at stage boundaries | The workflow itself encouraged stopping at intermediate deliverables | Canonical skill now defines persistent checkpoints; conversation splitting is optional, not a completion condition |
| Shell cwd and patch root were confused; large string replacements and fixed-line JSON splitting failed | Files landed outside the Git root or were corrupted | Resolve root and patch paths; use focused patches and immediate source checks |
| P2 copied WAV→MP3 copy into MP3→WAV with mechanical replacements | Its English shard says “WAV discards audio information”, “RIFF/MP3E” and offers WAV bitrate settings | Require conversion-direction and codec/container review plus actual downloaded-output tests; inventory does not pretend to catch semantic errors |
| Coverage gates passed despite incorrect copy | Markdown tables/checkmarks and sampled title checks were treated as proof of correctness | Distinguish inventory, coverage, source/HTML checks and browser/output acceptance |
| Long-command wrappers discarded session IDs and exit status | Yield/silence was called failure; cached artifacts were later called success | Unique per-run logs, heartbeat and explicit code/signal/error; interrupted/running reports never count as passed |
| Prior remote DNS failure became a prerequisite for the next local tool | An unrelated deployment problem blocked authorized implementation | Separate implementation, verification, upload and live verification |

### Newly reproduced output-capture issue

During this audit, Node 20.19.2 subprocesses using `stdio: pipe` returned exit
codes but no captured stdout/stderr in this environment. An inherited-stdio
probe printed normally. The initial test invocation with `node --test` also
hid nested test diagnostics. Running the test module directly exposed the
failure. This reproduces an observation problem **now**, not proof of the prior
build's cause. The runner now directs child stdout/stderr to a file descriptor,
reads bounded chunks for display and records actual termination independently.
The output-preservation regression test passes with this implementation.

### Correction to prior build/deploy explanations

- A `full tool pages: 225 x 10` planning message does not prove tool rendering
  had begun; shared-page work precedes the actual prerender stage. Old build
  state and gzip timestamps cannot establish the outcome of an unobserved run.
- `EAI_AGAIN` demonstrates a DNS lookup failure on those upload attempts. The
  available evidence does not distinguish resolver, network restriction or
  transient infrastructure causes.
- In `scripts/upload-r2-pages.mjs`, `uploadMeta` currently writes the local
  manifest **before** the dry-run check and remote manifest write. Thus “local
  manifest only updates after remote success” was incorrect. Dry run can mutate
  the local cache; remote-meta failure can leave local state ahead. Remote-read
  failure also falls back to a local manifest. Local metadata alone is not
  evidence that production has matching objects.
- Upload behavior is not changed by this patch. Before a future deployment,
  resolve local/remote manifest trust and dry-run semantics, test failed uploads
  and metadata commits, and validate remote hashes. Do not deploy the defective
  P2 copy or infer a successful upload from local cache timestamps.

## Updated operational workflow

1. **Establish scope and root.** Locate the Git root and dirty files. Record the
   requested slug, authorized outcome and current artifact state. Do not reuse
   another tool's completed checkboxes or overwrite unrelated edits.
2. **Brief checkpoint.** Finish 00–03, 0b/0i and real per-locale research/copy
   planning. Draft is not ready. Continue automatically once the gate passes.
3. **Engineering/master checkpoint.** Implement the catalog, opts page, icon and
   master locale. Use focused patches, validate JSON and source wiring before
   propagating anything. Conversion reuse must preserve input/output semantics,
   not swap arbitrary format names. Run phase 2 before remaining locales.
4. **Locale checkpoint.** Independently rewrite batches of at most three
   languages, checking direction, controls, constraints and error messages.
   Complete the existing phase 4 and coverage-round requirements honestly.
5. **Mechanical acceptance.** Run `npm run verify:tool -- --slug=<slug>`.
   Inventory fails before merge/full build if artifacts are missing or briefs
   still draft. Existing coverage, source wiring, merge, full build, HTML smoke,
   SEO, vendor and isolation gates remain in order; none has been removed.
6. **Behavioral acceptance.** Record real supported inputs, expected output
   format, actual decoded/downloaded output, duration/channels, invalid input,
   retry, automatic sample, mobile and required localization checks. For P3,
   test the intended M4A/AAC fixtures and supported-browser behavior explicitly.
   A `.mp3` filename, a `loadSample` function name or a successful HTML build is
   not proof that the file is valid MP3. Follow the existing tool-specific rules.
7. **Local handoff.** Report completed artifacts, exact commands/outcomes,
   behavioral evidence and remaining limitations. Mark complete only at the
   authorized outcome; no invented dependence on a prior remote upload.
8. **Deployment, only when authorized.** Reuse the verified build when sources
   have not changed. Upload and verify remote data before advancing release
   state; verify live URLs separately. Failed remote work is not local success
   or a reason to erase local progress.

### Evidence and recovery

`verify:tool` prints its unique `.cache/verify-tool/<slug>/<run-id>/` directory.
`report.json` tracks completed stages and aggregate status; numbered `.log` and
`.json` files record each process, elapsed time, exit code, signal and error.
Log output is displayed at most every 15 seconds while a stage runs and drained
again on exit. The cache is diagnostic output, not a committed completion flag.

- Keep the command tool's session ID and poll until a final exit result.
- On failure, inspect this run's numbered log/result, repair the relevant source
  and rerun verification. Do not mark a step passed from a previous run.
- On interruption, `running`, missing or malformed evidence remains unverified.
  Check for an existing live build before starting another one. This runner
  does not provide cross-run resume or process supervision after parent death.
- Log-writing failure also prevents verified success. Logs contain command
  arguments and output; do not pass credentials to this runner.
- Inventory deliberately supports legacy tools without a `work-tasks` directory;
  it is not a replacement for brief coverage or human semantic review.

## Validation of this workflow patch

- `node scripts/tests/tool-workflow.test.mjs`: 7/7 passed. Covers missing artifacts,
  unsafe slug, complete inventory, draft detection, corrupted SVG, stdout/stderr,
  zero/nonzero exits, signal termination, spawn error and silent-process heartbeat.
- P1 `convert-a-wav-file-to-mp3` artifact inventory: passed (inventory only).
- P3 `verify:tool`: expected exit 1 at inventory, with missing artifacts and both
  drafts in its persisted log; no merge or build started.
- Full site build, tool browser checks and production operations are not run for
  this workflow-only patch. P2 defects remain unchanged, P3 remains unimplemented.

This is an implemented workflow hardening patch, not a claim that instructions
alone guarantee completion or that P3 has been retroactively delivered.
