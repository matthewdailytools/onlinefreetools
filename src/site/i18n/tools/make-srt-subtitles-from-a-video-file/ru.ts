import type { SiteLangDict } from '../../../types';

/**
 * Russian (ru) copy for make-srt-subtitles-from-a-video-file.
 * Local search: видео в srt / субтитры из видео / сделать srt из видео.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: без загрузки на сервер; остаются на устройстве.
 */
const ru: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'Сделать SRT-субтитры из видеофайла',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Превращает локальное видео с речью в таймкодовые .srt-реплики с Whisper на устройстве—файлы остаются на устройстве и не загружаются на сервер.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Сделайте таймкодовые SRT-субтитры из локального видеофайла в браузере с Whisper на устройстве: файлы остаются на устройстве и не загружаются на сервер. Шаги: выберите видео с диалогом, проиграйте для проверки, язык (или авто), Сделать SRT, отредактируйте реплики, скачайте .srt. Пример: Пример прогоняет короткий говорящий MP4 через Whisper. Первый запуск скачивает около 45 МБ один раз (потом кэш). WAV/MP3 только аудио — на «Сделать SRT-субтитры из аудиофайла». Без вшивания; тайминги из сегментов Whisper.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'Кто ищет «видео в srt» или «сделать srt из видео», хочет скачиваемый таймкодовый файл субтитров с локальной съёмки—не страницу голосовых заметок. Этот инструмент запускает Whisper tiny на устройстве из same-origin /vendor/whisper: декодирует аудиотрек видео во вкладке, показывает превью, чтобы сверить диалог с картинкой, берёт метки сегментов, оформляет редактируемый стандартный SRT и скачивает. Чистые аудиофайлы отклоняются со ссылкой на «Сделать SRT-субтитры из аудиофайла». Микрофона здесь нет. Первый запуск скачивает около 45 МБ один раз и кэширует. Времена реплик — границы сегментов Whisper, не покадровая принудительная привязка, и страница не вшивает субтитры в видео.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Выбрать видеофайл',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'Локальный MP4, WebM, MOV или другое видео, которое браузер может декодировать—до примерно 120 МиБ и около 2 часов после декодирования. Нужен пригодный аудиотрек. Длинные клипы идут скользящими окнами (окно n из N; Стоп сохраняет частичный SRT, когда возможно). Чистое аудио — на связанный аудио-SRT инструмент.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Язык речи',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Авто даёт Whisper определить язык на звуковой дорожке. Выберите язык, если знаете его—реплики стабильнее.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Автоопределение',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'Английский',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Китайский',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Испанский',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Японский',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'Немецкий',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'Французский',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Португальский',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Индонезийский',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Арабский',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Русский',
  tool_make_srt_subtitles_from_a_video_file_convert: 'Сделать SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Стоп',
  tool_make_srt_subtitles_from_a_video_file_download: 'Скачать SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Пример',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Очистить',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Воспроизвести исходное видео',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Честные ограничения',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny работает в этой вкладке из same-origin /vendor/whisper. Первый Сделать SRT скачивает около 45 МБ один раз и дальше использует кэш. Длинные клипы — скользящие окна (~2 минуты). Времена реплик следуют сегментам Whisper—не покадровая принудительная привязка. Страница принимает только видео и не вшивает субтитры. Для голосовых заметок без картинки используйте связанный аудио-SRT инструмент.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Прогресс субтитров',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Прогресс субтитров',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Готово. Дальше: при необходимости отредактируйте реплики, затем Скачать SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'Не удалось завершить SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'Попробуйте другое видео, более короткий клип или Пример. Файлы остаются на устройстве.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Скачивание {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Запуск…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Модель',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Декодирование',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Расшифровка',
  tool_make_srt_subtitles_from_a_video_file_write: 'Запись SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'Готово. Отредактируйте SRT при необходимости, затем Скачать SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'Не удалось собрать SRT. Попробуйте Пример, более чёткое говорящее видео или более короткий клип до примерно 2 часов.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: 'прошло {s} с',
  tool_make_srt_subtitles_from_a_video_file_preview: 'Превью SRT',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} реплик · {chars} символов',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Выберите локальный видеофайл с речью на звуковой дорожке.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'SRT ещё нет. Перетащите видео с диалогом и нажмите Сделать SRT. Пример прогоняет короткий говорящий MP4 через Whisper на устройстве. Проиграйте превью, чтобы сверить картинку с репликами. Файлы остаются на устройстве.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Видео: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Загрузка модели Whisper на устройстве (первый запуск может скачать ~45 МБ)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Декодирование аудиотрека видео в этой вкладке…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Расшифровка Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Расшифровка окна {n} из {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Запись таймкодовых SRT-реплик…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Остановлено. Частичный SRT сохранён, если реплики уже были.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Выберите один локальный видеофайл или используйте Пример.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'Неподдерживаемый тип. Используйте обычный видеоконтейнер, который браузер умеет декодировать (например MP4 или WebM), с аудиотреком.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'Используйте видео до примерно 120 МиБ и около 2 часов после декодирования. Очень длинные клипы на телефонах с малой памятью всё равно могут падать—сначала обрежьте или сожмите.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'Браузер не смог декодировать пригодный аудиотрек из этого видео. Немое видео, отсутствие звука или неподдерживаемый кодек здесь падают.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio, нужный для этого пути, в этом браузере недоступен.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper не дал пригодного текста речи. Попробуйте другой клип или язык.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'Не удалось загрузить модель Whisper на устройстве с этого сайта. Оставайтесь онлайн для первой загрузки и повторите.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'Эта страница принимает только видеофайлы. Для WAV, MP3 или другой чистой аудиоречи используйте «Сделать SRT-субтитры из аудиофайла».',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'Как сделать SRT-субтитры из видеофайла',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Выберите локальное видео с речью, просмотрите клип, запустите Whisper на устройстве для таймкодовых реплик, отредактируйте SRT и скачайте.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'Выберите локальный видеофайл (или Пример) и Автоопределение или язык речи.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'При необходимости воспроизведите исходное видео, чтобы сверить диалог с картинкой, затем нажмите Сделать SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Следите за карточкой прогресса: Модель, Декодирование, Расшифровка (окно n из N на длинных файлах), затем Запись SRT. Стоп отменяет и сохраняет частичный SRT, когда возможно.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'При необходимости отредактируйте превью SRT, затем Скачать SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Зачем выбирать «Сделать SRT-субтитры из видеофайла» здесь',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Сначала видео: превью клипа на странице, затем .srt со звуковой дорожки через Whisper на устройстве—съёмка не загружается на наши серверы для ASR.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Чёткая граница с аудио-SRT: эта страница отклоняет чистое аудио и без микрофона, чтобы ищущие «видео в srt» не попадали в UI голосовых заметок.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Честная цена первого запуска (~45 МБ один раз) и HUD со скользящими окнами на длинном материале.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Только редактируемый .srt рядом—не вшитый в видео. Связанные инструменты закрывают чистое аудио-SRT и видео по волноформе.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'Правила SRT и пределы Whisper для видео',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny работает в браузере из same-origin ассетов. Браузер должен декодировать пригодный аудиотрек из вашего видео. Лимиты размера и длительности держат вкладку работоспособной.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Только видеоконтейнеры (например MP4, WebM, MOV). Чистое аудио должно идти на связанную аудио-SRT страницу.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'Около 120 МиБ и около 2 часов после декодирования, расшифровка скользящими окнами. Более длинные или тяжёлые файлы показывают ясную ошибку лимита.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Метки времени — границы сегментов Whisper—удобны для плееров, не покадровая принудительная привязка к склейкам картинки.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Ваше видео остаётся на устройстве для Whisper. Страница не вшивает субтитры в файл и не скачивает субтитры с видеоплатформ.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Попробуйте образец видеоклипа',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Пример загружает короткий говорящий MP4, запускает Сделать SRT через Whisper на устройстве и заполняет превью SRT. Страница не запускает пример при открытии, чтобы первая загрузка модели ~45 МБ не била каждого посетителя.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'Когда это помогает',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'У вас локальное интервью, talking-head или запись экрана в MP4, и нужен скачиваемый .srt для плеера или редактора.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'Нужны субтитры к видеофайлу без загрузки съёмки на облачный ASR, и важно видеть картинку при проверке реплик.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'Вы уже экспортировали MP4/WebM с камеры или из редактора и нужен стартовый SRT для правки перед публикацией.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'Чем это отличается от «Сделать SRT-субтитры из аудиофайла»?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'Связанный инструмент — для голосовых заметок и других audio-first файлов (и опционального диктанта с микрофона). Эта страница — для видеофайлов: превью видео, приём только видео и формулировки «видео в srt». Тот же движок Whisper на устройстве под капотом.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'Это Whisper на устройстве или загрузка в облако?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'Сделать SRT запускает Whisper tiny на устройстве из same-origin vendor-файлов. Ваше видео остаётся на устройстве и не загружается на наши серверы для распознавания.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'Почему первый Сделать SRT медленный или большой?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'Первый запуск скачивает около 45 МБ модели Whisper tiny и WASM с этого сайта в кэш браузера. Дальше кэш переиспользуется. Длинные видео показывают Расшифровку как окно n из N; Стоп может отменить и сохранить частичный SRT.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'Можно ли использовать WAV или MP3 здесь?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'Нет. Чистое аудио отклоняется, чтобы ищущие «видео в srt» не смешивались с аудио-UI. Откройте «Сделать SRT-субтитры из аудиофайла» для WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'Насколько точны таймкоды SRT?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'Они следуют началу и концу сегментов Whisper на дорожке—достаточно для большинства плееров, не покадровая синхронизация с каждым склейкой картинки.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'Можно вшить субтитры в видео или скачать с YouTube?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'Нет. Скачивается только .srt рядом. Автосубтитры с YouTube и других платформ тоже не забираются.',
};
export default ru;
