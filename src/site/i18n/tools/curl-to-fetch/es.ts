/**
 * i18n tool shard (curl-to-fetch / es).
 * H1: curl a fetch — convertir comando curl a JavaScript fetch.
 */
import type { SiteLangDict } from '../../../types';

/** Textos en español. */
const es: SiteLangDict = {
	tool_curl_to_fetch_article:
		'Pega un comando cURL de la documentación o del terminal y obtén un fragmento fetch en JavaScript — método, cabeceras, cuerpo JSON, Basic auth y -G. Todo se analiza en el navegador; no se sube al servidor.',
	tool_curl_to_fetch_clear: 'Limpiar',
	tool_curl_to_fetch_convert: 'Convertir',
	tool_curl_to_fetch_copy: 'Copiar',
	tool_curl_to_fetch_copy_done: 'Copiado',
	tool_curl_to_fetch_copy_empty: 'Nada que copiar — convierte un cURL primero.',
	tool_curl_to_fetch_desc:
		'Convierte cURL a fetch en el navegador — sin subir al servidor; el comando se queda en el dispositivo.',
	tool_curl_to_fetch_description:
		'Pega un comando cURL y obtén fetch en JavaScript — admite método, cabeceras, JSON, Basic auth (-u) y consultas -G. El ejemplo POST JSON carga al abrir. Tu comando no sale del dispositivo ni se sube al servidor.',
	tool_curl_to_fetch_error_empty: 'Pega un comando cURL primero.',
	tool_curl_to_fetch_error_no_url: 'No encontramos URL. Añade https://… o usa --url.',
	tool_curl_to_fetch_error_parse: 'No se pudo analizar este cURL. Revisa comillas y continuaciones.',
	tool_curl_to_fetch_error_unclosed_quote: 'Falta cerrar una comilla — corrígela e inténtalo de nuevo.',
	tool_curl_to_fetch_example:
		'Entrada: curl -X POST … -H "Content-Type: application/json" -d \'{"name":"Ada"}\' → Salida: fetch con method, headers y body.',
	tool_curl_to_fetch_example_title: 'Ejemplo',
	tool_curl_to_fetch_faq_a1: 'No. El análisis ocurre en esta pestaña; no enviamos tu cURL a nuestros servidores.',
	tool_curl_to_fetch_faq_a2:
		'URL, -X, -H, -d, -u, -G, cadenas entre comillas y continuaciones con \\. Flags raros se omiten con aviso.',
	tool_curl_to_fetch_faq_a3: '-G mueve --data a la query de la URL, igual que curl; aquí no hay body.',
	tool_curl_to_fetch_faq_a4: '-u usuario:clave genera Authorization Basic en base64.',
	tool_curl_to_fetch_faq_a5:
		'Esta página genera fetch del navegador. Para axios o Python requests, adapta URL/método/cabeceras manualmente.',
	tool_curl_to_fetch_faq_q1: '¿Se sube mi cURL?',
	tool_curl_to_fetch_faq_q2: '¿Qué flags de curl admite?',
	tool_curl_to_fetch_faq_q3: '¿Qué hace -G aquí?',
	tool_curl_to_fetch_faq_q4: '¿Cómo se trata -u?',
	tool_curl_to_fetch_faq_q5: '¿Puedo obtener axios o Python?',
	tool_curl_to_fetch_how_body: 'Copia cURL de docs o terminal; analizamos flags habituales y mostramos fetch listo para pegar.',
	tool_curl_to_fetch_how_item_1: 'Pega el cURL completo (con \\ al final de línea si hace falta).',
	tool_curl_to_fetch_how_item_2: 'Elige fetch o async/await y pulsa Convertir.',
	tool_curl_to_fetch_how_item_3: 'Revisa method, headers y body generados.',
	tool_curl_to_fetch_how_item_4: 'Copia al proyecto; vuelve a convertir si editas el comando.',
	tool_curl_to_fetch_how_title: 'Cómo funciona',
	tool_curl_to_fetch_input_label: 'Comando cURL',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.ejemplo.com/…',
	tool_curl_to_fetch_large_warn: 'Comando grande (>50 KB); puede ir más lento.',
	tool_curl_to_fetch_load_sample: 'Cargar ejemplo',
	tool_curl_to_fetch_output_label: 'Salida fetch JavaScript',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Formato de salida',
	tool_curl_to_fetch_rules_body: 'Cómo mapeamos curl a fetch y qué debes revisar a mano.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST; -d sin -X usa POST salvo con -G.',
	tool_curl_to_fetch_rules_item_2: 'Cada -H entra en headers; se conserva Content-Type.',
	tool_curl_to_fetch_rules_item_3: '-d va a body salvo -G, que lo une a la URL.',
	tool_curl_to_fetch_rules_item_4: 'Cookies, certificados o proxy no se reproducen en fetch del navegador.',
	tool_curl_to_fetch_rules_title: 'Reglas que conviene saber',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Convertido — revisa el snippet fetch abajo.',
	tool_curl_to_fetch_title: 'curl a fetch',
	tool_curl_to_fetch_usecase_1: 'Ejemplos curl en OpenAPI — pega uno y arranca tu fetch frontend.',
	tool_curl_to_fetch_usecase_2: 'Depura Bearer: conserva Authorization al pasar a JavaScript.',
	tool_curl_to_fetch_usecase_3: 'Convertir comando curl a fetch al migrar scripts shell.',
	tool_curl_to_fetch_usecases_title: 'Buenos casos',
	tool_curl_to_fetch_warn_unknown_flags: 'Flags no admitidos omitidos: {flags}',
};

export default es;
