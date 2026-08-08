/**
 * i18n tool shard (domain-lookup / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
	tool_domain_lookup_article:
		'Veja num só lugar os registros DNS ao vivo e os dados de registro de um domínio. As consultas passam pelo nosso edge para DNS-over-HTTPS e RDAP; contactos costumam estar ocultos e o resultado pode diferir do seu resolver local.',
	tool_domain_lookup_clear: 'Limpar',
	tool_domain_lookup_col_data: 'Dados',
	tool_domain_lookup_col_name: 'Nome',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Tipo',
	tool_domain_lookup_copied: 'Copiado',
	tool_domain_lookup_copy: 'Copiar resumo',
	tool_domain_lookup_desc:
		'Consulta de domínio: veja DNS e registro (WHOIS/RDAP) — A/MX/NS, registrador e validade numa só vista.',
	tool_domain_lookup_description:
		'Consulta de domínio online: confira registros DNS ao vivo e dados de registro no estilo WHOIS via RDAP. Passos: digite um domínio como example.com, consulte DNS-over-HTTPS e RDAP em paralelo e compare A/AAAA/MX/NS/TXT com registrador, estado e eventos de expiração. Contactos costumam estar ocultos; a consulta passa pelo nosso edge e não guardamos histórico.',
	tool_domain_lookup_domain_label: 'Domínio',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'Sem respostas DNS para os tipos consultados.',
	tool_domain_lookup_dns_fail: 'Falha na consulta DNS.',
	tool_domain_lookup_dns_heading: 'Registros DNS',
	tool_domain_lookup_err_empty: 'Introduza um nome de domínio.',
	tool_domain_lookup_err_need_one: 'Selecione DNS, registro ou ambos.',
	tool_domain_lookup_events: 'Eventos',
	tool_domain_lookup_example:
		'Exemplo: consulte example.com → DNS pode mostrar A/AAAA/NS públicos via DoH; Registro pode listar registrador, códigos de estado e eventos de expiração/registo a partir de RDAP (campos podem estar ocultos).',
	tool_domain_lookup_example_title: 'Exemplo',
	tool_domain_lookup_faq_a1:
		'As respostas DNS vêm de uma vista pública (DoH). Os NS em RDAP são os que o registro tem arquivados. Propagação ou alterações recentes podem fazer divergir.',
	tool_domain_lookup_faq_a2:
		'Ainda se diz WHOIS. Na maioria dos gTLD, o registro publica os mesmos dados via RDAP (JSON sobre HTTPS). Esta ferramenta usa RDAP; alguns ccTLD podem não ter RDAP.',
	tool_domain_lookup_faq_a3:
		'O browser chama a nossa API no edge; o worker consulta DoH e RDAP upstream. Não oferecemos histórico de domínios; trate o resultado como efémero.',
	tool_domain_lookup_faq_a4:
		'Com regras de privacidade, email e telefone do titular costumam ficar ocultos. Registrador, estado e datas costumam permanecer. Mostramos o que o servidor RDAP devolve.',
	tool_domain_lookup_faq_a5:
		'TLD não suportado, timeout ou DNS vazio tipo NXDOMAIN aparecem por secção para um falhanço não esconder o outro.',
	tool_domain_lookup_faq_q1: 'Por que os NS do DNS podem diferir dos do registro?',
	tool_domain_lookup_faq_q2: 'Isto é uma consulta WHOIS?',
	tool_domain_lookup_faq_q3: 'Guardam os domínios que consulto?',
	tool_domain_lookup_faq_q4: 'Por que o contacto do titular está vazio?',
	tool_domain_lookup_faq_q5: 'E se falhar DNS ou RDAP?',
	tool_domain_lookup_how_body:
		'Introduza o domínio e escolha DNS, registro ou ambos. No edge, o worker consulta Cloudflare DNS-over-HTTPS para tipos comuns e o RDAP do TLD (via bootstrap IANA) para registrador, estado, eventos e NS do registro. Cada bloco pode ter sucesso ou falhar sozinho.',
	tool_domain_lookup_how_title: 'Como funciona',
	tool_domain_lookup_loading: 'A consultar…',
	tool_domain_lookup_lookup: 'Consultar',
	tool_domain_lookup_ns_mismatch:
		'Nota: os NS do DNS diferem dos NS em RDAP — muitas vezes por propagação ou alteração recente.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Registro',
	tool_domain_lookup_rdap_fail: 'Falha na consulta de registro (RDAP).',
	tool_domain_lookup_rdap_heading: 'Registro (RDAP)',
	tool_domain_lookup_rdap_link: 'URL RDAP',
	tool_domain_lookup_rdap_ns: 'NS do registro',
	tool_domain_lookup_rdap_ok: 'Dados de registro a partir de RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — API DNS over HTTPS',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Nomes de domínio',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Registrador',
	tool_domain_lookup_rules_body:
		'Use esta página para inspecionar DNS do resolver e dados do registro. Limites e significado:',
	tool_domain_lookup_rules_item_1:
		'Tipos DNS consultados: A, AAAA, CNAME, MX, NS, TXT, SOA (vista DoH pública).',
	tool_domain_lookup_rules_item_2:
		'Dados de registro vêm de RDAP, sucessor estruturado do WHOIS clássico na maioria dos gTLD.',
	tool_domain_lookup_rules_item_3:
		'Contactos podem estar ocultos; não assuma detalhes completos do titular.',
	tool_domain_lookup_rules_item_4:
		'Respostas DNS e NS em RDAP podem discordar durante a propagação.',
	tool_domain_lookup_rules_item_5:
		'Consultas passam pelo nosso edge a servidores upstream; não alteramos o seu DNS nem registro.',
	tool_domain_lookup_rules_title: 'O que obtém',
	tool_domain_lookup_sample: 'Exemplo',
	tool_domain_lookup_status: 'Estado',
	tool_domain_lookup_title: 'Consulta de domínio — ver DNS e dados de registro',
	tool_domain_lookup_usecase_1:
		'Antes do go-live: confirme se A/AAAA/CNAME apontam para o host esperado.',
	tool_domain_lookup_usecase_2:
		'Renovação ou transferência: verifique registrador, estado e eventos de expiração (contactos podem estar ocultos).',
	tool_domain_lookup_usecase_3:
		'Email: inspecione MX e trechos TXT relacionados (não é auditoria completa de entregabilidade).',
	tool_domain_lookup_usecases_title: 'Quando usar',
};
export default pt;
