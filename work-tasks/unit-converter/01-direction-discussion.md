# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：在同一页按类别（长度、质量、温度、面积、体积、速度）把数值从源单位换到目标单位；写明换算因子与温度特殊公式。
- 谁用：学生、工程/日常辅助需要快速单位互转的人。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| A | **是** | 通用换算枢纽；方向文档明确单页多类别 |
| B | 否 | 非格式桥 |
| C | 弱 | 非行业专页；面积专页已有 `square-feet` |

**选定主方向**：A  
**Related**：`square-feet`、`how-to-calculate-aspect-ratio`（上线前可用 `how-to-calculate-percentage-change` 占位）→ 定稿用 `square-feet` + `timezone-converter`（时间/单位邻近）或 `how-to-calculate-percentage-change`

## 红线自检

- [x] 非空壳超市：有因子表/温度公式、边界、与 square-feet 分意图说明
- [x] 十语实质本地化
- [x] Tier 0 纯客户端
- [x] 长尾一带多：类别作 Tab，不按 cm↔inch 等拆页

## 结论

- 继续立项：**是**（§12 #12 / §9 P2）
- slug：`unit-converter`
