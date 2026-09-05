/**
 * i18n tool shard (sketch-prompt-generator / es).
 * H1: Generador de prompts Sketch.app (app de diseño Mac, no boceto a lápiz).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Arma prompts listos para pegar que indiquen a ChatGPT, Gemini, Claude o DeepSeek cómo operar Sketch.app: Artboards, Symbols, estilos compartidos y exportación. Completa los campos y copia Markdown o JSON. Por defecto el prompt se arma en tu navegador; solo al pulsar Ampliar o Pulir se envía el borrador actual a Cloudflare Workers AI (con Turnstile y límites de uso), y su respuesta reemplaza por completo el bloque de salida.',
	tool_sketch_prompt_generator_build: 'Generar prompt',
	tool_sketch_prompt_generator_clear: 'Limpiar',
	tool_sketch_prompt_generator_copy: 'Copiar',
	tool_sketch_prompt_generator_desc:
		'Generador de prompts Sketch.app — arma Artboards, Symbols y pasos de exportación en el navegador; Ampliar/Pulir opcional con Cloudflare AI (Turnstile).',
	tool_sketch_prompt_generator_description:
		'Generador de prompts Sketch.app — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: rellena objetivo, Artboards, Symbols y exportación, y el navegador ensambla un prompt estructurado con los pasos de diseño en Sketch.app. Al abrir ya corre un ejemplo editable; después puedes Ampliar o Pulir con Cloudflare Workers AI (requiere Turnstile y tiene cuota). Markdown por defecto; JSON para pipelines.',
	tool_sketch_prompt_generator_download: 'Descargar',
	tool_sketch_prompt_generator_empty: 'Rellena al menos un campo antes de generar.',
	tool_sketch_prompt_generator_example:
		'Entrada: Objetivo = pantalla de login en Sketch.app; Artboards = iPhone 14 390×844; Symbols = Button/Primary + Input; Exportación = PNG 1x/2x/3x + PDF. Salida (Markdown): ## Rol → asistente de Sketch.app; ## Tarea → checklist numerada.',
	tool_sketch_prompt_generator_example_title: 'Ejemplo',
	tool_sketch_prompt_generator_faq_a1:
		'El ensamblado local corre en esta pestaña: no se sube nada por defecto. Expand/Polish opcional solo envía el texto de ese clic a Cloudflare Workers AI, no a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_sketch_prompt_generator_faq_a2:
		'El modo local solo formatea campos aquí. Expand/Polish usa Cloudflare Workers AI tras Turnstile: no llama APIs de chat ni controla Sketch.app a distancia.',
	tool_sketch_prompt_generator_faq_a3:
		'El constructor de plantillas Prompt cubre plantillas genéricas. Esta página se centra en operaciones de Sketch.app: objetivo, Artboards, Symbols/estilos y exportación.',
	tool_sketch_prompt_generator_faq_a4:
		'No. Midjourney apunta a estilos de imagen raster. Aquí el prompt guía Sketch.app (software de diseño en Mac). Para bocetos a lápiz o line-art, usa Midjourney prompt builder.',
	tool_sketch_prompt_generator_faq_a5:
		'Sí. Completa Turnstile en el panel de IA opcional antes de Expand o Polish. Sin token válido, los botones de IA fallan y el modo local sigue funcionando.',
	tool_sketch_prompt_generator_faq_a6: 'Sí. El chip JSON emite campos estructurados más el prompt ensamblado.',
	tool_sketch_prompt_generator_faq_a7:
		'Sí. Copia el prompt a ChatGPT, Gemini, Claude o DeepSeek para que el chat te guíe por menús de Sketch.app. Solo formateamos texto; no ejecutamos Sketch.',
	tool_sketch_prompt_generator_faq_a8:
		'En local todo se formatea en esta pestaña y no sale nada. Ampliar/Pulir manda el borrador a Cloudflare Workers AI (Turnstile y cuota diaria) y su respuesta reemplaza entero el bloque de salida. Si falla o se agota la cuota, sigue en local.',
	tool_sketch_prompt_generator_faq_q1: '¿Se sube mi prompt?',
	tool_sketch_prompt_generator_faq_q2: '¿Llama a ChatGPT o controla Sketch.app a distancia?',
	tool_sketch_prompt_generator_faq_q3: '¿En qué se diferencia del constructor de plantillas Prompt?',
	tool_sketch_prompt_generator_faq_q4: '¿Sirve para boceto a lápiz o prompts Midjourney?',
	tool_sketch_prompt_generator_faq_q5: '¿Por qué Turnstile para la IA opcional?',
	tool_sketch_prompt_generator_faq_q6: '¿Puedo obtener JSON?',
	tool_sketch_prompt_generator_faq_q7: '¿Funciona con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_sketch_prompt_generator_faq_q8: '¿Qué diferencia hay entre local e IA opcional de Cloudflare?',
	tool_sketch_prompt_generator_ai_expand: 'Ampliar con IA',
	tool_sketch_prompt_generator_ai_polish: 'Pulir con IA',
	tool_sketch_prompt_generator_ai_panel_label: 'IA opcional de Cloudflare (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: '¿Enviar texto a Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Este paso opcional envía el borrador a Cloudflare Workers AI. No se envía a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores. El ensamblado local sigue disponible sin IA.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Continuar',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Cancelar',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI trabajando…',
	tool_sketch_prompt_generator_ai_done: 'El texto de la IA se escribió entero en la salida. Revísalo antes de copiar.',
	tool_sketch_prompt_generator_ai_err_generic: 'Falló la IA. El prompt local no cambió.',
	tool_sketch_prompt_generator_ai_err_rate: 'Cuota de IA agotada. Usa modo local o prueba mañana (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Completa Turnstile antes de usar la IA.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Formato de salida',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Objetivo / entregable',
	tool_sketch_prompt_generator_goal_ph: 'p. ej. pantalla de login en Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Artboards / páginas',
	tool_sketch_prompt_generator_artboard_ph: 'p. ej. iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbols / estilos / librerías',
	tool_sketch_prompt_generator_symbols_ph: 'p. ej. Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Exportación / entrega',
	tool_sketch_prompt_generator_export_ph: 'p. ej. PNG 1x/2x/3x, revisión PDF…',
	tool_sketch_prompt_generator_how_body:
		'Completa los campos de Sketch.app, genera el prompt en local, opcionalmente Ampliar/Pulir con Turnstile, y pégalo en el chat para que la IA guíe los pasos en Sketch.app.',
	tool_sketch_prompt_generator_how_item_1: 'Al abrir ya se cargó el ejemplo de pantalla de login en Sketch.app.',
	tool_sketch_prompt_generator_how_item_2: 'Edita Objetivo, Artboards, Symbols y Exportación; pulsa Generar prompt o cambia a JSON.',
	tool_sketch_prompt_generator_how_item_3: 'Opcional: completa Turnstile y usa Ampliar o Pulir con Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Copia o descarga, pega en el chat y sigue la checklist de Sketch.app.',
	tool_sketch_prompt_generator_how_title: 'Cómo funciona',
	tool_sketch_prompt_generator_load_sample: 'Cargar ejemplo',
	tool_sketch_prompt_generator_platforms_lead:
		'Pensado para ChatGPT, Gemini, Claude y DeepSeek: copia el prompt para que el chat oriente operaciones en Sketch.app.',
	tool_sketch_prompt_generator_result_label: 'Salida del prompt',
	tool_sketch_prompt_generator_rules_body:
		'Los campos reflejan trabajo en Sketch.app. El ensamblado local es el predeterminado; la IA opcional exige Turnstile y tiene límite. Esta página no abre Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'Los campos estructurados pasan a Role/Task/Constraints/Output en Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'Markdown por defecto; JSON en el mismo lienzo.',
	tool_sketch_prompt_generator_rules_item_3: 'La IA opcional no sustituye el modo local: revisa antes de copiar.',
	tool_sketch_prompt_generator_rules_item_4:
		'Solo ensambla texto; no ejecuta Sketch.app, plugins, Midjourney ni APIs de chat en local.',
	tool_sketch_prompt_generator_rules_title: 'Reglas esperadas',
	tool_sketch_prompt_generator_sec_constraints: 'Restricciones',
	tool_sketch_prompt_generator_sec_output: 'Formato de salida',
	tool_sketch_prompt_generator_sec_role: 'Rol',
	tool_sketch_prompt_generator_sec_task: 'Tarea',
	tool_sketch_prompt_generator_status_copied: 'Copiado al portapapeles.',
	tool_sketch_prompt_generator_status_done: 'Prompt listo.',
	tool_sketch_prompt_generator_status_working: 'Generando prompt…',
	tool_sketch_prompt_generator_title: 'Generador de prompts Sketch.app — Local + IA opcional',
	tool_sketch_prompt_generator_usecase_1:
		'Pasa tamaños de Artboard y nombres de Symbol al chat del equipo para reconstruir una pantalla en Sketch.app.',
	tool_sketch_prompt_generator_usecase_2: 'Prepara checklists de exportación (PNG, PDF) antes del QA de diseño.',
	tool_sketch_prompt_generator_usecase_3:
		'Compara con Product design prompt builder si necesitas persona/wireframe en lugar de menús de Sketch.app.',
	tool_sketch_prompt_generator_usecase_4: 'Mantén borradores sensibles en local; activa IA solo tras el consentimiento.',
	tool_sketch_prompt_generator_usecases_title: 'Buenos encajes',
};

export default es;
