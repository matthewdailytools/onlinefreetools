/**
 * i18n 工具分片（rotate-pdf / ru）。Независимая локализация под поиск.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° против часовой',
  tool_rotate_pdf_angle_90cw: '90° по часовой',
  tool_rotate_pdf_angle_label: 'Поворот',
  tool_rotate_pdf_article:
    'Исправьте боковые или перевёрнутые страницы PDF в браузере. Поверните все или диапазон—файл остаётся на устройстве, без загрузки на сервер.',
  tool_rotate_pdf_choose_file: 'Выбрать PDF',
  tool_rotate_pdf_clear: 'Очистить',
  tool_rotate_pdf_desc:
    'Исправьте ориентацию PDF на устройстве—все страницы или диапазон; на сервер не отправляется.',
  tool_rotate_pdf_description:
    'Поверните страницы PDF в браузере, чтобы исправить смешение альбомной/книжной ориентации—ничего не загружается на сервер. Шаги: выберите PDF, все страницы или диапазоны вроде 1-3,5, выберите 90° по часовой, 180° или 90° против часовой, поверните и скачайте. Пример: образец из двух страниц поворачивает все на 90° по часовой и включает скачивание rotated.pdf. Зашифрованные файлы дают понятную ошибку.',
  tool_rotate_pdf_download: 'Скачать',
  tool_rotate_pdf_drop_hint: 'Или перетащите PDF сюда. Обработка в этой вкладке.',
  tool_rotate_pdf_empty: 'Сначала выберите PDF.',
  tool_rotate_pdf_err_encrypted: 'PDF, похоже, защищён паролем. Снимите защиту и повторите.',
  tool_rotate_pdf_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_rotate_pdf_err_range: 'Неверные или выходящие за пределы страницы. Используйте диапазоны с 1, напр. 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Поворот не удался. Проверьте файл и диапазоны и повторите.',
  tool_rotate_pdf_example:
    'Образец создаёт PDF из двух страниц, поворачивает все на 90° по часовой и включает скачивание rotated.pdf.',
  tool_rotate_pdf_example_title: 'Пример',
  tool_rotate_pdf_faq_a1:
    'Нет. библиотека PDF работает во вкладке (скрипты могут грузиться с CDN). PDF не отправляется на наши серверы.',
  tool_rotate_pdf_faq_a2: 'Да—скачанный файл сохраняет новую ориентацию. Откройте в просмотрщике перед отправкой.',
  tool_rotate_pdf_faq_a3: 'Страницы с 1: 1-3,5 — это 1–3 и 5. Пробелы необязательны. Пусто или вне диапазона — ошибка.',
  tool_rotate_pdf_faq_a4: 'PDF с паролем обычно не открывается здесь. Снимите пароль доверенным способом и поверните.',
  tool_rotate_pdf_faq_q1: 'Загружается ли PDF на сервер?',
  tool_rotate_pdf_faq_q2: 'Поворот навсегда меняет файл?',
  tool_rotate_pdf_faq_q3: 'Как работают диапазоны страниц?',
  tool_rotate_pdf_faq_q4: 'А зашифрованные PDF?',
  tool_rotate_pdf_how_body:
    'Выберите PDF, все страницы или диапазоны, угол, нажмите Повернуть и Скачать. Угол добавляется к текущему. После загрузки библиотеки всё во вкладке, без загрузки на сервер.',
  tool_rotate_pdf_how_title: 'Как это работает',
  tool_rotate_pdf_mode_all: 'Все страницы',
  tool_rotate_pdf_mode_label: 'Страницы для поворота',
  tool_rotate_pdf_mode_ranges: 'Свои диапазоны',
  tool_rotate_pdf_pages_label: 'Страниц в файле',
  tool_rotate_pdf_ranges_hint: 'Пример: 1-3,5 (с 1)',
  tool_rotate_pdf_ranges_label: 'Диапазоны страниц',
  tool_rotate_pdf_rotate: 'Повернуть',
  tool_rotate_pdf_rules_body: 'Углы, накопление поворота, синтаксис диапазонов, приватность и сбои.',
  tool_rotate_pdf_rules_item_1: 'Углы: 90° по часовой, 180° или 90° против (270°). Добавляются к текущему углу страницы.',
  tool_rotate_pdf_rules_item_2: 'Страницы: все или диапазоны с 1, напр. 1-3,5 (как в Разделить PDF).',
  tool_rotate_pdf_rules_item_3: 'Результат: один PDF с выбранными страницами; остальные без изменений.',
  tool_rotate_pdf_rules_item_4: 'Приватность и лимиты: байты во вкладке; шифр/повреждение — явная ошибка; огромные файлы могут тормозить.',
  tool_rotate_pdf_rules_title: 'Ожидаемые правила',
  tool_rotate_pdf_sample: 'Загрузить пример',
  tool_rotate_pdf_stats_tpl: 'Повёрнуто {n} стр. · {bytes}',
  tool_rotate_pdf_status_done: 'Готово — нажмите Скачать для rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'Поворот PDF…',
  tool_rotate_pdf_title: 'Повернуть PDF — исправьте ориентацию страниц',
  tool_rotate_pdf_usecase_1: 'Офис: выровнять боковой скан перед печатью или отправкой.',
  tool_rotate_pdf_usecase_2: 'Студенты: исправить фото слайдов с телефона в разной ориентации.',
  tool_rotate_pdf_usecase_3: 'Владельцы сайтов: поправить одну неверную страницу без полного перескана.',
  tool_rotate_pdf_usecases_title: 'Подходит для',
  tool_rotate_pdf_warn_large: 'Файл больше ~25 МБ — поворот может быть медленным или сбоить в браузере.',
  tool_rotate_pdf_warn_pdflib: 'Не удалось загрузить библиотеку PDF. Проверьте сеть и повторите.',
};
export default ru;
