/**
 * i18n 工具分片（create-budget-spreadsheet / ru）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 仅规划数字，非理财/税务建议。
 * 当地检索向：создать таблицу бюджета / бюджет Excel.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Создать таблицу бюджета — категории и суммы в Excel xlsx",
	tool_create_budget_spreadsheet_description: "Соберите простую бюджетную таблицу из строк «категория и сумма», проверьте итог на экране и скачайте .xlsx с живой формулой SUM. Пример: Аренда 1200 + Еда 400 → Итого 1600. Всё в браузере — только планировочные цифры, не финансовый и не налоговый совет.",
	tool_create_budget_spreadsheet_article: "Введите строки категория,сумма, посмотрите текущий итог и скачайте budget.xlsx, где в ячейке «Итого» стоит SUM.",
	tool_create_budget_spreadsheet_desc: "Категория + сумма → проверка итога → xlsx с SUM. На устройстве, без загрузки на сервер.",

	tool_create_budget_spreadsheet_safety_banner: "Только планировочные цифры. Страница собирает простой список категорий с итогом SUM. Это не главная книга, не налоговая декларация и не инвестиционный совет.",
	tool_create_budget_spreadsheet_hint: "Одна строка на строку: категория,сумма (запятая или таб). Суммы — конечные числа. Битые строки пропускаются.",
	tool_create_budget_spreadsheet_input_label: "Строки бюджета (категория, сумма)",
	tool_create_budget_spreadsheet_input_ph: "напр. Аренда,1200",
	tool_create_budget_spreadsheet_write: "Создать таблицу",
	tool_create_budget_spreadsheet_download: "Скачать xlsx",
	tool_create_budget_spreadsheet_sample: "Загрузить пример",
	tool_create_budget_spreadsheet_clear: "Очистить",
	tool_create_budget_spreadsheet_preview_title: "Предпросмотр",
	tool_create_budget_spreadsheet_col_category: "Категория",
	tool_create_budget_spreadsheet_col_amount: "Сумма",
	tool_create_budget_spreadsheet_total_label: "Итого",
	tool_create_budget_spreadsheet_rows_label: "Учтённых строк",
	tool_create_budget_spreadsheet_ready_note: "Предпросмотр готов. Скачивание пишет budget.xlsx с формулой SUM в ячейке «Итого».",
	tool_create_budget_spreadsheet_empty: "Добавьте хотя бы одну корректную строку категория,сумма (например Аренда,1200) или загрузите пример.",
	tool_create_budget_spreadsheet_need_lib: "Не удалось загрузить библиотеку таблиц. Проверьте сеть и обновите страницу.",
	tool_create_budget_spreadsheet_sheet_name: "Бюджет",

	tool_create_budget_spreadsheet_how_title: "Как сделать таблицу бюджета",
	tool_create_budget_spreadsheet_how_body: "Перечислите категории расходов и суммы, создайте предпросмотр с итогом, затем скачайте .xlsx. Изменение суммы в Excel пересчитает итог SUM.",
	tool_create_budget_spreadsheet_how_item_1: "Введите по одной строке в формате категория,сумма.",
	tool_create_budget_spreadsheet_how_item_2: "Нажмите «Создать таблицу», чтобы увидеть строки и итог.",
	tool_create_budget_spreadsheet_how_item_3: "Исправьте или удалите пропущенные строки, если итог кажется неверным.",
	tool_create_budget_spreadsheet_how_item_4: "Нажмите «Скачать xlsx» — в budget.xlsx будет живая SUM.",

	tool_create_budget_spreadsheet_why_choose_title: "Чем полезен этот мастер таблицы бюджета",
	tool_create_budget_spreadsheet_why_choose_item_1: "Быстрый список категорий с итогом прямо на странице.",
	tool_create_budget_spreadsheet_why_choose_item_2: "В скачанном файле ячейка «Итого» содержит живую формулу SUM Excel.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Смена примеров: месяц, поездка и клубный список.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Работает в браузере — строки остаются на устройстве, без загрузки на сервер.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Ясная граница YMYL: только планирование — не главная книга и не налоговый инструмент.",

	tool_create_budget_spreadsheet_rules_title: "Правила, которые стоит ожидать",
	tool_create_budget_spreadsheet_rules_body: "Инструмент собирает один планировочный лист из сумм по категориям. Это не бухгалтерская программа.",
	tool_create_budget_spreadsheet_rules_item_1: "Суммы должны быть конечными числами; некорректные строки пропускаются.",
	tool_create_budget_spreadsheet_rules_item_2: "В скачанном файле ячейка «Итого» использует =SUM по столбцу сумм.",
	tool_create_budget_spreadsheet_rules_item_3: "Только список в стиле расходов — без движка «доходы против расходов».",
	tool_create_budget_spreadsheet_rules_item_4: "Значения остаются на устройстве и не загружаются на сервер.",
	tool_create_budget_spreadsheet_rules_item_5: "Формат файла следует обычной практике OOXML/xlsx через SheetJS в браузере.",

	tool_create_budget_spreadsheet_example_title: "Разбор на примерах",
	tool_create_budget_spreadsheet_example: "«Загрузить пример» начинается с Аренда 1200 и Еда 400 → Итого 1600. Дальше добавляются Коммуналка 150 и Транспорт 200. Последний пример — короткий список поездки (Отель, Авиабилеты, Еда).",

	tool_create_budget_spreadsheet_usecases_title: "Когда создавать таблицу бюджета здесь",
	tool_create_budget_spreadsheet_usecase_1: "Набросать короткий месячный «конвертный» бюджет до полноценного шаблона.",
	tool_create_budget_spreadsheet_usecase_2: "Свести ожидаемые расходы на поездку или мероприятие в один скачиваемый лист.",
	tool_create_budget_spreadsheet_usecase_3: "Подготовить план трат клуба до формального учёта.",
	tool_create_budget_spreadsheet_usecase_4: "Передать кому-то .xlsx с итогом SUM, который продолжит пересчитываться в Excel.",

	tool_create_budget_spreadsheet_faq_q1: "Это главная книга?",
	tool_create_budget_spreadsheet_faq_a1: "Нет. Нет счетов, проводок, сверки и аудиторской истории.",
	tool_create_budget_spreadsheet_faq_q2: "Строки куда-то загружаются?",
	tool_create_budget_spreadsheet_faq_a2: "Нет. Разбор и запись xlsx идут в браузере; данные остаются на устройстве, без загрузки на сервер.",
	tool_create_budget_spreadsheet_faq_q3: "Скачанный xlsx пересчитывается?",
	tool_create_budget_spreadsheet_faq_a3: "Да. В ячейке «Итого» стоит формула SUM по столбцу сумм.",
	tool_create_budget_spreadsheet_faq_q4: "Сравнивает ли доходы и расходы?",
	tool_create_budget_spreadsheet_faq_a4: "Нет. Для доходов, целей, отклонений или графиков нужен более полный шаблон бюджета.",
	tool_create_budget_spreadsheet_faq_q5: "Какой формат у категория,сумма?",
	tool_create_budget_spreadsheet_faq_a5: "Одна строка на строку: категория, затем сумма через запятую или таб. Пример: Аренда,1200.",
	tool_create_budget_spreadsheet_faq_q6: "Это финансовый совет?",
	tool_create_budget_spreadsheet_faq_a6: "Нет. Только планировочная арифметика — не финансовый, налоговый или инвестиционный совет.",

	tool_create_budget_spreadsheet_disclaimer: "Только планировочные цифры — не финансовый, налоговый, бухгалтерский или инвестиционный совет.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML; документация SheetJS по записи xlsx в браузере.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "Документация SheetJS",
};

export default ru;
