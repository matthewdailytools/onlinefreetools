/**
 * i18n tool shard (prompt-template-builder / pt).
 * H1 de busca: construtor de modelos de prompt; a página só monta o texto — não chama a API de
 * nenhum chat. ChatGPT / Gemini / Claude / DeepSeek aparecem na description e na primeira dobra.
 * Expand/Polish é opcional e passa pelo Cloudflare Workers AI (Turnstile + cota).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Transforme um rascunho de prompt em um modelo reutilizável Role / Task / Constraints / Output nesta página. Cole texto livre ou preencha os campos, depois copie Markdown ou JSON para ChatGPT, Gemini, Claude ou DeepSeek. Por padrão o modelo é montado no seu navegador e não chamamos a API de nenhum chat por você; só ao clicar em Expandir ou Refinar com IA o rascunho atual é enviado ao Cloudflare Workers AI (com Turnstile e cota limitada).',
	tool_prompt_template_builder_build: 'Criar modelo',
	tool_prompt_template_builder_clear: 'Limpar',
	tool_prompt_template_builder_constraints_label: 'Restrições',
	tool_prompt_template_builder_constraints_ph: 'Limites de tom, escopo, o que evitar…',
	tool_prompt_template_builder_copy: 'Copiar',
	tool_prompt_template_builder_desc:
		'Construtor de modelos de prompt — montagem local no navegador, com Expandir/Refinar opcional pela IA da Cloudflare (exige Turnstile).',
	tool_prompt_template_builder_description:
		'Construtor de modelos de prompt: organize seu rascunho em quatro passos — Role, Task, Constraints, Output — e cole em ChatGPT, Gemini, Claude ou DeepSeek. Ao abrir já roda um exemplo de revisão de código; exporte Markdown ou troque para JSON em pipelines. A montagem é local no navegador e a IA da Cloudflare (Expandir/Refinar) é opcional e tem cota.',
	tool_prompt_template_builder_download: 'Baixar',
	tool_prompt_template_builder_empty: 'Adicione texto livre ou pelo menos um campo antes de criar.',
	tool_prompt_template_builder_example:
		'Entrada (Carregar exemplo, chip Código): Role = revisor sênior (segurança e legibilidade); Task = revisar o diff do PR colado; Constraints = máx. 12 tópicos. Saída (Markdown): ## Papel / ## Tarefa / ## Restrições / ## Formato de saída — quatro seções prontas para ChatGPT ou Claude.',
	tool_prompt_template_builder_example_title: 'Exemplo',
	tool_prompt_template_builder_faq_a1:
		'Por padrão o modelo é montado nesta aba e nada sai daqui. Só Expandir/Refinar envia o texto daquele clique ao Cloudflare Workers AI; dos nossos servidores nada vai para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'O modo local apenas formata os seus campos nesta aba. Expandir/Refinar usa o Cloudflare Workers AI depois do Turnstile: não abrimos ChatGPT, Gemini, Claude nem DeepSeek no seu lugar.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown transforma exportações de chat em arquivos legíveis. Aqui você estrutura um system prompt reutilizável — use os dois ao arquivar chats e refinar o modelo.',
	tool_prompt_template_builder_faq_a4:
		'Sim. Resolva o widget Turnstile no painel de IA antes de Expandir ou Refinar; sem token válido o botão devolve erro e a montagem local continua funcionando.',
	tool_prompt_template_builder_faq_a5:
		'Linhas que começam com Role:, Task:, Constraints: ou Output: no campo livre viram seções. Campos explícitos têm prioridade.',
	tool_prompt_template_builder_faq_a6:
		'Sim. Copie o modelo criado para ChatGPT, Gemini, Claude ou DeepSeek: a mesma estrutura de quatro campos funciona em qualquer um desses chats. A página só prepara o texto; ela não faz login nem chama a API de nenhum deles.',
	tool_prompt_template_builder_faq_q1: 'Meu prompt é enviado?',
	tool_prompt_template_builder_faq_q2: 'Isso chama um LLM?',
	tool_prompt_template_builder_faq_q3: 'Como difere do export ChatGPT para Markdown?',
	tool_prompt_template_builder_faq_q4:
		'Por que a IA opcional pede Turnstile?',
	tool_prompt_template_builder_faq_q5: 'Como funciona a análise do texto livre?',
	tool_prompt_template_builder_faq_q6: 'Posso usar com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_prompt_template_builder_faq_q7:
		'Qual a diferença entre o modo local e a IA opcional da Cloudflare?',
	tool_prompt_template_builder_faq_a7:
		'Local: tudo é montado nesta aba, sem envio. Expandir/Refinar manda o rascunho ao Cloudflare Workers AI (Turnstile e cota diária) e a resposta substitui o bloco de resultado. Se falhar ou a cota acabar, siga no modo local.',
	tool_prompt_template_builder_ai_expand:
		'Expandir com IA',
	tool_prompt_template_builder_ai_polish:
		'Refinar com IA',
	tool_prompt_template_builder_ai_panel_label:
		'IA opcional da Cloudflare (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'Enviar o texto ao Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este passo opcional envia o seu rascunho atual ao Cloudflare Workers AI. Dos nossos servidores nada vai para OpenAI, Google, Anthropic ou DeepSeek. Sem IA a montagem local continua igual.',
	tool_prompt_template_builder_ai_consent_ok:
		'Continuar',
	tool_prompt_template_builder_ai_consent_cancel:
		'Cancelar',
	tool_prompt_template_builder_ai_working:
		'A IA da Cloudflare está processando…',
	tool_prompt_template_builder_ai_done:
		'O texto da IA foi escrito inteiro no resultado. Confira antes de copiar.',
	tool_prompt_template_builder_ai_err_generic:
		'A IA falhou. Seu prompt local continua como estava.',
	tool_prompt_template_builder_ai_err_rate:
		'Cota de IA esgotada. Use o modo local ou tente amanhã (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Resolva o Turnstile antes de usar a IA.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Formato de saída',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt livre (opcional)',
	tool_prompt_template_builder_free_ph: 'Cole um rascunho ou linhas Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Escolha um chip de cena ou escreva seu rascunho, preencha Role / Task / Constraints / Output, crie o modelo e cole em ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Escolha Revisão de código, Filme, Drama curto, Android ou iOS — ou cole seu rascunho no campo livre.',
	tool_prompt_template_builder_how_item_2: 'Clique em Criar modelo (clique em Carregar exemplo para o preset de revisão de código).',
	tool_prompt_template_builder_how_item_3: 'Mude para JSON se precisar de {role,task,constraints,output} para código ou config.',
	tool_prompt_template_builder_how_item_4: 'Copie ou baixe, depois cole em ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_how_title: 'Como funciona',
	tool_prompt_template_builder_load_sample: 'Carregar exemplo',
	tool_prompt_template_builder_output_fmt_label: 'Formato de saída',
	tool_prompt_template_builder_output_fmt_ph: 'Seções Markdown, forma JSON, lista…',
	tool_prompt_template_builder_platforms_lead:
		'Feito para ChatGPT, Gemini, Claude e DeepSeek — copie o modelo pronto para qualquer uma dessas UIs de chat.',
	tool_prompt_template_builder_result_label: 'Modelo',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Quem o modelo deve representar…',
	tool_prompt_template_builder_rules_body:
		'Um modelo reutilizável precisa de blocos claros, uma ordem de prioridade entre os campos e dizer sem rodeios o que esta página não faz.',
	tool_prompt_template_builder_rules_item_1:
		'Quatro blocos: Role, Task, Constraints, Output. Vazios não aparecem no Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Campos explícitos vencem linhas parseadas do texto livre.',
	tool_prompt_template_builder_rules_item_3: 'Padrão: Markdown com ##. JSON é chip na mesma página.',
	tool_prompt_template_builder_rules_item_4:
		'Os chips de cena preenchem campos típicos de cinema, drama curto e código mobile; depois você continua editando à mão.',
	tool_prompt_template_builder_rules_title: 'Regras esperadas',
	tool_prompt_template_builder_scene_android: 'Código para Android',
	tool_prompt_template_builder_scene_code: 'Revisão de código',
	tool_prompt_template_builder_scene_ios: 'Código iOS',
	tool_prompt_template_builder_scene_label: 'Preset de cena',
	tool_prompt_template_builder_scene_movie: 'Longa-metragem',
	tool_prompt_template_builder_scene_short_drama: 'Drama curto',
	tool_prompt_template_builder_sec_constraints: 'Restrições',
	tool_prompt_template_builder_sec_output: 'Formato de saída',
	tool_prompt_template_builder_sec_role: 'Papel',
	tool_prompt_template_builder_sec_task: 'Tarefa',
	tool_prompt_template_builder_status_copied: 'Copiado para a área de transferência.',
	tool_prompt_template_builder_status_done: 'Modelo pronto.',
	tool_prompt_template_builder_status_working: 'Criando modelo…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'O que fazer passo a passo…',
	tool_prompt_template_builder_title:
		'Construtor de modelos de Prompt — Local + IA opcional',
	tool_prompt_template_builder_usecase_1:
		'Publique um system prompt de Agent de revisão de código que a equipe possa colar em ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'Transforme notas de reunião em blocos Role/Task/Constraints antes de conectar a API de qualquer provedor de chat.',
	tool_prompt_template_builder_usecase_3:
		'Exporte JSON e abra o validador JSON Schema para checar arquivos de configuração downstream.',
	tool_prompt_template_builder_usecase_4:
		'Carregue o chip Filme para uma folha de beats em três atos que você cola na UI de chat preferida.',
	tool_prompt_template_builder_usecase_5:
		'Carregue Drama curto para ganchos e cliffhangers de série vertical — episódios mobile estilo binge.',
	tool_prompt_template_builder_usecase_6:
		'Carregue Android ou iOS para modelos de agente de código com convenções Kotlin/Swift e acrescente o estilo do seu time.',
	tool_prompt_template_builder_usecases_title: 'Boas combinações',
};

export default pt;
