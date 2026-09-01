/**
 * i18n tool shard (writing-prompt-generator / pt).
 * Search H1: gerador de prompts de escrita — diálogo, personagem, roteiro, aleatório; montagem local.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Gerador de prompts de escrita — fragmento de texto em português */
const pt: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Monte prompts de escrita prontos para colar: cenas de diálogo, fichas de personagem, esboços de roteiro ou ganchos aleatórios. Escolha um modo, preencha campos ou sorteie, depois copie Markdown ou JSON para ChatGPT, Gemini, Claude ou DeepSeek. Nenhuma API de modelo é chamada. O texto permanece no seu dispositivo e não é enviado ao servidor.',
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
		'Gerador de prompts de escrita — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_writing_prompt_generator_description:
		'Processo e exemplo: Gerador de prompts de escrita — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_writing_prompt_generator_dlg_characters_label: 'Personagens',
	tool_writing_prompt_generator_dlg_characters_ph: 'Nomes + papel em uma linha…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Conflito',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Qual tensão move a cena…',
	tool_writing_prompt_generator_dlg_genre_label: 'Gênero / tom',
	tool_writing_prompt_generator_dlg_genre_ph: 'Drama contemporâneo, rom-com…',
	tool_writing_prompt_generator_dlg_setting_label: 'Cenário',
	tool_writing_prompt_generator_dlg_setting_ph: 'Lugar, época, atmosfera…',
	tool_writing_prompt_generator_dlg_tone_label: 'Estilo de diálogo',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subtexto, provocações, seco…',
	tool_writing_prompt_generator_download: 'Baixar',
	tool_writing_prompt_generator_empty: 'Preencha pelo menos um campo neste modo antes de gerar.',
	tool_writing_prompt_generator_example:
		'Entrada (Diálogo, Carregar exemplo): Genre = drama contemporâneo; Characters = Maya (barista) e Jonah (músico); Conflict = Maya reconhece a música sobre o ex. Saída (Markdown): ## Role → coach de escrita; ## Task → linhas genre/characters/setting/conflict/tone. Roteiro usa mistério do farol — não o food-truck do filme.',
	tool_writing_prompt_generator_example_title: 'Exemplo',
	tool_writing_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_writing_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_writing_prompt_generator_faq_a3:
		'O construtor de modelos de Prompt estrutura templates genéricos Role/Task/Constraints/Output. Esta página prioriza modos de escrita — campos de diálogo, fichas de personagem, beats de roteiro e um gerador de prompts aleatório numa só tela.',
	tool_writing_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_writing_prompt_generator_faq_a5:
		'Sim. O chip JSON emite {mode,fields,role,task,constraints,output} para testes ou configs. Markdown usa cabeçalhos ## Role / Task / Constraints / Output.',
	tool_writing_prompt_generator_faq_a6:
		'Sim. Copie o prompt pronto para ChatGPT, Gemini, Claude ou DeepSeek. Não mantemos URLs separadas por plataforma porque o trabalho é formatar texto, não chamar APIs.',
	tool_writing_prompt_generator_faq_q1: 'Meu prompt de escrita é enviado?',
	tool_writing_prompt_generator_faq_q2: 'Isso chama um LLM?',
	tool_writing_prompt_generator_faq_q3: 'Como difere do construtor de modelos de Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_writing_prompt_generator_faq_q5: 'Posso obter JSON?',
	tool_writing_prompt_generator_faq_q6: 'Posso usar com ChatGPT, Gemini, Claude ou DeepSeek?',
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
	tool_writing_prompt_generator_random_seed_label: 'Seed (opcional)',
	tool_writing_prompt_generator_random_seed_ph: 'ex.: 42',
	tool_writing_prompt_generator_result_label: 'Prompt de escrita',
	tool_writing_prompt_generator_rules_body:
		'Prompts de escrita precisam de campos por modo, limites honestos do aleatório e a mesma privacidade local dos outros construtores.',
	tool_writing_prompt_generator_rules_item_1:
		'Quatro blocos na saída: Role, Task, Constraints, Output — alinhados a templates estruturados.',
	tool_writing_prompt_generator_rules_item_2:
		'O modo aleatório absorve o gerador de prompts aleatório nesta URL — sem página separada.',
	tool_writing_prompt_generator_rules_item_3:
		'Exportação padrão é Markdown. JSON é um chip na mesma tela.',
	tool_writing_prompt_generator_rules_item_4:
		'Esta ferramenta só monta texto. Não gera histórias prontas nem chama modelos na nuvem.',
	tool_writing_prompt_generator_rules_title: 'O que esperar',
	tool_writing_prompt_generator_scr_notes_label: 'Notas de beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Número de cenas, ritmo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premissa / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup em um parágrafo…',
	tool_writing_prompt_generator_scr_structure_label: 'Estrutura',
	tool_writing_prompt_generator_scr_structure_ph: 'Três atos, save the cat, episódico…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
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
		'Expandir con IA',
	tool_writing_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_writing_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_writing_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_writing_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_writing_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_writing_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_writing_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
};

export default pt;
