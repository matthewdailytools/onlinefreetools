/**
 * i18n tool shard (how-to-calculate-paint / ru).
 * Russian rewrite for поиск «калькулятор краски / сколько краски».
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_paint_title: 'Калькулятор краски — оценка необходимого объёма',
	tool_paint_description:
		'Оцените литры краски по площади стены в м² (или длина × высота × число стен), числу слоёв и укрывистости м²/л (по умолчанию 10). Пример: 40 м², 2 слоя, 10 м²/л → 8 л. Опциональный счёт банок предполагает 3,78 л на банку. Счёт в браузере; числа остаются на устройстве и не загружаются на сервер.',
	tool_paint_article:
		'Переводит площадь стены и укрывистость продукта в оценку литров до покупки. Введите площадь напрямую или соберите из длины, высоты и числа стен.',
	tool_paint_calculate: 'Рассчитать',
	tool_paint_sample: 'Пример',
	tool_paint_clear: 'Очистить',
	tool_paint_mode_label: 'Как задать стену',
	tool_paint_mode_area: 'Площадь (м²)',
	tool_paint_mode_lhw: 'Длина × высота × стены',
	tool_paint_area_label: 'Площадь стены (м²)',
	tool_paint_area_ph: 'напр. 40',
	tool_paint_len_label: 'Длина стены (м)',
	tool_paint_height_label: 'Высота стены (м)',
	tool_paint_walls_label: 'Число стен',
	tool_paint_len_ph: 'напр. 5',
	tool_paint_height_ph: 'напр. 2.5',
	tool_paint_walls_ph: 'напр. 4',
	tool_paint_coats_label: 'Слои',
	tool_paint_coats_ph: 'напр. 2',
	tool_paint_coverage_label: 'Укрывистость (м²/л)',
	tool_paint_coverage_ph: 'напр. 10',
	tool_paint_coverage_hint: '10 м²/л — стартовая оценка; смотрите этикетку банки.',
	tool_paint_cans_label: 'Также показать банки (по 3,78 л)',
	tool_paint_result_liters: 'Нужная краска',
	tool_paint_result_area: 'Использованная площадь',
	tool_paint_result_cans: 'Банок (3,78 л)',
	tool_paint_err_input: 'Введите положительную площадь (или длину, высоту и число стен), слои и укрывистость.',
	tool_paint_how_title: 'Как это работает',
	tool_paint_how_body:
		'Выберите площадь или длина × высота × стены, укажите слои и укрывистость. Литры = площадь × слои ÷ укрывистость. При включённых банках деление на 3,78 с округлением вверх. Всё во вкладке браузера; на сервер ничего не отправляется.',
	tool_paint_formula_title: 'Формула и допущения',
	tool_paint_formula_body: 'Объём считается по площади, слоям и укрывистости с этикетки:',
	tool_paint_formula_item_1: 'Площадь A = прямые м² или длина × высота × число стен (метры).',
	tool_paint_formula_item_2: 'Литры = A × слои ÷ укрывистость (м²/л). По умолчанию 10.',
	tool_paint_formula_item_3: 'Опциональные банки = ceil(литры ÷ 3,78). 3,78 л ≈ 1 галлон США — лишь допущение.',
	tool_paint_example_title: 'Пример',
	tool_paint_example:
		'Пример: 40 м², 2 слоя, 10 м²/л. Литры = 40 × 2 ÷ 10 = 8 л. Банки по 3,78 л → ceil(8 ÷ 3,78) = 3.',
	tool_paint_usecases_title: 'Когда полезно',
	tool_paint_usecase_1: 'Купить краску для внутренних стен, не промахнувшись с объёмом.',
	tool_paint_usecase_2: 'Сравнить один и два слоя, меняя поле слоёв.',
	tool_paint_usecase_3: 'Проверить смету подрядчика простым расчётом площади.',
	tool_paint_faq_q1: 'Можно ли задать длина × высота × стены?',
	tool_paint_faq_a1: 'Да. Если м² неизвестны, соберите площадь из размеров и числа стен на одной странице.',
	tool_paint_faq_q2: 'Что такое укрывистость м²/л?',
	tool_paint_faq_a2: 'Сколько квадратных метров закрывает литр за один слой. Значение 10 — старт; смотрите этикетку.',
	tool_paint_faq_q3: 'Почему банка 3,78 л?',
	tool_paint_faq_a3: 'Это приближение к 1 американскому галлону. Удобно для целых банок, не гарантия каждой марки.',
	tool_paint_faq_q4: 'Загружаются ли мои числа?',
	tool_paint_faq_a4: 'Нет. Расчёт в браузере на устройстве, без загрузки на сервер.',
	tool_paint_references: 'NIST SP 811 — справочник по переводу длин и площадей.',
	tool_paint_ref_nist_label: 'NIST — Special Publication 811 (пересчёт единиц)',
};

export default ru;
