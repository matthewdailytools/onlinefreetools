/**
 * i18n tool shard (android-prompt-builder / pt).
 * Buscas locais: «gerador de prompt Android», «prompt para ChatGPT desenvolvimento Android». Termo principal no H1; secundários (stack Kotlin, Compose, Gradle, minSdk, saída JSON) na description, FAQ e casos de uso.
 * Limites reais: montagem no navegador sem requisição; Expandir/Refinar opcional envia o rascunho para a Cloudflare Workers AI (Turnstile, cota) e a resposta substitui toda a área de resultado.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_android_prompt_builder_article:
		'Transforme um requisito de Android em prompt pronto para colar: descreva a funcionalidade, o stack Kotlin, a tela em Compose e as restrições do Gradle, e a página monta o texto em Markdown ou JSON dentro do navegador. Por padrão nada é enviado — só ao clicar em Expandir ou Refinar o rascunho atual vai para a Cloudflare Workers AI (exige Turnstile e tem cota).',
	tool_android_prompt_builder_build:
		'Gerar prompt',
	tool_android_prompt_builder_clear:
		'Limpar',
	tool_android_prompt_builder_copy:
		'Copiar',
	tool_android_prompt_builder_desc:
		'Gerador de prompts para Android: preencha funcionalidade, stack Kotlin, tela em Compose e restrições do Gradle; o texto é montado no navegador em Markdown ou JSON, com IA opcional.',
	tool_android_prompt_builder_description:
		'Gerador de prompts para Android: informe a funcionalidade, o stack (Kotlin 2.0, Jetpack Compose, Room), a tela e as restrições do Gradle, e a página organiza tudo nos blocos Role / Task / Constraints / Output em Markdown ou JSON, sem sair do navegador. Exemplo: «lista de leitura offline com busca e arquivar arrastando» vira uma tarefa com minSdk 26. Em Carregar exemplo você preenche o preset e já vê o prompt montado; Expandir ou Refinar pela Cloudflare Workers AI é opcional (Turnstile, cota diária).',
	tool_android_prompt_builder_download:
		'Baixar',
	tool_android_prompt_builder_empty:
		'Preencha ao menos um campo antes de gerar.',
	tool_android_prompt_builder_example:
		'Entrada: Funcionalidade = lista de leitura offline, salvar pelo share sheet, busca em texto completo e arquivar arrastando com desfazer; Stack = Kotlin 2.0, Jetpack Compose, Room FTS4, Hilt; Compose = LazyColumn com cabeçalhos fixos e SwipeToDismissBox; Gradle = minSdk 26, targetSdk 35, módulo :core:data. Saída (Markdown): ## Role com o perfil de engenheiro Android sênior e ## Task com uma linha por campo.',
	tool_android_prompt_builder_example_title:
		'Exemplo',
	tool_android_prompt_builder_faq_a1:
		'Por padrão, não. Preencher os campos e clicar em Gerar prompt acontece só nesta aba, sem nenhuma requisição. O rascunho só sai daqui quando você clica em Expandir ou Refinar, e vai para a Cloudflare Workers AI; nossos servidores não repassam nada para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_android_prompt_builder_faq_a2:
		'Não. O modo local apenas formata o que você escreveu nos blocos Role / Task / Constraints / Output. A IA opcional usa a Cloudflare Workers AI depois do Turnstile, e não as APIs do ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_android_prompt_builder_faq_a3:
		'O construtor de templates de prompt entrega os quatro blocos genéricos Role / Task / Constraints / Output e serve para qualquer assunto. Aqui os campos já são de projeto Android: funcionalidade, stack Kotlin, tela em Compose, minSdk e módulos do Gradle, com exemplo e limites próprios.',
	tool_android_prompt_builder_faq_a4:
		'Sim. Resolva o Turnstile no painel de IA antes de clicar em Expandir ou Refinar. Sem token válido os botões retornam erro, e o modo local continua disponível.',
	tool_android_prompt_builder_faq_a5:
		'Sim. Troque o formato de saída para JSON: você recebe os campos separados mais o prompt já montado, útil para testes ou para um pipeline de configuração.',
	tool_android_prompt_builder_faq_a6:
		'Sim. O resultado é texto puro — copie e cole no ChatGPT, Gemini, Claude ou DeepSeek. A página não chama essas APIs no seu lugar.',
	tool_android_prompt_builder_faq_q1:
		'O que eu escrevo é enviado para algum servidor?',
	tool_android_prompt_builder_faq_q2:
		'A página chama a API do ChatGPT ou de outro modelo?',
	tool_android_prompt_builder_faq_q3:
		'Qual a diferença em relação ao construtor de templates de prompt?',
	tool_android_prompt_builder_faq_q4:
		'Por que a IA opcional pede Turnstile?',
	tool_android_prompt_builder_faq_q5:
		'Consigo exportar em JSON?',
	tool_android_prompt_builder_faq_q6:
		'Funciona com ChatGPT, Gemini, Claude e DeepSeek?',
	tool_android_prompt_builder_faq_q7:
		'O que muda entre o modo local e a IA da Cloudflare?',
	tool_android_prompt_builder_faq_a7:
		'O modo local só organiza seus campos, não faz requisição e não tem cota. Expandir ou Refinar manda o rascunho para a Cloudflare Workers AI (Turnstile obrigatório, uso limitado) e o texto devolvido substitui todo o conteúdo da área de resultado — confira antes de copiar. Se falhar ou a cota acabar, siga no modo local.',
	tool_android_prompt_builder_ai_expand:
		'Expandir com IA',
	tool_android_prompt_builder_ai_polish:
		'Refinar com IA',
	tool_android_prompt_builder_ai_panel_label:
		'IA opcional da Cloudflare (Turnstile)',
	tool_android_prompt_builder_ai_consent_title:
		'Enviar o rascunho para a Cloudflare Workers AI?',
	tool_android_prompt_builder_ai_consent_body:
		'Passo opcional: envia o rascunho atual para a Cloudflare Workers AI fazer a inferência. Nossos servidores não repassam o texto para OpenAI, Google, Anthropic ou DeepSeek. Sem IA você continua montando o prompt no navegador.',
	tool_android_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_android_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI processando…',
	tool_android_prompt_builder_ai_done:
		'O texto da IA substituiu o resultado. Revise antes de copiar.',
	tool_android_prompt_builder_ai_err_generic:
		'A IA falhou; o resultado continua igual.',
	tool_android_prompt_builder_ai_err_rate:
		'Cota de IA esgotada. Use o modo local ou tente amanhã (UTC).',
	tool_android_prompt_builder_ai_err_turnstile:
		'Resolva o Turnstile antes de usar a IA.',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'Formato de saída',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'Funcionalidade / Especificação',
	tool_android_prompt_builder_feature_spec_ph:
		'Ex.: lista de leitura offline com busca…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / Stack do projeto',
	tool_android_prompt_builder_kotlin_stack_ph:
		'Ex.: Kotlin 2.0, Jetpack Compose, Room, Hilt…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / Tela',
	tool_android_prompt_builder_compose_ui_ph:
		'Ex.: LazyColumn com cabeçalhos fixos…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / Restrições',
	tool_android_prompt_builder_gradle_constraints_ph:
		'Ex.: minSdk 26, targetSdk 35, módulo :core:data…',
	tool_android_prompt_builder_how_body:
		'Preencha os quatro campos, deixe a página montar o Markdown (ou JSON) no navegador e, se precisar de mais detalhe, peça uma ampliação à Cloudflare AI antes de colar o prompt no chat.',
	tool_android_prompt_builder_how_item_1:
		'Clique em Carregar exemplo para preencher o preset e ver um prompt montado para editar.',
	tool_android_prompt_builder_how_item_2:
		'Ajuste funcionalidade, stack, tela e restrições e clique em Gerar prompt; para exportar os campos, troque para JSON.',
	tool_android_prompt_builder_how_item_3:
		'Opcional: resolva o Turnstile e clique em Expandir ou Refinar — o texto da IA passa a ocupar a área de resultado.',
	tool_android_prompt_builder_how_item_4:
		'Copie ou baixe o resultado e cole no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_android_prompt_builder_how_title:
		'Como usar',
	tool_android_prompt_builder_load_sample:
		'Carregar exemplo',
	tool_android_prompt_builder_platforms_lead:
		'O prompt final é texto puro: cola do mesmo jeito no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_android_prompt_builder_result_label:
		'Prompt gerado',
	tool_android_prompt_builder_rules_body:
		'A página só formata o requisito: não compila código nem executa o Gradle. A IA opcional tem cota e exige Turnstile.',
	tool_android_prompt_builder_rules_item_1:
		'Cada campo cai em um bloco do Markdown: Role, Task, Constraints e Output.',
	tool_android_prompt_builder_rules_item_2:
		'A saída padrão é Markdown; o mesmo painel mostra JSON com os campos e o prompt montado.',
	tool_android_prompt_builder_rules_item_3:
		'A IA da Cloudflare não substitui o modo local: a resposta ocupa toda a área de resultado, então revise antes de copiar.',
	tool_android_prompt_builder_rules_item_4:
		'A ferramenta apenas monta texto: não compila Kotlin, não roda Gradle e não chama as APIs de chat por você.',
	tool_android_prompt_builder_rules_title:
		'Limites a esperar',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'Copiado para a área de transferência.',
	tool_android_prompt_builder_status_done:
		'Prompt pronto.',
	tool_android_prompt_builder_status_working:
		'Montando o prompt…',
	tool_android_prompt_builder_title:
		'Gerador de prompts para Android — local, com IA opcional',
	tool_android_prompt_builder_usecase_1:
		'Transformar o requisito falado na reunião de sprint em um prompt pronto para colar no chat do time.',
	tool_android_prompt_builder_usecase_2:
		'Exportar JSON para ligar os campos a um teste de regressão e depois ampliar com a Cloudflare AI se precisar.',
	tool_android_prompt_builder_usecase_3:
		'Se você não precisa dos campos de Android e o template genérico de quatro blocos resolve, use o construtor de templates de prompt.',
	tool_android_prompt_builder_usecase_4:
		'Escrever a descrição interna no navegador e só depois decidir se vale enviar para a IA opcional.',
	tool_android_prompt_builder_usecases_title:
		'Quando ajuda',
};

export default pt;
