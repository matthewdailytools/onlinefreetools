/**
 * i18n tool shard (image-optimizer / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_image_optimizer_article:
    'Optimizador local con WASM: códec, calidad/esfuerzo, recorte opcional del lado máximo, comparación deslizante y avisos honestos sobre AVIF.',
  tool_image_optimizer_avif_slow: 'AVIF puede tardar en fotos grandes — puedes cancelar.',
  tool_image_optimizer_cancel: 'Cancelar',
  tool_image_optimizer_cancelled: 'Cancelado.',
  tool_image_optimizer_choose_file: 'Elegir imagen',
  tool_image_optimizer_clear: 'Limpiar',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Códec / salida',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Optimiza imágenes para la web en el navegador con MozJPEG, WebP, AVIF u OxiPNG. Pasos: elige la foto, carga el motor, elige códec y ajustes, compara antes/después con el deslizador y descarga. Ejemplo: convierte un JPEG hero grande en un WebP más ligero — todo local tras cargar el motor.',
  tool_image_optimizer_download: 'Descargar',
  tool_image_optimizer_drop_hint: 'O suelta aquí un JPEG, PNG o WebP. Tras cargar el motor, la optimización no sale de esta pestaña.',
  tool_image_optimizer_effort_label: 'Esfuerzo / velocidad',
  tool_image_optimizer_empty: 'Elige una imagen primero.',
  tool_image_optimizer_engine_failed: 'No se pudo cargar el motor. Revisa la conexión e inténtalo de nuevo.',
  tool_image_optimizer_engine_loading: 'Cargando motor…',
  tool_image_optimizer_engine_needed: 'Carga el motor antes de codificar.',
  tool_image_optimizer_engine_ready: 'Motor listo — elige códec y optimiza.',
  tool_image_optimizer_err_decode: 'No se pudo decodificar. Prueba JPEG, PNG o WebP.',
  tool_image_optimizer_err_encode: 'Falló la codificación. Prueba otro códec, menos esfuerzo o una imagen más pequeña.',
  tool_image_optimizer_example:
    'El mismo JPEG de móvil (~3–4 MB): MozJPEG suele quedar más ligero que un JPEG casual del navegador; WebP suele recortar más con aspecto parecido; AVIF puede bajar aún más, pero en un frame grande tarda segundos. Son órdenes de magnitud: confía en el deslizador con tu archivo.',
  tool_image_optimizer_example_title: 'Ejemplo',
  tool_image_optimizer_faq_a1:
    'Los códecs ocupan bastante. Esperamos tu clic para no alargar la primera carga: solo los bajas cuando necesitas optimizar a nivel de códec.',
  tool_image_optimizer_faq_a2:
    'No. Tras cargar el motor, decodificar y codificar se quedan aquí. Compruébalo en la pestaña Network: la imagen no se envía por POST.',
  tool_image_optimizer_faq_a3:
    'El compresor es un pase rápido de tamaño/calidad (ideal para apuntar a KB). Aquí cargas un motor para elegir MozJPEG, WebP, AVIF u OxiPNG y comparar con deslizador.',
  tool_image_optimizer_faq_a4:
    'Codificar AVIF exige mucha CPU, sobre todo en fotos grandes. Mostramos progreso y permitimos cancelar en lugar de fingir que es instantáneo.',
  tool_image_optimizer_faq_a5:
    'Cuando lo principal es cambiar el tipo (incluido fondo JPEG para transparencia). Usa este optimizador cuando el peso y el control del códec importen más que un cambio rápido de formato.',
  tool_image_optimizer_faq_a6:
    'Las animaciones pasan a un fotograma fijo. El reencode suele borrar EXIF; míralo antes con la herramienta EXIF si lo necesitas.',
  tool_image_optimizer_faq_q1: '¿Por qué debo cargar un motor primero?',
  tool_image_optimizer_faq_q2: '¿Mis archivos salen del navegador?',
  tool_image_optimizer_faq_q3: '¿En qué se diferencia del compresor de imágenes?',
  tool_image_optimizer_faq_q4: '¿Por qué AVIF va tan lento?',
  tool_image_optimizer_faq_q5: '¿Cuándo usar el conversor de formato?',
  tool_image_optimizer_faq_q6: '¿Qué pasa con animación y EXIF?',
  tool_image_optimizer_how_body:
    'Elige una foto, carga el motor una vez, selecciona MozJPEG, WebP, AVIF u OxiPNG, ajusta calidad o esfuerzo, opcionalmente limita el lado más largo y desliza para comparar. Todo ocurre en esta pestaña. Si solo quieres reducir peso rápido sin elegir códec, usa el compresor ligero.',
  tool_image_optimizer_how_title: 'Cómo funciona',
  tool_image_optimizer_load_engine: 'Cargar motor',
  tool_image_optimizer_max_edge_label: 'Lado máximo',
  tool_image_optimizer_optimize: 'Optimizar',
  tool_image_optimizer_optimizing: 'Optimizando…',
  tool_image_optimizer_preview_after: 'Después',
  tool_image_optimizer_preview_before: 'Antes',
  tool_image_optimizer_quality_label: 'Calidad',
  tool_image_optimizer_ratio_tpl: '{from} → {to} ({pct}% más pequeño)',
  tool_image_optimizer_resize_on: 'Limitar el lado más largo',
  tool_image_optimizer_rules_body:
    'Cada códec equilibra peso, aspecto, transparencia y tiempo. Léelo antes de buscar el archivo más pequeño posible.',
  tool_image_optimizer_rules_item_1:
    'MozJPEG: JPEG con pérdida, suele pesar menos que un JPEG típico del navegador — útil si aún necesitas .jpg.',
  tool_image_optimizer_rules_item_2:
    'WebP: fotos más ligeras con aspecto similar; admite transparencia. Buen valor por defecto en muchos sitios.',
  tool_image_optimizer_rules_item_3: 'AVIF: a menudo el más pequeño en pérdida, pero más lento — progreso y cancelación van de la mano.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: reduce PNG sin pérdida. Las fotos siguen grandes; brilla en UI nítida con alfa. El reencode suele quitar EXIF; los bytes no salen de la pestaña.',
  tool_image_optimizer_rules_title: 'Qué debes esperar',
  tool_image_optimizer_sample: 'Cargar ejemplo',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'Listo — revisa el deslizador y el tamaño, luego descarga.',
  tool_image_optimizer_title: 'Optimizar imagen — WebP, AVIF y MozJPEG en tu dispositivo',
  tool_image_optimizer_usecase_1: 'Publicar un hero o foto de producto en WebP/AVIF tras revisar el aspecto con el deslizador.',
  tool_image_optimizer_usecase_2: 'Seguir entregando JPEG, pero con MozJPEG cuando el JPEG del navegador sigue pesando demasiado.',
  tool_image_optimizer_usecase_3: 'Reducir PNG de UI con transparencia con OxiPNG o WebP casi sin pérdida antes de entregar.',
  tool_image_optimizer_usecases_title: 'Buenos encajes',
  tool_image_optimizer_warn_animation: 'Animaciones: solo se optimiza el primer fotograma.',
  tool_image_optimizer_warn_edge: 'Dimensiones muy grandes (>8192 px): espera lentitud; limita el lado máximo.',
  tool_image_optimizer_warn_large: 'Archivo grande (>25 MB): puede ir lento o quedarse sin memoria.',
};
export default es;
