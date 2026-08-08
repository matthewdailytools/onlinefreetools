/**
 * i18n tool shard (smart-website-color-scheme / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Ниже AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ок',
  tool_smart_website_color_scheme_add_theme: 'Добавить тему',
  tool_smart_website_color_scheme_article:
    'Соберите цветовую схему сайта из одного фирменного цвета: общие нейтрали, семантические токены (нейтральные ссылки и фиксированные статусы), светлый превью chrome, самопроверка контраста и готовый к вставке :root CSS — всё локально в браузере.',
  tool_smart_website_color_scheme_bad_hex: 'Введите корректный HEX из 3 или 6 цифр (напр. #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'Id темы должен быть уникальным, 1–32 символа: буквы, цифры, - или _.',
  tool_smart_website_color_scheme_check_muted: 'Вторичный текст на поверхности',
  tool_smart_website_color_scheme_check_on_action: 'Текст на action (on-action)',
  tool_smart_website_color_scheme_check_text: 'Основной текст на поверхности',
  tool_smart_website_color_scheme_checks_label: 'Самопроверка контраста (активная тема)',
  tool_smart_website_color_scheme_clear: 'Очистить',
  tool_smart_website_color_scheme_col_role: 'Роль',
  tool_smart_website_color_scheme_col_token: 'Токен',
  tool_smart_website_color_scheme_col_value: 'Значение',
  tool_smart_website_color_scheme_copy_css: 'Копировать CSS',
  tool_smart_website_color_scheme_copy_done: 'Скопировано',
  tool_smart_website_color_scheme_copy_json: 'Копировать JSON',
  tool_smart_website_color_scheme_cp_brand: 'Бренд',
  tool_smart_website_color_scheme_cp_btn: 'Кнопка outline',
  tool_smart_website_color_scheme_cp_card_body:
    'Текст карточки — приглушённый. Ссылки остаются нейтральными, а не цветом action бренда.',
  tool_smart_website_color_scheme_cp_card_title: 'Заголовок карточки',
  tool_smart_website_color_scheme_cp_err: 'Ошибка использует danger, не бренд.',
  tool_smart_website_color_scheme_cp_link: 'Связанная ссылка',
  tool_smart_website_color_scheme_cp_nav: 'Пункт навигации',
  tool_smart_website_color_scheme_cp_side1: 'Боковая панель',
  tool_smart_website_color_scheme_cp_side2: 'Активно',
  tool_smart_website_color_scheme_desc:
    'Схема сайта: нейтрали + семантические CSS-токены, нейтральные ссылки и фиксированные статусы — локально.',
  tool_smart_website_color_scheme_description:
    'Сгенерируйте цветовую схему сайта в браузере. Выберите фирменный HEX (пример бирюзы #0F6E8C), получите общие нейтрали, action/hover/soft/focus, нейтральные ссылки, фиксированные статусные цвета, превью chrome и самопроверки AA; затем скопируйте :root CSS или JSON. На правилах — не облачный ИИ; ничего не загружается.',
  tool_smart_website_color_scheme_empty: 'Сначала сгенерируйте схему, затем копируйте CSS или JSON.',
  tool_smart_website_color_scheme_example:
    'Загрузите пример (id темы teal, #0F6E8C). В превью — белая поверхность, мягкая бирюзовая подсветка активного пункта (без левой полоски), нейтральные ссылки текста и красная строка danger. Семантика связывает --link с цветом текста (не с --action). Копирование CSS даёт нейтрали в :root и overrides html[data-theme="teal"].',
  tool_smart_website_color_scheme_example_title: 'Пример',
  tool_smart_website_color_scheme_faq_a1:
    'Здесь «умная» значит детерминированные правила: нейтрали фиксированы, бренд порождает action/hover/soft/focus, ссылки остаются нейтральными, статусы не следуют за брендом. Без вызова модели и без загрузки — расчёт в этой вкладке.',
  tool_smart_website_color_scheme_faq_a2:
    'Ссылки по умолчанию берут цвета текста, чтобы страница не превратилась в стену гиперссылок бренда. Фирменный цвет оставлен для действий, выделения, колец фокуса и лёгких soft-заливок.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, success, warning и info не меняются между темами. Янтарный бренд не должен стать цветом ошибки — иначе весь интерфейс выглядит как тревога.',
  tool_smart_website_color_scheme_faq_a4:
    'Сгенерировать шкалу цвета бренда нужна для шкалы 50–950 или списков HEX/HSL/OKLCH. Эта страница — полная светлая семантическая схема (bg/surface/link/action/status) для вставки.',
  tool_smart_website_color_scheme_faq_a5:
    'Самопроверка покрывает несколько ключевых пар активной темы. Для произвольных пар или AAA откройте проверку контраста WCAG и вставьте HEX любого токена.',
  tool_smart_website_color_scheme_faq_q1: '«Умная» схема — это генерация ИИ?',
  tool_smart_website_color_scheme_faq_q2: 'Почему ссылки не в цвете бренда?',
  tool_smart_website_color_scheme_faq_q3: 'Почему статусные цвета не меняются с темой?',
  tool_smart_website_color_scheme_faq_q4: 'Когда лучше Сгенерировать шкалу цвета бренда?',
  tool_smart_website_color_scheme_faq_q5: 'Насколько полна самопроверка контраста?',
  tool_smart_website_color_scheme_generate: 'Сгенерировать',
  tool_smart_website_color_scheme_how_body:
    'Укажите до четырёх тем бренда (id + HEX). Инструмент держит общую нейтральную лестницу, выводит action-токены из каждого бренда, сопоставляет семантические роли (включая нейтральные ссылки и фиксированные статусы), рисует светлый chrome, запускает самопроверки AA и позволяет копировать CSS-переменные или JSON — всё локально.',
  tool_smart_website_color_scheme_how_title: 'Как это работает',
  tool_smart_website_color_scheme_max_themes: 'Можно добавить до 4 тем с общими нейтралями.',
  tool_smart_website_color_scheme_preview_label: 'Светлый превью UI',
  tool_smart_website_color_scheme_primitives_label: 'Примитивы (активная тема + общие нейтрали)',
  tool_smart_website_color_scheme_remove_theme: 'Удалить',
  tool_smart_website_color_scheme_role_action: 'Action / акцент бренда',
  tool_smart_website_color_scheme_role_bg: 'Фон страницы / секции',
  tool_smart_website_color_scheme_role_border: 'Границы и разделители',
  tool_smart_website_color_scheme_role_focus: 'Кольцо фокуса',
  tool_smart_website_color_scheme_role_link: 'Ссылки по умолчанию (нейтральные)',
  tool_smart_website_color_scheme_role_muted: 'Вторичный текст',
  tool_smart_website_color_scheme_role_on_action: 'Текст на сплошном action',
  tool_smart_website_color_scheme_role_status: 'Статус (отвязан от бренда)',
  tool_smart_website_color_scheme_role_surface: 'Приподнятая поверхность / карточки',
  tool_smart_website_color_scheme_role_text: 'Основной / сильный текст',
  tool_smart_website_color_scheme_rules_body:
    'Слои токенов, ссылка ≠ action, независимость статусов, подсказки контраста и приватность.',
  tool_smart_website_color_scheme_rules_item_1:
    'Примитивы хранят сырые нейтрали и производные бренда. Семантика называет назначение (bg, surface, link, action…). Компоненты должны ссылаться только на семантику.',
  tool_smart_website_color_scheme_rules_item_2:
    'Бренд → --action; hover затемняет ~22%; soft ≈ 10% alpha; focus-ring ≈ 40% alpha; --bg — слегка тонированная нейтраль.',
  tool_smart_website_color_scheme_rules_item_3:
    'Ссылки отображаются на text / text-strong (нейтраль). Не привязывайте --link по умолчанию к --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / success / warning / info фиксированы между темами, чтобы бренд никогда не заменял семантику ошибки.',
  tool_smart_website_color_scheme_rules_item_5:
    'Приватность: генерация, превью и копирование в буфер — в этой вкладке. Фирменные цвета не загружаются.',
  tool_smart_website_color_scheme_rules_title: 'Ожидаемые правила',
  tool_smart_website_color_scheme_sample: 'Пример',
  tool_smart_website_color_scheme_semantics_label: 'Семантика (активная тема)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'id темы',
  tool_smart_website_color_scheme_themes_hint:
    'Общие нейтрали и статусы; каждая тема переопределяет только производные бренда. Макс. 4 темы.',
  tool_smart_website_color_scheme_themes_label: 'Темы бренда',
  tool_smart_website_color_scheme_title: 'Цветовая схема сайта — семантические CSS-токены',
  tool_smart_website_color_scheme_usecase_1:
    'Chrome инструмента или SaaS: читаемая светлая оболочка с акцентами бренда на выделении и фокусе, а не на каждой ссылке.',
  tool_smart_website_color_scheme_usecase_2:
    'Ребрендинг лендинга: меняйте бренды через html[data-theme], сохраняя нейтральный каркас и статусные цвета.',
  tool_smart_website_color_scheme_usecase_3:
    'Передача дизайн→разработка: вставляйте :root CSS-переменные вместо HEX-списков со скриншотов.',
  tool_smart_website_color_scheme_usecases_title: 'Когда это уместно',
  tool_smart_website_color_scheme_warn_contrast:
    'Внимание: текст на цвете action ниже 4,5:1 — затемните бренд или поправьте --on-action до публикации сплошных кнопок.',
};
export default ru;
