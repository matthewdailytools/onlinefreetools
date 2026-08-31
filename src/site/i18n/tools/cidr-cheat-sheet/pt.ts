/**
 * i18n tool shard (cidr-cheat-sheet / pt).
 * Consultas: cola cidr / tabela cidr / o que é cidr.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'Cola CIDR — Clique num prefixo para ver máscara e hosts',
	tool_cidr_cheat_sheet_desc:
		'Cola CIDR: clique /8–/32 para máscara, wildcard e hosts. A mesma tabela que um chart CIDR. No seu dispositivo.',
	tool_cidr_cheat_sheet_description:
		'Cola CIDR: clique qualquer prefixo de /8 a /32 para máscara de sub-rede, wildcard e hosts usáveis. Exemplo: /24 → 255.255.255.0 e 254 hosts. Inclui coluna orientada a CompTIA e notas /31 /32. É a mesma tabela que um CIDR chart. Para expandir um bloco concreto use CIDR para intervalo IP. Consultas no browser, sem enviar a um servidor.',
	tool_cidr_cheat_sheet_article: 'Tabela IPv4 clicável. Não é calculadora de um endereço de host arbitrário.',
	tool_cidr_cheat_sheet_sample: 'Carregar exemplo',
	tool_cidr_cheat_sheet_clear: 'Limpar destaque',
	tool_cidr_cheat_sheet_jump: 'Mostrar',
	tool_cidr_cheat_sheet_jump_label: 'Ir ao prefixo',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Prefixo escolhido',
	tool_cidr_cheat_sheet_col_prefix: 'Prefixo',
	tool_cidr_cheat_sheet_col_mask: 'Máscara',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Hosts usáveis',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Costuma sair em tabelas tipo Network+',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Endereços totais',
	tool_cidr_cheat_sheet_note_31: '/31: ambos os endereços são usáveis (RFC 3021).',
	tool_cidr_cheat_sheet_note_32: '/32: um único host. A rede é esse endereço.',
	tool_cidr_cheat_sheet_err_jump: 'Introduza um prefixo inteiro de 8 a 32.',
	tool_cidr_cheat_sheet_how_title: 'Como funciona',
	tool_cidr_cheat_sheet_how_body:
		'A cola CIDR compara o comprimento slash com máscara e hosts. Clique numa linha em vez de abrir um PDF.',
	tool_cidr_cheat_sheet_how_item_1: 'Confirme que vai consultar prefixo → máscara, não expandir um IP concreto.',
	tool_cidr_cheat_sheet_how_item_2: 'Clique numa linha de /8 a /32 ou escreva o prefixo e Mostrar (o exemplo escolhe /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Leia máscara, wildcard, hosts e a coluna CompTIA.',
	tool_cidr_cheat_sheet_how_item_4: 'Em /31 e /32 leia a nota: não subtraia dois.',
	tool_cidr_cheat_sheet_how_item_5: 'Para expandir 192.168.1.0/24 use CIDR para intervalo IP.',
	tool_cidr_cheat_sheet_formula_title: 'Regras',
	tool_cidr_cheat_sheet_formula_body:
		'Máscara = 2^32 − 2^(32−n). Wildcard = NOT da máscara. Hosts: /32 → 1; /31 → 2; senão 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'Só prefixos IPv4 /8 a /32.',
	tool_cidr_cheat_sheet_formula_item_2: 'A coluna CompTIA é dica de estudo, não o programa oficial.',
	tool_cidr_cheat_sheet_formula_item_3: 'Notas /31 e /32 sobrepõem o “menos dois” clássico.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. CIDR veterinário é outra palavra.',
	tool_cidr_cheat_sheet_example_title: 'Exemplo',
	tool_cidr_cheat_sheet_example:
		'Escolha /24. Saída: máscara 255.255.255.0, wildcard 0.0.0.255, hosts 254, total 256. Igual ao exemplo inicial.',
	tool_cidr_cheat_sheet_usecases_title: 'Quando ajuda',
	tool_cidr_cheat_sheet_usecase_1: 'Rever /24 /25 /26 antes de uma pergunta tipo Network+.',
	tool_cidr_cheat_sheet_usecase_2: 'Ver hosts usáveis de um /28 antes de escrever o ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'Explicar que “slash 24” são 256 endereços e máscara 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: 'O que significa CIDR?',
	tool_cidr_cheat_sheet_faq_a1: 'Classless Inter-Domain Routing. O slash é o comprimento. Esta página é uma cola, não um curso.',
	tool_cidr_cheat_sheet_faq_q2: 'Que prefixos saem em tabelas CompTIA?',
	tool_cidr_cheat_sheet_faq_a2: 'Costumam marcar /8, /16, /24 e /25–/28, /30. A coluna aponta-os; não é o programa oficial.',
	tool_cidr_cheat_sheet_faq_q3: 'Como se contam /31 e /32?',
	tool_cidr_cheat_sheet_faq_a3: '/32 é um host. /31 segue RFC 3021. Os outros subtraem dois.',
	tool_cidr_cheat_sheet_faq_q4: 'É o implante veterinário CIDR?',
	tool_cidr_cheat_sheet_faq_a4: 'Não. Na pecuária CIDR é outra coisa. Aqui só há prefixos de rede.',
	tool_cidr_cheat_sheet_faq_q5: 'Posso expandir 192.168.1.37/24 aqui?',
	tool_cidr_cheat_sheet_faq_a5: 'Não. Use CIDR para intervalo IP.',
	tool_cidr_cheat_sheet_faq_q6: 'As consultas são enviadas?',
	tool_cidr_cheat_sheet_faq_a6: 'Não. Ficam no seu dispositivo, neste separador, e não são enviadas para um servidor.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — Encaminhamento entre domínios sem classes',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — Prefixos de 31 bits em ligações ponto a ponto',
	tool_cidr_cheat_sheet_disclaimer:
		'Os números seguem a aritmética CIDR IPv4 habitual. A coluna CompTIA é dica de estudo, não o programa oficial.',
};

export default pt;
