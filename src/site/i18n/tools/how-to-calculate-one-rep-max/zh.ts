/**
 * i18n 工具分片（how-to-calculate-one-rep-max / zh）。
 * 用 Epley / Brzycki / Lombardi 估算一次最大重量（1RM），并给出 %1RM 训练负重表。
 */
import type { SiteLangDict } from '../../../types';

/** 中文（简体）工具文案：1RM 估算计算器，YMYL 教育向，非训练处方。 */
const zh: SiteLangDict = {
	tool_one_rep_max_title: "一次最大重量（1RM）计算器 — 用重量和次数反推极限",
	tool_one_rep_max_description:
		"用 Epley 公式从次极限组估算一次最大重量（1RM）：1RM ≈ 重量×(1+次数/30)，并对比 Brzycki、Lombardi。示例：100 公斤举 5 次 → 约 116.7。附带 50%–95% 的 %1RM 负重表。仅供学习估算，不是训练或医疗建议。",
	tool_one_rep_max_article:
		"输入重量与次数，用 Epley 估算 1RM，并排查看 Brzycki、Lombardi，并读取以 Epley 1RM 为基准的训练百分比负重。",
	tool_one_rep_max_desc: "用 Epley、Brzycki、Lombardi 从次极限组估算 1RM，并显示 %1RM 负重表。",

	tool_one_rep_max_safety_banner:
		"仅供学习估算。请勿仅凭此数字尝试真极限试举；须充分热身、有人保护并在有指导时进行。非医疗或训练建议。",
	tool_one_rep_max_weight_label: "所举重量",
	tool_one_rep_max_weight_ph: "例如 100",
	tool_one_rep_max_reps_label: "完成次数",
	tool_one_rep_max_reps_ph: "例如 5",
	tool_one_rep_max_hint:
		"请填写你能以规范动作连续完成多下的重量。次数填 1–12 的整数时公式最稳；重量可用小数逗号。",
	tool_one_rep_max_calculate: "计算",
	tool_one_rep_max_sample: "加载样例",
	tool_one_rep_max_clear: "清空",
	tool_one_rep_max_ormOut_label: "估算 1RM（Epley）",
	tool_one_rep_max_pct_title: "以 Epley 1RM 为基准的训练负重",
	tool_one_rep_max_pct_col_pct: "占 1RM 比例",
	tool_one_rep_max_pct_col_load: "负重",
	tool_one_rep_max_steps_title: "计算步骤",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "三式差异范围：{lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley：1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}。",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki：1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}。",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi：1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}。",
	tool_one_rep_max_step_pct_tpl: "Epley 1RM（{orm}）的 80%：负重 ≈ 0.8 × {orm} = {p80}。",
	tool_one_rep_max_result_note:
		"次数越高，三式结果差得越大；教学估算宜用 ≤10 次的规范组。先热身；勿单凭计算器数字去冲极限。",
	tool_one_rep_max_err_generic: "请输入大于 0 的重量，以及 1–12 的整数次数（例如 100 和 5）。",
	tool_one_rep_max_err_high_reps: "次数超过约 12 次时公式不可靠。请换一组更重、次数更少的规范组。",

	tool_one_rep_max_how_title: "如何估算一次最大重量",
	tool_one_rep_max_how_body:
		"输入你举起的重量和规范完成的次数，点「计算」。页面给出 Epley 1RM，并排对比 Brzycki、Lombardi，以及常见训练百分比负重表。",
	tool_one_rep_max_how_item_1: "填写杠铃或哑铃在某组中使用的重量（动作规范、能完整做完）。",
	tool_one_rep_max_how_item_2: "填写该组成功次数（整数 1–12 最稳）。",
	tool_one_rep_max_how_item_3: "点击「计算」，查看 Epley 1RM 及 Brzycki、Lombardi 对照。",
	tool_one_rep_max_how_item_4:
		"阅读 50%–95% 的 %1RM 表作粗略训练参考；用「加载样例」可切换 100×5、60×8、80×3 与真·单次 135×1。",

	tool_one_rep_max_why_choose_title: "这个 1RM 计算器能帮你什么",
	tool_one_rep_max_why_choose_item_1: "以 Epley 为主估算 1RM，并并排展示 Brzycki、Lombardi 便于对照。",
	tool_one_rep_max_why_choose_item_2: "显示三式差异范围，一眼看出估算差多少。",
	tool_one_rep_max_why_choose_item_3: "给出 Epley 1RM 的 50%–95% 训练负重表。",
	tool_one_rep_max_why_choose_item_4: "分步代入你的重量与次数，公式过程透明。",
	tool_one_rep_max_why_choose_item_5: "顶部安全提示：仅供学习，不是让你据此去试极限。",

	tool_one_rep_max_formula_title: "一次最大重量公式",
	tool_one_rep_max_formula_body:
		"一次最大重量（1RM）指规范动作下理论上能举起一次的最重负荷。下列公式用次极限组反推 1RM。",
	tool_one_rep_max_formula_item_1: "Epley：1RM ≈ w × (1 + r/30)。例：w=100、r=5 → 100×(1+5/30)=116.67。",
	tool_one_rep_max_formula_item_2: "Brzycki：1RM ≈ w × 36 ÷ (37 − r)。同例 → 100×36÷32=112.5；r≥37 无定义。",
	tool_one_rep_max_formula_item_3: "Lombardi：1RM ≈ w × r^0.1。同例 → 100×5^0.1≈117.46。",
	tool_one_rep_max_formula_item_4: "次数越多估算越散；教学用途宜选更少、更规范的重复。",
	tool_one_rep_max_formula_item_5: "训练百分比（如 1RM 的 80%）仅作计划参考，须结合疲劳、动作与经验调整。",

	tool_one_rep_max_example_title: "算例",
	tool_one_rep_max_example:
		"样例默认 100 公斤 5 次：Epley≈116.7，Brzycki 112.5，Lombardi≈117.5。接着可试 60×8、80×3，以及真·单次 135×1（三式均为 135）。动作务必规范；技术变形应提前停组。",

	tool_one_rep_max_usecases_title: "什么时候用 1RM 计算器",
	tool_one_rep_max_usecase_1: "课堂或作业：把重量、次数代入 Epley 并展示计算步骤。",
	tool_one_rep_max_usecase_2: "粗略排计划：把估算 1RM 换算成 70%–85% 的工作组重量。",
	tool_one_rep_max_usecase_3: "对比公式：看同一组数据在 Epley、Brzycki、Lombardi 下差多少。",
	tool_one_rep_max_usecase_4: "只有次极限记录、又不想现场冲真极限时，先估一个参考值。",

	tool_one_rep_max_faq_q1: "Epley 公式怎么算一次最大重量？",
	tool_one_rep_max_faq_a1:
		"用重量乘以 (1+次数/30)。100 公斤 5 次：100×(1+5/30)=116.67。本页同时给出 Brzycki、Lombardi 对照。",
	tool_one_rep_max_faq_q2: "Epley 和 Brzycki 有什么不同？",
	tool_one_rep_max_faq_a2:
		"Epley 用次数/30 的线性加成；Brzycki 用 36/(37−次数)。同样 100×5，Epley≈116.7，Brzycki 112.5。都不能替代有监督的极限测试。",
	tool_one_rep_max_faq_q3: "用几次重复估算比较合适？",
	tool_one_rep_max_faq_a3: "通常 1–10 次规范重复。超过约 12 次公式不可靠，本页会提示换更重、次数更少的组。",
	tool_one_rep_max_faq_q4: "1RM 的 80% 是什么意思？",
	tool_one_rep_max_faq_a4:
		"常见工作强度：负重≈0.8×估算 1RM。Epley 1RM 为 116.7 时，80% 约 93.3（与输入同单位）。",
	tool_one_rep_max_faq_q5: "按算出的 1RM 去试举安全吗？",
	tool_one_rep_max_faq_a5:
		"不能单凭本页数字。请当作学习参考。真极限需要热身、保护、规范技术，最好有教练在场——本页不是让你去冲极限的建议。",
	tool_one_rep_max_faq_q6: "公斤和磅要统一吗？",
	tool_one_rep_max_faq_a6: "任意单位均可，但全程保持一致。公式是比值，1RM 与所填重量单位相同。",
	tool_one_rep_max_faq_q7: "这是医疗或训练指导吗？",
	tool_one_rep_max_faq_a7:
		"不是。这是帮助理解常见 1RM 估算公式的学习工具。训练或健康决策请咨询合格教练或医务人员。",

	tool_one_rep_max_disclaimer:
		"一次最大重量估算仅供学习，非训练、医疗或专业建议。请勿仅依据本计算器尝试最大试举。",
	tool_one_rep_max_references: "常见教材与维基百科对 1RM 预测公式的说明。",
	tool_one_rep_max_ref_a_label: "维基百科 — 一次最大重量",
	tool_one_rep_max_ref_b_label: "维基百科 — 力量训练",
};

export default zh;
