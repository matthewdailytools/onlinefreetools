# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器里打开 ZIP、TAR、TAR.GZ 等归档文件，查看目录、预览常见文本/图片，并下载单个文件或导出安全重写后的 ZIP。
- 谁在什么任务里用：开发者、学生、运营、Chromebook/受管电脑用户收到非 ZIP 压缩包时，想先看内容、抽出少量文件，且不想上传资料到在线服务。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 属于 A.5 PDF 与压缩包能力；ZIP/TAR 路径 Tier 1，多格式 RAR/7Z/ISO 需 Tier 2 懒加载。 |
| **B** 场景桥接 | 次要匹配 | B14 归档工作流清楚描述“收到归档包 → 浏览/抽取/导出”的上下游，但本页核心差异首先是浏览器解包能力。 |
| **C** 行业专属 | 否 | 不是某一垂直行业标准工具；可服务开发/运营/学习场景，但不依赖行业行话。 |

**选定主方向**：A
**次要互链参考**：B14 归档工作流；与 `unzip-file`、`file-hash`、`split-pdf` 互链，后续可补 `create-zip-file` / `gzip-file`。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：与 `unzip-file` 分工为“ZIP-only 快路径” vs “多格式归档浏览/抽取”。
- [x] 不是无增量机翻铺量：十语必须按 locale brief 重写，不能脚本同构灌语。
- [x] 不依赖偏离定位的重后端：核心处理在浏览器；重型多格式引擎点击后加载。
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL：RAR/7Z/TAR/TGZ/ISO 等格式都放支持表、FAQ 和 Use cases，不拆 `rar-extractor` / `7z-extractor` 等页面。

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：ZIP 可沿用 `fflate`；TAR 可用轻量解析器或自研规范解析；TAR.GZ 先 gzip 解压再读 TAR；RAR/7Z/ISO 评估 `libarchive` 类 WASM 只读引擎。
- Tier（0 / 1 / 2）：Tier 1 为 ZIP/TAR/TAR.GZ；Tier 2 为用户点击“加载多格式引擎”后处理 RAR/7Z/ISO。
- CWV / 懒加载注意：首屏只加载 UI 与说明；ZIP/TAR 核心动态 import；WASM 引擎不进首屏；大文件用 Worker，必要时提示移动端内存边界。

## 结论

- 继续立项：是。
- 建议 slug：`archive-extractor`。
- 与已上线工具关系（增强 / 新建 / Related）：新建工具；`unzip-file` 保留 ZIP 专页，`archive-extractor` 覆盖 ZIP 之外的归档格式与导出 ZIP 模式。
- 进入 `02-tool-info.md` 前仍缺的信息：实现时需 POC 确认多格式 WASM 体积、许可证、RAR/7Z 加密和 solid archive 的支持边界。
