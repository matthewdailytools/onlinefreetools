/**
 * i18n tool shard (spf-dkim-dmarc-checker / pt).
 * Busca: verificador spf dkim dmarc; checker registro dmarc; consulta spf.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'Verificador SPF DKIM DMARC',
	tool_spf_dkim_dmarc_checker_desc:
		'Verifique SPF, DKIM e DMARC de um domínio e leia ~all/-all e a política p= em linguagem clara.',
	tool_spf_dkim_dmarc_checker_description:
		'Informe o domínio de envio e um seletor DKIM opcional (padrão google). O DoH consulta SPF, _dmarc e selector._domainkey e explica ~all/-all e p=. Exemplo: google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Domínio',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'Seletor DKIM',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Verificar',
	tool_spf_dkim_dmarc_checker_sample: 'Exemplo',
	tool_spf_dkim_dmarc_checker_clear: 'Limpar',
	tool_spf_dkim_dmarc_checker_running: 'Consultando SPF, DKIM e DMARC via DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Informe um domínio válido (apenas o host, ou cole a URL completa).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Erro: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'A consulta DNS falhou. O resolvedor pode estar inacessível ou o nome bloqueado.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'O domínio e o seletor DKIM são enviados ao Worker para DNS-over-HTTPS. Não os guardamos como base de produto.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Encontrado',
	tool_spf_dkim_dmarc_checker_result_found_no: 'Não encontrado',
	tool_spf_dkim_dmarc_checker_result_record: 'Registro',
	tool_spf_dkim_dmarc_checker_result_explain: 'Explicação',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'qualificador all',
	tool_spf_dkim_dmarc_checker_result_policy: 'Política DMARC (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Seletor',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Chave pública (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Presente',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Ausente ou vazia',
	tool_spf_dkim_dmarc_checker_how_title: 'Como funciona',
	tool_spf_dkim_dmarc_checker_how_body:
		'Checagens de entregabilidade costumam exigir SPF, DKIM e DMARC juntos. Informe o domínio de envio, ajuste o seletor se preciso e leia cada TXT com um resumo de política.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Informe o domínio de envio e o seletor DKIM opcional (padrão google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Clique em Verificar; o Worker consulta TXT via DoH para SPF, _dmarc e selector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Leia cada registro e a explicação de ~all/-all e da política DMARC p=.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'Corrija o DNS no provedor e verifique de novo — esta página não reescreve sua zona.',
	tool_spf_dkim_dmarc_checker_formula_title: 'O que consultamos',
	tool_spf_dkim_dmarc_checker_formula_body:
		'As consultas seguem as formas TXT públicas das RFC 7208, 6376 e 7489. Resumimos campos de política; não enviamos e-mail nem sondamos caixas.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT do domínio com v=spf1; mostramos o qualificador all final (~all falha suave, -all rígida).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT em _dmarc.domínio com v=DMARC1; destacamos p= (none / quarantine / reject) e pct opcional.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT em {selector}._domainkey.domínio; verificamos se há chave pública p= não vazia.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Registros ausentes são marcados com clareza. Falha DoH vira erro — não é o teste de assinatura ao vivo do ESP.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'Sem sondagem SMTP RCPT nem edição de zona. Validador de «o e-mail existe?» fica fora do escopo.',
	tool_spf_dkim_dmarc_checker_example_title: 'Exemplo',
	tool_spf_dkim_dmarc_checker_example:
		'Entrada de exemplo google.com com seletor DKIM google. O Worker consulta SPF, _dmarc.google.com e google._domainkey.google.com e mostra encontrado/registro/explicação.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'Quando ajuda',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Antes do lançamento: após publicar o DNS do ESP, confirme SPF, DKIM e DMARC do domínio de envio.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'Passagem de checker de registro DMARC: leia p=none versus quarantine/reject sem ficar só no TXT bruto.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'Consulta SPF quando o e-mail vai para spam: veja ~all ou -all e alinhe o seletor DKIM ao ESP.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'Por que três registros numa página?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Provedores costumam avaliar os três juntos. Um checker só de DMARC pode deixar passar SPF quebrado ou seletor DKIM errado.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'Qual é o seletor DKIM padrão?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — comum no Google Workspace. Altere se o ESP publicar outro (por exemplo s1 ou k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'Isto valida se um endereço de e-mail existe?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'Não. Só autenticação DNS do domínio (consulta SPF, chave DKIM, política DMARC). Existência de caixas fica fora.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'Só mostram o TXT bruto?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'Não. Incluem o registro e uma linha explicando mecanismos SPF all e a política DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'Meu domínio fica armazenado?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'Domínio e seletor precisam chegar ao Worker para DNS-over-HTTPS. Não guardamos as verificações como base de produto duradoura. É ferramenta DNS na borda, não «sem upload».',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default pt;
