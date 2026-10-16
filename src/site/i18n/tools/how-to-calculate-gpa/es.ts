/**
 * i18n 工具分片（how-to-calculate-gpa / es）。
 * 学分加权 GPA（4.0 量表）；字母成绩芯片与步骤行；教育用途，非录取决定。
 * 按西语检索习惯独立重写：calculadora GPA / promedio ponderado / calcular GPA。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_gpa_title: "Calculadora GPA — Promedio ponderado en escala 4.0",
	tool_gpa_description: "Calcula el GPA ponderado por créditos en la escala 4.0 habitual a partir de puntos de calificación y horas de crédito. Ejemplo: A = 4.0 (3 créditos) y B = 3.0 (3 créditos) → GPA 3.50. Los chips de letras insertan puntos; los pasos muestran quality points. Solo con fines educativos — no es una decisión de admisión. Se ejecuta en tu navegador.",
	tool_gpa_article: "Introduce puntos y créditos por curso, o toca un chip de letra para el mapa 4.0 básico. La página muestra GPA ponderado, quality points, créditos totales y líneas de pasos.",
	tool_gpa_desc: "GPA ponderado por créditos en escala 4.0, con chips de letras y pasos.",

	tool_gpa_safety_banner: "Solo ilustración educativa. Las escalas varían por escuela y región. No es una decisión de admisión, beca ni expediente oficial.",
	tool_gpa_hint: "Un curso por línea: puntos de calificación y luego créditos (coma o espacio). Los créditos deben ser mayores que cero. Los chips insertan un mapa 4.0 común (A=4.0, A−=3.7, B+=3.3, …).",
	tool_gpa_courses_label: "Cursos (puntos, créditos por línea)",
	tool_gpa_courses_ph: "p. ej. 4.0, 3",
	tool_gpa_chips_label: "Insertar puntos de letra (mapa 4.0)",
	tool_gpa_calculate: "Calcular",
	tool_gpa_sample: "Cargar ejemplo",
	tool_gpa_clear: "Limpiar",
	tool_gpa_result_label: "GPA ponderado",
	tool_gpa_qp_label: "Quality points (Σ calificación × créditos)",
	tool_gpa_credits_label: "Créditos totales",
	tool_gpa_courses_count_label: "Cursos contados",
	tool_gpa_steps_title: "Pasos",
	tool_gpa_step_row_tpl: "Curso {n}: {g} × {c} = {qc}.",
	tool_gpa_step_sum_tpl: "Quality points = {qp}; créditos totales = {credits}.",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}.",
	tool_gpa_result_note: "Asume una escala 4.0 simple. Plus/minus y escalas ponderadas (p. ej. 5.0) no se aplican solos. Escuelas y países difieren — verifica las reglas de tu expediente. Solo educativo.",
	tool_gpa_err_parse: "Introduce al menos una línea como puntos, créditos (por ejemplo 4.0, 3).",
	tool_gpa_err_credits: "Cada curso necesita créditos mayores que cero.",

	tool_gpa_how_title: "Cómo usar la calculadora GPA",
	tool_gpa_how_body: "Lista cada curso con puntos y créditos, o toca un chip de letra y añade créditos. Calcular muestra GPA ponderado, quality points y pasos. Cargar ejemplo rota dos cursos iguales, puntos plus/minus y créditos desiguales.",
	tool_gpa_how_item_1: "Escribe un curso por línea: puntos de calificación y luego créditos.",
	tool_gpa_how_item_2: "Opcional: toca un chip de letra para insertar puntos 4.0 comunes y escribe los créditos.",
	tool_gpa_how_item_3: "Pulsa Calcular para ver GPA, quality points, créditos totales y pasos.",
	tool_gpa_how_item_4: "Usa Cargar ejemplo para rotar créditos iguales, plus/minus y créditos desiguales.",

	tool_gpa_why_choose_title: "Por qué usar esta calculadora GPA",
	tool_gpa_why_choose_item_1: "GPA ponderado = Σ(calificación × créditos) / Σ créditos.",
	tool_gpa_why_choose_item_2: "Chips de letras para un mapa 4.0 básico (A a F).",
	tool_gpa_why_choose_item_3: "Quality points y créditos totales junto al GPA.",
	tool_gpa_why_choose_item_4: "Líneas de pasos que sustituyen tus números en la fórmula.",
	tool_gpa_why_choose_item_5: "Límite claro: solo educativo — no es consejo de admisión.",

	tool_gpa_formula_title: "Fórmula del GPA y notas de la escala 4.0",
	tool_gpa_formula_body: "Un GPA ponderado multiplica cada punto de calificación por sus créditos, suma esos productos (quality points) y divide por los créditos totales.",
	tool_gpa_formula_item_1: "GPA = Σ (puntos × créditos) / Σ créditos.",
	tool_gpa_formula_item_2: "Mapa 4.0 común de los chips: A=4.0, A−=3.7, B+=3.3, B=3.0, B−=2.7, C+=2.3, C=2.0, C−=1.7, D+=1.3, D=1.0, F=0.0.",
	tool_gpa_formula_item_3: "Pasos plus/minus y pesos honors/AP no se aplican solos más allá del mapa del chip.",
	tool_gpa_formula_item_4: "Los créditos deben ser positivos; los puntos deben ser números finitos.",
	tool_gpa_formula_item_5: "Universidad, secundaria y sistemas regionales pueden diferir — resultados solo educativos.",

	tool_gpa_example_title: "Ejemplos resueltos",
	tool_gpa_example: "Cargar ejemplo empieza con 4.0×3 y 3.0×3 → quality points 21, créditos 6, GPA 3.50. El siguiente usa puntos plus/minus (3.7 y 3.3). El último usa créditos desiguales (4.0×4 y 2.0×2) → GPA 3.33.",

	tool_gpa_usecases_title: "Cuándo usar una calculadora GPA",
	tool_gpa_usecase_1: "GPA aproximado del semestre con puntos y créditos antes de que actualice el portal oficial.",
	tool_gpa_usecase_2: "Tarea: practicar promedios ponderados por créditos en escala 4.0.",
	tool_gpa_usecase_3: "Notas hipotéticas para planificar — no es decisión de admisión ni beca.",
	tool_gpa_usecase_4: "Convierte letras con el mapa del chip y ajusta si tu escuela usa otra escala.",

	tool_gpa_faq_q1: "¿Qué fórmula de GPA usa esta página?",
	tool_gpa_faq_a1: "GPA ponderado = Σ (puntos × créditos) / Σ créditos. Introduce puntos ya en tu escala, o usa chips de letra para un mapa 4.0 básico.",
	tool_gpa_faq_q2: "¿Todas las escuelas usan escala 4.0?",
	tool_gpa_faq_a2: "No. Muchas escuelas de EE. UU. usan 4.0 con plus/minus; otras usan 5.0 ponderado o porcentajes. Sigue siempre las reglas de tu expediente.",
	tool_gpa_faq_q3: "¿Puedo mezclar letras directamente?",
	tool_gpa_faq_a3: "Toca un chip de letra para insertar puntos y añade créditos en la misma línea. O convierte las letras tú si tu escala es distinta.",
	tool_gpa_faq_q4: "¿Qué son los quality points?",
	tool_gpa_faq_a4: "Los quality points son Σ (calificación × créditos) — el numerador antes de dividir por los créditos totales.",
	tool_gpa_faq_q5: "¿Incluye cursos honors con ponderación 5.0?",
	tool_gpa_faq_a5: "No hay ponderación automática. Introduce los puntos que asigne tu escuela (por ejemplo 5.0) si esa es tu regla.",
	tool_gpa_faq_q6: "¿Esto garantiza la admisión a la universidad?",
	tool_gpa_faq_a6: "No. El número es solo una ilustración educativa y no es una decisión de admisión ni de beca.",

	tool_gpa_disclaimer: "Solo aritmética educativa de GPA — no es consejo de admisión, beca ni expediente oficial. Las escalas varían por escuela y región.",
	tool_gpa_references: "Recursos para estudiantes de College Board; panorama de escalas de calificación académicas en EE. UU.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Academic grading in the United States",
};

export default es;
