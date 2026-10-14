/**
 * i18n tool shard (square-feet / zh).
 * 中文重写：平方英尺↔平方米、房间长×宽求面积；过程与 NIST 因子；FAQ 划清套内/建筑。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_squarefeet_title: "平方英尺转平方米 — 房源面积换算与房间长宽求面积",
	tool_squarefeet_description:
		"把平方英尺换成平方米，或用房间长×宽直接计算面积。换算因子：1 ft² = 0.09290304 m²（NIST）。示例：850 平方英尺 ≈ 78.97 m²；10×12 英尺房间 = 120 平方英尺 ≈ 11.15 m²。过程在浏览器内完成，不上传。",
	tool_squarefeet_calculate: "计算",
	tool_squarefeet_sample: "加载样例",
	tool_squarefeet_clear: "清空",
	tool_squarefeet_mode_label: "你手上有什么？",
	tool_squarefeet_mode_dims: "房间长和宽",
	tool_squarefeet_mode_area: "已知面积数值",
	tool_squarefeet_dim_unit_label: "长度单位",
	tool_squarefeet_unit_ft: "英尺 (ft)",
	tool_squarefeet_unit_m: "米 (m)",
	tool_squarefeet_unit_in: "英寸 (in)",
	tool_squarefeet_length_label: "长度",
	tool_squarefeet_length_placeholder: "例如 10",
	tool_squarefeet_width_label: "宽度",
	tool_squarefeet_width_placeholder: "例如 12",
	tool_squarefeet_area_label: "面积",
	tool_squarefeet_area_placeholder: "例如 850",
	tool_squarefeet_area_unit_label: "面积单位",
	tool_squarefeet_unit_sqft: "平方英尺 (ft²)",
	tool_squarefeet_unit_sqm: "平方米 (m²)",
	tool_squarefeet_sqft_label: "平方英尺",
	tool_squarefeet_sqm_label: "平方米",
	tool_squarefeet_work_label: "计算过程",
	tool_squarefeet_result_note:
		"页面显示四舍五入到小数点后两位。精确因子：1 ft² = 0.09290304 m²（NIST / SI）。这里只算平面矩形面积，不区分套内与建筑口径，也不做房价估算。",
	tool_squarefeet_invalid_input: "请只输入正数。",
	tool_squarefeet_how_title: "怎么用",
	tool_squarefeet_how_body:
		"量房间就用长×宽（先统一单位再相乘）；房源已写面积就直接换算。结果同时给出平方英尺和平方米，并附上计算过程。",
	tool_squarefeet_how_item_1:
		"量空间选「房间长和宽」；广告里已有平方英尺或平方米，选「已知面积数值」。",
	tool_squarefeet_how_item_2:
		"尺寸模式：选英尺、米或英寸，两边用同一单位填写。面积模式：填数字并标明是 ft² 还是 m²。",
	tool_squarefeet_how_item_3: "点击「计算」。",
	tool_squarefeet_how_item_4:
		"查看双单位结果与过程，例如 10 × 12 = 120 ft²，或 850 ft² × 0.09290304 = 78.97 m²。",
	tool_squarefeet_why_choose_title: "为什么用本站的平方英尺转平方米",
	tool_squarefeet_why_choose_item_1:
		"采用精确 SI 因子 1 ft² = 0.09290304 m²（对齐 NIST SP 811），不是随手写的 0.09 或 0.093。",
	tool_squarefeet_why_choose_item_2:
		"两种模式覆盖常见搜法：量房间尺寸，以及把 850、1000 这类挂牌面积直接换算。",
	tool_squarefeet_why_choose_item_3:
		"会展开计算过程，英寸是否先 ÷12、米制是否按 NIST 因子换算，一眼能核对。",
	tool_squarefeet_why_choose_item_4:
		"边界说清楚：不做套内/建筑定义，也不当房价或单价模型。",
	tool_squarefeet_why_choose_item_5: "全部在浏览器本地完成，文件与数字不上服务器。",
	tool_squarefeet_formula_title: "公式与换算因子",
	tool_squarefeet_formula_body:
		"两边都换成英尺后，面积（平方英尺）= 长 × 宽；平方米用下面精确因子得出。",
	tool_squarefeet_formula_item_1: "英尺：A_ft² = L × W。例：10 ft × 12 ft = 120 ft²。",
	tool_squarefeet_formula_item_2: "米：A_ft² = (L × W) ÷ 0.09290304。例：3 m × 4 m = 12 m² ≈ 129.17 ft²。",
	tool_squarefeet_formula_item_3: "英寸：每边先 ÷12。例：120 in × 144 in → 10 ft × 12 ft = 120 ft²。",
	tool_squarefeet_formula_item_4: "精确：1 ft² = 0.09290304 m²，故 m² = ft² × 0.09290304，ft² = m² ÷ 0.09290304。",
	tool_squarefeet_example_title: "示例",
	tool_squarefeet_example:
		"样例房间：10 ft × 12 ft。过程：10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11.15 m²。已知面积例子：850 平方英尺 × 0.09290304 ≈ 78.97 m²，方便对照国内按平方米挂牌的房源。",
	tool_squarefeet_usecases_title: "适合什么时候用",
	tool_squarefeet_usecase_1: "看美式房源写的平方英尺，要和本地平方米广告对照。",
	tool_squarefeet_usecase_2: "矩形房间先估地板或地毯用量（损耗另加）。",
	tool_squarefeet_usecase_3: "海外看图或购物时，把 1000 平方英尺这类数字换成平方米。",
	tool_squarefeet_usecase_4: "图纸混用英尺与米时，做油漆或改造前的粗算。",
	tool_squarefeet_faq_q1: "怎么算房间的平方英尺？",
	tool_squarefeet_faq_a1:
		"长宽用同一单位测量后相乘。按英尺：10 × 12 = 120 平方英尺。若是英寸，每边先除以 12。",
	tool_squarefeet_faq_q2: "1 平方英尺等于多少平方米？",
	tool_squarefeet_faq_a2:
		"精确为 0.09290304 m²（NIST / SI）。因此 100 平方英尺 ≈ 9.29 m²，850 ≈ 78.97 m²，1000 ≈ 92.90 m²。",
	tool_squarefeet_faq_q3: "平方英尺怎么转成平方米？",
	tool_squarefeet_faq_a3:
		"乘以 0.09290304。选「已知面积数值」，填入平方英尺，过程行会显示乘法。",
	tool_squarefeet_faq_q4: "能用来估房价吗？",
	tool_squarefeet_faq_a4: "不能。本工具只做面积单位换算，不是估值、评估或每平方英尺单价模型。",
	tool_squarefeet_faq_q5: "会区分套内面积和建筑面积吗？",
	tool_squarefeet_faq_a5:
		"不会。它只在单位之间换算平面矩形面积。房源口径（净/毛、套内/建筑）不在本工具范围内。",
	tool_squarefeet_faq_q6: "地板要加多少损耗？",
	tool_squarefeet_faq_a6:
		"计算器只给出地面面积。很多施工会另加约 5%–10% 用于裁切和损耗，请以材料说明为准。",
	tool_squarefeet_faq_q7: "L 形房间怎么办？",
	tool_squarefeet_faq_a7: "拆成几个矩形分别换算再相加。不规则多边形这里不建模。",
	tool_squarefeet_article: "平方英尺",
	tool_squarefeet_disclaimer:
		"用于看房与装修粗算。不是房产估值工具，也不定义套内与建筑面积口径。",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI)；Wikipedia — Square foot。",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guide for the Use of the International System of Units (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default zh;
