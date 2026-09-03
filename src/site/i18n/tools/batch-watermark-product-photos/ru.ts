/**
 * Фрагмент i18n (batch-watermark-product-photos / ru).
 * H1 следует запросу «Водяной знак на фото товаров пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: один копирайт-штамп на пачке фото карточки. */
const ru: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: 'Низ',
	tool_batch_watermark_product_photos_anchor_bl: 'Низ слева',
	tool_batch_watermark_product_photos_anchor_br: 'Низ справа',
	tool_batch_watermark_product_photos_anchor_label: 'Якорь',
	tool_batch_watermark_product_photos_anchor_mc: 'Центр',
	tool_batch_watermark_product_photos_anchor_ml: 'Середина слева',
	tool_batch_watermark_product_photos_anchor_mr: 'Середина справа',
	tool_batch_watermark_product_photos_anchor_tc: 'Верх',
	tool_batch_watermark_product_photos_anchor_tl: 'Верх слева',
	tool_batch_watermark_product_photos_anchor_tr: 'Верх справа',
	tool_batch_watermark_product_photos_apply: 'Применить ко всем',
	tool_batch_watermark_product_photos_article:
		'Поставьте одну строку копирайта на пачку фото карточки в этой вкладке. Кегль следует короткой стороне каждого кадра, чтобы альбом и портрет попали в один относительный угол. Превью одного кадра, применение ко всем, пропуск слишком маленьких холстов, ZIP. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_batch_watermark_product_photos_chip_draft: 'Косой DRAFT',
	tool_batch_watermark_product_photos_choose_files: 'Выбрать фото',
	tool_batch_watermark_product_photos_clear: 'Очистить',
	tool_batch_watermark_product_photos_col_after: 'После',
	tool_batch_watermark_product_photos_col_before: 'До',
	tool_batch_watermark_product_photos_col_name: 'Файл',
	tool_batch_watermark_product_photos_col_status: 'Статус',
	tool_batch_watermark_product_photos_color_label: 'Цвет',
	tool_batch_watermark_product_photos_desc:
		'Водяной знак на фото товаров пакетом, размер по короткой стороне, превью, применить ко всем, ZIP; файлы остаются на устройстве, без загрузки на сервер.',
	tool_batch_watermark_product_photos_description:
		'Водяной знак на фото товаров пакетом: добавьте пачку фото карточки, штамп размером от короткой стороны, превью одного кадра, примените ко всем, пропускайте крошечные холсты, скачайте ZIP. Шаг: выберите пачку, оставьте угловую метку, превью одного, примените ко всем. Пример: альбом и портрет делят один относительный SAMPLE. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_batch_watermark_product_photos_download_zip: 'Скачать ZIP',
	tool_batch_watermark_product_photos_drop_hint: 'Перетащите JPEG, PNG или WebP карточки (до 20). Штамп остаётся во вкладке.',
	tool_batch_watermark_product_photos_empty: 'Сначала добавьте фото.',
	tool_batch_watermark_product_photos_empty_text: 'Введите текст штампа до применения.',
	tool_batch_watermark_product_photos_err_decode: 'Этот файл не удалось прочитать. Пропущен.',
	tool_batch_watermark_product_photos_err_encode: 'Не удалось записать этот файл. Пропущен.',
	tool_batch_watermark_product_photos_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_batch_watermark_product_photos_err_tiny: 'Короткая сторона меньше 64 px — эта строка пропущена.',
	tool_batch_watermark_product_photos_err_too_many: 'Не больше 20 фото. Лишние не добавлены.',
	tool_batch_watermark_product_photos_example:
		'Загрузить пример кладёт альбомный и портретный блоки, ставит SAMPLE, превью первого, применяет ту же относительную метку к обоим и включает «Скачать ZIP».',
	tool_batch_watermark_product_photos_example_title: 'Пример',
	tool_batch_watermark_product_photos_faq_a1:
		'Нет. Чтение и штамп Canvas идут в этой вкладке. Файлы остаются на устройстве, без загрузки на сервер. Помощник ZIP может грузиться с CDN; ваши фото из вкладки не уходят.',
	tool_batch_watermark_product_photos_faq_a2:
		'Нет. Размер — процент короткой стороны, девять якорей — доли этого холста. Портрет и альбом остаются в одном относительном углу.',
	tool_batch_watermark_product_photos_faq_a3:
		'Нет. Эта страница штампует фото. Водяной знак PDF — другая работа: инструмент PDF, когда нужны страницы, а не JPEG карточки.',
	tool_batch_watermark_product_photos_faq_a4:
		'Добавить текстовый водяной знак — одна фотография с пиксельной подгонкой. Эта страница делит один штамп на пачку, превью одного, затем все в ZIP.',
	tool_batch_watermark_product_photos_faq_a5:
		'Ищут и «штамп на фото оптом». На этом сайте эта работа здесь; второго URL bulk-watermark нет.',
	tool_batch_watermark_product_photos_faq_q1: 'Файлы уходят на сервер?',
	tool_batch_watermark_product_photos_faq_q2: 'Альбом и портрет съезжают?',
	tool_batch_watermark_product_photos_faq_q3: 'Можно ли поставить знак на PDF здесь?',
	tool_batch_watermark_product_photos_faq_q4: 'Чем это отличается от Добавить водяной знак?',
	tool_batch_watermark_product_photos_faq_q5: 'Искал штамп на фото оптом — это эта страница?',
	tool_batch_watermark_product_photos_file_count_tpl: '{n} фото в очереди',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: 'Выход',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'Поставьте пачку в очередь, задайте штамп, превью одного кадра, примените ту же относительную метку ко всем и заберите ZIP.',
	tool_batch_watermark_product_photos_how_item_1: 'Выберите фото карточки, которым нужна одна и та же строка копирайта.',
	tool_batch_watermark_product_photos_how_item_2: 'Задайте текст, угол и процент короткой стороны. По умолчанию SAMPLE справа внизу, 8%.',
	tool_batch_watermark_product_photos_how_item_3: 'Нажмите «Превью одного». Проверьте, что альбом и портрет в одном относительном углу.',
	tool_batch_watermark_product_photos_how_item_4: 'Нажмите «Применить ко всем». Холсты короче 64 px пропускаются. JPEG сначала красит белую подложку.',
	tool_batch_watermark_product_photos_how_item_5: 'Скачайте ZIP, когда хотя бы один файл удался. Одна фотография — «Добавить водяной знак».',
	tool_batch_watermark_product_photos_how_title: 'Как проштамповать пачку',
	tool_batch_watermark_product_photos_opacity_label: 'Непрозрачность',
	tool_batch_watermark_product_photos_pct_label: 'Размер к короткой стороне',
	tool_batch_watermark_product_photos_preview: 'Превью одного',
	tool_batch_watermark_product_photos_rotation_label: 'Угол',
	tool_batch_watermark_product_photos_rules_body:
		'Кегль в пикселях — короткая сторона, умноженная на процент. Якоря — доли этого холста, не фиксированные пиксели.',
	tool_batch_watermark_product_photos_rules_item_1:
		'Штамп по умолчанию: SAMPLE, справа внизу, 8% от min(ширина, высота), непрозрачность 45%. JPEG с белой подложкой.',
	tool_batch_watermark_product_photos_rules_item_2:
		'Короткая сторона меньше 64 px валит эту строку. Пустой текст отключает «Применить ко всем». Сбои чтения пропускаются.',
	tool_batch_watermark_product_photos_rules_item_3:
		'Косой DRAFT кладёт слово плиткой. Повторы в ZIP становятся имя (2).jpg или .png.',
	tool_batch_watermark_product_photos_rules_item_4:
		'Файлы остаются на устройстве, без загрузки на сервер.',
	tool_batch_watermark_product_photos_rules_title: 'Что ожидать',
	tool_batch_watermark_product_photos_sample: 'Загрузить пример',
	tool_batch_watermark_product_photos_status_applying: 'Штампую пачку…',
	tool_batch_watermark_product_photos_status_done: 'Пачка готова — проверьте таблицу и скачайте ZIP.',
	tool_batch_watermark_product_photos_status_ok: 'Проштамповано',
	tool_batch_watermark_product_photos_status_preview: 'Превью — первое фото в очереди.',
	tool_batch_watermark_product_photos_status_skip: 'Пропущен',
	tool_batch_watermark_product_photos_status_tiny: 'Слишком мало',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} готовы · {skip} пропущены',
	tool_batch_watermark_product_photos_text_label: 'Текст штампа',
	tool_batch_watermark_product_photos_title: 'Водяной знак на фото товаров пакетом',
	tool_batch_watermark_product_photos_usecase_1: 'Поставить имя магазина на папку фото карточки до публикации.',
	tool_batch_watermark_product_photos_usecase_2: 'Пометить семплы SAMPLE, чтобы покупатель не взял превью как карточку.',
	tool_batch_watermark_product_photos_usecase_3: 'Добавить строку копирайта на несколько изображений без открытия каждого файла.',
	tool_batch_watermark_product_photos_usecases_title: 'Когда это к месту',
	tool_batch_watermark_product_photos_warn_anim: 'Анимация: штампуется только первый кадр.',
	tool_batch_watermark_product_photos_warn_edge: 'Файл шире или выше 8192 px — будет медленно.',
	tool_batch_watermark_product_photos_warn_large: 'Файл больше 25 МБ — этой вкладке может не хватить памяти.',
};

export default ru;
