/**
 * i18n tool shard (how-to-calculate-irr / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_irr_title: "IRR 计算器 — 内部收益率",
	tool_irr_description: "用牛顿法估算简单现金流序列的 IRR（内部收益率）。示例：−1000、300、420、680 → 近似 IRR%。浏览器本地计算；项目测算学习用，非投资建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。",
	tool_irr_calculate: "计算",
	tool_irr_sample: "加载样例",
	tool_irr_clear: "清空",
	tool_irr_cf_label: "现金流（逗号/换行；先写 CF0）",
	tool_irr_cf_ph: "例如 -1000, 300, 420, 680",
	tool_irr_irrOut_label: "近似 IRR",
	tool_irr_result_note: "年期牛顿 IRR。符号模式奇怪时可能不收敛。仅供学习。",
	tool_irr_err_generic: "请至少填写两个有限现金流（CF0 通常为负）。",
	tool_irr_how_title: "怎么用",
	tool_irr_how_body: "粘贴 CF0…CFn。工具用牛顿迭代寻找使 NPV(r)=0 的 r。",
	tool_irr_formula_title: "公式",
	tool_irr_formula_body: "求使 Σ CFt/(1+r)^t = 0 的 r。注意：",
	tool_irr_formula_item_1: "CF0 通常为初始流出（负）。",
	tool_irr_formula_item_2: "多次变号可能有多个 IRR；本页在收敛时返回一个根。",
	tool_irr_formula_item_3: "不含 MIRR。",
	tool_irr_example_title: "示例",
	tool_irr_example: "示例：−1000, 300, 420, 680 → IRR ≈ 18.9%。",
	tool_irr_usecases_title: "适合什么场景",
	tool_irr_usecase_1: "作业：短项目 IRR。",
	tool_irr_usecase_2: "与门槛利率下的 NPV 对照。",
	tool_irr_usecase_3: "见顾问前的草算。",
	tool_irr_faq_q1: "样例 IRR？",
	tool_irr_faq_a1: "约 18.9%。",
	tool_irr_faq_q2: "为何用牛顿法？",
	tool_irr_faq_a2: "对 NPV 多项式快速求根。",
	tool_irr_faq_q3: "多个 IRR？",
	tool_irr_faq_a3: "多次变号时可能；结果未必唯一。",
	tool_irr_faq_q4: "投资建议？",
	tool_irr_faq_a4: "不是。",
	tool_irr_article: "IRR 牛顿法",
	tool_irr_disclaimer: "结果仅为IRR学习演示，不构成投资、理财或税务建议。",
	tool_irr_references: "Investopedia 与常见教材公式。",
	tool_irr_ref_a_label: "Investopedia — IRR",
	tool_irr_ref_b_label: "Investopedia — NPV",
};

export default zh;
