/**
 * i18n tool shard (how-to-calculate-one-rep-max / es).
 * Estima el 1RM con Epley / Brzycki / Lombardi y tabla de cargas al % del 1RM.
 */
import type { SiteLangDict } from '../../../types';

/** Textos en español: calculadora educativa de 1RM; no es prescripción de entrenamiento. */
const es: SiteLangDict = {
	tool_one_rep_max_title: "Calculadora de 1RM — Estima tu máximo de una repetición con peso y reps",
	tool_one_rep_max_description:
		"Estima tu repetición máxima (1RM) a partir de una serie submáxima con la fórmula de Epley: 1RM ≈ peso×(1+reps/30), y compara Brzycki y Lombardi. Ejemplo: 100 kg × 5 reps → unos 116,7. Incluye tabla de cargas al % del 1RM. Solo estimación educativa — no es entrenamiento ni consejo médico.",
	tool_one_rep_max_article:
		"Introduce peso y repeticiones, obtén el 1RM con Epley, compara Brzycki y Lombardi y consulta porcentajes de entrenamiento respecto al 1RM de Epley.",
	tool_one_rep_max_desc:
		"Estima el 1RM con Epley, Brzycki y Lombardi desde una serie submáxima, más tabla de cargas al % del 1RM.",

	tool_one_rep_max_safety_banner:
		"Solo estimación educativa. No intentes un máximo real solo por este número: calienta bien, usa ayudantes y entrenador si aplica. No es consejo médico ni de entrenamiento.",
	tool_one_rep_max_weight_label: "Peso levantado",
	tool_one_rep_max_weight_ph: "p. ej. 100",
	tool_one_rep_max_reps_label: "Repeticiones hechas",
	tool_one_rep_max_reps_ph: "p. ej. 5",
	tool_one_rep_max_hint:
		"Usa un peso con el que hayas hecho varias reps limpias y buena técnica. Funciona mejor con reps enteras de 1 a 12. Puedes usar coma decimal en el peso.",
	tool_one_rep_max_calculate: "Calcular",
	tool_one_rep_max_sample: "Cargar ejemplo",
	tool_one_rep_max_clear: "Limpiar",
	tool_one_rep_max_ormOut_label: "1RM estimado (Epley)",
	tool_one_rep_max_pct_title: "Cargas de entrenamiento según 1RM Epley",
	tool_one_rep_max_pct_col_pct: "% del 1RM",
	tool_one_rep_max_pct_col_load: "Carga",
	tool_one_rep_max_steps_title: "Pasos",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Diferencia entre fórmulas: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "Al 80 % del 1RM Epley ({orm}): carga ≈ 0,8 × {orm} = {p80}.",
	tool_one_rep_max_result_note:
		"Las fórmulas se separan más cuando suben las reps. Para enseñar, mejor series de ≤10 reps limpias. Calienta; no hagas un máximo solo por la calculadora.",
	tool_one_rep_max_err_generic: "Introduce un peso positivo y reps enteras de 1 a 12 (por ejemplo 100 y 5).",
	tool_one_rep_max_err_high_reps:
		"Por encima de unas 12 reps estas fórmulas fallan. Usa una serie más pesada con menos reps limpias.",

	tool_one_rep_max_how_title: "Cómo estimar tu repetición máxima",
	tool_one_rep_max_how_body:
		"Escribe el peso que levantaste y las reps limpias que completaste, luego Calcular. Verás el 1RM Epley, Brzycki y Lombardi al lado, y una tabla de porcentajes habituales.",
	tool_one_rep_max_how_item_1: "Indica el peso de barra o mancuernas de una serie terminada con buena forma.",
	tool_one_rep_max_how_item_2: "Indica las repeticiones logradas (enteras; 1–12 van mejor).",
	tool_one_rep_max_how_item_3: "Pulsa Calcular para ver el 1RM Epley y la comparación Brzycki / Lombardi.",
	tool_one_rep_max_how_item_4:
		"Consulta la tabla %1RM (50 %–95 %) como referencia de cargas; Cargar ejemplo rota 100×5, 60×8, 80×3 y un single real.",

	tool_one_rep_max_why_choose_title: "Qué aporta esta calculadora de 1RM",
	tool_one_rep_max_why_choose_item_1: "1RM Epley como estimación principal, con Brzycki y Lombardi para comparar.",
	tool_one_rep_max_why_choose_item_2: "Línea de diferencia entre fórmulas para ver cuánto se apartan las tres.",
	tool_one_rep_max_why_choose_item_3: "Tabla de cargas del 50 % al 95 % del 1RM Epley.",
	tool_one_rep_max_why_choose_item_4: "Pasos claros que sustituyen tu peso y reps en cada ecuación.",
	tool_one_rep_max_why_choose_item_5: "Aviso de seguridad: solo educativo — no es orden de intentar un máximo.",

	tool_one_rep_max_formula_title: "Fórmulas de repetición máxima",
	tool_one_rep_max_formula_body:
		"La repetición máxima (1RM) es la carga más pesada que podrías levantar una vez con buena técnica. Estas ecuaciones la estiman desde una serie submáxima.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). Ejemplo: w=100, r=5 → 100×(1+5/30)=116,67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). Mismo caso → 100×36÷32=112,5. Sin definir si r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0.1. Mismo caso → 100×5^0,1 ≈ 117,46.",
	tool_one_rep_max_formula_item_4: "Las estimaciones divergen con más reps; usa menos reps limpias para enseñar con más precisión.",
	tool_one_rep_max_formula_item_5:
		"Porcentajes de entrenamiento (p. ej. 80 % del 1RM) son ayuda de planificación — ajústalos por fatiga, ejercicio y experiencia.",

	tool_one_rep_max_example_title: "Ejemplos resueltos",
	tool_one_rep_max_example:
		"El ejemplo empieza en 100 kg × 5 reps: Epley ≈ 116,7, Brzycki 112,5, Lombardi ≈ 117,5. Luego 60×8, 80×3 y un single real (135×1) donde las tres dan 135. Mantén la técnica; para si se rompe.",

	tool_one_rep_max_usecases_title: "Cuándo usar una calculadora de 1RM",
	tool_one_rep_max_usecase_1: "Deberes o clase: sustituir peso y reps en Epley y mostrar los pasos.",
	tool_one_rep_max_usecase_2: "Boceto de programa: pasar un 1RM estimado a series de trabajo al 70 %–85 %.",
	tool_one_rep_max_usecase_3: "Comparar fórmulas: ver cómo Epley, Brzycki y Lombardi difieren en la misma serie.",
	tool_one_rep_max_usecase_4: "Evitar un máximo real cuando solo tienes registrada una serie submáxima.",

	tool_one_rep_max_faq_q1: "¿Cómo se calcula el 1RM con la fórmula de Epley?",
	tool_one_rep_max_faq_a1:
		"Multiplica el peso por (1 + reps/30). Con 100 kg × 5 reps: 100×(1+5/30)=116,67. Esta página también muestra Brzycki y Lombardi.",
	tool_one_rep_max_faq_q2: "¿Qué diferencia hay entre Epley y Brzycki?",
	tool_one_rep_max_faq_a2:
		"Epley suma reps/30 de forma lineal. Brzycki usa 36/(37−reps). En 100×5, Epley da ≈116,7 y Brzycki 112,5. Ninguna sustituye un test máximo supervisado.",
	tool_one_rep_max_faq_q3: "¿Cuántas reps conviene usar para estimar bien?",
	tool_one_rep_max_faq_a3:
		"Suele ir bien 1–10 reps limpias. Por encima de unas 12, las fórmulas fallan y esta página pide una serie más pesada con menos reps.",
	tool_one_rep_max_faq_q4: "¿Qué significa el 80 % del 1RM?",
	tool_one_rep_max_faq_a4:
		"Es una intensidad de trabajo habitual: carga ≈ 0,8 × 1RM estimado. Con 1RM Epley 116,7, el 80 % ronda 93,3 en las mismas unidades.",
	tool_one_rep_max_faq_q5: "¿Es seguro intentar el 1RM que sale de la calculadora?",
	tool_one_rep_max_faq_a5:
		"No solo por esta página. Trátalo como material educativo. Un máximo real exige calentamiento, ayudantes, técnica y mejor un entrenador — no es consejo para ir a máximo.",
	tool_one_rep_max_faq_q6: "¿Importan las unidades (kg vs lb)?",
	tool_one_rep_max_faq_a6:
		"Usa una unidad coherente. Las fórmulas son ratios sin unidad; el 1RM sale en la misma unidad que el peso introducido.",
	tool_one_rep_max_faq_q7: "¿Es consejo médico o de entrenamiento?",
	tool_one_rep_max_faq_a7:
		"No. Es una calculadora educativa para entender ecuaciones habituales de 1RM. Para decisiones de salud o entrenamiento, consulta a un profesional.",

	tool_one_rep_max_disclaimer:
		"Solo estimación educativa de repetición máxima — no es entrenamiento, consejo médico ni profesional. No intentes un levantamiento máximo basándote solo en esta calculadora.",
	tool_one_rep_max_references: "Descripciones habituales en libros de texto y Wikipedia de ecuaciones de predicción del 1RM.",
	tool_one_rep_max_ref_a_label: "Wikipedia — Repetición máxima",
	tool_one_rep_max_ref_b_label: "Wikipedia — Entrenamiento de fuerza",
};

export default es;
