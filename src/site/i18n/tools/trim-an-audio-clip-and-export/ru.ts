/**
 * i18n tool shard (trim-an-audio-clip-and-export / ru).
 * H1: Обрежьте аудиофрагмент и экспортируйте. Онлайн-редактор не в H1.
 */
import type { SiteLangDict } from '../../../types';

/** Русские строки: обрезать фрагмент и экспортировать. */
const ru: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Дополнительно (по желанию)',
  tool_trim_an_audio_clip_and_export_article:
    'Откройте звуковой файл на устройстве, задайте Начало и Конец, нажмите Обрезать, затем Экспорт WAV или Экспорт MP3. Файл остаётся на устройстве, без загрузки на сервер. Это один срез, не студия волны.',
  tool_trim_an_audio_clip_and_export_bitrate: 'Битрейт MP3',
  tool_trim_an_audio_clip_and_export_bitrate_hint: 'По умолчанию 128 kbps. Нужен только при Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Выберите аудиофайл',
  tool_trim_an_audio_clip_and_export_clear: 'Очистить',
  tool_trim_an_audio_clip_and_export_desc:
    'Обрежьте аудио или фрагмент между началом и концом, экспортируйте WAV или MP3. Остаётся на устройстве, без загрузки на сервер.',
  tool_trim_an_audio_clip_and_export_description:
    'Обрежьте аудио на устройстве: задайте Начало и Конец и скачайте WAV или MP3, без загрузки на сервер. Шаги: откройте файл, кликните или протяните по волне (или введите Начало и Конец), Обрезать, Экспорт WAV или Экспорт MP3. Пример: из тона 5 с оставьте 1,00–3,00 с как WAV (или MP3 128 kbps). Обрезать mp3, обрезать аудио, вырезать фрагмент, обрезать песню или аудио триммер — это тот же экспорт. Это не полноценный звуковой редактор; видео как основной ввод не принимаем.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'Или перетащите сюда WAV, MP3, M4A или OGG. Обработка остаётся во вкладке.',
  tool_trim_an_audio_clip_and_export_empty: 'Сначала выберите аудиофайл.',
  tool_trim_an_audio_clip_and_export_end: 'Конец (секунды)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'Файл больше лимита этого устройства (около 40 МБ / 20 мин на компьютере, 20 МБ / 8 мин на узком экране). Обрежьте его в другом месте или возьмите короче.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'Этот браузер не смог декодировать файл. Попробуйте WAV или MP3 либо клип без DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'Нечего обрезать. Сначала загрузите файл или пример.',
  tool_trim_an_audio_clip_and_export_err_lame: 'Кодировщик MP3 не загрузился. Оставайтесь во вкладке и снова нажмите Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_err_range: 'Конец должен быть позже Начала и внутри декодированной длительности.',
  tool_trim_an_audio_clip_and_export_err_video:
    'Эта страница не принимает видео как основной ввод. Сначала извлеките звук, потом обрежьте его.',
  tool_trim_an_audio_clip_and_export_example:
    '«Загрузить пример» создаёт в памяти тон на 5,00 с, ставит Начало 1,00 и Конец 3,00, затем Обрезать оставляет около 2,00 с. Экспорт WAV пишет PCM; Экспорт MP3 — 128 kbps, если не меняли дополнительно.',
  tool_trim_an_audio_clip_and_export_example_title: 'Пример',
  tool_trim_an_audio_clip_and_export_export_mp3: 'Экспорт MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'Экспорт WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'Нет. Декодирование и срез идут во вкладке. Скрипты грузятся с этого сайта. Файл на наши серверы не уходит.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'Нет. Обрезать mp3, обрезать аудио, вырезать фрагмент, обрезать песню или аудио триммер — это этот инструмент: оставить Начало–Конец, затем Экспорт WAV или Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'По умолчанию срез притягивается к ближайшему нулевому пересечению, чтобы стык реже щёлкал. Можно выключить в «Дополнительно».',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV хранит срезанный PCM. MP3 меньше (по умолчанию 128 kbps); кодировщик грузится только по Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'Нет. Здесь только обрезка начала и конца и экспорт. Полноценный онлайн-редактор / волновая станция — отдельный инструмент позже.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'Можно оставить около 30 с, но M4A и автозатухание мы не пишем. Спецификация рингтона — другая работа.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'Нет. Вытаскивать звук из видео и с YouTube мы не делаем. Используйте звуковой файл, который вам уже можно обрабатывать.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Компьютер: около 40 МБ или 20 минут. Узкий экран: около 20 МБ или 8 минут. Сверх лимита отказ, без тихого усечения.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'Аудио загружается на сервер?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'Я искал «обрезать mp3», «обрезать аудио» или «вырезать фрагмент». Это другой инструмент?',
  tool_trim_an_audio_clip_and_export_faq_q3: 'Почему срез чуть сдвигается? На других сайтах слышен щелчок.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'Экспортировать WAV или MP3?',
  tool_trim_an_audio_clip_and_export_faq_q5: 'Это онлайн звуковой редактор?',
  tool_trim_an_audio_clip_and_export_faq_q6: 'Можно сделать рингтон M4A для iPhone?',
  tool_trim_an_audio_clip_and_export_faq_q7: 'Можно вытащить звук из видео или YouTube?',
  tool_trim_an_audio_clip_and_export_faq_q8: 'Какого размера файл можно обрезать?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Оставьте только часть между Началом и Концом и скачайте WAV или MP3 без загрузки файла на сервер.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Откройте аудиофайл (или нажмите Загрузить пример).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Кликните или протяните по волне (или введите Начало и Конец), чтобы отметить фрагмент.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Нажмите Обрезать.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Нажмите Экспорт WAV или Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'Как это работает',
  tool_trim_an_audio_clip_and_export_hud_decode: 'Декодируем файл во вкладке…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Декодировано. Задайте Начало и Конец, затем Обрезать.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: 'прошло {s} с',
  tool_trim_an_audio_clip_and_export_hud_encode: 'Кодируем MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Исправьте файл или время и снова Обрезать.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Обрезка остановлена',
  tool_trim_an_audio_clip_and_export_hud_next: 'Готово. Дальше: Экспорт WAV или Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Готово. Скачивание MP3 должно начаться.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Декод',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Код',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Обрезка',
  tool_trim_an_audio_clip_and_export_hud_title: 'Ход обрезки',
  tool_trim_an_audio_clip_and_export_hud_trim: 'Режем диапазон начало–конец…',
  tool_trim_an_audio_clip_and_export_hud_working: 'Старт…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}с · {rate} Hz · {ch} кан.',
  tool_trim_an_audio_clip_and_export_pause: 'Пауза',
  tool_trim_an_audio_clip_and_export_play: 'Играть',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Кликните или протяните по волне, чтобы задать Начало и Конец. Играть слушает этот диапазон.',
  tool_trim_an_audio_clip_and_export_result_tpl: 'Оставлено {dur}с ({start}–{end}с). Можно экспортировать.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'Сэмплы между Началом и Концом копируются в новый буфер. По умолчанию края тянутся к ближайшему нулевому пересечению. WAV пишет 16-bit PCM. MP3 — CBR выбранного битрейта.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'На компьютере лимит около 40 МБ или 20 минут; на узком экране около 20 МБ или 8 минут. Сверх лимита отказ, без тихого усечения.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'Файлы остаются на устройстве, без загрузки на сервер. Кодировщик MP3 грузится с этого сайта только после Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'Декодирование зависит от браузера. DRM, часть кодеков и видеоконтейнеры падают с явной ошибкой.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'Нет сведения дорожек, фейдов, записи M4A и YouTube. Один файл, один диапазон, один экспорт.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Какие правила ждать',
  tool_trim_an_audio_clip_and_export_sample: 'Загрузить пример',
  tool_trim_an_audio_clip_and_export_start: 'Начало (секунды)',
  tool_trim_an_audio_clip_and_export_status_done: 'Готово.',
  tool_trim_an_audio_clip_and_export_title: 'Обрежьте аудиофрагмент и экспортируйте',
  tool_trim_an_audio_clip_and_export_trim: 'Обрезать',
  tool_trim_an_audio_clip_and_export_usecase_1: 'Обрежьте аудио подкаста: отрежьте 8-секундную заставку, экспортируйте MP3 в чат.',
  tool_trim_an_audio_clip_and_export_usecase_2: 'Оставьте 12 с цитаты с совещания и скачайте WAV в архив.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'Срежьте тишину с обоих концов голосовой заметки — тот же рез, что обрезать mp3 или вырезать фрагмент.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Куда это подходит',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Сделано под один срез и одну загрузку: лимиты и антищелчок можно проверить на странице.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Декод и срез остаются во вкладке; скрипт кодировщика появляется при Экспорт MP3.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Слишком большой или длинный файл отклоняется, а не тихо обрезается.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'Притяжение к нулю включено по умолчанию, чтобы стык реже щёлкал; можно выключить.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV и MP3 — отдельные кнопки экспорта, как в шагах; битрейт только в дополнительно.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Почему выбрать наши инструменты Обрежьте аудиофрагмент и экспортируйте',
  tool_trim_an_audio_clip_and_export_zerocross: 'Притянуть Начало и Конец к ближайшему нулевому пересечению',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'Включено по умолчанию. Меньше щелчков на стыке. Выключите для точного края по сэмплу.',
};
export default ru;
