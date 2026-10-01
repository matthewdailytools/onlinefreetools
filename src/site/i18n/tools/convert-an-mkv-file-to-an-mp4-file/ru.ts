import type { SiteLangDict } from '../../../types';

/**
 * Русская локализация: конвертация локального MKV в MP4 в браузере (D2).
 * AAC stereo (mediabunny + ac3 + aac-encoder); не чистый remux; не YouTube; около 5 GiB с OPFS (около 1 GiB без).
 * Ключи совпадают с английской мастер-версией en.ts.
 */
const ru: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'Конвертировать MKV-файл в MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Конвертируйте один локальный MKV в MP4 в браузере с AAC stereo. Видео копируется, когда возможно. около 5 GiB с OPFS (около 1 GiB без). Файл не загружается на сервер.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Конвертируйте один локальный MKV в MP4 на устройстве с AAC stereo, чтобы плееры и инструменты извлечения могли использовать дорожку. Шаги: выбрать MKV → Конвертировать → Скачать. Пример: «Загрузить образец» конвертирует короткий синтетический Matroska. Видеопакеты копируются, если браузер сохраняет кодек; аудио всегда перекодируется в AAC (E-AC-3 / DDP декодируются через WASM-помощник на странице). Для первого релиза лимит около 5 GiB с OPFS (около 1 GiB без)удобнее через ffmpeg на ПК. Только локально — не скачивание с YouTube. Не отправляется на сервер. Нужен только звук потом? Откройте «Извлечь аудио из MP4-файла».',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Монтаж и телефоны часто ждут MP4, а захваты приходят в MKV. Страница remux при безопасности и всегда пишет AAC stereo, чтобы после remux не остался немой E-AC-3. Не тянет удалённые URL, без пакетного ZIP (пока) и не заменяет лендинги извлечения аудио — они остаются связанными после AAC MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'Выберите MKV-файл',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Перетащите один локальный .mkv (около 5 GiB с OPFS (около 1 GiB без). Аудио станет AAC stereo. Не YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Конвертировать',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Скачать',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Загрузить образец',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Очистить',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Остановить',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Настройки аудио (необязательно)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Аудиоканалы',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Стерео (по умолчанию)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Моно',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'Качество AAC',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Меньший размер',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Сбалансировано',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Выше качество (по умолчанию)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'По умолчанию подходит большинству файлов: стерео AAC с более высоким качеством. Смена настроек сбрасывает готовую загрузку.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Ход конвертации',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Загрузка движка',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Чтение',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Декодирование',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Кодирование',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Запись',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    'Готово. Скачайте MP4 или откройте инструмент извлечения из MP4 только для звука.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    'Конвертация не удалась. Попробуйте меньший MKV или другую аудиодорожку.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: 'Прошло {s} с',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Предпросмотр сконвертированного MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Вход {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'короткий-mkv-в-mp4-демо',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Сначала выберите MKV или загрузите образец.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'Файла пока нет. Перетащите локальный .mkv до около 5 GiB с OPFS (около 1 GiB без). Не YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Остановлено. Частичный MP4 не сохраняется.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Перетащите ровно один MKV-файл.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'Файл не поддерживается. На этой странице только .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'Этот MKV превышает лимит около 5 GiB с OPFS (около 1 GiB без). Для больших файлов используйте ffmpeg на компьютере.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Не удалось открыть как Matroska или не осталось пригодной видео/аудиодорожки.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'Аудио- или видеокодек не удалось декодировать или закодировать здесь. Попробуйте другую дорожку или конвертируйте на ПК через ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'Не удалось записать MP4. Нажмите «Конвертировать» снова.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'Не удалось загрузить образец MKV. Перетащите свой файл.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'Не удалось загрузить движок конвертации в этом браузере.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'Конвертация остановлена.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'Как конвертировать MKV-файл в MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Перетащите локальный MKV, нажмите «Конвертировать», затем «Скачать» MP4 — аудио станет AAC stereo для последующего извлечения.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'Выберите локальный .mkv до около 5 GiB с OPFS (около 1 GiB без).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    'По желанию откройте «Настройки аудио» для моно или меньшего качества AAC.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'Нажмите «Конвертировать» и дождитесь: Загрузка движка → Чтение → Декодирование → Кодирование → Запись (или «Остановить»).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'Просмотрите при предпросмотре, затем «Скачать». Только голос — далее «Извлечь аудио из MP4-файла».',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title: 'Зачем конвертировать MKV в MP4 на этой странице',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC stereo пишется намеренно — не remux с E-AC-3, который многие браузеры не воспроизводят.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'Видео копируется, когда можно — длинные клипы быстрее, чем при полном перекодировании.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'Обработка на вашем устройстве; первую загрузку движка даёт только этот сайт.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'Понятный следующий шаг — извлечение аудио: связанная страница MP4 после «Скачать».',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV в MP4 с AAC — честные границы',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'Один локальный MKV за запуск. Аудио перекодируется в AAC. Лимиты и кодеки указаны честно — многогигабайтные рипы могут потребовать ffmpeg на ПК.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'около 5 GiB с OPFS (около 1 GiB без). Превышение → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'Без URL и скачивания с YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3 / DDP декодируются встроенным AC-3-помощником, затем кодируется AAC stereo. Редкие видеокодеки могут дать err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'Исходный MKV никогда не перезаписывается. Для нескольких файлов — пакетная конвертация MKV в MP4 (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Попробуйте реальную конвертацию',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    '«Загрузить образец» берёт короткий MKV с сайта, затем запускается «Конвертировать». Для проверки лучше свой .mkv в пределах лимита.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'Когда это помогает',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    'MKV с записи экрана нужно открыть в редакторе, который принимает только MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'MKV с DDP/Atmos нужен AAC перед «Извлечь аудио из MP4-файла».',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Нужен MP4 для обмена без загрузки Matroska в облачный конвертер.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'Можно вставить ссылку YouTube?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'Нет. Только локальный .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'Это просто remux (тот же аудиокодек)?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'Нет. Аудио всегда перекодируется в AAC для demux в браузере и многих плееров. Видео при возможности всё ещё копируется без перекодирования.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'В MKV Dolby Atmos / DDP / E-AC-3 — сработает?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'Часто да для файлов в пределах лимита: страница загружает декодер AC-3/E-AC-3, сводит в стereo AAC и пишет MP4. Огромные многогигабайтные рипы могут не пройти или быть слишком медленными — используйте ffmpeg на ПК.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'Мой файл загружается на сервер?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'Нет. Конвертация идёт в браузере. Скрипты движка один раз загружаются с этого сайта.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'Мне нужна только аудиодорожка — эта страница?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'Если MKV подходит под запасной путь извлечения и кодек дружелюбен браузеру — «Извлечь аудио из MKV-файла». Если DDP или слишком большой для извлечения — сначала конвертируйте здесь, затем «Извлечь аудио из MP4-файла».',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM или MOV вместо MKV?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'Эта страница принимает только .mkv. Другие контейнеры — отдельные лендинги позже.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'Можно конвертировать много MKV сразу?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'Пока не пакетом ZIP на этой странице. Конвертируйте по одному файлу.',
};
export default ru;
