/**
 * i18n tool shard (ip-range-to-cidr / es).
 * Local head term “Rango IP a CIDR”; aggregation / convert in desc & FAQ.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'Rango IP a CIDR — Convierte inicio–fin en lista de prefijos',
	tool_ip_range_to_cidr_desc:
		'Rango IP a CIDR: convierte inicio–fin en prefijos. Ejemplo: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. En el dispositivo, sin subir al servidor.',
	tool_ip_range_to_cidr_description:
		'Convierte un rango IP a CIDR: pega inicio y fin (o varias líneas) y obtén prefijos que cubren el intervalo. Ejemplo: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Si no están alineados, salen varios prefijos; varias líneas sirven para agregar CIDR. Las direcciones no salen del dispositivo ni se suben a un servidor.',
	tool_ip_range_to_cidr_article:
		'Pega rangos inicio–fin como en exportaciones de ACL y recibe la lista mínima de prefijos CIDR que cubren el intervalo cerrado. IPv4 e IPv6 van en lotes separados.',
	tool_ip_range_to_cidr_convert: 'Convertir',
	tool_ip_range_to_cidr_sample: 'Cargar ejemplo',
	tool_ip_range_to_cidr_clear: 'Limpiar',
	tool_ip_range_to_cidr_copy: 'Copiar CIDR',
	tool_ip_range_to_cidr_copy_done: 'Copiado',
	tool_ip_range_to_cidr_input_label: 'Rangos IP (uno por línea)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'Prefijos CIDR',
	tool_ip_range_to_cidr_meta_label: 'Resumen',
	tool_ip_range_to_cidr_meta_tpl: '{n} prefijo(s) · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Se intercambiaron inicio y fin porque la primera dirección era mayor.',
	tool_ip_range_to_cidr_err_empty: 'Introduce al menos un rango (inicio - fin), uno por línea.',
	tool_ip_range_to_cidr_err_parse: 'No se pudo interpretar esa línea como IP o rango inicio–fin.',
	tool_ip_range_to_cidr_err_mixed: 'No mezcles IPv4 e IPv6 en la misma conversión.',
	tool_ip_range_to_cidr_err_limit: 'Demasiados prefijos CIDR (límite de seguridad). Reduce los rangos.',
	tool_ip_range_to_cidr_how_title: 'Cómo funciona',
	tool_ip_range_to_cidr_how_body:
		'El resultado cubre cada dirección del intervalo cerrado con uno o más prefijos. Úsalo cuando el firewall pide CIDR y tú solo tienes inicio–fin.',
	tool_ip_range_to_cidr_how_item_1: 'Recuerda: si los extremos no alinean, habrá varios prefijos exactos, no una máscara “aproximada”.',
	tool_ip_range_to_cidr_how_item_2: 'Pega “A - B” o una línea por rango para agregar.',
	tool_ip_range_to_cidr_how_item_3: 'Convierte, revisa la lista y copia los CIDR.',
	tool_ip_range_to_cidr_how_item_4: 'Si iban al revés verás el aviso de intercambio; si mezclas familias, corrige y reintenta.',
	tool_ip_range_to_cidr_formula_title: 'Fórmula',
	tool_ip_range_to_cidr_formula_body:
		'Desde la dirección actual hasta el final: toma el mayor bloque potencia de dos alineado que aún cabe, emite prefijo y avanza.',
	tool_ip_range_to_cidr_formula_item_1: 'Parsea extremos a entero (32 o 128 bits); misma familia.',
	tool_ip_range_to_cidr_formula_item_2: 'Si inicio > fin, intercambia y anota el aviso.',
	tool_ip_range_to_cidr_formula_item_3: 'Bits de host = ceros finales ∩ potencia de dos del tramo restante.',
	tool_ip_range_to_cidr_formula_item_4: 'Emite red/prefijo, avanza 2^bits y repite.',
	tool_ip_range_to_cidr_example_title: 'Ejemplo',
	tool_ip_range_to_cidr_example:
		'Entrada: 192.168.1.0 - 192.168.1.255. Salida: 192.168.1.0/24. Sin alinear, 10.0.0.10 - 10.0.0.20 da 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30 y 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'Para qué sirve',
	tool_ip_range_to_cidr_usecase_1: 'Pasar exportaciones ACL en formato inicio–fin a reglas CIDR del firewall.',
	tool_ip_range_to_cidr_usecase_2: 'Rellenar grupos de seguridad en la nube que solo aceptan notación CIDR.',
	tool_ip_range_to_cidr_usecase_3: 'Agregar varios rangos privados de un ticket (una línea cada uno) antes de automatizar.',
	tool_ip_range_to_cidr_faq_q1: '¿Puedo mezclar IPv4 e IPv6?',
	tool_ip_range_to_cidr_faq_a1: 'No. Cada lote debe ser de una sola familia; conviértelos por separado.',
	tool_ip_range_to_cidr_faq_q2: '¿Por qué a veces salen varios CIDR?',
	tool_ip_range_to_cidr_faq_a2: 'Sin frontera limpia no hay un solo prefijo exacto. Se emiten varios alineados que juntos cubren el intervalo.',
	tool_ip_range_to_cidr_faq_q3: '¿Qué pasa si pego la dirección mayor primero?',
	tool_ip_range_to_cidr_faq_a3: 'Se intercambian, aparece un aviso breve y la conversión sigue.',
	tool_ip_range_to_cidr_faq_q4: '¿Cómo funciona la agregación multilínea?',
	tool_ip_range_to_cidr_faq_a4: 'Cada línea es un rango (o una IP). Se convierte una a una; no se fusionan huecos entre líneas.',
	tool_ip_range_to_cidr_faq_q5: '¿Se suben mis direcciones?',
	tool_ip_range_to_cidr_faq_a5: 'No. Permanecen en tu dispositivo, en esta pestaña; no se suben a un servidor.',
	tool_ip_range_to_cidr_faq_q6: '¿Dónde está “CIDR a rango IP”?',
	tool_ip_range_to_cidr_faq_a6: 'Esta página solo va de rango a prefijos. Expandir un CIDR a inicio/fin es la tarea inversa, en otra herramienta.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — Enrutamiento CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — Arquitectura de direcciones IPv6',
	tool_ip_range_to_cidr_disclaimer:
		'Los prefijos cubren el intervalo cerrado indicado. No simula protocolos de enrutamiento; verifica cambios críticos de ACL en tu laboratorio.',
};

export default es;
