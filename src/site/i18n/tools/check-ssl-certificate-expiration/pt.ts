/**
 * i18n tool shard (check-ssl-certificate-expiration / pt).
 * Cena: hostname → crt.sh CT → expiração do cert mais novo (não handshake ao vivo).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'Verificar expiração do certificado SSL',
	tool_check_ssl_certificate_expiration_home_desc:
		'Veja quando expira o certificado CT mais recente de um hostname (crt.sh — não é handshake ao vivo).',
	tool_check_ssl_certificate_expiration_desc:
		'Veja quando expira o certificado CT mais recente de um hostname (crt.sh — não é handshake ao vivo).',
	tool_check_ssl_certificate_expiration_title: 'Verificar expiração do certificado SSL',
	tool_check_ssl_certificate_expiration_description:
		'Digite um hostname para este verificador de validade SSL: consulta Certificate Transparency via crt.sh e mostra notBefore, notAfter, emissor e dias restantes do match mais recente. Não é handshake TLS ao vivo. Exemplo: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Verificar',
	tool_check_ssl_certificate_expiration_sample: 'Exemplo',
	tool_check_ssl_certificate_expiration_clear: 'Limpar',
	tool_check_ssl_certificate_expiration_running: 'Consultando Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'Informe um hostname (ou cole uma URL https).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Erro: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'Não foi possível consultar crt.sh. Pode haver limite de taxa ou indisponibilidade.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'O hostname vai ao nosso Worker para consultar crt.sh. Não o guardamos como banco de produto.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'Certificado CT encontrado',
	tool_check_ssl_certificate_expiration_result_found_no: 'Sem linhas CT para este host',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Nome comum',
	tool_check_ssl_certificate_expiration_result_issuer: 'Emissor',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (expiração)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Dias restantes',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Expirado (pelo CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'Não expirado (pelo CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Fonte',
	tool_check_ssl_certificate_expiration_result_row_count: 'Linhas CT retornadas',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'Atraso de logs CT — não é o certificado do peer de um handshake TLS ao vivo. Datas podem atrasar frente à emissão ou renovação.',
	tool_check_ssl_certificate_expiration_result_none: '(nenhum)',
	tool_check_ssl_certificate_expiration_how_title: 'Como funciona',
	tool_check_ssl_certificate_expiration_how_body:
		'Esta página responde uma pergunta: quando expira o match CT mais recente deste hostname? Não audita handshake SSL ao vivo.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Digite um hostname (sem caminho).',
	tool_check_ssl_certificate_expiration_how_item_2: 'Clique em Verificar; o Worker consulta o JSON do crt.sh.',
	tool_check_ssl_certificate_expiration_how_item_3: 'Leia notBefore, notAfter, emissor e dias restantes do match mais recente.',
	tool_check_ssl_certificate_expiration_how_item_4: 'Trate as datas como publicadas no CT — confirme com handshake local se o timing importa.',
	tool_check_ssl_certificate_expiration_formula_title: 'Regras de consulta CT (não TLS ao vivo)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers não leem o certificado do peer no fetch. Usamos dados públicos de Certificate Transparency via crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1: 'Consultar crt.sh com o hostname e parsear a lista JSON.',
	tool_check_ssl_certificate_expiration_formula_item_2: 'Ordenar por notBefore decrescente e pegar a linha mais nova.',
	tool_check_ssl_certificate_expiration_formula_item_3: 'Mostrar notBefore, notAfter, emissor, daysLeft e expired.',
	tool_check_ssl_certificate_expiration_formula_item_4: 'Logs CT podem atrasar frente à emissão ou renovação ao vivo.',
	tool_check_ssl_certificate_expiration_formula_item_5: 'Hosts privados ou bloqueados são rejeitados. Não é walker de cadeia completa nem pedido à CA.',
	tool_check_ssl_certificate_expiration_example_title: 'Exemplo',
	tool_check_ssl_certificate_expiration_example:
		'Entrada de exemplo example.com. O Worker consulta crt.sh, escolhe o certificado mais recente e mostra notBefore, notAfter, emissor, daysLeft e o aviso de atraso CT.',
	tool_check_ssl_certificate_expiration_usecases_title: 'Quando ajuda',
	tool_check_ssl_certificate_expiration_usecase_1: 'Checker de expiração SSL antes de renovar: quantos dias restam na folha CT mais nova.',
	tool_check_ssl_certificate_expiration_usecase_2: 'Após troca de CDN: confirmar se o CT mostra um notAfter novo.',
	tool_check_ssl_certificate_expiration_usecase_3: 'Inventário rápido de domínios de fornecedores quando só precisa das datas de validade.',
	tool_check_ssl_certificate_expiration_faq_q1: 'É um handshake SSL ao vivo?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'Não. Workers não leem o certificado do peer no fetch; consultamos Certificate Transparency (crt.sh).',
	tool_check_ssl_certificate_expiration_faq_q2: 'Por que as datas podem atrasar?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'Logs CT podem atrasar frente à emissão ou renovação. Se o timing importa, confirme com handshake local.',
	tool_check_ssl_certificate_expiration_faq_q3: 'Vocês verificam a cadeia completa?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'O foco é a expiração do match mais recente. Um checker só de cadeia é secundário — não é o H1.',
	tool_check_ssl_certificate_expiration_faq_q4: 'O título é “SSL certificate checker”?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'Não. O H1 é Verificar expiração do certificado SSL. O head mais amplo não é o título único.',
	tool_check_ssl_certificate_expiration_faq_q5: 'E hosts com IP privado?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Hosts privados ou bloqueados são rejeitados. Use a ferramenta de ranges CIDR privados para contexto.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh; Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default pt;
