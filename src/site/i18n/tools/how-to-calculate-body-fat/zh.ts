/**
 * i18n tool shard (how-to-calculate-body-fat / zh)。
 * 中文独立重写，非英模同构；Navy/Army 围度公式、FAQ 与 YMYL 免责。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_body_fat_title: '体脂率计算器 — 如何用围度估算体脂率',
	tool_body_fat_description:
		'用美国海军围度公式估算体脂率（同页可选陆军/DoD 风格围度法）。示例：男性身高 178 cm、颈围 40 cm、腰围 86 cm → 约 15.3%。数据在浏览器内计算、不上传服务器；仅供学习参考之用，不构成医疗建议、诊断或临床体成分检测。',
	tool_body_fat_article:
		'围度法根据身高与软尺读数估算体脂率。本页在同一地址提供 Navy 与 Army（DoD 系列）选项；皮褶卡尺作为不同方法在 FAQ 中说明，不另开薄页。',
	tool_body_fat_calculate: '开始计算',
	tool_body_fat_sample: '加载示例',
	tool_body_fat_clear: '清空',
	tool_body_fat_method_label: '方法',
	tool_body_fat_method_navy: '美国海军围度法',
	tool_body_fat_method_army: '美国陆军 / DoD 风格围度法',
	tool_body_fat_sex_label: '性别（公式表）',
	tool_body_fat_sex_male: '男',
	tool_body_fat_sex_female: '女',
	tool_body_fat_height_label: '身高（厘米）',
	tool_body_fat_height_ph: '例如 178',
	tool_body_fat_neck_label: '颈围（厘米）',
	tool_body_fat_neck_ph: '例如 40',
	tool_body_fat_waist_label: '腰围（厘米）',
	tool_body_fat_waist_ph: '例如 86',
	tool_body_fat_hip_label: '臀围（厘米，女性）',
	tool_body_fat_hip_ph: '例如 96',
	tool_body_fat_result_label: '估算体脂率',
	tool_body_fat_result_note: '仅供学习估算，不构成医疗建议或诊断。',
	tool_body_fat_err_input: '身高、颈围与腰围须为正数。',
	tool_body_fat_err_hip: '女性公式需要填写正数臀围。',
	tool_body_fat_err_geom: '腰围须大于颈围（女性还需腰围加臀围大于颈围）。',
	tool_body_fat_how_title: '怎么用',
	tool_body_fat_how_body:
		'输入性别、身高及软尺读数（厘米）。工具会换算为英寸后套用已公布的 log10 围度公式，并显示估算体脂率。皮褶法见 FAQ，仍在本页说明。',
	tool_body_fat_formula_title: '公式与测量假设',
	tool_body_fat_formula_body:
		'男性：%BF ≈ 86.010×log10(腰围−颈围) − 70.041×log10(身高) + 36.387（英寸）。女性：%BF ≈ 163.205×log10(腰围+臀围−颈围) − 97.684×log10(身高) + 78.387。请注意：',
	tool_body_fat_formula_item_1: '软尺须按 Navy/DoD 标准点位测量；姿势与衣着会影响结果。',
	tool_body_fat_formula_item_2: '输入为厘米，公式前按 1 英寸 = 2.54 厘米换算。',
	tool_body_fat_formula_item_3: '结果为教学示意，不是 DXA/Bod Pod 等临床体成分检测或医疗建议。',
	tool_body_fat_example_title: '示例',
	tool_body_fat_example:
		'示例：男性、Navy 法、身高 178 cm、颈围 40 cm、腰围 86 cm → 约 15.3% 体脂率。',
	tool_body_fat_usecases_title: '适合什么场景',
	tool_body_fat_usecase_1: '课堂练习：用固定数值演练 Navy 围度体脂公式。',
	tool_body_fat_usecase_2: '咨询专业人士前，粗看健身追踪量级（仅示意，非诊断）。',
	tool_body_fat_usecase_3: '在同一页对比 Navy 与 Army 标签，无需第二个网址。',
	tool_body_fat_faq_q1: '用的是什么公式？',
	tool_body_fat_faq_a1:
		'美国 Navy / DoD 风格的 log10 围度公式；厘米输入会先换算为英寸再计算。',
	tool_body_fat_faq_q2: '本页的 Navy 与 Army 有何不同？',
	tool_body_fat_faq_a2:
		'二者同属围度估算法。标签差异便于检索理解；测量规范往往比标签名称更重要。',
	tool_body_fat_faq_q3: '这是医疗建议吗？',
	tool_body_fat_faq_a3:
		'不是。结果仅供学习估算，不构成诊断、治疗方案或临床体成分检测。',
	tool_body_fat_faq_q4: '皮褶卡尺呢？',
	tool_body_fat_faq_a4:
		'皮褶公式需多处读数与熟练手法。本页在 FAQ 中说明，不另开独立薄工具页。',
	tool_body_fat_disclaimer:
		'体脂估算仅供学习示意，不构成医疗建议、诊断，也不能替代临床体成分检测。健康相关决定请咨询具备资质的专业人士。',
	tool_body_fat_references:
		'美国海军 / DoD 围度法公式；ACE 教育向体脂计算器说明；经同行评审的围度法文献。',
	tool_body_fat_ref_ace_label: 'ACE — 体脂计算器（教育向）',
	tool_body_fat_ref_pmc_label: 'PMC — 基于围度的体脂估算方法',
};

export default zh;
