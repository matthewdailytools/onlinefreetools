/**
 * i18n tool shard (product-design-prompt-builder / pt).
 * Buscas locais: «gerador de prompt de design de produto», «prompt para brief de UX». Termo principal no H1; secundários (persona, escopo do wireframe, design tokens, WCAG AA, saída JSON) na description, FAQ e casos de uso.
 * Limites reais: montagem no navegador sem requisição; Expandir/Refinar opcional envia o rascunho para a Cloudflare Workers AI (Turnstile, cota) e a resposta substitui toda a área de resultado.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Transforme uma demanda de design de produto em prompt pronto para colar: descreva a persona, o problema, o escopo do wireframe e os design tokens, e a página monta o texto em Markdown ou JSON dentro do navegador. Por padrão nada é enviado — só ao clicar em Expandir ou Refinar o rascunho atual vai para a Cloudflare Workers AI (exige Turnstile e tem cota).',
	tool_product_design_prompt_builder_build:
		'Gerar prompt',
	tool_product_design_prompt_builder_clear:
		'Limpar',
	tool_product_design_prompt_builder_copy:
		'Copiar',
	tool_product_design_prompt_builder_desc:
		'Gerador de prompts de design de produto: preencha persona, problema, escopo do wireframe e design tokens; o texto é montado no navegador em Markdown ou JSON, com IA opcional.',
	tool_product_design_prompt_builder_description:
		'Gerador de prompts de design de produto: descreva a persona, o problema, o escopo do wireframe (quantas telas e quais) e os design tokens (grid, cor principal, contraste), e a página organiza tudo nos blocos Role / Task / Constraints / Output em Markdown ou JSON, sem sair do navegador. Exemplo: «pais em guarda compartilhada que precisam ver a semana de entregas» vira um escopo de três telas com grid de 8 pt e contraste WCAG AA. Em Carregar exemplo você preenche o preset e já vê o prompt montado; Expandir ou Refinar pela Cloudflare Workers AI é opcional (Turnstile, cota diária).',
	tool_product_design_prompt_builder_download:
		'Baixar',
	tool_product_design_prompt_builder_empty:
		'Preencha ao menos um campo antes de gerar.',
	tool_product_design_prompt_builder_example:
		'Entrada: Persona = pais em guarda compartilhada por semanas, um organiza e o outro busca, misturando Android e iPhone; Problema = agendas lotadas, querem ver a semana de entregas de uma vez com anotações e sem obrigar a vincular contas; Wireframe = faixa semanal com legenda de guarda, folha de detalhe com checklist de entrega e convite por SMS (3 telas); Tokens = grid de 8 pt, principal #2563eb, #059669 para entregas confirmadas, contraste WCAG AA nas legendas. Saída (Markdown): ## Role define um coach de prompts de UX para briefs de wireframe e ## Task traz uma linha por campo.',
	tool_product_design_prompt_builder_example_title:
		'Exemplo',
	tool_product_design_prompt_builder_faq_a1:
		'Por padrão, não. Preencher os campos e clicar em Gerar prompt acontece só nesta aba, sem nenhuma requisição. O rascunho só sai daqui quando você clica em Expandir ou Refinar, e vai para a Cloudflare Workers AI; nossos servidores não repassam nada para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_product_design_prompt_builder_faq_a2:
		'Não. O modo local apenas formata o que você escreveu nos blocos Role / Task / Constraints / Output. A IA opcional usa a Cloudflare Workers AI depois do Turnstile, e não as APIs do ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'O construtor de templates de prompt entrega os quatro blocos genéricos Role / Task / Constraints / Output e serve para qualquer assunto. Aqui os campos são de brief de UX: persona, problema, quantas telas o wireframe cobre e quais design tokens e contraste respeitar, com exemplo e limites próprios.',
	tool_product_design_prompt_builder_faq_a4:
		'Sim. Resolva o Turnstile no painel de IA antes de clicar em Expandir ou Refinar. Sem token válido os botões retornam erro, e o modo local continua disponível.',
	tool_product_design_prompt_builder_faq_a5:
		'Sim. Troque o formato de saída para JSON: você recebe os campos separados mais o prompt já montado, útil para guardar no repositório de requisitos ou num modelo de revisão de design.',
	tool_product_design_prompt_builder_faq_a6:
		'Sim. O resultado é texto puro — copie e cole no ChatGPT, Gemini, Claude ou DeepSeek. A página não chama essas APIs no seu lugar.',
	tool_product_design_prompt_builder_faq_q1:
		'O que eu escrevo é enviado para algum servidor?',
	tool_product_design_prompt_builder_faq_q2:
		'A página chama a API do ChatGPT ou de outro modelo?',
	tool_product_design_prompt_builder_faq_q3:
		'Qual a diferença em relação ao construtor de templates de prompt?',
	tool_product_design_prompt_builder_faq_q4:
		'Por que a IA opcional pede Turnstile?',
	tool_product_design_prompt_builder_faq_q5:
		'Consigo exportar em JSON?',
	tool_product_design_prompt_builder_faq_q6:
		'Funciona com ChatGPT, Gemini, Claude e DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'O que muda entre o modo local e a IA da Cloudflare?',
	tool_product_design_prompt_builder_faq_a7:
		'O modo local só organiza seus campos, não faz requisição e não tem cota. Expandir ou Refinar manda o rascunho para a Cloudflare Workers AI (Turnstile obrigatório, uso limitado) e o texto devolvido substitui todo o conteúdo da área de resultado — confira antes de copiar. Se falhar ou a cota acabar, siga no modo local.',
	tool_product_design_prompt_builder_ai_expand:
		'Expandir com IA',
	tool_product_design_prompt_builder_ai_polish:
		'Refinar com IA',
	tool_product_design_prompt_builder_ai_panel_label:
		'IA opcional da Cloudflare (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'Enviar o rascunho para a Cloudflare Workers AI?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Passo opcional: envia o rascunho atual para a Cloudflare Workers AI fazer a inferência. Nossos servidores não repassam o texto para OpenAI, Google, Anthropic ou DeepSeek. Sem IA você continua montando o prompt no navegador.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI processando…',
	tool_product_design_prompt_builder_ai_done:
		'O texto da IA substituiu o resultado. Revise antes de copiar.',
	tool_product_design_prompt_builder_ai_err_generic:
		'A IA falhou; o resultado continua igual.',
	tool_product_design_prompt_builder_ai_err_rate:
		'Cota de IA esgotada. Use o modo local ou tente amanhã (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Resolva o Turnstile antes de usar a IA.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Formato de saída',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Persona / Perfil de usuário',
	tool_product_design_prompt_builder_persona_ph:
		'Ex.: pais em guarda compartilhada por semanas…',
	tool_product_design_prompt_builder_problem_label:
		'Problema que precisa ser resolvido',
	tool_product_design_prompt_builder_problem_ph:
		'Ex.: agenda lotada, querem ver a semana de uma vez…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Wireframe / Escopo',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'Ex.: faixa semanal, folha de detalhe, convite por SMS…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Design / Tokens visuais',
	tool_product_design_prompt_builder_design_tokens_ph:
		'Ex.: grid de 8 pt, principal #2563eb, WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'Preencha os quatro campos, deixe a página montar o Markdown (ou JSON) no navegador e, se precisar de mais detalhe, peça uma ampliação à Cloudflare AI antes de colar o prompt no chat.',
	tool_product_design_prompt_builder_how_item_1:
		'Clique em Carregar exemplo para trazer o preset padrão.',
	tool_product_design_prompt_builder_how_item_2:
		'Ajuste persona, problema, escopo do wireframe e design tokens e clique em Gerar prompt; para exportar os campos, troque para JSON.',
	tool_product_design_prompt_builder_how_item_3:
		'Opcional: resolva o Turnstile e clique em Expandir ou Refinar — o texto da IA passa a ocupar a área de resultado.',
	tool_product_design_prompt_builder_how_item_4:
		'Copie ou baixe o resultado e cole no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'Como usar',
	tool_product_design_prompt_builder_load_sample:
		'Carregar exemplo',
	tool_product_design_prompt_builder_platforms_lead:
		'O prompt final é texto puro: cola do mesmo jeito no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_product_design_prompt_builder_result_label:
		'Prompt gerado',
	tool_product_design_prompt_builder_rules_body:
		'A página só formata a demanda: não desenha wireframes nem exporta arquivos do Figma. A IA opcional tem cota e exige Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Cada campo cai em um bloco do Markdown: Papel, Tarefa, Restrições e Formato de saída.',
	tool_product_design_prompt_builder_rules_item_2:
		'A saída padrão é Markdown; o mesmo painel mostra JSON com os campos e o prompt montado.',
	tool_product_design_prompt_builder_rules_item_3:
		'A IA da Cloudflare não substitui o modo local: a resposta ocupa toda a área de resultado, então revise antes de copiar.',
	tool_product_design_prompt_builder_rules_item_4:
		'A ferramenta apenas monta texto: não gera telas, não lê seus arquivos de design e não chama as APIs de chat por você.',
	tool_product_design_prompt_builder_rules_title:
		'Limites a esperar',
	tool_product_design_prompt_builder_sec_constraints:
		'Restrições',
	tool_product_design_prompt_builder_sec_output:
		'Formato de saída',
	tool_product_design_prompt_builder_sec_role:
		'Papel',
	tool_product_design_prompt_builder_sec_task:
		'Tarefa',
	tool_product_design_prompt_builder_status_copied:
		'Copiado para a área de transferência.',
	tool_product_design_prompt_builder_status_done:
		'Prompt pronto.',
	tool_product_design_prompt_builder_status_working:
		'Montando o prompt…',
	tool_product_design_prompt_builder_title:
		'Gerador de prompts de design de produto — local, com IA opcional',
	tool_product_design_prompt_builder_usecase_1:
		'Transformar o objetivo de design falado na reunião de requisitos em um prompt pronto para colar no chat do time.',
	tool_product_design_prompt_builder_usecase_2:
		'Exportar JSON para guardar persona e tokens no repositório de requisitos e depois ampliar com a Cloudflare AI se precisar.',
	tool_product_design_prompt_builder_usecase_3:
		'Se você não precisa dos campos de UX e o template genérico de quatro blocos resolve, use o construtor de templates de prompt.',
	tool_product_design_prompt_builder_usecase_4:
		'Escrever no navegador uma ideia de produto ainda não divulgada e só depois decidir se ela vai para a IA opcional.',
	tool_product_design_prompt_builder_usecases_title:
		'Quando ajuda',
};

export default pt;
