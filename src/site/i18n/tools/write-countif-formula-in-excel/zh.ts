/**
 * write-countif-formula-in-excel 简体中文 i18n 分片：COUNTIF 公式生成、通配符与空白单元格预览。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文站点文案字典（COUNTIF 公式工具） */
const zh: SiteLangDict = {
	tool_write_countif_formula_in_excel_title: '写出 Excel COUNTIF 公式 — 按条件计数与通配符匹配',
	tool_write_countif_formula_in_excel_description:
		'输入 A1 区域和一条条件，一键生成可复制的 COUNTIF 公式。示例：A2:A6 与 West → =COUNTIF(A2:A6,"West")；支持通配符 *、?，以及 >10、空白单元格 "" 等写法。样表预览匹配个数，处理在浏览器内完成，不上传服务器。',
	tool_write_countif_formula_in_excel_article:
		'填一个 A1 区域和一条条件，得到完整 COUNTIF 公式（文本、数字、比较符或通配符），并在样表上看有多少单元格符合条件，再粘贴到 Excel 核对。',
	tool_write_countif_formula_in_excel_desc:
		'输入区域与条件，复制完整 COUNTIF 公式；支持通配符、比较符与空白单元格统计。',

	tool_write_countif_formula_in_excel_range: '区域',
	tool_write_countif_formula_in_excel_range_ph: '例如 A2:A6',
	tool_write_countif_formula_in_excel_criteria: '条件',
	tool_write_countif_formula_in_excel_crit_ph: '例如 West、*west* 或 >10',
	tool_write_countif_formula_in_excel_hint:
		'区域用 A1 写法。星号 * 匹配任意连续字符，问号 ? 匹配单个字符；>10 等比较符会在公式里加引号。统计空白单元格时条件填 ""（两个双引号）。',
	tool_write_countif_formula_in_excel_chips_label: '常用条件',
	tool_write_countif_formula_in_excel_write: '写出公式',
	tool_write_countif_formula_in_excel_sample: '加载样例',
	tool_write_countif_formula_in_excel_copy: '复制',
	tool_write_countif_formula_in_excel_clear: '清空',
	tool_write_countif_formula_in_excel_formula: '公式',
	tool_write_countif_formula_in_excel_preview_title: '样表匹配预览',
	tool_write_countif_formula_in_excel_col_cell: '单元格',
	tool_write_countif_formula_in_excel_col_value: '值',
	tool_write_countif_formula_in_excel_steps_title: '步骤',
	tool_write_countif_formula_in_excel_empty: '请先输入区域和条件，或点「加载样例」。',
	tool_write_countif_formula_in_excel_err_range: '请使用 A1 区域，例如 A2:A6 或 $B$2:$B$10。',
	tool_write_countif_formula_in_excel_copied: '公式已复制。',
	tool_write_countif_formula_in_excel_row_count: '匹配个数',
	tool_write_countif_formula_in_excel_row_quoted: '公式中的条件字面量',
	tool_write_countif_formula_in_excel_row_match_tpl: '样表中有 {n} / {total} 个单元格匹配。',
	tool_write_countif_formula_in_excel_step_range_tpl: '区域：{r}',
	tool_write_countif_formula_in_excel_step_crit_tpl: '条件：{c}',
	tool_write_countif_formula_in_excel_step_lit_tpl: '写入公式的字面量：{lit}',
	tool_write_countif_formula_in_excel_step_out_tpl: '结果：{f}',
	tool_write_countif_formula_in_excel_result_note:
		'预览为浏览器内的简化匹配，便于理解规则。请把公式粘贴到 Excel 或 Google 表格，用真实数据核对。部分语言版 Excel 用分号 ; 代替逗号作参数分隔符。',
	tool_write_countif_formula_in_excel_chip_eq: '等于 West',
	tool_write_countif_formula_in_excel_chip_contains: '包含 west（*west*）',
	tool_write_countif_formula_in_excel_chip_gt: '大于 10',
	tool_write_countif_formula_in_excel_chip_blank: '空白单元格',
	tool_write_countif_formula_in_excel_header_region: '区域',
	tool_write_countif_formula_in_excel_header_qty: '数量',
	tool_write_countif_formula_in_excel_ref_ms_label: 'Microsoft：COUNTIF 函数',

	tool_write_countif_formula_in_excel_how_title: '怎么写 COUNTIF 公式',
	tool_write_countif_formula_in_excel_how_body:
		'输入 A1 区域和一条条件，点「写出公式」，再复制到 Excel。加载样例会轮换等于、包含、大于和空白单元格示例，并显示实时匹配数。',
	tool_write_countif_formula_in_excel_how_item_1: '填写 A1 区域，如 A2:A6（绝对引用 $A$2:$A$6 也可以）。',
	tool_write_countif_formula_in_excel_how_item_2:
		'填写一条条件：纯文本（West）、通配符（*west*）、比较符（>10），或留空表示统计空白单元格。',
	tool_write_countif_formula_in_excel_how_item_3: '点「写出公式」生成 =COUNTIF(区域,条件)，并高亮样表中匹配的单元格。',
	tool_write_countif_formula_in_excel_how_item_4: '复制公式到 Excel，对照工作表中已知区域验证结果。',

	tool_write_countif_formula_in_excel_why_choose_title: '为什么用这个 COUNTIF 公式助手',
	tool_write_countif_formula_in_excel_why_choose_item_1:
		'直接给出可粘贴的 =COUNTIF(...)，文本、比较符和空白 "" 的引号写法已处理好。',
	tool_write_countif_formula_in_excel_why_choose_item_2:
		'支持 Excel 式通配符：* 任意序列、? 单字符，~ 可转义字面量 * 或 ?。',
	tool_write_countif_formula_in_excel_why_choose_item_3: '样表高亮匹配单元格，粘贴前就能看到匹配个数。',
	tool_write_countif_formula_in_excel_why_choose_item_4: '一键切换等于、包含 *west*、大于和空白单元格等常见条件。',
	tool_write_countif_formula_in_excel_why_choose_item_5:
		'边界清晰：只做单条件 COUNTIF；多区域多条件请用 COUNTIFS。',

	tool_write_countif_formula_in_excel_rules_title: 'COUNTIF 规则与引号',
	tool_write_countif_formula_in_excel_rules_body: 'COUNTIF 在单个区域内按一条条件计数。引号与通配符遵循 Excel 惯例。',
	tool_write_countif_formula_in_excel_rules_item_1: '语法：=COUNTIF(区域, 条件)。例：=COUNTIF(A2:A6,"West")。',
	tool_write_countif_formula_in_excel_rules_item_2: '* 匹配任意字符序列，? 匹配一个字符；字面量 * 或 ? 前加 ~。',
	tool_write_countif_formula_in_excel_rules_item_3: '纯数字可不加引号（10）；含比较符的文本须加引号（">10"、"<>0"）。',
	tool_write_countif_formula_in_excel_rules_item_4: '空白单元格：条件为 ""；非空白：条件为 "<>"。',
	tool_write_countif_formula_in_excel_rules_item_5:
		'多条件或多区域用 COUNTIFS。本页只生成单条件 COUNTIF。部分 Excel 区域设置用 ; 分隔参数。',

	tool_write_countif_formula_in_excel_example_title: '算例',
	tool_write_countif_formula_in_excel_example:
		'加载样例从 A2:A6 与 West 开始 → =COUNTIF(A2:A6,"West")，样表区域列出现 3 处匹配。接着 *west*（包含）→ =COUNTIF(A2:A6,"*west*")；再 B2:B6 与 >10 → =COUNTIF(B2:B6,">10")。空白样例用 "" 统计空单元格。任一条公式粘贴到 Excel 后请用真实表核对。',

	tool_write_countif_formula_in_excel_usecases_title: '什么时候用 COUNTIF',
	tool_write_countif_formula_in_excel_usecase_1: '考勤或状态列：统计等于「出勤」「缺勤」或区域名 West 的行数。',
	tool_write_countif_formula_in_excel_usecase_2: '库存阈值：用 >10、>=100 等条件统计超过某数量的单元格。',
	tool_write_countif_formula_in_excel_usecase_3: '模糊文本：用 *west* 统计包含片段的单元格，或用 West* 统计以某词开头。',
	tool_write_countif_formula_in_excel_usecase_4: '数据清洗：填充前先对某列用 "" 统计空白单元格个数。',

	tool_write_countif_formula_in_excel_faq_q1: 'Excel 里 COUNTIF 公式怎么写？',
	tool_write_countif_formula_in_excel_faq_a1:
		'写法是 =COUNTIF(区域, 条件)。区域用 A1 形式（如 A2:A6），条件填一条规则。本页生成完整公式并显示样表匹配数，便于复制后验证。',
	tool_write_countif_formula_in_excel_faq_q2: 'COUNTIF 通配符怎么用（类似 LIKE）？',
	tool_write_countif_formula_in_excel_faq_a2:
		'* 表示任意长度字符，? 表示恰好一个字符。例："*west*" 可匹配 West、Midwest 等。若要把 * 或 ? 当普通字符，前面加 ~。',
	tool_write_countif_formula_in_excel_faq_q3: '什么时候该用 COUNTIFS？',
	tool_write_countif_formula_in_excel_faq_a3:
		'当两个及以上区域或条件必须同时成立时用 COUNTIFS（例如区域=West 且数量>10）。本页只生成单条件 COUNTIF。',
	tool_write_countif_formula_in_excel_faq_q4: '数字和比较符要不要加引号？',
	tool_write_countif_formula_in_excel_faq_a4: '纯数字如 10 可不加引号；含 >、<、<> 的条件须加引号，如 ">10"、"<>0"。文本条件一律加引号。',
	tool_write_countif_formula_in_excel_faq_q5: '怎样用 COUNTIF 统计空白单元格？',
	tool_write_countif_formula_in_excel_faq_a5:
		'条件写 ""（两个双引号），如 =COUNTIF(A2:A6,"")。统计非空白用 "<>"。可点「空白单元格」芯片加载样例。',
	tool_write_countif_formula_in_excel_faq_q6: '我输入的内容会上传吗？',
	tool_write_countif_formula_in_excel_faq_a6:
		'不会。公式在浏览器里生成，您输入的内容不上传服务器。粘贴到 Excel 后仍请用真实工作表核对。',
	tool_write_countif_formula_in_excel_faq_q7: '为什么我的 Excel 用分号而不是逗号？',
	tool_write_countif_formula_in_excel_faq_a7:
		'许多非英语 Excel 用 ; 作列表分隔符。复制后可将 =COUNTIF(A2:A6,"West") 改为 =COUNTIF(A2:A6;"West")（若您的版本要求分号）。',

	tool_write_countif_formula_in_excel_add: '添加行',
	tool_write_countif_formula_in_excel_alt: '若 #N/A 则',
	tool_write_countif_formula_in_excel_bar: '条形图',
	tool_write_countif_formula_in_excel_buyer: '买方',
	tool_write_countif_formula_in_excel_cell: '单元格',
	tool_write_countif_formula_in_excel_count: '计数',
	tool_write_countif_formula_in_excel_csv: '粘贴 CSV',
	tool_write_countif_formula_in_excel_download: '下载 xlsx',
	tool_write_countif_formula_in_excel_draw: '绘制',
	tool_write_countif_formula_in_excel_else: '否则',
	tool_write_countif_formula_in_excel_err_read: '无法读取该文件，请尝试 xlsx、xls 或 csv。',
	tool_write_countif_formula_in_excel_file: '电子表格文件',
	tool_write_countif_formula_in_excel_filter: '筛选',
	tool_write_countif_formula_in_excel_inner: '内层公式',
	tool_write_countif_formula_in_excel_line: '行',
	tool_write_countif_formula_in_excel_lines: 'desc,qty,price',
	tool_write_countif_formula_in_excel_need_lib: '表格库加载失败，请检查网络后刷新。',
	tool_write_countif_formula_in_excel_note_2016: 'IFS 需要 Excel 2019、Microsoft 365 或更高版本。',
	tool_write_countif_formula_in_excel_op_blank: '为空',
	tool_write_countif_formula_in_excel_op_contains: '包含',
	tool_write_countif_formula_in_excel_op_eq: '等于',
	tool_write_countif_formula_in_excel_row_field: '行字段',
	tool_write_countif_formula_in_excel_seller: '卖方',
	tool_write_countif_formula_in_excel_sheet: '工作表',
	tool_write_countif_formula_in_excel_sum: '求和',
	tool_write_countif_formula_in_excel_tax: '税率 %',
	tool_write_countif_formula_in_excel_trial: '试算值',
	tool_write_countif_formula_in_excel_val_field: '值字段',
};

export default zh;
