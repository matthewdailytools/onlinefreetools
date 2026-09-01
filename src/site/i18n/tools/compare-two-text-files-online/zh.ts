/**
 * i18n tool shard (compare-two-text-files-online / zh).
 * H1：在线对比两个文本文件。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'在这个标签页里选两个文本文件，按行看增删。文件留在你的设备上，不会上传到服务器。本页没有大粘贴框——只粘贴请用「查看两段文本的差异」。',
	tool_compare_two_text_files_online_clear: '清空',
	tool_compare_two_text_files_online_compare: '开始对比',
	tool_compare_two_text_files_online_desc: '在线对比两个文本文件：选两个 txt，在浏览器里看行差，文件不上服务器。',
	tool_compare_two_text_files_online_description:
		'在线对比两个文本文件。步骤：选原文文件和改稿文件，按 UTF-8 解码（去掉 BOM），二进制会拒绝，再按行标出新增和删除。文件留在本机、不上传服务器。示例：notes-a.txt 和 notes-b.txt 只改中间一行。Word、表格、JSON 请用别的页；本页只管文本文件。',
	tool_compare_two_text_files_online_empty: '请先选两个文本文件，或载入样例。',
	tool_compare_two_text_files_online_err_binary: '有一个文件像是二进制（含空字节）。本页只比纯文本，例如 .txt。',
	tool_compare_two_text_files_online_err_too_large: '有文件大约超过 1 MB。请截一段再比，以免标签页卡住。',
	tool_compare_two_text_files_online_example:
		'载入样例会对比 notes-a.txt（alpha / 第二行 / 第三）和中间行改成「changed line」的 notes-b.txt。按行只标那一行。进页就会看到这个结果。',
	tool_compare_two_text_files_online_example_title: '示例',
	tool_compare_two_text_files_online_faq_a1:
		'不会。字节在这个标签页里用 FileReader 读。页面可能从 CDN 加载 jsdiff 库代码；你的文件不会传到我们的服务器。',
	tool_compare_two_text_files_online_faq_a2:
		'按 UTF-8 解码。开头的 BOM 会去掉，避免第一行只因为 BOM 被标红。其他编码可能乱码，请先另存为 UTF-8。',
	tool_compare_two_text_files_online_faq_a3:
		'文件里有空字节就当二进制拒绝。Word、Excel 请用对应对比页。',
	tool_compare_two_text_files_online_faq_a4:
		'本页面向 .txt / .text。搜 txt 对比或在线文件 diff 也是这件事。如果「对比两个文件」其实是 Word 或表格，请用那些专用页。只粘贴文字请用「查看两段文本的差异」。',
	tool_compare_two_text_files_online_faq_q1: '文件会上传吗？',
	tool_compare_two_text_files_online_faq_q2: '编码和 BOM 怎么处理？',
	tool_compare_two_text_files_online_faq_q3: '能比二进制、Word 或 Excel 吗？',
	tool_compare_two_text_files_online_faq_q4: '这和 txt 对比、对比两个文件是一回事吗？',
	tool_compare_two_text_files_online_how_body: '选磁盘上已有的两个文本文件，再看高亮的行。首屏没有大粘贴框。',
	tool_compare_two_text_files_online_how_item_1: '选择第一个文本文件（原稿或导出）。',
	tool_compare_two_text_files_online_how_item_2: '选择第二个文本文件（改过的版本）。',
	tool_compare_two_text_files_online_how_item_3: '两个都选好后会自动对比；载入样例在进页时已经跑过。',
	tool_compare_two_text_files_online_how_item_4: '绿色是新增，红色是删除。清空会从本页拿掉这两个文件。',
	tool_compare_two_text_files_online_how_title: '怎么用',
	tool_compare_two_text_files_online_label_a: '第一个文本文件',
	tool_compare_two_text_files_online_label_b: '第二个文本文件',
	tool_compare_two_text_files_online_legend: '绿色 = 新增 · 红色 = 删除',
	tool_compare_two_text_files_online_load_sample: '载入样例',
	tool_compare_two_text_files_online_need_lib: '对比组件加载失败，请检查网络后刷新。',
	tool_compare_two_text_files_online_no_diff: '没有差异，两个文件的文本一致。',
	tool_compare_two_text_files_online_result_label: '行差异',
	tool_compare_two_text_files_online_rules_body: '先按 UTF-8 解码，再做按行 diff。编码、BOM、二进制检查都在高亮之前。',
	tool_compare_two_text_files_online_rules_item_1: '每个文件用 FileReader 读成 ArrayBuffer，按 UTF-8 解码。开头的 UTF-8 BOM 会去掉，避免假的第一行变化。',
	tool_compare_two_text_files_online_rules_item_2: '出现空字节就当二进制拒绝。这不是十六进制查看器。',
	tool_compare_two_text_files_online_rules_item_3: '使用按行 diff。一行里只改一个词，整行仍可能被标红。',
	tool_compare_two_text_files_online_rules_item_4: '首屏没有粘贴框。只粘贴两段文字请用「查看两段文本的差异」。',
	tool_compare_two_text_files_online_rules_title: '对比规则',
	tool_compare_two_text_files_online_sample_a: 'alpha\n第二行\n第三行',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\n改过的一行\n第三行',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '新增 {added}，删除 {removed}',
	tool_compare_two_text_files_online_title: '在线对比两个文本文件',
	tool_compare_two_text_files_online_usecase_1: '导出：对比昨天的 log.txt 和今天的导出，不必把上万行贴进网页。',
	tool_compare_two_text_files_online_usecase_2: '配置备份：磁盘上两份 .env 或 .txt 快照，按行看。',
	tool_compare_two_text_files_online_usecase_3: '作业：两份作业 txt，要看哪些行改过。',
	tool_compare_two_text_files_online_usecases_title: '适合什么时候用',
};

export default zh;
