/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / ru).
 * H1 — задача; разделить flac cue / извлечь треки из cue в desc и FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Русские поисковые формулировки: разделить образ диска по cue-листу. */
const ru: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Дополнительные настройки (необязательно)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'В этой вкладке разделите образ диска по cue-листу: откройте образ и .cue, нажмите «Разделить на треки», затем «Скачать ZIP». Резы идут по INDEX 01 (75 кадров в секунду). Файлы остаются на устройстве и не уходят на сервер.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'Битрейт MP3',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: 'По умолчанию 128 кбит/с. Только если ZIP — MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Выберите образ диска и файл .cue',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Очистить',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Скачать трек',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Слушать трек',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'Cue-лист',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Режьте локальный образ по INDEX 01 и забирайте именные треки ZIP — на устройстве, без загрузки на сервер.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Разделите образ диска по cue-листу на устройстве: резы INDEX 01, именные треки в ZIP, файлы не отправляются. Шаги: откройте образ и .cue (лист можно вставить), «Разделить на треки», «Скачать ZIP». Пример: образец 6,00 с с INDEX 01 на 0 / 2 / 4 с даёт Intro / Middle / Outro по 2,00 с. Поиск «cue splitter», «разделить flac cue» или «извлечь треки из cue» — та же задача. Не нарезка по тишине, не равные куски, не главы YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'Скачать ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Перетащите оба файла: WAV, FLAC, MP3 или BIN плюс .cue. Обработка остаётся во вкладке.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Сначала добавьте образ и cue-лист.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Добавьте парный образ (WAV, FLAC, MP3 или BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'Добавьте .cue или вставьте cue-лист.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'Этот браузер не декодирует APE. Перекодируйте образ в WAV или FLAC, оставьте тот же cue и снова нажмите «Разделить на треки».',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'Образ больше лимита устройства (около 80 МБ / 30 мин на ПК, 30 МБ / 10 мин на узком экране). CD .bin на 700 МБ сюда не влезет.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'Этот текст нельзя разобрать как cue. Нужны строки TRACK и INDEX 01 в виде MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'Лист описывает диск данных (дорожки MODE), а не аудиообраз. Режутся только AUDIO.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'Браузер не смог декодировать образ. Попробуйте WAV или FLAC либо файл без DRM. APE здесь не декодируется.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'Нечего обрабатывать. Загрузите файлы или пример.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'Кодировщик MP3 не загрузился. Оставайтесь во вкладке и повторите «Скачать ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'В листе больше одной строки FILE. Это уже по файлу на трек — делить здесь нечего.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'Нет меток INDEX 01. Разбор cue требует стартов MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'Больше 50 треков. Страница не обрезает, а отказывает. Короткий лист или shnsplit на компьютере.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'Видео сюда не принимают. Страница режет аудиообраз по cue-листу.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'Библиотека ZIP не загрузилась. Оставайтесь во вкладке и повторите «Скачать ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Загрузить пример собирает образ 6,00 с (440 / 550 / 660 Гц по две секунды) и лист с INDEX 01 на 00:00:00, 00:02:00 и 00:04:00 (Intro Tone, Middle Tone, Outro Tone). «Разделить на треки» даёт три файла по 2,00 с. «Скачать ZIP» пишет 01 Intro Tone.wav, если в доп. настройках не выбран MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Пример',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'Нет. Разбор, декодирование, резка и ZIP идут во вкладке. Скрипты с этого сайта. Образ и лист на наши серверы не уходят.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Да. Cue splitter, разделить flac cue, split ape cue или извлечь треки из cue — этот инструмент: INDEX 01 и ZIP с именами. Поиск APE — та же задача, но .ape не декодируется: перегоните в WAV/FLAC и оставьте лист.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 — начало трека (MM:SS:FF, 75 кадров/с). INDEX 00 — pregap; показывается, рез по умолчанию на 01. Последний трек до конца образа.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'Нет. Резка по тишине и равной длительности — другие страницы. Здесь только cue-лист. Главы YouTube без FILE/INDEX не входят.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Вставьте текст под зоной файлов, если нет отдельного .cue. Перетаскивание .cue даёт тот же разбор.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'В ZIP имена {nn} {title}.wav (или .mp3). Один трек можно скачать из списка. Потолок 50; сверх — отказ.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'Нет. Ни шумодав, ни выключение звука видео, ни равные куски, ни ручная обрезка, ни YouTube, ни ISO данных. Берите аудиообраз, на который есть права.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'ПК: около 80 МБ или 30 минут. Узкий экран: около 30 МБ или 10 минут. CD .bin на 700 МБ отклоняется. Сверх лимита останавливается до декодирования.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'Загружаются ли образ диска и cue-лист?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: 'Я искал cue splitter или разделить flac cue. Это другой инструмент?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'Чем INDEX 01 отличается от INDEX 00?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: 'Режет по тишине, по длительности или по главам YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'Можно вставить cue-лист вместо файла .cue?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'Как называются файлы и сколько треков максимум?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'Декодировать APE, резать видео, равные части или качать YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'Какой размер образа можно обработать?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'Формат внутри ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV — PCM без потерь. Кодировщик MP3 грузится только по «Скачать ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'Прочитать INDEX 01 из cue-листа, разрезать образ диска там и скачать ZIP с именами треков, без загрузки на сервер.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Откройте образ диска и его .cue (или «Загрузить пример»).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'Или вставьте cue-лист, если есть только текст.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Нажмите «Разделить на треки».',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'Нажмите «Скачать ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'Как это работает',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'Декодируем образ во вкладке…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Лист разобран, образ декодирован. Белые метки — INDEX 01. Нажмите «Разделить на треки», если список верный.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: 'прошло {s} с',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'Кодируем треки MP3…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Исправьте лист или образ и снова «Разделить на треки».',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'Разбор cue остановлен',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Готово. Дальше: Скачать ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Готово. Скачивание ZIP должно начаться.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'Упаковываем треки в ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'Читаем cue-лист…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'Режем по INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Декод',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Упаковка',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Разбор',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Резка',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Ход разбора cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'Старт…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Образ диска',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}с · {rate} Гц · {ch} кан. · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Вставьте полный cue-лист (FILE, TRACK, INDEX 01). Не список глав YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'Или вставить cue-лист',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Пауза',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Играть',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'Белые метки — старты INDEX 01. Воспроизведение слушает весь образ.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}с · {count} трек(ов): {list}. Можно скачать ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'INDEX 01 — mm:ss:ff при 75 кадрах/с: t = mm×60 + ss + ff/75. Трек n идёт до следующего INDEX 01, последний — до конца. 16-бит PCM WAV/BIN режется по смещению байт. Остальные форматы — декодер браузера. ZIP собирается здесь.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'Рез — INDEX 01. INDEX 00 показывается как pregap, это не рез по умолчанию. Время — кадры CD, не миллисекунды.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Лимит ПК около 80 МБ или 30 минут; узкий экран около 30 МБ или 10 минут. Сверх — отказ, не обрезка. Больше 50 треков — отказ. .bin на 700 МБ не влезет.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Файлы остаются на устройстве, на сервер не уходят. JSZip и кодировщик MP3 грузятся с этого сайта только после «Скачать ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE и BINARY (.bin, сектора CDDA по 2352 байта) режутся без полного кодека. MP3/FLAC/M4A нужен декодер браузера. APE/TTA/WavPack падают с явным текстом.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'Один FILE плюс INDEX 01. Не тишина, не равная длительность, не главы YouTube, не размер, не mute видео, не YouTube. Несколько FILE уже разделены.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Правила, которые стоит ждать',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Загрузить пример',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Разделить на треки',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Готово.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Разделите образ диска по cue-листу',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}с ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Треки для ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Разобрать FLAC+CUE из Exact Audio Copy или XLD на именные треки без установки shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'Разрезать WAV- или BIN-образ стороны винила или CD вместе с cue и унести ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Достать треки из DJ-сета с cue-листом по INDEX 01, а не угадывая паузы.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Куда это ложится',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Сделано под резы INDEX 01 и ZIP с именами, честно про APE и слишком большие .bin.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Режет по INDEX 01 (75 кадр/с) и именует ZIP из TITLE, не равными секундами и не по тишине.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'Одна зона для образа и .cue, вставка того же листа — не редактор глав YouTube под видом cue.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'Файлы остаются во вкладке браузера и не загружаются; JSZip и lamejs — только по «Скачать ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE, листы с несколькими FILE и слишком большие образы отвергаются простым текстом, без обещания 700 МБ, которое уронит вкладку.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title: 'Почему пользоваться Разделите образ диска по cue-листу',
};
export default ru;
