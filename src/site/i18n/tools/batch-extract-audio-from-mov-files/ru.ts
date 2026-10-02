import type { SiteLangDict } from '../../../types';

/**
 * Русский: несколько локальных MOV → ZIP с аудио (только .mov, по очереди, без YouTube).
 * Поисковые формулировки: «извлечь аудио из mov пакетно», «несколько mov в mp3».
 */
const ru: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'Пакетно извлечь аудио из MOV-файлов',
	tool_batch_extract_audio_from_mov_files_desc:
		'Очередь только из локальных MOV: по одному, ошибки пропускаются, ZIP WAV/MP3. Без загрузки на сервер.',
	tool_batch_extract_audio_from_mov_files_description:
		'Извлекает аудио из нескольких локальных MOV по очереди в браузере и сохраняет ZIP WAV или MP3. Шаги: добавить .mov → Извлечь → скачать ZIP. Пример: «Загрузить пример» создаёт два коротких синтетических MOV и упаковывает аудио. На файл — те же лимиты demux+OPFS, что у одиночного MOV-инструмента (с OPFS ~5 ГиБ / 6 ч, иначе ~1 ГиБ). Сбойные строки пропускаются, успешные упаковываются. На устройстве — без загрузки. Без YouTube. Один файл → «Извлечь аудио из файла MOV». Смешанные MP4/WebM/MKV → «Извлечь аудио из видеофайлов (пакетно)».',
	tool_batch_extract_audio_from_mov_files_article:
		'Папки с телефонными MOV часто нужны только ради AAC-дорожки. Эта страница ставит в очередь только .mov, отклоняет другие расширения, извлекает по одному ради стабильной RAM и кладёт успехи в ZIP. Это не загрузчик YouTube и не хаб смешанных контейнеров.',
	tool_batch_extract_audio_from_mov_files_choose: 'Выбрать файлы MOV',
	tool_batch_extract_audio_from_mov_files_hint:
		'До 30 локальных .mov. Другие форматы отклоняются — см. смешанный пакет. Лимит на файл = одиночный MOV-инструмент.',
	tool_batch_extract_audio_from_mov_files_list_label: 'Очередь MOV',
	tool_batch_extract_audio_from_mov_files_convert: 'Извлечь',
	tool_batch_extract_audio_from_mov_files_stop: 'Стоп',
	tool_batch_extract_audio_from_mov_files_download: 'Скачать ZIP',
	tool_batch_extract_audio_from_mov_files_sample: 'Загрузить пример',
	tool_batch_extract_audio_from_mov_files_clear: 'Очистить',
	tool_batch_extract_audio_from_mov_files_advanced: 'Формат экспорта (необязательно)',
	tool_batch_extract_audio_from_mov_files_format_label: 'Формат вывода',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16 бит)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'Битрейт MP3',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'Короткие MOV: WAV по умолчанию. Крупные файлы могут принудительно дать потоковый MP3 по строке. Без URL/YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'Прогресс пакетного извлечения MOV',
	tool_batch_extract_audio_from_mov_files_read: 'Чтение',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'Извлечение',
	tool_batch_extract_audio_from_mov_files_write: 'Запись',
	tool_batch_extract_audio_from_mov_files_pack: 'Упаковка ZIP',
	tool_batch_extract_audio_from_mov_files_done: 'Готово. Скачайте ZIP с извлечённым аудио.',
	tool_batch_extract_audio_from_mov_files_failed: 'Пакет не удался. Уберите повреждённые MOV или уменьшите число файлов.',
	tool_batch_extract_audio_from_mov_files_elapsed: 'Прошло {s} с',
	tool_batch_extract_audio_from_mov_files_preview: 'Результат пакета',
	tool_batch_extract_audio_from_mov_files_result: '{n} аудио упаковано · ZIP {output} КиБ',
	tool_batch_extract_audio_from_mov_files_partial: '{ok} ок, {fail} сбой · ZIP только успехи ({output} КиБ)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'Добавьте хотя бы один MOV или загрузите пример.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'Пока нет MOV. Перетащите локальные .mov или загрузите пример. Без YouTube и не-MOV.',
	tool_batch_extract_audio_from_mov_files_remove: 'Удалить',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOV в очереди',
	tool_batch_extract_audio_from_mov_files_status_pending: 'Ожидание',
	tool_batch_extract_audio_from_mov_files_status_running: 'Извлечение…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'Готово',
	tool_batch_extract_audio_from_mov_files_status_fail: 'Сбой',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'Остановлено',
	tool_batch_extract_audio_from_mov_files_err_file: 'Добавляйте только файлы .mov.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'Только .mov. Для MP4, WebM или MKV — смешанный видеопакет.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'MOV сверх лимита demux (с OPFS ~5 ГиБ / 6 ч, иначе ~1 ГиБ). Строка пропущена.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'MOV ISOBMFF нельзя демультиплексировать. Строка пропущена.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'MOV с аудиокодеком, который этот путь не декодирует. Строка пропущена.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'MOV с неподдерживаемой раскладкой каналов. Строка пропущена.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'Браузер не смог декодировать аудио из MOV. Строка пропущена.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'Не удалось экспортировать аудио. Проверьте формат и извлеките снова.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'Не удалось создать ZIP. Уменьшите число MOV.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'Максимум 30 MOV в очереди.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'В этом браузере нельзя создать примерные MOV. Перетащите свои .mov.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Нет Web Audio, нужного для извлечения.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'В очереди MOV нет пригодного аудио.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'Длинный/большой MOV в этой строке принудительно дал потоковый MP3.',
	tool_batch_extract_audio_from_mov_files_how_title: 'Как извлечь аудио из нескольких MOV',
	tool_batch_extract_audio_from_mov_files_how_body:
		'Поставьте локальные MOV в очередь, извлекайте по одному, скачайте ZIP — без загрузки и без вставки URL.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'Выберите несколько локальных .mov или «Загрузить пример» для двух коротких синтетических MOV.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'Если нужен MP3, откройте «Формат экспорта» и битрейт.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'Нажмите «Извлечь»: Чтение → Demux → Извлечение → Запись по файлу. «Стоп» отменяет остаток.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'После HUD: «Скачать ZIP». Сбои пропускаются; ≥1 успех → упаковка.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'Почему этот пакет MOV?',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'Только MOV — без тихого смешивания MP4/WebM/MKV в папке «несколько mov в mp3».',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'Последовательное извлечение держит RAM стабильной на телефонных MOV на несколько ГиБ (AAC в ISOBMFF).',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'Статус по строке Ожидание/Извлечение/Готово/Сбой — один плохой MOV не ломает весь ZIP.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'«Стоп» обрывает очередь. Скачивание ZIP выключено, пока нет реального архива.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'Очередь MOV, по очереди, ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'Классифицировать каждый MOV, извлечь отдельно, положить в ZIP. Частичные успехи сохраняются. Не YouTube→MP3 и не перекодирование немого видео.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'До 30 .mov; лимит demux на файл (с OPFS ~5 ГиБ / 6 ч).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'Не-MOV отклоняются при постановке — MP4/WebM/MKV → смешанный хаб.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'Сбой строки = только эта строка; ≥1 успех → упаковка.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'Всё в браузере на устройстве — без загрузки на сервер.',
	tool_batch_extract_audio_from_mov_files_example_title: 'Проверить реальный пакет MOV',
	tool_batch_extract_audio_from_mov_files_example:
		'«Загрузить пример» создаёт два коротких MOV со звуком (если MediaRecorder умеет H.264+AAC), извлекает и кладёт два аудио в ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'Когда использовать',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'Папка телефонных MOV в ZIP аудио в стиле «mov в mp3 пакетно» без облака.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'Неделя скринкастов MOV → делимые аудио — локально, не с YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'Собрать AAC с камерных дублей и оставить исходные MOV нетронутыми.',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'Можно вставить URL или плейлисты YouTube?',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'Нет. Только локальные .mov через перетаскивание или выбор. Сначала сохраните на устройство.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'У меня один MOV — эта страница?',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'Один файл → одиночный MOV-инструмент. Эта страница — для нескольких MOV и ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'Папка со смешанными .mov и .mp4?',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'Здесь только .mov. Смешанные контейнеры: «Извлечь аудио из видеофайлов (пакетно)».',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'Это онлайн «mov в mp3 пакетно»?',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'Та же цель для локальных MOV: demux AAC, ZIP MP3/WAV на устройстве — без скачивания по URL.',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'Почему по очереди, а не параллельно?',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'Параллельное декодирование раздувает RAM. По очереди в памяти только текущее аудио для ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q6: 'Загружаются ли видео на сервер?',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'Нет. Чтение, demux и ZIP остаются в браузере на вашем устройстве.',
};
export default ru;
