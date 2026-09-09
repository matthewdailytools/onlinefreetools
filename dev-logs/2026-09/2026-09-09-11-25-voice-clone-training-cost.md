Date: 2026-09-09 11:25
Summary: Documented order-of-magnitude training costs for speech clones versus singing/AI-cover models.
Visibility: project

[question]
给出声音训练仿声，歌曲仿声的训练成本

[try to solve]
## Context
After the demand map and roadmap, the user asked for training-cost numbers for (1) trained speech cloning and (2) song/singing imitation.

## Process
Separated zero-shot/instant (no weight update) from per-speaker fine-tune (RVC, GPT-SoVITS) from commercial PVC. Pulled public 2026 figures: RVC FAQ 10–50 min data; 4090 ~12–40 min for 200 epochs; RunPod 4090 about $0.34–0.74/h; ElevenLabs PVC 30 min–3 h spoken audio, 2–6 h wait, no singing; so-vits-svc/RVC singing needs dry vocals and pitch coverage. Wrote `docs/sound-editor/07-voice-clone-training-cost.md` and linked from README, 00, 04, 06.

## Root cause / analysis
GPU rent for one RVC/SVC voice is usually under a few dollars on a 4090. The bill is dry-vocal collection, listening QA, failed reruns, and licensing. Speech PVC and singing Cover are different products (ElevenLabs PVC refuses singing).

## Solution
Cost stacks and side-by-side tables: speech instant vs RVC vs PVC; singing SVC vs commercial Kits/ACE slots vs SVS. Budget heuristic: GPU $1–20 per voice; labor $100–800; celebrity legal unbounded.

## Notes / boundaries
Prices drift; not a quote. Foundation-model pretraining is explicitly out of the per-person ledger.

[actions]
- Added `docs/sound-editor/07-voice-clone-training-cost.md`
- Updated README, `00-request.md`, `04`, `06`
