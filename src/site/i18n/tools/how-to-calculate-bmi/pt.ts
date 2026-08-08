/**
 * i18n tool shard (how-to-calculate-bmi / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_bmi_article:
    'Ferramenta gratuita que mostra como o IMC adulto é obtido a partir de peso e altura: fórmulas, pontos de corte, limites para atletas e crianças. O cálculo roda no seu navegador, sem envio de dados.',
  tool_bmi_calculate: 'Calcular IMC',
  tool_bmi_description:
    'Calcule o índice de massa corporal (IMC) com a fórmula de triagem para adultos. Passos: escolha métrico ou imperial, informe peso e altura, veja o IMC e compare com as faixas usuais. Exemplo: 70 kg e 175 cm → IMC 22,9 (normal). Uso educativo — não substitui avaliação clínica.',
  tool_bmi_disclaimer:
    'Esta calculadora de IMC é apenas para triagem educativa em adultos. Não é orientação médica, não diagnostica doenças e não substitui um profissional de saúde qualificado.',
  tool_bmi_example:
    'Exemplo (métrico): peso 70 kg, altura 175 cm → altura = 1,75 m → IMC = 70 / (1,75²) ≈ 22,9 → faixa normal de triagem.',
  tool_bmi_example_title: 'Exemplo',
  tool_bmi_faq_a1: 'Métrico: IMC = peso(kg) / altura(m)². Imperial: IMC = 703 × peso(lb) / altura(in)².',
  tool_bmi_faq_a2:
    'Cortes comuns em adultos: abaixo do peso <18,5; normal 18,5–24,9; sobrepeso 25–29,9; obesidade ≥30. São referências de triagem, não diagnóstico.',
  tool_bmi_faq_a3:
    'Nem sempre. IMC não separa músculo de gordura. Atletas podem cair em faixa alta com pouca gordura — peça avaliação individual a um profissional.',
  tool_bmi_faq_a4: 'Estes cortes adultos não servem para menores ou gravidez. Use curvas por idade e orientação clínica.',
  tool_bmi_faq_q1: 'Qual é a fórmula do IMC?',
  tool_bmi_faq_q2: 'O que significam as faixas de IMC?',
  tool_bmi_faq_q3: 'O IMC vale para atletas?',
  tool_bmi_faq_q4: 'Serve para crianças ou gestantes?',
  tool_bmi_formula_body:
    'Métrico: IMC = peso (kg) ÷ altura (m)². Imperial: IMC = 703 × peso (lb) ÷ altura (in)². Os cortes adultos seguem bandas de triagem amplamente divulgadas.',
  tool_bmi_formula_item_1: 'Abaixo do peso: IMC < 18,5',
  tool_bmi_formula_item_2: 'Normal: IMC 18,5–24,9',
  tool_bmi_formula_item_3: 'Sobrepeso: IMC 25–29,9',
  tool_bmi_formula_item_4: 'Obesidade: IMC ≥ 30',
  tool_bmi_formula_title: 'Fórmula do IMC e faixas adultas',
  tool_bmi_height_label: 'Altura (cm)',
  tool_bmi_height_placeholder: 'Digite a altura em centímetros',
  tool_bmi_how_body:
    'Escolha métrico ou imperial, preencha peso e altura e calcule. O IMC sai com uma casa decimal e é classificado nas faixas de triagem mais comuns. Tudo local no navegador — suas medidas não sobem para nosso servidor.',
  tool_bmi_how_title: 'Como usar',
  tool_bmi_ref_cdc_label: 'CDC — Categorias de IMC em adultos',
  tool_bmi_ref_who_label: 'OMS — Folha informativa sobre obesidade e sobrepeso',
  tool_bmi_references:
    'Folha informativa da OMS sobre obesidade; orientação do CDC sobre categorias de IMC adulto; fórmulas métricas e imperiais padrão.',
  tool_bmi_title: 'Calculadora de IMC — Como calcular o índice de massa corporal',
  tool_bmi_usecase_1: 'Checagem rápida antes de uma consulta de rotina (triagem, não diagnóstico).',
  tool_bmi_usecase_2: 'Registrar um IMC inicial junto com outros indicadores no treino.',
  tool_bmi_usecase_3: 'Conferir a mesma medida em unidades métricas e imperiais.',
  tool_bmi_usecases_title: 'Quando ajuda',
  tool_bmi_weight_label: 'Peso (kg)',
  tool_bmi_weight_placeholder: 'Digite o peso em quilogramas',
};
export default pt;
