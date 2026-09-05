/**
 * Fragmento i18n (chatgpt-export-to-markdown / pt).
 * H1 local: exportar ChatGPT para Markdown.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Transforme uma exportação do ChatGPT em Markdown nesta página. Cole ou solte o JSON, obtenha turnos legíveis e, se quiser, mude para JSON ou CSV. Exportações do Claude usam o mesmo canvas. Fica no dispositivo e não sobe ao servidor.',
	tool_chatgpt_export_to_markdown_choose_file: 'Escolher arquivo',
	tool_chatgpt_export_to_markdown_clear: 'Limpar',
	tool_chatgpt_export_to_markdown_convert: 'Converter',
	tool_chatgpt_export_to_markdown_copy: 'Copiar',
	tool_chatgpt_export_to_markdown_desc:
		'Exportar ChatGPT para Markdown (chips JSON/CSV); fica no dispositivo, não sobe ao servidor.',
	tool_chatgpt_export_to_markdown_description:
		'Exportar ChatGPT para Markdown: solte ou cole um JSON de exportação, mapeie turnos usuário/assistente e baixe Markdown. Exemplo: a conversa de amostra já é Markdown ao abrir. JSON e CSV são chips de saída. chat_messages do Claude são detectados na mesma página. Os arquivos ficam no dispositivo e não sobem a um servidor. Não é contador de tokens nem sincronização na nuvem.',
	tool_chatgpt_export_to_markdown_download: 'Baixar',
	tool_chatgpt_export_to_markdown_drop_hint: 'Solte um JSON de conversations ou cole abaixo. A análise fica nesta aba.',
	tool_chatgpt_export_to_markdown_empty: 'Cole ou escolha um arquivo de exportação primeiro.',
	tool_chatgpt_export_to_markdown_err_none: 'Nenhum turno. Verifique se o JSON tem mapping, messages ou chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'Não foi possível ler esse JSON. Cole uma exportação válida do ChatGPT ou Claude.',
	tool_chatgpt_export_to_markdown_example:
		'Carregar exemplo insere um JSON mapping de dois turnos, converte para Markdown com títulos User e Assistant e ativa Copiar e Baixar.',
	tool_chatgpt_export_to_markdown_example_title: 'Exemplo',
	tool_chatgpt_export_to_markdown_faq_a1: 'Não. A exportação é lida nesta aba. Nada vai à OpenAI, Anthropic ou aos nossos servidores.',
	tool_chatgpt_export_to_markdown_faq_a2: 'O caminho principal é o export de dados do ChatGPT com árvore mapping. Arrays role/content e chat_messages do Claude também valem.',
	tool_chatgpt_export_to_markdown_faq_a3: 'Sim. O mesmo conversor interpreta os arrays chat_messages do Claude (sender + text), então uma única colagem dá conta das exportações do ChatGPT e do Claude.',
	tool_chatgpt_export_to_markdown_faq_a4: 'Nós system vazios e shells de tool sem texto são pulados. Anexos e imagens não viram arquivos.',
	tool_chatgpt_export_to_markdown_faq_a5: 'Contar tokens é outro trabalho e não entra neste conversor. Use um contador de tokens dedicado quando precisar.',
	tool_chatgpt_export_to_markdown_faq_q1: 'Meu chat é enviado?',
	tool_chatgpt_export_to_markdown_faq_q2: 'Quais formas de exportação funcionam?',
	tool_chatgpt_export_to_markdown_faq_q3: 'A exportação do Claude funciona?',
	tool_chatgpt_export_to_markdown_faq_q4: 'Quais campos são perdidos?',
	tool_chatgpt_export_to_markdown_faq_q5: 'Isto é um contador de tokens?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Formato de saída',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Exporte o chat, cole ou solte o JSON, converta para Markdown e copie ou baixe. JSON e CSV são chips do mesmo trabalho.',
	tool_chatgpt_export_to_markdown_how_item_1: 'Obtenha uma exportação de dados do ChatGPT (ou JSON do Claude) — a tarefa é exportar ChatGPT para Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Solte o arquivo ou cole o JSON na caixa.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Deixe Markdown, a menos que precise do chip JSON ou CSV.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Copie ou baixe. O exemplo já rodou na abertura.',
	tool_chatgpt_export_to_markdown_how_title: 'Como funciona',
	tool_chatgpt_export_to_markdown_input_label: 'JSON de exportação',
	tool_chatgpt_export_to_markdown_input_ph: 'Cole aqui o JSON de conversations…',
	tool_chatgpt_export_to_markdown_load_sample: 'Carregar exemplo',
	tool_chatgpt_export_to_markdown_output_label: 'Resultado',
	tool_chatgpt_export_to_markdown_role_assistant: 'Assistente',
	tool_chatgpt_export_to_markdown_role_system: 'Sistema',
	tool_chatgpt_export_to_markdown_role_tool: 'Ferramenta',
	tool_chatgpt_export_to_markdown_role_user: 'Usuário',
	tool_chatgpt_export_to_markdown_rules_body:
		'A conversão de exportações precisa de mapa de campos, Markdown padrão e privacidade clara sobre o processamento local.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'A saída padrão é Markdown com seções ## Usuário / ## Assistente e um # título opcional.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'Árvores mapping do ChatGPT, arrays planos e chat_messages do Claude são analisados numa página.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'Os chips JSON e CSV reemitem as mesmas turnos para pipelines ou planilhas.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'Os formatos mudam. Se a análise falhar, cole o JSON bruto e veja o FAQ.',
	tool_chatgpt_export_to_markdown_rules_title: 'Regras que você deve esperar',
	tool_chatgpt_export_to_markdown_status_copied: 'Copiado para a área de transferência.',
	tool_chatgpt_export_to_markdown_status_done: 'Pronto — {n} turnos ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Analisando exportação…',
	tool_chatgpt_export_to_markdown_title: 'exportar ChatGPT para Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'Arquive a exportação do ChatGPT de hoje como Markdown antes de apagar o fio.',
	tool_chatgpt_export_to_markdown_usecase_2: 'Mude para CSV quando precisar de colunas role/content numa planilha.',
	tool_chatgpt_export_to_markdown_usecase_3: 'Solte um JSON chat_messages do Claude aqui; o mesmo conversor mapeia essas turnos para Markdown.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Bons encaixes',
};

export default pt;
