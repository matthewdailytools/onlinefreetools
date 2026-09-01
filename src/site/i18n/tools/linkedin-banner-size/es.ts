/**
 * Fragmento i18n (linkedin-banner-size / es).
 * H1 local: tamaño banner LinkedIn; fondo personal 1584×396 y zona del avatar.
 */
import type { SiteLangDict } from '../../../types';

/** Textos en español: banner personal, chips de portada, privacidad en el dispositivo. */
const es: SiteLangDict = {
	tool_linkedin_banner_size_article:
		'Ajusta una foto al tamaño banner LinkedIn 1584×396, mira dónde tapa el avatar y descarga un JPEG. Los chips sacan portada de Facebook, cabecera de X y canal de YouTube. Se queda en el dispositivo; no se sube a un servidor.',
	tool_linkedin_banner_size_choose_image: 'Elegir imagen',
	tool_linkedin_banner_size_clear: 'Limpiar',
	tool_linkedin_banner_size_desc:
		'Exporta el tamaño banner LinkedIn 1584×396 con zona segura del avatar; se queda en el dispositivo, no se sube al servidor.',
	tool_linkedin_banner_size_description:
		'Tamaño banner LinkedIn: elige una foto apaisada, rellena 1584×396 del fondo personal y descarga JPEG. Ejemplo: la muestra ya está recortada a 1584×396 al abrir. La capa oscura marca el avatar y no va en el archivo. Portada de Facebook, cabecera de X y arte de canal son chips. Los archivos se quedan en el dispositivo y no se suben a un servidor. No es una tarjeta Open Graph.',
	tool_linkedin_banner_size_download: 'Descargar JPEG',
	tool_linkedin_banner_size_drop_hint: 'Suelta una foto apaisada. El recorte puede comer bordes. El texto, fuera de la capa oscura.',
	tool_linkedin_banner_size_empty: 'Elige una imagen primero.',
	tool_linkedin_banner_size_err_decode: 'No se pudo leer esa imagen. Prueba JPEG, PNG o WebP.',
	tool_linkedin_banner_size_example:
		'Cargar ejemplo dibuja un paisaje ancho, llena 1584×396, muestra la capa del avatar y activa Descargar JPEG.',
	tool_linkedin_banner_size_example_title: 'Ejemplo',
	tool_linkedin_banner_size_faq_a1: 'No. La foto se decodifica en esta pestaña. Nada se sube a LinkedIn ni a nuestros servidores.',
	tool_linkedin_banner_size_faq_a2: 'LinkedIn documenta 1584×396 para el fondo personal. Ese es el tamaño banner LinkedIn por defecto.',
	tool_linkedin_banner_size_faq_a3: 'La mancha oscura solo previsualiza el solape del avatar. El JPEG no la incluye.',
	tool_linkedin_banner_size_faq_a4: 'La portada de empresa es otro recorte. El H1 sigue siendo el banner personal; no hay segunda URL.',
	tool_linkedin_banner_size_faq_a5: 'La tarjeta 1200×630 está en Open Graph image size. Aquí es un cover ultraancho con zona segura.',
	tool_linkedin_banner_size_faq_q1: '¿Se sube mi foto?',
	tool_linkedin_banner_size_faq_q2: '¿Por qué 1584×396?',
	tool_linkedin_banner_size_faq_q3: '¿La capa oscura va en la descarga?',
	tool_linkedin_banner_size_faq_q4: '¿Y la portada de página de empresa?',
	tool_linkedin_banner_size_faq_q5: '¿Es lo mismo que una imagen Open Graph?',
	tool_linkedin_banner_size_how_body: 'Elige la foto de fondo, rellena 1584×396, saca el texto del avatar y descarga.',
	tool_linkedin_banner_size_how_item_1: 'Elige la foto para el tamaño banner LinkedIn: la tarea es el fondo personal 1584×396.',
	tool_linkedin_banner_size_how_item_2: 'Deja LinkedIn salvo que necesites los chips de Facebook / X / YouTube.',
	tool_linkedin_banner_size_how_item_3: 'Mira la capa oscura: caras y titular, fuera del avatar.',
	tool_linkedin_banner_size_how_item_4: 'Descarga el JPEG. El ejemplo ya corrió al abrir.',
	tool_linkedin_banner_size_how_title: 'Cómo funciona',
	tool_linkedin_banner_size_load_sample: 'Cargar ejemplo',
	tool_linkedin_banner_size_out_size_label: 'Tamaño de salida',
	tool_linkedin_banner_size_quality_label: 'Calidad JPEG',
	tool_linkedin_banner_size_rules_body: 'El banner personal es ultraancho, a cover, y se juzga contra el avatar — no una tarjeta 1,91:1.',
	tool_linkedin_banner_size_rules_item_1: 'El lienzo por defecto es JPEG 1584×396. Cover hasta llenar el marco.',
	tool_linkedin_banner_size_rules_item_2: 'La capa es solo vista previa. Los píxeles descargados no llevan máscara.',
	tool_linkedin_banner_size_rules_item_3: 'Facebook 851×315, X 1500×500 y YouTube 2560×1440 son chips y no cambian el H1.',
	tool_linkedin_banner_size_rules_item_4: 'El chip de YouTube oscurece fuera del centro 1546×423. No hay URL de pack de canal.',
	tool_linkedin_banner_size_rules_title: 'Reglas que debes esperar',
	tool_linkedin_banner_size_safe_hint: 'Capa oscura = solape de la interfaz. No se escribe en el JPEG.',
	tool_linkedin_banner_size_size_facebook: 'Portada FB',
	tool_linkedin_banner_size_size_linkedin: '1584×396',
	tool_linkedin_banner_size_size_x: 'Cabecera X',
	tool_linkedin_banner_size_size_youtube: 'Canal YT',
	tool_linkedin_banner_size_status_done: 'Banner listo: descarga o cambia la foto.',
	tool_linkedin_banner_size_status_working: 'Llenando el marco…',
	tool_linkedin_banner_size_title: 'tamaño banner LinkedIn',
	tool_linkedin_banner_size_usecase_1: 'Perfil personal: exporta 1584×396 antes de subir el fondo en LinkedIn.',
	tool_linkedin_banner_size_usecase_2: 'Titular lejos del avatar: revisa la capa y descarga.',
	tool_linkedin_banner_size_usecase_3: 'Arte de canal YouTube: cambia el chip a 2560×1440 y la ventana segura.',
	tool_linkedin_banner_size_usecases_title: 'Buenos encajes',
};

export default es;
