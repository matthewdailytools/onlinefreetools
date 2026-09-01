# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张图 → Instagram **Story** 1080×1920（9:16 cover-fill）+ 顶/底 UI 安全区预览；可选 Reels / TikTok / Shorts 封面芯片。
- 谁在什么任务里用：运营把海报裁成今日 Story，避免文字被进度条和回复栏挡住。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | Canvas cover |
| **B** | **是** | B9 作业类型 D：竖屏 Stories |
| **C** | 否 | |

**选定主方向**：B  
**次要互链参考**：`linkedin-banner-size`（超宽封面）、`open-graph-image-size`（链接卡）

## 红线自检

- [x] 不是方图发帖换皮（作业类型 C 是 `instagram-post-size`）
- [x] 不按 Reels/TikTok/Shorts 拆近义 URL（同 9:16）
- [x] 本地
- [x] 一带多：Reels / TikTok / Shorts 芯片

### 若选 B

- 场景链：海报/照片 → IG Story 1080×1920 → 发 Story；方图发帖走尚未开工的 `instagram-post-size`
- 上游 / 下游：`image-crop`、`linkedin-banner-size`

## 结论

- 继续立项：是
- 建议 slug：`instagram-story-size`
