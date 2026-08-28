/**
 * i18n tool shard (terraform-cidrsubnet / ru).
 * Локальный поиск: terraform cidrsubnet, рассчитать cidrsubnet, подсеть terraform.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Узнайте дочерний CIDR, который вернул бы Terraform',
	tool_terraform_cidrsubnet_desc:
		'Рассчитать terraform cidrsubnet. Пример: 10.1.2.0/24, 4, 15 → 10.1.2.240/28. На устройстве, без загрузки на сервер.',
	tool_terraform_cidrsubnet_description:
		'Рассчитайте terraform cidrsubnet: укажите родительский префикс, newbits и netnum — получите дочерний CIDR. Пример: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. Здесь же cidrhost и cidrnetmask. Числа остаются на устройстве и не загружаются на сервер.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet возвращает дочерний сетевой префикс, а не IP хоста. newbits — дополнительные биты префикса, не «четыре подсети». netnum с нуля. cidrhost — хост; cidrnetmask только IPv4. Счёт в браузере по правилам HashiCorp.',
	tool_terraform_cidrsubnet_evaluate: 'Вычислить',
	tool_terraform_cidrsubnet_sample: 'Загрузить пример',
	tool_terraform_cidrsubnet_clear: 'Очистить',
	tool_terraform_cidrsubnet_copy_cidr: 'Копировать CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'Копировать HCL',
	tool_terraform_cidrsubnet_copy_ip: 'Копировать адрес',
	tool_terraform_cidrsubnet_copy_done: 'Скопировано',
	tool_terraform_cidrsubnet_prefix_label: 'Родительский префикс',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'Дочерний CIDR',
	tool_terraform_cidrsubnet_result_hcl_label: 'Вызов HCL',
	tool_terraform_cidrsubnet_result_len_label: 'Новая длина',
	tool_terraform_cidrsubnet_result_range_label: 'Допустимый netnum',
	tool_terraform_cidrsubnet_result_bits_label: 'Как делятся биты',
	tool_terraform_cidrsubnet_table_title: 'Все netnum для этого newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Смежные функции',
	tool_terraform_cidrsubnet_host_prefix_label: 'Префикс cidrhost',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'Вычислить cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'Адрес хоста',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'Префикс cidrnetmask (только IPv4)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'Вычислить cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'Маска',
	tool_terraform_cidrsubnet_err_empty: 'Укажите CIDR-префикс и целые newbits и netnum.',
	tool_terraform_cidrsubnet_err_prefix: 'Это не CIDR-префикс (нужны адрес/длина, IPv4 или IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits — целое ≥ 0, итоговая длина не больше 32 (IPv4) или 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'При newbits={nb} допустимы netnum 0–{max}; {nn} не помещается — Terraform тоже отклонит.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum не помещается в оставшиеся биты хоста.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask только для IPv4. Для IPv6 используйте cidrsubnet или cidrhost.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Родитель /{old} плюс {nb} бит → /{neu}. netnum {nn} занимает добавленные биты; остаток хостовых бит: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'Как пользоваться',
	tool_terraform_cidrsubnet_how_body:
		'Перенесите три аргумента из HCL сюда и сверьте дочерний CIDR до apply.',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet даёт префикс подсети. IP хоста считает cidrhost.',
	tool_terraform_cidrsubnet_how_item_2: 'Вставьте родительский CIDR из переменной Terraform (например 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'Задайте newbits (добавленные биты префикса) и netnum (номер с нуля).',
	tool_terraform_cidrsubnet_how_item_4: 'Прочитайте дочерний CIDR, скопируйте HCL или сверьте с terraform console.',
	tool_terraform_cidrsubnet_how_item_5: 'Если newbits не вмещает netnum, будет ошибка — Terraform отклонит те же значения.',
	tool_terraform_cidrsubnet_formula_title: 'Правила расчёта',
	tool_terraform_cidrsubnet_formula_body:
		'Хостовые биты родителя обнуляются, затем netnum записывается в добавленные биты префикса. Ведущие нули в октетах IPv4 читаются как десятичные, как у HashiCorp.',
	tool_terraform_cidrsubnet_formula_item_1: 'новая_длина = длина_родителя + newbits (IPv4 ≤32, IPv6 ≤128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'Адрес сети ИЛИ (netnum, сдвинутый на оставшиеся хостовые биты).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost пишет hostnum в хостовые биты (отрицательный — с конца). cidrnetmask — точечная маска IPv4.',
	tool_terraform_cidrsubnet_example_title: 'Пример',
	tool_terraform_cidrsubnet_example:
		'Ввод: 10.1.2.0/24, newbits 4, netnum 15. Вывод: 10.1.2.240/28. Четыре бита дают 0–15; 15 заполняет старший ниббл последнего октета (240).',
	tool_terraform_cidrsubnet_usecases_title: 'Когда это нужно',
	tool_terraform_cidrsubnet_usecase_1:
		'Перед apply посмотреть подсети VPC: cidrsubnet(var.vpc_cidr, 8, count.index) — AZ0 это netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'Сверить официальный пример 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28, затем cidrhost на этом /28 (хосты 1 и 14).',
	tool_terraform_cidrsubnet_usecase_3:
		'Нарезать IPv6 ULA: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'newbits=4 — это четыре подсети?',
	tool_terraform_cidrsubnet_faq_a1:
		'Нет. Это четыре дополнительных бита префикса: 16 значений netnum (0–15), дочерняя сеть длиннее на четыре бита (/24 → /28).',
	tool_terraform_cidrsubnet_faq_q2: 'Почему netnum 16 падает при newbits 4?',
	tool_terraform_cidrsubnet_faq_a2:
		'В четыре бита входят только 0–15. Terraform не заворачивает число, а выдаёт ошибку. Здесь так же, чтобы в HCL не попал CIDR, который никогда не применится.',
	tool_terraform_cidrsubnet_faq_q3: 'Чем cidrhost отличается от cidrsubnet?',
	tool_terraform_cidrsubnet_faq_a3:
		'cidrsubnet возвращает префикс с длиной. cidrhost — один адрес хоста. hostnum 0 — адрес сети; отрицательный считается с конца (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q4: 'Почему cidrnetmask не принимает IPv6?',
	tool_terraform_cidrsubnet_faq_a4:
		'Функция HashiCorp только для IPv4 и возвращает точечную маску вроде 255.255.255.0. Для IPv6 оставьте длину префикса и используйте cidrsubnet или cidrhost.',
	tool_terraform_cidrsubnet_faq_q5: 'Считаете ли cidrsubnets или модуль hashicorp/subnets/cidr?',
	tool_terraform_cidrsubnet_faq_a5:
		'Нет. cidrsubnets (мн. ч.) выдаёт несколько подряд префиксов с нуля. Модуль Registry — другой инструмент. Здесь один вызов за раз.',
	tool_terraform_cidrsubnet_faq_q6: 'Префиксы загружаются на сервер?',
	tool_terraform_cidrsubnet_faq_a6:
		'Нет. Они остаются на устройстве, в этой вкладке, без загрузки на сервер. Нужна конкретная версия CLI — используйте terraform console.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — функция cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — функция cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — функция cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — запись CIDR',
	tool_terraform_cidrsubnet_disclaimer:
		'Цель — совпасть с cidrsubnet, cidrhost и cidrnetmask HashiCorp. Это не terraform console; при расхождении версий смотрите официальную документацию.',
};

export default ru;
