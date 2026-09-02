/**
 * Fragmento i18n (find-and-validate-xml-sitemap / es).
 * Escena: introducir sitio → descubrir sitemap → validar XML y muestras de loc (no genera).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'Encontrar y validar sitemap XML',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Descubre el sitemap desde robots.txt o /sitemap.xml y comprueba estructura, tipo y locs de muestra.',
	tool_find_and_validate_xml_sitemap_desc:
		'Descubre el sitemap desde robots.txt o /sitemap.xml y comprueba estructura, tipo y locs de muestra.',
	tool_find_and_validate_xml_sitemap_title: 'Encontrar y validar el sitemap XML',
	tool_find_and_validate_xml_sitemap_description:
		'Introduce la URL del sitio para localizar el sitemap XML con las líneas Sitemap: de robots.txt o /sitemap.xml; valida la estructura, cuenta locs y distingue urlset de sitemapindex. No genera archivos. Ejemplo: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'URL del sitio',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Buscar y validar',
	tool_find_and_validate_xml_sitemap_sample: 'Ejemplo',
	tool_find_and_validate_xml_sitemap_clear: 'Limpiar',
	tool_find_and_validate_xml_sitemap_running: 'Descubriendo y validando sitemaps…',
	tool_find_and_validate_xml_sitemap_url_error: 'Introduce una URL http(s) válida del sitio (origen o portada).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Error: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'No se pudieron obtener candidatos de sitemap. El host puede estar caído, bloquear bots o rechazar la petición.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'La URL y el dominio llegan a nuestro Worker para pedir robots.txt y sitemaps. No los guardamos como base de producto.',
	tool_find_and_validate_xml_sitemap_result_site: 'Origen del sitio',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Candidatos probados',
	tool_find_and_validate_xml_sitemap_result_primary: 'Hallazgo principal',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'Ningún candidato tiene estructura de sitemap válida',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'Estado HTTP',
	tool_find_and_validate_xml_sitemap_col_kind: 'Tipo',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'N.º de loc',
	tool_find_and_validate_xml_sitemap_col_valid: 'Estructura válida',
	tool_find_and_validate_xml_sitemap_col_samples: 'Locs de muestra',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Sí',
	tool_find_and_validate_xml_sitemap_valid_no: 'No',
	tool_find_and_validate_xml_sitemap_empty_findings: 'No hay hallazgos para este sitio.',
	tool_find_and_validate_xml_sitemap_how_title: 'Cómo funciona',
	tool_find_and_validate_xml_sitemap_how_body:
		'Responde una sola pregunta: ¿dónde está el sitemap XML del sitio y parece un urlset o sitemapindex válido? No crea un archivo nuevo.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Escribe el origen o la URL de la portada.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Pulsa Buscar y validar; el Worker lee Sitemap: en robots.txt y prueba /sitemap.xml e índices habituales.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'Revisa en la tabla el tipo raíz, el recuento de URLs y las <loc> de muestra.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Corrige los problemas de XML o descubrimiento antes de IndexNow o Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Reglas de descubrimiento y validación',
	tool_find_and_validate_xml_sitemap_formula_body:
		'Según el protocolo sitemaps.org: XML bien formado con raíz urlset o sitemapindex y entradas <loc> contables.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Orden: directivas Sitemap: de robots.txt, luego /sitemap.xml, /sitemap_index.xml y /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'Estructura válida si la respuesta parece XML de sitemap y el HTTP es correcto.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex lista sitemaps hijos; urlset lista locs de páginas — ambos se muestran.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'Contamos <loc> y mostramos hasta 10 muestras; no rastreamos cada URL listada.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, cuerpos enormes, redirecciones y no-XML pueden fallar. Se rechazan hosts privados.',
	tool_find_and_validate_xml_sitemap_example_title: 'Ejemplo',
	tool_find_and_validate_xml_sitemap_example:
		'Entrada de ejemplo https://www.sitemaps.org/. El Worker prueba Sitemap: en robots.txt y rutas comunes, y muestra estado HTTP, tipo, recuento de loc, muestras y validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'Cuándo ayuda',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Buscador de sitemap: tras migrar el CMS o el CDN, confirma dónde se publica el mapa.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'Comprobador / validador XML: verifica que el archivo está bien formado y si es índice o urlset antes de enviarlo a Search Console.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Revisión rápida de locs: tras regenerar un sitemap grande, mira unas <loc> de muestra sin descargar todo.',
	tool_find_and_validate_xml_sitemap_faq_q1: '¿Es un generador de sitemaps?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'No: solo encuentra y valida sitemaps existentes. Para crear uno desde una lista de URLs usa el generador XML Sitemap.',
	tool_find_and_validate_xml_sitemap_faq_q2: '¿Dónde buscáis el sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'Primero las líneas Sitemap: de robots.txt; luego /sitemap.xml e índices habituales en el mismo host.',
	tool_find_and_validate_xml_sitemap_faq_q3: '¿Qué diferencia hay entre sitemapindex y urlset?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex lista sitemaps hijos; urlset lista locs de página. Ambos son raíces válidas del protocolo; la tabla indica el tipo.',
	tool_find_and_validate_xml_sitemap_faq_q4: '¿Rastreáis cada URL del sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'No. Contamos <loc>, mostramos una muestra corta y comprobamos la estructura; no el estado en vivo de cada página.',
	tool_find_and_validate_xml_sitemap_faq_q5: '¿Se sube o guarda mi URL?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'La URL/dominio debe llegar al Worker para pedir robots.txt y sitemaps. No guardamos las comprobaciones como base de producto. Es una herramienta en el borde, no «sin subida».',
	tool_find_and_validate_xml_sitemap_references:
		'Protocolo sitemaps.org; Google Search Central — resumen de sitemaps.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Protocolo',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Resumen de sitemaps',
};

export default es;
