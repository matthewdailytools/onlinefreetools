Date: 2026-08-06 20:25
Summary: 按规则策略完成 YAML ↔ JSON 立项文档（work-tasks/yaml-json）

[question]
重新根据规则策略 立项：YAML ↔ JSON

[try to solve]
已在 `work-tasks/yaml-json/` 完成立项（尚未实现页面代码）。

**结论**
- **slug**：`yaml-json` → `/tools/yaml-json`
- **主方向**：**B**（配置互通 1→1 桥；技术对齐 A.1 / Tier 1 `js-yaml`）
- **YMYL**：否；粘贴本地处理
- **`02` 状态**：`ready`；**`03` 状态**：`briefs-ready`
- **长尾**：同页双向 Tab，不拆 `json-to-yaml` / K8s 专用薄页

**相对 SERP 的 IG 重点（≥3）**
1. 类型推断规则对照（DEFAULT vs JSON-safe；`yes`/`no` 等）
2. 多文档政策写死：`loadAll` → JSON 数组
3. 往返损失对照（注释/锚点/键序）+ 本地隐私诚实说明（文本不上传 vs CDN）
4. 十语检索向 brief（实现时 ≥3 轮，禁脚本同构灌语）

**Related（现网）**：`markdown-to-html`、`text-diff`（卡片目标链的 schema/csv 工具未上线前）

下一步：你明确要求实现且保持 `02=ready` 后，再按 `tool-creation.mdc` + 稳妥常态本地化开工。

[actions]
- 新建 `work-tasks/yaml-json/00-request.md`
- 新建 `work-tasks/yaml-json/01-direction-discussion.md`
- 新建 `work-tasks/yaml-json/02-tool-info.md`（ready）
- 新建 `work-tasks/yaml-json/03-locale-briefs.md`（briefs-ready，十语 brief）
