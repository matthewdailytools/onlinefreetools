/**
 * i18n tool shard (how-to-calculate-bmr-tdee / zh)。
 * 按 03 brief 用中文独立重写，非英模同构。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_bmr_tdee_title: 'BMR / TDEE 计算器 — 如何估算基础代谢与每日消耗',
	tool_bmr_tdee_description:
		'用 Mifflin-St Jeor、Harris-Benedict 或 Katch-McArdle 估算基础代谢率（BMR），再乘活动系数得到每日总消耗（TDEE）。示例：男性 70 kg、175 cm、30 岁、Mifflin、活动系数 1.55 → BMR 约 1648.75、TDEE 约 2555.56 kcal/日。浏览器内计算，数据不上传；仅供学习参考，不构成医疗或减肥建议。',
	tool_bmr_tdee_article:
		'BMR 估算安静状态下的能量消耗，TDEE 再按活动量放大。本页把 Mifflin、Harris-Benedict、Katch-McArdle 放在同一地址，并写清非医疗免责，避免拆成多个卡路里薄页。',
	tool_bmr_tdee_calculate: '开始计算',
	tool_bmr_tdee_sample: '加载示例',
	tool_bmr_tdee_clear: '清空',
	tool_bmr_tdee_sex_label: '性别',
	tool_bmr_tdee_sex_male: '男',
	tool_bmr_tdee_sex_female: '女',
	tool_bmr_tdee_weight_label: '体重（公斤）',
	tool_bmr_tdee_weight_ph: '例如 70',
	tool_bmr_tdee_height_label: '身高（厘米）',
	tool_bmr_tdee_height_ph: '例如 175',
	tool_bmr_tdee_age_label: '年龄（岁）',
	tool_bmr_tdee_age_ph: '例如 30',
	tool_bmr_tdee_formula_label: 'BMR 公式',
	tool_bmr_tdee_formula_mifflin: 'Mifflin-St Jeor（常用默认）',
	tool_bmr_tdee_formula_harris: 'Harris-Benedict（修订版）',
	tool_bmr_tdee_formula_katch: 'Katch-McArdle（需体脂%）',
	tool_bmr_tdee_activity_label: '活动系数',
	tool_bmr_tdee_act_12: '久坐少动（1.2）',
	tool_bmr_tdee_act_1375: '轻度活动（1.375）',
	tool_bmr_tdee_act_155: '中等活动（1.55）',
	tool_bmr_tdee_act_1725: '较大量活动（1.725）',
	tool_bmr_tdee_act_19: '高强度活动（1.9）',
	tool_bmr_tdee_bodyfat_label: '体脂率 %（仅 Katch）',
	tool_bmr_tdee_bodyfat_ph: '例如 20',
	tool_bmr_tdee_bmrOut_label: 'BMR（千卡/日）',
	tool_bmr_tdee_tdeeOut_label: 'TDEE（千卡/日）',
	tool_bmr_tdee_result_note: '仅供学习估算，不构成医疗或饮食建议。',
	tool_bmr_tdee_err_generic: '请检查体重、身高、年龄；若选 Katch，还需填写 0–100 的体脂率。',
	tool_bmr_tdee_how_title: '怎么用',
	tool_bmr_tdee_how_body:
		'填写性别、体重、身高与年龄，选择 BMR 公式（默认 Mifflin）。选 Katch-McArdle 时需填体脂率。再选活动系数，得到 TDEE ≈ BMR × 系数。热量赤字/盈余只在问答里说明，不另开独立「卡路里工具」页。',
	tool_bmr_tdee_formula_title: '公式与假设',
	tool_bmr_tdee_formula_body:
		'Mifflin（男）：10×体重(kg) + 6.25×身高(cm) − 5×年龄 + 5；女性常数为 −161。也可选 Harris-Benedict 修订版，或 Katch-McArdle（370 + 21.6×瘦体重）。请注意：',
	tool_bmr_tdee_formula_item_1: '结果是成人教学估算，不同公式会有差异，不是诊断。',
	tool_bmr_tdee_formula_item_2: '活动系数是粗略倍率，不是手环或实验室测得值。',
	tool_bmr_tdee_formula_item_3: 'Harris 与 Katch 与本页共用同一网址，不拆独立计算器。',
	tool_bmr_tdee_formula_item_4: '不构成医疗、营养或减肥方案。',
	tool_bmr_tdee_example_title: '示例',
	tool_bmr_tdee_example:
		'示例：男性、70 kg、175 cm、30 岁、Mifflin-St Jeor、活动系数 1.55 → BMR 约 1648.75 千卡/日，TDEE 约 2555.56 千卡/日。',
	tool_bmr_tdee_usecases_title: '适合什么场景',
	tool_bmr_tdee_usecase_1: '课堂练习：同一组身体数据对比 Mifflin 与 Harris。',
	tool_bmr_tdee_usecase_2: '在咨询专业人士前，粗看维持热量量级（仅示意）。',
	tool_bmr_tdee_usecase_3: '观察活动系数如何改变 TDEE，无需另开卡路里专用页。',
	tool_bmr_tdee_faq_q1: 'BMR 和 TDEE 有什么区别？',
	tool_bmr_tdee_faq_a1: 'BMR 是估算的安静消耗；TDEE 用活动系数把 BMR 放大，得到大致全日总消耗。',
	tool_bmr_tdee_faq_q2: '该选哪套公式？',
	tool_bmr_tdee_faq_a2: '常用默认是 Mifflin-St Jeor。Harris 是修订经典式；Katch 需要体脂率，按瘦体重估算。',
	tool_bmr_tdee_faq_q3: '能在这里做减脂热量赤字计划吗？',
	tool_bmr_tdee_faq_a3: '本页只在问答里解释概念，不提供饮食处方或医疗方案。',
	tool_bmr_tdee_faq_q4: '这是医疗建议吗？',
	tool_bmr_tdee_faq_a4: '不是。数字仅供学习示意，不构成医疗或营养建议。',
	tool_bmr_tdee_faq_q5: '没有体脂率能用 Katch 吗？',
	tool_bmr_tdee_faq_a5: 'Katch-McArdle 需要 0–100 的体脂率。若没有，请改用 Mifflin。',
	tool_bmr_tdee_disclaimer:
		'BMR 与 TDEE 结果仅为教育向估算，不构成医疗、诊断或营养建议。个体差异大，健康相关决定请咨询具备资质的专业人士。',
	tool_bmr_tdee_references:
		'NCBI Bookshelf 代谢相关教育材料；NHLBI 体重教育资料；常用 Mifflin-St Jeor / Harris-Benedict / Katch-McArdle 公式。',
	tool_bmr_tdee_ref_ncbi_label: 'NCBI Bookshelf — 代谢教育材料',
	tool_bmr_tdee_ref_nhlbi_label: 'NHLBI — 体重相关教育资料',
};

export default zh;
