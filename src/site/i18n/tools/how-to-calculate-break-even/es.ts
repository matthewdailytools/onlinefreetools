/**
 * i18n tool shard (how-to-calculate-break-even / es).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_break_even_title: "Calculadora de punto de equilibrio — Unidades para cubrir costos",
	tool_break_even_description: "Calcula el punto de equilibrio en unidades e ingresos a partir de costos fijos, precio unitario y costo variable unitario. Se muestra el margen de contribución. Ejemplo: costos fijos 10.000, precio 50, variable 30 → 500 unidades e ingresos 25.000. En el navegador; solo educativo, no es consejo empresarial ni de inversión.",
	tool_break_even_article: "El equilibrio es donde el margen de contribución cubre los costos fijos. Esta página usa unidades = FC / (P − V) y muestra ingresos y margen en la misma URL educativa.",
	tool_break_even_calculate: "Calcular",
	tool_break_even_sample: "Cargar ejemplo",
	tool_break_even_clear: "Borrar",
	tool_break_even_fixed_label: "Costos fijos",
	tool_break_even_fixed_ph: "p. ej. 10000",
	tool_break_even_price_label: "Precio por unidad",
	tool_break_even_price_ph: "p. ej. 50",
	tool_break_even_var_label: "Costo variable por unidad",
	tool_break_even_var_ph: "p. ej. 30",
	tool_break_even_result_units: "Unidades de equilibrio",
	tool_break_even_result_revenue: "Ingresos de equilibrio",
	tool_break_even_result_cm: "Margen de contribución por unidad",
	tool_break_even_result_note: "Solo ilustración educativa — no es consejo empresarial ni de inversión.",
	tool_break_even_err_fixed: "Los costos fijos deben ser mayores que cero.",
	tool_break_even_err_price: "El precio debe ser > 0 y el costo variable ≥ 0.",
	tool_break_even_err_margin: "El precio debe ser mayor que el costo variable.",
	tool_break_even_how_title: "Cómo funciona",
	tool_break_even_how_body: "Introduce costos fijos, precio y costo variable unitario. La herramienta calcula margen, unidades e ingresos de equilibrio. Los sectores (retail, etc.) quedan en casos de uso, no en URLs separadas.",
	tool_break_even_formula_title: "Fórmula y supuestos",
	tool_break_even_formula_body: "Unidades Q = FC / (P − V). Ingresos = Q × P. Margen unitario = P − V. Supuestos:",
	tool_break_even_formula_item_1: "Costos y precios constantes; impuestos y descuentos no modelados.",
	tool_break_even_formula_item_2: "Vista de un producto (o unidad media).",
	tool_break_even_formula_item_3: "Resultados educativos, no previsiones ni consejo.",
	tool_break_even_example_title: "Ejemplo",
	tool_break_even_example: "Ejemplo: FC 10.000, precio 50, variable 30 → margen 20 → 500 unidades e ingresos 25.000.",
	tool_break_even_usecases_title: "Cuándo usarla",
	tool_break_even_usecase_1: "Clase: practicar la fórmula con FC, P y V fijos.",
	tool_break_even_usecase_2: "Boceto de cuántas unidades cubren costos fijos (solo ilustración).",
	tool_break_even_usecase_3: "Ver margen e ingresos de equilibrio en una página.",
	tool_break_even_faq_q1: "¿Qué fórmula usa?",
	tool_break_even_faq_a1: "Q = FC / (P − V). Ingresos = Q × P. Margen = P − V.",
	tool_break_even_faq_q2: "¿Si el precio iguala el variable?",
	tool_break_even_faq_a2: "No hay volumen finito de equilibrio. Sube el precio o baja el variable en el modelo.",
	tool_break_even_faq_q3: "¿Es consejo empresarial?",
	tool_break_even_faq_a3: "No. Son ilustraciones educativas, no consejo de negocio ni inversión.",
	tool_break_even_faq_q4: "¿Unidades o ingresos?",
	tool_break_even_faq_a4: "Ambos en resultados: unidades y ingresos = unidades × precio.",
	tool_break_even_disclaimer: "Los resultados son solo educativos y no constituyen consejo empresarial, fiscal ni de inversión.",
	tool_break_even_references: "Definiciones Investopedia de punto de equilibrio y margen de contribución; fórmula FC/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — Punto de equilibrio",
	tool_break_even_ref_cm_label: "Investopedia — Margen de contribución",
};

export default es;
