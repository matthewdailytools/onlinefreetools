/**
 * i18n tool shard (flip-image / es).
 * 西语用户检索「voltear imagen / espejo horizontal / invertir foto」；按钮 Voltear / Descargar。
 * 键集须与 en.ts 完全一致；仅编辑本工具键。
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语文案字典（voltear / invertir en espejo，本地 Canvas 处理）。 */
const es: SiteLangDict = {
	tool_flip_image_title: 'Voltear imagen — espejo horizontal o vertical',
	tool_flip_image_desc: 'Invierte una foto en espejo (izquierda-derecha o arriba-abajo) sin subirla al servidor y descárgala en JPEG, WebP o PNG.',
	tool_flip_image_description:
		'Voltea una imagen en espejo horizontal o vertical desde el navegador; sirve para invertir una selfie. En tres pasos: elige la foto, marca la dirección, pulsa Voltear y luego Descargar. Ejemplo: en la cuadrícula A/B/C/D la A pasa a la derecha. Sin subir nada al servidor.',
	tool_flip_image_choose_file: 'Elegir imagen',
	tool_flip_image_drop_hint: 'O arrastra aquí un JPEG, PNG, WebP o GIF. Todo se procesa en esta pestaña.',
	tool_flip_image_flip: 'Voltear',
	tool_flip_image_download: 'Descargar',
	tool_flip_image_sample: 'Cargar ejemplo',
	tool_flip_image_clear: 'Borrar',
	tool_flip_image_flip_h: 'Voltear en horizontal',
	tool_flip_image_flip_v: 'Voltear en vertical',
	tool_flip_image_advanced: 'Ajustes avanzados (opcional)',
	tool_flip_image_format_label: 'Formato de salida',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP pesa poco y conserva la transparencia; PNG no pierde calidad; JPEG necesita un color de fondo.',
	tool_flip_image_quality_label: 'Calidad',
	tool_flip_image_quality_hint: 'Solo afecta a JPEG y WebP. Con PNG este control no hace nada.',
	tool_flip_image_jpeg_bg_label: 'Fondo para JPEG',
	tool_flip_image_jpeg_bg_hint: 'Rellena los píxeles transparentes antes de exportar a JPEG. Por defecto, blanco.',
	tool_flip_image_preview_label: 'Vista previa',
	tool_flip_image_progress: 'Volteando la imagen…',
	tool_flip_image_step_decode: 'Leer',
	tool_flip_image_step_flip: 'Voltear píxeles',
	tool_flip_image_step_encode: 'Codificar',
	tool_flip_image_decode_step: 'Leyendo la imagen…',
	tool_flip_image_flip_step: 'Redibujando en espejo…',
	tool_flip_image_encode_step: 'Codificando en {fmt}…',
	tool_flip_image_elapsed: 'Llevamos {s} s',
	tool_flip_image_empty: 'Primero elige una imagen.',
	tool_flip_image_no_flip: 'Marca Voltear en horizontal, Voltear en vertical o ambas.',
	tool_flip_image_err_decode: 'No se pudo leer la imagen. Prueba con JPEG, PNG o WebP.',
	tool_flip_image_err_encode: 'No se pudo exportar. Prueba con una imagen más pequeña u otro formato.',
	tool_flip_image_warn_large: 'Archivo grande (más de 25 MB): puede tardar.',
	tool_flip_image_warn_edge: 'Un lado supera unos 8192 px: algunos navegadores podrían fallar.',
	tool_flip_image_warn_animation: 'GIF animado: solo se usa el primer fotograma.',
	tool_flip_image_status_working: 'Procesando…',
	tool_flip_image_status_done: 'Listo. Pulsa Descargar para guardarla.',
	tool_flip_image_stats_tpl: 'Volteada {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'Cómo voltear una imagen',
	tool_flip_image_how_body:
		'Voltear no es girar: la foto se refleja sobre un eje, como en un espejo. La página vuelve a dibujar cada píxel en el lado contrario (no es un simple efecto visual) y luego guarda el resultado en el formato que elijas.',
	tool_flip_image_how_item_1: 'Pulsa Elegir imagen o arrastra un JPEG, PNG, WebP o GIF al recuadro.',
	tool_flip_image_how_item_2: 'Marca Voltear en horizontal para invertir izquierda y derecha, o Voltear en vertical para poner arriba lo de abajo. La vista previa cambia al momento.',
	tool_flip_image_how_item_3: 'Si quieres, abre Ajustes avanzados y elige JPEG, WebP o PNG, la calidad y el fondo para JPEG.',
	tool_flip_image_how_item_4: 'Pulsa Voltear, espera a que la barra llegue al 100 % y luego pulsa Descargar.',
	tool_flip_image_why_choose_title: 'Por qué usar Voltear imagen',
	tool_flip_image_why_choose_item_1: 'Ves en la vista previa hacia qué lado se va cada detalle antes de exportar, sin ir probando a ciegas.',
	tool_flip_image_why_choose_item_2: 'Las dos direcciones en una sola pasada: si marcas ambas, una foto rectangular queda como girada 180°.',
	tool_flip_image_why_choose_item_3: 'La foto no sale de tu dispositivo: se procesa en esta pestaña, sin subirla al servidor.',
	tool_flip_image_why_choose_item_4: 'Exportas en JPEG, WebP o PNG con control de calidad y color de fondo para JPEG.',
	tool_flip_image_why_choose_item_5: 'Te avisa antes de que algo falle: archivos de más de 25 MB, lados enormes o GIF animados (solo primer fotograma).',
	tool_flip_image_rules_title: 'Cómo se refleja la imagen',
	tool_flip_image_rules_body:
		'Se crea un lienzo del mismo tamaño que el original, se invierte el eje elegido y se redibuja la foto; después se codifica en el formato de salida.',
	tool_flip_image_rules_item_1: 'Horizontal: espejo sobre el eje vertical; lo que estaba a la izquierda queda a la derecha.',
	tool_flip_image_rules_item_2: 'Vertical: espejo sobre el eje horizontal; la parte de arriba pasa abajo.',
	tool_flip_image_rules_item_3: 'Las dos a la vez equivalen a girar 180° (las esquinas se intercambian en diagonal).',
	tool_flip_image_rules_item_4: 'PNG y WebP conservan la transparencia; JPEG la rellena con el color de fondo; de un GIF animado solo se toma el primer fotograma.',
	tool_flip_image_rules_item_5: 'Voltear solo cambia los píxeles de sitio; al guardar en JPEG o WebP se vuelve a comprimir y el peso del archivo puede variar.',
	tool_flip_image_example_title: 'Ejemplo',
	tool_flip_image_example:
		'Cargar ejemplo dibuja una cuadrícula de 480×320 con los bloques A B arriba y C D abajo. Viene marcado Voltear en horizontal: pulsa Voltear y la A aparece a la derecha, con la B a su izquierda. Descarga el resultado o marca también Voltear en vertical y vuelve a pulsar Voltear: la A termina abajo a la derecha, igual que con un giro de 180°.',
	tool_flip_image_usecases_title: 'Cuándo te sirve',
	tool_flip_image_usecase_1: 'Invertir una selfie que la cámara frontal guardó en espejo, para que el texto de la camiseta o un cartel se lea bien.',
	tool_flip_image_usecase_2: 'Pasar al otro lado un producto en una maqueta para que mire hacia el botón o el texto del anuncio.',
	tool_flip_image_usecase_3: 'Enderezar una página escaneada o fotografiada al revés con Voltear en vertical.',
	tool_flip_image_usecase_4: 'Preparar la versión en espejo de un diseño para imprimir (transferencias, serigrafía) sin abrir un editor de escritorio.',
	tool_flip_image_faq_q1: '¿Se sube mi foto a algún servidor?',
	tool_flip_image_faq_a1:
		'No. La lectura, el volteo y la exportación ocurren en tu navegador. Los scripts se cargan desde este mismo sitio solo cuando hacen falta; los bytes de tu archivo no salen del dispositivo.',
	tool_flip_image_faq_q2: '¿Pierde calidad la imagen al voltearla?',
	tool_flip_image_faq_a2:
		'El volteo en sí solo reordena píxeles. Si guardas en JPEG o WebP, se vuelve a comprimir y el archivo puede cambiar. Para una descarga sin pérdida, elige PNG en Ajustes avanzados.',
	tool_flip_image_faq_q3: '¿Es lo mismo voltear que rotar?',
	tool_flip_image_faq_a3:
		'No. Voltear refleja la foto como un espejo; rotar la gira un ángulo. Aquí solo se hace espejo: si necesitas pasos de 90°, usa una herramienta de rotar.',
	tool_flip_image_faq_q4: '¿Puedo invertirla en horizontal y en vertical a la vez?',
	tool_flip_image_faq_a4:
		'Sí, marca las dos casillas. En una foto rectangular el resultado es el mismo que girarla 180°.',
	tool_flip_image_faq_q5: '¿Funciona con GIF animados?',
	tool_flip_image_faq_a5:
		'Solo se lee y voltea el primer fotograma. La descarga es una imagen fija, sin animación.',
	tool_flip_image_faq_q6: '¿Por qué el JPEG se ve distinto de la vista previa?',
	tool_flip_image_faq_a6:
		'JPEG no admite transparencia, así que las zonas transparentes se rellenan con el fondo para JPEG antes de guardar. En la vista previa esas zonas se muestran como un tablero de cuadros.',
	tool_flip_image_faq_q7: '¿Sirve también para recortar o pasar a blanco y negro?',
	tool_flip_image_faq_a7:
		'No; esta página solo voltea. Para quitar bordes usa Recortar imagen y para quitar el color, Imagen en escala de grises, en las herramientas relacionadas.',
	tool_flip_image_article:
		'Voltea fotos en espejo horizontal o vertical dentro del navegador: los píxeles se redibujan de verdad y el archivo no se sube al servidor.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

/** 默认导出：供 merge:tools 合并进站点 es 字典。 */
export default es;
