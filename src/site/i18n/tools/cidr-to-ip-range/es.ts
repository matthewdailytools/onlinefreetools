/**
 * i18n tool shard (cidr-to-ip-range / es).
 * Locale: Spanish. H1 = CIDR a rango IP (not sole “Calculadora CIDR”).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR a rango IP — Amplía un prefijo a direcciones usables',
	tool_cidr_to_ip_range_desc:
		'CIDR a rango IP: pega 192.168.1.0/24 y obtén red, broadcast y hosts usables. Se calcula en tu dispositivo, sin subir al servidor.',
	tool_cidr_to_ip_range_description:
		'CIDR a rango IP: pega una notación CIDR IPv4 (ejemplo 192.168.1.0/24) y verás dirección de red, broadcast, primer/último host usable, recuento de hosts y máscara de subred. También convierte máscara ↔ prefijo, comprueba si una IP está en el bloque y expande direcciones con un límite seguro de filas. Es el mismo trabajo que una calculadora de notación CIDR: todo ocurre en tu dispositivo y no se sube a un servidor.',
	tool_cidr_to_ip_range_article:
		'Introduce un CIDR IPv4 para ver red, broadcast, hosts usables, recuento, máscara y comodín. Modos opcionales: máscara ↔ prefijo, contención/solapamiento o expansión limitada.',
	tool_cidr_to_ip_range_calculate: 'Calcular',
	tool_cidr_to_ip_range_sample: 'Cargar ejemplo',
	tool_cidr_to_ip_range_clear: 'Limpiar',
	tool_cidr_to_ip_range_copy: 'Copiar campos',
	tool_cidr_to_ip_range_copy_done: 'Copiado',
	tool_cidr_to_ip_range_mode_label: 'Modo',
	tool_cidr_to_ip_range_mode_range: 'Prefijo → rango',
	tool_cidr_to_ip_range_mode_mask: 'Máscara ↔ prefijo',
	tool_cidr_to_ip_range_mode_check: 'Contiene / solapa',
	tool_cidr_to_ip_range_mode_expand: 'Expandir (con tope)',
	tool_cidr_to_ip_range_input_label: 'CIDR IPv4',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Máscara de subred (punto decimal)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP o segundo CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 o 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Resultado',
	tool_cidr_to_ip_range_lbl_network: 'Red',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'Primer usable',
	tool_cidr_to_ip_range_lbl_last: 'Último usable',
	tool_cidr_to_ip_range_lbl_hosts: 'N.º de hosts',
	tool_cidr_to_ip_range_lbl_mask: 'Máscara de subred',
	tool_cidr_to_ip_range_lbl_wildcard: 'Máscara comodín',
	tool_cidr_to_ip_range_lbl_prefix: 'Longitud de prefijo',
	tool_cidr_to_ip_range_lbl_normalized: 'CIDR normalizado',
	tool_cidr_to_ip_range_norm_hint:
		'Había bits de host distintos de cero; los valores mostrados usan la dirección de red.',
	tool_cidr_to_ip_range_expand_limit:
		'La expansión se detuvo en el límite de seguridad ({limit} filas). Usa un prefijo más largo o sube el tope más adelante.',
	tool_cidr_to_ip_range_check_in: 'La dirección está dentro del CIDR.',
	tool_cidr_to_ip_range_check_out: 'La dirección está fuera del CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Los bloques son idénticos.',
	tool_cidr_to_ip_range_overlap_contain: 'El primer CIDR contiene al segundo.',
	tool_cidr_to_ip_range_overlap_inside: 'El primer CIDR está dentro del segundo.',
	tool_cidr_to_ip_range_overlap_overlap: 'Los bloques se solapan parcialmente.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Los bloques no se solapan.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Prefijo desde la máscara: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Máscara desde el prefijo: {mask}',
	tool_cidr_to_ip_range_err_empty: 'Introduce un CIDR IPv4 como 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'No se pudo interpretar como dirección o CIDR IPv4.',
	tool_cidr_to_ip_range_err_prefix: 'La longitud de prefijo debe ser un entero entre 0 y 32.',
	tool_cidr_to_ip_range_err_ipv6: 'Esta página es solo IPv4. Para IPv6 usa una herramienta CIDR IPv6.',
	tool_cidr_to_ip_range_err_mask: 'Esa máscara en punto decimal no es una máscara de subred IPv4 contigua.',
	tool_cidr_to_ip_range_err_second: 'Introduce una segunda dirección o CIDR IPv4 para contiene/solapa.',
	tool_cidr_to_ip_range_how_title: 'Cómo funciona',
	tool_cidr_to_ip_range_how_body:
		'Convierte un prefijo CIDR en un rango IP: red, broadcast, hosts usables y máscara. Es la tarea habitual de una calculadora de notación CIDR.',
	tool_cidr_to_ip_range_how_item_1:
		'Reconoce que vas a pasar de un prefijo CIDR a un rango IP (red, broadcast, hosts usables)—el mismo trabajo que una calculadora de notación CIDR.',
	tool_cidr_to_ip_range_how_item_2: 'Pega un CIDR IPv4 como 192.168.1.0/24 (o pulsa Cargar ejemplo).',
	tool_cidr_to_ip_range_how_item_3:
		'Lee red, broadcast, primer/último usable, recuento de hosts y máscara; copia lo que necesites.',
	tool_cidr_to_ip_range_how_item_4:
		'Si hace falta, cambia a conversión de máscara, contiene/solapa o expandir con tope.',
	tool_cidr_to_ip_range_how_item_5:
		'Para inicio–fin → CIDR usa la herramienta relacionada IP range to CIDR; para IPv6, una página dedicada cuando esté disponible.',
	tool_cidr_to_ip_range_formula_title: 'Fórmula',
	tool_cidr_to_ip_range_formula_body:
		'Máscara = 2^32 − 2^(32−prefijo). Red = dirección AND máscara. Broadcast = red OR NOT máscara. Hosts usables siguen /31 (RFC 3021) y casos especiales de /32.',
	tool_cidr_to_ip_range_formula_item_1: 'Parsea a.b.c.d/nn; rechaza IPv6 y prefijos fuera de 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'Calcula bits de máscara; luego red y broadcast con AND/OR bit a bit.',
	tool_cidr_to_ip_range_formula_item_3:
		'Usables: /32 → un solo host; /31 → ambas direcciones (RFC 3021); si no, primero=red+1, último=broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4:
		'Si el input tenía bits de host activos, normaliza a la dirección de red y muestra un aviso.',
	tool_cidr_to_ip_range_example_title: 'Ejemplo',
	tool_cidr_to_ip_range_example:
		'Entrada: 192.168.1.0/24. Salida: red 192.168.1.0, broadcast 192.168.1.255, usables 192.168.1.1–192.168.1.254, máscara 255.255.255.0, hosts 254. La entrada 192.168.1.37/24 se normaliza a 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'Cuándo ayuda',
	tool_cidr_to_ip_range_usecase_1:
		'Expandir el CIDR de un security group a primer/último host antes de escribir una ACL que aún use rangos.',
	tool_cidr_to_ip_range_usecase_2:
		'Pasar a un compañero la máscara en punto decimal y el número de hosts usables de un /24 sin abrir una hoja de cálculo.',
	tool_cidr_to_ip_range_usecase_3:
		'Revisar un plan Proxmox o de bridge: confirmar red y broadcast del CIDR que vas a asignar.',
	tool_cidr_to_ip_range_faq_q1: '¿Se suben mis direcciones a un servidor?',
	tool_cidr_to_ip_range_faq_a1:
		'No. Las direcciones permanecen en tu dispositivo, en esta pestaña del navegador, y no se suben a un servidor.',
	tool_cidr_to_ip_range_faq_q2: '¿Cómo se cuentan los hosts usables en /31 y /32?',
	tool_cidr_to_ip_range_faq_a2:
		'/32 es un único host (la red coincide con esa dirección; no hay broadcast clásico). /31 sigue RFC 3021: ambas direcciones son usables punto a punto; no hay par red/broadcast sin usar.',
	tool_cidr_to_ip_range_faq_q3: '¿Qué pasa si pego 192.168.1.37/24?',
	tool_cidr_to_ip_range_faq_a3:
		'La herramienta normaliza a 192.168.1.0/24, avisa de que se ignoraron bits de host y sigue mostrando red, broadcast y rango usable de ese bloque.',
	tool_cidr_to_ip_range_faq_q4: '¿Es lo mismo que una calculadora de notación CIDR?',
	tool_cidr_to_ip_range_faq_a4:
		'Sí para la tarea habitual: pasar la notación CIDR a red/broadcast/hosts usables y máscara. El título usa «CIDR a rango IP» porque describe el resultado; quien busca calculadora CIDR llega a la misma herramienta.',
	tool_cidr_to_ip_range_faq_q5: '¿Puedo listar cada IP de un bloque grande?',
	tool_cidr_to_ip_range_faq_a5:
		'Usa el modo Expandir. El listado se detiene en un límite de seguridad (1024 filas) para que un /8 no congele la pestaña. Acorta el prefijo o quédate con los campos resumen.',
	tool_cidr_to_ip_range_faq_q6: '¿Dónde convierto inicio–fin a CIDR?',
	tool_cidr_to_ip_range_faq_a6:
		'Esa tarea inversa está en la herramienta relacionada IP range to CIDR. Esta página solo amplía un prefijo a campos de rango (y listas opcionales con tope).',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Los resultados siguen la aritmética CIDR IPv4 habitual (incluido RFC 3021 para /31). No es un asesor de políticas de enrutamiento o firewall; verifica cambios críticos en tu propio laboratorio.',
};

export default es;
