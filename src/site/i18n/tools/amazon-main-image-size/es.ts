/**
 * Fragmento i18n de la herramienta amazon-main-image-size (es).
 * El H1 sigue la cola de búsqueda; los píxeles van en descripción y FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy en español de sitio de herramientas, reescrita (no calco del inglés). */
const es: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Convierte una foto de producto en JPEG cuadrado con fondo blanco, listo para usarlo como imagen principal. El archivo no sale del dispositivo y no se sube a ningún servidor.',
	tool_amazon_main_image_size_check_fill: 'Que ocupe cerca del 85%',
	tool_amazon_main_image_size_choose_image: 'Elegir imagen',
	tool_amazon_main_image_size_clear: 'Limpiar',
	tool_amazon_main_image_size_desc:
		'Imagen principal Amazon a 2000×2000 en blanco, con umbral de zoom 1000 px — no sale del dispositivo.',
	tool_amazon_main_image_size_description:
		'Tamaño de imagen principal de Amazon: elige una foto de producto, exporta un JPEG 2000×2000 sobre fondo blanco RGB 255 y comprueba el umbral de zoom de 1000 px. Hay un ejemplo: la muestra encaja en torno al 85% del cuadrado. Los archivos se quedan en el dispositivo y no se suben al servidor. No es una revisión oficial de Seller Central.',
	tool_amazon_main_image_size_download: 'Descargar JPEG',
	tool_amazon_main_image_size_drop_hint: 'Suelta una foto de producto. Todo ocurre en esta pestaña.',
	tool_amazon_main_image_size_empty: 'Primero elige una foto de producto.',
	tool_amazon_main_image_size_err_decode: 'No se pudo leer la imagen. Prueba JPEG, PNG o WebP.',
	tool_amazon_main_image_size_example:
		'Cargar ejemplo dibuja un producto de prueba, lo coloca en un cuadrado blanco 2000×2000 al ~85% y activa Descargar JPEG. El indicador de zoom confirma que el lado más largo supera 1000 px.',
	tool_amazon_main_image_size_example_title: 'Ejemplo',
	tool_amazon_main_image_size_faq_a1:
		'El zoom de Amazon suele pedir al menos 1000 píxeles en el lado más largo. El indicador compara el borde exportado con ese mínimo. Ampliar una foto minúscula puede cumplir el número y seguir viéndose blanda.',
	tool_amazon_main_image_size_faq_a2:
		'La imagen principal se espera sobre blanco puro. Esta página rellena RGB 255,255,255 y, si quieres, deja el producto al ~85% del cuadrado para que no roce los bordes.',
	tool_amazon_main_image_size_faq_a3:
		'No. La foto se decodifica en esta pestaña del navegador. No se sube a nuestros servidores ni a Amazon desde aquí.',
	tool_amazon_main_image_size_faq_a4:
		'La exportación por defecto es 2000×2000. 1600 sigue siendo un tamaño antiguo habitual y aparece como chip. Esos números no van en el H1.',
	tool_amazon_main_image_size_faq_a5:
		'Galería y módulos A+ tienen otro trabajo. Aquí solo sale la imagen principal. Para recortes libres usa la herramienta de recorte relacionada.',
	tool_amazon_main_image_size_faq_q1: '¿Por qué el zoom falla por debajo de 1000 px?',
	tool_amazon_main_image_size_faq_q2: '¿Fondo blanco y el 85% del encuadre?',
	tool_amazon_main_image_size_faq_q3: '¿Se sube mi foto a Amazon o a este sitio?',
	tool_amazon_main_image_size_faq_q4: '¿Por qué 2000 y no 1600?',
	tool_amazon_main_image_size_faq_q5: '¿También exporta imágenes secundarias?',
	tool_amazon_main_image_size_fill_label: 'Ocupación del encuadre',
	tool_amazon_main_image_size_how_body:
		'Elige la foto que hará de imagen principal, déjala sobre blanco, saca el JPEG cuadrado y mira el indicador de zoom. Los otros tamaños son chips, no otra herramienta.',
	tool_amazon_main_image_size_how_item_1: 'Elige la foto que quieres como imagen principal de Amazon.',
	tool_amazon_main_image_size_how_item_2: 'Deja 2000×2000 salvo que aún necesites el cuadrado 1600.',
	tool_amazon_main_image_size_how_item_3: 'Mantén el ajuste al 85% salvo que el producto ya llene el marco como quieres.',
	tool_amazon_main_image_size_how_item_4: 'Descarga el JPEG y lee el chip de umbral de zoom. El ejemplo ya se ejecutó al abrir.',
	tool_amazon_main_image_size_how_title: 'Cómo preparar la imagen',
	tool_amazon_main_image_size_load_sample: 'Cargar ejemplo',
	tool_amazon_main_image_size_out_size_label: 'Tamaño de salida',
	tool_amazon_main_image_size_quality_label: 'Calidad JPEG',
	tool_amazon_main_image_size_rules_body:
		'Para sacar la imagen principal en el navegador hace falta lienzo cuadrado, relleno blanco, un umbral de zoom y dejar claro que no hay revisión oficial.',
	tool_amazon_main_image_size_rules_item_1:
		'Lienzo por defecto 2000×2000; 1600×1600 es opcional. La foto se contiene (sin estirar) sobre blanco RGB 255.',
	tool_amazon_main_image_size_rules_item_2:
		'El ajuste opcional al 85% escala el producto dentro del cuadrado para que no toque los bordes.',
	tool_amazon_main_image_size_rules_item_3:
		'Chip de zoom: el lado más largo exportado debería ser ≥1000 px. La página no afirma que Amazon acepte el archivo.',
	tool_amazon_main_image_size_rules_item_4:
		'Imágenes secundarias, infografías y A+ quedan fuera. Esto no es Seller Central.',
	tool_amazon_main_image_size_rules_title: 'Qué esperar',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Imagen principal lista — descarga o cambia la foto.',
	tool_amazon_main_image_size_status_working: 'Montando el cuadrado…',
	tool_amazon_main_image_size_title: 'Tamaño de imagen principal de Amazon',
	tool_amazon_main_image_size_usecase_1:
		'Antes de abrir Seller Central: pasa la foto del móvil a una imagen principal blanca en cuadrado.',
	tool_amazon_main_image_size_usecase_2:
		'El zoom no abre: comprueba si el lado más largo sigue por debajo de 1000 px y vuelve a exportar a 2000.',
	tool_amazon_main_image_size_usecase_3:
		'Sustituye una imagen principal heredada demasiado pequeña; si el JPEG pesa, sigue en el compresor relacionado.',
	tool_amazon_main_image_size_usecases_title: 'Cuándo viene bien',
	tool_amazon_main_image_size_zoom_fail: 'El lado más largo no llega a 1000 px — el zoom puede fallar.',
	tool_amazon_main_image_size_zoom_ok: 'El lado más largo cumple el umbral de zoom de 1000 px.',
	tool_amazon_main_image_size_zoom_label: 'Umbral de zoom',
};

export default es;
