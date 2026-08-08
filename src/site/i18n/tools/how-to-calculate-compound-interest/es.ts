/**
 * i18n tool shard (how-to-calculate-compound-interest / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_compound_interest_title: 'Calculadora de interés compuesto — Valor futuro paso a paso',
	tool_compound_interest_description:
		'Aprende cómo calcular el interés compuesto: introduce capital, tasa anual, años y frecuencia. Fórmula A = P(1 + r/n)^(nt); modo interés simple opcional. Ejemplo: 10.000 al 5% durante 10 años, capitalización anual → unos 16.288,95. Cálculo en el navegador; solo educativo, no es consejo de inversión.',
	tool_compound_interest_article:
		'El interés compuesto suma intereses sobre intereses ya devengados. Esta página muestra la fórmula discreta estándar, permite comparar con interés simple con los mismos datos y deja claras las suposiciones para clases y estimaciones personales.',
	tool_compound_interest_calculate: 'Calcular',
	tool_compound_interest_sample: 'Cargar ejemplo',
	tool_compound_interest_clear: 'Borrar',
	tool_compound_interest_mode_label: 'Modo de interés',
	tool_compound_interest_mode_compound: 'Interés compuesto',
	tool_compound_interest_mode_simple: 'Interés simple',
	tool_compound_interest_principal_label: 'Capital (P)',
	tool_compound_interest_principal_placeholder: 'p. ej. 10000',
	tool_compound_interest_rate_label: 'Tasa anual (%)',
	tool_compound_interest_rate_placeholder: 'p. ej. 5',
	tool_compound_interest_years_label: 'Plazo (años)',
	tool_compound_interest_years_placeholder: 'p. ej. 10',
	tool_compound_interest_freq_label: 'Capitalizaciones al año (n)',
	tool_compound_interest_freq_1: 'Anual (1)',
	tool_compound_interest_freq_2: 'Semestral (2)',
	tool_compound_interest_freq_4: 'Trimestral (4)',
	tool_compound_interest_freq_12: 'Mensual (12)',
	tool_compound_interest_freq_365: 'Diaria (365)',
	tool_compound_interest_result_future: 'Valor futuro (A)',
	tool_compound_interest_result_interest: 'Intereses devengados',
	tool_compound_interest_result_note: 'Solo ilustración educativa — no es consejo de inversión.',
	tool_compound_interest_err_principal: 'El capital debe ser mayor que cero.',
	tool_compound_interest_err_years: 'El plazo en años debe ser mayor que cero.',
	tool_compound_interest_err_rate: 'La tasa anual debe ser cero o un número positivo.',
	tool_compound_interest_err_overflow: 'El resultado es demasiado grande. Prueba un plazo más corto o una tasa menor.',
	tool_compound_interest_how_title: 'Cómo funciona',
	tool_compound_interest_how_body:
		'Introduce capital, tasa anual nominal en porcentaje y años. En modo compuesto, elige cuántas veces al año se capitaliza el interés. La herramienta calcula valor futuro e intereses. En modo simple se usa A = P(1 + r t) y se ignora la frecuencia.',
	tool_compound_interest_formula_title: 'Fórmula y supuestos',
	tool_compound_interest_formula_body:
		'Compuesto: A = P (1 + r/n)^(n t), donde r es la tasa anual nominal en decimal y n capitalizaciones al año. Simple: A = P (1 + r t). Ten presente:',
	tool_compound_interest_formula_item_1:
		'La tasa es nominal anual que introduces; no se restan impuestos, comisiones ni inflación.',
	tool_compound_interest_formula_item_2:
		'Sin aportaciones ni retiros durante el periodo: solo crece el capital inicial.',
	tool_compound_interest_formula_item_3:
		'La frecuencia de capitalización cambia el crecimiento efectivo; el TAE se resume en las FAQ, no como herramienta aparte.',
	tool_compound_interest_formula_item_4:
		'Los resultados son ilustraciones educativas, no previsiones ni consejo de inversión.',
	tool_compound_interest_example_title: 'Ejemplo',
	tool_compound_interest_example:
		'Ejemplo: capital 10.000, tasa 5% anual, 10 años, capitalización anual → A ≈ 16.288,95 e intereses ≈ 6.288,95. Con los mismos datos en modo simple → A = 15.000.',
	tool_compound_interest_usecases_title: 'Cuándo usarla',
	tool_compound_interest_usecase_1:
		'Ahorro: estimar un saldo futuro si un capital único capitaliza a una tasa dada (solo ilustración).',
	tool_compound_interest_usecase_2:
		'Clase: practicar la fórmula del interés compuesto con P, r, n y t fijos.',
	tool_compound_interest_usecase_3:
		'Comparar modos: cambia a interés simple con los mismos datos y mira cómo cambia el resultado.',
	tool_compound_interest_faq_q1: '¿Qué fórmula de interés compuesto usa esta calculadora?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t), con r como tasa anual en decimal y n capitalizaciones al año. Intereses = A − P.',
	tool_compound_interest_faq_q2: '¿En qué se diferencia el interés simple?',
	tool_compound_interest_faq_a2:
		'El interés simple usa A = P (1 + r t) y no capitaliza. Elige Simple en el modo; la frecuencia se ignora.',
	tool_compound_interest_faq_q3: '¿Qué significa la frecuencia de capitalización?',
	tool_compound_interest_faq_a3:
		'n indica cuántas veces al año se suma el interés (1 anual, 12 mensual, 365 diaria). A igual tasa nominal, un n mayor suele hacer crecer más el saldo.',
	tool_compound_interest_faq_q4: '¿Es esto un consejo de inversión?',
	tool_compound_interest_faq_a4:
		'No. Las cifras son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal ni financiero.',
	tool_compound_interest_faq_q5: '¿Qué pasa si la tasa es cero?',
	tool_compound_interest_faq_a5: 'Con tasa anual 0%, el valor futuro coincide con el capital y los intereses son 0.',
	tool_compound_interest_disclaimer:
		'Los resultados de interés compuesto y simple son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal ni financiero. Un crecimiento pasado o hipotético no garantiza resultados futuros.',
	tool_compound_interest_references:
		'Definiciones de interés compuesto e interés simple en Investopedia; fórmula discreta estándar A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Interés compuesto',
	tool_compound_interest_ref_simple_label: 'Investopedia — Interés simple',
};

export default es;
