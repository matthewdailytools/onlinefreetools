/**
 * i18n tool shard (how-to-calculate-body-fat / pt).
 * Independent rewrite in Portuguese (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_body_fat_title: 'Calculadora de gordura corporal — Estimar o percentual com circunferências',
	tool_body_fat_description:
		'Estime a gordura corporal com fórmulas de circunferência da Marinha dos EUA (opção Exército na mesma página). Exemplo: homem, 178 cm de altura, pescoço 40 cm, cintura 86 cm → ~15,3 %. Cálculo no navegador; apenas educativo — não é aconselhamento médico nem diagnóstico.',
	tool_body_fat_article:
		'Métodos por circunferência estimam gordura a partir da altura e medidas com fita. Navy e Army (família DoD) ficam nesta URL educativa; pregas cutâneas são explicadas na FAQ como método distinto, sem página separada.',
	tool_body_fat_calculate: 'Calcular',
	tool_body_fat_sample: 'Carregar exemplo',
	tool_body_fat_clear: 'Limpar',
	tool_body_fat_method_label: 'Método',
	tool_body_fat_method_navy: 'Circunferências Marinha dos EUA',
	tool_body_fat_method_army: 'Circunferências Exército / estilo DoD',
	tool_body_fat_sex_label: 'Sexo (tabelas de fórmula)',
	tool_body_fat_sex_male: 'Homem',
	tool_body_fat_sex_female: 'Mulher',
	tool_body_fat_height_label: 'Altura (cm)',
	tool_body_fat_height_ph: 'ex.: 178',
	tool_body_fat_neck_label: 'Circunferência do pescoço (cm)',
	tool_body_fat_neck_ph: 'ex.: 40',
	tool_body_fat_waist_label: 'Circunferência da cintura (cm)',
	tool_body_fat_waist_ph: 'ex.: 86',
	tool_body_fat_hip_label: 'Circunferência do quadril (cm, mulher)',
	tool_body_fat_hip_ph: 'ex.: 96',
	tool_body_fat_result_label: 'Gordura corporal estimada',
	tool_body_fat_result_note: 'Apenas estimativa educativa — não é aconselhamento médico nem diagnóstico.',
	tool_body_fat_err_input: 'Altura, pescoço e cintura devem ser números positivos.',
	tool_body_fat_err_hip: 'Fórmulas femininas exigem circunferência positiva do quadril.',
	tool_body_fat_err_geom: 'A cintura deve ser maior que o pescoço (e cintura+quadril > pescoço em mulheres).',
	tool_body_fat_how_title: 'Como funciona',
	tool_body_fat_how_body:
		'Informe sexo, altura e medidas em centímetros. A ferramenta converte para polegadas nas fórmulas log10 publicadas e mostra o % estimado. Pregas cutâneas ficam na FAQ — mesma página.',
	tool_body_fat_formula_title: 'Fórmula e premissas de medição',
	tool_body_fat_formula_body:
		'Homem: %GC ≈ 86,010×log10(cintura−pescoço) − 70,041×log10(altura) + 36,387 (polegadas). Mulher: %GC ≈ 163,205×log10(cintura+quadril−pescoço) − 97,684×log10(altura) + 78,387. Premissas:',
	tool_body_fat_formula_item_1: 'Fita nos pontos padrão Navy/DoD; postura e roupa alteram o resultado.',
	tool_body_fat_formula_item_2: 'Entrada em cm; conversão 1 in = 2,54 cm antes das fórmulas log10.',
	tool_body_fat_formula_item_3: 'Estimativas educativas, não resultados clínicos DXA/Bod Pod nem aconselhamento médico.',
	tool_body_fat_example_title: 'Exemplo',
	tool_body_fat_example:
		'Exemplo: homem, método Navy, altura 178 cm, pescoço 40 cm, cintura 86 cm → ~15,3 % de gordura corporal.',
	tool_body_fat_usecases_title: 'Quando usar',
	tool_body_fat_usecase_1: 'Aula: praticar fórmulas Navy de gordura com números fixos.',
	tool_body_fat_usecase_2: 'Ilustração aproximada de acompanhamento fitness antes de falar com clínico (não diagnóstico).',
	tool_body_fat_usecase_3: 'Comparar rótulos Navy vs Army em uma página, sem segunda URL.',
	tool_body_fat_faq_q1: 'Qual fórmula é usada?',
	tool_body_fat_faq_a1:
		'Fórmulas log10 de circunferência estilo Marinha/DoD dos EUA, em polegadas após converter cm.',
	tool_body_fat_faq_q2: 'Navy vs Army nesta página?',
	tool_body_fat_faq_a2:
		'Ambos são estimadores por circunferência da mesma família. Rótulos ajudam na busca; a técnica de medição importa mais que o nome.',
	tool_body_fat_faq_q3: 'Isso é aconselhamento médico?',
	tool_body_fat_faq_a3:
		'Não. Resultados são estimativas educativas, não diagnóstico, plano de tratamento nem teste clínico de composição.',
	tool_body_fat_faq_q4: 'E as pregas cutâneas?',
	tool_body_fat_faq_a4:
		'Equações de pregas exigem vários pontos e técnica treinada. Explicadas aqui na FAQ, não como URL separada.',
	tool_body_fat_disclaimer:
		'Estimativas de gordura corporal são apenas ilustrações educativas e não substituem aconselhamento médico, diagnóstico ou testes clínicos de composição. Consulte profissional qualificado para decisões de saúde.',
	tool_body_fat_references:
		'Equações de circunferência Marinha/DoD dos EUA; notas educativas ACE sobre calculadoras de gordura; literatura revisada por pares sobre métodos por circunferência.',
	tool_body_fat_ref_ace_label: 'ACE — Calculadora de gordura corporal (educativa)',
	tool_body_fat_ref_pmc_label: 'PMC — Métodos de gordura corporal por circunferência',
};

export default pt;
