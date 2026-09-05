/**
 * i18n tool shard (short-drama-prompt-generator / es).
 * Reescrito para quien busca «generador de prompts para microdramas verticales» o «ganchos por episodio con IA»:
 * el término principal va en el H1; «cliffhanger», «formato 9:16 con subtítulos incrustados» y «exportar en JSON»
 * caen en la descripción, las FAQ y los casos de uso.
 * Límites reales: el prompt se arma en el navegador; solo Ampliar/Pulir envía el borrador a Cloudflare Workers AI
 * (Turnstile y cuota). Aquí no se genera vídeo.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Indica cuántos episodios y de qué duración, el gancho de apertura, el cliffhanger de cada cierre, el formato vertical y el género: la página lo ordena en el navegador y devuelve un prompt listo para dar de comer al modelo, en Markdown o JSON, que copias en ChatGPT, Gemini, Claude o DeepSeek para que escriba episodio a episodio. Por defecto no se sube nada; el borrador solo viaja a Cloudflare Workers AI si pulsas Ampliar o Pulir, tras pasar Turnstile. Aquí no se genera vídeo, solo texto.',
	tool_short_drama_prompt_generator_build:
		'Generar prompt',
	tool_short_drama_prompt_generator_clear:
		'Vaciar',
	tool_short_drama_prompt_generator_copy:
		'Copiar',
	tool_short_drama_prompt_generator_desc:
		'Generador de prompts para microdramas verticales: episodios, gancho, cliffhanger y formato 9:16 ordenados en Markdown o JSON en el navegador; IA de Cloudflare opcional con Turnstile.',
	tool_short_drama_prompt_generator_description:
		'Generador de prompts para microdramas verticales: rellenas número y duración de episodios, el gancho de los dos primeros segundos, el cliffhanger de cada cierre, el formato vertical y el género, y la página lo reparte en los bloques Role, Task, Constraints y Output para que ChatGPT, Gemini, Claude o DeepSeek escriban con ritmo por capítulos. Markdown por defecto y JSON para tu hoja de episodios; al entrar ya se cargó el ejemplo de 12 × 75 s con un secreto laboral. Si un gancho queda flojo, Ampliar o Pulir manda el borrador a Cloudflare Workers AI (Turnstile y cuota).',
	tool_short_drama_prompt_generator_download:
		'Descargar',
	tool_short_drama_prompt_generator_empty:
		'Rellena al menos un campo antes de generar el prompt.',
	tool_short_drama_prompt_generator_example:
		'Entrada: episodios = 12 × 75 s; gancho = una becaria destapa una filtración de nóminas y el jefe reconoce su voz en un mensaje de hace diez años sobre una custodia; cliffhanger = el episodio 6 cierra con el jefe borrando el mensaje a medio escuchar y el 7 abre con una mirada muda en el ascensor; formato = 9:16 con subtítulos incrustados y una apertura que frene el dedo en los dos primeros segundos. Salida (Markdown): el bloque ## Task enumera Episodes, Hook, Cliffhanger, Vertical / Format y Genre para una serie vertical.',
	tool_short_drama_prompt_generator_example_title:
		'Ejemplo',
	tool_short_drama_prompt_generator_faq_a1:
		'El texto se ordena en esta pestaña del navegador, así que por defecto no se sube nada. Solo cuando pulsas Ampliar o Pulir se envía el borrador actual a Cloudflare Workers AI; no lo reenviamos desde nuestros servidores a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_short_drama_prompt_generator_faq_a2:
		'El modo local no llama a ningún modelo: reparte los episodios, el gancho, el cliffhanger, el formato y el género en los bloques Role, Task, Constraints y Output. Ampliar y Pulir usan Cloudflare Workers AI después de pasar Turnstile, y no llaman a las APIs de ChatGPT, Gemini, Claude ni DeepSeek desde nuestros servidores.',
	tool_short_drama_prompt_generator_faq_a3:
		'El generador de plantillas de prompts da la estructura genérica de cuatro bloques, sirva el tema que sea. Aquí los campos son los de una serie vertical —episodios y duración, gancho, cliffhanger, formato y género—, con un ejemplo completo al entrar y unas reglas centradas en lo que falla en el consumo por capítulos.',
	tool_short_drama_prompt_generator_faq_a4:
		'Turnstile frena los scripts automáticos para que la cuota gratuita quede para personas. Complétalo en el panel de IA antes de pulsar Ampliar o Pulir; sin un token válido esos botones dan error y el montaje en el navegador sigue funcionando.',
	tool_short_drama_prompt_generator_faq_a5:
		'Sí. Al cambiar a JSON la misma salida trae los campos estructurados y el prompt ya montado, cómodo para guardar cada episodio en una hoja y revisar si los ganchos y los cliffhangers se repiten.',
	tool_short_drama_prompt_generator_faq_a6:
		'Sí. Copia el resultado y pégalo en el chat que uses. Esta página solo ordena la estructura por episodios y no llama a ninguna API, así que no hay una URL distinta por plataforma.',
	tool_short_drama_prompt_generator_faq_q1:
		'¿Se sube la trama que escribo?',
	tool_short_drama_prompt_generator_faq_q2:
		'¿Esta página llama a la API de ChatGPT o de otros modelos?',
	tool_short_drama_prompt_generator_faq_q3:
		'¿En qué se diferencia del generador de plantillas de prompts?',
	tool_short_drama_prompt_generator_faq_q4:
		'¿Por qué hay que pasar Turnstile para usar la IA?',
	tool_short_drama_prompt_generator_faq_q5:
		'¿Puedo sacar la salida en JSON?',
	tool_short_drama_prompt_generator_faq_q6:
		'¿Sirve con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'¿Qué diferencia hay entre el modo local y la IA opcional de Cloudflare?',
	tool_short_drama_prompt_generator_faq_a7:
		'En local todo se ordena en esta pestaña, sin salir del navegador. Ampliar o Pulir manda el borrador a Cloudflare Workers AI (hace falta Turnstile y hay límites de frecuencia y de cuota diaria) y el texto que vuelve se escribe completo en la salida, encima del borrador que estabas viendo: léelo antes de copiar para que una reescritura no te cambie el orden de los cliffhangers. Si falla o se agota la cuota, sigue con el modo local.',
	tool_short_drama_prompt_generator_ai_expand:
		'Ampliar con IA',
	tool_short_drama_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Opcional: Cloudflare AI (requiere Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'¿Enviar el borrador a Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Este paso es opcional: envía el borrador que tienes ahora en los campos a Cloudflare Workers AI para una inferencia. No lo reenviamos desde nuestros servidores a OpenAI, Google, Anthropic ni DeepSeek. Sin usar la IA, el prompt se sigue montando en tu navegador.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI está trabajando…',
	tool_short_drama_prompt_generator_ai_done:
		'El texto de la IA se escribió completo en la salida. Revísalo antes de copiar.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'La IA falló esta vez; la salida sigue igual.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'Se agotó la cuota de IA. Sigue montando el prompt aquí o vuelve mañana (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Completa la verificación de Turnstile antes de usar la IA.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Formato de salida',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Episodios y duración',
	tool_short_drama_prompt_generator_episodes_ph:
		'Por ejemplo: 12 × 75 s…',
	tool_short_drama_prompt_generator_hook_label:
		'Gancho de apertura',
	tool_short_drama_prompt_generator_hook_ph:
		'Por ejemplo: una becaria destapa una filtración de nóminas…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Por ejemplo: el episodio 6 cierra borrando el mensaje…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Formato vertical',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Por ejemplo: 9:16, subtítulos incrustados, arranque en 2 s…',
	tool_short_drama_prompt_generator_genre_label:
		'Género',
	tool_short_drama_prompt_generator_genre_ph:
		'Por ejemplo: melodrama de oficina con secreto familiar…',

	tool_short_drama_prompt_generator_how_body:
		'Rellena episodios, gancho y cliffhanger, genera el prompt y pégalo en ChatGPT, Gemini, Claude o DeepSeek para que escriba capítulo a capítulo; si un gancho queda flojo, usa Ampliar o Pulir con la IA opcional de Cloudflare.',
	tool_short_drama_prompt_generator_how_item_1:
		'Pulsa Cargar ejemplo para el preset por defecto.',
	tool_short_drama_prompt_generator_how_item_2:
		'Cambia episodios y duración, gancho, cliffhanger, formato vertical y género y pulsa Generar prompt; pasa a JSON si lo necesitas estructurado.',
	tool_short_drama_prompt_generator_how_item_3:
		'Opcional: completa Turnstile en el panel de IA y pulsa Ampliar o Pulir; el texto que vuelva se escribe en la salida.',
	tool_short_drama_prompt_generator_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek para que el modelo continúe con ese reparto por episodios.',
	tool_short_drama_prompt_generator_how_title:
		'Cómo se usa',
	tool_short_drama_prompt_generator_load_sample:
		'Cargar ejemplo',
	tool_short_drama_prompt_generator_platforms_lead:
		'La salida se pega tal cual en el chat de ChatGPT, Gemini, Claude o DeepSeek.',
	tool_short_drama_prompt_generator_result_label:
		'Prompt generado',
	tool_short_drama_prompt_generator_rules_body:
		'Se organiza con el ritmo del consumo vertical: los episodios y su duración fijan la capacidad, el gancho decide si el dedo se detiene en los dos primeros segundos, el cliffhanger empuja al capítulo siguiente y el formato deja claros el encuadre y los subtítulos. El montaje en el navegador es lo que ocurre por defecto; la IA opcional tiene límites de uso y pide Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Cada campo del formulario cae en uno de los bloques Role, Task, Constraints y Output del Markdown.',
	tool_short_drama_prompt_generator_rules_item_2:
		'La exportación por defecto es Markdown; JSON es un botón sobre la misma salida.',
	tool_short_drama_prompt_generator_rules_item_3:
		'La IA opcional es un paso añadido, no un sustituto: el modo local siempre funciona y el texto de la IA reemplaza por completo lo que había en la salida, así que revísalo antes de copiar.',
	tool_short_drama_prompt_generator_rules_item_4:
		'Esta página solo arma texto: no genera vídeo ni ejecuta ningún modelo o API de chat en tu navegador.',
	tool_short_drama_prompt_generator_rules_title:
		'Lo que hace y lo que no',
	tool_short_drama_prompt_generator_sec_constraints:
		'Constraints',
	tool_short_drama_prompt_generator_sec_output:
		'Output',
	tool_short_drama_prompt_generator_sec_role:
		'Role',
	tool_short_drama_prompt_generator_sec_task:
		'Task',
	tool_short_drama_prompt_generator_status_copied:
		'Copiado al portapapeles.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt listo.',
	tool_short_drama_prompt_generator_status_working:
		'Generando el prompt…',
	tool_short_drama_prompt_generator_title:
		'Generador de prompts para microdramas verticales — ganchos y cliffhangers en el navegador',
	tool_short_drama_prompt_generator_usecase_1:
		'Antes de una reunión, dejar los episodios, el gancho y los cliffhangers en un prompt que se pega directo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Exportar el JSON y guardar el gancho y el cliffhanger de cada episodio como campos en una hoja, para revisar si se repite el mismo recurso.',
	tool_short_drama_prompt_generator_usecase_3:
		'Si lo que necesitas es la plantilla genérica de cuatro bloques y no los campos de una serie vertical, usa el generador de plantillas de prompts.',
	tool_short_drama_prompt_generator_usecase_4:
		'Con un proyecto que todavía no se ha estrenado, quédate en el modo local: el texto solo sale de tu navegador si aceptas el aviso de la IA.',
	tool_short_drama_prompt_generator_usecases_title:
		'Cuándo viene bien',
};

export default es;
