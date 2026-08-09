/**
 * i18n tool shard (how-to-calculate-paint / es).
 * Spanish rewrite for búsqueda «calculadora de pintura / cuánta pintura».
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_paint_title: 'Calculadora de pintura — Estimar la pintura necesaria',
	tool_paint_description:
		'Estima litros de pintura a partir del área de pared en m² (o largo × alto × paredes), manos y rendimiento en m²/L (por defecto 10). Ejemplo: 40 m², 2 manos, 10 m²/L → 8 L. El conteo opcional de latas asume 3.78 L por lata. Funciona en el navegador; los números permanecen en tu dispositivo y no se suben al servidor.',
	tool_paint_article:
		'Convierte área y rendimiento del producto en litros antes de comprar. Puedes indicar el área o armarla con largo, alto y número de paredes.',
	tool_paint_calculate: 'Calcular',
	tool_paint_sample: 'Cargar ejemplo',
	tool_paint_clear: 'Limpiar',
	tool_paint_mode_label: 'Cómo indicar el muro',
	tool_paint_mode_area: 'Área (m²)',
	tool_paint_mode_lhw: 'Largo × alto × paredes',
	tool_paint_area_label: 'Área de pared (m²)',
	tool_paint_area_ph: 'p. ej. 40',
	tool_paint_len_label: 'Largo (m)',
	tool_paint_height_label: 'Alto (m)',
	tool_paint_walls_label: 'Número de paredes',
	tool_paint_len_ph: 'p. ej. 5',
	tool_paint_height_ph: 'p. ej. 2.5',
	tool_paint_walls_ph: 'p. ej. 4',
	tool_paint_coats_label: 'Manos',
	tool_paint_coats_ph: 'p. ej. 2',
	tool_paint_coverage_label: 'Rendimiento (m²/L)',
	tool_paint_coverage_ph: 'p. ej. 10',
	tool_paint_coverage_hint: '10 m²/L es un punto de partida; revisa la etiqueta del producto.',
	tool_paint_cans_label: 'Mostrar también latas (3.78 L c/u)',
	tool_paint_result_liters: 'Pintura necesaria',
	tool_paint_result_area: 'Área usada',
	tool_paint_result_cans: 'Latas (3.78 L)',
	tool_paint_err_input: 'Introduce área positiva (o largo, alto y paredes), manos y rendimiento positivos.',
	tool_paint_how_title: 'Cómo funciona',
	tool_paint_how_body:
		'Elige área o largo × alto × paredes, indica manos y rendimiento. Litros = área × manos ÷ rendimiento. Si activas latas, se divide entre 3.78 y se redondea hacia arriba. Todo en el navegador, sin subir al servidor.',
	tool_paint_formula_title: 'Fórmula y supuestos',
	tool_paint_formula_body: 'El volumen usa área, manos y rendimiento de etiqueta:',
	tool_paint_formula_item_1: 'Área A = m² directos, o largo × alto × paredes (metros).',
	tool_paint_formula_item_2: 'Litros = A × manos ÷ rendimiento (m²/L). Por defecto 10.',
	tool_paint_formula_item_3: 'Latas opcionales = ceil(litros ÷ 3.78). 3.78 L ≈ 1 galón EE. UU., solo una hipótesis.',
	tool_paint_example_title: 'Ejemplo',
	tool_paint_example:
		'Ejemplo: 40 m², 2 manos, 10 m²/L. Litros = 40 × 2 ÷ 10 = 8 L. Con latas de 3.78 L → ceil(8 ÷ 3.78) = 3.',
	tool_paint_usecases_title: 'Cuándo usarla',
	tool_paint_usecase_1: 'Comprar pintura de interiores sin quedarte corto ni comprar de más.',
	tool_paint_usecase_2: 'Comparar una vs dos manos cambiando el campo de manos.',
	tool_paint_usecase_3: 'Contrastar un presupuesto con un cálculo simple de área y rendimiento.',
	tool_paint_faq_q1: '¿Puedo usar largo × alto × paredes?',
	tool_paint_faq_a1: 'Sí. Si no conoces el m², multiplica dimensiones y número de paredes en la misma página.',
	tool_paint_faq_q2: '¿Qué es el rendimiento m²/L?',
	tool_paint_faq_a2: 'Cuántos metros cuadrados cubre un litro por mano. El valor 10 es orientativo; prioriza la etiqueta.',
	tool_paint_faq_q3: '¿Por qué 3.78 L por lata?',
	tool_paint_faq_a3: 'Es una aproximación a 1 galón estadounidense. Sirve para estimar latas enteras, no garantiza el envase de cada marca.',
	tool_paint_faq_q4: '¿Se suben mis números?',
	tool_paint_faq_a4: 'No. El cálculo se hace en tu navegador, en el dispositivo, sin subir al servidor.',
	tool_paint_references: 'NIST SP 811 sobre conversiones de longitud y área.',
	tool_paint_ref_nist_label: 'NIST — Publicación especial 811 (conversiones)',
};

export default es;
