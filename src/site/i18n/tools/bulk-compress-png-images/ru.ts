/**
 * Фрагмент i18n (bulk-compress-png-images / ru).
 * H1 следует поисковой фразе «Сжать PNG-изображения пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: прозрачные логотипы остаются PNG на устройстве, без загрузки на сервер. */
const ru: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Сожмите в этой вкладке папку логотипов или UI-вырезок PNG, сохраните прозрачность, пропустите сбои и скачайте ZIP. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Только перекодировать',
	tool_bulk_compress_png_images_choose_files: 'Выбрать PNG-изображения',
	tool_bulk_compress_png_images_clear: 'Очистить',
	tool_bulk_compress_png_images_col_after: 'После',
	tool_bulk_compress_png_images_col_before: 'До',
	tool_bulk_compress_png_images_col_name: 'Файл',
	tool_bulk_compress_png_images_col_status: 'Статус',
	tool_bulk_compress_png_images_compress: 'Сжать все',
	tool_bulk_compress_png_images_desc:
		'Сжать PNG оптом, сохранить прозрачность, скачать ZIP — остаются на устройстве, без загрузки на сервер.',
	tool_bulk_compress_png_images_description:
		'Сжать PNG-изображения пакетом: добавьте логотипы или UI-вырезки, сохраните прозрачность, при необходимости ограничьте длинную сторону, пересохраните PNG на этой вкладке, пропустите сбои и скачайте ZIP. Шаги: выберите пакет, оставьте чип 1024 px если иконки должны уменьшиться, сожмите все и смотрите таблицу. Пример: два шахматных образца остаются PNG с дырами. Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_compress_png_images_download_zip: 'Скачать ZIP',
	tool_bulk_compress_png_images_drop_hint: 'Перетащите PNG (до 20). Другие картинки тоже выйдут как PNG. Всё остаётся на этой вкладке.',
	tool_bulk_compress_png_images_empty: 'Сначала добавьте PNG-изображения.',
	tool_bulk_compress_png_images_err_decode: 'Это изображение не удалось декодировать. Его пропустили.',
	tool_bulk_compress_png_images_err_encode: 'Это изображение не удалось записать как PNG. Его пропустили.',
	tool_bulk_compress_png_images_err_fflate: 'Не удалось собрать ZIP в этом браузере. Попробуйте другой современный браузер.',
	tool_bulk_compress_png_images_err_too_many: 'Не больше 20 файлов за раз. Лишние не добавлены.',
	tool_bulk_compress_png_images_example:
		'Загрузить пример кладёт два прозрачных шахматных PNG, перекодирует их как PNG, заполняет таблицу и включает Скачать ZIP. Повторяющиеся имена становятся name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Пример',
	tool_bulk_compress_png_images_faq_a1:
		'Нет. Декодирование и запись PNG идут на этой вкладке. Файлы остаются на устройстве, без загрузки на сервер. Помощник ZIP может подгружаться с этого сайта; ваши картинки вкладку не покидают.',
	tool_bulk_compress_png_images_faq_a2:
		'Нет. Выход всегда PNG. JPEG-подложки нет. Если можно JPEG и нужны меньше товарные фото — откройте пакетное сжатие товарных фото.',
	tool_bulk_compress_png_images_faq_a3:
		'Да. Пиксели рисуются без сплошного фона и сохраняются как PNG, поэтому дыры остаются дырами.',
	tool_bulk_compress_png_images_faq_a4:
		'Часто, если длинную сторону не уменьшали. Этот PNG с холста не оптимизирует палитру. Индексированный цвет может дать полосы после перекодирования.',
	tool_bulk_compress_png_images_faq_a5:
		'Нет. Сохраняется только первый кадр как статичный PNG.',
	tool_bulk_compress_png_images_faq_q1: 'Сжать png оптом — это загрузка на сервер?',
	tool_bulk_compress_png_images_faq_q2: 'Онлайн-сжатие PNG превращает файлы в JPEG?',
	tool_bulk_compress_png_images_faq_q3: 'Можно сжать png без потери прозрачности?',
	tool_bulk_compress_png_images_faq_q4: 'Почему уменьшить png почти не помогло по весу?',
	tool_bulk_compress_png_images_faq_q5: 'Анимированный GIF останется анимированным?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} файлов в очереди',
	tool_bulk_compress_png_images_how_body:
		'Если папка логотипов должна остаться PNG, задайте общий потолок длинной стороны при необходимости, сожмите здесь и заберите ZIP удачных файлов.',
	tool_bulk_compress_png_images_how_item_1: 'Выберите PNG-логотипы или вырезки, которым нужна прозрачность.',
	tool_bulk_compress_png_images_how_item_2: 'Чип 1024 px — когда иконки должны уменьшиться; Только перекодировать — когда размер в пикселях нельзя менять.',
	tool_bulk_compress_png_images_how_item_3: 'Нажмите Сжать все. Каждая строка остаётся PNG. Сбои пропускаются, остальное упаковывается.',
	tool_bulk_compress_png_images_how_item_4: 'Если фотоподобный PNG почти не худеет, таблица предупредит — JPEG на странице товарных фото обычно легче.',
	tool_bulk_compress_png_images_how_item_5: 'Скачайте ZIP, когда хотя бы один файл удался. Загрузить пример уже отработал при первом показе.',
	tool_bulk_compress_png_images_how_title: 'Как обработать пакет',
	tool_bulk_compress_png_images_max_edge_label: 'Длинная сторона',
	tool_bulk_compress_png_images_resize_on: 'Ограничить длинную сторону',
	tool_bulk_compress_png_images_rules_body:
		'JPEG-фон не рисуется. Вес обычно падает при уменьшении длинной стороны, а не при простом пересохранении.',
	tool_bulk_compress_png_images_rules_item_1:
		'Выходной MIME — PNG. Альфа не сплющивается. Ползунка качества нет: PNG здесь без потерь.',
	tool_bulk_compress_png_images_rules_item_2:
		'Длинная сторона уменьшается пропорционально и никогда не увеличивается. Только перекодировать сохраняет пиксели и может почти не менять байты.',
	tool_bulk_compress_png_images_rules_item_3:
		'Сбой декодирования или записи пропускает строку. Дубликаты в ZIP становятся name (2).png. Индексированные палитры могут дать полосы.',
	tool_bulk_compress_png_images_rules_item_4:
		'Файлы остаются на устройстве, без загрузки на сервер.',
	tool_bulk_compress_png_images_rules_title: 'Какие границы ждать',
	tool_bulk_compress_png_images_sample: 'Загрузить пример',
	tool_bulk_compress_png_images_status_compressing: 'Сжимаем пакет PNG…',
	tool_bulk_compress_png_images_status_done: 'Пакет готов — смотрите таблицу, затем скачайте ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG готов',
	tool_bulk_compress_png_images_status_same: 'Всё ещё большой',
	tool_bulk_compress_png_images_status_skip: 'Пропущен',
	tool_bulk_compress_png_images_summary_tpl: '{ok} готовы · {same} почти те же · {skip} пропущены',
	tool_bulk_compress_png_images_title: 'Сжать PNG-изображения пакетом',
	tool_bulk_compress_png_images_usecase_1: 'Папка прозрачных логотипов, которые витрина должна продолжать отдавать как PNG.',
	tool_bulk_compress_png_images_usecase_2: 'UI-вырезки с общей длинной стороной перед передачей в разработку.',
	tool_bulk_compress_png_images_usecase_3: 'Промо-стикеры с дырами; JPEG залил бы дыры подложкой.',
	tool_bulk_compress_png_images_usecases_title: 'Когда это к месту',
	tool_bulk_compress_png_images_warn_anim: 'Анимированные файлы: сохраняется только первый кадр как статичный PNG.',
	tool_bulk_compress_png_images_warn_edge: 'Файл шире или выше 8192 px — будет медленно.',
	tool_bulk_compress_png_images_warn_large: 'Файл больше 25 МБ — этой вкладке может не хватить памяти.',
	tool_bulk_compress_png_images_warn_same: 'Некоторые PNG почти не уменьшились. Сократите длинную сторону или используйте сжатие товарных фото, если JPEG допустим.',
};

export default ru;
