/**
 * i18n tool shard (midjourney-prompt-builder / es).
 * Reescrito para quien busca «generador de prompts para Midjourney» o «cómo escribir un prompt de Midjourney»:
 * el término principal va en el H1; «parámetro --ar», «exportar el prompt en JSON» y «prompt para ChatGPT»
 * caen en la descripción, las FAQ y los casos de uso.
 * Límites reales: el prompt se arma en el navegador; solo Ampliar/Pulir envía el borrador a Cloudflare Workers AI
 * (con Turnstile y cuota); aquí no se generan imágenes ni se llama a Midjourney.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Monta aquí el prompt de Midjourney antes de usarlo: rellena sujeto, estilo, luz, proporción y parámetros, y la página lo arma en Markdown o JSON dentro del navegador para que lo copies en ChatGPT, Gemini, Claude o DeepSeek. Esta página solo produce texto: no genera imágenes ni llama a Midjourney. Por defecto no se sube nada; si pulsas Ampliar o Pulir, el borrador va a Cloudflare Workers AI pasando antes por Turnstile.',
	tool_midjourney_prompt_builder_build:
		'Generar prompt',
	tool_midjourney_prompt_builder_clear:
		'Vaciar',
	tool_midjourney_prompt_builder_copy:
		'Copiar',
	tool_midjourney_prompt_builder_desc:
		'Generador de prompts para Midjourney: rellena sujeto, estilo, luz y proporción y la página los arma en Markdown o JSON; IA de Cloudflare opcional con Turnstile.',
	tool_midjourney_prompt_builder_description:
		'Generador de prompts para Midjourney: escribes sujeto, estilo, luz, proporción y parámetros, y la página los arma en una línea lista para pegar, con --ar según la proporción y --v 6.1 si no indicaste versión. Markdown por defecto y JSON para tus scripts; al entrar ya se ejecutó el ejemplo del samurái en el puente. Si necesitas más detalle, Ampliar o Pulir envía el borrador a Cloudflare Workers AI (Turnstile y cuota). Solo texto: aquí no se generan imágenes.',
	tool_midjourney_prompt_builder_download:
		'Descargar',
	tool_midjourney_prompt_builder_empty:
		'Rellena al menos un campo antes de generar el prompt.',
	tool_midjourney_prompt_builder_example:
		'Entrada: sujeto = samurái desenvainando en un puente con musgo, bruma de lluvia, torii al fondo; estilo = tinta cinematográfica, verdeazulado y carbón, grano fino; luz = contraluz de amanecer con niebla volumétrica; proporción = 16:9; parámetros = --v 6.1 --style raw --stylize 120 --chaos 8. Salida (Markdown): el bloque ## Task trae la línea de Midjourney con sujeto, estilo y luz y termina en --ar 16:9. En JSON llegan los mismos datos como campos.',
	tool_midjourney_prompt_builder_example_title:
		'Ejemplo',
	tool_midjourney_prompt_builder_faq_a1:
		'El montaje se hace en esta pestaña del navegador, así que por defecto no se sube nada. Solo cuando pulsas Ampliar o Pulir se envía el borrador actual a Cloudflare Workers AI; no lo reenviamos desde nuestros servidores a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_midjourney_prompt_builder_faq_a2:
		'El modo local no llama a ningún modelo: solo ordena tus campos en los bloques Role, Task, Constraints y Output. Ampliar y Pulir usan Cloudflare Workers AI después de pasar Turnstile, y no llaman a las APIs de ChatGPT, Gemini, Claude ni DeepSeek desde nuestros servidores.',
	tool_midjourney_prompt_builder_faq_a3:
		'El generador de plantillas de prompts da la estructura genérica de cuatro bloques y sirve para cualquier tema. Aquí los campos ya son los de Midjourney —sujeto, estilo, luz, proporción y parámetros—, con un ejemplo cargado al entrar y una tabla de equivalencias propia de este caso.',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile frena los scripts automáticos para que la cuota gratuita quede para personas. Complétalo en el panel de IA antes de pulsar Ampliar o Pulir; sin un token válido esos botones dan error y el montaje en el navegador sigue funcionando.',
	tool_midjourney_prompt_builder_faq_a5:
		'Sí. Al cambiar a JSON la misma salida trae los campos estructurados y el prompt ya montado, listo para una tanda de imágenes, una prueba o un archivo de configuración.',
	tool_midjourney_prompt_builder_faq_a6:
		'Sí. Copia el resultado y pégalo en el chat que uses, o directamente en Midjourney. Esta página solo da formato al texto y no llama a ninguna API, así que no hay una URL distinta por plataforma.',
	tool_midjourney_prompt_builder_faq_q1:
		'¿Se sube lo que escribo?',
	tool_midjourney_prompt_builder_faq_q2:
		'¿Esta página llama a la API de ChatGPT o de otros modelos?',
	tool_midjourney_prompt_builder_faq_q3:
		'¿En qué se diferencia del generador de plantillas de prompts?',
	tool_midjourney_prompt_builder_faq_q4:
		'¿Por qué hay que pasar Turnstile para usar la IA?',
	tool_midjourney_prompt_builder_faq_q5:
		'¿Puedo sacar la salida en JSON?',
	tool_midjourney_prompt_builder_faq_q6:
		'¿Sirve con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'¿Qué diferencia hay entre el modo local y la IA opcional de Cloudflare?',
	tool_midjourney_prompt_builder_faq_a7:
		'En local todo se arma en esta pestaña, sin salir del navegador. Ampliar o Pulir manda el borrador a Cloudflare Workers AI (hace falta Turnstile y hay límites de frecuencia y de cuota diaria) y el texto que vuelve se escribe completo en la salida, encima del borrador que estabas viendo: revísalo antes de copiar. Si falla o se agota la cuota, sigue con el modo local.',
	tool_midjourney_prompt_builder_ai_expand:
		'Ampliar con IA',
	tool_midjourney_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Opcional: Cloudflare AI (requiere Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'¿Enviar el borrador a Cloudflare Workers AI?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Este paso es opcional: envía el borrador que tienes ahora en los campos a Cloudflare Workers AI para una inferencia. No lo reenviamos desde nuestros servidores a OpenAI, Google, Anthropic ni DeepSeek. Sin usar la IA, el prompt se sigue montando en tu navegador.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI está trabajando…',
	tool_midjourney_prompt_builder_ai_done:
		'El texto de la IA se escribió completo en la salida. Revísalo antes de copiar.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'La IA falló esta vez; la salida sigue igual.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'Se agotó la cuota de IA. Sigue montando el prompt aquí o vuelve mañana (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Completa la verificación de Turnstile antes de usar la IA.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Formato de salida',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Sujeto',
	tool_midjourney_prompt_builder_subject_ph:
		'Por ejemplo: samurái desenvainando en un puente…',
	tool_midjourney_prompt_builder_style_label:
		'Estilo',
	tool_midjourney_prompt_builder_style_ph:
		'Por ejemplo: tinta cinematográfica, tonos carbón…',
	tool_midjourney_prompt_builder_lighting_label:
		'Luz',
	tool_midjourney_prompt_builder_lighting_ph:
		'Por ejemplo: contraluz de amanecer con niebla…',
	tool_midjourney_prompt_builder_aspect_label:
		'Proporción',
	tool_midjourney_prompt_builder_aspect_ph:
		'Por ejemplo 16:9, 9:16 o 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'Parámetros de MJ',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Por ejemplo --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Equivalencias de parámetros de Midjourney',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Proporción → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Versión → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Si escribes una proporción, se convierte en --ar al final de la línea; si en los parámetros no hay versión, se añade --v 6.1.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 cuadrado',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 horizontal',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 en vertical',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'Versión por defecto de MJ v6',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Rellena los campos, genera el prompt y cópialo en ChatGPT, Gemini, Claude o DeepSeek; si te falta detalle, usa Ampliar o Pulir con la IA opcional de Cloudflare.',
	tool_midjourney_prompt_builder_how_item_1:
		'Pulsa Cargar ejemplo para el preset por defecto.',
	tool_midjourney_prompt_builder_how_item_2:
		'Cambia sujeto, estilo, luz, proporción y parámetros y pulsa Generar prompt; pasa a JSON si lo necesitas estructurado.',
	tool_midjourney_prompt_builder_how_item_3:
		'Opcional: completa Turnstile en el panel de IA y pulsa Ampliar o Pulir; el texto que vuelva se escribe en la salida.',
	tool_midjourney_prompt_builder_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek para seguir ajustando, o directamente en Midjourney.',
	tool_midjourney_prompt_builder_how_title:
		'Cómo se usa',
	tool_midjourney_prompt_builder_load_sample:
		'Cargar ejemplo',
	tool_midjourney_prompt_builder_platforms_lead:
		'La salida se pega tal cual en el chat de ChatGPT, Gemini, Claude o DeepSeek.',
	tool_midjourney_prompt_builder_result_label:
		'Prompt generado',
	tool_midjourney_prompt_builder_rules_body:
		'Cómo se traducen los parámetros: la proporción pasa a --ar y, si no pones versión, se añade --v 6.1. El montaje en el navegador es lo que ocurre por defecto; la IA opcional tiene límites de uso y pide Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Cada campo del formulario cae en uno de los bloques Role, Task, Constraints y Output del Markdown.',
	tool_midjourney_prompt_builder_rules_item_2:
		'La exportación por defecto es Markdown; JSON es un botón sobre la misma salida.',
	tool_midjourney_prompt_builder_rules_item_3:
		'La IA opcional es un paso añadido, no un sustituto: el modo local siempre funciona y el texto de la IA reemplaza por completo lo que había en la salida, así que revísalo antes de copiar.',
	tool_midjourney_prompt_builder_rules_item_4:
		'Esta página solo arma texto: no genera imágenes ni llama a Midjourney ni a ninguna API de chat.',
	tool_midjourney_prompt_builder_rules_title:
		'Lo que hace y lo que no',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Copiado al portapapeles.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt listo.',
	tool_midjourney_prompt_builder_status_working:
		'Generando el prompt…',
	tool_midjourney_prompt_builder_title:
		'Generador de prompts para Midjourney — en el navegador, con IA opcional',
	tool_midjourney_prompt_builder_usecase_1:
		'Dejar un prompt de Midjourney listo para pegar en el chat del equipo, sin dictar los parámetros mensaje a mensaje.',
	tool_midjourney_prompt_builder_usecase_2:
		'Exportar el JSON antes de una tanda de imágenes y guardar sujeto, estilo y proporción como campos de tu script u hoja de cálculo.',
	tool_midjourney_prompt_builder_usecase_3:
		'Si lo que necesitas es la plantilla genérica de cuatro bloques y no una imagen, usa el generador de plantillas de prompts.',
	tool_midjourney_prompt_builder_usecase_4:
		'Con borradores de un proyecto que aún no es público, quédate en el modo local: el texto solo sale de tu navegador si aceptas el aviso de la IA.',
	tool_midjourney_prompt_builder_usecases_title:
		'Cuándo viene bien',
};

export default es;
