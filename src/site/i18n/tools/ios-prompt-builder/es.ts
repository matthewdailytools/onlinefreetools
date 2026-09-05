/**
 * i18n tool shard (ios-prompt-builder / es).
 * Búsquedas locales: «generador de prompts iOS», «prompt para ChatGPT desarrollo iOS». Palabra principal en el H1; secundarias (stack Swift, SwiftUI, HIG, VoiceOver, salida JSON) en description, FAQ y casos de uso.
 * Límites reales: montaje en el navegador sin peticiones; Ampliar/Pulir opcional envía el borrador a Cloudflare Workers AI (Turnstile, cuota) y su respuesta reemplaza todo el área de resultado.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'Convierte un requisito de iOS en un prompt listo para pegar: describe la función, el stack de Swift, la pantalla en SwiftUI y las reglas de accesibilidad de las HIG, y la página arma el texto en Markdown o JSON dentro del navegador. Por defecto no se envía ninguna petición; solo al pulsar Ampliar o Pulir el borrador actual va a Cloudflare Workers AI (hace falta Turnstile y el uso está limitado).',
	tool_ios_prompt_builder_build:
		'Generar prompt',
	tool_ios_prompt_builder_clear:
		'Vaciar',
	tool_ios_prompt_builder_copy:
		'Copiar',
	tool_ios_prompt_builder_desc:
		'Generador de prompts para iOS: rellena función, stack de Swift, pantalla en SwiftUI y reglas de las HIG; el texto se arma en el navegador como Markdown o JSON, con IA opcional.',
	tool_ios_prompt_builder_description:
		'Generador de prompts para iOS: escribe la función, el stack (Swift 5.10, SwiftUI, iOS 17+, SwiftData), la pantalla y las reglas de accesibilidad de las HIG, y la página lo ordena en bloques Role / Task / Constraints / Output en Markdown o JSON sin salir del navegador. Ejemplo: «tendencia semanal de pasos de HealthKit y banda de pulso en reposo» sale con Dynamic Type hasta XXL y etiquetas VoiceOver en los puntos del gráfico. Con «Cargar ejemplo» rellenas el preajuste y ves el prompt montado; Ampliar o Pulir con Cloudflare Workers AI es opcional (Turnstile, cuota diaria).',
	tool_ios_prompt_builder_download:
		'Descargar',
	tool_ios_prompt_builder_empty:
		'Rellena al menos un campo antes de generar.',
	tool_ios_prompt_builder_example:
		'Entrada: Función = tendencia semanal de pasos de HealthKit y banda de pulso en reposo, con permisos explicados en lenguaje llano; Stack = Swift 5.10, SwiftUI, iOS 17+, async/await, caché con SwiftData; Pantalla = NavigationStack y Charts, hoja de permisos antes de la primera consulta; HIG = Dynamic Type hasta XXL, etiquetas VoiceOver en los puntos del gráfico, sin force-unwrap. Salida (Markdown): ## Role con el perfil de ingeniera iOS sénior y ## Task con una línea por campo.',
	tool_ios_prompt_builder_example_title:
		'Ejemplo',
	tool_ios_prompt_builder_faq_a1:
		'Por defecto no. Rellenar los campos y pulsar Generar prompt ocurre solo en esta pestaña, sin ninguna petición. El borrador únicamente sale cuando pulsas Ampliar o Pulir, y entonces va a Cloudflare Workers AI; desde nuestros servidores no se reenvía a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_ios_prompt_builder_faq_a2:
		'No. El modo local solo maqueta lo que escribes en los bloques Role / Task / Constraints / Output. La IA opcional pasa por Cloudflare Workers AI después de Turnstile, no por las API de ChatGPT, Gemini, Claude o DeepSeek.',
	tool_ios_prompt_builder_faq_a3:
		'El generador de plantillas de prompts entrega los cuatro bloques genéricos Role / Task / Constraints / Output y sirve para cualquier tema. Aquí los campos ya son los de un proyecto iOS: función, stack de Swift, navegación y gráficos en SwiftUI, y las reglas de las HIG sobre Dynamic Type y VoiceOver, con su propio ejemplo y sus límites.',
	tool_ios_prompt_builder_faq_a4:
		'Sí. Completa el widget de Turnstile del panel de IA antes de pulsar Ampliar o Pulir. Sin un token válido los botones devuelven error y el modo local sigue funcionando igual.',
	tool_ios_prompt_builder_faq_a5:
		'Sí. Cambia el formato de salida a JSON y obtendrás los campos por separado más el prompt ya montado, útil para casos de XCTest o para un pipeline de configuración.',
	tool_ios_prompt_builder_faq_a6:
		'Sí. El resultado es texto plano: cópialo y pégalo en ChatGPT, Gemini, Claude o DeepSeek. La página no llama a esas API en tu nombre.',
	tool_ios_prompt_builder_faq_q1:
		'¿Se sube lo que escribo?',
	tool_ios_prompt_builder_faq_q2:
		'¿La página llama a ChatGPT u otras API de modelos?',
	tool_ios_prompt_builder_faq_q3:
		'¿En qué se diferencia del generador de plantillas de prompts?',
	tool_ios_prompt_builder_faq_q4:
		'¿Por qué la IA opcional pide Turnstile?',
	tool_ios_prompt_builder_faq_q5:
		'¿Puedo exportar en JSON?',
	tool_ios_prompt_builder_faq_q6:
		'¿Sirve con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_ios_prompt_builder_faq_q7:
		'¿Qué cambia entre el modo local y la IA de Cloudflare?',
	tool_ios_prompt_builder_faq_a7:
		'El modo local solo ordena tus campos, no hace peticiones y no tiene cuota. Ampliar o Pulir envía el borrador a Cloudflare Workers AI (Turnstile obligatorio, uso limitado) y el texto que devuelve sustituye por completo el área de resultado: revísalo antes de copiar. Si falla o se agota la cuota, sigue con el modo local.',
	tool_ios_prompt_builder_ai_expand:
		'Ampliar con IA',
	tool_ios_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_ios_prompt_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_ios_prompt_builder_ai_consent_title:
		'¿Enviar el borrador a Cloudflare Workers AI?',
	tool_ios_prompt_builder_ai_consent_body:
		'Este paso es opcional: envía el borrador actual a Cloudflare Workers AI para la inferencia. Desde nuestros servidores no se reenvía a OpenAI, Google, Anthropic ni DeepSeek. Sin IA puedes seguir montando el prompt en el navegador.',
	tool_ios_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_ios_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI está trabajando…',
	tool_ios_prompt_builder_ai_done:
		'El texto de la IA sustituyó el resultado. Revísalo antes de copiar.',
	tool_ios_prompt_builder_ai_err_generic:
		'La IA falló; el resultado no ha cambiado.',
	tool_ios_prompt_builder_ai_err_rate:
		'Cuota de IA agotada. Usa el modo local o vuelve mañana (UTC).',
	tool_ios_prompt_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar la IA.',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'Formato de salida',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'Función / Especificación',
	tool_ios_prompt_builder_feature_spec_ph:
		'Ej.: tendencia de pasos y pulso en reposo…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / Stack técnico',
	tool_ios_prompt_builder_swift_stack_ph:
		'Ej.: Swift 5.10, SwiftUI, iOS 17+, SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / Pantalla',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'Ej.: NavigationStack, Charts, hoja de permisos…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / Accesibilidad',
	tool_ios_prompt_builder_hig_constraints_ph:
		'Ej.: Dynamic Type XXL, VoiceOver, sin force-unwrap…',
	tool_ios_prompt_builder_how_body:
		'Rellena los cuatro campos, deja que la página los monte en Markdown (o JSON) dentro del navegador y, si quieres más detalle, pide una ampliación a Cloudflare AI antes de pegar el prompt en tu chat.',
	tool_ios_prompt_builder_how_item_1:
		'Pulsa Cargar ejemplo para rellenar el preajuste y ver un prompt montado que puedes editar.',
	tool_ios_prompt_builder_how_item_2:
		'Cambia función, stack, pantalla y reglas de las HIG y pulsa Generar prompt; pasa a JSON si necesitas exportar los campos.',
	tool_ios_prompt_builder_how_item_3:
		'Opcional: completa Turnstile y pulsa Ampliar o Pulir; el texto que devuelve la IA reemplaza el resultado.',
	tool_ios_prompt_builder_how_item_4:
		'Copia o descarga el resultado y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_ios_prompt_builder_how_title:
		'Cómo se usa',
	tool_ios_prompt_builder_load_sample:
		'Cargar ejemplo',
	tool_ios_prompt_builder_platforms_lead:
		'El prompt final es texto plano: se pega igual en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_ios_prompt_builder_result_label:
		'Prompt generado',
	tool_ios_prompt_builder_rules_body:
		'La página solo maqueta el requisito: no compila código ni ejecuta Xcode. La IA opcional tiene cuota limitada y exige Turnstile.',
	tool_ios_prompt_builder_rules_item_1:
		'Cada campo cae en un bloque distinto del Markdown: Role, Task, Constraints y Output.',
	tool_ios_prompt_builder_rules_item_2:
		'La salida por defecto es Markdown; el mismo panel puede mostrar JSON con los campos y el prompt montado.',
	tool_ios_prompt_builder_rules_item_3:
		'La IA de Cloudflare no sustituye al modo local: su respuesta ocupa todo el área de resultado, así que revísala antes de copiar.',
	tool_ios_prompt_builder_rules_item_4:
		'Esta herramienta solo arma texto: no compila Swift, no lanza Xcode ni llama por ti a las API de chat.',
	tool_ios_prompt_builder_rules_title:
		'Límites que conviene saber',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'Copiado al portapapeles.',
	tool_ios_prompt_builder_status_done:
		'Prompt listo.',
	tool_ios_prompt_builder_status_working:
		'Generando el prompt…',
	tool_ios_prompt_builder_title:
		'Generador de prompts para iOS — local, con IA opcional',
	tool_ios_prompt_builder_usecase_1:
		'Pasar el requisito que se contó en la revisión de diseño a un prompt que se pueda pegar en el chat del equipo.',
	tool_ios_prompt_builder_usecase_2:
		'Exportar JSON para llevar las reglas de accesibilidad a una lista de comprobación y luego ampliar con Cloudflare AI si hace falta.',
	tool_ios_prompt_builder_usecase_3:
		'Si no necesitas campos de iOS y te vale la plantilla genérica de cuatro bloques, usa el generador de plantillas de prompts.',
	tool_ios_prompt_builder_usecase_4:
		'Redactar en el navegador la descripción de una función aún sin anunciar y decidir después si va a la IA opcional.',
	tool_ios_prompt_builder_usecases_title:
		'Cuándo viene bien',
};

export default es;
