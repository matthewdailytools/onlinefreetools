/**
 * i18n tool shard (spf-dkim-dmarc-checker / es).
 * Búsqueda: comprobador spf dkim dmarc; checker registro dmarc; consulta spf.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'Comprobador SPF DKIM DMARC',
	tool_spf_dkim_dmarc_checker_desc:
		'Comprueba SPF, DKIM y DMARC de un dominio y lee ~all/-all y la política p= en lenguaje claro.',
	tool_spf_dkim_dmarc_checker_description:
		'Introduce el dominio de envío y un selector DKIM opcional (por defecto google). DoH consulta SPF, _dmarc y selector._domainkey y explica ~all/-all y p=. Ejemplo: google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Dominio',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'Selector DKIM',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Comprobar',
	tool_spf_dkim_dmarc_checker_sample: 'Ejemplo',
	tool_spf_dkim_dmarc_checker_clear: 'Limpiar',
	tool_spf_dkim_dmarc_checker_running: 'Consultando SPF, DKIM y DMARC por DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Introduce un dominio válido (solo host, o pega la URL completa).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Error: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'Falló la consulta DNS. El resolvedor puede estar inaccesible o el nombre bloqueado.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'El dominio y el selector DKIM se envían a nuestro Worker para DNS-over-HTTPS. No los guardamos como base de producto.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Encontrado',
	tool_spf_dkim_dmarc_checker_result_found_no: 'No encontrado',
	tool_spf_dkim_dmarc_checker_result_record: 'Registro',
	tool_spf_dkim_dmarc_checker_result_explain: 'Explicación',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'calificador all',
	tool_spf_dkim_dmarc_checker_result_policy: 'Política DMARC (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Selector',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Clave pública (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Presente',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Ausente o vacía',
	tool_spf_dkim_dmarc_checker_how_title: 'Cómo funciona',
	tool_spf_dkim_dmarc_checker_how_body:
		'La entregabilidad suele exigir SPF, DKIM y DMARC a la vez. Escribe el dominio de envío, cambia el selector si hace falta y lee cada TXT con un resumen de política.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Escribe el dominio de envío y el selector DKIM opcional (por defecto google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Pulsa Comprobar; el Worker consulta TXT por DoH para SPF, _dmarc y selector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Lee cada registro y la explicación de ~all/-all y de la política DMARC p=.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'Corrige el DNS en tu proveedor y vuelve a comprobar: esta página no reescribe tu zona.',
	tool_spf_dkim_dmarc_checker_formula_title: 'Qué consultamos',
	tool_spf_dkim_dmarc_checker_formula_body:
		'Las consultas siguen las formas TXT públicas de RFC 7208, 6376 y 7489. Resumimos campos de política; no enviamos correo ni sondeamos buzones.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT del dominio con v=spf1; mostramos el calificador all final (~all fallo suave, -all duro).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT en _dmarc.dominio con v=DMARC1; destacamos p= (none / quarantine / reject) y pct opcional.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT en {selector}._domainkey.dominio; comprobamos si hay clave pública p= no vacía.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Los registros ausentes se marcan con claridad. Un fallo DoH aparece como error — no es la prueba de firma en vivo de tu ESP.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'Sin sondeo SMTP RCPT ni edición de zona. Un validador de «¿existe el email?» queda fuera de alcance.',
	tool_spf_dkim_dmarc_checker_example_title: 'Ejemplo',
	tool_spf_dkim_dmarc_checker_example:
		'Entrada de ejemplo google.com con selector DKIM google. El Worker consulta SPF, _dmarc.google.com y google._domainkey.google.com y muestra encontrado/registro/explicación.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'Cuándo ayuda',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Antes de publicar: tras crear el DNS del ESP, confirma que existen SPF, DKIM y DMARC del dominio de envío.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'Pasada de checker de registro DMARC: lee p=none frente a quarantine/reject sin quedarte solo en el TXT crudo.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'Consulta SPF si el correo cae en spam: mira ~all o -all y alinea el selector DKIM con tu ESP.',
	tool_spf_dkim_dmarc_checker_faq_q1: '¿Por qué tres registros en una sola página?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Los proveedores suelen evaluar los tres. Un checker solo de DMARC puede pasar por alto un SPF roto o un selector DKIM incorrecto.',
	tool_spf_dkim_dmarc_checker_faq_q2: '¿Cuál es el selector DKIM por defecto?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — habitual en Google Workspace. Cámbialo si tu ESP publica otro (por ejemplo s1 o k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: '¿Valida si existe una dirección de correo?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'No. Solo autenticación DNS del dominio (consulta SPF, clave DKIM, política DMARC). La existencia de buzones queda fuera.',
	tool_spf_dkim_dmarc_checker_faq_q4: '¿Solo muestran el TXT en bruto?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'No. Incluyen el registro y una línea de explicación de mecanismos SPF all y de la política DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: '¿Se almacena mi dominio?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'Dominio y selector deben llegar al Worker para DNS-over-HTTPS. No guardamos las comprobaciones como base de producto duradera. Es una herramienta DNS en el edge, no «sin subida».',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default es;
