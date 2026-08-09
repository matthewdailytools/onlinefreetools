/**
 * i18n tool shard (how-to-calculate-tile / es).
 * Español independiente: calculadora de azulejos / cantidad de baldosas.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_tile_title: 'Calculadora de azulejos — Estimar la cantidad de baldosas',
	tool_tile_description:
		'Calcula cuántas baldosas necesitas a partir del área de la habitación en m² (o largo × ancho), el tamaño del azulejo en cm y el porcentaje de desperdicio (por defecto 10%). Ejemplo: habitación de 12 m², azulejos 30×30 cm y 10% de merma → 147 piezas (redondeo hacia arriba). Todo se calcula en el navegador; los datos permanecen en tu dispositivo y no se suben a un servidor.',
	tool_tile_article:
		'Convierte el área y el tamaño de cada pieza en una cantidad de compra. Puedes indicar el área o las medidas en metros, el azulejo en centímetros y un margen de merma. El resultado se redondea al alza para cortes y roturas.',
	tool_tile_calculate: 'Calcular',
	tool_tile_sample: 'Cargar ejemplo',
	tool_tile_clear: 'Limpiar',
	tool_tile_mode_label: 'Cómo indicar el tamaño',
	tool_tile_mode_area: 'Área (m²)',
	tool_tile_mode_lw: 'Largo × ancho',
	tool_tile_area_label: 'Área de la habitación (m²)',
	tool_tile_area_ph: 'p. ej. 12',
	tool_tile_room_l_label: 'Largo de la habitación (m)',
	tool_tile_room_w_label: 'Ancho de la habitación (m)',
	tool_tile_room_l_ph: 'p. ej. 4',
	tool_tile_room_w_ph: 'p. ej. 3',
	tool_tile_tile_l_label: 'Largo del azulejo (cm)',
	tool_tile_tile_w_label: 'Ancho del azulejo (cm)',
	tool_tile_tile_l_ph: 'p. ej. 30',
	tool_tile_tile_w_ph: 'p. ej. 30',
	tool_tile_waste_label: 'Desperdicio (%)',
	tool_tile_waste_ph: 'p. ej. 10',
	tool_tile_waste_hint: 'El 10% por defecto cubre cortes y alguna pieza rota; súbelo en colocaciones en diagonal.',
	tool_tile_result_tiles: 'Baldosas necesarias',
	tool_tile_result_area: 'Área usada',
	tool_tile_result_tile_area: 'Área por pieza',
	tool_tile_err_input: 'Introduce un área (o largo y ancho) positiva, tamaños de azulejo positivos y un desperdicio de 0 o más.',
	tool_tile_how_title: 'Cómo funciona',
	tool_tile_how_body:
		'Elige área o largo × ancho, introduce el azulejo en cm y el porcentaje de merma. Se convierte el azulejo a m², se multiplica el área por (1 + merma/100), se divide y se redondea al alza. El cálculo queda en tu pestaña; no se envía a un servidor.',
	tool_tile_formula_title: 'Fórmula y supuestos',
	tool_tile_formula_body: 'La cantidad usa el área, el área de una pieza y la merma:',
	tool_tile_formula_item_1: 'Área A = m² directos, o largo × ancho en metros.',
	tool_tile_formula_item_2: 'Área de pieza a = (largo_cm ÷ 100) × (ancho_cm ÷ 100) en m².',
	tool_tile_formula_item_3: 'Piezas = ceil(A × (1 + merma% ÷ 100) ÷ a). Merma por defecto: 10%.',
	tool_tile_example_title: 'Ejemplo',
	tool_tile_example:
		'Ejemplo: 12 m², azulejos 30×30 cm, merma 10%. Una pieza mide 0.09 m². Área con merma = 12 × 1.10 = 13.2 m². Piezas = ceil(13.2 ÷ 0.09) = 147.',
	tool_tile_usecases_title: 'Para qué sirve',
	tool_tile_usecase_1: 'Pedir suelo para baño o cocina antes de ir a la tienda.',
	tool_tile_usecase_2: 'Contrastar un presupuesto de alicatado con un cálculo de área y merma.',
	tool_tile_usecase_3: 'Comparar formatos (30×30 frente a piezas mayores) cambiando solo el tamaño.',
	tool_tile_faq_q1: '¿Por qué se redondea hacia arriba?',
	tool_tile_faq_a1: 'No se compran fracciones de baldosa. El redondeo al alza refleja la compra real tras cortes y roturas.',
	tool_tile_faq_q2: '¿Qué significa el porcentaje de desperdicio?',
	tool_tile_faq_a2: 'Es el margen extra por cortes, encajes y piezas rotas. El valor por defecto es 10%; en diagonal suele hacer falta más.',
	tool_tile_faq_q3: '¿Área o largo × ancho?',
	tool_tile_faq_a3: 'Ambos valen. Usa área si ya conoces los m²; usa largo × ancho si tienes las medidas en metros.',
	tool_tile_faq_q4: '¿Se suben mis datos?',
	tool_tile_faq_a4: 'No. El cálculo ocurre en tu navegador, en el dispositivo, y no se sube a un servidor.',
	tool_tile_references:
		'Factores de conversión NIST SP 811; orientación de instalación de TCNA sobre merma y planificación.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (conversiones)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default es;
