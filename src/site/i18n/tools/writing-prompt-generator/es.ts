/**
 * i18n tool shard (writing-prompt-generator / es).
 * H1 de búsqueda: generador de prompts de escritura — diálogo, personaje, guion, aleatorio.
 * El montaje es local en el navegador; Expandir/Pulir es opcional vía Cloudflare Workers AI
 * (Turnstile + cuota) y su respuesta reemplaza el bloque de resultado.
 * ChatGPT / Gemini / Claude / DeepSeek aparecen en la description y en la primera pantalla.
 */
import type { SiteLangDict } from '../../../types';

/** Generador de prompts de escritura — shard de texto en español */
const es: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Monta prompts de escritura listos para pegar: escenas de diálogo, fichas de personaje, esquemas de guion o arranques aleatorios. Elige un modo, rellena campos o tira al azar, y copia Markdown o JSON en ChatGPT, Gemini, Claude o DeepSeek. Por defecto el prompt se arma en tu navegador y no llamamos a ninguna API de chat por ti; solo si pulsas Expandir o Pulir con IA se envía el borrador actual a Cloudflare Workers AI (con Turnstile y cuota limitada).',
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
		'Generador de prompts de escritura — modos diálogo, personaje, guion y aleatorio; montaje local en el navegador y IA de Cloudflare opcional.',
	tool_writing_prompt_generator_description:
		'Generador de prompts de escritura: elige modo —diálogo, personaje, guion o aleatorio—, rellena los campos y obtén un prompt listo para pegar en ChatGPT, Gemini, Claude o DeepSeek. Al abrir corre un ejemplo de diálogo; en aleatorio tiras un arranque de historia y un seed repite la misma tirada. Exporta Markdown o JSON; el montaje es local y la IA de Cloudflare es opcional.',
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
		'Entrada (Diálogo, Cargar ejemplo): Genre = drama contemporáneo; Characters = Maya (barista) y Jonah (músico); Conflict = Maya reconoce la canción sobre su ex. Salida (Markdown): ## Rol → coach de escritura; ## Tarea → líneas genre/characters/setting/conflict/tone. El modo Guion usa un misterio del faro — no el food-truck del cine.',
	tool_writing_prompt_generator_example_title: 'Ejemplo',
	tool_writing_prompt_generator_faq_a1:
		'Por defecto el prompt se arma en esta pestaña y no sale nada. Solo Expandir/Pulir envía el texto de ese clic a Cloudflare Workers AI; desde nuestros servidores no va a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'El modo local solo da formato a tus campos de escritura en esta pestaña. Expandir/Pulir usa Cloudflare Workers AI tras pasar Turnstile: no abrimos ChatGPT, Gemini, Claude ni DeepSeek por ti.',
	tool_writing_prompt_generator_faq_a3:
		'El constructor de plantillas de Prompt estructura plantillas genéricas Role/Task/Constraints/Output. Esta página prioriza modos de escritura — campos de diálogo, fichas de personaje, beats de guion y un generador de prompts aleatorio en un solo lienzo.',
	tool_writing_prompt_generator_faq_a4:
		'Sí. El modo aleatorio tira género, escenario, objeto, emoción y conflicto. Un seed numérico opcional repite exactamente la misma tirada. Lo que sale es material de inspiración: no garantiza calidad.',
	tool_writing_prompt_generator_faq_a5:
		'Sí. Completa el widget Turnstile del panel de IA antes de Expandir o Pulir; sin token válido el botón devuelve error y el modo local sigue funcionando.',
	tool_writing_prompt_generator_faq_a6:
		'Sí. El chip JSON emite {mode,fields,role,task,constraints,output} para pruebas o configs. Markdown usa los encabezados ## Rol / Tarea / Restricciones / Formato de salida.',
	tool_writing_prompt_generator_faq_q1: '¿Se sube mi prompt de escritura?',
	tool_writing_prompt_generator_faq_q2: '¿Llama a un LLM?',
	tool_writing_prompt_generator_faq_q3: '¿En qué se diferencia del constructor de plantillas de Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'¿Funciona aquí el generador de prompts aleatorio?',
	tool_writing_prompt_generator_faq_q5: '¿Por qué Turnstile para IA opcional?',
	tool_writing_prompt_generator_faq_q6: '¿Puedo obtener JSON?',
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
		'Los prompts de escritura necesitan campos propios de cada modo, límites honestos sobre lo que da el azar y el mismo montaje local que los demás constructores.',
	tool_writing_prompt_generator_rules_item_1:
		'Cuatro bloques en la salida: Role, Task, Constraints, Output — alineados con plantillas estructuradas.',
	tool_writing_prompt_generator_rules_item_2:
		'El modo aleatorio vive en este mismo lienzo: tira género, escenario, objeto, emoción y conflicto, y con un seed repites la tirada.',
	tool_writing_prompt_generator_rules_item_3:
		'La exportación predeterminada es Markdown. JSON es un chip en el mismo lienzo.',
	tool_writing_prompt_generator_rules_item_4:
		'La IA opcional de Cloudflare nunca sustituye al modo local: revisa su texto antes de copiar. Esta herramienta solo monta el prompt, no escribe la historia terminada.',
	tool_writing_prompt_generator_rules_title: 'Qué debes esperar',
	tool_writing_prompt_generator_scr_notes_label: 'Notas de beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Número de escenas, ritmo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premisa / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Configuración en un párrafo…',
	tool_writing_prompt_generator_scr_structure_label: 'Estructura',
	tool_writing_prompt_generator_scr_structure_ph: 'Tres actos, save the cat, episódico…',
	tool_writing_prompt_generator_sec_constraints: 'Restricciones',
	tool_writing_prompt_generator_sec_output: 'Formato de salida',
	tool_writing_prompt_generator_sec_role: 'Rol',
	tool_writing_prompt_generator_sec_task: 'Tarea',
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
		'Este paso opcional envía tu borrador actual a Cloudflare Workers AI. Desde nuestros servidores no va a OpenAI, Google, Anthropic ni DeepSeek. Sin IA el montaje local sigue funcionando igual.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_writing_prompt_generator_ai_done:
		'El texto de la IA se escribió completo en el resultado. Revísalo antes de copiar.',
	tool_writing_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_writing_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_writing_prompt_generator_faq_q7:
		'¿Puedo usarlo con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_writing_prompt_generator_faq_a7:
		'Sí. Copia el prompt terminado en ChatGPT, Gemini, Claude o DeepSeek. Esta página solo prepara el texto; no inicia sesión ni llama a la API de ninguno de ellos.',
	tool_writing_prompt_generator_faq_q8:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_writing_prompt_generator_faq_a8:
		'Local: todo se arma en esta pestaña, sin envío. Expandir/Pulir manda el borrador a Cloudflare Workers AI (Turnstile y cuota diaria) y su respuesta reemplaza el bloque de resultado. Si falla o se agota la cuota, sigue con el modo local.',
};

export default es;
