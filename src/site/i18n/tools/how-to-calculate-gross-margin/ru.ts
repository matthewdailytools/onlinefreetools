/**
 * i18n tool shard (how-to-calculate-gross-margin / ru).
 * Русский: валовая маржа / валовая прибыль — самостоятельная локализация.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_gross_margin_title: 'Калькулятор валовой маржи — прибыль и процент',
	tool_gross_margin_description:
		'Рассчитайте валовую прибыль и валовую маржу (%) по выручке и себестоимости продаж (COGS). Пример: выручка 10 000, COGS 6 000 → прибыль 4 000 и маржа 40%. В браузере; только для обучения — не бизнес- и не инвестиционный совет.',
	tool_gross_margin_article:
		'Валовая маржа показывает, какая доля выручки остаётся после себестоимости. На этой странице валовая прибыль и маржа % на одном учебном URL; чистая или операционная маржа — в других инструментах.',
	tool_gross_margin_calculate: 'Рассчитать',
	tool_gross_margin_sample: 'Загрузить пример',
	tool_gross_margin_clear: 'Очистить',
	tool_gross_margin_revenue_label: 'Выручка (продажи)',
	tool_gross_margin_revenue_ph: 'напр. 10000',
	tool_gross_margin_cogs_label: 'Себестоимость продаж (COGS)',
	tool_gross_margin_cogs_ph: 'напр. 6000',
	tool_gross_margin_result_profit: 'Валовая прибыль',
	tool_gross_margin_result_margin: 'Валовая маржа',
	tool_gross_margin_result_note: 'Только учебная иллюстрация — не бизнес- и не инвестиционный совет.',
	tool_gross_margin_err_revenue: 'Выручка должна быть больше нуля.',
	tool_gross_margin_err_cogs: 'Себестоимость должна быть нулём или положительным числом.',
	tool_gross_margin_how_title: 'Как это работает',
	tool_gross_margin_how_body:
		'Введите выручку и COGS. Инструмент считает валовую прибыль и маржу %. Markup vs маржа и чистая прибыль — в FAQ или связанных инструментах, без doorway-URL.',
	tool_gross_margin_formula_title: 'Формула и допущения',
	tool_gross_margin_formula_body:
		'Валовая прибыль = Выручка − COGS. Валовая маржа % = (Валовая прибыль ÷ Выручка) × 100. Допущения:',
	tool_gross_margin_formula_item_1: 'Выручка и COGS за один период и в одной валюте; налоги и операционные расходы не моделируются.',
	tool_gross_margin_formula_item_2: 'COGS — только себестоимость продукта; SG&A и проценты вне модели.',
	tool_gross_margin_formula_item_3: 'Результаты — учебные иллюстрации, не прогнозы и не советы.',
	tool_gross_margin_example_title: 'Пример',
	tool_gross_margin_example:
		'Пример: выручка 10 000, COGS 6 000 → валовая прибыль 4 000 → валовая маржа 40%.',
	tool_gross_margin_usecases_title: 'Когда использовать',
	tool_gross_margin_usecase_1: 'Учёба: отработать формулу валовой маржи при фиксированных выручке и COGS.',
	tool_gross_margin_usecase_2: 'Грубая оценка маржи продукта до консультации (только иллюстрация).',
	tool_gross_margin_usecase_3: 'Смотреть прибыль и маржу % вместе, без отдельного URL для markup.',
	tool_gross_margin_faq_q1: 'Какая формула валовой маржи здесь используется?',
	tool_gross_margin_faq_a1:
		'Валовая прибыль = Выручка − COGS. Валовая маржа % = Валовая прибыль ÷ Выручка × 100.',
	tool_gross_margin_faq_q2: 'Что если COGS больше выручки?',
	tool_gross_margin_faq_a2:
		'Прибыль и маржа становятся отрицательными. Модель позволяет увидеть убыток — это всё ещё не совет.',
	tool_gross_margin_faq_q3: 'Это бизнес-совет?',
	tool_gross_margin_faq_a3:
		'Нет. Цифры — только учебные иллюстрации и не являются налоговым, бизнес- или инвестиционным советом.',
	tool_gross_margin_faq_q4: 'Валовая маржа и наценка (markup)?',
	tool_gross_margin_faq_a4:
		'Маржа делит прибыль на выручку; наценка — на себестоимость. Страница про маржу; markup только в FAQ.',
	tool_gross_margin_disclaimer:
		'Результаты по валовой марже — только учебные иллюстрации и не являются бизнес-, финансовым, налоговым или инвестиционным советом. В реальном бизнесе есть сборы, налоги и классификации затрат, которые здесь не моделируются.',
	tool_gross_margin_references:
		'Определения Investopedia для gross margin и gross profit; стандартная формула (Выручка − COGS) / Выручка.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default ru;
