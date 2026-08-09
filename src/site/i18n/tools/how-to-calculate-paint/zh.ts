/**
 * i18n tool shard (how-to-calculate-paint / zh).
 * 中文独立重写：检索向「油漆计算器 / 用漆量」，非英模直译。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_paint_title: '油漆计算器 — 如何估算用漆量',
	tool_paint_description:
		'按墙面面积（平方米，或长×高×面数）、涂刷遍数和覆盖率（平方米/升，默认 10）估算需要多少升油漆。示例：40 m²、刷 2 遍、覆盖率 10 m²/L → 8 L。可选按每罐 3.78 L（约 1 美制加仑）换算罐数。计算在浏览器内完成，数据留在本机、不上传服务器，适合刷墙前粗算采购量。',
	tool_paint_article:
		'把墙面面积和产品覆盖率换成升数：可直接填面积，也可填长、高和面数，再设遍数与覆盖率。可选罐数按 3.78 L 假设向上取整。',
	tool_paint_calculate: '计算',
	tool_paint_sample: '加载样例',
	tool_paint_clear: '清空',
	tool_paint_mode_label: '墙面怎么填',
	tool_paint_mode_area: '面积（m²）',
	tool_paint_mode_lhw: '长 × 高 × 面数',
	tool_paint_area_label: '墙面面积（m²）',
	tool_paint_area_ph: '例如 40',
	tool_paint_len_label: '墙长（m）',
	tool_paint_height_label: '墙高（m）',
	tool_paint_walls_label: '面数',
	tool_paint_len_ph: '例如 5',
	tool_paint_height_ph: '例如 2.5',
	tool_paint_walls_ph: '例如 4',
	tool_paint_coats_label: '涂刷遍数',
	tool_paint_coats_ph: '例如 2',
	tool_paint_coverage_label: '覆盖率（m²/L）',
	tool_paint_coverage_ph: '例如 10',
	tool_paint_coverage_hint: '默认 10 m²/L 只是规划起点，请以桶上标注为准。',
	tool_paint_cans_label: '同时显示罐数（每罐 3.78 L）',
	tool_paint_result_liters: '所需油漆',
	tool_paint_result_area: '使用的墙面面积',
	tool_paint_result_cans: '所需罐数（3.78 L）',
	tool_paint_err_input: '请填写大于 0 的墙面面积（或长、高、面数）、遍数和覆盖率。',
	tool_paint_how_title: '怎么用',
	tool_paint_how_body:
		'选择直接填面积，或填长×高×面数，再输入遍数与每升覆盖平方米。升数 = 面积 × 遍数 ÷ 覆盖率。勾选罐数时按 3.78 L 向上取整。全程在浏览器标签页内计算，数字不上传服务器。',
	tool_paint_formula_title: '公式与假设',
	tool_paint_formula_body: '用漆量由面积、遍数和标注覆盖率决定：',
	tool_paint_formula_item_1: '面积 A = 直接 m²，或 长 × 高 × 面数（米）。',
	tool_paint_formula_item_2: '升数 = A × 遍数 ÷ 覆盖率（m²/L）。默认覆盖率 10。',
	tool_paint_formula_item_3: '可选罐数 = ceil(升数 ÷ 3.78)。3.78 L 约等于 1 美制加仑，仅作假设，不代表各品牌实际包装。',
	tool_paint_example_title: '示例',
	tool_paint_example:
		'示例：墙面 40 m²，刷 2 遍，覆盖率 10 m²/L。升数 = 40 × 2 ÷ 10 = 8 L。按 3.78 L/罐，罐数 = ceil(8 ÷ 3.78) = 3。',
	tool_paint_usecases_title: '适合什么场景',
	tool_paint_usecase_1: '室内刷墙前粗算要买多少升油漆。',
	tool_paint_usecase_2: '改遍数，对比一遍与两遍的用量差异。',
	tool_paint_usecase_3: '用简单面积与覆盖率核对施工报价是否离谱。',
	tool_paint_faq_q1: '覆盖率（m²/L）是什么意思？',
	tool_paint_faq_a1: '表示每升油漆在一遍涂刷下大约能盖多少平方米。默认 10 只是起点，请以产品桶标为准。',
	tool_paint_faq_q2: '为什么要提供 3.78 L 罐数？',
	tool_paint_faq_a2: '不少店铺按约 1 美制加仑（≈3.78 L）售卖。可选罐数向上取整便于整罐采购，并不保证每品牌都刚好 3.78 L。',
	tool_paint_faq_q3: '该填面积还是长×高×面数？',
	tool_paint_faq_a3: '都可以。已知平方米用面积；只有尺寸和面数时用长×高×面数。',
	tool_paint_faq_q4: '数字会上传吗？',
	tool_paint_faq_a4: '不会。尺寸在你的浏览器本机计算，不上传到服务器。',
	tool_paint_references: 'NIST SP 811 长度与面积换算说明，便于理解墙面尺寸单位。',
	tool_paint_ref_nist_label: 'NIST — 特别出版物 811（单位换算）',
};

export default zh;
