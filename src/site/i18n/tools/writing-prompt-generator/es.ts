/**
 * i18n tool shard (writing-prompt-generator / es).
 * Search H1: generador de prompts de escritura — diálogo, personaje, guion, aleatorio; ensamblaje local.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Generador de prompts de escritura — shard de texto en español */
const es: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Monta prompts de escritura listos para pegar: escenas de diálogo, fichas de personaje, esquemas de guion o arranques aleatorios. Elige un modo, rellena campos o tira al azar, y copia Markdown o JSON en ChatGPT, Gemini, Claude o DeepSeek. No se llama a ninguna API de modelo. El texto permanece en tu dispositivo y no se sube al servidor.',
	tool_writing_prompt_generator_build: 'Crear prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Defecto / debilidad',
	tool_writing_prompt_generator_char_flaw_ph: 'Qué lo frena…',
	tool_writing_prompt_generator_char_goal_label: 'Objetivo',
	tool_writing_prompt_generator_char_goal_ph: 'Qué quiere en esta historia…',
	tool_writing_prompt_generator_char_name_label: 'Nombre del personaje',
	tool_writing_prompt_generator_char_name_ph: 'Nombre o etiqueta de rol…',
	tool_writing_prompt_generator_char_traits_label: 'Rasgos',
	tool_writing_prompt_generator_char_traits_ph: 'Personalidad, hábitos, contradicciones…',
	tool_writing_prompt_generator_char_voice_label: 'Voz / dicción',
	tool_writing_prompt_generator_char_voice_ph: 'Ritmo de frases, vocabulario…',
	tool_writing_prompt_generator_clear: 'Limpiar',
	tool_writing_prompt_generator_copy: 'Copiar',
	tool_writing_prompt_generator_desc:
		'Generador de prompts de escritura — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_writing_prompt_generator_description:
		'Proceso y ejemplo: Generador de prompts de escritura — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_writing_prompt_generator_dlg_characters_label: 'Personajes',
	tool_writing_prompt_generator_dlg_characters_ph: 'Nombres + rol en una línea…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Conflicto',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Qué tensión impulsa la escena…',
	tool_writing_prompt_generator_dlg_genre_label: 'Género / tono',
	tool_writing_prompt_generator_dlg_genre_ph: 'Drama contemporáneo, comedia romántica…',
	tool_writing_prompt_generator_dlg_setting_label: 'Escenario',
	tool_writing_prompt_generator_dlg_setting_ph: 'Lugar, época, atmósfera…',
	tool_writing_prompt_generator_dlg_tone_label: 'Estilo de diálogo',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subtexto, banter, escueto…',
	tool_writing_prompt_generator_download: 'Descargar',
	tool_writing_prompt_generator_empty: 'Rellena al menos un campo en este modo antes de crear.',
	tool_writing_prompt_generator_example:
		'Entrada (Diálogo, Cargar ejemplo): Genre = drama contemporáneo; Characters = Maya (barista) y Jonah (músico); Conflict = Maya reconoce la canción sobre su ex. Salida (Markdown): ## Role → coach de escritura; ## Task → líneas genre/characters/setting/conflict/tone. El modo Guion usa un misterio del faro — no el food-truck del cine.',
	tool_writing_prompt_generator_example_title: 'Ejemplo',
	tool_writing_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_writing_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_writing_prompt_generator_faq_a3:
		'El constructor de plantillas de Prompt estructura plantillas genéricas Role/Task/Constraints/Output. Esta página prioriza modos de escritura — campos de diálogo, fichas de personaje, beats de guion y un generador de prompts aleatorio en un solo lienzo.',
	tool_writing_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_writing_prompt_generator_faq_a5:
		'Sí. El chip JSON emite {mode,fields,role,task,constraints,output} para pruebas o configs. Markdown usa encabezados ## Role / Task / Constraints / Output.',
	tool_writing_prompt_generator_faq_a6:
		'Sí. Copia el prompt terminado en ChatGPT, Gemini, Claude o DeepSeek. No mantenemos URLs separadas por plataforma porque el trabajo es formatear texto, no llamar APIs.',
	tool_writing_prompt_generator_faq_q1: '¿Se sube mi prompt de escritura?',
	tool_writing_prompt_generator_faq_q2: '¿Llama a un LLM?',
	tool_writing_prompt_generator_faq_q3: '¿En qué se diferencia del constructor de plantillas de Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_writing_prompt_generator_faq_q5: '¿Puedo obtener JSON?',
	tool_writing_prompt_generator_faq_q6: '¿Puedo usarlo con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Formato de salida',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Elige un modo de escritura, rellena campos o tira al azar, crea el bloque de prompt y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Elige Diálogo, Personaje, Guion o Aleatorio — Cargar ejemplo ya ejecutó el preset de diálogo al abrir.',
	tool_writing_prompt_generator_how_item_2: 'Rellena los campos del modo (o introduce un seed y pulsa Tirar al azar).',
	tool_writing_prompt_generator_how_item_3: 'Pulsa Crear prompt (oculto en Aleatorio — usa Tirar al azar).',
	tool_writing_prompt_generator_how_item_4: 'Copia o descarga Markdown/JSON y pégalo en tu interfaz de chat.',
	tool_writing_prompt_generator_how_title: 'Cómo funciona',
	tool_writing_prompt_generator_load_sample: 'Cargar ejemplo',
	tool_writing_prompt_generator_mode_character: 'Personaje',
	tool_writing_prompt_generator_mode_dialogue: 'Diálogo',
	tool_writing_prompt_generator_mode_label: 'Modo de escritura',
	tool_writing_prompt_generator_mode_random: 'Aleatorio',
	tool_writing_prompt_generator_mode_script: 'Guion / esquema',
	tool_writing_prompt_generator_platforms_lead:
		'Pensado para ChatGPT, Gemini, Claude y DeepSeek — copia el prompt de escritura terminado en cualquiera de esas interfaces.',
	tool_writing_prompt_generator_random_lead:
		'Tira un arranque de historia a partir de género, escenario, objeto, emoción y conflicto. Un seed opcional repite la misma tirada.',
	tool_writing_prompt_generator_random_roll: 'Tirar al azar',
	tool_writing_prompt_generator_random_seed_label: 'Seed (opcional)',
	tool_writing_prompt_generator_random_seed_ph: 'p. ej. 42',
	tool_writing_prompt_generator_result_label: 'Prompt de escritura',
	tool_writing_prompt_generator_rules_body:
		'Los prompts de escritura necesitan campos por modo, límites honestos del azar y la misma privacidad local que otros constructores.',
	tool_writing_prompt_generator_rules_item_1:
		'Cuatro bloques en la salida: Role, Task, Constraints, Output — alineados con plantillas estructuradas.',
	tool_writing_prompt_generator_rules_item_2:
		'El modo aleatorio integra el generador de prompts aleatorio en esta URL — sin página aparte.',
	tool_writing_prompt_generator_rules_item_3:
		'La exportación predeterminada es Markdown. JSON es un chip en el mismo lienzo.',
	tool_writing_prompt_generator_rules_item_4:
		'Esta herramienta solo ensambla texto. No genera historias terminadas ni llama modelos en la nube.',
	tool_writing_prompt_generator_rules_title: 'Qué debes esperar',
	tool_writing_prompt_generator_scr_notes_label: 'Notas de beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Número de escenas, ritmo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premisa / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Configuración en un párrafo…',
	tool_writing_prompt_generator_scr_structure_label: 'Estructura',
	tool_writing_prompt_generator_scr_structure_ph: 'Tres actos, save the cat, episódico…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'Copiado al portapapeles.',
	tool_writing_prompt_generator_status_done: 'Prompt listo.',
	tool_writing_prompt_generator_status_working: 'Creando prompt…',
	tool_writing_prompt_generator_title:
		'Generador de prompts de escritura — Local + IA opcional',
	tool_writing_prompt_generator_usecase_1:
		'Redacta un prompt de escena de diálogo para un grupo de escritores — pégalo en ChatGPT o Claude para sugerencias de beats, no prosa completa.',
	tool_writing_prompt_generator_usecase_2:
		'Tira al azar cuando necesites un arranque fresco sin abrir otro sitio de prompts aleatorios.',
	tool_writing_prompt_generator_usecase_3:
		'Exporta JSON de un prompt de ficha de personaje para una prueba de pipeline, luego abre el constructor de plantillas de Prompt para templates API de cuatro campos.',
	tool_writing_prompt_generator_usecase_4:
		'Esquematiza localmente un guion corto antes de llevar el prompt a Gemini para lecturas en mesa.',
	tool_writing_prompt_generator_usecases_title: 'Buenos encajes',
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

export default es;
