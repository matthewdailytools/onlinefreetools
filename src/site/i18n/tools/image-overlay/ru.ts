/**
 * i18n tool shard (image-overlay / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_image_overlay_article:
    'Локальная двухслойная композиция: прозрачность, якорь сверху слева, масштаб, режимы, фон JPEG при сглаживании alpha.',
  tool_image_overlay_blend_darken: 'Darken',
  tool_image_overlay_blend_label: 'Режим',
  tool_image_overlay_blend_lighten: 'Lighten',
  tool_image_overlay_blend_multiply: 'Multiply',
  tool_image_overlay_blend_overlay: 'Overlay',
  tool_image_overlay_blend_screen: 'Screen',
  tool_image_overlay_blend_source_over: 'Обычный (source-over)',
  tool_image_overlay_choose_base: 'Основа',
  tool_image_overlay_choose_overlay: 'Слой',
  tool_image_overlay_clear: 'Очистить',
  tool_image_overlay_description:
    'Наложите логотип или прозрачный PNG-водяной знак на базовое фото в браузере — не текстовый водяной знак и не склейка нескольких снимков. Шаги: выберите базу и слой, задайте прозрачность и масштаб, позицию перетаскиванием или x/y, режим наложения, затем скачайте JPEG/WebP/PNG. Пример: образец фото + полупрозрачный LOGO справа снизу 75 % → PNG — всё на устройстве.',
  tool_image_overlay_download: 'Скачать',
  tool_image_overlay_drop_hint_base: 'Или перетащите базу JPEG, PNG или WebP сюда. Обработка в этой вкладке.',
  tool_image_overlay_drop_hint_overlay: 'Или перетащите слой (удобен PNG с прозрачностью).',
  tool_image_overlay_empty_base: 'Сначала выберите основу.',
  tool_image_overlay_empty_overlay: 'Сначала выберите слой.',
  tool_image_overlay_err_decode: 'Браузер не смог декодировать файл. Попробуйте JPEG, PNG или WebP.',
  tool_image_overlay_err_encode: 'Не удалось экспортировать. Уменьшите базу или смените формат.',
  tool_image_overlay_example:
    'Загрузите пример: градиентная база + полупрозрачный LOGO справа снизу 75 %, режим Обычный. Наложите, оставьте PNG, скачайте. Тяните в превью; попробуйте Multiply на светлом логотипе.',
  tool_image_overlay_example_title: 'Пример',
  tool_image_overlay_faq_a1: 'Нет. Декодирование, композиция и экспорт в браузере. Вкладка Сеть — без POST.',
  tool_image_overlay_faq_a2:
    'Склейка собирает несколько фото в ряд, колонку или сетку. Наложение оставляет одну базу и рисует слой с прозрачностью, позицией и режимом.',
  tool_image_overlay_faq_a3:
    'Правила Canvas: Обычный кладёт сверху; Multiply темнее; Screen светлее; Overlay контрастнее; Darken/Lighten — min/max каналов.',
  tool_image_overlay_faq_a4:
    'У JPEG нет прозрачности. Перед экспортом холст заливается, чтобы прозрачные PNG-зоны не стали чёрными.',
  tool_image_overlay_faq_a5:
    'Страница накладывает только файлы изображений. Для текста используйте инструмент текстового водяного знака.',
  tool_image_overlay_faq_q1: 'Загружаются ли мои изображения?',
  tool_image_overlay_faq_q2: 'Чем отличается от склейки?',
  tool_image_overlay_faq_q3: 'Что делают режимы наложения?',
  tool_image_overlay_faq_q4: 'Зачем цвет фона JPEG?',
  tool_image_overlay_faq_q5: 'Текстовый водяной знак здесь?',
  tool_image_overlay_format_jpeg: 'JPEG',
  tool_image_overlay_format_label: 'Формат вывода',
  tool_image_overlay_format_png: 'PNG',
  tool_image_overlay_format_webp: 'WebP',
  tool_image_overlay_how_body:
    'Добавьте базовое фото и второе изображение (логотип, бейдж или прозрачный PNG). Настройте прозрачность, масштаб и позицию — тяните в превью или введите x/y в пикселях базы. Выберите режим, формат и фон JPEG, наложите и скачайте. Всё локально.',
  tool_image_overlay_how_title: 'Как это работает',
  tool_image_overlay_jpeg_bg_label: 'Фон JPEG',
  tool_image_overlay_opacity_label: 'Прозрачность (%)',
  tool_image_overlay_overlay: 'Наложить',
  tool_image_overlay_pos_bc: 'Низ по центру',
  tool_image_overlay_pos_bl: 'Низ слева',
  tool_image_overlay_pos_br: 'Низ справа',
  tool_image_overlay_pos_mc: 'Центр',
  tool_image_overlay_pos_ml: 'Слева по центру',
  tool_image_overlay_pos_mr: 'Справа по центру',
  tool_image_overlay_pos_tc: 'Верх по центру',
  tool_image_overlay_pos_tl: 'Верх слева',
  tool_image_overlay_pos_tr: 'Верх справа',
  tool_image_overlay_position_label: 'Быстрая позиция',
  tool_image_overlay_preview_label: 'Превью (перетащите слой)',
  tool_image_overlay_quality_label: 'Качество',
  tool_image_overlay_rules_body:
    'Холст вывода = натуральные пиксели базы. Слой рисуется с якорем сверху слева в (x, y) после масштаба.',
  tool_image_overlay_rules_item_1: 'Ширина × высота холста = размер базы; база рисуется в (0, 0).',
  tool_image_overlay_rules_item_2:
    'Размер слоя = натуральная ширина × высота × (масштаб% ÷ 100); позиция в пикселях базы, якорь сверху слева.',
  tool_image_overlay_rules_item_3: 'globalAlpha = прозрачность ÷ 100; globalCompositeOperation = выбранный режим; сброс после слоя.',
  tool_image_overlay_rules_item_4: 'JPEG: сначала заливка выбранным фоном, затем база и слой. PNG/WebP сохраняют alpha где есть.',
  tool_image_overlay_rules_title: 'Правила рисования',
  tool_image_overlay_sample: 'Загрузить пример',
  tool_image_overlay_scale_label: 'Масштаб (%)',
  tool_image_overlay_status_done: 'Готово — нажмите Скачать.',
  tool_image_overlay_status_working: 'Компоную…',
  tool_image_overlay_title: 'Наложить лого — на фото в браузере',
  tool_image_overlay_usecase_1: 'Бренд: логотип на товарных фото или шапках соцсетей без десктоп-редактора.',
  tool_image_overlay_usecase_2: 'Угловые бейджи: наклейка «NEW» с прозрачностью и сеткой из 9 позиций.',
  tool_image_overlay_usecase_3: 'Текстуры: серый слой с Multiply или Screen для тонировки или смягчения фона.',
  tool_image_overlay_usecases_title: 'Подходит для',
  tool_image_overlay_warn_edge: 'База больше ~8192 px — браузер может не справиться.',
  tool_image_overlay_warn_large: 'Большой файл (>25 МБ) — декодирование может быть медленным.',
  tool_image_overlay_x_label: 'X (px)',
  tool_image_overlay_y_label: 'Y (px)',
};
export default ru;
