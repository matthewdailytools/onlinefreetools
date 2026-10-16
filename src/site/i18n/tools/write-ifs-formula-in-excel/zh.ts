/**
 * write-ifs-formula-in-excel 简体中文 i18n 分片：按序条件写出 IFS，TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文站点文案字典（Excel IFS 公式生成） */
const zh: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: '写出 Excel IFS 公式 — 按序条件判断并用 TRUE 兜底',
	tool_write_ifs_formula_in_excel_description:
		'按从上到下的顺序填写等于、包含或空白条件，生成可粘贴的 Excel IFS 公式。示例：West → A、East → B、其余 Other → =IFS(A1="West","A",A1="East","B",TRUE,"Other")。浏览器内试算后再复制。需要 Excel 2019、Microsoft 365 或更新版本；永久版 Excel 2016 不可用。',
	tool_write_ifs_formula_in_excel_article:
		'添加有序条件，为每行设结果并用 TRUE 接住否则值，试算后再复制完整 IFS 公式。',
	tool_write_ifs_formula_in_excel_desc: '有序条件 → 带 TRUE 兜底的 IFS 公式，浏览器试算并可复制。',

	tool_write_ifs_formula_in_excel_hint:
		'条件自上而下依次判断。生成器会自动追加 TRUE,否则值 作为兜底。需要 Excel 2019、Microsoft 365 或更新版本。输出为英文函数名与逗号分隔。',
	tool_write_ifs_formula_in_excel_note_2016:
		'IFS 需要 Excel 2019、Microsoft 365 或更新版本。更旧的 Excel 请改用嵌套 IF 生成器。',
	tool_write_ifs_formula_in_excel_cell_label: '目标单元格',
	tool_write_ifs_formula_in_excel_cell_ph: '例如 A1',
	tool_write_ifs_formula_in_excel_trial_label: '试算值',
	tool_write_ifs_formula_in_excel_trial_ph: '例如 West',
	tool_write_ifs_formula_in_excel_else_label: '否则（TRUE 兜底）',
	tool_write_ifs_formula_in_excel_else_ph: '例如 Other',
	tool_write_ifs_formula_in_excel_col_op: '判断',
	tool_write_ifs_formula_in_excel_col_val: '值 / 文本',
	tool_write_ifs_formula_in_excel_col_then: '则结果',
	tool_write_ifs_formula_in_excel_op_eq: '等于',
	tool_write_ifs_formula_in_excel_op_contains: '包含',
	tool_write_ifs_formula_in_excel_op_blank: '为空',
	tool_write_ifs_formula_in_excel_add: '添加条件',
	tool_write_ifs_formula_in_excel_write: '写出公式',
	tool_write_ifs_formula_in_excel_sample: '加载样例',
	tool_write_ifs_formula_in_excel_clear: '清空',
	tool_write_ifs_formula_in_excel_copy: '复制公式',
	tool_write_ifs_formula_in_excel_copied: '已复制。',
	tool_write_ifs_formula_in_excel_formula_label: 'IFS 公式',
	tool_write_ifs_formula_in_excel_trial_result_label: '试算结果',
	tool_write_ifs_formula_in_excel_empty: '请至少添加一条条件（或加载样例），再写出公式。',
	tool_write_ifs_formula_in_excel_copy_fail: '无法复制。请选中公式后手动复制。',

	tool_write_ifs_formula_in_excel_how_title: '怎么写出 IFS 公式',
	tool_write_ifs_formula_in_excel_how_body:
		'填写目标单元格与有序条件。「写出公式」会生成带 TRUE 兜底的 IFS，并按试算值求值。复制得到英文函数名与逗号分隔的 Excel 语法。',
	tool_write_ifs_formula_in_excel_how_item_1: '设定目标单元格，并可填写试算值。',
	tool_write_ifs_formula_in_excel_how_item_2: '按判断顺序添加等于、包含或为空的条件行。',
	tool_write_ifs_formula_in_excel_how_item_3: '为每行填写「则结果」，并设置与 TRUE 配对的否则值。',
	tool_write_ifs_formula_in_excel_how_item_4: '点「写出公式」，核对试算结果后复制。若仍用 Excel 2016，请改用嵌套 IF。',

	tool_write_ifs_formula_in_excel_why_choose_title: '这个 IFS 公式生成器能帮你什么',
	tool_write_ifs_formula_in_excel_why_choose_item_1: '在一条 IFS 里按序写等于 / 包含 / 为空判断。',
	tool_write_ifs_formula_in_excel_why_choose_item_2: '自动追加 TRUE,否则值 兜底对。',
	tool_write_ifs_formula_in_excel_why_choose_item_3: '粘贴到 Excel 前可在浏览器里试算。',
	tool_write_ifs_formula_in_excel_why_choose_item_4: '样例轮换：区域、成绩与包含文本。',
	tool_write_ifs_formula_in_excel_why_choose_item_5: '明确 Excel 2016 边界，并指向嵌套 IF 页面。',

	tool_write_ifs_formula_in_excel_rules_title: '需要知道的规则',
	tool_write_ifs_formula_in_excel_rules_body: '生成器输出 IFS(条件,结果,...,TRUE,否则)。Excel 字符串内的引号会写成双引号。',
	tool_write_ifs_formula_in_excel_rules_item_1: 'Excel 字符串内的引号会写成双引号。',
	tool_write_ifs_formula_in_excel_rules_item_2: '「包含」会写出 ISNUMBER(SEARCH(...))；「为空」检测空文本。',
	tool_write_ifs_formula_in_excel_rules_item_3: '先匹配的条件生效；TRUE 兜底放在最后。',
	tool_write_ifs_formula_in_excel_rules_item_4: 'IFS 需要 Excel 2019、Microsoft 365 或更新版本——永久版 Excel 2016 不行。',
	tool_write_ifs_formula_in_excel_rules_item_5: '英文函数名与逗号分隔符，在本地化 Excel 中可能需要改写。',

	tool_write_ifs_formula_in_excel_example_title: '算例',
	tool_write_ifs_formula_in_excel_example:
		'加载样例从 West → A、East → B、否则 Other 开始 → =IFS(...,TRUE,"Other")，试算 West → A。下一次是简单成绩等于判断。最后一次用包含匹配「promo」。',

	tool_write_ifs_formula_in_excel_usecases_title: '什么时候用 IFS 公式生成器',
	tool_write_ifs_formula_in_excel_usecase_1: '把区域代码映射成标签，不必写很深的嵌套 IF 括号。',
	tool_write_ifs_formula_in_excel_usecase_2: '为 Microsoft 365 工作簿起草成绩或风险档位。',
	tool_write_ifs_formula_in_excel_usecase_3: '粘贴到共享表之前，先试算分支顺序是否符合预期。',
	tool_write_ifs_formula_in_excel_usecase_4: '同事仍用 Excel 2016 时，改去嵌套 IF 页面。',

	tool_write_ifs_formula_in_excel_faq_q1: 'Excel 2016 能跑 IFS 吗？',
	tool_write_ifs_formula_in_excel_faq_a1: '永久版 Excel 2016 不行。请用嵌套 IF，或升级到 Excel 2019 及更新版本 / Microsoft 365。',
	tool_write_ifs_formula_in_excel_faq_q2: '没有任何条件命中会怎样？',
	tool_write_ifs_formula_in_excel_faq_a2: 'TRUE 会与你的否则值配对，作为兜底结果。',
	tool_write_ifs_formula_in_excel_faq_q3: '会上传我填的值吗？',
	tool_write_ifs_formula_in_excel_faq_a3: '不会。生成与试算都在浏览器内完成。',
	tool_write_ifs_formula_in_excel_faq_q4: '本地化版 Excel 能直接用吗？',
	tool_write_ifs_formula_in_excel_faq_a4: '部分安装需要翻译后的函数名，或把逗号改成分号。',
	tool_write_ifs_formula_in_excel_faq_q5: '和嵌套 IF 有什么区别？',
	tool_write_ifs_formula_in_excel_faq_a5: 'IFS 是扁平的条件列表；嵌套 IF 是 IF 套 IF。旧版 Excel 请用相关的嵌套 IF 页面。',
	tool_write_ifs_formula_in_excel_faq_q6: '「包含」会生成什么？',
	tool_write_ifs_formula_in_excel_faq_a6: '在 IFS 里作为条件参数写出 ISNUMBER(SEARCH("文本", 单元格))。',

	tool_write_ifs_formula_in_excel_references: 'Microsoft IFS 函数文档。',
	tool_write_ifs_formula_in_excel_ref_a_label: 'Microsoft — IFS 函数',
	tool_write_ifs_formula_in_excel_ref_b_label: 'Microsoft — IF 函数',
};

export default zh;
