/**
 * Fragmento i18n (check-robots-txt-url-blocked / pt).
 * Cena: colar URL → Worker busca /robots.txt → informar se está bloqueada.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'Verificar URL no robots.txt',
	tool_check_robots_txt_url_blocked_home_desc:
		'Cole a URL da página e veja se o robots.txt bloqueia o caminho para o Googlebot ou outros bots.',
	tool_check_robots_txt_url_blocked_desc:
		'Cole a URL da página e veja se o robots.txt bloqueia o caminho para o Googlebot ou outros bots.',
	tool_check_robots_txt_url_blocked_title: 'Verificar se uma URL está bloqueada pelo robots.txt',
	tool_check_robots_txt_url_blocked_description:
		'Cole uma URL e verifique online se o robots.txt bloqueia esse caminho para Googlebot, *, Bingbot ou GPTBot. Fetch na borda com a regra correspondente. Ex.: /admin Inclui processo, passos e exemplo na página.',
	tool_check_robots_txt_url_blocked_url_label: 'URL da página',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'Agente',
	tool_check_robots_txt_url_blocked_check: 'Verificar',
	tool_check_robots_txt_url_blocked_sample: 'Exemplo',
	tool_check_robots_txt_url_blocked_clear: 'Limpar',
	tool_check_robots_txt_url_blocked_running: 'Buscando robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'Informe uma URL http(s) válida com o caminho que importa.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Erro: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'Não foi possível obter o robots.txt. O host pode estar offline ou bloquear bots.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'A URL e o hostname vão ao nosso Worker para buscar /robots.txt. Não os guardamos como base de dados do produto.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Permitida',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Bloqueada',
	tool_check_robots_txt_url_blocked_result_matched: 'Regra correspondente',
	tool_check_robots_txt_url_blocked_result_matched_none: 'Sem Allow/Disallow (tratado como permitido)',
	tool_check_robots_txt_url_blocked_result_http_status: 'Status HTTP do robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'Caminho avaliado',
	tool_check_robots_txt_url_blocked_result_ua: 'Agente usado',
	tool_check_robots_txt_url_blocked_result_robots_url: 'URL do robots.txt',
	tool_check_robots_txt_url_blocked_result_group: 'Grupo User-agent',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'Sem corpo robots.txt (ausente ou página HTML de erro). Tratado como permitir tudo.',
	tool_check_robots_txt_url_blocked_result_preview: 'Prévia do robots.txt',
	tool_check_robots_txt_url_blocked_how_title: 'Como funciona',
	tool_check_robots_txt_url_blocked_how_body:
		'Mostra se, para o crawler escolhido, o robots.txt permite ou bloqueia aquele caminho. Só baixa /robots.txt, não o HTML da página.',
	tool_check_robots_txt_url_blocked_how_item_1: 'Cole a URL completa (o caminho importa, não só o domínio).',
	tool_check_robots_txt_url_blocked_how_item_2: 'Escolha o agente (padrão Googlebot; também *, Bingbot ou GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'Clique em Verificar e aguarde o Worker buscar /robots.txt.',
	tool_check_robots_txt_url_blocked_how_item_4: 'Leia Permitida/Bloqueada, a linha correspondente e o status HTTP.',
	tool_check_robots_txt_url_blocked_how_item_5: 'Use a prévia se precisar confirmar o grupo aplicado.',
	tool_check_robots_txt_url_blocked_formula_title: 'Regras de correspondência',
	tool_check_robots_txt_url_blocked_formula_body:
		'Seguimos a prática comum alinhada à documentação do Google e ao RFC 9309: maior prefixo; Allow vence Disallow em empate.',
	tool_check_robots_txt_url_blocked_formula_item_1: 'Escolhemos o grupo User-agent correspondente; senão, o grupo *.',
	tool_check_robots_txt_url_blocked_formula_item_2: 'Entre Allow/Disallow que batem no caminho, vence o prefixo mais longo.',
	tool_check_robots_txt_url_blocked_formula_item_3: 'Com o mesmo comprimento, Allow tem prioridade sobre Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4: 'Sem robots.txt ou sem regras = permitir tudo; o status HTTP ainda aparece.',
	tool_check_robots_txt_url_blocked_formula_item_5: 'Só pedimos /robots.txt; hosts privados são recusados. Não substitui o tester oficial do Search Console.',
	tool_check_robots_txt_url_blocked_example_title: 'Exemplo',
	tool_check_robots_txt_url_blocked_example:
		'Entrada https://www.bing.com/search com Googlebot. O Worker busca https://www.bing.com/robots.txt, avalia /search e indica Permitida ou Bloqueada com a linha Disallow/Allow se houver.',
	tool_check_robots_txt_url_blocked_usecases_title: 'Quando usar',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Antes do lançamento: confirme que /admin ou /staging ficam bloqueados e as páginas públicas seguem rastreáveis.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'Testar / validar robots.txt: depois de um Disallow, veja se a URL alvo realmente combina.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'Regras de crawlers de IA: escolha GPTBot (ou *) e cheque caminhos sensíveis sem gerar o arquivo.',
	tool_check_robots_txt_url_blocked_faq_q1: 'Isto gera um robots.txt?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'Não. Só verifica bloqueio. Para escrever regras use o gerador de robots.txt.',
	tool_check_robots_txt_url_blocked_faq_q2: 'Por que testar Googlebot e * separados?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'O Googlebot usa o próprio grupo quando existe; muitos bots caem em *. Separar evita achar que uma regra cobre todos.',
	tool_check_robots_txt_url_blocked_faq_q3: 'E se o robots.txt faltar ou der 404?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'A prática comum trata como permitir tudo. A ferramenta mostra o status HTTP para ver 404 ou redirecionamento.',
	tool_check_robots_txt_url_blocked_faq_q4: 'Posso testar crawlers de IA como GPTBot?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Sim — escolha GPTBot na lista. A correspondência segue o RFC 9309 como avaliação na borda, não um veredito oficial.',
	tool_check_robots_txt_url_blocked_faq_q5: 'Minha URL fica armazenada?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'A URL/hostname precisa chegar ao Worker para buscar /robots.txt. Não guardamos como base de dados do produto. É ferramenta de borda, não “sem upload”.',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default pt;
