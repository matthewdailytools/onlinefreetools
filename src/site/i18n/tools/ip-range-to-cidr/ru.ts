/**
 * i18n tool shard (ip-range-to-cidr / ru).
 * Локальный запрос: диапазон IP в CIDR.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'Диапазон IP в CIDR — Превратите начало–конец в список префиксов',
	tool_ip_range_to_cidr_desc:
		'Диапазон IP в CIDR: начало–конец → префиксы. Пример: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. На устройстве, без загрузки на сервер.',
	tool_ip_range_to_cidr_description:
		'Преобразование диапазона IP в CIDR: вставьте начало и конец (или несколько строк) и получите покрывающие префиксы. Пример: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Без выравнивания будет несколько префиксов; несколько строк — для агрегации CIDR. Адреса остаются на устройстве и не загружаются на сервер.',
	tool_ip_range_to_cidr_article:
		'Превращает выгрузки ACL в формате начало–конец в список CIDR для правил. IPv4 и IPv6 — отдельными пакетами.',
	tool_ip_range_to_cidr_convert: 'Преобразовать',
	tool_ip_range_to_cidr_sample: 'Загрузить пример',
	tool_ip_range_to_cidr_clear: 'Очистить',
	tool_ip_range_to_cidr_copy: 'Копировать CIDR',
	tool_ip_range_to_cidr_copy_done: 'Скопировано',
	tool_ip_range_to_cidr_input_label: 'Диапазоны IP (по одному в строке)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'Префиксы CIDR',
	tool_ip_range_to_cidr_meta_label: 'Сводка',
	tool_ip_range_to_cidr_meta_tpl: '{n} префикс(ов) · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Начало и конец поменяли местами: первый адрес был больше.',
	tool_ip_range_to_cidr_err_empty: 'Введите хотя бы один диапазон (начало - конец), по одному в строке.',
	tool_ip_range_to_cidr_err_parse: 'Строку нельзя разобрать как IP или диапазон.',
	tool_ip_range_to_cidr_err_mixed: 'Не смешивайте IPv4 и IPv6 в одном преобразовании.',
	tool_ip_range_to_cidr_err_limit: 'Слишком много префиксов CIDR (лимит безопасности). Сузьте диапазоны.',
	tool_ip_range_to_cidr_how_title: 'Как это работает',
	tool_ip_range_to_cidr_how_body:
		'Результат покрывает закрытый интервал одним или несколькими префиксами — когда правило требует CIDR, а у вас только начало–конец.',
	tool_ip_range_to_cidr_how_item_1: 'Без выравнивания границ будет несколько точных префиксов.',
	tool_ip_range_to_cidr_how_item_2: 'Вставьте «A - B» или по строке на диапазон для агрегации.',
	tool_ip_range_to_cidr_how_item_3: 'Преобразуйте, проверьте и скопируйте.',
	tool_ip_range_to_cidr_how_item_4: 'Обратный порядок — подсказка о смене; смешанные семейства — исправьте.',
	tool_ip_range_to_cidr_formula_title: 'Правило',
	tool_ip_range_to_cidr_formula_body:
		'От текущего адреса до конца: берём наибольший выровненный блок степени двойки, умещающийся в остаток.',
	tool_ip_range_to_cidr_formula_item_1: 'Разбор концов в целое; одно семейство.',
	tool_ip_range_to_cidr_formula_item_2: 'Если начало > конца — обмен и заметка.',
	tool_ip_range_to_cidr_formula_item_3: 'Хост-биты = хвостовые нули ∩ степень двойки длины остатка.',
	tool_ip_range_to_cidr_formula_item_4: 'Выдать сеть/длину, сдвинуться на 2^биты, повторить.',
	tool_ip_range_to_cidr_example_title: 'Пример',
	tool_ip_range_to_cidr_example:
		'Ввод: 192.168.1.0 - 192.168.1.255. Вывод: 192.168.1.0/24. Без выравнивания 10.0.0.10 - 10.0.0.20 → 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30, 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'Когда помогает',
	tool_ip_range_to_cidr_usecase_1: 'Перевести ACL «начало–конец» в CIDR-правила МСЭ.',
	tool_ip_range_to_cidr_usecase_2: 'Заполнить security groups в облаке, где принимают только CIDR.',
	tool_ip_range_to_cidr_usecase_3: 'Агрегировать несколько частных диапазонов из тикета построчно.',
	tool_ip_range_to_cidr_faq_q1: 'Почему несколько CIDR?',
	tool_ip_range_to_cidr_faq_a1: 'Без чистой границы один префикс не покрывает точно; выдаются несколько выровненных.',
	tool_ip_range_to_cidr_faq_q2: 'Если сначала больший адрес?',
	tool_ip_range_to_cidr_faq_a2: 'Меняем местами, показываем короткую подсказку и преобразуем.',
	tool_ip_range_to_cidr_faq_q3: 'Можно смешивать IPv4 и IPv6?',
	tool_ip_range_to_cidr_faq_a3: 'Нет. Один пакет — одно семейство; конвертируйте отдельно.',
	tool_ip_range_to_cidr_faq_q4: 'Как работает многострочная агрегация?',
	tool_ip_range_to_cidr_faq_a4: 'Каждая строка сама по себе; промежутки между строками не склеиваются.',
	tool_ip_range_to_cidr_faq_q5: 'Адреса загружаются на сервер?',
	tool_ip_range_to_cidr_faq_a5: 'Нет. Они остаются на устройстве во вкладке и не загружаются на сервер.',
	tool_ip_range_to_cidr_faq_q6: 'Где «CIDR в диапазон IP»?',
	tool_ip_range_to_cidr_faq_a6: 'Эта страница только диапазон→префиксы. Разворот CIDR — обратная задача в другом инструменте.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — маршрутизация CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — адресация IPv6',
	tool_ip_range_to_cidr_disclaimer:
		'Префиксы покрывают введённый закрытый интервал. Это не симулятор протокола маршрутизации; критичные ACL проверяйте в своей среде.',
};

export default ru;
