/**
 * i18n tool shard (how-to-calculate-gradient / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_gradient_article:
    'Градиент многомерной скалярной функции — вектор её первых частных производных. Указывает направление наискорейшего локального роста. Это не калькулятор наклона по двум точкам.',
  tool_gradient_calculate: 'Вычислить ∇f',
  tool_gradient_desc:
    'Вычислите градиент ∇f скалярного поля как вектор частных производных. Шаги: дифференцируйте по каждой переменной, соберите ∇f, оцените в точке. Демо f(x,y)=x²y+3y → ∇f=(2xy, x²+3); в (1,2) → (4,4). Для оптимизации и объяснения градиентного спуска в ML.',
  tool_gradient_description:
    'Вычислите градиент ∇f скалярного поля как вектор частных производных. Шаги: дифференцируйте по каждой переменной, соберите ∇f, оцените в точке. Демо f(x,y)=x²y+3y → ∇f=(2xy, x²+3); в (1,2) → (4,4). Для оптимизации и объяснения градиентного спуска в ML.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Частные: ∂f/∂x=2xy, ∂f/∂y=x²+3. В (1,2): ∇f=(4,4).',
  tool_gradient_example_title: 'Пример',
  tool_gradient_faq_a1: '∇f — вектор частных производных, указывающий наискорейший локальный рост.',
  tool_gradient_faq_a2: 'Дифференцируйте по каждой переменной при фиксированных остальных, соберите вектор, оцените в точке.',
  tool_gradient_faq_a3: 'Да, тот же объект: ∇ скалярной функции потерь. Страница объясняет определение, не обучает модель.',
  tool_gradient_faq_a4: 'Нет. Наклон rise/run — другой инструмент; здесь ∇f — вектор частных.',
  tool_gradient_faq_q1: 'Что такое градиент в многомерном анализе?',
  tool_gradient_faq_q2: 'Как считать вручную?',
  tool_gradient_faq_q3: 'Тот же «градиент», что в ML?',
  tool_gradient_faq_q4: 'Это калькулятор наклона по двум точкам?',
  tool_gradient_fn_hint: 'Демо-функция (фиксирована в интерактивном блоке):',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Для двух переменных: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f — наискорейший подъём; −∇f — в градиентном спуске.',
  tool_gradient_formula_item_1: 'Возьмите ∂f/∂xᵢ по каждой переменной',
  tool_gradient_formula_item_2: 'Соберите вектор ∇f',
  tool_gradient_formula_item_3: 'Оцените компоненты в точке',
  tool_gradient_formula_item_4: 'Демо: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Формула многомерного градиента',
  tool_gradient_how_body:
    'Для скаляра f вычислите каждую частную ∂f/∂xᵢ, зафиксировав остальные, соберите ∇f и подставьте координаты. Блок использует f(x,y)=x²y+3y для проверки вручную.',
  tool_gradient_how_title: 'Как это работает',
  tool_gradient_invalid_input: 'Введите конечные числовые x и y.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_result_label: 'Градиент в вашей точке',
  tool_gradient_result_note: 'Вычислено f(x,y)=x²y+3y в ({x}, {y}).',
  tool_gradient_title: 'Калькулятор градиента — многомерный ∇f (частные производные)',
  tool_gradient_usecase_1: 'Проверить частные производные перед шагом оптимизации.',
  tool_gradient_usecase_2: 'Объяснить градиентный спуск: шаг против ∇loss.',
  tool_gradient_usecase_3: 'Физическая интуиция: ∇f указывает, где скалярное поле растёт быстрее всего.',
  tool_gradient_usecases_title: 'Оптимизация и машинное обучение',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'напр. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'напр. 2',
};
export default ru;
