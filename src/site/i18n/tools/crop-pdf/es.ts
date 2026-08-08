/**
 * i18n tool shard (crop-pdf / es). Reescrito para búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_crop_pdf_all_sides_label: 'Todos los lados (pt)',
  tool_crop_pdf_article:
    'Recorta márgenes de PDF en el navegador con la biblioteca PDF—uniforme o por lado en puntos. No es un editor de arrastre; el archivo no sale del dispositivo.',
  tool_crop_pdf_bottom_label: 'Inferior (pt)',
  tool_crop_pdf_choose_file: 'Elegir PDF',
  tool_crop_pdf_clear: 'Limpiar',
  tool_crop_pdf_crop: 'Recortar',
  tool_crop_pdf_desc:
    'Recorta márgenes de PDF en tu dispositivo—uniforme o por lado en puntos; sin subir al servidor.',
  tool_crop_pdf_description:
    'Recorta márgenes de PDF en el navegador ajustando el CropBox—nada se sube al servidor. Define márgenes superior/derecho/inferior/izquierdo en puntos (36 por defecto) o un valor para todos, y descarga. Ejemplo: una muestra de una página recorta 36 pt por lado y habilita cropped.pdf con tamaños antes/después. No es editor de arrastre; PDF cifrados fallan con error claro.',
  tool_crop_pdf_download: 'Descargar',
  tool_crop_pdf_drop_hint: 'O suelta un PDF aquí. El procesamiento ocurre en esta pestaña.',
  tool_crop_pdf_empty: 'Primero elige un PDF.',
  tool_crop_pdf_err_crop: 'Falló el recorte. Revisa márgenes y archivo e inténtalo de nuevo.',
  tool_crop_pdf_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo antes de recortar.',
  tool_crop_pdf_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_crop_pdf_err_margin:
    'Márgenes demasiado grandes—el ancho o alto recortado sería ≤ 10 pt. Reduce uno o más lados.',
  tool_crop_pdf_example:
    'La muestra crea un PDF de una página, recorta 36 pt en todos los lados y habilita cropped.pdf con estadísticas de tamaño.',
  tool_crop_pdf_example_title: 'Ejemplo',
  tool_crop_pdf_faq_a1:
    'No. la biblioteca PDF corre en tu pestaña (los scripts pueden cargarse desde un CDN). Tu PDF no se sube a nuestros servidores.',
  tool_crop_pdf_faq_a2:
    'Esta herramienta ajusta cajas PDF por márgenes en puntos—no arrastras un rectángulo sobre la vista previa como en una imagen.',
  tool_crop_pdf_faq_a3:
    'Correcto. Solo introduces márgenes en puntos; no hay caja libre ni edición por píxeles—usa una herramienta de imagen si lo necesitas.',
  tool_crop_pdf_faq_a4:
    'Los PDF con contraseña suelen no abrirse aquí. Quita la contraseña con una herramienta de confianza y luego recorta.',
  tool_crop_pdf_faq_q1: '¿Se sube mi PDF?',
  tool_crop_pdf_faq_q2: '¿En qué se diferencia de recortar una imagen?',
  tool_crop_pdf_faq_q3: '¿Es un editor de arrastre por píxeles?',
  tool_crop_pdf_faq_q4: '¿Y los PDF cifrados?',
  tool_crop_pdf_how_body:
    'Elige un PDF, define márgenes en puntos (todos iguales o por borde), pulsa Recortar y Descargar. Cada página reduce CropBox y MediaBox; visores e impresoras respetan los nuevos límites. Todo local tras cargar la biblioteca.',
  tool_crop_pdf_how_title: 'Cómo funciona',
  tool_crop_pdf_left_label: 'Izquierda (pt)',
  tool_crop_pdf_margins_title: 'Márgenes a recortar (puntos)',
  tool_crop_pdf_pages_label: 'Páginas del archivo',
  tool_crop_pdf_right_label: 'Derecha (pt)',
  tool_crop_pdf_rules_body:
    'Cálculo de márgenes, cajas PDF, límites, privacidad y casos de error en recorte local.',
  tool_crop_pdf_rules_item_1:
    'Unidades: márgenes en puntos PDF (pt). 72 pt ≈ 1 pulgada. La muestra usa 36 pt (½ pulgada) por lado.',
  tool_crop_pdf_rules_item_2:
    'Cajas: CropBox y MediaBox se reducen desde cada borde. Origen abajo-izquierda según la especificación PDF.',
  tool_crop_pdf_rules_item_3:
    'Seguridad: si el ancho o alto recortado sería ≤ 10 pt, se rechazan los valores antes de guardar.',
  tool_crop_pdf_rules_item_4:
    'Privacidad y límites: los bytes permanecen en la pestaña; PDF cifrados/dañados fallan claro; archivos enormes pueden ir lentos.',
  tool_crop_pdf_rules_title: 'Reglas que debes conocer',
  tool_crop_pdf_sample: 'Cargar ejemplo',
  tool_crop_pdf_stats_page_tpl: 'Página {n}: {ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'Recortando PDF…',
  tool_crop_pdf_status_done: 'Listo — pulsa Descargar para guardar cropped.pdf.',
  tool_crop_pdf_title: 'Recortar PDF — recorta márgenes en el navegador',
  tool_crop_pdf_top_label: 'Superior (pt)',
  tool_crop_pdf_uniform_hint: 'Cambiar «Todos los lados» actualiza cada borde; puedes afinar cada uno.',
  tool_crop_pdf_usecase_1: 'Oficina: quita bordes blancos de escaneos antes de imprimir o archivar.',
  tool_crop_pdf_usecase_2: 'Estudiantes: reduce márgenes de apuntes para ver más contenido en pantalla.',
  tool_crop_pdf_usecase_3: 'Webmasters: recorta el mismo margen en un flyer exportado de una página.',
  tool_crop_pdf_usecases_title: 'Casos útiles',
  tool_crop_pdf_warn_large: 'Archivo mayor de ~25 MB — el recorte puede ir lento o fallar en algunos navegadores.',
  tool_crop_pdf_warn_pdflib: 'No se cargó la biblioteca PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
