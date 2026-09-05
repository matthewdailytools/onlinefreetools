/**
 * i18n tool shard (pdf-page-numbers / ru). Независимая локализация под поиск.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Добавить номера',
  tool_pdf_page_numbers_article:
    'Добавьте номера страниц на каждый лист PDF в браузере. Выберите угол или центр, начальный номер и отступ—файл остаётся на устройстве, без загрузки на сервер.',
  tool_pdf_page_numbers_choose_file: 'Выбрать PDF',
  tool_pdf_page_numbers_clear: 'Очистить',
  tool_pdf_page_numbers_desc:
    'Нумерация PDF в браузере—позиция и стартовый номер на выбор; без загрузки на сервер, остаётся на устройстве.',
  tool_pdf_page_numbers_description:
    'Добавьте номера страниц в PDF в браузере—без загрузки на сервер. Шаги: откройте PDF, выберите низ по центру или угол, задайте первый номер (по умолчанию 1), отступ и размер, опционально «Стр. N», добавьте номера и скачайте. Пример: образец из 3 страниц с номерами снизу по центру с 1 и скачивание numbered.pdf. Зашифрованные PDF — понятная ошибка.',
  tool_pdf_page_numbers_download: 'Скачать',
  tool_pdf_page_numbers_drop_hint: 'Или перетащите PDF сюда. Обработка в этой вкладке.',
  tool_pdf_page_numbers_empty: 'Сначала выберите PDF.',
  tool_pdf_page_numbers_err_encrypted: 'PDF, похоже, защищён паролем. Снимите защиту и повторите.',
  tool_pdf_page_numbers_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_pdf_page_numbers_err_number: 'Нумерация не удалась. Проверьте файл и настройки.',
  tool_pdf_page_numbers_example:
    'Образец создаёт PDF из 3 страниц, нумерует снизу по центру с 1 и включает скачивание numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Пример',
  tool_pdf_page_numbers_faq_a1:
    'Нет. библиотека PDF работает во вкладке (скрипты могут грузиться с CDN). PDF не отправляется на наши серверы.',
  tool_pdf_page_numbers_faq_a2:
    'Да—«Начать с» — число на странице 1 (например 0 для обложки или 5 после удаления листов). Каждая следующая +1.',
  tool_pdf_page_numbers_faq_a3:
    'Простые цифры (1, 2, 3…) или «Стр. N». Позиция, отступ (pt) и размер одинаковы на всех страницах.',
  tool_pdf_page_numbers_faq_a4:
    'PDF с паролем обычно не открывается здесь. Снимите пароль надёжным инструментом и повторите.',
  tool_pdf_page_numbers_faq_q1: 'Загружается ли PDF на сервер?',
  tool_pdf_page_numbers_faq_q2: 'Можно начать после обложки?',
  tool_pdf_page_numbers_faq_q3: 'Какие форматы и позиции?',
  tool_pdf_page_numbers_faq_q4: 'А зашифрованные PDF?',
  tool_pdf_page_numbers_font_size_label: 'Размер (pt)',
  tool_pdf_page_numbers_format_label: 'Формат',
  tool_pdf_page_numbers_format_number: 'Только цифра',
  tool_pdf_page_numbers_format_page_n: 'Стр. N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Стр. {n}',
  tool_pdf_page_numbers_how_body:
    'Выберите PDF, позицию (низ по центру по умолчанию), первый номер, отступ и размер, нажмите Добавить номера и Скачать. Номера рисуются на каждой странице. Библиотека загружается при первом использовании.',
  tool_pdf_page_numbers_how_item_1: "Выберите файл через «Выбрать PDF»",
  tool_pdf_page_numbers_how_item_2: "Настройте параметры и нажмите «Добавить номера»",
  tool_pdf_page_numbers_how_item_3: "Проверьте предпросмотр, число страниц или статус",
  tool_pdf_page_numbers_how_item_4: "Нажмите «Скачать», чтобы сохранить результат",
  tool_pdf_page_numbers_how_title: 'Как это работает',
  tool_pdf_page_numbers_margin_label: 'Отступ (pt)',
  tool_pdf_page_numbers_pages_label: 'Страниц',
  tool_pdf_page_numbers_position_bc: 'Низ по центру',
  tool_pdf_page_numbers_position_bl: 'Низ слева',
  tool_pdf_page_numbers_position_br: 'Низ справа',
  tool_pdf_page_numbers_position_label: 'Позиция',
  tool_pdf_page_numbers_position_tc: 'Верх по центру',
  tool_pdf_page_numbers_position_tl: 'Верх слева',
  tool_pdf_page_numbers_position_tr: 'Верх справа',
  tool_pdf_page_numbers_rules_body:
    'Позиции, стартовое значение, формат, конфиденциальность и ограничения нумерации в браузере.',
  tool_pdf_page_numbers_rules_item_1:
    'Позиция: низ по центру (по умолчанию), центр сверху/снизу или углы. Отступ в пунктах PDF (24 pt по умолчанию).',
  tool_pdf_page_numbers_rules_item_2:
    'Начать с: число на странице 1 (1 по умолчанию). Каждая страница +1—удобно после удаления в Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Формат: цифра или «Стр. N». Размер 12 pt по умолчанию. Новый PDF; исходник не отправляется на сервер.',
  tool_pdf_page_numbers_rules_item_4:
    'Ограничения: зашифрованный/битый PDF — явная ошибка; >~25 MB может тормозить; номера вшиты—нужен оригинал.',
  tool_pdf_page_numbers_rules_title: 'Ожидаемые правила',
  tool_pdf_page_numbers_sample: 'Загрузить пример',
  tool_pdf_page_numbers_start_at_label: 'Начать с',
  tool_pdf_page_numbers_stats_tpl: '{n} стр. пронумеровано · {bytes}',
  tool_pdf_page_numbers_status_done: 'Готово — нажмите Скачать для numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Добавление номеров страниц…',
  tool_pdf_page_numbers_title: 'Нумерация страниц PDF — добавьте в браузере',
  tool_pdf_page_numbers_usecase_1: 'Офис: пронумеровать отчёт перед печатью, чтобы ссылаться на «стр. 12».',
  tool_pdf_page_numbers_usecase_2: 'Студенты: колонтитул 1–N в дипломе после объединения глав.',
  tool_pdf_page_numbers_usecase_3: 'Владельцы сайтов: номера на раздачах после reorganize или водяного знака.',
  tool_pdf_page_numbers_usecases_title: 'Подходит для',
  tool_pdf_page_numbers_warn_large: 'Файл больше ~25 MB — нумерация может быть медленной или сбойной.',
  tool_pdf_page_numbers_warn_pdflib: 'Не удалось загрузить библиотеку PDF. Проверьте сеть.',
};
export default ru;
