Date: 2026-09-09 11:55
Summary: Competitor map for a bring-your-own-model on-device singing converter: Voice.ai and Weights are closest apps, desktop RVC is the real incumbent, and licensed cloud covers use the opposite architecture.
Visibility: people

[question]
有哪些竞品
形成文档保存下来

[try to solve]
## Context

After the on-device celebrity-singing research, the intended product was a mobile app that does not host a celebrity voice shop. Users find and import their own RVC/SVC weights; the app converts and mixes a cover locally. The question was who already occupies that job, so the landscape could be filed next to the sound-editor research notes.

## Process

Public products were grouped by the user’s actual substitute, not by the phrase “AI music”:

1. Import-a-model voice changers and cover apps (Voice.ai, Echo, Weights, Chinese RVC changer apps, Windows “model workshop” all-in-one packs).
2. Desktop RVC benches (WebUI, Applio, w-okada, Vonovox, so-vits-svc), including Termux Applio as a non-product Android workaround.
3. Cloud AI covers (Kits.ai, Covers.ai/Voicify) and stem tools (Moises, Lalal.ai).
4. Adjacent jobs that look similar in a store search: text-to-song (Suno, MELO), karaoke (全民K歌, Smule), TTS (ElevenLabs, 魔音工坊), DSP soundboards (Voicemod).

Each group was scored against four product cells: native phone, file import without an in-app celebrity catalog, on-device inference, and a singing export loop (dry vocal or stems → convert → mix → file).

## Root cause / analysis

Almost nobody fills all four cells. Voice.ai is the closest store app for “upload RVC on a phone,” but it is account/cloud-leaning and live-chat oriented. Weights matches “find a model and make a cover” by operating a huge community catalog — the growth tactic this product must not copy. Desktop Applio and Chinese one-click workshop packs already deliver local singing conversion; a weak mobile app will lose those users back to a PC. Kits.ai competes for the same sentence in the user’s head (“make this song sound like that voice”) with licensed cloud voices.

Mixing in Suno or karaoke would optimize the wrong checklist.

## Solution

Filed `docs/sound-editor/09-byom-singing-app-competitors.md`. Positioning:

- Copy desktop one-click cover UX (separate, convert, mix, export).
- Copy Kits-style consent language in the store, not a celebrity ASO list.
- Keep model discovery outside the app (Files / share sheet).
- Treat the empty cell as the wedge: native phone + file import + local SVC + singing export.

Index and request log updated so round 10 points at 09. Implementation remains 08; this is not a `work-tasks/` brief.

## Notes / boundaries

- Names and prices will rot; the four-way split should last longer.
- The doc is not a download directory for unauthorized celebrity checkpoints.
- onlinefreetools.org still has no singing App or catalog slug from this round.

[actions]
- Added `docs/sound-editor/09-byom-singing-app-competitors.md`
- Updated `docs/sound-editor/README.md` and `docs/sound-editor/00-request.md`
