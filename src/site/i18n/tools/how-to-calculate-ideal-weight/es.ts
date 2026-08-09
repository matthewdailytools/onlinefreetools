/**
 * i18n tool shard (how-to-calculate-ideal-weight / es).
 * Reescritura independiente según 03 brief (peso ideal); no calco del inglés.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_ideal_weight_title: 'Calculadora de peso ideal — Estimar el rango de peso corporal',
	tool_ideal_weight_description:
		'Estima el peso corporal ideal con Devine, Robinson, Miller y Hamwi en una sola página. Ejemplo: hombre 178 cm → Devine ≈ 73,2 kg (rango ≈ 70,4–75,2 kg entre fórmulas). Cálculo en el navegador; solo educativo — no es consejo médico ni diagnóstico.',
	tool_ideal_weight_article:
		'Las fórmulas de peso ideal (IBW) dan un peso de referencia a partir de talla y sexo. Aquí comparas Devine, Robinson, Miller y Hamwi juntos, con aviso de que no es consejo clínico.',
	tool_ideal_weight_calculate: 'Calcular',
	tool_ideal_weight_sample: 'Cargar ejemplo',
	tool_ideal_weight_clear: 'Borrar',
	tool_ideal_weight_sex_label: 'Sexo (tablas de fórmula)',
	tool_ideal_weight_sex_male: 'Hombre',
	tool_ideal_weight_sex_female: 'Mujer',
	tool_ideal_weight_height_label: 'Altura (cm)',
	tool_ideal_weight_height_ph: 'p. ej. 178',
	tool_ideal_weight_formula_label: 'Vista de fórmula',
	tool_ideal_weight_formula_all: 'Todas las fórmulas (rango)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Peso ideal estimado',
	tool_ideal_weight_result_range: 'Rango entre fórmulas',
	tool_ideal_weight_result_note: 'Estimación educativa — no es consejo médico ni diagnóstico.',
	tool_ideal_weight_err_height: 'La altura debe ser mayor que cero.',
	tool_ideal_weight_err_short:
		'Estas fórmulas IBW están poco definidas por debajo de unos 152 cm (5 ft). Trata el resultado solo como ilustración.',
	tool_ideal_weight_how_title: 'Cómo funciona',
	tool_ideal_weight_how_body:
		'Indica sexo y altura en centímetros. La herramienta convierte a pulgadas para las fórmulas clásicas y muestra kilogramos. Compara fórmulas aquí; BMI y grasa corporal van en otras páginas.',
	tool_ideal_weight_formula_title: 'Fórmulas y supuestos',
	tool_ideal_weight_formula_body:
		'Conversión: 1 in = 2,54 cm. Por encima de 60 in (5 ft), Devine hombre = 50 + 2,3×(in−60); mujer = 45,5 + 2,3×(in−60). Robinson, Miller y Hamwi usan la misma forma lineal con otros coeficientes. Ten en cuenta:',
	tool_ideal_weight_formula_item_1: 'Surgen de contextos de dosificación/referencia en adultos, no de metas personales.',
	tool_ideal_weight_formula_item_2: 'No modelan complexión, masa muscular ni embarazo.',
	tool_ideal_weight_formula_item_3: 'Son ilustraciones educativas, no objetivos clínicos ni consejo médico.',
	tool_ideal_weight_example_title: 'Ejemplo',
	tool_ideal_weight_example:
		'Ejemplo: hombre, 178 cm → Devine ≈ 73,2 kg; Robinson ≈ 71,1, Miller ≈ 70,4, Hamwi ≈ 75,2 (≈ 70,4–75,2 kg).',
	tool_ideal_weight_usecases_title: 'Cuándo usarla',
	tool_ideal_weight_usecase_1: 'Clase: comparar fórmulas IBW clásicas con una misma altura.',
	tool_ideal_weight_usecase_2: 'Referencia educativa aproximada antes de hablar con un clínico (no un plan de meta).',
	tool_ideal_weight_usecase_3: 'Ver Devine frente a Robinson en una página, sin URLs separadas.',
	tool_ideal_weight_faq_q1: '¿Qué fórmula de peso ideal es la «correcta»?',
	tool_ideal_weight_faq_a1:
		'Ninguna lo es de forma universal. Devine es habitual en docencia; Robinson, Miller y Hamwi difieren en coeficientes. Compáralas aquí.',
	tool_ideal_weight_faq_q2: '¿Es lo mismo que el IMC?',
	tool_ideal_weight_faq_a2:
		'No. El IMC relaciona peso y altura. El IBW estima un peso de referencia solo con altura y sexo.',
	tool_ideal_weight_faq_q3: '¿Es consejo médico?',
	tool_ideal_weight_faq_a3:
		'No. Los números son solo estimaciones educativas: no diagnostican ni prescriben tratamiento o nutrición.',
	tool_ideal_weight_faq_q4: '¿Por qué convertir a pulgadas?',
	tool_ideal_weight_faq_a4:
		'Las ecuaciones tipo Devine publicadas se definen en pulgadas por encima de 5 pies. Los cm se convierten antes de aplicarlas.',
	tool_ideal_weight_disclaimer:
		'Los resultados de peso ideal son solo ilustraciones educativas y no sustituyen consejo médico, diagnóstico ni valoración clínica. Consulta a un profesional cualificado para decisiones de salud.',
	tool_ideal_weight_references:
		'Ecuaciones IBW clásicas Devine/Robinson/Miller/Hamwi; contexto educativo de dosificación/IBW en NCBI Bookshelf.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — contexto de peso corporal ideal',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default es;
