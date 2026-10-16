/**
 * i18n 工具分片（write-ifs-formula-in-excel / ru）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "Конструктор формулы IFS (ЕСЛИМН) для Excel — упорядоченные проверки с TRUE-запасным",
	tool_write_ifs_formula_in_excel_description: "Соберите формулу IFS для Excel 2019 или Microsoft 365 из упорядоченных проверок (равно, содержит, пусто). Пример: West → A, East → B, иначе Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). Проверьте в браузере, затем скопируйте. В бессрочном Excel 2016 недоступна.",
	tool_write_ifs_formula_in_excel_article: "Добавьте упорядоченные проверки, задайте каждый результат и запасной TRUE, просмотрите пробное значение и скопируйте готовую формулу IFS.",
	tool_write_ifs_formula_in_excel_desc: "Упорядоченные проверки → формула IFS с TRUE-запасным, проба в браузере и копирование.",

	tool_write_ifs_formula_in_excel_hint: "Условия проверяются сверху вниз. Конструктор добавляет TRUE,иначе как запасной. Нужны Excel 2019, Microsoft 365 или новее. Английские имена и запятые.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS требует Excel 2019, Microsoft 365 или новее. Для старого Excel используйте конструктор вложенного ЕСЛИ.",
	tool_write_ifs_formula_in_excel_cell_label: "Целевая ячейка",
	tool_write_ifs_formula_in_excel_cell_ph: "напр. A1",
	tool_write_ifs_formula_in_excel_trial_label: "Пробное значение",
	tool_write_ifs_formula_in_excel_trial_ph: "напр. West",
	tool_write_ifs_formula_in_excel_else_label: "Иначе (TRUE-запасной)",
	tool_write_ifs_formula_in_excel_else_ph: "напр. Other",
	tool_write_ifs_formula_in_excel_col_op: "Проверка",
	tool_write_ifs_formula_in_excel_col_val: "Значение / текст",
	tool_write_ifs_formula_in_excel_col_then: "Тогда результат",
	tool_write_ifs_formula_in_excel_op_eq: "равно",
	tool_write_ifs_formula_in_excel_op_contains: "содержит",
	tool_write_ifs_formula_in_excel_op_blank: "пусто",
	tool_write_ifs_formula_in_excel_add: "Добавить условие",
	tool_write_ifs_formula_in_excel_write: "Создать формулу",
	tool_write_ifs_formula_in_excel_sample: "Загрузить пример",
	tool_write_ifs_formula_in_excel_clear: "Очистить",
	tool_write_ifs_formula_in_excel_copy: "Копировать формулу",
	tool_write_ifs_formula_in_excel_copied: "Скопировано.",
	tool_write_ifs_formula_in_excel_formula_label: "Формула IFS",
	tool_write_ifs_formula_in_excel_trial_result_label: "Результат пробы",
	tool_write_ifs_formula_in_excel_empty: "Добавьте хотя бы одно условие (или загрузите пример), затем создайте формулу.",
	tool_write_ifs_formula_in_excel_copy_fail: "Не удалось скопировать. Выделите формулу и скопируйте вручную.",

	tool_write_ifs_formula_in_excel_how_title: "Как написать формулу IFS",
	tool_write_ifs_formula_in_excel_how_body: "Укажите целевую ячейку и упорядоченные проверки. «Создать формулу» показывает IFS с TRUE-запасным и оценивает пробное значение. Копирование даёт английский синтаксис Excel с запятыми.",
	tool_write_ifs_formula_in_excel_how_item_1: "Задайте целевую ячейку и необязательное пробное значение.",
	tool_write_ifs_formula_in_excel_how_item_2: "Добавьте строки равно, содержит или пусто в порядке оценки.",
	tool_write_ifs_formula_in_excel_how_item_3: "Укажите каждый «Тогда» и значение «Иначе» (в паре с TRUE).",
	tool_write_ifs_formula_in_excel_how_item_4: "Нажмите «Создать формулу», проверьте пробу, затем «Копировать». На Excel 2016 используйте вложенный ЕСЛИ.",

	tool_write_ifs_formula_in_excel_why_choose_title: "Что даёт этот конструктор IFS",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "Упорядоченные проверки равно / содержит / пусто в одном вызове IFS.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "Автоматическая пара TRUE,иначе как запасной.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "Проба в браузере до вставки в Excel.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "Смена примеров: регионы, оценки и «содержит».",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "Явная граница Excel 2016 со ссылкой на вложенный ЕСЛИ.",

	tool_write_ifs_formula_in_excel_rules_title: "Правила, которых стоит ожидать",
	tool_write_ifs_formula_in_excel_rules_body: "Конструктор выдаёт IFS(проверка,значение,...,TRUE,иначе). Кавычки текста удваиваются внутри строк Excel.",
	tool_write_ifs_formula_in_excel_rules_item_1: "Кавычки текста удваиваются внутри строк Excel.",
	tool_write_ifs_formula_in_excel_rules_item_2: "«Содержит» даёт ISNUMBER(SEARCH(...)); пусто проверяет пустой текст.",
	tool_write_ifs_formula_in_excel_rules_item_3: "Побеждает первая подходящая проверка; TRUE-запасной идёт последним.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS нужен Excel 2019, Microsoft 365 или новее — не бессрочный Excel 2016.",
	tool_write_ifs_formula_in_excel_rules_item_5: "Английские имена функций и запятые могут потребовать локализации в вашей установке Excel (напр. ЕСЛИМН).",

	tool_write_ifs_formula_in_excel_example_title: "Разобранные примеры",
	tool_write_ifs_formula_in_excel_example: "«Загрузить пример» начинается с West → A и East → B, иначе Other → =IFS(...,TRUE,\"Other\"), проба West → A. Далее — простые оценки по равенству. Последний пример использует «содержит» для «promo».",

	tool_write_ifs_formula_in_excel_usecases_title: "Когда использовать конструктор формулы IFS",
	tool_write_ifs_formula_in_excel_usecase_1: "Сопоставить коды регионов с метками без глубоких скобок вложенного ЕСЛИ.",
	tool_write_ifs_formula_in_excel_usecase_2: "Набросать диапазоны оценок или риска для книг Microsoft 365.",
	tool_write_ifs_formula_in_excel_usecase_3: "Проверить порядок ветвей перед вставкой в общий лист.",
	tool_write_ifs_formula_in_excel_usecase_4: "Перейти на страницу вложенного ЕСЛИ, если коллеги всё ещё на Excel 2016.",

	tool_write_ifs_formula_in_excel_faq_q1: "Работает ли IFS в Excel 2016?",
	tool_write_ifs_formula_in_excel_faq_a1: "В бессрочном Excel 2016 — нет. Используйте вложенный ЕСЛИ, Excel 2019 или новее, либо Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "Что если ни одна проверка не сработала?",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE связывается с вашим значением «иначе» как запасной результат.",
	tool_write_ifs_formula_in_excel_faq_q3: "Значения загружаются на сервер?",
	tool_write_ifs_formula_in_excel_faq_a3: "Нет. Сборка и проба остаются в вашем браузере.",
	tool_write_ifs_formula_in_excel_faq_q4: "Примет ли локализованный Excel эту формулу?",
	tool_write_ifs_formula_in_excel_faq_a4: "Некоторым установкам нужны переведённые имена (напр. ЕСЛИМН) или точка с запятой.",
	tool_write_ifs_formula_in_excel_faq_q5: "Чем это отличается от вложенного ЕСЛИ?",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS — плоский список проверок. Вложенный ЕСЛИ оборачивает ЕСЛИ в ЕСЛИ. Для старого Excel откройте связанную страницу вложенного ЕСЛИ.",
	tool_write_ifs_formula_in_excel_faq_q6: "Что выдаёт «содержит»?",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"текст\", ячейка)) как аргумент проверки внутри IFS.",

	tool_write_ifs_formula_in_excel_references: "Документация Microsoft по функции IFS.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — функция IFS",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — функция IF",
};

export default ru;
