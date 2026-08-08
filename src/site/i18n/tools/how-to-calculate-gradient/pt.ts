/**
 * i18n tool shard (how-to-calculate-gradient / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_gradient_article:
    'O gradiente de uma função escalar multivariável é o vetor das derivadas parciais de primeira ordem. Aponta para o maior aumento local. Esta página não é uma calculadora de inclinação entre dois pontos.',
  tool_gradient_calculate: 'Avaliar ∇f',
  tool_gradient_desc:
    'Calcule o gradiente ∇f de um campo escalar como vetor de derivadas parciais. Processo: derive em cada variável, monte ∇f e avalie num ponto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); em (1,2) → (4,4). Útil em otimização e descida de gradiente em ML.',
  tool_gradient_description:
    'Calcule o gradiente ∇f de um campo escalar como vetor de derivadas parciais. Processo: derive em cada variável, monte ∇f e avalie num ponto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); em (1,2) → (4,4). Útil em otimização e descida de gradiente em ML.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Parciais: ∂f/∂x=2xy, ∂f/∂y=x²+3. Em (1,2): ∇f=(4,4).',
  tool_gradient_example_title: 'Exemplo',
  tool_gradient_faq_a1: '∇f é o vetor de derivadas parciais e aponta para o maior aumento local de f.',
  tool_gradient_faq_a2: 'Derive em cada variável mantendo as outras fixas, monte o vetor e avalie num ponto.',
  tool_gradient_faq_a3: 'Sim, o mesmo objeto: ∇ de uma perda escalar. A página ensina a definição; não treina modelo.',
  tool_gradient_faq_a4: 'Não. Inclinação rise/run é outra ferramenta; aqui ∇f é o vetor de parciais.',
  tool_gradient_faq_q1: 'O que é um gradiente no cálculo multivariável?',
  tool_gradient_faq_q2: 'Como calcular à mão?',
  tool_gradient_faq_q3: 'É o mesmo “gradiente” do gradient descent em ML?',
  tool_gradient_faq_q4: 'É uma calculadora de inclinação entre dois pontos?',
  tool_gradient_fn_hint: 'Função demo (fixa na caixa interativa):',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Em duas variáveis: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f é a subida mais íngreme; −∇f entra na descida de gradiente.',
  tool_gradient_formula_item_1: 'Calcule ∂f/∂xᵢ para cada variável',
  tool_gradient_formula_item_2: 'Monte o vetor ∇f',
  tool_gradient_formula_item_3: 'Avalie os componentes no ponto',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Fórmula do gradiente multivariável',
  tool_gradient_how_body:
    'Para um escalar f, calcule cada parcial ∂f/∂xᵢ mantendo as outras fixas, empilhe em ∇f e substitua as coordenadas. A caixa usa f(x,y)=x²y+3y para conferir o cálculo.',
  tool_gradient_how_title: 'Como funciona',
  tool_gradient_invalid_input: 'Informe valores numéricos finitos para x e y.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradiente',
  tool_gradient_result_label: 'Gradiente no seu ponto',
  tool_gradient_result_note: 'Avaliado f(x,y)=x²y+3y em ({x}, {y}).',
  tool_gradient_title: 'Calculadora de gradiente — ∇f multivariable (derivadas parciais)',
  tool_gradient_usecase_1: 'Conferir parciais de exercício antes do passo de otimização.',
  tool_gradient_usecase_2: 'Explicar descida de gradiente: cada passo vai no sentido oposto a ∇loss.',
  tool_gradient_usecase_3: 'Intuição física: ∇f aponta onde o campo escalar cresce mais rápido.',
  tool_gradient_usecases_title: 'Otimização e aprendizado de máquina',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'ex.: 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'ex.: 2',
};
export default pt;
