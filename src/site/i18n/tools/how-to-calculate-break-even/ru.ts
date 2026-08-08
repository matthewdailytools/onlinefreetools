/**
 * i18n tool shard (how-to-calculate-break-even / ru).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_break_even_title: "Калькулятор точки безубыточности — объём для покрытия затрат",
	tool_break_even_description: "Рассчитайте точку безубыточности в штуках и выручке по постоянным затратам, цене и переменным затратам на единицу. Показывается маржинальный доход. Пример: постоянные 10 000, цена 50, переменные 30 → 500 шт. и выручка 25 000. В браузере; только обучение, не бизнес- и не инвестиционный совет.",
	tool_break_even_article: "Безубыточность — когда маржа покрывает постоянные затраты. Штуки = FC / (P − V); выручка и маржа на одном учебном URL.",
	tool_break_even_calculate: "Рассчитать",
	tool_break_even_sample: "Загрузить пример",
	tool_break_even_clear: "Очистить",
	tool_break_even_fixed_label: "Постоянные затраты",
	tool_break_even_fixed_ph: "напр. 10000",
	tool_break_even_price_label: "Цена за единицу",
	tool_break_even_price_ph: "напр. 50",
	tool_break_even_var_label: "Переменные затраты на единицу",
	tool_break_even_var_ph: "напр. 30",
	tool_break_even_result_units: "Объём безубыточности (шт.)",
	tool_break_even_result_revenue: "Выручка безубыточности",
	tool_break_even_result_cm: "Маржа на единицу",
	tool_break_even_result_note: "Только учебная иллюстрация — не бизнес- и не инвестиционный совет.",
	tool_break_even_err_fixed: "Постоянные затраты должны быть > 0.",
	tool_break_even_err_price: "Цена > 0, переменные ≥ 0.",
	tool_break_even_err_margin: "Цена должна быть выше переменных затрат.",
	tool_break_even_how_title: "Как это работает",
	tool_break_even_how_body: "Введите постоянные, цену и переменные. Инструмент считает маржу, штуки и выручку. Отрасли — только в сценариях, без отдельных URL.",
	tool_break_even_formula_title: "Формула и допущения",
	tool_break_even_formula_body: "Штуки Q = FC / (P − V). Выручка = Q × P. Маржа = P − V. Допущения:",
	tool_break_even_formula_item_1: "Затраты и цены постоянны; налоги/скидки не моделируются.",
	tool_break_even_formula_item_2: "Взгляд на один продукт.",
	tool_break_even_formula_item_3: "Учебные результаты, не прогнозы.",
	tool_break_even_example_title: "Пример",
	tool_break_even_example: "Пример: FC 10 000, цена 50, переменные 30 → маржа 20 → 500 шт., выручка 25 000.",
	tool_break_even_usecases_title: "Когда использовать",
	tool_break_even_usecase_1: "Учёба: практика формулы с фиксированными FC, P, V.",
	tool_break_even_usecase_2: "Грубо оценить, сколько штук покрывают постоянные (только иллюстрация).",
	tool_break_even_usecase_3: "Видеть маржу и выручку безубыточности на одной странице.",
	tool_break_even_faq_q1: "Какая формула?",
	tool_break_even_faq_a1: "Q = FC / (P − V). Выручка = Q × P. Маржа = P − V.",
	tool_break_even_faq_q2: "Цена = переменные?",
	tool_break_even_faq_a2: "Конечного объёма нет. Поднимите цену или снизьте переменные.",
	tool_break_even_faq_q3: "Это бизнес-совет?",
	tool_break_even_faq_a3: "Нет. Только учебные иллюстрации.",
	tool_break_even_faq_q4: "Штуки или выручка?",
	tool_break_even_faq_a4: "Оба в результатах; выручка = штуки × цена.",
	tool_break_even_disclaimer: "Результаты только учебные; не бизнес-, налоговый или инвестиционный совет.",
	tool_break_even_references: "Определения Investopedia точки безубыточности и маржи; формула FC/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — Точка безубыточности",
	tool_break_even_ref_cm_label: "Investopedia — Маржинальный доход",
};

export default ru;
