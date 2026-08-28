/**
 * i18n tool shard (measuring-magnetic-fields / ru).
 * Поиск: измерение магнитного поля / напряжённость; не путать с magnet-ссылкой торрента.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Измерение магнитного поля — Калькулятор напряжённости',
	tool_measuring_magnetic_fields_description:
		'Измерение магнитного поля: введите показание датчика Холла или тесламетра и пересчитайте напряжённость. Пример: 200 Гс → 0,02 Тл. Сравните гаусс магнита с таблицей порядков или оцените осевое поле полосового магнита. Расчёт идёт в браузере; числа не отправляются на сервер.',
	tool_measuring_magnetic_fields_article:
		'Сначала прибор и положение зонда, затем перевод единиц. Геометрическая оценка не заменяет калиброванный измеритель и не даёт силу отрыва в килограммах.',
	tool_measuring_magnetic_fields_calculate: 'Пересчитать',
	tool_measuring_magnetic_fields_sample: 'Пример',
	tool_measuring_magnetic_fields_clear: 'Очистить',
	tool_measuring_magnetic_fields_estimate: 'Оценить поле',
	tool_measuring_magnetic_fields_convert_heading: 'Пересчитать показание прибора',
	tool_measuring_magnetic_fields_estimate_heading: 'По желанию: оценить поле магнита',
	tool_measuring_magnetic_fields_value_label: 'Показание',
	tool_measuring_magnetic_fields_value_ph: 'напр. 200',
	tool_measuring_magnetic_fields_unit_label: 'Единица на приборе',
	tool_measuring_magnetic_fields_vacuum_label: 'Также показать H в вакууме/воздухе (А/м и эрстеды)',
	tool_measuring_magnetic_fields_result_t: 'Тесла (T)',
	tool_measuring_magnetic_fields_result_mt: 'Миллитесла (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Микротесла (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Нанотесла (nT)',
	tool_measuring_magnetic_fields_result_g: 'Гаусс (G)',
	tool_measuring_magnetic_fields_result_mg: 'Миллигаусс (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Килогаусс (kG)',
	tool_measuring_magnetic_fields_earth_line: 'Примерно в {n} раз больше поля Земли (~50 µT как учебная середина).',
	tool_measuring_magnetic_fields_result_h: 'H (А/м), вакуум/воздух',
	tool_measuring_magnetic_fields_result_oe: 'Эрстед (Oe), вакуум/воздух',
	tool_measuring_magnetic_fields_result_note:
		'Формула поля: 1 T = 10⁴ G. Необязательное H использует B = μ₀H только в вакууме/воздухе; B и H — разные величины.',
	tool_measuring_magnetic_fields_err_generic: 'Введите конечное неотрицательное показание.',
	tool_measuring_magnetic_fields_err_negative: 'Страница берёт модуль: отрицательные значения отклоняются.',
	tool_measuring_magnetic_fields_err_z: 'Осевое расстояние z должно быть ≥ 0 (мм от грани).',
	tool_measuring_magnetic_fields_err_grade: 'Выберите марку N из списка (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Введите конечные положительные размеры в миллиметрах.',
	tool_measuring_magnetic_fields_grade_label: 'Марка NdFeB (середина Br)',
	tool_measuring_magnetic_fields_shape_label: 'Форма',
	tool_measuring_magnetic_fields_shape_disc: 'Диск / цилиндр',
	tool_measuring_magnetic_fields_shape_block: 'Брусок / полосовой магнит',
	tool_measuring_magnetic_fields_diam_label: 'Диаметр (мм)',
	tool_measuring_magnetic_fields_thick_label: 'Толщина вдоль оси (мм)',
	tool_measuring_magnetic_fields_len_label: 'Длина грани (мм)',
	tool_measuring_magnetic_fields_width_label: 'Ширина грани (мм)',
	tool_measuring_magnetic_fields_z_label: 'Расстояние от грани z (мм)',
	tool_measuring_magnetic_fields_estimate_out_t: 'Осевое B (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'Осевое B (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Однородная осевая намагниченность и формула диска (брусок — эквивалентный радиус). У грани градиент крутой: это не калиброванный тесламетр и не сила отрыва в кг.',
	tool_measuring_magnetic_fields_chart_title: 'Таблица напряжённости магнитов (порядки)',
	tool_measuring_magnetic_fields_chart_col_source: 'Источник',
	tool_measuring_magnetic_fields_chart_col_b: 'Типичное B',
	tool_measuring_magnetic_fields_chart_earth: 'Поле Земли (проверка слабого поля)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (здесь ~50 µT как середина)',
	tool_measuring_magnetic_fields_chart_fridge: 'Магнит холодильника / слабый магнит (гаусс)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) у грани',
	tool_measuring_magnetic_fields_chart_ndfeb: 'Поверхность NdFeB (поле магнита)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0,2–0,6 T типично у грани — не сила в кг',
	tool_measuring_magnetic_fields_chart_mri: 'МРТ (только порядок величины)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1,5–3 T — не паспорт прибора и не вывод о безопасности',
	tool_measuring_magnetic_fields_how_title: 'Как измерить магнитное поле',
	tool_measuring_magnetic_fields_how_body:
		'Выберите прибор, поставьте зонд, прочитайте единицу и пересчитайте. Оценка полосового магнита необязательна и не заменяет измеритель.',
	tool_measuring_magnetic_fields_how_item_1:
		'Подберите прибор: тесламетр или датчик Холла для магнитов (mT–T); магнитометр телефона — только для слабых полей вроде ~50 µT Земли.',
	tool_measuring_magnetic_fields_how_item_2:
		'Поставьте датчик на нужную ось, запишите расстояние от грани и следите за насыщением (дешёвые сенсоры «зашкаливают» у неодима).',
	tool_measuring_magnetic_fields_how_item_3: 'Считайте число и единицу на приборе (гаусс или тесла).',
	tool_measuring_magnetic_fields_how_item_4:
		'Нажмите «Пересчитать» и сравните с таблицей. Пример подставляет 200 G → 0,02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'Если прибора ещё нет, откройте «Оценить поле» и приблизьте поле диска или полосы по марке и размеру — это оценка, не калибровка.',
	tool_measuring_magnetic_fields_formula_title: 'Формула магнитного поля',
	tool_measuring_magnetic_fields_formula_body:
		'Пересчёт идёт через теслу СИ. H появляется только при включённом вакууме/воздухе.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Формула: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT; 1 G = 10⁻⁴ T; 1 kG = 0,1 T; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Напряжённость H (вакуум/воздух): B(T) = μ₀ H(A/m), μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79,577 A/m; 1 G соответствует 1 Oe только в этом приближении. B и H — разные величины.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Диск (однородная осевая намагниченность): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] в метрах. Брусок использует R = √(длина×ширина грани / π); это не конечно-элементная модель.',
	tool_measuring_magnetic_fields_formula_item_4:
		'Поток Φ = B A верен при однородном B, перпендикулярном площади — инструмент выдаёт B, не Φ. Оценка использует остаточный Br, а не полный расчёт момента. Br марок N — середины диапазонов.',
	tool_measuring_magnetic_fields_example_title: 'Пример',
	tool_measuring_magnetic_fields_example:
		'Пример: датчик Холла показывает 200 Гс. Пересчёт → 0,02 T = 20 mT = 2×10⁴ µT = 200 G, примерно 400× поле Земли ~50 µT. Этот гаусс лежит между магнитом холодильника и сильной гранью NdFeB.',
	tool_measuring_magnetic_fields_usecases_title: 'Когда это помогает',
	tool_measuring_magnetic_fields_usecase_1:
		'Лабораторный журнал: тесламетр показывает 200 Гс, в отчёт нужны теслы (измерить поле / напряжённость).',
	tool_measuring_magnetic_fields_usecase_2:
		'Гаусс магнита: сверить показание с таблицей, чтобы насыщение телефона не принять за поле у поверхности.',
	tool_measuring_magnetic_fields_usecase_3:
		'Поле полосового магнита: оценить осевое B по марке и размеру — не сила между двумя магнитами.',
	tool_measuring_magnetic_fields_faq_q1: 'Как измерить магнитное поле?',
	tool_measuring_magnetic_fields_faq_a1:
		'Для магнитов — датчик Холла или тесламетр (mT–T). Поставьте зонд на ось, запишите расстояние и держитесь диапазона: магнитометр телефона насыщается у неодима. Прочитайте единицу и пересчитайте здесь (пример: 200 G → 0,02 T). Динамометр отрыва — другая задача.',
	tool_measuring_magnetic_fields_faq_q2: 'Какая формула поля / напряжённости?',
	tool_measuring_magnetic_fields_faq_a2:
		'Пересчёт B: 1 T = 10⁴ G. В вакууме или воздухе H следует B = μ₀H; 1 G ≈ 1 Oe только в этом приближении. Поток Φ = BA здесь не считается.',
	tool_measuring_magnetic_fields_faq_q3: 'Гаусс магнита и таблица напряжённости — в чём разница?',
	tool_measuring_magnetic_fields_faq_a3:
		'Гаусс — это B в этих единицах. Таблица — порядки (Земля, холодильник, NdFeB), а не магазинная таблица силы отрыва в кг.',
	tool_measuring_magnetic_fields_faq_q4: 'Сила и поле — одно и то же?',
	tool_measuring_magnetic_fields_faq_a4:
		'Нет. Здесь пересчитывается и оценивается B. Сила (между двумя магнитами или F = qvB) — другой расчёт и здесь не решается.',
	tool_measuring_magnetic_fields_faq_q5: 'Можно ли нарисовать силовые линии или однородное поле?',
	tool_measuring_magnetic_fields_faq_a5:
		'Интерактивной схемы нет. Качественно осевое B полосового магнита падает с расстоянием. Однородное поле — идеализация; магниты холодильника и диски сильно неоднородны.',
	tool_measuring_magnetic_fields_disclaimer:
		'Результаты — учебный пересчёт и геометрическая оценка, не калиброванное измерение и не медицинский, имплантный или МРТ-совет по безопасности.',
	tool_measuring_magnetic_fields_references:
		'Брошюра СИ BIPM (тесла); NIST CODATA μ₀; FAQ NOAA по геомагнетизму для порядка поля Земли.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — брошюра СИ (тесла)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — магнитная проницаемость вакуума μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — FAQ по геомагнетизму',
};

export default ru;
