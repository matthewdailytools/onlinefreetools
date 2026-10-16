/**
 * i18n tool shard (how-to-calculate-age / es).
 * Reescritura independiente orientada a búsqueda: calculadora de edad / años meses días / préstamo calendario UTC / educativo, no edad legal.
 */
import type { SiteLangDict } from '../../../types';

/** Spanish (es) strings for the chronological age calculator. */
const es: SiteLangDict = {
	tool_age_title: "Calculadora de edad — Años meses y días entre dos fechas",
	tool_age_description: "Calcula la edad cronológica en años, meses y días restantes entre la fecha de nacimiento y una fecha de referencia (días de calendario UTC), y muestra el total de días enteros del intervalo. Ejemplo: nacido el 2000-01-01, a fecha 2026-08-09 → 26 años, 7 meses y 8 días. Incluye pasos de préstamo y el atajo Usar hoy. Solo aritmética de calendario educativa — no es asesoramiento sobre edad legal ni elegibilidad.",
	tool_age_article: "Obtén la edad de calendario en años, meses y días entre dos fechas, más el total de días enteros, con pasos de préstamo y el atajo Usar hoy.",
	tool_age_desc: "Edad en años/meses/días del nacimiento a la fecha de referencia. Muestra el total de días.",

	tool_age_hint: "Usa fechas de calendario YYYY-MM-DD (límites de día UTC). La fecha de referencia debe ser igual o posterior al nacimiento. Usar hoy rellena la referencia con la fecha UTC de hoy.",
	tool_age_birth_label: "Fecha de nacimiento",
	tool_age_asof_label: "Fecha de referencia",
	tool_age_calculate: "Calcular",
	tool_age_today: "Usar hoy",
	tool_age_sample: "Cargar ejemplo",
	tool_age_clear: "Limpiar",
	tool_age_ymdOut_label: "Edad",
	tool_age_yearsOut_label: "años",
	tool_age_monthsOut_label: "meses",
	tool_age_daysOut_label: "días",
	tool_age_totalDaysOut_label: "Total de días enteros",
	tool_age_steps_title: "Pasos",
	tool_age_step_ymd_tpl: "De {birth} a {asof}: {y} años, {m} meses y {d} días tras el préstamo de calendario.",
	tool_age_step_borrow_tpl: "Préstamo de días: si el día de la fecha de referencia es menor que el del nacimiento, se toman días del mes calendario anterior.",
	tool_age_step_total_tpl: "Total de días enteros = (referencia − nacimiento) en medianoches UTC ÷ 86400000 = {total}.",
	tool_age_result_note: "Solo fechas de calendario UTC — sin hora local ni husos para cortes legales. Los días bisiestos cuentan si caen en el intervalo. Solo educativo — no es consejo de edad legal ni elegibilidad.",
	tool_age_err_generic: "Introduce fechas válidas (YYYY-MM-DD). La referencia debe ser igual o posterior al nacimiento.",

	tool_age_how_title: "Cómo usar la calculadora de edad",
	tool_age_how_body: "Introduce nacimiento y fecha de referencia, o pulsa Usar hoy para la referencia, y luego Calcular. Cargar ejemplo rota 2000-01-01→2026-08-09, un caso de 29 de febrero, edad 0 el mismo día y un préstamo al cruzar el año.",
	tool_age_how_item_1: "Introduce la fecha de nacimiento.",
	tool_age_how_item_2: "Introduce la fecha de referencia, o haz clic en Usar hoy.",
	tool_age_how_item_3: "Haz clic en Calcular para ver años, meses, días y el total de días enteros.",
	tool_age_how_item_4: "Usa Cargar ejemplo para rotar casos de calendario de libro de texto.",

	tool_age_why_choose_title: "Por qué usar Calculadora de edad — Años meses y días entre dos fechas",
	tool_age_why_choose_item_1: "Edad cronológica completa: años, meses y días restantes.",
	tool_age_why_choose_item_2: "Total de días enteros entre las dos fechas de calendario UTC.",
	tool_age_why_choose_item_3: "Atajo Usar hoy para el campo de referencia.",
	tool_age_why_choose_item_4: "Pasos de préstamo visibles cuando el día del mes exige tomar del mes anterior.",
	tool_age_why_choose_item_5: "Límite claro: solo matemática de calendario — no edad legal ni elegibilidad.",

	tool_age_formula_title: "Fórmulas de edad",
	tool_age_formula_body: "Ambas fechas se interpretan como medianoche UTC. Se restan años, luego meses, luego días con préstamo de calendario. Los días totales usan la diferencia en milisegundos dividida por 86400000.",
	tool_age_formula_item_1: "years = año de referencia − año de nacimiento (luego ajusta si aún no se alcanzó mes/día).",
	tool_age_formula_item_2: "Si el día de referencia < día de nacimiento, toma la longitud del mes calendario anterior.",
	tool_age_formula_item_3: "Si los meses quedan negativos, toma 12 meses de los años.",
	tool_age_formula_item_4: "totalDays = round((referencia − nacimiento) / 86400000) en UTC.",
	tool_age_formula_item_5: "Los días bisiestos afectan el total cuando caen dentro del intervalo.",

	tool_age_example_title: "Ejemplos resueltos",
	tool_age_example: "Cargar ejemplo empieza con nacimiento 2000-01-01 y referencia 2026-08-09 → 26 años, 7 meses y 8 días. Luego comprueba un nacimiento el 29 de febrero frente al 28 de febrero de 2024. Después edad 0 el mismo día. El último cruza el año de 1985-12-31 a 2026-01-01.",

	tool_age_usecases_title: "Cuándo usar una calculadora de edad",
	tool_age_usecase_1: "Formularios que piden la edad en años, meses y días.",
	tool_age_usecase_2: "Deberes sobre diferencias de calendario y préstamo de días.",
	tool_age_usecase_3: "Comprobar rápido el total de días enteros entre dos fechas de calendario.",
	tool_age_usecase_4: "Combínala con la herramienta de diferencia de fechas cuando el intervalo no se formule como edad.",

	tool_age_faq_q1: "¿Cómo se calcula la edad cronológica?",
	tool_age_faq_a1: "Restando años, meses y días de calendario con préstamo. Ejemplo: 2000-01-01 a 2026-08-09 → 26a 7m 8d.",
	tool_age_faq_q2: "¿Qué hace Usar hoy?",
	tool_age_faq_a2: "Rellena la fecha de referencia con el día de calendario UTC de hoy y vuelve a calcular.",
	tool_age_faq_q3: "¿Se incluyen zonas horarias?",
	tool_age_faq_a3: "No. Las fechas se tratan como días de calendario UTC, no como horas locales.",
	tool_age_faq_q4: "¿Y si el nacimiento es posterior a la referencia?",
	tool_age_faq_a4: "La página lo rechaza. La referencia debe ser igual o posterior al nacimiento.",
	tool_age_faq_q5: "¿Cómo afectan los días bisiestos?",
	tool_age_faq_a5: "Cuentan en el total de días si caen en el intervalo, y la longitud del mes al prestar sigue el calendario.",
	tool_age_faq_q6: "¿Es consejo de edad legal o elegibilidad?",
	tool_age_faq_a6: "No. Solo matemática de calendario educativa — no es consejo legal, médico ni de elegibilidad.",
	tool_age_faq_q7: "¿En qué se diferencia de la diferencia de fechas?",
	tool_age_faq_a7: "Esta página formula el intervalo como edad cronológica (A/M/D). Usa la herramienta relacionada de diferencia de fechas para otras redacciones del intervalo.",

	tool_age_disclaimer: "Solo edad de calendario educativa — no es consejo de edad legal, elegibilidad, médico ni de identidad oficial.",
	tool_age_references: "Wikipedia sobre edad cronológica y fecha de calendario como contexto educativo.",
	tool_age_ref_a_label: "Wikipedia — Chronological age",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default es;
