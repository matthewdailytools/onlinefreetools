/**
 * i18n tool shard (image-merge / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_image_merge_article:
    'Collage local de varias imágenes con diseño, espacio, fondo, ajuste en cuadrícula, formato y presets de tamaño.',
  tool_image_merge_bg_label: 'Fondo',
  tool_image_merge_choose_files: 'Añadir imágenes',
  tool_image_merge_clear: 'Limpiar',
  tool_image_merge_cols_label: 'Columnas',
  tool_image_merge_description:
    'Combina fotos en un collage o imagen unida en el navegador. Pasos: añade imágenes, elige diseño horizontal/vertical/cuadrícula, ajusta espacio y fondo, une y descarga JPEG/WebP/PNG. Ejemplo: tres bloques en fila, fondo blanco, 8 px de separación → un WebP — los archivos no salen de tu dispositivo; presets de tamaño opcionales para publicaciones habituales.',
  tool_image_merge_download: 'Descargar',
  tool_image_merge_drop_hint: 'O suelta dos o más JPEG, PNG o WebP aquí. La unión se hace en esta pestaña.',
  tool_image_merge_empty: 'Añade al menos una imagen primero.',
  tool_image_merge_err_decode: 'El navegador no pudo decodificar algún archivo. Prueba JPEG, PNG o WebP.',
  tool_image_merge_err_encode: 'No se pudo exportar la imagen unida. Prueba un diseño más pequeño u otro formato.',
  tool_image_merge_example:
    'Carga el ejemplo de tres colores, mantén Horizontal, espacio 8 px, fondo blanco, WebP 0,90, preset Ninguno, y une. Deberías obtener una tira ~728×180 px. Cambia a Cuadrícula con 3 columnas para alinearlas en una fila de celdas iguales.',
  tool_image_merge_example_title: 'Ejemplo',
  tool_image_merge_faq_a1:
    'No. Decodificar, maquetar y exportar ocurre en tu navegador. Revisa la pestaña Red — no hay POST de imágenes.',
  tool_image_merge_faq_a2:
    'Horizontal unifica altura y crece en ancho; vertical unifica ancho y crece en alto. La cuadrícula usa celdas fijas con contener o cubrir.',
  tool_image_merge_faq_a3:
    'No. Son tamaños de salida habituales. Las reglas de cada app cambian; consulta la plataforma donde publiques.',
  tool_image_merge_faq_a4: 'Solo se decodifica y dibuja el primer fotograma. La animación no se conserva.',
  tool_image_merge_faq_a5:
    'Bordes de lienzo por encima de ~8192 px o muchos megapíxeles pueden superar la memoria del navegador. Reduce imágenes, columnas de cuadrícula o recorta antes con la herramienta de crop.',
  tool_image_merge_faq_q1: '¿Se suben mis fotos?',
  tool_image_merge_faq_q2: '¿En qué se diferencia horizontal de vertical?',
  tool_image_merge_faq_q3: '¿Los presets 1080 o 1200 garantizan aprobación en Instagram/Facebook?',
  tool_image_merge_faq_q4: '¿Qué pasa con GIF animados?',
  tool_image_merge_faq_q5: '¿Por qué falla un collage enorme?',
  tool_image_merge_fit_contain: 'Contener',
  tool_image_merge_fit_cover: 'Cubrir',
  tool_image_merge_fit_label: 'Ajuste en celda',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Formato de salida',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Espacio (px)',
  tool_image_merge_how_body:
    'Añade dos o más imágenes, reordénalas si hace falta, elige diseño, espacio y fondo, y une. La página crea un lienzo local, dibuja cada foto en orden, puede escalar el resultado a tamaños cuadrado o de enlace habituales, y te deja descargar — sin subidas.',
  tool_image_merge_how_title: 'Cómo funciona',
  tool_image_merge_layout_grid: 'Cuadrícula',
  tool_image_merge_layout_horizontal: 'Horizontal',
  tool_image_merge_layout_label: 'Diseño',
  tool_image_merge_layout_vertical: 'Vertical',
  tool_image_merge_merge: 'Unir',
  tool_image_merge_move_down: 'Bajar',
  tool_image_merge_move_up: 'Subir',
  tool_image_merge_need_two: 'Necesitas al menos dos imágenes para unir.',
  tool_image_merge_preset_fb: '1200×630 (vista previa de enlace habitual)',
  tool_image_merge_preset_ig: '1080×1080 (cuadrado habitual)',
  tool_image_merge_preset_label: 'Preset de tamaño',
  tool_image_merge_preset_none: 'Ninguno',
  tool_image_merge_preview_label: 'Vista previa unida',
  tool_image_merge_quality_label: 'Calidad',
  tool_image_merge_remove: 'Quitar',
  tool_image_merge_rules_body:
    'El tamaño del lienzo sigue las fórmulas siguientes. En cuadrícula las celdas comparten ancho y alto; contener deja bandas, cubrir recorta.',
  tool_image_merge_rules_item_1:
    'Horizontal: altura = máximo de las fuentes; cada imagen escala a esa altura; ancho = suma de anchos escalados + (n−1)×espacio.',
  tool_image_merge_rules_item_2:
    'Vertical: ancho = máximo de las fuentes; cada imagen escala a ese ancho; alto = suma de altos escalados + (n−1)×espacio.',
  tool_image_merge_rules_item_3:
    'Cuadrícula: 2–4 columnas; filas = ceil(n/cols); celda = max ancho × max alto de origen; espacio entre celdas; contener o cubrir dentro de cada celda.',
  tool_image_merge_rules_item_4:
    'Los presets escalan el collage terminado a 1080×1080 o 1200×630 con tu color de fondo (tamaños habituales, no aprobación de plataforma). El fondo se rellena antes de dibujar.',
  tool_image_merge_rules_title: 'Reglas de diseño',
  tool_image_merge_sample: 'Cargar ejemplo',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Listo — vista previa abajo; pulsa Descargar para guardar.',
  tool_image_merge_status_merging: 'Uniendo imágenes…',
  tool_image_merge_title: 'Unir imágenes — combina fotos en un collage',
  tool_image_merge_usecase_1: 'Antes/después: dos fotos lado a lado para reseñas o progreso fitness.',
  tool_image_merge_usecase_2: 'Pasos de tutorial: apila capturas en vertical en una sola imagen larga.',
  tool_image_merge_usecase_3: 'Ángulos de producto o storyboard: cuadrícula 3×3 y luego comprime si pesa mucho.',
  tool_image_merge_usecases_title: 'Cuándo encaja',
  tool_image_merge_warn_animation: 'GIF animados: solo se une el primer fotograma.',
  tool_image_merge_warn_edge: 'El borde del lienzo supera ~8192 px — algunos navegadores pueden fallar o quedarse sin memoria.',
  tool_image_merge_warn_large: 'Archivo grande (>25 MB) — la decodificación puede ir lenta.',
};
export default es;
