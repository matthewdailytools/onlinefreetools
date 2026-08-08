/**
 * i18n tool shard (unit-converter / ru).
 * Русский: конвертер единиц — самостоятельная локализация.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_unit_converter_title: 'Конвертер единиц — длина / масса / температура / площадь / объём / скорость',
	tool_unit_converter_description:
		'Переводите длину, массу, температуру, площадь, объём и скорость на одной странице с понятными коэффициентами. Пример: 1 миля → 1,60934 км. В браузере; учебные коэффициенты — не геодезический прибор и не медицинское устройство.',
	tool_unit_converter_article:
		'Хаб конвертации держит распространённые категории на одном URL, чтобы не плодить страницы на каждую пару (см↔дюйм). Площадь из длина×ширина — в инструменте square-feet.',
	tool_unit_converter_calculate: 'Перевести',
	tool_unit_converter_sample: 'Загрузить пример',
	tool_unit_converter_clear: 'Очистить',
	tool_unit_converter_value_label: 'Значение',
	tool_unit_converter_value_ph: 'напр. 1',
	tool_unit_converter_from_label: 'Из единицы',
	tool_unit_converter_to_label: 'В единицу',
	tool_unit_converter_category_label: 'Категория',
	tool_unit_converter_cat_length: 'Длина',
	tool_unit_converter_cat_mass: 'Масса',
	tool_unit_converter_cat_temperature: 'Температура',
	tool_unit_converter_cat_area: 'Площадь',
	tool_unit_converter_cat_volume: 'Объём',
	tool_unit_converter_cat_speed: 'Скорость',
	tool_unit_converter_result_label: 'Результат',
	tool_unit_converter_result_note: 'Только учебный перевод — не сертифицированное измерение.',
	tool_unit_converter_err_value: 'Введите конечное число.',
	tool_unit_converter_err_temp: 'Температура ниже абсолютного нуля для выбранной шкалы.',
	tool_unit_converter_how_title: 'Как это работает',
	tool_unit_converter_how_body:
		'Выберите категорию, значение и единицы. Категории здесь; площадь из Д×Ш — в square-feet.',
	tool_unit_converter_formula_title: 'Коэффициенты и формулы температуры',
	tool_unit_converter_formula_body:
		'Линейные категории идут через базовую единицу СИ. Температура — по формулам шкал. Допущения:',
	tool_unit_converter_formula_item_1: 'Коэффициенты СИ / обычные (напр. 1 mi = 1609,344 м; галлон США для объёма).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32; K = C+273,15; обратные соответственно.',
	tool_unit_converter_formula_item_3: 'Результаты учебные, не сертифицированные лабораторные измерения.',
	tool_unit_converter_example_title: 'Пример',
	tool_unit_converter_example: 'Пример (длина): 1 миля → 1,60934 км. Температура: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'Когда использовать',
	tool_unit_converter_usecase_1: 'Домашка: км и мили без новой страницы на каждую пару.',
	tool_unit_converter_usecase_2: 'Быстрые проверки массы или объёма при готовке или упаковке.',
	tool_unit_converter_usecase_3: 'Смена шкал температуры для погодных заметок — не для дозировок.',
	tool_unit_converter_faq_q1: 'Почему не отдельная страница на каждую пару единиц?',
	tool_unit_converter_faq_a1:
		'Сотни почти одинаковых URL похожи на doorway. Этот хаб покрывает частые пары; square-feet для Д×Ш.',
	tool_unit_converter_faq_q2: 'Какие определения мили и галлона?',
	tool_unit_converter_faq_a2: 'Международная миля (1609,344 м) и жидкий галлон США (3,785411784 л).',
	tool_unit_converter_faq_q3: 'Как переводится температура?',
	tool_unit_converter_faq_a3: 'Через °C: F = C×9/5+32 и K = C+273,15. Ниже абсолютного нуля — отказ.',
	tool_unit_converter_faq_q4: 'Это то же, что square-feet?',
	tool_unit_converter_faq_a4: 'Нет. Здесь — перевод единиц площади; square-feet считает площадь из Д×Ш.',
	tool_unit_converter_disclaimer:
		'Результаты — учебные иллюстрации со стандартными коэффициентами. Это не сертифицированные измерения и не геодезический, инженерный или медицинский совет.',
	tool_unit_converter_references: 'Связи СИ NIST; обычные коэффициенты; формулы °C/°F/K.',
	tool_unit_converter_ref_nist_label: 'NIST — единицы СИ',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default ru;
