/**
 * i18n tool shard (private-cidr-ranges / ru).
 * Local search: chastnye diapazony cidr / chastnye ip cidr.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Частные диапазоны CIDR — Проверьте, является ли IP или префикс частным или special-use',
	tool_private_cidr_ranges_desc:
		'Частные диапазоны CIDR: RFC1918, CGNAT и ULA. Пример: 100.64.1.10 → общее пространство CGNAT.',
	tool_private_cidr_ranges_description:
		'Частные диапазоны CIDR: вставьте IP или CIDR, чтобы увидеть частные IP-диапазоны RFC1918, CGNAT (100.64/10), ULA IPv6 и блоки документации (пример: 100.64.1.10 → общее пространство). Кликабельная таблица с пометкой про Tailscale в CGNAT. Проверка остаётся на устройстве и не загружается на сервер.',
	tool_private_cidr_ranges_article:
		'Вставьте адрес или CIDR для сопоставления с частными или special-use префиксами (RFC1918, CGNAT, link-local, loopback, документация, ULA IPv6). Клик по строке таблицы загружает этот префикс. Страница не разворачивает списки хостов.',
	tool_private_cidr_ranges_check: 'Проверить',
	tool_private_cidr_ranges_sample: 'Загрузить пример',
	tool_private_cidr_ranges_clear: 'Очистить',
	tool_private_cidr_ranges_copy: 'Копировать сводку',
	tool_private_cidr_ranges_copy_done: 'Скопировано',
	tool_private_cidr_ranges_input_label: 'IP-адрес или CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 или 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'Все',
	tool_private_cidr_ranges_filter_v4: 'Таблица IPv4',
	tool_private_cidr_ranges_filter_v6: 'Таблица IPv6',
	tool_private_cidr_ranges_result_label: 'Совпадения',
	tool_private_cidr_ranges_table_title: 'Справочная таблица (клик по строке)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Название',
	tool_private_cidr_ranges_col_family: 'Семейство',
	tool_private_cidr_ranges_col_spec: 'Спецификация',
	tool_private_cidr_ranges_no_match:
		'Нет во встроенном списке частных/special-use (возможен глобальный unicast или другое пространство).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale и другие продукты часто используют это пространство CGNAT (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'Введите адрес IPv4/IPv6 или CIDR.',
	tool_private_cidr_ranges_err_parse: 'Не удалось разобрать как IP-адрес или CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'Частный RFC1918',
	tool_private_cidr_ranges_name_rfc1918_172: 'Частный RFC1918',
	tool_private_cidr_ranges_name_rfc1918_192: 'Частный RFC1918',
	tool_private_cidr_ranges_name_cgnat: 'Общее пространство CGNAT',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Документация (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Документация (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Документация (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'ULA IPv6',
	tool_private_cidr_ranges_name_linklocal_v6: 'Link-local IPv6',
	tool_private_cidr_ranges_name_doc_v6: 'Документация IPv6',
	tool_private_cidr_ranges_note_rfc1918_10: 'Частное использование — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Частное использование — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Частное использование — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Общее пространство для carrier-grade NAT (RFC 6598). Не RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Loopback хоста — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Только документация — не использовать в продакшене (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Только документация — не использовать в продакшене (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Только документация — не использовать в продакшене (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Уникальные локальные адреса — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'Link-local IPv6 — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Префикс документации — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'Как это работает',
	tool_private_cidr_ranges_how_body:
		'Вы классифицируете адрес в частном или special-use CIDR (RFC1918, CGNAT, ULA, документация…), а не считаете хосты. Вставьте адрес, прочитайте совпадение или кликните таблицу.',
	tool_private_cidr_ranges_how_item_1:
		'Убедитесь, что цель — классификация частных/special-use блоков, а не развёртывание списка хостов.',
	tool_private_cidr_ranges_how_item_2: 'Вставьте адрес IPv4/IPv6 или CIDR (пример 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'Прочитайте категорию, CIDR и примечание RFC (и подсказку Tailscale при совпадении CGNAT).',
	tool_private_cidr_ranges_how_item_4: 'По желанию кликните строку таблицы, чтобы проверить этот префикс.',
	tool_private_cidr_ranges_how_item_5:
		'Если совпадений нет, считайте адрес вне этого списка — проверьте, прежде чем называть «частным».',
	tool_private_cidr_ranges_formula_title: 'Правила',
	tool_private_cidr_ranges_formula_body:
		'Ввод разбирается как адрес или префикс, затем проверяется по встроенной таблице. Более длинные (более специфичные) совпадения идут первыми.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 использует 32-битные числа; IPv6 — 128-битные. Семейства не смешиваются.',
	tool_private_cidr_ranges_formula_item_2: 'Для голого адреса: совпадение с каждым CIDR таблицы, который его содержит.',
	tool_private_cidr_ranges_formula_item_3:
		'Для CIDR на входе: совпадение с записями, полностью содержащими этот префикс (тест подмножества).',
	tool_private_cidr_ranges_formula_item_4:
		'Сортировка по убыванию длины префикса — самый специфичный блок первым.',
	tool_private_cidr_ranges_example_title: 'Пример',
	tool_private_cidr_ranges_example:
		'Ввод: 100.64.1.10. Вывод: общее пространство CGNAT 100.64.0.0/10 (RFC 6598), с пометкой, что Tailscale и похожие продукты часто используют это пространство. Ввод 10.0.0.5 совпадает с RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'Когда полезно',
	tool_private_cidr_ranges_usecase_1:
		'Выбрать блок VPC или lab и убедиться, что это настоящий RFC1918, прежде чем открывать правила firewall.',
	tool_private_cidr_ranges_usecase_2:
		'Увидеть адреса 100.x и отделить пространство CGNAT / Tailscale от частных диапазонов RFC1918.',
	tool_private_cidr_ranges_usecase_3:
		'Проверить ULA IPv6 или адрес документации 2001:db8, прежде чем считать его продакшен-маршрутизацией.',
	tool_private_cidr_ranges_faq_q1: 'Является ли 100.64.0.0/10 «частным»? Как связан Tailscale?',
	tool_private_cidr_ranges_faq_a1:
		'Это общее пространство для carrier-grade NAT (RFC 6598), не RFC1918. Tailscale и другие overlay часто используют этот CIDR CGNAT; страница только помечает пространство — это не консоль Tailscale.',
	tool_private_cidr_ranges_faq_q2: 'Какие три частных блока RFC1918?',
	tool_private_cidr_ranges_faq_a2:
		'10.0.0.0/8, 172.16.0.0/12 и 192.168.0.0/16 — классические частные IP-диапазоны в форме CIDR.',
	tool_private_cidr_ranges_faq_q3: 'Что такое ULA IPv6 (fc00::/7)?',
	tool_private_cidr_ranges_faq_a3:
		'Уникальные локальные адреса для локальных сетей. Это не глобальный unicast в Интернете; не ожидайте публичной маршрутизации.',
	tool_private_cidr_ranges_faq_q4: 'Загружаются ли адреса или разворачиваются хосты?',
	tool_private_cidr_ranges_faq_a4:
		'Нет — здесь нет списка хостов и broadcast; это для инструмента CIDR-to-range. Проверка остаётся на устройстве и не загружается на сервер.',
	tool_private_cidr_ranges_faq_q5: 'Зачем отмечать префиксы документации?',
	tool_private_cidr_ranges_faq_a5:
		'Блоки вроде 192.0.2.0/24 и 2001:db8::/32 зарезервированы для примеров и docs. Использование в продакшене ломает ожидания связности.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'Совпадения следуют опубликованным RFC для частных и special-use пространств. Это не совет по маршрутизации или firewall; проверяйте критичные изменения в своём lab.',
};

export default ru;
