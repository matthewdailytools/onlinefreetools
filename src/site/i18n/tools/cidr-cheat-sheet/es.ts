/**
 * i18n tool shard (cidr-cheat-sheet / es).
 * Consultas: chuleta cidr / tabla cidr / qué es cidr.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'Chuleta CIDR — Pulsa un prefijo para ver máscara y hosts',
	tool_cidr_cheat_sheet_desc:
		'Chuleta CIDR: pulsa /8–/32 para máscara, wildcard y hosts. La misma tabla que un chart CIDR. En tu dispositivo.',
	tool_cidr_cheat_sheet_description:
		'Chuleta CIDR: pulsa cualquier prefijo de /8 a /32 para máscara de subred, wildcard y hosts usables. Ejemplo: /24 → 255.255.255.0 y 254 hosts. Incluye una columna orientada a CompTIA y notas /31 /32. Es la misma tabla que un CIDR chart o un CIDR notation chart. Para expandir un bloque concreto usa CIDR a rango IP. Consultas en el navegador, no se suben a un servidor.',
	tool_cidr_cheat_sheet_article:
		'Tabla IPv4 clicable: máscara, wildcard y hosts. Es una chuleta, no una calculadora de un host concreto.',
	tool_cidr_cheat_sheet_sample: 'Cargar ejemplo',
	tool_cidr_cheat_sheet_clear: 'Quitar resalte',
	tool_cidr_cheat_sheet_jump: 'Mostrar',
	tool_cidr_cheat_sheet_jump_label: 'Ir al prefijo',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Prefijo elegido',
	tool_cidr_cheat_sheet_col_prefix: 'Prefijo',
	tool_cidr_cheat_sheet_col_mask: 'Máscara',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Hosts usables',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Suele salir en tablas tipo Network+',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Direcciones totales',
	tool_cidr_cheat_sheet_note_31: '/31: ambas direcciones son usables (RFC 3021 punto a punto).',
	tool_cidr_cheat_sheet_note_32: '/32: un solo host. La red es esa dirección; no hay broadcast clásico.',
	tool_cidr_cheat_sheet_err_jump: 'Introduce un prefijo entero de 8 a 32.',
	tool_cidr_cheat_sheet_how_title: 'Cómo funciona',
	tool_cidr_cheat_sheet_how_body:
		'La chuleta CIDR (el mismo trabajo que un CIDR chart) compara la longitud slash con máscara y hosts. Pulsa una fila en lugar de un PDF.',
	tool_cidr_cheat_sheet_how_item_1: 'Aclara que vas a consultar prefijo → máscara y hosts, no a expandir una IP concreta.',
	tool_cidr_cheat_sheet_how_item_2: 'Pulsa una fila de /8 a /32, o escribe el prefijo y Mostrar (el ejemplo elige /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Lee máscara, wildcard, hosts y si la fila suele estar en tablas CompTIA.',
	tool_cidr_cheat_sheet_how_item_4: 'En /31 y /32 lee la nota: no restes dos como en el caso clásico.',
	tool_cidr_cheat_sheet_how_item_5: 'Para expandir 192.168.1.0/24 a red y broadcast, usa CIDR a rango IP.',
	tool_cidr_cheat_sheet_formula_title: 'Reglas',
	tool_cidr_cheat_sheet_formula_body:
		'Bits de máscara = 2^32 − 2^(32−n). Wildcard = NOT de la máscara. Hosts: /32 → 1; /31 → 2 (RFC 3021); si no, 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'Solo prefijos IPv4 /8 a /32.',
	tool_cidr_cheat_sheet_formula_item_2: 'La columna CompTIA marca prefijos habituales de examen; no es el temario oficial.',
	tool_cidr_cheat_sheet_formula_item_3: 'Las notas /31 y /32 sustituyen el “menos dos” clásico.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. El CIDR veterinario es otra palabra.',
	tool_cidr_cheat_sheet_example_title: 'Ejemplo',
	tool_cidr_cheat_sheet_example:
		'Elige /24. Salida: máscara 255.255.255.0, wildcard 0.0.0.255, hosts 254, total 256. Columna CompTIA marcada. Igual que el ejemplo inicial.',
	tool_cidr_cheat_sheet_usecases_title: 'Cuándo ayuda',
	tool_cidr_cheat_sheet_usecase_1: 'Repasar /24 /25 /26 antes de una pregunta tipo Network+ sin abrir un PDF.',
	tool_cidr_cheat_sheet_usecase_2: 'Ver cuántos hosts usables tiene un objeto /28 antes de escribir el ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'Explicar que “slash 24” son 256 direcciones y máscara 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: '¿Qué significa CIDR?',
	tool_cidr_cheat_sheet_faq_a1:
		'Classless Inter-Domain Routing. El slash (p. ej. /24) es la longitud de prefijo. Esta página es una chuleta, no un curso de redes.',
	tool_cidr_cheat_sheet_faq_q2: '¿Qué prefijos salen en tablas tipo CompTIA?',
	tool_cidr_cheat_sheet_faq_a2:
		'Suelen marcarse /8, /16, /24 y longitudes cercanas /25–/28 y /30. La columna CompTIA las señala. No es el temario oficial.',
	tool_cidr_cheat_sheet_faq_q3: '¿Cómo se cuentan hosts en /31 y /32?',
	tool_cidr_cheat_sheet_faq_a3:
		'/32 es un host. /31 sigue RFC 3021: ambas direcciones en punto a punto. El resto resta dos para red y broadcast.',
	tool_cidr_cheat_sheet_faq_q4: '¿Es el implante veterinario CIDR?',
	tool_cidr_cheat_sheet_faq_a4: 'No. En ganadería CIDR puede ser un implante. Aquí solo hay prefijos y máscaras de red.',
	tool_cidr_cheat_sheet_faq_q5: '¿Puedo expandir 192.168.1.37/24 aquí?',
	tool_cidr_cheat_sheet_faq_a5: 'No. Usa CIDR a rango IP. Esta chuleta solo consulta /n → máscara y hosts.',
	tool_cidr_cheat_sheet_faq_q6: '¿Se suben las consultas?',
	tool_cidr_cheat_sheet_faq_a6: 'No. Los clics se quedan en tu dispositivo, en esta pestaña, y no se envían a un servidor.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — Enrutamiento entre dominios sin clases',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — Prefijos de 31 bits en enlaces punto a punto IPv4',
	tool_cidr_cheat_sheet_disclaimer:
		'Las cifras siguen la aritmética CIDR IPv4 habitual (RFC 3021 en /31). La columna CompTIA es una pista de estudio, no el temario oficial.',
};

export default es;
