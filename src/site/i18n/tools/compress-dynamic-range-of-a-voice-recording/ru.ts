import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const ru: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Сжать динамический диапазон голосовой записи",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    
    "Сглаживайте пики голоса пресетами Лёгкий/Средний/Сильный и опциональным makeup, затем скачайте 16-битный WAV. Только на устройстве.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "Сжимайте динамический диапазон голосовой записи пресетами Лёгкий, Средний или Сильный и опциональным makeup. Шаги: сжать, прослушать, скачать WAV. Пример: загрузите неровный образец. Перестройка динамики—не сжатие размера MP3, не фиксированный dB-gain, не нормализация пика или LUFS. Аудио остаётся на устройстве; никогда не загружается.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "Голосовые дубли часто прыгают от шёпота к пикам. Страница использует пиковый огибающий компрессор на чистом JavaScript: Лёгкий/Средний с soft knee, Сильный с hard knee (лёгкий ≈ −18 dB / 2:1, средний ≈ −24 / 3:1 по умолчанию, сильный ≈ −30 / 6:1). Опциональный makeup восстанавливает общий уровень после укрощения пиков, с мягкой защитой пика перед 16-битным WAV. Это сжатие динамического диапазона, а не уменьшение MP3 ради байтов, не фиксированный gain, не нормализация пика и не выравнивание LUFS. 1 или 2 канала. Сохраните мастер; загрузка — новый файл.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Выберите аудиофайл",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 MiB и 10 минут; моно или стерео.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Сжать",
  tool_compress_dynamic_range_of_a_voice_recording_download: "Скачать WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Загрузить образец",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Очистить",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Настройки компрессора",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Пресет интенсивности",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Лёгкий",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Средний",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Сильный",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Makeup-усиление",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "Вкл",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "Выкл",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "Лёгкий (−18 dB, 2:1, soft knee) мягок. Средний (−24 dB, 3:1) подходит многим закадровым голосам. Сильный (−30 dB, 6:1, hard knee) сильнее жмёт пики. Makeup (по умолчанию Вкл) восстанавливает уровень после сжатия с защитой пика.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Ход сжатия",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Чтение",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Декод",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Сжатие",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Запись",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Готово. Прослушайте сжатый WAV и скачайте.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "Сжатие не удалось. Попробуйте меньший корректный аудиофайл.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "прошло {s} с",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Прослушать сжатый WAV",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds} с · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "двухсекундное-динамическое-демо-голоса",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Сначала выберите аудио или загрузите образец.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Перетащите ровно один аудиофайл.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format:
    "Неподдерживаемое или повреждённое аудио. Используйте файл, который браузер может декодировать (WAV, MP3, M4A, AAC или OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Файл не больше 40 MiB или 10 минут, с одним или двумя каналами.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "Браузер не смог декодировать это аудио. Попробуйте другую корректную запись.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "Не удалось записать сжатый WAV. Проверьте пресет и makeup, затем снова нажмите Сжать.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "Уровень почти тишина—сжимать нечего.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "Как сжать динамический диапазон голосовой записи",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    
    "Выберите пресет интенсивности, при желании включите makeup, сожмите динамику, прослушайте и скачайте 16-битный WAV—без загрузки файла.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Выберите голосовую запись или загрузите образец (двухсекундный тон с большой динамикой).",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    
    "Откройте настройки и выберите Лёгкий, Средний (по умолчанию) или Сильный; оставьте Makeup Вкл, если не нужна только контроль пиков.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Нажмите Сжать и дождитесь Чтение → Декод → Сжатие → Запись.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Прослушайте, проверьте пресет/порог/соотношение/makeup и пики, затем скачайте WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Почему выбрать наши инструменты сжатия динамического диапазона",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "Видите пресет, порог, соотношение, makeup, пики и KiB выхода до сохранения.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Три ясных голосовых пресета—одна задача динамики, а не стена размера MP3/усиления/нормализации.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "Декод, сжация и запись WAV на устройстве; страница не загружает запись на сервер.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Смена пресета, makeup или входа очищает старую загрузку, чтобы не сохранить устаревший WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Порог, соотношение, makeup и ограничения",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "Пиковый огибающий компрессор снижает усиление выше порога по соотношению (soft knee у Лёгкий/Средний; hard knee у Сильный). Затем умножается makeup; мягкая защита пика держит сэмплы ниже ~0,99. Меняет громкое и тихое—в отличие от фиксированного усиления, нормализации пика, LUFS или снижения битрейта MP3.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    
    "Средний (−24 dB, 3:1, soft knee) — по умолчанию. Лёгкий мягче; Сильный — ниже порог, выше соотношение и hard knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2: 
    "Makeup по умолчанию Вкл восстанавливает уровень после укрощения пиков. Выкл, если нужны только более тихие пики без подъёма.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "Экспорт сохраняет 1 или 2 канала. Теги не копируются. Исходник не перезаписывается.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "Один файл до 40 MiB и десяти минут. Это не сжатие размера MP3, не фиксированное усиление, не нормализация пика и не выравнивание LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Попробуйте реальное сжатие динамического диапазона",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    
    "Загрузить образец создаёт двухсекундный тон 440 Гц с громкими и тихими вспышками, затем автоматически сжимает Средним с Makeup Вкл. Воспроизведение само не стартует—нажмите play в превью.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "Когда это помогает",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "Закадр, который прыгает от тихих фраз к громким пикам—выберите Подкаст, сожмите, скачайте WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "Интервью, которое хотите выровнять перед громкостью LUFS, не уменьшая MP3 ради размера.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "Это то же, что сжать / уменьшить размер MP3-файла?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "Нет. Здесь «сжать» — динамический диапазон (порог/соотношение), не битрейт или байты. Для меньших MP3 используйте Reduce an MP3 file size. По-китайски: 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "Это то же, что сделать тихую запись громче фиксированным dB-gain?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "Нет. Фиксированный gain умножает весь клип. Здесь громкие части снижаются сильнее. Для равномерного усиления используйте Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "Это нормализация пика или выравнивание LUFS подкаста?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "Нет. Пик целится в dBFS; LUFS — в интегральную громкость. Эта страница меняет динамику компрессором. Используйте Normalize an audio file to peak или Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "Что меняют Лёгкий, Средний и Сильный?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4: 
    "Они задают порог, соотношение и колено. Лёгкий ≈ −18 / 2:1 soft; Средний ≈ −24 / 3:1 soft; Сильный ≈ −30 / 6:1 hard. Makeup Вкл/Выкл отдельно.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "Оставлять Makeup включённым?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    
    "Обычно да—сжатие может снизить среднее; makeup восстанавливает его с защитой пика. Выберите Выкл для более тихих пиков без подъёма.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "Загружается ли моё аудио на сервер?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "Нет. Декод, сжатие и запись WAV идут в браузере на устройстве. Нужна сеть при первой загрузке; офлайн не гарантируется. Для громкости или усиления: Match podcast loudness to −16 LUFS или Make a quiet recording louder.",
};
export default ru;
