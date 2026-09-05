/**
 * i18n tool shard (midjourney-prompt-builder / pt).
 * Reescrito para quem procura «gerador de prompt para Midjourney» ou «como escrever prompt de Midjourney»:
 * o termo principal fica no H1; «parâmetro --ar», «exportar prompt em JSON» e «prompt para o ChatGPT»
 * entram na descrição, nas perguntas frequentes e nos casos de uso.
 * Limites reais: o prompt é montado no navegador; só Ampliar/Refinar manda o rascunho para a Cloudflare Workers AI
 * (com Turnstile e cota); aqui não se gera imagem nem se chama o Midjourney.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Monte aqui o prompt do Midjourney antes de usar: preencha assunto, estilo, luz, proporção e parâmetros, e a página junta tudo em Markdown ou JSON dentro do navegador para você colar no ChatGPT, Gemini, Claude ou DeepSeek. Esta página só produz texto — não gera imagem nem chama o Midjourney. Por padrão nada é enviado; se você clicar em Ampliar ou Refinar, o rascunho vai para a Cloudflare Workers AI depois do Turnstile.',
	tool_midjourney_prompt_builder_build:
		'Gerar prompt',
	tool_midjourney_prompt_builder_clear:
		'Limpar',
	tool_midjourney_prompt_builder_copy:
		'Copiar',
	tool_midjourney_prompt_builder_desc:
		'Gerador de prompt para Midjourney: preencha assunto, estilo, luz e proporção e a página monta em Markdown ou JSON; IA da Cloudflare opcional com Turnstile.',
	tool_midjourney_prompt_builder_description:
		'Gerador de prompt para Midjourney: você escreve assunto, estilo, luz, proporção e parâmetros e a página monta uma linha pronta para colar, com --ar conforme a proporção e --v 6.1 quando você não informa a versão. Markdown por padrão e JSON para os seus scripts; ao abrir já rodou o exemplo do samurai na ponte. Se faltar detalhe, Ampliar ou Refinar envia o rascunho para a Cloudflare Workers AI (Turnstile e cota). Só texto: aqui não se gera imagem.',
	tool_midjourney_prompt_builder_download:
		'Baixar',
	tool_midjourney_prompt_builder_empty:
		'Preencha pelo menos um campo antes de gerar o prompt.',
	tool_midjourney_prompt_builder_example:
		'Entrada: assunto = samurai desembainhando a espada numa ponte com musgo, névoa de chuva, torii ao fundo; estilo = tinta cinematográfica, azul-esverdeado e carvão, grão fino; luz = contraluz do amanhecer com neblina volumétrica; proporção = 16:9; parâmetros = --v 6.1 --style raw --stylize 120 --chaos 8. Saída (Markdown): o bloco ## Task traz a linha do Midjourney com assunto, estilo e luz e termina em --ar 16:9. Em JSON vêm os mesmos dados como campos.',
	tool_midjourney_prompt_builder_example_title:
		'Exemplo',
	tool_midjourney_prompt_builder_faq_a1:
		'A montagem acontece nesta aba do navegador, então por padrão nada sai daqui. Só quando você clica em Ampliar ou Refinar o rascunho atual é enviado para a Cloudflare Workers AI; não repassamos esse texto dos nossos servidores para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_midjourney_prompt_builder_faq_a2:
		'No modo local nenhum modelo é chamado: a página apenas arruma os seus campos nos blocos Role, Task, Constraints e Output. Ampliar e Refinar usam a Cloudflare Workers AI depois do Turnstile e não acionam as APIs do ChatGPT, Gemini, Claude ou DeepSeek pelos nossos servidores.',
	tool_midjourney_prompt_builder_faq_a3:
		'O gerador de modelos de prompt entrega a estrutura genérica de quatro blocos e serve para qualquer assunto. Aqui os campos já são os do Midjourney — assunto, estilo, luz, proporção e parâmetros —, com um exemplo carregado na abertura e uma tabela de equivalências feita para este caso.',
	tool_midjourney_prompt_builder_faq_a4:
		'O Turnstile segura os scripts automáticos para que a cota gratuita fique com quem é gente. Resolva o desafio no painel de IA antes de clicar em Ampliar ou Refinar; sem um token válido esses botões dão erro e a montagem no navegador continua funcionando.',
	tool_midjourney_prompt_builder_faq_a5:
		'Sim. Ao trocar para JSON a mesma saída traz os campos estruturados e o prompt já montado, pronto para uma rodada de imagens, um teste ou um arquivo de configuração.',
	tool_midjourney_prompt_builder_faq_a6:
		'Sim. Copie o resultado e cole no chat que você usa, ou direto no Midjourney. Esta página só formata texto e não chama API nenhuma, por isso não existe um endereço diferente para cada plataforma.',
	tool_midjourney_prompt_builder_faq_q1:
		'O que eu escrevo é enviado para algum servidor?',
	tool_midjourney_prompt_builder_faq_q2:
		'Esta página chama a API do ChatGPT ou de outros modelos?',
	tool_midjourney_prompt_builder_faq_q3:
		'Qual a diferença em relação ao gerador de modelos de prompt?',
	tool_midjourney_prompt_builder_faq_q4:
		'Por que preciso passar pelo Turnstile para usar a IA?',
	tool_midjourney_prompt_builder_faq_q5:
		'Consigo a saída em JSON?',
	tool_midjourney_prompt_builder_faq_q6:
		'Funciona com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'Qual a diferença entre o modo local e a IA opcional da Cloudflare?',
	tool_midjourney_prompt_builder_faq_a7:
		'No modo local tudo é montado nesta aba, sem sair do navegador. Ampliar ou Refinar manda o rascunho para a Cloudflare Workers AI (precisa de Turnstile e há limite de frequência e de cota diária) e o texto que volta é escrito por inteiro na saída, sobre o rascunho que você estava vendo — confira antes de copiar. Se der erro ou a cota acabar, siga no modo local.',
	tool_midjourney_prompt_builder_ai_expand:
		'Ampliar com IA',
	tool_midjourney_prompt_builder_ai_polish:
		'Refinar com IA',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Opcional: Cloudflare AI (exige Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'Enviar o rascunho para a Cloudflare Workers AI?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Este passo é opcional: envia o rascunho que está agora nos campos para a Cloudflare Workers AI fazer uma inferência. Não repassamos esse texto dos nossos servidores para OpenAI, Google, Anthropic ou DeepSeek. Sem a IA, o prompt continua sendo montado no seu navegador.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_midjourney_prompt_builder_ai_working:
		'A Cloudflare AI está processando…',
	tool_midjourney_prompt_builder_ai_done:
		'O texto da IA foi escrito por inteiro na saída. Confira antes de copiar.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'A IA não respondeu desta vez; a saída ficou como estava.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'A cota de IA acabou. Continue montando o prompt aqui ou tente amanhã (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Resolva a verificação do Turnstile antes de usar a IA.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Formato da saída',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Assunto',
	tool_midjourney_prompt_builder_subject_ph:
		'Por exemplo: samurai desembainhando numa ponte…',
	tool_midjourney_prompt_builder_style_label:
		'Estilo',
	tool_midjourney_prompt_builder_style_ph:
		'Por exemplo: tinta cinematográfica, tons de carvão…',
	tool_midjourney_prompt_builder_lighting_label:
		'Luz',
	tool_midjourney_prompt_builder_lighting_ph:
		'Por exemplo: contraluz do amanhecer com neblina…',
	tool_midjourney_prompt_builder_aspect_label:
		'Proporção',
	tool_midjourney_prompt_builder_aspect_ph:
		'Por exemplo 16:9, 9:16 ou 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'Parâmetros do MJ',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Por exemplo --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Equivalências dos parâmetros do Midjourney',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Proporção → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Versão → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Se você escrever uma proporção, ela vira --ar no fim da linha; se não houver versão nos parâmetros, entra --v 6.1.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 quadrado',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 deitado',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 em pé',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'Versão padrão do MJ v6',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Preencha os campos, gere o prompt e cole no ChatGPT, Gemini, Claude ou DeepSeek; se faltar detalhe, use Ampliar ou Refinar com a IA opcional da Cloudflare.',
	tool_midjourney_prompt_builder_how_item_1:
		'Clique em Carregar exemplo para o preset padrão.',
	tool_midjourney_prompt_builder_how_item_2:
		'Troque assunto, estilo, luz, proporção e parâmetros e clique em Gerar prompt; mude para JSON se precisar exportar estruturado.',
	tool_midjourney_prompt_builder_how_item_3:
		'Opcional: resolva o Turnstile no painel de IA e clique em Ampliar ou Refinar; o texto que voltar é escrito na saída.',
	tool_midjourney_prompt_builder_how_item_4:
		'Copie ou baixe e cole no ChatGPT, Gemini, Claude ou DeepSeek para continuar ajustando, ou direto no Midjourney.',
	tool_midjourney_prompt_builder_how_title:
		'Como usar',
	tool_midjourney_prompt_builder_load_sample:
		'Carregar exemplo',
	tool_midjourney_prompt_builder_platforms_lead:
		'A saída pode ser colada como está no chat do ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_midjourney_prompt_builder_result_label:
		'Prompt gerado',
	tool_midjourney_prompt_builder_rules_body:
		'Como os parâmetros são traduzidos: a proporção vira --ar e, sem versão informada, entra --v 6.1. A montagem no navegador é o comportamento padrão; a IA opcional tem limite de uso e pede Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Cada campo do formulário cai em um dos blocos Role, Task, Constraints e Output do Markdown.',
	tool_midjourney_prompt_builder_rules_item_2:
		'A exportação padrão é Markdown; JSON é um botão sobre a mesma saída.',
	tool_midjourney_prompt_builder_rules_item_3:
		'A IA opcional é um passo a mais, não uma troca: o modo local continua disponível e o texto da IA substitui inteiramente o que havia na saída, então confira antes de copiar.',
	tool_midjourney_prompt_builder_rules_item_4:
		'Esta página só monta texto: não gera imagem nem chama o Midjourney ou qualquer API de chat.',
	tool_midjourney_prompt_builder_rules_title:
		'O que ela faz e o que não faz',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Copiado para a área de transferência.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt pronto.',
	tool_midjourney_prompt_builder_status_working:
		'Gerando o prompt…',
	tool_midjourney_prompt_builder_title:
		'Gerador de prompt para Midjourney — no navegador, com IA opcional',
	tool_midjourney_prompt_builder_usecase_1:
		'Deixar um prompt do Midjourney pronto para colar no chat da equipe, sem ditar os parâmetros mensagem a mensagem.',
	tool_midjourney_prompt_builder_usecase_2:
		'Exportar o JSON antes de uma rodada de imagens e guardar assunto, estilo e proporção como campos no seu script ou planilha.',
	tool_midjourney_prompt_builder_usecase_3:
		'Quando o que você quer é o modelo genérico de quatro blocos e não uma imagem, use o gerador de modelos de prompt.',
	tool_midjourney_prompt_builder_usecase_4:
		'Com rascunho de projeto que ainda não é público, fique no modo local: o texto só sai do navegador se você aceitar o aviso da IA.',
	tool_midjourney_prompt_builder_usecases_title:
		'Quando vale a pena',
};

export default pt;
