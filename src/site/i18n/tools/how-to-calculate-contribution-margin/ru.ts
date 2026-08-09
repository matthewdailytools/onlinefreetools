/**
 * i18n tool shard (how-to-calculate-contribution-margin / ru).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_contribution_margin_title: "Калькулятор маржинальной прибыли",
	tool_contribution_margin_description: "Считайте маржинальную прибыль и долю из цены и переменных затрат. Пример: цена 50, VC 30 → 20 (40%). Учебно. Учебный расчёт в браузере; не профессиональный совет.",
	tool_contribution_margin_calculate: "Рассчитать",
	tool_contribution_margin_sample: "Загрузить пример",
	tool_contribution_margin_clear: "Очистить",
	tool_contribution_margin_price_label: "Цена за единицу",
	tool_contribution_margin_price_ph: "напр. 50",
	tool_contribution_margin_vc_label: "Переменные затраты на ед.",
	tool_contribution_margin_vc_ph: "напр. 30",
	tool_contribution_margin_cmOut_label: "Маржинальная прибыль",
	tool_contribution_margin_cmrOut_label: "Доля CM",
	tool_contribution_margin_result_note: "Учебно.",
	tool_contribution_margin_err_generic: "Цена > 0 и VC ≥ 0.",
	tool_contribution_margin_how_title: "Как пользоваться",
	tool_contribution_margin_how_body: "Введите цену и переменные затраты на единицу.",
	tool_contribution_margin_formula_title: "Формула",
	tool_contribution_margin_formula_body: "CM = P − VC; доля = CM / P.",
	tool_contribution_margin_formula_item_1: "VC with units; fixed costs → break-even.",
	tool_contribution_margin_formula_item_2: "Price > 0.",
	tool_contribution_margin_formula_item_3: "Simplified.",
	tool_contribution_margin_example_title: "Пример",
	tool_contribution_margin_example: "Пример: 50 и 30 → 20 (40%).",
	tool_contribution_margin_usecases_title: "Когда использовать",
	tool_contribution_margin_usecase_1: "Unit CM homework.",
	tool_contribution_margin_usecase_2: "VC sensitivity.",
	tool_contribution_margin_usecase_3: "With break-even tool.",
	tool_contribution_margin_faq_q1: "Пример?",
	tool_contribution_margin_faq_a1: "20 / 40%",
	tool_contribution_margin_faq_q2: "CM vs gross?",
	tool_contribution_margin_faq_a2: "VC vs COGS.",
	tool_contribution_margin_faq_q3: "Qty needed?",
	tool_contribution_margin_faq_a3: "Not for unit CM.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "No.",
	tool_contribution_margin_article: "Калькулятор маржинальной прибыли",
	tool_contribution_margin_disclaimer: "Только учебная иллюстрация (contribution margin) — не финансовый совет.",
	tool_contribution_margin_references: "Investopedia и учебные формулы.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default ru;
