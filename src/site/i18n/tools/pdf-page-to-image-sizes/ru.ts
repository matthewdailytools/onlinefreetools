/**
 * i18n tool shard (pdf-page-to-image-sizes / ru). Независимая локализация под русский поиск.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Выберите одну страницу PDF и экспортируйте ZIP JPEG для соцсетей — квадрат 1080, OG 1200×630, HD 1280×720, вертикаль 1080×1920. рендерер страниц рендерит один раз; Canvas вписывает каждый пресет с белыми полями при необходимости.',
  tool_pdf_page_to_image_sizes_choose_file: 'Выбрать PDF',
  tool_pdf_page_to_image_sizes_clear: 'Очистить',
  tool_pdf_page_to_image_sizes_desc:
    'Экспорт одной страницы PDF в пакет JPEG разных размеров на устройстве — ZIP; без загрузки на сервер.',
  tool_pdf_page_to_image_sizes_description:
    'Превратите одну страницу PDF в пакет JPEG разных размеров в браузере — файл остаётся на устройстве и не загружается на сервер. Выберите PDF, укажите номер страницы (по умолчанию 1), нажмите Экспорт и скачайте ZIP с page-N-WxH.jpg. Пример: обложка-образец даёт четыре пресета (1080², 1200×630, 1280×720, 1080×1920). Зашифрованные или повреждённые PDF показывают понятную ошибку.',
  tool_pdf_page_to_image_sizes_download: 'Скачать',
  tool_pdf_page_to_image_sizes_drop_hint: 'Или перетащите PDF сюда. Обработка во вкладке.',
  tool_pdf_page_to_image_sizes_empty: 'Сначала выберите файл PDF.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Номер страницы вне диапазона. Проверьте общее число страниц.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'PDF, похоже, защищён паролем. Сначала снимите защиту.',
  tool_pdf_page_to_image_sizes_err_export: 'Экспорт не удался. Проверьте файл и номер страницы.',
  tool_pdf_page_to_image_sizes_err_fflate: 'Библиотека ZIP не загрузилась. Проверьте сеть.',
  tool_pdf_page_to_image_sizes_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'Рендерер PDF не загрузился. Проверьте сеть.',
  tool_pdf_page_to_image_sizes_example:
    'Образец создаёт одностраничный PDF, экспортирует стр. 1 в четыре JPEG-пресета и включает скачивание page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'Пример',
  tool_pdf_page_to_image_sizes_export: 'Экспорт',
  tool_pdf_page_to_image_sizes_faq_a1:
    'Нет. рендерер страниц, библиотека PDF и библиотека ZIP работают во вкладке (скрипты могут грузиться с CDN). PDF не отправляется на наши серверы.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF в JPG экспортирует каждую страницу в исходных пропорциях. Этот инструмент берёт одну страницу и вписывает в фиксированные размеры платформ (contain, по центру, белые поля).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (квадрат Instagram), 1200×630 (Open Graph / Facebook), 1280×720 (HD альбом), 1080×1920 (сторис / вертикаль).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'Страница масштабируется целиком без обрезки. Пустое место заливается белым для чистого JPEG.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'Файлы больше ~25 МБ могут работать медленно или падать. Сложные страницы потребляют больше памяти.',
  tool_pdf_page_to_image_sizes_faq_q1: 'Загружается ли PDF на сервер?',
  tool_pdf_page_to_image_sizes_faq_q2: 'Чем отличается от PDF в JPG?',
  tool_pdf_page_to_image_sizes_faq_q3: 'Какие размеры включены?',
  tool_pdf_page_to_image_sizes_faq_q4: 'Почему вокруг изображения белые поля?',
  tool_pdf_page_to_image_sizes_faq_q5: 'Есть ли лимит размера файла?',
  tool_pdf_page_to_image_sizes_how_body:
    'Выберите PDF, введите номер страницы (с 1), нажмите Экспорт и скачайте. Один рендер, вписывание в каждый пресет, затем ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'Как это работает',
  tool_pdf_page_to_image_sizes_page_label: 'Номер страницы',
  tool_pdf_page_to_image_sizes_pages_label: 'Страниц',
  tool_pdf_page_to_image_sizes_rules_body:
    'Пресеты, поведение contain, JPEG, имена ZIP, конфиденциальность и сбои.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Пресеты: 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Выбранная страница рендерится один раз в масштабе 2×, затем drawImage contain по центру; JPEG качество 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'Имена в ZIP: page-{N}-{W}x{H}.jpg. Архив: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Конфиденциальность и лимиты: байты во вкладке; шифрованный/битый PDF — явная ошибка; >~25 МБ может тормозить.',
  tool_pdf_page_to_image_sizes_rules_title: 'Ожидаемые правила',
  tool_pdf_page_to_image_sizes_sample: 'Загрузить образец',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Стр. {page} · {n} размеров · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Готово — нажмите Скачать для ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Рендер страницы и сборка пакета размеров…',
  tool_pdf_page_to_image_sizes_title: 'Страница PDF в несколько размеров — пакет экспорта',
  tool_pdf_page_to_image_sizes_usecase_1: 'SMM: постер PDF → квадрат IG, OG и вертикаль в одном ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Владельцы сайтов: обложка 1200×630 для превью ссылок без ручной обрезки.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Студенты: один слайд лекции в удобных для телефона размерах.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Подходит для',
  tool_pdf_page_to_image_sizes_warn_large: 'Файл больше ~25 МБ — экспорт может быть медленным или сорваться.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'Библиотека PDF не загрузилась. Проверьте сеть.',
};
export default ru;
