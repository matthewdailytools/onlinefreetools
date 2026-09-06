/**
 * i18n tool shard (image-optimizer / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_image_optimizer_article:
    'Локальный WASM-оптимизатор: выбор кодека, качество/усилие, опциональный предел длинной стороны, сравнение ползунком и честные предупреждения о медленном AVIF.',
  tool_image_optimizer_avif_slow: 'AVIF на больших фото может идти долго — можно отменить.',
  tool_image_optimizer_cancel: 'Отмена',
  tool_image_optimizer_cancelled: 'Отменено.',
  tool_image_optimizer_choose_file: 'Выбрать изображение',
  tool_image_optimizer_clear: 'Очистить',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Кодек / вывод',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Оптимизируйте картинки для сайта в браузере через MozJPEG, WebP, AVIF или OxiPNG. Шаги: выберите фото, загрузите движок, выберите кодек и настройки, сравните до/после ползунком, скачайте. Пример: тяжёлый JPEG обложки → более лёгкий WebP. После загрузки движка файлы остаются на устройстве.',
  tool_image_optimizer_download: 'Скачать',
  tool_image_optimizer_drop_hint: 'Или перетащите JPEG, PNG или WebP сюда. После загрузки движка оптимизация остаётся во вкладке.',
  tool_image_optimizer_effort_label: 'Усилие / скорость',
  tool_image_optimizer_empty: 'Сначала выберите изображение.',
  tool_image_optimizer_engine_failed: 'Не удалось загрузить движок. Проверьте сеть и попробуйте снова.',
  tool_image_optimizer_engine_loading: 'Загрузка движка…',
  tool_image_optimizer_engine_needed: 'Сначала загрузите движок оптимизации.',
  tool_image_optimizer_engine_ready: 'Движок готов — выберите кодек и оптимизируйте.',
  tool_image_optimizer_err_decode: 'Не удалось декодировать. Попробуйте JPEG, PNG или WebP.',
  tool_image_optimizer_err_encode: 'Ошибка кодирования. Попробуйте другой кодек, меньшее усилие или меньший файл.',
  tool_image_optimizer_example:
    'Один и тот же телефонный JPEG (~3–4 МБ): MozJPEG часто легче «случайного» браузерного JPEG; WebP обычно ещё сильнее ужимает при похожем виде; AVIF может дать ещё меньше, но на большом кадре займёт секунды. Это порядок величин — смотрите ползунок на своём файле.',
  tool_image_optimizer_example_title: 'Пример',
  tool_image_optimizer_faq_a1:
    'Компрессор — быстрый проход размера/качества (удобно целиться в КБ). Здесь загружается движок, чтобы выбрать MozJPEG, WebP, AVIF или OxiPNG и сравнить ползунком.',
  tool_image_optimizer_faq_a2:
    'Нет. После загрузки движка декод и код остаются во вкладке. В Network видно, что изображение не уходит POST-ом.',
  tool_image_optimizer_faq_a3:
    'Кодирование AVIF сильно грузит CPU, особенно на больших фото. Мы показываем прогресс и даём отмену вместо «мгновенного» обещания.',
  tool_image_optimizer_faq_a4:
    'Кодеки тяжёлые. Ждём клик, чтобы первый экран оставался лёгким — скачиваете их только для оптимизации на уровне кодека.',
  tool_image_optimizer_faq_a5:
    'Когда главное — сменить тип (включая подложку JPEG для прозрачности). Этот оптимизатор — когда важнее вес и контроль кодека, а не быстрая смена MIME.',
  tool_image_optimizer_faq_a6:
    'Анимация становится первым кадром-статикой. Перекодирование обычно снимает EXIF — сначала посмотрите теги в EXIF-инструменте, если они нужны.',
  tool_image_optimizer_faq_q1: 'Чем это отличается от компрессора изображений?',
  tool_image_optimizer_faq_q2: 'Файлы уходят с устройства?',
  tool_image_optimizer_faq_q3: 'Почему AVIF такой медленный?',
  tool_image_optimizer_faq_q4: 'Зачем сначала грузить движок?',
  tool_image_optimizer_faq_q5: 'Когда брать конвертер форматов?',
  tool_image_optimizer_faq_q6: 'Что с анимацией и EXIF?',
  tool_image_optimizer_how_body:
    'Выберите фото, один раз загрузите движок, выберите MozJPEG, WebP, AVIF или OxiPNG, настройте качество или усилие, при необходимости ограничьте длинную сторону и двигайте ползунок сравнения. Всё локально. Если нужен быстрый срез веса без выбора кодека — возьмите лёгкий компрессор.',
  tool_image_optimizer_how_title: 'Как это работает',
  tool_image_optimizer_load_engine: 'Загрузить движок',
  tool_image_optimizer_max_edge_label: 'Макс. сторона',
  tool_image_optimizer_optimize: 'Оптимизировать',
  tool_image_optimizer_optimizing: 'Оптимизация…',
  tool_image_optimizer_preview_after: 'После',
  tool_image_optimizer_preview_before: 'До',
  tool_image_optimizer_quality_label: 'Качество',
  tool_image_optimizer_ratio_tpl: '{from} → {to} (меньше на {pct}%)',
  tool_image_optimizer_resize_on: 'Ограничить длинную сторону',
  tool_image_optimizer_rules_body:
    'Кодеки по-разному балансируют вес, вид, прозрачность и время. Прочитайте перед погоней за самым маленьким файлом.',
  tool_image_optimizer_rules_item_1: 'MozJPEG: lossy JPEG, обычно легче обычного браузерного JPEG — удобно, если нужен .jpg.',
  tool_image_optimizer_rules_item_2: 'WebP: фото часто меньше при похожем виде; есть прозрачность. Хороший выбор по умолчанию.',
  tool_image_optimizer_rules_item_3: 'AVIF: часто самый лёгкий в lossy, но медленнее — прогресс и отмена обязательны.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: без потерь уменьшает PNG. Фото всё равно тяжёлые; лучше для чёткого UI с альфой. Перекодирование обычно снимает EXIF; байты не покидают вкладку.',
  tool_image_optimizer_rules_title: 'Что ожидать',
  tool_image_optimizer_sample: 'Загрузить пример',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} мс',
  tool_image_optimizer_status_done: 'Готово — проверьте ползунок и размер, затем скачайте.',
  tool_image_optimizer_title: 'Оптимизация изображений — меньше вес на устройстве',
  tool_image_optimizer_usecase_1: 'Выложить обложку или товар в WebP/AVIF после проверки вида ползунком.',
  tool_image_optimizer_usecase_2: 'Оставить JPEG, но через MozJPEG, если браузерный JPEG всё ещё тяжёлый.',
  tool_image_optimizer_usecase_3: 'Ужать прозрачные UI-PNG через OxiPNG или почти без потерь WebP перед передачей.',
  tool_image_optimizer_usecases_title: 'Когда подходит',
  tool_image_optimizer_warn_animation: 'Анимация: оптимизируется только первый кадр.',
  tool_image_optimizer_warn_edge: 'Очень большие размеры (>8192 px) — ждите замедления; ограничьте длинную сторону.',
  tool_image_optimizer_warn_large: 'Большой файл (>25 МБ) — может быть медленно или не хватит памяти.',
};
export default ru;
