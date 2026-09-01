/**
 * Fragmento i18n (open-graph-image-size / es).
 * H1: «Tamaño de imagen Open Graph». El atajo «og image» no va en el título.
 * Secundarios: 1200×630, og:image, Facebook → description / FAQ / casos.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_open_graph_image_size_article:
		'Recorta una foto a la tarjeta Open Graph 1200×630 (unos 1,91:1) y descarga un JPEG. El archivo se queda en el dispositivo y no se sube al servidor.',
	tool_open_graph_image_size_choose_image: 'Elegir imagen',
	tool_open_graph_image_size_clear: 'Limpiar',
	tool_open_graph_image_size_desc:
		'Exporta una imagen Open Graph a 1200×630; no sale del dispositivo ni se sube al servidor.',
	tool_open_graph_image_size_description:
		'Tamaño de imagen Open Graph: elige una foto, rellénala a 1200×630 (cerca de 1,91:1) y baja un JPEG. Ejemplo: al abrir, la muestra ya está recortada al marco de la tarjeta. El chip 1200×627 de LinkedIn es opcional. Las fotos no salen del dispositivo y no se suben al servidor. Para revisar la etiqueta og:image de una URL usa la página de vista previa, no este H1. El título no es el atajo «og image».',
	tool_open_graph_image_size_download: 'Descargar JPEG',
	tool_open_graph_image_size_drop_hint: 'Suelta una foto. El relleno puede recortar los bordes.',
	tool_open_graph_image_size_empty: 'Elige una imagen primero.',
	tool_open_graph_image_size_err_decode: 'No se pudo leer esa imagen. Prueba JPEG, PNG o WebP.',
	tool_open_graph_image_size_example:
		'Cargar ejemplo pinta un paisaje de relleno, cubre 1200×630 y activa Descargar JPEG. 1200×627 es el chip de LinkedIn.',
	tool_open_graph_image_size_example_title: 'Ejemplo',
	tool_open_graph_image_size_faq_a1:
		'No. La foto se queda en esta pestaña. No se envía a Facebook, LinkedIn ni a nuestros servidores.',
	tool_open_graph_image_size_faq_a2:
		'Las búsquedas cortas «og image» se prestan a jerga. El H1 de esta página es la frase completa: Tamaño de imagen Open Graph.',
	tool_open_graph_image_size_faq_a3:
		'1200×630 es la tarjeta 1,91:1 habitual. 1200×627 es casi igual y lo piden en LinkedIn. Stories y portadas de canal no caben aquí.',
	tool_open_graph_image_size_faq_a4:
		'Aquí solo salen píxeles. Para ver si og:image aparece en un enlace, abre la herramienta de vista previa Open Graph.',
	tool_open_graph_image_size_faq_a5:
		'Sí. El relleno escala hasta llenar 1200×630 y recorta lo que sobra.',
	tool_open_graph_image_size_faq_q1: '¿Se sube mi foto?',
	tool_open_graph_image_size_faq_q2: '¿Por qué el título no es «og image»?',
	tool_open_graph_image_size_faq_q3: '¿1200×630 o 1200×627?',
	tool_open_graph_image_size_faq_q4: '¿Dónde compruebo si se ve og:image?',
	tool_open_graph_image_size_faq_q5: '¿Se van a recortar los bordes?',
	tool_open_graph_image_size_how_body:
		'Elige la foto que debe verse al compartir el enlace, cubre 1200×630 y descarga. Depurar etiquetas es otra página.',
	tool_open_graph_image_size_how_item_1: 'Elige la foto de la tarjeta Open Graph: ese es el trabajo.',
	tool_open_graph_image_size_how_item_2: 'Deja 1200×630 salvo que te pidan exactamente 1200×627.',
	tool_open_graph_image_size_how_item_3: 'Descarga el JPEG. El recorte evita barras en la tarjeta.',
	tool_open_graph_image_size_how_item_4: 'El ejemplo ya se cargó al entrar. Las etiquetas se revisan en la vista previa.',
	tool_open_graph_image_size_how_title: 'Cómo funciona',
	tool_open_graph_image_size_load_sample: 'Cargar ejemplo',
	tool_open_graph_image_size_out_size_label: 'Tamaño de salida',
	tool_open_graph_image_size_quality_label: 'Calidad JPEG',
	tool_open_graph_image_size_rules_body:
		'Exportar la tarjeta pide un marco ~1,91:1, relleno con recorte, y no mezclarlo con la vista previa de etiquetas.',
	tool_open_graph_image_size_rules_item_1:
		'Lienzo por defecto: 1200×630. Chip opcional: 1200×627. Proporción ~1,91:1.',
	tool_open_graph_image_size_rules_item_2:
		'Relleno (sin franjas). Lo que sobra se recorta.',
	tool_open_graph_image_size_rules_item_3:
		'Depurar og:image es la página de vista previa, no este H1.',
	tool_open_graph_image_size_rules_item_4:
		'Stories, miniaturas de YouTube y arte de canal quedan fuera.',
	tool_open_graph_image_size_rules_title: 'Reglas que debes esperar',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'Tarjeta lista: descarga o cambia la foto.',
	tool_open_graph_image_size_status_working: 'Rellenando…',
	tool_open_graph_image_size_title: 'Tamaño de imagen Open Graph',
	tool_open_graph_image_size_usecase_1:
		'Antes de publicar un post: exporta el JPEG 1200×630 y luego pones og:image.',
	tool_open_graph_image_size_usecase_2:
		'URL de producto: recorta el pack a la tarjeta sin abrir un programa de diseño.',
	tool_open_graph_image_size_usecase_3:
		'Si un partner pide LinkedIn 1200×627, usa ese chip.',
	tool_open_graph_image_size_usecases_title: 'Cuándo encaja',
};

export default es;
