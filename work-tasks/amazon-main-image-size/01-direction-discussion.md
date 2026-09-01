# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：一张商品图 → Amazon **主图**像素/体积/白底提示，导出合规 JPG。
- 谁在什么任务里用：跨境卖家上新主图，怕因尺寸关 zoom 或被拒。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 技术底座 | Canvas 缩放 |
| **B** 场景桥接 | **是** | B7 电商主图 1→N |
| **C** 行业专属 | 次 | Seller Central 规范引用 |

**选定主方向**：B  
**次要互链参考**：`image-compress`、`image-crop`

## 红线自检

- [x] 不是 doorway（它店主图芯片，不拆 marketplace pack）
- [x] 不是机翻铺量
- [x] 纯本地 Canvas
- [x] 一带多场景：eBay/Shopify 芯片

### 若选 B

- 场景链：商品图 → 主图合规文件 → 上传 Seller Central
- 上游 / 下游：`image-crop`、`image-compress`

## 结论

- 继续立项：是
- 建议 slug：`amazon-main-image-size`
- 新建；Related `image-compress`、`image-crop`
