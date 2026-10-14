/**
 * i18n tool shard (compare-two-pdfs / zh)。
 * 对比两份 PDF 文本层：高亮增删、页数摘要、可选忽略大小写/空白；非 OCR。
 */
import type { SiteLangDict } from '../../../types';

/** 中文文案字典（按「对比两个PDF / PDF文本差异 / PDF比对」检索习惯重写）。 */
const zh: SiteLangDict = {
	tool_compare_two_pdfs_title: "对比两个 PDF — 高亮文本差异",
	tool_compare_two_pdfs_desc: "PDF 比对：逐词高亮两份 PDF 的文本增删，下载 HTML 差异，文件不上传服务器。",
	tool_compare_two_pdfs_description:
		"对比两个 PDF 的文字改动：工具提取两份文件中可选中的文本，用绿色标出 B 新增的词、红色标出 A 中被删掉的词。步骤：选择 PDF A 与 PDF B，点「开始对比」，查看高亮与增删计数，需要存档时点「下载 HTML 差异」。示例：「付款期限为三十天」改成「付款期限为六十天」，三十标红、六十标绿。只比对文本层，不做 OCR，扫描件需先识别成可搜索的 PDF。",
	tool_compare_two_pdfs_file_a: "PDF A（旧版 / 原稿）",
	tool_compare_two_pdfs_file_b: "PDF B（新版 / 修订稿）",
	tool_compare_two_pdfs_choose_file: "选择 PDF，或直接拖到此框",
	tool_compare_two_pdfs_choose_files: "选择文件",
	tool_compare_two_pdfs_drop_hint: "也可以把 PDF 拖到这里，处理全程在当前标签页完成。",
	tool_compare_two_pdfs_compare: "开始对比",
	tool_compare_two_pdfs_download: "下载 HTML 差异",
	tool_compare_two_pdfs_sample: "加载样例",
	tool_compare_two_pdfs_clear: "清空",
	tool_compare_two_pdfs_advanced: "高级设置（可选）",
	tool_compare_two_pdfs_ignore_case: "忽略字母大小写",
	tool_compare_two_pdfs_ignore_space: "合并多余空格与换行",
	tool_compare_two_pdfs_advanced_hint: "两次导出措辞相同、只是换行位置不同时，勾选它可以避免误报差异。",
	tool_compare_two_pdfs_result_label: "文本差异（A → B）",
	tool_compare_two_pdfs_legend_added: "B 中新增",
	tool_compare_two_pdfs_legend_removed: "A 中删除",
	tool_compare_two_pdfs_empty: "请先选好 PDF A 和 PDF B。",
	tool_compare_two_pdfs_err_convert: "生成对比结果失败，请刷新页面后重试。",
	tool_compare_two_pdfs_err_encrypted: "这份 PDF 似乎设了密码，请先解除保护再对比。",
	tool_compare_two_pdfs_err_load: "有一份 PDF 无法读取。",
	tool_compare_two_pdfs_err_notext: "没有找到可选中的文本层。纯图片的扫描件需要先做 OCR，才能用本工具对比。",
	tool_compare_two_pdfs_err_pdfjs: "PDF 渲染组件加载失败。",
	tool_compare_two_pdfs_status_working: "正在提取文本并对比…",
	tool_compare_two_pdfs_status_done: "完成：绿色是 B 新增，红色是 A 删除。点下载可保存为 HTML 文件。",
	tool_compare_two_pdfs_status_identical: "在当前选项下，两份文本没有差异。",
	tool_compare_two_pdfs_summary_tpl: "新增 {added} 处 · 删除 {removed} 处",
	tool_compare_two_pdfs_pages_tpl: "页数 A={a}，B={b}",
	tool_compare_two_pdfs_warn_large: "文件较大，对比可能会比较慢。",
	tool_compare_two_pdfs_how_title: "怎样对比两个 PDF",
	tool_compare_two_pdfs_how_body:
		"工具先用 PDF.js 读出每份 PDF 的文本层，再逐词比对。版式、字体和图片都不参与比较，只看能选中的文字。",
	tool_compare_two_pdfs_how_item_1: "选择 PDF A（原稿）和 PDF B（修订稿），也可以把文件分别拖到对应的框里。",
	tool_compare_two_pdfs_how_item_2: "如有需要，展开「高级设置」，勾选忽略大小写或合并空白。",
	tool_compare_two_pdfs_how_item_3: "点「开始对比」，等进度条走完；两份文件会先预览，再提取文字。",
	tool_compare_two_pdfs_how_item_4: "查看绿/红高亮和增删计数；需要留档时点「下载 HTML 差异」。",
	tool_compare_two_pdfs_why_choose_title: "为什么用本站的「对比两个 PDF」",
	tool_compare_two_pdfs_why_choose_item_1: "两份 PDF 并排预览，同时给出一份逐词文本差异，一次看完。",
	tool_compare_two_pdfs_why_choose_item_2: "新增和删除分开计数，并显示每份文件的页数。",
	tool_compare_two_pdfs_why_choose_item_3: "可忽略大小写、合并空白，专治只是重新换行的导出版本。",
	tool_compare_two_pdfs_why_choose_item_4: "遇到加密文件或没有文本层的扫描件，会直接说明原因，而不是给空结果。",
	tool_compare_two_pdfs_why_choose_item_5: "在浏览器里运行，PDF 不上传到我们的服务器。",
	tool_compare_two_pdfs_rules_title: "比对规则",
	tool_compare_two_pdfs_rules_body: "只比较文本层，不做视觉或像素级比对。",
	tool_compare_two_pdfs_rules_item_1: "用 PDF.js 提取 A、B 的可选中文本，再用 jsdiff 标出差异。",
	tool_compare_two_pdfs_rules_item_2: "全部处理留在当前标签页；选择文件不会触发上传。",
	tool_compare_two_pdfs_rules_item_3: "不做 OCR。纯图片扫描件须先在别处识别出文字。",
	tool_compare_two_pdfs_rules_item_4: "加密或损坏的 PDF 会给出看得懂的错误提示。",
	tool_compare_two_pdfs_rules_item_5: "下载导出的是带高亮的 HTML 文件，而不是加了批注的 PDF。",
	tool_compare_two_pdfs_example_title: "示例",
	tool_compare_two_pdfs_example:
		"「加载样例」会生成两份单页合同：A 写着「付款期限为三十天。」，B 写着「付款期限为六十天。」。点「开始对比」后，「三十」标为删除、「六十」标为新增。若勾选「忽略字母大小写」，英文里的 Days 和 days 会被视为相同。",
	tool_compare_two_pdfs_usecases_title: "适合这些场景",
	tool_compare_two_pdfs_usecase_1: "把对方改回来的合同 PDF 和你上周发出的版本逐字核对。",
	tool_compare_two_pdfs_usecase_2: "签字前找出政策或服务条款 PDF 里被改动的措辞。",
	tool_compare_two_pdfs_usecase_3: "只关心文字、不在乎字体和页边距时，比对两份导出稿。",
	tool_compare_two_pdfs_usecase_4: "敏感草稿留在本机比对，文件不上传服务器。",
	tool_compare_two_pdfs_faq_q1: "我的 PDF 会被上传吗？",
	tool_compare_two_pdfs_faq_a1:
		"不会。渲染和提取文字都在你的浏览器标签页里完成。依赖的脚本从本站 vendor 目录加载，文件内容本身不离开本机、不上传服务器。",
	tool_compare_two_pdfs_faq_q2: "为什么扫描版 PDF 提示「没有可选中的文本」？",
	tool_compare_two_pdfs_faq_a2:
		"扫描件本质是图片，没有文本层，本页也不做 OCR。请先用其他工具识别文字、导出可搜索的 PDF，再回来对比。",
	tool_compare_two_pdfs_faq_q3: "有密码保护的 PDF 能对比吗？",
	tool_compare_two_pdfs_faq_a3:
		"加密文件在这里打不开。请先在 PDF 阅读器里解除密码，另存一份无保护的副本，再选择这份副本。",
	tool_compare_two_pdfs_faq_q4: "和普通的文本对比工具有什么区别？",
	tool_compare_two_pdfs_faq_a4:
		"这里可以直接拖入 PDF，看到页面预览和页数。本站的文本差异对比工具面向粘贴的文字或 .txt 文件，不解析 PDF。",
	tool_compare_two_pdfs_faq_q5: "能比较版式、图片或签名吗？",
	tool_compare_two_pdfs_faq_a5:
		"不能，只比较可选中的文字。挪动了 Logo、换了字体但措辞没变，在这里会显示为没有差异。",
	tool_compare_two_pdfs_faq_q6: "点下载保存的是什么？",
	tool_compare_two_pdfs_faq_a6:
		"一份 HTML 文件，保留页面上同样的绿/红高亮，方便发邮件或归档；它不是带标注的 PDF。",
	tool_compare_two_pdfs_faq_q7: "什么时候该忽略大小写或空白？",
	tool_compare_two_pdfs_faq_a7:
		"当两次导出只是大小写或换行位置不同时。措辞一样、但原始文本层有出入，就打开这两个选项。",
	tool_compare_two_pdfs_article: "在浏览器内比对两份 PDF 的可选中文本，逐词高亮增删，并下载 HTML 差异文件。",
	tool_compare_two_pdfs_references: "PDF.js 负责提取文本；jsdiff 负责逐词高亮差异。",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — Mozilla 出品的 PDF 渲染器",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — 文本差异比对库",
};

export default zh;
