import type { SiteLangDict } from './types';
const ru: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Главная',
  nav_devlogs: 'Журналы разработки',
  nav_tools: 'Инструменты',
  footer_text: 'Online Free Tools · Учебный проект · Постоянное обновление',
  tool_headers_title: 'Проверить HTTP-заголовки сайта — Посмотреть response headers',
  tool_headers_description:
    'Проверьте HTTP-заголовки ответа URL онлайн с нашего edge. Шаги: вставьте https, отправьте HEAD (GET при необходимости), следуйте редиректам, покажите статус и карту заголовков; блокируйте частные хосты. Пример: читайте Cache-Control, CORS и HSTS при отладке CDN или редиректов.',
  tool_headers_article:
    'Смотрите заголовки, которые edge получает для публичного URL — кэш, CORS, редиректы и security-заголовки. Запрос проксируется; тело страницы мы не храним.',
  url_label: 'URL',
  url_placeholder: 'например https://example.com',
  fetch_button: 'Проверить',
  result_title: 'Результат',
  status_label: 'Статус',
  final_url_label: 'Конечный URL',
  headers_label: 'Заголовки',
  error_prefix: 'Ошибка: ',
  note_title: 'Примечания',
  note_1: 'Если сайт отклоняет HEAD, пробуем GET. Цель — заголовки, а не скачивание HTML.',
  note_2: 'localhost и частные сети заблокированы, чтобы worker не сканировал внутренние хосты.',
  tool_headers_how_title: 'Как это работает',
  tool_headers_how_body:
    'Вставьте публичный http(s) URL и нажмите проверить. Edge-worker шлёт HEAD (GET при нужде), следует редиректам и возвращает статус, финальный URL и увиденные заголовки. Частные цели отклоняются. Это взгляд с edge — может отличаться от локального браузера из‑за CDN или гео-маршрутизации.',
  tool_headers_rules_title: 'Что делает проверка',
  tool_headers_rules_body:
    'Краткоживущий прокси только для инспекции заголовков; содержимое страницы не сохраняется. Имена следуют семантике HTTP (см. Ссылки).',
  tool_headers_rules_item_1: 'Сначала HEAD; GET, если origin не поддерживает HEAD.',
  tool_headers_rules_item_2: 'Следует редиректам и сообщает финальный URL.',
  tool_headers_rules_item_3: 'Блокирует localhost и IP частных сетей.',
  tool_headers_rules_item_4: 'Показывает частые заголовки: Cache-Control, CORS, CSP и др.',
  tool_headers_example_title: 'Пример',
  tool_headers_example:
    'example.com → статус 200, финальный URL без изменений; заголовки с content-type: text/html и, по origin, cache-control или security-заголовки.',
  tool_headers_usecases_title: 'Когда пригодится',
  tool_headers_usecase_1: 'Перед релизом проверить Cache-Control или кэш CDN.',
  tool_headers_usecase_2: 'Разобрать CORS preflight по Access-Control-* в ответе.',
  tool_headers_usecase_3: 'Убедиться, что CSP, HSTS и другие security-заголовки реально отдаются.',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Семантика HTTP',
  tool_headers_ref_mdn_label: 'MDN — HTTP-заголовки',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP-кэширование',
  tool_markdown_title: 'Markdown в HTML и обратно — с очисткой',
  tool_markdown_description:
    'Нужен безопасный HTML из Markdown или Markdown из HTML админки? Выберите направление: marked/Turndown и DOMPurify в браузере. Пример: README → .html или HTML из CMS → .md для Git.',
  tool_markdown_article:
    'Оба направления на одном URL, с явными пределами очистки и потерь. Вставка локальна; CDN только для библиотек.',
  tool_markdown_dir_label: 'Направление преобразования',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'Копировать HTML',
  tool_markdown_copy_md: 'Копировать Markdown',
  tool_markdown_copy_done: 'Скопировано',
  tool_markdown_download: 'Скачать HTML',
  tool_markdown_download_md: 'Скачать Markdown',
  tool_markdown_clear: 'Очистить',
  tool_markdown_full_doc: 'Создать полный HTML-документ',
  tool_markdown_input_label: 'Ввод Markdown',
  tool_markdown_preview_label: 'Предпросмотр HTML',
  tool_markdown_html_input_label: 'Ввод HTML',
  tool_markdown_md_output_label: 'Вывод Markdown',
  tool_markdown_placeholder:
    "# Заголовок\n\nБазовый Markdown: **жирный**, списки и блоки кода.\n\n- Пункт 1\n- Пункт 2\n\n```js\nconsole.log('Привет Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Заголовок</h1>\n<p>Привет <strong>мир</strong></p>',
  tool_markdown_sample_md:
    "# Заголовок\n\nБазовый Markdown: **жирный**, списки и блоки кода.\n\n- Пункт 1\n- Пункт 2\n\n```js\nconsole.log('Привет Markdown');\n```",
  tool_markdown_sample_html: '<h1>Заголовок</h1>\n<p>Привет <strong>мир</strong></p>',
  tool_markdown_export_title: 'Экспорт Markdown в HTML',
  tool_markdown_export_description:
    'Сгенерировать полный HTML-документ из Markdown с шаблоном и метаданными. Шаги: рендер, вставка в шаблон, meta, скачивание. Пример: экспорт поста как автономный .html.',
  tool_markdown_large_warn:
    'Очень большой фрагмент (>200k символов). Преобразование может быть медленным — попробуйте короткий отрывок.',
  tool_markdown_need_lib: 'Не удалось загрузить библиотеку преобразования. Проверьте сеть и обновите страницу.',
  tool_markdown_loss_hint:
    'Почти нет Markdown — скрипты, пустые теги или неподдерживаемая разметка могли быть удалены. См. правила и FAQ.',
  tool_markdown_how_title: 'Как пользоваться',
  tool_markdown_how_body:
    'Вкладки задают направление. Слева ввод, справа локальный результат. HTML — фрагмент или простой документ; Markdown — текст для репозитория или LLM.',
  tool_markdown_rules_title: 'Правила по направлениям',
  tool_markdown_rules_intro:
    'Что охватывают правила ниже: какой синтаксис Markdown поддерживается, как очищается HTML и как ваш вставленный текст обрабатывается локально.',
  tool_markdown_rules_item_md_html:
    'В HTML: разбор CommonMark, затем DOMPurify до показа/сохранения.',
  tool_markdown_rules_item_html_md:
    'В Markdown: сначала очистка, затем Turndown (ATX и fenced-код).',
  tool_markdown_rules_item_loss:
    'Стили, скрипты, сложные таблицы часто пропадают. Круговой путь ≠ исходник.',
  tool_markdown_rules_privacy:
    'Текст остаётся во вкладке. CDN не означает загрузку вашего документа на наш сервер.',
  tool_markdown_example_title: 'Пример',
  tool_markdown_example:
    '`# Заголовок` и `Привет **мир**` ↔ безопасный HTML и жирный Markdown.',
  tool_markdown_usecases_title: 'Когда полезно',
  tool_markdown_usecase_1:
    'Отдать CMS очищенный HTML.',
  tool_markdown_usecase_2:
    'Вытащить черновик из HTML письма или панели.',
  tool_markdown_usecase_3:
    'Убрать шум rich text перед промптом.',
  tool_markdown_faq_q1: 'HTML очищается от скриптов?',
  tool_markdown_faq_a1:
    'В направлении Markdown → HTML — да, DOMPurify до предпросмотра и скачивания.',
  tool_markdown_faq_q2: 'Вёрстка сохранится в Markdown?',
  tool_markdown_faq_a2:
    'Обычно нет. Это читаемый черновик, не макет.',
  tool_markdown_faq_q3: 'Уходит ли вставка на сервер?',
  tool_markdown_faq_a3:
    'Преобразование локально. CDN лишь отдаёт файлы библиотек.',
  tool_markdown_faq_q4: 'Круговой путь без изменений?',
  tool_markdown_faq_a4:
    'Не обещаем — сверьте diff при необходимости.',
  tool_markdown_faq_q5: 'Какой Markdown и какие экспорты?',
  tool_markdown_faq_a5:
    'Базовый CommonMark; опционально полный HTML для офлайн-передачи.',
  tool_yaml_json_title: 'YAML в JSON и обратно — типы, multi-doc, локально',
  tool_yaml_json_description:
    'Преобразуйте YAML в JSON или JSON в YAML в браузере. Шаги: выберите направление, вставьте конфиг, при необходимости включите безопасные типы JSON, затем скопируйте или скачайте. Несколько документов через --- становятся JSON-массивом. Пример: короткий service map → JSON с отступами для API-клиента — вставка остаётся локальной.',
  tool_yaml_json_article:
    'Двунаправленный YAML ↔ JSON с явными правилами типов, политикой multi-doc и честными заметками о локальной обработке. Для обмена конфигами, а не второй пустой URL.',
  tool_yaml_json_dir_label: 'Направление преобразования',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_convert: 'Преобразовать',
  tool_yaml_json_copy_json: 'Копировать JSON',
  tool_yaml_json_copy_yaml: 'Копировать YAML',
  tool_yaml_json_copy_done: 'Скопировано',
  tool_yaml_json_download_json: 'Скачать JSON',
  tool_yaml_json_download_yaml: 'Скачать YAML',
  tool_yaml_json_sample: 'Загрузить пример',
  tool_yaml_json_clear: 'Очистить',
  tool_yaml_json_json_safe: 'Безопасные типы JSON (оставить yes/no строками)',
  tool_yaml_json_indent_label: 'Отступ',
  tool_yaml_json_indent_2: '2 пробела',
  tool_yaml_json_indent_4: '4 пробела',
  tool_yaml_json_indent_minify: 'Сжать JSON',
  tool_yaml_json_yaml_input_label: 'Ввод YAML',
  tool_yaml_json_json_output_label: 'Вывод JSON',
  tool_yaml_json_json_input_label: 'Ввод JSON',
  tool_yaml_json_yaml_output_label: 'Вывод YAML',
  tool_yaml_json_yaml_placeholder: 'имя: demo\nвключено: true\nэлементы:\n  - a\n  - b',
  tool_yaml_json_json_placeholder: '{\n  "title": "Привет",\n  "count": 2\n}',
  tool_yaml_json_sample_yaml: 'имя: demo\nвключено: true\nэлементы:\n  - a\n  - b',
  tool_yaml_json_sample_json: '{\n  "title": "Привет",\n  "count": 2\n}',
  tool_yaml_json_large_warn:
    'Очень большая вставка (более ~200 тыс. символов). Преобразование может тормозить — попробуйте короткий фрагмент.',
  tool_yaml_json_need_lib: 'Не удалось загрузить js-yaml. Проверьте сеть и обновите страницу.',
  tool_yaml_json_empty: 'Сначала вставьте данные.',
  tool_yaml_json_how_title: 'Как пользоваться',
  tool_yaml_json_how_body:
    'Выберите YAML → JSON или JSON → YAML. Преобразование идёт через js-yaml во вкладке. Потоки из нескольких документов, разделённых ---, становятся JSON-массивом; один документ остаётся одним JSON-значением. Ошибки YAML показывают строку и столбец, если парсер отдаёт mark.',
  tool_yaml_json_rules_title: 'Правила, которые стоит ждать',
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
  tool_yaml_json_example_title: 'Пример',
  tool_yaml_json_example:
    'YAML `имя: demo` и список `элементы: [a, b]` дают JSON `{"имя":"demo","элементы":["a","b"]}`. JSON `{"title":"Привет","count":2}` dump’ится в YAML с отступами. Граница: голое `flag: yes` при DEFAULT становится boolean true; включите безопасные типы JSON, чтобы оставить строку "yes".',
  tool_yaml_json_usecases_title: 'Когда полезно',
  tool_yaml_json_usecase_1:
    'DevOps: превратить multi-resource Kubernetes YAML (через ---) в JSON-массив для скриптов.',
  tool_yaml_json_usecase_2:
    'Разработка: переложить JSON-тело API в читаемый YAML перед ручной правкой конфига.',
  tool_yaml_json_usecase_3:
    'Data / AI-пайплайны: связать YAML-параметры, которые правят люди, с инструментами только под JSON.',
  tool_yaml_json_faq_q1: 'Можно ли круговой путь без потерь?',
  tool_yaml_json_faq_a1:
    'Нет. Комментарии в JSON не переживают. Якоря разворачиваются в повторяющиеся значения. Dump JSON обратно в YAML не вернёт исходные комментарии и имена якорей.',
  tool_yaml_json_faq_q2: 'Как обрабатывается multi-document YAML?',
  tool_yaml_json_faq_a2:
    'Документы, разделённые ---, разбираются через loadAll. Один документ → одно JSON-значение; два и больше → массив. Документы после первого не отбрасываем.',
  tool_yaml_json_faq_q3: 'Станут ли голые yes или no boolean?',
  tool_yaml_json_faq_a3:
    'При схеме js-yaml по умолчанию часто да — некавыченные yes/no/on/off могут стать boolean. Включите «Безопасные типы JSON», чтобы оставить такие скаляры строками, если тип не задан явно.',
  tool_yaml_json_faq_q4: 'Уходит ли вставка из браузера?',
  tool_yaml_json_faq_a4:
    'Преобразование остаётся во вкладке. CDN может отдавать js-yaml; это загрузка кода, а не upload вашего YAML или JSON.',
  tool_yaml_json_faq_q5: 'Откуда берутся номера строк в ошибках?',
  tool_yaml_json_faq_a5:
    'Некорректный YAML даёт mark парсера со строкой и столбцом, если они доступны. Некорректный JSON сообщает JSON.parse без YAML-подобных mark.',

  tool_csv_json_title: 'Конвертер CSV ↔ JSON — типы, разделитель, локально',
  tool_csv_json_description:
    'Преобразуйте CSV в JSON или JSON в CSV в браузере. Шаги: выберите направление, вставьте или загрузите, задайте разделитель и заголовок, затем скопируйте или скачайте. Обрабатывает поля в кавычках с запятыми, точками с запятой и табуляцией; из JSON в CSV вложенные объекты уплощаются в столбцы. Пример: превратите таблицу товаров (sku, название, цена) в массив JSON — данные остаются локально.',
  tool_csv_json_article:
    'Двунаправленное CSV ↔ JSON с понятными правилами типов, разделителя и кавычек, а также как вложенный JSON уплощается в столбцы. Для обмена таблица ↔ API, а не ещё одна пустая страница.',
  tool_csv_json_dir_label: 'Направление преобразования',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_convert: 'Преобразовать',
  tool_csv_json_copy_json: 'Копировать JSON',
  tool_csv_json_copy_csv: 'Копировать CSV',
  tool_csv_json_copy_done: 'Скопировано',
  tool_csv_json_download_json: 'Скачать JSON',
  tool_csv_json_download_csv: 'Скачать CSV',
  tool_csv_json_sample: 'Загрузить пример',
  tool_csv_json_clear: 'Очистить',
  tool_csv_json_delimiter_label: 'Разделитель',
  tool_csv_json_delimiter_auto: 'Автоопределение',
  tool_csv_json_delimiter_comma: 'Запятая ,',
  tool_csv_json_delimiter_semicolon: 'Точка с запятой ;',
  tool_csv_json_delimiter_tab: 'Табуляция',
  tool_csv_json_header: 'Первая строка — заголовки',
  tool_csv_json_typing: 'Определять типы (числа/логические)',
  tool_csv_json_indent_label: 'Отступ',
  tool_csv_json_indent_2: '2 пробела',
  tool_csv_json_indent_4: '4 пробела',
  tool_csv_json_indent_minify: 'Сжать JSON',
  tool_csv_json_csv_input_label: 'Ввод CSV',
  tool_csv_json_json_output_label: 'Вывод JSON',
  tool_csv_json_json_input_label: 'Ввод JSON',
  tool_csv_json_csv_output_label: 'Вывод CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_large_warn:
    'Очень большой ввод (более 2 млн символов). Преобразование может быть медленным; попробуйте файл поменьше.',
  tool_csv_json_need_lib: 'Не удалось загрузить Papa Parse. Проверьте соединение и обновите страницу.',
  tool_csv_json_empty: 'Сначала вставьте содержимое.',
  tool_csv_json_how_title: 'Как это работает',
  tool_csv_json_how_body:
    'Выберите CSV → JSON или JSON → CSV; разбор и генерация выполняются в этой вкладке через Papa Parse. Для CSV выберите разделитель (или автоопределение), считать ли первую строку заголовком и определять ли числа/логические. Для JSON вложенные объекты становятся столбцами по точечному пути, а столбцы — это объединение всех ключей.',
  tool_csv_json_rules_title: 'Правила, которые стоит ожидать',
  tool_csv_json_rules_body:
    'Что ожидать при преобразовании: как обрабатываются типы ячеек, какие разделители и правила кавычек применяются и как вложенный JSON отображается в столбцы.',
  tool_csv_json_rules_item_1:
    'Типы: ячейки CSV по умолчанию текст. Включите «Определять типы» для чисел/логических, но 007 станет 7, а длинные последовательности цифр могут потерять точность; оставьте выключенным для SKU, индексов и телефонов.',
  tool_csv_json_rules_item_2:
    'Разделители: запятая, точка с запятой (часто в европейском Excel) и табуляция (TSV); автоопределение угадывает по тексту. Поля с разделителем, кавычками или переносами строк заключаются в двойные кавычки по RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: объекты уплощаются по точечным путям (dim.w, dim.h); массивы записываются как строка JSON в одной ячейке; столбцы — объединение всех ключей, отсутствующее остаётся пустым.',
  tool_csv_json_rules_item_4:
    'Конфиденциальность: ваш текст и файлы не загружаются. Загрузка Papa Parse с CDN скачивает только код библиотеки, а не ваши данные.',
  tool_csv_json_example_title: 'Пример',
  tool_csv_json_example:
    'CSV `sku,title,price` со строкой `A-001,"Chair, oak",129.9` даёт JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (без типов price остаётся текстом; включите их для числа 129.9). Обратно: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` даёт заголовок `sku,dim.w,dim.h` со строкой `A-001,40,90`.',
  tool_csv_json_usecases_title: 'Подходит для',
  tool_csv_json_usecase_1:
    'E-commerce: превратите выгруженную таблицу товаров (sku, название, цена) в массив JSON для API магазина или маркетплейса.',
  tool_csv_json_usecase_2:
    'Разработчики: переформатируйте ответ JSON в CSV для таблиц, сверки или передачи.',
  tool_csv_json_usecase_3:
    'Данные/эксплуатация: перенесите CSV отчётов или событий (запятая, точка с запятой или TSV) в JSON для конвейера, безопасно экранируя запятые и переносы строк.',
  tool_csv_json_faq_q1: 'Поддерживаются ли точка с запятой или табуляция, а не только запятая?',
  tool_csv_json_faq_a1:
    'Да. Выберите запятую, точку с запятой или табуляцию либо оставьте автоопределение — Papa Parse угадает по тексту. Точка с запятой часто встречается в европейских выгрузках Excel; табуляция — это TSV.',
  tool_csv_json_faq_q2: 'Останутся ли мои числа, ведущие нули и идентификаторы неизменными?',
  tool_csv_json_faq_a2:
    'По умолчанию каждая ячейка остаётся текстом, поэтому 007 и длинные ID сохраняются. При включении «Определять типы» числоподобные значения становятся числами: 007 станет 7, а очень длинные цифры могут потерять точность. Оставьте выключенным для SKU, индексов и телефонов.',
  tool_csv_json_faq_q3: 'Как обрабатываются поля с запятыми, кавычками или переносами строк?',
  tool_csv_json_faq_a3:
    'Они заключаются в двойные кавычки, а внутренние кавычки удваиваются по RFC 4180. Так заголовок вроде Chair, oak остаётся в одном поле, а не разбивается на два столбца.',
  tool_csv_json_faq_q4: 'Как вложенный JSON становится столбцами CSV?',
  tool_csv_json_faq_a4:
    'Объекты уплощаются в столбцы по точечному пути (dim.w, dim.h). Массивы записываются как строка JSON в одной ячейке. Столбцы — объединение ключей всех записей, а запись без ключа получает пустую ячейку.',
  tool_csv_json_faq_q5: 'Покидают ли мои данные браузер?',
  tool_csv_json_faq_a5:
    'Нет. Разбор остаётся в этой вкладке, а выбранные файлы читаются локально. CDN может отдавать Papa Parse, но этот запрос скачивает только код, а не загружает ваш CSV или JSON.',
  tool_bmi_title: 'Калькулятор ИМТ — как рассчитать индекс массы тела',
  tool_bmi_description:
    'Рассчитайте индекс массы тела (ИМТ) по формуле для взрослых. Шаги: выберите метрическую или имперскую систему, введите вес и рост, получите ИМТ и сопоставьте с распространёнными категориями. Пример: 70 кг и 175 см → ИМТ ≈ 22,9 (норма). Только для обучения и скрининга, не диагноз.',
  tool_bmi_article:
    'Бесплатный калькулятор показывает, как для взрослых считается ИМТ по весу и росту: метрическая и имперская формулы, пороги категорий и ограничения (спортсмены, дети). Расчёт в браузере, данные не загружаются.',
  tool_bmi_weight_label: 'Вес (кг)',
  tool_bmi_weight_placeholder: 'Введите вес в килограммах',
  tool_bmi_height_label: 'Рост (см)',
  tool_bmi_height_placeholder: 'Введите рост в сантиметрах',
  tool_bmi_calculate: 'Рассчитать ИМТ',
  tool_bmi_how_title: 'Как пользоваться',
  tool_bmi_how_body:
    'Выберите метрическую или имперскую систему, введите вес и рост и нажмите «Рассчитать». Инструмент применяет стандартную формулу ИМТ для взрослых, показывает одну десятичную и относит значение к распространённым категориям скрининга. Числа считаются локально и не отправляются.',
  tool_bmi_formula_title: 'Формула ИМТ и категории для взрослых',
  tool_bmi_formula_body:
    'Метрическая: ИМТ = вес (кг) ÷ рост (м)². Имперская: ИМТ = 703 × вес (фунт) ÷ рост (дюйм)². Пороги здесь соответствуют широко публикуемым диапазонам скрининга.',
  tool_bmi_formula_item_1: 'Недостаточный вес: ИМТ < 18,5',
  tool_bmi_formula_item_2: 'Норма: ИМТ 18,5–24,9',
  tool_bmi_formula_item_3: 'Избыточный вес: ИМТ 25–29,9',
  tool_bmi_formula_item_4: 'Ожирение: ИМТ ≥ 30',
  tool_bmi_example_title: 'Пример',
  tool_bmi_example:
    'Пример (метрическая система): вес 70 кг, рост 175 см → рост = 1,75 м → ИМТ = 70 / (1,75²) ≈ 22,9 → нормальный диапазон скрининга.',
  tool_bmi_usecases_title: 'Когда пригодится',
  tool_bmi_usecase_1: 'Быстрая самопроверка взрослого перед плановым визитом к врачу (только скрининг).',
  tool_bmi_usecase_2: 'Записать базовый ИМТ при старте фитнес-программы вместе с другими показателями.',
  tool_bmi_usecase_3: 'Сверить одно измерение в метрической и имперской системах.',
  tool_bmi_ref_who_label: 'ВОЗ — справка о ожирении и избыточном весе',
  tool_bmi_ref_cdc_label: 'CDC — категории ИМТ для взрослых',
  bmi_chart_title: 'Категории ИМТ для взрослых (скрининг)',
  bmi_underweight: 'Недостаточный вес',
  bmi_normal: 'Норма',
  bmi_overweight: 'Избыточный вес',
  bmi_obese: 'Ожирение',
  bmi_metric_units: 'Метрическая',
  bmi_imperial_units: 'Имперская',
  bmi_unit_group_label: 'Система единиц',
  bmi_result_label: 'Ваш ИМТ',
  bmi_invalid_input: 'Введите положительные значения веса и роста для расчёта.',
  bmi_weight_lbs: 'Вес (фунт)',
  bmi_weight_lbs_placeholder: 'Вес в фунтах',
  bmi_height_ft: 'Рост (фут)',
  bmi_height_ft_placeholder: 'Футы',
  bmi_height_in: 'Рост (дюйм)',
  bmi_height_in_placeholder: 'Дюймы',
  bmi_interpretation_underweight:
    'Результат скрининга: диапазон недостаточного веса. ИМТ не является диагнозом — при необходимости обсудите с врачом.',
  bmi_interpretation_normal:
    'Результат скрининга: нормальный диапазон для взрослых. ИМТ сам по себе не измеряет жир или физическую форму.',
  bmi_interpretation_overweight:
    'Результат скрининга: диапазон избыточного веса. ИМТ не является диагнозом — при необходимости обсудите с врачом.',
  bmi_interpretation_obese:
    'Результат скрининга: диапазон ожирения. ИМТ не является диагнозом — при необходимости обсудите с врачом.',
  tool_text_diff_description:
    'Сравните два текста онлайн и посмотрите, что изменилось. Процесс: вставьте исходный и исправленный текст, выберите сравнение по строкам, словам или символам, при желании игнорируйте пробелы или уравняйте переносы Windows (CRLF→LF), затем подсветите добавления и удаления в браузере. Пример: замените «привет мир» на «привет друг» — в режиме слов будет одна замена.',
  tool_text_diff_article:
    'Бесплатное сравнение двух текстов рядом. Режим строк — для конфигов и кода; слов — для текстов и промптов; символов — для опечаток. Всё в браузере: текст на сервер не отправляется.',
  tool_text_diff_example:
    'Пример (режим слов): A = «Привет мир», B = «Привет друг» → одно изменение (мир → друг). Если из трёх строк меняется только средняя, режим строк помечает именно её.',
  tool_text_diff_sample_a: 'Привет мир\nстрока два\nстрока три',
  tool_text_diff_sample_b: 'Привет друг\nстрока два\nстрока три',
  tool_text_diff_label_a: 'Исходный текст',
  tool_text_diff_label_b: 'Исправленный текст',
  tool_text_diff_placeholder_a: 'Вставьте исходный текст…',
  tool_text_diff_placeholder_b: 'Вставьте исправленный текст…',
  tool_text_diff_mode_label: 'Сравнивать по',
  tool_text_diff_mode_lines: 'Строкам',
  tool_text_diff_mode_words: 'Словам',
  tool_text_diff_mode_chars: 'Символам',
  tool_text_diff_ignore_ws: 'Игнорировать пробелы',
  tool_text_diff_normalize_eol: 'Считать CRLF и LF одинаковыми',
  tool_text_diff_compare: 'Сравнить',
  tool_text_diff_swap: 'Поменять стороны',
  tool_text_diff_clear: 'Очистить',
  tool_text_diff_result_label: 'Различия',
  tool_text_diff_legend: 'Зелёный = добавлено · Красный = удалено',
  tool_text_diff_summary: 'Добавлено {added}, удалено {removed}',
  tool_text_diff_no_diff: 'Различий нет — тексты совпадают.',
  tool_text_diff_empty_hint: 'Вставьте текст с одной или обеих сторон и нажмите «Сравнить».',
  tool_text_diff_large_warn: 'Очень большая вставка (>100k символов). Может тормозить — попробуйте короткий фрагмент.',
  tool_text_diff_need_lib: 'Не удалось загрузить сравнение. Проверьте сеть и обновите страницу.',
  tool_text_diff_how_title: 'Как пользоваться',
  tool_text_diff_how_body:
    'Вставьте две версии, выберите детализацию (строка, слово или символ) и смотрите зелёные добавления и красные удаления. Вставленный текст мы не загружаем и не храним. Страница может загрузить open-source библиотеку jsdiff с CDN, чтобы сравнение шло в браузере.',
  tool_text_diff_rules_title: 'Как считаются различия',
  tool_text_diff_rules_body:
    'Инструмент ищет короткий список правок от текста A к B (классический diff / подход Myers через jsdiff). Режим строк — для конфигов и кода. Режим слов — для предложений и промптов. Режим символов — для мелких опечаток, но шумнее. Игнор пробелов скрывает правки только отступов. Уравнивание CRLF и LF не даёт всей строке краснеть из‑за одного стиля переноса.',
  tool_text_diff_rules_intro:
    'Инструмент ищет короткий список правок, чтобы превратить текст A в B (классический diff / подход Myers через jsdiff). Выберите режим под задачу:',
  tool_text_diff_rules_item_lines:
    'Строка — для .env, YAML и кода; изменённая строка подсвечивается целиком. Быстро читать, но одно слово тоже красит всю строку.',
  tool_text_diff_rules_item_words:
    'Слово — для предложений, писем и промптов; подсвечивает отдельные слова. Удобнее для прозы; пунктуация может дробить результат.',
  tool_text_diff_rules_item_chars:
    'Символ — для мелких опечаток; точнее всего, но шумно на длинных правках.',
  tool_text_diff_rules_options:
    'Игнор пробелов скрывает правки только отступов. Считать CRLF и LF одинаковыми не даёт всей строке краснеть из‑за стиля перевода строки (Windows vs Unix).',
  tool_text_diff_example_title: 'Пример',
  tool_text_diff_usecases_title: 'Когда пригодится',
  tool_text_diff_usecase_1: 'Проверить конфиг: сравните фрагменты .env или YAML построчно.',
  tool_text_diff_usecase_2: 'Править промпт: в режиме слов видно, какие формулировки добавили или убрали.',
  tool_text_diff_usecase_3: 'Вычитать текст или перевод: убедиться, что изменились только нужные предложения.',
  tool_text_diff_faq_q1: 'Сравнивать по строкам или по словам?',
  tool_text_diff_faq_a1: 'Строки — для кода и конфигов. Слова — для фраз, писем и промптов: подсвечиваются отдельные слова.',
  tool_text_diff_faq_q2: 'Отправляется ли мой текст на сервер?',
  tool_text_diff_faq_a2:
    'Вставленный текст мы не загружаем и не храним — сравнение идёт в браузере. Страница может загрузить jsdiff (open source) с CDN; ваш текст при этом на наши серверы не отправляется.',
  tool_text_diff_faq_q3: 'Почему из‑за переноса краснеет вся строка?',
  tool_text_diff_faq_a3: 'В Windows часто CRLF, в Mac/Linux — LF. Включите «Считать CRLF и LF одинаковыми» и сравните снова.',
  tool_text_diff_faq_q4: 'Можно ли сравнивать картинки или бинарные файлы?',
  tool_text_diff_faq_a4: 'Нет. Только обычный текст.',

  tool_headers_faq_q1: 'Что показывают HTTP-заголовки ответа?',
  tool_headers_faq_a1:
    'Метаданные ответа сервера: тип контента, правила кэша, редиректы и политики вроде HSTS, CSP или CORS.',
  tool_headers_faq_q2: 'Скачивается ли весь HTML страницы?',
  tool_headers_faq_a2:
    'Сначала HEAD, GET при необходимости. Цель — заголовки, а не scraping или хранение body.',
  tool_headers_faq_q3: 'Почему localhost и частные IP запрещены?',
  tool_headers_faq_a3:
    'Частные сети блокируются, чтобы worker нельзя было использовать для сканирования внутренних хостов.',
  tool_headers_faq_q4: 'Это то же самое, что DevTools браузера?',
  tool_headers_faq_a4:
    'Не всегда. Вы видите ответ с нашего edge; CDN, гео-маршрутизация или anti-bot могут отличаться от локального браузера.',
  tool_headers_faq_q5: 'Сохраняете ли вы проверенные URL?',
  tool_headers_faq_a5:
    'Короткий edge-запрос без истории URL. Не вставляйте секреты в query string.',
  tool_bmi_faq_q1: 'Какая формула ИМТ?',
  tool_bmi_faq_a1:
    'Метрическая: ИМТ = вес(кг) / рост(м)². Имперская: ИМТ = 703 × вес(фунт) / рост(дюйм)².',
  tool_bmi_faq_q2: 'Что означают категории ИМТ?',
  tool_bmi_faq_a2:
    'Распространённые пороги для взрослых: недостаточный вес <18,5, норма 18,5–24,9, избыточный 25–29,9, ожирение ≥30. Это ориентиры скрининга, а не диагноз.',
  tool_bmi_faq_q3: 'Подходит ли ИМТ спортсменам?',
  tool_bmi_faq_a3:
    'Не всегда. ИМТ не отличает мышцы от жира. У спортсменов может быть высокий ИМТ при низком проценте жира — нужна индивидуальная оценка у врача.',
  tool_bmi_faq_q4: 'Можно ли для детей или беременности?',
  tool_bmi_faq_a4:
    'Пороги для взрослых не подходят детям, подросткам и беременным. Используйте возрастные таблицы и клинические рекомендации.',
  tool_bmi_disclaimer:
    'Калькулятор ИМТ предназначен только для обучающего скрининга взрослых. Это не медицинский совет, не ставит диагноз и не заменяет помощь квалифицированного специалиста.',
  tool_bmi_references:
    'Справка ВОЗ об ожирении и избыточном весе; руководство CDC по категориям ИМТ для взрослых; стандартные метрическая и имперская формулы ИМТ.',

  tool_squarefeet_title: 'Квадратные футы в м² — Для жилья и ремонта',
  tool_squarefeet_description:
    'Переведите площадь комнаты между квадратными футами и квадратными метрами для объявлений и ремонта. Шаги: выберите ft/m/in, введите длину × ширину, посчитайте площадь, покажите ft² и m² с фактором NIST 1 ft² = 0.09290304 m². Пример: квартира 850 sq ft ≈ 78,97 м².',
  tool_squarefeet_article:
    'Оцените прямоугольную площадь по длине и ширине и переведите между квадратными футами и метрами. Для объявлений, пола и покраски — не оценка стоимости и не разделение жилой/общей площади.',
  tool_squarefeet_length_label: 'Длина',
  tool_squarefeet_length_placeholder: 'Введите длину',
  tool_squarefeet_width_label: 'Ширина',
  tool_squarefeet_width_placeholder: 'Введите ширину',
  tool_squarefeet_calculate: 'Перевести площадь',
  tool_squarefeet_unit_group_label: 'Единицы ввода',
  unit_feet: 'Футы',
  unit_meters: 'Метры',
  unit_inches: 'Дюймы',
  sqft_unit: 'sq ft',
  tool_squarefeet_result_note: 'Округление до двух знаков. Фактор: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} м²',
  tool_squarefeet_invalid_input: 'Введите положительные длину и ширину.',
  tool_squarefeet_usage_title: 'Как пользоваться',
  tool_squarefeet_usage: 'Выберите единицу, введите длину и ширину — получите sq ft и эквивалент в м².',
  tool_squarefeet_how_title: 'Как это работает',
  tool_squarefeet_how_body:
    'Выберите футы, метры или дюймы. Умножьте длину × ширину после перевода в футы, затем в м² точным SI-фактором. Пустые и отрицательные значения отклоняются.',
  tool_squarefeet_formula_title: 'Формула площади и коэффициент',
  tool_squarefeet_formula_body:
    'Площадь (ft²) = длина (ft) × ширина (ft). В метрах: ft² = (L×W) ÷ 0.09290304. В дюймах: каждую сторону ÷ 12. Фактор: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Ввод в футах: площадь_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Ввод в метрах: площадь_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Ввод в дюймах: площадь_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'м² = площадь_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_example_title: 'Пример',
  tool_squarefeet_example:
    'Объявление: квартира 850 sq ft → 850 × 0.09290304 ≈ 78,97 м². Комната: 10 ft × 12 ft = 120 sq ft ≈ 11,15 м².',
  tool_squarefeet_usecases_title: 'Когда пригодится',
  tool_squarefeet_usecase_1: 'Сравнить американское объявление в sq ft с местными в м².',
  tool_squarefeet_usecase_2: 'Оценить пол/ковёр прямоугольной комнаты до заказа материалов.',
  tool_squarefeet_usecase_3: 'Грубая оценка краски/ремонта при смешанных единицах на чертеже.',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Руководство по Международной системе единиц (SI)',
  tool_squarefeet_faq_q1: 'Какой коэффициент ft² ↔ м²?',
  tool_squarefeet_faq_a1: 'Ровно 1 ft² = 0.09290304 m² (SI / NIST). Два знака после запятой.',
  tool_squarefeet_faq_q2: 'Отличаете жилую площадь от общей?',
  tool_squarefeet_faq_a2: 'Нет. Только перевод плоской площади прямоугольника.',
  tool_squarefeet_faq_q3: 'Можно ли оценить цену жилья?',
  tool_squarefeet_faq_a3: 'Нет. Перевод площади — не оценка и не ценовая модель.',
  tool_squarefeet_faq_q4: 'А комнаты в форме L?',
  tool_squarefeet_faq_a4: 'Разбейте на прямоугольники, переведите каждый и сложите.',
  tool_percentage_change_title: 'Калькулятор процентного изменения — От старого значения к новому',
  tool_percentage_change_description:
    'Посчитайте процентный рост или спад от старого значения к новому. Шаги: введите оба, примените (новое − старое) / старое × 100, смотрите знак. Пример: 80 → 100 = +25%. Для выручки MoM, DAU и цен — не процентные пункты.',
  tool_percentage_change_article:
    'Относительное процентное изменение отвечает, насколько метрика сдвинулась относительно базы. Введите старое и новое; формула (новое − старое) / старое × 100. Для KPI, не замена ROI.',
  tool_percentage_change_original_label: 'Старое значение',
  tool_percentage_change_new_label: 'Новое значение',
  tool_percentage_change_calculate: 'Рассчитать',
  tool_percentage_change_result_label: 'Процентное изменение',
  tool_percentage_change_example:
    'Полный пример: старое 80, новое 100 → Δ = 20 → (20 / 80) × 100 = +25%. Спад: 100 → 80 = −20%.',
  tool_percentage_change_result_invalid: 'Старое значение должно быть ненулевым числом.',
  tool_percentage_change_increase: 'рост',
  tool_percentage_change_decrease: 'снижение',
  tool_percentage_change_no_change: 'без изменений',
  tool_percentage_change_abs_note: 'Абсолютное изменение: {delta}',
  tool_percentage_change_how_title: 'Как это работает',
  tool_percentage_change_how_body:
    'Введите базу (старое) и последующее значение. Вычитаем, делим на старое, ×100. Плюс — рост, минус — спад. При старом = 0 относительное изменение не определено.',
  tool_percentage_change_formula_title: 'Формула процентного изменения',
  tool_percentage_change_formula_body:
    'Изменение % = (новое − старое) / старое × 100. В знаменателе знаковое старое (не |старое|).',
  tool_percentage_change_formula_item_1: 'Δ = новое − старое',
  tool_percentage_change_formula_item_2: 'процент = (Δ / старое) × 100',
  tool_percentage_change_formula_item_3: 'старое = 0 → не определено (ошибка)',
  tool_percentage_change_example_title: 'Пример',
  tool_percentage_change_usecases_title: 'Бизнес и данные',
  tool_percentage_change_usecase_1: 'Выручка месяц к месяцу: GMV 80 прошлый месяц vs 100 этот → +25%.',
  tool_percentage_change_usecase_2: 'Продукт: DAU с 50k до 55k → +10% относительно.',
  tool_percentage_change_usecase_3: 'Цена: с 40 до 34 → −15% (не «6 процентных пунктов»).',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_faq_q1: 'Какова формула процентного изменения?',
  tool_percentage_change_faq_a1: 'Изменение % = (новое − старое) / старое × 100. Плюс — рост, минус — спад.',
  tool_percentage_change_faq_q2: 'Почему старое значение не может быть нулём?',
  tool_percentage_change_faq_a2: 'Деление на ноль не определено. Без базы нет относительного изменения.',
  tool_percentage_change_faq_q3: 'Это то же, что процентные пункты?',
  tool_percentage_change_faq_a3: 'Нет. С 10% до 12% — +2 пункта, но относительный рост 20%.',
  tool_percentage_change_faq_q4: 'Чем отличается от ROI?',
  tool_percentage_change_faq_a4: 'ROI сравнивает прибыль с затратами инвестиций. Процентное изменение — любой новый показатель к старой базе.',
  tool_gradient_title: 'Калькулятор градиента — многомерный ∇f (частные производные)',
  tool_gradient_description:
    'Вычислите градиент ∇f скалярного поля как вектор частных производных. Шаги: дифференцируйте по каждой переменной, соберите ∇f, оцените в точке. Демо f(x,y)=x²y+3y → ∇f=(2xy, x²+3); в (1,2) → (4,4). Для оптимизации и объяснения градиентного спуска в ML.',
  tool_gradient_desc:
    'Вычислите градиент ∇f скалярного поля как вектор частных производных. Шаги: дифференцируйте по каждой переменной, соберите ∇f, оцените в точке. Демо f(x,y)=x²y+3y → ∇f=(2xy, x²+3); в (1,2) → (4,4). Для оптимизации и объяснения градиентного спуска в ML.',
  tool_gradient_article:
    'Градиент многомерной скалярной функции — вектор её первых частных производных. Указывает направление наискорейшего локального роста. Это не калькулятор наклона по двум точкам.',
  tool_gradient_fn_hint: 'Демо-функция (фиксирована в интерактивном блоке):',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'напр. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'напр. 2',
  tool_gradient_calculate: 'Вычислить ∇f',
  tool_gradient_result_label: 'Градиент в вашей точке',
  tool_gradient_result_note: 'Вычислено f(x,y)=x²y+3y в ({x}, {y}).',
  tool_gradient_invalid_input: 'Введите конечные числовые x и y.',
  tool_gradient_how_title: 'Как это работает',
  tool_gradient_how_body:
    'Для скаляра f вычислите каждую частную ∂f/∂xᵢ, зафиксировав остальные, соберите ∇f и подставьте координаты. Блок использует f(x,y)=x²y+3y для проверки вручную.',
  tool_gradient_formula_title: 'Формула многомерного градиента',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Для двух переменных: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f — наискорейший подъём; −∇f — в градиентном спуске.',
  tool_gradient_formula_item_1: 'Возьмите ∂f/∂xᵢ по каждой переменной',
  tool_gradient_formula_item_2: 'Соберите вектор ∇f',
  tool_gradient_formula_item_3: 'Оцените компоненты в точке',
  tool_gradient_formula_item_4: 'Демо: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_example_title: 'Пример',
  tool_gradient_example:
    'f(x,y)=x²y+3y. Частные: ∂f/∂x=2xy, ∂f/∂y=x²+3. В (1,2): ∇f=(4,4).',
  tool_gradient_usecases_title: 'Оптимизация и машинное обучение',
  tool_gradient_usecase_1: 'Проверить частные производные перед шагом оптимизации.',
  tool_gradient_usecase_2: 'Объяснить градиентный спуск: шаг против ∇loss.',
  tool_gradient_usecase_3: 'Физическая интуиция: ∇f указывает, где скалярное поле растёт быстрее всего.',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_faq_q1: 'Что такое градиент в многомерном анализе?',
  tool_gradient_faq_a1: '∇f — вектор частных производных, указывающий наискорейший локальный рост.',
  tool_gradient_faq_q2: 'Как считать вручную?',
  tool_gradient_faq_a2: 'Дифференцируйте по каждой переменной при фиксированных остальных, соберите вектор, оцените в точке.',
  tool_gradient_faq_q3: 'Тот же «градиент», что в ML?',
  tool_gradient_faq_a3: 'Да, тот же объект: ∇ скалярной функции потерь. Страница объясняет определение, не обучает модель.',
  tool_gradient_faq_q4: 'Это калькулятор наклона по двум точкам?',
  tool_gradient_faq_a4: 'Нет. Наклон rise/run — другой инструмент; здесь ∇f — вектор частных.',

  /* --- IG: ip / roi / mr --- */
