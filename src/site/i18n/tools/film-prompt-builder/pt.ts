/**
 * i18n tool shard (film-prompt-builder / pt).
 * Reescrito para quem procura «gerador de prompt para roteiro de cinema» ou «estrutura em três atos com IA»:
 * o termo principal fica no H1; «escaleta», «arco do personagem» e «exportar em JSON» entram na descrição,
 * nas perguntas frequentes e nos casos de uso.
 * Limites reais: o prompt é montado no navegador; só Ampliar/Refinar manda o rascunho para a Cloudflare Workers AI
 * (Turnstile e cota). Esta página não escreve o roteiro no seu lugar.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Escreva a premissa, os três atos, a escaleta e o arco do personagem: a página organiza tudo no navegador e devolve um prompt de estrutura clara em Markdown ou JSON, pronto para colar no ChatGPT, Gemini, Claude ou DeepSeek e continuar o roteiro por lá. Por padrão nada é enviado; o rascunho só viaja para a Cloudflare Workers AI se você clicar em Ampliar ou Refinar, depois do Turnstile.',
	tool_film_prompt_builder_build:
		'Gerar prompt',
	tool_film_prompt_builder_clear:
		'Limpar',
	tool_film_prompt_builder_copy:
		'Copiar',
	tool_film_prompt_builder_desc:
		'Gerador de prompt para roteiro de cinema: premissa, três atos e escaleta organizados em Markdown ou JSON no navegador; IA da Cloudflare opcional com Turnstile.',
	tool_film_prompt_builder_description:
		'Gerador de prompt para roteiro de cinema: você preenche a premissa, os atos um a três, a escaleta e o arco do personagem, e a página distribui isso nos blocos Role, Task, Constraints e Output para que ChatGPT, Gemini, Claude ou DeepSeek saibam por onde seguir. Markdown por padrão e JSON para a sua planilha de versões; ao abrir já rodou o exemplo dos dois food trucks que dividem a mesma cozinha por 30 dias. Se um ato ficar raso, Ampliar ou Refinar manda o rascunho para a Cloudflare Workers AI (Turnstile e cota).',
	tool_film_prompt_builder_download:
		'Baixar',
	tool_film_prompt_builder_empty:
		'Preencha pelo menos um campo antes de gerar o prompt.',
	tool_film_prompt_builder_example:
		'Entrada: premissa = um erro no alvará obriga dois donos rivais de food truck a dividir a mesma cozinha por 30 dias; ato II = o sucesso no festival desanda quando um blogueiro credita a receita errada e a briga antiga de família por temperos vai para as redes; escaleta = seis sequências numeradas; arco = orgulho → parceria a contragosto → sócios que negociam. Saída (Markdown): o bloco ## Task lista Logline, Act1–3, Scene / List e Character / Arc, igual ao exemplo carregado na abertura.',
	tool_film_prompt_builder_example_title:
		'Exemplo',
	tool_film_prompt_builder_faq_a1:
		'O texto é organizado nesta aba do navegador, então por padrão nada sai daqui. Só quando você clica em Ampliar ou Refinar o rascunho atual é enviado para a Cloudflare Workers AI; não repassamos esse texto dos nossos servidores para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_film_prompt_builder_faq_a2:
		'No modo local nenhum modelo é chamado: a premissa, os atos, a escaleta e o arco só são distribuídos nos blocos Role, Task, Constraints e Output. Ampliar e Refinar usam a Cloudflare Workers AI depois do Turnstile e não acionam as APIs do ChatGPT, Gemini, Claude ou DeepSeek pelos nossos servidores.',
	tool_film_prompt_builder_faq_a3:
		'O gerador de modelos de prompt entrega a estrutura genérica de quatro blocos, para qualquer tema. Aqui os campos são de longa-metragem — premissa, três atos, escaleta e arco —, com um exemplo completo na abertura e regras voltadas para os tropeços comuns desse tipo de documento.',
	tool_film_prompt_builder_faq_a4:
		'O Turnstile segura os scripts automáticos para que a cota gratuita fique com quem é gente. Resolva o desafio no painel de IA antes de clicar em Ampliar ou Refinar; sem um token válido esses botões dão erro e a montagem no navegador continua funcionando.',
	tool_film_prompt_builder_faq_a5:
		'Sim. Ao trocar para JSON a mesma saída traz os campos estruturados e o prompt já montado — útil para guardar cada versão dos atos e da escaleta numa planilha ou no seu repositório e comparar depois.',
	tool_film_prompt_builder_faq_a6:
		'Sim. Copie o resultado e cole no chat que você usa. Esta página só organiza a estrutura e não chama API nenhuma, por isso não existe um endereço diferente para cada plataforma.',
	tool_film_prompt_builder_faq_q1:
		'O material do roteiro que eu escrevo é enviado para algum servidor?',
	tool_film_prompt_builder_faq_q2:
		'Esta página chama a API do ChatGPT ou de outros modelos?',
	tool_film_prompt_builder_faq_q3:
		'Qual a diferença em relação ao gerador de modelos de prompt?',
	tool_film_prompt_builder_faq_q4:
		'Por que preciso passar pelo Turnstile para usar a IA?',
	tool_film_prompt_builder_faq_q5:
		'Consigo a saída em JSON?',
	tool_film_prompt_builder_faq_q6:
		'Funciona com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_film_prompt_builder_faq_q7:
		'Qual a diferença entre o modo local e a IA opcional da Cloudflare?',
	tool_film_prompt_builder_faq_a7:
		'No modo local tudo é organizado nesta aba, sem sair do navegador. Ampliar ou Refinar manda o rascunho para a Cloudflare Workers AI (precisa de Turnstile e há limite de frequência e de cota diária) e o texto que volta é escrito por inteiro na saída, sobre o rascunho que você estava vendo — leia antes de copiar, para que uma reescrita não substitua sem querer a sua versão dos atos. Se der erro ou a cota acabar, siga no modo local.',
	tool_film_prompt_builder_ai_expand:
		'Ampliar com IA',
	tool_film_prompt_builder_ai_polish:
		'Refinar com IA',
	tool_film_prompt_builder_ai_panel_label:
		'Opcional: Cloudflare AI (exige Turnstile)',
	tool_film_prompt_builder_ai_consent_title:
		'Enviar o rascunho para a Cloudflare Workers AI?',
	tool_film_prompt_builder_ai_consent_body:
		'Este passo é opcional: envia o rascunho que está agora nos campos para a Cloudflare Workers AI fazer uma inferência. Não repassamos esse texto dos nossos servidores para OpenAI, Google, Anthropic ou DeepSeek. Sem a IA, o prompt continua sendo montado no seu navegador.',
	tool_film_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_film_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_film_prompt_builder_ai_working:
		'A Cloudflare AI está processando…',
	tool_film_prompt_builder_ai_done:
		'O texto da IA foi escrito por inteiro na saída. Confira antes de copiar.',
	tool_film_prompt_builder_ai_err_generic:
		'A IA não respondeu desta vez; a saída ficou como estava.',
	tool_film_prompt_builder_ai_err_rate:
		'A cota de IA acabou. Continue montando o prompt aqui ou tente amanhã (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Resolva a verificação do Turnstile antes de usar a IA.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Formato da saída',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Premissa',
	tool_film_prompt_builder_logline_ph:
		'Por exemplo: dois food trucks rivais dividem uma cozinha…',
	tool_film_prompt_builder_act1_label:
		'Ato I',
	tool_film_prompt_builder_act1_ph:
		'Por exemplo: de onde vem o conflito e o que obriga a aceitá-lo…',
	tool_film_prompt_builder_act2_label:
		'Ato II',
	tool_film_prompt_builder_act2_ph:
		'Por exemplo: um sucesso breve e depois tudo desanda…',
	tool_film_prompt_builder_act3_label:
		'Ato III',
	tool_film_prompt_builder_act3_ph:
		'Por exemplo: confronto final e um acordo que cobra seu preço…',
	tool_film_prompt_builder_scene_list_label:
		'Escaleta',
	tool_film_prompt_builder_scene_list_ph:
		'Por exemplo: 1. Briga por vaga 2. Fiscalização dupla…',
	tool_film_prompt_builder_character_arc_label:
		'Arco do personagem',
	tool_film_prompt_builder_character_arc_ph:
		'Por exemplo: orgulho → parceria a contragosto → sócios…',

	tool_film_prompt_builder_how_body:
		'Preencha premissa, atos e escaleta, gere o prompt e cole no ChatGPT, Gemini, Claude ou DeepSeek para continuar escrevendo; se um ato ficar raso, use Ampliar ou Refinar com a IA opcional da Cloudflare.',
	tool_film_prompt_builder_how_item_1:
		'Clique em Carregar exemplo para o preset padrão.',
	tool_film_prompt_builder_how_item_2:
		'Troque premissa, atos, escaleta e arco do personagem e clique em Gerar prompt; mude para JSON se precisar estruturado.',
	tool_film_prompt_builder_how_item_3:
		'Opcional: resolva o Turnstile no painel de IA e clique em Ampliar ou Refinar; o texto que voltar é escrito na saída.',
	tool_film_prompt_builder_how_item_4:
		'Copie ou baixe e cole no ChatGPT, Gemini, Claude ou DeepSeek para o modelo seguir com essa estrutura.',
	tool_film_prompt_builder_how_title:
		'Como usar',
	tool_film_prompt_builder_load_sample:
		'Carregar exemplo',
	tool_film_prompt_builder_platforms_lead:
		'A saída pode ser colada como está no chat do ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_film_prompt_builder_result_label:
		'Prompt gerado',
	tool_film_prompt_builder_rules_body:
		'A organização segue o jeito de trabalhar um longa: a premissa define o rumo, os três atos o percurso, a escaleta numera as sequências e o arco explica a mudança do personagem. A montagem no navegador é o comportamento padrão; a IA opcional tem limite de uso e pede Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Cada campo do formulário cai em um dos blocos Role, Task, Constraints e Output do Markdown.',
	tool_film_prompt_builder_rules_item_2:
		'A exportação padrão é Markdown; JSON é um botão sobre a mesma saída.',
	tool_film_prompt_builder_rules_item_3:
		'A IA opcional é um passo a mais, não uma troca: o modo local continua disponível e o texto da IA substitui inteiramente o que havia na saída, então confira antes de copiar.',
	tool_film_prompt_builder_rules_item_4:
		'Esta página só monta texto: não escreve o roteiro no seu lugar nem roda modelo ou API de chat no seu navegador.',
	tool_film_prompt_builder_rules_title:
		'O que ela faz e o que não faz',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'Copiado para a área de transferência.',
	tool_film_prompt_builder_status_done:
		'Prompt pronto.',
	tool_film_prompt_builder_status_working:
		'Gerando o prompt…',
	tool_film_prompt_builder_title:
		'Gerador de prompt para roteiro de cinema — três atos e escaleta no navegador',
	tool_film_prompt_builder_usecase_1:
		'Antes de uma reunião, deixar os três atos e a escaleta num prompt que se cola direto no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'Exportar o JSON e guardar premissa, atos e arco de cada versão como campos numa planilha ou no repositório para comparar depois.',
	tool_film_prompt_builder_usecase_3:
		'Se o que você quer é o modelo genérico de quatro blocos e não a estrutura de um longa, use o gerador de modelos de prompt.',
	tool_film_prompt_builder_usecase_4:
		'Com projeto que ainda não foi fechado, fique no modo local: o texto só sai do navegador se você aceitar o aviso da IA.',
	tool_film_prompt_builder_usecases_title:
		'Quando vale a pena',
};

export default pt;
