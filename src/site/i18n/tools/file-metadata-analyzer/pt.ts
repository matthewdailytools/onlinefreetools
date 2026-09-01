/**
 * i18n tool shard (file-metadata-analyzer / pt).
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语文案键表。 */
const pt: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Analisando…',
	tool_file_metadata_analyzer_article:
		'Arraste ou escolha um arquivo local para ver nome, tamanho, MIME e modificação. Imagens mostram largura×altura; áudio/vídeo mostram duração quando decodificável. Dicas magic-byte. Sem enviar ao servidor; ficam no dispositivo.',
	tool_file_metadata_analyzer_choose_file: 'Escolher arquivo',
	tool_file_metadata_analyzer_clear: 'Limpar',
	tool_file_metadata_analyzer_decode_fail: 'Não foi possível decodificar campos extras — info básica permanece.',
	tool_file_metadata_analyzer_desc:
		'Inspecione metadados locais — tamanho, tipo, dimensões, duração. Sem enviar ao servidor; no dispositivo.',
	tool_file_metadata_analyzer_description:
		'Analisador de metadados: solte ou escolha um arquivo para ler nome, bytes, MIME e modificação. Imagens → dimensões; áudio/vídeo → duração. Magic-byte: PNG, JPEG, GIF, WebP, PDF, ZIP, MP4. Exemplo: PNG 16×16 ao abrir. EXIF profundo → ferramenta EXIF. Sem enviar ao servidor.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'Ou solte um arquivo aqui. Análise nesta aba.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Escolha ou solte um arquivo primeiro.',
	tool_file_metadata_analyzer_example:
		'Carregar exemplo cria PNG 16×16 sample-icon.png na memória. Tabela com ~100+ bytes, image/png, 16×16 px e dica PNG — sem upload.',
	tool_file_metadata_analyzer_example_title: 'Exemplo',
	tool_file_metadata_analyzer_faq_a1: 'Não. O arquivo é lido com File API nesta aba. Nada vai aos nossos servidores.',
	tool_file_metadata_analyzer_faq_a2:
		'Esta página mostra básicos do contêiner + dimensões/duração quando possível. EXIF lê/remove tags de câmera — use para GPS/obturador.',
	tool_file_metadata_analyzer_faq_a3: 'file.type pode ficar vazio. Tamanho e nome ainda aparecem; magic-byte pode sugerir tipo.',
	tool_file_metadata_analyzer_faq_a4: 'Alguns codecs falham. Campos File API permanecem; linha de nota explica.',
	tool_file_metadata_analyzer_faq_a5: 'Lemos ~12 bytes iniciais (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4). É dica, não base completa.',
	tool_file_metadata_analyzer_faq_q1: 'Meu arquivo é enviado?',
	tool_file_metadata_analyzer_faq_q2: 'Diferença da ferramenta EXIF?',
	tool_file_metadata_analyzer_faq_q3: 'Por que MIME vazio?',
	tool_file_metadata_analyzer_faq_q4: 'Por que faltam dimensões ou duração?',
	tool_file_metadata_analyzer_faq_q5: 'O que são dicas magic-byte?',
	tool_file_metadata_analyzer_field_decode_note: 'Nota de decodificação',
	tool_file_metadata_analyzer_field_dimensions: 'Dimensões',
	tool_file_metadata_analyzer_field_duration: 'Duração',
	tool_file_metadata_analyzer_field_magic: 'Dica magic-byte',
	tool_file_metadata_analyzer_field_modified: 'Última modificação',
	tool_file_metadata_analyzer_field_name: 'Nome do arquivo',
	tool_file_metadata_analyzer_field_size: 'Tamanho (bytes)',
	tool_file_metadata_analyzer_field_size_human: 'Tamanho (legível)',
	tool_file_metadata_analyzer_field_type: 'MIME / tipo',
	tool_file_metadata_analyzer_how_body: 'Escolha um arquivo local. Listamos File e aprofundamos imagens/mídia quando decodificável.',
	tool_file_metadata_analyzer_how_item_1: 'Solte um arquivo ou clique Escolher arquivo.',
	tool_file_metadata_analyzer_how_item_2: 'Veja nome, bytes, tamanho legível, MIME e modificação.',
	tool_file_metadata_analyzer_how_item_3: 'Imagens: largura×altura; áudio/vídeo: duração.',
	tool_file_metadata_analyzer_how_item_4: 'Carregar exemplo ou Limpar para reiniciar.',
	tool_file_metadata_analyzer_how_title: 'Como funciona',
	tool_file_metadata_analyzer_load_sample: 'Carregar exemplo',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'Resultados de metadados',
	tool_file_metadata_analyzer_rules_body: 'Origem dos campos e limites deste analisador.',
	tool_file_metadata_analyzer_rules_item_1: 'Nome, tamanho, tipo e lastModified vêm do objeto File.',
	tool_file_metadata_analyzer_rules_item_2: 'Dimensões via createImageBitmap ou Image — mesma aba.',
	tool_file_metadata_analyzer_rules_item_3: 'Duração via elemento media; codecs exóticos podem falhar.',
	tool_file_metadata_analyzer_rules_item_4: 'Magic-byte é superficial — não substitui hash ou EXIF profundo.',
	tool_file_metadata_analyzer_rules_title: 'Regras esperadas',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Análise concluída.',
	tool_file_metadata_analyzer_title: 'analisador de metadados de arquivos',
	tool_file_metadata_analyzer_usecase_1: 'Confirme 1920×1080 antes de enviar a um CMS.',
	tool_file_metadata_analyzer_usecase_2: 'Veja duração de memo de voz sem app de desktop.',
	tool_file_metadata_analyzer_usecase_3: 'Compare MIME com magic-byte se a extensão parecer estranha.',
	tool_file_metadata_analyzer_usecases_title: 'Bons casos',
	tool_file_metadata_analyzer_waiting: 'Escolha um arquivo ou carregue o exemplo.',
};

export default pt;
