/**
 * i18n 工具分片（how-to-calculate-markup / ru）。
 * 加价率：从成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 俄语 markup 计算器文案分片（与 en 键一致）。 */
const ru: SiteLangDict = {
	tool_markup_title: "Калькулятор наценки — процент, цена продажи или себестоимость",
	tool_markup_description: "Считайте процент наценки (markup) из себестоимости и цены продажи или находите цену или себестоимость при заданном markup %. Пример: cost 50, sell 80 → markup 60% (маржа 37,5%). Markup делит на себестоимость; маржа — на выручку. Учебная розничная арифметика — не бизнес-совет.",
	tool_markup_article: "Найдите % markup, цену продажи или себестоимость и сопоставимую валовую маржу, чтобы не путать markup с маржой.",
	tool_markup_desc: "Считайте % markup из себестоимости и цены или обратно для продажи/себестоимости. Показывает маржу для сравнения.",

	tool_markup_mode_label: "Что найти",
	tool_markup_mode_pct: "Markup %",
	tool_markup_mode_sell: "Цена продажи",
	tool_markup_mode_cost: "Себестоимость",
	tool_markup_hint: "Выберите неизвестное. Markup использует себестоимость в знаменателе; маржа — цену продажи. Допустима запятая в десятичной части. Только обучение — не ценовой совет.",
	tool_markup_cost_label: "Себестоимость",
	tool_markup_cost_ph: "напр. 50",
	tool_markup_sell_label: "Цена продажи",
	tool_markup_sell_ph: "напр. 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "напр. 60",
	tool_markup_calculate: "Рассчитать",
	tool_markup_sample: "Загрузить пример",
	tool_markup_clear: "Очистить",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "Цена продажи",
	tool_markup_costOut_label: "Себестоимость",
	tool_markup_profitOut_label: "Наценка в деньгах",
	tool_markup_marginOut_label: "Валовая маржа %",
	tool_markup_steps_title: "Шаги",
	tool_markup_step_pct_tpl: "Markup % = (продажа − себестоимость) ÷ себестоимость × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%.",
	tool_markup_step_sell_tpl: "Цена продажи = себестоимость × (1 + markup%/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Себестоимость = продажа ÷ (1 + markup%/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "Валовая маржа % = (продажа − себестоимость) ÷ продажа × 100 = {dollar} ÷ {sell} × 100 = {margin}%.",
	tool_markup_result_note: "Markup делит на себестоимость; маржа — на цену продажи. Та же наценка в деньгах, разные проценты. Только обучение — не налог, ценообразование или инвестиции.",
	tool_markup_err_generic: "Введите положительную себестоимость и допустимую цену продажи или % markup для выбранного режима (например cost 50 и sell 80).",

	tool_markup_how_title: "Как пользоваться калькулятором markup",
	tool_markup_how_body: "Выберите, нужен ли % markup, цена продажи или себестоимость. Заполните появившиеся поля и нажмите Рассчитать. Пример по очереди: cost/sell → %, cost/% → sell, sell/% → cost.",
	tool_markup_how_item_1: "В «Что найти» выберите Markup %, Цену продажи или Себестоимость.",
	tool_markup_how_item_2: "Введите известные значения (cost и sell, или cost и % markup, или sell и % markup).",
	tool_markup_how_item_3: "Нажмите Рассчитать, чтобы увидеть недостающее значение, наценку в деньгах и соответствующую валовую маржу %.",
	tool_markup_how_item_4: "Загрузить пример: 50/80 → 60%, cost 40 при 25% → sell 50, sell 120 при 50% → cost 80.",

	tool_markup_why_choose_title: "Что даёт этот калькулятор markup",
	tool_markup_why_choose_item_1: "Три режима: % markup из cost и цены, цена из cost и %, или cost из цены и %.",
	tool_markup_why_choose_item_2: "Наценка в деньгах и валовая маржа % рядом с markup, чтобы термины не смешивались.",
	tool_markup_why_choose_item_3: "Строки шагов подставляют ваши числа в (P−C)/C и (P−C)/P.",
	tool_markup_why_choose_item_4: "Поля скрываются, когда не используются в выбранном режиме.",
	tool_markup_why_choose_item_5: "Ясный учебный disclaimer — не бизнес, налог или инвестиционный совет.",

	tool_markup_formula_title: "Формулы markup",
	tool_markup_formula_body: "Markup измеряет наценку относительно себестоимости. Маржа — ту же прибыль в деньгах относительно цены продажи.",
	tool_markup_formula_item_1: "Markup % = (цена продажи − себестоимость) ÷ себестоимость × 100. Пример: (80 − 50) ÷ 50 × 100 = 60%.",
	tool_markup_formula_item_2: "Цена продажи = себестоимость × (1 + markup%/100). Пример: 40 × 1,25 = 50 при markup 25%.",
	tool_markup_formula_item_3: "Себестоимость = цена продажи ÷ (1 + markup%/100). Пример: 120 ÷ 1,5 = 80 при markup 50%.",
	tool_markup_formula_item_4: "Валовая маржа % = (цена продажи − себестоимость) ÷ цена продажи × 100. Тот же 50/80 → 37,5%.",
	tool_markup_formula_item_5: "Markup 100% означает цена = 2 × cost (маржа 50%). Markup выше 100% возможен, когда цена > 2 × cost.",

	tool_markup_example_title: "Разобранные примеры",
	tool_markup_example: "Загрузить пример начинает с cost 50 и sell 80 → markup 60%, наценка 30, маржа 37,5%. Далее cost 40 при markup 25% → sell 50. Затем sell 120 при markup 50% → cost 80. Образец безубытка (100/100) показывает 0% markup и 0% маржи.",

	tool_markup_usecases_title: "Когда использовать калькулятор markup",
	tool_markup_usecase_1: "Домашка по ритейлу: cost и цена в витрине → % markup с видимыми шагами.",
	tool_markup_usecase_2: "Проверка прайса: при целевом % markup найти sell из cost.",
	tool_markup_usecase_3: "Обратный cost: из известной цены и политики markup восстановить implied cost.",
	tool_markup_usecase_4: "Развести термины: почему markup 60% — не маржа 60%.",

	tool_markup_faq_q1: "Как считать процент markup?",
	tool_markup_faq_a1: "Вычтите cost из цены продажи, разделите на cost, умножьте на 100. Пример: cost 50, sell 80 → (80−50)/50 × 100 = 60%.",
	tool_markup_faq_q2: "Чем markup отличается от маржи?",
	tool_markup_faq_a2: "Markup делит прибыль в деньгах на cost; маржа — на цену продажи. Та же сделка 50/80: 60% markup и 37,5% маржи.",
	tool_markup_faq_q3: "Как найти цену продажи из cost и % markup?",
	tool_markup_faq_a3: "Sell = cost × (1 + markup%/100). При cost 40 и markup 25% sell = 40 × 1,25 = 50.",
	tool_markup_faq_q4: "Может ли markup быть больше 100%?",
	tool_markup_faq_a4: "Да. Если цена больше чем вдвое cost, markup превышает 100%. Пример: cost 50, sell 150 → markup 200%.",
	tool_markup_faq_q5: "Что если продавать ниже cost?",
	tool_markup_faq_a5: "Markup и маржа становятся отрицательными. Это убыток на единицу до прочих расходов.",
	tool_markup_faq_q6: "Учитываются ли налог или скидки?",
	tool_markup_faq_a6: "Нет. Введите cost и цену, которые хотите сравнить, после того как сами учли налог или скидку.",
	tool_markup_faq_q7: "Это финансовый совет?",
	tool_markup_faq_a7: "Нет. Только учебная розничная арифметика — не налог, ценовая стратегия или инвестиции.",

	tool_markup_disclaimer: "Только учебная иллюстрация markup — не финансовый, налоговый, ценовой или инвестиционный совет.",
	tool_markup_references: "Investopedia и стандартные учебные формулы для контекста обучения.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Profit margin",
};

export default ru;
