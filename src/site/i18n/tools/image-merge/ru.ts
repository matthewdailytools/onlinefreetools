/**
 * i18n tool shard (image-merge / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_image_merge_article:
    'Локальный коллаж из нескольких изображений: раскладка, отступ, фон, fit в сетке, формат и пресеты размера.',
  tool_image_merge_bg_label: 'Фон',
  tool_image_merge_choose_files: 'Добавить изображения',
  tool_image_merge_clear: 'Очистить',
  tool_image_merge_cols_label: 'Столбцы',
  tool_image_merge_description:
    'Склеить фото онлайн или объединить несколько изображений в коллаж — в браузере, без загрузки на сервер. Шаги: добавьте файлы, выберите горизонт/вертикаль/сетку, задайте отступ и фон, объедините, скачайте JPEG/WebP/PNG. Пример: три образца в ряд, белый фон, отступ 8 px → один WebP; файлы остаются на устройстве; опциональные пресеты размеров для типичных постов.',
  tool_image_merge_download: 'Скачать',
  tool_image_merge_drop_hint: 'Или перетащите два и более JPEG, PNG или WebP сюда. Объединение только в этой вкладке.',
  tool_image_merge_empty: 'Сначала добавьте хотя бы одно изображение.',
  tool_image_merge_err_decode: 'Браузер не смог декодировать один из файлов. Попробуйте JPEG, PNG или WebP.',
  tool_image_merge_err_encode: 'Не удалось экспортировать результат. Уменьшите макет или смените формат.',
  tool_image_merge_example:
    'Загрузите трёхцветный образец, Горизонт, отступ 8 px, белый фон, WebP 0,90, пресет Нет, объедините. Должна получиться полоса ~728×180 px. Сетка 3 столбца — один ряд равных ячеек.',
  tool_image_merge_example_title: 'Пример',
  tool_image_merge_faq_a1: 'Нет. Декодирование, вёрстка и экспорт в браузере. В Network нет POST изображений.',
  tool_image_merge_faq_a2:
    'Горизонт выравнивает высоту и растёт в ширину; вертикаль — ширину и растёт в высоту. Сетка — фиксированные ячейки с вместить/заполнить.',
  tool_image_merge_faq_a3: 'Нет. Это лишь типичные размеры вывода. Правила платформ меняются — проверяйте приложение публикации.',
  tool_image_merge_faq_a4: 'Декодируется и рисуется только первый кадр. Анимация в выводе не сохраняется.',
  tool_image_merge_faq_a5:
    'Стороны выше ~8192 px или слишком много мегапикселей могут превысить память браузера. Уменьшите число файлов, столбцы сетки или обрежьте исходники.',
  tool_image_merge_faq_q1: 'Загружаются ли мои фото?',
  tool_image_merge_faq_q2: 'Чем горизонт отличается от вертикали?',
  tool_image_merge_faq_q3: 'Гарантируют ли пресеты 1080/1200 одобрение Instagram/Facebook?',
  tool_image_merge_faq_q4: 'Что с анимированным GIF?',
  tool_image_merge_faq_q5: 'Почему падает огромный коллаж?',
  tool_image_merge_fit_contain: 'Вместить',
  tool_image_merge_fit_cover: 'Заполнить',
  tool_image_merge_fit_label: 'Вписывание в ячейку',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Формат вывода',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Отступ (px)',
  tool_image_merge_how_body:
    'Добавьте два и более изображения, при необходимости измените порядок, выберите макет, отступ и фон, затем объедините. Страница локально строит холст, рисует каждое фото по порядку, может масштабировать результат под типичные квадрат или превью ссылки, и даёт скачать — без загрузки на сервер.',
  tool_image_merge_how_title: 'Как это работает',
  tool_image_merge_layout_grid: 'Сетка',
  tool_image_merge_layout_horizontal: 'Горизонт',
  tool_image_merge_layout_label: 'Макет',
  tool_image_merge_layout_vertical: 'Вертикаль',
  tool_image_merge_merge: 'Объединить',
  tool_image_merge_move_down: 'Вниз',
  tool_image_merge_move_up: 'Вверх',
  tool_image_merge_need_two: 'Нужно минимум два изображения для объединения.',
  tool_image_merge_preset_fb: '1200×630 (типичное превью ссылки)',
  tool_image_merge_preset_ig: '1080×1080 (типичный квадрат)',
  tool_image_merge_preset_label: 'Пресет размера',
  tool_image_merge_preset_none: 'Нет',
  tool_image_merge_preview_label: 'Превью объединения',
  tool_image_merge_quality_label: 'Качество',
  tool_image_merge_remove: 'Удалить',
  tool_image_merge_rules_body:
    'Размер холста по формулам ниже. В сетке ячейки одной ширины и высоты; «вместить» даёт поля, «заполнить» обрезает.',
  tool_image_merge_rules_item_1:
    'Горизонт: высота = max исходников; каждое масштабируется к этой высоте; ширина = сумма масштабированных ширин + (n−1)×отступ.',
  tool_image_merge_rules_item_2:
    'Вертикаль: ширина = max исходников; каждое масштабируется к этой ширине; высота = сумма масштабированных высот + (n−1)×отступ.',
  tool_image_merge_rules_item_3:
    'Сетка: 2–4 столбца; строк = ceil(n/столбцы); ячейка = max ширина × max высота; отступ между ячейками; вместить или заполнить внутри ячейки.',
  tool_image_merge_rules_item_4:
    'Пресеты вписывают готовый коллаж в 1080×1080 или 1200×630 с вашим фоном (типичные размеры, не гарантия модерации). Фон заливается до рисования.',
  tool_image_merge_rules_title: 'Правила макета',
  tool_image_merge_sample: 'Загрузить образец',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Готово — превью ниже; нажмите Скачать для сохранения.',
  tool_image_merge_status_merging: 'Объединение изображений…',
  tool_image_merge_title: 'Склеить фото онлайн — объединить изображения в коллаж',
  tool_image_merge_usecase_1: 'До/после: две фото рядом для отзывов или прогресса.',
  tool_image_merge_usecase_2: 'Шаги туториала: скриншоты вертикально в одно длинное изображение.',
  tool_image_merge_usecase_3: 'Ракурсы товара или storyboard: сетка 3×3, затем сжатие если файл тяжёлый.',
  tool_image_merge_usecases_title: 'Подходит для',
  tool_image_merge_warn_animation: 'Анимированный GIF: объединяется только первый кадр.',
  tool_image_merge_warn_edge: 'Сторона холста превышает ~8192 px — браузер может упасть или не хватить памяти.',
  tool_image_merge_warn_large: 'Большой файл (>25 МБ) — декодирование может быть медленным.',
};
export default ru;
