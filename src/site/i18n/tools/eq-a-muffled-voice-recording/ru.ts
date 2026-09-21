import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for eq-a-muffled-voice-recording (S20).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ только бас / шумоподавление / деэссер.
 */
const ru: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "Эквалайзер для глухой голосовой записи",
  tool_eq_a_muffled_voice_recording_desc:
    "Откройте глухой голос пресетами Clarity, Warmth или Presence (три полосы) и скачайте 16-bit WAV. Только на устройстве.",
  tool_eq_a_muffled_voice_recording_description:
    "Эквалайзер для глухой голосовой записи с трёхполосными пресетами Clarity, Warmth или Presence. Шаги: EQ, прослушивание, скачать WAV. Пример: загрузите глухой образец. Только тональная коррекция—не буст одного баса, не шумоподавление, не деэссер. Аудио остаётся на устройстве; никогда не загружается.",
  tool_eq_a_muffled_voice_recording_article: "Звонки, маски и удалённые микрофоны часто звучат глухо: слишком много грязи ниже нескольких сотен герц и мало ясности в речевом диапазоне. Эта страница запускает три ступени EQ filter в on-device audio processing—lowshelf, peaking и highshelf—как именованные пресеты. Clarity срезает грязь и поднимает присутствие речи; Warmth добавляет тело и смягчает резкий верх; Presence фокусирует средне-высокое присутствие и воздух. Это тональный EQ для глухого голоса, не однополосный бас-бустер, не подавление фона и не деэссер только для сибилянтов. Каналы 1 или 2. Сохраните оригинал; загрузка — новый 16-bit WAV. Работа идёт в браузере на вашем устройстве.",
  tool_eq_a_muffled_voice_recording_choose: "Выберите аудиофайл",
  tool_eq_a_muffled_voice_recording_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 МиБ и 10 минут; моно или стерео.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "Скачать WAV",
  tool_eq_a_muffled_voice_recording_sample: "Загрузить образец",
  tool_eq_a_muffled_voice_recording_clear: "Очистить",
  tool_eq_a_muffled_voice_recording_advanced: "Пресеты EQ",
  tool_eq_a_muffled_voice_recording_preset_label: "Пресет голосового EQ",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Clarity по умолчанию срезает грязь и открывает речь. Warmth добавляет тело с мягким верхом. Presence поднимает средне-высокое присутствие и воздух. Мягкая защита пиков предотвращает клиппинг после бустов.",
  tool_eq_a_muffled_voice_recording_progress: "Прогресс EQ",
  tool_eq_a_muffled_voice_recording_read: "Чтение",
  tool_eq_a_muffled_voice_recording_decode: "Декодирование",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Запись",
  tool_eq_a_muffled_voice_recording_done: "Готово. Прослушайте EQ’d WAV, затем Скачать WAV.",
  tool_eq_a_muffled_voice_recording_failed: "EQ не удался. Попробуйте меньший допустимый аудиофайл.",
  tool_eq_a_muffled_voice_recording_elapsed: "прошло {s} с",
  tool_eq_a_muffled_voice_recording_preview: "Прослушать EQ’d WAV",
  tool_eq_a_muffled_voice_recording_result: "{seconds} с · {preset} · пик {peakBefore} → {peakAfter} · WAV {output} КиБ",
  tool_eq_a_muffled_voice_recording_sample_name: "двухсекундный-глухой-голос-демо",
  tool_eq_a_muffled_voice_recording_empty: "Сначала выберите аудиофайл или загрузите образец.",
  tool_eq_a_muffled_voice_recording_err_file: "Перетащите ровно один аудиофайл.",
  tool_eq_a_muffled_voice_recording_err_format: "Неподдерживаемое или повреждённое аудио. Используйте файл, который браузер может декодировать (WAV, MP3, M4A, AAC или OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Файл не больше 40 МиБ или 10 минут, с одним или двумя каналами.",
  tool_eq_a_muffled_voice_recording_err_decode: "Браузер не смог декодировать это аудио. Попробуйте другую допустимую запись.",
  tool_eq_a_muffled_voice_recording_err_encoder: "Не удалось записать EQ’d WAV. Проверьте пресет и повторите EQ.",
  tool_eq_a_muffled_voice_recording_err_silence: "Уровень почти тишина—нечего эквалайзить. Попробуйте запись со слышимым уровнем.",
  tool_eq_a_muffled_voice_recording_how_title: "Как применить эквалайзер к глухой голосовой записи",
  tool_eq_a_muffled_voice_recording_how_body:
    "Выберите трёхполосный пресет, измените тон, послушайте и скачайте 16-bit WAV—без загрузки файла.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Выберите аудиофайл или Загрузить образец для двухсекундной глухой демонстрации.",
  tool_eq_a_muffled_voice_recording_how_item_2: "Откройте Пресеты EQ и выберите Clarity (по умолчанию), Warmth или Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "Нажмите EQ и дождитесь Чтение → Декодирование → EQ → Запись.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Прослушайте результат, проверьте пресет и пики, затем Скачать WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Почему выбрать наши инструменты Эквалайзер для глухой голосовой записи",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "Видьте имя пресета, пик до/после и КиБ выхода перед сохранением.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Три ясных голосовых пресета—одна задача глухого EQ, не игрушка из десяти полос и не только бас.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "Декодирование, EQ EQ и запись WAV идут на устройстве; страница не загружает запись для обработки.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Смена пресета или входа очищает старую загрузку, чтобы не сохранить устаревший WAV.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence и пределы",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Каждый пресет — три ступени EQ (lowshelf, peaking, highshelf). Clarity открывает глухую речь; Warmth добавляет тело; Presence поднимает присутствие и воздух. Мягкая защита пиков масштабирует результат, если бусты клипповали бы.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Clarity по умолчанию срезает грязный низ и поднимает ясность речи. Warmth поднимает низкое тело и смягчает резкий верх. Presence фокусирует средне-высокое присутствие.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "Только тональный EQ. Не убирает шум вентилятора, не бустит только бас и не целится в сибилянты как деэссер.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "Экспорт сохраняет 1 или 2 канала. Теги не копируются. Оригинал никогда не перезаписывается.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "Один файл до 40 МиБ и десяти минут. Мягкая защита пиков может снизить общий уровень после сильных бустов, чтобы WAV оставался ниже цифровой полной шкалы.",
  tool_eq_a_muffled_voice_recording_example_title: "Попробуйте реальный EQ глухого голоса",
  tool_eq_a_muffled_voice_recording_example:
    "Загрузить образец строит двухсекундный тусклый тон с сильным низом и слабым верхом, затем автоматически EQ с Clarity. Воспроизведение не стартует само—нажмите play в превью, если хотите услышать более ясный результат.",
  tool_eq_a_muffled_voice_recording_usecases_title: "Когда это помогает",
  tool_eq_a_muffled_voice_recording_usecase_1: "Телефонный или масочный тейк звучит «в коробке»—выберите Clarity, EQ, скачайте WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "Подкаст-голос нуждается в более тёплом теле или большем присутствии без полного DAW EQ.",
  tool_eq_a_muffled_voice_recording_usecase_3: "Далёкая/масочная запись глухая — нужна ясность речи.",
  tool_eq_a_muffled_voice_recording_faq_q1: "Это то же, что бас-бустер?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "Нет. Бас-бустер в основном поднимает низкие частоты. Эта страница даёт три многополосных голосовых пресета для глухой речи. Буст только баса — другая задача (Boost bass on an MP3, когда доступен).",
  tool_eq_a_muffled_voice_recording_faq_q2: "Убирает ли это фоновый шум?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "Нет. EQ меняет тон; не подавляет вентиляторы, шипение или шум комнаты. Для denoise используйте отдельный инструмент шумоподавления, когда доступен.",
  tool_eq_a_muffled_voice_recording_faq_q3: "Это деэссер?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "Нет. Деэссер целится в жёсткие сибилянты (S/Ш). Эти пресеты формируют общий глухой тон по низу, середине и верху. Используйте деэссер, когда доступен.",
  tool_eq_a_muffled_voice_recording_faq_q4: "Что делают Clarity, Warmth и Presence?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity срезает грязь и открывает речь. Warmth добавляет низкое тело и смягчает резкий верх. Presence поднимает средне-высокое присутствие и воздух. Мягкая защита пиков предотвращает клиппинг после бустов.",
  tool_eq_a_muffled_voice_recording_faq_q5: "Что если EQ сделает файл горячее?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "После цепочки фильтров мягкая защита пиков масштабирует буфер, если пики превысили бы около −0,2 dBFS, чтобы WAV оставался безопасным. Для отдельного лимитирования пиков используйте Ограничить пики, чтобы файл не клипповал.",
  tool_eq_a_muffled_voice_recording_faq_q6: "Загружается ли моё аудио на сервер?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "Нет. Декодирование, EQ и запись WAV идут в браузере на вашем устройстве. Странице нужна сеть при первой загрузке; офлайн не гарантируется. Для динамики после EQ используйте Сжать динамический диапазон голосовой записи или Ограничить пики, чтобы файл не клипповал.",
};
export default ru;
