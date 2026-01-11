import type { SiteLangDict } from './types';
const ru: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Главная',
  nav_devlogs: 'Журналы разработки',
  nav_tools: 'Инструменты',
  footer_text: 'Online Free Tools · Обучающий проект · В стадии итераций',
  tool_headers_title: 'Получить заголовки ответа веб-сайта',
  tool_headers_description:
    'Введите URL-адрес, чтобы получить заголовки ответа HTTP (серверный запрос).',
  tool_headers_article:
    'Что: Получите и изучите заголовки ответа HTTP веб-сайта. Полезно для отладки CORS, кэширования, перенаправлений и проверки заголовков безопасности или CDN. Сценарии: отладка разработчиком, проверки SEO и подтверждение конфигурации сервера.',
  url_label: 'URL',
  url_placeholder: 'например https://example.com',
  fetch_button: 'Получить заголовки',
  result_title: 'Результат',
  status_label: 'Статус',
  final_url_label: 'Конечный URL',
  headers_label: 'Заголовки',
  error_prefix: 'Ошибка: ',
  note_title: 'Примечания',
  note_1: 'Некоторые сайты не поддерживают HEAD; мы используем GET.',
  note_2: 'В целях безопасности запросы к localhost/частным сетям заблокированы.',
  tool_markdown_title: 'Markdown → HTML',
  tool_markdown_description:
    'Преобразование Markdown в HTML с предпросмотром, копированием и загрузкой полного документа.',
  tool_markdown_article:
    'Что: Преобразование Markdown в очищенный HTML с предварительным просмотром и вариантами экспорта. Полезно для подготовки блогов, документации или обмена отрендеренным контентом. Сценарии: создание контента, быстрые предварительные просмотры и генерация статических HTML-экспортов.',
  tool_markdown_copy: 'Скопировать HTML',
  tool_markdown_copy_done: 'Скопировано',
  tool_markdown_download: 'Загрузить HTML',
  tool_markdown_clear: 'Очистить',
  tool_markdown_full_doc: 'Создать полный HTML-документ',
  tool_markdown_input_label: 'Ввод Markdown',
  tool_markdown_preview_label: 'Предварительный просмотр HTML',
  tool_markdown_placeholder:
    "# Заголовок\n\nПоддерживается базовый Markdown: **жирный шрифт**, списки и блоки кода.\n\n- Элемент 1\n- Элемент 2\n\n```js\nconsole.log('Привет, Markdown');\n```",
  tool_markdown_export_title: 'Экспорт Markdown в HTML',
  tool_markdown_export_description: 'Статический HTML-экспорт, созданный из Markdown',
  tool_ip_address_title: 'Какой у меня IP-адрес?',
  tool_ip_address_description: 'Узнайте свой публичный IP-адрес одним щелчком мыши.',
  tool_ip_address_article: 'Что: Найдите свой публичный IP-адрес, как его видит интернет. Ваш IP-адрес идентифицирует ваше устройство в сети и используется веб-сайтами для доставки контента. Сценарии: удаленный доступ, устранение неполадок в сети, настройка брандмауэра и геолокационные службы.',
  ip_label: 'Ваш IP-адрес',
  fetch_ip_button: 'Обновить IP',
  fetching_message: 'Получение вашего IP-адреса...',
  what_is_ip_title: 'Что такое IP-адрес?',
  what_is_ip_content: 'IP-адрес (адрес интернет-протокола) — это числовая метка, присваиваемая каждому устройству, подключенному к компьютерной сети. Он выполняет две основные функции: идентификация хоста или сетевого интерфейса и адресация местоположения. На сегодняшний день используются две версии: IPv4 и IPv6.',
};
export default ru;