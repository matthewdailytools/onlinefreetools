/**
 * Фрагмент i18n (bulk-convert-images-to-png / ru).
 * H1 следует запросу «Конвертировать изображения в PNG пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: скриншоты и логотипы, которые должны стать PNG с сохранением прозрачности. */
const ru: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Если сдача должна быть PNG, прогоните JPEG-фото, скриншоты и логотипы с дыркой в этой вкладке: прозрачность остаётся, если она была в исходнике, сбойные строки пропускаются, затем ZIP. JPEG в PNG часто тяжелеет; таблица это показывает. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_png_choose_files: 'Выбрать изображения',
	tool_bulk_convert_images_to_png_clear: 'Очистить',
	tool_bulk_convert_images_to_png_col_after: 'После',
	tool_bulk_convert_images_to_png_col_before: 'До',
	tool_bulk_convert_images_to_png_col_name: 'Файл',
	tool_bulk_convert_images_to_png_col_status: 'Статус',
	tool_bulk_convert_images_to_png_convert: 'Конвертировать все',
	tool_bulk_convert_images_to_png_desc:
		'Конвертировать изображения в PNG пакетом, сохранить прозрачность, если она есть в исходнике, скачать ZIP; файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_png_description:
		'Конвертировать изображения в PNG пакетом: добавьте JPEG или скриншоты, перекодируйте в PNG в этой вкладке без JPEG-подложки, пропускайте сбои и скачайте ZIP. Шаг: выберите пачку, конвертируйте все, посмотрите в таблице, не раздулся ли JPEG как PNG. Пример: непрозрачное фото и логотип с дыркой становятся .png. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_png_download_zip: 'Скачать ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'Перетащите JPEG, PNG, WebP или GIF (до 20). Конвертация остаётся во вкладке.',
	tool_bulk_convert_images_to_png_empty: 'Сначала добавьте изображения.',
	tool_bulk_convert_images_to_png_err_decode: 'Этот файл не удалось прочитать. Пропущен.',
	tool_bulk_convert_images_to_png_err_encode: 'Не удалось записать PNG для этого файла. Пропущен.',
	tool_bulk_convert_images_to_png_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_bulk_convert_images_to_png_err_too_many: 'Не больше 20 изображений. Лишние не добавлены.',
	tool_bulk_convert_images_to_png_example:
		'Загрузить пример кладёт JPEG-блок и прозрачный логотип, пишет два .png и включает «Скачать ZIP». Строка JPEG часто показывает PNG крупнее.',
	tool_bulk_convert_images_to_png_example_title: 'Пример',
	tool_bulk_convert_images_to_png_faq_a1:
		'Нет. Чтение и запись PNG идут в этой вкладке. Файлы остаются на устройстве, без загрузки на сервер. Помощник ZIP может грузиться с этого сайта; ваши картинки из вкладки не уходят.',
	tool_bulk_convert_images_to_png_faq_a2:
		'Нет. JPEG никогда не хранил дырки. jpg в png даёт обёртку PNG; фон остаётся непрозрачным. Настоящие дырки живут только если в исходнике уже был альфа-канал.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG без потерь. Фото-JPEG часто становится тяжелее. Таблица помечает «крупнее». Уменьшайте пиксели в «Сжать PNG-изображения пакетом» или оставайтесь на JPEG, если PNG не нужен.',
	tool_bulk_convert_images_to_png_faq_a4:
		'Сжатие PNG — для файлов, которые уже PNG и должны остаться PNG, но меньше. Эта страница меняет суффикс на PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'Нет. Сохраняется только первый кадр как статичный PNG, и эта строка помечается.',
	tool_bulk_convert_images_to_png_faq_q1: 'Файлы уходят на сервер?',
	tool_bulk_convert_images_to_png_faq_q2: 'jpg в png возвращает прозрачность?',
	tool_bulk_convert_images_to_png_faq_q3: 'Почему PNG больше, чем JPEG?',
	tool_bulk_convert_images_to_png_faq_q4: 'Чем это отличается от сжатия PNG?',
	tool_bulk_convert_images_to_png_faq_q5: 'Анимированные GIF остаются анимированными?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} изображений в очереди',
	tool_bulk_convert_images_to_png_how_body:
		'Выберите изображения, которые должны стать PNG, конвертируйте здесь без подложки, затем заберите ZIP удавшихся файлов.',
	tool_bulk_convert_images_to_png_how_item_1: 'Выберите скриншоты или логотипы, которые обязаны быть PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'Нет переключателя белой подложки — дырки остаются, если в исходнике есть альфа.',
	tool_bulk_convert_images_to_png_how_item_3: 'Нажмите «Конвертировать все». JPEG станет непрозрачным PNG; таблица предупредит, если файл вырос.',
	tool_bulk_convert_images_to_png_how_item_4: 'Нужен JPG? «Конвертировать изображения в JPG пакетом». Меньший PNG? «Сжать PNG-изображения пакетом».',
	tool_bulk_convert_images_to_png_how_item_5: 'Скачайте ZIP, когда хотя бы один файл удался. «Загрузить пример» уже отработал при открытии.',
	tool_bulk_convert_images_to_png_how_title: 'Как получить PNG',
	tool_bulk_convert_images_to_png_max_edge_label: 'Макс. сторона',
	tool_bulk_convert_images_to_png_resize_on: 'Ограничить длинную сторону',
	tool_bulk_convert_images_to_png_rules_body:
		'Выход всегда PNG. Эта страница не кладёт прозрачность на JPEG-подложку.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'Альфа сохраняется, если она есть в исходнике. У JPEG альфы нет.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'Необязательное уменьшение длинной стороны по умолчанию выключено, чтобы конвертация тайно не меняла размер.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'Если PNG больше исходника, строка это говорит. Сбои чтения пропускаются. Повторы в ZIP становятся имя (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_convert_images_to_png_rules_title: 'Что ожидать',
	tool_bulk_convert_images_to_png_sample: 'Загрузить пример',
	tool_bulk_convert_images_to_png_status_compressing: 'Конвертирую пачку в PNG…',
	tool_bulk_convert_images_to_png_status_done: 'Пачка готова — проверьте таблицу и скачайте ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'Крупнее исходника',
	tool_bulk_convert_images_to_png_status_ok: 'PNG готов',
	tool_bulk_convert_images_to_png_status_skip: 'Пропущен',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} готовы · {larger} крупнее · {skip} пропущены',
	tool_bulk_convert_images_to_png_title: 'Конвертировать изображения в PNG пакетом',
	tool_bulk_convert_images_to_png_usecase_1: 'Сложить скриншоты в PNG для передачи дизайнеру.',
	tool_bulk_convert_images_to_png_usecase_2: 'Свести стикеры к PNG, когда в исходнике уже есть дырки.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg в png, когда CMS принимает только PNG — фотофайл часто вырастет.',
	tool_bulk_convert_images_to_png_usecases_title: 'Когда это к месту',
	tool_bulk_convert_images_to_png_warn_anim: 'Анимация: сохраняется только первый кадр как статичный PNG.',
	tool_bulk_convert_images_to_png_warn_edge: 'Файл шире или выше 8192 px — будет медленно.',
	tool_bulk_convert_images_to_png_warn_large: 'Файл больше 25 МБ — этой вкладке может не хватить памяти.',
	tool_bulk_convert_images_to_png_warn_larger: 'Некоторые PNG крупнее исходников. Для фото-JPEG это нормально.',
};

export default ru;
