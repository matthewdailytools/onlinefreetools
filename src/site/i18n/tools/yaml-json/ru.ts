/**
 * i18n tool shard (yaml-json / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_yaml_json_article:
    'Двунаправленный YAML ↔ JSON с явными правилами типов, политикой multi-doc и честными заметками о локальной обработке. Для обмена конфигами, а не второй пустой URL.',
  tool_yaml_json_clear: 'Очистить',
  tool_yaml_json_convert: 'Преобразовать',
  tool_yaml_json_copy_done: 'Скопировано',
  tool_yaml_json_copy_json: 'Копировать JSON',
  tool_yaml_json_copy_yaml: 'Копировать YAML',
  tool_yaml_json_description:
    'Преобразуйте YAML в JSON или JSON в YAML в браузере. Шаги: выберите направление, вставьте конфиг, при необходимости включите безопасные типы JSON, затем скопируйте или скачайте. Несколько документов через --- становятся JSON-массивом. Пример: короткий service map → JSON с отступами для API-клиента — вставка остаётся локальной.',
  tool_yaml_json_dir_label: 'Направление преобразования',
  tool_yaml_json_download_json: 'Скачать JSON',
  tool_yaml_json_download_yaml: 'Скачать YAML',
  tool_yaml_json_empty: 'Сначала вставьте данные.',
  tool_yaml_json_example:
    'YAML `имя: demo` и список `элементы: [a, b]` дают JSON `{"имя":"demo","элементы":["a","b"]}`. JSON `{"title":"Привет","count":2}` dump’ится в YAML с отступами. Граница: голое `flag: yes` при DEFAULT становится boolean true; включите безопасные типы JSON, чтобы оставить строку "yes".',
  tool_yaml_json_example_title: 'Пример',
  tool_yaml_json_faq_a1:
    'Нет. Комментарии в JSON не переживают. Якоря разворачиваются в повторяющиеся значения. Dump JSON обратно в YAML не вернёт исходные комментарии и имена якорей.',
  tool_yaml_json_faq_a2:
    'Документы, разделённые ---, разбираются через loadAll. Один документ → одно JSON-значение; два и больше → массив. Документы после первого не отбрасываем.',
  tool_yaml_json_faq_a3:
    'При схеме js-yaml по умолчанию часто да — некавыченные yes/no/on/off могут стать boolean. Включите «Безопасные типы JSON», чтобы оставить такие скаляры строками, если тип не задан явно.',
  tool_yaml_json_faq_a4:
    'Преобразование остаётся во вкладке. CDN может отдавать js-yaml; это загрузка кода, а не upload вашего YAML или JSON.',
  tool_yaml_json_faq_a5:
    'Некорректный YAML даёт mark парсера со строкой и столбцом, если они доступны. Некорректный JSON сообщает JSON.parse без YAML-подобных mark.',
  tool_yaml_json_faq_q1: 'Можно ли круговой путь без потерь?',
  tool_yaml_json_faq_q2: 'Как обрабатывается multi-document YAML?',
  tool_yaml_json_faq_q3: 'Станут ли голые yes или no boolean?',
  tool_yaml_json_faq_q4: 'Уходит ли вставка из браузера?',
  tool_yaml_json_faq_q5: 'Откуда берутся номера строк в ошибках?',
  tool_yaml_json_how_body:
    'Выберите YAML → JSON или JSON → YAML. Преобразование идёт через js-yaml во вкладке. Потоки из нескольких документов, разделённых ---, становятся JSON-массивом; один документ остаётся одним JSON-значением. Ошибки YAML показывают строку и столбец, если парсер отдаёт mark.',
  tool_yaml_json_how_title: 'Как пользоваться',
  tool_yaml_json_indent_2: '2 пробела',
  tool_yaml_json_indent_4: '4 пробела',
  tool_yaml_json_indent_label: 'Отступ',
  tool_yaml_json_indent_minify: 'Сжать JSON',
  tool_yaml_json_json_input_label: 'Ввод JSON',
  tool_yaml_json_json_output_label: 'Вывод JSON',
  tool_yaml_json_json_placeholder: '{\\n  "title": "Привет",\\n  "count": 2\\n}',
  tool_yaml_json_json_safe: 'Безопасные типы JSON (оставить yes/no строками)',
  tool_yaml_json_large_warn:
    'Очень большая вставка (более ~200 тыс. символов). Преобразование может тормозить — попробуйте короткий фрагмент.',
  tool_yaml_json_need_lib: 'Не удалось загрузить js-yaml. Проверьте сеть и обновите страницу.',
  tool_yaml_json_rules_body:
    'Что ожидать при преобразовании: как типизируются значения без кавычек, как многодокументный YAML отображается в JSON и где обратное преобразование может потерять комментарии или форматирование.',
  tool_yaml_json_rules_item_1:
    'Типы: со схемой DEFAULT некавыченные yes/no/on/off и часть «датоподобных» скаляров могут стать boolean или другими типами. JSON-safe схема держит некавыченные скаляры строками, пока тип не задан явно.',
  tool_yaml_json_rules_item_2:
    'Multi-doc: loadAll — один документ → это JSON-значение; два и больше → массив. Мы не оставляем молча только первый документ.',
  tool_yaml_json_rules_item_3:
    'Потери при круговом пути: комментарии исчезают (в JSON их нет); якоря/алиасы разворачиваются в дубликаты; порядок ключей и стиль после dump могут измениться.',
  tool_yaml_json_rules_item_4:
    'Приватность: вставка не загружается на сервер. Запрос js-yaml с CDN скачивает только код библиотеки, не текст вашего конфига.',
  tool_yaml_json_rules_title: 'Правила, которые стоит ждать',
  tool_yaml_json_sample: 'Загрузить пример',
  tool_yaml_json_sample_json: '{\\n  "title": "Привет",\\n  "count": 2\\n}',
  tool_yaml_json_sample_yaml: 'имя: demo\\nвключено: true\\nэлементы:\\n  - a\\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'YAML в JSON и обратно — типы, multi-doc, локально',
  tool_yaml_json_usecase_1: 'DevOps: превратить multi-resource Kubernetes YAML (через ---) в JSON-массив для скриптов.',
  tool_yaml_json_usecase_2: 'Разработка: переложить JSON-тело API в читаемый YAML перед ручной правкой конфига.',
  tool_yaml_json_usecase_3: 'Data / AI-пайплайны: связать YAML-параметры, которые правят люди, с инструментами только под JSON.',
  tool_yaml_json_usecases_title: 'Когда полезно',
  tool_yaml_json_yaml_input_label: 'Ввод YAML',
  tool_yaml_json_yaml_output_label: 'Вывод YAML',
  tool_yaml_json_yaml_placeholder: 'имя: demo\\nвключено: true\\nэлементы:\\n  - a\\n  - b',
};
export default ru;
