/**
 * i18n tool shard (image-format-converter / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_image_format_converter_article: 'Conversion local de formatos con reglas claras y exportacion extra a BMP/GIF/ICO/SVG.',
  tool_image_format_converter_avif_unsupported: 'Este navegador no puede codificar AVIF. Elige WebP, JPEG o PNG.',
  tool_image_format_converter_choose_file: 'Elegir imagen',
  tool_image_format_converter_clear: 'Limpiar',
  tool_image_format_converter_convert: 'Convertir',
  tool_image_format_converter_description:
    'Convierte imagenes entre PNG, JPEG, WebP, AVIF, BMP, GIF, ICO y SVG en el navegador. Pasos: elige un archivo, selecciona el formato, ajusta la calidad si aplica y descarga. Ejemplo: pasa un icono PNG a WebP o a ICO — el archivo no se sube.',
  tool_image_format_converter_download: 'Descargar',
  tool_image_format_converter_drop_hint: 'O suelta PNG, JPEG, WebP, AVIF, GIF, BMP, ICO o SVG aqui. La conversion se queda en esta pestana.',
  tool_image_format_converter_empty: 'Elige una imagen primero.',
  tool_image_format_converter_err_decode: 'Este navegador no pudo decodificar el archivo. Prueba PNG, JPEG o WebP.',
  tool_image_format_converter_err_encode: 'Falló la codificación. Prueba otro formato o una imagen más pequeña.',
  tool_image_format_converter_err_mime_mismatch:
    'El navegador no devolvió el formato pedido (posible fallback silencioso). Cambia el destino o usa Chromium para AVIF.',
  tool_image_format_converter_example:
    'Entrada: icono PNG 240×160 con fondo transparente. Destino JPEG + blanco → JPEG sin alfa. El mismo icono a WebP 0.85 → mismo tamaño en píxeles, a menudo menos bytes. Usa «Cargar ejemplo».',
  tool_image_format_converter_example_title: 'Ejemplo',
  tool_image_format_converter_faq_a1: 'No. Todo es local. En Network no deberías ver un POST del archivo.',
  tool_image_format_converter_faq_a2:
    'Muchos navegadores muestran AVIF pero no lo codifican. Si falta, desactivamos la opción o fallamos con mensaje claro.',
  tool_image_format_converter_faq_a3: 'JPEG no tiene alfa. Elige fondo blanco, negro o personalizado para un resultado predecible.',
  tool_image_format_converter_faq_a4: 'No. PNG es sin pérdida. JPEG, WebP y AVIF sí usan el control (WebP 1.0 puede ser sin pérdida).',
  tool_image_format_converter_faq_a5:
    'Mira el MIME en las estadísticas y descarga el archivo. Si hubo fallback silencioso, mostramos error.',
  tool_image_format_converter_faq_a6: 'No. Solo se convierte un fotograma (suele ser el primero).',
  tool_image_format_converter_faq_a7:
    'Se codifican en local. GIF guarda un fotograma con paleta reducida; ICO embebe PNG; SVG envuelve un mapa de bits PNG (no redibuja trazados). Para web sigue siendo mejor WebP/AVIF.',
  tool_image_format_converter_faq_q1: '¿Se sube mi imagen?',
  tool_image_format_converter_faq_q2: '¿Por qué a veces no hay AVIF?',
  tool_image_format_converter_faq_q3: '¿Qué pasa con la transparencia en JPEG?',
  tool_image_format_converter_faq_q4: '¿La calidad afecta a PNG?',
  tool_image_format_converter_faq_q5: '¿Cómo sé que realmente es WebP o AVIF?',
  tool_image_format_converter_faq_q6: '¿Los GIF animados siguen animados?',
  tool_image_format_converter_faq_q7: 'Que pasa con BMP, GIF, ICO y SVG?',
  tool_image_format_converter_format_avif: 'AVIF',
  tool_image_format_converter_format_bmp: 'BMP',
  tool_image_format_converter_format_gif: 'GIF',
  tool_image_format_converter_format_ico: 'ICO',
  tool_image_format_converter_format_jpeg: 'JPEG',
  tool_image_format_converter_format_png: 'PNG',
  tool_image_format_converter_format_svg: 'SVG',
  tool_image_format_converter_format_webp: 'WebP',
  tool_image_format_converter_group_extra: 'Mas formatos',
  tool_image_format_converter_group_web: 'Formatos web',
  tool_image_format_converter_how_body:
    'Elige imagen y formato. Se decodifica en esta pestana, se dibuja en un canvas y se codifica con toBlob o con codificadores locales (BMP/GIF/ICO/SVG). En JPEG se puede rellenar un fondo. Se comprueba el MIME de salida.',
  tool_image_format_converter_how_title: 'Cómo funciona',
  tool_image_format_converter_jpeg_bg_black: 'Negro',
  tool_image_format_converter_jpeg_bg_custom: 'Personalizado',
  tool_image_format_converter_jpeg_bg_label: 'Fondo JPEG',
  tool_image_format_converter_jpeg_bg_white: 'Blanco',
  tool_image_format_converter_preview_in: 'Original',
  tool_image_format_converter_preview_out: 'Convertido',
  tool_image_format_converter_quality_hint_extra: 'BMP, GIF, ICO y SVG ignoran el control de calidad.',
  tool_image_format_converter_quality_hint_png: 'PNG es sin pérdida — la calidad no aplica.',
  tool_image_format_converter_quality_hint_webp_lossless: 'WebP en 1.0 puede ser sin pérdida.',
  tool_image_format_converter_quality_label: 'Calidad',
  tool_image_format_converter_rules_body:
    'Los formatos no son solo etiquetas MIME: cambian transparencia, calidad con pérdida y capacidad de codificar.',
  tool_image_format_converter_rules_item_1:
    'Flujo: decodificar → fondo opcional → canvas → codificar. PNG/JPEG/WebP/AVIF usan toBlob; BMP/GIF/ICO/SVG usan codificadores locales. PNG y extras ignoran la calidad.',
  tool_image_format_converter_rules_item_2: 'Transparencia: PNG, WebP y AVIF pueden conservar alfa. JPEG no — elige blanco, negro o un color.',
  tool_image_format_converter_rules_item_3:
    'Codificar ≠ decodificar. AVIF se codifica sobre todo en Chromium; si hay fallback, avisamos al verificar blob.type.',
  tool_image_format_converter_rules_item_4: 'Privacidad: los bytes no se suben; todo usa APIs del navegador en esta pestaña.',
  tool_image_format_converter_rules_item_5:
    'Extras: BMP 24 bits; GIF un solo fotograma cuantizado; ICO envuelve PNG; SVG inserta un PNG — util para iconos, no es un redibujado vectorial.',
  tool_image_format_converter_rules_title: 'Reglas a tener en cuenta',
  tool_image_format_converter_sample: 'Cargar ejemplo',
  tool_image_format_converter_stats_tpl: '{mime} · {w}×{h} · {bytes}',
  tool_image_format_converter_status_converting: 'Convirtiendo…',
  tool_image_format_converter_status_done: 'Listo — revisa MIME y tamaño y descarga.',
  tool_image_format_converter_target_label: 'Formato de destino',
  tool_image_format_converter_title: 'Convertidor de formatos de imagen — PNG JPEG WebP AVIF BMP GIF ICO SVG',
  tool_image_format_converter_usecase_1: 'Web: pasa capturas o fotos a WebP/AVIF antes del CMS o CDN.',
  tool_image_format_converter_usecase_2: 'Diseño: aplana un icono con transparencia a JPEG con fondo elegido.',
  tool_image_format_converter_usecase_3: 'Compatibilidad: convierte AVIF/WebP a JPEG para programas antiguos.',
  tool_image_format_converter_usecases_title: 'Para qué sirve',
  tool_image_format_converter_warn_animation: 'Animados: solo se convierte el primer fotograma.',
  tool_image_format_converter_warn_edge: 'Dimensiones muy grandes (>8192 px): espera lentitud.',
  tool_image_format_converter_warn_large: 'Archivo grande (>25 MB): puede ir lento o agotar memoria.',
};
export default es;
