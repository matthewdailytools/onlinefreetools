import type { SiteLangDict } from '../../../types';

/**
 * Russian locale for make-srt-subtitles-from-an-audio-file.
 * On-device Whisper tiny (q8) via same-origin /vendor/whisper; optional Web Speech mic.
 * Local search: аудио в srt; субтитры из аудио; whisper в браузере.
 * Privacy: без загрузки на сервер; остаются на устройстве.
 */
const ru: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'Сделать SRT-субтитры из аудиофайла',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Превратите локальную речевую запись в .srt с таймкодами через Whisper на устройстве—файлы остаются на устройстве и без загрузки на сервер.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'Сделайте SRT-субтитры с таймкодами из локального аудио или видео в браузере через Whisper на устройстве—файлы остаются на устройстве и без загрузки на сервер. Шаги: выберите речевой файл, укажите язык (или авто), Сделать SRT, правьте cues, Скачать SRT. Пример: Пример прогоняет короткий разговорный клип через Whisper и показывает SRT. Первый запуск один раз скачивает около 45 МБ файлов модели (затем кэш). Это не облачный API; времена берутся из сегментов Whisper.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'Кто ищет «аудио в srt» или «субтитры из аудио», хочет скачиваемый файл с таймкодами из локальной записи. Страница запускает Whisper tiny на устройстве из same-origin vendor-скриптов: декодирует файл во вкладке, берёт метки сегментов, формирует стандартный редактируемый SRT и скачивает. Видео со звуковой дорожкой принимается, если браузер умеет его декодировать. Путь «Диктовка в микрофон» использует Web Speech только если браузер его даёт—без speech API кнопка Сделать SRT всё равно работает. Первый запуск один раз скачивает около 45 МБ активов модели и кэширует их. Времена cue — границы сегментов Whisper, не покадровое forced alignment, и страница не вшивает субтитры в видео.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Выберите речевой файл',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'Локальный WAV, MP3, M4A или другое аудио, которое браузер умеет декодировать—до примерно 120 МиБ и около 2 часов после декодирования. Длинные файлы идут скользящими окнами (окно n из N; Стоп сохраняет частичный SRT, если возможно). Видео со звуковой дорожкой допустимо при успешном декодировании; иначе будет понятная ошибка декодирования.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Язык речи',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Автоопределение позволяет Whisper найти язык. Выберите язык, если знаете его — cues стабильнее. Диктовка в микрофон использует тот же выбор, когда доступен Web Speech.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Автоопределение',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'Английский',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Китайский',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Испанский',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Японский',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'Немецкий',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'Французский',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Португальский',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Индонезийский',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Арабский',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Русский',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'Сделать SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Диктовка в микрофон',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Стоп',
  tool_make_srt_subtitles_from_an_audio_file_download: 'Скачать SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Пример',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Очистить',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Слушать исходное аудио',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Честные ограничения',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny работает в этой вкладке из same-origin файлов /vendor/whisper. Первый Сделать SRT один раз скачивает около 45 МБ, затем использует кэш. Времена cue следуют сегментам Whisper—не покадровое forced alignment. Диктовка в микрофон опциональна через Web Speech и может идти через speech-сервис вендора браузера. Страница не вшивает субтитры в видео.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Прогресс субтитров',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Прогресс субтитров',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: 'Готово. Дальше: при необходимости правьте cues, затем Скачать SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'Не удалось завершить SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint: 'Попробуйте другой файл, более короткий клип или Пример. Файлы остаются на устройстве.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Скачивание {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Запуск…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Модель',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Декод',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Распознать',
  tool_make_srt_subtitles_from_an_audio_file_write: 'Записать SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Готово. При необходимости правьте SRT, затем Скачать SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'Не удалось собрать SRT. Попробуйте Пример, более чёткую речь или клип короче примерно 2 часов.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: 'прошло {s} с',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'Превью SRT',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Промежуточно (микрофон)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} cues · {chars} символов',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty: 'Выберите локальный речевой файл или Диктовку в микрофон, если доступна.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'SRT ещё нет. Перетащите речевой файл и нажмите Сделать SRT. Пример прогоняет короткий разговорный клип через Whisper на устройстве. Файлы остаются на устройстве.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Медиа: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Диктовка в микрофон недоступна в этом браузере (нет Web Speech API). Сделать SRT через Whisper для локальных файлов всё равно работает.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper почти не вернул текст. Попробуйте более чёткую запись или укажите язык речи.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic: 'Слушаем микрофон… говорите чётко, затем Стоп. Времена cue — по времени сессии.',
  tool_make_srt_subtitles_from_an_audio_file_status_model: 'Загрузка модели Whisper на устройстве (первый запуск может скачать ~45 МБ)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Декодирование аудио в этой вкладке…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Распознавание через Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'Распознавание окна {n} из {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Остановлено. Частичный SRT сохранён, если уже были реплики.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Запись SRT с таймкодами…',
  tool_make_srt_subtitles_from_an_audio_file_err_file: 'Выберите один локальный аудио- или видеофайл либо используйте Пример.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'Неподдерживаемый тип медиа. Используйте обычное аудио или видео со звуковой дорожкой, которую браузер умеет декодировать.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: 'Используйте медиа до примерно 120 МиБ и около 2 часов после декодирования. На телефонах с малой памятью очень длинные записи могут не пройти—сначала обрежьте или сожмите.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'Браузер не смог декодировать этот файл как аудио. Видео без пригодной звуковой дорожки или неподдерживаемый кодек здесь падают.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported: 'Web Audio или speech API, нужные для этого пути, недоступны в этом браузере.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'Доступ к микрофону запрещён. Разрешите его для Диктовки в микрофон или сделайте SRT из файла.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt: 'Whisper не дал пригодного текста. Попробуйте другой клип или настройку языка.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'Не удалось загрузить модель Whisper на устройстве с этого сайта. Оставайтесь онлайн для первой загрузки, затем повторите.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'Как сделать SRT-субтитры из аудиофайла',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Выберите локальный речевой файл, запустите Whisper на устройстве для cues с таймкодами, правьте превью и скачайте .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1: 'Выберите локальный речевой файл (или Пример) и укажите Автоопределение или язык речи.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2: 'Нажмите Сделать SRT. Следите за карточкой прогресса: Модель, Декод, Распознать, затем Записать SRT.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3: 'По желанию: нажмите Диктовка в микрофон, если браузер поддерживает Web Speech, говорите, затем Стоп.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: 'При необходимости правьте превью SRT, затем Скачать SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: 'Зачем выбирать «Сделать SRT-субтитры из аудиофайла» здесь',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'Честная цена первого запуска: около 45 МБ модели один раз и прогресс-карточка Модель / Декод / Распознать / Записать SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Whisper tiny на устройстве из same-origin vendor-файлов—запись без загрузки на наши серверы для ASR.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'Редактируемое стандартное .srt-превью до скачивания—не только голый TXT и не вшито в видео.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Рядом есть инструменты для простого транскрипта и waveform-видео без навязанного хаб-редактора.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'Правила SRT и пределы Whisper на устройстве',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'Страница запускает Whisper tiny в браузере из same-origin активов. Времена cue — из сегментов модели. Лимиты размера и длительности держат вкладку отзывчивой.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'Основной путь нуждается в Web Audio decode и стеке Whisper на устройстве в /vendor/whisper. Диктовка в микрофон требует Web Speech и опциональна.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'Около 120 МиБ размера файла и около 2 часов после декодирования, скользящими окнами. Более длинные или крупные файлы показывают понятную ошибку лимита; на слабой памяти нужен более короткий клип.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Таймкоды — границы сегментов Whisper—удобны для плееров, но это не покадровое forced alignment.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Файл остаётся на устройстве для Whisper. Опциональная диктовка в микрофон всё ещё может использовать speech-сервис вендора браузера—проверьте настройки конфиденциальности.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Попробуйте образец речи',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Пример загружает короткий разговорный WAV, запускает Сделать SRT через Whisper на устройстве и заполняет превью SRT. Страница не автозапускает пример при открытии, чтобы первая загрузка модели ~45 МБ не била по каждому посетителю.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'Когда это помогает',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'У вас локальная голосовая заметка или интервью WAV/MP3, и нужен скачиваемый .srt для плеера или редактора.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'Есть короткое видео со звуковой дорожкой, и нужны субтитры с таймкодами без загрузки на облачный ASR-сайт.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'Нужен стартовый SRT из Whisper на устройстве для правки перед публикацией, либо запасной путь «Диктовка в микрофон», когда файла нет.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'Чем это отличается от «Расшифровать аудиофайл в текст»?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'Тот связанный инструмент делает упор на простой текст транскрипта. Эта страница форматирует нумерованные SRT-cue с началом и концом для плееров и редакторов, которым нужен .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'Загружается ли моё аудио на сервер?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'Нет для файлового пути Whisper: декодирование и распознавание идут во вкладке; файлы остаются на устройстве и без загрузки на наши серверы. Онлайн нужен только чтобы один раз скачать same-origin скрипты модели.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'Это локальный Whisper или облачная загрузка?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Сделать SRT запускает Whisper tiny на устройстве из same-origin vendor-файлов. Аудио или видео остаётся на устройстве и без загрузки на наши серверы для распознавания. Опциональная Диктовка в микрофон использует Web Speech API браузера, что может задействовать speech-сервис вендора.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'Почему первый Сделать SRT долгий или тяжёлый?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Первый запуск скачивает около 45 МБ модели Whisper tiny и WASM-активов с этого сайта в кэш браузера. Позже используется кэш. Прогресс виден на шаге Модель.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'Насколько точны таймкоды SRT?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'Они следуют началу и концу сегментов Whisper—достаточно для большинства плееров и редакторов, но это не покадровое forced alignment студийного пайплайна.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'Можно ли вшить субтитры в видеофайл?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'Нет. Скачивается только sidecar .srt. Для waveform-видео из аудио смотрите связанный инструмент волны—не burn-in captions.',
};
export default ru;
