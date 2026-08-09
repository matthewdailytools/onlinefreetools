/**
 * i18n tool shard (website-headers / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_headers_article:
    'Mira las cabeceras que recibe el edge para una URL pública: caché, CORS, redirecciones y cabeceras de seguridad. La petición pasa por proxy; no almacenamos el cuerpo de la página como producto.',
  tool_headers_description:
    'Las cabeceras HTTP deciden cómo Google rastrea, cachea e indexa tus páginas: un X-Robots-Tag erróneo puede bloquear la indexación por completo. Comprueba online las cabeceras HTTP de respuesta de una URL desde nuestro edge. Pasos: pega https, envía HEAD (GET si hace falta), sigue redirecciones, muestra estado y mapa de cabeceras; bloquea hosts privados. Extras: lectura en lenguaje claro de Cache-Control, X-Robots-Tag y la cadena de redirección. Ejemplo: lee cache-control, CORS y Strict-Transport-Security al depurar CDN o redirecciones.',
  tool_headers_example:
    'ejemplo.com → estado 200, URL final sin cambios; cabeceras con content-type: text/html y, según el origen, cache-control o cabeceras de seguridad.',
  tool_headers_example_title: 'Ejemplo',
  tool_headers_faq_a1:
    'Metadatos del servidor: tipo de contenido, reglas de caché, redirecciones y políticas como HSTS, CSP o CORS.',
  tool_headers_faq_a2:
    'Prioriza HEAD y pasa a GET solo si hace falta. El objetivo es inspeccionar cabeceras, no raspar ni guardar el cuerpo.',
  tool_headers_faq_a3: 'Se bloquean redes privadas para que nadie use el worker como sonda contra hosts internos.',
  tool_headers_faq_a4:
    'No siempre. Ves la respuesta desde nuestro edge; CDN, geo o filtros anti-bot pueden cambiar el resultado respecto a tu PC.',
  tool_headers_faq_a5:
    'Cada consulta es una petición corta en el edge. No hay historial de URLs; evita pegar secretos en parámetros.',
  tool_headers_faq_q1: '¿Qué información dan las cabeceras de respuesta?',
  tool_headers_faq_q2: '¿Descarga el HTML completo de la página?',
  tool_headers_faq_q3: '¿Por qué no puedo probar localhost o IPs privadas?',
  tool_headers_faq_q4: '¿Es lo mismo que las DevTools del navegador?',
  tool_headers_faq_q5: '¿Guardáis un historial de las URLs que consulto?',
  tool_headers_how_body:
    'Pega una URL pública http(s) y pulsa comprobar. El worker del edge manda HEAD (GET si hace falta), sigue las redirecciones una a una (hasta 5 saltos) y devuelve estado, URL final, cabeceras observadas y la cadena de redirección. Los destinos privados se rechazan. Es la vista del edge: puede diferir de tu navegador si el CDN enruta por región.',
  tool_headers_how_title: 'Cómo funciona',
  tool_headers_faq_a6:
    'Para SEO lo útil es saber si la respuesta se cachea (no-store frente a max-age), cuánto la conservan las cachés compartidas (s-maxage) y si obliga a revalidar (no-cache). Las páginas que cambian poco se benefician de un max-age largo para que el CDN las sirva sin tocar el origin.',
  tool_headers_faq_a7:
    'x-robots-tag vale para cualquier tipo de respuesta — HTML, PDF, imágenes — mientras que robots meta solo funciona dentro del HTML. Úsalo para impedir la indexación de archivos no HTML o para aplicar reglas difíciles de meter en la propia página. Si hay conflicto, x-robots-tag gana.',
  tool_headers_faq_q6: '¿Qué debo mirar en cache-control?',
  tool_headers_faq_q7: '¿Por qué importa x-robots-tag si ya existe robots meta?',
  tool_headers_ref_mdn_label: 'MDN — Cabeceras HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semántica HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Caché HTTP',
  tool_headers_rules_body:
    'Actúa como proxy efímero para inspeccionar cabeceras; no guarda el contenido de la página. Los nombres siguen la semántica HTTP (ver Referencias).',
  tool_headers_rules_item_1: 'HEAD primero; GET si el origen no admite HEAD.',
  tool_headers_rules_item_2: 'Sigue redirecciones e informa la URL final.',
  tool_headers_rules_item_3: 'Bloquea localhost e IPs de red privada.',
  tool_headers_rules_item_4: 'Resalta cabeceras habituales: Cache-Control, CORS, CSP, etc.',
  tool_headers_rules_item_5: 'Recoge la cadena de redirección (hasta 5 saltos) con estado y Location de cada paso.',
  tool_headers_rules_title: 'Qué hace el comprobador',
  tool_headers_seo_cache_absent:
    'Sin cabecera Cache-Control. Navegadores y CDN aplican heurísticas, así que contenido recién cambiado podría servirse caducado.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable:
    'immutable: las cachés no deben revalidar durante la vida de frescura — típico en assets con hash.',
  tool_headers_seo_cache_maxage:
    'max-age={n}: navegadores y cachés compartidas pueden reutilizar esta respuesta durante {n} segundos sin preguntar al origin.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: las respuestas caducadas deben revalidarse antes de reutilizarse.',
  tool_headers_seo_cache_nocache: 'no-cache: se puede guardar, pero hay que revalidar antes de reutilizar.',
  tool_headers_seo_cache_nostore: 'no-store: no se guarda nada; cada petición llega al origin. Bien para páginas privadas o volátiles.',
  tool_headers_seo_cache_other: 'Directiva no explicada aquí: {d}',
  tool_headers_seo_cache_private: 'private: solo la caché del navegador puede guardar la respuesta; las compartidas no.',
  tool_headers_seo_cache_public: 'public: cualquier caché puede guardar la respuesta.',
  tool_headers_seo_cache_smaxage:
    's-maxage={n}: las cachés compartidas (CDN/proxy) pueden servir durante {n} segundos; anula max-age para ellas.',
  tool_headers_seo_intro: 'Lectura en lenguaje claro de las cabeceras que más importan para búsqueda y rastreo.',
  tool_headers_seo_redirect_301:
    '301 Permanente: los buscadores transfieren las señales de ranking al destino — adecuado para páginas movidas y cambios de www.',
  tool_headers_seo_redirect_302: '302/307 Temporal: mantenlo para cambios a corto plazo — las señales de ranking siguen en la URL original.',
  tool_headers_seo_redirect_chain: 'La petición siguió {n} redirección(es) antes de la respuesta final:',
  tool_headers_seo_redirect_cross_host: 'Este salto sale del host original: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Redirección',
  tool_headers_seo_redirect_ok: 'Sin redirección: la URL final es la que comprobaste.',
  tool_headers_robots_absent: 'Sin cabecera X-Robots-Tag. Las reglas de indexación vienen de robots.txt y del robots meta de la página.',
  tool_headers_robots_blocked: 'Esta página queda fuera de la indexación por esta cabecera.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: limita el largo del fragmento a {n} caracteres.',
  tool_headers_robots_noarchive: 'noarchive: los buscadores no mostrarán una copia en caché de esta URL.',
  tool_headers_robots_nofollow: 'nofollow: los rastreadores no seguirán los enlaces de esta respuesta.',
  tool_headers_robots_noindex: 'noindex: esta URL queda excluida de los resultados de búsqueda.',
  tool_headers_robots_none: 'none: equivale a noindex + nofollow.',
  tool_headers_seo_title: 'Comprobaciones SEO de cabeceras',
  tool_headers_title: 'Ver cabeceras HTTP de un sitio — Inspeccionar response headers',
  tool_headers_usecase_1: 'Antes de un despliegue, confirma Cache-Control o la caché del CDN.',
  tool_headers_usecase_2: 'Depura preflight CORS leyendo Access-Control-* en la respuesta.',
  tool_headers_usecase_3: 'Comprueba si CSP, HSTS u otras cabeceras de seguridad llegan de verdad.',
  tool_headers_usecases_title: 'Cuándo te sirve',
};
export default es;
