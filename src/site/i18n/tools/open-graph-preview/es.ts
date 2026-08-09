/**
 * i18n tool shard (open-graph-preview / es).
 * Español — reescritura independiente orientada a búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_og_home_title: 'Vista previa de Open Graph',
	tool_og_home_desc:
		'Haz que cada vez que compartan tu página genere clics: previsualiza cómo se verá al compartirla en Facebook, X y apps de mensajería, desde el navegador.',
	tool_og_title: 'Vista previa de Open Graph — revisa las tarjetas de redes sociales',
	tool_og_description:
		'Las etiquetas Open Graph deciden cómo se ve tu página cada vez que se comparte: una imagen o un título ausente te cuesta clics y compartidos. Pega tus etiquetas og:/twitter:card o una URL para previsualizar la tarjeta de Facebook, X y estilo WhatsApp, detectar campos faltantes y corregir la proporción de la imagen. Pasos: pega etiquetas o carga una URL, lee las tres tarjetas y la tabla de campos, corrige lo que falta. El modo pegar funciona en tu dispositivo; el modo URL carga la página una vez y no la almacena. Ejemplo: una página con una og:image de 1200×630 compartida como tarjeta grande.',
	tool_og_tags_tab: 'Pegar etiquetas',
	tool_og_url_tab: 'Cargar URL',
	tool_og_tags_ph: 'Pega aquí tus etiquetas <meta property="og:*"> y <meta name="twitter:*">…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'Obtener URL',
	tool_og_preview: 'Vista previa',
	tool_og_sample: 'Ejemplo',
	tool_og_clear: 'Limpiar',
	tool_og_copy: 'Copiar',
	tool_og_copied: 'Copiado',
	tool_og_running: 'Comprobando…',
	tool_og_error_prefix: 'Error: ',
	tool_og_url_error: 'Introduce una URL http(s) válida.',
	tool_og_fetch_failed: 'No se pudo cargar la URL. La página puede estar sin conexión, bloquear bots o no devolver HTML.',
	tool_og_no_tags: 'No se detectaron etiquetas OG',
	tool_og_no_tags_fallback:
		'Sin etiquetas Open Graph, Facebook, X y WhatsApp construyen la vista previa con el título, la meta description y la primera imagen de la página.',
	tool_og_required_label: 'Obligatorio',
	tool_og_optional_label: 'Opcional',
	tool_og_missing_label: 'Falta',
	tool_og_ok_label: 'Presente',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'Estado de las etiquetas',
	tool_og_ratio_warning: 'og:image debe rondar los 1200×630 px (1.91:1).',
	tool_og_ratio_ok: 'og:image está cerca de 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'No se pudo leer el tamaño de la imagen desde la URL.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Apps de mensajería (estilo WhatsApp)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'No hay twitter:card definido: las plataformas infieren una tarjeta summary desde las etiquetas og:.',
	tool_og_how_title: 'Cómo funciona',
	tool_og_how_body:
		'La vista previa analiza las etiquetas og:/twitter: que pegas (o las extrae del HTML cargado de una URL) y dibuja tres tarjetas. Facebook usa la imagen 1.91:1 a la izquierda con título, descripción y dominio debajo. X sigue twitter:card: summary_large_image muestra una imagen grande arriba, summary una pequeña junto al texto. Las apps de mensajería como WhatsApp muestran una tarjeta grande. La tabla marca og:title, og:description y og:image como obligatorios y lista los opcionales.',
	tool_og_rules_title: 'Reglas que usa la vista previa',
	tool_og_rules_body: 'Estos son los tamaños y respaldos que usan las plataformas, según el protocolo Open Graph y la documentación de X Cards.',
	tool_og_rules_item_1: 'Campos obligatorios: og:title, og:description y og:image. Los que falten se marcan para corregirlos antes de publicar.',
	tool_og_rules_item_2: 'og:image a 1200×630 px (1.91:1) funciona en todas las plataformas importantes. Facebook también acepta recortes 2:1 y 1:1; las imágenes pequeñas suelen agrandarse y verse borrosas.',
	tool_og_rules_item_3: 'twitter:card summary_large_image acompaña a una imagen grande; summary a una pequeña. Sin twitter:card, las plataformas infieren una tarjeta summary desde las etiquetas og:.',
	tool_og_rules_item_4: 'Cuando falta og:title u og:image, las plataformas usan el título HTML, la meta description y la primera imagen de la página.',
	tool_og_rules_item_5: 'El tamaño se mide cargando la imagen en el navegador; si no se puede cargar (bloqueada, sin conexión o URL incorrecta), la comprobación reporta desconocido.',
	tool_og_example_title: 'Ejemplo',
	tool_og_example:
		'Las etiquetas de ejemplo describen un post con og:image de 1200×630 y twitter:card summary_large_image. La vista previa muestra la tarjeta de Facebook con la imagen a la izquierda, una tarjeta grande de X, una tarjeta estilo WhatsApp y una tabla con todos los campos obligatorios presentes.',
	tool_og_usecases_title: 'Buenos usos',
	tool_og_usecase_1:
		'Antes de publicar un post o una landing, pega las etiquetas una vez y confirma que la tarjeta se ve bien en Facebook, X y apps de mensajería.',
	tool_og_usecase_2:
		'Cuando un enlace compartido no muestra imagen o sale recortada, pega las etiquetas og: para comprobar si falta og:image o tiene una proporción incorrecta.',
	tool_og_usecase_3:
		'Tras actualizar un CMS o tema, carga la URL en vivo y verifica que las etiquetas og: sigan coincidiendo con la página.',
	tool_og_faq_q1: '¿Qué pasa si una página no tiene etiquetas Open Graph?',
	tool_og_faq_a1:
		'Facebook, X y WhatsApp construyen la vista previa con el título HTML, la meta description y la primera imagen. La tarjeta puede quedar incompleta o con una imagen equivocada; por eso existen los campos og: obligatorios.',
	tool_og_faq_q2: '¿Qué tamaño debe tener og:image?',
	tool_og_faq_a2:
		'El tamaño seguro es 1200×630 px, proporción 1.91:1 que aceptan todas las plataformas. Facebook ahora admite también recortes 2:1 y 1:1. Las imágenes muy pequeñas suelen ampliarse y verse borrosas.',
	tool_og_faq_q3: '¿Cómo se relaciona twitter:card con las etiquetas og:?',
	tool_og_faq_a3:
		'twitter:card elige el diseño: summary_large_image muestra una imagen ancha, summary una pequeña. Si faltan twitter:title, twitter:description o twitter:image, X usa la etiqueta og: correspondiente.',
	tool_og_faq_q4: '¿Qué hace la plataforma si falta og:image?',
	tool_og_faq_a4:
		'Usa la primera imagen del HTML de la página o muestra la tarjeta sin imagen. La falta de og:image es la causa más común de un enlace compartido sin imagen de vista previa.',
	tool_og_faq_q5: '¿Por qué la comprobación de proporción dice “desconocido”?',
	tool_og_faq_a5:
		'La vista previa intenta cargar og:image con una carga de imagen del navegador para leer su tamaño real. Si la imagen está bloqueada, sin conexión, es lenta o el servidor rechaza la petición, no se puede leer y reporta desconocido.',
	tool_og_faq_q6: '¿Se suben mis etiquetas a algún sitio?',
	tool_og_faq_a6:
		'No. En el modo pegar, el análisis y la vista previa ocurren en tu dispositivo. El modo URL carga la página una vez a través de nuestro worker y no la almacena.',
	tool_og_references: 'ogp.me — El protocolo Open Graph; X — Markup de tarjetas.',
	tool_og_ref_ogp_label: 'ogp.me — El protocolo Open Graph',
	tool_og_ref_x_label: 'X — Markup de tarjetas',
};

export default es;
