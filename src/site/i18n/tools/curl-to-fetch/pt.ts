/**
 * i18n tool shard (curl-to-fetch / pt).
 * H1: curl para fetch — converter comando curl em JavaScript fetch.
 */
import type { SiteLangDict } from '../../../types';

/** Textos em português. */
const pt: SiteLangDict = {
	tool_curl_to_fetch_article:
		'Cole um comando cURL da documentação ou do terminal e receba um trecho fetch em JavaScript — método, cabeçalhos, corpo JSON, Basic auth e -G. A análise fica no navegador; sem enviar ao servidor.',
	tool_curl_to_fetch_clear: 'Limpar',
	tool_curl_to_fetch_convert: 'Converter',
	tool_curl_to_fetch_copy: 'Copiar',
	tool_curl_to_fetch_copy_done: 'Copiado',
	tool_curl_to_fetch_copy_empty: 'Nada para copiar — converta um cURL primeiro.',
	tool_curl_to_fetch_desc:
		'Transforme cURL em fetch no navegador — fica no dispositivo, sem enviar ao servidor.',
	tool_curl_to_fetch_description:
		'Cole cURL e obtenha fetch em JavaScript — suporta método, cabeçalhos, JSON, Basic auth (-u) e -G. O exemplo POST JSON carrega ao abrir. O comando fica no dispositivo e não é enviado ao servidor.',
	tool_curl_to_fetch_error_empty: 'Cole um comando cURL primeiro.',
	tool_curl_to_fetch_error_no_url: 'URL não encontrada. Use https://… ou --url.',
	tool_curl_to_fetch_error_parse: 'Não foi possível analisar este cURL. Verifique aspas e continuações.',
	tool_curl_to_fetch_error_unclosed_quote: 'Aspas não fechadas — corrija e tente de novo.',
	tool_curl_to_fetch_example: 'Entrada: curl -X POST … → Saída: fetch com method, headers e body.',
	tool_curl_to_fetch_example_title: 'Exemplo',
	tool_curl_to_fetch_faq_a1: 'Não. A análise ocorre nesta aba; não enviamos o cURL aos nossos servidores.',
	tool_curl_to_fetch_faq_a2: 'URL, -X, -H, -d, -u, -G, strings entre aspas e \\ no fim da linha. Flags exóticos são ignorados com aviso.',
	tool_curl_to_fetch_faq_a3: '-G move --data para a query da URL, sem body.',
	tool_curl_to_fetch_faq_a4: '-u user:pass vira Authorization Basic em base64.',
	tool_curl_to_fetch_faq_a5: 'Esta página gera fetch do navegador. Para axios ou Python, adapte manualmente.',
	tool_curl_to_fetch_faq_q1: 'Meu cURL é enviado?',
	tool_curl_to_fetch_faq_q2: 'Quais flags curl são suportadas?',
	tool_curl_to_fetch_faq_q3: 'O que -G faz aqui?',
	tool_curl_to_fetch_faq_q4: 'Como -u é tratado?',
	tool_curl_to_fetch_faq_q5: 'Posso obter axios ou Python?',
	tool_curl_to_fetch_how_body: 'Copie cURL de docs ou shell; analisamos flags comuns e mostramos fetch pronto.',
	tool_curl_to_fetch_how_item_1: 'Cole o cURL completo (com \\ se houver quebra de linha).',
	tool_curl_to_fetch_how_item_2: 'Escolha fetch ou async/await e clique Converter.',
	tool_curl_to_fetch_how_item_3: 'Revise method, headers e body gerados.',
	tool_curl_to_fetch_how_item_4: 'Copie para o projeto; converta de novo após editar.',
	tool_curl_to_fetch_how_title: 'Como funciona',
	tool_curl_to_fetch_input_label: 'Comando cURL',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.exemplo.com/…',
	tool_curl_to_fetch_large_warn: 'Comando grande (>50 KB) — pode demorar.',
	tool_curl_to_fetch_load_sample: 'Carregar exemplo',
	tool_curl_to_fetch_output_label: 'Saída fetch JavaScript',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Formato de saída',
	tool_curl_to_fetch_rules_body: 'Como mapeamos curl para fetch e o que ainda exige ajuste manual.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST; -d sozinho usa POST salvo com -G.',
	tool_curl_to_fetch_rules_item_2: 'Cada -H entra em headers; Content-Type é preservado.',
	tool_curl_to_fetch_rules_item_3: '-d vai para body; -G une à URL.',
	tool_curl_to_fetch_rules_item_4: 'Cookies, certificados e proxy não cabem no fetch do navegador.',
	tool_curl_to_fetch_rules_title: 'Regras esperadas',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Convertido — veja o fetch abaixo.',
	tool_curl_to_fetch_title: 'curl para fetch',
	tool_curl_to_fetch_usecase_1: 'Exemplos curl no OpenAPI — cole e inicie seu fetch frontend.',
	tool_curl_to_fetch_usecase_2: 'Depurar Bearer: mantenha Authorization ao ir para JavaScript.',
	tool_curl_to_fetch_usecase_3: 'Converter comando curl para fetch ao migrar scripts shell.',
	tool_curl_to_fetch_usecases_title: 'Bons casos',
	tool_curl_to_fetch_warn_unknown_flags: 'Flags não suportadas ignoradas: {flags}',
};

export default pt;
