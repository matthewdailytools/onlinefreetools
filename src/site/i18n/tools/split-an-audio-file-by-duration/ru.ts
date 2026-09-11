/**
 * i18n tool shard (split-an-audio-file-by-duration / ru).
 * H1 — фраза задачи; равные части / каждые 60 с в desc и FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Русская поисковая копия: разделить аудиофайл по длительности и скачать ZIP. */
const ru: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Дополнительно (по желанию)',
  tool_split_an_audio_file_by_duration_article:
    'Разделите аудиофайл по длительности в этой вкладке: откройте файл, задайте секунды, нажмите Разделить по длительности, затем Скачать ZIP. Каждый клип длится N секунд, последний забирает остаток. Файл остаётся на устройстве и не загружается на сервер.',
  tool_split_an_audio_file_by_duration_bitrate: 'Битрейт MP3',
  tool_split_an_audio_file_by_duration_bitrate_hint: 'По умолчанию 128 кбит/с. Нужен, только если ZIP в MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 мин',
  tool_split_an_audio_file_by_duration_chip_30: '30 с',
  tool_split_an_audio_file_by_duration_chip_300: '5 мин',
  tool_split_an_audio_file_by_duration_chip_60: '60 с',
  tool_split_an_audio_file_by_duration_choose_file: 'Выберите аудиофайл',
  tool_split_an_audio_file_by_duration_chunk: 'Длина куска (секунды)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '2 с совпадают с примером. Для лекции нажмите 60 с или 3 мин. Последний клип сохраняет остаток времени.',
  tool_split_an_audio_file_by_duration_clear: 'Очистить',
  tool_split_an_audio_file_by_duration_clip_download: 'Скачать этот клип',
  tool_split_an_audio_file_by_duration_clip_play: 'Слушать этот клип',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Клип {n} · {dur}с ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Клипы для ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Нарежьте файл на равные по длительности клипы и скачайте ZIP; остаётся на устройстве, без загрузки на сервер.',
  tool_split_an_audio_file_by_duration_description:
    'Разделите аудиофайл по длительности на устройстве: равные куски, последний с остатком, ZIP для скачивания — без загрузки на сервер. Шаги: откройте файл, задайте секунды (пример 2 с; чипы 30 / 60 / 180 / 300 с), Разделить по длительности, Скачать ZIP. Пример: 5,00 с по 2 с дают 2,00 / 2,00 / 1,00 с. Нарезать аудио по длительности, нарезать mp3 на равные части или резать каждые 60 секунд — та же задача. Не нарезка по тишине, не cue, не ручная обрезка, не выключение звука видео.',
  tool_split_an_audio_file_by_duration_download_zip: 'Скачать ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'Или перетащите сюда WAV, MP3, M4A или OGG. Обработка остаётся в этой вкладке.',
  tool_split_an_audio_file_by_duration_empty: 'Сначала выберите аудиофайл.',
  tool_split_an_audio_file_by_duration_equal_parts: 'Или нарезать на N равных частей',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Пусто = поле секунд. 2–50 задаёт длину куска как всего ÷ N для этого разреза.',
  tool_split_an_audio_file_by_duration_err_caps:
    'Файл превышает лимит устройства (около 40 МБ / 20 мин на компьютере, 20 МБ / 8 мин на узком экране). Сначала укоротите его или возьмите короче.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'Длина куска должна быть от 0,5 до 1200 секунд. Увеличьте её, если упираетесь в 50 клипов.',
  tool_split_an_audio_file_by_duration_err_decode:
    'Этот браузер не смог декодировать файл. Попробуйте WAV или MP3 либо клип без DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'Нечего обрабатывать. Загрузите файл или пример.',
  tool_split_an_audio_file_by_duration_err_lame: 'Кодировщик MP3 не загрузился. Оставайтесь во вкладке и снова нажмите Скачать ZIP.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'Больше 50 клипов. Увеличьте секунды (60 с или 3 мин). Страница отказывает, а не обрезает молча.',
  tool_split_an_audio_file_by_duration_err_video:
    'Эта страница не принимает видео как основной ввод. Она делит звуковой файл по длительности; не выключает звук у ролика.',
  tool_split_an_audio_file_by_duration_err_zip: 'Библиотека ZIP не загрузилась. Оставайтесь во вкладке и снова нажмите Скачать ZIP.',
  tool_split_an_audio_file_by_duration_example:
    'Загрузить пример создаёт тон 5,00 с на 440 Гц. Разделить по длительности по 2,00 с режет в 2,00 с и 4,00 с: три клипа 2,00 / 2,00 / 1,00 с (последний забирает остаток). Скачать ZIP пишет sample-01.wav, если в дополнительно не выбран MP3.',
  tool_split_an_audio_file_by_duration_example_title: 'Пример',
  tool_split_an_audio_file_by_duration_faq_a1:
    'Нет. Декодирование, нарезка и сборка ZIP идут в этой вкладке. Скрипты с этого сайта. Файл на наши серверы не уходит.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Да. Разделить аудио по длительности, нарезать mp3 на равные части, резать каждые 60 секунд или скачать клипы ZIP — это инструмент: резать локальный файл каждые N секунд и унести много файлов в одном ZIP. N равных частей — в дополнительно.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'Последний клип забирает остаток. 5,00 с по 2 с дают 2,00 / 2,00 / 1,00 с, без тишины в хвосте.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'Нет. Разделить запись по тишине режет на паузах. Здесь считает часы. Cue и нарезка по размеру файла не входят.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'В примере оставьте 2 с. Для соцсетей 30 с или 60 с; для лекции 3 или 5 минут. Четыре одинаковых файла: введите 4 в дополнительно.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'В ZIP имена {stem}-01.wav (или .mp3). Один клип можно скачать из списка. Потолок 50; сверх — отказ.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'Нет. Ни шумоподавление, ни выключение звука видео, ни cue/APE, ни ручная обрезка, ни скачивание YouTube. Берите звук, на который у вас есть права.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Компьютер: около 40 МБ или 20 минут. Узкий экран: около 20 МБ или 8 минут. Сверх лимита отказ до декодирования.',
  tool_split_an_audio_file_by_duration_faq_q1: 'Загружается ли аудиофайл на сервер?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'Я искал «нарезать mp3 на равные части» или «разделить аудио по длительности». Это другой инструмент?',
  tool_split_an_audio_file_by_duration_faq_q3: 'Что происходит с остатком на последнем клипе?',
  tool_split_an_audio_file_by_duration_faq_q4: 'Режет ли по тишине, по cue или по размеру файла?',
  tool_split_an_audio_file_by_duration_faq_q5: 'Сколько секунд ставить на кусок?',
  tool_split_an_audio_file_by_duration_faq_q6: 'Как называются файлы и сколько клипов максимум?',
  tool_split_an_audio_file_by_duration_faq_q7: 'Убирает шум, режет видео, читает cue или качает YouTube?',
  tool_split_an_audio_file_by_duration_faq_q8: 'Какой размер файла допустим?',
  tool_split_an_audio_file_by_duration_format: 'Формат внутри ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV — PCM без потерь. MP3 подгружает кодировщик только по Скачать ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Режьте каждые N секунд по часам, остаток оставьте последнему клипу, скачайте ZIP — без загрузки на сервер.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Откройте аудиофайл (или нажмите Загрузить пример).',
  tool_split_an_audio_file_by_duration_how_item_2: 'Оставьте 2 секунды или нажмите чип / введите длительность.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Нажмите Разделить по длительности.',
  tool_split_an_audio_file_by_duration_how_item_4: 'Нажмите Скачать ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'Как пользоваться',
  tool_split_an_audio_file_by_duration_hud_decode: 'Декодирование файла в этой вкладке…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Декодировано. Белые метки — планируемые разрезы. Нажмите Разделить по длительности, если длина подходит.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: 'прошло {s}с',
  tool_split_an_audio_file_by_duration_hud_encode: 'Кодирование клипов MP3…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Исправьте файл или секунды и снова Разделить по длительности.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Разделить по длительности остановлено',
  tool_split_an_audio_file_by_duration_hud_next: 'Готово. Дальше: Скачать ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Готово. Скачивание ZIP должно начаться.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Упаковка клипов в ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Нарезка равных по длительности клипов…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Декод',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Упаковка',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Нарезка',
  tool_split_an_audio_file_by_duration_hud_title: 'Прогресс: Разделить по длительности',
  tool_split_an_audio_file_by_duration_hud_working: 'Старт…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}с · {rate} Гц · {ch} кан.',
  tool_split_an_audio_file_by_duration_pause: 'Пауза',
  tool_split_an_audio_file_by_duration_play: 'Слушать',
  tool_split_an_audio_file_by_duration_preview_hint: 'Белые метки — разрезы каждые N секунд. Слушать воспроизводит текущий файл.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}с · длина куска покрывает весь файл, в ZIP был бы только он. Уменьшите секунды и снова Разделить по длительности. Скачать ZIP уже доступна.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}с · каждые {chunk}с → {count} клип(ов): {list}. Скачать ZIP уже доступна.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Разрезы в k × D секунд, D — длина куска. Последний клип [floor(T / D) × D, T] и может быть короче. Если заданы N равных частей, D = T / N для этого запуска. WAV — 16-бит PCM. MP3 — CBR выбранного битрейта. ZIP собирается в этой вкладке.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'Пример использует 2 с. Чипы пишут 30 с, 60 с, 180 с (3 мин) или 300 с (5 мин) в то же поле. N равных частей (2–50) необязательны в дополнительно.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Лимит компьютера около 40 МБ или 20 минут; узкий экран около 20 МБ или 8 минут. Сверх — отказ, не обрезка. Больше 50 клипов тоже отказ.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Файлы остаются на устройстве; на сервер не загружаются. JSZip и кодировщик MP3 подгружаются с этого сайта только после Скачать ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'Декодирование зависит от браузера. DRM, часть кодеков и видеоконтейнеры падают с явной ошибкой.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'Страница отдаёт много файлов в ZIP по часам. Не режет по тишине, не следует cue, не делит по мегабайтам, не шумодав, не глушит видео и не качает YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Правила, к которым стоит быть готовым',
  tool_split_an_audio_file_by_duration_sample: 'Загрузить пример',
  tool_split_an_audio_file_by_duration_split: 'Разделить по длительности',
  tool_split_an_audio_file_by_duration_status_done: 'Готово.',
  tool_split_an_audio_file_by_duration_title: 'Разделите аудиофайл по длительности',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Нарезать лекцию на 3-минутные куски для дороги и унести ZIP, не дожидаясь пауз.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'Нарезать mp3 на равные части по 60 секунд для соцсетей из длинного выпуска.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Порезать длинную голосовую заметку под лимит мессенджера; последний клип забирает остаток.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Когда это к месту',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Для ZIP, нарезанного по часам: чипы 30 с / 60 с / 3 мин / 5 мин и честно более короткий последний клип.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Режет каждые N секунд и кладёт много файлов в ZIP; последний клип забирает остаток, а не добивает тишиной.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'Чипы 30 с / 60 с / 3 мин / 5 мин и необязательные N равных частей; это не детектор тишины под видом равной нарезки.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'Файл остаётся в этой вкладке браузера и не загружается на сервер; JSZip и lamejs подгружаются только по Скачать ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Слишком большие файлы и больше 50 клипов отклоняются до обрезанного ZIP — без обещания 1 ГБ, которое роняет вкладку.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Зачем пользоваться «Разделите аудиофайл по длительности»',
};
export default ru;
