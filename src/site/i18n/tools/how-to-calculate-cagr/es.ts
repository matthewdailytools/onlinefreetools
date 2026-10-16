/**
 * Fragmento i18n del tool (how-to-calculate-cagr / es).
 * Calcula CAGR %, valor final o años; YMYL solo aritmética educativa — no es consejo de inversión.
 * Conservar placeholders tal cual: {end} {begin} {years} {rate}.
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario ES: mismas claves que el master en; redacción independiente según búsqueda local. */
const es: SiteLangDict = {
	tool_cagr_title: "Calculadora de CAGR — Crecimiento anualizado entre dos valores",
	tool_cagr_description: "Obtén la tasa de crecimiento anual compuesto (CAGR) a partir del valor inicial y final, o resuelve al revés el valor final o los años. Ejemplo: 10000 → 16105.10 en 5 años → unos 10,00 % de CAGR. Solo ilustración educativa; no es consejo de inversión ni garantiza resultados futuros.",
	tool_cagr_article: "Calcula CAGR, valor final o años con las identidades ((VF/VI)^(1/n)−1), pasos y una comprobación inversa.",
	tool_cagr_desc: "CAGR %, valor final o años desde el valor inicial. Solo educativo.",

	tool_cagr_safety_banner: "Solo con fines educativos. Esta página hace aritmética de CAGR de libro. No es consejo de inversión, fiscal ni financiero; el crecimiento pasado o hipotético no garantiza resultados futuros.",
	tool_cagr_mode_label: "¿Qué quieres calcular?",
	tool_cagr_mode_rate: "CAGR % desde inicio / final / años",
	tool_cagr_mode_end: "Valor final desde inicio / CAGR / años",
	tool_cagr_mode_years: "Años desde inicio / final / CAGR",
	tool_cagr_hint: "Todas las entradas activas deben ser mayores que cero. El CAGR ignora flujos a mitad de periodo y asume capitalización una vez al año.",
	tool_cagr_begin_label: "Valor inicial",
	tool_cagr_begin_ph: "p. ej. 10000",
	tool_cagr_end_label: "Valor final",
	tool_cagr_end_ph: "p. ej. 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "p. ej. 10",
	tool_cagr_years_label: "Número de años",
	tool_cagr_years_ph: "p. ej. 5",
	tool_cagr_calculate: "Calcular",
	tool_cagr_sample: "Cargar ejemplo",
	tool_cagr_clear: "Borrar",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "Valor final",
	tool_cagr_yearsOut_label: "Años",
	tool_cagr_multOut_label: "Múltiplo de crecimiento total",
	tool_cagr_steps_title: "Pasos",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "Final = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "Años = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "Comprobación: {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note: "Asume capitalización anual y sin flujos a mitad de periodo. Solo ilustración educativa — no es consejo de inversión.",
	tool_cagr_err_generic: "Introduce números positivos en los campos activos (por ejemplo inicio 10000, final 16105.1, años 5).",

	tool_cagr_how_title: "Cómo usar la calculadora de CAGR",
	tool_cagr_how_body: "Elige CAGR %, valor final o años. Introduce los datos conocidos y pulsa Calcular. Cargar ejemplo rota 10000→16105.1 en 5 años (10 %), el caso inverso de valor final, años con CAGR del 10 %, y un caso más corto 5000→8000 en 3 años.",
	tool_cagr_how_item_1: "Elige qué quieres obtener.",
	tool_cagr_how_item_2: "Introduce los valores positivos conocidos para ese modo.",
	tool_cagr_how_item_3: "Pulsa Calcular para ver la respuesta, el múltiplo y los pasos.",
	tool_cagr_how_item_4: "Usa Cargar ejemplo para rotar puntos de control de libro.",

	tool_cagr_why_choose_title: "Por qué usar esta calculadora de CAGR",
	tool_cagr_why_choose_item_1: "Tres sentidos: CAGR %, valor final o años.",
	tool_cagr_why_choose_item_2: "Un múltiplo de crecimiento (final ÷ inicial) junto a la respuesta principal.",
	tool_cagr_why_choose_item_3: "Pasos que sustituyen tus números en las identidades del CAGR.",
	tool_cagr_why_choose_item_4: "Comprobación inversa: inicio × (1+r)^n vuelve al final.",
	tool_cagr_why_choose_item_5: "Límite YMYL claro: solo aritmética educativa — no es consejo de inversión.",

	tool_cagr_formula_title: "Fórmulas del CAGR",
	tool_cagr_formula_body: "El CAGR es la tasa anual constante que lleva un valor inicial a un valor final en n años con capitalización una vez al año.",
	tool_cagr_formula_item_1: "CAGR = ((VF ÷ VI)^(1 ÷ n) − 1) × 100. Ejemplo: ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "VF = VI × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(VF ÷ VI) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4: "Exige VI > 0, VF > 0, n > 0 (y CAGR ≠ −100% al resolver años).",
	tool_cagr_formula_item_5: "Ignora comisiones, impuestos y flujos intermedios — a diferencia de un IRR completo.",

	tool_cagr_example_title: "Ejemplos resueltos",
	tool_cagr_example: "Cargar ejemplo empieza con 10000 → 16105.10 en 5 años → CAGR ≈ 10%. Luego crece 10000 al 10% durante 5 años hasta ≈16105. Después resuelve años con los mismos extremos al 10%. El último ejemplo usa 5000 → 8000 en 3 años.",

	tool_cagr_usecases_title: "Cuándo usar una calculadora de CAGR",
	tool_cagr_usecase_1: "Deberes: anualizar un crecimiento plurianual con la fórmula estándar de CAGR.",
	tool_cagr_usecase_2: "Comparar extremos de ingresos o cartera en base anualizada (solo ilustración).",
	tool_cagr_usecase_3: "Resolver cuántos años necesita un CAGR dado para llegar a un objetivo.",
	tool_cagr_usecase_4: "Contrastar con el ROI simple de la página relacionada cuando importan los años.",

	tool_cagr_faq_q1: "¿Qué fórmula de CAGR usa esta página?",
	tool_cagr_faq_a1: "CAGR = ((Final ÷ Inicial)^(1 ÷ Años) − 1) × 100. Los tres deben ser mayores que cero.",
	tool_cagr_faq_q2: "¿En qué se diferencia el CAGR del ROI simple?",
	tool_cagr_faq_a2: "El ROI simple ignora cuántos años tardó el cambio. El CAGR anualiza el crecimiento según los años que indiques.",
	tool_cagr_faq_q3: "¿Y si el valor inicial o final es cero o negativo?",
	tool_cagr_faq_a3: "Ambos deben ser mayores que cero. Ceros o negativos dejan indefinida la fórmula estándar de CAGR aquí.",
	tool_cagr_faq_q4: "¿Es esto un consejo de inversión?",
	tool_cagr_faq_a4: "No. Los números son solo ilustraciones educativas — no son consejo de inversión, fiscal ni financiero.",
	tool_cagr_faq_q5: "¿El CAGR incluye aportaciones o retiradas?",
	tool_cagr_faq_a5: "No. Solo usa inicio, final y años. Para flujos irregulares usa una herramienta de IRR.",
	tool_cagr_faq_q6: "¿Puedo resolver el valor final o los años?",
	tool_cagr_faq_a6: "Sí. Cambia de modo para proyectar el valor inicial o calcular años a partir de inicio/final/CAGR.",
	tool_cagr_faq_q7: "¿Se asume capitalización anual?",
	tool_cagr_faq_a7: "Sí en esta página. Se ignora el momento exacto dentro del año.",

	tool_cagr_disclaimer: "Los resultados de CAGR son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal ni financiero. Rentabilidades pasadas o hipotéticas no garantizan resultados futuros. Las carteras reales tienen comisiones, impuestos, flujos y riesgo que esta página no modela.",
	tool_cagr_references: "Definiciones y guías de fórmula CAGR en Investopedia; tasa anualizada estándar ((VF/VI)^(1/n) − 1).",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — Fórmula para calcular el CAGR",
};

export default es;
