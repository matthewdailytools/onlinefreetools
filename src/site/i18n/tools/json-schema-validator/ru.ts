/**
 * i18n tool shard (json-schema-validator / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_json_schema_validator_article:
    'Проверяйте JSON по Schema draft-07 в браузере. Ошибки показывают JSON Pointer — удобно править вывод модели или feed без загрузки данных.',
  tool_json_schema_validator_bad_instance: 'Экземпляр не является корректным JSON.',
  tool_json_schema_validator_bad_schema: 'Schema не является корректным JSON (или не скомпилировалась).',
  tool_json_schema_validator_clear: 'Очистить',
  tool_json_schema_validator_copy_done: 'Скопировано',
  tool_json_schema_validator_copy_errors: 'Копировать ошибки',
  tool_json_schema_validator_desc:
    'Проверка JSON по Schema с ошибками JSON Pointer — локальный draft-07.',
  tool_json_schema_validator_description:
    'Проверяйте JSON по JSON Schema (draft-07) в браузере. Шаги: вставьте Schema и экземпляр, проверьте, читайте каждый сбой по JSON Pointer. Пример: товар без price падает с missingProperty. Текст остаётся во вкладке; Ajv подгружается с CDN только как код библиотеки.',
  tool_json_schema_validator_draft_note: 'Движок: Ajv 8 · JSON Schema draft-07 (по умолчанию).',
  tool_json_schema_validator_empty: 'Сначала вставьте Schema и JSON экземпляра.',
  tool_json_schema_validator_example:
    'Schema требует sku (строка) и price (число ≥ 0). Верный: {"sku":"A-1","price":9.5}. Ошибочный: {"sku":"A-1"} — missingProperty для price в корне (/).',
  tool_json_schema_validator_example_title: 'Пример',
  tool_json_schema_validator_fail: 'Не прошло — см. пути ниже',
  tool_json_schema_validator_faq_a1:
    'Частые причины: нет required, неверный тип или additionalProperties:false. Смотрите Pointer и сообщение keyword.',
  tool_json_schema_validator_faq_a2:
    'instancePath — JSON Pointer в экземпляре (пустой показывается как /). При отсутствии required Ajv добавляет missingProperty в params.',
  tool_json_schema_validator_faq_a3:
    'Страница использует диалект draft-07 в Ajv. Drafts 2019-09 / 2020-12 требуют других сборок и здесь не выбираются.',
  tool_json_schema_validator_faq_a4:
    'Schema и JSON не загружаются на сервер. CDN скачивает только код Ajv.',
  tool_json_schema_validator_faq_a5:
    'Вставьте Schema и JSON модели, проверьте и исправьте каждый Pointer до успеха — полезно перед передачей структурированного вывода дальше.',
  tool_json_schema_validator_faq_q1: 'Почему проверка не прошла?',
  tool_json_schema_validator_faq_q2: 'Как читать ошибку JSON Pointer?',
  tool_json_schema_validator_faq_q3: 'Какой draft использует страница?',
  tool_json_schema_validator_faq_q4: 'Покидает ли JSON браузер?',
  tool_json_schema_validator_faq_q5: 'Как проверить структурированный вывод LLM?',
  tool_json_schema_validator_how_body:
    'Слева Schema, справа экземпляр. Ajv (draft-07) компилирует Schema, проверяет экземпляр и перечисляет ошибки с JSON Pointer. Есть ошибочный и верный примеры; при входе загружается ошибочный, чтобы сразу показать реальные пути.',
  tool_json_schema_validator_how_item_1: 'Вставьте JSON Schema (draft-07) слева.',
  tool_json_schema_validator_how_item_2: 'Вставьте JSON-экземпляр справа.',
  tool_json_schema_validator_how_item_3: 'Нажмите «Проверить».',
  tool_json_schema_validator_how_item_4: 'Исправьте каждую ошибку по пути JSON Pointer.',
  tool_json_schema_validator_how_title: 'Как это работает',
  tool_json_schema_validator_instance_label: 'JSON экземпляра',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Очень большая вставка (>200k символов суммарно). Может быть медленно — возьмите короткий фрагмент.',
  tool_json_schema_validator_need_lib: 'Не удалось загрузить Ajv. Проверьте сеть и обновите страницу.',
  tool_json_schema_validator_pass: 'Верно — экземпляр соответствует Schema',
  tool_json_schema_validator_result_label: 'Результат',
  tool_json_schema_validator_rules_body:
    'На этой странице: разбор → компиляция Schema draft-07 → проверка экземпляра → Pointer на каждую ошибку.',
  tool_json_schema_validator_rules_item_1:
    'Разбор: оба поля должны проходить JSON.parse. Ошибки синтаксиса/компиляции отделены от провалов валидации.',
  tool_json_schema_validator_rules_item_2:
    'Проверка: allErrors собирает все сбои. Строка = instancePath + message (+ missingProperty при необходимости).',
  tool_json_schema_validator_rules_item_3:
    'Draft: диалект draft-07. Не рассчитывайте на словарь 2020-12 здесь.',
  tool_json_schema_validator_rules_item_4:
    'Конфиденциальность: вставка остаётся во вкладке. CDN загружает только код Ajv.',
  tool_json_schema_validator_rules_title: 'Ожидаемые правила',
  tool_json_schema_validator_sample_fail: 'Пример с ошибкой',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Верный пример',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'Валидатор JSON Schema — пути draft-07, локально',
  tool_json_schema_validator_usecase_1:
    'ИИ / агенты: проверить, не пропущены ли поля в структурированном JSON модели, прежде чем доверять ему.',
  tool_json_schema_validator_usecase_2:
    'Торговые feed: проверить JSON товара по Schema перед импортом.',
  tool_json_schema_validator_usecase_3:
    'Отладка API: вставить тело запроса/ответа в фрагмент Schema из контракта.',
  tool_json_schema_validator_usecases_title: 'Подходящие задачи',
  tool_json_schema_validator_validate: 'Проверить',
};
export default ru;
