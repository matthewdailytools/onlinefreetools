/**
 * i18n tool shard (how-to-calculate-ideal-weight / pt).
 * Reescrita independente conforme o brief 03 (peso ideal); não é calco do inglês.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_ideal_weight_title: 'Calculadora de peso ideal — Estimar a faixa de peso corporal',
	tool_ideal_weight_description:
		'Estime o peso corporal ideal com Devine, Robinson, Miller e Hamwi numa só página. Exemplo: homem 178 cm → Devine ≈ 73,2 kg (faixa ≈ 70,4–75,2 kg entre as fórmulas). Cálculo no navegador; só educativo — não é aconselhamento médico nem diagnóstico.',
	tool_ideal_weight_article:
		'As fórmulas de peso ideal (IBW) estimam um peso de referência a partir da altura e do sexo. Aqui compara Devine, Robinson, Miller e Hamwi juntos, com aviso de que não é orientação clínica.',
	tool_ideal_weight_calculate: 'Calcular',
	tool_ideal_weight_sample: 'Carregar exemplo',
	tool_ideal_weight_clear: 'Limpar',
	tool_ideal_weight_sex_label: 'Sexo (tabelas da fórmula)',
	tool_ideal_weight_sex_male: 'Homem',
	tool_ideal_weight_sex_female: 'Mulher',
	tool_ideal_weight_height_label: 'Altura (cm)',
	tool_ideal_weight_height_ph: 'ex. 178',
	tool_ideal_weight_formula_label: 'Vista da fórmula',
	tool_ideal_weight_formula_all: 'Todas as fórmulas (faixa)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Peso ideal estimado',
	tool_ideal_weight_result_range: 'Faixa das fórmulas',
	tool_ideal_weight_result_note: 'Estimativa educativa — não é aconselhamento médico nem diagnóstico.',
	tool_ideal_weight_err_height: 'A altura deve ser maior que zero.',
	tool_ideal_weight_err_short:
		'Estas fórmulas IBW são pouco definidas abaixo de cerca de 152 cm (5 ft). Trate o resultado só como ilustração.',
	tool_ideal_weight_how_title: 'Como funciona',
	tool_ideal_weight_how_body:
		'Indique o sexo e a altura em centímetros. A ferramenta converte para polegadas nas fórmulas IBW clássicas e mostra quilogramas. Compare fórmulas aqui; IMC e gordura corporal ficam noutras páginas.',
	tool_ideal_weight_formula_title: 'Fórmulas e pressupostos',
	tool_ideal_weight_formula_body:
		'Conversão: 1 in = 2,54 cm. Acima de 60 in (5 ft), Devine homem = 50 + 2,3×(in−60); mulher = 45,5 + 2,3×(in−60). Robinson, Miller e Hamwi usam a mesma forma linear com outros coeficientes. Atenção:',
	tool_ideal_weight_formula_item_1: 'Derivadas de contextos de dosagem/referência em adultos — não metas pessoais.',
	tool_ideal_weight_formula_item_2: 'Não modelam estrutura óssea, massa muscular nem gravidez.',
	tool_ideal_weight_formula_item_3: 'São ilustrações educativas, não alvos clínicos nem aconselhamento médico.',
	tool_ideal_weight_example_title: 'Exemplo',
	tool_ideal_weight_example:
		'Exemplo: homem, 178 cm → Devine ≈ 73,2 kg; Robinson ≈ 71,1, Miller ≈ 70,4, Hamwi ≈ 75,2 (≈ 70,4–75,2 kg).',
	tool_ideal_weight_usecases_title: 'Quando usar',
	tool_ideal_weight_usecase_1: 'Aula: comparar fórmulas IBW clássicas com a mesma altura.',
	tool_ideal_weight_usecase_2: 'Referência educativa aproximada antes de falar com um clínico (não um plano de meta).',
	tool_ideal_weight_usecase_3: 'Ver Devine vs Robinson numa página, sem URLs separadas.',
	tool_ideal_weight_faq_q1: 'Qual fórmula de peso ideal é a «correta»?',
	tool_ideal_weight_faq_a1:
		'Nenhuma é universalmente correta. Devine é comum no ensino; Robinson, Miller e Hamwi diferem nos coeficientes. Compare-as aqui.',
	tool_ideal_weight_faq_q2: 'É o mesmo que o IMC?',
	tool_ideal_weight_faq_a2:
		'Não. O IMC relaciona peso e altura. O IBW estima um peso de referência só com altura e sexo.',
	tool_ideal_weight_faq_q3: 'Isto é aconselhamento médico?',
	tool_ideal_weight_faq_a3:
		'Não. Os números são apenas estimativas educativas — não diagnosticam nem prescrevem tratamento ou nutrição.',
	tool_ideal_weight_faq_q4: 'Porque converter para polegadas?',
	tool_ideal_weight_faq_a4:
		'As equações tipo Devine publicadas são definidas em polegadas acima de 5 pés. Os cm são convertidos antes de aplicar as fórmulas.',
	tool_ideal_weight_disclaimer:
		'Os resultados de peso ideal são apenas ilustrações educativas e não substituem aconselhamento médico, diagnóstico ou avaliação clínica. Fale com um profissional qualificado para decisões de saúde.',
	tool_ideal_weight_references:
		'Equações IBW clássicas Devine/Robinson/Miller/Hamwi; contexto educativo de dosagem/IBW no NCBI Bookshelf.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — contexto de peso corporal ideal',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default pt;
