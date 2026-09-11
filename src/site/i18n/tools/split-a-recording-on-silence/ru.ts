/**
 * i18n tool shard (split-a-recording-on-silence / ru).
 * Job: split a recording on silence into a ZIP of clips (разделить запись по тишине).
 */
import type { SiteLangDict } from '../../../types';

/** Russian copy: разделите запись по тишине и скачайте ZIP с клипами. */
const ru: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Дополнительные настройки (необязательно)',
  tool_split_a_recording_on_silence_article:
    'В этой вкладке можно нарезать аудио по паузам: откройте файл с устройства, нажмите Разделить по тишине, затем Скачать ZIP. Длинные паузы режутся по середине разрыва; клипы остаются отдельными файлами. Запись остаётся на устройстве и не загружается на сервер.',
  tool_split_a_recording_on_silence_bitrate: 'Битрейт MP3',
  tool_split_a_recording_on_silence_bitrate_hint: 'Старт 128 kbps. Нужен только если формат ZIP — MP3.',
  tool_split_a_recording_on_silence_choose_file: 'Выбрать аудиофайл',
  tool_split_a_recording_on_silence_clear: 'Очистить',
  tool_split_a_recording_on_silence_clip_download: 'Сохранить этот клип',
  tool_split_a_recording_on_silence_clip_play: 'Проиграть клип',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Клип {n} · {dur}с ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Клипы для ZIP',
  tool_split_a_recording_on_silence_desc:
    'Разрезать запись по тишине и скачать клипы ZIP — файлы остаются на устройстве, без загрузки на сервер.',
  tool_split_a_recording_on_silence_description:
    'Разделите запись по тишине прямо на устройстве: длинные паузы становятся точками реза, ZIP собирает клипы; файл не уходит на сервер. Запросы вроде нарезать аудио по паузам, разрезать запись по тишине, разделить mp3 по тишине или скачать клипы ZIP — это та же многофайловая задача. Процесс: откройте запись, нажмите Разделить по тишине (по умолчанию −40 dB / 1.0 s / 0.3 s мин. клип), Скачать ZIP. Пример: образец 5.00 с с двумя паузами по 1.20 с даёт три клипа 1.40 / 2.00 / 1.60 с. Это не удаление тишины в один файл, не нарезка равной длины и не отключение звука видео.',
  tool_split_a_recording_on_silence_download_zip: 'Скачать ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'Или перетащите сюда WAV, MP3, M4A или OGG. Обработка остаётся во вкладке.',
  tool_split_a_recording_on_silence_empty: 'Сначала выберите аудиофайл.',
  tool_split_a_recording_on_silence_err_caps:
    'Файл больше лимита размера или длительности для этого устройства (около 40 MB / 20 мин на компьютере, 20 MB / 8 мин на узком экране). Укоротите его иначе или возьмите более короткий файл.',
  tool_split_a_recording_on_silence_err_decode:
    'Этот браузер не смог декодировать файл. Попробуйте WAV или MP3 либо клип без DRM.',
  tool_split_a_recording_on_silence_err_empty: 'Нечего обрабатывать. Сначала загрузите файл или пример.',
  tool_split_a_recording_on_silence_err_lame: 'Кодировщик MP3 не загрузился. Оставайтесь во вкладке и снова нажмите Скачать ZIP.',
  tool_split_a_recording_on_silence_err_no_clips:
    'Нет клипа достаточной длины. Уменьшите минимальную длину клипа или увеличьте минимальную тишину, чтобы короткий вдох не стал точкой реза.',
  tool_split_a_recording_on_silence_err_too_many:
    'Больше 50 клипов. Увеличьте минимальную тишину или сделайте порог более отрицательным, чтобы соседние паузы слились, и снова Разделить по тишине. Страница отказывает, а не обрезает молча.',
  tool_split_a_recording_on_silence_err_video:
    'Видео не принимается как основной вход. Здесь режется звуковой файл по паузам; это не mute видео и не jump-cut материала.',
  tool_split_a_recording_on_silence_err_zip: 'Библиотека ZIP не загрузилась. Оставайтесь во вкладке и снова нажмите Скачать ZIP.',
  tool_split_a_recording_on_silence_example:
    'Загрузить пример собирает тон 5.00 с с двумя тихими паузами по 1.20 с (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Разделить по тишине при −40 dB / 1.0 s / 0.3 s мин. клип режет в 1.40 с и 3.40 с, поэтому три клипа 1.40 / 2.00 / 1.60 с. Скачать ZIP пишет WAV с именами sample-01.wav, если в дополнительных настройках не выбран MP3.',
  tool_split_a_recording_on_silence_example_title: 'Числовой пример',
  tool_split_a_recording_on_silence_faq_a1:
    'Нет. Декодирование, поиск пауз, резка и упаковка ZIP идут во вкладке. Скрипты с этого сайта. Файл на наши серверы не отправляется.',
  tool_split_a_recording_on_silence_faq_a2:
    'Это та же страница. Нарезать аудио по паузам, разрезать запись по тишине, разделить mp3 по тишине или скачать клипы ZIP значит: резать по длинным паузам и класть много файлов в один ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Другая задача. Убрать тишину из записи сжимает мёртвый воздух в один более короткий файл. Здесь паузы — точки реза, на выходе много клипов. Если ZIP не нужен, берите инструмент одного файла.',
  tool_split_a_recording_on_silence_faq_a4:
    'Нет. Нарезка равной длины (каждые N секунд) — другая работа. Разбор альбома по cue sheet тоже вне объёма. Режем только там, где тихий разрыв достаточно длинный.',
  tool_split_a_recording_on_silence_faq_a5:
    'Начните с Речь (−40 dB / 1.0 s / 0.3 s мин. клип). Лекции: Лекция (−40 dB / 2.0 s). Межтрековые паузы: Альбом (−45 dB / 1.5 s / 1.0 s мин. клип). Если вдохи становятся клипами, увеличьте минимальную тишину.',
  tool_split_a_recording_on_silence_faq_a6:
    'Внутри ZIP файлы {stem}-01.wav (или .mp3). Один клип можно скачать из списка. Потолок 50 клипов; сверх этого резка отклоняется.',
  tool_split_a_recording_on_silence_faq_a7:
    'Нет. Ни шумоподавление, ни вырезание э-э, ни mute видео, ни cue/APE, ни рип YouTube. Используйте звуковой файл, на который у вас есть права.',
  tool_split_a_recording_on_silence_faq_a8:
    'Компьютер: около 40 MB или 20 минут. Узкий экран: около 20 MB или 8 минут. Сверх лимита отказ до декодирования. Музыка с широкой динамикой может выглядеть как тишина — увеличьте минимальный разрыв или не используйте этот инструмент.',
  tool_split_a_recording_on_silence_faq_q1: 'Запись загружается на сервер?',
  tool_split_a_recording_on_silence_faq_q2: 'Я искал «нарезать аудио по паузам» или «скачать клипы ZIP». Это другой инструмент?',
  tool_split_a_recording_on_silence_faq_q3: 'Нужен один более короткий файл без мёртвого воздуха. Это удаление тишины?',
  tool_split_a_recording_on_silence_faq_q4: 'Режет на равные куски или по cue sheet?',
  tool_split_a_recording_on_silence_faq_q5: 'Какой порог брать? Режет ли по вдохам?',
  tool_split_a_recording_on_silence_faq_q6: 'Как называются файлы и сколько клипов можно получить?',
  tool_split_a_recording_on_silence_faq_q7: 'Умеет ли шумодав, резать видео, читать cue или рипать YouTube?',
  tool_split_a_recording_on_silence_faq_q8: 'Какой размер файла допустим? Что с тихой музыкой?',
  tool_split_a_recording_on_silence_format: 'Формат файлов в ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV — PCM без потерь. Кодировщик MP3 подгружается только по нажатию Скачать ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Найдите достаточно длинные тихие разрывы, режьте по середине каждого и скачайте ZIP клипов; файлы остаются на устройстве, без загрузки на сервер.',
  tool_split_a_recording_on_silence_how_item_1: 'Откройте запись (или нажмите Загрузить пример).',
  tool_split_a_recording_on_silence_how_item_2: 'Оставьте значения по умолчанию или откройте Дополнительные настройки (необязательно) для порога и минимальной тишины.',
  tool_split_a_recording_on_silence_how_item_3: 'Нажмите Разделить по тишине.',
  tool_split_a_recording_on_silence_how_item_4: 'Нажмите Скачать ZIP.',
  tool_split_a_recording_on_silence_how_title: 'Как пользоваться',
  tool_split_a_recording_on_silence_hud_decode: 'Декодирование файла во вкладке…',
  tool_split_a_recording_on_silence_hud_decoded: 'Декодировано. Красные метки — разрывы. Нажмите Разделить по тишине, если настройки подходят.',
  tool_split_a_recording_on_silence_hud_detect: 'Измерение тихих окон…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}с прошло',
  tool_split_a_recording_on_silence_hud_encode: 'Кодирование MP3-клипов…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Исправьте файл или настройки и снова Разделить по тишине.',
  tool_split_a_recording_on_silence_hud_fail_title: 'Разделить по тишине остановлено',
  tool_split_a_recording_on_silence_hud_next: 'Готово. Дальше: Скачать ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Готово. Скачивание ZIP должно начаться.',
  tool_split_a_recording_on_silence_hud_pack: 'Упаковка клипов в ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Резка по середине тишины…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Декод',
  tool_split_a_recording_on_silence_hud_step_detect: 'Поиск',
  tool_split_a_recording_on_silence_hud_step_pack: 'Упаковка',
  tool_split_a_recording_on_silence_hud_step_split: 'Резка',
  tool_split_a_recording_on_silence_hud_title: 'Ход: Разделить по тишине',
  tool_split_a_recording_on_silence_hud_working: 'Запуск…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}с · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Минимальный клип (секунды)',
  tool_split_a_recording_on_silence_min_clip_hint: 'По умолчанию 0.3 s. Более короткие куски после реза отбрасываются.',
  tool_split_a_recording_on_silence_min_silence: 'Минимальная тишина (секунды)',
  tool_split_a_recording_on_silence_min_silence_hint: 'По умолчанию 1.0 s, чтобы короткий вдох не стал точкой реза.',
  tool_split_a_recording_on_silence_pause: 'Пауза',
  tool_split_a_recording_on_silence_play: 'Играть',
  tool_split_a_recording_on_silence_preset_album: 'Альбом',
  tool_split_a_recording_on_silence_preset_hint: 'Речь — старт. Лекция ждёт более длинных пауз глав. Альбом рассчитан на разрывы между треками.',
  tool_split_a_recording_on_silence_preset_lecture: 'Лекция',
  tool_split_a_recording_on_silence_preset_speech: 'Речь',
  tool_split_a_recording_on_silence_preview_hint: 'Красные полосы — разрывы, достаточно длинные для реза. Играть — прослушивание текущего файла.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}с · нет достаточно длинной паузы, в ZIP был бы только этот файл. Уменьшите минимальную тишину или поднимите порог ближе к 0. Скачать ZIP готов.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}с · {gaps} разрыв(ов) → {count} клип(ов): {list}. Скачать ZIP готов.',
  tool_split_a_recording_on_silence_rules_body:
    'Примерно каждые 50 ms страница меряет RMS и переводит в dB: levelDb = 20 × log10(rms). Участок ниже порога длиной не меньше минимальной тишины режется по середине. Клипы короче минимума отбрасываются. WAV — 16-bit PCM. MP3 — CBR выбранного битрейта. ZIP собирается во вкладке.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Речь: −40 dB, 1.0 s мин. тишина, 0.3 s мин. клип. Лекция: −40 dB / 2.0 s / 0.5 s. Межтрековые паузы: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Лимит компьютера около 40 MB или 20 минут; узкий экран около 20 MB или 8 минут. Сверх лимита отказ, не обрезка. Больше 50 клипов — отказ.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Файлы остаются на устройстве; они не загружаются на сервер. JSZip и кодировщик MP3 подгружаются с этого сайта только после Скачать ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'Декодирование зависит от браузера. DRM, часть кодеков и видеоконтейнеры падают с явной ошибкой.',
  tool_split_a_recording_on_silence_rules_item_5:
    'Экспорт многих файлов в ZIP. Не сшивает один более короткий файл, не режет фиксированной длиной, не следует cue, не шумодав, не mute видео, не качает YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'Правила, на которые стоит рассчитывать',
  tool_split_a_recording_on_silence_sample: 'Загрузить пример',
  tool_split_a_recording_on_silence_split: 'Разделить по тишине',
  tool_split_a_recording_on_silence_status_done: 'Готово.',
  tool_split_a_recording_on_silence_threshold: 'Порог тишины (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'По умолчанию −40 dB. Ближе к 0 больше файла считается тишиной.',
  tool_split_a_recording_on_silence_title: 'Разделите запись по тишине',
  tool_split_a_recording_on_silence_usecase_1:
    'Лекция с паузами глав: каждая глава — свой файл в ZIP, без нарезки равной длины.',
  tool_split_a_recording_on_silence_usecase_2:
    'Интервью: ответы — отдельные клипы, которые можно подписать позже.',
  tool_split_a_recording_on_silence_usecase_3:
    'Микстейп с разрывами между треками без cue sheet: разрезать запись по тишине достаточно.',
  tool_split_a_recording_on_silence_usecases_title: 'Удачно подходит, если',
  tool_split_a_recording_on_silence_why_choose_body:
    'Сделано под ZIP клипов, резанных по середине паузы, с именованными профилями Речь / Лекция / Альбом на странице.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Режет по середине длинных тихих разрывов и кладёт много файлов в ZIP; не сшивает один более короткий файл.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Речь (−40 dB / 1.0 s / 0.3 s мин. клип) не кромсает вдохи; Лекция и Альбом названы на странице.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'Файл остаётся в этой вкладке браузера и не загружается на сервер; JSZip и lamejs подгружаются только по нажатию Скачать ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Слишком большие файлы и больше 50 клипов отклоняются до обрезанного ZIP — без обещания 1 GB, которое роняет вкладку.',
  tool_split_a_recording_on_silence_why_choose_title: 'Зачем пользоваться «Разделите запись по тишине» здесь',
};
export default ru;
