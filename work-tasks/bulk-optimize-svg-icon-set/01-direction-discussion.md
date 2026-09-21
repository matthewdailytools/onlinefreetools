# Direction

Direction A: a concrete file-processing task. Batch optimize SVG icons.

Existing neighbor `svg-optimizer` supplies reusable browser processing but has a different primary output or lacks a batch report. Keep that URL intact. This implementation is explicitly user requested, not justified by invented search volume.

Conservative XML optimization removes comments, metadata and safe structural whitespace; preserves IDs, viewBox and numbers. Compare bytes and image previews. Check duplicate and dangling internal references before and after. Reject scripts, external resources, events, animation and foreignObject. 50 files, 2 MiB each, 20 MiB total. ZIP and CSV.

Reference: https://www.w3.org/TR/SVG2/linking.html
