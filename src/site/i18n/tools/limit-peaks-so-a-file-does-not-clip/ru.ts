import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for limit-peaks-so-a-file-does-not-clip (S19).
 * ≠ compressor (S18), ≠ gain (S15), ≠ peak/LUFS (S16/S17).
 */
const ru: SiteLangDict = {
  tool_limit_peaks_so_a_file_does_not_clip_title: "Ограничить пики, чтобы файл не клипповал",
  tool_limit_peaks_so_a_file_does_not_clip_desc:
    "Ограничьте горячие пики до −0.1, −1 или −3 dBFS в режиме soft или brickwall и скачайте 16-битный WAV. Только на устройстве.",
  tool_limit_peaks_so_a_file_does_not_clip_description:
    "Ограничьте пики, чтобы файл не клипповал: выберите потолок (−0.1, −1 или −3 dBFS) и режим soft или brickwall. Шаги: ограничить, прослушать, скачать WAV. Пример: загрузите образец горячих пиков. Ограничение пиков—не компрессия динамического диапазона, не фиксированный dB-гейн, не нормализация пика и не LUFS. Аудио остаётся на устройстве; никогда не загружается.",
  tool_limit_peaks_so_a_file_does_not_clip_article:
    "Горячий экспорт часто толкает отдельные сэмплы в цифровой клиппинг. Эта страница запускает чистый JavaScript-лимитер: soft приближается к потолку через tanh; brickwall жёстко обрезает. Потолки: −0.1, −1 (по умолчанию) или −3 dBFS. Меняются только сэмплы выше потолка—тихие части остаются. Это не компрессор (порог/отношение/makeup), не фиксированный буст всего файла, не нормализация абсолютного пика к цели dBFS и не выравнивание LUFS подкаста. 1 или 2 канала. Сохраните мастер; загрузка — новый 16-битный WAV. Работа в браузере на устройстве.",
  tool_limit_peaks_so_a_file_does_not_clip_choose: "Выберите аудиофайл",
  tool_limit_peaks_so_a_file_does_not_clip_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 МиБ и 10 минут; моно или стерео.",
  tool_limit_peaks_so_a_file_does_not_clip_convert: "Ограничить",
  tool_limit_peaks_so_a_file_does_not_clip_download: "Скачать WAV",
  tool_limit_peaks_so_a_file_does_not_clip_sample: "Загрузить образец",
  tool_limit_peaks_so_a_file_does_not_clip_clear: "Очистить",
  tool_limit_peaks_so_a_file_does_not_clip_advanced: "Настройки лимитера",
  tool_limit_peaks_so_a_file_does_not_clip_ceiling_label: "Потолок",
  tool_limit_peaks_so_a_file_does_not_clip_mode_label: "Режим лимитера",
  tool_limit_peaks_so_a_file_does_not_clip_mode_soft: "Soft",
  tool_limit_peaks_so_a_file_does_not_clip_mode_brickwall: "Brickwall",
  tool_limit_peaks_so_a_file_does_not_clip_settings_hint:
    "−1 dBFS Soft — безопасный запас по умолчанию. −0.1 сохраняет больше уровня; −3 даёт больший headroom. Soft приближается мягко; Brickwall обрезает жёстко.",
  tool_limit_peaks_so_a_file_does_not_clip_progress: "Прогресс ограничения",
  tool_limit_peaks_so_a_file_does_not_clip_read: "Чтение",
  tool_limit_peaks_so_a_file_does_not_clip_decode: "Декодирование",
  tool_limit_peaks_so_a_file_does_not_clip_limit: "Ограничение",
  tool_limit_peaks_so_a_file_does_not_clip_write: "Запись",
  tool_limit_peaks_so_a_file_does_not_clip_done: "Готово. Прослушайте ограниченный WAV, затем Скачайте WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_failed: "Ограничение не удалось. Попробуйте меньший корректный аудиофайл.",
  tool_limit_peaks_so_a_file_does_not_clip_elapsed: "прошло {s} с",
  tool_limit_peaks_so_a_file_does_not_clip_preview: "Прослушать ограниченный WAV",
  tool_limit_peaks_so_a_file_does_not_clip_result:
    "{seconds} с · потолок {ceiling} dBFS · {mode} · пик {peakBefore}→{peakAfter} · WAV {output} КиБ",
  tool_limit_peaks_so_a_file_does_not_clip_sample_name: "демо-две-секунды-горячий-пик",
  tool_limit_peaks_so_a_file_does_not_clip_empty: "Сначала выберите аудиофайл или загрузите образец.",
  tool_limit_peaks_so_a_file_does_not_clip_err_file: "Перетащите ровно один аудиофайл.",
  tool_limit_peaks_so_a_file_does_not_clip_err_format: "Неподдерживаемое или повреждённое аудио. Используйте файл, который браузер может декодировать (WAV, MP3, M4A, AAC или OGG).",
  tool_limit_peaks_so_a_file_does_not_clip_err_limit: "Файл не больше 40 МиБ или 10 минут, с одним или двумя каналами.",
  tool_limit_peaks_so_a_file_does_not_clip_err_decode: "Браузер не смог декодировать это аудио. Попробуйте другую корректную запись.",
  tool_limit_peaks_so_a_file_does_not_clip_err_encoder: "Не удалось записать ограниченный WAV. Проверьте потолок и режим, затем снова Ограничить.",
  tool_limit_peaks_so_a_file_does_not_clip_err_silence: "Уровень почти тишина—ограничивать нечего. Попробуйте запись со слышимым уровнем.",
  tool_limit_peaks_so_a_file_does_not_clip_how_title: "Как ограничить пики, чтобы файл не клипповал",
  tool_limit_peaks_so_a_file_does_not_clip_how_body:
    "Выберите потолок и Soft или Brickwall, ограничьте горячие пики, прослушайте и скачайте 16-битный WAV—без загрузки файла.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_1: "Выберите аудиофайл или Загрузить образец для двухсекундной демо с горячими пиками.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_2:
    "Откройте Настройки лимитера и выберите −0.1, −1 (по умолчанию) или −3 dBFS; оставьте Soft, если не нужен Brickwall.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_3: "Нажмите Ограничить и дождитесь Чтение → Декодирование → Ограничение → Запись.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_4: "Прослушайте результат, проверьте потолок и режим, затем нажмите Скачать WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_title: "Почему выбрать наши инструменты Ограничить пики, чтобы файл не клипповал",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_1: "Перед сохранением видны потолок, режим, пик до/после и KiB выхода.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_2: "Одна ясная задача лимитера—не спрятанная стена компрессора / геина / нормализации.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_3:
    "Декодирование, ограничение и запись WAV на устройстве; страница не загружает запись на сервер.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_4: "Смена потолка, режима или входа очищает старую загрузку, чтобы не сохранить устаревший WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_title: "Потолок, Soft, Brickwall и пределы",
  tool_limit_peaks_so_a_file_does_not_clip_rules_body:
    "Лимитер меняет только сэмплы, которые превысили бы потолок. Soft использует tanh; Brickwall жёстко обрезает. Это не динамическая компрессия, не фиксированный геин, не нормализация пика и не LUFS.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_1:
    "−1 dBFS Soft по умолчанию. −0.1 сохраняет больше уровня; −3 даёт больший headroom до полной шкалы.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_2:
    "Soft мягко приближается к потолку. Brickwall никогда его не превышает и на экстремальных пиках может звучать жёстче.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_3: "Экспорт сохраняет 1 или 2 канала. Теги не копируются. Исходный файл никогда не перезаписывается.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_4:
    "Один файл до 40 МиБ и десяти минут. Это не компрессор, не amplify с фиксированным геином, не нормализация пика и не выравнивание LUFS.",
  tool_limit_peaks_so_a_file_does_not_clip_example_title: "Попробуйте реальное ограничение пиков",
  tool_limit_peaks_so_a_file_does_not_clip_example:
    "Загрузить образец создаёт двухсекундный тон 440 Гц с намеренными горячими всплесками и автоматически ограничивает на −1 dBFS Soft. Воспроизведение само не стартует—нажмите play в превью, если хотите услышать ограниченные пики.",
  tool_limit_peaks_so_a_file_does_not_clip_usecases_title: "Когда это помогает",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_1: "Микс почти готов, но отдельные пики рискуют клипповать при экспорте—выберите −1 Soft, ограничьте, скачайте WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_2: "Голосовой тейк уже сжат, нужен только финальный потолок перед сдачей.",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_3: "Экспорт клипит на пиках — нужен потолок перед публикацией.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q1: "Это то же самое, что компрессор динамического диапазона?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a1:
    "Нет. Компрессор использует порог/отношение (часто makeup) для неровной динамики. Эта страница только ограничивает пики потолком. Для динамики голоса используйте Сжать динамический диапазон голосовой записи.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q2: "Это то же самое, что сделать тихую запись громче фиксированным dB-геином?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a2:
    "Нет. Фиксированный геин умножает весь клип. Здесь тихие части остаются; ограничиваются только пики выше потолка. Для равномерного буста используйте Сделать тихую запись громче.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q3: "Это нормализация пика или выравнивание LUFS подкаста?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a3:
    "Нет. Нормализация пика масштабирует так, чтобы абсолютный пик попал в цель dBFS. LUFS целится в интегральную громкость. Эта страница только ограничивает перехлёсты. Используйте Нормализовать аудиофайл к пику или Выровнять громкость подкаста к −16 LUFS.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q4: "Что меняют Soft и Brickwall?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a4:
    "Soft проводит пики через tanh к потолку мягче. Brickwall жёстко обрезает—надёжнее против перехлёста, жёстче на экстремальных ударах.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q5: "Какой потолок выбрать?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a5:
    "−1 dBFS Soft подходит большинству сдач. −0.1 — если нужен больший уровень с малым headroom, −3 — для большего запаса до полной шкалы.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q6: "Загружается ли моё аудио на сервер?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a6:
    "Нет. Декодирование, ограничение и запись WAV выполняются в браузере на устройстве. При первой загрузке нужна сеть; офлайн не гарантируется. Для динамики или нормализации используйте Сжать динамический диапазон голосовой записи или Нормализовать аудиофайл к пику.",
};
export default ru;
