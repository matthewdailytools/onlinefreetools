/**
 * i18n tool shard (how-to-calculate-acceleration / zh).
 * 中文：匀变速直线运动加速度计算器；可求 a、v、v0、t，结果附计算过程。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_acceleration_title: "加速度计算器 — 用速度变化和时间求加速度",
	tool_acceleration_description:
		"按公式 a = (v − v0) ÷ t 计算匀变速直线运动的加速度，也可反过来求末速度、初速度或时间，并写出计算过程与步骤。示例：初速度 0、末速度 10、时间 2 → 加速度 5。速度与时间单位须一致（如 m/s 与 s → m/s²）。",
	tool_acceleration_calculate: "计算",
	tool_acceleration_sample: "加载样例",
	tool_acceleration_clear: "清空",
	tool_acceleration_solve_label: "要求解的量",
	tool_acceleration_solve_a: "加速度 a",
	tool_acceleration_solve_v: "末速度 v",
	tool_acceleration_solve_v0: "初速度 v0",
	tool_acceleration_solve_t: "时间 t",
	tool_acceleration_v0_label: "初速度 v0",
	tool_acceleration_v0_ph: "例如 0",
	tool_acceleration_v_label: "末速度 v",
	tool_acceleration_v_ph: "例如 10",
	tool_acceleration_t_label: "时间 t",
	tool_acceleration_t_ph: "例如 2",
	tool_acceleration_a_label: "加速度 a",
	tool_acceleration_a_ph: "例如 5",
	tool_acceleration_accOut_label: "加速度",
	tool_acceleration_vOut_label: "末速度",
	tool_acceleration_v0Out_label: "初速度",
	tool_acceleration_tOut_label: "时间",
	tool_acceleration_work_label: "计算过程",
	tool_acceleration_result_note:
		"假定沿直线的匀加速（加速度恒定）。速度与时间用同一套单位；负的 a 表示在所选正方向上减速。",
	tool_acceleration_err_finite: "请在每个可见框中填入有限数字。",
	tool_acceleration_err_time: "时间必须大于 0。",
	tool_acceleration_err_zero_a: "求时间时加速度不能为 0（除以零无意义）。",
	tool_acceleration_how_title: "怎么用",
	tool_acceleration_how_body:
		"匀加速时 a = (v − v0) ÷ t。先选要求的量，再填其余已知量，计算器会按同一公式变形求解。",
	tool_acceleration_how_item_1: "在「要求解的量」中选择加速度、末速度、初速度或时间。",
	tool_acceleration_how_item_2: "填满当前显示的输入框，全程使用同一单位制（国际单位最省事）。",
	tool_acceleration_how_item_3: "点击「计算」。",
	tool_acceleration_how_item_4: "查看结果与计算过程，例如 a = (10 − 0) ÷ 2 = 5。",
	tool_acceleration_why_choose_title: "为什么用本站的加速度计算器",
	tool_acceleration_why_choose_item_1:
		"过程写出来：可直接把 (v − v0) ÷ t 或 v = v0 + a t 抄进作业本。",
	tool_acceleration_why_choose_item_2:
		"作业给哪几个数就求哪一个：不只求 a，也能求末速度、初速度或时间。",
	tool_acceleration_why_choose_item_3:
		"模型边界说清楚：直线匀加速，不是变加速，也不是圆周运动。",
	tool_acceleration_why_choose_item_4:
		"非法情况会点名：时间 ≤ 0，或求时间时 a = 0。",
	tool_acceleration_why_choose_item_5: "在浏览器内计算，数据不上传服务器。",
	tool_acceleration_formula_title: "公式与变形",
	tool_acceleration_formula_body:
		"匀加速定义：a = (v − v0) ÷ t。下面四种写法描述同一物理关系，只是未知数不同。",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t。样例：(10 − 0) ÷ 2 = 5。",
	tool_acceleration_formula_item_2: "v = v0 + a t。样例：0 + 5 × 2 = 10。",
	tool_acceleration_formula_item_3: "v0 = v − a t。样例：10 − 5 × 2 = 0。",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a（a ≠ 0）。样例：(10 − 0) ÷ 5 = 2。",
	tool_acceleration_example_title: "示例",
	tool_acceleration_example:
		"样例：从静止加速到 10，用时 2。求加速度：a = (10 − 0) ÷ 2 = 5。改求末速度，令 v0 = 0、a = 5、t = 2，得到 v = 10——同一运动换个未知数。",
	tool_acceleration_usecases_title: "适合什么场景",
	tool_acceleration_usecase_1: "高中物理匀变速直线运动作业，要算加速度或末速度。",
	tool_acceleration_usecase_2: "核对汽车 0 → 20 m/s、用时 4 s 时平均加速度是否约为 5 m/s²。",
	tool_acceleration_usecase_3: "已知匀减速到停下，反求需要多长时间。",
	tool_acceleration_usecase_4: "对照课本答案，逐步核对计算过程是否一致。",
	tool_acceleration_faq_q1: "加速度怎么算？",
	tool_acceleration_faq_a1:
		"用末速度减去初速度，再除以时间：a = (v − v0) ÷ t。从 0 到 10、用时 2，加速度就是 5。",
	tool_acceleration_faq_q2: "速度和时间用什么单位？",
	tool_acceleration_faq_a2:
		"只要一整套一致即可。米和秒得到 m/s²。若把 km/h 和时间秒混用却不换算，结果会错。",
	tool_acceleration_faq_q3: "加速度为负代表什么？",
	tool_acceleration_faq_a3:
		"表示减速，或加速度方向与你规定的正方向相反。例如 v0 = 20、v = 10、t = 2，则 a = (10 − 20) ÷ 2 = −5。",
	tool_acceleration_faq_q4: "自由落体加速度是不是 9.8 m/s²？",
	tool_acceleration_faq_a4:
		"地表附近常取 g ≈ 9.8 m/s² 作为忽略空气阻力时的匀加速模型。若向上为正，求速度或时间时可填 a = −9.8。",
	tool_acceleration_faq_q5: "为什么 a 为 0 时不能求时间？",
	tool_acceleration_faq_a5:
		"a = 0 时速度不变，t = (v − v0) ÷ a 无定义。要么初末速度本就相等，要么加速度不是 0。",
	tool_acceleration_faq_q6: "和平均速率有什么区别？",
	tool_acceleration_faq_a6:
		"平均速率是路程 ÷ 时间；加速度描述的是速度本身变化有多快。只有路程和时间、要求速率时，请用速度相关工具。",
	tool_acceleration_faq_q7: "能用来算圆周运动吗？",
	tool_acceleration_faq_a7:
		"不能。本页只适用于直线上的匀加速。向心加速度需要速率与半径，公式不同。",
	tool_acceleration_article: "加速度",
	tool_acceleration_disclaimer:
		"仅供学习与作业核对。假定直线匀加速；真实运动中加速度可能变化。",
	tool_acceleration_references: "Wikipedia — Acceleration；The Physics Hypertextbook — Equations of Motion。",
	tool_acceleration_ref_a_label: "Wikipedia — Acceleration（英文）",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion（英文）",
};

export default zh;
