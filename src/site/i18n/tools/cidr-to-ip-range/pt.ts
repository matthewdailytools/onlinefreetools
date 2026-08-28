/**
 * i18n tool shard (cidr-to-ip-range / pt).
 * Locale: Portuguese. H1 = CIDR para intervalo IP (não só “Calculadora CIDR”).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR para intervalo IP — Expanda um prefixo em endereços utilizáveis',
	tool_cidr_to_ip_range_desc:
		'CIDR para intervalo IP: cole 192.168.1.0/24 e obtenha rede, broadcast e hosts utilizáveis. Corre no seu dispositivo, sem enviar ao servidor.',
	tool_cidr_to_ip_range_description:
		'CIDR para intervalo IP: cole uma notação CIDR IPv4 (exemplo 192.168.1.0/24) e veja endereço de rede, broadcast, primeiro/último host utilizável, contagem de hosts e máscara de sub-rede. Também converte máscara ↔ prefixo, verifica se um IP está no bloco e expande endereços com um limite seguro de linhas. É o mesmo trabalho de uma calculadora de notação CIDR—fica no seu dispositivo e não é enviado a um servidor.',
	tool_cidr_to_ip_range_article:
		'Cole um CIDR IPv4 para ver rede, broadcast, hosts utilizáveis, contagem, máscara e wildcard. Modos opcionais: máscara ↔ prefixo, contém/sobreposição ou expansão limitada.',
	tool_cidr_to_ip_range_calculate: 'Calcular',
	tool_cidr_to_ip_range_sample: 'Carregar exemplo',
	tool_cidr_to_ip_range_clear: 'Limpar',
	tool_cidr_to_ip_range_copy: 'Copiar campos',
	tool_cidr_to_ip_range_copy_done: 'Copiado',
	tool_cidr_to_ip_range_mode_label: 'Modo',
	tool_cidr_to_ip_range_mode_range: 'Prefixo → intervalo',
	tool_cidr_to_ip_range_mode_mask: 'Máscara ↔ prefixo',
	tool_cidr_to_ip_range_mode_check: 'Contém / sobrepõe',
	tool_cidr_to_ip_range_mode_expand: 'Expandir (com teto)',
	tool_cidr_to_ip_range_input_label: 'CIDR IPv4',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Máscara de sub-rede (decimal pontilhada)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP ou segundo CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 ou 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Resultado',
	tool_cidr_to_ip_range_lbl_network: 'Rede',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'Primeiro utilizável',
	tool_cidr_to_ip_range_lbl_last: 'Último utilizável',
	tool_cidr_to_ip_range_lbl_hosts: 'N.º de hosts',
	tool_cidr_to_ip_range_lbl_mask: 'Máscara de sub-rede',
	tool_cidr_to_ip_range_lbl_wildcard: 'Máscara wildcard',
	tool_cidr_to_ip_range_lbl_prefix: 'Comprimento do prefixo',
	tool_cidr_to_ip_range_lbl_normalized: 'CIDR normalizado',
	tool_cidr_to_ip_range_norm_hint:
		'Havia bits de host diferentes de zero; os valores mostrados usam o endereço de rede.',
	tool_cidr_to_ip_range_expand_limit:
		'A expansão parou no limite de segurança ({limit} linhas). Use um prefixo mais longo ou aumente o teto mais tarde.',
	tool_cidr_to_ip_range_check_in: 'O endereço está dentro do CIDR.',
	tool_cidr_to_ip_range_check_out: 'O endereço está fora do CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Os blocos são idênticos.',
	tool_cidr_to_ip_range_overlap_contain: 'O primeiro CIDR contém o segundo.',
	tool_cidr_to_ip_range_overlap_inside: 'O primeiro CIDR está dentro do segundo.',
	tool_cidr_to_ip_range_overlap_overlap: 'Os blocos sobrepõem-se parcialmente.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Os blocos são disjuntos.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Prefixo a partir da máscara: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Máscara a partir do prefixo: {mask}',
	tool_cidr_to_ip_range_err_empty: 'Introduza um CIDR IPv4 como 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'Não foi possível interpretar como endereço ou CIDR IPv4.',
	tool_cidr_to_ip_range_err_prefix: 'O comprimento do prefixo deve ser um inteiro de 0 a 32.',
	tool_cidr_to_ip_range_err_ipv6: 'Esta página é só IPv4. Para IPv6 use uma ferramenta CIDR IPv6.',
	tool_cidr_to_ip_range_err_mask: 'Essa máscara decimal pontilhada não é uma máscara de sub-rede IPv4 contígua.',
	tool_cidr_to_ip_range_err_second: 'Introduza um segundo endereço ou CIDR IPv4 para contém/sobrepõe.',
	tool_cidr_to_ip_range_how_title: 'Como funciona',
	tool_cidr_to_ip_range_how_body:
		'Transforme um prefixo CIDR num intervalo IP: rede, broadcast, hosts utilizáveis e máscara. É a mesma tarefa de uma calculadora de notação CIDR.',
	tool_cidr_to_ip_range_how_item_1:
		'Saiba que está a passar de um prefixo CIDR para um intervalo IP (rede, broadcast, hosts utilizáveis)—o mesmo trabalho de uma calculadora de notação CIDR.',
	tool_cidr_to_ip_range_how_item_2: 'Cole um CIDR IPv4 como 192.168.1.0/24 (ou use Carregar exemplo).',
	tool_cidr_to_ip_range_how_item_3:
		'Leia rede, broadcast, primeiro/último utilizável, contagem de hosts e máscara; copie o que precisar.',
	tool_cidr_to_ip_range_how_item_4:
		'Opcionalmente mude para conversão de máscara, contém/sobrepõe ou expandir com teto.',
	tool_cidr_to_ip_range_how_item_5:
		'Para início–fim → CIDR use a ferramenta relacionada IP range to CIDR; para IPv6, uma página dedicada quando disponível.',
	tool_cidr_to_ip_range_formula_title: 'Fórmula',
	tool_cidr_to_ip_range_formula_body:
		'Máscara = 2^32 − 2^(32−prefixo). Rede = endereço AND máscara. Broadcast = rede OR NOT máscara. Hosts utilizáveis seguem /31 (RFC 3021) e casos especiais de /32.',
	tool_cidr_to_ip_range_formula_item_1: 'Analisa a.b.c.d/nn; rejeita IPv6 e prefixos fora de 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'Calcula bits da máscara; depois rede e broadcast com AND/OR bit a bit.',
	tool_cidr_to_ip_range_formula_item_3:
		'Utilizáveis: /32 → um único host; /31 → ambos os endereços (RFC 3021); senão primeiro=rede+1, último=broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4:
		'Se o input tinha bits de host ativos, normaliza para o endereço de rede e mostra um aviso.',
	tool_cidr_to_ip_range_example_title: 'Exemplo',
	tool_cidr_to_ip_range_example:
		'Entrada: 192.168.1.0/24. Saída: rede 192.168.1.0, broadcast 192.168.1.255, utilizáveis 192.168.1.1–192.168.1.254, máscara 255.255.255.0, hosts 254. A entrada 192.168.1.37/24 normaliza para 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'Quando ajuda',
	tool_cidr_to_ip_range_usecase_1:
		'Expandir o CIDR de um security group para primeiro/último endereço antes de escrever uma ACL que ainda use intervalos.',
	tool_cidr_to_ip_range_usecase_2:
		'Entregar a um colega a máscara decimal e a contagem de hosts utilizáveis de um /24 sem abrir uma folha de cálculo.',
	tool_cidr_to_ip_range_usecase_3:
		'Rever um plano Proxmox ou de bridge: confirmar rede e broadcast do CIDR que pretende atribuir.',
	tool_cidr_to_ip_range_faq_q1: 'Como são contados os hosts utilizáveis em /31 e /32?',
	tool_cidr_to_ip_range_faq_a1:
		'/32 é um único host (a rede coincide com esse endereço; sem broadcast clássico). /31 segue RFC 3021: ambos os endereços são utilizáveis ponto a ponto; não há par rede/broadcast por usar.',
	tool_cidr_to_ip_range_faq_q2: 'Isto é o mesmo que uma calculadora de notação CIDR?',
	tool_cidr_to_ip_range_faq_a2:
		'Sim para a tarefa comum: transformar notação CIDR em rede/broadcast/hosts utilizáveis e máscara. O título usa «CIDR para intervalo IP» porque descreve o resultado; pesquisas de calculadora CIDR chegam à mesma ferramenta.',
	tool_cidr_to_ip_range_faq_q3: 'E se eu colar 192.168.1.37/24?',
	tool_cidr_to_ip_range_faq_a3:
		'A ferramenta normaliza para 192.168.1.0/24, mostra um aviso de que bits de host foram ignorados e ainda imprime rede, broadcast e intervalo utilizável desse bloco.',
	tool_cidr_to_ip_range_faq_q4: 'Posso listar cada IP de um bloco grande?',
	tool_cidr_to_ip_range_faq_a4:
		'Use o modo Expandir. A listagem para num limite de segurança (1024 linhas) para um /8 não congelar o separador. Estreite o prefixo ou use os campos de resumo.',
	tool_cidr_to_ip_range_faq_q5: 'Onde converto início–fim em CIDR?',
	tool_cidr_to_ip_range_faq_a5:
		'Essa tarefa inversa está na ferramenta relacionada IP range to CIDR. Esta página só expande um prefixo em campos de intervalo (e listas opcionais com teto).',
	tool_cidr_to_ip_range_faq_q6: 'Os meus endereços são enviados para um servidor?',
	tool_cidr_to_ip_range_faq_a6:
		'Não. Os endereços ficam no seu dispositivo, neste separador do navegador, e não são enviados a um servidor.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Os resultados seguem a aritmética CIDR IPv4 habitual (incluindo RFC 3021 para /31). Não é um consultor de políticas de encaminhamento ou firewall; verifique alterações críticas no seu próprio laboratório.',
};

export default pt;
