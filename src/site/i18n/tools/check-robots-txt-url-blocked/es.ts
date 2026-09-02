/**
 * Fragmento i18n (check-robots-txt-url-blocked / es).
 * Escena: pegar URL → Worker obtiene /robots.txt → informar si está bloqueada.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'Comprobar URL en robots.txt',
	tool_check_robots_txt_url_blocked_home_desc:
		'Pega la URL de una página y comprueba si robots.txt la bloquea para Googlebot u otros bots.',
	tool_check_robots_txt_url_blocked_desc:
		'Pega la URL de una página y comprueba si robots.txt la bloquea para Googlebot u otros bots.',
	tool_check_robots_txt_url_blocked_title: 'Comprobar si una URL está bloqueada por robots.txt',
	tool_check_robots_txt_url_blocked_description:
		'Pega una URL y comprueba online si robots.txt bloquea esa ruta para Googlebot, *, Bingbot o GPTBot. Fetch en el edge con la regla coincidente. Ejemplo: /admin.',
	tool_check_robots_txt_url_blocked_url_label: 'URL de la página',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'Agente',
	tool_check_robots_txt_url_blocked_check: 'Comprobar',
	tool_check_robots_txt_url_blocked_sample: 'Ejemplo',
	tool_check_robots_txt_url_blocked_clear: 'Limpiar',
	tool_check_robots_txt_url_blocked_running: 'Obteniendo robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'Introduce una URL http(s) válida con la ruta que te importa.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Error: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'No se pudo obtener robots.txt. El host puede estar caído, bloquear bots o rechazar la petición.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'La URL y el dominio se envían a nuestro Worker para pedir /robots.txt. No los guardamos como base de datos de producto.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Permitida',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Bloqueada',
	tool_check_robots_txt_url_blocked_result_matched: 'Regla coincidente',
	tool_check_robots_txt_url_blocked_result_matched_none: 'Sin Allow/Disallow (se trata como permitida)',
	tool_check_robots_txt_url_blocked_result_http_status: 'Estado HTTP de robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'Ruta evaluada',
	tool_check_robots_txt_url_blocked_result_ua: 'Agente usado',
	tool_check_robots_txt_url_blocked_result_robots_url: 'URL de robots.txt',
	tool_check_robots_txt_url_blocked_result_group: 'Grupo User-agent',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'Sin cuerpo robots.txt (falta o página HTML de error). Se trata como permitir todo.',
	tool_check_robots_txt_url_blocked_result_preview: 'Vista previa de robots.txt',
	tool_check_robots_txt_url_blocked_how_title: 'Cómo funciona',
	tool_check_robots_txt_url_blocked_how_body:
		'Responde si, para el crawler elegido, robots.txt permite o bloquea esa ruta. Solo descarga /robots.txt, no el HTML de la página.',
	tool_check_robots_txt_url_blocked_how_item_1: 'Pega la URL completa (la ruta cuenta, no solo el dominio).',
	tool_check_robots_txt_url_blocked_how_item_2: 'Elige el agente (Googlebot por defecto; también *, Bingbot o GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'Pulsa Comprobar y espera a que el Worker obtenga /robots.txt.',
	tool_check_robots_txt_url_blocked_how_item_4: 'Lee Permitida/Bloqueada, la línea coincidente y el estado HTTP.',
	tool_check_robots_txt_url_blocked_how_item_5: 'Revisa la vista previa si necesitas confirmar el grupo aplicado.',
	tool_check_robots_txt_url_blocked_formula_title: 'Reglas de coincidencia',
	tool_check_robots_txt_url_blocked_formula_body:
		'Seguimos la práctica habitual alineada con la documentación de Google y RFC 9309: coincidencia más larga; Allow gana a Disallow a igual longitud.',
	tool_check_robots_txt_url_blocked_formula_item_1:
		'Se elige el grupo cuyo User-agent coincide; si no hay, se usa el grupo *.',
	tool_check_robots_txt_url_blocked_formula_item_2:
		'Entre Allow/Disallow que encajan con la ruta, gana el prefijo más largo.',
	tool_check_robots_txt_url_blocked_formula_item_3:
		'A igual longitud, Allow tiene prioridad sobre Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4:
		'Sin robots.txt o sin reglas se interpreta como permitir todo; igual se muestra el estado HTTP.',
	tool_check_robots_txt_url_blocked_formula_item_5:
		'Solo se pide /robots.txt; hosts privados se rechazan. No sustituye el tester oficial de Search Console.',
	tool_check_robots_txt_url_blocked_example_title: 'Ejemplo',
	tool_check_robots_txt_url_blocked_example:
		'Entrada de ejemplo https://www.bing.com/search con Googlebot. El Worker obtiene https://www.bing.com/robots.txt, evalúa /search e indica Permitida o Bloqueada con la línea Disallow/Allow si existe.',
	tool_check_robots_txt_url_blocked_usecases_title: 'Para qué sirve',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Antes de publicar: confirma que /admin o /staging quedan bloqueados y las páginas públicas siguen rastreadas.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'Probador / validador robots.txt: tras un Disallow, verifica que la URL objetivo realmente encaja.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'Reglas de crawlers IA: elige GPTBot (o *) y comprueba rutas sensibles sin generar el archivo.',
	tool_check_robots_txt_url_blocked_faq_q1: '¿Genera un archivo robots.txt?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'No. Solo comprueba si una URL está bloqueada. Para escribir reglas usa el generador de robots.txt.',
	tool_check_robots_txt_url_blocked_faq_q2: '¿Por qué probar Googlebot y * por separado?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot usa su propio grupo si existe; muchos bots caen en *. Separarlos evita asumir una sola regla para todos.',
	tool_check_robots_txt_url_blocked_faq_q3: '¿Y si robots.txt falta o responde 404?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'La práctica habitual lo trata como permitir todo. La herramienta muestra el estado HTTP para ver el 404 o la redirección.',
	tool_check_robots_txt_url_blocked_faq_q4: '¿Puedo probar crawlers de IA como GPTBot?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Sí: elige GPTBot en la lista. El emparejamiento sigue RFC 9309; el resultado es una evaluación en el edge, no un veredicto oficial.',
	tool_check_robots_txt_url_blocked_faq_q5: '¿Se guarda mi URL?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'La URL/dominio debe llegar al Worker para pedir /robots.txt. No los guardamos como base de datos de producto. Es una herramienta de edge, no “sin subida”.',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default es;
