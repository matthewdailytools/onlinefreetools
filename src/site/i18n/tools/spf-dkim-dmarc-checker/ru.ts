/**
 * i18n tool shard (spf-dkim-dmarc-checker / ru).
 * Поиск: проверка spf dkim dmarc; проверка dmarc записи; spf lookup.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'Проверка SPF DKIM DMARC',
	tool_spf_dkim_dmarc_checker_desc:
		'Проверьте SPF, DKIM и DMARC домена и прочитайте ~all/-all и политику p= простым языком.',
	tool_spf_dkim_dmarc_checker_description:
		'Введите домен отправки и необязательный DKIM selector (по умолчанию google). DoH ищет SPF, _dmarc и selector._domainkey, затем объясняет ~all/-all и p=. Пример: google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Домен',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'DKIM selector',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Проверить',
	tool_spf_dkim_dmarc_checker_sample: 'Пример',
	tool_spf_dkim_dmarc_checker_clear: 'Очистить',
	tool_spf_dkim_dmarc_checker_running: 'Запрос SPF, DKIM и DMARC через DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Введите корректный домен (только хост или вставьте полный URL).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Ошибка: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'DNS-запрос не удался. Резолвер недоступен или имя отклонено.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'Домен и DKIM selector отправляются в Worker для DNS-over-HTTPS. Мы не храним их как продуктовую базу.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Найдено',
	tool_spf_dkim_dmarc_checker_result_found_no: 'Не найдено',
	tool_spf_dkim_dmarc_checker_result_record: 'Запись',
	tool_spf_dkim_dmarc_checker_result_explain: 'Пояснение',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'квалификатор all',
	tool_spf_dkim_dmarc_checker_result_policy: 'Политика DMARC (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Selector',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Открытый ключ (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Есть',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Нет или пусто',
	tool_spf_dkim_dmarc_checker_how_title: 'Как пользоваться',
	tool_spf_dkim_dmarc_checker_how_body:
		'Проверка доставляемости обычно требует SPF, DKIM и DMARC вместе. Введите домен отправки, при необходимости смените selector и прочитайте каждую TXT с кратким резюме политики.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Введите домен отправки и необязательный DKIM selector (по умолчанию google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Нажмите «Проверить»; Worker запрашивает TXT через DoH для SPF, _dmarc и selector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Прочитайте каждую запись и пояснение ~all/-all и политики DMARC p=.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'Исправьте DNS у провайдера и проверьте снова — страница не переписывает зону.',
	tool_spf_dkim_dmarc_checker_formula_title: 'Что мы запрашиваем',
	tool_spf_dkim_dmarc_checker_formula_body:
		'Запросы следуют публичным формам TXT из RFC 7208, 6376 и 7489. Мы суммируем поля политики; не отправляем почту и не зондируем ящики.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT на домене с v=spf1; показываем конечный квалификатор all (~all soft fail, -all hard fail).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT на _dmarc.домен с v=DMARC1; выделяем p= (none / quarantine / reject) и опциональный pct.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT на {selector}._domainkey.домен; проверяем наличие непустого открытого ключа p=.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Отсутствующие записи отмечаются честно. Сбой DoH — ошибка; это не живой тест подписи ESP.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'Без SMTP RCPT и без правок зоны. Проверка «существует ли адрес» вне области.',
	tool_spf_dkim_dmarc_checker_example_title: 'Пример',
	tool_spf_dkim_dmarc_checker_example:
		'Пример ввода google.com с DKIM selector google. Worker запрашивает SPF, _dmarc.google.com и google._domainkey.google.com и показывает найдено/запись/пояснение.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'Когда полезно',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Перед запуском: после публикации DNS ESP убедитесь, что SPF, DKIM и DMARC домена отправки на месте.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'Проверка DMARC-записи: читайте p=none против quarantine/reject простым языком, а не только сырой TXT.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'SPF lookup, если письма в спаме: смотрите ~all или -all и согласуйте DKIM selector с ESP.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'Почему три записи на одной странице?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Провайдеры обычно оценивают все три. Один только DMARC-checker может пропустить сломанный SPF или неверный DKIM selector.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'Какой DKIM selector по умолчанию?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — типично для Google Workspace. Смените, если ESP публикует другой (например s1 или k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'Это проверка существования email-адреса?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'Нет. Только DNS-аутентификация домена (SPF lookup, ключ DKIM, политика DMARC). Существование ящиков вне области.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'Показываете только сырой TXT?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'Нет. Есть запись плюс строка пояснения механизмов SPF all и политики DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'Сохраняется ли мой домен?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'Домен и selector должны дойти до Worker для DNS-over-HTTPS. Мы не храним проверки как долговременную продуктовую БД. Это edge DNS-инструмент, не «без загрузки».',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default ru;
