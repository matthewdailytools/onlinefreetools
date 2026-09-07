/**
 * i18n tool shard (batch-convert-web-pages-to-png / es).
 * H1: Convertir varias páginas web a PNG. IG vs JPG: PNG sin pérdida, bordes de 1 px, fondo transparente opcional, escala 1×/2× — no calidad JPEG, no A4.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Ajustes avanzados (opcional)',
	tool_batch_convert_web_pages_to_png_article:
		'Cada URL pública se convierte en un PNG sin pérdida al ancho que elijas (escritorio 1280, tableta 768 o teléfono 390). Fondo blanco o transparente, escala 1× o 2×, y un ZIP con las filas que salieron bien. Sirve para bordes de interfaz de 1 px; no es un JPEG de chat ni un PDF A4. Pedimos cada dirección una vez para traer el HTML y no la guardamos. La conversión a PNG ocurre en esta pestaña. ¿Quieres un archivo más pequeño para enviar? Usa Convertir varias páginas web a JPG.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Fondo',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Transparente',
	tool_batch_convert_web_pages_to_png_bg_white: 'Blanco',
	tool_batch_convert_web_pages_to_png_capture_first: 'Primera pantalla',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Marco oculto de captura',
	tool_batch_convert_web_pages_to_png_capture_full: 'Página completa',
	tool_batch_convert_web_pages_to_png_capture_label: 'Alcance de la captura',
	tool_batch_convert_web_pages_to_png_clear: 'Borrar',
	tool_batch_convert_web_pages_to_png_col_file: 'Archivo',
	tool_batch_convert_web_pages_to_png_col_status: 'Estado',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Convertir todo',
	tool_batch_convert_web_pages_to_png_desc:
		'Lista de URL a PNG sin pérdida (fondo transparente y 2× opcionales) y ZIP. No es JPEG ni A4.',
	tool_batch_convert_web_pages_to_png_description:
		'Convertir varias páginas web a PNG: capturas sin pérdida y ZIP desde una lista de URL. Fondo blanco o transparente, 1× o 2×. Pasos: pega URLs, Convertir todo, Descargar ZIP. Ejemplo: dos kits de UI salen nítidos. Una línea basta para captura de web a PNG / URL a PNG. Cada dirección se pide una vez y no se guarda; el PNG se arma en esta pestaña.',
	tool_batch_convert_web_pages_to_png_download_zip: 'Descargar ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'Pega primero al menos una URL pública.',
	tool_batch_convert_web_pages_to_png_err_convert: 'Esta dirección no se pudo pasar a PNG. Se omitió.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_convert_web_pages_to_png_err_load: 'No cargó la biblioteca de conversión. Actualiza e inténtalo de nuevo.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'Como máximo 10 URL. Las líneas de más no se añadieron.',
	tool_batch_convert_web_pages_to_png_err_url: 'No se pudo cargar esa URL. Revisa la dirección o el sitio bloquea la petición.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'Esa línea no es una URL http(s) válida. Se omitió.',
	tool_batch_convert_web_pages_to_png_example:
		'Cargar ejemplo rellena un kit de componentes y una capa semitransparente, genera dos PNG en el navegador (el borde de 1 px sigue nítido; con fondo transparente el overlay deja ver el damero) sin visitar el sitio en vivo, y habilita Descargar ZIP. Convertir todo sí pide las URL que pegaste. El ancho de vista, el fondo, la escala y página completa vs primera pantalla cambian los píxeles.',
	tool_batch_convert_web_pages_to_png_example_title: 'Ejemplo',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Las filas correctas salen cada una como PNG suelto dentro de un solo ZIP. Una sola URL también vale (captura de web a PNG): pega una línea. No se fusionan varias capturas en un único archivo.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'La conversión corre en esta pestaña. Si pegas una lista, enviamos cada dirección a nuestro servidor una vez para traer el HTML; no almacenamos las páginas. Los PNG se construyen en tu navegador y el ZIP se arma aquí, sin subir el resultado a un servidor nuestro.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'Convertir varias páginas web a JPG escribe JPEG con pérdida (control de calidad) pensado para chat y tickets. Aquí el artefacto es PNG sin pérdida: texto y bordes de 1 px nítidos, fondo transparente opcional y escala 1×/2×. Misma lista de URL, otro archivo.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'El transparente solo se nota donde el propio HTML tiene alfa o no rellena el fondo. Una home blanca sigue viéndose blanca. 2× duplica píxeles (revisión retina) y agranda el archivo. Un bloque de color sólido no se “agujerea” hasta el damero.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Convertir varias páginas web a PDF pagina en A4 para leer e imprimir. Aquí hay un PNG raster por URL. ¿Necesitas hojas imprimibles? Usa esa herramienta.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'No. Se quitan los scripts. Muros de login, paywalls y apps pintadas con JavaScript casi nunca coinciden con lo que ves autenticado. El CSS responsive sigue el ancho de vista que elegiste.',
	tool_batch_convert_web_pages_to_png_faq_q1: '¿El resultado es un PNG o un ZIP? ¿Puedo convertir una sola URL?',
	tool_batch_convert_web_pages_to_png_faq_q2: '¿Se suben y se guardan mis páginas?',
	tool_batch_convert_web_pages_to_png_faq_q3: '¿En qué se diferencia de Convertir varias páginas web a JPG?',
	tool_batch_convert_web_pages_to_png_faq_q4: '¿Cuándo se ve el PNG transparente y qué cambia el 2×?',
	tool_batch_convert_web_pages_to_png_faq_q5: '¿Y respecto a Convertir varias páginas web a PDF?',
	tool_batch_convert_web_pages_to_png_faq_q6: '¿Un sitio con login o mucho JavaScript coincidirá con lo publicado?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URL en cola',
	tool_batch_convert_web_pages_to_png_how_body:
		'El destino es un ZIP de capturas de interfaz nítidas: pega las URL, pulsa Convertir todo (escritorio 1280, fondo blanco, 1× y página completa por defecto) y descarga las PNG que salieron bien.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'Pega una URL https por línea (kits de componentes y docs de UI públicas encajan bien). Una línea alcanza para captura de web a PNG.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Pulsa Convertir todo. Por defecto: escritorio 1280, fondo blanco, 1× y página completa. Cada URL pública se pide una vez; las filas fallidas se saltan.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'¿Quieres fondo transparente, 2×, ancho de teléfono o solo la primera pantalla? Abre Ajustes avanzados (opcional) para vista, fondo, escala, alcance y espera de carga.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'¿JPEG más liviano para chat? Convertir varias páginas web a JPG. ¿Archivo A4? Convertir varias páginas web a PDF. ¿Ya tienes fotos en el dispositivo? Convertir imágenes a PNG en lote.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'Cuando al menos una fila esté lista, pulsa Descargar ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Cargar ejemplo prueba dos capturas de interfaz locales; el panel de progreso se muestra mientras convierten.',
	tool_batch_convert_web_pages_to_png_how_title: 'Cómo hacerlo',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}s transcurridos',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Pedir',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Imágenes',
	tool_batch_convert_web_pages_to_png_hud_title: 'Progreso del lote',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'El ancho de vista cambia el maquetado. El fondo transparente conserva el alfa. 2× duplica píxeles. Página completa es una captura alta; primera pantalla tiene más o menos la altura de una vista.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'Una URL http(s) por línea, hasta 10. El lote va en serie. Las fallidas se omiten. Las PNG correctas van al ZIP. Fondo y escala cambian los píxeles: no es un JPEG renombrado ni un PDF.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Cada URL se envía una vez a nuestro servidor para traer HTML y no se almacena. El PNG se genera en esta pestaña.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Redes privadas, inicios de sesión y direcciones rotas fallan esa fila. El resto del lote sigue.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Nombres ZIP duplicados pasan a name (2).png. Se quitan scripts y trampas noscript de recarga. Las capturas muy altas se recortan para no tumbar la pestaña.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'No recorre un sitio entero. Pega las URL que ya tienes.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'Frente a Convertir varias páginas web a JPG: PNG sin pérdida, sin deslizador JPEG, fondo transparente opcional. Frente a Convertir varias páginas web a PDF: sin paginar A4. Frente a Convertir imágenes a PNG en lote: la entrada es una URL, no una foto del dispositivo.',
	tool_batch_convert_web_pages_to_png_rules_title: 'Qué debes esperar',
	tool_batch_convert_web_pages_to_png_sample: 'Cargar ejemplo',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Escala de píxeles',
	tool_batch_convert_web_pages_to_png_status_converting: 'Generando PNG… esta pestaña puede pausarse unos segundos',
	tool_batch_convert_web_pages_to_png_status_done: 'Lote terminado — revisa la tabla y descarga el ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'Pidiendo el HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG listo',
	tool_batch_convert_web_pages_to_png_status_queued: 'En cola',
	tool_batch_convert_web_pages_to_png_status_skip: 'Omitido',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Esperando a que terminen las imágenes…',
	tool_batch_convert_web_pages_to_png_status_working: 'Convirtiendo el lote…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} listos · {skip} omitidos',
	tool_batch_convert_web_pages_to_png_title: 'Convertir varias páginas web a PNG',
	tool_batch_convert_web_pages_to_png_url_hint:
		'Una URL http(s) pública por línea, hasta 10. Pedimos cada una una vez y reescribimos CSS e imágenes. Los scripts se quitan antes de capturar. El layout sigue el ancho de vista.',
	tool_batch_convert_web_pages_to_png_url_label: 'URL (una por línea)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Guardar un kit de componentes como PNG nítido: etiquetas y bordes de 1 px se leen; el JPEG los emborrona.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Exportar un panel flotante con PNG transparente y soltarlo en Figma. Una home de color sólido seguirá viéndose opaca.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'Deja los JPEG de chat en Convertir varias páginas web a JPG y el A4 en Convertir varias páginas web a PDF; usa esta herramienta cuando necesites raster de interfaz sin pérdida.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Dónde encaja',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Escritorio 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Ancho de vista',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Teléfono 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Tableta 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Segundos extra cuando las imágenes remotas aún cargan. Por defecto 1. Súbelo si el PNG muestra recuadros vacíos.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Espera de carga (s)',
};

export default es;
