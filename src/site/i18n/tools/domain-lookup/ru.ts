/**
 * i18n tool shard (domain-lookup / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
	tool_domain_lookup_article:
		'Посмотрите живые DNS-записи и данные регистрации домена в одном месте. Запросы идут через наш edge к DNS-over-HTTPS и RDAP; контакты часто скрыты, результат может отличаться от локального резолвера.',
	tool_domain_lookup_clear: 'Очистить',
	tool_domain_lookup_col_data: 'Данные',
	tool_domain_lookup_col_name: 'Имя',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Тип',
	tool_domain_lookup_copied: 'Скопировано',
	tool_domain_lookup_copy: 'Копировать сводку',
	tool_domain_lookup_desc:
		'Проверка домена: DNS и регистрация (WHOIS/RDAP) — A/MX/NS, регистратор и срок действия в одном окне.',
	tool_domain_lookup_description:
		'Проверка домена онлайн: живые DNS-записи и данные регистрации в духе WHOIS через RDAP. Шаги: введите домен, например example.com, параллельно запросите DNS-over-HTTPS и RDAP, сравните A/AAAA/MX/NS/TXT с регистратором, статусом и датами истечения. Контакты часто скрыты; запрос идёт через edge, историю не храним.',
	tool_domain_lookup_domain_label: 'Домен',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'Нет DNS-ответов для запрошенных типов.',
	tool_domain_lookup_dns_fail: 'DNS-запрос не удался.',
	tool_domain_lookup_dns_heading: 'DNS-записи',
	tool_domain_lookup_err_empty: 'Введите имя домена.',
	tool_domain_lookup_domain_normalized: 'Приведено к {domain}.',
	tool_domain_lookup_err_format: 'Это не похоже на допустимое доменное имя. Укажите хост вроде example.com (URL исправляются автоматически).',
	tool_domain_lookup_err_need_one: 'Выберите DNS, регистрацию или оба.',
	tool_domain_lookup_captcha_label: 'Проверка безопасности',
	tool_domain_lookup_err_captcha: 'Пройдите проверку безопасности перед запросом.',
	tool_domain_lookup_err_captcha_fail: 'Проверка безопасности не пройдена. Попробуйте снова.',
	tool_domain_lookup_events: 'События',
	tool_domain_lookup_example:
		'Пример: проверьте example.com → в DNS могут быть публичные A/AAAA/NS через DoH; в регистрации — регистратор, коды статуса и события истечения/регистрации из RDAP (поля могут быть скрыты).',
	tool_domain_lookup_example_title: 'Пример',
	tool_domain_lookup_faq_a1:
		'Из-за правил приватности email и телефон владельца часто скрыты. Регистратор, статус и даты обычно видны. Показываем то, что вернул RDAP-сервер.',
	tool_domain_lookup_faq_a2:
		'Неподдерживаемый TLD, таймаут или пустой DNS вроде NXDOMAIN показываются по разделам, чтобы сбой одной части не скрывал другую.',
	tool_domain_lookup_faq_a3:
		'Люди по-прежнему говорят WHOIS. Для большинства gTLD реестр публикует те же данные через RDAP (JSON по HTTPS). Этот инструмент использует RDAP; у некоторых ccTLD RDAP может не быть.',
	tool_domain_lookup_faq_a4:
		'Браузер вызывает наш edge API; worker запрашивает DoH и RDAP upstream. Истории доменов нет — считайте результат разовым.',
	tool_domain_lookup_faq_a5:
		'DNS-ответы — с точки зрения публичного резолвера (DoH). NS в RDAP — что записано в реестре. Задержка распространения или недавние изменения могут расходиться.',
	tool_domain_lookup_faq_q1: 'Почему контакт владельца пустой?',
	tool_domain_lookup_faq_q2: 'Что если DNS или RDAP не сработает?',
	tool_domain_lookup_faq_q3: 'Это WHOIS-запрос?',
	tool_domain_lookup_faq_q4: 'Сохраняете ли вы домены, которые я проверяю?',
	tool_domain_lookup_faq_q5: 'Почему NS в DNS может отличаться от регистрации?',
	tool_domain_lookup_how_body:
		'Введите домен и выберите DNS, регистрацию или оба. Edge worker запрашивает Cloudflare DNS-over-HTTPS для типовых записей и RDAP TLD (через bootstrap IANA) для регистратора, статуса, событий и NS реестра. Каждый блок может успешно отработать или упасть отдельно.',
	tool_domain_lookup_how_title: 'Как это работает',
	tool_domain_lookup_loading: 'Проверка…',
	tool_domain_lookup_lookup: 'Проверить',
	tool_domain_lookup_ns_mismatch:
		'Заметка: NS в DNS отличаются от NS в RDAP — часто из-за распространения или недавнего изменения.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Регистрация',
	tool_domain_lookup_rdap_fail: 'Запрос регистрации (RDAP) не удался.',
	tool_domain_lookup_rdap_heading: 'Регистрация (RDAP)',
	tool_domain_lookup_rdap_link: 'URL RDAP',
	tool_domain_lookup_rdap_ns: 'NS реестра',
	tool_domain_lookup_rdap_ok: 'Данные регистрации из RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Имена доменов',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Регистратор',
	tool_domain_lookup_rules_body:
		'Страница для просмотра DNS резолвера и данных реестра. Ограничения и смысл:',
	tool_domain_lookup_rules_item_1:
		'Запрашиваемые типы DNS: A, AAAA, CNAME, MX, NS, TXT, SOA (публичный DoH).',
	tool_domain_lookup_rules_item_2:
		'Данные регистрации из RDAP — структурированный преемник классического WHOIS для большинства gTLD.',
	tool_domain_lookup_rules_item_3:
		'Контактные поля могут быть скрыты; не рассчитывайте на полные данные владельца.',
	tool_domain_lookup_rules_item_4:
		'Во время распространения DNS и NS в RDAP могут не совпадать.',
	tool_domain_lookup_rules_item_5:
		'Запросы идут через edge к upstream; мы не меняем ваш DNS и регистрацию.',
	tool_domain_lookup_rules_title: 'Что вы получите',
	tool_domain_lookup_sample: 'Пример',
	tool_domain_lookup_status: 'Статус',
	tool_domain_lookup_title: 'Проверка домена — DNS и данные регистрации',
	tool_domain_lookup_usecase_1:
		'Перед запуском: убедитесь, что A/AAAA/CNAME указывают на нужный хост.',
	tool_domain_lookup_usecase_2:
		'Продление или передача: проверьте регистратора, статус и события истечения (контакты могут быть скрыты).',
	tool_domain_lookup_usecase_3:
		'Почта: посмотрите MX и связанные TXT (не полный аудит доставляемости).',
	tool_domain_lookup_usecases_title: 'Когда пригодится',
};
export default ru;
