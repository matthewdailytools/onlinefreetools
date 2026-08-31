/**
 * i18n tool shard (ipv6-cidr / ru).
 * Локальные запросы: калькулятор cidr ipv6 / префикс ipv6.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_ipv6_cidr_title: 'Калькулятор CIDR IPv6 — разверните префикс в диапазон адресов',
	tool_ipv6_cidr_desc:
		'Калькулятор CIDR IPv6: вставьте 2001:db8:1::/64 — сеть, последний адрес и сжатая запись. На вашем устройстве.',
	tool_ipv6_cidr_description:
		'Калькулятор CIDR IPv6: вставьте префикс (пример 2001:db8:1::/64), чтобы получить адрес сети, последний адрес, число адресов и сжатую/полную запись по RFC 5952. Предупреждает, если префикс не на границе nibble. Учтены /64 для LAN, /127 для точка-точка и /128 для хоста. Счёт на вашем устройстве, на сервер ничего не отправляется.',
	tool_ipv6_cidr_article:
		'Превращает CIDR IPv6 в диапазон сети и канонический сжатый текст. Несовпадение nibble — предупреждение, не ошибка.',
	tool_ipv6_cidr_calculate: 'Рассчитать',
	tool_ipv6_cidr_sample: 'Загрузить пример',
	tool_ipv6_cidr_clear: 'Очистить',
	tool_ipv6_cidr_copy: 'Копировать поля',
	tool_ipv6_cidr_copy_done: 'Скопировано',
	tool_ipv6_cidr_input_label: 'CIDR IPv6',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Результат',
	tool_ipv6_cidr_lbl_network: 'Сеть (сжатая)',
	tool_ipv6_cidr_lbl_network_exp: 'Сеть (полная)',
	tool_ipv6_cidr_lbl_last: 'Последний адрес (сжатый)',
	tool_ipv6_cidr_lbl_last_exp: 'Последний адрес (полный)',
	tool_ipv6_cidr_lbl_prefix: 'Длина префикса',
	tool_ipv6_cidr_lbl_count: 'Число адресов',
	tool_ipv6_cidr_lbl_nibble: 'Выравнивание nibble',
	tool_ipv6_cidr_nibble_yes: 'Да — длина кратна 4.',
	tool_ipv6_cidr_nibble_no:
		'Нет — префикс не на границе 4 бит. Обратный DNS (ip6.arpa) и многие ISP ждут шаги /4, /8, … /64, /68.',
	tool_ipv6_cidr_note_64: '/64 — обычный префикс LAN.',
	tool_ipv6_cidr_note_127: '/127 — точка-точка (RFC 6164): два адреса.',
	tool_ipv6_cidr_note_128: '/128 — один хост.',
	tool_ipv6_cidr_err_empty: 'Введите CIDR IPv6, например 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'Не удалось разобрать как адрес или CIDR IPv6.',
	tool_ipv6_cidr_err_prefix: 'Длина префикса должна быть целым числом от 0 до 128.',
	tool_ipv6_cidr_err_ipv4: 'Эта страница только для IPv6. Для IPv4 используйте CIDR в диапазон IP.',
	tool_ipv6_cidr_how_title: 'Как это работает',
	tool_ipv6_cidr_how_body:
		'Калькулятор CIDR IPv6 превращает префикс в диапазон сети и сжатую запись. Это не проверка, «работает ли IPv6» у вас в сети.',
	tool_ipv6_cidr_how_item_1: 'Убедитесь, что задача — посчитать диапазон CIDR IPv6, а не тест связности.',
	tool_ipv6_cidr_how_item_2: 'Вставьте CIDR IPv6 вроде 2001:db8:1::/64 (или загрузите пример).',
	tool_ipv6_cidr_how_item_3: 'Прочитайте сеть и последний адрес (сжатые и полные) и скопируйте нужное.',
	tool_ipv6_cidr_how_item_4: 'Если префикс не кратен 4, прочитайте предупреждение nibble.',
	tool_ipv6_cidr_how_item_5: 'Для IPv4 — CIDR в диапазон IP; чтобы свернуть начало–конец — IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Формула',
	tool_ipv6_cidr_formula_body:
		'Разбор текста IPv6 (один «::»). Маска = 2^128 − 2^(128−префикс). Сеть = адрес AND маска. Последний = сеть OR NOT маска. Сжатие по RFC 5952.',
	tool_ipv6_cidr_formula_item_1: 'Отклонять литералы IPv4 и префиксы вне 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR на 128 битах для сети и последнего адреса.',
	tool_ipv6_cidr_formula_item_3: 'Особые размеры: /128 → 1; /127 → 2 (RFC 6164); /64 → 2^64.',
	tool_ipv6_cidr_formula_item_4: 'Выравнивание nibble: префикс mod 4 = 0. Иначе расчёт с предупреждением.',
	tool_ipv6_cidr_example_title: 'Пример',
	tool_ipv6_cidr_example:
		'Ввод: 2001:db8:1::/64. Вывод: сеть 2001:db8:1:: (полная 2001:0db8:0001:0000:0000:0000:0000:0000), последний 2001:db8:1:0:ffff:ffff:ffff:ffff, число 2^64, nibble выровнен да.',
	tool_ipv6_cidr_usecases_title: 'Когда полезно',
	tool_ipv6_cidr_usecase_1: 'Спланировать офисную LAN как /64 и вставить сжатую сеть в конфиг маршрутизатора.',
	tool_ipv6_cidr_usecase_2: 'Проверить канал точка-точка, который должен быть /127 (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'Привести документационные префиксы вроде 2001:db8::/32 к сжатой форме перед скриншотом.',
	tool_ipv6_cidr_faq_q1: 'Что значит «не выровнен по nibble»?',
	tool_ipv6_cidr_faq_a1:
		'Обратный DNS IPv6 и многие выделения идут шагами по 4 бита. /67 всё ещё валидный диапазон, но ip6.arpa и часть ISP ждут nibble-шаги. Здесь диапазон показан с предупреждением.',
	tool_ipv6_cidr_faq_q2: 'Чем отличаются /64, /127 и /128?',
	tool_ipv6_cidr_faq_a2:
		'/64 — обычная LAN. /127 — два адреса точка-точка (RFC 6164). /128 — один хост. Панель отмечает это при вставке.',
	tool_ipv6_cidr_faq_q3: 'Это то же, что смотреть нотацию CIDR IPv6?',
	tool_ipv6_cidr_faq_a3:
		'Да для превращения нотации в сеть/последний адрес и канонический текст. Полной таблицы всех префиксов IPv6 здесь нет.',
	tool_ipv6_cidr_faq_q4: 'Где развернуть CIDR IPv4?',
	tool_ipv6_cidr_faq_a4: 'Инструмент CIDR в диапазон IP. Эта страница намеренно отвергает литералы IPv4.',
	tool_ipv6_cidr_faq_q5: 'Это проверяет, работает ли IPv6 у меня в сети?',
	tool_ipv6_cidr_faq_a5: 'Нет. Тесты связности — другая задача. Здесь только арифметика префикса.',
	tool_ipv6_cidr_faq_q6: 'Адреса куда-то отправляются?',
	tool_ipv6_cidr_faq_a6: 'Нет. Они остаются на вашем устройстве, в этой вкладке, и не загружаются на сервер.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — архитектура адресов IPv6',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — рекомендуемое текстовое представление IPv6',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — префиксы 127 бит на каналах между маршрутизаторами',
	tool_ipv6_cidr_disclaimer:
		'Результаты следуют обычной арифметике CIDR IPv6 (RFC 4291, 5952, 6164). Это не совет по маршрутизации; проверяйте критичные изменения в своей лаборатории.',
};

export default ru;
