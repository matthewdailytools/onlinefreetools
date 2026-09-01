/**
 * i18n tool shard (svg-optimizer / es).
 * H1: optimizador de SVG.
 */
import type { SiteLangDict } from '../../../types';

/** Textos en español. */
const es: SiteLangDict = {
	tool_svg_optimizer_article:
		'Pega o suelta un SVG, activa las opciones de limpieza y mira el ahorro en bytes con vista previa. Inspirado en SVGOMG; todo en el navegador — no se sube al servidor y el archivo no sale del dispositivo.',
	tool_svg_optimizer_choose_file: 'Elegir archivo SVG',
	tool_svg_optimizer_clear: 'Limpiar',
	tool_svg_optimizer_copy: 'Copiar',
	tool_svg_optimizer_desc:
		'Optimiza SVG en el navegador con ahorro de bytes y vista previa; sin subir al servidor.',
	tool_svg_optimizer_description:
		'Optimizador de SVG: pega o arrastra SVG, elige opciones de limpieza y compara bytes original vs optimizado con vista previa. Ejemplo: al cargar la página aparece un icono de muestra y se ve el ahorro al quitar comentarios y metadatos de editor. Copia o descarga el resultado. El archivo no sale del dispositivo y no se sube al servidor. Es una pasada ligera en el navegador, no el SVGO completo.',
	tool_svg_optimizer_download: 'Descargar',
	tool_svg_optimizer_drop_hint: 'O suelta un .svg aquí. La optimización ocurre en esta pestaña.',
	tool_svg_optimizer_empty: 'Pega SVG o elige un archivo primero.',
	tool_svg_optimizer_err_not_svg: 'No parece SVG. Pega markup con un elemento raíz <svg>.',
	tool_svg_optimizer_example:
		'Cargar ejemplo inserta un icono con comentarios XML, ruido de Inkscape, espacios extra y decimales largos. Con todas las opciones activas bajan los bytes y la vista previa se mantiene.',
	tool_svg_optimizer_example_title: 'Ejemplo',
	tool_svg_optimizer_faq_a1:
		'No. El SVG se lee y optimiza en esta pestaña. Nada se envía a nuestros servidores.',
	tool_svg_optimizer_faq_a2:
		'Aquí hay una tubería ligera (comentarios, metadatos, espacios, redondeo, grupos vacíos). SVGO completo añade muchos plugins — úsalo cuando necesites esa profundidad.',
	tool_svg_optimizer_faq_a3:
		'Quitar comentarios elimina <!-- … -->. Metadatos de editor quita xmlns/atributos de Inkscape/Sketch y nodos <metadata>. Colapsar espacios une etiquetas. Redondear números deja dos decimales en rutas. Grupos vacíos elimina <g></g> huérfanos.',
	tool_svg_optimizer_faq_a4:
		'La vista previa muestra el SVG optimizado como imagen en esta pestaña; no inyecta el markup en el DOM de la página.',
	tool_svg_optimizer_faq_q1: '¿Se sube mi SVG?',
	tool_svg_optimizer_faq_q2: '¿En qué se diferencia de SVGO o SVGOMG?',
	tool_svg_optimizer_faq_q3: '¿Qué hacen las opciones?',
	tool_svg_optimizer_faq_q4: '¿La vista previa es segura?',
	tool_svg_optimizer_how_body:
		'Pega o suelta SVG, deja las opciones encendidas o ajusta chips, revisa bytes y vista previa, luego copia o descarga. Todo local en el navegador.',
	tool_svg_optimizer_how_item_1: 'Pega markup SVG o suelta un archivo .svg.',
	tool_svg_optimizer_how_item_2: 'Activa opciones: comentarios, metadatos, espacios, decimales, grupos vacíos.',
	tool_svg_optimizer_how_item_3: 'Lee bytes original, optimizado y porcentaje ahorrado.',
	tool_svg_optimizer_how_item_4: 'Confirma la vista previa y copia o descarga optimized.svg.',
	tool_svg_optimizer_how_title: 'Cómo funciona',
	tool_svg_optimizer_input_label: 'Entrada SVG',
	tool_svg_optimizer_input_ph: 'Pega <svg>…</svg> aquí…',
	tool_svg_optimizer_load_sample: 'Cargar ejemplo',
	tool_svg_optimizer_opt_collapse_whitespace: 'Colapsar espacios entre etiquetas',
	tool_svg_optimizer_opt_round_numbers: 'Redondear números de ruta a 2 decimales',
	tool_svg_optimizer_opt_strip_comments: 'Quitar comentarios XML/HTML',
	tool_svg_optimizer_opt_strip_empty: 'Quitar <g> vacíos y espacios en atributos',
	tool_svg_optimizer_opt_strip_metadata: 'Quitar metadatos de editor (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Optimizar',
	tool_svg_optimizer_options_label: 'Opciones',
	tool_svg_optimizer_output_label: 'SVG optimizado',
	tool_svg_optimizer_preview_label: 'Vista previa',
	tool_svg_optimizer_rules_body:
		'La limpieza en navegador prioriza feedback instantáneo. Revisa antes de publicar assets.',
	tool_svg_optimizer_rules_item_1:
		'Comentarios y xmlns de editor suelen ser seguros de quitar en iconos de producción.',
	tool_svg_optimizer_rules_item_2:
		'Redondear coordenadas reduce tamaño pero puede mover trazos subpíxel — mira la vista previa.',
	tool_svg_optimizer_rules_item_3:
		'Quitar grupos vacíos ayuda en exportes de Sketch/Figma; se conservan grupos con id/transform.',
	tool_svg_optimizer_rules_item_4:
		'¿También necesitas comprimir raster? Usa el optimizador de imágenes para PNG/WebP.',
	tool_svg_optimizer_rules_title: 'Reglas que conviene saber',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'Optimizado',
	tool_svg_optimizer_size_original: 'Original',
	tool_svg_optimizer_size_saved: 'Ahorro',
	tool_svg_optimizer_stats_tpl: 'Original {orig} B → Optimizado {opt} B ({pct}% menos)',
	tool_svg_optimizer_status_copied: 'Copiado al portapapeles.',
	tool_svg_optimizer_status_done: 'Optimizado — revisa bytes y vista previa.',
	tool_svg_optimizer_title: 'Optimizador de SVG',
	tool_svg_optimizer_usecase_1: 'Encoger un icono exportado de Sketch antes de subirlo al repo.',
	tool_svg_optimizer_usecase_2: 'Limpiar SVG inline en una landing y ver ahorro sin instalar SVGO.',
	tool_svg_optimizer_usecase_3: 'Quitar comentarios de un handoff de diseño manteniendo la vista previa.',
	tool_svg_optimizer_usecases_title: 'Buenos casos',
};

export default es;
