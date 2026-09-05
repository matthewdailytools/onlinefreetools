/**
 * i18n tool shard (ios-prompt-builder / pt).
 * Buscas locais: «gerador de prompt iOS», «prompt para ChatGPT desenvolvimento iOS». Termo principal no H1; secundários (stack Swift, SwiftUI, HIG, VoiceOver, saída JSON) na description, FAQ e casos de uso.
 * Limites reais: montagem no navegador sem requisição; Expandir/Refinar opcional envia o rascunho para a Cloudflare Workers AI (Turnstile, cota) e a resposta substitui toda a área de resultado.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'Transforme um requisito de iOS em prompt pronto para colar: descreva a funcionalidade, o stack Swift, a tela em SwiftUI e as regras de acessibilidade das HIG, e a página monta o texto em Markdown ou JSON dentro do navegador. Por padrão nada é enviado — só ao clicar em Expandir ou Refinar o rascunho atual vai para a Cloudflare Workers AI (exige Turnstile e tem cota).',
	tool_ios_prompt_builder_build:
		'Gerar prompt',
	tool_ios_prompt_builder_clear:
		'Limpar',
	tool_ios_prompt_builder_copy:
		'Copiar',
	tool_ios_prompt_builder_desc:
		'Gerador de prompts para iOS: preencha funcionalidade, stack Swift, tela em SwiftUI e regras das HIG; o texto é montado no navegador em Markdown ou JSON, com IA opcional.',
	tool_ios_prompt_builder_description:
		'Gerador de prompts para iOS: informe a funcionalidade, o stack (Swift 5.10, SwiftUI, iOS 17+, SwiftData), a tela e as regras de acessibilidade das HIG, e a página organiza tudo nos blocos Role / Task / Constraints / Output em Markdown ou JSON, sem sair do navegador. Exemplo: «tendência semanal de passos do HealthKit e faixa de frequência em repouso» sai com Dynamic Type até XXL e rótulos VoiceOver nos pontos do gráfico. Em Carregar exemplo você preenche o preset e já vê o prompt montado; Expandir ou Refinar pela Cloudflare Workers AI é opcional (Turnstile, cota diária).',
	tool_ios_prompt_builder_download:
		'Baixar',
	tool_ios_prompt_builder_empty:
		'Preencha ao menos um campo antes de gerar.',
	tool_ios_prompt_builder_example:
		'Entrada: Funcionalidade = tendência semanal de passos do HealthKit e faixa de frequência em repouso, com permissões explicadas em linguagem simples; Stack = Swift 5.10, SwiftUI, iOS 17+, async/await, cache com SwiftData; Tela = NavigationStack e Charts, folha de permissão antes da primeira consulta; HIG = Dynamic Type até XXL, rótulos VoiceOver nos pontos do gráfico, sem force-unwrap. Saída (Markdown): ## Role com o perfil de engenheira iOS sênior e ## Task com uma linha por campo.',
	tool_ios_prompt_builder_example_title:
		'Exemplo',
	tool_ios_prompt_builder_faq_a1:
		'Por padrão, não. Preencher os campos e clicar em Gerar prompt acontece só nesta aba, sem nenhuma requisição. O rascunho só sai daqui quando você clica em Expandir ou Refinar, e vai para a Cloudflare Workers AI; nossos servidores não repassam nada para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_ios_prompt_builder_faq_a2:
		'Não. O modo local apenas formata o que você escreveu nos blocos Role / Task / Constraints / Output. A IA opcional usa a Cloudflare Workers AI depois do Turnstile, e não as APIs do ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_ios_prompt_builder_faq_a3:
		'O construtor de templates de prompt entrega os quatro blocos genéricos Role / Task / Constraints / Output e serve para qualquer assunto. Aqui os campos já são de projeto iOS: funcionalidade, stack Swift, navegação e gráficos em SwiftUI e as regras das HIG sobre Dynamic Type e VoiceOver, com exemplo e limites próprios.',
	tool_ios_prompt_builder_faq_a4:
		'Sim. Resolva o Turnstile no painel de IA antes de clicar em Expandir ou Refinar. Sem token válido os botões retornam erro, e o modo local continua disponível.',
	tool_ios_prompt_builder_faq_a5:
		'Sim. Troque o formato de saída para JSON: você recebe os campos separados mais o prompt já montado, útil para casos de XCTest ou para um pipeline de configuração.',
	tool_ios_prompt_builder_faq_a6:
		'Sim. O resultado é texto puro — copie e cole no ChatGPT, Gemini, Claude ou DeepSeek. A página não chama essas APIs no seu lugar.',
	tool_ios_prompt_builder_faq_q1:
		'O que eu escrevo é enviado para algum servidor?',
	tool_ios_prompt_builder_faq_q2:
		'A página chama a API do ChatGPT ou de outro modelo?',
	tool_ios_prompt_builder_faq_q3:
		'Qual a diferença em relação ao construtor de templates de prompt?',
	tool_ios_prompt_builder_faq_q4:
		'Por que a IA opcional pede Turnstile?',
	tool_ios_prompt_builder_faq_q5:
		'Consigo exportar em JSON?',
	tool_ios_prompt_builder_faq_q6:
		'Funciona com ChatGPT, Gemini, Claude e DeepSeek?',
	tool_ios_prompt_builder_faq_q7:
		'O que muda entre o modo local e a IA da Cloudflare?',
	tool_ios_prompt_builder_faq_a7:
		'O modo local só organiza seus campos, não faz requisição e não tem cota. Expandir ou Refinar manda o rascunho para a Cloudflare Workers AI (Turnstile obrigatório, uso limitado) e o texto devolvido substitui todo o conteúdo da área de resultado — confira antes de copiar. Se falhar ou a cota acabar, siga no modo local.',
	tool_ios_prompt_builder_ai_expand:
		'Expandir com IA',
	tool_ios_prompt_builder_ai_polish:
		'Refinar com IA',
	tool_ios_prompt_builder_ai_panel_label:
		'IA opcional da Cloudflare (Turnstile)',
	tool_ios_prompt_builder_ai_consent_title:
		'Enviar o rascunho para a Cloudflare Workers AI?',
	tool_ios_prompt_builder_ai_consent_body:
		'Passo opcional: envia o rascunho atual para a Cloudflare Workers AI fazer a inferência. Nossos servidores não repassam o texto para OpenAI, Google, Anthropic ou DeepSeek. Sem IA você continua montando o prompt no navegador.',
	tool_ios_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_ios_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI processando…',
	tool_ios_prompt_builder_ai_done:
		'O texto da IA substituiu o resultado. Revise antes de copiar.',
	tool_ios_prompt_builder_ai_err_generic:
		'A IA falhou; o resultado continua igual.',
	tool_ios_prompt_builder_ai_err_rate:
		'Cota de IA esgotada. Use o modo local ou tente amanhã (UTC).',
	tool_ios_prompt_builder_ai_err_turnstile:
		'Resolva o Turnstile antes de usar a IA.',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'Formato de saída',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'Funcionalidade / Especificação',
	tool_ios_prompt_builder_feature_spec_ph:
		'Ex.: tendência de passos e frequência em repouso…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / Stack do projeto',
	tool_ios_prompt_builder_swift_stack_ph:
		'Ex.: Swift 5.10, SwiftUI, iOS 17+, SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / Tela',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'Ex.: NavigationStack, Charts, folha de permissão…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / Acessibilidade',
	tool_ios_prompt_builder_hig_constraints_ph:
		'Ex.: Dynamic Type XXL, VoiceOver, sem force-unwrap…',
	tool_ios_prompt_builder_how_body:
		'Preencha os quatro campos, deixe a página montar o Markdown (ou JSON) no navegador e, se precisar de mais detalhe, peça uma ampliação à Cloudflare AI antes de colar o prompt no chat.',
	tool_ios_prompt_builder_how_item_1:
		'Clique em Carregar exemplo para preencher o preset e ver um prompt montado para editar.',
	tool_ios_prompt_builder_how_item_2:
		'Ajuste funcionalidade, stack, tela e regras das HIG e clique em Gerar prompt; para exportar os campos, troque para JSON.',
	tool_ios_prompt_builder_how_item_3:
		'Opcional: resolva o Turnstile e clique em Expandir ou Refinar — o texto da IA passa a ocupar a área de resultado.',
	tool_ios_prompt_builder_how_item_4:
		'Copie ou baixe o resultado e cole no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_ios_prompt_builder_how_title:
		'Como usar',
	tool_ios_prompt_builder_load_sample:
		'Carregar exemplo',
	tool_ios_prompt_builder_platforms_lead:
		'O prompt final é texto puro: cola do mesmo jeito no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_ios_prompt_builder_result_label:
		'Prompt gerado',
	tool_ios_prompt_builder_rules_body:
		'A página só formata o requisito: não compila código nem executa o Xcode. A IA opcional tem cota e exige Turnstile.',
	tool_ios_prompt_builder_rules_item_1:
		'Cada campo cai em um bloco do Markdown: Role, Task, Constraints e Output.',
	tool_ios_prompt_builder_rules_item_2:
		'A saída padrão é Markdown; o mesmo painel mostra JSON com os campos e o prompt montado.',
	tool_ios_prompt_builder_rules_item_3:
		'A IA da Cloudflare não substitui o modo local: a resposta ocupa toda a área de resultado, então revise antes de copiar.',
	tool_ios_prompt_builder_rules_item_4:
		'A ferramenta apenas monta texto: não compila Swift, não roda o Xcode e não chama as APIs de chat por você.',
	tool_ios_prompt_builder_rules_title:
		'Limites a esperar',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'Copiado para a área de transferência.',
	tool_ios_prompt_builder_status_done:
		'Prompt pronto.',
	tool_ios_prompt_builder_status_working:
		'Montando o prompt…',
	tool_ios_prompt_builder_title:
		'Gerador de prompts para iOS — local, com IA opcional',
	tool_ios_prompt_builder_usecase_1:
		'Transformar o requisito falado na revisão de design em um prompt pronto para colar no chat do time.',
	tool_ios_prompt_builder_usecase_2:
		'Exportar JSON para levar as regras de acessibilidade a uma lista de verificação e depois ampliar com a Cloudflare AI se precisar.',
	tool_ios_prompt_builder_usecase_3:
		'Se você não precisa dos campos de iOS e o template genérico de quatro blocos resolve, use o construtor de templates de prompt.',
	tool_ios_prompt_builder_usecase_4:
		'Escrever no navegador a descrição de uma funcionalidade ainda não anunciada e só depois decidir se ela vai para a IA opcional.',
	tool_ios_prompt_builder_usecases_title:
		'Quando ajuda',
};

export default pt;
