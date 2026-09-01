/**
 * i18n（对比两份 Word / zh）。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'选两份 .docx，对比能看见的正文。不复现样式、页眉，也不是 Word 审阅窗格。文件留在设备、不上传。',
	tool_compare_two_word_documents_for_differences_clear: '清空',
	tool_compare_two_word_documents_for_differences_compare: '开始对比',
	tool_compare_two_word_documents_for_differences_desc: '对比两份 Word 文档的差异：抽出可见文字再看增删，文件不上服务器。',
	tool_compare_two_word_documents_for_differences_description:
		'对比两份 Word 文档的差异。步骤：选两份 .docx，抽出可见段落文字，再标出增删。文件留在本机、不上传服务器。示例：两份短备忘录只改了一句见面时间。这不是微软「审阅 → 比较」；页眉、页脚和样式会丢掉。加密或损坏的文件会失败。不处理 PDF。',
	tool_compare_two_word_documents_for_differences_empty: '请先选两份 Word，或载入样例。',
	tool_compare_two_word_documents_for_differences_err_extract: '读不出文字。可能已加密、损坏，或不是 .docx。',
	tool_compare_two_word_documents_for_differences_err_no_text: '两边都抽不出文字（空文档或只有图片）。',
	tool_compare_two_word_documents_for_differences_err_not_docx: '请使用 .docx。旧版 .doc 不支持。',
	tool_compare_two_word_documents_for_differences_example:
		'载入样例会生成两份很小的 .docx。第二份把「中午见面」改成「下午三点见面」。进页就能看到这句差异。',
	tool_compare_two_word_documents_for_differences_example_title: '示例',
	tool_compare_two_word_documents_for_differences_faq_a1: '不会。文件在这个标签页读取。mammoth 和 jsdiff 可能从 CDN 加载库代码，文档不会传到我们的服务器。',
	tool_compare_two_word_documents_for_differences_faq_a2: '不是。Word 可以比格式和修订。本页只抽可见文字再 diff。页眉、页脚、样式会丢。',
	tool_compare_two_word_documents_for_differences_faq_a3: '抽取失败常见于加密、损坏或不是 OOXML。纯图片页会得到空文本。',
	tool_compare_two_word_documents_for_differences_faq_a4: '搜 Word 在线对比也是这件事。若「对比两个文档」其实是 PDF，请用别的工具。',
	tool_compare_two_word_documents_for_differences_faq_q1: 'Word 文件会上传吗？',
	tool_compare_two_word_documents_for_differences_faq_q2: '这和 Word「审阅 → 比较」一样吗？',
	tool_compare_two_word_documents_for_differences_faq_q3: '为什么抽不出字或没有页眉？',
	tool_compare_two_word_documents_for_differences_faq_q4: '能比 PDF 或任意两个文档吗？',
	tool_compare_two_word_documents_for_differences_how_body: '选两份 Word，看文字差。本页不会打开审阅窗格。',
	tool_compare_two_word_documents_for_differences_how_item_1: '选择第一份 .docx（原稿）。',
	tool_compare_two_word_documents_for_differences_how_item_2: '选择第二份 .docx（改稿）。',
	tool_compare_two_word_documents_for_differences_how_item_3: '选好后会自动抽文本对比；载入样例在进页时已跑过。',
	tool_compare_two_word_documents_for_differences_how_item_4: '绿色是新增，红色是删除。',
	tool_compare_two_word_documents_for_differences_how_title: '怎么用',
	tool_compare_two_word_documents_for_differences_label_a: '第一份 Word',
	tool_compare_two_word_documents_for_differences_label_b: '第二份 Word',
	tool_compare_two_word_documents_for_differences_legend: '绿色 = 新增 · 红色 = 删除',
	tool_compare_two_word_documents_for_differences_load_sample: '载入样例',
	tool_compare_two_word_documents_for_differences_need_lib: '组件加载失败，请检查网络后刷新。',
	tool_compare_two_word_documents_for_differences_no_diff: '抽出的文字没有差异。',
	tool_compare_two_word_documents_for_differences_result_label: '文字差异',
	tool_compare_two_word_documents_for_differences_rules_body: '先抽文本再 diff。格式修订轨不在本页。',
	tool_compare_two_word_documents_for_differences_rules_item_1: 'mammoth 从 OOXML 抽出可见段落，再用 jsdiff 按行对比。',
	tool_compare_two_word_documents_for_differences_rules_item_2: '页眉、页脚、批注和多数样式会丢。只改样式、字没变时，结果可能显示相同。',
	tool_compare_two_word_documents_for_differences_rules_item_3: '加密或损坏的 .docx 会失败。不解析旧 .doc。',
	tool_compare_two_word_documents_for_differences_rules_item_4: '这不是微软「比较文档」。要比格式修订请用 Word 本身。',
	tool_compare_two_word_documents_for_differences_rules_title: '对比规则',
	tool_compare_two_word_documents_for_differences_sample_a: '团队备忘\n请中午见面。',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: '团队备忘\n请下午三点见面。',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '新增 {added}，删除 {removed}',
	tool_compare_two_word_documents_for_differences_title: '对比两份 Word 文档的差异',
	tool_compare_two_word_documents_for_differences_usecase_1: '合同草稿：看两份导出的 .docx 改了哪些句子。',
	tool_compare_two_word_documents_for_differences_usecase_2: '会议纪要：对比上周和这周的文件。',
	tool_compare_two_word_documents_for_differences_usecase_3: '作业：两份 Word，只要文字不要版式。',
	tool_compare_two_word_documents_for_differences_usecases_title: '适合什么时候用',
};

export default zh;
