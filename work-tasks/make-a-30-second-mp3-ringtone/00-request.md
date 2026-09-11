# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项和实现make-a-30-second-mp3-ringtone

## 已知约束（若有）

- 参考现有工具：`docs/sound-editor/12-slug-hub-and-scene.md` **S6**（手机铃声规格：30s + 淡化 + MP3；hub 芯片 **且** scene；Rules 写清无 M4A）。已上线 S1 裁剪页的解码/波形/金标 HUD/文件帽、S5 的 lamejs 懒加载可复用，**不是**缩小 DAW，也不是无缝循环页换皮。
- 必须本地处理：是
- YMYL：否
- 优先语言：十语；母版 en
- 其他：用户点名草稿 slug，允许建 `work-tasks/` 与 `src/`。近义不拆 `/ringtone-maker`、`/mp3-to-ringtone`。v1 **不做 M4A/M4R**，禁止 H1/按钮许诺 iPhone 安装包。无本 slug Keyword Planner CSV（12 表写明未跑 Planner）。Ahrefs 本轮 MCP 不可用，0b 用公开 SERP 习惯 + 12 搜法簇。

## 建议 slug（可空，由讨论阶段拟定）

- `make-a-30-second-mp3-ringtone`（用户点名；情境=给手机用 + 动作=裁 30 秒并淡化 + 结果=MP3 铃声）
