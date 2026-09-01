/**
 * Fragmento i18n (ios-app-icon-size / es).
 * H1 local: «tamaño icono app iOS»; la tarea por defecto es el PNG 1024 opaco de App Store.
 */
import type { SiteLangDict } from '../../../types';

/** Textos en español: envío 1024, ZIP de escalas, privacidad en el dispositivo. */
const es: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Convierte el logo en el PNG 1024×1024 opaco que pide App Store Connect. Si hace falta, el ZIP incluye 180 de iPhone, 167 de iPad y 512 de Play. Todo se queda en el dispositivo; no se sube a un servidor.',
	tool_ios_app_icon_size_bg_label: 'Fondo opaco',
	tool_ios_app_icon_size_choose_image: 'Elegir logo',
	tool_ios_app_icon_size_clear: 'Limpiar',
	tool_ios_app_icon_size_desc:
		'Exporta el tamaño icono app iOS 1024×1024 opaco; se queda en el dispositivo, no se sube al servidor.',
	tool_ios_app_icon_size_description:
		'Tamaño icono app iOS: elige un logo, colócalo en un cuadrado opaco 1024×1024 para App Store Connect y descarga el PNG. Ejemplo: el logo de muestra ya encaja en 1024×1024 al abrir. Los chips opcionales sacan 180, 167 y Play 512 en un ZIP. Los archivos se quedan en el dispositivo y no se suben a un servidor.',
	tool_ios_app_icon_size_download: 'Descargar PNG',
	tool_ios_app_icon_size_download_zip: 'Descargar ZIP de tamaños',
	tool_ios_app_icon_size_drop_hint: 'Suelta un logo cuadrado. Se centra en un fondo opaco, sin máscara redondeada.',
	tool_ios_app_icon_size_empty: 'Elige un logo primero.',
	tool_ios_app_icon_size_err_decode: 'No se pudo leer esa imagen. Prueba PNG o JPEG.',
	tool_ios_app_icon_size_err_fflate: 'No cargó el motor ZIP. Revisa la red e inténtalo de nuevo.',
	tool_ios_app_icon_size_example:
		'Cargar ejemplo dibuja una marca, la encaja en 1024×1024 opaco y activa Descargar PNG. El ZIP añade 180, 167, Play 512 y huecos menores.',
	tool_ios_app_icon_size_example_title: 'Ejemplo',
	tool_ios_app_icon_size_faq_a1:
		'No. El logo se decodifica en esta pestaña. Nada se sube a nuestros servidores.',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect sigue pidiendo un PNG 1024×1024 sin transparencia. Ese es el tamaño icono app iOS por defecto.',
	tool_ios_app_icon_size_faq_a3:
		'El sistema aplica el squircle. Exporta el cuadrado completo; no recortes las esquinas antes.',
	tool_ios_app_icon_size_faq_a4:
		'180 es iPhone 60 pt @3x. 167 es iPad Pro 83,5 pt @2x. Van como chips, no como segundo H1.',
	tool_ios_app_icon_size_faq_a5:
		'El icono de alta resolución 512 de Play va en el ZIP. No hay XML Adaptive ni una URL aparte de pack.',
	tool_ios_app_icon_size_faq_q1: '¿Se sube mi logo?',
	tool_ios_app_icon_size_faq_q2: '¿Por qué 1024×1024?',
	tool_ios_app_icon_size_faq_q3: '¿Debo redondear las esquinas?',
	tool_ios_app_icon_size_faq_q4: '¿Para qué sirven 180 y 167?',
	tool_ios_app_icon_size_faq_q5: '¿Y el icono de Google Play?',
	tool_ios_app_icon_size_how_body:
		'Elige el logo de la ficha, exporta el PNG 1024×1024 opaco y, si quieres, empaqueta escalas de iPhone, iPad y Play.',
	tool_ios_app_icon_size_how_item_1: 'Elige el logo para el tamaño icono app iOS: la tarea es el PNG 1024 de App Store.',
	tool_ios_app_icon_size_how_item_2: 'Deja 1024 salvo que necesites los chips 180 / 167 / Play 512.',
	tool_ios_app_icon_size_how_item_3: 'Mantén el fondo opaco para que Connect no rechace transparencia.',
	tool_ios_app_icon_size_how_item_4: 'Descarga el PNG o el ZIP. El ejemplo ya se ejecutó al abrir.',
	tool_ios_app_icon_size_how_title: 'Cómo funciona',
	tool_ios_app_icon_size_load_sample: 'Cargar ejemplo',
	tool_ios_app_icon_size_out_size_label: 'Tamaño de salida',
	tool_ios_app_icon_size_rules_body:
		'El icono de tienda pide cuadrado, relleno opaco y no confundirlo con apple-touch-icon de un sitio.',
	tool_ios_app_icon_size_rules_item_1:
		'El lienzo por defecto es PNG 1024×1024. El logo se contiene y se centra, no se estira.',
	tool_ios_app_icon_size_rules_item_2:
		'El fondo es opaco (blanco por defecto). El canal alfa se aplana a propósito.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 van en el ZIP y no cambian el H1.',
	tool_ios_app_icon_size_rules_item_4:
		'No es un proyecto Assets.xcassets ni un pack Adaptive Icon.',
	tool_ios_app_icon_size_rules_title: 'Reglas que debes esperar',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Icono listo: descarga o cambia el logo.',
	tool_ios_app_icon_size_status_working: 'Dibujando el cuadrado…',
	tool_ios_app_icon_size_title: 'tamaño icono app iOS',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: exporta el icono 1024×1024 antes de adjuntar capturas.',
	tool_ios_app_icon_size_usecase_2:
		'Pantalla de inicio iPhone: saca el 180 del ZIP para ver 60 pt @3x.',
	tool_ios_app_icon_size_usecase_3:
		'Ficha de Play: usa el chip 512 sin abrir otra URL de pack.',
	tool_ios_app_icon_size_usecases_title: 'Buenos encajes',
};

export default es;
