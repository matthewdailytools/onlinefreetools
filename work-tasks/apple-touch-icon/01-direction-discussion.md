# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：方 Logo → `apple-touch-icon.png` 180×180（及 favicon/PWA 芯片 ZIP）。
- 谁在什么任务里用：站长把站点加到 iOS 主屏幕，不要模糊截图图标。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | 技术 | Canvas |
| **B** | **是** | B8 站点/PWA 图标 1→N |
| **C** | 否 | |

**选定主方向**：B  

## 红线自检

- [x] 不把 Favicon generator 当 H1（head）
- [x] 不拆 chrome-extension 独立 URL
- [x] 本地
- [x] 一带多：favicon 32、PWA 192/512

### 若选 B

- 场景链：Logo → apple-touch + 可选 favicon 套 → 贴进站点根目录
- 上游 / 下游：`image-compress`、`open-graph-image-size`

## 结论

- 继续立项：是
- 建议 slug：`apple-touch-icon`
