/**
 * i18n tool shard (check-ssl-certificate-expiration / ru).
 * Сценарий: hostname → crt.sh CT → срок новейшего сертификата (не живой handshake).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'Проверить срок действия SSL-сертификата',
	tool_check_ssl_certificate_expiration_home_desc:
		'Узнайте, когда истекает новейший CT-сертификат для hostname (crt.sh — не живой handshake).',
	tool_check_ssl_certificate_expiration_desc:
		'Узнайте, когда истекает новейший CT-сертификат для hostname (crt.sh — не живой handshake).',
	tool_check_ssl_certificate_expiration_title: 'Проверить срок действия SSL-сертификата',
	tool_check_ssl_certificate_expiration_description:
		'Введите hostname для проверки срока SSL: запрос Certificate Transparency через crt.sh, затем notBefore, notAfter, издатель и оставшиеся дни у новейшего совпадения. Не живой TLS-handshake. Пример: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Проверить',
	tool_check_ssl_certificate_expiration_sample: 'Пример',
	tool_check_ssl_certificate_expiration_clear: 'Очистить',
	tool_check_ssl_certificate_expiration_running: 'Запрос Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'Введите hostname (или вставьте https URL).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Ошибка: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'Не удалось запросить crt.sh. Возможны лимиты или недоступность.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'Hostname отправляется в Worker для запроса crt.sh. Мы не храним его как продуктовую базу.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'CT-сертификат найден',
	tool_check_ssl_certificate_expiration_result_found_no: 'Нет строк CT для этого хоста',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Common name',
	tool_check_ssl_certificate_expiration_result_issuer: 'Издатель',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (истечение)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Дней осталось',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Истёк (по CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'Не истёк (по CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Источник',
	tool_check_ssl_certificate_expiration_result_row_count: 'Строк CT возвращено',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'Задержка логов CT — не peer-сертификат живого TLS-handshake. Даты могут отставать от выпуска или продления.',
	tool_check_ssl_certificate_expiration_result_none: '(нет)',
	tool_check_ssl_certificate_expiration_how_title: 'Как это работает',
	tool_check_ssl_certificate_expiration_how_body:
		'Страница отвечает на один вопрос: когда истекает новейшее CT-совпадение для hostname? Это не аудит живого SSL-handshake.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Введите hostname (путь не нужен).',
	tool_check_ssl_certificate_expiration_how_item_2: 'Нажмите «Проверить»; Worker запрашивает JSON crt.sh.',
	tool_check_ssl_certificate_expiration_how_item_3: 'Прочитайте notBefore, notAfter, издателя и оставшиеся дни у новейшего совпадения.',
	tool_check_ssl_certificate_expiration_how_item_4: 'Считайте даты CT-публикацией — при критичном тайминге подтвердите локальным handshake.',
	tool_check_ssl_certificate_expiration_formula_title: 'Правила запроса CT (не живой TLS)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers не читают peer-сертификат из fetch. Мы используем публичные данные Certificate Transparency через crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1: 'Запрос crt.sh по hostname и разбор JSON-списка.',
	tool_check_ssl_certificate_expiration_formula_item_2: 'Сортировка по notBefore по убыванию, берём новейшую строку.',
	tool_check_ssl_certificate_expiration_formula_item_3: 'Показ notBefore, notAfter, издателя, daysLeft и expired.',
	tool_check_ssl_certificate_expiration_formula_item_4: 'Логи CT могут отставать от живого выпуска или продления.',
	tool_check_ssl_certificate_expiration_formula_item_5: 'Частные или заблокированные хосты отклоняются. Не полный обход цепочки и не заказ у CA.',
	tool_check_ssl_certificate_expiration_example_title: 'Пример',
	tool_check_ssl_certificate_expiration_example:
		'Пример ввода example.com. Worker запрашивает crt.sh, выбирает новейший сертификат и показывает notBefore, notAfter, издателя, daysLeft и предупреждение о задержке CT.',
	tool_check_ssl_certificate_expiration_usecases_title: 'Когда полезно',
	tool_check_ssl_certificate_expiration_usecase_1: 'Проверка срока SSL перед продлением: сколько дней осталось у новейшего CT leaf.',
	tool_check_ssl_certificate_expiration_usecase_2: 'После смены CDN: убедиться, что в CT появился новый notAfter.',
	tool_check_ssl_certificate_expiration_usecase_3: 'Быстрая инвентаризация доменов вендоров, когда нужны только даты истечения.',
	tool_check_ssl_certificate_expiration_faq_q1: 'Это живой SSL-handshake?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'Нет. Workers не читают peer-сертификат из fetch; мы запрашиваем Certificate Transparency (crt.sh).',
	tool_check_ssl_certificate_expiration_faq_q2: 'Почему даты могут отставать?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'Логи CT могут отставать от выпуска или продления. При критичном тайминге подтвердите локальным handshake.',
	tool_check_ssl_certificate_expiration_faq_q3: 'Проверяете ли полную цепочку?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'Фокус — срок новейшего совпадения. Отдельный chain-checker — вторичная потребность, не H1.',
	tool_check_ssl_certificate_expiration_faq_q4: 'Заголовок — «SSL certificate checker»?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'Нет. H1 — «Проверить срок действия SSL-сертификата». Более широкий head не единственный title.',
	tool_check_ssl_certificate_expiration_faq_q5: 'А частные IP-хосты?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Частные или заблокированные хосты отклоняются. Для контекста см. инструмент частных CIDR-диапазонов.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh; Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default ru;
