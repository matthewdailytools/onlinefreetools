/**
 * i18n 工具分片（write-nested-if-formula-for-excel / ru）。
 * 有序条件 → 嵌套 IF 公式；浏览器试算；复制粘贴到 Excel。
 * 俄语检索向：вложенный ЕСЛИ / вложенная IF；示例 West → A。
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Конструктор вложенного ЕСЛИ для Excel — условия по порядку, готово к копированию",
	tool_write_nested_if_formula_for_excel_description: "Соберите вложенную формулу IF для Excel из упорядоченных проверок «равно», «содержит» или «пусто». Пример: West → A, East → B, иначе Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Проверьте результат в браузере и скопируйте. Английские имена функций и запятые.",
	tool_write_nested_if_formula_for_excel_article: "Добавьте условия сверху вниз, задайте результат каждой ветки и финальное «иначе», проверьте пробное значение и скопируйте готовую вложенную IF.",
	tool_write_nested_if_formula_for_excel_desc: "Условия по порядку → вложенная IF с проверкой в браузере и копированием.",

	tool_write_nested_if_formula_for_excel_hint: "Условия проверяются сверху вниз. Побеждает первое совпадение. «Содержит» даёт ISNUMBER(SEARCH(...)). Формулы — с английскими именами и запятыми.",
	tool_write_nested_if_formula_for_excel_cell_label: "Целевая ячейка",
	tool_write_nested_if_formula_for_excel_cell_ph: "напр. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Пробное значение",
	tool_write_nested_if_formula_for_excel_trial_ph: "напр. West",
	tool_write_nested_if_formula_for_excel_else_label: "Иначе (финальная ложь)",
	tool_write_nested_if_formula_for_excel_else_ph: "напр. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Проверка",
	tool_write_nested_if_formula_for_excel_col_val: "Значение / текст",
	tool_write_nested_if_formula_for_excel_col_then: "Тогда результат",
	tool_write_nested_if_formula_for_excel_op_eq: "равно",
	tool_write_nested_if_formula_for_excel_op_contains: "содержит",
	tool_write_nested_if_formula_for_excel_op_blank: "пусто",
	tool_write_nested_if_formula_for_excel_add: "Добавить условие",
	tool_write_nested_if_formula_for_excel_write: "Создать формулу",
	tool_write_nested_if_formula_for_excel_sample: "Загрузить пример",
	tool_write_nested_if_formula_for_excel_clear: "Очистить",
	tool_write_nested_if_formula_for_excel_copy: "Копировать формулу",
	tool_write_nested_if_formula_for_excel_copied: "Скопировано.",
	tool_write_nested_if_formula_for_excel_formula_label: "Вложенная формула IF",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Результат пробы",
	tool_write_nested_if_formula_for_excel_empty: "Добавьте хотя бы одно условие (или загрузите пример), затем создайте формулу.",
	tool_write_nested_if_formula_for_excel_copy_fail: "Не удалось скопировать. Выделите формулу и скопируйте вручную.",

	tool_write_nested_if_formula_for_excel_how_title: "Как написать вложенную формулу ЕСЛИ",
	tool_write_nested_if_formula_for_excel_how_body: "Укажите целевую ячейку и условия по порядку. «Создать формулу» покажет вложенную IF и вычислит пробное значение. Копирование даёт английский синтаксис Excel с запятыми.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Задайте целевую ячейку и при желании пробное значение.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Добавьте строки «равно», «содержит» или «пусто» в том порядке, в каком Excel должен их проверять.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Укажите результат «Тогда» для каждой строки и финальное «Иначе».",
	tool_write_nested_if_formula_for_excel_how_item_4: "Нажмите «Создать формулу», сверьте результат пробы, затем «Копировать формулу».",

	tool_write_nested_if_formula_for_excel_why_choose_title: "Чем полезен этот конструктор вложенного ЕСЛИ",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Равно / содержит / пусто в одной вложенной IF и в вашем порядке.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Проба в браузере показывает, какая ветка сработает, до вставки в книгу.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Смена примеров: регионы, оценки и проверка «содержит».",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "Одним кликом копируется вся строка формулы.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Ясно: здесь строится вложенный IF, не IFS (см. соседнюю страницу IFS).",

	tool_write_nested_if_formula_for_excel_rules_title: "Правила, которые стоит учесть",
	tool_write_nested_if_formula_for_excel_rules_body: "Конструктор выдаёт классический IF(...). Кавычки внутри текстовых строк Excel удваиваются.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Кавычки внутри текстовых строк Excel удваиваются.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "«Содержит» даёт ISNUMBER(SEARCH(...)); «пусто» проверяет пустой текст.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "Побеждает первое совпавшее условие (сверху вниз).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "Английские имена функций и запятые в вашей локали Excel могут потребовать перевода или точки с запятой.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "Для синтаксиса IFS() используйте соседнюю страницу записи IFS.",

	tool_write_nested_if_formula_for_excel_example_title: "Разобранные примеры",
	tool_write_nested_if_formula_for_excel_example: "«Загрузить пример» начинается с West → A и East → B, иначе Other; проба West → A. Дальше — диапазоны оценок (≥90 / ≥80). Последний пример — проверка «содержит» для «promo».",

	tool_write_nested_if_formula_for_excel_usecases_title: "Когда нужен конструктор вложенного ЕСЛИ",
	tool_write_nested_if_formula_for_excel_usecase_1: "Назначить уровни оценок или риска по упорядоченным правилам.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Превратить коды регионов в подписи для отчётов.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Проверить многоветвевую формулу перед вставкой в книгу.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Набросать ветки «содержит»/«пусто», не набирая SEARCH вручную.",

	tool_write_nested_if_formula_for_excel_faq_q1: "Загружаются ли мои значения на сервер?",
	tool_write_nested_if_formula_for_excel_faq_a1: "Нет. Сборка и проба остаются в браузере на вашем устройстве, без загрузки на сервер.",
	tool_write_nested_if_formula_for_excel_faq_q2: "Это то же самое, что IFS?",
	tool_write_nested_if_formula_for_excel_faq_a2: "Нет. Здесь получается вложенный IF(...). Для IFS() откройте соседний конструктор IFS.",
	tool_write_nested_if_formula_for_excel_faq_q3: "Как работает «содержит»?",
	tool_write_nested_if_formula_for_excel_faq_a3: "В тест IF подставляется ISNUMBER(SEARCH(\"текст\", ячейка)).",
	tool_write_nested_if_formula_for_excel_faq_q4: "Вставится ли формула в любую языковую версию Excel?",
	tool_write_nested_if_formula_for_excel_faq_a4: "Используются английские имена и запятые. В некоторых установках нужны переведённые имена или точка с запятой.",
	tool_write_nested_if_formula_for_excel_faq_q5: "Зачем пробное значение?",
	tool_write_nested_if_formula_for_excel_faq_a5: "Оно считает те же ветки в браузере, чтобы вы увидели, какое «Тогда»/«Иначе» сработает.",
	tool_write_nested_if_formula_for_excel_faq_q6: "Можно ли вложить больше двух условий?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Да. Добавляйте строки — каждая становится ещё одним слоем IF вокруг финального «Иначе».",

	tool_write_nested_if_formula_for_excel_references: "Документация Microsoft по функции IF.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — функция IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — функция IFS",
};

export default ru;
