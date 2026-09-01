/**
 * i18n tool shard (svg-optimizer / pt).
 * H1: otimizador de SVG.
 */
import type { SiteLangDict } from '../../../types';

/** Textos em português. */
const pt: SiteLangDict = {
	tool_svg_optimizer_article:
		'Cole ou solte SVG, ligue opções de limpeza e veja bytes economizados com pré-visualização. Inspirado no SVGOMG; tudo no navegador — fica no dispositivo, sem enviar ao servidor.',
	tool_svg_optimizer_choose_file: 'Escolher arquivo SVG',
	tool_svg_optimizer_clear: 'Limpar',
	tool_svg_optimizer_copy: 'Copiar',
	tool_svg_optimizer_desc:
		'Otimize SVG no navegador com bytes e pré-visualização; sem enviar ao servidor.',
	tool_svg_optimizer_description:
		'Otimizador de SVG: cole ou arraste SVG, escolha opções de limpeza e compare bytes original vs otimizado com pré-visualização. Exemplo: um ícone de amostra carrega na abertura e mostra economia ao remover comentários e metadados de editor. Copie ou baixe o resultado. Fica no dispositivo e não é enviado ao servidor. Passagem leve no navegador, não SVGO completo.',
	tool_svg_optimizer_download: 'Baixar',
	tool_svg_optimizer_drop_hint: 'Ou solte um .svg aqui. A otimização fica nesta aba.',
	tool_svg_optimizer_empty: 'Cole SVG ou escolha um arquivo primeiro.',
	tool_svg_optimizer_err_not_svg: 'Não parece SVG. Cole markup com elemento raiz <svg>.',
	tool_svg_optimizer_example:
		'Carregar exemplo insere ícone com comentários XML, ruído Inkscape e espaços extras. Com todas as opções os bytes caem e a pré-visualização permanece igual.',
	tool_svg_optimizer_example_title: 'Exemplo',
	tool_svg_optimizer_faq_a1:
		'Não. O SVG é lido e otimizado nesta aba. Nada é enviado aos nossos servidores.',
	tool_svg_optimizer_faq_a2:
		'Pipeline leve (comentários, metadados, espaços, arredondamento, grupos vazios). SVGO completo tem mais plugins — use quando precisar dessa profundidade.',
	tool_svg_optimizer_faq_a3:
		'Remover comentários tira <!-- … -->. Metadados de editor remove xmlns/atributos Inkscape/Sketch e <metadata>. Colapsar espaços une tags. Arredondar números deixa duas casas em paths. Grupos vazios remove <g></g> órfãos.',
	tool_svg_optimizer_faq_a4:
		'A pré-visualização mostra o SVG otimizado como imagem nesta aba; não injeta markup no DOM da página.',
	tool_svg_optimizer_faq_q1: 'Meu SVG é enviado?',
	tool_svg_optimizer_faq_q2: 'Como difere de SVGO ou SVGOMG?',
	tool_svg_optimizer_faq_q3: 'O que fazem as opções?',
	tool_svg_optimizer_faq_q4: 'A pré-visualização é segura?',
	tool_svg_optimizer_how_body:
		'Cole ou solte SVG, ajuste chips de limpeza, veja bytes e pré-visualização, depois copie ou baixe. Tudo local no navegador.',
	tool_svg_optimizer_how_item_1: 'Cole markup SVG ou solte arquivo .svg.',
	tool_svg_optimizer_how_item_2: 'Opções: comentários, metadados, espaços, decimais, grupos vazios.',
	tool_svg_optimizer_how_item_3: 'Leia bytes original, otimizado e percentual economizado.',
	tool_svg_optimizer_how_item_4: 'Confirme a pré-visualização e copie ou baixe optimized.svg.',
	tool_svg_optimizer_how_title: 'Como funciona',
	tool_svg_optimizer_input_label: 'Entrada SVG',
	tool_svg_optimizer_input_ph: 'Cole <svg>…</svg> aqui…',
	tool_svg_optimizer_load_sample: 'Carregar exemplo',
	tool_svg_optimizer_opt_collapse_whitespace: 'Colapsar espaços entre tags',
	tool_svg_optimizer_opt_round_numbers: 'Arredondar números do path a 2 decimais',
	tool_svg_optimizer_opt_strip_comments: 'Remover comentários XML/HTML',
	tool_svg_optimizer_opt_strip_empty: 'Remover <g> vazios e espaços em atributos',
	tool_svg_optimizer_opt_strip_metadata: 'Remover metadados de editor (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Otimizar',
	tool_svg_optimizer_options_label: 'Opções',
	tool_svg_optimizer_output_label: 'SVG otimizado',
	tool_svg_optimizer_preview_label: 'Pré-visualização',
	tool_svg_optimizer_rules_body:
		'Limpeza SVG no navegador troca completude por feedback instantâneo. Revise antes de publicar.',
	tool_svg_optimizer_rules_item_1:
		'Comentários e xmlns de editor costumam ser seguros de remover em ícones de produção.',
	tool_svg_optimizer_rules_item_2:
		'Arredondar coordenadas encolhe paths mas pode mover traços — confira a pré-visualização.',
	tool_svg_optimizer_rules_item_3:
		'Remover grupos vazios ajuda exportes Sketch/Figma; grupos com id/transform permanecem.',
	tool_svg_optimizer_rules_item_4:
		'Precisa comprimir raster também? Use o otimizador de imagens para PNG/WebP.',
	tool_svg_optimizer_rules_title: 'Regras esperadas',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'Otimizado',
	tool_svg_optimizer_size_original: 'Original',
	tool_svg_optimizer_size_saved: 'Economia',
	tool_svg_optimizer_stats_tpl: 'Original {orig} B → Otimizado {opt} B ({pct}% a menos)',
	tool_svg_optimizer_status_copied: 'Copiado para a área de transferência.',
	tool_svg_optimizer_status_done: 'Otimizado — confira bytes e pré-visualização.',
	tool_svg_optimizer_title: 'Otimizador de SVG',
	tool_svg_optimizer_usecase_1: 'Encolher ícone exportado do Sketch antes de commitar no repo.',
	tool_svg_optimizer_usecase_2: 'Limpar SVG inline em landing e ver economia sem instalar SVGO.',
	tool_svg_optimizer_usecase_3: 'Tirar comentários de handoff de design mantendo a pré-visualização.',
	tool_svg_optimizer_usecases_title: 'Boas situações',
};

export default pt;
