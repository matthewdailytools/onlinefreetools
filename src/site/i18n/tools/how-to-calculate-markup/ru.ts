/**
 * i18n tool shard (how-to-calculate-markup / ru).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_markup_title: "Калькулятор markup — Наценка к себестоимости",
	tool_markup_description: "Считайте % markup из себестоимости и цены продажи. Пример: cost 50, sell 80 → 60%. Это не profit margin. Учебная розничная арифметика в браузере.",
	tool_markup_calculate: "Рассчитать",
	tool_markup_sample: "Загрузить пример",
	tool_markup_clear: "Очистить",
	tool_markup_cost_label: "Себестоимость",
	tool_markup_cost_ph: "напр. 50",
	tool_markup_sell_label: "Цена продажи",
	tool_markup_sell_ph: "напр. 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "Наценка в деньгах",
	tool_markup_result_note: "Markup = (цена − себестоимость) / себестоимость × 100.",
	tool_markup_err_generic: "Себестоимость > 0 и цена ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Маржа",
	tool_markup_how_title: "Как пользоваться",
	tool_markup_how_body: "Введите себестоимость и цену. Markup делит на себестоимость, не на продажи.",
	tool_markup_formula_title: "Формула",
	tool_markup_formula_body: "Markup % = (цена − себестоимость) / себестоимость × 100. Замечания:",
	tool_markup_formula_item_1: "Знаменатель — себестоимость; в этом отличие от маржи.",
	tool_markup_formula_item_2: "Отрицательный markup = продажа ниже себестоимости.",
	tool_markup_formula_item_3: "Налоги и скидки сами не моделируются.",
	tool_markup_usecases_title: "Когда использовать",
	tool_markup_usecase_1: "Домашка по ритейлу: cost и price → %.",
	tool_markup_usecase_2: "Проверить прайс до разговора с финансами.",
	tool_markup_usecase_3: "Сравнить с валовой маржой.",
	tool_markup_example_title: "Пример",
	tool_markup_example: "Example / Ejemplo: cost 50, sell 80 → 60% markup.",
	tool_markup_article: "Калькулятор markup — Наценка к себестоимости",
	tool_markup_disclaimer: "Только учебная иллюстрация (markup) — не финансовый и не налоговый совет.",
	tool_markup_references: "Investopedia и стандартные учебные формулы.",
	tool_markup_faq_q1: "Чем отличается от маржи?",
	tool_markup_faq_a1: "Markup делит на себестоимость; маржа — на цену.",
	tool_markup_faq_q2: "Результат примера?",
	tool_markup_faq_a2: "50 и 80 → 60%.",
	tool_markup_faq_q3: "Может быть >100%?",
	tool_markup_faq_a3: "Да, если цена больше чем 2× себестоимость.",
	tool_markup_faq_q4: "Это совет по ценам?",
	tool_markup_faq_a4: "Нет, только учебная арифметика.",
};

export default ru;
