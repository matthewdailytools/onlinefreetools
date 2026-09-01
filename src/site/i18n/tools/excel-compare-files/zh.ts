/**
 * i18n（对比 Excel 文件 / zh）。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_excel_compare_files_article:
		'选两个表格，按当前工作表逐格对比。空单元格当成空字符串。文件留在设备、不上传。',
	tool_excel_compare_files_clear: '清空',
	tool_excel_compare_files_col_addr: '单元格',
	tool_excel_compare_files_col_left: '第一个文件',
	tool_excel_compare_files_col_right: '第二个文件',
	tool_excel_compare_files_compare: '开始对比',
	tool_excel_compare_files_desc: '对比 Excel 文件：选两个表，按当前工作表对格子，文件不上服务器。',
	tool_excel_compare_files_description:
		'对比 Excel 文件。步骤：选两个 xlsx 或 csv，选当前工作表（默认第一张），再列出值不同的格子。文件留在本机、不上传服务器。示例：三行库存表里 B3 数量从 2 变成 9。空单元格当成空字符串。列错位按地址比，不按表头名字对齐。',
	tool_excel_compare_files_empty: '请先选两个表格文件，或载入样例。',
	tool_excel_compare_files_err_read: '读不了表格。请用 xlsx 或 csv，加密工作簿请先解锁。',
	tool_excel_compare_files_example:
		'载入样例对比两份 CSV。表头相同，Gadget 数量 2 对 9，因此列出 B3。进页就能看到这个格子。',
	tool_excel_compare_files_example_title: '示例',
	tool_excel_compare_files_faq_a1: '不会。用 SheetJS 在这个标签页读字节。库可能从 CDN 加载，文件不会传到我们的服务器。',
	tool_excel_compare_files_faq_a2: '默认比第一张表。要用同一文件里的其他表，请改下拉框。没选中的表不会比。',
	tool_excel_compare_files_faq_a3: '可以。CSV 当成一张表。搜对比两个 csv 也用本页，不另建网址。',
	tool_excel_compare_files_faq_a4: '缺格和空格都当成空字符串。插入一列仍按 A1、B1 地址对齐，不按「名称列」表头对齐，避免表头移动时对错。',
	tool_excel_compare_files_faq_q1: 'Excel 文件会上传吗？',
	tool_excel_compare_files_faq_q2: '是不是只比第一张表？',
	tool_excel_compare_files_faq_q3: '能比两个 CSV 吗？',
	tool_excel_compare_files_faq_q4: '空单元格和列错位怎么处理？',
	tool_excel_compare_files_how_body: '选两个表，看当前工作表哪些格子地址不同。',
	tool_excel_compare_files_how_item_1: '选择第一个表格（xlsx、xls 或 csv）。',
	tool_excel_compare_files_how_item_2: '选择第二个表格。',
	tool_excel_compare_files_how_item_3: '默认留在第一张表，除非你要换工作表。',
	tool_excel_compare_files_how_item_4: '对比会列出不同的格子；载入样例在进页时已跑过。',
	tool_excel_compare_files_how_title: '怎么用',
	tool_excel_compare_files_label_a: '第一个表格',
	tool_excel_compare_files_label_b: '第二个表格',
	tool_excel_compare_files_load_sample: '载入样例',
	tool_excel_compare_files_need_lib: 'SheetJS 加载失败，请检查网络后刷新。',
	tool_excel_compare_files_no_diff: '当前工作表没有格子差异。',
	tool_excel_compare_files_result_label: '格子差异',
	tool_excel_compare_files_rules_body: '只在选中的工作表上，按格子地址比数值。',
	tool_excel_compare_files_rules_item_1: 'SheetJS 读取工作簿。默认表是文件里的第一个表名。',
	tool_excel_compare_files_rules_item_2: '每个格子转成文本再比。空和缺格都是空字符串。',
	tool_excel_compare_files_rules_item_3: '一侧插入列时仍按 A1/B1 地址对齐，不按表头标签。',
	tool_excel_compare_files_rules_item_4: '未选中的工作表不比。默认不是整本逐表扫描。',
	tool_excel_compare_files_rules_title: '对比规则',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: '第一个文件的工作表',
	tool_excel_compare_files_sheet_b: '第二个文件的工作表',
	tool_excel_compare_files_summary: '{n} 个格子不同',
	tool_excel_compare_files_title: '对比 Excel 文件',
	tool_excel_compare_files_usecase_1: '报价：两份导出的价格表，只有几个格子变了。',
	tool_excel_compare_files_usecase_2: '考勤或库存 CSV 一周对一周。',
	tool_excel_compare_files_usecase_3: '作业表：两个学生交的 xlsx。',
	tool_excel_compare_files_usecases_title: '适合什么时候用',
};

export default zh;
