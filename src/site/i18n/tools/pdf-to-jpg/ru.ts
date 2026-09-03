/**
 * i18n tool shard (pdf-to-jpg / ru). Независимая переработка под русский поиск.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'рендерер страниц отрисовывает каждую страницу в JPEG в браузере. Несколько страниц скачиваются ZIP через библиотека ZIP—файл остаётся на устройстве.',
  tool_pdf_to_jpg_choose_file: 'Выбрать PDF',
  tool_pdf_to_jpg_clear: 'Очистить',
  tool_pdf_to_jpg_convert: 'Конвертировать',
  tool_pdf_to_jpg_desc: 'Превратите страницы PDF в JPG на устройстве—ZIP при нескольких страницах; без загрузки на сервер.',
  tool_pdf_to_jpg_description:
    'Конвертируйте страницы PDF в JPG в браузере—файл остаётся на устройстве и не загружается на сервер. Шаги: выберите PDF, нажмите Конвертировать и Скачать. Пример: образец из двух страниц даёт page-1.jpg и page-2.jpg в ZIP. Одностраничный PDF скачивается одним JPG. Зашифрованные или повреждённые файлы показывают понятную ошибку.',
  tool_pdf_to_jpg_download: 'Скачать',
  tool_pdf_to_jpg_drop_hint: 'Или перетащите PDF сюда. Обработка в этой вкладке.',
  tool_pdf_to_jpg_empty: 'Сначала выберите PDF.',
  tool_pdf_to_jpg_err_convert: 'Конвертация не удалась. Проверьте файл и повторите.',
  tool_pdf_to_jpg_err_encrypted: 'PDF, похоже, защищён паролем. Снимите защиту и повторите.',
  tool_pdf_to_jpg_err_fflate: 'Не удалось загрузить библиотеку ZIP. Проверьте сеть.',
  tool_pdf_to_jpg_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_pdf_to_jpg_err_pdfjs: 'Не удалось загрузить движок PDF. Проверьте сеть.',
  tool_pdf_to_jpg_example:
    'Образец создаёт PDF из двух страниц, конвертирует каждую и включает Скачать ZIP с page-1.jpg и page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'Конвертировать страницы PDF в JPG',
  tool_pdf_to_jpg_faq_a1:
    'Нет. рендерер страниц и библиотека ZIP работают во вкладке (скрипты могут грузиться с CDN). PDF не отправляется на наши серверы.',
  tool_pdf_to_jpg_faq_a2:
    'Больше одной страницы → ZIP pdf-pages.zip с page-1.jpg, page-2.jpg и т.д. Одна страница → один JPG.',
  tool_pdf_to_jpg_faq_a3:
    'Изображения в PDF объединяет фото в многостраничный PDF. Этот инструмент экспортирует каждую страницу PDF отдельным JPG.',
  tool_pdf_to_jpg_faq_a4:
    'Страницы рендерятся в масштабе 2× для более чёткого текста. Очень большие PDF могут работать дольше.',
  tool_pdf_to_jpg_faq_a5:
    'Эта страница выдаёт только JPG. Для PNG или WebP из готового изображения используйте конвертер форматов.',
  tool_pdf_to_jpg_faq_q1: 'Загружается ли PDF на сервер?',
  tool_pdf_to_jpg_faq_q2: 'Когда ZIP, а когда один JPG?',
  tool_pdf_to_jpg_faq_q3: 'Чем отличается от «Изображения в PDF»?',
  tool_pdf_to_jpg_faq_q4: 'Почему JPG чёткий или размытый?',
  tool_pdf_to_jpg_faq_q5: 'Можно PNG?',
  tool_pdf_to_jpg_how_body:
    'Выберите PDF, нажмите Конвертировать и Скачать. Каждая страница — JPG; несколько страниц — ZIP. Всё во вкладке после загрузки библиотек—файл не уходит на сервер.',
  tool_pdf_to_jpg_how_title: 'Как это работает',
  tool_pdf_to_jpg_pages_label: 'Страниц',
  tool_pdf_to_jpg_rules_body: 'Масштаб рендера, выход JPG, ZIP vs один файл, конфиденциальность и сбои.',
  tool_pdf_to_jpg_rules_item_1:
    'Каждая страница — JPEG масштаб 2×, качество 0.92—подходит для слайдов и сканов.',
  tool_pdf_to_jpg_rules_item_2: 'Имена: page-N.jpg для страницы N. Несколько страниц → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'Выход: 1 страница → JPG; 2+ → ZIP через библиотека ZIP.',
  tool_pdf_to_jpg_rules_item_4:
    'Конфиденциальность и лимиты: данные во вкладке; шифрованный/битый PDF — явная ошибка; >25 МБ может тормозить.',
  tool_pdf_to_jpg_rules_title: 'Ожидаемые правила',
  tool_pdf_to_jpg_sample: 'Загрузить образец',
  tool_pdf_to_jpg_stats_tpl: '{n} стр. · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Конвертация страниц в JPG…',
  tool_pdf_to_jpg_status_done: 'Готово — нажмите Скачать.',
  tool_pdf_to_jpg_title: 'Конвертировать страницы PDF в JPG',
  tool_pdf_to_jpg_usecase_1: 'Офис: экспорт слайда или подписанной страницы в чат.',
  tool_pdf_to_jpg_usecase_2: 'Маркетинг: миниатюры JPG из каталога PDF.',
  tool_pdf_to_jpg_usecase_3: 'Студенты: страницы лекций PDF как картинки для заметок.',
  tool_pdf_to_jpg_usecases_title: 'Подходящие сценарии',
  tool_pdf_to_jpg_warn_large: 'Файл больше ~25 МБ — конвертация может быть медленной или сбойной.',
  tool_pdf_to_jpg_warn_pdflib: 'Не удалось загрузить библиотеку PDF. Проверьте сеть.',
};
export default ru;
