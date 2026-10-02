import type { SiteLangDict } from '../../../types';

/**
 * Русский: Пакетно извлечь аудио из WebM-файлов.
 * Очередь только .webm; последовательное извлечение; частичный ZIP с успешными;
 * лимит запасного пути ~500 МиБ / 4 ч на файл; до 30 файлов; без YouTube.
 */
const ru: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'Пакетно извлечь аудио из WebM-файлов',
  tool_batch_extract_audio_from_webm_files_desc:
    'Извлечь аудио из локальных WebM по одному в ZIP WAV/MP3. Запасной путь ~500 МиБ каждый — частичный ZIP сохраняет успехи.',
  tool_batch_extract_audio_from_webm_files_description:
    'Поставьте локальные WebM в очередь, извлекайте последовательно через запасной путь общего движка (~500 МиБ / 4 ч каждый), пропускайте сбои с понятными кодами, скачайте ZIP. Шаги: добавить WebM → Извлечь → Скачать ZIP. Пример: Загрузить образец создаёт два коротких клипа, если MediaRecorder работает. Не YouTube. Для одного файла используйте «Извлечь аудио из WebM-файла».',
  tool_batch_extract_audio_from_webm_files_article:
    'Папкам с WebM-захватами нужны ZIP только с голосом. Страница ставит в очередь только .webm, извлекает по одному, пропускает слишком большие с err_container и упаковывает успехи. Без YouTube. Без заявки на демукс 5 ГиБ.',
  tool_batch_extract_audio_from_webm_files_choose: 'Выбрать WebM-файлы',
  tool_batch_extract_audio_from_webm_files_hint:
    'До 30 локальных .webm. Запасной путь на файл ~500 МиБ / 4 ч. Сбои пропускаются; ZIP сохраняет успехи.',
  tool_batch_extract_audio_from_webm_files_list_label: 'Очередь файлов',
  tool_batch_extract_audio_from_webm_files_convert: 'Извлечь',
  tool_batch_extract_audio_from_webm_files_stop: 'Стоп',
  tool_batch_extract_audio_from_webm_files_download: 'Скачать ZIP',
  tool_batch_extract_audio_from_webm_files_sample: 'Загрузить образец',
  tool_batch_extract_audio_from_webm_files_clear: 'Очистить',
  tool_batch_extract_audio_from_webm_files_advanced: 'Формат экспорта (необязательно)',
  tool_batch_extract_audio_from_webm_files_format_label: 'Формат вывода',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16 бит)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'Битрейт MP3',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'По умолчанию WAV для коротких клипов. Лимиты следуют запасному пути. Без URL.',
  tool_batch_extract_audio_from_webm_files_progress: 'Прогресс пакетного извлечения',
  tool_batch_extract_audio_from_webm_files_read: 'Чтение',
  tool_batch_extract_audio_from_webm_files_decode: 'Декодирование',
  tool_batch_extract_audio_from_webm_files_extract: 'Извлечение',
  tool_batch_extract_audio_from_webm_files_write: 'Запись',
  tool_batch_extract_audio_from_webm_files_pack: 'Упаковать ZIP',
  tool_batch_extract_audio_from_webm_files_done: 'Готово. Скачайте ZIP извлечённых аудиофайлов.',
  tool_batch_extract_audio_from_webm_files_failed:
    'Пакетное извлечение не удалось. Удалите повреждённые файлы или возьмите меньше.',
  tool_batch_extract_audio_from_webm_files_elapsed: 'Прошло {s} с',
  tool_batch_extract_audio_from_webm_files_preview: 'Результат пакета',
  tool_batch_extract_audio_from_webm_files_result: 'Упаковано {n} аудиофайлов · ZIP {output} КиБ',
  tool_batch_extract_audio_from_webm_files_partial:
    'OK {ok}, сбой {fail} · ZIP всё ещё включает успехи ({output} КиБ)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-audio-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'Добавьте хотя бы один WebM или сначала загрузите образец.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'Файлов ещё нет. Перетащите локальные .webm. Не YouTube.',
  tool_batch_extract_audio_from_webm_files_remove: 'Удалить',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} файл(ов) в очереди',
  tool_batch_extract_audio_from_webm_files_status_pending: 'Ожидание',
  tool_batch_extract_audio_from_webm_files_status_running: 'Извлечение…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'Готово',
  tool_batch_extract_audio_from_webm_files_status_fail: 'Сбой',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'Остановлено',
  tool_batch_extract_audio_from_webm_files_err_file: 'Добавьте WebM, которые браузер сможет декодировать.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'Неподдерживаемый файл. На этой странице только .webm.',
  tool_batch_extract_audio_from_webm_files_err_limit:
    'Файл превысил ограничение размера/длительности запасного пути.',
  tool_batch_extract_audio_from_webm_files_err_container:
    'Файл превышает лимит запасного пути ~500 МиБ / 4 ч — или это невалидный WebM. Строка пропущена.',
  tool_batch_extract_audio_from_webm_files_err_codec:
    'Файл использует неподдерживаемый аудиокодек. Строка пропущена.',
  tool_batch_extract_audio_from_webm_files_err_channels:
    'Файл использует неподдерживаемую раскладку каналов. Строка пропущена.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'Браузер не смог декодировать аудио из файла.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'Не удалось записать аудиофайл.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'Не удалось создать ZIP.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'Лимит очереди — 30 файлов.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'Не удалось создать образцы. Перетащите свои файлы.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'В этом браузере нет Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'Нет пригодных аудиосэмплов.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'Длинный/крупный файл использовал потоковый MP3.',
  tool_batch_extract_audio_from_webm_files_how_title: 'Как пакетно извлечь аудио из WebM-файлов',
  tool_batch_extract_audio_from_webm_files_how_body:
    'Поставьте локальные WebM в очередь, извлекайте по одному, скачайте ZIP.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'Выберите несколько .webm или «Загрузить образец».',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'При желании выберите MP3 вместо WAV.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'Нажмите «Извлечь»; «Стоп» отменяет оставшиеся строки.',
  tool_batch_extract_audio_from_webm_files_how_item_4: 'Скачайте ZIP. Неудачные строки пропускаются.',
  tool_batch_extract_audio_from_webm_files_why_choose_title:
    'Зачем выбирать «Пакетно извлечь аудио из WebM-файлов»',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'Последовательное извлечение стабилизирует память.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2:
    'Статус по строкам; один сбой не стирает ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'Честные лимиты запасного пути для WebM.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'Обработка на устройстве; рядом хаб для смешанных форматов.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'Последовательное извлечение WebM и честность ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'Каждый WebM классифицируется, затем извлекается отдельно. Частичные ZIP сохраняют успехи.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'До 30 файлов; каждый ~500 МиБ / 4 ч запасного пути.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'Без URL и скачивания YouTube.',
  tool_batch_extract_audio_from_webm_files_rules_item_3:
    'Сбои пропускаются с err_container / err_codec при необходимости.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'Файлы остаются на вашем устройстве.',
  tool_batch_extract_audio_from_webm_files_example_title: 'Попробовать реальный пакет',
  tool_batch_extract_audio_from_webm_files_example:
    '«Загрузить образец» по возможности создаёт два коротких клипа и упаковывает ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'Когда это помогает',
  tool_batch_extract_audio_from_webm_files_usecase_1:
    'Папка WebM-захватов нужна как голосовые дорожки в одном ZIP.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'Массовое извлечение без загрузки каждого файла.',
  tool_batch_extract_audio_from_webm_files_usecase_3:
    'Смесь с слишком большими файлами — частичный ZIP всё равно полезен.',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'Плейлист YouTube?',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'Нет. Только локальные .webm.',
  tool_batch_extract_audio_from_webm_files_faq_q2: 'Только один файл?',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'Используйте страницу одиночного извлечения WebM.',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'Почему 500 МиБ, а не 5 ГиБ?',
  tool_batch_extract_audio_from_webm_files_faq_a3:
    'Демукса WebM ещё нет; действуют лимиты запасного пути. У MP4/MOV есть крупный демукс.',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'Загружается?',
  tool_batch_extract_audio_from_webm_files_faq_a4: 'Нет. Только в браузере.',
  tool_batch_extract_audio_from_webm_files_faq_q5: 'Один огромный файл падает?',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'Эта строка падает с err_container; остальные всё равно упаковываются.',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'Обрезать потом?',
  tool_batch_extract_audio_from_webm_files_faq_a6:
    'Скачайте ZIP, затем используйте инструмент обрезки по файлу.',
};
export default ru;
