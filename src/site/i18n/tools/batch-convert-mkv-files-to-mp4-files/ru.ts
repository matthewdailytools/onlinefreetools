import type { SiteLangDict } from '../../../types';

/**
 * Русский (D3 пакет): несколько локальных MKV → MP4 с AAC-стерео, скачивание ZIP.
 * Поисковый интент: пакетно mkv в mp4, несколько mkv, без загрузки на сервер.
 */
const ru: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'Пакетно конвертировать MKV в MP4',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Конвертируйте несколько локальных MKV в MP4 с AAC-стерео в браузере и скачайте один ZIP. ~20 файлов, ~500 МиБ каждый. Без загрузки на сервер.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Пакетно конвертируйте локальные MKV в MP4 с AAC-стерео на устройстве и получите один ZIP. Шаги: добавьте MKV → Конвертировать все → Скачать ZIP. Пример: Загрузить образец ставит в очередь два коротких Matroska и упаковывает оба MP4. ~500 МиБ / 2 ч на файл, до ~20 в очереди. Неудачная строка пропускается; успешные попадают в частичный ZIP. Только локальные файлы, не ссылки YouTube; остаются на устройстве, на сервер не отправляются. Один файл? Страница «Конвертировать MKV в MP4» для одного файла.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Папки записей Matroska часто нужны как MP4 для монтажа. Эта страница использует тот же AAC-приоритет, что и инструмент для одного файла, но ставит в очередь много MKV, показывает статус по строкам и упаковывает успешные MP4 в ZIP. Не пакетное извлечение только аудио, не загрузка по URL — один клип → страница одного файла.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'Выбрать файлы MKV',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Перетащите несколько локальных .mkv (~500 МиБ / 2 ч каждый, до ~20). Аудио станет AAC-стерео. Не YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'Очередь',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} файл(ов) в очереди',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Конвертировать все',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'Скачать ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Загрузить образец',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Очистить',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Остановить',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Удалить',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Настройки аудио (необязательно)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Каналы аудио',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Стерео (по умолчанию)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Моно',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'Качество AAC',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Меньший размер',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Сбалансировано',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Выше качество (по умолчанию)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Значения по умолчанию для каждого файла в очереди. Смена настроек сбрасывает готовый ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Прогресс пакетной конвертации',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Загрузка движка',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Чтение',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Декодирование',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Кодирование',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'Упаковка ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'Готово. Скачайте ZIP — или откройте страницу одного MKV→MP4, если клип один.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'Пакет не удался. Смотрите ошибки строк или попробуйте меньше/меньшие MKV.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: 'Прошло {s} с',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'Результат ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 упаковано · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} успешно, {fail} с ошибкой · ZIP {output} KiB (частично). Скачивание включает успехи.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Сначала добавьте MKV или загрузите образец.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'Файлов пока нет. Перетащите локальные .mkv (~500 МиБ каждый) или загрузите образец. Не YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'В очереди',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Конвертация…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 готов',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Ошибка',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Остановлено',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Перетащите один или несколько файлов MKV.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'Файл не поддерживается. На этой странице только .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'Файл больше ~500 МиБ / 2 ч или очередь слишком велика для этого браузера.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Слишком много файлов. Держите ~20 MKV или меньше за пакет.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Не удалось открыть файл как Matroska или не осталось пригодной видео/аудиодорожки.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'Кодек не удалось декодировать/закодировать здесь. Эта строка падает; другие могут упаковаться.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'Не удалось записать MP4 для строки. Повторите или удалите её.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'Не удалось собрать ZIP. Нажмите Конвертировать все снова.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'Не удалось загрузить образцы MKV. Используйте свои файлы.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'Не удалось загрузить движок конвертации в этом браузере.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Конвертация остановлена.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'Как пакетно конвертировать MKV в MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Поставьте локальные MKV в очередь, Конвертировать все, затем Скачать ZIP — каждый успех это MP4 с AAC-стерео.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'Выберите несколько локальных .mkv (~500 МиБ каждый) или загрузите образец.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'По желанию откройте Настройки аудио для моно или более лёгкого AAC (на весь пакет).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'Нажмите Конвертировать все и следите за строками (или Остановить). Неудачные пропускаются.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'Когда прогресс завершён, Скачать ZIP. Один клип → страница одного MKV→MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Зачем этот пакетный MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Один ZIP с AAC-MP4 без отправки папки Matroska в облако.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'Статус по строкам и пропуск сбоя — одна битая дорожка не валит весь пакет.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'Тот же AAC-движок, что на странице одного файла, с честными лимитами — не тихий remux.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'Понятные переходы к одному файлу и извлечению аудио после MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Ограничения пакета MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'Только локальные .mkv. Аудио перекодируется в AAC. Лимиты и сбои строк сказаны заранее — огромные rips лучше на desktop ffmpeg.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    '~500 МиБ / 2 ч на файл, ~20 за пакет. При превышении страница покажет понятное сообщение.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'Без загрузки по URL или YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC-стерео (или моно) намеренно. E-AC-3 может декодироваться общим помощником; экзотическое видео может уронить строку.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'Исходные MKV не перезаписываются. Это не пакетное извлечение только аудио — см. связанные страницы.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Попробовать реальный пакет',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Загрузить образец ставит два коротких MKV сайта; Конвертировать все упаковывает. Для проверки — свои файлы в пределах лимита.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'Когда это уместно',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'Папка записей экрана MKV должна стать MP4, потому что монтаж не принимает Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'Несколько MKV с DDP/Atmos нуждаются в AAC перед извлечением звука из полученных MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'Нужен один ZIP без отправки всего пакета в онлайн-конвертер.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'Можно вставить ссылки YouTube?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'Нет. Только локальные файлы .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'Чем отличается от конвертации одного MKV в MP4?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'Там один файл и прямое скачивание MP4. Здесь очередь из многих и ZIP. Тот же AAC-движок.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'Если один MKV не удался?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'Строка показывает ошибку и пропускается. Успешные MP4 остаются в частичном ZIP для скачивания.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'Это просто remux (тот же аудиокодек)?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'Нет. Аудио всегда перекодируется в AAC. Видео копируется, когда возможно.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'Нужны только WAV/MP3 из многих MKV — не та страница?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Только звук: пакетное извлечение аудио из MKV. Здесь — видео MP4 в ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'Загружается ли моя папка на сервер?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'Нет. Конвертация в браузере; файлы остаются на устройстве без отправки на сервер. Скрипты движка загружаются один раз с этого сайта.',
};

export default ru;
