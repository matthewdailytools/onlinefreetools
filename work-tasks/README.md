# work-tasks — 新工具立项工作区

本目录存放**尚未/正在立项**的工具讨论与信息文档。每个待建工具一个子文件夹；定稿后的 `tool-info.md` 作为实现输入，再按 `.cursor/rules/tool-creation.mdc` 写代码。

## 目录约定

```
work-tasks/
  README.md                 # 本说明
  _template/                # 复制用模板（勿当作真实工具）
    00-request.md           # 用户原始需求
    01-direction-discussion.md  # 对照工具方向 A/B/C 的讨论
    02-tool-info.md         # 定稿：IG 预审 + 开发/SEO 卡片
    03-locale-briefs.md     # 每语检索 brief + 禁词核查（写 i18n 前）
  {tool-slug}/              # 例如 json-schema-validator
    00-request.md
    01-direction-discussion.md
    02-tool-info.md
    03-locale-briefs.md
    notes.md                # 可选：补充讨论、SERP 摘录
```

- 子文件夹名 = 计划中的 **kebab-case slug**（与最终 `/tools/{slug}` 一致）。
- 状态建议写在 `02-tool-info.md` 顶部：`draft` → `ready` → `implemented`。
- 已上线工具可保留文件夹作归档，或移出；**不要**把实现源码放进本目录。

## 权威依据

| 文档 | 用途 |
|---|---|
| `.cursor/rules/seo-google-policy.mdc` | Google 合规最高镜像 |
| `docs/2026-07-28-tool-direction.md` | 主方向 A/B/C、红线、立项三问 |
| `docs/2026-07-28-google-seo-strategy-implementation.md` | IG §3.1 / 预审 §3.8 / 上线 §8.2（须对齐 rules） |
| `docs/2026-07-28-per-tool-dev-seo-plans.md` | 卡片字段约定 |
| `.cursor/rules/work-tasks-tool-brief.mdc` | Agent：如何建夹与写文档 |
| `.cursor/rules/tool-creation.mdc` | Agent：文档 `ready` 后如何实现页面 |
| `.cursor/rules/tool-i18n-localization.mdc` | 每语 brief、禁词表、≥3 轮核查 |

## 人工快速开工

1. 复制 `_template/` → `work-tasks/{slug}/`
2. 填 `00-request.md`
3. 对照工具方向写完 `01-direction-discussion.md`
4. 填 `02` 覆盖表，跑 `coverage:gate --phase=0b`，再做**用户意图审查**（满足/超出并回写 How），然后状态改为 `ready`
5. 实现十语前填 `03-locale-briefs.md`（检索词 + title 方向 + 禁词勾选 + 意图审查已做）
6. 再请求实现工程：按 `tool-i18n-localization.mdc` **稳妥常态**（母版一语 → 逐语/≤3 语独立重写 → ≥3 轮）；禁止脚本同构灌语；「待母语抽查」清掉后才可 `i18n-done`
