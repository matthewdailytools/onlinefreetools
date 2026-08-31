/**
 * i18n tool shard (ipv6-cidr / es).
 * Local queries: calculadora cidr ipv6 / notación cidr ipv6 — not an English calque.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_ipv6_cidr_title: 'Calculadora CIDR IPv6 — Convierte el prefijo en un rango usable'
	tool_ipv6_cidr_desc:
		'Calculadora CIDR IPv6: pega 2001:db8:1::/64 y obtén red, última dirección y forma comprimida. En tu dispositivo.',
	tool_ipv6_cidr_description:
		'Calculadora CIDR IPv6: pega un prefijo (ejemplo 2001:db8:1::/64) para ver la dirección de red, la última, el recuento y las formas comprimida/expandida según RFC 5952. Avisa si el prefijo no cae en un nibble. Incluye /64 LAN, /127 punto a punto y /128 host. Se calcula en tu dispositivo, no se sube a un servidor.',
	tool_ipv6_cidr_article:
		'Convierte un CIDR IPv6 en el rango de la red y el texto canónico. Si el prefijo no es múltiplo de 4, verás un aviso de nibble, no un error.',
	tool_ipv6_cidr_calculate: 'Calcular',
	tool_ipv6_cidr_sample: 'Cargar ejemplo',
	tool_ipv6_cidr_clear: 'Limpiar',
	tool_ipv6_cidr_copy: 'Copiar campos',
	tool_ipv6_cidr_copy_done: 'Copiado',
	tool_ipv6_cidr_input_label: 'CIDR IPv6',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Resultado',
	tool_ipv6_cidr_lbl_network: 'Red (comprimida)',
	tool_ipv6_cidr_lbl_network_exp: 'Red (expandida)',
	tool_ipv6_cidr_lbl_last: 'Última dirección (comprimida)',
	tool_ipv6_cidr_lbl_last_exp: 'Última dirección (expandida)',
	tool_ipv6_cidr_lbl_prefix: 'Longitud de prefijo',
	tool_ipv6_cidr_lbl_count: 'Número de direcciones',
	tool_ipv6_cidr_lbl_nibble: 'Alineado a nibble',
	tool_ipv6_cidr_nibble_yes: 'Sí: la longitud es múltiplo de 4.',
	tool_ipv6_cidr_nibble_no:
		'No: este prefijo no cae en un nibble de 4 bits. El DNS inverso (ip6.arpa) y muchos ISP esperan pasos /4, /8, … /64, /68.',
	tool_ipv6_cidr_note_64: '/64 es el prefijo LAN habitual (SLAAC y la mayoría de subredes de host).',
	tool_ipv6_cidr_note_127: '/127 es el prefijo punto a punto (RFC 6164): dos direcciones, sin par sobrante.',
	tool_ipv6_cidr_note_128: '/128 es un único host.',
	tool_ipv6_cidr_err_empty: 'Introduce un CIDR IPv6 como 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'No se pudo interpretar como dirección o CIDR IPv6.',
	tool_ipv6_cidr_err_prefix: 'La longitud de prefijo debe ser un entero entre 0 y 128.',
	tool_ipv6_cidr_err_ipv4: 'Esta página es solo IPv6. Para IPv4 usa la herramienta CIDR a rango IP.',
	tool_ipv6_cidr_how_title: 'Cómo funciona',
	tool_ipv6_cidr_how_body:
		'La calculadora CIDR IPv6 convierte un prefijo en red, última dirección y notación comprimida. Es la misma tarea que consultar la notación CIDR IPv6 de un bloque que ya tienes.',
	tool_ipv6_cidr_how_item_1: 'Ten claro que vas a calcular el rango de un CIDR IPv6, no a probar conectividad.',
	tool_ipv6_cidr_how_item_2: 'Pega un CIDR IPv6 como 2001:db8:1::/64 (o pulsa Cargar ejemplo).',
	tool_ipv6_cidr_how_item_3: 'Lee red y última dirección (comprimidas y expandidas) y el recuento; copia lo que necesites.',
	tool_ipv6_cidr_how_item_4: 'Si el prefijo no es múltiplo de 4, lee el aviso de nibble.',
	tool_ipv6_cidr_how_item_5: 'Para IPv4 usa CIDR a rango IP; para agregar inicio–fin, IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Fórmula',
	tool_ipv6_cidr_formula_body:
		'Analiza el texto IPv6 (un solo “::”). Máscara = 2^128 − 2^(128−prefijo). Red = dirección AND máscara. Última = red OR NOT máscara. Comprime con RFC 5952. El recuento es 2^(128−prefijo).',
	tool_ipv6_cidr_formula_item_1: 'Rechaza literales IPv4 y prefijos fuera de 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR de 128 bits para red y última dirección.',
	tool_ipv6_cidr_formula_item_3: 'Tamaños especiales: /128 → 1; /127 → 2 (RFC 6164); /64 → 2^64 (LAN típica).',
	tool_ipv6_cidr_formula_item_4: 'Alineación nibble: prefijo módulo 4 = 0. Otros valores calculan igual, con aviso.',
	tool_ipv6_cidr_example_title: 'Ejemplo',
	tool_ipv6_cidr_example:
		'Entrada: 2001:db8:1::/64. Salida: red 2001:db8:1:: (expandida 2001:0db8:0001:0000:0000:0000:0000:0000), última 2001:db8:1:0:ffff:ffff:ffff:ffff, recuento 2^64, nibble alineado sí.',
	tool_ipv6_cidr_usecases_title: 'Cuándo ayuda',
	tool_ipv6_cidr_usecase_1: 'Planear una LAN de oficina en /64 y copiar la red comprimida a la config del router.',
	tool_ipv6_cidr_usecase_2: 'Comprobar un enlace punto a punto que debería ser /127 (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'Normalizar prefijos de documentación como 2001:db8::/32 antes de una captura.',
	tool_ipv6_cidr_faq_q1: '¿Qué significa “no alineado a nibble”?',
	tool_ipv6_cidr_faq_a1:
		'El DNS inverso IPv6 y muchas asignaciones avanzan de 4 en 4 bits. Un /67 sigue siendo un rango válido, pero ip6.arpa y algunos ISP esperan esos pasos. Aquí verás el rango y un aviso.',
	tool_ipv6_cidr_faq_q2: '¿En qué se diferencian /64, /127 y /128?',
	tool_ipv6_cidr_faq_a2:
		'/64 es la LAN habitual. /127 son dos direcciones punto a punto (RFC 6164). /128 es un host. El panel lo anota al pegarlos.',
	tool_ipv6_cidr_faq_q3: '¿Es lo mismo que consultar la notación CIDR IPv6?',
	tool_ipv6_cidr_faq_a3:
		'Sí para convertir notación en red/última dirección y texto canónico. No hay una “tabla CIDR IPv6” de todos los prefijos aquí; para máscaras IPv4 usa la chuleta CIDR.',
	tool_ipv6_cidr_faq_q4: '¿Dónde expandir un CIDR IPv4?',
	tool_ipv6_cidr_faq_a4: 'En la herramienta CIDR a rango IP. Esta página rechaza literales IPv4 a propósito.',
	tool_ipv6_cidr_faq_q5: '¿Comprueba si IPv6 funciona en mi red?',
	tool_ipv6_cidr_faq_a5: 'No. Los testers de conectividad son otra tarea. Aquí solo hay aritmética de prefijos.',
	tool_ipv6_cidr_faq_q6: '¿Se suben las direcciones?',
	tool_ipv6_cidr_faq_a6: 'No. Se quedan en tu dispositivo, en esta pestaña, y no se envían a un servidor.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — Arquitectura de direcciones IPv6',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — Representación textual recomendada de IPv6',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — Prefijos de 127 bits en enlaces entre routers',
	tool_ipv6_cidr_disclaimer:
		'Los resultados siguen la aritmética CIDR IPv6 habitual (RFC 4291, 5952, 6164). No es un asesor de enrutamiento; verifica cambios críticos en tu laboratorio.',
};

export default es;
