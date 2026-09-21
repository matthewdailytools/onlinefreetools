import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const ru: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Снизить фоновый шум в голосовой заметке",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Приглушите устойчивый шип вентилятора или кондиционера в заметке пресетами Light, Medium или Strong (ФВЧ + гейт по шумовому полу) и скачайте 16-битный WAV. Только приближение на устройстве.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Снизьте фоновый шум в голосовой заметке пресетами Light, Medium или Strong: ФВЧ плюс гейт по шумовому полу. Шаги: Подавить шум, прослушать, скачать WAV. Пример: загрузите шипящий образец. Приближение браузера—не Adobe Enhance Speech, не dehum 50/60 Гц, не EQ глухого голоса. Аудио остаётся на устройстве; никогда не загружается на сервер.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Голосовые заметки часто лежат на устойчивом шипе вентилятора, кондиционера или комнаты. Страница применяет ФВЧ, оценивает шумовой пол по тихим кадрам и мягко гейтит рядом с ним. Light, Medium и Strong задают агрессивность. Это честное приближение в браузере—не облачный Enhance, не узкая вырезка сетевого гула, не трёхполосный EQ. Музыка может потускнеть. Каналы 1 или 2. Сохраните оригинал; скачивание — новый 16-битный WAV. Обработка на вашем устройстве.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Выберите аудиофайл",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 МиБ и 10 минут; моно или стерео.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Подавить шум",
  tool_reduce_background_noise_on_a_voice_memo_download: "Скачать WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Загрузить образец",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Очистить",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Сила шумоподавления",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Сила снижения шума",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Medium балансирует речь и шип. Light мягче. Strong сильнее давит тихие кадры и может истончить согласные. ФВЧ + гейт—не ML Enhance.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Ход шумоподавления",
  tool_reduce_background_noise_on_a_voice_memo_read: "Чтение",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Декод",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Подавить шум",
  tool_reduce_background_noise_on_a_voice_memo_write: "Запись",
  tool_reduce_background_noise_on_a_voice_memo_done: "Готово. Прослушайте WAV и скачайте.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Шумоподавление не удалось. Попробуйте меньший корректный файл.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "прошло {s} с",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Прослушать WAV после шумоподавления",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds} с · {preset} · шумовой пол {floor} · WAV {output} КиБ",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "трёхсекундная-шипящая-голосовая-заметка",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Сначала выберите аудио или загрузите образец.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Перетащите ровно один аудиофайл.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "Неподдерживаемое или повреждённое аудио. Используйте WAV, MP3, M4A, AAC или OGG.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "Не больше 40 МиБ или 10 минут, один или два канала.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "Браузер не смог декодировать это аудио.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "Не удалось записать WAV. Проверьте силу и повторите.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "Почти тишина—нечего подавлять. Возьмите слышимую запись.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "Как снизить фоновый шум в голосовой заметке",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "Выберите силу, запустите ФВЧ и гейт, прослушайте, скачайте 16-битный WAV—без загрузки файла.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "Выберите файл или загрузите образец (три секунды с шипом).",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "Откройте силу и выберите Light, Medium (по умолчанию) или Strong.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "Нажмите Подавить шум и дождитесь Чтение → Декод → Подавить шум → Запись.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "Прослушайте более тихий фон, проверьте строку результата, скачайте WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Почему выбрать наши инструменты Снизить фоновый шум в голосовой заметке",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "Видите имя силы, оценку шумового пола и КиБ выхода до сохранения.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "Три ясные силы—одна задача denoise заметки, не стойка DAW и не облачный Enhance.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "Декод, ФВЧ, гейт и WAV работают на устройстве; запись не загружается.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "Смена силы или входа сбрасывает старую загрузку.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Сила, шумовой пол и честные пределы браузера",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Каждая сила: ФВЧ, оценка пола по тихим кадрам, мягкий гейт. Устойчивый шип улучшается сильнее всего; согласные и музыка могут истончиться.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "Light, Medium и Strong меняют срез ФВЧ и остаточный усиление. По умолчанию Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "Приближение браузера. Не Adobe Enhance Speech, не dehum 50/60 Гц, не EQ глухого голоса.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "Каналы 1 или 2. Теги не копируются. Оригинал никогда не перезаписывается.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "Один файл до 40 МиБ и десяти минут. Strong может оставить артефакты; если звук пустой, вернитесь к Light или Medium.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Попробуйте шипящую заметку",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Загрузить образец создаёт три секунды речеподобного тона под устойчивым шипом и автоматически подавляет шум на Medium. Воспроизведение не стартует само—нажмите play в превью.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "Когда это помогает",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "Телефонная заметка с шипом вентилятора или кондиционера—Medium, подавить шум, скачать WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "Полевая заметка, где нужно меньше комнатного шипа перед фейдами или EQ в другом месте.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "Это то же, что Adobe Enhance Speech?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "Нет. Облачный Enhance пересобирает речь большими моделями. Здесь только ФВЧ и гейт по полу в браузере—скромный и честный результат.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "Убирает ли это гул сети 50/60 Гц?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "Не как отдельный dehum. Лучше всего улучшается широкополосный шип. Для узкого notch 50/60 Гц используйте Убрать сетевой гул из записи.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "Это то же, что EQ a muffled voice recording?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "Нет. Та страница меняет тембр. Эта снижает устойчивый фоновый шум. После denoise для тембра используйте EQ a muffled voice recording.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "Может ли Strong испортить речь или музыку?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "Да. Strong сильнее давит тихие кадры и может истончить согласные. Обычно Medium; Light, если речь уже тихая.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "Что меняют Light, Medium и Strong?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "Чуть поднимают срез ФВЧ и снижают остаточный усиление у оценки шумового пола. По умолчанию Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "Загружается ли аудио на сервер?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "Нет. Декод, шумоподавление и запись WAV идут в браузере на устройстве. Сеть нужна при первой загрузке страницы; офлайн не гарантирован. Для мягких краёв — Fade in and fade out an audio clip; для глухого тона — EQ a muffled voice recording.",
};
export default ru;
