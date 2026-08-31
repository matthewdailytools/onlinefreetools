/**
 * i18n tool shard (ipv6-cidr / pt).
 * Consultas locais: calculadora cidr ipv6 / notação cidr ipv6.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_ipv6_cidr_title: 'Calculadora CIDR IPv6 — Expanda o prefixo para um intervalo de endereços'
	tool_ipv6_cidr_desc:
		'Calculadora CIDR IPv6: cole 2001:db8:1::/64 para rede, último endereço e forma compacta. No seu dispositivo.',
	tool_ipv6_cidr_description:
		'Calculadora CIDR IPv6: cole um prefixo (exemplo 2001:db8:1::/64) para obter o endereço de rede, o último, a quantidade e as formas compacta/expandida da RFC 5952. Avisa se o prefixo não cai num nibble. Cobre /64 LAN, /127 ponto a ponto e /128 host. Corre no seu dispositivo, sem enviar a um servidor.',
	tool_ipv6_cidr_article:
		'Transforma um CIDR IPv6 em intervalo de rede e texto canónico. Prefixo fora do nibble gera aviso, não erro.',
	tool_ipv6_cidr_calculate: 'Calcular',
	tool_ipv6_cidr_sample: 'Carregar exemplo',
	tool_ipv6_cidr_clear: 'Limpar',
	tool_ipv6_cidr_copy: 'Copiar campos',
	tool_ipv6_cidr_copy_done: 'Copiado',
	tool_ipv6_cidr_input_label: 'CIDR IPv6',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Resultado',
	tool_ipv6_cidr_lbl_network: 'Rede (compacta)',
	tool_ipv6_cidr_lbl_network_exp: 'Rede (expandida)',
	tool_ipv6_cidr_lbl_last: 'Último endereço (compacto)',
	tool_ipv6_cidr_lbl_last_exp: 'Último endereço (expandido)',
	tool_ipv6_cidr_lbl_prefix: 'Comprimento do prefixo',
	tool_ipv6_cidr_lbl_count: 'Número de endereços',
	tool_ipv6_cidr_lbl_nibble: 'Alinhado ao nibble',
	tool_ipv6_cidr_nibble_yes: 'Sim — o comprimento é múltiplo de 4.',
	tool_ipv6_cidr_nibble_no:
		'Não — este prefixo não cai num nibble de 4 bits. O DNS inverso (ip6.arpa) e muitos ISPs esperam passos /4, /8, … /64, /68.',
	tool_ipv6_cidr_note_64: '/64 é o prefixo LAN habitual.',
	tool_ipv6_cidr_note_127: '/127 é ponto a ponto (RFC 6164): dois endereços.',
	tool_ipv6_cidr_note_128: '/128 é um único host.',
	tool_ipv6_cidr_err_empty: 'Introduza um CIDR IPv6 como 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'Não foi possível interpretar como endereço ou CIDR IPv6.',
	tool_ipv6_cidr_err_prefix: 'O comprimento do prefixo deve ser um inteiro de 0 a 128.',
	tool_ipv6_cidr_err_ipv4: 'Esta página é só IPv6. Para IPv4 use CIDR para intervalo IP.',
	tool_ipv6_cidr_how_title: 'Como funciona',
	tool_ipv6_cidr_how_body:
		'A calculadora CIDR IPv6 transforma um prefixo em rede, último endereço e notação compacta. Não testa se o IPv6 “passa” na sua ligação.',
	tool_ipv6_cidr_how_item_1: 'Confirme que a tarefa é calcular o intervalo de um CIDR IPv6, não um teste de conectividade.',
	tool_ipv6_cidr_how_item_2: 'Cole um CIDR IPv6 como 2001:db8:1::/64 (ou Carregar exemplo).',
	tool_ipv6_cidr_how_item_3: 'Leia rede e último endereço (compactos e expandidos) e a quantidade; copie o que precisar.',
	tool_ipv6_cidr_how_item_4: 'Se o prefixo não for múltiplo de 4, leia o aviso de nibble.',
	tool_ipv6_cidr_how_item_5: 'Para IPv4 use CIDR para intervalo IP; para agregar início–fim, IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Fórmula',
	tool_ipv6_cidr_formula_body:
		'Analisa o texto IPv6 (um único “::”). Máscara = 2^128 − 2^(128−prefixo). Rede = endereço AND máscara. Último = rede OR NOT máscara. Compacta com RFC 5952.',
	tool_ipv6_cidr_formula_item_1: 'Rejeita literais IPv4 e prefixos fora de 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR de 128 bits para rede e último endereço.',
	tool_ipv6_cidr_formula_item_3: 'Tamanhos especiais: /128 → 1; /127 → 2 (RFC 6164); /64 → 2^64.',
	tool_ipv6_cidr_formula_item_4: 'Alinhamento nibble: prefixo módulo 4 = 0. Outros valores calculam com aviso.',
	tool_ipv6_cidr_example_title: 'Exemplo',
	tool_ipv6_cidr_example:
		'Entrada: 2001:db8:1::/64. Saída: rede 2001:db8:1:: (expandida 2001:0db8:0001:0000:0000:0000:0000:0000), último 2001:db8:1:0:ffff:ffff:ffff:ffff, quantidade 2^64, nibble alinhado sim.',
	tool_ipv6_cidr_usecases_title: 'Quando ajuda',
	tool_ipv6_cidr_usecase_1: 'Planear uma LAN de escritório em /64 e copiar a rede compacta para o router.',
	tool_ipv6_cidr_usecase_2: 'Confirmar um enlace ponto a ponto que deve ser /127 (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'Normalizar prefixos de documentação como 2001:db8::/32 antes de um print.',
	tool_ipv6_cidr_faq_q1: 'O que significa “não alinhado ao nibble”?',
	tool_ipv6_cidr_faq_a1:
		'O DNS inverso IPv6 e muitas alocações avançam de 4 em 4 bits. Um /67 continua válido, mas ip6.arpa e alguns ISP esperam esses passos. Aqui vê o intervalo e um aviso.',
	tool_ipv6_cidr_faq_q2: 'Qual a diferença entre /64, /127 e /128?',
	tool_ipv6_cidr_faq_a2:
		'/64 é a LAN habitual. /127 são dois endereços ponto a ponto (RFC 6164). /128 é um host. O painel anota quando os cola.',
	tool_ipv6_cidr_faq_q3: 'É o mesmo que consultar a notação CIDR IPv6?',
	tool_ipv6_cidr_faq_a3:
		'Sim para converter notação em rede/último endereço e texto canónico. Não há uma tabela de todos os prefixos IPv6 nesta página.',
	tool_ipv6_cidr_faq_q4: 'Onde expandir um CIDR IPv4?',
	tool_ipv6_cidr_faq_a4: 'Na ferramenta CIDR para intervalo IP. Esta página rejeita literais IPv4 de propósito.',
	tool_ipv6_cidr_faq_q5: 'Isto testa se o IPv6 funciona na minha rede?',
	tool_ipv6_cidr_faq_a5: 'Não. Testes de conectividade são outra tarefa. Aqui só há aritmética de prefixo.',
	tool_ipv6_cidr_faq_q6: 'Os endereços são enviados?',
	tool_ipv6_cidr_faq_a6: 'Não. Ficam no seu dispositivo, neste separador, e não são enviados para um servidor.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — Arquitetura de endereços IPv6',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — Representação textual recomendada de IPv6',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — Prefixos de 127 bits em ligações entre routers',
	tool_ipv6_cidr_disclaimer:
		'Os resultados seguem a aritmética CIDR IPv6 habitual (RFC 4291, 5952, 6164). Não é aconselhamento de encaminhamento; valide alterações críticas no seu laboratório.',
};

export default pt;
