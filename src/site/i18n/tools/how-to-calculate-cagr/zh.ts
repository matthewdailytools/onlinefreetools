/**
 * i18n 工具分片（how-to-calculate-cagr / zh）。
 * 求 CAGR %、期末值或年数；YMYL 仅教材算术 — 不构成投资建议。
 * 占位符须原样保留：{end} {begin} {years} {rate}。
 */
import type { SiteLangDict } from '../../../types';

/** 中文文案字典：键名与母版 en 一一对应，内容按当地检索习惯独立重写。 */
const zh: SiteLangDict = {
	tool_cagr_title: "CAGR 计算器 — 两个数值之间的年化增长",
	tool_cagr_description: "用期初值与期末值求复合年增长率（CAGR / 年化增长率），也可反推期末值或所需年数。示例：10000 → 16105.10，历时 5 年 → 约 10.00% CAGR。页面给出分步与增长倍数校验。仅供学习演示，不构成投资建议；过往或假设收益不保证未来结果。",
	tool_cagr_article: "按标准恒等式 ((期末/期初)^(1/n)−1) 计算 CAGR、期末值或年数，并给出分步与反算校验。",
	tool_cagr_desc: "由期初值求 CAGR %、期末值或年数。仅供学习。",

	tool_cagr_safety_banner: "仅供学习。本页只做教材式 CAGR 算术，不是投资、税务或理财建议；过往或假设增长不保证未来表现。",
	tool_cagr_mode_label: "你想求什么？",
	tool_cagr_mode_rate: "由期初 / 期末 / 年数求 CAGR %",
	tool_cagr_mode_end: "由期初 / CAGR / 年数求期末值",
	tool_cagr_mode_years: "由期初 / 期末 / CAGR 求年数",
	tool_cagr_hint: "当前模式下的有效输入都必须大于 0。CAGR 忽略期中现金流，并按每年复利一次处理。",
	tool_cagr_begin_label: "期初值",
	tool_cagr_begin_ph: "例如 10000",
	tool_cagr_end_label: "期末值",
	tool_cagr_end_ph: "例如 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "例如 10",
	tool_cagr_years_label: "年数",
	tool_cagr_years_ph: "例如 5",
	tool_cagr_calculate: "开始计算",
	tool_cagr_sample: "加载样例",
	tool_cagr_clear: "清空",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "期末值",
	tool_cagr_yearsOut_label: "年数",
	tool_cagr_multOut_label: "总增长倍数",
	tool_cagr_steps_title: "计算步骤",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%。",
	tool_cagr_step_end_tpl: "期末值 = {begin} × (1 + {rate}/100)^{years} ≈ {end}。",
	tool_cagr_step_years_tpl: "年数 = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}。",
	tool_cagr_step_check_tpl: "校验：{begin} × (1 + {rate}/100)^{years} ≈ {end}。",
	tool_cagr_result_note: "假定每年复利一次、且无期中现金流。仅供学习演示 — 不构成投资建议。",
	tool_cagr_err_generic: "请为当前有效字段填写正数（例如期初 10000、期末 16105.1、年数 5）。",

	tool_cagr_how_title: "怎么用 CAGR 计算器",
	tool_cagr_how_body: "先选要求 CAGR %、期末值还是年数，填入已知正数后点「开始计算」。加载样例会轮换：10000→16105.1 历时 5 年（约 10%）、按 10% 反推期末、同端点求年数，以及 5000→8000 历时 3 年的较短例子。",
	tool_cagr_how_item_1: "选择要求的结果类型。",
	tool_cagr_how_item_2: "按该模式填入已知的正数。",
	tool_cagr_how_item_3: "点击「开始计算」，查看答案、增长倍数与分步。",
	tool_cagr_how_item_4: "用「加载样例」轮换教材检查点。",

	tool_cagr_why_choose_title: "为什么用本站的 CAGR 计算器",
	tool_cagr_why_choose_item_1: "三种方向：CAGR %、期末值或年数。",
	tool_cagr_why_choose_item_2: "主结果旁显示总增长倍数（期末 ÷ 期初）。",
	tool_cagr_why_choose_item_3: "分步把你的数字代入 CAGR 恒等式。",
	tool_cagr_why_choose_item_4: "反算校验：期初 × (1+r)^n 是否回到期末。",
	tool_cagr_why_choose_item_5: "清晰的 YMYL 边界：只做学习算术 — 不构成投资建议。",

	tool_cagr_formula_title: "CAGR 公式",
	tool_cagr_formula_body: "CAGR 是在 n 年内、按每年复利一次，把期初值增长到期末值的恒定年化利率。",
	tool_cagr_formula_item_1: "CAGR = ((期末 ÷ 期初)^(1 ÷ n) − 1) × 100。示例：((16105.1/10000)^(1/5)−1)×100 ≈ 10%。",
	tool_cagr_formula_item_2: "期末 = 期初 × (1 + CAGR/100)^n。",
	tool_cagr_formula_item_3: "n = ln(期末 ÷ 期初) ÷ ln(1 + CAGR/100)。",
	tool_cagr_formula_item_4: "要求期初 > 0、期末 > 0、n > 0（求年数时 CAGR ≠ −100%）。",
	tool_cagr_formula_item_5: "忽略费用、税费与期中现金流 — 与完整 IRR 不同。",

	tool_cagr_example_title: "演算示例",
	tool_cagr_example: "加载样例先从 10000 → 16105.10、历时 5 年入手 → CAGR ≈ 10%。下一步用 10% 把 10000 增长 5 年回到约 16105。再在相同端点与 10% 下求年数。最后一个样例是 5000 → 8000、历时 3 年。",

	tool_cagr_usecases_title: "什么时候用 CAGR 计算器",
	tool_cagr_usecase_1: "作业：用标准 CAGR 公式把多年增长年化。",
	tool_cagr_usecase_2: "把收入或组合的两端点按年化口径对照（仅作示意）。",
	tool_cagr_usecase_3: "反推给定 CAGR 达到目标大约需要多少年。",
	tool_cagr_usecase_4: "当年数重要时，可对照相关 ROI 页的简单回报率。",

	tool_cagr_faq_q1: "本页用哪条 CAGR 公式？",
	tool_cagr_faq_a1: "CAGR = ((期末 ÷ 期初)^(1 ÷ 年数) − 1) × 100。三者都必须大于 0。",
	tool_cagr_faq_q2: "CAGR 和简单 ROI 有什么不同？",
	tool_cagr_faq_a2: "简单 ROI 不考虑变化经历了多少年；CAGR 会按你填入的年数做年化。",
	tool_cagr_faq_q3: "期初或期末为 0 或负数怎么办？",
	tool_cagr_faq_a3: "两者都必须大于 0。零或负值会使本页的标准 CAGR 公式无定义。",
	tool_cagr_faq_q4: "这是投资建议吗？",
	tool_cagr_faq_a4: "不是。数字仅供学习演示 — 不构成投资、税务或理财建议。",
	tool_cagr_faq_q5: "CAGR 会计入追加投入或取出吗？",
	tool_cagr_faq_a5: "不会。只用期初、期末与年数。不规则现金流请用 IRR 类工具。",
	tool_cagr_faq_q6: "可以求期末值或年数吗？",
	tool_cagr_faq_a6: "可以。切换模式即可向前增长期初值，或由期初/期末/CAGR 反推年数。",
	tool_cagr_faq_q7: "复利按年一次吗？",
	tool_cagr_faq_a7: "本页按年复利；年内时点差异忽略不计。",

	tool_cagr_disclaimer: "CAGR 结果仅供学习演示，不构成投资、税务或理财建议。过往或假设收益不保证未来结果。真实组合还有费用、税费、现金流与风险，本页均未建模。",
	tool_cagr_references: "Investopedia 的 CAGR 定义与公式指南；标准 ((期末/期初)^(1/n) − 1) 年化增长率。",
	tool_cagr_ref_cagr_label: "Investopedia — 复合年增长率（CAGR）",
	tool_cagr_ref_formula_label: "Investopedia — 如何计算 CAGR 的公式",
};

export default zh;
