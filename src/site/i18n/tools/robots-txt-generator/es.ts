/**
 * i18n tool shard (robots-txt-generator / es).
 * Spanish locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_robots_home_title: 'Generador de robots.txt',
	tool_robots_home_desc:
		'Controla cómo rastrean tu sitio los buscadores con un robots.txt válido: permisos, bloqueos y rastreadores de IA, en tu navegador.',
	tool_robots_title: 'Generador de robots.txt — gestiona permisos y bloqueos de rastreadores de IA',
	tool_robots_description:
		'Un robots.txt malo puede ocultar el sitio. Crea Allow, Disallow y reglas de IA en el navegador y copia. Ejemplo: bloquear GPTBot, dejar Googlebot.',
	tool_robots_generate: 'Generar',
	tool_robots_sample: 'Ejemplo',
	tool_robots_clear: 'Limpiar',
	tool_robots_copy: 'Copiar',
	tool_robots_copied: 'Copiado',
	tool_robots_agents_label: 'User-agents',
	tool_robots_agents_hint: 'Marca los rastreadores que quieras incluir y añade rutas para cada grupo.',
	tool_robots_include: 'Incluir este user-agent',
	tool_robots_agent_add: 'Añadir agente personalizado',
	tool_robots_agent_remove: 'Quitar agente',
	tool_robots_allow_label: 'Rutas Allow (una por línea)',
	tool_robots_disallow_label: 'Rutas Disallow (una por línea)',
	tool_robots_sitemap_label: 'URL de Sitemap (opcional)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Descargar',
	tool_robots_empty_agent: 'Elige o añade primero un user-agent.',
	tool_robots_owner_of: 'Propietario: {owner}',
	tool_robots_how_title: 'Cómo funciona',
	tool_robots_how_body:
		'Selecciona los rastreadores objetivo, añade rutas Allow y Disallow para cada grupo, agrega opcionalmente una línea Sitemap y pulsa Generar. La página ensambla el archivo de texto siguiendo el formato de RFC 9309: una línea User-agent por grupo, sus líneas Allow/Disallow debajo, una línea en blanco entre grupos y la línea Sitemap al final. Copia el resultado a la raíz de tu sitio en /robots.txt.',
	tool_robots_rules_title: 'Reglas de sintaxis importantes',
	tool_robots_rules_body:
		'Las reglas de robots.txt son prefijos de ruta, no patrones, y un rastreador obedece un solo grupo: aquel cuyo User-agent coincide de forma más específica. Estas son las reglas que sigue este generador.',
	tool_robots_rules_item_1:
		'Elección de grupo: el rastreador obedece al grupo con la coincidencia de User-agent más específica; su propio nombre gana a *, y el orden en el archivo no decide. Varias líneas User-agent del mismo rastreador se fusionan en un único grupo (RFC 9309).',
	tool_robots_rules_item_2:
		'Coincidencia por prefijo: Allow y Disallow coinciden con prefijos de ruta, no subcadenas ni regex. Solo * y $ son especiales (RFC 9309).',
	tool_robots_rules_item_3:
		'Prioridad dentro del grupo: gana la ruta coincidente más larga y, cuando un Allow y un Disallow coinciden con la misma longitud, gana Allow. Así, Disallow: /admin/ junto a Allow: /admin/public/ deja rastreable la subcarpeta pública.',
	tool_robots_rules_item_4:
		'Sitio completo y línea Sitemap: Disallow: / bloquea a ese agente en todas las URLs, mientras que un Disallow con valor vacío lo permite todo. Sitemap: es una extensión ajena a RFC 9309, no distingue mayúsculas y puede ir en cualquier lugar; este generador la coloca al final.',
	tool_robots_example_title: 'Ejemplo',
	tool_robots_example:
		'Muestra: Googlebot con Allow: / (totalmente habilitado), GPTBot con Disallow: / (bloqueado) y una línea Sitemap apuntando a /sitemap.xml. La salida refleja este formato: un grupo por rastreador, línea en blanco entre grupos y sitemap al final.',
	tool_robots_usecases_title: 'Para qué sirve',
	tool_robots_usecase_1:
		'Sitios nuevos: genera un robots.txt inicial que mantiene habilitados los buscadores y oculta rutas de staging privadas.',
	tool_robots_usecase_2:
		'Control de rastreadores de IA: da a GPTBot, ClaudeBot, Google-Extended, CCBot o PerplexityBot su propio grupo con Disallow mientras Googlebot sigue rastreando. Ten en cuenta que Google-Extended cubre Gemini y el grounding de Vertex AI: las vistas creadas por IA en la Búsqueda siguen usando Googlebot.',
	tool_robots_usecase_3:
		'Descubrimiento: combina robots.txt con una línea Sitemap para que los rastreadores encuentren tu sitemap.',
	tool_robots_faq_q1: '¿Qué pasa si escribo Disallow: / ?',
	tool_robots_faq_a1:
		'Le indica a ese rastreador que no busque ninguna URL bajo la raíz del sitio. Si Googlebot recibe Disallow: /, tus páginas pueden desaparecer de Google Search. Ojo: Disallow frena el rastreo, no la indexación; una URL bloqueada a la que otros enlazan todavía puede listarse sin descripción, así que para sacarla del índice deja la página rastreable y añade noindex. Para una ruta de staging usa Disallow: /private/ en su lugar.',
	tool_robots_faq_q2: '¿Cómo bloqueo rastreadores de IA como GPTBot?',
	tool_robots_faq_a2:
		'Crea un grupo con el User-agent del rastreador (por ejemplo GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) y añade Disallow: /. Consulta la documentación oficial del rastreador, ya que los rastreadores de IA actualizan sus user-agents y rangos IP de vez en cuando.',
	tool_robots_faq_q3: '¿Dónde debe ir la línea Sitemap?',
	tool_robots_faq_a3:
		'La posición no afecta cómo la leen los buscadores, pero la convención la sitúa al final del archivo. El generador la añade al final cuando proporcionas una URL.',
	tool_robots_faq_q4: '¿Mi robots.txt se sube a algún sitio?',
	tool_robots_faq_a4:
		'No. El archivo se genera en tu navegador y nunca se envía a un servidor. Cierra la pestaña y no queda nada guardado.',
	tool_robots_references: 'RFC 9309 Protocolo de exclusión de robots; Google Search Central — robots.txt; Google Search Central — Gestionar rastreadores de IA.',
	tool_robots_ref_rfc_label: 'RFC 9309 — Protocolo de exclusión de robots',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — Rastreadores de IA',
};

export default es;
