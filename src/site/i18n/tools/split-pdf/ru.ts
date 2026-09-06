/**
 * i18n tool shard（split-pdf / ru）. Самостоятельная формулировка.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_split_pdf_article:
    'Разделяйте PDF на отдельные файлы по страницам или диапазонам через клиентский pdf-lib. Несколько результатов — ZIP через fflate, без загрузки на сервер.',
  tool_split_pdf_choose_file: 'Выбрать PDF',
  tool_split_pdf_clear: 'Очистить',
  tool_split_pdf_desc: 'Извлекайте страницы из PDF на устройстве — каждую страницу или диапазоны; ZIP при необходимости; без загрузки на сервер.',
  tool_split_pdf_description:
    'Разделите PDF в браузере и скачайте отдельные страницы или диапазоны — без загрузки на сервер. Шаги: выберите PDF, режим «каждая страница» или диапазоны вроде 1-3,5, разделите и скачайте. Пример: трёхстраничный образец станет ZIP с page-1.pdf–page-3.pdf. Один выходной файл скачивается как PDF. Зашифрованные файлы завершаются понятной ошибкой.',
  tool_split_pdf_download: 'Скачать',
  tool_split_pdf_drop_hint: 'Или перетащите один PDF сюда. Обработка остаётся во вкладке.',
  tool_split_pdf_empty: 'Сначала выберите файл PDF.',
  tool_split_pdf_err_encrypted: 'Похоже, PDF защищён паролем. Снимите защиту и повторите.',
  tool_split_pdf_err_fflate: 'Не удалось загрузить библиотеку ZIP. Проверьте сеть и повторите.',
  tool_split_pdf_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_split_pdf_err_range: 'Неверные или выходящие за пределы страницы. Используйте диапазоны с 1, например 1-3,5.',
  tool_split_pdf_err_split: 'Разделение не удалось. Проверьте файл и диапазоны и повторите.',
  tool_split_pdf_example:
    'Пример создаёт трёхстраничный PDF, делит каждую страницу и включает «Скачать» для ZIP с page-1.pdf, page-2.pdf и page-3.pdf.',
  tool_split_pdf_example_title: 'Разделить мой PDF',
  tool_split_pdf_faq_a1:
    'Нет. pdf-lib и fflate работают во вкладке (скрипты грузятся с этого сайта). PDF не отправляется на наши серверы.',
  tool_split_pdf_faq_a2:
    'Страницы с 1: 1-3,5 означает страницы 1–3 и 5. Пробелы необязательны. Пустые или вне диапазона значения падают.',
  tool_split_pdf_faq_a3:
    'Больше одного файла → ZIP. Ровно один результат → скачивание PDF.',
  tool_split_pdf_faq_a4:
    'PDF с паролем обычно не открываются здесь. Снимите пароль доверенным способом, затем разделите.',
  tool_split_pdf_faq_a5:
    '«Объединить PDF» склеивает несколько PDF. Этот инструмент извлекает страницы из одного PDF в отдельные файлы.',
  tool_split_pdf_faq_q1: 'Загружается ли мой PDF?',
  tool_split_pdf_faq_q2: 'Как писать диапазоны страниц?',
  tool_split_pdf_faq_q3: 'Когда ZIP, а когда PDF?',
  tool_split_pdf_faq_q4: 'Что с зашифрованными PDF?',
  tool_split_pdf_faq_q5: 'Чем отличается от «Объединить PDF»?',
  tool_split_pdf_how_body:
    'Выберите один PDF, режим каждой страницы или диапазоны, нажмите «Разделить», затем «Скачать». Несколько результатов → ZIP; один → PDF. После загрузки библиотек всё локально.',
  tool_split_pdf_how_item_1: "Выберите файл через «Выбрать PDF»",
  tool_split_pdf_how_item_2: "Настройте параметры и нажмите «Разделить»",
  tool_split_pdf_how_item_3: "Проверьте предпросмотр, число страниц или статус",
  tool_split_pdf_how_item_4: "Нажмите «Скачать», чтобы сохранить результат",
  tool_split_pdf_how_title: 'Как это работает',
  tool_split_pdf_mode_every: 'Каждая страница (один файл на страницу)',
  tool_split_pdf_mode_label: 'Режим разделения',
  tool_split_pdf_mode_ranges: 'Свои диапазоны страниц',
  tool_split_pdf_pages_label: 'Страниц в файле',
  tool_split_pdf_ranges_hint: 'Пример: 1-3,5 (с 1)',
  tool_split_pdf_ranges_label: 'Диапазоны страниц',
  tool_split_pdf_rules_body:
    'Диапазоны с 1, имена, ZIP vs PDF, приватность и ошибки при локальном разделении.',
  tool_split_pdf_rules_item_1:
    'Режимы: каждая страница → один PDF на страницу; диапазоны → один PDF на сегмент через запятую (напр. 1-3 и 5).',
  tool_split_pdf_rules_item_2:
    'Имена: page-N.pdf для одной страницы; pages-A-B.pdf для непрерывного сегмента.',
  tool_split_pdf_rules_item_3:
    'Вывод: больше одного файла → ZIP через fflate; ровно один → скачать этот PDF.',
  tool_split_pdf_rules_item_4:
    'Приватность и лимиты: байты во вкладке; зашифрованные/битые PDF падают ясно; очень большие файлы могут тормозить память.',
  tool_split_pdf_rules_title: 'Правила, которые стоит знать',
  tool_split_pdf_sample: 'Загрузить пример',
  tool_split_pdf_split: 'Разделить',
  tool_split_pdf_stats_tpl: '{n} файл(ов) · {bytes}',
  tool_split_pdf_status_done: 'Готово — нажмите «Скачать», чтобы сохранить.',
  tool_split_pdf_status_splitting: 'Разделение PDF…',
  tool_split_pdf_title: 'Разделить мой PDF',
  tool_split_pdf_usecase_1: 'Офис: вытащить подписанную страницу из длинного договора.',
  tool_split_pdf_usecase_2: 'Обучение: разбить PDF слайдов на раздатки по страницам.',
  tool_split_pdf_usecase_3: 'Операции: архивировать каждую отсканированную страницу отдельным файлом.',
  tool_split_pdf_usecases_title: 'Хорошо подходит',
  tool_split_pdf_warn_large: 'Файл больше ~25 МБ — разделение может быть медленным или упасть в некоторых браузерах.',
  tool_split_pdf_warn_pdflib: 'Не удалось загрузить библиотеку PDF. Проверьте сеть и повторите.',
};
export default ru;
