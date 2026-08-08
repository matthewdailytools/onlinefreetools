# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-to-base64`  
**路径**：`/tools/image-to-base64`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

---

## IG 预审

- 目标主词 / 长尾意图：见 `03` 各语检索词；英文主意图对齐 Title。
- 用户真实任务：前端/邮件模板作者嵌入图、调试 data URL、粘贴 Base64 还原预览。
- [x] 竞品常见：上传转换、下载、少讲清本地边界与算法/页规则
- [x] 缺口：本地隐私细节、失败边界、与邻近工具分工、固定 Example
- [x] 增益：Rules + 边界 + Use cases + References + 本地 FAQ + 十语 + Example + Related
- [x] 长尾：**合并**进本页控件，不拆近义薄页
- [x] 权威来源：
  - https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
- [x] Use cases：围绕「在浏览器内把图片与 Base64（data URL / 纯串）互相转换，不上传。」写 2–3 条场景
- [x] 边界：未选图；解码失败；超大图软警告（~25MB / ~8192px）；GIF 动画默认首帧（除非本工具就是动图合成）
- [x] Example/FAQ：与进页样例一致；FAQ≥3
- [x] Related：`image-format-converter`, `image-compress`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：Encode 读文件为 data URL；Decode 接受 data:image… 或裸 Base64（需推断 MIME，默认 image/png）；非法串报错；不上传 |
| 2 | 边界/失败 | FAQ + UI |
| 3 | 场景语境 | Use cases |
| 5 | 权威引用 | References |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example |
| 9 | 主题内链 | related |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | A.2 / 开发者工具 · P1 · `image` |
| 场景与行业 | 通用图片处理 / 轻量交付 |
| 技术 | Tier 0：FileReader.readAsDataURL / fetch(dataURL)+blob；可选 Canvas 重编码 MIME；**不上传** |
| Title (en) | `Image to Base64 Converter — Encode & Decode Locally \| {Brand}` |
| Description 要点 | 步骤 + 本地 + 示例；≥120 字落地 |
| Schema | WebApplication + BreadcrumbList；`#cat-image` |
| FAQ ≥3 | 是否上传；data URL vs 裸 Base64；超大串内存；GIF 动图只静帧 |
| related | image-format-converter, image-compress |
| 验收 | lint:seo；进页样例真实结果；README |
| 工期粗估 | 0.5–1.5d |
| 本地化核查 | `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：文件或 Base64/data URL 文本；模式 Encode/Decode；输出含 data: 前缀开关
- 输出：Encode：可复制 Base64/data URL + 预览；Decode：预览图 + 下载
- 核心规则 / 算法：Encode 读文件为 data URL；Decode 接受 data:image… 或裸 Base64（需推断 MIME，默认 image/png）；非法串报错；不上传
- 失败与边界行为：未选图/非法输入提示；软限制警告；Clear 复位
- 示例 Input → Output：与进页样例一致
- **进页样例（必填）**：Canvas 色块 PNG→自动 Encode 显示 data URL；Example 对齐「样图→Base64 前缀可见」；进页调用 `loadSample()` 自动跑出真实结果（见 `tool-creation.mdc`）

## 页面模块清单

- [ ] H1 + 摘要 · 首屏交互 · How · Rules · Example · Use cases · FAQ≥3 · Related≥2 · References≥1  
- [x] `03-locale-briefs.md` 已填
