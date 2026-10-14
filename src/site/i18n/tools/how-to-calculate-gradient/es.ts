/**
 * i18n tool shard (how-to-calculate-gradient / es).
 * Gradiente multivariable en español: ∇f en un punto, proceso, módulo y dirección unitaria; no pendiente entre dos puntos.
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario de copy en español. */
const es: SiteLangDict = {
	tool_gradient_title: "Calculadora de gradiente — ∇f multivariable en un punto",
	tool_gradient_desc: "Evalúa el gradiente ∇f de una función escalar demo en un punto (x, y).",
	tool_gradient_description:
		"Calcula y ayuda a calcular el gradiente multivariable ∇f como vector de derivadas parciales, con proceso, pasos y módulo. Ejemplo: para f(x,y)=x²y+3y en (1,2), ∂f/∂x=4 y ∂f/∂y=4 así ∇f=(4,4) con |∇f|≈5,6569. Incluye fórmula simbólica. No es una calculadora de pendiente entre dos puntos.",
	tool_gradient_calculate: "Evaluar ∇f",
	tool_gradient_sample: "Cargar ejemplo",
	tool_gradient_clear: "Borrar",
	tool_gradient_fn_label: "Función demo",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "p. ej. 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "p. ej. 2",
	tool_gradient_result_label: "Gradiente en tu punto",
	tool_gradient_work_label: "Desarrollo",
	tool_gradient_mag_label: "Módulo |∇f|",
	tool_gradient_unit_label: "Dirección unitaria",
	tool_gradient_result_note: "Evaluado en ({x}, {y}). ∇f apunta al mayor aumento local de f.",
	tool_gradient_zero_mag: "∇f = 0 (punto crítico — sin dirección única)",
	tool_gradient_invalid_input: "Introduce valores numéricos finitos para x e y.",
	tool_gradient_how_title: "Cómo calcular un gradiente multivariable",
	tool_gradient_how_body:
		"Para un escalar f(x,y), deriva respecto a cada variable dejando la otra fija, apila las parciales en ∇f y sustituye tu punto. El cuadro usa funciones demo fijas para que puedas comprobar la aritmética.",
	tool_gradient_how_item_1: "Elige una función demo y lee el ∇f simbólico debajo.",
	tool_gradient_how_item_2: "Introduce las coordenadas (x, y) donde quieres el vector.",
	tool_gradient_how_item_3: "Pulsa Evaluar ∇f.",
	tool_gradient_how_item_4: "Lee ∇f, el desarrollo de cada parcial, el módulo |∇f| y la dirección unitaria.",
	tool_gradient_why_choose_title: "Por qué usar nuestra Calculadora de gradiente — ∇f multivariable en un punto",
	tool_gradient_why_choose_item_1: "Cuatro funciones demo con parciales simbólicas listas — no es un CAS simbólico en blanco.",
	tool_gradient_why_choose_item_2: "Se muestra el desarrollo de cada componente, útil para comprobar deberes.",
	tool_gradient_why_choose_item_3: "Módulo y vector unitario conectan ∇f con la dirección de máximo ascenso.",
	tool_gradient_why_choose_item_4: "Modelo claro: ∇f de cálculo multivariable, no pendiente entre dos puntos.",
	tool_gradient_why_choose_item_5: "Se ejecuta en tu navegador; no se sube nada al servidor.",
	tool_gradient_formula_title: "Fórmula del gradiente multivariable",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). En dos variables: ∇f(x,y) = (∂f/∂x, ∂f/∂y). La dirección de ∇f es el máximo ascenso; −∇f se usa en el descenso por gradiente.",
	tool_gradient_formula_item_1: "Calcula ∂f/∂xᵢ para cada variable, dejando las demás constantes.",
	tool_gradient_formula_item_2: "Monta los componentes en el vector ∇f.",
	tool_gradient_formula_item_3: "Evalúa en el punto. Ejemplo: f=x²y+3y en (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "Módulo |∇f| = √(gx² + gy²). Ejemplo: √(16+16) = √32 ≈ 5,6569.",
	tool_gradient_example_title: "Ejemplo",
	tool_gradient_example:
		"Para f(x,y)=x²y+3y, las parciales son ∂f/∂x=2xy y ∂f/∂y=x²+3. En (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, así ∇f=(4,4). El módulo es √32≈5,6569 y la dirección unitaria (4/√32, 4/√32)≈(0,7071, 0,7071). Cambia a f=x²+y² en el mismo punto y obtienes ∇f=(2,4).",
	tool_gradient_usecases_title: "Cuándo usarlo",
	tool_gradient_usecase_1: "Comprobar parciales de deberes antes de un paso de optimización.",
	tool_gradient_usecase_2: "Explicar el descenso por gradiente: cada paso va en sentido opuesto a ∇loss en los parámetros actuales.",
	tool_gradient_usecase_3: "Intuición física o de campos: ∇f apunta donde el campo escalar crece más rápido.",
	tool_gradient_usecase_4: "Ver si un punto es crítico (|∇f|=0) en una superficie demo sencilla.",
	tool_gradient_faq_q1: "¿Qué es un gradiente en cálculo multivariable?",
	tool_gradient_faq_a1:
		"El gradiente ∇f es el vector de las derivadas parciales de primer orden. Apunta al mayor aumento local de f, y su longitud |∇f| mide lo pronunciado de ese aumento.",
	tool_gradient_faq_q2: "¿Cómo se calcula ∇f a mano?",
	tool_gradient_faq_a2:
		"Deriva respecto a cada variable dejando las demás fijas, forma el vector y evalúa en tu punto. Para f=x²y+3y queda (2xy, x²+3).",
	tool_gradient_faq_q3: "¿Es el mismo “gradiente” del descenso por gradiente en ML?",
	tool_gradient_faq_a3:
		"El mismo objeto matemático: ∇ de una pérdida escalar. Los pasos de descenso van en −∇loss. Esta página enseña la definición de cálculo con demos — no entrena un modelo.",
	tool_gradient_faq_q4: "¿Es una calculadora de pendiente entre dos puntos?",
	tool_gradient_faq_a4:
		"No. La pendiente entre dos puntos pertenece a la herramienta de pendiente. Aquí ∇f es el vector de derivadas parciales de un campo escalar multivariable.",
	tool_gradient_faq_q5: "¿Qué significa |∇f| = 0?",
	tool_gradient_faq_a5:
		"Un gradiente nulo es un punto crítico: no hay dirección única de máximo ascenso. Prueba f=x²+y² en (0,0): ∇f=(0,0).",
	tool_gradient_faq_q6: "¿Por qué solo funciones demo?",
	tool_gradient_faq_a6:
		"Diferenciar expresiones arbitrarias requiere un CAS. Las demos fijas hacen comprobable la aritmética y centran la página en la definición de ∇f.",
	tool_gradient_faq_q7: "¿Radianes o grados para sin y cos?",
	tool_gradient_faq_a7:
		"La demo sin(x)+cos(y) usa radianes, como en el cálculo estándar. cos(1)≈0,5403, no cos(1°).",
	tool_gradient_article:
		"El gradiente de una función escalar multivariable es el vector de sus derivadas parciales de primer orden. Apunta al mayor aumento local y sostiene la optimización basada en gradiente.",
	tool_gradient_references: "Referencias de Wikipedia y Khan Academy sobre el gradiente multivariable.",
	tool_gradient_ref_wiki_label: "Wikipedia — Gradiente",
	tool_gradient_ref_khan_label: "Khan Academy — The gradient",
};

export default es;
