/**
 * i18n tool shard (cidr-cheat-sheet / ru).
 * Запросы: шпаргалка cidr / таблица cidr / что такое cidr.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'Шпаргалка CIDR — нажмите префикс, чтобы увидеть маску и хосты',
	tool_cidr_cheat_sheet_desc:
		'Шпаргалка CIDR: нажмите /8–/32 для маски, wildcard и хостов. Та же таблица, что CIDR chart. На вашем устройстве.',
	tool_cidr_cheat_sheet_description:
		'Шпаргалка CIDR: нажмите любой префикс от /8 до /32 — маска подсети, wildcard и число используемых хостов. Пример: /24 → 255.255.255.0 и 254 используемых хоста. Есть колонка в духе CompTIA и сноски /31 /32. Это та же таблица, что CIDR chart. Чтобы развернуть конкретный блок, используйте CIDR в диапазон IP. Клики в браузере, на сервер ничего не отправляется.',
	tool_cidr_cheat_sheet_article: 'Кликабельная таблица префиксов IPv4. Это не калькулятор произвольного хоста.',
	tool_cidr_cheat_sheet_sample: 'Загрузить пример',
	tool_cidr_cheat_sheet_clear: 'Снять выделение',
	tool_cidr_cheat_sheet_jump: 'Показать',
	tool_cidr_cheat_sheet_jump_label: 'Перейти к префиксу',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Выбранный префикс',
	tool_cidr_cheat_sheet_col_prefix: 'Префикс',
	tool_cidr_cheat_sheet_col_mask: 'Маска',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Используемые хосты',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Часто в таблицах в стиле Network+',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Всего адресов',
	tool_cidr_cheat_sheet_note_31: '/31: оба адреса используются (RFC 3021).',
	tool_cidr_cheat_sheet_note_32: '/32: один хост. Сеть — этот адрес.',
	tool_cidr_cheat_sheet_err_jump: 'Введите целый префикс от 8 до 32.',
	tool_cidr_cheat_sheet_how_title: 'Как это работает',
	tool_cidr_cheat_sheet_how_body:
		'Шпаргалка CIDR сопоставляет длину слэша с маской и хостами. Нажмите строку вместо PDF.',
	tool_cidr_cheat_sheet_how_item_1: 'Убедитесь, что задача — справка по префиксу, а не разворот конкретного IP.',
	tool_cidr_cheat_sheet_how_item_2: 'Нажмите строку /8–/32 или введите префикс и Показать (пример выбирает /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Прочитайте маску, wildcard, хосты и колонку CompTIA.',
	tool_cidr_cheat_sheet_how_item_4: 'Для /31 и /32 читайте сноску: не вычитайте два.',
	tool_cidr_cheat_sheet_how_item_5: 'Чтобы развернуть 192.168.1.0/24, используйте CIDR в диапазон IP.',
	tool_cidr_cheat_sheet_formula_title: 'Правила',
	tool_cidr_cheat_sheet_formula_body:
		'Маска = 2^32 − 2^(32−n). Wildcard = NOT маски. Хосты: /32 → 1; /31 → 2; иначе 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'Только префиксы IPv4 /8–/32.',
	tool_cidr_cheat_sheet_formula_item_2: 'Колонка CompTIA — учебная пометка, не официальная программа.',
	tool_cidr_cheat_sheet_formula_item_3: 'Сноски /31 и /32 важнее классического «минус два».',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. Ветеринарный CIDR — другое слово.',
	tool_cidr_cheat_sheet_example_title: 'Пример',
	tool_cidr_cheat_sheet_example:
		'Выберите /24. Вывод: маска 255.255.255.0, wildcard 0.0.0.255, хосты 254, всего 256. Как в начальном примере.',
	tool_cidr_cheat_sheet_usecases_title: 'Когда полезно',
	tool_cidr_cheat_sheet_usecase_1: 'Просмотреть /24 /25 /26 перед вопросом таблицы Network+.',
	tool_cidr_cheat_sheet_usecase_2: 'Проверить хосты /28 перед написанием ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'Объяснить, что slash 24 — это 256 адресов и маска 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: 'Что значит CIDR?',
	tool_cidr_cheat_sheet_faq_a1: 'Classless Inter-Domain Routing. Слэш — длина префикса. Это шпаргалка, не курс сетей.',
	tool_cidr_cheat_sheet_faq_q2: 'Какие префиксы в таблицах CompTIA?',
	tool_cidr_cheat_sheet_faq_a2: 'Часто /8, /16, /24 и /25–/28, /30. Колонка их отмечает; это не официальная программа.',
	tool_cidr_cheat_sheet_faq_q3: 'Как считать /31 и /32?',
	tool_cidr_cheat_sheet_faq_a3: '/32 один хост. /31 по RFC 3021. Остальные вычитают два.',
	tool_cidr_cheat_sheet_faq_q4: 'Это ветеринарный имплант CIDR?',
	tool_cidr_cheat_sheet_faq_a4: 'Нет. В животноводстве CIDR другое. Здесь только сетевые префиксы.',
	tool_cidr_cheat_sheet_faq_q5: 'Можно развернуть 192.168.1.37/24 здесь?',
	tool_cidr_cheat_sheet_faq_a5: 'Нет. Используйте CIDR в диапазон IP.',
	tool_cidr_cheat_sheet_faq_q6: 'Клики куда-то отправляются?',
	tool_cidr_cheat_sheet_faq_a6: 'Нет. Они остаются на вашем устройстве, в этой вкладке, и не загружаются на сервер.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — бесклассовая маршрутизация между доменами',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — префиксы 31 бит на каналах точка-точка',
	tool_cidr_cheat_sheet_disclaimer:
		'Цифры следуют обычной арифметике CIDR IPv4. Колонка CompTIA — учебная пометка, не официальная программа.',
};

export default ru;
