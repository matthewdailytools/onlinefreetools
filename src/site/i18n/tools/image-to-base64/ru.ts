/**
 * i18n tool shard (image-to-base64 / ru).
 * Картинка ↔ Base64 / data URL; вкладки «Кодировать»/«Декодировать»; эталонный HUD. Правьте только ключи этого инструмента.
 */
import type { SiteLangDict } from '../../../types';

/** Русский словарь текстов (набор ключей совпадает с en.ts). */
const ru: SiteLangDict = {
	tool_image_to_base64_title: 'Изображение в Base64 — кодирование и декодирование локально',
	tool_image_to_base64_desc: 'Перевести картинку в Base64 или data URL и обратно из Base64 в изображение — без загрузки на сервер.',
	tool_image_to_base64_description:
		'Конвертируйте изображение в Base64 (data URL) или Base64 обратно в картинку прямо в браузере: файлы остаются на устройстве, без загрузки на сервер. Выберите файл, нажмите «Кодировать», затем «Копировать». Пример: PNG → data:image/png;base64,… для HTML.',
	tool_image_to_base64_mode_label: 'Режим',
	tool_image_to_base64_tab_encode: 'Кодировать',
	tool_image_to_base64_tab_decode: 'Декодировать',
	tool_image_to_base64_choose_file: 'Выбрать изображение',
	tool_image_to_base64_drop_hint: 'Или перетащите сюда JPEG, PNG, WebP или GIF. Обработка идёт в этой вкладке.',
	tool_image_to_base64_encode: 'Кодировать',
	tool_image_to_base64_decode_btn: 'Декодировать',
	tool_image_to_base64_copy: 'Копировать',
	tool_image_to_base64_copy_done: 'Скопировано',
	tool_image_to_base64_download: 'Скачать',
	tool_image_to_base64_sample: 'Загрузить пример',
	tool_image_to_base64_clear: 'Очистить',
	tool_image_to_base64_advanced: 'Дополнительные настройки (необязательно)',
	tool_image_to_base64_strip_prefix: 'Убрать префикс data: (только Base64)',
	tool_image_to_base64_strip_hint: 'Выключено (по умолчанию): строка остаётся в виде data:image/…;base64, и её можно сразу вставить в HTML. Включено: копируется только тело Base64.',
	tool_image_to_base64_decode_mime_label: 'MIME по умолчанию для чистого Base64',
	tool_image_to_base64_decode_mime_hint: 'Применяется, только если во вставленной строке нет префикса data:. У data URL свой MIME.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'Вставьте data:image/…;base64,… или чистый Base64',
	tool_image_to_base64_output_label: 'Результат',
	tool_image_to_base64_preview_label: 'Превью',
	tool_image_to_base64_progress: 'Обработка…',
	tool_image_to_base64_step_read: 'Чтение файла',
	tool_image_to_base64_step_encode: 'Кодирование',
	tool_image_to_base64_step_ready: 'Готово',
	tool_image_to_base64_read_step: 'Читаем файл…',
	tool_image_to_base64_encode_step: 'Собираем data URL…',
	tool_image_to_base64_ready_step: 'Результат готов',
	tool_image_to_base64_decode_step_parse: 'Разбор',
	tool_image_to_base64_decode_step_blob: 'Сборка изображения',
	tool_image_to_base64_decode_step_ready: 'Готово',
	tool_image_to_base64_parse_step: 'Разбираем Base64…',
	tool_image_to_base64_blob_step: 'Собираем файл изображения…',
	tool_image_to_base64_elapsed: 'Прошло {s} с',
	tool_image_to_base64_empty: 'Сначала выберите изображение.',
	tool_image_to_base64_empty_decode: 'Сначала вставьте data URL или строку Base64.',
	tool_image_to_base64_err_decode: 'Не удалось декодировать. Проверьте, что это корректный data URL изображения или Base64.',
	tool_image_to_base64_err_encode: 'Не удалось закодировать файл. Попробуйте JPEG, PNG или WebP.',
	tool_image_to_base64_err_invalid: 'Некорректный Base64 или data URL.',
	tool_image_to_base64_warn_large: 'Большой объём (>25 МБ) — может работать медленно и занять много памяти.',
	tool_image_to_base64_status_working: 'Обработка…',
	tool_image_to_base64_status_done: 'Готово — скопируйте строку или нажмите «Скачать».',
	tool_image_to_base64_status_decoded: 'Готово — превью на месте; нажмите «Скачать», чтобы сохранить изображение.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} симв. · {bytes}',
	tool_image_to_base64_how_title: 'Как перевести картинку в Base64',
	tool_image_to_base64_how_body:
		'При кодировании браузер читает файл и превращает его в data URL. Для декодирования подходит полный data URL или чистый Base64 (тогда MIME берётся из дополнительных настроек). На сервер ничего не отправляется.',
	tool_image_to_base64_how_item_1: 'На вкладке «Кодировать» выберите или перетащите изображение и нажмите «Кодировать».',
	tool_image_to_base64_how_item_2: 'При необходимости откройте дополнительные настройки и уберите префикс data:, чтобы получить чистый Base64.',
	tool_image_to_base64_how_item_3: 'Нажмите «Копировать», чтобы отправить строку в буфер обмена, или «Скачать», чтобы сохранить исходный файл.',
	tool_image_to_base64_how_item_4: 'Для обратного пути откройте «Декодировать», вставьте data URL или Base64, нажмите «Декодировать» и скачайте восстановленное изображение.',
	tool_image_to_base64_why_choose_title: 'Чем удобен конвертер «Изображение в Base64»',
	tool_image_to_base64_why_choose_item_1: 'Кодирование и декодирование в одном месте: картинка в Base64 и Base64 в картинку на двух вкладках.',
	tool_image_to_base64_why_choose_item_2: 'Превью после каждой операции — видно само изображение, а не только строку символов.',
	tool_image_to_base64_why_choose_item_3: 'Префикс data: можно убрать, если поле API принимает только чистый Base64.',
	tool_image_to_base64_why_choose_item_4: 'Предупреждение о слишком больших файлах, которые могут перегрузить память браузера.',
	tool_image_to_base64_why_choose_item_5: 'Работает в этой вкладке: файл не загружается на наш сервер.',
	tool_image_to_base64_rules_title: 'Правила',
	tool_image_to_base64_rules_body: 'Кодирование выполняет FileReader.readAsDataURL; при декодировании из data URL собирается Blob, который можно скачать.',
	tool_image_to_base64_rules_item_1: 'По умолчанию результат — полная строка data:image/…;base64,…, готовая для атрибута src тега <img>.',
	tool_image_to_base64_rules_item_2: 'Удаление префикса отрезает всё до первой запятой — удобно для API, которым нужен только Base64.',
	tool_image_to_base64_rules_item_3: 'Чистый Base64 без префикса читается с MIME по умолчанию из дополнительных настроек (изначально image/png).',
	tool_image_to_base64_rules_item_4: 'Недопустимые символы или обрезанная строка дают ошибку; ничего не загружается.',
	tool_image_to_base64_rules_item_5: 'Анимированный GIF кодируется целым файлом; отдельные кадры здесь не редактируются.',
	tool_image_to_base64_example_title: 'Пример',
	tool_image_to_base64_example:
		'«Загрузить пример» создаёт PNG 320×200 с надписью «Base64», запускает кодирование и выводит data:image/png;base64,…. Строку можно вставить в <img src="…">. Затем откройте «Декодировать», вставьте ту же строку, нажмите «Декодировать» и скачайте decoded.png.',
	tool_image_to_base64_usecases_title: 'Когда пригодится',
	tool_image_to_base64_usecase_1: 'Встроить маленькую иконку или логотип прямо в HTML/CSS без отдельного запроса за картинкой.',
	tool_image_to_base64_usecase_2: 'Разобрать письмо или Markdown, где изображение уже лежит в виде data URL.',
	tool_image_to_base64_usecase_3: 'Посмотреть, какая картинка спрятана в Base64 из ответа API.',
	tool_image_to_base64_usecase_4: 'Передать чистый Base64 в поле формы, которое не принимает префикс data:.',
	tool_image_to_base64_faq_q1: 'Изображения загружаются на сервер?',
	tool_image_to_base64_faq_a1:
		'Нет. Чтение и декодирование идут во вкладке браузера; файл остаётся на устройстве, без загрузки на сервер.',
	tool_image_to_base64_faq_q2: 'Чем data URL отличается от чистого Base64?',
	tool_image_to_base64_faq_a2:
		'data URL начинается с data:image/png;base64, а дальше идут данные — его можно сразу вставить в HTML. Чистый Base64 — только сами данные; чтобы скопировать его, включите «Убрать префикс data:» в дополнительных настройках.',
	tool_image_to_base64_faq_q3: 'А если файл очень большой?',
	tool_image_to_base64_faq_a3:
		'Сработает, но памяти уйдёт много: Base64 увеличивает объём примерно на 33 %. Если файл больше ~25 МБ, сначала сожмите или уменьшите его.',
	tool_image_to_base64_faq_q4: 'Какой MIME используется при декодировании?',
	tool_image_to_base64_faq_a4:
		'Тот, что указан в data URL. Для чистого Base64 — значение «MIME по умолчанию» из дополнительных настроек (изначально image/png).',
	tool_image_to_base64_faq_q5: 'Что с анимированными GIF?',
	tool_image_to_base64_faq_a5:
		'При кодировании файл целиком превращается в data URL, так что анимация сохраняется. Разбивать или править кадры здесь нельзя.',
	tool_image_to_base64_faq_q6: 'Чем это отличается от конвертера форматов?',
	tool_image_to_base64_faq_a6:
		'Здесь получается текстовая строка (или изображение восстанавливается из неё). Если нужно просто перевести JPEG, PNG или WebP друг в друга, воспользуйтесь конвертером форматов изображений.',
	tool_image_to_base64_faq_q7: 'Почему «Копировать» неактивна или пустая?',
	tool_image_to_base64_faq_a7:
		'Для копирования нужен результат кодирования: выберите изображение, нажмите «Кодировать», затем «Копировать». На вкладке «Декодировать» сохраняйте картинку кнопкой «Скачать».',
	tool_image_to_base64_article:
		'Картинка в Base64 через data URL из FileReader; обратно — из data URL или чистого Base64 с настраиваемым MIME по умолчанию.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — Data URL',
};

export default ru;
