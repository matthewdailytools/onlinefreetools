/**
 * i18n tool shard (meta-tag-generator / ru).
 * Русский — независимая переработка под местные поисковые привычки.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_meta_home_title: 'Генератор мета-тегов',
	tool_meta_home_desc:
		'Создайте title, description, canonical и Open Graph теги, которые приносят клики в поиске: сгенерируйте все head-теги страницы прямо в браузере.',
	tool_meta_title: 'Генератор мета-тегов — создайте все head-теги страницы',
	tool_meta_description:
		'Ваши title и meta description — это то, что пользователи видят в Google, а ошибка в canonical может разделить ранжирование между дублирующими URL. Заполните поля title, description, canonical, robots и Open Graph, чтобы получить готовые для вставки мета-теги <head>. Шаги: введите поля, посмотрите подсказки по длине и превью, скопируйте сгенерированный HTML с корректным экранированием. Специальные символы вроде & и < экранируются автоматически, поэтому теги остаются корректными. Работает полностью на вашем устройстве — ничего не загружается. Пример: теги canonical и og рядом.',
	tool_meta_title_label: 'Meta title',
	tool_meta_title_ph: 'Генератор мета-тегов — создайте все head-теги страницы',
	tool_meta_title_hint: 'Держите в районе 60 символов. Поисковые системы могут переписывать более длинные заголовки.',
	tool_meta_desc_label: 'Meta description',
	tool_meta_desc_ph: 'Готовые head-теги для вставки с подсказками по длине, значениями robots и полями OG.',
	tool_meta_desc_hint: 'Держите в районе 155–160 символов. Более длинный текст может обрезаться в выдаче.',
	tool_meta_canonical_label: 'Канонический URL',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'Предпочтительный адрес этой страницы. Укажите полный URL с протоколом.',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— без robots meta —',
	tool_meta_robots_index_follow: 'index, follow (по умолчанию, разрешает индексацию)',
	tool_meta_robots_noindex_follow: 'noindex, follow (скрыть из выдачи, продолжать следить за ссылками)',
	tool_meta_robots_index_nofollow: 'index, nofollow (разрешить индексацию, не следить за ссылками)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (скрыть страницу и не следить за ссылками)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (полный URL)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Создать',
	tool_meta_sample: 'Загрузить пример',
	tool_meta_clear: 'Очистить',
	tool_meta_copy: 'Копировать',
	tool_meta_copied: 'Скопировано',
	tool_meta_error_prefix: 'Ошибка: ',
	tool_meta_canonical_protocol: 'В каноническом URL нет протокола — добавьте https:// или http://, чтобы поисковые системы его прочитали.',
	tool_meta_title_len: 'Заголовок: {n} символов',
	tool_meta_title_len_warn: 'Заголовок: {n} символов — больше 60, стоит сократить.',
	tool_meta_desc_len: 'Описание: {n} символов',
	tool_meta_desc_len_warn: 'Описание: {n} символов — больше 160, может обрезаться.',
	tool_meta_output_label: 'Сгенерированный head-фрагмент',
	tool_meta_how_title: 'Как это работает',
	tool_meta_how_body:
		'Генератор берёт ваши поля и собирает соответствующие head-теги. Пустые необязательные поля пропускаются, поэтому в выводе только то, что вы заполнили. Каждое значение экранируется в HTML: амперсанд превращается в &amp;, а знак «меньше» — в &lt;, что сохраняет теги корректными на вашей странице. Подсказки по длине предупреждают, когда заголовок или описание превышают обычные лимиты, не обрезая ваш текст.',
	tool_meta_rules_title: 'Правила генератора',
	tool_meta_rules_body: 'Эти правила следуют рекомендациям Google Search Central о мета-тегах, title links и канонических URL.',
	tool_meta_rules_item_1:
		'Meta title и описание — это рекомендации, а не директивы: поисковые системы могут переписывать или обрезать их, поэтому держите заголовок около 60 символов, а описание — 155–160.',
	tool_meta_rules_item_2:
		'Все значения экранируются в HTML: & < > " и \' превращаются в сущности, поэтому символы в заголовке или описании не могут сломать разметку тегов.',
	tool_meta_rules_item_3:
		'Канонический URL должен быть полным абсолютным адресом с протоколом. Относительный URL или URL без протокола не годится как цель canonical.',
	tool_meta_rules_item_4:
		'Robots meta использует значения index/noindex и follow/nofollow. Если тега нет, поисковые системы применяют собственный дефолт — индексировать и следить.',
	tool_meta_rules_item_5:
		'Canonical и Open Graph теги могут сосуществовать на одной странице: og:url должен совпадать с каноническим URL, чтобы соцсети указывали на тот же адрес.',
	tool_meta_example_title: 'Пример',
	tool_meta_example:
		'Пример заполняет заголовок, описание, canonical, robots и три поля Open Graph. Сгенерированный фрагмент выводит тег <title>, meta description, каноническую ссылку, robots meta и заполненные og: теги.',
	tool_meta_usecases_title: 'Подходящие сценарии',
	tool_meta_usecase_1:
		'Создание нового шаблона страницы: сгенерируйте блок head один раз, проверьте подсказки по длине и вставьте в шаблон перед запуском.',
	tool_meta_usecase_2:
		'Сдача работы клиенту: сгенерируйте точный head-фрагмент с canonical и OG, затем вставьте его в CMS.',
	tool_meta_usecase_3:
		'Перед публикацией сгенерируйте теги и сверьте их с превью выдачи, чтобы заголовок и описание совпадали с видимой страницей.',
	tool_meta_faq_q1: 'Что означают значения robots meta?',
	tool_meta_faq_a1:
		'index позволяет поисковым системам включать страницу в выдачу, а noindex — исключает её. follow разрешает обходить ссылки на странице, а nofollow запрещает. Если тега нет, по умолчанию используется index, follow.',
	tool_meta_faq_q2: 'Экранируются ли спецсимволы в моих значениях?',
	tool_meta_faq_a2:
		'Да. Генератор экранирует & < > " и \', поэтому амперсанд становится &amp;, а знак «меньше» — &lt;. Ваши теги остаются корректными, даже если значение содержит похожие на разметку символы.',
	tool_meta_faq_q3: 'Могут ли canonical и Open Graph сосуществовать?',
	tool_meta_faq_a3:
		'Да, они обслуживают разные системы. Каноническая ссылка сообщает поисковым системам предпочтительный адрес, а og: теги описывают страницу для соцсетей. Держите og:url в соответствии с каноническим URL.',
	tool_meta_faq_q4: 'Какой длины должны быть заголовок и описание?',
	tool_meta_faq_a4:
		'Обычные ориентиры — около 60 символов для заголовка и 155–160 для описания. Это рекомендации: поисковые системы могут переписывать или обрезать более длинные значения.',
	tool_meta_faq_q5: 'Что происходит с пустыми полями?',
	tool_meta_faq_a5:
		'Пустые необязательные поля пропускаются, поэтому сгенерированный фрагмент содержит только теги для заполненных вами полей.',
	tool_meta_faq_q6: 'Мои данные куда-то загружаются?',
	tool_meta_faq_a6: 'Нет. Генератор работает полностью в вашем браузере, и ничего не загружается.',
	tool_meta_references: 'Google Search Central — Мета-теги, которые понимает Google; Управление title links; Канонические URL.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Мета-теги, которые понимает Google',
	tool_meta_ref_searchcentral_title_label: 'Search Central — Управление title links',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — Канонические URL',
};

export default ru;
