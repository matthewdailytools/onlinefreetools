/**
 * i18n tool shard (how-to-calculate-ideal-weight / ru).
 * Самостоятельная переработка по brief 03 (идеальный вес); не калька с английского.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_ideal_weight_title: 'Калькулятор идеального веса — оценка диапазона веса',
	tool_ideal_weight_description:
		'Оцените идеальный вес (IBW) по формулам Devine, Robinson, Miller и Hamwi на одной странице. Пример: мужчина 178 см → Devine ≈ 73,2 кг (диапазон ≈ 70,4–75,2 кг). Счёт в браузере; только для обучения — не медицинская рекомендация и не диагноз.',
	tool_ideal_weight_article:
		'Формулы идеального веса дают опорный вес по росту и полу. Здесь Devine, Robinson, Miller и Hamwi собраны вместе, чтобы сравнить диапазон, с явным немедицинским предупреждением.',
	tool_ideal_weight_calculate: 'Рассчитать',
	tool_ideal_weight_sample: 'Загрузить пример',
	tool_ideal_weight_clear: 'Очистить',
	tool_ideal_weight_sex_label: 'Пол (таблицы формул)',
	tool_ideal_weight_sex_male: 'Мужской',
	tool_ideal_weight_sex_female: 'Женский',
	tool_ideal_weight_height_label: 'Рост (см)',
	tool_ideal_weight_height_ph: 'напр. 178',
	tool_ideal_weight_formula_label: 'Вид формулы',
	tool_ideal_weight_formula_all: 'Все формулы (диапазон)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Оценка идеального веса',
	tool_ideal_weight_result_range: 'Диапазон формул',
	tool_ideal_weight_result_note: 'Только учебная оценка — не медицинская рекомендация и не диагноз.',
	tool_ideal_weight_err_height: 'Рост должен быть больше нуля.',
	tool_ideal_weight_err_short:
		'Эти формулы IBW плохо определены ниже примерно 152 см (5 ft). Считайте результат лишь иллюстрацией.',
	tool_ideal_weight_how_title: 'Как это работает',
	tool_ideal_weight_how_body:
		'Укажите пол и рост в сантиметрах. Инструмент переводит рост в дюймы для классических формул IBW и показывает килограммы. Сравнивайте формулы здесь; ИМТ и жир — в других инструментах.',
	tool_ideal_weight_formula_title: 'Формулы и допущения',
	tool_ideal_weight_formula_body:
		'Пересчёт: 1 in = 2,54 cm. Выше 60 in (5 ft): муж. Devine = 50 + 2,3×(in−60); жен. = 45,5 + 2,3×(in−60). Robinson, Miller и Hamwi — похожие линейные формы с другими коэффициентами. Важно:',
	tool_ideal_weight_formula_item_1: 'Выведены для дозирования/справочных контекстов у взрослых — не личные цели.',
	tool_ideal_weight_formula_item_2: 'Телосложение, мышечная масса и беременность не моделируются.',
	tool_ideal_weight_formula_item_3: 'Результаты — учебные иллюстрации, не клинические цели и не медсовет.',
	tool_ideal_weight_example_title: 'Пример',
	tool_ideal_weight_example:
		'Пример: мужчина, 178 см → Devine ≈ 73,2 кг; Robinson ≈ 71,1, Miller ≈ 70,4, Hamwi ≈ 75,2 (≈ 70,4–75,2 кг).',
	tool_ideal_weight_usecases_title: 'Когда полезно',
	tool_ideal_weight_usecase_1: 'Учёба: сравнить классические формулы IBW при одном росте.',
	tool_ideal_weight_usecase_2: 'Грубая учебная ориентировка перед разговором с врачом (не план цели).',
	tool_ideal_weight_usecase_3: 'Увидеть Devine и Robinson на одной странице без отдельных URL.',
	tool_ideal_weight_faq_q1: 'Какая формула идеального веса «правильная»?',
	tool_ideal_weight_faq_a1:
		'Универсально правильной нет. Devine часто в обучении; у Robinson, Miller и Hamwi другие коэффициенты. Сравните здесь.',
	tool_ideal_weight_faq_q2: 'Это то же, что ИМТ?',
	tool_ideal_weight_faq_a2:
		'Нет. ИМТ — отношение веса к росту. IBW оценивает опорный вес только по росту и полу.',
	tool_ideal_weight_faq_q3: 'Это медицинская рекомендация?',
	tool_ideal_weight_faq_a3:
		'Нет. Цифры — только учебные оценки: не диагноз, не план лечения и не назначение питания.',
	tool_ideal_weight_faq_q4: 'Зачем переводить в дюймы?',
	tool_ideal_weight_faq_a4:
		'Опубликованные уравнения типа Devine заданы в дюймах выше 5 футов. Сантиметры переводятся до применения формул.',
	tool_ideal_weight_disclaimer:
		'Результаты идеального веса — только образовательные иллюстрации и не заменяют медицинскую рекомендацию, диагноз или клиническую оценку. По вопросам здоровья обращайтесь к квалифицированному специалисту.',
	tool_ideal_weight_references:
		'Классические уравнения IBW Devine/Robinson/Miller/Hamwi; образовательный контекст дозирования/IBW NCBI Bookshelf.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — контекст идеального веса',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default ru;
