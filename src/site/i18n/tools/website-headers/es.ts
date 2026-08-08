/**
 * i18n tool shard (website-headers / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_headers_article:
    'Mira las cabeceras que recibe el edge para una URL pública: caché, CORS, redirecciones y cabeceras de seguridad. La petición pasa por proxy; no almacenamos el cuerpo de la página como producto.',
  tool_headers_description:
    'Comprueba online las cabeceras HTTP de respuesta de una URL desde nuestro edge. Pasos: pega https, envía HEAD (GET si hace falta), sigue redirecciones, muestra estado y mapa de cabeceras; bloquea hosts privados. Ejemplo: lee cache-control, CORS y Strict-Transport-Security al depurar CDN o redirecciones.',
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
    'Pega una URL pública http(s) y pulsa comprobar. El worker del edge manda HEAD (GET si hace falta), sigue redirecciones y devuelve estado, URL final y cabeceras observadas. Los destinos privados se rechazan. Es la vista del edge: puede diferir de tu navegador si el CDN enruta por región.',
  tool_headers_how_title: 'Cómo funciona',
  tool_headers_ref_mdn_label: 'MDN — Cabeceras HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semántica HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Caché HTTP',
  tool_headers_rules_body:
    'Actúa como proxy efímero para inspeccionar cabeceras; no guarda el contenido de la página. Los nombres siguen la semántica HTTP (ver Referencias).',
  tool_headers_rules_item_1: 'HEAD primero; GET si el origen no admite HEAD.',
  tool_headers_rules_item_2: 'Sigue redirecciones e informa la URL final.',
  tool_headers_rules_item_3: 'Bloquea localhost e IPs de red privada.',
  tool_headers_rules_item_4: 'Resalta cabeceras habituales: Cache-Control, CORS, CSP, etc.',
  tool_headers_rules_title: 'Qué hace el comprobador',
  tool_headers_title: 'Ver cabeceras HTTP de un sitio — Inspeccionar response headers',
  tool_headers_usecase_1: 'Antes de un despliegue, confirma Cache-Control o la caché del CDN.',
  tool_headers_usecase_2: 'Depura preflight CORS leyendo Access-Control-* en la respuesta.',
  tool_headers_usecase_3: 'Comprueba si CSP, HSTS u otras cabeceras de seguridad llegan de verdad.',
  tool_headers_usecases_title: 'Cuándo te sirve',
};
export default es;
