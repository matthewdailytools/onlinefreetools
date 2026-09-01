/**
 * i18n tool shard (svg-optimizer / ru).
 * H1: оптимизатор SVG.
 */
import type { SiteLangDict } from '../../../types';

/** Русские тексты. */
const ru: SiteLangDict = {
	tool_svg_optimizer_article:
		'Вставьте или перетащите SVG, включите опции очистки и смотрите экономию байт с превью. В духе SVGOMG; всё в браузере — файлы остаются на устройстве, без загрузки на сервер.',
	tool_svg_optimizer_choose_file: 'Выбрать файл SVG',
	tool_svg_optimizer_clear: 'Очистить',
	tool_svg_optimizer_copy: 'Копировать',
	tool_svg_optimizer_desc:
		'Оптимизация SVG в браузере с байтами и превью; без загрузки на сервер.',
	tool_svg_optimizer_description:
		'Оптимизатор SVG: вставьте или перетащите SVG, выберите опции очистки и сравните байты до/после с превью. Пример: при открытии загружается образец и видна экономия после удаления комментариев и метаданных редактора. Копируйте или скачайте результат. Остаётся на устройстве и не отправляется на сервер. Лёгкий браузерный проход, не полный SVGO.',
	tool_svg_optimizer_download: 'Скачать',
	tool_svg_optimizer_drop_hint: 'Или перетащите .svg сюда. Оптимизация в этой вкладке.',
	tool_svg_optimizer_empty: 'Сначала вставьте SVG или выберите файл.',
	tool_svg_optimizer_err_not_svg: 'Не похоже на SVG. Вставьте разметку с корнем <svg>.',
	tool_svg_optimizer_example:
		'Загрузка примера вставляет иконку с XML-комментариями, Inkscape и лишними пробелами. При всех опциях байты уменьшаются, превью совпадает.',
	tool_svg_optimizer_example_title: 'Пример',
	tool_svg_optimizer_faq_a1:
		'Нет. SVG читается и оптимизируется в этой вкладке. На наши серверы не отправляется.',
	tool_svg_optimizer_faq_a2:
		'Лёгкий конвейер (комментарии, метаданные, пробелы, округление, пустые группы). Полный SVGO глубже — используйте при необходимости.',
	tool_svg_optimizer_faq_a3:
		'Удалить комментарии: <!-- … -->. Метаданные редактора: xmlns/атрибуты Inkscape/Sketch и <metadata>. Свернуть пробелы между тегами. Округлить числа до 2 знаков в path. Пустые группы: удалить <g></g>.',
	tool_svg_optimizer_faq_a4:
		'Превью показывает оптимизированный SVG как изображение; разметка не внедряется в DOM страницы.',
	tool_svg_optimizer_faq_q1: 'Загружается ли SVG на сервер?',
	tool_svg_optimizer_faq_q2: 'Чем отличается от SVGO или SVGOMG?',
	tool_svg_optimizer_faq_q3: 'Что делают опции?',
	tool_svg_optimizer_faq_q4: 'Безопасно ли превью?',
	tool_svg_optimizer_how_body:
		'Вставьте или перетащите SVG, настройте опции, проверьте байты и превью, затем копируйте или скачайте. Всё локально в браузере.',
	tool_svg_optimizer_how_item_1: 'Вставьте SVG или перетащите файл .svg.',
	tool_svg_optimizer_how_item_2: 'Опции: комментарии, метаданные, пробелы, десятичные, пустые группы.',
	tool_svg_optimizer_how_item_3: 'Смотрите исходные байты, оптимизированные и процент экономии.',
	tool_svg_optimizer_how_item_4: 'Проверьте превью и скопируйте или скачайте optimized.svg.',
	tool_svg_optimizer_how_title: 'Как это работает',
	tool_svg_optimizer_input_label: 'Ввод SVG',
	tool_svg_optimizer_input_ph: 'Вставьте <svg>…</svg> сюда…',
	tool_svg_optimizer_load_sample: 'Загрузить пример',
	tool_svg_optimizer_opt_collapse_whitespace: 'Свернуть пробелы между тегами',
	tool_svg_optimizer_opt_round_numbers: 'Округлить числа path до 2 знаков',
	tool_svg_optimizer_opt_strip_comments: 'Удалить комментарии XML/HTML',
	tool_svg_optimizer_opt_strip_empty: 'Удалить пустые <g> и лишние пробелы в атрибутах',
	tool_svg_optimizer_opt_strip_metadata: 'Убрать метаданные редактора (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Оптимизировать',
	tool_svg_optimizer_options_label: 'Опции',
	tool_svg_optimizer_output_label: 'Оптимизированный SVG',
	tool_svg_optimizer_preview_label: 'Превью',
	tool_svg_optimizer_rules_body:
		'Браузерная очистка SVG меняет полноту на мгновенный отклик. Проверьте перед релизом.',
	tool_svg_optimizer_rules_item_1:
		'Комментарии и xmlns редактора обычно безопасно удалять для prod-иконок.',
	tool_svg_optimizer_rules_item_2:
		'Округление координат уменьшает файл, но может сдвинуть обводку — смотрите превью.',
	tool_svg_optimizer_rules_item_3:
		'Удаление пустых групп помогает экспортам Sketch/Figma; группы с id/transform сохраняются.',
	tool_svg_optimizer_rules_item_4:
		'Нужно сжать растр? Используйте оптимизатор изображений для PNG/WebP.',
	tool_svg_optimizer_rules_title: 'Что учитывать',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'После',
	tool_svg_optimizer_size_original: 'Исходный',
	tool_svg_optimizer_size_saved: 'Экономия',
	tool_svg_optimizer_stats_tpl: 'Исходный {orig} B → Оптимиз. {opt} B (минус {pct}%)',
	tool_svg_optimizer_status_copied: 'Скопировано в буфер.',
	tool_svg_optimizer_status_done: 'Готово — проверьте байты и превью.',
	tool_svg_optimizer_title: 'Оптимизатор SVG',
	tool_svg_optimizer_usecase_1: 'Уменьшить иконку из Sketch перед коммитом в репозиторий.',
	tool_svg_optimizer_usecase_2: 'Очистить inline SVG на лендинге без установки SVGO.',
	tool_svg_optimizer_usecase_3: 'Убрать комментарии из handoff дизайна с тем же превью.',
	tool_svg_optimizer_usecases_title: 'Когда подходит',
};

export default ru;
