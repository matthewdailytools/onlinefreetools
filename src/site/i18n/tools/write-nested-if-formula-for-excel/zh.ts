/**
 * i18n 工具分片（write-nested-if-formula-for-excel / zh）。
 * 有序条件 → Excel 嵌套 IF；浏览器试算；复制粘贴。键与 en.ts 对齐。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Excel 嵌套 IF 公式生成器 — 按条件顺序写出可复制公式",
	tool_write_nested_if_formula_for_excel_description: "按等于、包含或空白条件，自上而下写出 Excel 嵌套 IF。示例：West→A、East→B，其余 Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\"))。先在浏览器里试算，再复制英文函数名与逗号语法到工作表。",
	tool_write_nested_if_formula_for_excel_article: "添加有序条件、填写各结果与最终否则值，预览试算，再复制完整嵌套 IF。",
	tool_write_nested_if_formula_for_excel_desc: "有序条件 → 嵌套 IF；浏览器试算后一键复制。",

	tool_write_nested_if_formula_for_excel_hint: "条件从上到下判断，先匹配先生效。包含会写出 ISNUMBER(SEARCH(...))。公式使用英文函数名与逗号。",
	tool_write_nested_if_formula_for_excel_cell_label: "目标单元格",
	tool_write_nested_if_formula_for_excel_cell_ph: "例如 A1",
	tool_write_nested_if_formula_for_excel_trial_label: "试算值",
	tool_write_nested_if_formula_for_excel_trial_ph: "例如 West",
	tool_write_nested_if_formula_for_excel_else_label: "否则（最终假）",
	tool_write_nested_if_formula_for_excel_else_ph: "例如 Other",
	tool_write_nested_if_formula_for_excel_col_op: "判断",
	tool_write_nested_if_formula_for_excel_col_val: "值 / 文本",
	tool_write_nested_if_formula_for_excel_col_then: "则返回",
	tool_write_nested_if_formula_for_excel_op_eq: "等于",
	tool_write_nested_if_formula_for_excel_op_contains: "包含",
	tool_write_nested_if_formula_for_excel_op_blank: "为空",
	tool_write_nested_if_formula_for_excel_add: "添加条件",
	tool_write_nested_if_formula_for_excel_write: "写出公式",
	tool_write_nested_if_formula_for_excel_sample: "加载示例",
	tool_write_nested_if_formula_for_excel_clear: "清空",
	tool_write_nested_if_formula_for_excel_copy: "复制公式",
	tool_write_nested_if_formula_for_excel_copied: "已复制。",
	tool_write_nested_if_formula_for_excel_formula_label: "嵌套 IF 公式",
	tool_write_nested_if_formula_for_excel_trial_result_label: "试算结果",
	tool_write_nested_if_formula_for_excel_empty: "请至少添加一条条件（或加载示例），再写出公式。",
	tool_write_nested_if_formula_for_excel_copy_fail: "无法复制。请选中公式后手动复制。",

	tool_write_nested_if_formula_for_excel_how_title: "怎样写出嵌套 IF 公式",
	tool_write_nested_if_formula_for_excel_how_body: "填好目标单元格与有序条件后点「写出公式」，即可看到嵌套 IF 并对试算值求值。复制得到带逗号的英文 Excel 语法。",
	tool_write_nested_if_formula_for_excel_how_item_1: "设定目标单元格，可选填试算值。",
	tool_write_nested_if_formula_for_excel_how_item_2: "按 Excel 应测试的顺序添加等于、包含或空白行。",
	tool_write_nested_if_formula_for_excel_how_item_3: "为每行填写「则返回」，并设定最终「否则」值。",
	tool_write_nested_if_formula_for_excel_how_item_4: "点击「写出公式」，核对试算结果，再「复制公式」。",

	tool_write_nested_if_formula_for_excel_why_choose_title: "为什么用本站的 Excel 嵌套 IF 公式生成器",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "等于 / 包含 / 空白条件可排进同一条嵌套 IF。",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "浏览器试算，粘贴前就能看清哪一分支命中。",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "示例轮换：区域标签、成绩分档、包含「promo」等。",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "一键复制完整公式字符串。",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "明确只生成嵌套 IF，不是 IFS（见相关 IFS 页）。",

	tool_write_nested_if_formula_for_excel_rules_title: "需要知道的规则",
	tool_write_nested_if_formula_for_excel_rules_body: "生成器输出经典嵌套 IF(...)。Excel 字符串内的引号会写成双引号。",
	tool_write_nested_if_formula_for_excel_rules_item_1: "文本引号在 Excel 字符串内会成对加倍。",
	tool_write_nested_if_formula_for_excel_rules_item_2: "包含写出 ISNUMBER(SEARCH(...))；空白检测空文本。",
	tool_write_nested_if_formula_for_excel_rules_item_3: "自上而下，先匹配的条件先生效。",
	tool_write_nested_if_formula_for_excel_rules_item_4: "英文函数名与逗号在部分本地化 Excel 中可能需改写。",
	tool_write_nested_if_formula_for_excel_rules_item_5: "若要 IFS() 语法，请改用相关的 IFS 写出页。",

	tool_write_nested_if_formula_for_excel_example_title: "示例演示",
	tool_write_nested_if_formula_for_excel_example: "加载示例从 West→A、East→B、否则 Other 开始，试算 West→A。下一条是成绩分档（≥90 / ≥80）。最后一条用包含测试「promo」。",

	tool_write_nested_if_formula_for_excel_usecases_title: "什么时候用嵌套 IF 公式生成器",
	tool_write_nested_if_formula_for_excel_usecase_1: "按有序规则划分成绩或风险档位。",
	tool_write_nested_if_formula_for_excel_usecase_2: "把区域代码转成报表标签。",
	tool_write_nested_if_formula_for_excel_usecase_3: "粘贴进工作簿前先核对多分支公式。",
	tool_write_nested_if_formula_for_excel_usecase_4: "先搭包含/空白分支，不必手写 SEARCH。",

	tool_write_nested_if_formula_for_excel_faq_q1: "我的值会上传吗？",
	tool_write_nested_if_formula_for_excel_faq_a1: "不会。写出与试算都在浏览器内完成，不上传服务器。",
	tool_write_nested_if_formula_for_excel_faq_q2: "这和 IFS 是一回事吗？",
	tool_write_nested_if_formula_for_excel_faq_a2: "不是。本页输出嵌套 IF(...)。要 IFS() 请用相关 IFS 生成器。",
	tool_write_nested_if_formula_for_excel_faq_q3: "「包含」怎么实现？",
	tool_write_nested_if_formula_for_excel_faq_a3: "会在 IF 判断里写出 ISNUMBER(SEARCH(\"文本\", 单元格))。",
	tool_write_nested_if_formula_for_excel_faq_q4: "公式能粘进所有语言版 Excel 吗？",
	tool_write_nested_if_formula_for_excel_faq_a4: "使用英文函数名与逗号。部分安装需要译名或分号分隔符。",
	tool_write_nested_if_formula_for_excel_faq_q5: "试算值做什么用？",
	tool_write_nested_if_formula_for_excel_faq_a5: "在浏览器里按相同分支顺序求值，确认命中哪条「则」或「否则」。",
	tool_write_nested_if_formula_for_excel_faq_q6: "能嵌套超过两个条件吗？",
	tool_write_nested_if_formula_for_excel_faq_a6: "可以。每加一行就在最终否则外包一层 IF。",

	tool_write_nested_if_formula_for_excel_references: "Microsoft IF 函数文档。",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — IF 函数",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — IFS 函数",
};

export default zh;
