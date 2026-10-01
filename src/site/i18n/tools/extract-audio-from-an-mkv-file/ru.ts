import type { SiteLangDict } from '../../../types';

/**
 * Русская локализация: извлечение аудио из одного локального MKV.
 * D1-честность: запасной путь MediaElement ~500 MiB / 4 ч.
 * MKV на несколько ГБ или DDP/Atmos → ffmpeg на ПК в AAC-стereo MP4, затем страница извлечения из MP4.
 * Ключи совпадают с английской мастер-версией en.ts.
 */
const ru: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Извлечь аудио из MKV-файла',
  tool_extract_audio_from_an_mkv_file_desc:
    'Извлеките аудио из одного локального MKV в WAV или MP3 в браузере, если файл укладывается в запасной путь ~500 MiB / 4 ч. MKV на несколько ГБ или с DDP/Atmos: сначала конвертируйте в AAC MP4 на компьютере, затем откройте инструмент для MP4.',
  tool_extract_audio_from_an_mkv_file_description:
    'Извлеките звуковую дорожку из одного локального MKV в браузере и скачайте WAV или MP3. Шаги: выбрать MKV → Извлечь → прослушать → скачать. Пример: «Загрузить образец» создаёт короткую синтетическую заглушку, когда работает MediaRecorder — лучше свой .mkv до ~500 MiB. Страница использует запасной путь MediaElement (~500 MiB / 4 ч); слишком большие файлы сразу дают err_container. MKV на несколько ГБ или с Dolby Digital Plus / Atmos (E-AC-3) здесь не поддерживаются — на компьютере запустите ffmpeg для AAC stereo MP4 (видео можно copy), затем «Извлечь аудио из MP4-файла» для крупного demux. Только локально — не скачивание с YouTube. Файл не загружается на сервер. Много MKV? «Пакетно извлечь аудио из MKV-файлов».',
  tool_extract_audio_from_an_mkv_file_article:
    'Запись экрана и захваты часто приходят в MKV. Страница принимает только .mkv, общий запасной путь извлечения, пишет WAV или MP3 без отправки на сервер. Не обещает ISOBMFF demux и OPFS-поток на несколько ГБ — это для MP4/MOV с AAC. E-AC-3 / DTS в браузере не декодируются. Для многогигабайтного рипа или Atmos сначала ffmpeg → AAC MP4 на устройстве, затем лендинг MP4. Смешанные папки — видео-хаб или пакетный хаб.',
  tool_extract_audio_from_an_mkv_file_choose: 'Выберите MKV-файл',
  tool_extract_audio_from_an_mkv_file_hint:
    'Перетащите локальный .mkv до ~500 MiB / 4 ч. Больше или DDP/Atmos: на ПК ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, затем «Извлечь аудио из MP4-файла».',
  tool_extract_audio_from_an_mkv_file_convert: 'Извлечь',
  tool_extract_audio_from_an_mkv_file_download: 'Скачать',
  tool_extract_audio_from_an_mkv_file_download_wav: 'Скачать WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'Скачать MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'Загрузить образец',
  tool_extract_audio_from_an_mkv_file_clear: 'Очистить',
  tool_extract_audio_from_an_mkv_file_advanced: 'Формат экспорта',
  tool_extract_audio_from_an_mkv_file_format_label: 'Формат вывода',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16 бит)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'Битрейт MP3',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV по умолчанию подходит для коротких MKV. Длиннее — может идти потоковый MP3. Потолок — запасной путь (~500 MiB), не demux MP4. Без URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'Ход извлечения',
  tool_extract_audio_from_an_mkv_file_read: 'Чтение',
  tool_extract_audio_from_an_mkv_file_decode: 'Декодирование',
  tool_extract_audio_from_an_mkv_file_extract: 'Извлечение',
  tool_extract_audio_from_an_mkv_file_write: 'Запись',
  tool_extract_audio_from_an_mkv_file_done: 'Готово. Прослушайте аудио, затем скачайте WAV или MP3.',
  tool_extract_audio_from_an_mkv_file_failed: 'Извлечение не удалось. Попробуйте меньший MKV или сначала конвертируйте в AAC MP4 через ffmpeg.',
  tool_extract_audio_from_an_mkv_file_elapsed: 'Прошло {s} с',
  tool_extract_audio_from_an_mkv_file_preview: 'Прослушать извлечённое аудио',
  tool_extract_audio_from_an_mkv_file_result: '{seconds} с · {channels} к · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'короткий-mkv-демо',
  tool_extract_audio_from_an_mkv_file_empty: 'Сначала выберите MKV или загрузите образец.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'Файла пока нет. Перетащите локальный .mkv до ~500 MiB или «Загрузить образец». Много ГБ / DDP: сначала ffmpeg → AAC MP4. Не YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Перетащите ровно один MKV-файл.',
  tool_extract_audio_from_an_mkv_file_err_format: 'Файл не поддерживается. На этой странице только .mkv.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'Этот MKV превышает лимит длительности или размера на запасном пути.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'MKV выше запасного потолка (~500 MiB / 4 ч) или не декодируется здесь. На компьютере: ffmpeg в AAC stereo MP4 (видео copy), затем «Извлечь аудио из MP4-файла» — или меньший MKV.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'Кодек аудио этого MKV не поддерживается в браузере (часто E-AC-3 / DDP / Atmos). Конвертируйте в AAC внутри MP4 через ffmpeg, затем страница извлечения MP4.',
  tool_extract_audio_from_an_mkv_file_err_channels: 'Дорожка с раскладкой каналов, которую экстрактор не обрабатывает. Сначала сведите в stereo AAC в MP4.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'Браузер не смог декодировать аудио из этого MKV.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'Не удалось записать аудиофайл. Нажмите «Извлечь» снова.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'Не удалось собрать образец MKV. Используйте свой .mkv.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'В этом браузере нет Web Audio, нужного для извлечения.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'Полезные аудиосэмплы не были захвачены.',
  tool_extract_audio_from_an_mkv_file_stop: 'Стоп',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Остановлено. Частичный аудиофайл не сохраняется.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Длинный/крупный вход использовал потоковый MP3 на запасном пути.',
  tool_extract_audio_from_an_mkv_file_how_title: 'Как извлечь аудио из MKV-файла',
  tool_extract_audio_from_an_mkv_file_how_body:
    'Небольшой локальный MKV: перетащить, Извлечь, скачать. Несколько ГБ или DDP/Atmos: сначала ffmpeg → AAC MP4 на устройстве, затем инструмент для MP4.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Выберите локальный .mkv до ~500 MiB или «Загрузить образец», если работает MediaRecorder. Если файл на несколько ГБ или с DDP/Atmos — остановитесь и сначала конвертируйте через ffmpeg.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Откройте «Формат экспорта», выберите WAV или MP3; при необходимости задайте битрейт.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Нажмите «Извлечь» и дождитесь Чтение → Декодирование → Извлечение → Запись (или «Стоп»).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Прослушайте, затем «Скачать WAV» или «Скачать MP3».',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Зачем использовать «Извлечь аудио из MKV-файла»',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1: 'Только MKV — записи экрана не смешиваются с MP4-лендингами.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2: 'Честные запасные лимиты — без ложного demux на 5 GiB для MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3: 'Понятный путь для крупных/DDP: ffmpeg на ПК → AAC MP4 → страница извлечения MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'Обработка на вашем устройстве; «Стоп» прерывает процесс.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'Только MKV и запасные лимиты',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'Один локальный MKV за запуск на запасном пути MediaElement. Не YouTube в MP3. Не экспорт беззвучного видео. Крупный MKV или редкий кодек — сначала AAC MP4 на устройстве.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'Запас ~500 MiB / 4 ч. Превышение → err_container. Крупный demux сегодня только MP4/MOV.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'Без URL и скачивания с YouTube.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS обычно дают err_codec. Пример на компьютере: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, затем «Извлечь аудио из MP4-файла».',
  tool_extract_audio_from_an_mkv_file_rules_item_4: 'Исходный MKV не перезаписывается. Пакет MKV — отдельный пакетный инструмент.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Попробуйте реальное извлечение MKV',
  tool_extract_audio_from_an_mkv_file_example:
    '«Загрузить образец» создаёт короткую синтетическую заглушку при работающем MediaRecorder, затем запускается извлечение. Лучше свой .mkv в пределах запасного потолка. Рипы на несколько ГБ: ffmpeg → AAC MP4, затем страница MP4.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'Когда это уместно',
  tool_extract_audio_from_an_mkv_file_usecase_1: 'MKV записи экрана в браузере до ~500 MiB → MP3 для обмена без загрузки на сервер.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'Короткий MKV с интервью — нужна только звуковая дорожка в WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'Вы знаете, что файл огромный MKV или DDP — локально в AAC MP4, затем инструмент MP4 вместо этой страницы.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'Можно вставить ссылку YouTube?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'Нет. Только локальный .mkv.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'Почему не 5 GiB, как на странице MP4?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'Крупный demux сейчас для ISOBMFF (MP4/MOV). MKV использует запас MediaElement ~500 MiB, пока не появится demux Matroska.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'MKV на несколько ГБ или Dolby Atmos / DDP — что делать?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'Страница отклонит (err_container и/или err_codec). На компьютере конвертируйте в AAC stereo MP4, например: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Затем «Извлечь аудио из MP4-файла» для крупного demux. Чистый remux без AAC всё равно провалится, если дорожка остаётся E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'Это делает MKV без звука (немое видео)?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'Нет. Только извлекает аудио в WAV/MP3.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'Файл загружается на сервер?',
  tool_extract_audio_from_an_mkv_file_faq_a5: 'Нет. Декодирование и запись в браузере. Шаг ffmpeg (если нужен) тоже на вашем компьютере.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'У меня много MKV — какую страницу открыть?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Небольшие папки MKV: «Пакетно извлечь аудио из MKV-файлов». Огромные или DDP: сначала каждый в AAC MP4, затем «Пакетно извлечь аудио из MP4-файлов» или одиночная страница MP4.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'Можно обрезать после извлечения?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'Не здесь. Скачайте и используйте «Обрежьте аудиофрагмент и экспортируйте».',
};
export default ru;
