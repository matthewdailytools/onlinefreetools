/**
 * i18n tool shard (writing-prompt-generator / pt).
 * H1 de busca: gerador de prompts de escrita — diálogo, personagem, roteiro, aleatório.
 * A montagem acontece no navegador; Expandir/Refinar é opcional via Cloudflare Workers AI
 * (Turnstile + cota) e a resposta substitui o bloco de resultado.
 * ChatGPT / Gemini / Claude / DeepSeek aparecem na description e na primeira dobra.
 */
import type { SiteLangDict } from '../../../types';

/** Gerador de prompts de escrita — fragmento de texto em português */
const pt: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Monte prompts de escrita prontos para colar: cenas de diálogo, fichas de personagem, esboços de roteiro ou ganchos aleatórios. Escolha um modo, preencha campos ou sorteie, depois copie Markdown ou JSON para ChatGPT, Gemini, Claude ou DeepSeek. Por padrão o prompt é montado no seu navegador e não chamamos a API de nenhum chat por você; só ao clicar em Expandir ou Refinar com IA o rascunho atual é enviado ao Cloudflare Workers AI (com Turnstile e cota limitada).',
	tool_writing_prompt_generator_build: 'Gerar prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Falha / fraqueza',
	tool_writing_prompt_generator_char_flaw_ph: 'O que o impede…',
	tool_writing_prompt_generator_char_goal_label: 'Objetivo',
	tool_writing_prompt_generator_char_goal_ph: 'O que quer nesta história…',
	tool_writing_prompt_generator_char_name_label: 'Nome do personagem',
	tool_writing_prompt_generator_char_name_ph: 'Nome ou rótulo de papel…',
	tool_writing_prompt_generator_char_traits_label: 'Traços',
	tool_writing_prompt_generator_char_traits_ph: 'Personalidade, hábitos, contradições…',
	tool_writing_prompt_generator_char_voice_label: 'Voz / dicção',
	tool_writing_prompt_generator_char_voice_ph: 'Ritmo de frases, vocabulário…',
	tool_writing_prompt_generator_clear: 'Limpar',
	tool_writing_prompt_generator_copy: 'Copiar',
	tool_writing_prompt_generator_desc:
		'Gerador de prompts de escrita — modos diálogo, personagem, roteiro e aleatório; montagem local no navegador e IA da Cloudflare opcional.',
	tool_writing_prompt_generator_description:
		'Gerador de prompts de escrita: escolha o modo — diálogo, personagem, roteiro ou aleatório —, preencha os campos e receba um prompt pronto para colar em ChatGPT, Gemini, Claude ou DeepSeek. Ao abrir já roda um exemplo de diálogo; no aleatório você sorteia um gancho e um seed repete o mesmo sorteio. Exporte Markdown ou JSON; a montagem é local e a IA da Cloudflare é opcional.',
	tool_writing_prompt_generator_dlg_characters_label: 'Personagens',
	tool_writing_prompt_generator_dlg_characters_ph: 'Nomes + papel em uma linha…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Conflito',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Qual tensão move a cena…',
	tool_writing_prompt_generator_dlg_genre_label: 'Gênero / tom',
	tool_writing_prompt_generator_dlg_genre_ph: 'Drama contemporâneo, rom-com…',
	tool_writing_prompt_generator_dlg_setting_label: 'Cenário',
	tool_writing_prompt_generator_dlg_setting_ph: 'Lugar, época, atmosfera…',
	tool_writing_prompt_generator_dlg_tone_label: 'Tom do diálogo',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subtexto, provocações, seco…',
	tool_writing_prompt_generator_download: 'Baixar',
	tool_writing_prompt_generator_empty: 'Preencha pelo menos um campo neste modo antes de gerar.',
	tool_writing_prompt_generator_example:
		'Entrada (Diálogo, Carregar exemplo): Genre = drama contemporâneo; Characters = Maya (barista) e Jonah (músico); Conflict = Maya reconhece a música sobre o ex. Saída (Markdown): ## Papel → coach de escrita; ## Tarefa → linhas genre/characters/setting/conflict/tone. Roteiro usa mistério do farol — não o food-truck do filme.',
	tool_writing_prompt_generator_example_title: 'Exemplo',
	tool_writing_prompt_generator_faq_a1:
		'Por padrão o prompt é montado nesta aba e nada sai daqui. Só Expandir/Refinar envia o texto daquele clique ao Cloudflare Workers AI; dos nossos servidores nada vai para OpenAI, Google, Anthropic ou DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'O modo local apenas formata os seus campos de escrita nesta aba. Expandir/Refinar usa o Cloudflare Workers AI depois do Turnstile: não abrimos ChatGPT, Gemini, Claude nem DeepSeek no seu lugar.',
	tool_writing_prompt_generator_faq_a3:
		'O construtor de modelos de Prompt estrutura templates genéricos Role/Task/Constraints/Output. Esta página prioriza modos de escrita — campos de diálogo, fichas de personagem, beats de roteiro e um gerador de prompts aleatório numa só tela.',
	tool_writing_prompt_generator_faq_a4:
		'Sim. O modo aleatório sorteia gênero, cenário, objeto, emoção e conflito. Um seed numérico opcional repete exatamente o mesmo sorteio. O que sai serve de inspiração: não há garantia de qualidade.',
	tool_writing_prompt_generator_faq_a5:
		'Sim. Resolva o widget Turnstile no painel de IA antes de Expandir ou Refinar; sem token válido o botão devolve erro e o modo local continua funcionando.',
	tool_writing_prompt_generator_faq_a6:
		'Sim. O chip JSON emite {mode,fields,role,task,constraints,output} para testes ou configs. Markdown usa os cabeçalhos ## Papel / Tarefa / Restrições / Formato de saída.',
	tool_writing_prompt_generator_faq_q1: 'Meu prompt de escrita é enviado?',
	tool_writing_prompt_generator_faq_q2: 'Isso chama um LLM?',
	tool_writing_prompt_generator_faq_q3: 'Como difere do construtor de modelos de Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'O gerador de prompts aleatório funciona aqui?',
	tool_writing_prompt_generator_faq_q5: 'Por que a IA opcional pede Turnstile?',
	tool_writing_prompt_generator_faq_q6: 'Posso obter JSON?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Formato de saída',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Escolha um modo de escrita, preencha campos ou sorteie, gere o bloco de prompt e cole em ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Escolha Diálogo, Personagem, Roteiro ou Aleatório — Carregar exemplo já executou o preset de diálogo ao abrir.',
	tool_writing_prompt_generator_how_item_2: 'Preencha os campos do modo (ou informe um seed e clique Sortear).',
	tool_writing_prompt_generator_how_item_3: 'Clique Gerar prompt (oculto em Aleatório — use Sortear).',
	tool_writing_prompt_generator_how_item_4: 'Copie ou baixe Markdown/JSON e cole na sua interface de chat.',
	tool_writing_prompt_generator_how_title: 'Como funciona',
	tool_writing_prompt_generator_load_sample: 'Carregar exemplo',
	tool_writing_prompt_generator_mode_character: 'Personagem',
	tool_writing_prompt_generator_mode_dialogue: 'Diálogo',
	tool_writing_prompt_generator_mode_label: 'Modo de escrita',
	tool_writing_prompt_generator_mode_random: 'Aleatório',
	tool_writing_prompt_generator_mode_script: 'Roteiro / esboço',
	tool_writing_prompt_generator_platforms_lead:
		'Feito para ChatGPT, Gemini, Claude e DeepSeek — copie o prompt de escrita pronto para qualquer uma dessas interfaces.',
	tool_writing_prompt_generator_random_lead:
		'Sorteie um gancho de história a partir de gênero, cenário, objeto, emoção e conflito. Seed opcional repete o mesmo sorteio.',
	tool_writing_prompt_generator_random_roll: 'Sortear',
	tool_writing_prompt_generator_random_seed_label: 'Semente (opcional)',
	tool_writing_prompt_generator_random_seed_ph: 'ex.: 42',
	tool_writing_prompt_generator_result_label: 'Prompt de escrita',
	tool_writing_prompt_generator_rules_body:
		'Prompts de escrita precisam de campos próprios de cada modo, limites honestos sobre o que o sorteio entrega e a mesma montagem local dos outros construtores.',
	tool_writing_prompt_generator_rules_item_1:
		'Quatro blocos na saída: Role, Task, Constraints, Output — alinhados a templates estruturados.',
	tool_writing_prompt_generator_rules_item_2:
		'O modo aleatório fica nesta mesma tela: sorteia gênero, cenário, objeto, emoção e conflito, e com um seed você repete o sorteio.',
	tool_writing_prompt_generator_rules_item_3:
		'Exportação padrão é Markdown. JSON é um chip na mesma tela.',
	tool_writing_prompt_generator_rules_item_4:
		'A IA opcional da Cloudflare nunca substitui o modo local: confira o texto dela antes de copiar. Esta ferramenta só monta o prompt, não escreve a história pronta.',
	tool_writing_prompt_generator_rules_title: 'O que esperar',
	tool_writing_prompt_generator_scr_notes_label: 'Notas de ritmo',
	tool_writing_prompt_generator_scr_notes_ph: 'Número de cenas, ritmo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premissa / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup em um parágrafo…',
	tool_writing_prompt_generator_scr_structure_label: 'Estrutura',
	tool_writing_prompt_generator_scr_structure_ph: 'Três atos, save the cat, episódico…',
	tool_writing_prompt_generator_sec_constraints: 'Restrições',
	tool_writing_prompt_generator_sec_output: 'Formato de saída',
	tool_writing_prompt_generator_sec_role: 'Papel',
	tool_writing_prompt_generator_sec_task: 'Tarefa',
	tool_writing_prompt_generator_status_copied: 'Copiado para a área de transferência.',
	tool_writing_prompt_generator_status_done: 'Prompt pronto.',
	tool_writing_prompt_generator_status_working: 'Gerando prompt…',
	tool_writing_prompt_generator_title:
		'Gerador de prompts de escrita — Local + IA opcional',
	tool_writing_prompt_generator_usecase_1:
		'Rascunhe um prompt de cena de diálogo para um grupo de escrita — cole no ChatGPT ou Claude para sugestões de beats, não prosa completa.',
	tool_writing_prompt_generator_usecase_2:
		'Sorteie quando precisar de um gancho novo sem abrir outro site de prompts aleatórios.',
	tool_writing_prompt_generator_usecase_3:
		'Exporte JSON de um prompt de ficha de personagem para teste de pipeline, depois abra o construtor de modelos de Prompt para templates API de quatro campos.',
	tool_writing_prompt_generator_usecase_4:
		'Esboce localmente beats de roteiro curto antes de levar o prompt ao Gemini para leituras em mesa.',
	tool_writing_prompt_generator_usecases_title: 'Bons encaixes',
	tool_writing_prompt_generator_ai_expand:
		'Expandir com IA',
	tool_writing_prompt_generator_ai_polish:
		'Refinar com IA',
	tool_writing_prompt_generator_ai_panel_label:
		'IA opcional da Cloudflare (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'Enviar o texto ao Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Este passo opcional envia o seu rascunho atual ao Cloudflare Workers AI. Dos nossos servidores nada vai para OpenAI, Google, Anthropic ou DeepSeek. Sem IA a montagem local continua igual.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_writing_prompt_generator_ai_working:
		'A IA da Cloudflare está processando…',
	tool_writing_prompt_generator_ai_done:
		'O texto da IA foi escrito inteiro no resultado. Confira antes de copiar.',
	tool_writing_prompt_generator_ai_err_generic:
		'A IA falhou. Seu prompt local continua como estava.',
	tool_writing_prompt_generator_ai_err_rate:
		'Cota de IA esgotada. Use o modo local ou tente amanhã (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Resolva o Turnstile antes de usar a IA.',
	tool_writing_prompt_generator_faq_q7:
		'Posso usar com ChatGPT, Gemini, Claude ou DeepSeek?',
	tool_writing_prompt_generator_faq_a7:
		'Sim. Copie o prompt pronto para ChatGPT, Gemini, Claude ou DeepSeek. Esta página só prepara o texto; ela não faz login nem chama a API de nenhum deles.',
	tool_writing_prompt_generator_faq_q8:
		'Qual a diferença entre o modo local e a IA opcional da Cloudflare?',
	tool_writing_prompt_generator_faq_a8:
		'Local: tudo é montado nesta aba, sem envio. Expandir/Refinar manda o rascunho ao Cloudflare Workers AI (Turnstile e cota diária) e a resposta substitui o bloco de resultado. Se falhar ou a cota acabar, siga no modo local.',
};

export default pt;
