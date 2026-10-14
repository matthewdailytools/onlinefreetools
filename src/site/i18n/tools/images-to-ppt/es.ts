/**
 * i18n tool shard (images-to-ppt / es).
 * 多图转 PowerPoint 西班牙语文案：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语文案字典。 */
const es: SiteLangDict = {
	tool_images_to_ppt_title: 'Imágenes a PowerPoint — fotos a diapositivas PPTX',
	tool_images_to_ppt_desc: 'Convierte fotos locales en un .pptx con una diapositiva por imagen.',
	tool_images_to_ppt_description:
		'Convierte varias fotos a PowerPoint (.pptx) en el navegador: una imagen por diapositiva, 16:9 o 4:3, contain o cover. Pasos: Elegir imágenes, Convertir a PowerPoint, Descargar. Ejemplo: tres fotos → tres diapositivas. Los archivos no salen de esta pestaña ni se suben al servidor.',
	tool_images_to_ppt_choose_files: 'Elegir imágenes',
	tool_images_to_ppt_drop_hint: 'O suelta aquí varios JPEG, PNG, WebP o GIF. El proceso se queda en esta pestaña.',
	tool_images_to_ppt_convert: 'Convertir a PowerPoint',
	tool_images_to_ppt_download: 'Descargar',
	tool_images_to_ppt_sample: 'Cargar ejemplo',
	tool_images_to_ppt_clear: 'Borrar',
	tool_images_to_ppt_advanced: 'Ajustes avanzados (opcional)',
	tool_images_to_ppt_layout_label: 'Tamaño de diapositiva',
	tool_images_to_ppt_layout_16x9: 'Panorámico 16:9',
	tool_images_to_ppt_layout_4x3: 'Estándar 4:3',
	tool_images_to_ppt_layout_hint: 'La mayoría de proyectores modernos usan 16:9. Elige 4:3 para aulas antiguas.',
	tool_images_to_ppt_fit_label: 'Cómo llena la imagen la diapositiva',
	tool_images_to_ppt_fit_contain: 'Caber imagen completa (bandas)',
	tool_images_to_ppt_fit_cover: 'Rellenar diapositiva (puede recortar)',
	tool_images_to_ppt_fit_hint: 'Contain deja visible cada píxel. Cover rellena la diapositiva y puede recortar fotos altas o anchas.',
	tool_images_to_ppt_bg_label: 'Fondo de diapositiva',
	tool_images_to_ppt_bg_hint: 'Se ve en las bandas cuando el ajuste es contain. El valor por defecto es blanco.',
	tool_images_to_ppt_progress: 'Creando PowerPoint…',
	tool_images_to_ppt_step_encode: 'Codificar imágenes',
	tool_images_to_ppt_step_build: 'Montar diapositivas',
	tool_images_to_ppt_step_pack: 'Empaquetar PPTX',
	tool_images_to_ppt_encode_step: 'Codificando imagen {i} de {n}…',
	tool_images_to_ppt_build_step: 'Añadiendo diapositivas a la presentación…',
	tool_images_to_ppt_pack_step: 'Empaquetando el archivo .pptx…',
	tool_images_to_ppt_elapsed: 'Transcurrido {s}s',
	tool_images_to_ppt_move_up: 'Subir',
	tool_images_to_ppt_move_down: 'Bajar',
	tool_images_to_ppt_remove: 'Quitar',
	tool_images_to_ppt_empty: 'Añade al menos una imagen primero.',
	tool_images_to_ppt_err_decode: 'No se pudo decodificar la imagen. Prueba JPEG, PNG o WebP.',
	tool_images_to_ppt_err_convert: 'No se pudo crear el PowerPoint. Prueba con menos imágenes o más pequeñas.',
	tool_images_to_ppt_err_lib: 'Falló la carga de la biblioteca PPTX. Actualiza la página e inténtalo de nuevo.',
	tool_images_to_ppt_warn_large: 'Archivo grande (>25 MB) — la conversión puede ir lenta.',
	tool_images_to_ppt_warn_edge: 'Un lado supera ~8192 px — algunos navegadores pueden fallar.',
	tool_images_to_ppt_warn_animation: 'GIF animado: en la diapositiva solo se usa el primer fotograma.',
	tool_images_to_ppt_status_converting: 'Convirtiendo a PowerPoint…',
	tool_images_to_ppt_status_done: 'Listo — pulsa Descargar para guardar el .pptx.',
	tool_images_to_ppt_stats_tpl: '{n} diapositivas → PPTX listo ({bytes})',
	tool_images_to_ppt_how_title: 'Cómo convertir imágenes a PowerPoint',
	tool_images_to_ppt_how_body:
		'Cada archivo de la lista se convierte en una diapositiva. Reordena con las flechas y luego convierte. Los ajustes opcionales cambian el tamaño, cómo llenan las fotos la diapositiva y el color de las bandas.',
	tool_images_to_ppt_how_item_1: 'Elegir imágenes o soltar JPEG, PNG, WebP o GIF en la zona de arrastre.',
	tool_images_to_ppt_how_item_2: 'Reordena con Subir / Bajar si el orden de diapositivas no es el correcto. Quita las que no necesites.',
	tool_images_to_ppt_how_item_3: 'Si quieres, abre Ajustes avanzados para elegir 16:9 o 4:3, contain o cover, y un color de fondo.',
	tool_images_to_ppt_how_item_4: 'Pulsa Convertir a PowerPoint, espera la barra de progreso y luego pulsa Descargar.',
	tool_images_to_ppt_why_choose_title: 'Por qué usar Imágenes a PowerPoint — fotos a diapositivas PPTX',
	tool_images_to_ppt_why_choose_item_1: 'Una diapositiva por foto, en el orden que indiques — sin subir al servidor y sin cuenta.',
	tool_images_to_ppt_why_choose_item_2: 'Panorámico 16:9 o clásico 4:3, para que la presentación encaje con el proyector del aula o sala.',
	tool_images_to_ppt_why_choose_item_3: 'Contain conserva la foto entera; cover rellena la diapositiva cuando quieres un aspecto a sangre.',
	tool_images_to_ppt_why_choose_item_4: 'Avisos suaves para archivos enormes, bordes de muchos píxeles y GIF animados (solo el primer fotograma).',
	tool_images_to_ppt_why_choose_item_5: 'Un HUD de progreso visible mientras se codifica cada imagen y se empaqueta el .pptx.',
	tool_images_to_ppt_rules_title: 'Reglas',
	tool_images_to_ppt_rules_body: 'La presentación se arma con PptxGenJS por completo en esta pestaña del navegador.',
	tool_images_to_ppt_rules_item_1: 'El diseño por defecto es panorámico 16:9; cambia a 4:3 en Ajustes avanzados cuando lo necesites.',
	tool_images_to_ppt_rules_item_2: 'El orden de las diapositivas sigue la lista. Usa Subir / Bajar antes de convertir.',
	tool_images_to_ppt_rules_item_3: 'Contain deja bandas con el color de fondo; cover recorta para llenar el área de contenido.',
	tool_images_to_ppt_rules_item_4: 'Los GIF animados aportan solo el primer fotograma. No se añaden títulos ni transiciones: edítalos en PowerPoint tras Descargar.',
	tool_images_to_ppt_rules_item_5: 'Cargar la biblioteca PPTX desde este sitio no sube tus fotos a nuestros servidores.',
	tool_images_to_ppt_example_title: 'Ejemplo',
	tool_images_to_ppt_example:
		'Cargar ejemplo crea tres diapositivas de bloques de color (sample-a, sample-b, sample-c) en 16:9 con ajuste contain. Convertir a PowerPoint termina en el navegador; Descargar guarda images.pptx. Cambia a 4:3 o cover y vuelve a convertir para comparar el recorte.',
	tool_images_to_ppt_usecases_title: 'Cuándo usarlo',
	tool_images_to_ppt_usecase_1: 'Pasar un lote de fotos del móvil a una charla rápida sin abrir PowerPoint de escritorio primero.',
	tool_images_to_ppt_usecase_2: 'Recorridos de producto donde cada captura necesita su propia diapositiva a sangre o con bandas.',
	tool_images_to_ppt_usecase_3: 'Fotos de clase o de campo que deben coincidir con un proyector 4:3 que aún se usa.',
	tool_images_to_ppt_usecase_4: 'Montar un borrador desde imágenes antes de añadir títulos, notas y animaciones en PowerPoint o LibreOffice Impress.',
	tool_images_to_ppt_faq_q1: '¿Se suben mis fotos?',
	tool_images_to_ppt_faq_a1:
		'No. La decodificación, el diseño de diapositivas y el empaquetado PPTX corren en tu pestaña. La única petición de red es cargar el script PptxGenJS desde la carpeta vendor de este sitio.',
	tool_images_to_ppt_faq_q2: '¿Necesito tener Microsoft PowerPoint instalado?',
	tool_images_to_ppt_faq_a2:
		'No. Cualquier app que abra .pptx sirve: PowerPoint, Google Slides (Archivo → Importar), LibreOffice Impress, Keynote y otras.',
	tool_images_to_ppt_faq_q3: '¿Puedo añadir títulos o animaciones aquí?',
	tool_images_to_ppt_faq_a3:
		'No en esta página. Exporta primero las diapositivas con fotos y luego abre el archivo en PowerPoint (o Impress) para texto, transiciones y notas del presentador.',
	tool_images_to_ppt_faq_q4: '¿Imágenes a PowerPoint o imágenes a PDF?',
	tool_images_to_ppt_faq_a4:
		'El PPTX sigue siendo editable como diapositivas. El PDF queda fijo para entregas e impresión. Usa la herramienta Imágenes a PDF cuando necesites un documento, no una presentación.',
	tool_images_to_ppt_faq_q5: '¿Contain o cover — cuál elijo?',
	tool_images_to_ppt_faq_a5:
		'Contain (predeterminado) muestra la foto entera con bandas del color de fondo. Cover rellena la diapositiva y puede recortar bordes: útil para fotos de producto a sangre.',
	tool_images_to_ppt_faq_q6: '¿Qué pasa con los GIF animados?',
	tool_images_to_ppt_faq_a6:
		'Solo se coloca el primer fotograma en la diapositiva. PowerPoint no reproduce GIF de varios fotogramas como animación a partir de esta exportación.',
	tool_images_to_ppt_faq_q7: '¿Por qué la conversión va lenta o falla?',
	tool_images_to_ppt_faq_a7:
		'Archivos muy grandes (>25 MB) o lados por encima de ~8192 px pueden saturar el navegador. Reduce o comprime las imágenes y vuelve a convertir con menos archivos si hace falta.',
	tool_images_to_ppt_article: 'Convertir imágenes a una presentación PowerPoint PPTX en el navegador',
	tool_images_to_ppt_references: 'Referencias PptxGenJS y MDN Blob para la ruta de exportación en el cliente.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — biblioteca JavaScript de PowerPoint',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default es;
