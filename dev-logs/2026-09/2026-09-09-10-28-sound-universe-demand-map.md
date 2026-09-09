Date: 2026-09-09 10:28
Summary: Enumerated a demand-only sound-product universe with the editor as the door, unconstrained by this site or JS.
Visibility: project

[question]
sound editor，不考虑本站的定位，不考虑是否js实现，只考虑从用户需求出发。我能想到的是围绕声音，可以衍生出声音编辑工具，ai变声工具，声音tts生成工具，某个明星音乐仿声工具，声音内容（人，动物，自然等），要建立一个以声音为核心，editor为切入口的应用。除此外，还有什么功能，都发散枚举，只要有需求。形成文档

[try to solve]
## Context
Earlier docs in `docs/sound-editor/` scoped a browser waveform editor (01–02) and voice-conversion stacks (03–04). This round asked for the opposite lens: ignore site positioning and JS feasibility; start from user jobs; grow an application with sound at the center and editor as the entry.

## Process
Kept the user’s five seeds (edit, AI voice change, TTS, celebrity/music imitation, content libraries for humans/animals/nature) and expanded by persona, daily sound events, and “next jump after the editor.” Wrote `docs/sound-editor/05-sound-universe-demand-map.md` and linked it from README and `00-request.md`. Split README so 01–04 “won’t do” lists do not silently filter 05.

## Root cause / analysis
A waveform editor only covers capture-and-fix. A sound application also needs identity (who is speaking/singing), generative fill (TTS/music/SFX), understanding (STT/search), realtime (live voice change), and a second mass market that is not “creator” at all (sleep soundscapes, meetings, language learning). Celebrity imitation forces a mirror demand: licensing, watermarking, and deepfake detection.

## Solution
Demand map with intensity tags and sensitive flags; module tree (17 layers); six post-editor jumps (fix / identity / split / generate / understand / publish). No implementation or ship decisions.

## Notes / boundaries
05 is not a work-task and does not override 01–04 for the onlinefreetools editor page. Ethics lists record demand, not permission to build.

[actions]
- Added `docs/sound-editor/05-sound-universe-demand-map.md`
- Updated `docs/sound-editor/README.md` and `docs/sound-editor/00-request.md`
