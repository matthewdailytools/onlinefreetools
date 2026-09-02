/**
 * i18n tool shard (validate-security-txt / pt).
 * Cena: domínio → buscar security.txt → checklist RFC 9116.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_validate_security_txt_home_title: 'Validar security.txt',
	tool_validate_security_txt_home_desc:
		'Verifique se um site publica um security.txt válido com Contact e Expires.',
	tool_validate_security_txt_desc:
		'Verifique se um site publica um security.txt válido com Contact e Expires.',
	tool_validate_security_txt_title: 'Validar security.txt',
	tool_validate_security_txt_description:
		'Digite um domínio ou URL para este verificador de security.txt: busca /.well-known/security.txt (fallback /security.txt), analisa Contact e Expires e marca campos obrigatórios ausentes. Exemplo: google.com.',
	tool_validate_security_txt_url_label: 'Domínio ou URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ ou example.com',
	tool_validate_security_txt_check: 'Validar',
	tool_validate_security_txt_sample: 'Exemplo',
	tool_validate_security_txt_clear: 'Limpar',
	tool_validate_security_txt_running: 'Buscando security.txt…',
	tool_validate_security_txt_url_error: 'Informe um domínio ou URL http(s).',
	tool_validate_security_txt_error_prefix: 'Erro: ',
	tool_validate_security_txt_fetch_failed:
		'Não foi possível buscar security.txt. O host pode estar offline ou bloquear bots.',
	tool_validate_security_txt_privacy_note:
		'A URL e o hostname vão ao nosso Worker para buscar security.txt. Não os guardamos como banco de produto.',
	tool_validate_security_txt_result_found_yes: 'security.txt encontrado',
	tool_validate_security_txt_result_found_no: 'security.txt não encontrado',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Obrigatórios ausentes',
	tool_validate_security_txt_result_missing_none: 'Campos obrigatórios presentes',
	tool_validate_security_txt_result_expired_yes: 'Expires já passou',
	tool_validate_security_txt_result_expired_no: 'Expires ainda válido (ou não analisado)',
	tool_validate_security_txt_result_file_url: 'URL buscada',
	tool_validate_security_txt_result_http_status: 'Status HTTP',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'Prévia do security.txt',
	tool_validate_security_txt_result_none: '(nenhum)',
	tool_validate_security_txt_how_title: 'Como funciona',
	tool_validate_security_txt_how_body:
		'Este validador responde uma pergunta: o site publica um arquivo de descoberta com Contact útil e Expires coerente?',
	tool_validate_security_txt_how_item_1: 'Digite um domínio ou URL HTTPS.',
	tool_validate_security_txt_how_item_2:
		'Clique em Validar; o Worker tenta /.well-known/security.txt e depois /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Reveja Contact, Expires, Preferred-Languages, Canonical e a prévia.',
	tool_validate_security_txt_how_item_4:
		'Corrija os campos marcados antes de publicar o seu security.txt.',
	tool_validate_security_txt_formula_title: 'Regras de campos RFC 9116',
	tool_validate_security_txt_formula_body:
		'Alinhado à RFC 9116 e à prática comum do securitytxt.org.',
	tool_validate_security_txt_formula_item_1:
		'Ordem: primeiro /.well-known/security.txt, depois /security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact é obrigatório; listamos os valores e sinalizamos ausência.',
	tool_validate_security_txt_formula_item_3:
		'Expires é fortemente esperado; falta ou data passada = lacuna.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages e Canonical aparecem se existirem; não são obrigatórios no checklist.',
	tool_validate_security_txt_formula_item_5:
		'Só busca e analisa — não é caixa de vulnerabilidades nem pentest.',
	tool_validate_security_txt_example_title: 'Exemplo',
	tool_validate_security_txt_example:
		'Entrada de exemplo https://www.google.com/. O Worker tenta well-known e a raiz, depois mostra found, Contact, Expires, missingRequired, expired e a prévia.',
	tool_validate_security_txt_usecases_title: 'Quando ajuda',
	tool_validate_security_txt_usecase_1:
		'Verificador de security.txt antes do lançamento: well-known responde e há Contact?',
	tool_validate_security_txt_usecase_2:
		'Após editar Expires: confirme que a data é lida e ainda não venceu.',
	tool_validate_security_txt_usecase_3:
		'Antes de contatar um fornecedor: veja se ele publica o arquivo de descoberta.',
	tool_validate_security_txt_faq_q1: 'Onde deve ficar o security.txt?',
	tool_validate_security_txt_faq_a1:
		'Prefira /.well-known/security.txt. /security.txt no mesmo host é o fallback documentado.',
	tool_validate_security_txt_faq_q2: 'Quais campos são obrigatórios?',
	tool_validate_security_txt_faq_a2:
		'Pelo menos Contact. Expires é fortemente esperado na prática da RFC 9116; marcamos lacunas.',
	tool_validate_security_txt_faq_q3: 'O H1 é “RFC 9116”?',
	tool_validate_security_txt_faq_a3:
		'Não. O H1 é Validar security.txt. A RFC fica em Regras e Referências.',
	tool_validate_security_txt_faq_q4: 'Vocês armazenam relatos de vulnerabilidade?',
	tool_validate_security_txt_faq_a4:
		'Não. Só buscamos e analisamos o arquivo publicado. Não somos caixa de divulgação.',
	tool_validate_security_txt_faq_q5: 'A URL fica guardada?',
	tool_validate_security_txt_faq_a5:
		'URL/host precisam chegar ao Worker para a busca. Não guardamos checagens como banco de produto. Ferramenta edge, não “sem upload”.',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default pt;
