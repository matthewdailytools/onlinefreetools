# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张横图 → LinkedIn **个人背景横幅** 1584×396（cover-fill）+ 头像安全区预览；可选 FB/X/YT 封面芯片。
- 谁在什么任务里用：求职者/运营换 LinkedIn 背景图，避免文字被头像挡住。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | Canvas cover |
| **B** | **是** | B9 封面/频道安全区作业类型 |
| **C** | 否 | |

**选定主方向**：B  
**次要互链参考**：`open-graph-image-size`（链接卡，不是封面）

## 红线自检

- [x] 不是 OG 链接卡换皮（作业类型不同：超宽 + 安全区）
- [x] 不拆 YouTube channel art 独立 URL
- [x] 本地
- [x] 一带多：FB 封面、X header、YT 频道图芯片

### 若选 B

- 场景链：横图 → LinkedIn 个人横幅 → 上传 LinkedIn；频道图走芯片
- 上游 / 下游：`image-crop`、`open-graph-image-size`

## 结论

- 继续立项：是
- 建议 slug：`linkedin-banner-size`
