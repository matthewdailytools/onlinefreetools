# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张图 → Instagram **方图发帖** 1080×1080（1:1 cover-fill JPEG）；可选 4:5 与 IG 横图芯片。
- 谁在什么任务里用：运营把照片裁成可发的动态方帖，而不是 Story 竖图。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | Canvas cover |
| **B** | **是** | B9 作业类型 C：IG 方图发帖 |
| **C** | 否 | |

**选定主方向**：B  
**次要互链参考**：`instagram-story-size`（9:16 Story）、`open-graph-image-size`（链接卡）

## 红线自检

- [x] 不是 Story 换皮（作业类型 D 已上线 `instagram-story-size`）
- [x] 不按 4:5 / FB 动态拆近义 URL
- [x] 本地
- [x] 一带多：4:5、IG 横图芯片；FB 动态 FAQ absorb

### 若选 B

- 场景链：照片 → IG 1080×1080 发帖 → 发动态；Story 走 `instagram-story-size`
- 上游 / 下游：`image-crop`、`instagram-story-size`

## 结论

- 继续立项：是
- 建议 slug：`instagram-post-size`
- 与已上线工具关系：新建；Related Story + OG
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
