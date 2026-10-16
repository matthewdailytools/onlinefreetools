/**
 * i18n 工具分片（how-to-calculate-body-fat / pt）。
 * 用美国海军围度公式估算体脂率；陆军标签与海军共用同一套 log10 方程。
 * 输入为厘米，代入前按 2.54 换成英寸。葡语按巴西习惯写 percentual、circunferência 与 você。
 * 男性：86.010×log10(cintura−pescoço) − 70.041×log10(estatura) + 36.387。
 * 女性：163.205×log10(cintura+quadril−pescoço) − 97.684×log10(estatura) − 78.387（减去 78.387，不是加上）。
 * 样例：男 178/40/86 cm 约 15.3%；女 165/34/74/96 cm 约 26.7%。仅供学习，不是诊断。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂率计算器的葡萄牙语文案；键与英文母版一一对应。 */
const pt: SiteLangDict = {
	tool_body_fat_title: "Calculadora de gordura corporal — Estimar o percentual pelo método da Marinha",
	tool_body_fat_description: "Calcular o percentual de gordura corporal com a fórmula de circunferências da Marinha dos EUA. O processo converte centímetros em polegadas antes do log10. Exemplo: homem, estatura 178 cm, pescoço 40 cm, cintura 86 cm → cerca de 15.3%. Mulher, estatura 165 cm, pescoço 34 cm, cintura 74 cm, quadril 96 cm → cerca de 26.7%. O rótulo do Exército usa as mesmas equações. Apenas educativo: não é aconselhamento médico nem diagnóstico.",
	tool_body_fat_article: "Sexo e circunferências em centímetros chegam para uma estimativa. Em mulheres entra o quadril. Os passos mostram a passagem para polegadas.",
	tool_body_fat_desc: "Circunferências da Marinha para o percentual de gordura; rótulo do Exército, mesmas equações; cm em polegadas; só estudo.",

	tool_body_fat_safety_banner: "Apenas uma estimativa educativa. Fórmulas de circunferência não são DXA, Bod Pod nem diagnóstico. Não é aconselhamento médico.",
	tool_body_fat_hint: "Use centímetros. A fórmula feminina precisa do quadril. A cintura tem de ser maior que o pescoço; nas mulheres, cintura mais quadril também tem de ser maior que o pescoço. O rótulo do Exército usa as mesmas equações educativas de circunferência que a Marinha.",
	tool_body_fat_method_label: "Rótulo do método",
	tool_body_fat_method_navy: "Circunferências da Marinha dos EUA",
	tool_body_fat_method_army: "Circunferências no estilo Exército dos EUA / DoD",
	tool_body_fat_sex_label: "Sexo (escolhe a fórmula)",
	tool_body_fat_sex_male: "Homem",
	tool_body_fat_sex_female: "Mulher",
	tool_body_fat_height_label: "Estatura (cm)",
	tool_body_fat_height_ph: "ex.: 178",
	tool_body_fat_neck_label: "Circunferência do pescoço (cm)",
	tool_body_fat_neck_ph: "ex.: 40",
	tool_body_fat_waist_label: "Circunferência da cintura (cm)",
	tool_body_fat_waist_ph: "ex.: 86",
	tool_body_fat_hip_label: "Circunferência do quadril (cm, mulher)",
	tool_body_fat_hip_ph: "ex.: 96",
	tool_body_fat_calculate: "Calcular",
	tool_body_fat_sample: "Carregar exemplo",
	tool_body_fat_clear: "Limpar",
	tool_body_fat_result_label: "Gordura corporal estimada",
	tool_body_fat_steps_title: "Passos do cálculo",
	tool_body_fat_step_convert_tpl: "Converter cm em polegadas (÷ 2.54): estatura {hIn} in, pescoço {nIn} in, cintura {wIn} in{hipPart}.",
	tool_body_fat_step_hip_part_tpl: ", quadril {hipIn} in",
	tool_body_fat_step_male_tpl: "Homens %GC ≈ 86.010×log10(cintura−pescoço) − 70.041×log10(estatura) + 36.387 = {pct}%.",
	tool_body_fat_step_female_tpl: "Mulheres %GC ≈ 163.205×log10(cintura+quadril−pescoço) − 97.684×log10(estatura) − 78.387 = {pct}%.",
	tool_body_fat_result_note: "Apenas uma estimativa educativa, não um aconselhamento médico nem um diagnóstico. A posição da fita e a postura mudam o resultado.",
	tool_body_fat_err_input: "Estatura, pescoço e cintura têm de ser números maiores que 0.",
	tool_body_fat_err_hip: "A fórmula feminina precisa de um quadril maior que 0.",
	tool_body_fat_err_geom: "A cintura tem de ser maior que o pescoço; nas mulheres, cintura mais quadril também tem de ser maior que o pescoço.",

	tool_body_fat_how_title: "Como calcular o percentual de gordura corporal",
	tool_body_fat_how_body: "Escolha o rótulo da Marinha ou do Exército, indique o sexo e os centímetros e toque em Calcular. Os dois rótulos compartilham a equação. Carregar exemplo alterna um homem com cerca de 15.3% e uma mulher com cerca de 26.7%.",
	tool_body_fat_how_item_1: "Escolher o rótulo e o sexo. O Exército usa aqui a mesma equação de circunferências que a Marinha.",
	tool_body_fat_how_item_2: "Preencher estatura, pescoço e cintura em centímetros; na mulher, também o quadril.",
	tool_body_fat_how_item_3: "Tocar em Calcular e ler o percentual com os passos.",
	tool_body_fat_how_item_4: "Tocar em Carregar exemplo: homem 178/40/86 cm cerca de 15.3%, depois mulher 165/34/74/96 cm cerca de 26.7%.",

	tool_body_fat_why_choose_title: "Por que usar esta calculadora de gordura corporal",
	tool_body_fat_why_choose_item_1: "O percentual aparece junto com a conta em polegadas, não só um número solto.",
	tool_body_fat_why_choose_item_2: "Marinha e Exército são dois nomes para a mesma equação de circunferências.",
	tool_body_fat_why_choose_item_3: "Você mede em centímetros; a conversão para polegadas acontece antes do log10.",
	tool_body_fat_why_choose_item_4: "O exemplo troca um caso masculino e um feminino com números fixos.",
	tool_body_fat_why_choose_item_5: "O aviso de que não é diagnóstico fica ao lado do resultado.",

	tool_body_fat_formula_title: "Fórmula e premissas da medição",
	tool_body_fat_formula_body: "Homens: %GC ≈ 86.010×log10(cintura−pescoço) − 70.041×log10(estatura) + 36.387 (polegadas). Mulheres: %GC ≈ 163.205×log10(cintura+quadril−pescoço) − 97.684×log10(estatura) − 78.387.",
	tool_body_fat_formula_item_1: "A fita fica nos pontos habituais da Marinha/DoD; postura e roupa mudam a leitura.",
	tool_body_fat_formula_item_2: "A entrada é em centímetros, convertida com 1 in = 2.54 cm antes do log10.",
	tool_body_fat_formula_item_3: "O rótulo do Exército usa as mesmas equações educativas de circunferência que a Marinha.",
	tool_body_fat_formula_item_4: "Não é um resultado clínico de DXA ou Bod Pod, nem aconselhamento médico.",
	tool_body_fat_formula_item_5: "Dobras cutâneas pedem vários pontos e técnica treinada; não é a mesma leitura que uma circunferência.",

	tool_body_fat_example_title: "Exemplos resolvidos",
	tool_body_fat_example: "Carregar exemplo começa com homem, Marinha: estatura 178 cm, pescoço 40 cm, cintura 86 cm → cerca de 15.3%. O seguinte é mulher com rótulo do Exército e a mesma equação: estatura 165 cm, pescoço 34 cm, cintura 74 cm, quadril 96 cm → cerca de 26.7%.",

	tool_body_fat_usecases_title: "Quando calcular o percentual de gordura",
	tool_body_fat_usecase_1: "Conferir um percentual a partir de circunferências já anotadas num treino.",
	tool_body_fat_usecase_2: "Na aula, repetir a fórmula da Marinha com números fixos.",
	tool_body_fat_usecase_3: "Ver a troca de centímetros para polegadas ao lado do percentual.",
	tool_body_fat_usecase_4: "Comparar os nomes Marinha e Exército e confirmar que a equação não muda. Não substitui uma conversa clínica.",

	tool_body_fat_faq_q1: "Como se calcula o percentual de gordura corporal?",
	tool_body_fat_faq_a1: "Com as fórmulas log10 de circunferência no estilo Marinha dos EUA / DoD, depois de converter centímetros em polegadas com 2.54. Homens: 86.010×log10(cintura−pescoço) − 70.041×log10(estatura) + 36.387.",
	tool_body_fat_faq_q2: "Marinha e Exército mudam a conta?",
	tool_body_fat_faq_a2: "Não. Os dois rótulos usam a mesma equação de circunferências. Onde a fita encosta pesa mais do que o nome.",
	tool_body_fat_faq_q3: "Por que polegadas?",
	tool_body_fat_faq_a3: "As equações log10 publicadas estão em polegadas. A entrada continua em centímetros e a conversão usa 2.54.",
	tool_body_fat_faq_q4: "Isto é conselho médico?",
	tool_body_fat_faq_a4: "Não. É uma estimativa educativa, não um diagnóstico, um plano de tratamento ou um exame clínico de composição corporal.",
	tool_body_fat_faq_q5: "A cintura pode ser igual ao pescoço?",
	tool_body_fat_faq_a5: "Não. A cintura tem de ser maior que o pescoço. Nas mulheres, cintura mais quadril também tem de ser maior que o pescoço.",
	tool_body_fat_faq_q6: "E as dobras cutâneas?",
	tool_body_fat_faq_a6: "São outra medição, em vários pontos e com técnica treinada. Aqui só entram circunferências. A fórmula feminina termina em menos 78.387: 163.205×log10(cintura+quadril−pescoço) − 97.684×log10(estatura) − 78.387.",

	tool_body_fat_disclaimer: "As estimativas de gordura corporal são ilustrações educativas. Não são aconselhamento médico, diagnóstico nem substituto de um exame clínico de composição corporal. Para decisões de saúde, fale com um clínico qualificado.",
	tool_body_fat_references: "Equações de circunferência da Marinha dos EUA / DoD; notas educativas da calculadora ACE; literatura revisada sobre o método de circunferências.",
	tool_body_fat_ref_ace_label: "ACE — Calculadora de gordura corporal (educativa)",
	tool_body_fat_ref_pmc_label: "PMC — Métodos de gordura corporal por circunferência",
};

export default pt;
