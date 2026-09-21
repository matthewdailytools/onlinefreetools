import type { SiteLangDict } from '../../../types';

/**
 * ru copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. Наложить локальный звук на локальное видео; без YouTube; не только mute; не только extract.
 */
const ru: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Добавить звуковую дорожку к видео',
  tool_add_an_audio_track_to_a_video_desc:
    'Объедините локальный саундтрек с локальным видео и скачайте результат. Только на устройстве—без загрузки с YouTube.',
  tool_add_an_audio_track_to_a_video_description:
    'Добавьте звуковую дорожку к локальному видео в браузере: объедините картинку с выбранным саундтреком и скачайте. Шаги: выберите видео и аудио, Добавить аудио, превью, скачать. Пример: немой клип плюс короткий WAV. Использует captureStream и MediaRecorder—часто WebM; это не lossless remux. Никогда не загружается. Без загрузки с YouTube.',
  tool_add_an_audio_track_to_a_video_article:
    'Немым или слабо озвученным роликам часто нужна новая дорожка перед публикацией. Эта страница открывает локальное видео и локальное аудио, захватывает кадры без исходных дорожек, декодирует саундтрек в AudioContext, объединяет и перекодирует через MediaRecorder—часто WebM в зависимости от браузера. Длительность следует за видео; более длинное аудио обрезается, более короткое заканчивается раньше. Не скачивает YouTube и другие URL, не только глушит без нового звука и не извлекает аудио отдельным файлом. Успех зависит от воспроизведения обоих файлов и MediaRecorder со звуком. Сохраните оригиналы. Всё выполняется на вашем устройстве.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Выбрать видеофайл',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Перетащите или выберите локальный MP4, WebM, MOV или M4V, который браузер может воспроизвести. До 80 МиБ и около 3 минут. Без YouTube и вставки URL.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Выбрать аудиофайл',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Перетащите или выберите локальный WAV, MP3, M4A или похожий формат, который браузер может декодировать. До 40 МиБ.',
  tool_add_an_audio_track_to_a_video_convert: 'Добавить аудио',
  tool_add_an_audio_track_to_a_video_download: 'Скачать',
  tool_add_an_audio_track_to_a_video_sample: 'Загрузить образец',
  tool_add_an_audio_track_to_a_video_clear: 'Очистить',
  tool_add_an_audio_track_to_a_video_advanced: 'Заметки о слиянии',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Браузеры обычно перекодируют через MediaRecorder после удаления исходных дорожек и добавления вашего саундтрека. Выход часто WebM, не lossless remux. Эта страница никогда не скачивает YouTube.',
  tool_add_an_audio_track_to_a_video_progress: 'Прогресс добавления аудио',
  tool_add_an_audio_track_to_a_video_read: 'Чтение',
  tool_add_an_audio_track_to_a_video_decode: 'Декодирование',
  tool_add_an_audio_track_to_a_video_merge: 'Слияние',
  tool_add_an_audio_track_to_a_video_write: 'Запись',
  tool_add_an_audio_track_to_a_video_done: 'Готово. Просмотрите объединённое видео, затем скачайте.',
  tool_add_an_audio_track_to_a_video_failed:
    'Не удалось наложить аудио на это видео. Попробуйте более короткие воспроизводимые файлы.',
  tool_add_an_audio_track_to_a_video_elapsed: 'прошло {s} с',
  tool_add_an_audio_track_to_a_video_preview: 'Превью объединённого видео',
  tool_add_an_audio_track_to_a_video_result: '{seconds} с · со звуком · {mime} · {output} КиБ',
  tool_add_an_audio_track_to_a_video_sample_name: 'образец-добавить-аудио',
  tool_add_an_audio_track_to_a_video_empty: 'Выберите локальное видео и аудио или сначала загрузите образец.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'Файлов ещё нет. Перетащите локальное видео и саундтрек или нажмите «Загрузить образец». Этот инструмент накладывает звук на картинку—не только mute, не только extract и не скачивает YouTube.',
  tool_add_an_audio_track_to_a_video_video_label: 'Видео: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Аудио: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Выберите по одному поддерживаемому локальному видео и аудио.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Неподдерживаемые или невоспроизводимые файлы. Используйте обычные типы видео/аудио, которые браузер декодирует. Без URL YouTube.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Используйте локальное видео до 80 МиБ / около 3 минут и аудио до 40 МиБ.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'Браузер не смог декодировать видео или аудио. Попробуйте другой контейнер или более короткий клип.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'MediaRecorder не смог записать объединённое видео. Попробуйте Chrome/Edge или более короткий WebM/MP4 плюс WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'Как добавить звуковую дорожку к видео',
  tool_add_an_audio_track_to_a_video_how_body:
    'Выберите локальные видео и аудио, запустите «Добавить аудио», просмотрите и скачайте—без загрузки и без YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Выберите локальное видео и локальное аудио (или загрузите образец). Не вставляйте ссылки YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'Нажмите «Добавить аудио» и дождитесь Чтение → Декодирование → Слияние → Запись.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Просмотрите результат. Должен быть слышен новый саундтрек с картинкой.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Проверьте строку результата, затем нажмите «Скачать».',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Почему выбрать наши инструменты добавления дорожки',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'Смотрите длительность, MIME-тип и размер выхода в КиБ перед сохранением.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'Одна понятная задача слияния с честными пределами MediaRecorder—без ложного обещания lossless remux.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Чтение и запись на вашем устройстве; страница не загружает файлы на сервер для обработки.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Смена любого файла очищает старую загрузку, чтобы не сохранить устаревшее слияние.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Правила слияния и честные пределы браузера',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Каждый запуск удаляет исходные дорожки, добавляет ваш саундтрек и перекодирует через MediaRecorder. Выход часто WebM. Это не загрузка YouTube, не только mute и не извлечение аудио.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'Одно локальное видео до 80 МиБ и около трёх минут плюс одно локальное аудио до 40 МиБ. Сначала должно пройти воспроизведение/декодирование.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'Длительность выхода следует за видео. Более длинное аудио обрезается; более короткое заканчивается раньше картинки.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'Без YouTube, URL подкаста и удалённой загрузки. Вставка не поддерживается.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Контейнеры и кодеки могут измениться. Сохраните оригиналы; скачивание — новый перекодированный файл.',
  tool_add_an_audio_track_to_a_video_example_title: 'Попробуйте короткий немой клип плюс тон',
  tool_add_an_audio_track_to_a_video_example:
    '«Загрузить образец» создаёт короткое canvas-видео и простой тон, затем «Добавить аудио» запускается автоматически. Вы видите картинку с новым саундтреком. Воспроизведение само не стартует—нажмите play, если хотите смотреть.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'Когда это помогает',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'Немая запись экрана и WAV-подложка—объедините здесь и скачайте для публикации.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'Заменить слабую встроенную дорожку более чистым локальным саундтреком без установки настольного редактора.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'Может ли он скачать YouTube или вставить URL?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'Нет. Только локальные файлы, которые у вас уже есть. Нет загрузчика YouTube и нет удалённой выборки.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'Это то же, что удалить аудио из видео?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'Нет. Mute/удаление — другая задача. Эта страница добавляет новый саундтрек к картинке.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'Извлекает ли он аудио отдельной загрузкой?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'Нет. Извлечение аудио из видео — другой инструмент. Здесь результат — видеофайл с объединённым звуком.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'Будет ли выход тем же MP4, что источник?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'Обычно нет. Браузеры обычно перекодируют через MediaRecorder, часто в WebM. Качество и контейнер могут измениться.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'Загружается ли что-то на сервер?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'Нет. Декодирование и запись выполняются в браузере на вашем устройстве. При первой загрузке нужна сеть; офлайн не гарантируется.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'Что если аудио длиннее видео?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'Слияние следует длительности видео. Аудио после конца картинки в скачивание не попадает.',
};
export default ru;
