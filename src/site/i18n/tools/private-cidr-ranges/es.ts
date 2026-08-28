/**
 * i18n tool shard (private-cidr-ranges / es).
 * Búsqueda local: rangos cidr privados / ip privadas cidr.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Rangos CIDR privados — Comprueba si una IP o prefijo es privado o de uso especial',
	tool_private_cidr_ranges_desc:
		'Rangos CIDR privados: RFC1918, CGNAT y ULA. Ejemplo: 100.64.1.10 → espacio compartido.',
	tool_private_cidr_ranges_description:
		'Rangos CIDR privados: pega una IP o CIDR para ver rangos IP privados RFC1918, CGNAT (100.64/10), ULA IPv6 y bloques de documentación (ejemplo: 100.64.1.10 → espacio compartido). Tabla de referencia clicable, con nota sobre Tailscale y CGNAT. La comprobación permanece en tu dispositivo y no se sube al servidor.',
	tool_private_cidr_ranges_article:
		'Pega una dirección o CIDR para emparejar prefijos privados o de uso especial. Pulsa una fila de la tabla para cargar ese prefijo. Esta página no enumera hosts.',
	tool_private_cidr_ranges_check: 'Comprobar',
	tool_private_cidr_ranges_sample: 'Cargar ejemplo',
	tool_private_cidr_ranges_clear: 'Limpiar',
	tool_private_cidr_ranges_copy: 'Copiar resumen',
	tool_private_cidr_ranges_copy_done: 'Copiado',
	tool_private_cidr_ranges_input_label: 'Dirección IP o CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 o 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'Todos',
	tool_private_cidr_ranges_filter_v4: 'Tabla IPv4',
	tool_private_cidr_ranges_filter_v6: 'Tabla IPv6',
	tool_private_cidr_ranges_result_label: 'Coincidencias',
	tool_private_cidr_ranges_table_title: 'Tabla de referencia (clic en una fila)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Nombre',
	tool_private_cidr_ranges_col_family: 'Familia',
	tool_private_cidr_ranges_col_spec: 'Norma',
	tool_private_cidr_ranges_no_match:
		'No está en la lista integrada de privados/uso especial (puede ser unicast global u otro espacio).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale y otros productos suelen usar este espacio CGNAT (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'Introduce una dirección IPv4/IPv6 o un CIDR.',
	tool_private_cidr_ranges_err_parse: 'No se pudo interpretar como IP o CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'Privado RFC1918',
	tool_private_cidr_ranges_name_rfc1918_172: 'Privado RFC1918',
	tool_private_cidr_ranges_name_rfc1918_192: 'Privado RFC1918',
	tool_private_cidr_ranges_name_cgnat: 'Espacio compartido CGNAT',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Documentación (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Documentación (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Documentación (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'ULA IPv6',
	tool_private_cidr_ranges_name_linklocal_v6: 'Link-local IPv6',
	tool_private_cidr_ranges_name_doc_v6: 'Documentación IPv6',
	tool_private_cidr_ranges_note_rfc1918_10: 'Uso privado — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Uso privado — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Uso privado — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Espacio compartido para NAT de operador (RFC 6598). No es RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Loopback del host — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Solo documentación — no usar en producción (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Solo documentación — no usar en producción (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Solo documentación — no usar en producción (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Direcciones locales únicas — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'Link-local IPv6 — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Prefijo de documentación — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'Cómo funciona',
	tool_private_cidr_ranges_how_body:
		'Compruebas si una dirección cae en un CIDR privado o de uso especial, no cuentas hosts. Pega, lee el resultado o pulsa la tabla.',
	tool_private_cidr_ranges_how_item_1: 'Clasifica bloques privados/especiales; no expandas listas de hosts.',
	tool_private_cidr_ranges_how_item_2: 'Pega una IP o CIDR IPv4/IPv6 (ejemplo 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3: 'Lee categoría, CIDR y nota RFC (y el aviso Tailscale si hay CGNAT).',
	tool_private_cidr_ranges_how_item_4: 'Opcional: pulsa una fila de la tabla para comprobar ese prefijo.',
	tool_private_cidr_ranges_how_item_5: 'Sin coincidencia: está fuera de esta lista; no lo llames “privado” sin más.',
	tool_private_cidr_ranges_formula_title: 'Reglas',
	tool_private_cidr_ranges_formula_body:
		'Se interpreta la entrada y se prueba pertenencia frente a la tabla; los prefijos más largos salen primero.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 en 32 bits; IPv6 en 128 bits. Sin mezclar familias.',
	tool_private_cidr_ranges_formula_item_2: 'Dirección suelta: todas las filas que la contienen.',
	tool_private_cidr_ranges_formula_item_3: 'Entrada CIDR: filas que contienen por completo ese prefijo.',
	tool_private_cidr_ranges_formula_item_4: 'Orden por longitud de prefijo descendente.',
	tool_private_cidr_ranges_example_title: 'Ejemplo',
	tool_private_cidr_ranges_example:
		'Entrada: 100.64.1.10. Salida: espacio compartido CGNAT 100.64.0.0/10 (RFC 6598), con nota sobre Tailscale. 10.0.0.5 coincide con RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'Cuándo ayuda',
	tool_private_cidr_ranges_usecase_1: 'Confirmar un bloque VPC/lab como RFC1918 real antes de abrir firewalls.',
	tool_private_cidr_ranges_usecase_2: 'Separar direcciones 100.x (CGNAT/Tailscale) de rangos privados RFC1918.',
	tool_private_cidr_ranges_usecase_3: 'Revisar ULA IPv6 o 2001:db8 antes de tratarlos como producción.',
	tool_private_cidr_ranges_faq_q1: '¿Cuáles son los tres rangos CIDR privados de RFC1918?',
	tool_private_cidr_ranges_faq_a1: '10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16: los rangos IP privados clásicos en CIDR.',
	tool_private_cidr_ranges_faq_q2: '¿100.64.0.0/10 es “privado”? ¿Y Tailscale?',
	tool_private_cidr_ranges_faq_a2:
		'Es espacio compartido CGNAT (RFC 6598), no RFC1918. Tailscale suele usarlo; esta página solo etiqueta el espacio, no es una consola Tailscale.',
	tool_private_cidr_ranges_faq_q3: '¿Qué es ULA IPv6 (fc00::/7)?',
	tool_private_cidr_ranges_faq_a3:
		'Direcciones locales únicas para redes locales; no son unicast global de Internet.',
	tool_private_cidr_ranges_faq_q4: '¿Por qué marcar prefijos de documentación?',
	tool_private_cidr_ranges_faq_a4:
		'Bloques como 192.0.2.0/24 y 2001:db8::/32 son para ejemplos; usarlos en producción rompe expectativas.',
	tool_private_cidr_ranges_faq_q5: '¿Expande hosts o sube mis direcciones?',
	tool_private_cidr_ranges_faq_a5:
		'No enumera hosts. Las comprobaciones quedan en tu dispositivo y no se suben al servidor.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — asignación de direcciones privadas',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — espacio de direcciones compartido',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — direcciones IPv6 locales únicas',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — bloques IPv4 de documentación',
	tool_private_cidr_ranges_disclaimer:
		'Las coincidencias siguen RFC publicados. No es consejo de enrutamiento ni firewall; valida cambios críticos en tu laboratorio.',
};

export default es;
