Date: 2026-09-06 15:52
Summary: Choosing more files on Combine files into one PDF now appends to the queue instead of replacing it.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/combine-files-into-one-pdf 选择文件添加后，不要清空原来的已经选择添加的文件，依赖用户主动清空或者手动删除

## Tool links (English)
- https://onlinefreetools.org/tools/combine-files-into-one-pdf
Chinese: https://onlinefreetools.org/zh/tools/combine-files-into-one-pdf

[try to solve]
## Context
The Combine files into one PDF tool already kept a client-side queue with per-item Move up / Move down / Remove and a Clear button. A second Choose files (or drop) still wiped that queue, so users who picked PDFs from different folders lost the first batch.

## Process
1. Read `src/pages/combineFilesIntoOnePdfPage.ts` and found `addFiles()` doing `items = []` before load, then `items = loaded.filter(Boolean)` after `Promise.all`.
2. Compared sibling tools. `mergePdfPage.ts` and `imagesToPdfPage.ts` append with `items.push(...)`. Native `<input type="file">` also replaces its `FileList` on every change; the page already reset `fileInput.value = ''` after change so the same files can be chosen again, but the in-memory queue still replaced.
3. Changed `addFiles` to `items.concat(added)`. Empty-queue error now runs only when the combined list is still empty. Size warning sums every queued item’s `bytes.byteLength`.
4. Added `queueEpoch`, incremented in `clearAll`, so a Clear click during an in-flight read drops the stale callback instead of putting deleted files back.
5. Left Sample as a reset: `loadSample()` still calls `clearAll` first. Remove and Clear remain the only ways to drop existing items.
6. Prerendered this slug, gzipped, seeded local R2, then cleared the persisted Worker Cache API under `.wrangler/state/v3/cache` so `http://127.0.0.1:8788/zh/tools/combine-files-into-one-pdf` served the new script. Playwright: after Clear, add `keep-a.pdf` then `keep-b.pdf` → both stay; Remove first item → `keep-b.pdf`; Clear → empty list.

## Root cause / analysis
`<input type="file" multiple>` does not accumulate. The page copied that replace semantics into `items`. Merge-style tools should treat Choose files as “add more”; replacement belongs on Clear / per-item Remove (and Sample, which is an explicit reset).

## Solution
`addFiles` appends. Clear / Remove / Sample still empty the queue. After a local Cache API HIT of the old HTML, delete the persisted cache directory or purge the URL; bumping `PAGES_CACHE_VERSION` is for a real release, not this fix.

## Notes / boundaries
- Adding files after the auto sample keeps the sample PDFs until the user Clears or Removes them.
- Unsupported types are still skipped. If nothing valid is added and the queue was already empty, the empty error still shows.
- Isolation lint on this slug fails because the working tree already contains unrelated vendor and docs changes; this edit is only the combine-files page plus its catalog `updatedAt`.

[actions]
- Updated `src/pages/combineFilesIntoOnePdfPage.ts` so file picks and drops append to the queue
- Bumped `src/site/tool-catalog.d/combine-files-into-one-pdf.json` `updatedAt` via `tool:touch`
- Prerendered and gzipped this slug; seeded local R2
