/**
 * i18n tool shard (how-to-calculate-concrete / es).
 * Español independiente: calculadora de concreto / volumen de hormigón.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_concrete_title: 'Calculadora de concreto — Estimar el volumen de hormigón',
	tool_concrete_description:
		'Estima el volumen de concreto o hormigón para losa, columna o cilindro a partir de largo, ancho y espesor (o diámetro y altura). Ejemplo: losa de 5 m × 4 m × 0.1 m → 2.0 m³. El conteo de sacos es opcional y usa 0.015 m³ (o 0.45 ft³) por saco — hipótesis indicada en la página. El cálculo corre en tu navegador; los datos permanecen en el dispositivo y no se suben a un servidor.',
	tool_concrete_article:
		'Esta herramienta estima el volumen de vertido con geometría simple. Elige losa, columna rectangular o cilindro, introduce medidas positivas en metros o pies y obtén m³ o ft³. Los sacos son opcionales y dependen del volumen por saco documentado bajo el resultado.',
	tool_concrete_calculate: 'Calcular',
	tool_concrete_sample: 'Cargar ejemplo',
	tool_concrete_clear: 'Limpiar',
	tool_concrete_shape_label: 'Forma',
	tool_concrete_shape_slab: 'Losa',
	tool_concrete_shape_column: 'Columna',
	tool_concrete_shape_cylinder: 'Cilindro',
	tool_concrete_unit_label: 'Unidades',
	tool_concrete_unit_m: 'Metros (m)',
	tool_concrete_unit_ft: 'Pies (ft)',
	tool_concrete_length_label: 'Largo',
	tool_concrete_width_label: 'Ancho',
	tool_concrete_thickness_label: 'Espesor',
	tool_concrete_height_label: 'Alto',
	tool_concrete_diameter_label: 'Diámetro',
	tool_concrete_length_ph: 'p. ej. 5',
	tool_concrete_width_ph: 'p. ej. 4',
	tool_concrete_thickness_ph: 'p. ej. 0.1',
	tool_concrete_height_ph: 'p. ej. 2.4',
	tool_concrete_diameter_ph: 'p. ej. 0.3',
	tool_concrete_bags_check: 'Estimar sacos (opcional)',
	tool_concrete_result_volume: 'Volumen',
	tool_concrete_result_bags: 'Sacos (aprox.)',
	tool_concrete_bags_note:
		'Hipótesis de saco: 0.015 m³ por saco en modo métrico, o 0.45 ft³ en pies. El tamaño real varía según marca y mezcla; redondea al alza y confirma con tu proveedor.',
	tool_concrete_err_dims: 'Introduce números positivos en todas las dimensiones.',
	tool_concrete_how_title: 'Cómo funciona',
	tool_concrete_how_body:
		'Elige forma y sistema de unidades e introduce las medidas. Para losa y columna rectangular se usa largo × ancho × espesor (o alto); para cilindro, π × (diámetro/2)² × alto. Si activas sacos, se divide el volumen por el tamaño de saco documentado y se redondea hacia arriba. Todo ocurre en tu pestaña del navegador; no se sube nada a un servidor.',
	tool_concrete_formula_title: 'Fórmulas y supuestos',
	tool_concrete_formula_body: 'Los volúmenes usan sólidos geométricos cerrados:',
	tool_concrete_formula_item_1: 'Losa: V = largo × ancho × espesor.',
	tool_concrete_formula_item_2: 'Columna rectangular: V = largo × ancho × alto.',
	tool_concrete_formula_item_3:
		'Cilindro: V = π × (diámetro ÷ 2)² × alto. Sacos = ceil(V ÷ volumen por saco) con 0.015 m³ o 0.45 ft³.',
	tool_concrete_example_title: 'Ejemplo',
	tool_concrete_example:
		'Ejemplo (losa, metros): 5 m × 4 m × 0.1 m → V = 2.0 m³. Con 0.015 m³ por saco → ≈ 134 sacos.',
	tool_concrete_usecases_title: 'Cuándo usarla',
	tool_concrete_usecase_1: 'Pedir una estimación de losa de patio o garaje antes de llamar a la planta.',
	tool_concrete_usecase_2: 'Calcular sacos para postes de cerca o zapatas cilíndricas pequeñas.',
	tool_concrete_usecase_3: 'Contrastar un presupuesto con geometría L×A×E sencilla.',
	tool_concrete_faq_q1: '¿Qué fórmula usa el modo losa?',
	tool_concrete_faq_a1:
		'Volumen de losa = largo × ancho × espesor. El ejemplo 5 × 4 × 0.1 m da 2.0 m³.',
	tool_concrete_faq_q2: '¿Cómo se calculan los sacos?',
	tool_concrete_faq_a2:
		'Sacos = ceil(volumen ÷ volumen por saco). Métrico: 0.015 m³; pies: 0.45 ft³. Es una hipótesis de planificación, no una etiqueta de marca.',
	tool_concrete_faq_q3: '¿El cilindro pide radio o diámetro?',
	tool_concrete_faq_a3: 'Introduce el diámetro exterior; el radio es diámetro ÷ 2 en V = π r² h.',
	tool_concrete_faq_q4: '¿Se suben mis datos?',
	tool_concrete_faq_a4:
		'No. El cálculo se hace en el navegador en tu dispositivo y no se sube a un servidor.',
	tool_concrete_references:
		'Factores de conversión NIST SP 811; guía introductoria de la Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (conversiones)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — Aprender sobre concreto',
};

export default es;
