/**
 * i18n tool shard (how-to-calculate-gpa / es).
 * Español reescrito de forma independiente (no calco del inglés).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_gpa_title: "Calculadora GPA — Promedio ponderado",
	tool_gpa_description: "Calcula el GPA ponderado por créditos en una escala 4.0 a partir de puntos y créditos por curso. Ejemplo: A=4.0 (3 cr) y B=3.0 (3 cr) → GPA 3.5. Las escalas varían según escuela y país; uso educativo en el navegador.",
	tool_gpa_article: "El GPA ponderado multiplica cada nota en puntos por sus créditos y divide por el total de créditos. Esta página usa una escala 4.0 sencilla; tu centro puede usar +/- u otras escalas.",
	tool_gpa_calculate: "Calcular",
	tool_gpa_sample: "Cargar ejemplo",
	tool_gpa_clear: "Limpiar",
	tool_gpa_courses_label: "Cursos (puntos, créditos por línea)",
	tool_gpa_courses_ph: "p. ej. 4.0, 3",
	tool_gpa_courses_hint: "Un curso por línea: puntos de nota y luego créditos. En 4.0, A≈4.0, B≈3.0.",
	tool_gpa_result_label: "GPA ponderado",
	tool_gpa_result_note: "Asume escala 4.0. Verifica las reglas oficiales de tu boleta o transcript.",
	tool_gpa_err_parse: "Escribe al menos una línea: puntos, créditos (p. ej. 4.0, 3).",
	tool_gpa_err_credits: "Cada curso necesita créditos mayores que cero.",
	tool_gpa_how_title: "Cómo funciona",
	tool_gpa_how_body: "Lista cada curso con puntos y créditos. La herramienta pondera y divide por créditos totales. El cálculo queda en tu dispositivo; confirma la escala de tu escuela.",
	tool_gpa_formula_title: "Fórmula y notas de escala",
	tool_gpa_formula_body: "GPA = Σ (puntos × créditos) / Σ créditos. Ten en cuenta:",
	tool_gpa_formula_item_1: "Demostración con mapeo 4.0 simple; no aplica +/- ni honores automáticamente.",
	tool_gpa_formula_item_2: "Los créditos deben ser positivos; los puntos, números finitos.",
	tool_gpa_formula_item_3: "Universidad, secundaria y regiones pueden diferir — solo uso educativo.",
	tool_gpa_example_title: "Ejemplo",
	tool_gpa_example: "Ejemplo: curso A = 4.0 con 3 créditos, curso B = 3.0 con 3 créditos → GPA = (12 + 9) / 6 = 3.50.",
	tool_gpa_usecases_title: "Para qué sirve",
	tool_gpa_usecase_1: "Estimar el GPA del semestre antes de que salga el portal oficial.",
	tool_gpa_usecase_2: "Practicar promedios ponderados por créditos en escala 4.0.",
	tool_gpa_usecase_3: "Explorar escenarios de notas — no decide admisiones.",
	tool_gpa_faq_q1: "¿Qué fórmula usa?",
	tool_gpa_faq_a1: "GPA ponderado = Σ (puntos × créditos) / Σ créditos. Introduce ya los puntos de tu escala.",
	tool_gpa_faq_q2: "¿Todas las escuelas usan 4.0?",
	tool_gpa_faq_a2: "No. Hay escalas con +/- , 5.0 ponderada o porcentajes. Sigue tu transcript.",
	tool_gpa_faq_q3: "¿Puedo poner letras directamente?",
	tool_gpa_faq_a3: "Convierte primero (A→4.0, B→3.0 en 4.0 básico) y luego escribe puntos y créditos.",
	tool_gpa_faq_q4: "¿Garantiza admisión?",
	tool_gpa_faq_a4: "No. Es solo una ilustración educativa.",
	tool_gpa_references: "Recursos College Board; visión general de escalas de calificación en EE. UU.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Calificaciones académicas en EE. UU.",
};

export default es;
