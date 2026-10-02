import type { SiteLangDict } from '../../../types';

/**
 * Русский: Извлечь аудио из WebM-файла.
 * Только .webm; запасной путь MediaElement (~500 МиБ / 4 ч) — без заявки на демукс 5 ГиБ.
 * Только локально; выход WAV или MP3; без URL YouTube.
 */
const ru: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'Извлечь аудио из WebM-файла',
  tool_extract_audio_from_a_webm_file_desc:
    'Извлечь Opus/Vorbis из одного локального WebM в WAV или MP3 на устройстве. Запасной путь браузера ~500 МиБ / 4 ч — не демукс на 5 ГиБ.',
  tool_extract_audio_from_a_webm_file_description:
    'Извлечь звуковую дорожку из одного локального WebM в браузере и скачать WAV или MP3. Шаги: выбрать WebM → Извлечь → прослушать → скачать. Пример: Загрузить образец создаёт короткий синтетический WebM, если доступен MediaRecorder. Эта страница WebM использует общий запасной путь MediaElement (~500 МиБ / 4 ч) — слишком большие файлы быстро падают с err_container. Крупный демукс MP4/MOV — на страницах этих форматов или в видео-хабе. Только локально — не скачивание YouTube и не URL. Никогда не загружается на сервер. Много WebM? Используйте «Пакетно извлечь аудио из WebM-файлов».',
  tool_extract_audio_from_a_webm_file_article:
    'Записи экрана и браузерные захваты часто идут как WebM с Opus. Страница принимает только .webm, идёт по запасному пути таблицы возможностей извлечения и пишет WAV или MP3 без загрузки. Не заявляет ISOBMFF-демукс и многогигабайтный OPFS-стриминг — это для MP4/MOV. Не забирает URL YouTube. Смешанные папки — на хаб или пакетный хаб.',
  tool_extract_audio_from_a_webm_file_choose: 'Выбрать WebM-файл',
  tool_extract_audio_from_a_webm_file_hint:
    'Перетащите один локальный .webm. Лимит запасного пути ~500 МиБ / 4 ч. Более крупные WebM падают с понятным сообщением о контейнере — ремукс в MP4 для крупного демукса или уменьшите файл.',
  tool_extract_audio_from_a_webm_file_convert: 'Извлечь',
  tool_extract_audio_from_a_webm_file_download: 'Скачать',
  tool_extract_audio_from_a_webm_file_download_wav: 'Скачать WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: 'Скачать MP3',
  tool_extract_audio_from_a_webm_file_sample: 'Загрузить образец',
  tool_extract_audio_from_a_webm_file_clear: 'Очистить',
  tool_extract_audio_from_a_webm_file_advanced: 'Формат экспорта',
  tool_extract_audio_from_a_webm_file_format_label: 'Формат вывода',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16 бит)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'Битрейт MP3',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'По умолчанию WAV подходит для коротких WebM. Более длинные клипы могут стримить MP3. Лимит — запасной путь (~500 МиБ), не демукс MP4. Без URL.',
  tool_extract_audio_from_a_webm_file_progress: 'Прогресс извлечения',
  tool_extract_audio_from_a_webm_file_read: 'Чтение',
  tool_extract_audio_from_a_webm_file_decode: 'Декодирование',
  tool_extract_audio_from_a_webm_file_extract: 'Извлечение',
  tool_extract_audio_from_a_webm_file_write: 'Запись',
  tool_extract_audio_from_a_webm_file_done: 'Готово. Прослушайте аудио, затем скачайте WAV или MP3.',
  tool_extract_audio_from_a_webm_file_failed:
    'Извлечение не удалось. Попробуйте меньший WebM, который браузер сможет декодировать.',
  tool_extract_audio_from_a_webm_file_elapsed: 'Прошло {s} с',
  tool_extract_audio_from_a_webm_file_preview: 'Прослушать извлечённое аудио',
  tool_extract_audio_from_a_webm_file_result: '{seconds} с · {channels} кан. · {rate} Гц · {format} {output} КиБ',
  tool_extract_audio_from_a_webm_file_sample_name: 'short-webm-audio-demo',
  tool_extract_audio_from_a_webm_file_empty: 'Сначала выберите WebM-файл или загрузите образец.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'Файла ещё нет. Перетащите локальный .webm (~500 МиБ) или «Загрузить образец». Не YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'Перетащите ровно один WebM-файл.',
  tool_extract_audio_from_a_webm_file_err_format:
    'Неподдерживаемый файл. На этой странице только .webm (video/webm).',
  tool_extract_audio_from_a_webm_file_err_limit:
    'Этот WebM превышает ограничение длительности или размера запасного пути.',
  tool_extract_audio_from_a_webm_file_err_container:
    'Этот WebM превышает лимит запасного пути (~500 МиБ / 4 ч) или не декодируется здесь. Ремукс в MP4 для крупного демукса или меньший WebM.',
  tool_extract_audio_from_a_webm_file_err_codec:
    'Аудиокодек этого WebM не поддерживается в запасном пути браузера.',
  tool_extract_audio_from_a_webm_file_err_channels:
    'У этой дорожки раскладка каналов, которую экстрактор не обрабатывает.',
  tool_extract_audio_from_a_webm_file_err_decode: 'Браузер не смог декодировать аудио из этого WebM.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'Не удалось записать аудиофайл. Нажмите «Извлечь» снова.',
  tool_extract_audio_from_a_webm_file_err_sample:
    'Не удалось создать образец WebM. Перетащите свой .webm.',
  tool_extract_audio_from_a_webm_file_err_unsupported:
    'В этом браузере нет Web Audio, нужного для извлечения.',
  tool_extract_audio_from_a_webm_file_err_empty: 'Не удалось захватить пригодные аудиосэмплы.',
  tool_extract_audio_from_a_webm_file_stop: 'Стоп',
  tool_extract_audio_from_a_webm_file_status_stopped: 'Остановлено. Частичный аудиофайл не сохраняется.',
  tool_extract_audio_from_a_webm_file_forced_mp3:
    'Длинный/крупный ввод использовал потоковый MP3 на запасном пути.',
  tool_extract_audio_from_a_webm_file_how_title: 'Как извлечь аудио из WebM-файла',
  tool_extract_audio_from_a_webm_file_how_body:
    'Перетащите локальный WebM, выберите WAV или MP3, Извлечь, прослушайте, скачайте — без загрузки.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'Выберите локальный .webm (~500 МиБ) или «Загрузить образец», если MediaRecorder работает.',
  tool_extract_audio_from_a_webm_file_how_item_2:
    'Откройте «Формат экспорта» и выберите WAV или MP3; при необходимости задайте битрейт.',
  tool_extract_audio_from_a_webm_file_how_item_3:
    'Нажмите «Извлечь» и дождитесь Чтение → Декодирование → Извлечение → Запись (или «Стоп»).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'Прослушайте, затем «Скачать WAV» или «Скачать MP3».',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'Зачем выбирать «Извлечь аудио из WebM-файла»',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'Только WebM — экранные захваты не смешиваются с лендингами MP4.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'Честные лимиты запасного пути — без ложного маркетинга демукса 5 ГиБ для WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3:
    'Обработка на вашем устройстве; «Стоп» отменяет на полпути.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4:
    'Рядом хаб и страницы крупных MP4/MOV, когда нужен демукс.',
  tool_extract_audio_from_a_webm_file_rules_title: 'Только WebM и лимиты запасного пути',
  tool_extract_audio_from_a_webm_file_rules_body:
    'Один локальный WebM за проход по запасному пути MediaElement. Не YouTube в MP3. Не экспорт беззвучного видео.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    '~500 МиБ / 4 ч запасной путь. Больше → err_container. Крупный демукс сегодня только MP4/MOV.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'Без URL и скачивания YouTube.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'Успех зависит от поддержки WebM/Opus в браузере.',
  tool_extract_audio_from_a_webm_file_rules_item_4:
    'Исходный WebM никогда не перезаписывается. Несколько WebM — пакетный инструмент WebM.',
  tool_extract_audio_from_a_webm_file_example_title: 'Попробовать реальное извлечение WebM',
  tool_extract_audio_from_a_webm_file_example:
    '«Загрузить образец» создаёт короткий синтетический WebM при доступном MediaRecorder, затем запускается «Извлечь». Если образец не создаётся — используйте свой .webm.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'Когда это помогает',
  tool_extract_audio_from_a_webm_file_usecase_1:
    'Браузерный захват экрана WebM → делимый MP3 без загрузки.',
  tool_extract_audio_from_a_webm_file_usecase_2:
    'Клип интервью в WebM — нужна только дорожка Opus как WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3:
    'Вы уже знаете, что файл WebM, и хотите страницу под формат — не смешанный хаб.',
  tool_extract_audio_from_a_webm_file_faq_q1: 'Можно вставить URL YouTube?',
  tool_extract_audio_from_a_webm_file_faq_a1: 'Нет. Только локальный .webm.',
  tool_extract_audio_from_a_webm_file_faq_q2: 'Почему не 5 ГиБ, как на странице MP4?',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'Крупный демукс сегодня — ISOBMFF (MP4/MOV). WebM использует запасной путь MediaElement ~500 МиБ, пока нет демукса WebM.',
  tool_extract_audio_from_a_webm_file_faq_q3: 'Это делает WebM беззвучным (немое видео)?',
  tool_extract_audio_from_a_webm_file_faq_a3: 'Нет. Извлекается только аудио в WAV/MP3.',
  tool_extract_audio_from_a_webm_file_faq_q4: 'Файл загружается на сервер?',
  tool_extract_audio_from_a_webm_file_faq_a4: 'Нет. Декодирование и запись в вашем браузере.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'У меня много WebM — какая страница?',
  tool_extract_audio_from_a_webm_file_faq_a5:
    'Используйте «Пакетно извлечь аудио из WebM-файлов» для ZIP успешных файлов.',
  tool_extract_audio_from_a_webm_file_faq_q6: 'Можно обрезать после извлечения?',
  tool_extract_audio_from_a_webm_file_faq_a6:
    'Не здесь. Скачайте, затем используйте «Обрезать аудиоклип и экспортировать».',
};
export default ru;
