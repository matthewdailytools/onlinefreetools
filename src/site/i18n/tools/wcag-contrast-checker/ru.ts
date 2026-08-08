/**
 * i18n tool shard (wcag-contrast-checker / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA крупный текст',
  tool_wcag_contrast_checker_aa_normal: 'AA обычный текст',
  tool_wcag_contrast_checker_aaa_large: 'AAA крупный текст',
  tool_wcag_contrast_checker_aaa_normal: 'AAA обычный текст',
  tool_wcag_contrast_checker_article:
    'Проверка контраста WCAG по относительной яркости: значки AA/AAA, предпросмотр и подсказки по цветам — всё локально в браузере.',
  tool_wcag_contrast_checker_bad_hex: 'Введите корректные HEX-цвета (#RGB или #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'Фон',
  tool_wcag_contrast_checker_check: 'Проверить',
  tool_wcag_contrast_checker_clear: 'Очистить',
  tool_wcag_contrast_checker_copy: 'Копировать сводку',
  tool_wcag_contrast_checker_copy_done: 'Скопировано',
  tool_wcag_contrast_checker_desc:
    'Проверьте коэффициент контраста и соответствие AA/AAA — цвета не отправляются на сервер.',
  tool_wcag_contrast_checker_description:
    'Выберите цвет текста и фона, чтобы увидеть коэффициент контраста WCAG и результат AA/AAA для обычного и крупного текста. Шаги: выберите или введите HEX, нажмите Проверить, прочитайте коэффициент и значки, поменяйте местами или попробуйте подсказки. Пример: #767676 на #ffffff ≈ 4,54:1 — AA для обычного текста проходит, AAA для обычного — нет. Цвета остаются в браузере.',
  tool_wcag_contrast_checker_empty: 'Сначала выполните проверку, затем копируйте.',
  tool_wcag_contrast_checker_example:
    'Загрузите пример: передний план #767676 на фоне #ffffff даёт около 4,54:1. AA обычный текст — проходит (≥4,5:1), AA крупный — проходит (≥3:1), AAA обычный — не проходит (≥7:1), AAA крупный — проходит (≥4,5:1). Поменяйте цвета местами, чтобы увидеть изменение коэффициента.',
  tool_wcag_contrast_checker_example_title: 'Пример',
  tool_wcag_contrast_checker_fail: 'Не проходит',
  tool_wcag_contrast_checker_faq_a1:
    'AA для обычного текста — не менее 4,5:1; AA для крупного (18 pt обычный или 14 pt жирный) — 3:1; AAA для обычного — 7:1; AAA для крупного — 4,5:1. На этой странице показаны все четыре значка сразу.',
  tool_wcag_contrast_checker_faq_a2:
    'Крупный текст читается легче, поэтому допускается меньший контраст. WCAG считает текст крупным при ≥18 pt обычном или ≥14 pt жирном. В предпросмотре — строка крупного и обычного текста для сравнения.',
  tool_wcag_contrast_checker_faq_a3:
    'Нет. Расчёт выполняется полностью в браузере — значения цветов не загружаются.',
  tool_wcag_contrast_checker_faq_a4:
    'Если пара ниже 4,5:1, инструмент может предложить более светлый или тёмный передний план или фон для AA обычного текста. Это стартовые варианты со смешением к белому/чёрному, а не финальная палитра бренда.',
  tool_wcag_contrast_checker_faq_a5:
    'Используйте эту страницу для проверки любой пары текст/фон. Для полной палитры бренда с семантическими токенами откройте инструмент brand color token pack; цвета с фото можно взять через извлечение цветов из изображения.',
  tool_wcag_contrast_checker_faq_q1: 'Какие пороги контраста в WCAG?',
  tool_wcag_contrast_checker_faq_q2: 'Что считается крупным текстом?',
  tool_wcag_contrast_checker_faq_q3: 'Отправляются ли мои цвета на сервер?',
  tool_wcag_contrast_checker_faq_q4: 'Как пользоваться подсказками по цветам?',
  tool_wcag_contrast_checker_faq_q5: 'Как это связано с токенами цветов бренда?',
  tool_wcag_contrast_checker_fg_label: 'Передний план',
  tool_wcag_contrast_checker_how_body:
    'Задайте текст и фон через палитру или ввод HEX. Страница переводит sRGB в относительную яркость, вычисляет коэффициент контраста и показывает Проходит/Не проходит для AA и AAA (обычный и крупный текст). Можно поменять цвета местами, скопировать сводку или применить подсказку при низком контрасте.',
  tool_wcag_contrast_checker_how_title: 'Как это работает',
  tool_wcag_contrast_checker_pass: 'Проходит',
  tool_wcag_contrast_checker_preview_label: 'Предпросмотр',
  tool_wcag_contrast_checker_preview_large: 'Образец крупного текста',
  tool_wcag_contrast_checker_preview_normal: 'Образец обычного текста',
  tool_wcag_contrast_checker_ratio_label: 'Коэффициент контраста',
  tool_wcag_contrast_checker_rules_body:
    'Контраст WCAG основан на относительной яркости, а не только на оттенке. Сверьтесь с правилами, если коэффициент кажется неожиданным.',
  tool_wcag_contrast_checker_rules_item_1:
    'Относительная яркость L вычисляется из каналов sRGB после кривой линеаризации WCAG. Коэффициент = (Lсветлее + 0,05) / (Lтемнее + 0,05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Пороги: AA обычный текст 4,5:1, AA крупный 3:1, AAA обычный 7:1, AAA крупный 4,5:1. Один коэффициент питает все четыре значка.',
  tool_wcag_contrast_checker_rules_item_3:
    'Поддерживается только непрозрачный sRGB HEX (#RGB или #RRGGBB). Неверный HEX — ошибка; одинаковый передний план и фон дают 1:1 и провал на всех уровнях.',
  tool_wcag_contrast_checker_rules_item_4:
    'Конфиденциальность: цвета обрабатываются локально во вкладке — на сервер ничего не отправляется.',
  tool_wcag_contrast_checker_rules_title: 'Правила, которые стоит знать',
  tool_wcag_contrast_checker_sample: 'Пример',
  tool_wcag_contrast_checker_suggest_bg: 'Попробуйте фон {hex} с этим передним планом для AA обычного текста.',
  tool_wcag_contrast_checker_suggest_fg: 'Попробуйте передний план {hex} на этом фоне для AA обычного текста.',
  tool_wcag_contrast_checker_suggest_label: 'Подсказки',
  tool_wcag_contrast_checker_suggest_none: 'Уже соответствует AA для обычного текста (4,5:1).',
  tool_wcag_contrast_checker_swap: 'Поменять',
  tool_wcag_contrast_checker_title: 'Проверка контраста WCAG — коэффициент AA/AAA',
  tool_wcag_contrast_checker_usecase_1:
    'UI-дизайн: проверьте основной текст и подписи на фоне бренда перед сдачей макета.',
  tool_wcag_contrast_checker_usecase_2:
    'Кнопки и чипы: белый на цветном или наоборот — соответствие AA для обычного или крупного текста.',
  tool_wcag_contrast_checker_usecase_3:
    'Тёмная тема: поменяйте светлые/тёмные поверхности и убедитесь, что второстепенный текст держит 4,5:1 или 3:1 для крупного.',
  tool_wcag_contrast_checker_usecases_title: 'Когда пригодится',
};
export default ru;
