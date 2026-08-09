/**
 * i18n tool shard (meta-tag-generator / es).
 * Español — reescritura independiente orientada a búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_meta_home_title: 'Generador de meta tags',
	tool_meta_home_desc:
		'Escribe los title, description, canonical y etiquetas Open Graph que consiguen clics en Google: genera el head de tu página al completo desde el navegador.',
	tool_meta_title: 'Generador de meta tags — genera el head de tu página al completo',
	tool_meta_description:
		'Tu title y tu meta description son lo que los usuarios ven en Google, y un canonical erróneo puede dividir tu posicionamiento entre URLs duplicadas. Rellena los campos de title, description, canonical, robots y Open Graph para generar meta tags de <head> listas para pegar. Pasos: introduce tus campos, lee las pistas de longitud y previsualizaciones, copia el HTML generado con el escapado correcto. Los caracteres especiales como & y < se escapan automáticamente para que las etiquetas sigan siendo válidas. Funciona íntegramente en tu dispositivo: no se sube nada. Ejemplo: etiquetas canonical y og lado a lado.',
	tool_meta_title_label: 'Meta title',
	tool_meta_title_ph: 'Generador de meta tags — genera el head de tu página al completo',
	tool_meta_title_hint: 'Mantenlo cerca de 60 caracteres. Los buscadores pueden reescribir títulos más largos.',
	tool_meta_desc_label: 'Meta description',
	tool_meta_desc_ph: 'Genera meta tags de head listas para pegar, con pistas de longitud, valores de robots y campos OG.',
	tool_meta_desc_hint: 'Mantenla cerca de 155–160 caracteres. El texto más largo puede truncarse en el SERP.',
	tool_meta_canonical_label: 'URL canónica',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'La URL preferida de esta página. Añade la URL completa con el protocolo.',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— sin robots meta —',
	tool_meta_robots_index_follow: 'index, follow (por defecto, permite indexar)',
	tool_meta_robots_noindex_follow: 'noindex, follow (oculta en resultados, sigue enlaces)',
	tool_meta_robots_index_nofollow: 'index, nofollow (permite indexar, no sigue enlaces)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (oculta página y no sigue enlaces)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (URL completa)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Generar',
	tool_meta_sample: 'Cargar ejemplo',
	tool_meta_clear: 'Limpiar',
	tool_meta_copy: 'Copiar',
	tool_meta_copied: 'Copiado',
	tool_meta_error_prefix: 'Error: ',
	tool_meta_canonical_protocol: 'La URL canónica no tiene protocolo — añade https:// o http:// para que los buscadores puedan leerla.',
	tool_meta_title_len: 'Título: {n} caracteres',
	tool_meta_title_len_warn: 'Título: {n} caracteres — supera 60, considera acortarlo.',
	tool_meta_desc_len: 'Descripción: {n} caracteres',
	tool_meta_desc_len_warn: 'Descripción: {n} caracteres — supera 160, puede truncarse.',
	tool_meta_output_label: 'Fragmento de head generado',
	tool_meta_how_title: 'Cómo funciona',
	tool_meta_how_body:
		'El generador toma tus campos y construye las etiquetas de head correspondientes. Los campos opcionales vacíos se omiten, así que la salida solo contiene lo que rellenaste. Cada valor se escapa en HTML: un ampersand se convierte en &amp; y un signo menor que en &lt;, manteniendo las etiquetas válidas dentro de tu página. Las pistas de longitud avisan cuando el título o la descripción superan los límites habituales, sin cortar tu texto.',
	tool_meta_rules_title: 'Reglas usadas por el generador',
	tool_meta_rules_body: 'Estas reglas siguen las indicaciones de Google Search Central sobre meta tags, title links y URLs canónicas.',
	tool_meta_rules_item_1:
		'El meta title y la descripción son sugerencias, no directivas: los buscadores pueden reescribirlos o truncarlos, así que mantén el título cerca de 60 caracteres y la descripción cerca de 155–160.',
	tool_meta_rules_item_2:
		'Todos los valores se escapan en HTML: & < > " y \' se convierten en entidades, de modo que los caracteres del título o la descripción no puedan romper el marcado.',
	tool_meta_rules_item_3:
		'La URL canónica debe ser la URL absoluta completa con protocolo. Una URL relativa o sin protocolo no sirve como destino canónico.',
	tool_meta_rules_item_4:
		'El robots meta usa los valores index/noindex y follow/nofollow. Cuando se omite, los buscadores usan su propio valor por defecto, que es indexar y seguir.',
	tool_meta_rules_item_5:
		'Canonical y Open Graph pueden coexistir en la misma página: og:url debe coincidir con la URL canónica para que las redes sociales apunten a la misma dirección.',
	tool_meta_example_title: 'Ejemplo',
	tool_meta_example:
		'La muestra rellena el título, la descripción, el canonical, los robots y tres campos Open Graph. El fragmento generado emite una etiqueta <title>, la meta description, el enlace canónico, el robots meta y las etiquetas og: rellenadas.',
	tool_meta_usecases_title: 'Buenos usos',
	tool_meta_usecase_1:
		'Construir una plantilla nueva: genera el bloque de head una vez, revisa las pistas de longitud y pégalo en la plantilla antes de publicar.',
	tool_meta_usecase_2:
		'Entregar trabajo a un cliente: genera el fragmento de head exacto con canonical y OG, y pégalo en el CMS.',
	tool_meta_usecase_3:
		'Antes de publicar, genera las etiquetas y compáralas con una vista previa del resultado de búsqueda para que el título y la descripción coincidan con la página visible.',
	tool_meta_faq_q1: '¿Qué significan los valores del robots meta?',
	tool_meta_faq_a1:
		'index permite que los buscadores incluyan la página en resultados, mientras que noindex la excluye. follow permite rastrear los enlaces de la página y nofollow lo impide. Si la etiqueta no existe, el valor por defecto es index, follow.',
	tool_meta_faq_q2: '¿Se escapan los caracteres especiales de mis valores?',
	tool_meta_faq_a2:
		'Sí. El generador escapa & < > " y \', de modo que un ampersand se convierte en &amp; y un signo menor que en &lt;. Tus etiquetas siguen siendo válidas aunque el valor contenga caracteres similares a marcado.',
	tool_meta_faq_q3: '¿Pueden coexistir canonical y Open Graph?',
	tool_meta_faq_a3:
		'Sí, cubren sistemas distintos. El enlace canónico indica a los buscadores la URL preferida, mientras que las etiquetas og: describen la página para compartir en redes. Mantén og:url alineada con la URL canónica.',
	tool_meta_faq_q4: '¿Cuánto deben medir el título y la descripción?',
	tool_meta_faq_a4:
		'Unos 60 caracteres para el título y 155–160 para la descripción son límites habituales. Son sugerencias: los buscadores pueden reescribir o truncar valores más largos.',
	tool_meta_faq_q5: '¿Qué pasa con los campos vacíos?',
	tool_meta_faq_a5:
		'Los campos opcionales vacíos se omiten, así que el fragmento generado solo contiene las etiquetas de los campos que rellenaste.',
	tool_meta_faq_q6: '¿Mis datos se suben a algún sitio?',
	tool_meta_faq_a6: 'No. El generador funciona íntegramente en tu navegador y no se sube nada.',
	tool_meta_references: 'Google Search Central — Meta tags que entiende Google; Controla tus title links; URLs canónicas.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Meta tags que entiende Google',
	tool_meta_ref_searchcentral_title_label: 'Search Central — Controla tus title links',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — URLs canónicas',
};

export default es;
