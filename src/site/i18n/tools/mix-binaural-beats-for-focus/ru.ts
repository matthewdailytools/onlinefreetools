import type { SiteLangDict } from '../../../types';

/**
 * Русский (ru) для mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * Стерео L/R beat WAV; только развлечение/ambient; без медицинских и лечебных заявлений.
 */
const ru: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Смешать бинауральные ритмы для фокуса',
  tool_mix_binaural_beats_for_focus_desc:
    'Смешайте бинауральные ритмы для фокуса из несущей и разницы бита, затем скачайте стерео WAV. Только на устройстве—развлекательный ambient, не лечение.',
  tool_mix_binaural_beats_for_focus_description:
    'Смешайте бинауральные ритмы для фокуса в браузере из несущей и разницы бита, затем скачайте стерео 16-битный WAV. Шаги: задайте Гц несущей и бита или нажмите пресет, выберите длительность, Смешать, послушайте в наушниках, скачайте. Пример: несущая 200 Гц с разницей 10 Гц на 10 секунд. Только развлечение и ambient-звук для фокуса—не медицинское лечение. Никогда не загружается.',
  tool_mix_binaural_beats_for_focus_article:
    'Тем, кто ищет бинауральные ритмы для сессии фокуса, часто нужен простой стереофайл, который можно сохранить. Здесь вы задаёте частоту несущей для левого уха и чуть более высокую для правого, чтобы разница была частотой бита, выбираете длительность, синтезируете стерео PCM в браузере на 44,1 кГц и скачиваете 16-битный WAV. Используйте наушники—разница лево/право и есть смысл. Пресеты меняют только герцы; это ambient-ярлыки, не медицинские протоколы. Страница не заявляет терапевтической эффективности, не диагностирует и не лечит, и предназначена только для развлечения или личного ambient-прослушивания. Это не генератор моно-синуса и не создатель UI-уведомлений. Работа идёт на вашем устройстве.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Несущая (левое ухо, Гц)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Частота левого канала, обычно 80–500 Гц. По умолчанию 200 Гц.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Разница бита (Гц)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'Правое ухо играет несущая + это значение. Держите разницу между 1 и 40 Гц.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Ambient-пресеты бита',
  tool_mix_binaural_beats_for_focus_dur_label: 'Длительность',
  tool_mix_binaural_beats_for_focus_convert: 'Смешать',
  tool_mix_binaural_beats_for_focus_download: 'Скачать WAV',
  tool_mix_binaural_beats_for_focus_sample: 'Загрузить образец',
  tool_mix_binaural_beats_for_focus_clear: 'Очистить',
  tool_mix_binaural_beats_for_focus_advanced: 'Бинауральные заметки',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'Выход — стерео 16-битный WAV на 44,1 кГц с короткими фейдами. Наушники нужны для разницы лево/право. Только развлечение и ambient для фокуса—не медицинское лечение и не терапия.',
  tool_mix_binaural_beats_for_focus_progress: 'Прогресс смешивания',
  tool_mix_binaural_beats_for_focus_synth: 'Синтез',
  tool_mix_binaural_beats_for_focus_write: 'Запись',
  tool_mix_binaural_beats_for_focus_done: 'Готово. Послушайте в наушниках, затем Скачать WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'Смешивание не удалось. Проверьте несущую, разницу бита и длительность.',
  tool_mix_binaural_beats_for_focus_elapsed: 'прошло {s} с',
  tool_mix_binaural_beats_for_focus_preview: 'Прослушать бинауральный WAV',
  tool_mix_binaural_beats_for_focus_result:
    'Л {left} Гц · П {right} Гц · бит {beat} Гц · {seconds}с · стерео · {rate} Гц · WAV {output} КиБ',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Сначала задайте несущую и бит в Гц или загрузите образец.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Задайте несущую и разницу бита (или нажмите пресет), выберите длительность, затем Смешать—или Загрузить образец (200 Гц / 10 Гц / 10 с). Используйте наушники. Только развлекательный ambient—не медицинское лечение.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Введите несущую от 80 до 1000 Гц.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Введите разницу бита от 1 до 40 Гц (право = несущая + бит).',
  tool_mix_binaural_beats_for_focus_err_limit: 'Длительность должна быть от 0 до 120 секунд.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'Не удалось записать стерео WAV. Попробуйте Смешать снова.',
  tool_mix_binaural_beats_for_focus_how_title: 'Как смешать бинауральные ритмы для фокуса',
  tool_mix_binaural_beats_for_focus_how_body:
    'Задайте несущую и бит в Гц, выберите длительность, Смешать, послушайте в наушниках и скачайте один стерео WAV—без загрузки файлов и без заявлений о терапии.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Введите Гц несущей для левого уха (или оставьте 200 Гц) и разницу бита для правого.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'По желанию нажмите ambient-пресет (разница 4, 10 или 16 Гц)—меняются только числа, не медицинские протоколы.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Выберите чип длительности, нажмите Смешать и дождитесь Синтез → Запись.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Прослушайте в наушниках, проверьте строку результата, затем нажмите Скачать WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Почему выбрать наши инструменты Смешать бинауральные ритмы для фокуса',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'Перед сохранением видны левые Гц, правые Гц, разница бита, длительность и КиБ выхода.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'Одна понятная стерео-бинауральная задача с честными YMYL-границами—развлекательный ambient, не лечение.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'Синтез и запись идут на устройстве; ничего не загружается для обработки тонов.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Смена несущей, бита или длительности очищает старую загрузку, чтобы не сохранить устаревший WAV.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Бинауральные правила и честные ограничения',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Каждый запуск синтезирует лево = несущая и право = несущая + бит на 44,1 кГц с короткими краевыми фейдами. Экспорт — стерео 16-битный WAV. Только развлечение/ambient—не медицинское лечение—и не моно-синус или UI-бип.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Несущая от 80 до 1000 Гц. Разница бита от 1 до 40 Гц. Длительность не более 120 секунд. Выход стерео.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Наушники нужны для настоящей разницы лево/право. Колонки суммируют каналы и скрывают эффект бита.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'Страница не заявляет медицинской, сонной или терапевтической эффективности. Подписи — только ambient-ярлыки, не протоколы лечения.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Короткие фейды уменьшают щелчки. Загрузка — новый файл; ничего не отправляется. Это не генератор моно-синуса и не звук UI-уведомления.',
  tool_mix_binaural_beats_for_focus_example_title: 'Попробуйте несущую 200 Гц с битом 10 Гц на 10 секунд',
  tool_mix_binaural_beats_for_focus_example:
    'Загрузить образец задаёт несущую 200 Гц, разницу 10 Гц и 10 секунд, затем Смешать запускается само. В наушниках должна быть стабильная стереопара. Воспроизведение не стартует само—нажмите play, если хотите послушать.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'Когда это помогает',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'Нужен повторно используемый ambient WAV для фокуса: задайте несущую и бит, Смешать, скачайте и сохраните файл для наушников.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'Нужна быстрая демо стерео-бита без установки десктопного тон-приложения и без доверия к заявлениям о терапии.',
  tool_mix_binaural_beats_for_focus_usecase_3: 'Нужна короткая стерео‑подложка carrier/beat Hz только в наушниках.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'Это медицинское лечение или терапия?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'Нет. Страница создаёт только развлекательный и личный ambient-звук для фокуса. Она не диагностирует, не лечит и не излечивает никакое состояние и не заявляет терапевтической эффективности.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'Нужны ли наушники?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Да для задуманной разницы лево/право. На колонках каналы смешиваются, и эффект бита ослабевает или пропадает.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'Это то же самое, что генератор моно-синуса?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'Нет. Страница синуса делает одну частоту в моно. Эта страница всегда пишет стерео с двумя слегка разными частотами.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'Что означают ambient-пресеты?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'Они только задают разницу бита в герцах (например 4, 10 или 16 Гц). Это не медицинские протоколы и они не обещают результат сна или фокуса.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'Загружается ли что-то на сервер?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'Нет. Синтез и запись идут в браузере на устройстве. При первой загрузке странице нужна сеть; офлайн не гарантируется.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'Какой формат у скачивания?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'Стерео 16-битный PCM WAV на 44,1 кГц. Новый файл, который можно сохранить как повторно используемый ambient-клип.',
};
export default ru;
