/**
 * i18n 工具分片（how-to-calculate-body-fat / zh）。
 * 用美国海军围度公式估算体脂率；陆军标签与海军共用同一套 log10 方程。
 * 输入为厘米，代入前按 2.54 换成英寸。
 * 男性：86.010×log10(腰围−颈围) − 70.041×log10(身高) + 36.387。
 * 女性：163.205×log10(腰围+臀围−颈围) − 97.684×log10(身高) − 78.387（是减 78.387，不是加）。
 * 样例：男 178/40/86 cm 约 15.3%；女 165/34/74/96 cm 约 26.7%。仅供学习，不是诊断。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂率计算器的中文文案；键与英文母版一一对应。 */
const zh: SiteLangDict = {
	tool_body_fat_title: "体脂率计算器 — 用海军围度算出体脂百分比",
	tool_body_fat_description: "用美国海军围度公式计算体脂率。步骤是把厘米换成英寸，再代入 log10 公式。示例：男性身高 178 cm、颈围 40 cm、腰围 86 cm，约 15.3%；女性身高 165 cm、颈围 34 cm、腰围 74 cm、臀围 96 cm，约 26.7%。陆军选项用同一套方程。仅供学习，不是医疗建议或诊断。",
	tool_body_fat_article: "想知道体脂率怎么算，只要填性别和厘米围度。女性会用到臀围。结果旁边有换算步骤，方便核对皮尺读数有没有代错。",
	tool_body_fat_desc: "海军围度估算体脂百分比；陆军选项同方程；厘米换英寸；仅供学习。",

	tool_body_fat_safety_banner: "仅供学习估算。围度公式不是 DXA、Bod Pod，也不能代替医生诊断。不是医疗建议。",
	tool_body_fat_hint: "请用厘米。女性需要臀围。腰围必须大于颈围；女性还要求腰围加臀围大于颈围。这里的陆军选项和海军用的是同一套教学围度方程。",
	tool_body_fat_method_label: "方法标签",
	tool_body_fat_method_navy: "美国海军围度",
	tool_body_fat_method_army: "美国陆军 / DoD 风格围度",
	tool_body_fat_sex_label: "性别（决定公式）",
	tool_body_fat_sex_male: "男",
	tool_body_fat_sex_female: "女",
	tool_body_fat_height_label: "身高（厘米）",
	tool_body_fat_height_ph: "例如 178",
	tool_body_fat_neck_label: "颈围（厘米）",
	tool_body_fat_neck_ph: "例如 40",
	tool_body_fat_waist_label: "腰围（厘米）",
	tool_body_fat_waist_ph: "例如 86",
	tool_body_fat_hip_label: "臀围（厘米，女性）",
	tool_body_fat_hip_ph: "例如 96",
	tool_body_fat_calculate: "计算",
	tool_body_fat_sample: "加载样例",
	tool_body_fat_clear: "清空",
	tool_body_fat_result_label: "估算体脂率",
	tool_body_fat_steps_title: "计算步骤",
	tool_body_fat_step_convert_tpl: "把厘米换成英寸（÷ 2.54）：身高 {hIn} in，颈围 {nIn} in，腰围 {wIn} in{hipPart}。",
	tool_body_fat_step_hip_part_tpl: "，臀围 {hipIn} in",
	tool_body_fat_step_male_tpl: "男性体脂率 ≈ 86.010×log10(腰围−颈围) − 70.041×log10(身高) + 36.387 = {pct}%。",
	tool_body_fat_step_female_tpl: "女性体脂率 ≈ 163.205×log10(腰围+臀围−颈围) − 97.684×log10(身高) − 78.387 = {pct}%。",
	tool_body_fat_result_note: "仅供学习估算，不是医疗建议或诊断。皮尺位置和站姿都会改变结果。",
	tool_body_fat_err_input: "身高、颈围和腰围必须是大于 0 的数字。",
	tool_body_fat_err_hip: "女性公式需要大于 0 的臀围。",
	tool_body_fat_err_geom: "腰围必须大于颈围；女性还要求腰围加臀围大于颈围。",

	tool_body_fat_how_title: "体脂率怎么算",
	tool_body_fat_how_body: "先选海军或陆军标签，再填性别和厘米围度，点「计算」。两个标签的方程相同。「加载样例」会在男性海军约 15.3% 和女性陆军标签约 26.7% 之间轮换。",
	tool_body_fat_how_item_1: "选择方法标签和性别。陆军与海军在这里用同一套围度方程。",
	tool_body_fat_how_item_2: "用厘米填写身高、颈围和腰围；选女性后再填臀围。",
	tool_body_fat_how_item_3: "点击「计算」，看估算体脂率和步骤里的代入。",
	tool_body_fat_how_item_4: "点击「加载样例」，轮换男性 178/40/86 cm 约 15.3% 与女性 165/34/74/96 cm 约 26.7%。",

	tool_body_fat_why_choose_title: "为什么用这个体脂率计算器",
	tool_body_fat_why_choose_item_1: "厘米可以直接填，代入 log10 之前会先换成英寸。",
	tool_body_fat_why_choose_item_2: "步骤把换算和代入后的式子写在百分比旁边。",
	tool_body_fat_why_choose_item_3: "样例在男性和女性两组固定数字之间轮换，方便对照。",
	tool_body_fat_why_choose_item_4: "陆军标签不是另一套算法，和海军围度方程相同。",
	tool_body_fat_why_choose_item_5: "边界写在结果旁边：只供学习，不能当作诊断。",

	tool_body_fat_formula_title: "围度公式和测量假设",
	tool_body_fat_formula_body: "男性：体脂率 ≈ 86.010×log10(腰围−颈围) − 70.041×log10(身高) + 36.387（英寸）。女性：体脂率 ≈ 163.205×log10(腰围+臀围−颈围) − 97.684×log10(身高) − 78.387。",
	tool_body_fat_formula_item_1: "皮尺按海军/DoD 常用部位来量；站姿和衣服会改变读数。",
	tool_body_fat_formula_item_2: "你填的是厘米，按 1 英寸 = 2.54 厘米换算后再进入 log10。",
	tool_body_fat_formula_item_3: "陆军标签与海军使用同一套教学用围度方程。",
	tool_body_fat_formula_item_4: "这不是 DXA 或 Bod Pod 的临床结果，也不是医疗建议。",
	tool_body_fat_formula_item_5: "皮褶卡尺要测多个部位，还依赖手法；这里只说明它和围度法不是同一种读数。",

	tool_body_fat_example_title: "演算示例",
	tool_body_fat_example: "第一次「加载样例」是男性海军：身高 178 cm、颈围 40 cm、腰围 86 cm，约 15.3%。下一次是女性，标签为陆军，但方程不变：身高 165 cm、颈围 34 cm、腰围 74 cm、臀围 96 cm，约 26.7%。",

	tool_body_fat_usecases_title: "什么时候用体脂率计算器",
	tool_body_fat_usecase_1: "上课时用固定数字把海军围度公式走一遍，看 log10 怎么代入。",
	tool_body_fat_usecase_2: "健身记录里先看一个粗略百分比，再决定要不要问临床医生；这不是诊断。",
	tool_body_fat_usecase_3: "对照海军和陆军两个名称时，确认百分比来自同一套方程。",
	tool_body_fat_usecase_4: "想同时看到厘米换成英寸的过程，而不只看到一个百分数。",

	tool_body_fat_faq_q1: "体脂率怎么算？",
	tool_body_fat_faq_a1: "用美国海军/DoD 风格的 log10 围度公式。厘米会先按 2.54 换成英寸。男性是 86.010×log10(腰围−颈围) − 70.041×log10(身高) + 36.387。女性是 163.205×log10(腰围+臀围−颈围) − 97.684×log10(身高) − 78.387。",
	tool_body_fat_faq_q2: "海军体脂和陆军体脂差在哪？",
	tool_body_fat_faq_a2: "在这个计算器里，两个标签用同一套围度方程。名称方便按你熟悉的叫法查找；皮尺量在哪，比标签更影响结果。",
	tool_body_fat_faq_q3: "这个百分比是医疗建议吗？",
	tool_body_fat_faq_a3: "不是。它只是学习用的估算，不是诊断、治疗方案，也不是临床体成分检测。",
	tool_body_fat_faq_q4: "为什么要换成英寸？",
	tool_body_fat_faq_a4: "公开的 log10 方程以英寸为单位。这里接受厘米，并用 2.54 换算，步骤里能看到英寸数。",
	tool_body_fat_faq_q5: "腰围可以等于颈围吗？",
	tool_body_fat_faq_a5: "不可以。腰围必须大于颈围，否则对数里的差不是正数。女性还要求腰围加臀围大于颈围。",
	tool_body_fat_faq_q6: "皮褶卡尺算的是同一种体脂吗？",
	tool_body_fat_faq_a6: "不是同一种读数。皮褶要量多个部位，而且手法影响很大。这个计算器只接受围度，不把皮褶厚度当输入。",

	tool_body_fat_disclaimer: "体脂估算只供学习演示，不是医疗建议、诊断，也不能代替临床体成分检测。和健康有关的决定请咨询有资质的临床医生。",
	tool_body_fat_references: "美国海军 / DoD 围度法方程；ACE 教学用体脂计算器说明；经同行评审的围度法文献。",
	tool_body_fat_ref_ace_label: "ACE — 体脂计算器（教学）",
	tool_body_fat_ref_pmc_label: "PMC — 基于围度的体脂方法",
};

export default zh;
