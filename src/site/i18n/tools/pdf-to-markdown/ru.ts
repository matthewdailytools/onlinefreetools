/**
 * i18n tool shard (pdf-to-markdown / ru). Независимая локализация.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Извлеките выделяемый текст из текстового слоя PDF в браузере и скачайте Markdown — файл остаётся на устройстве, без загрузки на сервер. Без OCR.',
  tool_pdf_to_markdown_choose_file: 'Выбрать PDF',
  tool_pdf_to_markdown_clear: 'Очистить',
  tool_pdf_to_markdown_convert: 'Конвертировать',
  tool_pdf_to_markdown_desc:
    'Превратите текст PDF в Markdown на устройстве для заметок — без загрузки на сервер.',
  tool_pdf_to_markdown_description:
    'Извлеките текст PDF в Markdown в браузере для заметок или LLM — файл остаётся на устройстве и не загружается на сервер. Шаги: выберите PDF с текстовым слоем, Конвертировать, просмотр, скачать .md. Пример: образец одной страницы даёт .md с «Hello PDF to Markdown sample.» Скан без OCR не сработает. Зашифрованные — понятная ошибка.',
  tool_pdf_to_markdown_download: 'Скачать .md',
  tool_pdf_to_markdown_drop_hint: 'Или перетащите PDF сюда. Обработка в этой вкладке.',
  tool_pdf_to_markdown_empty: 'Сначала выберите PDF.',
  tool_pdf_to_markdown_err_convert: 'Конвертация не удалась. Проверьте файл и повторите.',
  tool_pdf_to_markdown_err_encrypted: 'PDF, похоже, защищён паролем. Снимите защиту и повторите.',
  tool_pdf_to_markdown_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_pdf_to_markdown_err_notext:
    'Нет выделяемого текста. Читаем только текстовый слой — без OCR. Попробуйте цифровой PDF или PDF в JPG для изображений.',
  tool_pdf_to_markdown_err_pdfjs: 'Не удалось загрузить рендерер PDF. Проверьте сеть и повторите.',
  tool_pdf_to_markdown_example:
    'Образец создаёт одностраничный PDF Helvetica, конвертирует, показывает фразу в предпросмотре и включает Скачать .md.',
  tool_pdf_to_markdown_example_title: 'Пример',
  tool_pdf_to_markdown_faq_a1:
    'Нет. рендерер страниц работает во вкладке (скрипты могут грузиться с CDN). PDF не отправляется на наши серверы.',
  tool_pdf_to_markdown_faq_a2:
    'Скан обычно картинка без текстового слоя. Без OCR извлечение пустое — явная ошибка.',
  tool_pdf_to_markdown_faq_a3: 'Не восстанавливает заголовки и таблицы — простой текст по позиции.',
  tool_pdf_to_markdown_faq_a4:
    'Markdown в HTML превращает синтаксис Markdown в веб-страницу. Этот инструмент экспортирует текст PDF в .md.',
  tool_pdf_to_markdown_faq_a5:
    'PDF в JPG растеризует каждую страницу. Используйте этот инструмент, когда нужен редактируемый текст.',
  tool_pdf_to_markdown_faq_q1: 'Загружается ли PDF?',
  tool_pdf_to_markdown_faq_q2: 'Почему скан не работает?',
  tool_pdf_to_markdown_faq_q3: 'Сохраняются ли заголовки или таблицы?',
  tool_pdf_to_markdown_faq_q4: 'Чем отличается от Markdown в HTML?',
  tool_pdf_to_markdown_faq_q5: 'Когда использовать PDF в JPG?',
  tool_pdf_to_markdown_how_body:
    'Выберите PDF, Конвертировать, проверьте предпросмотр, скачайте .md. Строки по вертикали; страницы через ---. Всё во вкладке после загрузки библиотек—файл не уходит на сервер.',
  tool_pdf_to_markdown_how_item_1: "Выберите файл через «Выбрать PDF»",
  tool_pdf_to_markdown_how_item_2: "Настройте параметры и нажмите «Конвертировать»",
  tool_pdf_to_markdown_how_item_3: "Проверьте предпросмотр, число страниц или статус",
  tool_pdf_to_markdown_how_item_4: "Нажмите «Скачать .md», чтобы сохранить результат",
  tool_pdf_to_markdown_how_title: 'Как это работает',
  tool_pdf_to_markdown_pages_label: 'Страницы',
  tool_pdf_to_markdown_preview_label: 'Предпросмотр Markdown',
  tool_pdf_to_markdown_rules_body: 'Извлечение текстового слоя, разделители, без OCR, конфиденциальность и сбои.',
  tool_pdf_to_markdown_rules_item_1: 'Движок: getTextContent на страницу; близкий y → строки через пробел.',
  tool_pdf_to_markdown_rules_item_2: 'Страницы: пустая строка + --- + пустая строка между страницами.',
  tool_pdf_to_markdown_rules_item_3: 'Без OCR: пустой trim → явный сбой.',
  tool_pdf_to_markdown_rules_item_4: 'Лимиты: байты во вкладке; шифр/повреждение — ясная ошибка; >~25 МБ может тормозить.',
  tool_pdf_to_markdown_rules_title: 'Ожидаемые правила',
  tool_pdf_to_markdown_sample: 'Загрузить образец',
  tool_pdf_to_markdown_stats_tpl: '{n} стр. · {chars} символов',
  tool_pdf_to_markdown_status_converting: 'Извлечение текста…',
  tool_pdf_to_markdown_status_done: 'Готово — нажмите Скачать .md.',
  tool_pdf_to_markdown_title: 'PDF в Markdown — извлеките текст для заметок в браузере',
  tool_pdf_to_markdown_usecase_1: 'Офис: копируйте пункты договора в заметки без перепечатки.',
  tool_pdf_to_markdown_usecase_2: 'Авторы и ИИ: экспорт отчётов в Markdown для правок или промптов.',
  tool_pdf_to_markdown_usecase_3: 'Студенты: текст лекций из PDF с текстовым слоем.',
  tool_pdf_to_markdown_usecases_title: 'Подходящие сценарии',
  tool_pdf_to_markdown_warn_large: 'Файл > ~25 МБ — извлечение может быть медленным или сбойным.',
  tool_pdf_to_markdown_warn_pdflib: 'Не удалось загрузить библиотеку PDF. Проверьте сеть.',
};
export default ru;
