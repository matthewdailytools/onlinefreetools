/**
 * i18n（json-diff-checker-online / ru）。
 * H1: Онлайн-проверка различий JSON.
 * Порядок ключей по умолчанию игнорируется; не YAML/XML.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Вставьте два значения JSON и получите добавления, удаления и изменения по путям. Порядок ключей по умолчанию игнорируется. Вставка остаётся на устройстве и не загружается. YAML и XML здесь не разбираются.',
	tool_json_diff_checker_online_array_as_set: "Игнорировать порядок массива (повторы учитываются)",
	tool_json_diff_checker_online_clear: 'Очистить',
	tool_json_diff_checker_online_compare: 'Сравнить',
	tool_json_diff_checker_online_desc:
		'Онлайн-проверка различий JSON: сравнить два JSON по путям, по умолчанию игнорировать порядок ключей — вставка остаётся на устройстве.',
	tool_json_diff_checker_online_description:
		'Онлайн-проверка различий JSON в браузере. Процесс: вставьте два JSON, разберите их, при желании игнорируйте порядок ключей объекта (включено по умолчанию), затем получите добавления, удаления и изменения по путям. Вставка остаётся на устройстве и не загружается на сервер. Пример: {"b":1,"a":2} и {"a":2,"b":1} совпадают; смена price даёт /price. Это не проверка YAML или XML.',
	tool_json_diff_checker_online_empty: 'Вставьте JSON с обеих сторон или загрузите пример.',
	tool_json_diff_checker_online_err_bad_a: 'Слева некорректный JSON.',
	tool_json_diff_checker_online_err_bad_b: 'Справа некорректный JSON.',
	tool_json_diff_checker_online_example:
		'В левом примере сначала sku, затем price; справа price стоит первым, а 9.5 меняется на 10. При игнорировании порядка ключей сообщается только /price. Уже при первом показе виден этот путь.',
	tool_json_diff_checker_online_example_title: 'Пример',
	tool_json_diff_checker_online_faq_a1:
		'Нет. Текст разбирается в этой вкладке через JSON.parse. На наши серверы ничего не загружается.',
	tool_json_diff_checker_online_faq_a2:
		'По умолчанию {"a":1,"b":2} и {"b":2,"a":1} — один объект. Выключите «Игнорировать порядок ключей», если важен порядок записи.',
	tool_json_diff_checker_online_faq_a3:
		"По умолчанию массивы сравниваются по индексам. При игнорировании порядка нормализованные элементы сортируются, повторы учитываются, а индексы относятся к этому порядку; объекты по полю id не сопоставляются.",
	tool_json_diff_checker_online_faq_a4:
		"Разбирается только корректный JSON. Синтаксис YAML и XML не принимается: сначала преобразуйте YAML в JSON или используйте сравнение нужного формата.",
	tool_json_diff_checker_online_faq_q1: 'Загружается ли мой JSON?',
	tool_json_diff_checker_online_faq_q2: 'Считается ли порядок ключей различием?',
	tool_json_diff_checker_online_faq_q3: 'Как сравниваются массивы?',
	tool_json_diff_checker_online_faq_q4: 'Это тот же JSON Diff Checker или diff YAML/XML?',
	tool_json_diff_checker_online_how_body:
		'Вставьте два JSON и прочитайте изменения по путям. Порядок ключей игнорируется, пока вы это не отключите.',
	tool_json_diff_checker_online_how_item_1: 'Вставьте исходный JSON слева.',
	tool_json_diff_checker_online_how_item_2: 'Вставьте изменённый JSON справа.',
	tool_json_diff_checker_online_how_item_3: 'Оставьте «Игнорировать порядок ключей» включённым, если не нужен порядок записи.',
	tool_json_diff_checker_online_how_item_4: "Нажмите «Сравнить», чтобы вывести добавленные, удалённые и изменённые пути с текущими параметрами.",
	tool_json_diff_checker_online_how_title: 'Как пользоваться',
	tool_json_diff_checker_online_ignore_keys: 'Игнорировать порядок ключей объекта',
	tool_json_diff_checker_online_label_a: 'Исходный JSON',
	tool_json_diff_checker_online_label_b: 'Изменённый JSON',
	tool_json_diff_checker_online_load_sample: 'Загрузить пример',
	tool_json_diff_checker_online_no_diff: 'При текущих опциях семантических различий нет.',
	tool_json_diff_checker_online_op_added: 'добавлено',
	tool_json_diff_checker_online_op_changed: 'изменено',
	tool_json_diff_checker_online_op_removed: 'удалено',
	tool_json_diff_checker_online_result_label: 'Различия по путям',
	tool_json_diff_checker_online_rules_body:
		'После JSON.parse ключи объекта можно отсортировать, чтобы порядок записи не создавал ложное изменение.',
	tool_json_diff_checker_online_rules_item_1:
		'Некорректный JSON сообщается отдельно для каждой стороны. Дубли ключей следуют JSON.parse (последний побеждает, если движок это допускает).',
	tool_json_diff_checker_online_rules_item_2:
		'Игнорирование порядка ключей (включено по умолчанию) сортирует ключи объекта перед обходом путей.',
	tool_json_diff_checker_online_rules_item_3:
		"Игнорирование порядка сортирует нормализованные элементы, но сохраняет повторы; индексы относятся к порядку сравнения, а не к исходным позициям.",
	tool_json_diff_checker_online_rules_item_4:
		'YAML и XML не разбираются. При необходимости сначала преобразуйте YAML на связанной странице YAML ↔ JSON.',
	tool_json_diff_checker_online_rules_title: 'Какие правила ждать',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: 'добавлено {added}, удалено {removed}, изменено {changed}',
	tool_json_diff_checker_online_title: 'Онлайн-проверка различий JSON',
	tool_json_diff_checker_online_usecase_1:
		'Примеры API: два тела ответа, где pretty-print перемешал порядок ключей.',
	tool_json_diff_checker_online_usecase_2: 'Снимки конфигурации: какие пути реально изменились между выкладками.',
	tool_json_diff_checker_online_usecase_3: 'JSON модели: сверить структурированный вывод перед отправкой дальше.',
	tool_json_diff_checker_online_usecases_title: 'Когда это уместно',
};

export default ru;
