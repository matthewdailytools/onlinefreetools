/**
 * i18n tool shard (check-ssl-certificate-expiration / es).
 * Escena: hostname → crt.sh CT → caducidad del cert más nuevo (no handshake en vivo).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'Comprobar la caducidad del certificado SSL',
	tool_check_ssl_certificate_expiration_home_desc:
		'Vea cuándo caduca el certificado CT más reciente de un hostname (crt.sh — no es un handshake en vivo).',
	tool_check_ssl_certificate_expiration_desc:
		'Vea cuándo caduca el certificado CT más reciente de un hostname (crt.sh — no es un handshake en vivo).',
	tool_check_ssl_certificate_expiration_title: 'Comprobar la caducidad del certificado SSL',
	tool_check_ssl_certificate_expiration_description:
		'Introduzca un hostname para este comprobador de caducidad SSL: consulta Certificate Transparency vía crt.sh y muestra notBefore, notAfter, emisor y días restantes del match más reciente. No es un handshake TLS en vivo. Ejemplo: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Comprobar',
	tool_check_ssl_certificate_expiration_sample: 'Ejemplo',
	tool_check_ssl_certificate_expiration_clear: 'Limpiar',
	tool_check_ssl_certificate_expiration_running: 'Consultando Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'Introduzca un hostname (o pegue una URL https).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Error: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'No se pudo consultar crt.sh. Puede haber límite de tasa o estar inaccesible.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'El hostname se envía a nuestro Worker para consultar crt.sh. No lo guardamos como base de datos de producto.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'Certificado CT encontrado',
	tool_check_ssl_certificate_expiration_result_found_no: 'Sin filas CT para este host',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Nombre común',
	tool_check_ssl_certificate_expiration_result_issuer: 'Emisor',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (caducidad)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Días restantes',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Caducado (según CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'No caducado (según CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Fuente',
	tool_check_ssl_certificate_expiration_result_row_count: 'Filas CT devueltas',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'Retraso de logs CT — no es el certificado del peer de un handshake TLS en vivo. Las fechas pueden ir detrás de la emisión o renovación.',
	tool_check_ssl_certificate_expiration_result_none: '(ninguno)',
	tool_check_ssl_certificate_expiration_how_title: 'Cómo funciona',
	tool_check_ssl_certificate_expiration_how_body:
		'Esta página responde una pregunta: ¿cuándo caduca el match CT más reciente de este hostname? No audita un handshake SSL en vivo.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Escriba un hostname (no hace falta ruta).',
	tool_check_ssl_certificate_expiration_how_item_2:
		'Pulse Comprobar; el Worker consulta el JSON de crt.sh.',
	tool_check_ssl_certificate_expiration_how_item_3:
		'Lea notBefore, notAfter, emisor y días restantes del match más reciente.',
	tool_check_ssl_certificate_expiration_how_item_4:
		'Trate las fechas como publicadas en CT — confirme con handshake local si el timing importa.',
	tool_check_ssl_certificate_expiration_formula_title: 'Reglas de consulta CT (no TLS en vivo)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers no pueden leer el certificado del peer en fetch. Usamos datos públicos de Certificate Transparency vía crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1:
		'Consultar crt.sh con el hostname y parsear la lista JSON.',
	tool_check_ssl_certificate_expiration_formula_item_2:
		'Ordenar por notBefore descendente y tomar la fila más nueva.',
	tool_check_ssl_certificate_expiration_formula_item_3:
		'Mostrar notBefore, notAfter, emisor, daysLeft y expired frente a ahora.',
	tool_check_ssl_certificate_expiration_formula_item_4:
		'Los logs CT pueden retrasarse respecto a la emisión o renovación en vivo.',
	tool_check_ssl_certificate_expiration_formula_item_5:
		'Hosts privados o bloqueados se rechazan. No es un walker de cadena completa ni un pedido a la CA.',
	tool_check_ssl_certificate_expiration_example_title: 'Ejemplo',
	tool_check_ssl_certificate_expiration_example:
		'Entrada de ejemplo example.com. El Worker consulta crt.sh, elige el certificado más reciente y muestra notBefore, notAfter, emisor, daysLeft y aviso de retraso CT.',
	tool_check_ssl_certificate_expiration_usecases_title: 'Para qué sirve',
	tool_check_ssl_certificate_expiration_usecase_1:
		'Checker de caducidad SSL antes de renovar: cuántos días quedan en la hoja CT más nueva.',
	tool_check_ssl_certificate_expiration_usecase_2:
		'Tras un cambio de CDN: confirmar que CT muestra un notAfter nuevo.',
	tool_check_ssl_certificate_expiration_usecase_3:
		'Inventario rápido de dominios de proveedores cuando solo necesita fechas de caducidad.',
	tool_check_ssl_certificate_expiration_faq_q1: '¿Es un handshake SSL en vivo?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'No. Workers no leen el certificado del peer en fetch; consultamos Certificate Transparency (crt.sh).',
	tool_check_ssl_certificate_expiration_faq_q2: '¿Por qué pueden retrasarse las fechas?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'Los logs CT pueden ir detrás de la emisión o renovación. Si el timing importa, confirme con un handshake local.',
	tool_check_ssl_certificate_expiration_faq_q3: '¿Revisan la cadena completa?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'El foco es la caducidad del match más reciente. Un checker solo de cadena es secundario, no el H1.',
	tool_check_ssl_certificate_expiration_faq_q4: '¿El título es “SSL certificate checker”?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'No. El H1 es Comprobar la caducidad del certificado SSL. El head más amplio no es el título único.',
	tool_check_ssl_certificate_expiration_faq_q5: '¿Y hosts con IP privada?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Se rechazan hosts privados o bloqueados. Use la herramienta de rangos CIDR privados para contexto.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh; Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default es;
