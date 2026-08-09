/**
 * i18n tool shard (how-to-calculate-irr / ru).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_irr_title: "Калькулятор IRR",
	tool_irr_description: "Оцените IRR простого ряда денежных потоков методом Ньютона. Пример: −1000, 300, 420, 680 → приблизительный IRR%. Учебно.",
	tool_irr_calculate: "Рассчитать",
	tool_irr_sample: "Загрузить пример",
	tool_irr_clear: "Очистить",
	tool_irr_cf_label: "Потоки (запятая/строка; сначала CF0)",
	tool_irr_cf_ph: "напр. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "Прибл. IRR",
	tool_irr_result_note: "Учебно.",
	tool_irr_err_generic: "Проверьте ввод.",
	tool_irr_how_title: "Как пользоваться",
	tool_irr_how_body: "Вставьте CF0…CFn. Ищем r с NPV(r)=0 методом Ньютона.",
	tool_irr_formula_title: "Формула",
	tool_irr_formula_body: "Вставьте CF0…CFn. Ищем r с NPV(r)=0 методом Ньютона.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "Пример",
	tool_irr_example: "Пример: −1000, 300, 420, 680 → IRR ≈ 18.9%.",
	tool_irr_usecases_title: "Когда использовать",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: 'Sketch before talking to an advisor — not a substitute.',
	tool_irr_faq_q1: "Пример?",
	tool_irr_faq_a1: "Пример: −1000, 300, 420, 680 → IRR ≈ 18.9%.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: 'Educational only.',
	tool_irr_article: "Калькулятор IRR",
	tool_irr_disclaimer: "Только учебная иллюстрация (IRR) — не финансовый совет.",
	tool_irr_references: "Investopedia и учебные формулы.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default ru;
