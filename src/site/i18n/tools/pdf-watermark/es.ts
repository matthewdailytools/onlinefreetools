/**
 * i18n tool shard (pdf-watermark / es). Reescrito para búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_pdf_watermark_apply: 'Aplicar marca',
  tool_pdf_watermark_article:
    'Sella DRAFT, CONFIDENCIAL u otro texto en cada página del PDF en tu navegador con la biblioteca PDF. Logo PNG/JPG opcional: el archivo no sale del dispositivo.',
  tool_pdf_watermark_choose_file: 'Elegir PDF',
  tool_pdf_watermark_clear: 'Limpiar',
  tool_pdf_watermark_desc:
    'Añade texto en cada página del PDF en el navegador: sin subir al servidor; el archivo se queda en el dispositivo.',
  tool_pdf_watermark_description:
    'Añade una marca de agua de texto en cada página de un PDF en el navegador, sin subir al servidor. Pasos: abre el PDF, escribe el sello (p. ej. DRAFT), ajusta opacidad y ángulo, opcionalmente un logo PNG/JPG, aplica y descarga. Ejemplo: muestra de dos páginas con DRAFT centrado, −45° y 35% de opacidad; descarga watermarked.pdf. Los PDF cifrados fallan con error claro. Distinto de Añadir marca de agua (fotos) y Rotar PDF.',
  tool_pdf_watermark_download: 'Descargar',
  tool_pdf_watermark_drop_hint: 'O suelta un PDF aquí. Todo se procesa en esta pestaña.',
  tool_pdf_watermark_empty: 'Añade un PDF para marcar.',
  tool_pdf_watermark_err_apply: 'Falló la marca. Revisa archivo y opciones e inténtalo de nuevo.',
  tool_pdf_watermark_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo antes.',
  tool_pdf_watermark_err_image: 'No se pudo leer la imagen. Usa PNG o JPG.',
  tool_pdf_watermark_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_pdf_watermark_example:
    'La muestra crea un PDF de dos páginas, aplica DRAFT centrado con 35% de opacidad y −45° en cada página y habilita Descargar watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Ejemplo',
  tool_pdf_watermark_faq_a1:
    'No. la biblioteca PDF corre en tu pestaña (los scripts pueden cargarse desde CDN). Tu PDF no se sube a nuestros servidores.',
  tool_pdf_watermark_faq_a2:
    'Añadir marca de agua superpone texto o logos en fotos. Esta herramienta sella cada página de un documento PDF.',
  tool_pdf_watermark_faq_a3:
    'No. Al descargar, la marca queda integrada. Quitarla requiere el original o edición pesada.',
  tool_pdf_watermark_faq_a4:
    'Los PDF con contraseña suelen no abrirse aquí. Quita la contraseña con una herramienta de confianza.',
  tool_pdf_watermark_faq_a5:
    'Sí: elige PNG o JPG. Se escala a ~un tercio de la página con la misma posición, opacidad y rotación que el texto.',
  tool_pdf_watermark_faq_q1: '¿Se sube mi PDF?',
  tool_pdf_watermark_faq_q2: '¿En qué se diferencia de la marca de agua para imágenes?',
  tool_pdf_watermark_faq_q3: '¿Puedo quitar la marca después?',
  tool_pdf_watermark_faq_q4: '¿Y los PDF cifrados?',
  tool_pdf_watermark_faq_q5: '¿Puedo añadir un logo?',
  tool_pdf_watermark_how_body:
    'Elige un PDF, escribe el sello, ajusta opacidad y rotación, elige posición, opcionalmente un logo PNG/JPG, pulsa Aplicar y Descargar. Cada página recibe la misma capa.',
  tool_pdf_watermark_how_title: 'Cómo funciona',
  tool_pdf_watermark_image_hint: 'Logo PNG/JPG opcional (misma posición que el texto).',
  tool_pdf_watermark_image_label: 'Marca de imagen (opcional)',
  tool_pdf_watermark_opacity_label: 'Opacidad',
  tool_pdf_watermark_pages_label: 'Páginas',
  tool_pdf_watermark_position_bl: 'Abajo izquierda',
  tool_pdf_watermark_position_br: 'Abajo derecha',
  tool_pdf_watermark_position_center: 'Centro',
  tool_pdf_watermark_position_label: 'Posición',
  tool_pdf_watermark_position_tl: 'Arriba izquierda',
  tool_pdf_watermark_position_tr: 'Arriba derecha',
  tool_pdf_watermark_rotation_label: 'Rotación (grados)',
  tool_pdf_watermark_rules_body:
    'Reglas de texto/imagen, posición, opacidad, privacidad y fallos al marcar PDF en el navegador.',
  tool_pdf_watermark_rules_item_1:
    'Texto: sello Helvetica en cada página; la muestra usa DRAFT centrado, 35% opacidad, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Imagen: PNG/JPG opcional escalado ~35% de la página, misma posición/opacidad/rotación.',
  tool_pdf_watermark_rules_item_3:
    'Posiciones: centro o esquinas; opacidad 0,1–1; rotación −180° a 180°. Salida: PDF nuevo sin enviar bytes al servidor.',
  tool_pdf_watermark_rules_item_4:
    'Límites: PDF cifrados o dañados fallan; >~25 MB puede ir lento; no se quita marca.',
  tool_pdf_watermark_rules_title: 'Reglas que conviene saber',
  tool_pdf_watermark_sample: 'Cargar ejemplo',
  tool_pdf_watermark_stats_tpl: '{pages} página(s) marcada(s) · {bytes}',
  tool_pdf_watermark_status_done: 'Listo — pulsa Descargar para guardar watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Aplicando marca…',
  tool_pdf_watermark_text_label: 'Texto de la marca',
  tool_pdf_watermark_title: 'Marca de agua PDF — sella texto en cada página en el navegador',
  tool_pdf_watermark_usecase_1: 'Legal/ops: marca borradores CONFIDENCIAL antes de enviarlos fuera.',
  tool_pdf_watermark_usecase_2: 'Estudiantes: sella DRAFT en capítulos compartidos para revisión.',
  tool_pdf_watermark_usecase_3: 'Webmasters: logo semitransparente en cada página de PDF de vista previa.',
  tool_pdf_watermark_usecases_title: 'Casos habituales',
  tool_pdf_watermark_warn_large: 'Archivo >~25 MB: puede ir lento o fallar en algunos navegadores.',
  tool_pdf_watermark_warn_pdflib: 'No se cargó la biblioteca PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
