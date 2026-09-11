Date: 2026-09-10 20:30
Summary: Resolved merge conflict in sound-editor README: keep AudioMass MIT copy from 01/02; keep 11/12 index from origin/save.
Visibility: project

[question]
git merge origin/save
CONFLICT (content): Merge conflict in docs/sound-editor/README.md

[try to solve]
## Context

User ran `git merge origin/save` after `git pull` did not merge that branch. Git auto-merged other files; README conflicted.

## Process

Compared both sides of `docs/sound-editor/README.md`:

- HEAD (`ce7e14b2`): twelfth-round AudioMass MIT vendor copy; no iframe; SEO absorb into one URL. Matches current `01` / `02` / `00` / `06`.
- `origin/save`: 2026-09-10 hub contract; forbids forking AudioMass; adds docs 11 and 12.

Those engine lines contradict. 11/12 were written against the older 01. Local 01 already overturned “do not fork AudioMass”.

## Root cause / analysis

Parallel work: save branch added executable-plan docs; local main later changed the editor engine to a full AudioMass tree copy. README header and the one-sentence conclusion both changed.

## Solution

Resolved README to:

- Engine and bans from 01/02 (vendor copy, no Wavacity, no iframe).
- 11/12 still listed; note that 11’s “forbid AudioMass fork” is superseded by 01 round 12.
- Keep 11’s S1/S2 staging as packaging/HUD, not a second engine.

Marked resolved and committed the merge (`cfe0b151`). Did not rewrite 11 body in this step.

## Notes / boundaries

`docs/sound-editor/11-executable-plan.md` still says do not fork AudioMass. README and 01 are the current engine authority until 11 is edited.

[actions]
- Resolved `docs/sound-editor/README.md`
- Merge commit of `origin/save` into `main`
