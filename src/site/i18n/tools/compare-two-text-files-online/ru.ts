/**
 * i18n shard for compare-two-text-files-online (Russian).
 * H1 is the search task “Сравнить два текстовых файла онлайн”; RU phrasing, not a calque of the English master.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'В этой вкладке выберите два текстовых файла и смотрите добавления и удаления по строкам. Файлы остаются на вашем устройстве и не загружаются на сервер. Больших полей вставки здесь нет — только вставить текст можно на странице «Проверить различия между двумя текстами».',
	tool_compare_two_text_files_online_clear: 'Очистить',
	tool_compare_two_text_files_online_compare: 'Сравнить',
	tool_compare_two_text_files_online_desc:
		'Сравнить два текстовых файла онлайн: выберите два .txt и смотрите строковый diff в браузере, без загрузки на сервер.',
	tool_compare_two_text_files_online_description:
		"Сравните два текстовых файла онлайн в браузере. Выберите исходный и исправленный .txt: они строго декодируются как UTF-8, начальный BOM удаляется, а неверная кодировка или двоичное содержимое отклоняются до подсветки добавленных и удалённых строк. Файлы остаются на устройстве и не загружаются на сервер. Пример: notes-a.txt и notes-b.txt отличаются только средней строкой. Word, таблицы и структурированный JSON не разбираются.",
	tool_compare_two_text_files_online_empty: 'Сначала выберите два текстовых файла или загрузите пример.',
	tool_compare_two_text_files_online_err_binary:
		'Один из файлов похож на двоичный (нулевые байты). Здесь сравнивается только обычный текст вроде .txt.',
	tool_compare_two_text_files_online_err_encoding: "Один из файлов не является корректным UTF-8. Сохраните или преобразуйте его в UTF-8 и повторите сравнение.",
	tool_compare_two_text_files_online_err_too_large:
		'Файл больше примерно 1 МБ. Возьмите короткий фрагмент, чтобы вкладка не зависала.',
	tool_compare_two_text_files_online_example:
		'Загрузить пример сопоставляет notes-a.txt (alpha / вторая строка / третья) с notes-b.txt, где середина — «изменённая строка». Построчный режим отмечает только её. Этот результат уже виден при первой отрисовке.',
	tool_compare_two_text_files_online_example_title: 'Пример',
	tool_compare_two_text_files_online_faq_a1:
		'Нет. FileReader читает байты в этой вкладке. jsdiff может подгрузиться с этого сайта как библиотека; ваши файлы на наши серверы не уходят.',
	tool_compare_two_text_files_online_faq_a2:
		"Файлы строго декодируются как UTF-8, начальный BOM удаляется. Некорректный UTF-8 отклоняется, а не маскируется символами замены; старые кодировки вроде Windows-1252 сначала преобразуйте.",
	tool_compare_two_text_files_online_faq_a3:
		'Нулевой байт считается двоичным файлом и отклоняется. Для этого нужен hex или архиватор. Word и Excel сравнивают на своих страницах.',
	tool_compare_two_text_files_online_faq_a4:
		"Инструмент принимает .txt / .text с декодированием UTF-8. Без файлов используйте сравнение вставленного текста, а для .docx, xlsx, xls и csv — сравнение Word или таблиц.",
	tool_compare_two_text_files_online_faq_q1: 'Файлы загружаются на сервер?',
	tool_compare_two_text_files_online_faq_q2: 'Как обрабатываются кодировка и BOM?',
	tool_compare_two_text_files_online_faq_q3: 'Можно ли сравнить двоичные файлы, Word или Excel здесь?',
	tool_compare_two_text_files_online_faq_q4: 'Это то же самое, что сравнить txt или сравнить два файла?',
	tool_compare_two_text_files_online_how_body:
		'Возьмите два текстовых файла с диска и прочитайте подсвеченные строки. На первом экране нет большого поля вставки.',
	tool_compare_two_text_files_online_how_item_1: 'Выберите первый текстовый файл (исходный снимок или выгрузка).',
	tool_compare_two_text_files_online_how_item_2: 'Выберите второй текстовый файл (исправленная версия).',
	tool_compare_two_text_files_online_how_item_3:
		"Нажмите «Сравнить», чтобы обновить построчную разницу; после выбора обоих файлов она также запускается автоматически.",
	tool_compare_two_text_files_online_how_item_4: 'Зелёным — добавления, красным — удаления. Очистить убирает оба файла с этой вкладки.',
	tool_compare_two_text_files_online_how_title: 'Как пользоваться',
	tool_compare_two_text_files_online_label_a: 'Первый текстовый файл',
	tool_compare_two_text_files_online_label_b: 'Второй текстовый файл',
	tool_compare_two_text_files_online_legend: 'Зелёный = добавлено · Красный = удалено',
	tool_compare_two_text_files_online_load_sample: 'Загрузить пример',
	tool_compare_two_text_files_online_need_lib: 'Сравнение не загрузилось. Проверьте сеть и обновите страницу.',
	tool_compare_two_text_files_online_no_diff: 'Различий нет: оба файла совпадают как текст.',
	tool_compare_two_text_files_online_result_label: 'Строковые различия',
	tool_compare_two_text_files_online_rules_body:
		'После декодирования UTF-8 идёт построчный diff. Кодировка, BOM и проверка на двоичность — до подсветки.',
	tool_compare_two_text_files_online_rules_item_1:
		'Каждый файл читается через FileReader / ArrayBuffer и декодируется как UTF-8. UTF-8 BOM в начале срезается, чтобы не имитировать смену первой строки.',
	tool_compare_two_text_files_online_rules_item_2:
		'Нулевой байт значит двоичный файл и отказ. Это не hex-дамп.',
	tool_compare_two_text_files_online_rules_item_3:
		'Diff в построчном режиме (jsdiff diffLines). Если в строке сменилось одно слово, часто подсвечивается вся строка.',
	tool_compare_two_text_files_online_rules_item_4:
		'На первом экране нет поля вставки. Два текста без файлов вставляйте на «Проверить различия между двумя текстами».',
	tool_compare_two_text_files_online_rules_title: 'Правила, к которым стоит быть готовым',
	tool_compare_two_text_files_online_sample_a: 'alpha\nвторая строка\nтретья',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nизменённая строка\nтретья',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: 'добавлено {added}, удалено {removed}',
	tool_compare_two_text_files_online_title: 'Сравнить два текстовых файла онлайн',
	tool_compare_two_text_files_online_usecase_1:
		'Выгрузки: сравнить вчерашний log.txt с сегодняшним экспортом, не вставляя десятки тысяч строк.',
	tool_compare_two_text_files_online_usecase_2:
		'Резервные копии конфигов: два снимка .env или .txt с диска, по строкам.',
	tool_compare_two_text_files_online_usecase_3:
		'Домашнее задание: два .txt сдачи, чтобы увидеть, какие строки изменились.',
	tool_compare_two_text_files_online_usecases_title: 'Когда пригодится',
};

export default ru;
