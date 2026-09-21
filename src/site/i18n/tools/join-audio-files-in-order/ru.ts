import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for join-audio-files-in-order (F7 A2).
 * Объединить аудиофайлы по порядку; ≠ наложение; ≠ кроссфейд.
 */
const ru: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Объединить аудиофайлы по порядку',
  tool_join_audio_files_in_order_desc:
    'Склейте несколько локальных клипов конец к концу по порядку списка и скачайте один 16-битный WAV. Только на устройстве—не наложение дорожек.',
  tool_join_audio_files_in_order_description:
    'Объедините несколько локальных аудиофайлов конец к концу в порядке списка в браузере и скачайте один 16-битный WAV. Шаги: Добавьте клипы, при необходимости переставьте, Объединить, прослушайте, скачайте. Пример: загрузите два коротких тона. Только склейка—не наложение и не кроссфейд. Никогда не загружается на сервер.',
  tool_join_audio_files_in_order_article:
    'Подкаст-тейки, голосовые заметки и фрагменты песен часто нужно сделать одним непрерывным файлом. На этой странице можно сбросить несколько локальных файлов, переставить их в списке, декодировать каждый клип в браузере, выровнять частоту дискретизации и каналы, затем склеить сэмплы в этом порядке в один 16-битный PCM WAV. Страница не накладывает дорожки одновременно, не делает кроссфейд между песнями и не извлекает звук из видео. Успех зависит от того, может ли браузер декодировать каждый контейнер. Каналов остаётся один или два. Сохраните оригиналы; скачивание — новый файл. Работа идёт на вашем устройстве.',
  tool_join_audio_files_in_order_choose: 'Добавить аудиофайлы',
  tool_join_audio_files_in_order_hint:
    'Перетащите или выберите несколько WAV, MP3, M4A, AAC или OGG. Можно добавлять ещё. До 20 клипов, по 40 МиБ каждый, суммарно до 20 минут после склейки; моно или стерео.',
  tool_join_audio_files_in_order_list_label: 'Порядок склейки',
  tool_join_audio_files_in_order_move_up: 'Вверх',
  tool_join_audio_files_in_order_move_down: 'Вниз',
  tool_join_audio_files_in_order_remove: 'Убрать',
  tool_join_audio_files_in_order_convert: 'Объединить',
  tool_join_audio_files_in_order_download: 'Скачать WAV',
  tool_join_audio_files_in_order_sample: 'Загрузить образец',
  tool_join_audio_files_in_order_clear: 'Очистить',
  tool_join_audio_files_in_order_advanced: 'Заметки о склейке',
  tool_join_audio_files_in_order_settings_hint:
    'Клипы склеиваются конец к концу в порядке списка. Разные частоты приводятся к первому клипу. Только склейка—не наложение и не кроссфейд.',
  tool_join_audio_files_in_order_progress: 'Ход склейки',
  tool_join_audio_files_in_order_read: 'Чтение',
  tool_join_audio_files_in_order_decode: 'Декод',
  tool_join_audio_files_in_order_join: 'Склейка',
  tool_join_audio_files_in_order_write: 'Запись',
  tool_join_audio_files_in_order_done: 'Готово. Прослушайте склеенный WAV и скачайте.',
  tool_join_audio_files_in_order_failed: 'Склейка не удалась. Попробуйте меньше, короче и корректные файлы.',
  tool_join_audio_files_in_order_elapsed: 'прошло {s} с',
  tool_join_audio_files_in_order_preview: 'Прослушать склеенный WAV',
  tool_join_audio_files_in_order_result:
    '{files} файлов · {seconds} с · {channels} кан. · {rate} Гц · WAV {output} КиБ',
  tool_join_audio_files_in_order_sample_name: 'тон-склейка',
  tool_join_audio_files_in_order_empty: 'Сначала добавьте хотя бы два аудиофайла или загрузите образец.',
  tool_join_audio_files_in_order_empty_state:
    'Клипов пока нет. Перетащите несколько локальных файлов или нажмите «Загрузить образец» для двух коротких тонов. Инструмент склеивает по порядку списка—не накладывает дорожки друг на друга.',
  tool_join_audio_files_in_order_queue_count: 'в очереди: {n}',
  tool_join_audio_files_in_order_err_file: 'Добавьте хотя бы два поддерживаемых аудиофайла.',
  tool_join_audio_files_in_order_err_format:
    'Неподдерживаемое или повреждённое аудио. Используйте WAV, MP3, M4A, AAC или OGG, которые браузер может декодировать.',
  tool_join_audio_files_in_order_err_limit:
    'До 20 файлов, по 40 МиБ каждый, моно или стерео, суммарная длина после склейки меньше 20 минут.',
  tool_join_audio_files_in_order_err_decode:
    'Браузер не смог декодировать один из файлов. Уберите его или попробуйте другое кодирование.',
  tool_join_audio_files_in_order_err_encoder: 'Не удалось записать склеенный WAV. Попробуйте «Объединить» снова.',
  tool_join_audio_files_in_order_how_title: 'Как объединить аудиофайлы по порядку',
  tool_join_audio_files_in_order_how_body:
    'Добавьте несколько локальных клипов, задайте порядок, нажмите «Объединить», прослушайте и скачайте 16-битный WAV—без загрузки на сервер.',
  tool_join_audio_files_in_order_how_item_1:
    'Добавьте два или больше аудиофайлов (или образец из двух коротких тонов). Перетащите снова, чтобы дописать ещё.',
  tool_join_audio_files_in_order_how_item_2:
    'Используйте Вверх / Вниз / Убрать в списке, чтобы порядок совпал с тем, что хотите услышать.',
  tool_join_audio_files_in_order_how_item_3:
    'Нажмите «Объединить» и дождитесь Чтение → Декод → Склейка → Запись.',
  tool_join_audio_files_in_order_how_item_4:
    'Прослушайте непрерывный трек, проверьте строку результата и нажмите «Скачать WAV».',
  tool_join_audio_files_in_order_why_choose_title: 'Почему выбрать наши инструменты «Объединить аудиофайлы по порядку»',
  tool_join_audio_files_in_order_why_choose_item_1:
    'Перед сохранением видно число файлов, длительность, каналы, частоту и размер выхода в КиБ.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'Одна ясная задача склейки—порядок списка конец к концу—с честными пределами, если клип не декодируется.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Чтение, декод и запись идут на устройстве; страница не загружает клипы на сервер для обработки.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Изменение очереди сбрасывает старую загрузку, чтобы не сохранить устаревший WAV.',
  tool_join_audio_files_in_order_rules_title: 'Правила склейки и честные пределы браузера',
  tool_join_audio_files_in_order_rules_body:
    'Каждый запуск склеивает клипы конец к концу в порядке списка. Частоты выравниваются по первому клипу. Экспорт — 16-битный WAV. Это не наложение, не кроссфейд и не извлечение из видео.',
  tool_join_audio_files_in_order_rules_item_1:
    'От двух до двадцати локальных аудиофайлов, каждый до 40 МиБ. Длина после склейки меньше двадцати минут. Каналов один или два.',
  tool_join_audio_files_in_order_rules_item_2:
    'Эта страница склеивает. Она не накладывает голос на музыку одновременно и не делает кроссфейд между песнями.',
  tool_join_audio_files_in_order_rules_item_3:
    'Теги не копируются. Оригиналы не перезаписываются. Успех зависит от поддержки декода браузером для каждого файла.',
  tool_join_audio_files_in_order_rules_item_4:
    'После склейки используйте обрезку клипа для начала/конца. Для видео сначала извлеките звук.',
  tool_join_audio_files_in_order_example_title: 'Попробуйте два коротких тона',
  tool_join_audio_files_in_order_example:
    '«Загрузить образец» добавляет два коротких WAV-тона (разная высота) в очередь и запускает «Объединить». Вы должны услышать тон A, затем B без наложения. Воспроизведение само не стартует—нажмите play в предпросмотре.',
  tool_join_audio_files_in_order_usecases_title: 'Когда это помогает',
  tool_join_audio_files_in_order_usecase_1:
    'Несколько голосовых заметок должны стать одной непрерывной дорожкой—добавьте по порядку, объедините, скачайте WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'Фрагменты песни или главы подкаста в отдельных файлах нуждаются в одном экспорте без загрузки на сайт-склейщик.',
  tool_join_audio_files_in_order_usecase_3: 'Несколько WAV по главам — в один непрерывный файл по порядку.',
  tool_join_audio_files_in_order_faq_q1: 'Это то же самое, что микшировать или накладывать две дорожки?',
  tool_join_audio_files_in_order_faq_a1:
    'Нет. Наложение воспроизводит клипы одновременно (например голос поверх музыки). Эта страница только ставит их друг за другом по порядку списка.',
  tool_join_audio_files_in_order_faq_q2: 'Делается ли кроссфейд между песнями?',
  tool_join_audio_files_in_order_faq_a2:
    'Нет. Нет кроссфейда и DJ-перехода. Клипы встречаются конец к концу. Кроссфейд — другая задача.',
  tool_join_audio_files_in_order_faq_q3: 'Можно ли изменить порядок склейки?',
  tool_join_audio_files_in_order_faq_a3:
    'Да. Используйте Вверх и Вниз в каждой строке или Убрать и добавить снова. «Объединить» всегда следует списку сверху вниз.',
  tool_join_audio_files_in_order_faq_q4: 'Что если у файлов разная частота дискретизации?',
  tool_join_audio_files_in_order_faq_a4:
    'Последующие клипы выравниваются по частоте первого перед склейкой. Каналы остаются моно или стерео.',
  tool_join_audio_files_in_order_faq_q5: 'Загружается ли аудио на сервер?',
  tool_join_audio_files_in_order_faq_a5:
    'Нет. Чтение, декод и запись идут в браузере на устройстве. Странице нужна сеть при первой загрузке; офлайн не гарантируется.',
  tool_join_audio_files_in_order_faq_q6: 'Можно ли склеить звук, извлечённый из видео?',
  tool_join_audio_files_in_order_faq_a6:
    'Сначала извлеките дорожку инструментом извлечения аудио из видеофайла, затем добавьте экспортированное аудио сюда. Эта страница не принимает видеоконтейнеры как вход склейки.',
};
export default ru;
