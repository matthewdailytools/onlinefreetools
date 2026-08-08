# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：把 2+ 张本地图片拼成一张（横排/竖排/网格），可调间距与背景，可选社媒尺寸预设后下载。
- 谁在什么任务里用：社媒运营、电商美工、教程作者做 Before/After 或步骤拼图。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（技术主）** | A.2 Canvas N→1；A.2.1 竞品对照 |
| **B** 场景桥接 | 强（叙事/预设） | B13 多图合成；主方向仍标 A（真能力在 Canvas），B 为场景互链 |
| **C** 行业专属 | 否 | |

**选定主方向**：A（次要场景叙事 B13）  
**次要互链**：`image-crop`、`image-compress`；上线后 `image-overlay`

## 红线自检

- [x] 非空壳变体（真实布局公式 + 多图合成）
- [x] 非机翻铺量
- [x] 无重后端
- [x] 不拆 `merge-horizontal` / `instagram-post-collage` 薄页；预设同页

### 若选 A

- 成熟度：✅✅✅ Canvas `drawImage`
- Tier：0/1
- CWV：多图注意内存；可选 Worker 后续

## 结论

- 继续立项：是
- slug：`image-merge`
- 新建；catalog `image`；Related：`image-crop`, `image-compress`
