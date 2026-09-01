/**
 * i18n tool shard (iphone-app-store-screenshot / es).
 * H1 locked to “Tamaño de captura iPhone 6.9”; 6.7 only in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy for Spanish searchers of captura / especificaciones App Store. */
const es: SiteLangDict = {
	/** Short in-page blurb: export + privacy. */
	tool_iphone_app_store_screenshot_article:
		'Exporta una captura a los píxeles actuales de iPhone 6.9 en App Store y baja un JPEG, o un ZIP con las tres tallas. El archivo se queda en el dispositivo y no se sube al servidor.',
	/** File picker. */
	tool_iphone_app_store_screenshot_choose_image: 'Elegir captura',
	/** Reset control. */
	tool_iphone_app_store_screenshot_clear: 'Limpiar',
	/** Home-card short line. */
	tool_iphone_app_store_screenshot_desc:
		'Exporta la captura App Store de iPhone 6.9 a 1320×2868 — se queda en el dispositivo, sin subir al servidor.',
	/** Meta description: must include ejemplo and stay ≥120 chars. */
	tool_iphone_app_store_screenshot_description:
		'Tamaño de captura iPhone 6.9: elige una captura, rellénala a 1320×2868 (o 1290×2796 / 1260×2736) y descarga el JPEG. Ejemplo: al abrir, la muestra ya se recorta al tamaño exigido de 6.9 pulgadas. El archivo se queda en el dispositivo y no se sube al servidor. Las medidas de 6.7 pulgadas quedan absorbidas en 6.9. Esto no es App Review.',
	/** Single JPEG download. */
	tool_iphone_app_store_screenshot_download: 'Descargar JPEG',
	/** ZIP of all three sizes. */
	tool_iphone_app_store_screenshot_download_zip: 'Descargar ZIP de todos los tamaños',
	/** Drop zone hint. */
	tool_iphone_app_store_screenshot_drop_hint: 'Suelta una captura. El recorte a relleno puede cortar los bordes.',
	/** Empty state. */
	tool_iphone_app_store_screenshot_empty: 'Primero elige una captura.',
	/** Decode error. */
	tool_iphone_app_store_screenshot_err_decode: 'No se pudo leer esa imagen. Prueba una captura PNG o JPEG.',
	/** ZIP engine error. */
	tool_iphone_app_store_screenshot_err_fflate: 'No cargó el motor ZIP. Revisa la red e inténtalo de nuevo.',
	/** Visible Example body. */
	tool_iphone_app_store_screenshot_example:
		'Cargar ejemplo dibuja un vertical de muestra, lo rellena a 1320×2868 y activa Descargar JPEG. Las otras tallas 6.9 son chips; el ZIP mete las tres.',
	/** Example heading. */
	tool_iphone_app_store_screenshot_example_title: 'Ejemplo',
	tool_iphone_app_store_screenshot_faq_a1:
		'No. Los bytes se quedan en esta pestaña. No se sube nada a Apple ni a nuestros servidores.',
	tool_iphone_app_store_screenshot_faq_a2:
		'La clase iPhone exigida ahora es 6.9 pulgadas. Las listas antiguas de 6.7 pulgadas se absorben en estas tres tallas.',
	tool_iphone_app_store_screenshot_faq_a3:
		'Por defecto 1320×2868. 1290×2796 y 1260×2736 son los otros pares 6.9 aceptados. Elige uno o baja un ZIP con los tres.',
	tool_iphone_app_store_screenshot_faq_a4:
		'Sí. El relleno escala hasta llenar el marco y recorta el sobrante. Si quieres otro encuadre, usa la herramienta de recorte relacionada.',
	tool_iphone_app_store_screenshot_faq_a5:
		'Los tamaños de iPad no están en la primera pantalla. Aquí solo está el set obligatorio de iPhone 6.9.',
	tool_iphone_app_store_screenshot_faq_q1: '¿Se sube mi captura?',
	tool_iphone_app_store_screenshot_faq_q2: '¿Por qué no el tamaño de captura iPhone 6.7?',
	tool_iphone_app_store_screenshot_faq_q3: '¿Qué son 1320×2868, 1290×2796 y 1260×2736?',
	tool_iphone_app_store_screenshot_faq_q4: '¿Se recortan los bordes?',
	tool_iphone_app_store_screenshot_faq_q5: '¿Exporta capturas de iPad?',
	tool_iphone_app_store_screenshot_how_body:
		'Lleva a App Store Connect la captura que toca: rellénala al tamaño 6.9 y descárgala. Las tallas extra son chips, no otro diseñador.',
	tool_iphone_app_store_screenshot_how_item_1: 'Elige la captura del set obligatorio iPhone 6.9.',
	tool_iphone_app_store_screenshot_how_item_2: 'Deja 1320×2868 salvo que Connect pida otro par 6.9.',
	tool_iphone_app_store_screenshot_how_item_3: 'Descarga el JPEG o empaqueta las tres tallas en un ZIP.',
	tool_iphone_app_store_screenshot_how_item_4: 'Cargar ejemplo ya corrió al abrir, para ver el recorte de inmediato.',
	tool_iphone_app_store_screenshot_how_title: 'Cómo usarlo',
	tool_iphone_app_store_screenshot_load_sample: 'Cargar ejemplo',
	tool_iphone_app_store_screenshot_out_size_label: 'Tamaño de salida',
	tool_iphone_app_store_screenshot_quality_label: 'Calidad JPEG',
	tool_iphone_app_store_screenshot_rules_body:
		'La exportación de captura App Store pide píxeles exactos, relleno y una nota clara de 6.7 a 6.9.',
	tool_iphone_app_store_screenshot_rules_item_1:
		'El lienzo por defecto es 1320×2868. Los otros pares 6.9 aceptados son 1290×2796 y 1260×2736.',
	tool_iphone_app_store_screenshot_rules_item_2: 'Relleno (sin franjas vacías). El sobrante se recorta.',
	tool_iphone_app_store_screenshot_rules_item_3: 'Quien busca 6.7 pulgadas encuentra la respuesta en las preguntas; no hay otra ficha.',
	tool_iphone_app_store_screenshot_rules_item_4: 'Esto no es App Review. Apple puede rechazar encuadre, texto o el marco del dispositivo.',
	tool_iphone_app_store_screenshot_rules_title: 'Reglas que debes esperar',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'Captura lista — descarga o cambia la imagen.',
	tool_iphone_app_store_screenshot_status_working: 'Rellenando…',
	/** Locked H1 from 03-locale-briefs. */
	tool_iphone_app_store_screenshot_title: 'Tamaño de captura iPhone 6.9',
	tool_iphone_app_store_screenshot_usecase_1: 'Antes de Connect: exporta la captura obligatoria de 6.9 pulgadas.',
	tool_iphone_app_store_screenshot_usecase_2: 'Error de dimensiones: vuelve a exportar a 1320×2868, no a un 6.7 viejo.',
	tool_iphone_app_store_screenshot_usecase_3: 'Empaqueta los tres pares 6.9 en un ZIP para quien suba después.',
	tool_iphone_app_store_screenshot_usecases_title: 'Cuándo encaja',
};

export default es;
