/**
 * i18n tool shard (how-to-calculate-gradient / en).
 * 多元函数梯度英文母版：示例函数求 ∇f、计算过程、模长与单位方向；非两点斜率。
 */
import type { SiteLangDict } from '../../../types';

/** 英文文案字典。 */
const en: SiteLangDict = {
	tool_gradient_title: 'Gradient Calculator — Multivariable ∇f at a Point',
	tool_gradient_desc: 'Evaluate the gradient ∇f of a demo scalar function at a point (x, y).',
	tool_gradient_description:
		'Calculate the multivariable gradient ∇f as the vector of partial derivatives, with working and magnitude. Example: for f(x,y)=x²y+3y at (1,2), ∂f/∂x=4 and ∂f/∂y=4 so ∇f=(4,4) with |∇f|≈5.6569. Not a two-point slope calculator.',
	tool_gradient_calculate: 'Evaluate ∇f',
	tool_gradient_sample: 'Load sample',
	tool_gradient_clear: 'Clear',
	tool_gradient_fn_label: 'Demo function',
	tool_gradient_fn_xy3y: 'f(x,y) = x²y + 3y',
	tool_gradient_fn_x2y2: 'f(x,y) = x² + y²',
	tool_gradient_fn_xy: 'f(x,y) = x·y',
	tool_gradient_fn_sincos: 'f(x,y) = sin(x) + cos(y)',
	tool_gradient_box_xy3y: 'f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)',
	tool_gradient_box_x2y2: 'f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)',
	tool_gradient_box_xy: 'f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)',
	tool_gradient_box_sincos: 'f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))',
	tool_gradient_x_label: 'x',
	tool_gradient_x_placeholder: 'e.g. 1',
	tool_gradient_y_label: 'y',
	tool_gradient_y_placeholder: 'e.g. 2',
	tool_gradient_result_label: 'Gradient at your point',
	tool_gradient_work_label: 'Working',
	tool_gradient_mag_label: 'Magnitude |∇f|',
	tool_gradient_unit_label: 'Unit direction',
	tool_gradient_result_note: 'Evaluated at ({x}, {y}). ∇f points toward the steepest local increase of f.',
	tool_gradient_zero_mag: '∇f = 0 (critical point — no unique direction)',
	tool_gradient_invalid_input: 'Enter finite numeric x and y values.',
	tool_gradient_how_title: 'How to calculate a multivariable gradient',
	tool_gradient_how_body:
		'For a scalar f(x,y), differentiate with respect to each variable while holding the other fixed, stack the partials into ∇f, then substitute your point. The box uses fixed demo functions so you can check the arithmetic.',
	tool_gradient_how_item_1: 'Choose a demo function and read the symbolic ∇f shown under it.',
	tool_gradient_how_item_2: 'Enter the coordinates (x, y) where you want the vector.',
	tool_gradient_how_item_3: 'Click Evaluate ∇f.',
	tool_gradient_how_item_4: 'Read ∇f, the working line for each partial, the magnitude |∇f|, and the unit direction.',
	tool_gradient_why_choose_title: 'Why choose our Gradient Calculator tools',
	tool_gradient_why_choose_item_1: 'Four demo functions with ready symbolic partials — not a blank symbolic CAS.',
	tool_gradient_why_choose_item_2: 'Working is shown for each component, so homework checks are visible.',
	tool_gradient_why_choose_item_3: 'Magnitude and unit vector help connect ∇f to steepest-ascent direction.',
	tool_gradient_why_choose_item_4: 'Clear about the model: multivariable calculus ∇f, not two-point rise/run slope.',
	tool_gradient_why_choose_item_5: 'Runs in your browser; nothing is uploaded.',
	tool_gradient_formula_title: 'Multivariable gradient formula',
	tool_gradient_formula_body:
		'∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). For two variables: ∇f(x,y) = (∂f/∂x, ∂f/∂y). Direction of ∇f is steepest ascent; −∇f is used in gradient descent.',
	tool_gradient_formula_item_1: 'Take ∂f/∂xᵢ for every variable, holding the others constant.',
	tool_gradient_formula_item_2: 'Assemble the components into the vector ∇f.',
	tool_gradient_formula_item_3: 'Evaluate at the point. Sample: f=x²y+3y at (1,2) → (4, 4).',
	tool_gradient_formula_item_4: 'Magnitude |∇f| = √(gx² + gy²). Sample: √(16+16) = √32 ≈ 5.6569.',
	tool_gradient_example_title: 'Example',
	tool_gradient_example:
		'For f(x,y)=x²y+3y, the partials are ∂f/∂x=2xy and ∂f/∂y=x²+3. At (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, so ∇f=(4,4). The magnitude is √32≈5.6569 and the unit direction is (4/√32, 4/√32)≈(0.7071, 0.7071). Switch to f=x²+y² at the same point to get ∇f=(2,4).',
	tool_gradient_usecases_title: 'When to use it',
	tool_gradient_usecase_1: 'Checking homework partials before plugging them into an optimization step.',
	tool_gradient_usecase_2: 'Explaining gradient descent: each step moves opposite ∇loss at the current parameters.',
	tool_gradient_usecase_3: 'Physics or field intuition: ∇f points where the scalar field increases fastest.',
	tool_gradient_usecase_4: 'Finding whether a point is critical (|∇f|=0) on a simple demo surface.',
	tool_gradient_faq_q1: 'What is a gradient in multivariable calculus?',
	tool_gradient_faq_a1:
		'The gradient ∇f is the vector of first partial derivatives. It points toward the steepest local increase of f, and its length |∇f| is how steep that increase is.',
	tool_gradient_faq_q2: 'How do I compute ∇f by hand?',
	tool_gradient_faq_a2:
		'Differentiate with respect to each variable while holding the others constant, assemble the components into a vector, then evaluate at your point. For f=x²y+3y that is (2xy, x²+3).',
	tool_gradient_faq_q3: 'Is this the same as the ML “gradient” in gradient descent?',
	tool_gradient_faq_a3:
		'Same mathematical object: ∇ of a scalar loss. Descent steps move opposite ∇loss. This page teaches the calculus definition on demo functions — it does not train a model.',
	tool_gradient_faq_q4: 'Is this a two-point slope (rise/run) calculator?',
	tool_gradient_faq_a4:
		'No. Line slope between two points belongs on the slope tool. Here ∇f is the multivariable partial-derivative vector of a scalar field.',
	tool_gradient_faq_q5: 'What does |∇f| = 0 mean?',
	tool_gradient_faq_a5:
		'A vanishing gradient is a critical point: there is no unique steepest-ascent direction. Try f=x²+y² at (0,0): ∇f=(0,0).',
	tool_gradient_faq_q6: 'Why only demo functions?',
	tool_gradient_faq_a6:
		'Symbolic differentiation of arbitrary expressions needs a CAS. Fixed demos keep the arithmetic checkable and the page focused on the definition of ∇f.',
	tool_gradient_faq_q7: 'Radians or degrees for sin and cos?',
	tool_gradient_faq_a7:
		'The sin(x)+cos(y) demo uses radians, as in standard calculus. cos(1)≈0.5403, not cos(1°).',
	tool_gradient_article:
		'The gradient of a multivariable scalar function is the vector of its first partial derivatives. It points toward the steepest local increase and underpins gradient-based optimization.',
	tool_gradient_references: 'Wikipedia and Khan Academy references for the multivariable gradient.',
	tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
	tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
};

export default en;
