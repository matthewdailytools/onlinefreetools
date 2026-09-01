# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张图裁成链接分享卡约 1200×630 并导出。
- 谁在什么任务里用：发链接前要一张不会被裁糊的 OG 图。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | Canvas |
| **B** | **是** | B9 作业类型 A 链接卡 |
| **C** | 否 | |

**选定主方向**：B  

## 红线自检

- [x] 不注册 social-share-image-pack
- [x] 不与 `open-graph-preview` 抢 H1（那边验标签）
- [x] 封面/Story 不进本页
- [x] 一带多：FB/LinkedIn/X 链接卡芯片

### 若选 B

- 场景链：文章配图 → 1200×630 → 上传 CDN → 写 og:image（预览走 related）
- 上游 / 下游：`open-graph-preview`、`image-compress`、`image-crop`

## 结论

- 继续立项：是
- 建议 slug：`open-graph-image-size`
