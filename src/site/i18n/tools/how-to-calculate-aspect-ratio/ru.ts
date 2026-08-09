/**
 * i18n tool shard (how-to-calculate-aspect-ratio / ru).
 * Russian rewrite for поиск «соотношение сторон / масштабирование».
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_aspect_ratio_title: 'Калькулятор соотношения сторон — расчёт и масштабирование',
	tool_aspect_ratio_description:
		'Найдите упрощённое соотношение сторон по ширине × высоте и масштабируйте к целевой ширине (или высоте). Пресеты 16:9, 4:3 и 1:1 — опции на одной странице. Пример: 1920×1080 → 16:9; ширина 1280 → высота 720. Счёт в браузере; числа остаются на устройстве и не загружаются на сервер.',
	tool_aspect_ratio_article:
		'Сокращает пару размеров через НОД и сохраняет пропорцию при выборе нового размера экспорта.',
	tool_aspect_ratio_calculate: 'Рассчитать',
	tool_aspect_ratio_sample: 'Пример',
	tool_aspect_ratio_clear: 'Очистить',
	tool_aspect_ratio_preset_label: 'Пресет (необязательно)',
	tool_aspect_ratio_preset_custom: 'Свой',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Ширина',
	tool_aspect_ratio_h_label: 'Высота',
	tool_aspect_ratio_w_ph: 'напр. 1920',
	tool_aspect_ratio_h_ph: 'напр. 1080',
	tool_aspect_ratio_scale_mode_label: 'Масштабировать по',
	tool_aspect_ratio_scale_by_w: 'Целевая ширина',
	tool_aspect_ratio_scale_by_h: 'Целевая высота',
	tool_aspect_ratio_target_w_label: 'Целевая ширина',
	tool_aspect_ratio_target_h_label: 'Целевая высота',
	tool_aspect_ratio_target_w_ph: 'напр. 1280',
	tool_aspect_ratio_target_h_ph: 'напр. 720',
	tool_aspect_ratio_result_ratio: 'Соотношение сторон',
	tool_aspect_ratio_result_scaled: 'Размер после масштабирования',
	tool_aspect_ratio_err_input: 'Введите положительные ширину и высоту и положительный целевой размер для масштабируемой стороны.',
	tool_aspect_ratio_how_title: 'Как это работает',
	tool_aspect_ratio_how_body:
		'Введите ширину и высоту или выберите пресет 16:9 / 4:3 / 1:1. Инструмент упрощает через НОД и считает вторую сторону при задании цели. Всё в вкладке браузера; на сервер ничего не отправляется.',
	tool_aspect_ratio_formula_title: 'Формула и допущения',
	tool_aspect_ratio_formula_body: 'Упрощение и масштаб используют НОД пары ввода:',
	tool_aspect_ratio_formula_item_1: 'g = нод(округл(W), округл(H)). Отношение = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'По ширине: H′ = цельW × H ÷ W. По высоте: W′ = цельH × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Пресеты только подставляют примерные размеры; это не отдельные страницы.',
	tool_aspect_ratio_example_title: 'Пример',
	tool_aspect_ratio_example:
		'Пример: 1920×1080. нод=120 → 16:9. При ширине 1280 высота = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'Когда полезно',
	tool_aspect_ratio_usecase_1: 'Выбрать размер экспорта видео 16:9 без растягивания кадра.',
	tool_aspect_ratio_usecase_2: 'Подогнать холст дизайна под соотношение телефона или монитора.',
	tool_aspect_ratio_usecase_3: 'Превратить известное разрешение в короткую метку соотношения.',
	tool_aspect_ratio_faq_q1: 'Можно ли масштабировать по высоте?',
	tool_aspect_ratio_faq_a1: 'Да. Переключитесь на целевую высоту — ширина посчитается с тем же отношением.',
	tool_aspect_ratio_faq_q2: 'Как упрощается соотношение?',
	tool_aspect_ratio_faq_a2: 'Ширина и высота делятся на НОД после округления; 1920×1080 становится 16:9.',
	tool_aspect_ratio_faq_q3: 'Почему 16:9 только пресет?',
	tool_aspect_ratio_faq_a3: 'Это частая отправная точка; одна страница с опциями лучше почти одинаковых URL.',
	tool_aspect_ratio_faq_q4: 'Загружаются ли мои числа?',
	tool_aspect_ratio_faq_a4: 'Нет. Расчёт в браузере на устройстве, без загрузки на сервер.',
	tool_aspect_ratio_references: 'NIST SP 811 — справочник по переводу длин и единиц.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Special Publication 811 (пересчёт единиц)',
};

export default ru;
