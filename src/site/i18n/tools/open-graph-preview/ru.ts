/**
 * i18n tool shard (open-graph-preview / ru).
 * Русский — независимая переработка под местные поисковые привычки.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_og_home_title: 'Предпросмотр Open Graph',
	tool_og_home_desc:
		'Превратите каждый репост страницы в клики: проверьте, как она выглядит при публикации во Facebook, X и мессенджерах, прямо в браузере.',
	tool_og_title: 'Предпросмотр Open Graph — проверьте карточки соцсетей',
	tool_og_description:
		'Теги Open Graph определяют, как выглядит ваша страница при каждом расшаривании: отсутствие изображения или заголовка стоит вам кликов и репостов. Вставьте теги og:/twitter:card или URL, чтобы увидеть карточку Facebook, X и в стиле WhatsApp, найти недостающие поля и исправить пропорции изображения. Шаги: вставьте теги или загрузите URL, посмотрите три карточки и таблицу полей, затем дополните недостающее. Режим вставки работает на вашем устройстве; режим URL один раз загружает страницу и не сохраняет её. Пример: страница с og:image 1200×630 публикуется как большая карточка.',
	tool_og_tags_tab: 'Вставить теги',
	tool_og_url_tab: 'Загрузить URL',
	tool_og_tags_ph: 'Вставьте сюда теги <meta property="og:*"> и <meta name="twitter:*">…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'Загрузить URL',
	tool_og_preview: 'Предпросмотр',
	tool_og_sample: 'Пример',
	tool_og_clear: 'Очистить',
	tool_og_copy: 'Копировать',
	tool_og_copied: 'Скопировано',
	tool_og_running: 'Проверка…',
	tool_og_error_prefix: 'Ошибка: ',
	tool_og_url_error: 'Введите корректный http(s) URL.',
	tool_og_fetch_failed: 'Не удалось загрузить URL. Страница может быть офлайн, блокировать ботов или не возвращать HTML.',
	tool_og_no_tags: 'Теги OG не обнаружены',
	tool_og_no_tags_fallback:
		'Без тегов Open Graph Facebook, X и WhatsApp собирают превью из заголовка, meta description и первой картинки страницы.',
	tool_og_required_label: 'Обязательно',
	tool_og_optional_label: 'Необязательно',
	tool_og_missing_label: 'Отсутствует',
	tool_og_ok_label: 'Есть',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'Состояние тегов',
	tool_og_ratio_warning: 'og:image должна быть около 1200×630 px (1.91:1).',
	tool_og_ratio_ok: 'og:image близка к 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'Не удалось прочитать размер изображения по URL.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Мессенджеры (в стиле WhatsApp)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'twitter:card не задан — платформы выводят карточку summary из тегов og:.',
	tool_og_how_title: 'Как это работает',
	tool_og_how_body:
		'Просмотр разбирает теги og:/twitter:, которые вы вставляете (или извлекает их из HTML, загруженного по URL), и рисует три карточки. Facebook показывает изображение 1.91:1 слева, под ним — заголовок, описание и домен. X следует twitter:card: summary_large_image показывает большое изображение сверху, summary — маленькое рядом с текстом. Мессенджеры вроде WhatsApp показывают одну большую карточку. Таблица помечает og:title, og:description и og:image как обязательные и перечисляет необязательные.',
	tool_og_rules_title: 'Правила предпросмотра',
	tool_og_rules_body: 'Вот размеры и запасные варианты, которые используют платформы, согласно протоколу Open Graph и документации X Cards.',
	tool_og_rules_item_1: 'Обязательные поля: og:title, og:description и og:image. Отсутствующие помечаются, чтобы вы исправили их до публикации.',
	tool_og_rules_item_2: 'og:image размером 1200×630 px (1.91:1) работает на всех крупных платформах. Facebook теперь также поддерживает кадрирование 2:1 и 1:1; мелкие изображения часто растягиваются и выглядят размытыми.',
	tool_og_rules_item_3: 'twitter:card summary_large_image соответствует большому изображению, summary — маленькому. Без twitter:card платформы выводят карточку summary из тегов og:.',
	tool_og_rules_item_4: 'Когда og:title или og:image отсутствуют, платформы берут HTML-заголовок, meta description и первую картинку страницы.',
	tool_og_rules_item_5: 'Размер измеряется загрузкой изображения в браузере; если загрузить не удаётся (заблокировано, офлайн или неверный URL), проверка сообщает «неизвестно».',
	tool_og_example_title: 'Пример',
	tool_og_example:
		'Пример тегов описывает статью с og:image 1200×630 и twitter:card summary_large_image. Предпросмотр показывает карточку Facebook с изображением слева, большую карточку X, карточку в стиле WhatsApp и таблицу, где все обязательные поля присутствуют.',
	tool_og_usecases_title: 'Подходящие сценарии',
	tool_og_usecase_1:
		'Перед публикацией статьи или лендинга вставьте теги один раз и убедитесь, что карточка корректно выглядит во Facebook, X и мессенджерах.',
	tool_og_usecase_2:
		'Когда общая ссылка не показывает изображение или показывает обрезанное, вставьте теги og:, чтобы проверить, отсутствует ли og:image или неверна пропорция.',
	tool_og_usecase_3:
		'После обновления CMS или темы загрузите живой URL и проверьте, что теги og: по-прежнему соответствуют странице.',
	tool_og_faq_q1: 'Что будет, если на странице нет тегов Open Graph?',
	tool_og_faq_a1:
		'Facebook, X и WhatsApp собирают превью из HTML-заголовка, meta description и первой картинки страницы. Карточка может быть неполной или с неверной картинкой, поэтому и существуют обязательные поля og:.',
	tool_og_faq_q2: 'Какого размера должна быть og:image?',
	tool_og_faq_a2:
		'Безопасный размер — 1200×630 px, пропорция 1.91:1, которую принимают все крупные платформы. Facebook теперь также поддерживает кадрирование 2:1 и 1:1. Очень мелкие изображения часто растягиваются и выглядят размытыми.',
	tool_og_faq_q3: 'Как twitter:card связан с тегами og:?',
	tool_og_faq_a3:
		'twitter:card выбирает макет: summary_large_image показывает широкое изображение, summary — маленькое. Если twitter:title, twitter:description или twitter:image отсутствуют, X использует соответствующий тег og:.',
	tool_og_faq_q4: 'Что делает платформа, если og:image отсутствует?',
	tool_og_faq_a4:
		'Она берёт первую картинку из HTML страницы или показывает карточку без изображения. Отсутствие og:image — самая частая причина, почему у общей ссылки нет превью-картинки.',
	tool_og_faq_q5: 'Почему проверка пропорции сообщает «неизвестно»?',
	tool_og_faq_a5:
		'Предпросмотр пытается загрузить og:image загрузкой изображения в браузере, чтобы прочитать реальный размер. Если изображение заблокировано, офлайн, медленное или сервер отклоняет запрос, размер прочитать нельзя, и проверка сообщает неизвестно.',
	tool_og_faq_q6: 'Мои теги куда-то загружаются?',
	tool_og_faq_a6:
		'Нет. В режиме вставки разбор и предпросмотр происходят на вашем устройстве. Режим URL один раз загружает страницу через наш worker и не сохраняет её.',
	tool_og_references: 'ogp.me — протокол Open Graph; X — разметка карточек.',
	tool_og_ref_ogp_label: 'ogp.me — протокол Open Graph',
	tool_og_ref_x_label: 'X — разметка карточек',
};

export default ru;
