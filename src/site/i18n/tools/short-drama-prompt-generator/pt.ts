/**
 * i18n tool shard (short-drama-prompt-generator / pt).
 * Reescrito para quem procura «gerador de prompt para microdrama vertical» ou «gancho por episódio com IA»:
 * o termo principal fica no H1; «gancho de virada», «formato 9:16 com legenda queimada» e «exportar em JSON»
 * entram na descrição, nas perguntas frequentes e nos casos de uso.
 * Limites reais: o prompt é montado no navegador; só Ampliar/Refinar manda o rascunho para a Cloudflare Workers AI
 * (Turnstile e cota). Aqui não se gera vídeo.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Diga quantos episódios e com que duração, o gancho de abertura, a virada que fecha cada episódio, o formato vertical e o gênero: a página organiza tudo no navegador e devolve um prompt pronto para entregar ao modelo, em Markdown ou JSON, que você cola no ChatGPT, Gemini, Claude ou DeepSeek para escrever episódio a episódio. Por padrão nada é enviado; o rascunho só vai para a Cloudflare Workers AI se você clicar em Ampliar ou Refinar, depois do Turnstile. Aqui só sai texto, não vídeo.',
	tool_short_drama_prompt_generator_build:
		'Gerar prompt',
	tool_short_drama_prompt_generator_clear:
		'Limpar',
	tool_short_drama_prompt_generator_copy:
		'Copiar',
	tool_short_drama_prompt_generator_desc:
		'Gerador de prompt para microdrama vertical: episódios, gancho, virada e formato 9:16 organizados em Markdown ou JSON no navegador; IA da Cloudflare opcional com Turnstile.',
	tool_short_drama_prompt_generator_description:
		'Gerador de prompt para microdrama vertical: você preenche quantidade e duração dos episódios, o gancho dos dois primeiros segundos, a virada que encerra cada episódio, o formato vertical e o gênero, e a página distribui isso nos blocos Role, Task, Constraints e Output para que ChatGPT, Gemini, Claude ou DeepSeek escrevam no ritmo de capítulos. Markdown por padrão e JSON para a sua planilha de episódios; ao abrir já rodou o exemplo de 12 × 75 s com um segredo de trabalho. Se um gancho ficar fraco, Ampliar ou Refinar manda o rascunho para a Cloudflare Workers AI (Turnstile e cota).',
	tool_short_drama_prompt_generator_download:
		'Baixar',
	tool_short_drama_prompt_generator_empty:
		'Preencha pelo menos um campo antes de gerar o prompt.',
	tool_short_drama_prompt_generator_example:
		'Entrada: episódios = 12 × 75 s; gancho = uma estagiária expõe um vazamento da folha de pagamento e o chefe reconhece a voz dela num recado de dez anos atrás sobre uma guarda; virada = o episódio 6 fecha com o chefe apagando o recado no meio da escuta e o 7 abre com um encarada muda no elevador; formato = 9:16 com legenda queimada e abertura que segura o dedo nos dois primeiros segundos. Saída (Markdown): o bloco ## Task lista Episodes, Hook, Cliffhanger, Vertical / Format e Genre para uma série vertical.',
	tool_short_drama_prompt_generator_example_title:
		'Exemplo',
	tool_short_drama_prompt_generator_faq_a1:
		'O texto é organizado nesta aba do navegador, então por padrão nada sai daqui. Só quando você clica em Ampliar ou Refinar o rascunho atual é enviado para a Cloudflare Workers AI; não repassamos esse texto dos nossos servidores para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_short_drama_prompt_generator_faq_a2:
		'No modo local nenhum modelo é chamado: episódios, gancho, virada, formato e gênero só são distribuídos nos blocos Role, Task, Constraints e Output. Ampliar e Refinar usam a Cloudflare Workers AI depois do Turnstile e não acionam as APIs do ChatGPT, Gemini, Claude ou DeepSeek pelos nossos servidores.',
	tool_short_drama_prompt_generator_faq_a3:
		'O gerador de modelos de prompt entrega a estrutura genérica de quatro blocos, para qualquer tema. Aqui os campos são de série vertical — episódios e duração, gancho, virada, formato e gênero —, com um exemplo completo na abertura e regras voltadas ao que costuma falhar no consumo por capítulos.',
	tool_short_drama_prompt_generator_faq_a4:
		'O Turnstile segura os scripts automáticos para que a cota gratuita fique com quem é gente. Resolva o desafio no painel de IA antes de clicar em Ampliar ou Refinar; sem um token válido esses botões dão erro e a montagem no navegador continua funcionando.',
	tool_short_drama_prompt_generator_faq_a5:
		'Sim. Ao trocar para JSON a mesma saída traz os campos estruturados e o prompt já montado — bom para guardar cada episódio numa planilha e conferir se ganchos e viradas estão se repetindo.',
	tool_short_drama_prompt_generator_faq_a6:
		'Sim. Copie o resultado e cole no chat que você usa. Esta página só organiza a estrutura por episódios e não chama API nenhuma, por isso não existe um endereço diferente para cada plataforma.',
	tool_short_drama_prompt_generator_faq_q1:
		'A trama que eu escrevo é enviada para algum servidor?',
	tool_short_drama_prompt_generator_faq_q2:
		'Esta página chama a API do ChatGPT ou de outros modelos?',
	tool_short_drama_prompt_generator_faq_q3:
		'Qual a diferença em relação ao gerador de modelos de prompt?',
	tool_short_drama_prompt_generator_faq_q4:
		'Por que preciso passar pelo Turnstile para usar a IA?',
	tool_short_drama_prompt_generator_faq_q5:
		'Consigo a saída em JSON?',
	tool_short_drama_prompt_generator_faq_q6:
		'Funciona com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'Qual a diferença entre o modo local e a IA opcional da Cloudflare?',
	tool_short_drama_prompt_generator_faq_a7:
		'No modo local tudo é organizado nesta aba, sem sair do navegador. Ampliar ou Refinar manda o rascunho para a Cloudflare Workers AI (precisa de Turnstile e há limite de frequência e de cota diária) e o texto que volta é escrito por inteiro na saída, sobre o rascunho que você estava vendo — leia antes de copiar, para que uma reescrita não troque a sua ordem de viradas. Se der erro ou a cota acabar, siga no modo local.',
	tool_short_drama_prompt_generator_ai_expand:
		'Ampliar com IA',
	tool_short_drama_prompt_generator_ai_polish:
		'Refinar com IA',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Opcional: Cloudflare AI (exige Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Enviar o rascunho para a Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Este passo é opcional: envia o rascunho que está agora nos campos para a Cloudflare Workers AI fazer uma inferência. Não repassamos esse texto dos nossos servidores para OpenAI, Google, Anthropic ou DeepSeek. Sem a IA, o prompt continua sendo montado no seu navegador.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_short_drama_prompt_generator_ai_working:
		'A Cloudflare AI está processando…',
	tool_short_drama_prompt_generator_ai_done:
		'O texto da IA foi escrito por inteiro na saída. Confira antes de copiar.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'A IA não respondeu desta vez; a saída ficou como estava.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'A cota de IA acabou. Continue montando o prompt aqui ou tente amanhã (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Resolva a verificação do Turnstile antes de usar a IA.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Formato de saída',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Episódios e duração',
	tool_short_drama_prompt_generator_episodes_ph:
		'Por exemplo: 12 × 75 s…',
	tool_short_drama_prompt_generator_hook_label:
		'Gancho de abertura',
	tool_short_drama_prompt_generator_hook_ph:
		'Por exemplo: estagiária expõe vazamento da folha de pagamento…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Virada de fim de episódio',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Por exemplo: episódio 6 fecha apagando o recado…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Formato em pé / 9:16',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Por exemplo: 9:16, legenda queimada, abertura em 2 s…',
	tool_short_drama_prompt_generator_genre_label:
		'Gênero',
	tool_short_drama_prompt_generator_genre_ph:
		'Por exemplo: melodrama de escritório com segredo de família…',

	tool_short_drama_prompt_generator_how_body:
		'Preencha episódios, gancho e virada, gere o prompt e cole no ChatGPT, Gemini, Claude ou DeepSeek para escrever capítulo a capítulo; se um gancho ficar fraco, use Ampliar ou Refinar com a IA opcional da Cloudflare.',
	tool_short_drama_prompt_generator_how_item_1:
		'Clique em Carregar exemplo para o preset padrão.',
	tool_short_drama_prompt_generator_how_item_2:
		'Troque episódios e duração, gancho, virada, formato vertical e gênero e clique em Gerar prompt; mude para JSON se precisar estruturado.',
	tool_short_drama_prompt_generator_how_item_3:
		'Opcional: resolva o Turnstile no painel de IA e clique em Ampliar ou Refinar; o texto que voltar é escrito na saída.',
	tool_short_drama_prompt_generator_how_item_4:
		'Copie ou baixe e cole no ChatGPT, Gemini, Claude ou DeepSeek para o modelo seguir com essa divisão por episódios.',
	tool_short_drama_prompt_generator_how_title:
		'Como usar',
	tool_short_drama_prompt_generator_load_sample:
		'Carregar exemplo',
	tool_short_drama_prompt_generator_platforms_lead:
		'A saída pode ser colada como está no chat do ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_short_drama_prompt_generator_result_label:
		'Prompt gerado',
	tool_short_drama_prompt_generator_rules_body:
		'A organização segue o ritmo do consumo vertical: episódios e duração definem a capacidade, o gancho decide se o dedo para nos dois primeiros segundos, a virada empurra para o próximo capítulo, e o formato deixa claro o enquadramento e a legenda. A montagem no navegador é o comportamento padrão; a IA opcional tem limite de uso e pede Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Cada campo do formulário cai em um dos blocos Papel, Tarefa, Restrições e Formato de saída do Markdown.',
	tool_short_drama_prompt_generator_rules_item_2:
		'A exportação padrão é Markdown; JSON é um botão sobre a mesma saída.',
	tool_short_drama_prompt_generator_rules_item_3:
		'A IA opcional é um passo a mais, não uma troca: o modo local continua disponível e o texto da IA substitui inteiramente o que havia na saída, então confira antes de copiar.',
	tool_short_drama_prompt_generator_rules_item_4:
		'Esta página só monta texto: não gera vídeo nem roda modelo ou API de chat no seu navegador.',
	tool_short_drama_prompt_generator_rules_title:
		'O que ela faz e o que não faz',
	tool_short_drama_prompt_generator_sec_constraints:
		'Restrições',
	tool_short_drama_prompt_generator_sec_output:
		'Formato de saída',
	tool_short_drama_prompt_generator_sec_role:
		'Papel',
	tool_short_drama_prompt_generator_sec_task:
		'Tarefa',
	tool_short_drama_prompt_generator_status_copied:
		'Copiado para a área de transferência.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt pronto.',
	tool_short_drama_prompt_generator_status_working:
		'Gerando o prompt…',
	tool_short_drama_prompt_generator_title:
		'Gerador de prompt para microdrama vertical — ganchos e viradas no navegador',
	tool_short_drama_prompt_generator_usecase_1:
		'Antes de uma reunião, deixar episódios, gancho e viradas num prompt que se cola direto no ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Exportar o JSON e guardar o gancho e a virada de cada episódio como campos numa planilha, para checar se o mesmo recurso está se repetindo.',
	tool_short_drama_prompt_generator_usecase_3:
		'Se o que você quer é o modelo genérico de quatro blocos e não os campos de uma série vertical, use o gerador de modelos de prompt.',
	tool_short_drama_prompt_generator_usecase_4:
		'Com projeto que ainda não estreou, fique no modo local: o texto só sai do navegador se você aceitar o aviso da IA.',
	tool_short_drama_prompt_generator_usecases_title:
		'Quando vale a pena',
};

export default pt;
