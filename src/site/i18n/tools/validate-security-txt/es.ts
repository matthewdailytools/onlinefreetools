/**
 * i18n tool shard (validate-security-txt / es).
 * Escena: dominio → descargar security.txt → checklist RFC 9116.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_validate_security_txt_home_title: 'Validar security.txt',
	tool_validate_security_txt_home_desc:
		'Comprueba si un sitio publica un security.txt válido con Contact y Expires.',
	tool_validate_security_txt_desc:
		'Comprueba si un sitio publica un security.txt válido con Contact y Expires.',
	tool_validate_security_txt_title: 'Validar security.txt',
	tool_validate_security_txt_description:
		'Introduce un dominio o URL para usar este comprobador de security.txt: descarga /.well-known/security.txt (reserva /security.txt), analiza Contact y Expires y señala campos obligatorios faltantes. Ejemplo: google.com.',
	tool_validate_security_txt_url_label: 'Dominio o URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ o example.com',
	tool_validate_security_txt_check: 'Validar',
	tool_validate_security_txt_sample: 'Ejemplo',
	tool_validate_security_txt_clear: 'Limpiar',
	tool_validate_security_txt_running: 'Descargando security.txt…',
	tool_validate_security_txt_url_error: 'Introduce un dominio o una URL http(s).',
	tool_validate_security_txt_error_prefix: 'Error: ',
	tool_validate_security_txt_fetch_failed:
		'No se pudo descargar security.txt. El host puede estar caído, bloquear bots o rechazar la petición.',
	tool_validate_security_txt_privacy_note:
		'La URL y el nombre de host se envían a nuestro Worker para descargar security.txt. No los guardamos como base de datos de producto.',
	tool_validate_security_txt_result_found_yes: 'security.txt encontrado',
	tool_validate_security_txt_result_found_no: 'security.txt no encontrado',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Faltan obligatorios',
	tool_validate_security_txt_result_missing_none: 'Campos obligatorios presentes',
	tool_validate_security_txt_result_expired_yes: 'Expires ya pasó',
	tool_validate_security_txt_result_expired_no: 'Expires aún válido (o no se pudo analizar)',
	tool_validate_security_txt_result_file_url: 'URL descargada',
	tool_validate_security_txt_result_http_status: 'Estado HTTP',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'Vista previa de security.txt',
	tool_validate_security_txt_result_none: '(ninguno)',
	tool_validate_security_txt_how_title: 'Cómo funciona',
	tool_validate_security_txt_how_body:
		'Este validador responde una sola pregunta: ¿el sitio publica un archivo de descubrimiento con Contact usable y un Expires coherente?',
	tool_validate_security_txt_how_item_1: 'Escribe un dominio o una URL HTTPS.',
	tool_validate_security_txt_how_item_2:
		'Pulsa Validar; el Worker prueba /.well-known/security.txt y luego /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Revisa Contact, Expires, Preferred-Languages, Canonical y la vista previa.',
	tool_validate_security_txt_how_item_4:
		'Corrige los campos marcados antes de publicar tu propio security.txt.',
	tool_validate_security_txt_formula_title: 'Reglas de campos RFC 9116',
	tool_validate_security_txt_formula_body:
		'Alineado con RFC 9116 y la práctica habitual de securitytxt.org.',
	tool_validate_security_txt_formula_item_1:
		'Orden: primero /.well-known/security.txt, después /security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact es obligatorio; listamos todos los valores y avisamos si falta.',
	tool_validate_security_txt_formula_item_3:
		'Expires se espera con fuerza; falta o fecha pasada = hueco.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages y Canonical se muestran si existen; no son obligatorios para el checklist.',
	tool_validate_security_txt_formula_item_5:
		'Solo descarga y analiza: no es un buzón de vulnerabilidades ni un pentest.',
	tool_validate_security_txt_example_title: 'Ejemplo',
	tool_validate_security_txt_example:
		'Entrada de ejemplo https://www.google.com/. El Worker prueba well-known y la ruta raíz, luego muestra found, Contact, Expires, missingRequired, expired y la vista previa.',
	tool_validate_security_txt_usecases_title: 'Para qué sirve',
	tool_validate_security_txt_usecase_1:
		'Comprobador de security.txt antes del lanzamiento: ¿well-known responde y hay Contact?',
	tool_validate_security_txt_usecase_2:
		'Pase de validador tras editar Expires: confirma que la fecha se entiende y no está vencida.',
	tool_validate_security_txt_usecase_3:
		'Antes de contactar a un proveedor: verifica que publique el archivo de descubrimiento.',
	tool_validate_security_txt_faq_q1: '¿Dónde debe vivir security.txt?',
	tool_validate_security_txt_faq_a1:
		'Preferible en /.well-known/security.txt. /security.txt en el mismo host es el respaldo documentado.',
	tool_validate_security_txt_faq_q2: '¿Qué campos son obligatorios?',
	tool_validate_security_txt_faq_a2:
		'Al menos Contact. Expires se espera en la práctica de RFC 9116; esta herramienta marca huecos.',
	tool_validate_security_txt_faq_q3: '¿El H1 es “RFC 9116”?',
	tool_validate_security_txt_faq_a3:
		'No. El H1 es Validar security.txt. El RFC va en Reglas y Referencias.',
	tool_validate_security_txt_faq_q4: '¿Guardáis informes de vulnerabilidades?',
	tool_validate_security_txt_faq_a4:
		'No. Solo descargamos y parseamos el archivo publicado. No somos un buzón de divulgación.',
	tool_validate_security_txt_faq_q5: '¿Se almacena mi URL?',
	tool_validate_security_txt_faq_a5:
		'La URL/host debe llegar al Worker para la descarga. No guardamos las consultas como base de producto. Es una herramienta edge, no “sin subida”.',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default es;
