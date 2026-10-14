/**
 * i18n tool shard (image-to-base64 / pt).
 * Imagem para Base64 / Base64 para imagem; abas Codificar e Decodificar; HUD de progresso.
 * Edite apenas as chaves desta ferramenta; o conjunto de chaves segue en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Dicionário de textos em português (Brasil) para image-to-base64. */
const pt: SiteLangDict = {
	tool_image_to_base64_title: 'Imagem para Base64 — codificar e decodificar localmente',
	tool_image_to_base64_desc:
		'Transforme imagem em Base64 ou data URL e Base64 em imagem de novo; o arquivo fica no dispositivo, sem enviar ao servidor.',
	tool_image_to_base64_description:
		'Converta imagem para Base64 (data URL) ou Base64 para imagem no navegador, sem enviar ao servidor. Passos: escolha a imagem, clique em Codificar e depois em Copiar ou Baixar; ou cole o Base64 e clique em Decodificar. Exemplo: PNG de amostra → data:image/png;base64,….',
	tool_image_to_base64_mode_label: 'Modo',
	tool_image_to_base64_tab_encode: 'Codificar',
	tool_image_to_base64_tab_decode: 'Decodificar',
	tool_image_to_base64_choose_file: 'Escolher imagem',
	tool_image_to_base64_drop_hint: 'Ou arraste um JPEG, PNG, WebP ou GIF para cá. O processamento acontece nesta aba.',
	tool_image_to_base64_encode: 'Codificar',
	tool_image_to_base64_decode_btn: 'Decodificar',
	tool_image_to_base64_copy: 'Copiar',
	tool_image_to_base64_copy_done: 'Copiado',
	tool_image_to_base64_download: 'Baixar',
	tool_image_to_base64_sample: 'Carregar exemplo',
	tool_image_to_base64_clear: 'Limpar',
	tool_image_to_base64_advanced: 'Configurações avançadas (opcional)',
	tool_image_to_base64_strip_prefix: 'Remover o prefixo data: (só o Base64)',
	tool_image_to_base64_strip_hint:
		'Desligado (padrão), mantém data:image/…;base64, para você colar direto no HTML. Ligado, copia apenas o corpo em Base64.',
	tool_image_to_base64_decode_mime_label: 'MIME padrão para Base64 sem prefixo',
	tool_image_to_base64_decode_mime_hint:
		'Usado só quando o texto colado não começa com data:. Uma data URL mantém o próprio MIME.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'Cole data:image/…;base64,… ou o Base64 puro',
	tool_image_to_base64_output_label: 'Saída',
	tool_image_to_base64_preview_label: 'Prévia',
	tool_image_to_base64_progress: 'Processando…',
	tool_image_to_base64_step_read: 'Ler arquivo',
	tool_image_to_base64_step_encode: 'Codificar',
	tool_image_to_base64_step_ready: 'Pronto',
	tool_image_to_base64_read_step: 'Lendo o arquivo…',
	tool_image_to_base64_encode_step: 'Montando a data URL…',
	tool_image_to_base64_ready_step: 'Saída pronta',
	tool_image_to_base64_decode_step_parse: 'Analisar',
	tool_image_to_base64_decode_step_blob: 'Montar imagem',
	tool_image_to_base64_decode_step_ready: 'Pronto',
	tool_image_to_base64_parse_step: 'Analisando o Base64…',
	tool_image_to_base64_blob_step: 'Remontando a imagem…',
	tool_image_to_base64_elapsed: 'Tempo decorrido: {s} s',
	tool_image_to_base64_empty: 'Escolha uma imagem primeiro.',
	tool_image_to_base64_empty_decode: 'Cole uma data URL ou um texto Base64 primeiro.',
	tool_image_to_base64_err_decode:
		'Não foi possível decodificar. Verifique se o texto é uma data URL de imagem ou um Base64 válido.',
	tool_image_to_base64_err_encode: 'Não foi possível codificar o arquivo. Tente JPEG, PNG ou WebP.',
	tool_image_to_base64_err_invalid: 'Base64 ou data URL inválido.',
	tool_image_to_base64_warn_large: 'Entrada grande (acima de 25 MB) — pode ficar lento ou usar muita memória.',
	tool_image_to_base64_status_working: 'Processando…',
	tool_image_to_base64_status_done: 'Pronto — copie o texto ou clique em Baixar.',
	tool_image_to_base64_status_decoded: 'Pronto — a prévia apareceu; clique em Baixar para salvar a imagem.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} caracteres · {bytes}',
	tool_image_to_base64_how_title: 'Como converter imagem para Base64',
	tool_image_to_base64_how_body:
		'Na aba Codificar, a imagem é lida no próprio navegador e vira uma data URL. Na aba Decodificar, você cola uma data URL completa ou Base64 puro (o MIME padrão vem das configurações avançadas) e recebe a imagem de volta. O arquivo fica no dispositivo, sem enviar ao servidor.',
	tool_image_to_base64_how_item_1: 'Com a aba Codificar aberta, escolha uma imagem (ou arraste) e clique em Codificar.',
	tool_image_to_base64_how_item_2:
		'Se precisar do Base64 puro, abra as configurações avançadas e ligue “Remover o prefixo data:”.',
	tool_image_to_base64_how_item_3:
		'Clique em Copiar para levar o texto à área de transferência, ou em Baixar para salvar a imagem original.',
	tool_image_to_base64_how_item_4:
		'Para converter Base64 para imagem, passe para Decodificar, cole a data URL ou o Base64, clique em Decodificar e baixe a imagem recuperada.',
	tool_image_to_base64_why_choose_title: 'Por que usar este conversor de imagem para Base64',
	tool_image_to_base64_why_choose_item_1:
		'A prévia mostra a imagem depois de codificar ou decodificar, então você confere o resultado e não só um texto enorme.',
	tool_image_to_base64_why_choose_item_2:
		'Imagem para Base64 e Base64 para imagem ficam na mesma tela; basta trocar de aba.',
	tool_image_to_base64_why_choose_item_3:
		'Uma opção remove o prefixo data: quando o campo da API aceita apenas o Base64 puro.',
	tool_image_to_base64_why_choose_item_4:
		'Há um aviso para entradas acima de ~25 MB, que podem pesar na memória do navegador.',
	tool_image_to_base64_why_choose_item_5:
		'Tudo roda nesta aba: o arquivo fica no dispositivo, sem enviar ao servidor.',
	tool_image_to_base64_rules_title: 'Regras esperadas',
	tool_image_to_base64_rules_body:
		'Codificar transforma o arquivo, do jeito que ele é, em uma data URL. Decodificar remonta os bytes da imagem a partir do texto para que você possa baixá-la.',
	tool_image_to_base64_rules_item_1:
		'A saída padrão é uma data URL completa (data:image/…;base64,…), pronta para o src de um <img> no HTML.',
	tool_image_to_base64_rules_item_2:
		'Remover o prefixo apaga tudo antes da primeira vírgula — útil para APIs que só aceitam Base64 puro.',
	tool_image_to_base64_rules_item_3:
		'Base64 sem prefixo é tratado com o MIME padrão das configurações avançadas (image/png, se você não mudar).',
	tool_image_to_base64_rules_item_4:
		'Caracteres fora do alfabeto Base64 ou texto cortado geram erro; nada é enviado ao servidor.',
	tool_image_to_base64_rules_item_5:
		'GIFs animados são codificados como arquivo inteiro; esta página não edita quadros.',
	tool_image_to_base64_example_title: 'Exemplo',
	tool_image_to_base64_example:
		'Carregar exemplo gera um PNG de 320×200 com a palavra “Base64”, roda a codificação e preenche a saída com data:image/png;base64,…. Cole esse texto em um <img src="…"> no HTML. Depois vá para Decodificar, cole o mesmo texto, clique em Decodificar e baixe decoded.png.',
	tool_image_to_base64_usecases_title: 'Quando usar',
	tool_image_to_base64_usecase_1:
		'Embutir um ícone ou logotipo pequeno no HTML ou no CSS, sem uma requisição de imagem separada.',
	tool_image_to_base64_usecase_2:
		'Depurar um e-mail ou um Markdown que já traz a imagem em data URL.',
	tool_image_to_base64_usecase_3:
		'Recuperar a imagem de prévia que veio em Base64 na resposta de uma API.',
	tool_image_to_base64_usecase_4:
		'Entregar só o corpo em Base64 para um campo de formulário que recusa o prefixo data:.',
	tool_image_to_base64_faq_q1: 'Minhas imagens são enviadas para algum servidor?',
	tool_image_to_base64_faq_a1:
		'Não. A leitura e a decodificação acontecem na aba do navegador; o arquivo fica no dispositivo, sem enviar ao servidor.',
	tool_image_to_base64_faq_q2: 'Data URL ou Base64 puro: qual a diferença?',
	tool_image_to_base64_faq_a2:
		'A data URL traz data:image/png;base64, antes do conteúdo e funciona direto no HTML. O Base64 puro é só o conteúdo; para copiar nesse formato, ligue “Remover o prefixo data:” nas configurações avançadas.',
	tool_image_to_base64_faq_q3: 'Dá para converter arquivos muito grandes?',
	tool_image_to_base64_faq_a3:
		'Dá, mas gasta bastante memória: o Base64 fica cerca de 33% maior que o arquivo. Acima de uns 25 MB, comprima ou redimensione a imagem antes.',
	tool_image_to_base64_faq_q4: 'Qual MIME é usado na decodificação?',
	tool_image_to_base64_faq_a4:
		'O que estiver na data URL. Se você colar Base64 puro, vale o “MIME padrão” das configurações avançadas (image/png de fábrica).',
	tool_image_to_base64_faq_q5: 'E GIF animado, funciona?',
	tool_image_to_base64_faq_a5:
		'Funciona: Codificar guarda o arquivo inteiro na data URL, com a animação. Esta página não separa nem edita os quadros.',
	tool_image_to_base64_faq_q6: 'Qual a diferença para um conversor de formato de imagem?',
	tool_image_to_base64_faq_a6:
		'Aqui o resultado é texto (ou uma imagem recuperada a partir de texto). Para trocar PNG por JPEG ou WebP sem Base64, use o Conversor de formato de imagem.',
	tool_image_to_base64_faq_q7: 'Por que o botão Copiar está desativado ou vazio?',
	tool_image_to_base64_faq_a7:
		'Copiar depende da saída de Codificar: escolha uma imagem, clique em Codificar e depois em Copiar. Na aba Decodificar, use Baixar para salvar o arquivo de imagem.',
	tool_image_to_base64_article:
		'Imagem para Base64 no navegador: Codificar gera uma data URL; Decodificar aceita data URL ou Base64 puro com MIME padrão configurável.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — URLs de dados',
};

export default pt;
