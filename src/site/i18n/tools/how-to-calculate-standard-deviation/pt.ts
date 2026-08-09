/**
 * i18n tool shard (how-to-calculate-standard-deviation / pt).
 * Reescrita independente em português.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_std_dev_title: 'Calculadora de desvio padrão — DP e variância',
	tool_std_dev_description:
		'Calcular desvio padrão e variância no modo amostra (n−1) ou população (n) a partir de uma lista colada. Exemplo: 2, 4, 4, 4, 5, 5, 7, 9 → DP populacional = 2 (amostral ≈ 2,14). O cálculo roda no navegador; os valores ficam no dispositivo, sem enviar ao servidor.',
	tool_std_dev_article:
		'O desvio padrão mede o espalhamento em torno da média. Use amostra (correção de Bessel, ÷ n−1) quando a lista é uma amostra, e população (÷ n) quando ela é o conjunto completo. A variância é o quadrado desse desvio.',
	tool_std_dev_calculate: 'Calcular',
	tool_std_dev_sample: 'Carregar exemplo',
	tool_std_dev_clear: 'Limpar',
	tool_std_dev_numbers_label: 'Números',
	tool_std_dev_numbers_ph: 'ex.: 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'Separe com vírgulas, espaços ou novas linhas.',
	tool_std_dev_mode_label: 'Modo',
	tool_std_dev_mode_sample: 'Amostra (n−1)',
	tool_std_dev_mode_population: 'População (n)',
	tool_std_dev_result_count: 'Quantidade',
	tool_std_dev_result_mean: 'Média',
	tool_std_dev_result_variance: 'Variância',
	tool_std_dev_result_sd: 'Desvio padrão',
	tool_std_dev_result_note_sample: 'Modo amostra usa a correção de Bessel (divide por n−1).',
	tool_std_dev_result_note_population: 'Modo população divide por n (conjunto completo).',
	tool_std_dev_err_empty: 'Digite pelo menos um número válido.',
	tool_std_dev_err_sample_n: 'O desvio amostral precisa de pelo menos dois números.',
	tool_std_dev_how_title: 'Como usar',
	tool_std_dev_how_body:
		'Cole os valores, escolha amostra ou população e calcule. A ferramenta acha a média, soma os desvios ao quadrado, divide por n−1 ou n para a variância e tira a raiz para o desvio. Tudo fica no navegador, sem envio ao servidor.',
	tool_std_dev_formula_title: 'Fórmulas',
	tool_std_dev_formula_body:
		'Seja x̄ a média. A variância média os quadrados dos desvios; o desvio padrão é a raiz quadrada:',
	tool_std_dev_formula_item_1: 'Média: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'Variância amostral: s² = Σ(xᵢ − x̄)² / (n − 1); s = √s²',
	tool_std_dev_formula_item_3: 'Variância populacional: σ² = Σ(xᵢ − x̄)² / n; σ = √σ²',
	tool_std_dev_example_title: 'Exemplo',
	tool_std_dev_example:
		'Em 2, 4, 4, 4, 5, 5, 7, 9 a média é 5 e a soma dos quadrados é 32. População: σ² = 4 → σ = 2. Amostra: s² ≈ 4,571 → s ≈ 2,138. O famoso “DP = 2” é o valor populacional.',
	tool_std_dev_usecases_title: 'Quando usar',
	tool_std_dev_usecase_1: 'Trabalho escolar: conferir DP amostral vs populacional numa lista curta.',
	tool_std_dev_usecase_2: 'Ver depressa a dispersão de uma coluna pequena antes do gráfico.',
	tool_std_dev_usecase_3: 'Comparar a volatilidade de duas séries curtas no mesmo modo.',
	tool_std_dev_faq_q1: 'Qual a diferença entre amostra e população?',
	tool_std_dev_faq_a1:
		'O DP amostral divide por n−1 (Bessel) para estimar uma população maior. O populacional divide por n quando a lista é o conjunto inteiro.',
	tool_std_dev_faq_q2: 'Como variância e desvio padrão se relacionam?',
	tool_std_dev_faq_a2:
		'A variância é a média dos desvios ao quadrado. O desvio padrão é a raiz, nas mesmas unidades dos dados.',
	tool_std_dev_faq_q3: 'Por que o exemplo clássico dá 2?',
	tool_std_dev_faq_a3:
		'Nesse conjunto o DP populacional é exatamente 2; o amostral fica perto de 2,14. Livros costumam mostrar a figura populacional.',
	tool_std_dev_faq_q4: 'Meus números são enviados ao servidor?',
	tool_std_dev_faq_a4:
		'Não. A análise roda na aba do navegador. Os valores ficam no dispositivo e não são enviados ao servidor.',
	tool_std_dev_references:
		'Artigos da Wikipedia sobre desvio padrão e variância; fórmulas introdutórias amostra vs população.',
	tool_std_dev_ref_sd_label: 'Wikipedia — Desvio padrão',
	tool_std_dev_ref_var_label: 'Wikipedia — Variância',
};

export default pt;
