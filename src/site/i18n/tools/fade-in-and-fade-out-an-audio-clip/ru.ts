import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const ru: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Добавить фейд-ин и фейд-аут к аудиоклипу",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Смягчите резкие начало и конец чипами 0,5–3 с и кривыми linear или equal-power, затем скачайте 16-битный WAV. Только на устройстве.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Добавить фейд-ин и фейд-аут к аудиоклипу с чипами 0,5, 1, 2 или 3 секунды на каждом конце и кривой linear или equal-power. Шаги: применить, прослушать, скачать WAV. Пример: загрузите резкий образец. Только края—не wrap-кроссфейд для бесшовной петли, не лимитер и не EQ. Аудио остаётся на устройстве; никогда не загружается на сервер.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Жёсткие срезы в начале или конце щёлкают на колонках и звучат резко на таймлайне. Эта страница накладывает огибающую фейд-ин в начале и фейд-аут в конце. Выберите 0,5, 1, 2 или 3 с на сторону, затем Linear или Equal-power. Если сумма превышает длину, обе стороны пропорционально сжимаются. Это краевой фейд одного клипа—не сворачивание хвоста в голову для бесшовной петли, не ограничение пиков и не эквалайзер. Каналы остаются 1 или 2. Сохраните оригинал; загрузка — новый 16-битный WAV. Работа идёт в браузере на устройстве.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Выберите аудиофайл",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 МиБ и 10 минут; моно или стерео.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Применить",
  tool_fade_in_and_fade_out_an_audio_clip_download: "Скачать WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Загрузить образец",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Очистить",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Настройки фейда",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Фейд-ин",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Фейд-аут",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Кривая",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Linear",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "По умолчанию 1 с в начале, 1 с в конце, Equal-power. Короткие чипы — для ударных; длинные — для пэдов и речи. Если сумма больше длины, обе стороны сжимаются вместе.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Прогресс фейда",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Чтение",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Декод",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Фейд",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Запись",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Готово. Прослушайте WAV с фейдом, затем Скачайте WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "Фейд не удался. Попробуйте меньший корректный аудиофайл.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "Прошло {s} с",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Прослушать WAV с фейдом",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds} с · in {fadeIn}s · out {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "четыре-секунды-резкий-демо",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Сначала выберите аудиофайл или загрузите образец.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Перетащите ровно один аудиофайл.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Неподдерживаемое или повреждённое аудио. Используйте файл, который браузер может декодировать (WAV, MP3, M4A, AAC или OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Используйте файл не больше 40 МиБ или 10 минут, с одним или двумя каналами.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "Браузер не смог декодировать это аудио. Попробуйте другую корректную запись.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "Не удалось записать WAV с фейдом. Проверьте настройки и снова нажмите Применить.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "Уровень почти тишина — нечего фейдить. Попробуйте запись со слышимым уровнем.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "Клип слишком короткий для осмысленного фейда. Используйте файл длиннее примерно 50 мс.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "Как добавить фейд-ин и фейд-аут к аудиоклипу",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Выберите длительности и кривую, примените, прослушайте и скачайте 16-битный WAV — без загрузки файла.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Выберите аудиофайл или загрузите образец — резкая демонстрация на четыре секунды.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Откройте Настройки фейда и выберите чипы фейд-ин и фейд-аут (0,5 / 1 / 2 / 3 с). По умолчанию по 1 с.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Выберите Linear или Equal-power (по умолчанию), нажмите Применить и дождитесь Чтение → Декод → Фейд → Запись.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Прослушайте мягкие начало и конец, проверьте строку результата, затем Скачайте WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "Почему выбрать наши инструменты Добавить фейд-ин и фейд-аут к аудиоклипу",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "Перед сохранением видны секунды in/out, имя кривой и KiB выхода.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Понятные чипы длительности и две кривые — одна задача краёв, не wrap бесшовной петли и не цепочка лимитер/EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "Декод, огибающие и запись WAV выполняются на устройстве; страница не загружает запись для обработки.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Смена чипов, кривой или входа сбрасывает старую загрузку, чтобы не сохранить устаревший WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Длительности, кривые и ограничения",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "Фейд-ин поднимается из тишины; фейд-аут падает в тишину. Linear — прямая рампа; Equal-power — синус/косинус. Перекрывающиеся запросы сжимаются пропорционально.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Каждый конец предлагает 0,5, 1, 2 или 3 секунды. По умолчанию: 1 с / 1 с и Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "Только края одного клипа. Не сворачивает хвост в голову для бесшовной петли, не ограничивает пики и не EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "Экспорт сохраняет 1 или 2 канала. Теги не копируются. Оригинал никогда не перезаписывается.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "Один файл до 40 МиБ и десяти минут. Если сумма превышает длину, обе стороны уменьшаются вместе.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Попробуйте настоящий краевой фейд",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Загрузить образец создаёт четырёхсекундный тон с резким стартом и стопом, затем автоматически применяет фейд 1 с / 1 с Equal-power. Воспроизведение само не стартует — нажмите play в превью, чтобы услышать мягкие края.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "Когда это помогает",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "Закадр или музыкальная подложка щёлкает на срезах — выберите 1 с / 1 с, Применить, скачайте WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "Клип нуждается в мягких краях перед обрезкой в другом месте или на таймлайне — без построения бесшовной петли.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "Это то же, что Сделать бесшовный аудиоцикл?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "Нет. Тот инструмент сворачивает выбранный хвост в голову кроссфейдом, чтобы стык петли был чистым. Эта страница только смягчает начало и конец одного клипа. Для бесшовных петель используйте Сделать бесшовный аудиоцикл.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "Это ограничивает пики или делает EQ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "Нет. Только умножает сэмплы на огибающую фейда. Для лимитинга, усиления баса или EQ глухой речи используйте соответствующие инструменты.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "Equal-power против Linear?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Linear поднимает усиление прямой линией. Equal-power использует синус для фейд-ин и соответствующую косинусную форму для фейд-аут, чтобы громкость звучала ровнее. По умолчанию Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "Что, если 3 с + 3 с длиннее клипа?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "Оба конца сжимаются пропорционально, чтобы сумма не превышала длину. Строка результата показывает фактически применённые секунды.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "Можно фейдить только один конец?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Чипы задают оба конца; на почти нетронутом конце выберите самый короткий чип (0,5 с) или сначала обрежьте инструментом Обрезать аудиоклип и экспортировать.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "Загружается ли аудио на сервер?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "Нет. Декод, фейды и запись WAV выполняются в браузере на устройстве. Странице нужна сеть при первой загрузке; офлайн не гарантирован. Для бесшовных петель или обрезки длины используйте соответствующие инструменты.",
};
export default ru;
