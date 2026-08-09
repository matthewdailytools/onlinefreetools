/**
 * i18n tool shard (how-to-calculate-standard-deviation / es).
 * Reescritura independiente en español (no calco del inglés).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_std_dev_title: 'Calculadora de desviación estándar — SD y varianza',
	tool_std_dev_description:
		'Calcula la desviación estándar y la varianza en modo muestra (n−1) o población (n) a partir de una lista pegada. Ejemplo: 2, 4, 4, 4, 5, 5, 7, 9 → SD poblacional = 2 (muestral ≈ 2,14). El cálculo ocurre en el navegador; los datos no salen del dispositivo ni se suben a un servidor.',
	tool_std_dev_article:
		'La desviación estándar mide cuánto se dispersan los valores respecto a la media. Usa modo muestra cuando la lista es una muestra de un conjunto mayor, y población cuando la lista es el conjunto completo. La varianza es el cuadrado de esa desviación.',
	tool_std_dev_calculate: 'Calcular',
	tool_std_dev_sample: 'Cargar ejemplo',
	tool_std_dev_clear: 'Limpiar',
	tool_std_dev_numbers_label: 'Números',
	tool_std_dev_numbers_ph: 'p. ej. 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'Sepáralos con comas, espacios o saltos de línea.',
	tool_std_dev_mode_label: 'Modo',
	tool_std_dev_mode_sample: 'Muestra (n−1)',
	tool_std_dev_mode_population: 'Población (n)',
	tool_std_dev_result_count: 'Cantidad',
	tool_std_dev_result_mean: 'Media',
	tool_std_dev_result_variance: 'Varianza',
	tool_std_dev_result_sd: 'Desviación estándar',
	tool_std_dev_result_note_sample: 'El modo muestra usa la corrección de Bessel (divide entre n−1).',
	tool_std_dev_result_note_population: 'El modo población divide entre n (conjunto completo).',
	tool_std_dev_err_empty: 'Introduce al menos un número válido.',
	tool_std_dev_err_sample_n: 'La desviación muestral necesita al menos dos números.',
	tool_std_dev_how_title: 'Cómo funciona',
	tool_std_dev_how_body:
		'Pega los valores, elige muestra o población y calcula. Se obtiene la media, se suman las desviaciones al cuadrado, se divide entre n−1 o n para la varianza y se toma la raíz para la desviación. Todo permanece en tu navegador, sin subir al servidor.',
	tool_std_dev_formula_title: 'Fórmula',
	tool_std_dev_formula_body:
		'Sea x̄ la media. La varianza promedia los cuadrados de las desviaciones; la desviación estándar es su raíz cuadrada:',
	tool_std_dev_formula_item_1: 'Media: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'Varianza muestral: s² = Σ(xᵢ − x̄)² / (n − 1); SD muestral s = √s²',
	tool_std_dev_formula_item_3: 'Varianza poblacional: σ² = Σ(xᵢ − x̄)² / n; SD poblacional σ = √σ²',
	tool_std_dev_example_title: 'Ejemplo',
	tool_std_dev_example:
		'El conjunto 2, 4, 4, 4, 5, 5, 7, 9 tiene media 5 y suma de cuadrados 32. Población: σ² = 32/8 = 4 → σ = 2. Muestra: s² = 32/7 ≈ 4,571 → s ≈ 2,138. El “SD = 2” clásico es el valor poblacional.',
	tool_std_dev_usecases_title: 'Para qué sirve',
	tool_std_dev_usecase_1: 'Deberes: comprobar SD muestral frente a poblacional en una lista corta.',
	tool_std_dev_usecase_2: 'Mirar rápido la dispersión de una columna pequeña antes de graficar.',
	tool_std_dev_usecase_3: 'Comparar la volatilidad de dos series cortas con el mismo modo.',
	tool_std_dev_faq_q1: '¿En qué se diferencian muestra y población?',
	tool_std_dev_faq_a1:
		'La SD muestral divide entre n−1 (corrección de Bessel) para estimar la población. La SD poblacional divide entre n cuando la lista es el conjunto completo.',
	tool_std_dev_faq_q2: '¿Qué relación hay entre varianza y desviación estándar?',
	tool_std_dev_faq_a2:
		'La varianza es el promedio de desviaciones al cuadrado. La desviación estándar es su raíz, en las mismas unidades que los datos.',
	tool_std_dev_faq_q3: '¿Por qué el ejemplo clásico da 2?',
	tool_std_dev_faq_a3:
		'Para 2, 4, 4, 4, 5, 5, 7, 9 la SD poblacional es exactamente 2; la muestral ronda 2,14. Los libros suelen mostrar la figura poblacional.',
	tool_std_dev_faq_q4: '¿Se suben mis números?',
	tool_std_dev_faq_a4:
		'No. El análisis corre en tu pestaña del navegador. Los valores se quedan en el dispositivo y no se suben a un servidor.',
	tool_std_dev_references:
		'Artículos de Wikipedia sobre desviación estándar y varianza; fórmulas introductorias muestra vs población.',
	tool_std_dev_ref_sd_label: 'Wikipedia — Desviación estándar',
	tool_std_dev_ref_var_label: 'Wikipedia — Varianza',
};

export default es;
