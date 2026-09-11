# notes — trim-an-audio-clip-and-export

立项日：2026-09-10。本夹只服务 **S1 单点裁剪导出**，不是 Hub。

## 主题

- 新 topic id：`sound-editor`（kebab；与用户「sound editor」对应）。
- 实现 catalog 时 `primaryTopic: "sound-editor"`。
- **不要**在工具未上线时跑全站 `build:site`：叶子 `/topics/sound-editor` 会先出现空网格（表行依赖 catalog slug）。

## SERP / 近义（0b）

公开裁剪站常见 title 用 *MP3 Cutter*。本站 H1 用任务句，cutter 进 FAQ。竞品缺口见 `02` IG 预审。无本 slug 的 Keyword Planner CSV。

**页面生成词表**：同意图相关搜索的全集写在 `02`「同意图相关搜索词（页面生成必吸）」——相关搜索 / PAA / 12 S1 搜法簇 / 十语当地等价说法。`03` 每语 3–5 只定 H1 方向。异意图（sound editor、铃声、视频抽音、split）进不吸列。

## 与 01/11/12 的关系

- 01/11：Hub 禁止薄裁剪器冒充 *sound editor*。
- 12：**允许** scene URL 专办起止+导出。本立项走 12，不把本页做成 AudioMass 宿主。
