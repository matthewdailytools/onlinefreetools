import type { SiteLangDict } from '../../../types';

/**
 * Russian copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const ru: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Усилить бас в MP3",
  tool_boost_bass_on_an_mp3_desc:
    "Утолщите тонкий низ пресетами Mild, Medium или Strong (low-shelf) и скачайте 16-битный WAV. Только на устройстве.",
  tool_boost_bass_on_an_mp3_description:
    "Усилить бас в MP3 пресетами Mild, Medium или Strong с low-shelf. Шаги: усилить, прослушать, скачать WAV. Пример: загрузите образец с тонким басом. Только low-shelf бас—не полный многополосный эквалайзер и не усилитель громкости всего файла. Аудио остаётся на устройстве; никогда не загружается.",
  tool_boost_bass_on_an_mp3_article: "Экспорт с телефона и ноутбучные динамики часто оставляют кик и бас тонкими: середины хватает, веса ниже ~100 Гц мало. Страница гоняет одну ступень lowshelf EQ в on-device audio processing. Mild мягкий; Medium (по умолчанию) повседневный подъём; Strong сильнее. Мягкая защита пиков масштабирует результат, если буст клиппирует. Это усиление баса—не трёхполосный EQ Clarity/Warmth/Presence для глухого голоса и не плоский dB-gain на всё. Каналов 1 или 2. Сохраните мастер; загрузка — новый 16-битный WAV. Работа в браузере на устройстве.",
  tool_boost_bass_on_an_mp3_choose: "Выберите аудиофайл",
  tool_boost_bass_on_an_mp3_hint: "Перетащите один WAV, MP3, M4A, AAC или OGG. Максимум 40 МиБ и 10 минут; моно или стерео.",
  tool_boost_bass_on_an_mp3_convert: "Усилить",
  tool_boost_bass_on_an_mp3_download: "Скачать WAV",
  tool_boost_bass_on_an_mp3_sample: "Загрузить образец",
  tool_boost_bass_on_an_mp3_clear: "Очистить",
  tool_boost_bass_on_an_mp3_advanced: "Пресеты баса",
  tool_boost_bass_on_an_mp3_preset_label: "Пресет low-shelf баса",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "По умолчанию Medium поднимает низ около 90 Гц. Mild мягче; Strong тяжелее. Защита пиков не даёт клиппинга после буста.",
  tool_boost_bass_on_an_mp3_progress: "Прогресс усиления баса",
  tool_boost_bass_on_an_mp3_read: "Чтение",
  tool_boost_bass_on_an_mp3_decode: "Декод",
  tool_boost_bass_on_an_mp3_boost: "Усиление",
  tool_boost_bass_on_an_mp3_write: "Запись",
  tool_boost_bass_on_an_mp3_done: "Готово. Прослушайте WAV с усиленным басом и скачайте WAV.",
  tool_boost_bass_on_an_mp3_failed: "Усиление баса не удалось. Попробуйте меньший корректный аудиофайл.",
  tool_boost_bass_on_an_mp3_elapsed: "прошло {s} с",
  tool_boost_bass_on_an_mp3_preview: "Прослушать WAV с усиленным басом",
  tool_boost_bass_on_an_mp3_result: "{seconds} с · {preset} · пик {peakBefore} → {peakAfter} · WAV {output} КиБ",
  tool_boost_bass_on_an_mp3_sample_name: "демо-тонкий-бас-две-секунды",
  tool_boost_bass_on_an_mp3_empty: "Сначала выберите аудиофайл или загрузите образец.",
  tool_boost_bass_on_an_mp3_err_file: "Перетащите ровно один аудиофайл.",
  tool_boost_bass_on_an_mp3_err_format: "Неподдерживаемое или повреждённое аудио. Используйте файл, который браузер может декодировать (WAV, MP3, M4A, AAC или OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Файл не больше 40 МиБ или 10 минут, с одним или двумя каналами.",
  tool_boost_bass_on_an_mp3_err_decode: "Браузер не смог декодировать это аудио. Попробуйте другую корректную запись.",
  tool_boost_bass_on_an_mp3_err_encoder: "Не удалось записать усиленный WAV. Проверьте пресет и усилите снова.",
  tool_boost_bass_on_an_mp3_err_silence: "Уровень почти тишина—нечего усиливать. Возьмите запись со слышимым уровнем.",
  tool_boost_bass_on_an_mp3_how_title: "Как усилить бас в MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "Выберите low-shelf пресет, поднимите бас, прослушайте и скачайте 16-битный WAV—без загрузки файла.",
  tool_boost_bass_on_an_mp3_how_item_1: "Выберите аудиофайл или загрузите образец — двухсекундная демонстрация тонкого баса.",
  tool_boost_bass_on_an_mp3_how_item_2: "Откройте Пресеты баса и выберите Mild, Medium (по умолчанию) или Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "Нажмите Усилить и дождитесь Чтение → Декод → Усиление → Запись.",
  tool_boost_bass_on_an_mp3_how_item_4: "Прослушайте результат, проверьте пресет и пики, затем Скачать WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Почему выбрать наши инструменты усиления баса в MP3",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "Перед сохранением видны имя пресета, пики до/после и КиБ выхода.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Три понятных low-shelf пресета—одна задача баса, не десятиполосный EQ и не стена громкости.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "Декод, lowshelf-буст и запись WAV на устройстве; страница не загружает аудио на сервер.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Смена пресета или входа очищает старую загрузку, чтобы не сохранить устаревший WAV.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong и ограничения",
  tool_boost_bass_on_an_mp3_rules_body:
    "Каждый пресет — одна ступень lowshelf EQ. Mild мягкий; Medium повседневный подъём; Strong тяжелее. Защита пиков масштабирует при угрозе клиппинга.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Medium по умолчанию: lowshelf около 90 Гц примерно +8 дБ. Mild ~+4 дБ; Strong ~+12 дБ с чуть более низким shelf.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "Только low-shelf бас. Не перестраивает середину/верх как EQ глухого голоса и не усиливает все частоты как volume booster.",
  tool_boost_bass_on_an_mp3_rules_item_3: "В экспорте 1 или 2 канала. Теги не копируются. Исходник не перезаписывается.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "Один файл до 40 МиБ и десяти минут. После Strong защита пиков может снизить общий уровень, чтобы WAV оставался ниже полной шкалы.",
  tool_boost_bass_on_an_mp3_example_title: "Попробуйте реальный буст баса",
  tool_boost_bass_on_an_mp3_example:
    "Загрузить образец создаёт двухсекундный тон с сильной серединой и слабым низом, затем автоматически усиливает Medium. Воспроизведение само не стартует—нажмите play в превью, чтобы услышать более тяжёлый результат.",
  tool_boost_bass_on_an_mp3_usecases_title: "Когда это помогает",
  tool_boost_bass_on_an_mp3_usecase_1: "Экспорт MP3 звучит тонко на колонках—выберите Medium, Усилить, скачайте WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "Треку нужен более тяжёлый кик без полного графического EQ и без громче всего микса.",
  tool_boost_bass_on_an_mp3_usecase_3: "MP3 с телефона звучит тонко на ноутбуке — усилить только низ, не середину.",
  tool_boost_bass_on_an_mp3_faq_q1: "Это то же, что эквалайзер для глухой голосовой записи?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "Нет. Та страница — трёхполосные пресеты Clarity/Warmth/Presence для глухой речи. Здесь только lowshelf поднимает низ. Для EQ глухого голоса: Эквалайзер для глухой голосовой записи.",
  tool_boost_bass_on_an_mp3_faq_q2: "Это то же, что сделать тихую запись громче?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "Нет. Усилитель громкости масштабирует каждый сэмпл одним dB-gain. Здесь только полка баса. Для усиления всего файла: Сделать тихую запись громче.",
  tool_boost_bass_on_an_mp3_faq_q3: "Что делают Mild, Medium и Strong?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild — мягкий lowshelf. Medium (по умолчанию) — повседневный подъём баса. Strong — более тяжёлая полка. Защита пиков предотвращает клиппинг после буста.",
  tool_boost_bass_on_an_mp3_faq_q4: "Что если Усилить делает файл горячее?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "После lowshelf, если пики превысили бы около −0,2 дБFS, мягкая защита масштабирует буфер. Для отдельного лимитера пиков: Ограничить пики, чтобы файл не клиппировал.",
  tool_boost_bass_on_an_mp3_faq_q5: "Загружается ли моё аудио на сервер?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "Нет. Декод, усиление баса и запись WAV в браузере на устройстве. При первой загрузке нужна сеть; офлайн не гарантирован.",
  tool_boost_bass_on_an_mp3_faq_q6: "Только MP3 или также WAV и M4A?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "Любой формат, который браузер декодирует—WAV, MP3, M4A, AAC или OGG. Заголовок повторяет привычный поиск MP3; экспорт всегда новый 16-битный WAV.",
};
export default ru;
