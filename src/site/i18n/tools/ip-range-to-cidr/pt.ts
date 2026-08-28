/**
 * i18n tool shard (ip-range-to-cidr / pt).
 * Termo local: Intervalo IP para CIDR.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'Intervalo IP para CIDR — Transforme início–fim em lista de prefixos',
	tool_ip_range_to_cidr_desc:
		'Intervalo IP para CIDR: início–fim vira prefixos. Ex.: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. No dispositivo, sem enviar ao servidor.',
	tool_ip_range_to_cidr_description:
		'Convertir un intervalo IP em CIDR: cole início e fim (ou várias linhas) e obtenha prefixos que cobrem o intervalo. Exemplo: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Sem alinhamento, saem vários prefixos; várias linhas agregam CIDR. Os endereços ficam no dispositivo e não são enviados a um servidor.',
	tool_ip_range_to_cidr_article:
		'Transforme exportações ACL em formato início–fim na lista de CIDR que o firewall aceita. IPv4 e IPv6 em lotes separados.',
	tool_ip_range_to_cidr_convert: 'Converter',
	tool_ip_range_to_cidr_sample: 'Carregar exemplo',
	tool_ip_range_to_cidr_clear: 'Limpar',
	tool_ip_range_to_cidr_copy: 'Copiar CIDR',
	tool_ip_range_to_cidr_copy_done: 'Copiado',
	tool_ip_range_to_cidr_input_label: 'Intervalos IP (um por linha)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'Prefixos CIDR',
	tool_ip_range_to_cidr_meta_label: 'Resumo',
	tool_ip_range_to_cidr_meta_tpl: '{n} prefixo(s) · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Início e fim foram trocados porque o primeiro endereço era maior.',
	tool_ip_range_to_cidr_err_empty: 'Introduza pelo menos um intervalo (início - fim), um por linha.',
	tool_ip_range_to_cidr_err_parse: 'Não foi possível ler essa linha como IP ou intervalo.',
	tool_ip_range_to_cidr_err_mixed: 'Não misture IPv4 e IPv6 na mesma conversão.',
	tool_ip_range_to_cidr_err_limit: 'Demasiados prefixos CIDR (limite de segurança). Reduza os intervalos.',
	tool_ip_range_to_cidr_how_title: 'Como funciona',
	tool_ip_range_to_cidr_how_body:
		'A saída cobre o intervalo fechado com um ou mais prefixos—útil quando só tem início–fim e a regra pede CIDR.',
	tool_ip_range_to_cidr_how_item_1: 'Se as pontas não alinham, haverá vários prefixos exatos.',
	tool_ip_range_to_cidr_how_item_2: 'Cole “A - B” ou uma linha por intervalo para agregar.',
	tool_ip_range_to_cidr_how_item_3: 'Converta, confira e copie.',
	tool_ip_range_to_cidr_how_item_4: 'Ordem invertida gera aviso de troca; famílias misturadas pedem correção.',
	tool_ip_range_to_cidr_formula_title: 'Fórmula',
	tool_ip_range_to_cidr_formula_body:
		'Do endereço atual até o fim: pegue o maior bloco potência de dois alinhado que ainda cabe no restante.',
	tool_ip_range_to_cidr_formula_item_1: 'Parseie extremos para inteiro; mesma família.',
	tool_ip_range_to_cidr_formula_item_2: 'Se início > fim, troque e avise.',
	tool_ip_range_to_cidr_formula_item_3: 'Bits de host = zeros finais ∩ potência de dois do comprimento restante.',
	tool_ip_range_to_cidr_formula_item_4: 'Emita rede/prefixo e avance 2^bits.',
	tool_ip_range_to_cidr_example_title: 'Exemplo',
	tool_ip_range_to_cidr_example:
		'Entrada: 192.168.1.0 - 192.168.1.255. Saída: 192.168.1.0/24. Sem alinhamento, 10.0.0.10 - 10.0.0.20 gera 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30 e 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'Quando ajuda',
	tool_ip_range_to_cidr_usecase_1: 'Levar exportações ACL início–fim para regras CIDR do firewall.',
	tool_ip_range_to_cidr_usecase_2: 'Preencher security groups na nuvem que só aceitam CIDR.',
	tool_ip_range_to_cidr_usecase_3: 'Agregar vários intervalos privados de um ticket, linha a linha.',
	tool_ip_range_to_cidr_faq_q1: 'Por que saem vários CIDR?',
	tool_ip_range_to_cidr_faq_a1: 'Sem fronteira limpa não há um único prefixo exato; saem vários alinhados que cobrem o intervalo.',
	tool_ip_range_to_cidr_faq_q2: 'E se eu colar o maior primeiro?',
	tool_ip_range_to_cidr_faq_a2: 'Trocamos, mostramos um aviso curto e convertemos.',
	tool_ip_range_to_cidr_faq_q3: 'Posso misturar IPv4 e IPv6?',
	tool_ip_range_to_cidr_faq_a3: 'Não. Um lote, uma família; converta separado.',
	tool_ip_range_to_cidr_faq_q4: 'Como funciona a agregação multilinha?',
	tool_ip_range_to_cidr_faq_a4: 'Cada linha vira CIDR sozinha; lacunas entre linhas não são fundidas.',
	tool_ip_range_to_cidr_faq_q5: 'Os endereços são enviados?',
	tool_ip_range_to_cidr_faq_a5: 'Não. Ficam no dispositivo, nesta aba; não vão para um servidor.',
	tool_ip_range_to_cidr_faq_q6: 'Onde está “CIDR para intervalo IP”?',
	tool_ip_range_to_cidr_faq_a6: 'Esta página só faz intervalo→prefixos. Expandir CIDR é a tarefa inversa, noutra ferramenta.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — Encaminhamento CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — Endereçamento IPv6',
	tool_ip_range_to_cidr_disclaimer:
		'Os prefixos cobrem o intervalo fechado indicado. Não simula protocolos de encaminhamento; valide ACL críticas no seu laboratório.',
};

export default pt;
