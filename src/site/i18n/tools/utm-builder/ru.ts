/**
 * i18n tool shard (utm-builder / ru).
 * Русский — независимая переработка под местные поисковые привычки.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_utm_home_title: 'Конструктор UTM',
	tool_utm_home_desc:
		'Измеряйте, какие кампании реально приносят трафик: создавайте чистые трекинговые ссылки с utm_source, medium, campaign, term и content прямо в браузере.',
	tool_utm_title: 'Конструктор UTM — создайте трекинговые ссылки кампании',
	tool_utm_description:
		'Чистые UTM-метки — единственный способ доказать, какие кампании, письма или публикации реально приносят вам трафик; без них ваши усилия в SEO и маркетинге невидимы в аналитике. Соберите трекинговую ссылку из URL целевой страницы и utm_source, utm_medium, utm_campaign, utm_term и utm_content. Шаги: вставьте базовый URL, заполните пять параметров, скопируйте сгенерированную ссылку с правильной URL-кодировкой. Существующие параметры запроса сохраняются и объединяются, а не перезаписываются. Работает полностью на вашем устройстве — ничего не загружается. Пример: https://example.com/page с source=newsletter, medium=email и campaign=summer_sale.',
	tool_utm_url_label: 'URL целевой страницы',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Введите URL целевой страницы.',
	tool_utm_url_invalid: 'URL выглядит неверным. Проверьте адрес и попробуйте снова.',
	tool_utm_url_protocol: 'Протокол не обнаружен — https:// добавлен автоматически.',
	tool_utm_source_label: 'Источник кампании (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Где видна ссылка: newsletter, facebook, google.',
	tool_utm_medium_label: 'Канал кампании (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'Как доставляется ссылка: email, cpc, social, referral.',
	tool_utm_campaign_label: 'Название кампании (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'Акция или продукт, к которому относится ссылка.',
	tool_utm_campaign_required: 'Название кампании (utm_campaign) обязательно.',
	tool_utm_term_label: 'Ключевое слово кампании (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Необязательно. Идентифицирует ключевые слова платного поиска.',
	tool_utm_content_label: 'Содержимое кампании (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Необязательно. Различает объявления или ссылки, ведущие на один URL.',
	tool_utm_generate: 'Создать',
	tool_utm_sample: 'Пример',
	tool_utm_clear: 'Очистить',
	tool_utm_copy: 'Копировать',
	tool_utm_copied: 'Скопировано',
	tool_utm_error_prefix: 'Ошибка: ',
	tool_utm_output_label: 'Сгенерированная ссылка',
	tool_utm_table_title: 'Разбор параметров',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Значение',
	tool_utm_param_status: 'Статус',
	tool_utm_param_required: 'Обязательно',
	tool_utm_param_optional: 'Необязательно',
	tool_utm_param_empty: 'Пусто',
	tool_utm_encoding_note:
		'Значения кодируются через encodeURIComponent: пробелы становятся %20, а не-ASCII символы тоже кодируются.',
	tool_utm_case_note:
		'Google Analytics различает регистр в значениях. Используйте единый нижний регистр, чтобы один канал группировался вместе.',
	tool_utm_how_title: 'Как это работает',
	tool_utm_how_body:
		'Конструктор разбирает ваш базовый URL, сохраняет его существующие параметры запроса и добавляет параметры UTM через разделитель &. Каждое значение кодируется в процентах, чтобы пробелы, китайские символы и спецсимволы пережили в ссылке. Если у URL есть hash, он переносится после всех параметров. Пять параметров UTM — это то, что Google Analytics читает, чтобы отнести визит к источнику, каналу и кампании.',
	tool_utm_rules_title: 'Правила конструктора',
	tool_utm_rules_body: 'Это определения и правила кодирования параметров UTM по документации Google Analytics.',
	tool_utm_rules_item_1: 'utm_source показывает, где была видна ссылка; utm_medium — как она была доставлена. Оба обязательны для атрибуции.',
	tool_utm_rules_item_2: 'utm_campaign — название акции, здесь оно обязательно. utm_term и utm_content необязательны: term для платных ключевых слов, content для различия двух ссылок.',
	tool_utm_rules_item_3: 'Если у базового URL уже есть параметры запроса, они сохраняются, а UTM добавляются через &; существующий параметр с тем же именем заменяется.',
	tool_utm_rules_item_4: 'Значения кодируются в процентах: пробелы становятся %20, не-ASCII символы тоже. Фрагмент (#якорь) всегда остаётся после строки запроса.',
	tool_utm_rules_item_5: 'Используйте единый нижний регистр. Значения UTM чувствительны к регистру, поэтому facebook и Facebook будут двумя источниками.',
	tool_utm_example_title: 'Пример',
	tool_utm_example:
		'Пример ввода — https://example.com/page с utm_source=newsletter, utm_medium=email и utm_campaign=summer_sale. Сгенерированная ссылка — https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Подходящие сценарии',
	tool_utm_usecase_1:
		'Соцсети: создайте по ссылке на платформу с одним utm_campaign, чтобы GA4 отразил всю акцию одной строкой.',
	tool_utm_usecase_2:
		'Email-рассылки: используйте utm_source=newsletter, utm_medium=email и разные значения content, чтобы сравнить два баннера, ведущие на одну страницу.',
	tool_utm_usecase_3:
		'QR-коды и печатные ссылки: полный UTM URL длинный, но после генерации его можно сократить, сохранив параметры.',
	tool_utm_faq_q1: 'В чём разница между utm_source и utm_medium?',
	tool_utm_faq_a1:
		'utm_source показывает, где была видна ссылка (newsletter, facebook, google), а utm_medium — как она доставлена (email, cpc, social, referral). GA4 объединяет их с utm_campaign, чтобы назвать источник трафика.',
	tool_utm_faq_q2: 'У URL уже есть параметры запроса. Они потеряются?',
	tool_utm_faq_a2:
		'Нет. Существующие параметры сохраняются, а UTM добавляются через &. Если в URL уже есть параметр с тем же именем, новое значение заменяет его.',
	tool_utm_faq_q3: 'А пробелы, китайские символы или спецсимволы в значениях?',
	tool_utm_faq_a3:
		'Каждое значение кодируется в процентах: пробелы становятся %20, не-ASCII символы тоже кодируются. Сгенерированная ссылка остаётся рабочей в почтовых клиентах, мессенджерах и браузерах.',
	tool_utm_faq_q4: 'Значения UTM чувствительны к регистру?',
	tool_utm_faq_a4:
		'Да. Google Analytics считает utm_source=Facebook и utm_source=facebook двумя разными источниками. Используйте единый нижний регистр, чтобы один канал группировался вместе.',
	tool_utm_faq_q5: 'Когда использовать utm_term и utm_content?',
	tool_utm_faq_a5:
		'utm_term идентифицирует ключевые слова платного поиска — полезно для Google Ads. utm_content различает две ссылки или объявления на один URL, например баннер в шапке и ссылку в подвале.',
	tool_utm_faq_q6: 'Мой URL куда-то загружается?',
	tool_utm_faq_a6: 'Нет. Конструктор работает полностью в вашем браузере, и ничего не загружается.',
	tool_utm_references: 'Google Analytics — Пользовательские кампании (UTM); Google Search Central — Параметры URL.',
	tool_utm_ref_ga_label: 'Google Analytics — Пользовательские кампании (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — Параметры URL',
};

export default ru;
