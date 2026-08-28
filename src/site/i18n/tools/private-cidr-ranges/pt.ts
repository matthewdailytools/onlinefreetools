/**
 * i18n tool shard (private-cidr-ranges / pt).
 * Local search: intervalos cidr privados / ips privados cidr.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Intervalos CIDR privados — Verifique se um IP ou prefixo é privado ou de uso especial',
	tool_private_cidr_ranges_desc:
		'Intervalos CIDR privados: RFC1918, CGNAT e ULA. Exemplo: 100.64.1.10 → espaço compartilhado CGNAT.',
	tool_private_cidr_ranges_description:
		'Intervalos CIDR privados: cole um IP ou CIDR para ver faixas de IP privadas RFC1918, CGNAT (100.64/10), ULA IPv6 e blocos de documentação (exemplo: 100.64.1.10 → espaço compartilhado). Tabela clicável com nota sobre Tailscale e CGNAT. A verificação fica no seu dispositivo e não é enviada ao servidor.',
	tool_private_cidr_ranges_article:
		'Cole um endereço ou CIDR para corresponder a prefixos privados ou de uso especial (RFC1918, CGNAT, link-local, loopback, documentação, ULA IPv6). Clique numa linha da tabela para carregar esse prefixo. Esta página não expande listas de hosts.',
	tool_private_cidr_ranges_check: 'Verificar',
	tool_private_cidr_ranges_sample: 'Carregar exemplo',
	tool_private_cidr_ranges_clear: 'Limpar',
	tool_private_cidr_ranges_copy: 'Copiar resumo',
	tool_private_cidr_ranges_copy_done: 'Copiado',
	tool_private_cidr_ranges_input_label: 'Endereço IP ou CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 ou 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'Todos',
	tool_private_cidr_ranges_filter_v4: 'Tabela IPv4',
	tool_private_cidr_ranges_filter_v6: 'Tabela IPv6',
	tool_private_cidr_ranges_result_label: 'Correspondências',
	tool_private_cidr_ranges_table_title: 'Tabela de referência (clique numa linha)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Nome',
	tool_private_cidr_ranges_col_family: 'Família',
	tool_private_cidr_ranges_col_spec: 'Norma',
	tool_private_cidr_ranges_no_match:
		'Não está na lista integrada de privados/uso especial (pode ser unicast global ou outro espaço).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale e outros produtos costumam usar este espaço CGNAT (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'Introduza um endereço IPv4/IPv6 ou um CIDR.',
	tool_private_cidr_ranges_err_parse: 'Não foi possível interpretar como IP ou CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'Privado RFC1918',
	tool_private_cidr_ranges_name_rfc1918_172: 'Privado RFC1918',
	tool_private_cidr_ranges_name_rfc1918_192: 'Privado RFC1918',
	tool_private_cidr_ranges_name_cgnat: 'Espaço compartilhado CGNAT',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Documentação (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Documentação (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Documentação (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'ULA IPv6',
	tool_private_cidr_ranges_name_linklocal_v6: 'Link-local IPv6',
	tool_private_cidr_ranges_name_doc_v6: 'Documentação IPv6',
	tool_private_cidr_ranges_note_rfc1918_10: 'Uso privado — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Uso privado — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Uso privado — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Espaço compartilhado para carrier-grade NAT (RFC 6598). Não é RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Loopback de host — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Apenas documentação — não use em produção (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Apenas documentação — não use em produção (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Apenas documentação — não use em produção (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Endereços locais únicos — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'Link-local IPv6 — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Prefixo de documentação — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'Como funciona',
	tool_private_cidr_ranges_how_body:
		'Classifica se um endereço pertence a um CIDR privado ou de uso especial (RFC1918, CGNAT, ULA, documentação…), sem contar hosts. Cole um endereço, leia a correspondência ou clique na tabela.',
	tool_private_cidr_ranges_how_item_1:
		'Confirme que quer classificar blocos privados/de uso especial — não expandir uma lista de hosts.',
	tool_private_cidr_ranges_how_item_2: 'Cole um endereço IPv4/IPv6 ou CIDR (exemplo 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'Leia a categoria, o CIDR e a nota RFC (e a dica Tailscale quando CGNAT coincidir).',
	tool_private_cidr_ranges_how_item_4: 'Opcionalmente clique numa linha da tabela para verificar esse prefixo.',
	tool_private_cidr_ranges_how_item_5:
		'Se nada coincidir, trate como fora desta lista privada/especial — confirme antes de chamar de «privado».',
	tool_private_cidr_ranges_formula_title: 'Regras',
	tool_private_cidr_ranges_formula_body:
		'Analisa o input como endereço ou prefixo e testa pertencimento na tabela integrada. Correspondências mais longas (mais específicas) aparecem primeiro.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 usa inteiros de 32 bits; IPv6 usa 128 bits. Famílias nunca se misturam.',
	tool_private_cidr_ranges_formula_item_2: 'Para endereço simples: corresponda a cada CIDR da tabela que o contenha.',
	tool_private_cidr_ranges_formula_item_3:
		'Para CIDR de entrada: corresponda entradas que contenham totalmente esse prefixo (teste de subconjunto).',
	tool_private_cidr_ranges_formula_item_4:
		'Ordene por comprimento de prefixo decrescente para o bloco mais específico aparecer primeiro.',
	tool_private_cidr_ranges_example_title: 'Exemplo',
	tool_private_cidr_ranges_example:
		'Entrada: 100.64.1.10. Saída: espaço compartilhado CGNAT 100.64.0.0/10 (RFC 6598), com nota de que Tailscale e produtos similares usam este espaço. Entrada 10.0.0.5 corresponde a RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'Quando ajuda',
	tool_private_cidr_ranges_usecase_1:
		'Escolha um bloco VPC ou lab e confirme que é RFC1918 privado antes de abrir regras de firewall.',
	tool_private_cidr_ranges_usecase_2:
		'Veja endereços 100.x e separe espaço CGNAT / Tailscale das faixas IP privadas RFC1918.',
	tool_private_cidr_ranges_usecase_3:
		'Verifique ULA IPv6 ou endereço de documentação 2001:db8 antes de tratar como roteamento de produção.',
	tool_private_cidr_ranges_faq_q1: 'O que é ULA IPv6 (fc00::/7)?',
	tool_private_cidr_ranges_faq_a1:
		'Endereços locais únicos para redes locais. Não são unicast global na Internet; não espere roteamento público.',
	tool_private_cidr_ranges_faq_q2: 'Quais são os três blocos CIDR privados RFC1918?',
	tool_private_cidr_ranges_faq_a2:
		'10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16 — as faixas IP privadas clássicas em notação CIDR.',
	tool_private_cidr_ranges_faq_q3: 'Por que sinalizar prefixos de documentação?',
	tool_private_cidr_ranges_faq_a3:
		'Blocos como 192.0.2.0/24 e 2001:db8::/32 são reservados para exemplos e docs. Usar em produção quebra expectativas de conectividade.',
	tool_private_cidr_ranges_faq_q4: '100.64.0.0/10 é «privado»? E o Tailscale?',
	tool_private_cidr_ranges_faq_a4:
		'É espaço compartilhado para carrier-grade NAT (RFC 6598), não RFC1918. Tailscale e overlays usam este CIDR CGNAT; esta página só rotula o espaço — não é consola Tailscale.',
	tool_private_cidr_ranges_faq_q5: 'Expande hosts ou envia os meus endereços?',
	tool_private_cidr_ranges_faq_a5:
		'Não — sem lista de hosts nem broadcast aqui; isso é para uma ferramenta CIDR-to-range. A verificação fica no dispositivo e não é enviada ao servidor.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'Correspondências seguem RFCs publicados para espaços privados e de uso especial. Isto não é conselho de roteamento ou firewall; valide mudanças críticas no seu lab.',
};

export default pt;
