/**
 * i18n tool shard (image-grayscale / es).
 * Spanish (tú) rewrite: convertir a blanco y negro / escala de grises, método a elegir,
 * desaturación parcial, Convertir → Descargar with gold HUD and collapsed export settings.
 */
import type { SiteLangDict } from '../../../types';

/** Spanish strings for the image grayscale converter. */
const es: SiteLangDict = {
	tool_image_grayscale_title: 'Convertir imagen a blanco y negro — escala de grises con el método que elijas',
	tool_image_grayscale_desc: 'Pasa una foto a blanco y negro en el navegador, elige el método y descarga.',
	tool_image_grayscale_description:
		'Convierte una foto a blanco y negro (escala de grises) en el navegador. Pasos: elige la imagen, elige luminancia, media, ligereza o un canal, ajusta la intensidad, pulsa Convertir y descarga JPEG, WebP o PNG. Incluye fórmula y ejemplo con barras de color.',
	tool_image_grayscale_choose_file: 'Elegir imagen',
	tool_image_grayscale_drop_hint: 'O suelta aquí un JPEG, PNG, WebP o GIF.',
	tool_image_grayscale_convert: 'Convertir a blanco y negro',
	tool_image_grayscale_download: 'Descargar',
	tool_image_grayscale_sample: 'Cargar ejemplo',
	tool_image_grayscale_clear: 'Borrar',
	tool_image_grayscale_method_label: 'Método de escala de grises',
	tool_image_grayscale_method_luma601: 'Luminancia — Rec.601 (recomendado)',
	tool_image_grayscale_method_luma709: 'Luminancia — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Media de R, G, B',
	tool_image_grayscale_method_lightness: 'Ligereza (máx. + mín.) ÷ 2',
	tool_image_grayscale_method_red: 'Solo canal rojo (efecto filtro rojo)',
	tool_image_grayscale_method_green: 'Solo canal verde',
	tool_image_grayscale_method_blue: 'Solo canal azul',
	tool_image_grayscale_method_hint: 'La luminancia respeta el brillo que percibe el ojo. La vista previa se actualiza al cambiar.',
	tool_image_grayscale_amount_label: 'Intensidad',
	tool_image_grayscale_amount_hint: '100 % = blanco y negro completo; valores más bajos dejan algo de color (desaturar).',
	tool_image_grayscale_show_original: 'Mostrar original',
	tool_image_grayscale_advanced: 'Ajustes avanzados (opcional)',
	tool_image_grayscale_format_label: 'Formato de salida',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP pesa poco y conserva la transparencia. PNG es sin pérdida. JPEG necesita un color de fondo.',
	tool_image_grayscale_quality_label: 'Calidad',
	tool_image_grayscale_quality_hint: 'Solo JPEG y WebP; PNG lo ignora.',
	tool_image_grayscale_jpeg_bg_label: 'Fondo JPEG',
	tool_image_grayscale_jpeg_bg_hint: 'Rellena las zonas transparentes antes de exportar a JPEG. Por defecto es blanco.',
	tool_image_grayscale_preview_label: 'Vista previa',
	tool_image_grayscale_progress: 'Convirtiendo a escala de grises…',
	tool_image_grayscale_step_decode: 'Decodificar',
	tool_image_grayscale_step_gray: 'Convertir píxeles',
	tool_image_grayscale_step_encode: 'Codificar',
	tool_image_grayscale_decode_step: 'Leyendo la imagen…',
	tool_image_grayscale_gray_step: 'Recalculando cada píxel…',
	tool_image_grayscale_encode_step: 'Guardando como {fmt}…',
	tool_image_grayscale_elapsed: 'Transcurridos {s} s',
	tool_image_grayscale_empty: 'Elige primero una imagen.',
	tool_image_grayscale_err_decode: 'No se pudo abrir este archivo como imagen. Prueba un JPEG, PNG o WebP.',
	tool_image_grayscale_err_encode: 'No se pudo guardar la imagen. Prueba una más pequeña u otro formato.',
	tool_image_grayscale_warn_large: 'Archivo grande (más de 25 MB): la conversión puede ir lenta.',
	tool_image_grayscale_warn_edge: 'Un lado supera unos 8192 px: algunos navegadores pueden fallar al procesarlo.',
	tool_image_grayscale_warn_animation: 'GIF animado: solo se convierte el primer fotograma.',
	tool_image_grayscale_status_working: 'Procesando…',
	tool_image_grayscale_status_done: 'Listo — pulsa Descargar para guardar.',
	tool_image_grayscale_stats_tpl: '{w} × {h} px · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'Cómo convertir una imagen a blanco y negro',
	tool_image_grayscale_how_body:
		'En cada píxel se sustituyen los valores rojo, verde y azul por un solo gris, de modo que R = G = B. El método decide cómo se calcula ese gris; por eso la misma foto puede salir más clara, más oscura o más plana.',
	tool_image_grayscale_how_item_1: 'Elige una foto o suéltala en el cuadro.',
	tool_image_grayscale_how_item_2: 'Elige el método de escala de grises y la intensidad; marca Mostrar original para comparar.',
	tool_image_grayscale_how_item_3: 'Pulsa Convertir a blanco y negro y espera la barra de progreso.',
	tool_image_grayscale_how_item_4: 'Pulsa Descargar. Abre primero Ajustes avanzados si necesitas PNG, JPEG u otra calidad.',
	tool_image_grayscale_why_choose_title: 'Por qué usar este conversor a blanco y negro',
	tool_image_grayscale_why_choose_item_1:
		'Los modos de un solo canal imitan filtros de película: el canal rojo oscurece cielos azules y suaviza la piel; el azul aclara los cielos y realza pecas.',
	tool_image_grayscale_why_choose_item_2:
		'Siete métodos en lugar de un filtro fijo. En el ejemplo, el rojo puro da 76 con luminancia Rec.601 y 85 con la media; la ligereza deja el rojo, verde, azul y amarillo en el mismo gris 128.',
	tool_image_grayscale_why_choose_item_3:
		'La intensidad permite un aspecto desaturado a medias, no solo blanco y negro total.',
	tool_image_grayscale_why_choose_item_4:
		'Se reescriben los píxeles: el archivo descargado sigue en blanco y negro en cualquier app, a diferencia de un filtro CSS o un ajuste de pantalla.',
	tool_image_grayscale_why_choose_item_5:
		'La transparencia se conserva en PNG y WebP, y la foto se procesa en esta pestaña del navegador sin subirse a un servidor.',
	tool_image_grayscale_rules_title: 'Fórmulas de escala de grises usadas',
	tool_image_grayscale_rules_body: 'R, G y B son los valores 0–255 del píxel; el resultado Y se escribe en los tres canales.',
	tool_image_grayscale_rules_item_1:
		'Luminancia Rec.601: Y = 0,299 R + 0,587 G + 0,114 B — el ponderado clásico de TV y JPEG, el más cercano al brillo percibido de cada color.',
	tool_image_grayscale_rules_item_2:
		'Luminancia Rec.709: Y = 0,2126 R + 0,7152 G + 0,0722 B — pesos de vídeo HD, también usados por el filtro CSS grayscale(). Como la mayoría de editores, se aplica a los valores sRGB almacenados sin linealizar el gamma.',
	tool_image_grayscale_rules_item_3:
		'Media: Y = (R + G + B) ÷ 3. Ligereza: Y = (el mayor + el menor) ÷ 2. Los modos de canal copian solo R, G o B.',
	tool_image_grayscale_rules_item_4:
		'Intensidad s: nuevo valor = original + (Y − original) × s. Al 100 % cada píxel es gris; al 50 % los colores quedan a mitad de camino hacia el gris.',
	tool_image_grayscale_rules_item_5:
		'El alfa (transparencia) no cambia; JPEG lo rellena con el color de fondo. Los GIF animados usan el primer fotograma. Al guardar se vuelve a codificar la imagen.',
	tool_image_grayscale_example_title: 'Ejemplo',
	tool_image_grayscale_example:
		'El ejemplo tiene barras de rojo, verde, azul y amarillo puros sobre una franja arcoíris. Con Rec.601 pasan a 76, 150, 29 y 226 — cuatro grises bien distintos. Rec.709 da 54, 182, 18 y 237; la media da 85, 85, 85 y 170, así que rojo, verde y azul se funden; la ligereza deja los cuatro en 128. Cambia de método para ver la vista previa y luego Convertir y Descargar.',
	tool_image_grayscale_usecases_title: 'Cuándo usarlo',
	tool_image_grayscale_usecase_1:
		'Fotos en blanco y negro para retratos, redes o un look vintage: prueba el canal rojo para un filtro de película clásico.',
	tool_image_grayscale_usecase_2:
		'Imprimir en láser monocromo o para periódico: convierte antes para ver cómo se separan los colores en gris.',
	tool_image_grayscale_usecase_3:
		'Revisar un gráfico, logo o paleta de interfaz: si dos colores caen en el mismo gris, quien tenga daltonismo puede no distinguirlos.',
	tool_image_grayscale_usecase_4:
		'Preparar escaneos y documentos: la escala de grises quita el tinte del papel y deja el archivo más simple.',
	tool_image_grayscale_faq_q1: '¿Puedo dejar un poco de color?',
	tool_image_grayscale_faq_a1:
		'Sí. Baja la intensidad: 70–80 % da un aspecto apagado y desaturado; 0 % deja la foto igual. Conservar un solo color (color selectivo) exige máscaras, y esta página no las hace.',
	tool_image_grayscale_faq_q2: '¿Qué método de escala de grises elijo?',
	tool_image_grayscale_faq_a2:
		'En fotos, empieza por luminancia Rec.601: pondera más el verde y menos el azul, como se percibe el brillo. Rec.709 es un poco más clara en los verdes. Media y ligereza son más simples, pero pueden aplanar imágenes muy coloridas. Usa un solo canal si quieres un efecto de filtro deliberado.',
	tool_image_grayscale_faq_q3: '¿Por qué mi foto en blanco y negro se ve plana?',
	tool_image_grayscale_faq_a3:
		'Colores que solo difieren en el tono pueden acabar en el mismo gris. Una flor roja sobre hojas verdes es el caso clásico: con la media ambos dan 85. Pasa a luminancia o prueba el canal rojo o verde para separarlos.',
	tool_image_grayscale_faq_q4: '¿Qué pasa con las PNG transparentes?',
	tool_image_grayscale_faq_a4:
		'La transparencia se conserva al descargar PNG o WebP. JPEG no guarda transparencia, así que esas zonas se rellenan con el color de fondo JPEG de Ajustes avanzados.',
	tool_image_grayscale_faq_q5: '¿El archivo descargado es realmente en escala de grises, y pesa menos?',
	tool_image_grayscale_faq_a5:
		'Cada píxel tiene R, G y B iguales, así que se ve e imprime como gris puro. Los navegadores lo guardan como RGB normal, no como un canal único, así que la bajada de tamaño es modesta — suele notarse más en PNG. Usa un editor si necesitas modo de color de 8 bits en escala de grises.',
	tool_image_grayscale_faq_q6: '¿Es lo mismo que el filtro CSS grayscale() o el modo mono del móvil?',
	tool_image_grayscale_faq_a6:
		'CSS grayscale(100 %) usa los mismos pesos que la opción Rec.709, pero solo cambia cómo se muestra la imagen en la página; el archivo sigue a color. Los filtros del móvil suelen añadir contraste o tono. Esta herramienta escribe píxeles grises en un archivo nuevo.',
	tool_image_grayscale_faq_q7: '¿Se sube mi foto?',
	tool_image_grayscale_faq_a7:
		'No. La decodificación, la conversión y el guardado ocurren en esta pestaña del navegador. Guarda el original si puedes querer la versión a color: la descarga en gris no se puede devolver a color.',
	tool_image_grayscale_article: 'Imagen a escala de grises',
	tool_image_grayscale_ref_a_label: 'Wikipedia — Escala de grises (conversión de color a gris)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — matriz grayscale()',
};

export default es;
