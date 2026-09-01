/**
 * i18n tool shard (prompt-template-builder / pt).
 * H1 local: construtor de modelos de Prompt.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Transforme um rascunho de prompt em um modelo reutilizável Role / Task / Constraints / Output nesta página. Cole texto livre ou preencha os campos e copie Markdown ou JSON. Nenhuma API de modelo é chamada. O texto fica no dispositivo e não é enviado ao servidor.',
	tool_prompt_template_builder_build: 'Criar modelo',
	tool_prompt_template_builder_clear: 'Limpar',
	tool_prompt_template_builder_constraints_label: 'Restrições',
	tool_prompt_template_builder_constraints_ph: 'Limites de tom, escopo, o que evitar…',
	tool_prompt_template_builder_copy: 'Copiar',
	tool_prompt_template_builder_desc:
		'Modelo Prompt estruturado (Markdown/JSON) — fica no dispositivo, sem enviar ao servidor.',
	tool_prompt_template_builder_description:
		'Construtor de modelos de Prompt: une texto livre com Role, Task, Constraints e Output em um modelo reutilizável. Exemplo: o modelo de revisão de código aparece ao abrir. Markdown é o padrão; JSON emite {role,task,constraints,output}. Tudo nesta aba — não é LLM nem biblioteca na nuvem. O texto permanece no dispositivo e não é enviado ao servidor.',
	tool_prompt_template_builder_download: 'Baixar',
	tool_prompt_template_builder_empty: 'Adicione texto livre ou pelo menos um campo antes de criar.',
	tool_prompt_template_builder_example:
		'Carregar exemplo preenche Role, Task, Constraints e Output para um agente de revisão de código, gera Markdown com quatro seções ## e habilita Copiar e Baixar.',
	tool_prompt_template_builder_example_title: 'Exemplo',
	tool_prompt_template_builder_faq_a1:
		'Não. O modelo é criado nesta aba do navegador. Nada é enviado à OpenAI, Anthropic ou aos nossos servidores.',
	tool_prompt_template_builder_faq_a2:
		'Não. Esta página só formata seu texto em blocos. Não chama nenhum modelo nem inventa texto novo.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown transforma exportações de chat em arquivos legíveis. Aqui você estrutura um system prompt reutilizável — use os dois ao arquivar chats e refinar o modelo.',
	tool_prompt_template_builder_faq_a4:
		'Sim. O chip JSON emite {role,task,constraints,output}. Combine com o validador JSON Schema se precisar.',
	tool_prompt_template_builder_faq_a5:
		'Linhas que começam com Role:, Task:, Constraints: ou Output: no campo livre viram seções. Campos explícitos têm prioridade.',
	tool_prompt_template_builder_faq_q1: 'Meu prompt é enviado?',
	tool_prompt_template_builder_faq_q2: 'Isso chama um LLM?',
	tool_prompt_template_builder_faq_q3: 'Como difere do export ChatGPT para Markdown?',
	tool_prompt_template_builder_faq_q4: 'Posso obter JSON?',
	tool_prompt_template_builder_faq_q5: 'Como funciona a análise do texto livre?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Formato de saída',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt livre (opcional)',
	tool_prompt_template_builder_free_ph: 'Cole um rascunho ou linhas Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Escreva um rascunho, opcionalmente divida Role / Task / Constraints / Output, crie o modelo e copie ou baixe. Markdown e JSON são chips do mesmo trabalho.',
	tool_prompt_template_builder_how_item_1:
		'Cole um rascunho ou preencha Role, Task, Constraints e Output — o objetivo é um modelo prompt estruturado.',
	tool_prompt_template_builder_how_item_2: 'Clique em Criar modelo (o exemplo já rodou ao abrir a página).',
	tool_prompt_template_builder_how_item_3: 'Mude para JSON se precisar de {role,task,constraints,output} para código ou config.',
	tool_prompt_template_builder_how_item_4: 'Copie ou baixe. Edite os campos e recrie quando quiser.',
	tool_prompt_template_builder_how_title: 'Como funciona',
	tool_prompt_template_builder_load_sample: 'Carregar exemplo',
	tool_prompt_template_builder_output_fmt_label: 'Formato de saída',
	tool_prompt_template_builder_output_fmt_ph: 'Seções Markdown, forma JSON, lista…',
	tool_prompt_template_builder_result_label: 'Modelo',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Quem o modelo deve representar…',
	tool_prompt_template_builder_rules_body:
		'Um modelo reutilizável precisa de blocos claros e limites honestos — não um segundo gerador.',
	tool_prompt_template_builder_rules_item_1:
		'Quatro blocos: Role, Task, Constraints, Output. Vazios não aparecem no Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Campos explícitos vencem linhas parseadas do texto livre.',
	tool_prompt_template_builder_rules_item_3: 'Padrão: Markdown com ##. JSON é chip na mesma página.',
	tool_prompt_template_builder_rules_item_4: 'Só formata texto. Não estima tokens nem valida JSON contra schema.',
	tool_prompt_template_builder_rules_title: 'Regras esperadas',
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
		'Publique um system prompt de revisão de código que a equipe possa colar em qualquer chat.',
	tool_prompt_template_builder_usecase_2:
		'Transforme notas de reunião em blocos Role/Task/Constraints antes de conectar a API.',
	tool_prompt_template_builder_usecase_3:
		'Exporte JSON e abra o validador JSON Schema para checar arquivos de configuração.',
	tool_prompt_template_builder_usecases_title: 'Boas combinações',
};

export default pt;
