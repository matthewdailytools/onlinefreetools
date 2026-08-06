import type { SiteLangDict } from './types';
const ru: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Главная',
  nav_devlogs: 'Журналы разработки',
  nav_tools: 'Инструменты',
  footer_text: 'Online Free Tools · Учебный проект · Постоянное обновление',
  tool_headers_title: 'Получить заголовки ответов веб-сайта',
  tool_headers_description:
    "Получить HTTP-заголовки ответа для URL на сервере (HEAD, fallback на GET). Процесс: отправить HEAD, следовать редиректам, собрать заголовки, блокировать приватные хосты. Пример: проверить CORS, Cache-Control, HSTS для отладки редиректов и настроек CDN.",
  tool_headers_article:
    'Что это: Получите и проверьте заголовки HTTP-ответа веб-сайта. Полезно для отладки CORS, кэширования, перенаправлений и проверки заголовков безопасности или CDN. Сценарии: отладка разработчиком, проверки SEO и проверка конфигурации сервера.',
  url_label: 'URL',
  url_placeholder: 'например https://example.com',
  fetch_button: 'Получить заголовки',
  result_title: 'Результат',
  status_label: 'Статус',
  final_url_label: 'Конечный URL',
  headers_label: 'Заголовки',
  error_prefix: 'Ошибка: ',
  note_title: 'Примечания',
  note_1: 'Некоторые сайты не поддерживают HEAD; мы вернемся к GET.',
  note_2: 'В целях безопасности запросы к локальному хосту/частным сетям блокируются.',
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
    'Отдельной тонкой страницы только под «html в markdown» нет.',
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

};
export default ru;