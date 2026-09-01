# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张方 Logo → App Store 要求的 **1024×1024** iOS 应用图标 PNG，并可选 iPhone/iPad 倍率与 Play 512 芯片 ZIP。
- 谁在什么任务里用：iOS 开发者/外包在提交 App Store Connect 前，把主图标导出为 1024 且不透明。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 技术底座 | Canvas contain + PNG/ZIP |
| **B** 场景桥接 | **是** | 方向 B6：应用商店素材 1→N |
| **C** 行业专属 | 否 | 规范引用是 IG，不是行业岗位专页 |

**选定主方向**：B  
**次要互链参考**：`iphone-app-store-screenshot`、`apple-touch-icon`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 apple-touch 的 180 主屏图标，本页是 **App 商店 1024**）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」：iPhone 180、iPad 167、Play 512 芯片，不拆 Play 包 URL

### 若选 B

- 场景链：1024 Logo → iOS App Icon（默认 1024）→ Xcode / App Store Connect；截图走已上线 `iphone-app-store-screenshot`
- 上游 / 下游：`image-crop`（先裁成方）、`image-compress`、`iphone-app-store-screenshot`

## 结论

- 继续立项：是
- 建议 slug：`ios-app-icon-size`
- 与已上线工具关系：新建；Related 截图页 + apple-touch（主屏网站图标，不是 App 图标）
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner 批，走常规 0b
- 用户意图审查（标 ready 前）：见 `02` 专节
