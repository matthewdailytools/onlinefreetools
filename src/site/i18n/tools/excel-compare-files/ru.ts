/**
 * i18n（excel-compare-files / ru）。
 * H1: Сравнить файлы Excel（без «онлайн» в заголовке）。
 * По умолчанию первый лист; пустые ячейки — пустая строка.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_excel_compare_files_article:
		'Выберите две таблицы и сравните текущий лист ячейка за ячейкой. Пустые ячейки считаются пустой строкой. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_excel_compare_files_clear: 'Очистить',
	tool_excel_compare_files_col_addr: 'Ячейка',
	tool_excel_compare_files_col_left: 'Первый файл',
	tool_excel_compare_files_col_right: 'Второй файл',
	tool_excel_compare_files_compare: 'Сравнить',
	tool_excel_compare_files_desc:
		'Сравнить файлы Excel: две таблицы, текущий лист по ячейкам — остаются на устройстве, без загрузки на сервер.',
	tool_excel_compare_files_description:
		'Сравнить файлы Excel в браузере. Процесс: выберите два xlsx или csv, возьмите текущий лист (по умолчанию первый), затем перечислите ячейки с другим значением. Файлы остаются на устройстве и не загружаются на сервер. Пример: две таблицы по 3 строки, где B3 меняется с 2 на 9. Сдвиг столбцов сравнивается по адресу, не по имени заголовка.',
	tool_excel_compare_files_empty: 'Сначала выберите два табличных файла или загрузите пример.',
	tool_excel_compare_files_err_read:
		'Не удалось прочитать таблицу. Попробуйте xlsx или csv и сначала снимите защиту с книги.',
	tool_excel_compare_files_example:
		'Загрузка примера сравнивает две CSV-таблицы. Заголовки Name/Qty совпадают; количество Gadget — 2 против 9, поэтому указан B3. Уже при первом показе видна эта ячейка.',
	tool_excel_compare_files_example_title: 'Пример',
	tool_excel_compare_files_faq_a1:
		'Нет. Байты читаются в этой вкладке через SheetJS. Библиотека может подгружаться с CDN; ваши файлы не загружаются на наши серверы.',
	tool_excel_compare_files_faq_a2:
		'Да: первый лист выбран по умолчанию. Списки листов нужны, если вкладка в том же файле другая. Остальные листы не сравниваются, пока вы их не выберете.',
	tool_excel_compare_files_faq_a3:
		"Да. CSV читается как один лист, поэтому можно сравнить два CSV или CSV-экспорт с листом Excel по адресам ячеек.",
	tool_excel_compare_files_faq_a4:
		'Отсутствующие и пустые ячейки — пустая строка. Сдвинутый столбец по-прежнему сравнивает A1 с A1, а не «столбец Name» по заголовку, чтобы не было тихих ошибок, когда заголовки ездят.',
	tool_excel_compare_files_faq_q5: "Сравниваются формулы и оформление или только отображаемые значения?",
	tool_excel_compare_files_faq_a5: "Сравнивается отображаемый текст, прочитанный из каждой ячейки. Формулы, стили, комментарии, ширина столбцов и структура книги отдельно не проверяются; изменение формулы с тем же кешированным значением может быть незаметно.",
	tool_excel_compare_files_faq_q1: 'Загружаются ли мои файлы Excel?',
	tool_excel_compare_files_faq_q2: 'Сравнивается только первый лист?',
	tool_excel_compare_files_faq_q3: 'Можно ли сравнить два CSV здесь?',
	tool_excel_compare_files_faq_q4: 'Как обрабатываются пустые ячейки и сдвинутые столбцы?',
	tool_excel_compare_files_how_body:
		'Выберите две таблицы и посмотрите, какие адреса ячеек отличаются на текущих листах.',
	tool_excel_compare_files_how_item_1: 'Выберите первую таблицу (xlsx, xls или csv).',
	tool_excel_compare_files_how_item_2: 'Выберите вторую таблицу.',
	tool_excel_compare_files_how_item_3: 'Оставьте первый лист, если не нужна другая вкладка.',
	tool_excel_compare_files_how_item_4: "Нажмите «Сравнить», чтобы вывести ячейки с разным отображаемым текстом на выбранных листах.",
	tool_excel_compare_files_how_title: 'Как пользоваться',
	tool_excel_compare_files_label_a: 'Первая таблица',
	tool_excel_compare_files_label_b: 'Вторая таблица',
	tool_excel_compare_files_load_sample: 'Загрузить пример',
	tool_excel_compare_files_need_lib: 'SheetJS не загрузился. Проверьте сеть и обновите страницу.',
	tool_excel_compare_files_no_diff: 'На текущих листах нет различий ячеек.',
	tool_excel_compare_files_result_label: 'Различия ячеек',
	tool_excel_compare_files_rules_body: 'Значения сравниваются по адресу сетки только на выбранном листе.',
	tool_excel_compare_files_rules_item_1: 'SheetJS читает книгу. Лист по умолчанию — первое имя в файле.',
	tool_excel_compare_files_rules_item_2:
		'Каждая ячейка сравнивается как текст после преобразования SheetJS. Пустые и отсутствующие — "".',
	tool_excel_compare_files_rules_item_3:
		'Вставленный с одной стороны столбец всё равно выравнивается по A1/B1, не по подписям заголовков.',
	tool_excel_compare_files_rules_item_4:
		'Остальные листы книги игнорируются, пока вы их не выберете. По умолчанию книга целиком не сканируется.',
	tool_excel_compare_files_rules_title: 'Какие правила ждать',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Лист в первом файле',
	tool_excel_compare_files_sheet_b: 'Лист во втором файле',
	tool_excel_compare_files_summary: 'отличаются ячеек: {n}',
	tool_excel_compare_files_title: 'Сравнить файлы Excel',
	tool_excel_compare_files_usecase_1: 'Коммерческие предложения: два экспорта прайса, где съехали несколько ячеек.',
	tool_excel_compare_files_usecase_2: 'Посещаемость или склад в CSV, неделя к неделе.',
	tool_excel_compare_files_usecase_3: 'Учебные таблицы, сохранённые как xlsx двумя учениками.',
	tool_excel_compare_files_usecases_title: 'Когда это уместно',
};

export default ru;
