/**
 * i18n tool shard (how-to-calculate-body-fat / es).
 * Independent rewrite in Spanish (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_body_fat_title: 'Calculadora de grasa corporal — Estimar el porcentaje con perímetros',
	tool_body_fat_description:
		'Estima el porcentaje de grasa corporal con fórmulas de perímetros de la Marina de EE. UU. (opción del Ejército en la misma página). Ejemplo: hombre, 178 cm de altura, cuello 40 cm, cintura 86 cm → ~15,3 %. Cálculo en el navegador; solo educativo — no es consejo médico ni diagnóstico.',
	tool_body_fat_article:
		'Los métodos por perímetros estiman la grasa a partir de la altura y mediciones con cinta. Navy y Army (familia DoD) comparten esta URL educativa; los pliegues cutáneos se explican en FAQ como método distinto, sin página aparte.',
	tool_body_fat_calculate: 'Calcular',
	tool_body_fat_sample: 'Cargar ejemplo',
	tool_body_fat_clear: 'Borrar',
	tool_body_fat_method_label: 'Método',
	tool_body_fat_method_navy: 'Perímetros Marina de EE. UU.',
	tool_body_fat_method_army: 'Perímetros Ejército / estilo DoD',
	tool_body_fat_sex_label: 'Sexo (tablas de fórmula)',
	tool_body_fat_sex_male: 'Hombre',
	tool_body_fat_sex_female: 'Mujer',
	tool_body_fat_height_label: 'Altura (cm)',
	tool_body_fat_height_ph: 'p. ej. 178',
	tool_body_fat_neck_label: 'Perímetro del cuello (cm)',
	tool_body_fat_neck_ph: 'p. ej. 40',
	tool_body_fat_waist_label: 'Perímetro de cintura (cm)',
	tool_body_fat_waist_ph: 'p. ej. 86',
	tool_body_fat_hip_label: 'Perímetro de cadera (cm, mujer)',
	tool_body_fat_hip_ph: 'p. ej. 96',
	tool_body_fat_result_label: 'Grasa corporal estimada',
	tool_body_fat_result_note: 'Solo estimación educativa — no es consejo médico ni diagnóstico.',
	tool_body_fat_err_input: 'Altura, cuello y cintura deben ser números positivos.',
	tool_body_fat_err_hip: 'Las fórmulas para mujer requieren un perímetro de cadera positivo.',
	tool_body_fat_err_geom: 'La cintura debe ser mayor que el cuello (y cintura+cadera > cuello en mujeres).',
	tool_body_fat_how_title: 'Cómo funciona',
	tool_body_fat_how_body:
		'Introduce sexo, altura y mediciones en centímetros. La herramienta convierte a pulgadas para las fórmulas log10 publicadas y muestra el % estimado. Los pliegues cutáneos están en FAQ, en esta misma página.',
	tool_body_fat_formula_title: 'Fórmula y supuestos de medición',
	tool_body_fat_formula_body:
		'Hombre: %GC ≈ 86,010×log10(cintura−cuello) − 70,041×log10(altura) + 36,387 (pulgadas). Mujer: %GC ≈ 163,205×log10(cintura+cadera−cuello) − 97,684×log10(altura) + 78,387. Supuestos:',
	tool_body_fat_formula_item_1: 'Cinta en puntos estándar Navy/DoD; postura y ropa alteran el resultado.',
	tool_body_fat_formula_item_2: 'Entrada en cm; conversión 1 in = 2,54 cm antes de las fórmulas log10.',
	tool_body_fat_formula_item_3: 'Estimaciones educativas, no resultados clínicos DXA/Bod Pod ni consejo médico.',
	tool_body_fat_example_title: 'Ejemplo',
	tool_body_fat_example:
		'Ejemplo: hombre, método Navy, altura 178 cm, cuello 40 cm, cintura 86 cm → ~15,3 % de grasa corporal.',
	tool_body_fat_usecases_title: 'Cuándo usarla',
	tool_body_fat_usecase_1: 'Clase: practicar fórmulas Navy de grasa corporal con números fijos.',
	tool_body_fat_usecase_2: 'Ilustración aproximada de seguimiento fitness antes de hablar con un clínico (no diagnóstico).',
	tool_body_fat_usecase_3: 'Comparar etiquetas Navy vs Army en una sola página sin segunda URL.',
	tool_body_fat_faq_q1: '¿Qué fórmula usa?',
	tool_body_fat_faq_a1:
		'Fórmulas log10 de perímetros estilo Marina/DoD de EE. UU., en pulgadas tras convertir cm.',
	tool_body_fat_faq_q2: '¿Navy vs Army en esta página?',
	tool_body_fat_faq_a2:
		'Ambos son estimadores por perímetros de la misma familia. Las etiquetas ayudan en búsqueda; la técnica de medición importa más que el nombre.',
	tool_body_fat_faq_q3: '¿Es consejo médico?',
	tool_body_fat_faq_a3:
		'No. Los resultados son estimaciones educativas, no diagnóstico, plan de tratamiento ni prueba clínica de composición.',
	tool_body_fat_faq_q4: '¿Y los pliegues cutáneos?',
	tool_body_fat_faq_a4:
		'Las ecuaciones de pliegues requieren varios puntos y técnica entrenada. Se explican aquí en FAQ, no como URL aparte.',
	tool_body_fat_disclaimer:
		'Las estimaciones de grasa corporal son solo ilustraciones educativas y no sustituyen consejo médico, diagnóstico ni pruebas clínicas de composición. Consulte a un profesional cualificado para decisiones de salud.',
	tool_body_fat_references:
		'Ecuaciones de perímetros Marina/DoD de EE. UU.; notas educativas ACE sobre calculadoras de grasa; literatura revisada por pares sobre métodos por perímetros.',
	tool_body_fat_ref_ace_label: 'ACE — Calculadora de grasa corporal (educativa)',
	tool_body_fat_ref_pmc_label: 'PMC — Métodos de grasa corporal por perímetros',
};

export default es;
