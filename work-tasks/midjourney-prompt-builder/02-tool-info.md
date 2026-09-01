# 02 — 工具信息定稿

**状态**：`draft`  
**slug**：`midjourney-prompt-builder`  
**路径**：`/tools/midjourney-prompt-builder`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Midjourney prompt 组装 | **是** | H1 |
| Sketch 风格 | 芯片 absorb | 不拆 URL |
| 云端图像生成 | — | **有意不满足** |

---

## IG 预审（topic §4.3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 规则 | 主体/风格/光线/画幅 → MJ 参数映射 |
| 2 | 边界 | 本地组装；不替代官方客户端 |
| 3 | 对照 | vs S0 通用 builder |
| 4 | 样例 | 完整 MJ prompt 进页自动 |

---

## 开发 / SEO 卡片（草稿）

| 字段 | 内容 |
|---|---|
| Title (en) / H1 | **Midjourney prompt builder** |
| `localProcessing` | **true** |
| related | `prompt-template-builder`, `writing-prompt-generator` |
| [ ] coverage:gate 0b | 未跑 |

## 交互规格

- 字段：subject, style, lighting, aspect ratio, optional MJ flags
- **进页样例**：`loadSample()` 输出一条完整 prompt
- DOM 前缀：待定（如 `mpb`）

## 页面模块清单

- [ ] 全部 — 待 ready
