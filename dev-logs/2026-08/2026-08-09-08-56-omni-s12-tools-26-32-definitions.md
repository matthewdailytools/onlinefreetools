Date: 2026-08-09 08:56
Summary: Created omni-s12 tool definition modules #26–#32 under scripts/dev/omni-s12/tools/.

[question]
Create tool definition modules under scripts/dev/omni-s12/tools/ for these 7 tools (z-score.mjs already exists as a pattern). Do NOT run ship-one. Only create the definition files. Return list of files written and any load errors.

[try to solve]
Wrote 7 definition modules (#26–#32), each importing withBtns from locale-ui-common.mjs and exporting full seq/slug/prefix/titles/descriptions/ui(10 langs)/fields/results/refs/computeJs/sampleJs. All 7 load successfully via node import; no load errors.

Files:
- scripts/dev/omni-s12/tools/sample-size.mjs (#26)
- scripts/dev/omni-s12/tools/significant-figures.mjs (#27)
- scripts/dev/omni-s12/tools/scientific-notation.mjs (#28)
- scripts/dev/omni-s12/tools/logarithm.mjs (#29)
- scripts/dev/omni-s12/tools/pythagorean-theorem.mjs (#30)
- scripts/dev/omni-s12/tools/slope.mjs (#31)
- scripts/dev/omni-s12/tools/exponent.mjs (#32)

[actions]
- Created the 7 tool definition .mjs files under scripts/dev/omni-s12/tools/
- Verified each with node import
