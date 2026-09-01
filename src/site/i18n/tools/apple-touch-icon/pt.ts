/**
 * Fragmento i18n (apple-touch-icon / pt).
 * Reescrita de busca: H1 apple-touch-icon 180×180; fica no dispositivo, sem enviar ao servidor.
 */
import type { SiteLangDict } from '../../../types';

/** Copy visível em português: ícone da tela inicial 180, ZIP opcional, fundo opaco. */
const pt: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Transforme o logo no ícone apple-touch da tela inicial: PNG opaco 180×180. Se o manifesto pedir mais, o ZIP pode trazer favicon 32 e PWA 192/512. Os arquivos ficam no dispositivo e não sobem ao servidor.',
	tool_apple_touch_icon_bg_label: 'Fundo opaco',
	tool_apple_touch_icon_choose_image: 'Escolher logo',
	tool_apple_touch_icon_clear: 'Limpar',
	tool_apple_touch_icon_desc:
		'Exporte apple-touch-icon 180×180 em PNG opaco; fica no dispositivo, sem enviar ao servidor.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180: escolha o logo, encaixe num quadrado opaco e baixe o PNG. Exemplo: ao abrir, a amostra já cabe em 180×180. Passos: escolher → manter 180 → baixar. ZIP opcional com favicon 32 e PWA 192 / 512. Os arquivos ficam no dispositivo e não são enviados ao servidor.',
	tool_apple_touch_icon_download: 'Baixar PNG',
	tool_apple_touch_icon_download_zip: 'Baixar ZIP de tamanhos',
	tool_apple_touch_icon_drop_hint: 'Solte um logo. Ele é centralizado num quadrado opaco.',
	tool_apple_touch_icon_empty: 'Escolha um logo primeiro.',
	tool_apple_touch_icon_err_decode:
		'Não foi possível ler a imagem. Tente PNG, JPEG ou um bitmap do SVG.',
	tool_apple_touch_icon_err_fflate: 'O motor ZIP não carregou. Verifique a rede e tente de novo.',
	tool_apple_touch_icon_example:
		'Carregar exemplo desenha uma marca de teste, encaixa em 180×180 opaco e libera Baixar PNG. O ZIP acrescenta 32, 192 e 512.',
	tool_apple_touch_icon_example_title: 'Exemplo',
	tool_apple_touch_icon_faq_a1:
		'32 é um favicon PNG pequeno. 192 e 512 entram no manifesto PWA. Vêm no ZIP; o padrão continua 180×180.',
	tool_apple_touch_icon_faq_a2:
		'Não. A decodificação acontece nesta aba. Nada é enviado aos nossos servidores.',
	tool_apple_touch_icon_faq_a3:
		'Sim para a tela inicial moderna: exporte apple-touch-icon.png em 180×180 antes da tag link.',
	tool_apple_touch_icon_faq_a4:
		'Ícones de início opacos (estilo precomposed) evitam o brilho do iOS sobre transparência.',
	tool_apple_touch_icon_faq_a5:
		'167 / 152 / 120 de iPads antigos podem ir no ZIP. A exportação padrão continua 180×180.',
	tool_apple_touch_icon_faq_q1: 'Para que servem 32, 192 e 512?',
	tool_apple_touch_icon_faq_q2: 'O logo sobe para a internet?',
	tool_apple_touch_icon_faq_q3: '180×180 cobre o ícone apple-touch?',
	tool_apple_touch_icon_faq_q4: 'Por que fundo opaco?',
	tool_apple_touch_icon_faq_q5: 'Ainda exporta 167 ou 152?',
	tool_apple_touch_icon_how_body:
		'Pegue o logo que deve aparecer ao adicionar o site à tela inicial, exporte o PNG opaco 180×180 e, se precisar, junte tamanhos extras no ZIP.',
	tool_apple_touch_icon_how_item_1: 'Escolha o logo para apple-touch-icon 180×180.',
	tool_apple_touch_icon_how_item_2: 'Deixe 180 marcado, salvo se quiser os chips 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'Mantenha o fundo opaco para o ícone não ficar vazado na tela inicial.',
	tool_apple_touch_icon_how_item_4: 'Baixe o PNG ou o ZIP. O exemplo já rodou na primeira pintura.',
	tool_apple_touch_icon_how_title: 'Como usar',
	tool_apple_touch_icon_load_sample: 'Carregar exemplo',
	tool_apple_touch_icon_out_size_label: 'Tamanho de saída',
	tool_apple_touch_icon_rules_body:
		'Ícone de tela inicial pede quadrado, preenchimento opaco e PNG 180 — não um pacote ICO completo.',
	tool_apple_touch_icon_rules_item_1:
		'A tela padrão é PNG 180×180. O logo cabe (sem esticar) e fica centralizado.',
	tool_apple_touch_icon_rules_item_2: 'O fundo é opaco (branco por padrão). Transparência é achatada de propósito.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 são entradas extras do ZIP, sem mudar o padrão.',
	tool_apple_touch_icon_rules_item_4: 'Sem pacote ICO e sem browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Regras que você deve esperar',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Ícone pronto — baixe ou troque o logo.',
	tool_apple_touch_icon_status_working: 'Desenhando o quadrado…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'Antes da tag link, exporte apple-touch-icon.png em 180×180 para «Adicionar à tela inicial».',
	tool_apple_touch_icon_usecase_2: 'Num PWA, tire 192 e 512 do ZIP para o manifesto.',
	tool_apple_touch_icon_usecase_3:
		'Se o navegador ainda pedir um favicon PNG 32 quadrado, use o ZIP, sem montar gerador de ICO.',
	tool_apple_touch_icon_usecases_title: 'Encaixa quando',
};

export default pt;
