/**
 * i18n tool shard (brand-color-token-pack / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'Один базовый цвет бренда превращается в полный набор токенов: HEX, RGB, HSL, OKLCH, шкала 50–950, пары чёрного/белого текста на каждом шаге и копируемые CSS‑переменные или JSON — всё в браузере.',
  tool_brand_color_token_pack_bad_hex: 'Введите корректный HEX из 3 или 6 символов (например #2563EB).',
  tool_brand_color_token_pack_base_label: 'Базовый цвет',
  tool_brand_color_token_pack_clear: 'Очистить',
  tool_brand_color_token_pack_contrast_col: 'Текст',
  tool_brand_color_token_pack_copy_css: 'Копировать CSS',
  tool_brand_color_token_pack_copy_done: 'Скопировано',
  tool_brand_color_token_pack_copy_json: 'Копировать JSON',
  tool_brand_color_token_pack_desc:
    'Один базовый → HEX/RGB/HSL/OKLCH, шкала 50–950, пары контраста, CSS‑переменные — локально.',
  tool_brand_color_token_pack_description:
    'Соберите пакет цветовых токенов бренда из одного базового цвета в браузере. Шаги: выберите базу (HEX или пипетка), посмотрите HEX/RGB/HSL/OKLCH, постройте шкалу 50–950 с парами чёрного/белого текста на каждом шаге, затем скопируйте CSS‑переменные или JSON. При открытии загружается пример синего #2563eb — ничего не отправляется.',
  tool_brand_color_token_pack_empty: 'Сначала сгенерируйте токены, затем копируйте CSS или JSON.',
  tool_brand_color_token_pack_example:
    'Загрузите пример (#2563EB). Блок пространств показывает HEX, RGB, HSL и OKLCH базы; сетка шкалы 50–950 с рекомендуемым чёрным или белым текстом и коэффициентом контраста. Копировать CSS даёт :root { --color-50: …; … --color-950: …; } для вашей таблицы стилей.',
  tool_brand_color_token_pack_example_title: 'Пример',
  tool_brand_color_token_pack_faq_a1:
    'Нет. Расчёт и экспорт выполняются в этой вкладке — цвета не уходят на сервер.',
  tool_brand_color_token_pack_faq_a2:
    'Шаг 500 совпадает с вашим базовым цветом. Более светлые (50–400) смешиваются с белым, более тёмные (600–950) — с чёрным. Смешение линейное в sRGB, чтобы оттенок оставался стабильным.',
  tool_brand_color_token_pack_faq_a3:
    'Каждый образец сравнивает чёрный и белый текст на этом фоне и выбирает больший контраст WCAG. Подписи показывают коэффициент и вероятное соответствие AA для обычного текста (4,5:1) или крупного (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'Копировать CSS выводит пользовательские свойства :root (--color-50 … --color-950). Копировать JSON — ту же шкалу плюс пространства базы в структурированном виде для design tokens.',
  tool_brand_color_token_pack_faq_a5:
    'Это быстрые подсказки чёрный/белый на каждом шаге. Для своих пар foreground/background или точных уровней WCAG откройте проверку контраста WCAG и вставьте HEX любого образца.',
  tool_brand_color_token_pack_faq_q1: 'Покидает ли мой цвет браузер?',
  tool_brand_color_token_pack_faq_q2: 'Как строится шкала 50–950?',
  tool_brand_color_token_pack_faq_q3: 'Что означают колонки контраста?',
  tool_brand_color_token_pack_faq_q4: 'Что входит в Копировать CSS и JSON?',
  tool_brand_color_token_pack_faq_q5: 'Когда нужна проверка контраста?',
  tool_brand_color_token_pack_generate: 'Сгенерировать',
  tool_brand_color_token_pack_how_body:
    'Введите или выберите один базовый цвет бренда. Страница показывает HEX, RGB, HSL и OKLCH, затем строит 11‑шаговую шкалу (50–950) с превью UI. На каждом образце — рекомендуемый чёрный или белый текст и коэффициент контраста. Скопируйте CSS‑переменные или JSON, когда ramp подходит — всё локально.',
  tool_brand_color_token_pack_how_title: 'Как это работает',
  tool_brand_color_token_pack_preview_label: 'Превью UI',
  tool_brand_color_token_pack_rules_body:
    'Чего ожидать от шкалы, цветовых пространств, подсказок контраста и конфиденциальности.',
  tool_brand_color_token_pack_rules_item_1:
    'Шаг 500 — ваша база. Ниже осветление смешением с белым, выше — затемнение с чёрным (линейное смешение в sRGB).',
  tool_brand_color_token_pack_rules_item_2:
    'Блок базы перечисляет HEX, RGB, HSL и OKLCH одного цвета. OKLCH через sRGB → linear → OKLab для сопоставления с современным CSS.',
  tool_brand_color_token_pack_rules_item_3:
    'Каждый образец рекомендует чёрный или белый текст — тот, что даёт больший контраст на фоне. Коэффициенты по относительной яркости WCAG; метки AA лишь ориентир.',
  tool_brand_color_token_pack_rules_item_4:
    'Конфиденциальность: генерация, превью и копирование локально в этой вкладке — цвета бренда не загружаются.',
  tool_brand_color_token_pack_rules_title: 'Правила, которые стоит знать',
  tool_brand_color_token_pack_sample: 'Пример',
  tool_brand_color_token_pack_scale_label: 'Цветовая шкала (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Цветовые пространства (база)',
  tool_brand_color_token_pack_text_on: 'Текст на базе',
  tool_brand_color_token_pack_title: 'Пакет цветовых токенов бренда — шкала HEX HSL OKLCH',
  tool_brand_color_token_pack_ui_body: 'Текст превью на базовом цвете с рекомендуемым цветом текста.',
  tool_brand_color_token_pack_ui_btn: 'Основное действие',
  tool_brand_color_token_pack_ui_title: 'Заголовок превью',
  tool_brand_color_token_pack_usecase_1:
    'Design system: от одного HEX бренда — согласованная ramp 50–950 и CSS‑переменные для компонентов.',
  tool_brand_color_token_pack_usecase_2:
    'Тёмная тема: светлые шаги (50–300) для поверхностей, глубокие (700–950) для текста на фирменном цвете.',
  tool_brand_color_token_pack_usecase_3:
    'Передача разработчикам: JSON‑токены или CSS custom properties вместо переписывания HEX со скриншота.',
  tool_brand_color_token_pack_usecases_title: 'Когда подходит',
};
export default ru;
