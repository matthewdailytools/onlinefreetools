/**
 * i18n tool shard (film-prompt-builder / es).
 * Reescrito para quien busca «generador de prompts para guiones de cine» o «estructura en tres actos con IA»:
 * el término principal va en el H1; «escaleta», «arco del personaje» y «exportar en JSON» caen en la descripción,
 * las FAQ y los casos de uso.
 * Límites reales: el prompt se arma en el navegador; solo Ampliar/Pulir envía el borrador a Cloudflare Workers AI
 * (Turnstile y cuota). Esta página no escribe el guion por ti.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Escribe la premisa, los tres actos, la escaleta y el arco del personaje: la página los ordena en el navegador y te devuelve un prompt con estructura clara en Markdown o JSON, listo para pegar en ChatGPT, Gemini, Claude o DeepSeek y seguir desarrollando el guion allí. Por defecto no se sube nada; solo si pulsas Ampliar o Pulir el borrador viaja a Cloudflare Workers AI, después de pasar Turnstile.',
	tool_film_prompt_builder_build:
		'Generar prompt',
	tool_film_prompt_builder_clear:
		'Vaciar',
	tool_film_prompt_builder_copy:
		'Copiar',
	tool_film_prompt_builder_desc:
		'Generador de prompts para guiones de cine: premisa, tres actos y escaleta ordenados en Markdown o JSON dentro del navegador; IA de Cloudflare opcional con Turnstile.',
	tool_film_prompt_builder_description:
		'Generador de prompts para guiones de cine: rellenas la premisa, los actos primero a tercero, la escaleta y el arco del personaje, y la página los reparte en los bloques Role, Task, Constraints y Output para que ChatGPT, Gemini, Claude o DeepSeek sepan por dónde continuar. Markdown por defecto y JSON para tu propia hoja de seguimiento; al entrar ya se cargó el ejemplo de las dos food trucks que comparten cocina 30 días. Si un acto se queda corto, Ampliar o Pulir manda el borrador a Cloudflare Workers AI (Turnstile y cuota).',
	tool_film_prompt_builder_download:
		'Descargar',
	tool_film_prompt_builder_empty:
		'Rellena al menos un campo antes de generar el prompt.',
	tool_film_prompt_builder_example:
		'Entrada: premisa = un error administrativo obliga a dos dueños rivales de food truck a compartir la misma cocina durante 30 días; acto II = el éxito en el festival se rompe cuando un bloguero atribuye mal la receta y la vieja pelea familiar por las especias salta a las redes; escaleta = seis secuencias numeradas; arco = orgullo → colaboración a regañadientes → socios que negocian. Salida (Markdown): el bloque ## Task enumera Logline, Act1–3, Scene / List y Character / Arc, igual que el ejemplo cargado al entrar.',
	tool_film_prompt_builder_example_title:
		'Ejemplo',
	tool_film_prompt_builder_faq_a1:
		'El texto se ordena en esta pestaña del navegador, así que por defecto no se sube nada. Solo cuando pulsas Ampliar o Pulir se envía el borrador actual a Cloudflare Workers AI; no lo reenviamos desde nuestros servidores a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_film_prompt_builder_faq_a2:
		'El modo local no llama a ningún modelo: reparte la premisa, los actos, la escaleta y el arco en los bloques Role, Task, Constraints y Output. Ampliar y Pulir usan Cloudflare Workers AI después de pasar Turnstile, y no llaman a las APIs de ChatGPT, Gemini, Claude ni DeepSeek desde nuestros servidores.',
	tool_film_prompt_builder_faq_a3:
		'El generador de plantillas de prompts da la estructura genérica de cuatro bloques, sirva el tema que sea. Aquí los campos son los de un largometraje —premisa, tres actos, escaleta y arco—, con un ejemplo completo al entrar y unas reglas centradas en los tropiezos típicos de este tipo de documento.',
	tool_film_prompt_builder_faq_a4:
		'Turnstile frena los scripts automáticos para que la cuota gratuita quede para personas. Complétalo en el panel de IA antes de pulsar Ampliar o Pulir; sin un token válido esos botones dan error y el montaje en el navegador sigue funcionando.',
	tool_film_prompt_builder_faq_a5:
		'Sí. Al cambiar a JSON la misma salida trae los campos estructurados y el prompt ya montado, cómodo para guardar cada versión de los actos y la escaleta en una hoja o en tu repositorio y compararlas después.',
	tool_film_prompt_builder_faq_a6:
		'Sí. Copia el resultado y pégalo en el chat que uses. Esta página solo ordena la estructura y no llama a ninguna API, así que no hay una URL distinta por plataforma.',
	tool_film_prompt_builder_faq_q1:
		'¿Se sube el material del guion que escribo?',
	tool_film_prompt_builder_faq_q2:
		'¿Esta página llama a la API de ChatGPT o de otros modelos?',
	tool_film_prompt_builder_faq_q3:
		'¿En qué se diferencia del generador de plantillas de prompts?',
	tool_film_prompt_builder_faq_q4:
		'¿Por qué hay que pasar Turnstile para usar la IA?',
	tool_film_prompt_builder_faq_q5:
		'¿Puedo sacar la salida en JSON?',
	tool_film_prompt_builder_faq_q6:
		'¿Sirve con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_film_prompt_builder_faq_q7:
		'¿Qué diferencia hay entre el modo local y la IA opcional de Cloudflare?',
	tool_film_prompt_builder_faq_a7:
		'En local todo se ordena en esta pestaña, sin salir del navegador. Ampliar o Pulir manda el borrador a Cloudflare Workers AI (hace falta Turnstile y hay límites de frecuencia y de cuota diaria) y el texto que vuelve se escribe completo en la salida, encima del borrador que estabas viendo: léelo antes de copiar para que una reescritura no sustituya sin querer tu versión de los actos. Si falla o se agota la cuota, sigue con el modo local.',
	tool_film_prompt_builder_ai_expand:
		'Ampliar con IA',
	tool_film_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_film_prompt_builder_ai_panel_label:
		'Opcional: Cloudflare AI (requiere Turnstile)',
	tool_film_prompt_builder_ai_consent_title:
		'¿Enviar el borrador a Cloudflare Workers AI?',
	tool_film_prompt_builder_ai_consent_body:
		'Este paso es opcional: envía el borrador que tienes ahora en los campos a Cloudflare Workers AI para una inferencia. No lo reenviamos desde nuestros servidores a OpenAI, Google, Anthropic ni DeepSeek. Sin usar la IA, el prompt se sigue montando en tu navegador.',
	tool_film_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_film_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI está trabajando…',
	tool_film_prompt_builder_ai_done:
		'El texto de la IA se escribió completo en la salida. Revísalo antes de copiar.',
	tool_film_prompt_builder_ai_err_generic:
		'La IA falló esta vez; la salida sigue igual.',
	tool_film_prompt_builder_ai_err_rate:
		'Se agotó la cuota de IA. Sigue montando el prompt aquí o vuelve mañana (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Completa la verificación de Turnstile antes de usar la IA.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Formato de salida',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Premisa',
	tool_film_prompt_builder_logline_ph:
		'Por ejemplo: dos food trucks rivales comparten cocina…',
	tool_film_prompt_builder_act1_label:
		'Acto I',
	tool_film_prompt_builder_act1_ph:
		'Por ejemplo: de dónde sale el conflicto y qué obliga a aceptarlo…',
	tool_film_prompt_builder_act2_label:
		'Acto II',
	tool_film_prompt_builder_act2_ph:
		'Por ejemplo: un éxito breve y luego todo se descontrola…',
	tool_film_prompt_builder_act3_label:
		'Acto III',
	tool_film_prompt_builder_act3_ph:
		'Por ejemplo: enfrentamiento final y acuerdo con su precio…',
	tool_film_prompt_builder_scene_list_label:
		'Escaleta',
	tool_film_prompt_builder_scene_list_ph:
		'Por ejemplo: 1. Pelea por el aparcamiento 2. Doble inspección…',
	tool_film_prompt_builder_character_arc_label:
		'Arco del personaje',
	tool_film_prompt_builder_character_arc_ph:
		'Por ejemplo: orgullo → colaborar a regañadientes → socios…',

	tool_film_prompt_builder_how_body:
		'Rellena premisa, actos y escaleta, genera el prompt y pégalo en ChatGPT, Gemini, Claude o DeepSeek para seguir escribiendo; si un acto queda seco, usa Ampliar o Pulir con la IA opcional de Cloudflare.',
	tool_film_prompt_builder_how_item_1:
		'Pulsa Cargar ejemplo para el preset por defecto.',
	tool_film_prompt_builder_how_item_2:
		'Cambia premisa, actos, escaleta y arco del personaje y pulsa Generar prompt; pasa a JSON si lo necesitas estructurado.',
	tool_film_prompt_builder_how_item_3:
		'Opcional: completa Turnstile en el panel de IA y pulsa Ampliar o Pulir; el texto que vuelva se escribe en la salida.',
	tool_film_prompt_builder_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek para que el modelo continúe con esa estructura.',
	tool_film_prompt_builder_how_title:
		'Cómo se usa',
	tool_film_prompt_builder_load_sample:
		'Cargar ejemplo',
	tool_film_prompt_builder_platforms_lead:
		'La salida se pega tal cual en el chat de ChatGPT, Gemini, Claude o DeepSeek.',
	tool_film_prompt_builder_result_label:
		'Prompt generado',
	tool_film_prompt_builder_rules_body:
		'Se organiza como se trabaja un largometraje: la premisa fija el rumbo, los tres actos el recorrido, la escaleta numera las secuencias y el arco explica el cambio del personaje. El montaje en el navegador es lo que ocurre por defecto; la IA opcional tiene límites de uso y pide Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Cada campo del formulario cae en uno de los bloques Role, Task, Constraints y Output del Markdown.',
	tool_film_prompt_builder_rules_item_2:
		'La exportación por defecto es Markdown; JSON es un botón sobre la misma salida.',
	tool_film_prompt_builder_rules_item_3:
		'La IA opcional es un paso añadido, no un sustituto: el modo local siempre funciona y el texto de la IA reemplaza por completo lo que había en la salida, así que revísalo antes de copiar.',
	tool_film_prompt_builder_rules_item_4:
		'Esta página solo arma texto: no escribe el guion por ti ni ejecuta ningún modelo o API de chat en tu navegador.',
	tool_film_prompt_builder_rules_title:
		'Lo que hace y lo que no',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'Copiado al portapapeles.',
	tool_film_prompt_builder_status_done:
		'Prompt listo.',
	tool_film_prompt_builder_status_working:
		'Generando el prompt…',
	tool_film_prompt_builder_title:
		'Generador de prompts para guiones de cine — tres actos y escaleta en el navegador',
	tool_film_prompt_builder_usecase_1:
		'Antes de una reunión, dejar los tres actos y la escaleta en un prompt que se pega directo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'Exportar el JSON y guardar la premisa, los actos y el arco de cada versión como campos en una hoja o en tu repositorio para compararlos.',
	tool_film_prompt_builder_usecase_3:
		'Si lo que necesitas es la plantilla genérica de cuatro bloques y no la estructura de un largometraje, usa el generador de plantillas de prompts.',
	tool_film_prompt_builder_usecase_4:
		'Con un proyecto que todavía no está firmado, quédate en el modo local: el texto solo sale de tu navegador si aceptas el aviso de la IA.',
	tool_film_prompt_builder_usecases_title:
		'Cuándo viene bien',
};

export default es;
