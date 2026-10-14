/**
 * i18n tool shard (flip-image / ru).
 * Русский: поиск «отзеркалить изображение / перевернуть фото»;
 * кнопки Перевернуть / Скачать. Набор ключей обязан совпадать с en.ts один в один.
 */
import type { SiteLangDict } from '../../../types';

/** Русский словарь инструмента (зеркало по осям, Canvas в вкладке, без загрузки на сервер). */
const ru: SiteLangDict = {
	tool_flip_image_title: 'Перевернуть изображение — зеркало по горизонтали или вертикали',
	tool_flip_image_desc:
		'Отзеркальте фото влево-вправо или сверху-вниз в браузере и скачайте JPEG, WebP или PNG — без загрузки на сервер.',
	tool_flip_image_description:
		'Переверните фото зеркалом по горизонтали или вертикали во вкладке — удобно поправить селфи. Шаги: выберите файл, отметьте направление, Перевернуть, затем Скачать. Пример: сетка A/B/C/D → горизонталь уводит A вправо. Файл на устройстве, без загрузки на сервер.',
	tool_flip_image_choose_file: 'Выбрать изображение',
	tool_flip_image_drop_hint: 'Или перетащите сюда JPEG, PNG, WebP или GIF. Обработка идёт в этой вкладке.',
	tool_flip_image_flip: 'Перевернуть',
	tool_flip_image_download: 'Скачать',
	tool_flip_image_sample: 'Загрузить пример',
	tool_flip_image_clear: 'Очистить',
	tool_flip_image_flip_h: 'По горизонтали',
	tool_flip_image_flip_v: 'По вертикали',
	tool_flip_image_advanced: 'Дополнительные настройки (по желанию)',
	tool_flip_image_format_label: 'Формат файла',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint:
		'WebP даёт малый размер и прозрачность. PNG без потерь. JPEG требует цвет фона.',
	tool_flip_image_quality_label: 'Качество',
	tool_flip_image_quality_hint: 'Действует только для JPEG и WebP. PNG ползунок игнорирует.',
	tool_flip_image_jpeg_bg_label: 'Фон для JPEG',
	tool_flip_image_jpeg_bg_hint: 'Заливает прозрачные пиксели перед экспортом в JPEG. По умолчанию белый.',
	tool_flip_image_preview_label: 'Превью',
	tool_flip_image_progress: 'Переворачиваем изображение…',
	tool_flip_image_step_decode: 'Чтение',
	tool_flip_image_step_flip: 'Зеркало пикселей',
	tool_flip_image_step_encode: 'Кодирование',
	tool_flip_image_decode_step: 'Читаем изображение…',
	tool_flip_image_flip_step: 'Применяем зеркальное преобразование…',
	tool_flip_image_encode_step: 'Кодируем {fmt}…',
	tool_flip_image_elapsed: 'Прошло {s} с',
	tool_flip_image_empty: 'Сначала выберите изображение.',
	tool_flip_image_no_flip: 'Отметьте «По горизонтали» и/или «По вертикали».',
	tool_flip_image_err_decode: 'Не удалось прочитать файл. Попробуйте JPEG, PNG или WebP.',
	tool_flip_image_err_encode: 'Не удалось сохранить. Возьмите меньший файл или другой формат.',
	tool_flip_image_warn_large: 'Большой файл (>25 МБ) — может тормозить.',
	tool_flip_image_warn_edge: 'Сторона больше ~8192 px — в части браузеров возможна ошибка.',
	tool_flip_image_warn_animation: 'Анимированный GIF: берётся только первый кадр.',
	tool_flip_image_status_working: 'Работаем…',
	tool_flip_image_status_done: 'Готово — нажмите Скачать, чтобы сохранить.',
	tool_flip_image_stats_tpl: 'Готово {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'Как перевернуть изображение',
	tool_flip_image_how_body:
		'Это настоящее зеркало растра: пиксели перерисовываются, а не просто «переворачиваются» стилем CSS. Потом файл перекодируется в формат из дополнительных настроек.',
	tool_flip_image_how_item_1: 'Нажмите «Выбрать изображение» или перетащите JPEG, PNG, WebP либо GIF в область.',
	tool_flip_image_how_item_2:
		'Отметьте «По горизонтали» и/или «По вертикали» — превью обновляется сразу.',
	tool_flip_image_how_item_3:
		'При желании откройте дополнительные настройки: JPEG, WebP или PNG, качество и фон для JPEG.',
	tool_flip_image_how_item_4: 'Нажмите Перевернуть, дождитесь полосы прогресса, затем Скачать.',
	tool_flip_image_why_choose_title: 'Зачем переворачивать изображение здесь',
	tool_flip_image_why_choose_item_1:
		'Сразу видно в превью, куда уедет метка, до того как сохранять файл.',
	tool_flip_image_why_choose_item_2:
		'Обе оси за один проход: две галочки на прямоугольном фото дают эффект поворота на 180°.',
	tool_flip_image_why_choose_item_3:
		'Экспорт в JPEG / WebP / PNG с качеством и заливкой фона для JPEG.',
	tool_flip_image_why_choose_item_4:
		'Мягкие предупреждения про огромные файлы, слишком длинные стороны и GIF (только первый кадр).',
	tool_flip_image_why_choose_item_5:
		'Всё остаётся во вкладке: фото не уходит на наш сервер, байты файла — на устройстве.',
	tool_flip_image_rules_title: 'Правила зеркала',
	tool_flip_image_rules_body:
		'Холст того же размера, что исходник; выбранная ось отражается, затем файл кодируется для скачивания.',
	tool_flip_image_rules_item_1: 'Горизонталь: отражение относительно вертикальной оси (лево↔право).',
	tool_flip_image_rules_item_2: 'Вертикаль: отражение относительно горизонтальной оси (верх↔низ).',
	tool_flip_image_rules_item_3: 'Оба флажка = для прямоугольника то же, что поворот на 180° (углы меняются местами).',
	tool_flip_image_rules_item_4:
		'У анимированного GIF — только первый кадр; PNG/WebP сохраняют прозрачность; JPEG заливает фон.',
	tool_flip_image_rules_item_5:
		'Само зеркало лишь переставляет пиксели; сохранение в JPEG/WebP перекодирует и может изменить размер файла.',
	tool_flip_image_example_title: 'Пример',
	tool_flip_image_example:
		'«Загрузить пример» рисует сетку 480×320 с блоками A B / C D. По умолчанию включена горизонталь: после Перевернуть буква A оказывается справа. Нажмите Скачать или добавьте вертикаль и снова Перевернуть — получится эквивалент поворота на 180°.',
	tool_flip_image_usecases_title: 'Когда пригодится',
	tool_flip_image_usecase_1:
		'Поправить селфи с фронтальной камеры, чтобы надпись на футболке читалась нормально.',
	tool_flip_image_usecase_2:
		'Поменять стороны в макете товара, чтобы кнопка или призыв оказались с нужной стороны.',
	tool_flip_image_usecase_3: 'Выровнять отсканированную страницу, снятую вверх ногами — галочка «По вертикали».',
	tool_flip_image_usecase_4:
		'Сделать зеркальный вариант макета для печати, не открывая десктопный редактор.',
	tool_flip_image_faq_q1: 'Фото загружается на сервер?',
	tool_flip_image_faq_a1:
		'Нет. Чтение, зеркало и экспорт идут во вкладке браузера. Скрипты подгружаются с vendor-папки этого сайта по необходимости; байты файла остаются на устройстве и не уходят на наш сервер.',
	tool_flip_image_faq_q2: 'Теряется ли качество?',
	tool_flip_image_faq_a2:
		'Само переворачивание только меняет порядок пикселей. Сохранение в JPEG или WebP перекодирует файл. Для без потерь выберите PNG в дополнительных настройках.',
	tool_flip_image_faq_q3: 'Зеркало или поворот?',
	tool_flip_image_faq_a3:
		'Зеркало отражает относительно оси. Поворот крутит на угол. Здесь только зеркало — для шагов по 90° нужен инструмент поворота.',
	tool_flip_image_faq_q4: 'Можно обе оси сразу?',
	tool_flip_image_faq_a4:
		'Да. Отметьте «По горизонтали» и «По вертикали» вместе. На прямоугольном фото это как поворот на 180°.',
	tool_flip_image_faq_q5: 'Что с анимированными GIF?',
	tool_flip_image_faq_a5:
		'Декодируется и зеркалится только первый кадр. Многокадровая анимация в скачанном файле не сохраняется.',
	tool_flip_image_faq_q6: 'Почему JPEG не совпадает с превью?',
	tool_flip_image_faq_a6:
		'У JPEG нет прозрачности: прозрачные пиксели заливаются цветом фона перед кодированием. В превью прозрачность показана шахматкой.',
	tool_flip_image_faq_q7: 'Это обрезка или оттенки серого?',
	tool_flip_image_faq_a7:
		'Нет, страница только зеркалит. Обрезка краёв — в «Обрезке изображения», цвет убрать — в «Оттенках серого» среди связанных инструментов.',
	tool_flip_image_article:
		'Локальное зеркало на Canvas по горизонтали и вертикали: пиксели перерисовываются, а не только CSS-эффектом.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

/** Экспорт по умолчанию: merge:tools вливает словарь в общий ru сайта. */
export default ru;
