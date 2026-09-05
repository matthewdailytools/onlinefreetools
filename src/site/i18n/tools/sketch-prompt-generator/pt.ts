/**
 * i18n tool shard (sketch-prompt-generator / pt).
 * H1: Gerador de prompts Sketch.app (app de design Mac, não esboço a lápis).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Monte prompts prontos para colar que orientem ChatGPT, Gemini, Claude ou DeepSeek a operar o Sketch.app — Artboards, Symbols, estilos compartilhados e exportação. Preencha os campos e copie Markdown ou JSON. Por padrão o prompt é montado no seu navegador; só ao clicar em Expandir ou Refinar o rascunho atual vai para o Cloudflare Workers AI (com Turnstile e limites de uso), e a resposta substitui todo o bloco de saída.',
	tool_sketch_prompt_generator_build: 'Gerar prompt',
	tool_sketch_prompt_generator_clear: 'Limpar',
	tool_sketch_prompt_generator_copy: 'Copiar',
	tool_sketch_prompt_generator_desc:
		'Gerador de prompts Sketch.app — monte Artboards, Symbols e passos de exportação no navegador; Expandir/Refinar opcional com Cloudflare AI (Turnstile).',
	tool_sketch_prompt_generator_description:
		'Gerador de prompts Sketch.app — Local + IA opcional para ChatGPT, Gemini, Claude e DeepSeek: preencha objetivo, Artboards, Symbols e exportação e o navegador monta um prompt estruturado com os passos de trabalho no Sketch.app. Ao abrir já roda um exemplo editável; depois dá para Expandir ou Refinar via Cloudflare Workers AI (exige Turnstile e tem cota). Markdown por padrão; JSON para pipelines.',
	tool_sketch_prompt_generator_download: 'Baixar',
	tool_sketch_prompt_generator_empty: 'Preencha pelo menos um campo antes de gerar.',
	tool_sketch_prompt_generator_example:
		'Entrada: Objetivo = tela de login no Sketch.app; Artboards = iPhone 14 390×844; Symbols = Button/Primary + Input; Exportação = PNG 1x/2x/3x + PDF. Saída (Markdown): ## Papel → assistente Sketch.app; ## Tarefa → checklist numerada.',
	tool_sketch_prompt_generator_example_title: 'Exemplo',
	tool_sketch_prompt_generator_faq_a1:
		'A montagem local roda nesta aba — nada é enviado por padrão. Expand/Polish opcional envia só o texto daquele clique ao Cloudflare Workers AI, não a OpenAI, Google, Anthropic ou DeepSeek a partir dos nossos servidores.',
	tool_sketch_prompt_generator_faq_a2:
		'O modo local só formata campos. Expand/Polish usa Cloudflare Workers AI após Turnstile — sem APIs de chat e sem controle remoto do Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'O construtor de modelos Prompt cobre modelos genéricos. Esta página foca Sketch.app: objetivo, Artboards, Symbols/estilos e exportação.',
	tool_sketch_prompt_generator_faq_a4:
		'Não. Midjourney mira estilos de imagem raster. Aqui o prompt guia o Sketch.app (software de design no Mac). Para esboço a lápis / line-art, use a página Midjourney.',
	tool_sketch_prompt_generator_faq_a5:
		'Sim. Conclua o Turnstile no painel de IA antes de Expand ou Polish. Sem token, os botões de IA falham e o local continua.',
	tool_sketch_prompt_generator_faq_a6: 'Sim. O chip JSON emite campos estruturados mais o prompt montado.',
	tool_sketch_prompt_generator_faq_a7:
		'Sim. Cole o prompt no ChatGPT, Gemini, Claude ou DeepSeek para o chat guiar menus do Sketch.app. Só formatamos texto; não executamos o Sketch.',
	tool_sketch_prompt_generator_faq_a8:
		'No local tudo é formatado nesta aba e nada é enviado. Expandir/Refinar manda o rascunho ao Cloudflare Workers AI (Turnstile e cota diária) e a resposta substitui todo o bloco de saída. Se falhar ou a cota acabar, siga no local.',
	tool_sketch_prompt_generator_faq_q1: 'Meu prompt é enviado?',
	tool_sketch_prompt_generator_faq_q2: 'Isso chama ChatGPT ou controla o Sketch.app remotamente?',
	tool_sketch_prompt_generator_faq_q3: 'Qual a diferença do construtor de modelos Prompt?',
	tool_sketch_prompt_generator_faq_q4: 'Serve para esboço a lápis ou prompts Midjourney?',
	tool_sketch_prompt_generator_faq_q5: 'Por que Turnstile na IA opcional?',
	tool_sketch_prompt_generator_faq_q6: 'Posso obter JSON?',
	tool_sketch_prompt_generator_faq_q7: 'Funciona com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_sketch_prompt_generator_faq_q8: 'Diferença entre local e IA Cloudflare opcional?',
	tool_sketch_prompt_generator_ai_expand: 'Expandir com IA',
	tool_sketch_prompt_generator_ai_polish: 'Refinar com IA',
	tool_sketch_prompt_generator_ai_panel_label: 'IA Cloudflare opcional (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'Enviar texto ao Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Este passo opcional envia o rascunho ao Cloudflare Workers AI. Não vai para OpenAI, Google, Anthropic ou DeepSeek a partir dos nossos servidores. A montagem local funciona sem IA.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Continuar',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Cancelar',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI em andamento…',
	tool_sketch_prompt_generator_ai_done: 'O texto da IA foi escrito inteiro na saída. Revise antes de copiar.',
	tool_sketch_prompt_generator_ai_err_generic: 'IA falhou. O prompt local não mudou.',
	tool_sketch_prompt_generator_ai_err_rate: 'Cota de IA esgotada. Use o local ou tente amanhã (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Conclua o Turnstile antes de usar a IA.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Formato de saída',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Objetivo / entregável',
	tool_sketch_prompt_generator_goal_ph: 'ex.: tela de login no Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Artboards / páginas do documento',
	tool_sketch_prompt_generator_artboard_ph: 'ex.: iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbols / estilos / bibliotecas',
	tool_sketch_prompt_generator_symbols_ph: 'ex.: Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Exportação / entrega',
	tool_sketch_prompt_generator_export_ph: 'ex.: PNG 1x/2x/3x, revisão PDF…',
	tool_sketch_prompt_generator_how_body:
		'Preencha os campos do Sketch.app, gere o prompt localmente, opcionalmente Expandir/Refinar com Turnstile e cole no chat para guiar passos no Sketch.app.',
	tool_sketch_prompt_generator_how_item_1: 'Ao abrir, o exemplo de tela de login no Sketch.app já rodou.',
	tool_sketch_prompt_generator_how_item_2: 'Edite Objetivo, Artboards, Symbols e Exportação; clique Gerar prompt ou use JSON.',
	tool_sketch_prompt_generator_how_item_3: 'Opcional: conclua o Turnstile e use Expandir ou Refinar via Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Copie ou baixe, cole no chat e siga a checklist do Sketch.app.',
	tool_sketch_prompt_generator_how_title: 'Como funciona',
	tool_sketch_prompt_generator_load_sample: 'Carregar exemplo',
	tool_sketch_prompt_generator_platforms_lead:
		'Feito para ChatGPT, Gemini, Claude e DeepSeek — copie o prompt para o chat orientar operações no Sketch.app.',
	tool_sketch_prompt_generator_result_label: 'Saída do prompt',
	tool_sketch_prompt_generator_rules_body:
		'Os campos refletem o trabalho no Sketch.app. Local é o padrão; IA opcional exige Turnstile e tem limite. Esta página não abre o Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'Campos estruturados viram Role/Task/Constraints/Output em Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'Markdown padrão; JSON no mesmo canvas.',
	tool_sketch_prompt_generator_rules_item_3: 'A IA opcional não substitui o local — revise antes de copiar.',
	tool_sketch_prompt_generator_rules_item_4:
		'Só monta texto; não executa Sketch.app, plugins, Midjourney ou APIs de chat localmente.',
	tool_sketch_prompt_generator_rules_title: 'Regras esperadas',
	tool_sketch_prompt_generator_sec_constraints: 'Restrições',
	tool_sketch_prompt_generator_sec_output: 'Formato de saída',
	tool_sketch_prompt_generator_sec_role: 'Papel',
	tool_sketch_prompt_generator_sec_task: 'Tarefa',
	tool_sketch_prompt_generator_status_copied: 'Copiado para a área de transferência.',
	tool_sketch_prompt_generator_status_done: 'Prompt pronto.',
	tool_sketch_prompt_generator_status_working: 'Gerando prompt…',
	tool_sketch_prompt_generator_title: 'Gerador de prompts Sketch.app — Local + IA opcional',
	tool_sketch_prompt_generator_usecase_1:
		'Passar tamanhos de Artboard e nomes de Symbol ao chat da equipe para refazer uma tela no Sketch.app.',
	tool_sketch_prompt_generator_usecase_2: 'Preparar checklists de exportação (PNG, PDF) antes do QA de design.',
	tool_sketch_prompt_generator_usecase_3:
		'Comparar com Product design prompt builder quando quiser persona/wireframe em vez de menus do Sketch.app.',
	tool_sketch_prompt_generator_usecase_4: 'Manter rascunhos sensíveis no local — ativar IA só após o consentimento.',
	tool_sketch_prompt_generator_usecases_title: 'Bons encaixes',
};

export default pt;
