# notes — split-a-recording-on-silence SERP / 覆盖备忘

Date: 2026-09-11  
Planner: **不适用**（声音簇无本 slug Ads/Keyword Planner CSV）。Ahrefs MCP 本回合不可用。

## 公开 SERP（2026-09-11）

竞品作业一致：上传一轨 → 按阈值/最短静音切开 → **多段** 单独下载或 **ZIP**。

| 站 | Title / H1 倾向 | 默认 | 输出 | 本页不抄 |
|---|---|---|---|---|
| FyleTools `/en/audio/split` | Split Audio by Silence Online Free | −30 dB / 1 s（FAQ 建议讲座 2–3 s） | ZIP，segment_001 | 品类头词当 H1；FFmpeg.wasm 首屏 |
| TunePocket split-audio | Split Audio — quiet gaps **或** equal **或** markers | −40 dB / 0.25 s，最多 30 段 | 单段或 ZIP | 三模式一页（等分=S3、手标=另一作业） |
| AudioForges silence-split | Audio Splitter – Split Audio by Silence | −30 dB / 0.5 s；最短段 1 s；最多 50 | 单段；超 50 拒绝 | 小时额度、格式全家桶 |
| SoniqTools splitter | Free Online Audio Splitter | 静音中点放切点 | ZIP | 四模式叠页 |
| GigAI audio-splitter | Split MP3/WAV/M4A Into Parts | 静音 + 等长 + 时间范围 | WAV ZIP | 三模式；本页只做静音切 |

PAA / 相关搜法（en）：split audio by silence；split mp3 by silence；split recording on silence；split audio at silence；detect silence and split；download segments as ZIP；silence threshold dB；minimum silence duration.

异意图（不吸进攻 H1）：remove silence one file；split into equal parts；cue/ape split；mute video；sound editor。

## 相对竞品缺口（本页补）

1. 明确 **多文件 ZIP** 与 S2 **一个更短文件** 不是同一 URL。  
2. 切点规则可索引：静音段**中点**切开（SoniqTools 同思路），不是挖光拼回。  
3. 诚实帽：桌面 ~40 MB / 20 min，窄屏 ~20 MB / 8 min；最多 **50** 段，超限拒绝而非悄悄截断。  
4. 默认对准**口语/讲座**（−40 dB / 1.0 s），不是 0.25 s 把换气切碎。  
5. 文件留在设备、不上服务器；JSZip / lamejs 点后加载。

## 样例数学

5.00 s = 0.80 音 + **1.20** 静 + 0.80 音 + **1.20** 静 + 1.00 音。  
默认最短静音 1.0 s → 两段静音都合格。中点 1.40 s 与 3.40 s。  
三段：**1.40 s**、**2.00 s**、**1.60 s**。ZIP 内 `sample-01.wav` … `sample-03.wav`。
