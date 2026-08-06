Date: 2026-08-06 20:34
Summary: Current pages aim for search-habit localization rewrites, not pure translation; quality is mixed and ar/ja/ru lack verified native review.

[question]
现在页面的语言是翻译的，还是根据本地化用户习惯和搜索习惯写的？

[try to solve]
**目标上是「按当地检索习惯重写」，不是「英模直译」；实际交付是混合态，且母语真人审尚未验证。**

### 规则意图
`tool-i18n-localization.mdc` 要求：先 locale brief（检索词 / title 方向）→ 按 brief 独立重写 → ≥3 轮；禁止 `Translate to {lang}` 与脚本同构灌语。

### 已上线证据（偏本地化）
- Title 用当地主词：es/pt/fr 用 IMC；ru 用 ИМТ；zh「公网 IP」「身体质量指数」；ja「体格指数の求め方」「こんなときに」
- 部分 FAQ 题序已打乱（如 marginal revenue：es/id/de 与 en 不同）
- 存量工具 `03` 多标 `i18n-done`，相对早期 `.bak` 的直译 title 已检索向改写

### 仍像「翻译骨架」之处
- 模块结构十语基本平行（How / Formula / FAQ 主题集合常同套）
- 许多 FAQ 仍是同一组问题换语（如 percentage-change）
- ar/ja/ru「待母语抽查」是用户确认清勾，**不是**已完成真人母语 QA

### 一句话
| 问法 | 答案 |
|---|---|
| 是机翻直出吗？ | 按现行流程与抽查，**不是**纯机翻交付目标 |
| 是母语按搜索习惯原创吗？ | **意图与 title 层接近**；长文/FAQ 仍有同构痕迹；**未经验证的真人母语审** |

更准确：**检索向 AI 重写（localization-oriented rewrite），不是专业本地化定稿。**

[actions]
- 抽查 `src/site/i18n/*` title/FAQ/usecases 标题；对照 `work-tasks/*/03-locale-briefs.md` 与 localization 规则
