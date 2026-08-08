/**
 * i18n tool shard (how-to-calculate-compound-interest / ru).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_compound_interest_title: 'Калькулятор сложного процента — будущая стоимость',
	tool_compound_interest_description:
		'Рассчитайте будущую стоимость по сложному проценту: сумма, годовая ставка, срок в годах и частота капитализации. Формула A = P(1 + r/n)^(nt); опционально простой процент. Пример: 10 000 под 5% на 10 лет при ежегодной капитализации → около 16 288,95. Расчёт в браузере; только для обучения, не инвестиционная рекомендация.',
	tool_compound_interest_article:
		'Сложный процент начисляется на уже накопленные проценты. На этой странице — стандартная дискретная формула, сравнение с простым процентом при тех же данных и явные допущения для учёбы и личных оценок.',
	tool_compound_interest_calculate: 'Рассчитать',
	tool_compound_interest_sample: 'Загрузить пример',
	tool_compound_interest_clear: 'Очистить',
	tool_compound_interest_mode_label: 'Тип процентов',
	tool_compound_interest_mode_compound: 'Сложный процент',
	tool_compound_interest_mode_simple: 'Простой процент',
	tool_compound_interest_principal_label: 'Сумма (P)',
	tool_compound_interest_principal_placeholder: 'напр. 10000',
	tool_compound_interest_rate_label: 'Годовая ставка (%)',
	tool_compound_interest_rate_placeholder: 'напр. 5',
	tool_compound_interest_years_label: 'Срок (лет)',
	tool_compound_interest_years_placeholder: 'напр. 10',
	tool_compound_interest_freq_label: 'Капитализаций в год (n)',
	tool_compound_interest_freq_1: 'Раз в год (1)',
	tool_compound_interest_freq_2: 'Раз в полгода (2)',
	tool_compound_interest_freq_4: 'Ежеквартально (4)',
	tool_compound_interest_freq_12: 'Ежемесячно (12)',
	tool_compound_interest_freq_365: 'Ежедневно (365)',
	tool_compound_interest_result_future: 'Будущая стоимость (A)',
	tool_compound_interest_result_interest: 'Начисленные проценты',
	tool_compound_interest_result_note: 'Только учебная иллюстрация — не инвестиционная рекомендация.',
	tool_compound_interest_err_principal: 'Сумма должна быть больше нуля.',
	tool_compound_interest_err_years: 'Срок в годах должен быть больше нуля.',
	tool_compound_interest_err_rate: 'Годовая ставка должна быть нулём или положительным числом.',
	tool_compound_interest_err_overflow: 'Результат слишком велик. Уменьшите срок или ставку.',
	tool_compound_interest_how_title: 'Как это работает',
	tool_compound_interest_how_body:
		'Введите сумму, номинальную годовую ставку в процентах и число лет. В режиме сложного процента выберите, сколько раз в год начисляются проценты. Инструмент считает будущую стоимость и проценты. В режиме простого процента: A = P(1 + r t), частота не учитывается.',
	tool_compound_interest_formula_title: 'Формула и допущения',
	tool_compound_interest_formula_body:
		'Сложный: A = P (1 + r/n)^(n t), где r — номинальная годовая ставка в долях, n — капитализаций в год. Простой: A = P (1 + r t). Учитывайте:',
	tool_compound_interest_formula_item_1:
		'Ставка — введённый вами номинальный годовой процент; налоги, комиссии и инфляция не вычитаются.',
	tool_compound_interest_formula_item_2:
		'Без дополнительных взносов и снятий — растёт только начальная сумма.',
	tool_compound_interest_formula_item_3:
		'Частота капитализации меняет эффективный рост; APY кратко в FAQ, отдельным инструментом не выносится.',
	tool_compound_interest_formula_item_4:
		'Результаты — учебные иллюстрации, а не прогнозы или инвестиционные рекомендации.',
	tool_compound_interest_example_title: 'Пример',
	tool_compound_interest_example:
		'Пример: сумма 10 000, ставка 5% в год, 10 лет, капитализация раз в год → A ≈ 16 288,95, проценты ≈ 6 288,95. Те же данные при простом проценте → A = 15 000.',
	tool_compound_interest_usecases_title: 'Когда применять',
	tool_compound_interest_usecase_1:
		'Накопления: грубая оценка будущего баланса при капитализации единовременной суммы (только иллюстрация).',
	tool_compound_interest_usecase_2:
		'Учёба: отработка формулы сложного процента с фиксированными P, r, n и t.',
	tool_compound_interest_usecase_3:
		'Сравнение режимов: переключитесь на простой процент с теми же данными и увидьте разницу.',
	tool_compound_interest_faq_q1: 'Какую формулу сложного процента использует калькулятор?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t), r — годовая ставка в долях, n — капитализаций в год. Проценты = A − P.',
	tool_compound_interest_faq_q2: 'Чем простой процент отличается?',
	tool_compound_interest_faq_a2:
		'Простой процент: A = P (1 + r t), без капитализации. Выберите «Простой» в режиме; частота игнорируется.',
	tool_compound_interest_faq_q3: 'Что такое частота капитализации?',
	tool_compound_interest_faq_a3:
		'n — сколько раз в год начисляются проценты (1 — год, 12 — месяц, 365 — день). При той же номинальной ставке больший n обычно даёт больший баланс.',
	tool_compound_interest_faq_q4: 'Это инвестиционная рекомендация?',
	tool_compound_interest_faq_a4:
		'Нет. Цифры — только учебные иллюстрации и не являются инвестиционной, налоговой или финансовой рекомендацией.',
	tool_compound_interest_faq_q5: 'Что если ставка равна нулю?',
	tool_compound_interest_faq_a5: 'При годовой ставке 0% будущая стоимость равна сумме, проценты — 0.',
	tool_compound_interest_disclaimer:
		'Результаты по сложному и простому проценту — только учебные иллюстрации и не являются инвестиционной, налоговой или финансовой рекомендацией. Прошлый или гипотетический рост не гарантирует будущих результатов.',
	tool_compound_interest_references:
		'Определения сложного и простого процента на Investopedia; стандартная дискретная формула A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Сложный процент',
	tool_compound_interest_ref_simple_label: 'Investopedia — Простой процент',
};

export default ru;
