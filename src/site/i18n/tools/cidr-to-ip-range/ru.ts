/**
 * i18n tool shard (cidr-to-ip-range / ru).
 * Местный поиск: CIDR в диапазон IP; «калькулятор CIDR» / нотация — в desc и FAQ, не единственный H1.
 */
import type { SiteLangDict } from '../../../types';

/** Русские строки инструмента (самостоятельная переработка под поиск). Плейсхолдеры `{n}` / `{mask}` / `{limit}` подставляются в рантайме. */
const ru: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR в диапазон IP — Разверните префикс в адреса',
	tool_cidr_to_ip_range_desc:
		'CIDR в диапазон IP: вставьте 192.168.1.0/24 — сеть, broadcast и доступные хосты. Считается на устройстве, без загрузки на сервер.',
	tool_cidr_to_ip_range_description:
		'CIDR в диапазон IP: вставьте IPv4 CIDR (пример 192.168.1.0/24) и получите адрес сети, broadcast, первый/последний доступный хост, число хостов и маску подсети. Также: маска ↔ длина префикса, проверка вхождения/пересечения и развёртка адресов с лимитом строк. Та же задача, что у калькулятора CIDR / нотации CIDR — всё остаётся на устройстве в этой вкладке браузера и не загружается на сервер.',
	tool_cidr_to_ip_range_article:
		'Вставьте IPv4 CIDR, чтобы увидеть сеть, broadcast, доступный диапазон, число хостов, маску и wildcard. Дополнительно: конвертация маски, contains/overlap и развёртка с безопасным лимитом.',
	tool_cidr_to_ip_range_calculate: 'Рассчитать',
	tool_cidr_to_ip_range_sample: 'Загрузить пример',
	tool_cidr_to_ip_range_clear: 'Очистить',
	tool_cidr_to_ip_range_copy: 'Копировать поля',
	tool_cidr_to_ip_range_copy_done: 'Скопировано',
	tool_cidr_to_ip_range_mode_label: 'Режим',
	tool_cidr_to_ip_range_mode_range: 'Префикс → диапазон',
	tool_cidr_to_ip_range_mode_mask: 'Маска ↔ префикс',
	tool_cidr_to_ip_range_mode_check: 'Вхождение / пересечение',
	tool_cidr_to_ip_range_mode_expand: 'Развернуть (с лимитом)',
	tool_cidr_to_ip_range_input_label: 'IPv4 CIDR',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Маска подсети (точечная)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP или второй CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 или 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Результат',
	tool_cidr_to_ip_range_lbl_network: 'Сеть',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'Первый доступный',
	tool_cidr_to_ip_range_lbl_last: 'Последний доступный',
	tool_cidr_to_ip_range_lbl_hosts: 'Число хостов',
	tool_cidr_to_ip_range_lbl_mask: 'Маска подсети',
	tool_cidr_to_ip_range_lbl_wildcard: 'Wildcard-маска',
	tool_cidr_to_ip_range_lbl_prefix: 'Длина префикса',
	tool_cidr_to_ip_range_lbl_normalized: 'Нормализованный CIDR',
	tool_cidr_to_ip_range_norm_hint: 'В адресе были ненулевые биты хоста; показаны значения для адреса сети.',
	tool_cidr_to_ip_range_expand_limit:
		'Развёртка остановлена на безопасном лимите ({limit} строк). Укоротите префикс или используйте только сводные поля.',
	tool_cidr_to_ip_range_check_in: 'Адрес входит в этот CIDR.',
	tool_cidr_to_ip_range_check_out: 'Адрес вне этого CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Блоки совпадают.',
	tool_cidr_to_ip_range_overlap_contain: 'Первый CIDR содержит второй.',
	tool_cidr_to_ip_range_overlap_inside: 'Первый CIDR лежит внутри второго.',
	tool_cidr_to_ip_range_overlap_overlap: 'Блоки частично пересекаются.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Блоки не пересекаются.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Префикс по маске: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Маска по префиксу: {mask}',
	tool_cidr_to_ip_range_err_empty: 'Введите IPv4 CIDR, например 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'Не удалось разобрать как IPv4-адрес или CIDR.',
	tool_cidr_to_ip_range_err_prefix: 'Длина префикса — целое число от 0 до 32.',
	tool_cidr_to_ip_range_err_ipv6: 'Эта страница только для IPv4. Для IPv6-префиксов используйте отдельный инструмент IPv6 CIDR.',
	tool_cidr_to_ip_range_err_mask: 'Эта точечная запись не является непрерывной IPv4-маской подсети.',
	tool_cidr_to_ip_range_err_second: 'Для вхождения/пересечения укажите второй IPv4-адрес или CIDR.',
	tool_cidr_to_ip_range_how_title: 'Как пользоваться',
	tool_cidr_to_ip_range_how_body:
		'Преобразуйте префикс CIDR в диапазон IP: сеть, broadcast, доступные хосты и маска. Это та же задача, что у калькулятора нотации CIDR.',
	tool_cidr_to_ip_range_how_item_1:
		'Поймите задачу: CIDR → диапазон IP (сеть, broadcast, доступные хосты) — то же, что калькулятор CIDR.',
	tool_cidr_to_ip_range_how_item_2: 'Вставьте IPv4 CIDR вроде 192.168.1.0/24 (или нажмите «Загрузить пример»).',
	tool_cidr_to_ip_range_how_item_3:
		'Просмотрите сеть, broadcast, первый/последний доступный хост, число хостов и маску; скопируйте нужное.',
	tool_cidr_to_ip_range_how_item_4: 'При необходимости переключитесь на конвертацию маски, вхождение/пересечение или развёртку с лимитом.',
	tool_cidr_to_ip_range_how_item_5:
		'Для start–end → CIDR откройте связанный инструмент «IP-диапазон в CIDR»; для IPv6 — отдельную страницу IPv6 CIDR, когда она есть.',
	tool_cidr_to_ip_range_formula_title: 'Формула',
	tool_cidr_to_ip_range_formula_body:
		'Маска = 2^32 − 2^(32−prefix). Сеть = адрес AND маска. Broadcast = сеть OR NOT маска. Доступные хосты: особые случаи /31 (RFC 3021) и /32.',
	tool_cidr_to_ip_range_formula_item_1: 'Разобрать a.b.c.d/nn; отклонить IPv6 и префиксы вне 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'Вычислить биты маски, затем сеть и broadcast через AND/OR.',
	tool_cidr_to_ip_range_formula_item_3:
		'Доступные: /32 — один хост; /31 — оба адреса (RFC 3021); иначе первый=сеть+1, последний=broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4: 'Если во вводе были биты хоста — нормализовать к адресу сети и показать подсказку.',
	tool_cidr_to_ip_range_example_title: 'Пример',
	tool_cidr_to_ip_range_example:
		'Ввод: 192.168.1.0/24. Вывод: сеть 192.168.1.0, broadcast 192.168.1.255, доступные 192.168.1.1–192.168.1.254, маска 255.255.255.0, хостов 254. Ввод 192.168.1.37/24 нормализуется в 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'Когда это помогает',
	tool_cidr_to_ip_range_usecase_1:
		'Развернуть CIDR security group в первый/последний адрес перед ACL, где ещё пишут диапазоны.',
	tool_cidr_to_ip_range_usecase_2:
		'Передать коллеге точечную маску и число доступных хостов для /24 без таблицы.',
	tool_cidr_to_ip_range_usecase_3:
		'Проверить план Proxmox или bridge: подтвердить сеть и broadcast для назначаемого CIDR.',
	tool_cidr_to_ip_range_faq_q1: 'Как считаются доступные хосты для /31 и /32?',
	tool_cidr_to_ip_range_faq_a1:
		'/32 — один хост (сеть равна этому адресу; классического broadcast нет). /31 по RFC 3021: оба адреса usable на point-to-point; пары «сеть/broadcast» не резервируются.',
	tool_cidr_to_ip_range_faq_q2: 'Что будет, если вставить 192.168.1.37/24?',
	tool_cidr_to_ip_range_faq_a2:
		'Инструмент нормализует до 192.168.1.0/24, покажет короткую подсказку про игнорированные биты хоста и всё равно выведет сеть, broadcast и доступный диапазон блока.',
	tool_cidr_to_ip_range_faq_q3: 'Это то же самое, что калькулятор нотации CIDR?',
	tool_cidr_to_ip_range_faq_a3:
		'Да для обычной задачи: из нотации CIDR получить сеть/broadcast/доступные хосты и маску. В заголовке — «CIDR в диапазон IP», потому что так яснее результат; поиски вроде «калькулятор CIDR» ведут сюда же.',
	tool_cidr_to_ip_range_faq_q4: 'Можно ли развернуть все IP большого блока?',
	tool_cidr_to_ip_range_faq_a4:
		'Режим «Развернуть». Список останавливается на лимите (1024 строки), чтобы /8 не заморозил вкладку. Сузьте префикс или смотрите сводные поля.',
	tool_cidr_to_ip_range_faq_q5: 'Где превратить start–end в CIDR?',
	tool_cidr_to_ip_range_faq_a5:
		'Обратная задача — в связанном инструменте «IP-диапазон в CIDR». Здесь только развёртка префикса в поля диапазона (и опциональный список с лимитом).',
	tool_cidr_to_ip_range_faq_q6: 'Загружаются ли адреса на сервер?',
	tool_cidr_to_ip_range_faq_a6:
		'Нет. Адреса остаются на устройстве в этой вкладке браузера и не загружаются на сервер.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Результаты следуют обычной арифметике IPv4 CIDR (включая RFC 3021 для /31). Это не совет по маршрутизации или firewall; критичные изменения проверяйте в своей среде.',
};

export default ru;
