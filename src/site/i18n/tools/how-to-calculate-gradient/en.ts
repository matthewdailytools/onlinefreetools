/**
 * i18n tool shard (how-to-calculate-gradient / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_gradient_article:
    'The gradient of a multivariable scalar function is the vector of its first partial derivatives. It points toward the steepest local increase and is the building block of gradient-based optimization. This page walks the formula, evaluates a fixed demo function at your (x,y), and links related percentage and ROI tools — it is not a two-point slope (rise/run) calculator.',
  tool_gradient_calculate: 'Evaluate ∇f',
  tool_gradient_desc:
    'Compute the gradient ∇f of a scalar field as the vector of partial derivatives. Process: differentiate for each variable, assemble ∇f, evaluate at a point. Demo function f(x,y)=x²y+3y → ∇f=(2xy, x²+3); at (1,2) → (4,4). Used in optimization and ML gradient descent explanations.',
  tool_gradient_description:
    'Compute the gradient ∇f of a scalar field as the vector of partial derivatives. Process: differentiate for each variable, assemble ∇f, evaluate at a point. Demo function f(x,y)=x²y+3y → ∇f=(2xy, x²+3); at (1,2) → (4,4). Used in optimization and ML gradient descent explanations.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Partials: ∂f/∂x=2xy, ∂f/∂y=x²+3. At (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1²+3=4 → ∇f=(4,4).',
  tool_gradient_example_title: 'Example',
  tool_gradient_faq_a1:
    'The gradient ∇f is the vector of partial derivatives and points toward the steepest local increase of f.',
  tool_gradient_faq_a2:
    'Differentiate with respect to each variable while holding others constant, assemble the components into a vector, then evaluate at a point.',
  tool_gradient_faq_a3:
    'Same mathematical object: ∇ of a scalar loss. Descent steps move opposite ∇loss. This page teaches the calculus definition on a demo function — it does not train a model.',
  tool_gradient_faq_a4:
    'No. For line slope between two points use a slope tool; here ∇f is the multivariable partial-derivative vector.',
  tool_gradient_faq_q1: 'What is a gradient in multivariable calculus?',
  tool_gradient_faq_q2: 'How do I compute it by hand?',
  tool_gradient_faq_q3: 'Is this the same as ML “gradient” in gradient descent?',
  tool_gradient_faq_q4: 'Is this a two-point slope (rise/run) calculator?',
  tool_gradient_fn_hint: 'Demo function (fixed for the interactive box):',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). For two variables: ∇f(x,y) = (∂f/∂x, ∂f/∂y). Direction of ∇f is steepest ascent; −∇f is used in gradient descent.',
  tool_gradient_formula_item_1: 'Take ∂f/∂xᵢ for every variable',
  tool_gradient_formula_item_2: 'Assemble the vector ∇f',
  tool_gradient_formula_item_3: 'Evaluate components at the chosen point',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Multivariable gradient formula',
  tool_gradient_how_body:
    'For a scalar f(x₁,…,xₙ), compute each partial ∂f/∂xᵢ holding other variables fixed, stack them into ∇f, then substitute the coordinates of your point. The interactive box uses f(x,y)=x²y+3y so you can check the arithmetic quickly.',
  tool_gradient_how_title: 'How it works',
  tool_gradient_invalid_input: 'Enter finite numeric x and y values.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_result_label: 'Gradient at your point',
  tool_gradient_result_note: 'Evaluated f(x,y)=x²y+3y at ({x}, {y}).',
  tool_gradient_title: 'Gradient Calculator — Multivariable ∇f (Partial Derivatives)',
  tool_gradient_usecase_1: 'Check homework partials before plugging into an optimization step.',
  tool_gradient_usecase_2: 'Explain gradient descent: each step moves opposite ∇loss at the current parameters.',
  tool_gradient_usecase_3: 'Physics / field intuition: ∇f points where the scalar field increases fastest.',
  tool_gradient_usecases_title: 'Optimization & ML contexts',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'e.g. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'e.g. 2',
};
export default en;
