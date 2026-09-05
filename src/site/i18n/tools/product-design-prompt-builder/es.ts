/**
 * i18n tool shard (product-design-prompt-builder / es).
 * Búsquedas locales: «generador de prompts de diseño de producto», «prompt para brief de UX». Palabra principal en el H1; secundarias (persona, alcance del wireframe, design tokens, WCAG AA, salida JSON) en description, FAQ y casos de uso.
 * Límites reales: montaje en el navegador sin peticiones; Ampliar/Pulir opcional envía el borrador a Cloudflare Workers AI (Turnstile, cuota) y su respuesta reemplaza todo el área de resultado.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Convierte un encargo de diseño de producto en un prompt listo para pegar: describe a la persona usuaria, el problema, el alcance del wireframe y los design tokens, y la página arma el texto en Markdown o JSON dentro del navegador. Por defecto no se envía ninguna petición; solo al pulsar Ampliar o Pulir el borrador actual va a Cloudflare Workers AI (hace falta Turnstile y el uso está limitado).',
	tool_product_design_prompt_builder_build:
		'Generar prompt',
	tool_product_design_prompt_builder_clear:
		'Vaciar',
	tool_product_design_prompt_builder_copy:
		'Copiar',
	tool_product_design_prompt_builder_desc:
		'Generador de prompts de diseño de producto: rellena persona, problema, alcance del wireframe y design tokens; el texto se arma en el navegador como Markdown o JSON, con IA opcional.',
	tool_product_design_prompt_builder_description:
		'Generador de prompts de diseño de producto: describe a la persona usuaria, el problema, el alcance del wireframe (cuántas pantallas y cuáles) y los design tokens (rejilla, color principal, contraste), y la página lo ordena en bloques Role / Task / Constraints / Output en Markdown o JSON sin salir del navegador. Ejemplo: «madres y padres con custodia compartida que necesitan ver la semana de entregas» sale como un alcance de tres pantallas con rejilla de 8 pt y contraste WCAG AA. Con «Cargar ejemplo» rellenas el preajuste y ves el prompt montado; Ampliar o Pulir con Cloudflare Workers AI es opcional (Turnstile, cuota diaria).',
	tool_product_design_prompt_builder_download:
		'Descargar',
	tool_product_design_prompt_builder_empty:
		'Rellena al menos un campo antes de generar.',
	tool_product_design_prompt_builder_example:
		'Entrada: Persona = madres y padres con custodia compartida por semanas, uno organiza y el otro recoge, con Android y iPhone mezclados; Problema = las agendas son ruidosas y quieren ver la semana de entregas de un vistazo con notas, sin obligar a vincular cuentas; Wireframe = tira semanal con leyenda de custodia, hoja de detalle con lista de entrega e invitación por SMS (3 pantallas); Tokens = rejilla de 8 pt, principal #2563eb, #059669 para entregas confirmadas, contraste WCAG AA en los pies de texto. Salida (Markdown): ## Role define a un coach de prompts de UX para briefs de wireframe y ## Task recoge una línea por campo.',
	tool_product_design_prompt_builder_example_title:
		'Ejemplo',
	tool_product_design_prompt_builder_faq_a1:
		'Por defecto no. Rellenar los campos y pulsar Generar prompt ocurre solo en esta pestaña, sin ninguna petición. El borrador únicamente sale cuando pulsas Ampliar o Pulir, y entonces va a Cloudflare Workers AI; desde nuestros servidores no se reenvía a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_product_design_prompt_builder_faq_a2:
		'No. El modo local solo maqueta lo que escribes en los bloques Role / Task / Constraints / Output. La IA opcional pasa por Cloudflare Workers AI después de Turnstile, no por las API de ChatGPT, Gemini, Claude o DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'El generador de plantillas de prompts entrega los cuatro bloques genéricos Role / Task / Constraints / Output y sirve para cualquier tema. Aquí los campos son los de un brief de UX: persona usuaria, problema, cuántas pantallas cubre el wireframe y qué design tokens y contraste hay que respetar, con su propio ejemplo y sus límites.',
	tool_product_design_prompt_builder_faq_a4:
		'Sí. Completa el widget de Turnstile del panel de IA antes de pulsar Ampliar o Pulir. Sin un token válido los botones devuelven error y el modo local sigue funcionando igual.',
	tool_product_design_prompt_builder_faq_a5:
		'Sí. Cambia el formato de salida a JSON y obtendrás los campos por separado más el prompt ya montado, útil para guardarlo en el repositorio de requisitos o en una plantilla de revisión de diseño.',
	tool_product_design_prompt_builder_faq_a6:
		'Sí. El resultado es texto plano: cópialo y pégalo en ChatGPT, Gemini, Claude o DeepSeek. La página no llama a esas API en tu nombre.',
	tool_product_design_prompt_builder_faq_q1:
		'¿Se sube lo que escribo?',
	tool_product_design_prompt_builder_faq_q2:
		'¿La página llama a ChatGPT u otras API de modelos?',
	tool_product_design_prompt_builder_faq_q3:
		'¿En qué se diferencia del generador de plantillas de prompts?',
	tool_product_design_prompt_builder_faq_q4:
		'¿Por qué la IA opcional pide Turnstile?',
	tool_product_design_prompt_builder_faq_q5:
		'¿Puedo exportar en JSON?',
	tool_product_design_prompt_builder_faq_q6:
		'¿Sirve con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'¿Qué cambia entre el modo local y la IA de Cloudflare?',
	tool_product_design_prompt_builder_faq_a7:
		'El modo local solo ordena tus campos, no hace peticiones y no tiene cuota. Ampliar o Pulir envía el borrador a Cloudflare Workers AI (Turnstile obligatorio, uso limitado) y el texto que devuelve sustituye por completo el área de resultado: revísalo antes de copiar. Si falla o se agota la cuota, sigue con el modo local.',
	tool_product_design_prompt_builder_ai_expand:
		'Ampliar con IA',
	tool_product_design_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_product_design_prompt_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'¿Enviar el borrador a Cloudflare Workers AI?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Este paso es opcional: envía el borrador actual a Cloudflare Workers AI para la inferencia. Desde nuestros servidores no se reenvía a OpenAI, Google, Anthropic ni DeepSeek. Sin IA puedes seguir montando el prompt en el navegador.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI está trabajando…',
	tool_product_design_prompt_builder_ai_done:
		'El texto de la IA sustituyó el resultado. Revísalo antes de copiar.',
	tool_product_design_prompt_builder_ai_err_generic:
		'La IA falló; el resultado no ha cambiado.',
	tool_product_design_prompt_builder_ai_err_rate:
		'Cuota de IA agotada. Usa el modo local o vuelve mañana (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar la IA.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Formato de salida',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Persona / Perfil de usuario',
	tool_product_design_prompt_builder_persona_ph:
		'Ej.: familias con custodia compartida por semanas…',
	tool_product_design_prompt_builder_problem_label:
		'Problema a resolver',
	tool_product_design_prompt_builder_problem_ph:
		'Ej.: agendas ruidosas, quieren ver la semana de un vistazo…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Wireframe / Alcance',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'Ej.: tira semanal, hoja de detalle, invitación por SMS…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Diseño / Design tokens',
	tool_product_design_prompt_builder_design_tokens_ph:
		'Ej.: rejilla de 8 pt, principal #2563eb, WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'Rellena los cuatro campos, deja que la página los monte en Markdown (o JSON) dentro del navegador y, si quieres más detalle, pide una ampliación a Cloudflare AI antes de pegar el prompt en tu chat.',
	tool_product_design_prompt_builder_how_item_1:
		'Pulsa Cargar ejemplo para rellenar el preajuste y ver un prompt montado que puedes editar.',
	tool_product_design_prompt_builder_how_item_2:
		'Cambia persona, problema, alcance del wireframe y design tokens y pulsa Generar prompt; pasa a JSON si necesitas exportar los campos.',
	tool_product_design_prompt_builder_how_item_3:
		'Opcional: completa Turnstile y pulsa Ampliar o Pulir; el texto que devuelve la IA reemplaza el resultado.',
	tool_product_design_prompt_builder_how_item_4:
		'Copia o descarga el resultado y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'Cómo se usa',
	tool_product_design_prompt_builder_load_sample:
		'Cargar ejemplo',
	tool_product_design_prompt_builder_platforms_lead:
		'El prompt final es texto plano: se pega igual en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_product_design_prompt_builder_result_label:
		'Prompt generado',
	tool_product_design_prompt_builder_rules_body:
		'La página solo maqueta el encargo: no dibuja wireframes ni exporta archivos de Figma. La IA opcional tiene cuota limitada y exige Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Cada campo cae en un bloque distinto del Markdown: Role, Task, Constraints y Output.',
	tool_product_design_prompt_builder_rules_item_2:
		'La salida por defecto es Markdown; el mismo panel puede mostrar JSON con los campos y el prompt montado.',
	tool_product_design_prompt_builder_rules_item_3:
		'La IA de Cloudflare no sustituye al modo local: su respuesta ocupa todo el área de resultado, así que revísala antes de copiar.',
	tool_product_design_prompt_builder_rules_item_4:
		'Esta herramienta solo arma texto: no genera pantallas, no lee tus archivos de diseño ni llama por ti a las API de chat.',
	tool_product_design_prompt_builder_rules_title:
		'Límites que conviene saber',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'Copiado al portapapeles.',
	tool_product_design_prompt_builder_status_done:
		'Prompt listo.',
	tool_product_design_prompt_builder_status_working:
		'Generando el prompt…',
	tool_product_design_prompt_builder_title:
		'Generador de prompts de diseño de producto — local, con IA opcional',
	tool_product_design_prompt_builder_usecase_1:
		'Pasar el objetivo de diseño que se contó en la reunión de requisitos a un prompt que se pueda pegar en el chat del equipo.',
	tool_product_design_prompt_builder_usecase_2:
		'Exportar JSON para guardar persona y tokens en el repositorio de requisitos y luego ampliar con Cloudflare AI si hace falta.',
	tool_product_design_prompt_builder_usecase_3:
		'Si no necesitas campos de UX y te vale la plantilla genérica de cuatro bloques, usa el generador de plantillas de prompts.',
	tool_product_design_prompt_builder_usecase_4:
		'Redactar en el navegador una idea de producto aún sin publicar y decidir después si va a la IA opcional.',
	tool_product_design_prompt_builder_usecases_title:
		'Cuándo viene bien',
};

export default es;
