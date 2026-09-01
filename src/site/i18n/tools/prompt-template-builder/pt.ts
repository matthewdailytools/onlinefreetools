/**
 * i18n tool shard (prompt-template-builder / pt).
 * Master H1: construtor de modelos de Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Transforme um rascunho de prompt em um modelo reutilizável Role / Task / Constraints / Output nesta página. Cole texto livre ou preencha os campos, depois copie Markdown ou JSON para ChatGPT, Gemini, Claude ou DeepSeek. Nenhuma API de modelo é chamada. O texto fica no dispositivo e não é enviado ao servidor.',
	tool_prompt_template_builder_build: 'Criar modelo',
	tool_prompt_template_builder_clear: 'Limpar',
	tool_prompt_template_builder_constraints_label: 'Restrições',
	tool_prompt_template_builder_constraints_ph: 'Limites de tom, escopo, o que evitar…',
	tool_prompt_template_builder_copy: 'Copiar',
	tool_prompt_template_builder_desc:
		'Construtor de modelos de Prompt para ChatGPT, Gemini, Claude e DeepSeek — Markdown/JSON; fica no dispositivo.',
	tool_prompt_template_builder_description:
		'Construtor de modelos de Prompt para ChatGPT, Gemini, Claude e DeepSeek: une Role, Task, Constraints e Output em um modelo reutilizável. Chips de cena cobrem revisão de código, longa-metragem, drama curto, Android e iOS. Exemplo: o preset Agent de revisão de código roda ao abrir. Markdown é o padrão; JSON emite {role,task,constraints,output}. A análise fica nesta aba — não é um LLM. O texto permanece no dispositivo e não é enviado ao servidor.',
	tool_prompt_template_builder_download: 'Baixar',
	tool_prompt_template_builder_empty: 'Adicione texto livre ou pelo menos um campo antes de criar.',
	tool_prompt_template_builder_example:
		'Carregar exemplo preenche o preset Agent de revisão de código, gera Markdown com quatro seções ## e habilita Copiar e Baixar. Experimente os chips Filme, Drama curto, Android ou iOS para outros padrões.',
	tool_prompt_template_builder_example_title: 'Exemplo',
	tool_prompt_template_builder_faq_a1:
		'Não. Os modelos são criados nesta aba do navegador. Nada é enviado à OpenAI, Google, Anthropic, DeepSeek ou aos nossos servidores.',
	tool_prompt_template_builder_faq_a2:
		'Não. Esta página só formata seu texto em blocos. Não chama ChatGPT, Gemini, Claude, DeepSeek nem nenhuma outra API de modelo.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown transforma exportações de chat em arquivos legíveis. Aqui você estrutura um system prompt reutilizável — use os dois ao arquivar chats e refinar o modelo.',
	tool_prompt_template_builder_faq_a4:
		'Sim. O chip JSON emite {role,task,constraints,output} para configs ou testes. Combine com o validador JSON Schema se precisar.',
	tool_prompt_template_builder_faq_a5:
		'Linhas que começam com Role:, Task:, Constraints: ou Output: no campo livre viram seções. Campos explícitos têm prioridade.',
	tool_prompt_template_builder_faq_a6:
		'Sim. Copie o modelo criado para ChatGPT, Gemini, Claude ou DeepSeek — a mesma estrutura de quatro campos funciona em cada UI de chat. Não mantemos URLs separadas por plataforma porque o trabalho é formatar texto, não chamar APIs.',
	tool_prompt_template_builder_faq_q1: 'Meu prompt é enviado?',
	tool_prompt_template_builder_faq_q2: 'Isso chama um LLM?',
	tool_prompt_template_builder_faq_q3: 'Como difere do export ChatGPT para Markdown?',
	tool_prompt_template_builder_faq_q4: 'Posso obter JSON?',
	tool_prompt_template_builder_faq_q5: 'Como funciona a análise do texto livre?',
	tool_prompt_template_builder_faq_q6: 'Posso usar com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_prompt_template_builder_faq_q7: 'Diferença entre modo local e Cloudflare AI opcional?',
	tool_prompt_template_builder_faq_a7:
		'O modo local formata só nesta aba—nada é enviado. Expandir/Polir opcional envia o texto desse clique ao Cloudflare Workers AI (limitado, Turnstile). Se falhar ou acabar a cota, use o modo local. Não prometemos AI ilimitada.',
	tool_prompt_template_builder_ai_expand: 'Expandir com AI',
	tool_prompt_template_builder_ai_polish: 'Polir com AI',
	tool_prompt_template_builder_ai_panel_label: 'Cloudflare AI opcional',
	tool_prompt_template_builder_ai_consent_title: 'Enviar texto ao Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este passo opcional envia seu rascunho ao Cloudflare Workers AI. Não vai para OpenAI, Google, Anthropic ou DeepSeek dos nossos servidores. A montagem local funciona sem AI.',
	tool_prompt_template_builder_ai_consent_ok: 'Continuar',
	tool_prompt_template_builder_ai_consent_cancel: 'Cancelar',
	tool_prompt_template_builder_ai_working: 'Cloudflare AI trabalhando…',
	tool_prompt_template_builder_ai_done: 'Sugestão AI aplicada. Revise antes de copiar.',
	tool_prompt_template_builder_ai_err_generic: 'AI falhou. Seu modelo local não mudou.',
	tool_prompt_template_builder_ai_err_rate: 'Cota AI esgotada. Use modo local ou tente amanhã (UTC).',
	tool_prompt_template_builder_ai_err_turnstile: 'Complete o Turnstile antes de usar AI.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Formato de saída',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt livre (opcional)',
	tool_prompt_template_builder_free_ph: 'Cole um rascunho ou linhas Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Escolha um chip de cena ou escreva seu rascunho, preencha Role / Task / Constraints / Output, crie o modelo e cole em ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Escolha Revisão de código, Filme, Drama curto, Android ou iOS — ou cole seu rascunho no campo livre.',
	tool_prompt_template_builder_how_item_2: 'Clique em Criar modelo (Carregar exemplo já executou o preset de revisão de código ao abrir).',
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
		'Um modelo reutilizável precisa de blocos claros, precedência de campos e limites honestos — não um segundo produto gerador.',
	tool_prompt_template_builder_rules_item_1:
		'Quatro blocos: Role, Task, Constraints, Output. Vazios não aparecem no Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Campos explícitos vencem linhas parseadas do texto livre.',
	tool_prompt_template_builder_rules_item_3: 'Padrão: Markdown com ##. JSON é chip na mesma página.',
	tool_prompt_template_builder_rules_item_4:
		'Chips de cena presetam campos para cinema, drama curto e código mobile — mesmo construtor, sem URLs separadas por plataforma.',
	tool_prompt_template_builder_rules_title: 'Regras esperadas',
	tool_prompt_template_builder_scene_android: 'Código Android',
	tool_prompt_template_builder_scene_code: 'Revisão de código',
	tool_prompt_template_builder_scene_ios: 'Código iOS',
	tool_prompt_template_builder_scene_label: 'Preset de cena',
	tool_prompt_template_builder_scene_movie: 'Longa-metragem',
	tool_prompt_template_builder_scene_short_drama: 'Drama curto',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Copiado para a área de transferência.',
	tool_prompt_template_builder_status_done: 'Modelo pronto.',
	tool_prompt_template_builder_status_working: 'Criando modelo…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'O que fazer passo a passo…',
	tool_prompt_template_builder_title: 'construtor de modelos de Prompt',
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
		'Carregue Android ou iOS para modelos de agente de código Kotlin/Swift sem abrir quatro páginas específicas por plataforma.',
	tool_prompt_template_builder_usecases_title: 'Boas combinações',
};

export default pt;
