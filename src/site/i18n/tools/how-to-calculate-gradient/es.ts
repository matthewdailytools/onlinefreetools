/**
 * i18n tool shard (how-to-calculate-gradient / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_gradient_article:
    'El gradiente de una función escalar multivariable es el vector de sus derivadas parciales de primer orden. Apunta al mayor aumento local y es la base de la optimización por gradiente. Esta página no es una calculadora de pendiente entre dos puntos (rise/run).',
  tool_gradient_calculate: 'Evaluar ∇f',
  tool_gradient_desc:
    'Calcula el gradiente ∇f de un campo escalar como vector de derivadas parciales. Proceso: deriva respecto a cada variable, forma ∇f y evalúa en un punto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); en (1,2) → (4,4). Útil en optimización y descenso por gradiente en ML.',
  tool_gradient_description:
    'Calcula el gradiente ∇f de un campo escalar como vector de derivadas parciales. Proceso: deriva respecto a cada variable, forma ∇f y evalúa en un punto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); en (1,2) → (4,4). Útil en optimización y descenso por gradiente en ML.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Parciales: ∂f/∂x=2xy, ∂f/∂y=x²+3. En (1,2): ∂f/∂x=4, ∂f/∂y=4 → ∇f=(4,4).',
  tool_gradient_example_title: 'Ejemplo',
  tool_gradient_faq_a1: '∇f es el vector de derivadas parciales y apunta al mayor aumento local de f.',
  tool_gradient_faq_a2: 'Deriva respecto a cada variable dejando las demás fijas, forma el vector y evalúa en un punto.',
  tool_gradient_faq_a3:
    'Sí, el mismo objeto: ∇ de una pérdida escalar. El descenso camina en −∇loss. Esta página enseña la definición, no entrena un modelo.',
  tool_gradient_faq_a4: 'No. La pendiente rise/run es otra herramienta; aquí ∇f es el vector de parciales.',
  tool_gradient_faq_q1: '¿Qué es un gradiente en cálculo multivariable?',
  tool_gradient_faq_q2: '¿Cómo se calcula a mano?',
  tool_gradient_faq_q3: '¿Es el mismo “gradiente” del descenso por gradiente en ML?',
  tool_gradient_faq_q4: '¿Es una calculadora de pendiente entre dos puntos?',
  tool_gradient_fn_hint: 'Función demo (fija en el cuadro interactivo):',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). En dos variables: ∇f(x,y) = (∂f/∂x, ∂f/∂y). ∇f es el ascenso más pronunciado; −∇f se usa en descenso por gradiente.',
  tool_gradient_formula_item_1: 'Calcula ∂f/∂xᵢ para cada variable',
  tool_gradient_formula_item_2: 'Monta el vector ∇f',
  tool_gradient_formula_item_3: 'Evalúa los componentes en el punto elegido',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Fórmula del gradiente multivariable',
  tool_gradient_how_body:
    'Para un escalar f(x₁,…,xₙ), calcula cada parcial ∂f/∂xᵢ dejando fijas las demás, apílalas en ∇f y sustituye las coordenadas. El cuadro usa f(x,y)=x²y+3y para comprobar el cálculo a mano.',
  tool_gradient_how_title: 'Cómo funciona',
  tool_gradient_invalid_input: 'Introduce valores numéricos finitos para x e y.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradiente',
  tool_gradient_result_label: 'Gradiente en tu punto',
  tool_gradient_result_note: 'Evaluado f(x,y)=x²y+3y en ({x}, {y}).',
  tool_gradient_title: 'Calculadora de gradiente — ∇f multivariable (derivadas parciales)',
  tool_gradient_usecase_1: 'Comprobar parciales de un ejercicio antes del paso de optimización.',
  tool_gradient_usecase_2: 'Explicar descenso por gradiente: cada paso se mueve en sentido contrario a ∇loss.',
  tool_gradient_usecase_3: 'Intuición física: ∇f apunta hacia donde el campo escalar crece más rápido.',
  tool_gradient_usecases_title: 'Optimización y aprendizaje automático',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'p. ej. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'p. ej. 2',
};
export default es;
