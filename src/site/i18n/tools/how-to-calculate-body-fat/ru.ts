/**
 * i18n tool shard (how-to-calculate-body-fat / ru).
 * Independent rewrite in Russian (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_body_fat_title: 'Калькулятор процента жира — оценка по обхватам',
	tool_body_fat_description:
		'Оцените долю жира по формулам обхватов ВМС США (вариант Army на той же странице). Пример: мужчина, рост 178 см, шея 40 см, талия 86 см → ~15,3 %. Расчёт в браузере; только для обучения — не медицинский совет и не диагноз.',
	tool_body_fat_article:
		'Методы по обхватам оценивают жир по росту и измерениям сантиметром. Navy и Army (семейство DoD) на одном образовательном URL; калипер для складок объяснён в FAQ как другой метод, без отдельной страницы.',
	tool_body_fat_calculate: 'Рассчитать',
	tool_body_fat_sample: 'Загрузить пример',
	tool_body_fat_clear: 'Очистить',
	tool_body_fat_method_label: 'Метод',
	tool_body_fat_method_navy: 'Обхваты по методу ВМС США',
	tool_body_fat_method_army: 'Обхваты U.S. Army / стиль DoD',
	tool_body_fat_sex_label: 'Пол (таблицы формул)',
	tool_body_fat_sex_male: 'Мужской',
	tool_body_fat_sex_female: 'Женский',
	tool_body_fat_height_label: 'Рост (см)',
	tool_body_fat_height_ph: 'напр. 178',
	tool_body_fat_neck_label: 'Обхват шеи (см)',
	tool_body_fat_neck_ph: 'напр. 40',
	tool_body_fat_waist_label: 'Обхват талии (см)',
	tool_body_fat_waist_ph: 'напр. 86',
	tool_body_fat_hip_label: 'Обхват бёдер (см, жен.)',
	tool_body_fat_hip_ph: 'напр. 96',
	tool_body_fat_result_label: 'Оценка доли жира',
	tool_body_fat_result_note: 'Только учебная оценка — не медицинский совет и не диагноз.',
	tool_body_fat_err_input: 'Рост, шея и талия должны быть положительными числами.',
	tool_body_fat_err_hip: 'Женские формулы требуют положительный обхват бёдер.',
	tool_body_fat_err_geom: 'Талия должна быть больше шеи (у женщин также талия+бёдра > шея).',
	tool_body_fat_how_title: 'Как это работает',
	tool_body_fat_how_body:
		'Введите пол, рост и измерения в сантиметрах. Инструмент переводит в дюймы для опубликованных формул log10 и показывает оценку % жира. Складки кожи — в FAQ, на той же странице.',
	tool_body_fat_formula_title: 'Формула и допущения измерений',
	tool_body_fat_formula_body:
		'Муж.: %жира ≈ 86,010×log10(талия−шея) − 70,041×log10(рост) + 36,387 (дюймы). Жен.: %жира ≈ 163,205×log10(талия+бёдра−шея) − 97,684×log10(рост) + 78,387. Допущения:',
	tool_body_fat_formula_item_1: 'Сантиметр в стандартных точках Navy/DoD; осанка и одежда меняют результат.',
	tool_body_fat_formula_item_2: 'Ввод в см; перед формулами log10 перевод 1 дюйм = 2,54 см.',
	tool_body_fat_formula_item_3: 'Оценки учебные, не клинические DXA/Bod Pod и не медицинский совет.',
	tool_body_fat_example_title: 'Пример',
	tool_body_fat_example:
		'Пример: мужчина, метод Navy, рост 178 см, шея 40 см, талия 86 см → ~15,3 % жира.',
	tool_body_fat_usecases_title: 'Когда использовать',
	tool_body_fat_usecase_1: 'Занятия: отработка формул Navy с фиксированными числами.',
	tool_body_fat_usecase_2: 'Грубая иллюстрация фитнес-отслеживания перед визитом к врачу (не диагноз).',
	tool_body_fat_usecase_3: 'Сравнить метки Navy и Army на одной странице без второго URL.',
	tool_body_fat_faq_q1: 'Какая формула используется?',
	tool_body_fat_faq_a1:
		'Формулы log10 обхватов в стиле ВМС/DoD США, в дюймах после перевода из см.',
	tool_body_fat_faq_q2: 'Navy и Army на этой странице?',
	tool_body_fat_faq_a2:
		'Оба — оценщики обхватов одного семейства. Метки для поиска; дисциплина измерений важнее названия.',
	tool_body_fat_faq_q3: 'Это медицинский совет?',
	tool_body_fat_faq_a3:
		'Нет. Результаты — учебные оценки, не диагноз, план лечения или клинический тест состава тела.',
	tool_body_fat_faq_q4: 'А калипер для складок?',
	tool_body_fat_faq_a4:
		'Уравнения складок требуют нескольких точек и обученной техники. Объяснены здесь в FAQ, не отдельным URL.',
	tool_body_fat_disclaimer:
		'Оценки жира — только учебные иллюстрации и не заменяют медицинский совет, диагноз или клиническое тестирование состава тела. Обращайтесь к квалифицированному специалисту для решений о здоровье.',
	tool_body_fat_references:
		'Уравнения обхватов ВМС/DoD США; образовательные материалы ACE о калькуляторах жира; рецензируемая литература по методам обхватов.',
	tool_body_fat_ref_ace_label: 'ACE — Калькулятор жира (образовательный)',
	tool_body_fat_ref_pmc_label: 'PMC — Методы оценки жира по обхватам',
};

export default ru;
