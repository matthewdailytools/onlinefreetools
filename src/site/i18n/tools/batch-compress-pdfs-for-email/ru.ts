/**
 * i18n-фрагмент (batch-compress-pdfs-for-email / ru).
 * H1 следует запросу «Сжать PDF для почты пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: несколько вложений сжимаются по отдельности и складываются в ZIP. */
const ru: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Перед письмом сожмите несколько смет или сканов на этой вкладке. В ZIP остаются отдельные PDF, не одна брошюра. Зашифрованный или слишком тяжёлый файл пропускается, остальное скачивается. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_batch_compress_pdfs_for_email_choose_files: 'Выбрать PDF',
	tool_batch_compress_pdfs_for_email_chip_email: 'Профиль почты',
	tool_batch_compress_pdfs_for_email_chip_max: 'Максимально уменьшить',
	tool_batch_compress_pdfs_for_email_chip_print: 'Профиль печати',
	tool_batch_compress_pdfs_for_email_clear: 'Очистить',
	tool_batch_compress_pdfs_for_email_col_after: 'После',
	tool_batch_compress_pdfs_for_email_col_before: 'До',
	tool_batch_compress_pdfs_for_email_col_name: 'Файл',
	tool_batch_compress_pdfs_for_email_col_status: 'Статус',
	tool_batch_compress_pdfs_for_email_compress: 'Сжать все',
	tool_batch_compress_pdfs_for_email_desc:
		'Сжать PDF для почты пакетом: каждый файл уменьшается отдельно, в ZIP несколько PDF; остаются на устройстве, на сервер не загружаются.',
	tool_batch_compress_pdfs_for_email_description:
		'Сжать PDF для почты пакетом: положите несколько смет или сканов, примените почтовый профиль к каждому файлу, пропустите зашифрованные или слишком тяжёлые, скачайте ZIP отдельных PDF — не одну склеенную брошюру. Шаг за шагом: выберите стопку, оставьте почтовый профиль, сожмите все, посмотрите сэкономленные байты. Пример: два коротких образца PDF остаются двумя файлами в ZIP. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_batch_compress_pdfs_for_email_download_zip: 'Скачать ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'Перетащите PDF (до 20). Каждый файл сжимается отдельно. Работа остаётся на вкладке.',
	tool_batch_compress_pdfs_for_email_empty: 'Сначала добавьте PDF.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Защищён паролем. Пропущен.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_batch_compress_pdfs_for_email_err_load: 'Не удалось прочитать этот PDF. Пропущен.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'Библиотека PDF не загрузилась. Попробуйте актуальный браузер.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js не загрузился. Попробуйте актуальный браузер.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'Не больше 20 PDF. Лишние не добавлены.',
	tool_batch_compress_pdfs_for_email_example:
		'Загрузить пример создаёт два коротких PDF со страницей-картинкой, прогоняет почтовый профиль по каждому, оставляет два файла в ZIP и показывает сэкономленные байты.',
	tool_batch_compress_pdfs_for_email_example_title: 'Пример',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'Нет. Растр и сборка идут на этой вкладке. Файлы остаются на устройстве и не загружаются на сервер. pdf.js, pdf-lib и помощник ZIP могут грузиться с этого сайта; ваши PDF вкладку не покидают.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'Нет. Вы получаете ZIP из N PDF. Склеить в одну брошюру — это Объединить PDF, другая задача, не эта страница.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Сканы с фото обычно сильно худеют. Текстовый PDF иногда почти не двигается. Таблица показывает размер до и после.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'Сжать PDF обрабатывает один файл. Эта страница делит почтовый профиль на стопку и кладёт удачные в ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'Эта строка пропускается, остальные идут дальше. Снимите защиту в другом месте и добавьте снова.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'PDF уходят на сервер?',
	tool_batch_compress_pdfs_for_email_faq_q2: 'Всё склеивается в один PDF?',
	tool_batch_compress_pdfs_for_email_faq_q3: 'Сканы худеют сильнее текста?',
	tool_batch_compress_pdfs_for_email_faq_q4: 'Чем это отличается от Сжать PDF?',
	tool_batch_compress_pdfs_for_email_faq_q5: 'Что если один файл зашифрован?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDF в очереди',
	tool_batch_compress_pdfs_for_email_how_body:
		'Положите несколько вложений, выберите почтовый профиль, сожмите каждый файл отдельно и заберите ZIP удачных.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Выберите сметы или сканы, которые должны пройти лимит вложения.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Оставьте почтовый профиль, если не нужна Печать (чётче) или Максимально уменьшить.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Нажмите Сжать все. Файлы остаются отдельными. Ничего не склеивается в брошюру.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Зашифрованные или битые пропускаются. Итог суммирует сэкономленные байты по удачным.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'Скачайте ZIP, когда удался хотя бы один. Нужен один PDF — используйте Сжать PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'Как сжать пачку для письма',
	tool_batch_compress_pdfs_for_email_preset_label: 'Общий профиль',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Каждый PDF растеризуется в JPEG-страницы и собирается заново. На выходе всегда ZIP отдельных PDF.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'Почта по умолчанию: масштаб около 1.0 и JPEG около 0.55. Печать мягче. Максимум жмёт сильнее.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Шифр, порча или нехватка памяти пропускают только ту строку. Повторы имён в ZIP становятся имя (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Текстовый файл может почти не сжаться. Так и задумано; таблица всё равно показывает размеры.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'Файлы остаются на устройстве и не загружаются на сервер.',
	tool_batch_compress_pdfs_for_email_rules_title: 'Чего ожидать',
	tool_batch_compress_pdfs_for_email_sample: 'Загрузить пример',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Сжимаем каждый PDF для почты…',
	tool_batch_compress_pdfs_for_email_status_done: 'Пакет готов — проверьте таблицу и скачайте ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Сжат',
	tool_batch_compress_pdfs_for_email_status_skip: 'Пропущен',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} готовы · {skip} пропущены · сэкономлено {saved}',
	tool_batch_compress_pdfs_for_email_title: 'Сжать PDF для почты пакетом',
	tool_batch_compress_pdfs_for_email_usecase_1: 'Стопка смет, которые вместе бьют лимит ящика 25 МБ.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Отправить сканы чеков отдельными вложениями, а не одной брошюрой.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Уменьшить несколько PDF перед письмом, не объединяя их.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Когда это кстати',
	tool_batch_compress_pdfs_for_email_warn_large: 'Есть файл больше 40 МБ — на этой строке вкладке может не хватить памяти.',
};

export default ru;
