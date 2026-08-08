/**
 * i18n tool shard (image-overlay / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_image_overlay_article:
    'Composición local de dos capas: opacidad, ancla superior izquierda, escala, modos de mezcla y fondo JPEG al aplanar transparencia.',
  tool_image_overlay_blend_darken: 'Oscurecer',
  tool_image_overlay_blend_label: 'Mezcla',
  tool_image_overlay_blend_lighten: 'Aclarar',
  tool_image_overlay_blend_multiply: 'Multiplicar',
  tool_image_overlay_blend_overlay: 'Superponer',
  tool_image_overlay_blend_screen: 'Trama',
  tool_image_overlay_blend_source_over: 'Normal (source-over)',
  tool_image_overlay_choose_base: 'Imagen base',
  tool_image_overlay_choose_overlay: 'Capa',
  tool_image_overlay_clear: 'Limpiar',
  tool_image_overlay_description:
    'Coloca un logo o marca de agua PNG sobre una foto base en el navegador — no texto escrito ni unir varias fotos como en collage. Pasos: elige base y capa, ajusta opacidad y escala, posiciona con x/y o arrastrando, elige modo de mezcla, superpone y descarga JPEG/WebP/PNG. Ejemplo: foto de muestra + LOGO semitransparente abajo a la derecha al 75 % → PNG — todo en tu dispositivo.',
  tool_image_overlay_download: 'Descargar',
  tool_image_overlay_drop_hint_base: 'O suelta aquí una base JPEG, PNG o WebP. El proceso queda en esta pestaña.',
  tool_image_overlay_drop_hint_overlay: 'O suelta la capa (un PNG con transparencia funciona bien).',
  tool_image_overlay_empty_base: 'Elige primero una imagen base.',
  tool_image_overlay_empty_overlay: 'Elige primero una capa.',
  tool_image_overlay_err_decode: 'El navegador no pudo decodificar un archivo. Prueba JPEG, PNG o WebP.',
  tool_image_overlay_err_encode: 'No se pudo exportar la composición. Prueba una base más pequeña u otro formato.',
  tool_image_overlay_example:
    'Carga el ejemplo: base con degradado y LOGO semitransparente abajo a la derecha al 75 % con mezcla Normal. Superpone, deja PNG y descarga. Arrastra en la vista previa; prueba Multiplicar sobre una foto clara.',
  tool_image_overlay_example_title: 'Ejemplo',
  tool_image_overlay_faq_a1: 'No. Decodificar, componer y exportar ocurre en tu navegador. Revisa la pestaña Red: no hay POST.',
  tool_image_overlay_faq_a2:
    'Unir concatena varias fotos en horizontal, vertical o cuadrícula. Superponer mantiene una base y pinta una capa encima con opacidad, posición y mezcla.',
  tool_image_overlay_faq_a3:
    'Siguen las reglas de Canvas: Normal apila; Multiplicar oscurece; Trama aclara; Superponer aumenta contraste; Oscurecer/Aclarar eligen min/max por canal.',
  tool_image_overlay_faq_a4:
    'JPEG no tiene transparencia. Antes de exportar se rellena el lienzo para que las zonas transparentes no queden negras.',
  tool_image_overlay_faq_a5: 'Esta página solo superpone archivos de imagen. Para texto, usa la herramienta de marca de agua.',
  tool_image_overlay_faq_q1: '¿Se suben mis imágenes?',
  tool_image_overlay_faq_q2: '¿En qué se diferencia de unir imágenes?',
  tool_image_overlay_faq_q3: '¿Qué hacen los modos de mezcla?',
  tool_image_overlay_faq_q4: '¿Por qué un color de fondo JPEG?',
  tool_image_overlay_faq_q5: '¿Puedo escribir texto como marca de agua?',
  tool_image_overlay_format_jpeg: 'JPEG',
  tool_image_overlay_format_label: 'Formato de salida',
  tool_image_overlay_format_png: 'PNG',
  tool_image_overlay_format_webp: 'WebP',
  tool_image_overlay_how_body:
    'Añade una foto base y una segunda imagen (logo, insignia o PNG transparente). Ajusta opacidad, escala y posición — arrastra en la vista previa o escribe x/y en píxeles de la base. Elige mezcla, formato y fondo JPEG, superpone y descarga. Todo local; nada se sube.',
  tool_image_overlay_how_title: 'Cómo funciona',
  tool_image_overlay_jpeg_bg_label: 'Fondo JPEG',
  tool_image_overlay_opacity_label: 'Opacidad (%)',
  tool_image_overlay_overlay: 'Superponer',
  tool_image_overlay_pos_bc: 'Abajo centro',
  tool_image_overlay_pos_bl: 'Abajo izquierda',
  tool_image_overlay_pos_br: 'Abajo derecha',
  tool_image_overlay_pos_mc: 'Centro',
  tool_image_overlay_pos_ml: 'Centro izquierda',
  tool_image_overlay_pos_mr: 'Centro derecha',
  tool_image_overlay_pos_tc: 'Arriba centro',
  tool_image_overlay_pos_tl: 'Arriba izquierda',
  tool_image_overlay_pos_tr: 'Arriba derecha',
  tool_image_overlay_position_label: 'Posición rápida',
  tool_image_overlay_preview_label: 'Vista previa (arrastra la capa)',
  tool_image_overlay_quality_label: 'Calidad',
  tool_image_overlay_rules_body:
    'El lienzo de salida coincide con los píxeles naturales de la base. La capa se dibuja con ancla superior izquierda en (x, y) tras escalar.',
  tool_image_overlay_rules_item_1: 'Ancho × alto del lienzo = ancho × alto natural de la base; la base se dibuja en (0, 0).',
  tool_image_overlay_rules_item_2:
    'Tamaño de la capa = ancho × alto natural × (escala% ÷ 100); posición en píxeles de la base con ancla superior izquierda.',
  tool_image_overlay_rules_item_3:
    'globalAlpha = opacidad ÷ 100; globalCompositeOperation = mezcla elegida; ambos se restablecen tras dibujar la capa.',
  tool_image_overlay_rules_item_4:
    'JPEG: primero se rellena el lienzo con el color de fondo, luego base y capa. PNG/WebP conservan alpha donde exista.',
  tool_image_overlay_rules_title: 'Reglas de dibujo',
  tool_image_overlay_sample: 'Cargar ejemplo',
  tool_image_overlay_scale_label: 'Escala (%)',
  tool_image_overlay_status_done: 'Listo — pulsa Descargar para guardar.',
  tool_image_overlay_status_working: 'Componiendo…',
  tool_image_overlay_title: 'Superponer imágenes — pon un logo en una foto',
  tool_image_overlay_usecase_1: 'Marcas: pon un logo en fotos de producto o cabeceras sociales sin abrir un editor de escritorio.',
  tool_image_overlay_usecase_2: 'Insignias de esquina: coloca una etiqueta “NUEVO” con opacidad y la cuadrícula de nueve posiciones.',
  tool_image_overlay_usecase_3: 'Texturas: usa Multiplicar o Trama con una capa en escala de grises para teñir o suavizar el fondo.',
  tool_image_overlay_usecases_title: 'Buenos casos',
  tool_image_overlay_warn_edge: 'La base supera ~8192 px de borde; algunos navegadores pueden fallar.',
  tool_image_overlay_warn_large: 'Archivo grande (>25 MB): la decodificación puede ir lenta.',
  tool_image_overlay_x_label: 'X (px)',
  tool_image_overlay_y_label: 'Y (px)',
};
export default es;
