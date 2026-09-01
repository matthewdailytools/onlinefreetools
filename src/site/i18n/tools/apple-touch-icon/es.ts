/**
 * Fragmento i18n (apple-touch-icon / es).
 * Reescritura de búsqueda: H1 apple-touch-icon 180×180; archivos en el dispositivo.
 */
import type { SiteLangDict } from '../../../types';

/** Copy visible en español: icono de inicio 180, ZIP opcional, fondo opaco. */
const es: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Convierte el logo en el icono apple-touch que iOS usa al añadir el sitio a inicio: PNG opaco 180×180. Si el manifiesto pide más, el ZIP puede llevar favicon 32 y PWA 192/512. El archivo no sale del dispositivo ni se sube al servidor.',
	tool_apple_touch_icon_bg_label: 'Fondo opaco',
	tool_apple_touch_icon_choose_image: 'Elegir logo',
	tool_apple_touch_icon_clear: 'Limpiar',
	tool_apple_touch_icon_desc:
		'PNG opaco apple-touch-icon 180×180; no sale del dispositivo, sin subir al servidor.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180: elige el logo, colócalo en un cuadrado opaco y descarga el PNG. Ejemplo: al abrir, la muestra ya cabe en 180×180. Pasos: elegir → dejar 180 → descargar. El ZIP opcional incluye favicon 32 y PWA 192 / 512. Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_apple_touch_icon_download: 'Descargar PNG',
	tool_apple_touch_icon_download_zip: 'Descargar ZIP de tamaños',
	tool_apple_touch_icon_drop_hint: 'Suelta un logo. Queda centrado sobre un cuadrado opaco.',
	tool_apple_touch_icon_empty: 'Primero elige un logo.',
	tool_apple_touch_icon_err_decode:
		'No se pudo leer la imagen. Prueba PNG, JPEG o una captura bitmap del SVG.',
	tool_apple_touch_icon_err_fflate: 'No cargó el motor ZIP. Revisa la red e inténtalo de nuevo.',
	tool_apple_touch_icon_example:
		'Cargar ejemplo dibuja una marca de prueba, la cabe en 180×180 opaco y activa Descargar PNG. El ZIP añade 32, 192 y 512.',
	tool_apple_touch_icon_example_title: 'Ejemplo',
	tool_apple_touch_icon_faq_a1:
		'No. El logo se decodifica en esta pestaña. Nada se sube a nuestros servidores.',
	tool_apple_touch_icon_faq_a2:
		'El icono apple-touch de inicio suele ser 180×180. Esta página exporta ese PNG; no arma un paquete ICO completo.',
	tool_apple_touch_icon_faq_a3:
		'32 es un favicon PNG pequeño. 192 y 512 son iconos PWA habituales. Van en el ZIP; el trabajo por defecto sigue siendo 180×180.',
	tool_apple_touch_icon_faq_a4:
		'Apple prefería un icono de inicio opaco (estilo precomposed). Aquí se rellena el fondo para que iOS no ponga brillo sobre transparencia.',
	tool_apple_touch_icon_faq_a5:
		'167 / 152 / 120 de iPad antiguos pueden ir en el ZIP. La exportación por defecto sigue siendo 180×180.',
	tool_apple_touch_icon_faq_q1: '¿Se sube mi logo?',
	tool_apple_touch_icon_faq_q2: '¿Esto sustituye a un generador de paquetes favicon?',
	tool_apple_touch_icon_faq_q3: '¿Para qué sirven 32 y PWA 192/512?',
	tool_apple_touch_icon_faq_q4: '¿Por qué el fondo opaco?',
	tool_apple_touch_icon_faq_q5: '¿Sigue saliendo 167 o 152?',
	tool_apple_touch_icon_how_body:
		'Elige el logo que debe verse al «Añadir a inicio», exporta el PNG opaco 180×180 y, si hace falta, mete tamaños extra en un ZIP.',
	tool_apple_touch_icon_how_item_1: 'Elige el logo para apple-touch-icon 180×180.',
	tool_apple_touch_icon_how_item_2: 'Deja 180 marcado salvo que necesites chips 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'Mantén el fondo opaco para que no se vea a través en inicio.',
	tool_apple_touch_icon_how_item_4: 'Descarga el PNG o el ZIP. El ejemplo ya corrió al abrir.',
	tool_apple_touch_icon_how_title: 'Cómo usarlo',
	tool_apple_touch_icon_load_sample: 'Cargar ejemplo',
	tool_apple_touch_icon_out_size_label: 'Tamaño de salida',
	tool_apple_touch_icon_rules_body:
		'El icono de inicio pide cuadrado, relleno opaco y un PNG 180; no un paquete ICO de navegador.',
	tool_apple_touch_icon_rules_item_1: 'El lienzo por defecto es PNG 180×180. El logo cabe (no se estira) y se centra.',
	tool_apple_touch_icon_rules_item_2: 'El fondo es opaco (blanco por defecto). La transparencia se aplana a propósito.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 son entradas extra del ZIP, no cambian la exportación por defecto.',
	tool_apple_touch_icon_rules_item_4: 'No hay paquete ICO ni browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Reglas que verás',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Icono listo: descarga o cambia el logo.',
	tool_apple_touch_icon_status_working: 'Dibujando el cuadrado…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'Antes de escribir el link, exporta apple-touch-icon.png a 180×180 para «Añadir a inicio».',
	tool_apple_touch_icon_usecase_2: 'En un PWA, saca 192 y 512 del ZIP para el manifiesto.',
	tool_apple_touch_icon_usecase_3:
		'Si el navegador aún pide un favicon PNG 32 cuadrado, úsalo del ZIP sin montar un paquete ICO.',
	tool_apple_touch_icon_usecases_title: 'Cuándo encaja',
};

export default es;
