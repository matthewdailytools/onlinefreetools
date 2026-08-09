/**
 * i18n tool shard (how-to-calculate-concrete / ru).
 * Русский: калькулятор бетона / объём — самостоятельная перепись.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_concrete_title: 'Калькулятор бетона — оценка объёма бетона',
	tool_concrete_description:
		'Оцените объём бетона для плиты, колонны или цилиндра по длине, ширине и толщине (или диаметру и высоте). Пример: плита 5 м × 4 м × 0.1 м → 2.0 м³. Число мешков опционально: 0.015 м³ (или 0.45 фут³) на мешок — допущение указано на странице. Счёт в браузере; числа остаются на устройстве и не загружаются на сервер.',
	tool_concrete_article:
		'Калькулятор оценивает объём заливки простой геометрией. Выберите плиту, прямоугольную колонну или цилиндр, введите положительные размеры в метрах или футах и получите м³ или фут³. Мешки опциональны и зависят от объёма мешка, указанного под результатом.',
	tool_concrete_calculate: 'Рассчитать',
	tool_concrete_sample: 'Пример',
	tool_concrete_clear: 'Очистить',
	tool_concrete_shape_label: 'Форма',
	tool_concrete_shape_slab: 'Плита',
	tool_concrete_shape_column: 'Колонна',
	tool_concrete_shape_cylinder: 'Цилиндр',
	tool_concrete_unit_label: 'Единицы',
	tool_concrete_unit_m: 'Метры (м)',
	tool_concrete_unit_ft: 'Футы (ft)',
	tool_concrete_length_label: 'Длина',
	tool_concrete_width_label: 'Ширина',
	tool_concrete_thickness_label: 'Толщина',
	tool_concrete_height_label: 'Высота',
	tool_concrete_diameter_label: 'Диаметр',
	tool_concrete_length_ph: 'напр. 5',
	tool_concrete_width_ph: 'напр. 4',
	tool_concrete_thickness_ph: 'напр. 0.1',
	tool_concrete_height_ph: 'напр. 2.4',
	tool_concrete_diameter_ph: 'напр. 0.3',
	tool_concrete_bags_check: 'Оценить число мешков (опционально)',
	tool_concrete_result_volume: 'Объём',
	tool_concrete_result_bags: 'Мешки (прибл.)',
	tool_concrete_bags_note:
		'Допущение по мешку: 0.015 м³ в метрическом режиме или 0.45 фут³ в футах. Реальные мешки зависят от марки и смеси — округляйте вверх и уточняйте у поставщика.',
	tool_concrete_err_dims: 'Введите положительные числа для каждого размера.',
	tool_concrete_how_title: 'Как пользоваться',
	tool_concrete_how_body:
		'Выберите форму и единицы, затем введите размеры. Для плиты и прямоугольной колонны: длина × ширина × толщина (или высота); для цилиндра: π × (диаметр/2)² × высота. При включённых мешках объём делится на указанный объём мешка и округляется вверх. Всё в вкладке браузера; на сервер ничего не уходит.',
	tool_concrete_formula_title: 'Формулы и допущения',
	tool_concrete_formula_body: 'Объёмы считаются для замкнутых геометрических тел:',
	tool_concrete_formula_item_1: 'Плита: V = длина × ширина × толщина.',
	tool_concrete_formula_item_2: 'Прямоугольная колонна: V = длина × ширина × высота.',
	tool_concrete_formula_item_3:
		'Цилиндр: V = π × (диаметр ÷ 2)² × высота. Мешки = ceil(V ÷ объём мешка) при 0.015 м³ или 0.45 фут³.',
	tool_concrete_example_title: 'Пример',
	tool_concrete_example:
		'Пример (плита, метры): 5 м × 4 м × 0.1 м → V = 2.0 м³. При 0.015 м³/мешок → ≈ 134 мешка.',
	tool_concrete_usecases_title: 'Когда пригодится',
	tool_concrete_usecase_1: 'Грубая оценка плиты двора или гаража перед заказом товарного бетона.',
	tool_concrete_usecase_2: 'Подсчёт мешков для столбов забора или малых цилиндрических фундаментов.',
	tool_concrete_usecase_3: 'Сверка сметы подрядчика с простой геометрией Д×Ш×Т.',
	tool_concrete_faq_q1: 'Какая формула у режима плиты?',
	tool_concrete_faq_a1: 'Объём плиты = длина × ширина × толщина. Пример 5 × 4 × 0.1 м даёт 2.0 м³.',
	tool_concrete_faq_q2: 'Как считаются мешки?',
	tool_concrete_faq_a2:
		'Мешки = ceil(объём ÷ объём мешка). Метрика: 0.015 м³; футы: 0.45 фут³. Плановое допущение, не этикетка бренда.',
	tool_concrete_faq_q3: 'Цилиндру нужен радиус или диаметр?',
	tool_concrete_faq_a3: 'Введите внешний диаметр; радиус = диаметр ÷ 2 в формуле V = π r² h.',
	tool_concrete_faq_q4: 'Загружаются ли мои числа?',
	tool_concrete_faq_a4: 'Нет. Расчёт в браузере на вашем устройстве, без загрузки на сервер.',
	tool_concrete_references: 'Коэффициенты NIST SP 811; вводные материалы Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (пересчёт единиц)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — о бетоне',
};

export default ru;
