# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C）。

## 候选一句话

- 工具做什么：把本地彩图转为灰度图并下载。
- 谁在什么任务里用：印刷预览、无障碍对比稿、风格化黑白照。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 图片本地处理簇；Tier 0 |
| **B** 场景桥接 | 弱/次要 | 多图导出可互链 merge/交付场景，但主能力仍是浏览器合成 |
| **C** 行业专属 | 否 | 通用任务 |

**选定主方向**：A  
**次要互链参考**：`flip-image`, `image-border`, `image-crop`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实交互 + Rules + 边界）
- [x] 不是无增量机翻铺量（十语 brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（纯客户端）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：getImageData 加权灰度 (0.299R+0.587G+0.114B) 或等价；保留 alpha
- Tier：**0**
- CWV / 懒加载注意：Tier 1 包须点击/生成时动态加载，勿首屏预拉

## 结论

- 继续立项：是
- 建议 slug：`image-grayscale`（`/tools/image-grayscale`）
- 与已上线工具关系：**新建**；catalog `image`；Related：`flip-image`, `image-border`, `image-crop`
- 进入 `02-tool-info.md` 前仍缺的信息：无
