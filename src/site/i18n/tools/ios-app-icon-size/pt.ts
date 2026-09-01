/**
 * Fragmento i18n (ios-app-icon-size / pt).
 * H1 local: «tamanho ícone app iOS»; tarefa padrão é o PNG 1024 opaco da App Store.
 */
import type { SiteLangDict } from '../../../types';

/** Textos em português: envio 1024, ZIP de escalas, fica no dispositivo. */
const pt: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Transforme o logo no PNG 1024×1024 opaco exigido pela App Store. Se precisar, o ZIP traz 180 do iPhone, 167 do iPad e 512 do Play. Os arquivos ficam no dispositivo e não sobem para um servidor.',
	tool_ios_app_icon_size_bg_label: 'Fundo opaco',
	tool_ios_app_icon_size_choose_image: 'Escolher logo',
	tool_ios_app_icon_size_clear: 'Limpar',
	tool_ios_app_icon_size_desc:
		'Exporte o tamanho ícone app iOS 1024×1024 opaco; fica no dispositivo, não sobe ao servidor.',
	tool_ios_app_icon_size_description:
		'Tamanho ícone app iOS: escolha um logo, coloque-o num quadrado opaco 1024×1024 para o App Store Connect e baixe o PNG. Exemplo: o logo de amostra já cabe em 1024×1024 na primeira pintura. Chips opcionais exportam 180, 167 e Play 512 num ZIP. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_ios_app_icon_size_download: 'Baixar PNG',
	tool_ios_app_icon_size_download_zip: 'Baixar ZIP de tamanhos',
	tool_ios_app_icon_size_drop_hint: 'Solte um logo quadrado. Ele é centrado num fundo opaco, sem máscara arredondada.',
	tool_ios_app_icon_size_empty: 'Escolha um logo primeiro.',
	tool_ios_app_icon_size_err_decode: 'Não foi possível ler essa imagem. Tente PNG ou JPEG.',
	tool_ios_app_icon_size_err_fflate: 'O motor ZIP não carregou. Verifique a rede e tente de novo.',
	tool_ios_app_icon_size_example:
		'Carregar exemplo desenha uma marca, encaixa em 1024×1024 opaco e ativa Baixar PNG. O ZIP adiciona 180, 167, Play 512 e slots menores.',
	tool_ios_app_icon_size_example_title: 'Exemplo',
	tool_ios_app_icon_size_faq_a1:
		'Não. O logo é decodificado nesta aba. Nada sobe para os nossos servidores.',
	tool_ios_app_icon_size_faq_a2:
		'O App Store Connect ainda pede PNG 1024×1024 sem transparência. Esse é o tamanho ícone app iOS padrão desta página.',
	tool_ios_app_icon_size_faq_a3:
		'O sistema aplica o squircle. Exporte o quadrado inteiro; não arredonde as pontas antes.',
	tool_ios_app_icon_size_faq_a4:
		'180 é iPhone 60 pt @3x. 167 é iPad Pro 83,5 pt @2x. São chips, não um segundo H1.',
	tool_ios_app_icon_size_faq_a5:
		'O ícone de alta resolução 512 do Play vai no ZIP. Sem XML Adaptive e sem URL de pack à parte.',
	tool_ios_app_icon_size_faq_q1: 'O meu logo é enviado?',
	tool_ios_app_icon_size_faq_q2: 'Por que 1024×1024?',
	tool_ios_app_icon_size_faq_q3: 'Devo arredondar os cantos?',
	tool_ios_app_icon_size_faq_q4: 'Para que servem 180 e 167?',
	tool_ios_app_icon_size_faq_q5: 'E o ícone do Google Play?',
	tool_ios_app_icon_size_how_body:
		'Escolha o logo da ficha, exporte o PNG 1024×1024 opaco e, se quiser, empacote escalas de iPhone, iPad e Play.',
	tool_ios_app_icon_size_how_item_1: 'Escolha o logo para o tamanho ícone app iOS — a tarefa é o PNG 1024 da loja.',
	tool_ios_app_icon_size_how_item_2: 'Deixe 1024 salvo se precisar dos chips 180 / 167 / Play 512.',
	tool_ios_app_icon_size_how_item_3: 'Mantenha o fundo opaco para o Connect não recusar transparência.',
	tool_ios_app_icon_size_how_item_4: 'Baixe o PNG ou o ZIP. O exemplo já rodou na abertura.',
	tool_ios_app_icon_size_how_title: 'Como funciona',
	tool_ios_app_icon_size_load_sample: 'Carregar exemplo',
	tool_ios_app_icon_size_out_size_label: 'Tamanho de saída',
	tool_ios_app_icon_size_rules_body:
		'Ícone de loja pede quadrado, preenchimento opaco e não misturar com apple-touch-icon de site.',
	tool_ios_app_icon_size_rules_item_1:
		'A tela padrão é PNG 1024×1024. O logo é contido e centrado, sem esticar.',
	tool_ios_app_icon_size_rules_item_2:
		'O fundo é opaco (branco por padrão). O canal alfa é achatado de propósito.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 entram no ZIP e não mudam o H1.',
	tool_ios_app_icon_size_rules_item_4:
		'Isto não é um projeto Assets.xcassets nem um pacote Adaptive Icon.',
	tool_ios_app_icon_size_rules_title: 'Regras que você deve esperar',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Ícone pronto — baixe ou troque o logo.',
	tool_ios_app_icon_size_status_working: 'Desenhando o quadrado…',
	tool_ios_app_icon_size_title: 'tamanho ícone app iOS',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: exporte o ícone 1024×1024 antes de anexar capturas.',
	tool_ios_app_icon_size_usecase_2:
		'Tela inicial do iPhone: pegue o 180 no ZIP para ver 60 pt @3x.',
	tool_ios_app_icon_size_usecase_3:
		'Ficha do Play: use o chip 512 sem abrir outra URL de pack.',
	tool_ios_app_icon_size_usecases_title: 'Encaixa bem',
};

export default pt;
