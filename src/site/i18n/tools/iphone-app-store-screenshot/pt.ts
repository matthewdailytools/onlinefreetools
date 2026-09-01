/**
 * i18n tool shard (iphone-app-store-screenshot / pt).
 * H1 locked to “Tamanho de screenshot do iPhone 6.9”; 6.7 só no FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy em português para quem busca tamanho de screenshot / especificações App Store. */
const pt: SiteLangDict = {
	/** Blurb na página: exportar + privacidade. */
	tool_iphone_app_store_screenshot_article:
		'Exporte um screenshot para os pixels atuais de iPhone 6.9 na App Store e baixe um JPEG, ou um ZIP com os três tamanhos. Os arquivos ficam no dispositivo e não sobem ao servidor.',
	/** Seletor de arquivo. */
	tool_iphone_app_store_screenshot_choose_image: 'Escolher captura',
	/** Limpar. */
	tool_iphone_app_store_screenshot_clear: 'Limpar',
	/** Linha curta do card na home. */
	tool_iphone_app_store_screenshot_desc:
		'Exporte o screenshot App Store do iPhone 6.9 em 1320×2868 — fica no dispositivo, sem enviar ao servidor.',
	/** Meta: precisa de exemplo e ≥120 caracteres. */
	tool_iphone_app_store_screenshot_description:
		'Tamanho de screenshot do iPhone 6.9: escolha uma captura, preencha até 1320×2868 (ou 1290×2796 / 1260×2736) e baixe o JPEG. Exemplo: ao abrir, a amostra já é recortada no tamanho exigido de 6.9 polegadas. Os arquivos ficam no dispositivo e não sobem ao servidor. As medidas de 6.7 polegadas foram absorvidas no 6.9. Isto não é App Review.',
	/** Download JPEG. */
	tool_iphone_app_store_screenshot_download: 'Baixar JPEG',
	/** ZIP com os três. */
	tool_iphone_app_store_screenshot_download_zip: 'Baixar ZIP de todos os tamanhos',
	/** Dica de arrastar. */
	tool_iphone_app_store_screenshot_drop_hint: 'Solte um screenshot. O preenchimento pode cortar as bordas.',
	/** Estado vazio. */
	tool_iphone_app_store_screenshot_empty: 'Escolha um screenshot primeiro.',
	/** Erro de decode. */
	tool_iphone_app_store_screenshot_err_decode: 'Não deu para ler essa imagem. Tente um screenshot PNG ou JPEG.',
	/** Falha do ZIP. */
	tool_iphone_app_store_screenshot_err_fflate: 'O motor ZIP não carregou. Confira a rede e tente de novo.',
	/** Corpo do Example. */
	tool_iphone_app_store_screenshot_example:
		'Carregar exemplo desenha um retrato de amostra, preenche 1320×2868 e liga Baixar JPEG. Os outros tamanhos 6.9 são chips; o ZIP junta os três.',
	/** Título Example. */
	tool_iphone_app_store_screenshot_example_title: 'Exemplo',
	tool_iphone_app_store_screenshot_faq_a1:
		'Não. Os bytes ficam nesta aba. Nada sobe para a Apple nem para nossos servidores.',
	tool_iphone_app_store_screenshot_faq_a2:
		'A classe iPhone exigida agora é 6.9 polegadas. As listas antigas de 6.7 polegadas entram nestes três tamanhos.',
	tool_iphone_app_store_screenshot_faq_a3:
		'O padrão é 1320×2868. 1290×2796 e 1260×2736 são os outros pares 6.9 aceitos. Escolha um ou baixe um ZIP com os três.',
	tool_iphone_app_store_screenshot_faq_a4:
		'Sim. O preenchimento escala até encher o quadro e recorta o excesso. Para outro enquadramento, use a ferramenta de recorte relacionada.',
	tool_iphone_app_store_screenshot_faq_a5:
		'Tamanhos de iPad ficam fora da primeira tela. Esta página é o conjunto obrigatório do iPhone 6.9.',
	tool_iphone_app_store_screenshot_faq_q1: 'Meu screenshot é enviado?',
	tool_iphone_app_store_screenshot_faq_q2: 'Por que não o tamanho de screenshot do iPhone 6.7?',
	tool_iphone_app_store_screenshot_faq_q3: 'O que são 1320×2868, 1290×2796 e 1260×2736?',
	tool_iphone_app_store_screenshot_faq_q4: 'As bordas serão recortadas?',
	tool_iphone_app_store_screenshot_faq_q5: 'Exporta screenshots de iPad?',
	tool_iphone_app_store_screenshot_how_body:
		'Se o Connect recusou as dimensões, reexporte no tamanho 6.9 e baixe. Os outros tamanhos são chips, não outro editor.',
	tool_iphone_app_store_screenshot_how_item_1: 'Escolha o screenshot do conjunto obrigatório iPhone 6.9.',
	tool_iphone_app_store_screenshot_how_item_2: 'Deixe 1320×2868, a menos que o Connect peça outro par 6.9.',
	tool_iphone_app_store_screenshot_how_item_3: 'Baixe o JPEG ou junte os três tamanhos num ZIP.',
	tool_iphone_app_store_screenshot_how_item_4: 'Carregar exemplo já rodou na abertura para você ver o recorte na hora.',
	tool_iphone_app_store_screenshot_how_title: 'Como funciona',
	tool_iphone_app_store_screenshot_load_sample: 'Carregar exemplo',
	tool_iphone_app_store_screenshot_out_size_label: 'Tamanho de saída',
	tool_iphone_app_store_screenshot_quality_label: 'Qualidade JPEG',
	tool_iphone_app_store_screenshot_rules_body:
		'Exportar screenshot da App Store pede pixels exatos, preenchimento e um aviso claro de 6.7 para 6.9.',
	tool_iphone_app_store_screenshot_rules_item_1:
		'A tela padrão é 1320×2868. Os outros pares 6.9 aceitos são 1290×2796 e 1260×2736.',
	tool_iphone_app_store_screenshot_rules_item_2: 'Preenchimento (sem faixas vazias). O excesso é recortado.',
	tool_iphone_app_store_screenshot_rules_item_3: 'Quem busca 6.7 polegadas acha a resposta nas perguntas; não há outra ficha.',
	tool_iphone_app_store_screenshot_rules_item_4: 'Isto não é App Review. A Apple ainda pode recusar enquadramento, texto ou a moldura do aparelho.',
	tool_iphone_app_store_screenshot_rules_title: 'Regras que você deve esperar',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'Screenshot pronto — baixe ou troque a imagem.',
	tool_iphone_app_store_screenshot_status_working: 'Preenchendo…',
	/** H1 travado no 03-locale-briefs. */
	tool_iphone_app_store_screenshot_title: 'Tamanho de screenshot do iPhone 6.9',
	tool_iphone_app_store_screenshot_usecase_1: 'Antes do Connect: exporte o screenshot obrigatório de 6.9 polegadas.',
	tool_iphone_app_store_screenshot_usecase_2: 'Erro de dimensões: reexporte em 1320×2868 em vez de um 6.7 antigo.',
	tool_iphone_app_store_screenshot_usecase_3: 'Empacote os três pares 6.9 num ZIP para quem sobe depois.',
	tool_iphone_app_store_screenshot_usecases_title: 'Quando combina',
};

export default pt;
