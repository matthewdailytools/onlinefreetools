/**
 * i18n tool shard (markdown-to-html / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_markdown_article:
    'Оба направления на одном URL, с явными пределами очистки и потерь. Вставка локальна; CDN только для библиотек.',
  tool_markdown_clear: 'Очистить',
  tool_markdown_copy: 'Копировать HTML',
  tool_markdown_copy_done: 'Скопировано',
  tool_markdown_copy_md: 'Копировать Markdown',
  tool_markdown_description:
    'Нужен безопасный HTML из Markdown или Markdown из HTML админки? Выберите направление: marked/Turndown и DOMPurify в браузере. Пример: README → .html или HTML из CMS → .md для Git.',
  tool_markdown_dir_label: 'Направление преобразования',
  tool_markdown_download: 'Скачать HTML',
  tool_markdown_download_md: 'Скачать Markdown',
  tool_markdown_example: '`# Заголовок` и `Привет **мир**` ↔ безопасный HTML и жирный Markdown.',
  tool_markdown_example_title: 'Пример',
  tool_markdown_export_description:
    'Сгенерировать полный HTML-документ из Markdown с шаблоном и метаданными. Шаги: рендер, вставка в шаблон, meta, скачивание. Пример: экспорт поста как автономный .html.',
  tool_markdown_export_title: 'Экспорт Markdown в HTML',
  tool_markdown_faq_a1: 'В направлении Markdown → HTML — да, DOMPurify до предпросмотра и скачивания.',
  tool_markdown_faq_a2: 'Обычно нет. Это читаемый черновик, не макет.',
  tool_markdown_faq_a3: 'Преобразование локально. CDN лишь отдаёт файлы библиотек.',
  tool_markdown_faq_a4: 'Не обещаем — сверьте diff при необходимости.',
  tool_markdown_faq_a5: 'Базовый CommonMark; опционально полный HTML для офлайн-передачи.',
  tool_markdown_faq_q1: 'HTML очищается от скриптов?',
  tool_markdown_faq_q2: 'Вёрстка сохранится в Markdown?',
  tool_markdown_faq_q3: 'Уходит ли вставка на сервер?',
  tool_markdown_faq_q4: 'Круговой путь без изменений?',
  tool_markdown_faq_q5: 'Какой Markdown и какие экспорты?',
  tool_markdown_full_doc: 'Создать полный HTML-документ',
  tool_markdown_how_body:
    'Вкладки задают направление. Слева ввод, справа локальный результат. HTML — фрагмент или простой документ; Markdown — текст для репозитория или LLM.',
  tool_markdown_how_item_1: 'Выберите вкладку Markdown → HTML или HTML → Markdown.',
  tool_markdown_how_item_2: 'Вставьте вход слева (или «Загрузить пример»).',
  tool_markdown_how_item_3: 'Для Markdown → HTML при необходимости оберните в минимальный HTML-документ.',
  tool_markdown_how_item_4: 'Скопируйте или скачайте результат справа.',
  tool_markdown_how_title: 'Как пользоваться',
  tool_markdown_html_input_label: 'Ввод HTML',
  tool_markdown_html_placeholder: '<h1>Заголовок</h1>\n<p>Привет <strong>мир</strong></p>',
  tool_markdown_input_label: 'Ввод Markdown',
  tool_markdown_large_warn:
    'Очень большой фрагмент (>200k символов). Преобразование может быть медленным — попробуйте короткий отрывок.',
  tool_markdown_loss_hint:
    'Почти нет Markdown — скрипты, пустые теги или неподдерживаемая разметка могли быть удалены. См. правила и FAQ.',
  tool_markdown_md_output_label: 'Вывод Markdown',
  tool_markdown_need_lib: 'Не удалось загрузить библиотеку преобразования. Проверьте сеть и обновите страницу.',
  tool_markdown_placeholder:
    '# Заголовок\n\nБазовый Markdown: **жирный**, списки и блоки кода.\n\n- Пункт 1\n- Пункт 2\n\n```js\nconsole.log(\'Привет Markdown\');\n```',
  tool_markdown_preview_label: 'Предпросмотр HTML',
  tool_markdown_rules_intro:
    'Что охватывают правила ниже: какой синтаксис Markdown поддерживается, как очищается HTML и как ваш вставленный текст обрабатывается локально.',
  tool_markdown_rules_item_html_md: 'В Markdown: сначала очистка, затем Turndown (ATX и fenced-код).',
  tool_markdown_rules_item_loss: 'Стили, скрипты, сложные таблицы часто пропадают. Круговой путь ≠ исходник.',
  tool_markdown_rules_item_md_html: 'В HTML: разбор CommonMark, затем DOMPurify до показа/сохранения.',
  tool_markdown_rules_privacy: 'Текст остаётся во вкладке. CDN не означает загрузку вашего документа на наш сервер.',
  tool_markdown_rules_title: 'Правила по направлениям',
  tool_markdown_sample_html: '<h1>Заголовок</h1>\n<p>Привет <strong>мир</strong></p>',
  tool_markdown_sample_md:
    '# Заголовок\n\nБазовый Markdown: **жирный**, списки и блоки кода.\n\n- Пункт 1\n- Пункт 2\n\n```js\nconsole.log(\'Привет Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'Markdown в HTML и обратно — с очисткой',
  tool_markdown_usecase_1: 'Отдать CMS очищенный HTML.',
  tool_markdown_usecase_2: 'Вытащить черновик из HTML письма или панели.',
  tool_markdown_usecase_3: 'Убрать шум rich text перед промптом.',
  tool_markdown_usecases_title: 'Когда полезно',
};
export default ru;
