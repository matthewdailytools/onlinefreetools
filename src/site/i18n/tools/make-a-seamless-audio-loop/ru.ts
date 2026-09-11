/**
 * i18n tool shard (make-a-seamless-audio-loop / ru).
 * H1: бесшовный цикл аудио; луп / кроссфейд в FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Русский: сделать бесшовный цикл аудио и выгрузить. */
const ru: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Дополнительные настройки (по желанию)',
  tool_make_a_seamless_audio_loop_article:
    'Сделайте бесшовный цикл аудио на этой вкладке: откройте локальный файл, отметьте Начало и Конец, задайте кроссфейд, нажмите Сделать цикл, затем Экспорт WAV или Экспорт MP3. Хвост вплетается в начало, стык меньше щёлкает. Файл остаётся на устройстве и не загружается на сервер.',
  tool_make_a_seamless_audio_loop_bitrate: 'Битрейт MP3',
  tool_make_a_seamless_audio_loop_bitrate_hint: 'По умолчанию 128 кбит/с. Нужен только при нажатии Экспорт MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'Выберите аудиофайл',
  tool_make_a_seamless_audio_loop_clear: 'Очистить',
  tool_make_a_seamless_audio_loop_crossfade: 'Кроссфейд (мс)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    'По умолчанию 50 мс. 20 мс для ударных; 200–500 мс для пэдов, дронов и эмбиента.',
  tool_make_a_seamless_audio_loop_desc:
    'Сделайте бесшовный цикл аудио на устройстве: смешайте конец локального клипа с началом и выгрузите WAV или MP3 — без загрузки на сервер.',
  tool_make_a_seamless_audio_loop_description:
    'Сделайте бесшовный цикл аудио на устройстве: кроссфейд конца локального клипа в его начало, затем скачайте WAV или MP3 — файл не загружается на сервер. Шаги: открыть файл, отметить Начало и Конец, задать кроссфейд (50 мс), Сделать цикл, Играть чтобы услышать стык, Экспорт WAV или Экспорт MP3. Пример: 1,00–3,00 с пятисекундного тона с 50 мс equal-power дают около 1,95 с. Зациклить аудио, аудио луп, бесшовный луп или кроссфейд — та же задача. Это не волновой редактор; не сводит две разные песни и не качает YouTube.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'У вас должно быть право обрабатывать файл. Страница не выдаёт музыкальные лицензии и не снимает потоки.',
  tool_make_a_seamless_audio_loop_drop_hint: 'Или перетащите сюда WAV, MP3, M4A или OGG. Обработка остаётся на этой вкладке.',
  tool_make_a_seamless_audio_loop_empty: 'Сначала выберите аудиофайл.',
  tool_make_a_seamless_audio_loop_end: 'Конец (секунды)',
  tool_make_a_seamless_audio_loop_equal_power: 'Кроссфейд равной мощности',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'Включён по умолчанию, чтобы стык не проседал по громкости. Выключите для линейного смешения.',
  tool_make_a_seamless_audio_loop_err_bake:
    'Склеенный файл получится длиннее примерно 3 минут. Уменьшите Повторы или укоротите фрагмент.',
  tool_make_a_seamless_audio_loop_err_caps:
    'Файл больше лимита этого устройства (около 40 МБ / 20 мин на компьютере, 20 МБ / 8 мин на узком экране). Сначала укоротите его или возьмите более короткий файл.',
  tool_make_a_seamless_audio_loop_err_decode:
    'Этот браузер не смог декодировать файл. Попробуйте WAV или MP3 либо клип без DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'Нечего зацикливать. Загрузите файл или пример.',
  tool_make_a_seamless_audio_loop_err_fade:
    'Кроссфейд должен быть короче фрагмента. Уменьшите миллисекунды или растяните Начало–Конец.',
  tool_make_a_seamless_audio_loop_err_lame:
    'Кодировщик MP3 не загрузился. Оставайтесь на вкладке и снова нажмите Экспорт MP3.',
  tool_make_a_seamless_audio_loop_err_range: 'Конец должен быть позже Начала, внутри декодированной длительности.',
  tool_make_a_seamless_audio_loop_err_video:
    'Страница не принимает видео как основной ввод. Сначала извлеките звук, потом сделайте цикл.',
  tool_make_a_seamless_audio_loop_example:
    '«Пример» строит тон 5,00 с, ставит Начало 1,00 и Конец 3,00, берёт 50 мс equal-power, затем Сделать цикл даёт около 1,95 с (один круг). Экспорт WAV пишет PCM; Экспорт MP3 — 128 кбит/с, если не меняли дополнительные настройки.',
  tool_make_a_seamless_audio_loop_example_title: 'Пример',
  tool_make_a_seamless_audio_loop_export_mp3: 'Экспорт MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'Экспорт WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'Нет. Декодирование и обёртка идут на этой вкладке. Скрипты с этого сайта. Файл не отправляется на наши серверы.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'Нет. Зациклить аудио, аудио луп, бесшовный луп, луп-мейкер или кроссфейд — это этот инструмент: отметить фрагмент, сгладить стык, выгрузить WAV или MP3.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'Кроссфейд смешивает хвост фрагмента с его началом. По умолчанию 50 мс equal-power. Около 20 мс для ударных; 200–500 мс для пэдов.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'Выгруженный круг короче Начало–Конец ровно на длину кроссфейда: перекрытие смешивается один раз.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV для движка игры, который сам крутит файл. MP3 меньше (128 кбит/с), если стрим-программа не умеет loop; кодировщик грузится только по Экспорт MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Повторы по умолчанию 1. В дополнительных настройках можно склеить 4 или 8 копий. Дольше примерно 3 минут отвергаем. Это не генератор на 10 часов.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'Не сводит две разные песни, не полноценный онлайн-редактор, не пишет рингтон M4A, не ищет точку лупа сам и не качает YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Компьютер: около 40 МБ или 20 минут. Узкий экран: около 20 МБ или 8 минут. Сверх лимита отказ, без тихой обрезки.',
  tool_make_a_seamless_audio_loop_faq_q1: 'Загружается ли аудио на сервер?',
  tool_make_a_seamless_audio_loop_faq_q2: 'Я искал «зациклить аудио», «аудио луп» или «луп-мейкер». Это другой инструмент?',
  tool_make_a_seamless_audio_loop_faq_q3: 'Как кроссфейд убирает щелчок на стыке?',
  tool_make_a_seamless_audio_loop_faq_q4: 'Почему выгрузка короче отмеченного фрагмента?',
  tool_make_a_seamless_audio_loop_faq_q5: 'Для игры WAV, для стрима MP3?',
  tool_make_a_seamless_audio_loop_faq_q6: 'Стрим-программа не крутит файл. Можно склеить несколько кругов?',
  tool_make_a_seamless_audio_loop_faq_q7: 'Это сведение двух треков, рингтон или ИИ-поиск лупа?',
  tool_make_a_seamless_audio_loop_faq_q8: 'Какого размера файл можно обработать?',
  tool_make_a_seamless_audio_loop_how_body:
    'Отметьте фрагмент для повтора, смешайте конец с началом кроссфейдом и скачайте WAV или MP3 без загрузки файла на сервер.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Откройте аудиофайл (или нажмите Пример).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Щёлкните или протяните по волне (или введите Начало и Конец). Смените кроссфейд, если 50 мс не подходят (20 / 50 / 200 / 500 мс).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Нажмите Сделать цикл.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Нажмите Играть, чтобы услышать стык, затем Экспорт WAV или Экспорт MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'Как это работает',
  tool_make_a_seamless_audio_loop_hud_decode: 'Декодируем файл на этой вкладке…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Готово. Задайте Начало, Конец и кроссфейд, затем Сделать цикл.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: 'прошло {s} с',
  tool_make_a_seamless_audio_loop_hud_encode: 'Кодируем MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Исправьте файл, время или кроссфейд и снова Сделать цикл.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Сделать цикл остановлен',
  tool_make_a_seamless_audio_loop_hud_loop: 'Вплетаем хвост в начало…',
  tool_make_a_seamless_audio_loop_hud_next: 'Готово. Дальше: Играть стык, затем Экспорт WAV или Экспорт MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Готово. Загрузка MP3 должна начаться.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Декод',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Код',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Цикл',
  tool_make_a_seamless_audio_loop_hud_title: 'Ход цикла',
  tool_make_a_seamless_audio_loop_hud_working: 'Старт…',
  tool_make_a_seamless_audio_loop_make: 'Сделать цикл',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}с · {rate} Гц · {ch} кан.',
  tool_make_a_seamless_audio_loop_pause: 'Пауза',
  tool_make_a_seamless_audio_loop_play: 'Играть',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Щёлкните или протяните волну, чтобы задать Начало и Конец. После Сделать цикл кнопка Играть повторяет результат, чтобы услышать стык.',
  tool_make_a_seamless_audio_loop_repeats: 'Повторы (склеенные копии)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    'По умолчанию 1 круг, если плеер умеет loop. 4 или 8, если нет. Дольше примерно 3 минут отвергаем.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'Цикл {dur} с ({start}–{end} с, кроссфейд {fade} мс, {n} повтор(ов)). Можно выгружать.',
  tool_make_a_seamless_audio_loop_rules_body:
    'Фрагмент копируется, затем equal-power (или линейно) смешивает последние сэмплы фейда с первыми. Длина выхода = фрагмент минус фейд. Повторы клеят этот круг. WAV — 16-бит PCM. MP3 — CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Лимит компьютера около 40 МБ или 20 минут; узкий экран около 20 МБ или 8 минут. Сверх — отказ, не обрезка.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'Файлы остаются на устройстве; они не загружаются на сервер. Кодировщик MP3 грузится с этого сайта только после Экспорт MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'Кроссфейд короче фрагмента. Выгруженный круг короче ровно на это перекрытие. Кривая по умолчанию — equal-power.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'Декодирование зависит от браузера. DRM, часть кодеков и видеоконтейнеры падают с явной ошибкой.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'Не сводит две песни, не пишет M4A, не меряет BPM, не ищет точку лупа и не качает YouTube. Один файл, один фрагмент, один цикл.',
  tool_make_a_seamless_audio_loop_rules_title: 'Правила, которых ждать',
  tool_make_a_seamless_audio_loop_sample: 'Пример',
  tool_make_a_seamless_audio_loop_start: 'Начало (секунды)',
  tool_make_a_seamless_audio_loop_status_done: 'Готово.',
  tool_make_a_seamless_audio_loop_title: 'Сделать бесшовный цикл аудио',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Сделать из двухсекундной игровой подложки бесшовный цикл аудио и выгрузить WAV для движка, который крутит файл.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Подложка для стрима: отметить грув, оставить 50 мс кроссфейда, в доп. настройках склеить 8 кругов, выгрузить MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Сгладить эмбиент или дрон кроссфейдом 200–500 мс, чтобы стык пропал.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Когда это уместно',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Сделано под одну обёртку и одну выгрузку: фейд можно услышать, лимиты написаны на странице.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'Декод и обёртка остаются на вкладке; Экспорт MP3 — первый момент загрузки кодировщика.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'Equal-power кроссфейд включён по умолчанию; чипы 20 / 50 / 200 / 500 мс закрывают ударные и пэды.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'После Сделать цикл кнопка Играть крутит результат, чтобы оценить стык до скачивания.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Слишком большие файлы и склейка длиннее примерно 3 минут отвергаются, а не тихо обрезаются.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Зачем пользоваться Сделать бесшовный цикл аудио',
  tool_make_a_seamless_audio_loop_zerocross: 'Притянуть Начало и Конец к ближайшему нулевому пересечению',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'Включено по умолчанию. Стабилизирует края до обёртки. Выключите, если нужны края по сэмплам.',
};
export default ru;
