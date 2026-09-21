import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const ru: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Убрать сетевой гул из записи",
  tool_remove_mains_hum_from_a_recording_desc:
    "Срежьте электрический гул 50 или 60 Гц notch-фильтрами и опциональными гармониками, затем скачайте 16-битный WAV. Только на устройстве.",
  tool_remove_mains_hum_from_a_recording_description:
    "Уберите сетевой гул из записи notch-фильтрами на 50 или 60 Гц и опциональными гармониками 2–5. Шаги: Убрать гул, прослушать, скачать WAV. Пример: загрузите гудящий образец. Узкие notch для электрического гула—не широкополосный denoise, не declick, не EQ глухого голоса. Аудио остаётся на устройстве; никогда не загружается на сервер.",
  tool_remove_mains_hum_from_a_recording_article: "Записи рядом с блоками питания, диммерами или плохо заземлённой техникой часто ловят устойчивый гул 50 или 60 Гц, иногда с гармониками. Эта страница цепочку EQ filter notch в on-device audio processing на выбранной основной частоте и, по желанию, на 2–5 гармониках ниже Найквиста. Цель—узкие электрические тона, а не широкополосный denoise шума вентилятора, не ремонт щелчков и не трёхполосный EQ глухого голоса. Бас рядом с notch может чуть похудеть. Число каналов остаётся 1 или 2. Сохраните оригинал; скачивание — новый 16-битный WAV. Работа идёт в браузере на вашем устройстве.",
  tool_remove_mains_hum_from_a_recording_choose: "Выберите аудиофайл",
  tool_remove_mains_hum_from_a_recording_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 МиБ и 10 минут; моно или стерео.",
  tool_remove_mains_hum_from_a_recording_convert: "Убрать гул",
  tool_remove_mains_hum_from_a_recording_download: "Скачать WAV",
  tool_remove_mains_hum_from_a_recording_sample: "Загрузить образец",
  tool_remove_mains_hum_from_a_recording_clear: "Очистить",
  tool_remove_mains_hum_from_a_recording_advanced: "Сетевая частота и гармоники",
  tool_remove_mains_hum_from_a_recording_hz_label: "Сетевая частота",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Гц",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Гц",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Гармоники",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Только основная",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Включить гармоники",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "По умолчанию 50 Гц с гармониками ставит notch на основную и 2–5 гармоники ниже Найквиста. Выберите 60 Гц для Северной Америки и похожих сетей. Только основная мягче к соседнему басу.",
  tool_remove_mains_hum_from_a_recording_progress: "Прогресс удаления гула",
  tool_remove_mains_hum_from_a_recording_read: "Чтение",
  tool_remove_mains_hum_from_a_recording_decode: "Декодирование",
  tool_remove_mains_hum_from_a_recording_dehum: "Убрать гул",
  tool_remove_mains_hum_from_a_recording_write: "Запись",
  tool_remove_mains_hum_from_a_recording_done: "Готово. Прослушайте WAV без гула и скачайте WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "Не удалось убрать гул. Попробуйте меньший корректный аудиофайл.",
  tool_remove_mains_hum_from_a_recording_elapsed: "прошло {s} с",
  tool_remove_mains_hum_from_a_recording_preview: "Прослушать WAV без гула",
  tool_remove_mains_hum_from_a_recording_result: "{seconds} с · {hz} Гц · {harmonics} · {notches} notch · WAV {output} КиБ",
  tool_remove_mains_hum_from_a_recording_sample_name: "демо-сетевой-гул-три-секунды",
  tool_remove_mains_hum_from_a_recording_empty: "Сначала выберите аудиофайл или загрузите образец.",
  tool_remove_mains_hum_from_a_recording_err_file: "Перетащите ровно один аудиофайл.",
  tool_remove_mains_hum_from_a_recording_err_format: "Неподдерживаемое или повреждённое аудио. Используйте файл, который браузер может декодировать (WAV, MP3, M4A, AAC или OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "Используйте файл не больше 40 МиБ или 10 минут, с одним или двумя каналами.",
  tool_remove_mains_hum_from_a_recording_err_decode: "Браузер не смог декодировать это аудио. Попробуйте другую корректную запись.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "Не удалось записать WAV без гула. Проверьте частоту и гармоники и снова нажмите Убрать гул.",
  tool_remove_mains_hum_from_a_recording_err_silence: "Уровень почти тишина—нечего чистить. Попробуйте запись со слышимым уровнем.",
  tool_remove_mains_hum_from_a_recording_how_title: "Как убрать сетевой гул из записи",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Выберите 50 или 60 Гц, решите про гармоники, запустите notch, прослушайте и скачайте 16-битный WAV—без загрузки файла.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "Выберите аудиофайл или Загрузить образец для трёхсекундной демонстрации с гулом.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "Откройте Сетевая частота и гармоники: выберите 50 или 60 Гц, затем Только основная или Включить гармоники.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "Нажмите Убрать гул и дождитесь Чтение → Декодирование → Убрать гул → Запись.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "Прослушайте более тихий электрический фон, проверьте строку результата и скачайте WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Почему выбрать наши инструменты Убрать сетевой гул из записи",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "Перед сохранением видно Гц сети, режим гармоник, число notch и КиБ выхода.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "Одна ясная задача dehum—notch 50/60 Гц с опциональными гармониками, а не спрятанный DAW-рэк.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "Декодирование, notch-фильтрация и запись WAV идут на устройстве; страница не загружает запись на сервер.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "Смена частоты, гармоник или входа очищает старую загрузку, чтобы вы не сохранили устаревший WAV.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Частота notch, гармоники и честные пределы браузера",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Каждый проход цепочку узких notch на выбранной основной и, если включено, гармониках 2–5 ниже Найквиста. Настоящие сетевые тона улучшаются сильнее всего; широкополосный шум нужно denoising в другом месте. Мягкая защита пиков держит WAV ниже полной шкалы.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Гц или 60 Гц задают основную. Включить гармоники добавляет notch на 2×–5× ниже Найквиста. По умолчанию: 50 Гц с гармониками.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "Это браузерная цепочка notch. Не широкополосный denoise, не ремонт щелчков и не EQ глухого голоса.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "Экспорт сохраняет 1 или 2 канала. Теги не копируются. Исходный файл никогда не перезаписывается.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "Один файл до 40 МиБ и десяти минут. Бас рядом с notch может похудеть; если звучит пусто, попробуйте Только основная.",
  tool_remove_mains_hum_from_a_recording_example_title: "Попробуйте реальный гудящий клип",
  tool_remove_mains_hum_from_a_recording_example:
    "Загрузить образец строит трёхсекундный речь-подобный тон под гулом 50 Гц плюс гармоники, затем автоматически Убрать гул на 50 Гц с гармониками. Воспроизведение само не стартует—нажмите play в превью, если хотите услышать более тихий фон.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "Когда это помогает",
  tool_remove_mains_hum_from_a_recording_usecase_1: "Голосовая заметка с устойчивым электрическим жужжанием от зарядки или диммера—выберите Гц сети, Убрать гул, скачайте WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "Полевая запись, где нужно убрать сетевой тон до широкополосного denoise шипения или EQ глухой речи в другом месте.",
  tool_remove_mains_hum_from_a_recording_usecase_3: "Слышен 50/60 Гц сетевой гул под дублем.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "Это то же, что снизить фоновый шум в голосовой заметке?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "Нет. Та страница делает high-pass и гейт для устойчивого шипения вентилятора или кондиционера. Эта страница ставит notch на узкие электрические тона 50/60 Гц. Для широкополосного шипения используйте Снизить фоновый шум в голосовой заметке.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "Убирает ли это щелчки и щелчки рта?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "Нет. Щелчки, ротовые щелчки и треск винила требуют задачи declick. Эта страница ставит notch только на сетевую основную и опциональные гармоники.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "Это то же, что EQ a muffled voice recording?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "Нет. Та страница меняет тембр пресетами Clarity, Warmth или Presence. Эта страница убирает электрический гул. Для глухого тона после dehum используйте EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "Выбрать 50 Гц или 60 Гц?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Совпадайте с электросетью. Большая часть Европы, Азии, Африки и Австралии использует 50 Гц. Северная Америка и части Японии и Южной Америки — 60 Гц. Неверные Гц почти не трогают гул.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "Что делает Включить гармоники?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "Добавляет notch на двукратную–пятикратную основную, если эти частоты ниже Найквиста. У гула часто есть гармоники; Только основная мягче к соседнему басу.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "Загружается ли аудио на сервер?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "Нет. Декодирование, notch-фильтрация и запись WAV идут в браузере на устройстве. Странице нужна сеть при первой загрузке; офлайн не гарантируется. Для широкополосного шипения используйте Снизить фоновый шум в голосовой заметке; для глухого тона — EQ a muffled voice recording.",
};
export default ru;