tool_ip_address_title: 'Узнать свой IP — Показать публичный IP-адрес',
  tool_ip_address_description:
    'Посмотрите публичный IP, который наш edge видит для вашего соединения. Процесс: откройте страницу или нажмите «Обновить»; worker читает доверенный адрес клиента. Пример: может показать 203.0.113.10. При VPN/прокси виден IP выхода, а не LAN.',
  tool_ip_address_article:
    'Страница показывает публичный исходящий IP с точки зрения нашего edge — удобно проверить VPN, сообщить адрес в поддержку или отладить allowlist. Это не геолокация и не поиск провайдера.',
  tool_ip_address_how_title: 'Как это работает',
  tool_ip_address_how_body:
    'Браузер вызывает наш edge API. Worker возвращает IP клиента, привязанный к соединению (не только подделываемый заголовок). Обновляйте когда угодно; аккаунт не нужен.',
  tool_ip_address_rules_title: 'Что означает этот IP',
  tool_ip_address_rules_body:
    'Значение — публичный адрес, который edge связывает с вашим TCP/TLS-соединением. Обычно так сайты видят вашу исходящую личность. Ограничения:',
  tool_ip_address_rules_item_1: 'При VPN или HTTP-прокси виден IP выхода провайдера, а не домашний LAN.',
  tool_ip_address_rules_item_2: 'За NAT несколько устройств делят один публичный IP; 192.168.x.x здесь не появляется.',
  tool_ip_address_rules_item_3: 'Мы предпочитаем доверенный IP клиента edge, а не только X-Forwarded-For (его можно подделать).',
  tool_ip_address_rules_item_4: 'Может быть IPv4 или IPv6 в зависимости от пути; в dual-stack после переподключения может смениться.',
  tool_ip_address_example_title: 'Пример',
  tool_ip_address_example:
    'Документационный пример: edge видит 203.0.113.10 (зарезервированный TEST-NET-3). Живой результат — ваш реальный публичный исходящий IP.',
  tool_ip_address_usecases_title: 'Когда пригодится',
  tool_ip_address_usecase_1: 'Проверить, меняет ли VPN/прокси публичный IP на самом деле.',
  tool_ip_address_usecase_2: 'Сообщить в поддержку или firewall, какой публичный IP добавить в список.',
  tool_ip_address_usecase_3: 'Быстрая проверка при отладке удалённого доступа или API allowlist.',
  tool_ip_address_ref_mdn_label: 'MDN — заголовок X-Forwarded-For (риски подделки)',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — что такое IP-адрес?',
  ip_label: 'Ваш публичный IP',
  fetch_ip_button: 'Обновить',
  fetching_message: 'Загрузка…',
  tool_ip_address_faq_q1: 'Почему он отличается от LAN IP?',
  tool_ip_address_faq_a1:
    'Частные адреса вроде 192.168.x.x остаются во внутренней сети через NAT. Здесь только публичный адрес со стороны интернета.',
  tool_ip_address_faq_q2: 'Как страница получает мой IP?',
  tool_ip_address_faq_a2:
    'Браузер запрашивает edge API; worker возвращает доверенный IP клиента этого соединения.',
  tool_ip_address_faq_q3: 'Храните ли вы мой IP?',
  tool_ip_address_faq_a3:
    'Запрос короткий и выполняется на edge. Истории IP нет; считайте результат временным отображением.',
  tool_ip_address_faq_q4: 'Что если включён VPN или прокси?',
  tool_ip_address_faq_a4:
    'Обычно виден IP выхода VPN/прокси. Так и должно быть: сайты видят ту же исходящую личность.',

  tool_roi_title: 'Калькулятор ROI — Как рассчитать рентабельность инвестиций',
  tool_roi_description:
    'Рассчитайте простой ROI по формуле (Доход − Затраты) / Затраты × 100% или (Итог − Начало) / Начало × 100%. Процесс: введите затраты и конечную стоимость (или чистую прибыль) и проверьте допущения о налогах, комиссиях и времени. Пример: затраты 1000, итог 1300 → ROI 30%. Только учебная иллюстрация — не инвестиционный совет.',
  tool_roi_article:
    'Простой ROI выражает чистую прибыль относительно затрат в процентах. Подходит для грубых итогов кампаний/проектов; не считает многопериодный IRR/NPV.',
  tool_roi_initial_label: 'Начальные вложения (затраты)',
  tool_roi_initial_placeholder: 'напр. 1000',
  tool_roi_final_label: 'Конечная стоимость',
  tool_roi_final_placeholder: 'напр. 1300',
  tool_roi_gain_label: 'Чистая прибыль (необязательно)',
  tool_roi_gain_placeholder: 'Если известна, заменяет итог − начало',
  tool_roi_calculate: 'Рассчитать',
  tool_roi_result_label: 'ROI',
  tool_roi_how_title: 'Как это работает',
  tool_roi_how_body:
    'Введите затраты и конечную стоимость либо известную чистую прибыль. ROI = прибыль / затраты × 100%. Если прибыль пуста, прибыль = итог − начало. Нулевые затраты отклоняются.',
  tool_roi_formula_title: 'Формула и допущения',
  tool_roi_formula_body:
    'ROI = (Конечная стоимость − Начальные вложения) / Начальные вложения × 100%, либо Чистая прибыль / Затраты × 100%. Учтите:',
  tool_roi_formula_item_1: 'Налоги: не оцениваем — при необходимости вводите суммы после налогов.',
  tool_roi_formula_item_2: 'Время: простой ROI игнорирует срок владения; это не годовая доходность.',
  tool_roi_formula_item_3: 'Комиссии: включите комиссии и платёжные сборы в затраты или итог самостоятельно.',
  tool_roi_formula_item_4: 'Многопериодные потоки и IRR/NPV вне рамок этого однопериодного процента.',
  tool_roi_example_title: 'Пример',
  tool_roi_example:
    'Пример: затраты 1000, конечная стоимость 1300 → прибыль 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_usecases_title: 'Когда пригодится',
  tool_roi_usecase_1: 'Маркетинг: грубый ROI кампании, когда известны расходы и атрибутированная выручка.',
  tool_roi_usecase_2: 'Учёба: потренировать базовый процент ROI на фиксированных числах.',
  tool_roi_usecase_3: 'Итог проекта: свести завершённую инициативу к паре затраты/прибыль (только оценка).',
  tool_roi_ref_investopedia_label: 'Investopedia — рентабельность инвестиций (ROI)',
  tool_roi_ref_guide_label: 'Investopedia — руководство по расчёту ROI',
  tool_roi_interpret_positive: 'Положительный ROI (прибыль относительно затрат) — только учебная иллюстрация.',
  tool_roi_interpret_zero: 'Нулевой ROI — нет прибыли и убытка на этих данных.',
  tool_roi_interpret_negative: 'Отрицательный ROI (убыток относительно затрат) — только учебная иллюстрация.',
  tool_roi_zero_cost: 'Начальные вложения должны быть больше нуля.',
  tool_roi_faq_q1: 'Какая формула используется?',
  tool_roi_faq_a1:
    'ROI = (Итог − Начало) / Начало × 100%, либо Чистая прибыль / Затраты × 100%, если прибыль введена.',
  tool_roi_faq_q2: 'Это инвестиционный совет?',
  tool_roi_faq_a2: 'Нет. Результаты — учебные иллюстрации, а не инвестиционный, налоговый или финансовый совет.',
  tool_roi_faq_q3: 'Что с налогами, комиссиями и временем?',
  tool_roi_faq_a3:
    'Налоги и комиссии не оцениваем — учтите сами. Простой ROI также не считает годовую доходность.',
  tool_roi_faq_q4: 'Если затраты равны нулю?',
  tool_roi_faq_a4: 'ROI не определён (деление на ноль). Введите положительные затраты.',
  tool_roi_disclaimer:
    'Результаты ROI — только учебные иллюстрации и не являются инвестиционным, налоговым или финансовым советом. Прошлые или гипотетические доходности не гарантируют будущих результатов.',
  tool_roi_references:
    'Определения и руководства Investopedia по ROI; простой ROI = чистая прибыль / затраты.',

  tool_marginal_revenue_title: 'Калькулятор предельной выручки — Формула ΔTR / ΔQ',
  tool_marginal_revenue_description:
    'Рассчитайте предельную выручку по формуле MR = ΔTR / ΔQ. Процесс: введите количество и общую выручку в двух точках, получите ΔTR и ΔQ, затем разделите. Пример: Q 10→11, TR 1000→1080 → MR = 80. Только для обучения — не совет по ценообразованию.',
  tool_marginal_revenue_article:
    'Предельная выручка — изменение общей выручки при изменении количества. Калькулятор показывает дискретное выведение между двумя точками.',
  tool_marginal_revenue_how_title: 'Как это работает',
  tool_marginal_revenue_how_body:
    'Введите количество и общую выручку для уровня 1 и уровня 2. Считаем ΔTR = TR2 − TR1, ΔQ = Q2 − Q1 и MR = ΔTR / ΔQ в браузере.',
  tool_marginal_revenue_formula_title: 'Выведение формулы',
  tool_marginal_revenue_formula_body:
    'По определению предельная выручка измеряет, как меняется общая выручка при изменении количества. Для двух точек:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (изменение общей выручки)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (изменение количества)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ при ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Дискретный шаг приближает средний MR на интервале; непрерывные модели используют dTR/dQ. Отрицательный MR значит: выручка упала при росте количества.',
  tool_marginal_revenue_example_title: 'Пример',
  tool_marginal_revenue_example:
    'Пример: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_usecases_title: 'Когда пригодится',
  tool_marginal_revenue_usecase_1: 'Домашнее задание: проверить таблицу количество/выручка на двух уровнях.',
  tool_marginal_revenue_usecase_2: 'Грубая оценка: как меняется выручка при росте выпуска на единицу.',
  tool_marginal_revenue_usecase_3: 'Сравнить предельную и среднюю выручку во вводной микроэкономике.',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — предельная выручка (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (конкуренция)',
  tool_marginal_revenue_q1_label: 'Количество (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'напр. 10',
  tool_marginal_revenue_tr1_label: 'Общая выручка (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'напр. 1000',
  tool_marginal_revenue_q2_label: 'Количество (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'напр. 11',
  tool_marginal_revenue_tr2_label: 'Общая выручка (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'напр. 1080',
  tool_marginal_revenue_quantity_label: 'Количество',
  tool_marginal_revenue_revenue_label: 'Общая выручка',
  tool_marginal_revenue_calculate: 'Рассчитать MR',
  tool_marginal_revenue_result_label: 'Предельная выручка',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — количество должно отличаться между точками.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_faq_q1: 'Как здесь выводится предельная выручка?',
  tool_marginal_revenue_faq_a1:
    'MR = ΔTR / ΔQ, где ΔTR = TR₂ − TR₁ и ΔQ = Q₂ − Q₁. Это дискретное выведение, не непрерывная производная.',
  tool_marginal_revenue_faq_q2: 'Что если ΔQ равна нулю?',
  tool_marginal_revenue_faq_a2: 'MR не определён, если количество не меняется. Выберите две разные точки.',
  tool_marginal_revenue_faq_q3: 'Чем отличается от средней выручки?',
  tool_marginal_revenue_faq_a3:
    'Средняя выручка — TR / Q на уровне выпуска. Предельная — изменение TR при изменении Q; совпадают лишь в особых случаях.',
  tool_marginal_revenue_faq_q4: 'Положительный MR значит увеличивать выпуск?',
  tool_marginal_revenue_faq_a4:
    'Нет. Инструмент не даёт советов по цене или производству; нужны также предельные издержки и другие ограничения.',
  tool_marginal_revenue_disclaimer:
    'Калькулятор предназначен для изучения понятий микроэкономики. Это не бизнес-, ценовой или инвестиционный совет.',
  tool_marginal_revenue_references:
    'Статья Investopedia о предельной выручке; вводное изложение MR = ΔTR/ΔQ (напр. OpenStax).',

};
export default ru;