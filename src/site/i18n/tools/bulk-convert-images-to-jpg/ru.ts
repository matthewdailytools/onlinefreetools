/**
 * Фрагмент i18n (bulk-convert-images-to-jpg / ru).
 * H1 следует запросу «Конвертировать изображения в JPG пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: когда форма принимает только JPG; разговорный тон инструмента. */
const ru: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Если вложение должно быть .jpg, прогоните пачку фото, PNG-логотипов и HEIC с телефона в этой вкладке: общая подложка под прозрачность, сбойные строки пропускаются, затем ZIP. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'Белый фон',
	tool_bulk_convert_images_to_jpg_choose_files: 'Выбрать изображения',
	tool_bulk_convert_images_to_jpg_clear: 'Очистить',
	tool_bulk_convert_images_to_jpg_col_after: 'После',
	tool_bulk_convert_images_to_jpg_col_before: 'До',
	tool_bulk_convert_images_to_jpg_col_name: 'Файл',
	tool_bulk_convert_images_to_jpg_col_status: 'Статус',
	tool_bulk_convert_images_to_jpg_convert: 'Конвертировать все',
	tool_bulk_convert_images_to_jpg_desc:
		'Конвертировать изображения в JPG пакетом с общей подложкой и скачать ZIP; остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_jpg_description:
		'Конвертировать изображения в JPG пакетом: добавьте фото, PNG-логотипы или HEIC, залейте одну подложку под прозрачность, запишите .jpg здесь, пропустите сбои и скачайте ZIP. Шаг за шагом: выберите пачку, оставьте белую подложку если не просят чёрную, конвертируйте все. Пример: снимок и дырявый логотип на белом дают два .jpg. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_jpg_download_zip: 'Скачать ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'Перетащите PNG, JPEG, WebP, GIF или HEIC (до 20). Конвертация остаётся во вкладке.',
	tool_bulk_convert_images_to_jpg_empty: 'Сначала добавьте изображения.',
	tool_bulk_convert_images_to_jpg_err_decode: 'Файл не удалось прочитать (для HEIC может понадобиться другой браузер). Пропущен.',
	tool_bulk_convert_images_to_jpg_err_encode: 'Не удалось записать .jpg для этого файла. Пропущен.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'Не больше 20 изображений. Лишние не добавлены.',
	tool_bulk_convert_images_to_jpg_example:
		'Загрузить пример кладёт непрозрачный блок и прозрачный логотип, рисует оба на белом, даёт два имени .jpg и включает Скачать ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'Пример',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'Нет. Чтение и запись .jpg идут в этой вкладке. Файлы остаются на устройстве, без загрузки на сервер. Помощник ZIP может подгрузиться с CDN; ваши картинки вкладку не покидают.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Да. PNG в JPG делается здесь: выберите файлы, оставьте белую подложку чтобы дыры не стали чёрными пятнами, конвертируйте все.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'Если браузер не читает HEIC, эта строка пропускается, остальное пакуется. Попробуйте Safari или сначала конвертируйте на телефоне.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'Нет. JPEG и JPG — один и тот же результат. Имена файлов — .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'Здесь меняется только суффикс на JPG. Ужать карточки товара к 200 КБ — это Пакетное сжатие товарных фото.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'Картинки уходят на сервер?',
	tool_bulk_convert_images_to_jpg_faq_q2: 'Как здесь сделать PNG в JPG?',
	tool_bulk_convert_images_to_jpg_faq_q3: 'Что если HEIC в JPG не получится?',
	tool_bulk_convert_images_to_jpg_faq_q4: 'Нужен отдельный JPEG-инструмент кроме JPG?',
	tool_bulk_convert_images_to_jpg_faq_q5: 'Это то же самое, что сжать фото?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} изображений в очереди',
	tool_bulk_convert_images_to_jpg_how_body:
		'Когда форма принимает только JPG, поставьте файлы в очередь, задайте одну подложку для прозрачных пикселей, конвертируйте здесь и заберите ZIP удачных файлов.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Выберите фото, PNG или HEIC, которые форма принимает только как JPG.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Оставьте Белый фон, если не просят чёрный. JPG не хранит дыры.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Чуть снизьте качество, если письмо должно быть лёгким — задача всё равно JPG, а не охота за 200 КБ.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Нажмите Конвертировать все. Нечитаемый HEIC пропускается, остальное становится .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'Скачайте ZIP, когда готов хотя бы один файл. Загрузить пример уже отработал при открытии.',
	tool_bulk_convert_images_to_jpg_how_title: 'Как получить JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Чёрный',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Свой',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Подложка под прозрачность',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'Белый',
	tool_bulk_convert_images_to_jpg_quality_label: 'Качество JPG',
	tool_bulk_convert_images_to_jpg_rules_body:
		'У JPG нет альфа-канала. Каждый файл рисуется на одной подложке и сохраняется как .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Имена выхода всегда заканчиваются на .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Прозрачные пиксели заливаются общей подложкой до записи. Нет режима «без подложки», который оставил бы чёрные пятна без объяснения.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'Сбой чтения или записи пропускает эту строку. Повторы в ZIP становятся имя (2).jpg. Анимация берёт первый кадр.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_jpg_rules_title: 'Какие правила ждать',
	tool_bulk_convert_images_to_jpg_sample: 'Загрузить пример',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Пакет переводится в JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'Пакет готов — проверьте таблицу и скачайте ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG готов',
	tool_bulk_convert_images_to_jpg_status_skip: 'Пропущен',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} готово · {skip} пропущено',
	tool_bulk_convert_images_to_jpg_title: 'Конвертировать изображения в JPG пакетом',
	tool_bulk_convert_images_to_jpg_usecase_1: 'Регистрация отклоняет PNG и принимает только вложение JPG.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Отправить в типографию пачку товарных фото строго как .jpg.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'HEIC с телефона, которые Windows не открывает — конвертируйте то, что этот браузер умеет прочитать.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Когда это к месту',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Анимация: конвертируется только первый кадр.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'Файл шире или выше 8192 px — будет медленно.',
	tool_bulk_convert_images_to_jpg_warn_large: 'Файл больше 25 МБ — этой вкладке может не хватить памяти.',
};

export default ru;
