/**
 * i18n tool shard (how-to-calculate-gradient / ru).
 * Градиент функции многих переменных: ∇f в точке, процесс, модуль и единичное направление; не уклон между двумя точками.
 */
import type { SiteLangDict } from '../../../types';

/** Русские тексты интерфейса и SEO. */
const ru: SiteLangDict = {
	tool_gradient_title: "Калькулятор градиента — ∇f функции многих переменных в точке",
	tool_gradient_desc: "Вычислите градиент ∇f демонстрационной скалярной функции в точке (x, y).",
	tool_gradient_description:
		"Расчёт градиента ∇f функции многих переменных как вектора частных производных: процесс, шаги, пример и формула. Для f(x,y)=x²y+3y в (1,2) ∂f/∂x=4 и ∂f/∂y=4, значит ∇f=(4,4) и |∇f|≈5,6569. Это не калькулятор уклона между двумя точками.",
	tool_gradient_calculate: "Вычислить ∇f",
	tool_gradient_sample: "Загрузить пример",
	tool_gradient_clear: "Очистить",
	tool_gradient_fn_label: "Демо-функция",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "напр. 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "напр. 2",
	tool_gradient_result_label: "Градиент в вашей точке",
	tool_gradient_work_label: "Вычисление",
	tool_gradient_mag_label: "Модуль |∇f|",
	tool_gradient_unit_label: "Единичное направление",
	tool_gradient_result_note: "Вычислено в ({x}, {y}). ∇f указывает на самое быстрое локальное возрастание f.",
	tool_gradient_zero_mag: "∇f = 0 (критическая точка — нет единственного направления)",
	tool_gradient_invalid_input: "Введите конечные числовые значения x и y.",
	tool_gradient_how_title: "Как найти градиент функции многих переменных",
	tool_gradient_how_body:
		"Для скаляра f(x,y) дифференцируйте по каждой переменной, удерживая остальные, соберите частные производные в ∇f и подставьте точку. В блоке — фиксированные демо-функции, чтобы проверить арифметику.",
	tool_gradient_how_item_1: "Выберите демо-функцию и прочитайте символический ∇f под ней.",
	tool_gradient_how_item_2: "Введите координаты (x, y), в которых нужен вектор.",
	tool_gradient_how_item_3: "Нажмите «Вычислить ∇f».",
	tool_gradient_how_item_4: "Считайте ∇f, строку вычисления каждой частной, модуль |∇f| и единичное направление.",
	tool_gradient_why_choose_title: "Почему выбрать наш калькулятор градиента — ∇f в точке",
	tool_gradient_why_choose_item_1: "Четыре демо-функции с готовыми символическими частными — не пустой символьный CAS.",
	tool_gradient_why_choose_item_2: "Показывается вычисление каждой компоненты — удобно сверять домашние задания.",
	tool_gradient_why_choose_item_3: "Модуль и единичный вектор связывают ∇f с направлением наискорейшего подъёма.",
	tool_gradient_why_choose_item_4: "Ясная модель: ∇f из математического анализа многих переменных, а не уклон rise/run между двумя точками.",
	tool_gradient_why_choose_item_5: "Работает в браузере; ничего не загружается на сервер.",
	tool_gradient_formula_title: "Формула градиента функции многих переменных",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). Для двух переменных: ∇f(x,y) = (∂f/∂x, ∂f/∂y). Направление ∇f — наискорейший подъём; −∇f используют в градиентном спуске.",
	tool_gradient_formula_item_1: "Возьмите ∂f/∂xᵢ по каждой переменной, фиксируя остальные.",
	tool_gradient_formula_item_2: "Соберите компоненты в вектор ∇f.",
	tool_gradient_formula_item_3: "Подставьте точку. Пример: f=x²y+3y в (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "Модуль |∇f| = √(gx² + gy²). Пример: √(16+16) = √32 ≈ 5,6569.",
	tool_gradient_example_title: "Пример",
	tool_gradient_example:
		"Для f(x,y)=x²y+3y частные производные ∂f/∂x=2xy и ∂f/∂y=x²+3. В (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, значит ∇f=(4,4). Модуль √32≈5,6569, единичное направление (4/√32, 4/√32)≈(0,7071, 0,7071). На той же точке для f=x²+y² получите ∇f=(2,4).",
	tool_gradient_usecases_title: "Когда использовать",
	tool_gradient_usecase_1: "Проверить частные производные в задании перед шагом оптимизации.",
	tool_gradient_usecase_2: "Объяснить градиентный спуск: каждый шаг идёт против ∇loss при текущих параметрах.",
	tool_gradient_usecase_3: "Физическая или полевая интуиция: ∇f указывает, где скалярное поле растёт быстрее всего.",
	tool_gradient_usecase_4: "Проверить, критична ли точка (|∇f|=0) на простой демо-поверхности.",
	tool_gradient_faq_q1: "Что такое градиент в анализе функций многих переменных?",
	tool_gradient_faq_a1:
		"Градиент ∇f — вектор первых частных производных. Он указывает на самое быстрое локальное возрастание f, а длина |∇f| показывает крутизну этого роста.",
	tool_gradient_faq_q2: "Как вычислить ∇f вручную?",
	tool_gradient_faq_a2:
		"Дифференцируйте по каждой переменной при фиксированных остальных, соберите компоненты в вектор и подставьте точку. Для f=x²y+3y это (2xy, x²+3).",
	tool_gradient_faq_q3: "Это тот же «градиент», что в ML при градиентном спуске?",
	tool_gradient_faq_a3:
		"Тот же математический объект: ∇ скалярной функции потерь. Шаги спуска идут против ∇loss. Страница учит определение из анализа на демо-функциях — модель она не обучает.",
	tool_gradient_faq_q4: "Это калькулятор уклона между двумя точками (rise/run)?",
	tool_gradient_faq_a4:
		"Нет. Уклон прямой между двумя точками — на инструменте наклона. Здесь ∇f — вектор частных производных скалярного поля многих переменных.",
	tool_gradient_faq_q5: "Что значит |∇f| = 0?",
	tool_gradient_faq_a5:
		"Нулевой градиент — критическая точка: нет единственного направления наискорейшего подъёма. Попробуйте f=x²+y² в (0,0): ∇f=(0,0).",
	tool_gradient_faq_q6: "Почему только демо-функции?",
	tool_gradient_faq_a6:
		"Символьное дифференцирование произвольных выражений требует CAS. Фиксированные демо оставляют арифметику проверяемой и фокусируют страницу на определении ∇f.",
	tool_gradient_faq_q7: "Радианы или градусы для sin и cos?",
	tool_gradient_faq_a7:
		"Демо sin(x)+cos(y) использует радианы, как в стандартном анализе. cos(1)≈0,5403, а не cos(1°).",
	tool_gradient_article:
		"Градиент скалярной функции многих переменных — вектор её первых частных производных. Он указывает на самое быстрое локальное возрастание и лежит в основе градиентной оптимизации.",
	tool_gradient_references: "Ссылки Wikipedia и Khan Academy о градиенте функции многих переменных.",
	tool_gradient_ref_wiki_label: "Wikipedia — Gradient",
	tool_gradient_ref_khan_label: "Khan Academy — The gradient",
};

export default ru;
