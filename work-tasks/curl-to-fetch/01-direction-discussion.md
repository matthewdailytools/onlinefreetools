# 01 — 方向讨论

**slug**：`curl-to-fetch`  
**日期**：2026-09-01

## 候选方向

| 方向 | 说明 | 结论 |
|---|---|---|
| A.10 开发者网络 | 把 cURL 命令转成浏览器/Node 可用的 `fetch` 片段 | **选用** |
| B5 全栈交换 | 与 `website-headers` 互补：那边看响应头，这边把文档里的 curl 搬进前端代码 | 吸收进 A |
| 独立 axios / Python 页 | 竞品常拆多输出格式 | **不做独立 URL**；FAQ absorb |

## 红线核对

- [x] 非 doorway：单一 H1「curl to fetch」，输出格式用芯片而非拆页
- [x] 非 scaled thin：有解析规则、边界 FAQ、固定 POST JSON 样例
- [x] 本地处理：粘贴 cURL 在浏览器解析，不上传
- [x] related ≥2：`website-headers`、`jwt-decoder`

## 定稿

**主方向 A.10**：粘贴 cURL → 生成 JavaScript `fetch(...)`；可选 async/await 包装芯片；常见 flag 覆盖见 `02` 交互规格。
