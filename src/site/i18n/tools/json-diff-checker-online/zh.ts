/**
 * i18n（在线 JSON 差异检查 / zh）。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'粘贴两份 JSON，按路径列出增删改。默认忽略对象键顺序。内容留在设备、不上传。本页不解析 YAML/XML。',
	tool_json_diff_checker_online_array_as_set: '把数组当集合（忽略顺序）',
	tool_json_diff_checker_online_clear: '清空',
	tool_json_diff_checker_online_compare: '开始对比',
	tool_json_diff_checker_online_desc: '在线 JSON 差异检查：按路径对比两份 JSON，默认忽略键顺序，不上服务器。',
	tool_json_diff_checker_online_description:
		'在线 JSON 差异检查。步骤：粘贴两份 JSON，解析后默认可忽略对象键顺序，再列出路径级增删改。内容留在本机、不上传。示例：{"b":1,"a":2} 与 {"a":2,"b":1} 视为相同；改 price 会报 /price。不是 YAML 或 XML 检查器。',
	tool_json_diff_checker_online_empty: '请在两侧粘贴 JSON，或载入样例。',
	tool_json_diff_checker_online_err_bad_a: '左侧不是合法 JSON。',
	tool_json_diff_checker_online_err_bad_b: '右侧不是合法 JSON。',
	tool_json_diff_checker_online_example:
		'样例左侧先写 sku 再写 price；右侧把 price 放前面并把 9.5 改成 10。打开忽略键顺序时，只报告 /price。进页就能看到这条路径。',
	tool_json_diff_checker_online_example_title: '示例',
	tool_json_diff_checker_online_faq_a1: '不会。用 JSON.parse 在这个标签页解析，不会上传到我们的服务器。',
	tool_json_diff_checker_online_faq_a2: '默认 {"a":1,"b":2} 和 {"b":2,"a":1} 视为同一个对象。若在意书写顺序，关掉「忽略键顺序」。',
	tool_json_diff_checker_online_faq_a3: '数组默认按下标。 [1,2] 和 [2,1] 算有差。只有顺序不重要时才勾「当集合」。',
	tool_json_diff_checker_online_faq_a4: '搜 json diff checker 也是这件事。YAML/XML 请用别的页，或先转成 JSON。',
	tool_json_diff_checker_online_faq_q1: 'JSON 会上传吗？',
	tool_json_diff_checker_online_faq_q2: '键的书写顺序算差异吗？',
	tool_json_diff_checker_online_faq_q3: '数组怎么比？',
	tool_json_diff_checker_online_faq_q4: '和 JSON Diff Checker、YAML/XML 对比是一回事吗？',
	tool_json_diff_checker_online_how_body: '贴两份 JSON，看路径变化。除非你关掉，否则忽略键顺序。',
	tool_json_diff_checker_online_how_item_1: '在左侧粘贴原始 JSON。',
	tool_json_diff_checker_online_how_item_2: '在右侧粘贴改过的 JSON。',
	tool_json_diff_checker_online_how_item_3: '保持「忽略键顺序」开启，除非你要看键的书写顺序。',
	tool_json_diff_checker_online_how_item_4: '对比会列出路径；载入样例在进页时已跑过。',
	tool_json_diff_checker_online_how_title: '怎么用',
	tool_json_diff_checker_online_ignore_keys: '忽略对象键顺序',
	tool_json_diff_checker_online_label_a: '原始 JSON',
	tool_json_diff_checker_online_label_b: '修改后 JSON',
	tool_json_diff_checker_online_load_sample: '载入样例',
	tool_json_diff_checker_online_no_diff: '在当前选项下没有语义差异。',
	tool_json_diff_checker_online_op_added: '新增',
	tool_json_diff_checker_online_op_changed: '修改',
	tool_json_diff_checker_online_op_removed: '删除',
	tool_json_diff_checker_online_result_label: '路径差异',
	tool_json_diff_checker_online_rules_body: 'JSON.parse 之后可以对对象键排序，避免书写顺序造成假差异。',
	tool_json_diff_checker_online_rules_item_1: '非法 JSON 按左右分别提示。重复键遵循 JSON.parse（引擎里通常后写的生效）。',
	tool_json_diff_checker_online_rules_item_2: '忽略键顺序（默认开）会在走路径前把对象键排序。',
	tool_json_diff_checker_online_rules_item_3: '数组默认是列表；勾选集合后按 JSON 字符串排序再比。',
	tool_json_diff_checker_online_rules_item_4: '不解析 YAML/XML。需要的话先到 YAML ↔ JSON 页转换。',
	tool_json_diff_checker_online_rules_title: '对比规则',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '新增 {added}，删除 {removed}，修改 {changed}',
	tool_json_diff_checker_online_title: '在线 JSON 差异检查',
	tool_json_diff_checker_online_usecase_1: '接口样例：两份响应里 pretty-print 把键顺序打乱，不应算差。',
	tool_json_diff_checker_online_usecase_2: '配置快照：看部署之间真正变了哪些路径。',
	tool_json_diff_checker_online_usecase_3: '模型 JSON：发出去之前核对比结构化输出。',
	tool_json_diff_checker_online_usecases_title: '适合什么时候用',
};

export default zh;
