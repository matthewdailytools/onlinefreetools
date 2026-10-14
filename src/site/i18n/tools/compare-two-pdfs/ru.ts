/**
 * i18n tool shard (compare-two-pdfs / ru).
 * Русский: сравнение текстового слоя двух PDF, подсветка добавленного/удалённого,
 * скачивание HTML-diff; без OCR и без загрузки на сервер. Ключи и порядок как в en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Русский словарь для инструмента «Сравнить два PDF». */
const ru: SiteLangDict = {
	tool_compare_two_pdfs_title: "Сравнить два PDF — подсветка текстовых отличий",
	tool_compare_two_pdfs_desc: "Сравните текст двух PDF в браузере и скачайте HTML-diff — файлы остаются на устройстве, без загрузки на сервер.",
	tool_compare_two_pdfs_description:
		"Сравните два PDF и подсветите различия в тексте: добавленные слова зелёным, удалённые — красным. Шаги: выберите PDF A и PDF B, нажмите «Сравнить», при необходимости — «Скачать HTML-diff». Пример: «тридцати дней» против «шестидесяти дней». Только текстовый слой: сканы сначала нужно распознать (OCR).",
	tool_compare_two_pdfs_file_a: "PDF A (старая / исходная версия)",
	tool_compare_two_pdfs_file_b: "PDF B (новая / исправленная версия)",
	tool_compare_two_pdfs_choose_file: "Выберите PDF — или перетащите его в это поле",
	tool_compare_two_pdfs_choose_files: "Выбрать файлы",
	tool_compare_two_pdfs_drop_hint: "Или перетащите PDF сюда. Обработка остаётся в этой вкладке.",
	tool_compare_two_pdfs_compare: "Сравнить",
	tool_compare_two_pdfs_download: "Скачать HTML-diff",
	tool_compare_two_pdfs_sample: "Загрузить пример",
	tool_compare_two_pdfs_clear: "Очистить",
	tool_compare_two_pdfs_advanced: "Дополнительные настройки (необязательно)",
	tool_compare_two_pdfs_ignore_case: "Не учитывать регистр букв",
	tool_compare_two_pdfs_ignore_space: "Объединять повторяющиеся пробелы и переносы строк",
	tool_compare_two_pdfs_advanced_hint: "Пригодится, если в одном экспорте строки переносятся иначе, а формулировки те же.",
	tool_compare_two_pdfs_result_label: "Различия в тексте (A → B)",
	tool_compare_two_pdfs_legend_added: "Добавлено в B",
	tool_compare_two_pdfs_legend_removed: "Удалено из A",
	tool_compare_two_pdfs_empty: "Сначала выберите PDF A и PDF B.",
	tool_compare_two_pdfs_err_convert: "Не удалось выполнить сравнение. Обновите страницу и попробуйте снова.",
	tool_compare_two_pdfs_err_encrypted: "Похоже, этот PDF защищён паролем. Снимите защиту и сравните снова.",
	tool_compare_two_pdfs_err_load: "Не удалось прочитать один из PDF-файлов.",
	tool_compare_two_pdfs_err_notext: "Выделяемый текстовый слой не найден. Сканированные PDF, состоящие только из изображений, нужно сначала распознать (OCR).",
	tool_compare_two_pdfs_err_pdfjs: "Не удалось загрузить модуль отображения PDF.",
	tool_compare_two_pdfs_status_working: "Извлекаем текст и сравниваем…",
	tool_compare_two_pdfs_status_done: "Готово — зелёным отмечено добавленное в B, красным удалённое из A. Скачивание сохраняет HTML-файл.",
	tool_compare_two_pdfs_status_identical: "При текущих настройках различий в тексте нет.",
	tool_compare_two_pdfs_summary_tpl: "добавлено: {added} · удалено: {removed}",
	tool_compare_two_pdfs_pages_tpl: "страниц: A={a}, B={b}",
	tool_compare_two_pdfs_warn_large: "Большой файл — сравнение может занять время.",
	tool_compare_two_pdfs_how_title: "Как сравнить два PDF",
	tool_compare_two_pdfs_how_body:
		"Инструмент читает текстовый слой каждого PDF с помощью PDF.js и сравнивает их по словам. Вёрстка, шрифты и изображения не учитываются — только выделяемый текст.",
	tool_compare_two_pdfs_how_item_1: "Выберите PDF A (исходный) и PDF B (исправленный) или перетащите каждый файл в своё поле.",
	tool_compare_two_pdfs_how_item_2: "При необходимости откройте «Дополнительные настройки», чтобы не учитывать регистр или объединить пробелы.",
	tool_compare_two_pdfs_how_item_3: "Нажмите «Сравнить» и дождитесь, пока индикатор прогресса покажет загрузку и извлечение текста из обоих файлов.",
	tool_compare_two_pdfs_how_item_4: "Просмотрите зелёную и красную подсветку, сверьте счётчики и нажмите «Скачать HTML-diff», если нужен файл.",
	tool_compare_two_pdfs_why_choose_title: "Почему удобно сравнить два PDF именно здесь",
	tool_compare_two_pdfs_why_choose_item_1: "Счётчики добавленных и удалённых фрагментов, а также число страниц в каждом файле.",
	tool_compare_two_pdfs_why_choose_item_2: "Предпросмотр обоих PDF рядом и единое сравнение текста по словам за один проход.",
	tool_compare_two_pdfs_why_choose_item_3: "Понятные сообщения для файлов с паролем и для сканов без текстового слоя — вместо пустого результата.",
	tool_compare_two_pdfs_why_choose_item_4: "Можно не учитывать регистр и лишние пробелы — удобно, когда экспорт лишь иначе переносит строки.",
	tool_compare_two_pdfs_why_choose_item_5: "Работает в браузере: PDF остаются на устройстве, без загрузки на сервер.",
	tool_compare_two_pdfs_rules_title: "Правила и ограничения",
	tool_compare_two_pdfs_rules_body: "Сравнивается только текстовый слой — не внешний вид и не пиксели.",
	tool_compare_two_pdfs_rules_item_1: "Выделяемый текст из A и B извлекается через PDF.js и подсвечивается с помощью jsdiff.",
	tool_compare_two_pdfs_rules_item_2: "Всё остаётся в этой вкладке; выбранный файл не загружается на сервер.",
	tool_compare_two_pdfs_rules_item_3: "Без OCR. Сканы-изображения нужно сначала распознать в другом инструменте.",
	tool_compare_two_pdfs_rules_item_4: "Защищённые паролем или повреждённые PDF останавливают сравнение с понятной ошибкой.",
	tool_compare_two_pdfs_rules_item_5: "Скачивание сохраняет подсвеченный текст в формате HTML — это не PDF с пометками.",
	tool_compare_two_pdfs_example_title: "Пример",
	tool_compare_two_pdfs_example:
		"«Загрузить пример» создаёт два одностраничных договора. В A написано «Оплата в течение тридцати дней.», в B — «Оплата в течение шестидесяти дней.» После сравнения «тридцати» отмечено как удалённое, а «шестидесяти» — как добавленное. С опцией «Не учитывать регистр букв» слова «Дней» и «дней» считаются одинаковыми.",
	tool_compare_two_pdfs_usecases_title: "Когда это пригодится",
	tool_compare_two_pdfs_usecase_1: "Сверить исправленный договор в PDF с версией, которую вы отправили на прошлой неделе.",
	tool_compare_two_pdfs_usecase_2: "Найти изменённые формулировки в политике или пользовательском соглашении до подписания.",
	tool_compare_two_pdfs_usecase_3: "Сравнить два текстовых экспорта, когда важны слова, а не шрифты и поля.",
	tool_compare_two_pdfs_usecase_4: "Не выпускать конфиденциальные черновики с устройства — для сравнения ничего не загружается.",
	tool_compare_two_pdfs_faq_q1: "Загружаются ли мои PDF на сервер?",
	tool_compare_two_pdfs_faq_a1:
		"Нет. Отображение и извлечение текста выполняются во вкладке браузера. Скрипты загружаются с этого же сайта, а ваши файлы остаются на устройстве и не уходят на наш сервер.",
	tool_compare_two_pdfs_faq_q2: "Почему для сканов пишет «выделяемый текстовый слой не найден»?",
	tool_compare_two_pdfs_faq_a2:
		"Скан — это изображение без текстового слоя, а эта страница не выполняет OCR. Распознайте текст в другом инструменте, сохраните PDF с поиском по тексту и сравните его здесь.",
	tool_compare_two_pdfs_faq_q3: "Что делать с PDF, защищёнными паролем?",
	tool_compare_two_pdfs_faq_a3:
		"Зашифрованные файлы здесь не открываются. Сначала снимите защиту в программе просмотра PDF, сохраните незащищённую копию и выберите её.",
	tool_compare_two_pdfs_faq_q4: "Чем это отличается от обычного сравнения текста?",
	tool_compare_two_pdfs_faq_a4:
		"Здесь вы перетаскиваете PDF, видите превью страниц и их количество. Сравнение текста рассчитано на вставленный текст или файлы .txt и не разбирает PDF.",
	tool_compare_two_pdfs_faq_q5: "Сравниваются ли вёрстка, картинки или подписи?",
	tool_compare_two_pdfs_faq_a5:
		"Нет. Учитывается только выделяемый текст. Сдвинутый логотип или другой шрифт при тех же словах здесь выглядят одинаково.",
	tool_compare_two_pdfs_faq_q6: "Что сохраняется при скачивании?",
	tool_compare_two_pdfs_faq_a6:
		"HTML-файл с той же зелёной и красной подсветкой, что на странице, — его удобно отправить по почте или сохранить в архив. Это не PDF с пометками.",
	tool_compare_two_pdfs_faq_q7: "Когда стоит не учитывать регистр или пробелы?",
	tool_compare_two_pdfs_faq_a7:
		"Когда в одном экспорте изменились только заглавные буквы или переносы строк. Включите эти опции, если формулировки те же, а исходный текстовый слой отличается.",
	tool_compare_two_pdfs_article: "Сравните выделяемый текст двух PDF и скачайте HTML-diff с подсветкой по словам — без загрузки на сервер.",
	tool_compare_two_pdfs_references: "PDF.js — извлечение текста; jsdiff — подсветка различий по словам.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — модуль отображения PDF от Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — библиотека сравнения текста",
};

export default ru;
