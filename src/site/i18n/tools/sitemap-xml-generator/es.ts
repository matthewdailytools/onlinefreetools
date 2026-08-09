/**
 * i18n tool shard (sitemap-xml-generator / es).
 * Spanish independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_sitemap_home_title: 'Generador de sitemap XML',
	tool_sitemap_home_desc:
		'Convierte una lista de URLs en un sitemap.xml válido con lastmod, changefreq y priority, sin salir del navegador.',
	tool_sitemap_title: 'Generador de sitemap XML — crea sitemap.xml a partir de URLs',
	tool_sitemap_description:
		'Genera sitemap.xml en tu navegador. Pasos: pega una URL https por línea con lastmod / changefreq / priority opcionales, previsualiza el XML con el escapado correcto y cópialo a la raíz del sitio. Incluye las reglas y límites del protocolo. Nada se sube. Ejemplo: 3 URLs → urlset con tres elementos url.',
	tool_sitemap_generate: 'Generar',
	tool_sitemap_sample: 'Ejemplo',
	tool_sitemap_clear: 'Limpiar',
	tool_sitemap_copy: 'Copiar',
	tool_sitemap_copied: 'Copiado',
	tool_sitemap_download: 'Descargar',
	tool_sitemap_urls_label: 'URLs (una por línea)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'Cada línea: URL, o URL | lastmod (yyyy-MM-dd), o URL | lastmod | changefreq | priority. Ejemplo: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'URL no http omitida: {url}',
	tool_sitemap_warn_bad_lastmod: 'lastmod no válido (usa yyyy-MM-dd o fecha-hora W3C): {url}',
	tool_sitemap_warn_too_many: 'Más de 50.000 URLs: divide en varios sitemaps y enlázalos con un sitemap index.',
	tool_sitemap_how_title: 'Cómo funciona',
	tool_sitemap_how_body:
		'Pega tu lista de URLs, una por línea. Tras una barra vertical puedes añadir lastmod (yyyy-MM-dd), changefreq y priority. La página analiza cada línea, escapa los caracteres reservados, comprueba que la URL empiece por http(s) y construye un urlset según el protocolo. Copia el XML a la raíz del sitio y refiérelo desde robots.txt o envíalo en Search Console.',
	tool_sitemap_rules_title: 'Reglas y límites del protocolo',
	tool_sitemap_rules_body: 'Estas son las reglas del protocolo sitemap y de Google que sigue este generador.',
	tool_sitemap_rules_item_1:
		'Obligatorio: cada <url> debe incluir un <loc> con la URL completa. lastmod, changefreq y priority son opcionales.',
	tool_sitemap_rules_item_2:
		'Formato de lastmod: una fecha W3C (yyyy-MM-dd) o un datetime como 2026-08-01T12:00:00+00:00. Otros formatos se ignoran o se rechazan.',
	tool_sitemap_rules_item_3:
		'changefreq es una pista, no una señal. Google la ignora, así que rellenarla no cambia la frecuencia de rastreo.',
	tool_sitemap_rules_item_4:
		'Límites: un sitemap admite como máximo 50.000 URLs y 50MB tras compresión. Más allá, divide y usa un sitemap index.',
	tool_sitemap_example_title: 'Ejemplo',
	tool_sitemap_example:
		'Entrada de muestra: https://example.com/ y https://example.com/products con lastmod 2026-08-01, más https://example.com/about — la salida es un urlset con tres elementos url, el del medio con lastmod.',
	tool_sitemap_usecases_title: 'Casos de uso',
	tool_sitemap_usecase_1:
		'Sitios nuevos: genera tu primer sitemap.xml desde la lista de URLs y envíalo en Search Console.',
	tool_sitemap_usecase_2:
		'Contenido actualizado: añade lastmod a páginas recién cambiadas para que los rastreadores recojan la señal de frescura.',
	tool_sitemap_usecase_3:
		'Descubrimiento: apunta robots.txt a tu sitemap para que los rastreadores lo encuentren sin esperar el envío.',
	tool_sitemap_faq_q1: '¿Cuál es el límite de URLs de un sitemap?',
	tool_sitemap_faq_a1:
		'50.000 URLs o 50MB (sin comprimir). El generador avisa cuando la lista supera 50.000 para que lo dividas y uses un sitemap index.',
	tool_sitemap_faq_q2: '¿Qué formato exige lastmod?',
	tool_sitemap_faq_a2:
		'Una fecha W3C (yyyy-MM-dd) o un datetime completo como 2026-08-01T12:00:00+00:00. El generador marca las líneas con lastmod incorrecto para que lo corrijas antes de guardar.',
	tool_sitemap_faq_q3: '¿Afecta changefreq al rastreo?',
	tool_sitemap_faq_a3:
		'No. Google ignora changefreq; es solo una pista para otros consumidores. Priority también se ignora. El campo que merece la pena mantener exacto es lastmod.',
	tool_sitemap_faq_q4: '¿En qué se diferencia de IndexNow?',
	tool_sitemap_faq_a4:
		'IndexNow avisa al instante a los buscadores participantes de un cambio de URL; un sitemap es una lista permanente que los rastreadores consultan. Usa ambos: IndexNow para notificar, sitemap para el descubrimiento continuo.',
	tool_sitemap_references: 'sitemaps.org — protocolo sitemap; Google Search Central — crear y enviar un sitemap.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — protocolo',
	tool_sitemap_ref_google_label: 'Search Central — crear y enviar un sitemap',
};

export default es;
