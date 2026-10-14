/**
 * i18n tool shard (images-to-ppt / ru).
 * 多图转 PowerPoint 俄语：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 俄语文案字典。 */
const ru: SiteLangDict = {
	tool_images_to_ppt_title: 'Изображения в PowerPoint — фото в слайды PPTX',
	tool_images_to_ppt_desc: 'Превратите локальные фото в .pptx: один слайд на каждое изображение.',
	tool_images_to_ppt_description:
		'Конвертировать изображения в PowerPoint: несколько фото в браузере становятся .pptx — один слайд на картинку, 16:9 или 4:3, contain или cover. Шаги: Выбрать изображения, Конвертировать в PowerPoint, Скачать. Пример: три фото → три слайда. Файлы не покидают эту вкладку.',
	tool_images_to_ppt_choose_files: 'Выбрать изображения',
	tool_images_to_ppt_drop_hint: 'Или перетащите сюда несколько файлов JPEG, PNG, WebP или GIF. Обработка остаётся в этой вкладке.',
	tool_images_to_ppt_convert: 'Конвертировать в PowerPoint',
	tool_images_to_ppt_download: 'Скачать',
	tool_images_to_ppt_sample: 'Загрузить пример',
	tool_images_to_ppt_clear: 'Очистить',
	tool_images_to_ppt_advanced: 'Дополнительные настройки (необязательно)',
	tool_images_to_ppt_layout_label: 'Размер слайда',
	tool_images_to_ppt_layout_16x9: 'Широкоэкранный 16:9',
	tool_images_to_ppt_layout_4x3: 'Стандартный 4:3',
	tool_images_to_ppt_layout_hint: 'Большинство современных проекторов — 16:9. Выберите 4:3 для старых классных презентаций.',
	tool_images_to_ppt_fit_label: 'Как изображение заполняет слайд',
	tool_images_to_ppt_fit_contain: 'Вписать целиком (поля letterbox)',
	tool_images_to_ppt_fit_cover: 'Заполнить слайд (края могут обрезаться)',
	tool_images_to_ppt_fit_hint: 'Contain сохраняет каждый пиксель. Cover заполняет слайд и может обрезать высокие или широкие фото.',
	tool_images_to_ppt_bg_label: 'Фон слайда',
	tool_images_to_ppt_bg_hint: 'Виден в полосах letterbox, когда выбран contain. По умолчанию белый.',
	tool_images_to_ppt_progress: 'Собираем PowerPoint…',
	tool_images_to_ppt_step_encode: 'Кодирование изображений',
	tool_images_to_ppt_step_build: 'Сборка слайдов',
	tool_images_to_ppt_step_pack: 'Упаковка PPTX',
	tool_images_to_ppt_encode_step: 'Кодирование изображения {i} из {n}…',
	tool_images_to_ppt_build_step: 'Добавляем слайды в презентацию…',
	tool_images_to_ppt_pack_step: 'Упаковываем файл .pptx…',
	tool_images_to_ppt_elapsed: 'Прошло {s} с',
	tool_images_to_ppt_move_up: 'Вверх',
	tool_images_to_ppt_move_down: 'Вниз',
	tool_images_to_ppt_remove: 'Удалить',
	tool_images_to_ppt_empty: 'Сначала добавьте хотя бы одно изображение.',
	tool_images_to_ppt_err_decode: 'Не удалось декодировать изображение. Попробуйте JPEG, PNG или WebP.',
	tool_images_to_ppt_err_convert: 'Не удалось собрать файл PowerPoint. Попробуйте меньше или меньше по размеру изображений.',
	tool_images_to_ppt_err_lib: 'Библиотека PPTX не загрузилась. Обновите страницу и повторите.',
	tool_images_to_ppt_warn_large: 'Большой файл (>25 МБ) — конвертация может идти медленно.',
	tool_images_to_ppt_warn_edge: 'Край превышает ~8192 px — в некоторых браузерах возможны сбои.',
	tool_images_to_ppt_warn_animation: 'Анимированный GIF: на слайд попадает только первый кадр.',
	tool_images_to_ppt_status_converting: 'Конвертируем в PowerPoint…',
	tool_images_to_ppt_status_done: 'Готово — нажмите Скачать, чтобы сохранить .pptx.',
	tool_images_to_ppt_stats_tpl: '{n} слайдов → PPTX готов ({bytes})',
	tool_images_to_ppt_how_title: 'Как конвертировать изображения в PowerPoint',
	tool_images_to_ppt_how_body:
		'Каждый файл в списке становится одним слайдом. Переставьте стрелками, затем конвертируйте. Дополнительные настройки меняют размер слайда, способ заполнения и цвет letterbox.',
	tool_images_to_ppt_how_item_1: 'Выбрать изображения или перетащить JPEG, PNG, WebP или GIF в зону сброса.',
	tool_images_to_ppt_how_item_2: 'Переставьте Вверх / Вниз, если порядок слайдов неверный. Удалите ненужные.',
	tool_images_to_ppt_how_item_3: 'При желании откройте Дополнительные настройки: 16:9 или 4:3, contain или cover и цвет фона.',
	tool_images_to_ppt_how_item_4: 'Нажмите Конвертировать в PowerPoint, дождитесь прогресса, затем Скачать.',
	tool_images_to_ppt_why_choose_title: 'Почему наши инструменты «Изображения в PowerPoint»',
	tool_images_to_ppt_why_choose_item_1: 'Один слайд на фото, в вашем порядке — без загрузки в облако и без аккаунта.',
	tool_images_to_ppt_why_choose_item_2: 'Широкий 16:9 или классический 4:3, чтобы презентация совпала с проектором в зале.',
	tool_images_to_ppt_why_choose_item_3: 'Contain показывает всё фото; cover заполняет слайд, когда нужен вид без полей.',
	tool_images_to_ppt_why_choose_item_4: 'Мягкие предупреждения о огромных файлах, гигантских краях в пикселях и анимированных GIF (только первый кадр).',
	tool_images_to_ppt_why_choose_item_5: 'Заметный прогресс-HUD, пока каждое изображение кодируется и упаковывается в .pptx.',
	tool_images_to_ppt_rules_title: 'Правила',
	tool_images_to_ppt_rules_body: 'Презентация собирается с помощью PptxGenJS целиком в этой вкладке браузера.',
	tool_images_to_ppt_rules_item_1: 'По умолчанию широкоэкранный 16:9; переключитесь на 4:3 в Дополнительных настройках при необходимости.',
	tool_images_to_ppt_rules_item_2: 'Порядок слайдов следует списку. Используйте Вверх / Вниз до конвертации.',
	tool_images_to_ppt_rules_item_3: 'Contain добавляет letterbox цветом фона; cover обрезает, чтобы заполнить область контента.',
	tool_images_to_ppt_rules_item_4: 'Анимированные GIF дают только первый кадр. Заголовки и переходы не добавляются — отредактируйте их в PowerPoint после скачивания.',
	tool_images_to_ppt_rules_item_5: 'Загрузка библиотеки PPTX с этого сайта не отправляет ваши фото на наши серверы.',
	tool_images_to_ppt_example_title: 'Пример',
	tool_images_to_ppt_example:
		'Загрузить пример создаёт три цветных слайда (sample-a, sample-b, sample-c) в 16:9 с contain. Конвертировать в PowerPoint выполняется в браузере; Скачать сохраняет images.pptx. Переключитесь на 4:3 или cover и конвертируйте снова, чтобы сравнить обрезку.',
	tool_images_to_ppt_usecases_title: 'Когда это удобно',
	tool_images_to_ppt_usecase_1: 'Собрать быструю презентацию из фото с телефона, не открывая сначала настольный PowerPoint.',
	tool_images_to_ppt_usecase_2: 'Обзоры продукта, где каждому скриншоту нужен свой слайд без полей или с letterbox.',
	tool_images_to_ppt_usecase_3: 'Учебные или полевые фото, которые должны совпасть с ещё используемым проектором 4:3.',
	tool_images_to_ppt_usecase_4: 'Черновик презентации из изображений перед тем, как добавить заголовки, заметки и анимации в PowerPoint или LibreOffice Impress.',
	tool_images_to_ppt_faq_q1: 'Загружаются ли мои фото?',
	tool_images_to_ppt_faq_a1:
		'Нет. Декодирование, раскладка слайдов и упаковка PPTX идут во вкладке браузера. Единственный сетевой запрос — загрузка скрипта PptxGenJS из vendor-папки этого сайта.',
	tool_images_to_ppt_faq_q2: 'Нужен ли установленный Microsoft PowerPoint?',
	tool_images_to_ppt_faq_a2:
		'Нет. Подойдёт любое приложение, открывающее .pptx — PowerPoint, Google Презентации (Файл → Импорт), LibreOffice Impress, Keynote и другие.',
	tool_images_to_ppt_faq_q3: 'Можно ли здесь добавить заголовки или анимации?',
	tool_images_to_ppt_faq_a3:
		'Не на этой странице. Сначала экспортируйте слайды с фото, затем откройте файл в PowerPoint (или Impress) и добавьте текст, переходы и заметки докладчика.',
	tool_images_to_ppt_faq_q4: 'Изображения в PowerPoint или изображения в PDF?',
	tool_images_to_ppt_faq_a4:
		'PPTX остаётся редактируемым как слайды. PDF фиксирован для раздаток и печати. Используйте инструмент «Изображения в PDF», когда нужен документ, а не презентация.',
	tool_images_to_ppt_faq_q5: 'Contain или cover — что выбрать?',
	tool_images_to_ppt_faq_a5:
		'Contain (по умолчанию) показывает всё фото с полосами letterbox цвета фона. Cover заполняет слайд и может обрезать края — удобно для полноэкранных продуктовых кадров.',
	tool_images_to_ppt_faq_q6: 'Что происходит с анимированными GIF?',
	tool_images_to_ppt_faq_a6:
		'На слайд попадает только первый кадр. PowerPoint не воспроизводит многокадровые GIF как анимацию из этого экспорта.',
	tool_images_to_ppt_faq_q7: 'Почему конвертация медленная или срывается?',
	tool_images_to_ppt_faq_a7:
		'Очень большие файлы (>25 МБ) или края свыше ~8192 px нагружают браузер. Уменьшите или сожмите изображения и при необходимости конвертируйте снова с меньшим числом файлов.',
	tool_images_to_ppt_article: 'Конвертируйте изображения в презентацию PowerPoint PPTX в браузере',
	tool_images_to_ppt_references: 'Ссылки на PptxGenJS и MDN Blob для клиентского пути экспорта.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — JavaScript-библиотека PowerPoint',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default ru;
