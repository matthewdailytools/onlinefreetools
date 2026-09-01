# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张图 → YouTube **视频缩略图** 1280×720（16:9 cover-fill JPEG）；可选 640×360 最低档芯片。
- 谁在什么任务里用：创作者把剧照裁成可上传的横屏缩略图，避免误用 OG 链接卡或 Shorts 竖图。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | Canvas cover |
| **B** | **是** | B9 作业类型：YouTube 视频缩略图 |
| **C** | 否 | |

**选定主方向**：B  
**次要互链参考**：`open-graph-image-size`（链接卡 1200×630）、`instagram-story-size`（竖屏 Story / Shorts 封面）

## 红线自检

- [x] 不是 OG 链接卡换皮（作业类型不同；H1 禁止 Open Graph）
- [x] 不把 Shorts 封面拆进本 URL（9:16 在 `instagram-story-size`）
- [x] 本地
- [x] 一带多：640×360 最低建议档作芯片，不拆 URL

### 若选 B

- 场景链：剧照/截帧 → YouTube 1280×720 缩略图 → 上传到视频；链接卡走 `open-graph-image-size`
- 上游 / 下游：`image-crop`、`open-graph-image-size`

## 结论

- 继续立项：是
- 建议 slug：`youtube-thumbnail-size`
- 与已上线工具关系：新建；Related OG + Story
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
