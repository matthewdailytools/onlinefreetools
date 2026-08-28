/**
 * i18n tool shard (measuring-magnetic-fields / pt).
 * Busca local: medir campos magnéticos / intensidade / gauss do ímã.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Medir campos magnéticos — Calculadora de intensidade',
	tool_measuring_magnetic_fields_description:
		'Medir campos magnéticos: insira a leitura de uma sonda Hall ou de um gaussímetro e converta a intensidade. Exemplo: 200 G → 0,02 T. Compare o gauss de um ímã com uma tabela de ordens de grandeza ou estime o campo axial de um ímã de barra. O cálculo fica no navegador; os números não são enviados a um servidor.',
	tool_measuring_magnetic_fields_article:
		'Primeiro o instrumento e a posição da sonda; depois a conversão. A estimativa geométrica não substitui um medidor calibrado nem dá força de atração em kg.',
	tool_measuring_magnetic_fields_calculate: 'Converter',
	tool_measuring_magnetic_fields_sample: 'Carregar exemplo',
	tool_measuring_magnetic_fields_clear: 'Limpar',
	tool_measuring_magnetic_fields_estimate: 'Estimar campo',
	tool_measuring_magnetic_fields_convert_heading: 'Converter uma leitura',
	tool_measuring_magnetic_fields_estimate_heading: 'Opcional: estimar o campo de um ímã',
	tool_measuring_magnetic_fields_value_label: 'Leitura',
	tool_measuring_magnetic_fields_value_ph: 'ex.: 200',
	tool_measuring_magnetic_fields_unit_label: 'Unidade no aparelho',
	tool_measuring_magnetic_fields_vacuum_label: 'Mostrar também H no vácuo/ar (A/m e oersted)',
	tool_measuring_magnetic_fields_result_t: 'Tesla (T)',
	tool_measuring_magnetic_fields_result_mt: 'Militesla (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Microtesla (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Nanotesla (nT)',
	tool_measuring_magnetic_fields_result_g: 'Gauss (G)',
	tool_measuring_magnetic_fields_result_mg: 'Miligauss (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Quilogauss (kG)',
	tool_measuring_magnetic_fields_earth_line: 'Cerca de {n} vezes o campo da Terra (~50 µT de referência).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m), vácuo/ar',
	tool_measuring_magnetic_fields_result_oe: 'Oersted (Oe), vácuo/ar',
	tool_measuring_magnetic_fields_result_note:
		'Fórmula do campo: 1 T = 10⁴ G. H opcional usa B = μ₀H só no vácuo/ar; B e H não são a mesma grandeza.',
	tool_measuring_magnetic_fields_err_generic: 'Introduza uma leitura finita e não negativa.',
	tool_measuring_magnetic_fields_err_negative: 'Esta página trata a leitura como magnitude: valores negativos são recusados.',
	tool_measuring_magnetic_fields_err_z: 'A distância axial z deve ser ≥ 0 (mm a partir da face).',
	tool_measuring_magnetic_fields_err_grade: 'Escolha um grau N da lista (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Introduza dimensões finitas e positivas em milímetros.',
	tool_measuring_magnetic_fields_grade_label: 'Grau NdFeB (Br médio)',
	tool_measuring_magnetic_fields_shape_label: 'Forma',
	tool_measuring_magnetic_fields_shape_disc: 'Disco / cilindro',
	tool_measuring_magnetic_fields_shape_block: 'Bloco / ímã de barra',
	tool_measuring_magnetic_fields_diam_label: 'Diâmetro (mm)',
	tool_measuring_magnetic_fields_thick_label: 'Espessura no eixo (mm)',
	tool_measuring_magnetic_fields_len_label: 'Comprimento da face (mm)',
	tool_measuring_magnetic_fields_width_label: 'Largura da face (mm)',
	tool_measuring_magnetic_fields_z_label: 'Distância da face z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: 'B axial (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'B axial (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Magnetização axial uniforme e fórmula de disco (o bloco usa raio equivalente). O gradiente junto à face é forte: não é um gaussímetro calibrado nem força de arranque em kg.',
	tool_measuring_magnetic_fields_chart_title: 'Tabela de intensidade de ímanes (ordens de grandeza)',
	tool_measuring_magnetic_fields_chart_col_source: 'Fonte',
	tool_measuring_magnetic_fields_chart_col_b: 'B típico',
	tool_measuring_magnetic_fields_chart_earth: 'Campo terrestre (verificação de campo fraco)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (aqui ~50 µT como ponto médio)',
	tool_measuring_magnetic_fields_chart_fridge: 'Ímã de geladeira / ímã fraco (gauss)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) perto da face',
	tool_measuring_magnetic_fields_chart_ndfeb: 'Superfície NdFeB (campo de um ímã)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0,2–0,6 T típico perto da face — não é força em kg',
	tool_measuring_magnetic_fields_chart_mri: 'RM (apenas ordem de grandeza)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1,5–3 T — não é ficha técnica nem conselho de segurança',
	tool_measuring_magnetic_fields_how_title: 'Como medir um campo magnético',
	tool_measuring_magnetic_fields_how_body:
		'Escolha o aparelho, posicione a sonda, leia a unidade e converta. Estimar um ímã de barra é opcional e não substitui o medidor.',
	tool_measuring_magnetic_fields_how_item_1:
		'Escolha um instrumento adequado: gaussímetro ou sonda Hall para ímanes (mT–T); o magnetómetro do telemóvel só para campos fracos como os ~50 µT da Terra.',
	tool_measuring_magnetic_fields_how_item_2:
		'Coloque o sensor no eixo que importa, anote a distância à face e vigie a saturação (sensores baratos saturam junto a um neodímio).',
	tool_measuring_magnetic_fields_how_item_3: 'Leia o número e a unidade no aparelho (gauss ou tesla).',
	tool_measuring_magnetic_fields_how_item_4:
		'Clique em Converter e compare com a tabela. Carregar exemplo preenche 200 G → 0,02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'Se ainda não tiver medidor, abra Estimar campo e aproxime o campo de um disco ou barra a partir do grau e do tamanho — é uma estimativa.',
	tool_measuring_magnetic_fields_formula_title: 'Fórmula do campo magnético',
	tool_measuring_magnetic_fields_formula_body:
		'A conversão usa o tesla SI como eixo. H só aparece se marcar vácuo/ar.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Fórmula: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT; 1 G = 10⁻⁴ T; 1 kG = 0,1 T; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Intensidade H (vácuo/ar): B(T) = μ₀ H(A/m), μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79,577 A/m; 1 G corresponde a 1 Oe só nessa aproximação. B e H não são a mesma grandeza.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Disco (magnetização axial uniforme): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] em metros. O bloco usa R = √(comprimento×largura da face / π); não é um modelo de elementos finitos.',
	tool_measuring_magnetic_fields_formula_item_4:
		'O fluxo Φ = B A vale se B for uniforme e perpendicular à área: esta página dá B, não Φ. A estimativa usa Br remanente, não resolve o momento magnético completo. Os Br de grau N são pontos médios de intervalo.',
	tool_measuring_magnetic_fields_example_title: 'Exemplo',
	tool_measuring_magnetic_fields_example:
		'Exemplo: a sonda Hall marca 200 G. Converter → 0,02 T = 20 mT = 2×10⁴ µT = 200 G, cerca de 400 vezes os ~50 µT terrestres. Esse gauss fica entre um ímã de geladeira e uma face forte de NdFeB.',
	tool_measuring_magnetic_fields_usecases_title: 'Quando ajuda',
	tool_measuring_magnetic_fields_usecase_1:
		'Caderno de laboratório: o gaussímetro mostra 200 G e o relatório pede tesla (medir o campo / intensidade).',
	tool_measuring_magnetic_fields_usecase_2:
		'Gauss de um ímã: comparar a leitura com a tabela para não tomar saturação do telemóvel como campo de superfície.',
	tool_measuring_magnetic_fields_usecase_3:
		'Campo de um ímã de barra: estimar B axial a uma distância; não é a força entre dois ímanes.',
	tool_measuring_magnetic_fields_faq_q1: 'Como medir um campo magnético?',
	tool_measuring_magnetic_fields_faq_a1:
		'Para ímanes, sonda Hall ou gaussímetro (mT–T). Coloque a sonda no eixo, anote a distância e respeite o alcance: o magnetómetro do telemóvel satura junto ao neodímio. Leia a unidade e converta aqui (exemplo: 200 G → 0,02 T). Um dinamómetro de atração é outro trabalho.',
	tool_measuring_magnetic_fields_faq_q2: 'Qual é a fórmula do campo / da intensidade?',
	tool_measuring_magnetic_fields_faq_a2:
		'B: 1 T = 10⁴ G. No vácuo ou no ar, H segue B = μ₀H; 1 G ≈ 1 Oe só nessa aproximação. O fluxo Φ = BA não é calculado aqui.',
	tool_measuring_magnetic_fields_faq_q3: 'Gauss de um ímã versus a tabela de intensidade?',
	tool_measuring_magnetic_fields_faq_a3:
		'Gauss é B nessa unidade. A tabela são ordens de grandeza (Terra, geladeira, NdFeB), não uma tabela de força de arranque em kg.',
	tool_measuring_magnetic_fields_faq_q4: 'Força magnética é o mesmo que campo?',
	tool_measuring_magnetic_fields_faq_a4:
		'Não. Aqui converte-se e estima-se B. A força (entre dois ímanes ou F = qvB) é outro cálculo e não é resolvida.',
	tool_measuring_magnetic_fields_faq_q5: 'Posso traçar linhas de campo ou um campo uniforme?',
	tool_measuring_magnetic_fields_faq_a5:
		'Não há diagrama interativo. Qualitativamente, B axial de um ímã de barra cai com a distância. Um campo uniforme é uma idealização; ímanes de geladeira e disco são muito não uniformes.',
	tool_measuring_magnetic_fields_disclaimer:
		'Os resultados são conversões e estimativas educativas, não uma medição calibrada nem conselho médico, de implantes ou de RM.',
	tool_measuring_magnetic_fields_references:
		'Folheto SI do BIPM (tesla); NIST CODATA μ₀; FAQ de geomagnetismo da NOAA para a ordem do campo terrestre.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — Folheto SI (tesla)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — permeabilidade magnética do vácuo μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — FAQ de geomagnetismo',
};

export default pt;
