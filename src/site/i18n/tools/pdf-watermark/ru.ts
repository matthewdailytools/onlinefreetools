/**
 * i18n tool shard (pdf-watermark / ru). Независимая локализация под поиск.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_pdf_watermark_apply: 'Применить',
  tool_pdf_watermark_article:
    'Поставьте DRAFT, CONFIDENTIAL или свой текст на каждую страницу PDF в браузере. Логотип PNG/JPG по желанию — файл остаётся на устройстве, без загрузки на сервер.',
  tool_pdf_watermark_choose_file: 'Выбрать PDF',
  tool_pdf_watermark_clear: 'Очистить',
  tool_pdf_watermark_desc:
    'Текстовый водяной знак на каждой странице PDF в браузере — без загрузки на сервер; остаётся на устройстве.',
  tool_pdf_watermark_description:
    'Добавьте текстовый водяной знак на каждую страницу PDF в браузере — без загрузки на сервер. Шаги: откройте PDF, введите штамп (напр. DRAFT), задайте прозрачность и угол, опционально PNG/JPG, примените и скачайте. Пример: двухстраничный образец с DRAFT по центру, −45°, прозрачность 35%; скачивание watermarked.pdf. Зашифрованные PDF — понятная ошибка. Отличается от водяного знака на фото и поворота PDF.',
  tool_pdf_watermark_download: 'Скачать',
  tool_pdf_watermark_drop_hint: 'Или перетащите PDF сюда. Обработка в этой вкладке.',
  tool_pdf_watermark_empty: 'Добавьте PDF для штампа.',
  tool_pdf_watermark_err_apply: 'Не удалось поставить водяной знак. Проверьте файл и настройки.',
  tool_pdf_watermark_err_encrypted: 'PDF, похоже, защищён паролем. Сначала снимите защиту.',
  tool_pdf_watermark_err_image: 'Не удалось прочитать изображение. Используйте PNG или JPG.',
  tool_pdf_watermark_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается).',
  tool_pdf_watermark_example:
    'Образец создаёт PDF из двух страниц, ставит DRAFT по центру с прозрачностью 35% и −45° на каждой странице и включает скачивание watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Пример',
  tool_pdf_watermark_faq_a1:
    'Нет. библиотека PDF работает во вкладке (скрипты грузятся с этого сайта). PDF не отправляется на наши серверы.',
  tool_pdf_watermark_faq_a2:
    'Водяной знак на фото накладывает текст/логотип на изображения. Этот инструмент штампует каждую страницу PDF-документа.',
  tool_pdf_watermark_faq_a3:
    'Нет. После скачивания знак встроен в страницу. Убрать можно только из оригинала или тяжёлой правкой.',
  tool_pdf_watermark_faq_a4:
    'PDF с паролем обычно не открывается здесь. Снимите пароль надёжным инструментом.',
  tool_pdf_watermark_faq_a5:
    'Да — выберите PNG или JPG. Масштаб ~треть страницы, та же позиция/прозрачность/поворот, что у текста.',
  tool_pdf_watermark_faq_q1: 'PDF загружается на сервер?',
  tool_pdf_watermark_faq_q2: 'Чем отличается от водяного знака на фото?',
  tool_pdf_watermark_faq_q3: 'Можно ли потом убрать знак?',
  tool_pdf_watermark_faq_q4: 'А зашифрованные PDF?',
  tool_pdf_watermark_faq_q5: 'Можно добавить логотип?',
  tool_pdf_watermark_how_body:
    'Выберите PDF, введите текст, настройте прозрачность и поворот, позицию, опционально PNG/JPG, нажмите Применить и Скачать. На каждой странице одинаковый слой.',
  tool_pdf_watermark_how_item_1: "Выберите файл через «Выбрать PDF»",
  tool_pdf_watermark_how_item_2: "Настройте параметры и нажмите «Применить»",
  tool_pdf_watermark_how_item_3: "Проверьте предпросмотр, число страниц или статус",
  tool_pdf_watermark_how_item_4: "Нажмите «Скачать», чтобы сохранить результат",
  tool_pdf_watermark_how_title: 'Как это работает',
  tool_pdf_watermark_image_hint: 'Логотип PNG/JPG по желанию (та же позиция, что у текста).',
  tool_pdf_watermark_image_label: 'Водяной знак-картинка (опционально)',
  tool_pdf_watermark_opacity_label: 'Прозрачность',
  tool_pdf_watermark_pages_label: 'Страниц',
  tool_pdf_watermark_position_bl: 'Снизу слева',
  tool_pdf_watermark_position_br: 'Снизу справа',
  tool_pdf_watermark_position_center: 'По центру',
  tool_pdf_watermark_position_label: 'Позиция',
  tool_pdf_watermark_position_tl: 'Сверху слева',
  tool_pdf_watermark_position_tr: 'Сверху справа',
  tool_pdf_watermark_rotation_label: 'Поворот (градусы)',
  tool_pdf_watermark_rules_body:
    'Правила текста/картинки, позиции, прозрачности, конфиденциальности и сбоев.',
  tool_pdf_watermark_rules_item_1:
    'Текст: Helvetica на каждой странице; образец — DRAFT по центру, 35% прозрачности, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Картинка: PNG/JPG ~35% страницы, та же позиция/прозрачность/поворот.',
  tool_pdf_watermark_rules_item_3:
    'Позиции: центр или углы; прозрачность 0,1–1; поворот −180°–180°. Новый PDF без отправки на сервер.',
  tool_pdf_watermark_rules_item_4:
    'Ограничения: зашифрованный/битый PDF — ошибка; >~25 МБ может тормозить; снятие знака не поддерживается.',
  tool_pdf_watermark_rules_title: 'Ожидаемые правила',
  tool_pdf_watermark_sample: 'Загрузить образец',
  tool_pdf_watermark_stats_tpl: '{pages} стр. со штампом · {bytes}',
  tool_pdf_watermark_status_done: 'Готово — нажмите Скачать для watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Нанесение водяного знака…',
  tool_pdf_watermark_text_label: 'Текст штампа',
  tool_pdf_watermark_title: 'Водяной знак PDF — поставьте текст на каждую страницу в браузере',
  tool_pdf_watermark_usecase_1: 'Юристы/операции: CONFIDENTIAL на черновики договоров перед отправкой.',
  tool_pdf_watermark_usecase_2: 'Студенты: DRAFT на главы для обратной связи.',
  tool_pdf_watermark_usecase_3: 'Владельцы сайтов: полупрозрачный логотип на каждой странице превью PDF.',
  tool_pdf_watermark_usecases_title: 'Подходит для',
  tool_pdf_watermark_warn_large: 'Файл >~25 МБ — может тормозить или падать.',
  tool_pdf_watermark_warn_pdflib: 'Библиотека PDF не загрузилась. Проверьте сеть.',
};
export default ru;
