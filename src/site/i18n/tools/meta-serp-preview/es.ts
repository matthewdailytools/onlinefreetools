/**
 * i18n tool shard (meta-serp-preview / es).
 * Spanish locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_serp_home_title: 'Vista previa de resultados de Google',
	tool_serp_home_desc: 'Un título que se corta te hace perder clics en Google — compruébalo antes de publicar.',
	tool_serp_title: 'Vista previa de resultados de Google — mira el corte de título y descripción',
	tool_serp_description:
		'Los títulos cortados restan clics en Google. Pega título y descripción para ver el corte en escritorio y móvil. Solo navegador. Ejemplo: EN y CJK.',
	tool_serp_preview: 'Vista previa',
	tool_serp_sample: 'Ejemplo',
	tool_serp_clear: 'Limpiar',
	tool_serp_copy: 'Copiar',
	tool_serp_copied: 'Copiado',
	tool_serp_title_label: 'Título',
	tool_serp_title_ph: 'El título de la página que aparece en los resultados',
	tool_serp_desc_label: 'Meta descripción',
	tool_serp_desc_ph: 'El texto del fragmento bajo el título del resultado',
	tool_serp_url_label: 'URL (opcional)',
	tool_serp_url_ph: 'p. ej. https://example.com/page',
	tool_serp_compare_label: 'Comparar con un segundo título',
	tool_serp_title_b_label: 'Título B',
	tool_serp_title_b_ph: 'Pega un título alternativo para comparar',
	tool_serp_desktop: 'Vista de escritorio',
	tool_serp_mobile: 'Vista móvil',
	tool_serp_char_count: '{n} caracteres',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'Recortado: la línea supera el viewport de ~{limit}px',
	tool_serp_fit: 'Cabe en el viewport',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'Introduce un título para ver la vista previa.',
	tool_serp_how_title: 'Cómo funciona',
	tool_serp_how_body:
		'Escribe o pega el título, la descripción y una URL opcional. La herramienta estima cuántos caracteres y píxeles aproximados ocupa cada línea con una aproximación de métricas de fuente (los glifos anchos CJK cuentan más que las letras ASCII estrechas) y dibuja un fragmento estilo Google de escritorio y otro de móvil. Las líneas más anchas que el viewport estimado llevan una marca de corte.',
	tool_serp_rules_title: 'Qué muestra la vista previa',
	tool_serp_rules_body:
		'Los límites de píxeles son aproximados. Google mide el ancho renderizado, no el número de caracteres, así que los idiomas densos y los glifos anchos se recortan con menos caracteres.',
	tool_serp_rules_item_1: 'El límite del título de escritorio se estima en unos 600px y el del móvil en unos 460px. Una línea más ancha se muestra con marca de corte.',
	tool_serp_rules_item_2: 'Las descripciones se estiman en unas dos líneas (unos 600px en escritorio y 460px en móvil por línea).',
	tool_serp_rules_item_3: 'El ancho de glifo se estima: letras y dígitos ASCII unos 0.5 em, caracteres CJK cerca de 1 em y emojis más anchos.',
	tool_serp_rules_item_4: 'Son estimaciones para planificar. Google puede reescribir títulos o descripciones, y el renderizado real depende de la fuente y el viewport del buscador.',
	tool_serp_example_title: 'Ejemplo',
	tool_serp_example:
		'Muestra: título «Meta SERP Preview — How to Preview Google Title & Description Truncation Online», descripción de unas dos líneas, URL example.com/page → en escritorio el título se corta cerca del carácter 57 con «…», y en móvil antes; la descripción cabe en dos líneas.',
	tool_serp_usecases_title: 'Para qué sirve',
	tool_serp_usecase_1:
		'Antes de publicar: pega el título y la descripción finales para ver si las palabras clave sobreviven al corte de píxeles.',
	tool_serp_usecase_2:
		'Compara dos títulos candidatos lado a lado y elige el que mantiene la palabra clave principal visible en móvil.',
	tool_serp_usecase_3:
		'Páginas CJK: comprueba cuántos caracteres chinos caben antes del corte, porque los glifos anchos alcanzan el límite con menos caracteres.',
	tool_serp_faq_q1: '¿Por qué un título CJK de 30 caracteres se corta antes que uno en inglés de 60?',
	tool_serp_faq_a1:
		'Los resultados se recortan por ancho de píxel renderizado, no por número de caracteres. Los glifos CJK miden casi un em mientras que las letras ASCII promedian medio em, así que menos caracteres llenan el mismo viewport.',
	tool_serp_faq_q2: '¿Son exactos los límites de píxeles?',
	tool_serp_faq_a2:
		'No. Los viewports de escritorio y móvil varían por dispositivo y fuente. Esta herramienta usa los límites comunes de ~600px en escritorio y ~460px en móvil como estimación para planificar, no como garantía de cómo Google renderizará tu página.',
	tool_serp_faq_q3: '¿Coincide con la vista móvil de Search Console?',
	tool_serp_faq_a3:
		'Es una estimación local en la misma dirección. Para ver el resultado final, abre tu página en la inspección de URLs de Search Console o en la prueba de resultados enriquecidos, que renderizan con el entorno real de Google.',
	tool_serp_faq_q4: '¿Se sube mi título a algún sitio?',
	tool_serp_faq_a4:
		'No. Todo el texto se queda en la pestaña de tu navegador y nunca se envía a un servidor. Al cerrar la pestaña, todo desaparece.',
	tool_serp_references: 'Google Search Central — Controla los enlaces de título; Google Search Central — Controla los fragmentos.',
	tool_serp_ref_title_label: 'Search Central — Control de títulos',
	tool_serp_ref_snippet_label: 'Search Central — Control de fragmentos',
};

export default es;
