/**
 * i18n 工具分片（create-budget-spreadsheet / zh）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "做一份预算表格 — 分类金额导出 Excel xlsx",
	tool_create_budget_spreadsheet_description: "按「类别,金额」逐行做出预算表格，先在页面预览合计，再下载带实时 SUM 公式的 Excel .xlsx。示例：房租 1200 + 餐饮 400 → 合计 1600。全程在浏览器本机处理、不上传服务器；数字仅供规划使用，不构成理财或税务建议。",
	tool_create_budget_spreadsheet_article: "输入类别与金额行，预览合计后下载可复用的 budget.xlsx，总额单元格用 SUM。",
	tool_create_budget_spreadsheet_desc: "分类金额 → 预览合计 → 下载含 SUM 的 xlsx。不上传服务器。",

	tool_create_budget_spreadsheet_safety_banner: "仅规划数字。本页生成带 SUM 合计的简单分类清单，不是总账、报税表，也不提供投资建议。",
	tool_create_budget_spreadsheet_hint: "每行一条：类别,金额（逗号或制表符）。金额须为有限数字；格式错误的行会跳过。",
	tool_create_budget_spreadsheet_input_label: "预算行（类别, 金额）",
	tool_create_budget_spreadsheet_input_ph: "例如 房租,1200",
	tool_create_budget_spreadsheet_write: "生成表格",
	tool_create_budget_spreadsheet_download: "下载 xlsx",
	tool_create_budget_spreadsheet_sample: "加载示例",
	tool_create_budget_spreadsheet_clear: "清空",
	tool_create_budget_spreadsheet_preview_title: "预览",
	tool_create_budget_spreadsheet_col_category: "类别",
	tool_create_budget_spreadsheet_col_amount: "金额",
	tool_create_budget_spreadsheet_total_label: "合计",
	tool_create_budget_spreadsheet_rows_label: "有效行数",
	tool_create_budget_spreadsheet_ready_note: "预览已就绪。下载会写出 budget.xlsx，合计单元格含 SUM 公式。",
	tool_create_budget_spreadsheet_empty: "请至少填写一行有效的「类别,金额」（例如 房租,1200），或加载示例。",
	tool_create_budget_spreadsheet_need_lib: "表格库加载失败，请检查网络后刷新页面。",
	tool_create_budget_spreadsheet_sheet_name: "预算",

	tool_create_budget_spreadsheet_how_title: "怎么做出预算表格",
	tool_create_budget_spreadsheet_how_body: "列出各项开支类别与金额，生成带合计的预览，再下载 .xlsx。在 Excel 里改金额后，SUM 合计会自动重算。",
	tool_create_budget_spreadsheet_how_item_1: "每行按「类别,金额」填写。",
	tool_create_budget_spreadsheet_how_item_2: "点「生成表格」预览各行与合计。",
	tool_create_budget_spreadsheet_how_item_3: "若合计不对，修正或删除被跳过的行。",
	tool_create_budget_spreadsheet_how_item_4: "点「下载 xlsx」保存带实时 SUM 的 budget.xlsx。",

	tool_create_budget_spreadsheet_why_choose_title: "为什么用本站做预算表格",
	tool_create_budget_spreadsheet_why_choose_item_1: "分类清单快，页面上就能看到合计。",
	tool_create_budget_spreadsheet_why_choose_item_2: "下载后合计单元格是可重算的 Excel SUM。",
	tool_create_budget_spreadsheet_why_choose_item_3: "示例可轮换：月度、出行、社团开支清单。",
	tool_create_budget_spreadsheet_why_choose_item_4: "在浏览器内处理，行数据不上服务器。",
	tool_create_budget_spreadsheet_why_choose_item_5: "YMYL 边界清楚：只做规划，不是总账或报税工具。",

	tool_create_budget_spreadsheet_rules_title: "使用规则与边界",
	tool_create_budget_spreadsheet_rules_body: "本工具按分类金额生成一张规划表，不是会计软件。",
	tool_create_budget_spreadsheet_rules_item_1: "金额须为有限数字；格式错误的行会跳过。",
	tool_create_budget_spreadsheet_rules_item_2: "下载文件的合计单元格对金额列使用 =SUM。",
	tool_create_budget_spreadsheet_rules_item_3: "仅一张开支式清单——没有收入对照或差异引擎。",
	tool_create_budget_spreadsheet_rules_item_4: "数值留在本机设备，不上传服务器。",
	tool_create_budget_spreadsheet_rules_item_5: "文件格式遵循常见 OOXML/xlsx 做法（浏览器内 SheetJS）。",

	tool_create_budget_spreadsheet_example_title: "演算示例",
	tool_create_budget_spreadsheet_example: "加载示例从「房租 1200 + 餐饮 400 → 合计 1600」开始；下一组加上水电 150 与交通 200；最后一组是短途出行（酒店、机票、餐饮）。",

	tool_create_budget_spreadsheet_usecases_title: "什么时候适合在这里做预算表",
	tool_create_budget_spreadsheet_usecase_1: "正式模板之前，先起草一份简短的月度信封预算。",
	tool_create_budget_spreadsheet_usecase_2: "把出行或活动预估费用汇总成一张可下载表。",
	tool_create_budget_spreadsheet_usecase_3: "社团正式记账前，先整理一份开支计划。",
	tool_create_budget_spreadsheet_usecase_4: "交给对方一份仍能在 Excel 里重算 SUM 的 .xlsx。",

	tool_create_budget_spreadsheet_faq_q1: "这是总账软件吗？",
	tool_create_budget_spreadsheet_faq_a1: "不是。没有科目、流水、对账或审计历史。",
	tool_create_budget_spreadsheet_faq_q2: "我的行数据会上传吗？",
	tool_create_budget_spreadsheet_faq_a2: "不会。解析与写出 xlsx 都在浏览器内完成。",
	tool_create_budget_spreadsheet_faq_q3: "下载的 xlsx 会重新计算吗？",
	tool_create_budget_spreadsheet_faq_a3: "会。合计单元格对金额列使用 SUM 公式。",
	tool_create_budget_spreadsheet_faq_q4: "能分别跟踪收入和支出吗？",
	tool_create_budget_spreadsheet_faq_a4: "不能。若要收入、目标、差异或图表，请用更完整的预算模板。",
	tool_create_budget_spreadsheet_faq_q5: "「类别,金额」怎么写？",
	tool_create_budget_spreadsheet_faq_a5: "每行一条：类别与金额用逗号或制表符分隔。例如：房租,1200。",
	tool_create_budget_spreadsheet_faq_q6: "这算理财建议吗？",
	tool_create_budget_spreadsheet_faq_a6: "不算。只做规划算术——不构成理财、税务或投资建议。",

	tool_create_budget_spreadsheet_disclaimer: "仅规划数字——不构成理财、税务、会计或投资建议。",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML；SheetJS 浏览器端写出 xlsx 文档。",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "SheetJS 文档",
};

export default zh;
