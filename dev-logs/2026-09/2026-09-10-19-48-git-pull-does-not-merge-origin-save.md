Date: 2026-09-10 19:48
Summary: git pull on main only merges origin/main; origin/save was fetched but not checked out.
Visibility: project

[question]
远程有 origin/save的版本，为什么git pull 拉不回来

[try to solve]
## Context

Local checkout was on `main` (tracking `origin/main`). The user expected `git pull` to bring in commits that exist on `origin/save` (the backup branch used by `npm run git:save`).

## Process

Terminal showed fetch succeeded:

```
05e4a9f1..c03971af  save -> origin/save
Already up to date.
```

Compared refs:

- `HEAD` / local `main`: `05e4a9f1`
- `origin/main`: `00a73e5f` (local main is 1 commit ahead)
- `origin/save`: `c03971af` (4 commits not in local main)

Those 4 commits include GSC harvest docs, audio hub plan, and `docs/sound-editor/11-executable-plan.md` / `12-slug-hub-and-scene.md`.

## Root cause / analysis

`git pull` with no arguments is `git fetch` + merge of the **current branch upstream**. `main` tracks `origin/main`, not `origin/save`. Fetch updated the remote-tracking ref `origin/save`; merge then compared `main` to `origin/main` and reported already up to date.

`origin/save` is a push target (`git push origin HEAD:save`), not the upstream of `main`.

## Solution

To merge save into the current `main` working tree:

```
git merge origin/save
```

or `git pull origin save`. Working tree was dirty (`docs/sound-editor/README.md` among others); stash or commit first if that file would conflict.

This session only diagnosed; it did not merge.

## Notes / boundaries

`npm run git:save` pushes HEAD to `origin/save` and does not change production `main`. Pulling save into main is a separate, explicit step.

[actions]
- Diagnosed branch tracking; no code or git merge performed
