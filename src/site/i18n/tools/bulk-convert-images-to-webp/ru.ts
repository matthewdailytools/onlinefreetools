/**
 * Фрагмент i18n (bulk-convert-images-to-webp / ru).
 * H1 следует запросу «Конвертировать изображения в WebP пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: ресурсы сайта в lossy WebP с сохранением прозрачности. */
const ru: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Если сайту нужен WebP, прогоните PNG-логотипы и фото в этой вкладке в lossy .webp: прозрачность остаётся, если она была в исходнике, строки, которые браузер не умеет писать, пропускаются, затем ZIP. Часть почты ещё не принимает WebP — тогда JPG. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Качество 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Выбрать изображения',
	tool_bulk_convert_images_to_webp_clear: 'Очистить',
	tool_bulk_convert_images_to_webp_col_after: 'После',
	tool_bulk_convert_images_to_webp_col_before: 'До',
	tool_bulk_convert_images_to_webp_col_name: 'Файл',
	tool_bulk_convert_images_to_webp_col_status: 'Статус',
	tool_bulk_convert_images_to_webp_convert: 'Конвертировать все',
	tool_bulk_convert_images_to_webp_desc:
		'Конвертировать изображения в WebP пакетом с lossy-качеством и альфой, если она есть в исходнике, скачать ZIP; файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_webp_description:
		'Конвертировать изображения в WebP пакетом: добавьте PNG-логотипы или фото, закодируйте lossy WebP в этой вкладке без JPEG-подложки, пропускайте то, что браузер не пишет, скачайте ZIP. Шаг: выберите пачку, держите качество около 0.8, конвертируйте все. Пример: непрозрачное фото и логотип с дыркой становятся .webp. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_webp_download_zip: 'Скачать ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'Перетащите JPEG, PNG, WebP или GIF (до 20). Конвертация остаётся во вкладке.',
	tool_bulk_convert_images_to_webp_empty: 'Сначала добавьте изображения.',
	tool_bulk_convert_images_to_webp_err_decode: 'Этот файл не удалось прочитать. Пропущен.',
	tool_bulk_convert_images_to_webp_err_encode: 'Не удалось записать WebP для этого файла. Пропущен.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_bulk_convert_images_to_webp_err_too_many: 'Не больше 20 изображений. Лишние не добавлены.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'Этот браузер не вернул WebP. Строка пропускается, JPEG не пишется.',
	tool_bulk_convert_images_to_webp_example:
		'Загрузить пример кладёт непрозрачный блок и прозрачный логотип, пишет два .webp и включает «Скачать ZIP». Дырка логотипа остаётся.',
	tool_bulk_convert_images_to_webp_example_title: 'Пример',
	tool_bulk_convert_images_to_webp_faq_a1:
		'Нет. Чтение и запись WebP идут в этой вкладке. Файлы остаются на устройстве, без загрузки на сервер. Помощник ZIP может грузиться с CDN; ваши картинки из вкладки не уходят.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Да. png в webp — эта страница: выберите файлы, держите качество около 0.8, конвертируйте все. Дырки остаются, если у PNG была альфа.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Некоторые почтовые клиенты и CMS ещё отвергают WebP. Для таких вложений используйте «Конвертировать изображения в JPG пакетом».',
	tool_bulk_convert_images_to_webp_faq_a4:
		'Эта строка пропускается. Страница не пишет JPEG тайком. Попробуйте свежие Chrome, Edge или Firefox.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'Нет. Сохраняется только первый кадр как статичный WebP, и эта строка помечается.',
	tool_bulk_convert_images_to_webp_faq_q1: 'Файлы уходят на сервер?',
	tool_bulk_convert_images_to_webp_faq_q2: 'Как сделать png в webp здесь?',
	tool_bulk_convert_images_to_webp_faq_q3: 'Почта примет эти WebP?',
	tool_bulk_convert_images_to_webp_faq_q4: 'Если браузер не умеет писать WebP?',
	tool_bulk_convert_images_to_webp_faq_q5: 'Анимированные GIF остаются анимированными?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} изображений в очереди',
	tool_bulk_convert_images_to_webp_how_body:
		'Выберите изображения, которые должны стать WebP для сайта, конвертируйте здесь без JPEG-подложки, затем заберите ZIP удавшихся файлов.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Выберите фото или PNG-стикеры, которые должны быть WebP на сайте.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Держите качество около 0.8, если не нужен более лёгкий файл. JPEG-подложки нет.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Нажмите «Конвертировать все». Если toBlob не WebP, строка падает, а не пишет JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: 'JPG для почты? «Конвертировать изображения в JPG пакетом». Без потерь PNG? «Конвертировать изображения в PNG пакетом».',
	tool_bulk_convert_images_to_webp_how_item_5: 'Скачайте ZIP, когда хотя бы один файл удался. «Загрузить пример» уже отработал при открытии.',
	tool_bulk_convert_images_to_webp_how_title: 'Как получить WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'Качество WebP',
	tool_bulk_convert_images_to_webp_rules_body:
		'Выход всегда WebP. Эта страница не кладёт прозрачность на JPEG-подложку и не откатывается к JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'Альфа сохраняется, если она есть в исходнике. У JPEG альфы нет.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'Качество по умолчанию 0.8. Снижайте только если бюджет сайта просит файл легче.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'Если браузер не пишет WebP, строка пропускается. Сбои чтения пропускаются. Повторы в ZIP становятся имя (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_webp_rules_title: 'Что ожидать',
	tool_bulk_convert_images_to_webp_sample: 'Загрузить пример',
	tool_bulk_convert_images_to_webp_status_compressing: 'Конвертирую пачку в WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'Пачка готова — проверьте таблицу и скачайте ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP готов',
	tool_bulk_convert_images_to_webp_status_skip: 'Пропущен',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} готовы · {skip} пропущены',
	tool_bulk_convert_images_to_webp_title: 'Конвертировать изображения в WebP пакетом',
	tool_bulk_convert_images_to_webp_usecase_1: 'Ужать герои и превью сайта в WebP без выпадающего списка форматов.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png в webp для стикеров, у которых уже есть дырки.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Оставляйте JPEG для почты, если клиент ещё отвергает WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Когда это к месту',
	tool_bulk_convert_images_to_webp_warn_anim: 'Анимация: сохраняется только первый кадр как статичный WebP.',
	tool_bulk_convert_images_to_webp_warn_edge: 'Файл шире или выше 8192 px — будет медленно.',
	tool_bulk_convert_images_to_webp_warn_large: 'Файл больше 25 МБ — этой вкладке может не хватить памяти.',
};

export default ru;
