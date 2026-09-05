/**
 * i18n tool shard (on-page-seo-checker / es).
 * Español — reescritura independiente orientada a búsqueda local.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_onpage_home_title: 'Auditor SEO On-Page',
	tool_onpage_home_desc:
		'Detecta las etiquetas que frenan tu página en Google: audita title, H1, meta description, canonical, Open Graph y JSON-LD desde tu navegador.',
	tool_onpage_title: 'Auditor SEO On-Page — detecta y corrige etiquetas de la página',
	tool_onpage_description:
		'Revisa title, meta description, H1, canonical, robots, Open Graph y JSON-LD y cómo se ven en Google. Pega URL o HTML sin salir del navegador. Ejemplo: dos H1.',
	tool_onpage_url_tab: 'Obtener URL',
	tool_onpage_html_tab: 'Pegar HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'Comprobar URL',
	tool_onpage_html_ph: 'Pega aquí el HTML del <head> (y un fragmento del body)…',
	tool_onpage_check: 'Comprobar página',
	tool_onpage_sample: 'Ejemplo',
	tool_onpage_clear: 'Limpiar',
	tool_onpage_copy: 'Copiar',
	tool_onpage_copied: 'Copiado',
	tool_onpage_running: 'Comprobando…',
	tool_onpage_error_prefix: 'Error: ',
	tool_onpage_url_error: 'Introduce una URL http(s) válida.',
	tool_onpage_fetch_failed: 'No se pudo obtener la URL. Puede estar fuera de línea, bloquear bots o no devolver HTML.',
	tool_onpage_no_html: 'Pega primero algo de HTML u obtén una URL.',
	tool_onpage_no_results: 'Aún no hay comprobaciones que mostrar.',
	tool_onpage_summary_title: 'Resumen de la comprobación',
	tool_onpage_summary_n_ok: '{n} correctas',
	tool_onpage_summary_n_warn: '{n} avisos',
	tool_onpage_summary_n_err: '{n} problemas',
	tool_onpage_status_ok: 'Correcto',
	tool_onpage_status_warn: 'Aviso',
	tool_onpage_status_err: 'Problema',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'No se encontró <title>. Añade uno dentro de <head>.',
	tool_onpage_title_ok: 'Title de {n} caracteres. Cerca de 50–60 caracteres se muestra bien en los resultados.',
	tool_onpage_title_long: 'El title tiene {n} caracteres, probablemente se trunque en los resultados. Apunta a unos 50–60 caracteres.',
	tool_onpage_title_short: 'El title solo tiene {n} caracteres. Añade el enfoque concreto de la página para que aporte más.',
	tool_onpage_desc_check: 'Meta description',
	tool_onpage_desc_missing: 'No hay meta description. Google armará entonces el snippet con el texto de la página. Escribe tu propio resumen si quieres decidir esa redacción.',
	tool_onpage_desc_ok: 'Descripción de {n} caracteres. El rango de 140–160 caracteres se ve bien en la mayoría de los snippets.',
	tool_onpage_desc_long: 'La descripción tiene {n} caracteres; los snippets suelen cortar alrededor de 160.',
	tool_onpage_desc_short: 'La descripción solo tiene {n} caracteres. Aprovecha el espacio para resumir lo que ofrece la página.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'No se encontró H1. Añade un encabezado principal que diga el tema de la página: de él dependen los lectores de pantalla y el título del snippet.',
	tool_onpage_h1_multiple: 'Se encontraron {n} H1. Google posiciona páginas con cualquier cantidad de H1, así que esto no es una penalización. Aun así, un H1 con secciones H2–H6 se sigue mejor con lector de pantalla.',
	tool_onpage_h1_ok: 'Hay un H1 y está dentro de <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'No hay canonical. Añade <link rel="canonical"> cuando el mismo contenido se alcanza por varias URLs.',
	tool_onpage_canonical_ok: 'Se encontró un canonical autoreferente.',
	tool_onpage_canonical_other: 'El canonical apunta a otra URL, con lo que declaras esta página como copia de aquella. Mantenlo solo si es cierto; el canonical es una pista, así que Google todavía puede elegir otra URL.',
	tool_onpage_robots_check: 'Robots meta',
	tool_onpage_robots_missing: 'Sin robots meta. El valor por defecto es index,follow, correcto para la mayoría de páginas públicas.',
	tool_onpage_robots_noindex: 'La página fija noindex y no aparecerá en Google. Elimínalo cuando la página deba indexarse.',
	tool_onpage_robots_ok: 'El robots meta permite indexar y seguir enlaces.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'No hay etiquetas og:. Añade og:title, og:description y og:image para las vistas previas al compartir.',
	tool_onpage_og_partial: 'Faltan {n} campos og: obligatorios. Asegúrate de que og:title, og:description y og:image estén presentes.',
	tool_onpage_og_ok: 'og:title, og:description y og:image están presentes.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'No hay datos estructurados JSON-LD. Considera añadir marcado schema.org cuando describa contenido visible.',
	tool_onpage_jsonld_invalid: 'Un bloque JSON-LD no pudo parsearse como JSON. Revisa los errores de sintaxis.',
	tool_onpage_jsonld_ok: 'Se encontraron {n} bloques JSON-LD. Mantén los datos estructurados acordes a lo que ve el visitante.',
	tool_onpage_mixed_check: 'Contenido mixto',
	tool_onpage_mixed_none: 'No se hallaron referencias http:// en un contexto https.',
	tool_onpage_mixed_found: 'Se hallaron {n} referencias http://. Los navegadores bloquean el contenido mixto; sirve esos recursos por https.',
	tool_onpage_render_check: 'Bloqueo de renderizado',
	tool_onpage_render_none: 'No se detectaron hojas de estilo ni scripts que bloqueen visiblemente el renderizado.',
	tool_onpage_render_found: '{n} <link rel="stylesheet"> sin media en <head>. Aplica CSS crítico en línea o difiere la carga para mejorar el LCP.',
	tool_onpage_unknown: 'No se pudo determinar: {label}',
	tool_onpage_how_title: 'Cómo funciona',
	tool_onpage_how_body:
		'El verificador analiza el marcado que pegas (o el HTML obtenido de una URL) y evalúa una lista fija de comprobaciones SEO on-page. Cada comprobación lee un tipo de etiqueta: title, meta description, H1, canonical, robots meta, campos Open Graph, bloques JSON-LD, contenido mixto y recursos que bloquean el renderizado. El modo pegar ocurre del todo en tu navegador; el modo URL obtiene la página una vez a través de nuestro worker y no la almacena.',
	tool_onpage_how_item_1: 'Quédate en Pegar HTML o cambia a Obtener URL para una página en vivo.',
	tool_onpage_how_item_2: 'Pega el markup o introduce una URL https.',
	tool_onpage_how_item_3: 'Haz clic en Comprobar página (o Ejemplo para un documento demo).',
	tool_onpage_how_item_4: 'Revisa cada estado y corrige las etiquetas señaladas.',
	tool_onpage_rules_title: 'Reglas que siguen las comprobaciones',
	tool_onpage_rules_body:
		'Con qué compara cada comprobación y hasta qué punto el criterio es firme. El comportamiento de las etiquetas (robots, canonical, contenido mixto) sigue a Google Search Central y a la especificación HTML; los consejos de longitud y de encabezados son heurísticas de visualización y legibilidad, no reglas de posicionamiento.',
	tool_onpage_rules_item_1:
		'Title: una página debe tener un <title> descriptivo. Google puede reescribirlo, pero un título conciso cerca de 50–60 caracteres suele mostrarse bien.',
	tool_onpage_rules_item_2:
		'H1: la página necesita un encabezado que exprese su tema. Google no tiene un número ideal de encabezados ni penaliza los H1 de más, así que varios H1 se marcan solo por claridad del esquema y accesibilidad.',
	tool_onpage_rules_item_3:
		'Canonical: <link rel="canonical"> en <head> es una pista sobre la URL preferida entre duplicados, no una directiva. Google la sopesa junto con redirecciones, sitemaps y enlaces internos antes de decidir.',
	tool_onpage_rules_item_4:
		'Contenido mixto: una página https que referencia recursos http:// es bloqueada por los navegadores. Esta comprobación los lista como avisos.',
	tool_onpage_rules_item_5:
		'Bloqueo de renderizado: una hoja de estilo en <head> sin atributo media bloquea el renderizado. Esta comprobación es heurística y no mide tiempos reales.',
	tool_onpage_example_title: 'Ejemplo',
	tool_onpage_example:
		'La entrada de ejemplo es una página con un title de 71 caracteres, sin meta description, dos H1, un canonical a otra URL, un og:image, un bloque JSON-LD válido y una imagen http://. El verificador reporta el title como probable truncado, el H1 como aviso, el canonical como no autoreferente y el contenido mixto como aviso, igual que muestra la herramienta al cargar el ejemplo.',
	tool_onpage_usecases_title: 'Buenos usos',
	tool_onpage_usecase_1:
		'Antes de un rediseño o relanzamiento: pasa la misma página por el verificador y corrige en una pasada los problemas reportados.',
	tool_onpage_usecase_2:
		'Entrega de plantillas: cuando recibes HTML de una agencia o un constructor de páginas, verifica las etiquetas head en lugar de confiar en la exportación.',
	tool_onpage_usecase_3:
		'Actualizaciones de contenido: tras editar en el CMS, confirma que title, description y canonical sigan acordes a la nueva página.',
	tool_onpage_faq_q1: '¿Qué mira un verificador SEO on-page?',
	tool_onpage_faq_a1:
		'Comprueba las etiquetas que la página controla por sí misma: title, meta description, H1, canonical, robots meta, campos Open Graph, datos estructurados JSON-LD, contenido mixto y recursos que bloquean el renderizado. No mide posiciones ni backlinks.',
	tool_onpage_faq_q2: '¿Tener varios H1 perjudica al SEO?',
	tool_onpage_faq_a2:
		'No. Google afirma que no existe un número ideal de encabezados y posiciona páginas con ninguno, con uno o con varios H1. Dejar un único H1 compensa por accesibilidad y por un esquema claro, y aumenta la probabilidad de que Google reutilice tu encabezado como título del snippet.',
	tool_onpage_faq_q3: '¿El canonical tiene que apuntar a sí mismo?',
	tool_onpage_faq_a3:
		'No necesariamente, pero un canonical autoreferente es la señal más clara para una página que debe posicionar por sí misma. Apuntarlo a otra URL declara esta página como duplicado. En ambos casos Google lo toma como una pista y puede quedarse con otra URL.',
	tool_onpage_faq_q4: '¿Por qué el verificador marca los recursos http:// como contenido mixto?',
	tool_onpage_faq_a4:
		'Cuando una página se sirve por https y referencia imágenes, scripts o estilos http://, el navegador bloquea la petición por defecto. Esta comprobación los lista como avisos para que los cambies a https.',
	tool_onpage_faq_q5: '¿La comprobación JSON-LD valida el esquema?',
	tool_onpage_faq_a5:
		'Verifica que los bloques se parseen como JSON válido y recuerda mantener los datos estructurados acordes al contenido visible. No ejecuta un validador schema.org completo.',
	tool_onpage_faq_q6: '¿Mi HTML se sube a algún sitio?',
	tool_onpage_faq_a6:
		'No. Al pegar HTML, el análisis ocurre en tu dispositivo y no se envía nada a un servidor. El modo URL obtiene la página una vez a través de nuestro worker y no la almacena.',
	tool_onpage_references: 'Google Search Central — etiquetas meta; Google Search Central — canonical; MDN — elemento <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Etiquetas meta que entiende Google',
	tool_onpage_ref_canonical_label: 'Search Central — URLs canónicas',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: el elemento de metadatos',
};

export default es;
