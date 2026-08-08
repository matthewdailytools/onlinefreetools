# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：在底图上叠加第二张图，调透明度、位置、缩放与混合模式后导出。
- 谁在什么任务里用：加水印 Logo、角标、半透明贴纸，而非多图拼版。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** | **是（主）** | Canvas alpha + composite；A.2.1 / D.1 P2 |
| **B** | 弱 | B13 互链 |
| **C** | 否 | |

**选定主方向**：A  
**Related**：`image-merge`, `image-crop`

## 红线自检

- [x] 真能力非空壳
- [x] 非机翻铺量
- [x] 无重后端
- [x] 不与文字水印页混成双 H1；本页双位图图层

### 若选 A

- Tier 0：globalAlpha + globalCompositeOperation + drawImage
- CWV：双图预览即可

## 结论

- 继续立项：是
- slug：`image-overlay`
- 新建；catalog `image`
