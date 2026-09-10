Date: 2026-09-09 23:45
Summary: Twelfth-round sound-editor docs now treat AudioMass as a full MIT vendor copy; SEO work is absorb-by-feature on one URL, not doorway pages.
Visibility: people

[question]
https://github.com/pkalogiros/audiomass 可以完全copy，并且将功能细化做seo，修改 @docs/sound-editor 文档

[try to solve]
## Context

Earlier rounds forbade forking the AudioMass shell (write an EDL engine, reuse algorithms only). The user reversed that: copy the repo completely, then refine features for SEO. The previous assistant turn gathered license facts but did not edit the docs; this turn finished the rewrite.

## Process

1. Confirmed upstream `LICENSE`: original AudioMass code is MIT (copyright Pantelis Kalogiros); `THIRD_PARTY_NOTICES.md` lists WaveSurfer BSD-3, lamejs LGPL, libFLAC/BSD, RNNoise BSD-3, lz4 BSD-2.
2. Mapped “refine features for SEO” onto this site’s funnel: **absorb** into one slug (How / FAQ / Use cases / visible menu names). Doorway URLs per button would violate Google scaled-content / doorway policy already mirrored in `tool-i18n-seo`.
3. Rewrote `docs/sound-editor/01` (copy + vendor + isolation + HUD) and `02` (product surface + 22-row intent table). Updated `00`, `README`, and W0 cost in `06`.
4. Did not create `work-tasks/`, did not vendor source into `public/`, did not change `src/`.

## Root cause / analysis

“Can we copy?” is a license question: **yes** for MIT original files if copyright and notices travel with the tree. Third-party files keep their own licenses; lamejs stays LGPL (lazy-load + NOTICE). Wavacity remains GPL-2 and is still banned.

“Refine for SEO” is not “one landing page per effect.” Search intents (cutter, recorder, wav-to-mp3, fade, normalize, denoise, pitch, loop, two-track) share one editor control surface. Splitting them would be thin doorway pages. The information gain vs official AudioMass is ten-locale chrome, gold HUD, file caps, and indexable scene copy—not a second about.html clone.

Copying the shell still has site constraints the MIT license does not remove: `public/vendor/audiomass/`, `lint:vendor`, tool isolation (wrap PKAE or same-origin iframe), i18n string extraction, no CDN, no iframe to audiomass.co. EDL stays a post-ship memory optimization because AudioMass copies full PCM buffers.

## Solution

- **Engine:** vendor the AudioMass tree; wrap in an `opts` tool page.
- **SEO:** one draft slug `edit-audio-on-waveform`; 22 capabilities mapped to queries and on-page slots in 02 §12; forbidden URL list included.
- **v1 scope:** ship what copy already has, including multitrack; do not strip back to a trimmer.
- **06 W0:** T/C reduced from 3/3 to 2/2 for the waveform package; two-track mixdown rides with copy, ducking automation can stay later.

## Notes / boundaries

- Live upstream: https://github.com/pkalogiros/AudioMass — not copied into git in this round.
- Voice clone / RVC (03–04, 07–10) is still a different job.
- Creating the catalog tool still needs an explicit “create / implement” request plus coverage 0b.

[actions]
- Updated `docs/sound-editor/00-request.md`, `README.md`, `01-js-implementation-research.md`, `02-product-design.md`, `06-demand-difficulty-cost-roadmap.md`
