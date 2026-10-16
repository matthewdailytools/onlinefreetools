/**
 * i18n 工具分片（how-to-calculate-contribution-margin / ru）。
 * 检索向：маржинальная прибыль / маржинальность / точка безубыточности。
 * YMYL：仅教材算术，非经营或投资建议。占位符 {price}{vc}{cm}{ratio}{units}{total}{fixed}{be} 勿改。
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_contribution_margin_title: "Калькулятор маржинальной прибыли — на единицу, доля и безубыточность",
	tool_contribution_margin_description: "Посчитайте маржинальную прибыль и маржинальность из цены и переменных затрат на единицу. Пример: цена 50, переменные 30 → маржа 20 (40%). При желании укажите количество для общей маржи и постоянные затраты для объёма безубыточности. Только для обучения — не бизнес- и не инвестиционный совет.",
	tool_contribution_margin_article: "Считайте маржинальную прибыль на единицу и её долю, при необходимости — общую маржу по количеству и объём безубыточности при введённых постоянных затратах.",
	tool_contribution_margin_desc: "Маржа на единицу и доля из цены и переменных. Опционально итог и безубыточность.",

	tool_contribution_margin_safety_banner: "Только в учебных целях. Страница считает маржинальную прибыль по учебнику. Это не бизнес-, налоговый, бухгалтерский или инвестиционный совет.",
	tool_contribution_margin_hint: "Цена должна быть больше нуля. Переменные затраты ≥ 0 и не выше цены. Количество и постоянные затраты необязательны.",
	tool_contribution_margin_price_label: "Цена за единицу",
	tool_contribution_margin_price_ph: "напр. 50",
	tool_contribution_margin_vc_label: "Переменные затраты на единицу",
	tool_contribution_margin_vc_ph: "напр. 30",
	tool_contribution_margin_units_label: "Количество (необязательно)",
	tool_contribution_margin_units_ph: "напр. 100",
	tool_contribution_margin_fixed_label: "Постоянные затраты (необязательно)",
	tool_contribution_margin_fixed_ph: "напр. 10000",
	tool_contribution_margin_calculate: "Рассчитать",
	tool_contribution_margin_sample: "Загрузить пример",
	tool_contribution_margin_clear: "Очистить",
	tool_contribution_margin_cmOut_label: "Маржинальная прибыль (на единицу)",
	tool_contribution_margin_cmrOut_label: "Маржинальность",
	tool_contribution_margin_totalOut_label: "Общая маржинальная прибыль",
	tool_contribution_margin_beOut_label: "Объём безубыточности (ед.)",
	tool_contribution_margin_steps_title: "Шаги расчёта",
	tool_contribution_margin_step_cm_tpl: "МП = цена − переменные = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "Маржинальность = МП ÷ цена × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "Общая МП = МП на ед. × количество = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "Безубыточность (ед.) = постоянные ÷ МП = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "Маржинальная прибыль после переменных затрат идёт на покрытие постоянных и затем на прибыль. Смеси продуктов и налоги не моделируются. Только обучение — не бизнес-совет.",
	tool_contribution_margin_err_generic: "Введите цену > 0 и переменные затраты ≥ 0, не выше цены (например 50 и 30). Опциональное количество должно быть > 0; опциональные постоянные ≥ 0.",

	tool_contribution_margin_how_title: "Как пользоваться калькулятором маржинальной прибыли",
	tool_contribution_margin_how_body: "Введите цену и переменные затраты на единицу. При необходимости добавьте количество для общей маржи и постоянные затраты для объёма безубыточности. «Загрузить пример» переключает режим только единицы, с количеством, с постоянными и комбинированный случай.",
	tool_contribution_margin_how_item_1: "Введите цену за единицу и переменные затраты на единицу.",
	tool_contribution_margin_how_item_2: "По желанию: укажите количество, чтобы увидеть общую маржинальную прибыль.",
	tool_contribution_margin_how_item_3: "По желанию: укажите постоянные затраты для объёма безубыточности (нужна МП > 0).",
	tool_contribution_margin_how_item_4: "Нажмите «Рассчитать» — появятся МП, маржинальность и строки шагов.",

	tool_contribution_margin_why_choose_title: "Что даёт этот калькулятор маржинальной прибыли",
	tool_contribution_margin_why_choose_item_1: "МП на единицу и маржинальность из цены и переменных затрат.",
	tool_contribution_margin_why_choose_item_2: "Общая МП, если вы ввели количество.",
	tool_contribution_margin_why_choose_item_3: "Объём безубыточности, если вы ввели постоянные затраты.",
	tool_contribution_margin_why_choose_item_4: "Строки шагов с подстановкой ваших чисел в формулы.",
	tool_contribution_margin_why_choose_item_5: "Явная YMYL-граница: только учебная арифметика — не бизнес-совет.",

	tool_contribution_margin_formula_title: "Формулы маржинальной прибыли",
	tool_contribution_margin_formula_body: "Маржинальная прибыль — то, что остаётся от цены после переменных затрат: сумма на покрытие постоянных расходов и прибыли.",
	tool_contribution_margin_formula_item_1: "МП = цена − переменные. Пример: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "Маржинальность = МП ÷ цена. Пример: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "Общая МП = МП на единицу × количество.",
	tool_contribution_margin_formula_item_4: "Объём безубыточности = постоянные ÷ МП на единицу (когда МП > 0).",
	tool_contribution_margin_formula_item_5: "Валовая маржа опирается на себестоимость (COGS); МП — только на переменные: цифры могут различаться.",

	tool_contribution_margin_example_title: "Разбор примеров",
	tool_contribution_margin_example: "«Загрузить пример» начинается с цены 50 и переменных 30 → МП 20 (40%). Далее × 100 единиц → общая МП 2 000. Затем постоянные 10 000 → безубыточность 500 ед. Последний пример сочетает количество и постоянные.",

	tool_contribution_margin_usecases_title: "Когда нужен калькулятор маржинальной прибыли",
	tool_contribution_margin_usecase_1: "Домашнее задание: маржа на единицу перед задачей о безубыточности.",
	tool_contribution_margin_usecase_2: "Посмотреть, как изменение переменных затрат двигает маржинальность.",
	tool_contribution_margin_usecase_3: "Прикинуть, сколько единиц покрывает заданную сумму постоянных (только иллюстрация).",
	tool_contribution_margin_usecase_4: "Сравнить с калькулятором валовой маржи, если COGS ≠ переменные затраты.",

	tool_contribution_margin_faq_q1: "Чем маржинальная прибыль отличается от валовой маржи?",
	tool_contribution_margin_faq_a1: "МП использует переменные затраты. Валовая маржа — себестоимость (COGS), куда могут входить не чисто переменные статьи.",
	tool_contribution_margin_faq_q2: "Как считается маржинальная прибыль?",
	tool_contribution_margin_faq_a2: "МП = цена − переменные затраты. Пример: 50 − 30 = 20; доля = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q3: "Нужно ли указывать количество?",
	tool_contribution_margin_faq_a3: "Для МП на единицу — нет. Количество нужно только для общей маржи.",
	tool_contribution_margin_faq_q4: "Как здесь считают объём безубыточности?",
	tool_contribution_margin_faq_a4: "Единицы безубыточности = постоянные ÷ МП на единицу при МП > 0. Для полного UI безубыточности откройте связанный калькулятор.",
	tool_contribution_margin_faq_q5: "Могут ли переменные затраты превышать цену?",
	tool_contribution_margin_faq_a5: "Для МП на единицу страница такой случай отклоняет (отрицательная маржа). Проверьте ввод.",
	tool_contribution_margin_faq_q6: "Учитывается ли ассортимент из нескольких продуктов?",
	tool_contribution_margin_faq_a6: "Нет. Считайте каждый продукт отдельно или взвешенную маржу в таблице.",
	tool_contribution_margin_faq_q7: "Это бизнес-совет?",
	tool_contribution_margin_faq_a7: "Нет. Только учебная арифметика — не финансовый, налоговый, бухгалтерский или инвестиционный совет.",

	tool_contribution_margin_disclaimer: "Только учебная маржинальная прибыль — не финансовый, налоговый, бухгалтерский, бизнес- или инвестиционный совет.",
	tool_contribution_margin_references: "Статьи Investopedia о contribution margin и break-even для учебного контекста.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default ru;
