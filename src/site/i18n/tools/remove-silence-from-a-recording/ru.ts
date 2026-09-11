/**
 * i18n tool shard (remove-silence-from-a-recording / ru).
 * H1: Удалите тишину из записи.
 */
import type { SiteLangDict } from '../../../types';

/** Русский: убрать паузы / вырезать тишину, один файл. */
const ru: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Дополнительные настройки (по желанию)',
  tool_remove_silence_from_a_recording_article:
    'Удалите тишину из записи на этой вкладке: откройте локальный файл, нажмите Удалить тишину и экспортируйте WAV или MP3. Длинные паузы вырезаются, речь сшивается в один короткий файл, без загрузки на сервер.',
  tool_remove_silence_from_a_recording_bitrate: 'Битрейт MP3',
  tool_remove_silence_from_a_recording_bitrate_hint: 'По умолчанию 128 kbps. Только при Экспорт MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'Выберите аудиофайл',
  tool_remove_silence_from_a_recording_clear: 'Очистить',
  tool_remove_silence_from_a_recording_desc:
    'Уберите паузы из локальной записи и скачайте более короткий WAV или MP3; файлы остаются на устройстве, без загрузки на сервер.',
  tool_remove_silence_from_a_recording_description:
    'Удалите тишину из записи на устройстве: вырежьте длинные паузы, оставьте один короткий файл и скачайте WAV или MP3 — без загрузки на сервер. Шаги: откройте запись, нажмите Удалить тишину (−40 дБ / 0,5 с / оставить 0,15 с), Экспорт WAV или Экспорт MP3. Пример: 5,00 с с двумя паузами по 1,20 с становятся около 2,90 с. Поиск «убрать паузы», «вырезать тишину» или «удалить молчание» — та же задача. Не ZIP и не отключение звука в видео.',
  tool_remove_silence_from_a_recording_drop_hint: 'Или перетащите WAV, MP3, M4A или OGG сюда. Обработка остаётся на этой вкладке.',
  tool_remove_silence_from_a_recording_empty: 'Сначала выберите аудиофайл.',
  tool_remove_silence_from_a_recording_err_caps:
    'Файл больше лимита этого устройства (около 40 МБ / 20 мин на компьютере, 20 МБ / 8 мин на узком экране). Сначала укоротите или возьмите файл короче.',
  tool_remove_silence_from_a_recording_err_decode:
    'Этот браузер не смог декодировать файл. Попробуйте WAV или MP3 либо клип без DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'Нечего обрабатывать. Загрузите файл или пример.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'Аудио не осталось. Сделайте порог отрицательнее или увеличьте минимум тишины, чтобы речь не считалась паузой.',
  tool_remove_silence_from_a_recording_err_lame: 'Кодировщик MP3 не загрузился. Оставайтесь на вкладке и снова нажмите Экспорт MP3.',
  tool_remove_silence_from_a_recording_err_video:
    'Эта страница не принимает видео как основной ввод. Она укорачивает звуковой файл, не выключает звук ролика и не делает jump-cut.',
  tool_remove_silence_from_a_recording_example:
    'Загрузить пример создаёт 5,00 с тона с двумя паузами по 1,20 с (0,80 + 1,20 + 0,80 + 1,20 + 1,00). Удалить тишину при −40 дБ / 0,5 с / 0,15 с даёт около 2,90 с. WAV пишет PCM; MP3 — 128 kbps, если не менять доп. настройки.',
  tool_remove_silence_from_a_recording_example_title: 'Пример',
  tool_remove_silence_from_a_recording_export_mp3: 'Экспорт MP3',
  tool_remove_silence_from_a_recording_export_wav: 'Экспорт WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'Нет. Декодирование и нарезка идут на этой вкладке. Скрипты с этого сайта. Файл не отправляется на наши серверы.',
  tool_remove_silence_from_a_recording_faq_a2:
    'Та же задача. Убрать паузы из аудио, вырезать тишину или удалить молчание — это срезать тихие промежутки и экспортировать один более короткий WAV или MP3.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Начните с Речи (−40 дБ / 0,5 с / 0,15 с). Шумная комната: порог к −30 дБ, минимум к 0,8 с. Студия: Мягко (−50 дБ). Если обрезаются концы слов — порог отрицательнее или минимум больше.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Ручная обрезка — это начало и конец. Здесь ещё вырезаются паузы в середине и сшивается один файл. Только края вручную — инструмент обрезки.',
  tool_remove_silence_from_a_recording_faq_a5:
    'Нет. Нарезать по тишине на много файлов или ZIP — другая задача. Здесь всегда один файл.',
  tool_remove_silence_from_a_recording_faq_a6:
    'Нет. Шумоподавление не укорачивает длительность. Убрать «э-э» нужен транскрипт. Отключить звук видео или скачать YouTube вне темы. Используйте аудио, на которое у вас есть право.',
  tool_remove_silence_from_a_recording_faq_a7:
    'Та же задача, другая программа. Truncate Silence в Audacity укорачивает фрагменты ниже порога достаточно долго. Здесь в браузере; это не инструкция по установке.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Компьютер: около 40 МБ или 20 минут. Узкий экран: около 20 МБ или 8 минут. Больше — отказ до декодирования. Тихая музыка может срезаться ошибочно: увеличьте минимум или не используйте эту страницу.',
  tool_remove_silence_from_a_recording_faq_q1: 'Запись загружается на сервер?',
  tool_remove_silence_from_a_recording_faq_q2: 'Я искал «убрать паузы» или «вырезать тишину». Это другой инструмент?',
  tool_remove_silence_from_a_recording_faq_q3: 'Какой порог? Обрежутся ли вдохи?',
  tool_remove_silence_from_a_recording_faq_q4: 'Нужно только обрезать начало и конец. Это аудио-триммер?',
  tool_remove_silence_from_a_recording_faq_q5: 'Запись делится на много файлов?',
  tool_remove_silence_from_a_recording_faq_q6: 'Шумодав, слова-паразиты, звук из видео или YouTube?',
  tool_remove_silence_from_a_recording_faq_q7: 'Как Truncate Silence в Audacity?',
  tool_remove_silence_from_a_recording_faq_q8: 'Какой максимальный размер? А тихая музыка?',
  tool_remove_silence_from_a_recording_how_body:
    'Найти достаточно длинные паузы, укоротить их, сшить речь в один файл и скачать WAV или MP3 без загрузки на сервер.',
  tool_remove_silence_from_a_recording_how_item_1: 'Откройте запись (или нажмите Загрузить пример).',
  tool_remove_silence_from_a_recording_how_item_2: 'Оставьте значения по умолчанию или откройте Дополнительные настройки (по желанию) для порога и минимума.',
  tool_remove_silence_from_a_recording_how_item_3: 'Нажмите Удалить тишину.',
  tool_remove_silence_from_a_recording_how_item_4: 'Нажмите Экспорт WAV или Экспорт MP3.',
  tool_remove_silence_from_a_recording_how_title: 'Как это работает',
  tool_remove_silence_from_a_recording_hud_cut: 'Вырезаем паузы и сшиваем один файл…',
  tool_remove_silence_from_a_recording_hud_decode: 'Декодируем файл на этой вкладке…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Декодировано. Красное — паузы. Нажмите Удалить тишину.',
  tool_remove_silence_from_a_recording_hud_detect: 'Измеряем тихие окна…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: 'прошло {s}с',
  tool_remove_silence_from_a_recording_hud_encode: 'Кодируем MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Исправьте файл или настройки и снова Удалить тишину.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Удаление тишины остановлено',
  tool_remove_silence_from_a_recording_hud_next: 'Готово. Дальше: Экспорт WAV или Экспорт MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Готово. Скачивание MP3 должно начаться.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Нарезка',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Декод',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Поиск',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Код',
  tool_remove_silence_from_a_recording_hud_title: 'Ход удаления тишины',
  tool_remove_silence_from_a_recording_hud_working: 'Старт…',
  tool_remove_silence_from_a_recording_keep: 'Оставить в каждой паузе (секунды)',
  tool_remove_silence_from_a_recording_keep_hint: 'По умолчанию 0,15 с, чтобы срез не прыгал. 0 удаляет всю паузу.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}с · {rate} Hz · {ch} кан.',
  tool_remove_silence_from_a_recording_min_silence: 'Минимум тишины (секунды)',
  tool_remove_silence_from_a_recording_min_silence_hint: 'По умолчанию 0,5 с. Более короткие паузы между словами остаются.',
  tool_remove_silence_from_a_recording_pause: 'Пауза',
  tool_remove_silence_from_a_recording_play: 'Играть',
  tool_remove_silence_from_a_recording_preset_gentle: 'Мягко',
  tool_remove_silence_from_a_recording_preset_hint: 'Речь — старт. Мягко оставляет больше пауз. Плотно режет сильнее.',
  tool_remove_silence_from_a_recording_preset_speech: 'Речь',
  tool_remove_silence_from_a_recording_preset_tight: 'Плотно',
  tool_remove_silence_from_a_recording_preview_hint: 'Красные полосы — паузы, достаточно длинные для среза. Воспроизведение слушает текущий файл (или результат).',
  tool_remove_silence_from_a_recording_remove: 'Удалить тишину',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}с → {next}с. Снято {removed}с ({pct}%) в {gaps} паузе(ах). Можно экспортировать.',
  tool_remove_silence_from_a_recording_rules_body:
    'Примерно каждые 50 мс считается RMS, затем levelDb = 20 × log10(rms). Участок ниже порога длиннее минимума укорачивается до keep, речь склеивается. WAV — PCM 16 бит. MP3 — CBR выбранного битрейта.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Речь: −40 дБ, минимум 0,5 с, оставить 0,15 с. Шумная комната: −30 дБ / 0,8 с / 0,20 с. Студия: −50 дБ / 0,4 с / 0,15 с.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Лимит компьютера около 40 МБ или 20 минут; узкий экран около 20 МБ или 8 минут. Сверх — отказ, не тихая обрезка.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Файлы остаются на устройстве, без загрузки на сервер. Кодировщик MP3 грузится с этого сайта только после Экспорт MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'Декодирование зависит от браузера. DRM, часть кодеков и видеоконтейнеры падают с явной ошибкой.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'Один файл. Не ZIP, не шумодав, не слова-паразиты, не mute видео, не YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Правила, на которые стоит рассчитывать',
  tool_remove_silence_from_a_recording_sample: 'Загрузить пример',
  tool_remove_silence_from_a_recording_status_done: 'Готово.',
  tool_remove_silence_from_a_recording_threshold: 'Порог тишины (дБ)',
  tool_remove_silence_from_a_recording_threshold_hint: 'По умолчанию −40 дБ. Ближе к 0 больше участков считается тишиной.',
  tool_remove_silence_from_a_recording_title: 'Удалите тишину из записи',
  tool_remove_silence_from_a_recording_usecase_1:
    'Убрать длинные паузы в подкасте на двоих и оставить один более короткий выпуск.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Сократить запись совещания без речи и экспортировать один MP3.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Вычистить паузы раздумий в голосовой заметке и отправить один файл.',
  tool_remove_silence_from_a_recording_usecases_title: 'Когда подходит',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Для одного более короткого файла: таблица порогов и секунды среза видны на странице.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Паузы срезаются, речь сшивается в один файл; ZIP клипов нет.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Значения для речи (−40 дБ / 0,5 с / 0,15 с) подходят голосу; строка результата показывает снятые секунды.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'Файл остаётся на этой вкладке, без загрузки на сервер; кодировщик MP3 грузится только по клику.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Слишком большие или длинные файлы отклоняются до декодирования, без обещания 1 ГБ, которое роняет вкладку.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Зачем пользоваться «Удалите тишину из записи»',
};
export default ru;
