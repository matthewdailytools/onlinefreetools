/**
 * i18n tool shard (convert-html-web-pages-to-word-document / zh)。
 * H1：把 HTML 网页转成 Word 文档。增量是可编辑标题/列表/表格，不是 A4 PDF，也不是网页截图。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: '高级设置（可选）',
	tool_convert_html_web_pages_to_word_document_article:
		'把粘贴的 HTML 或公开网页变成可改的 .docx：标题、列表、表格和链接会映射成 Word 样式。这不是 A4 打印件，也不是截图。粘贴内容留在本标签页。网址代抓一次、不落盘。要分页打印请用「将 HTML 转换为 PDF」。手里已是 PDF 请用「PDF 转 Word 文档」。',
	tool_convert_html_web_pages_to_word_document_clear: '清空',
	tool_convert_html_web_pages_to_word_document_convert: '转换',
	tool_convert_html_web_pages_to_word_document_desc: '粘贴 HTML 或抓取网址，生成可编辑的 Word 文档；不是 PDF，不是截图。',
	tool_convert_html_web_pages_to_word_document_description:
		'把 HTML 网页转成 Word 文档（HTML 转 Word / HTML 转 DOCX）：粘贴源码或抓取网址，把标题、列表、表格映射成可改的 .docx，再下载。步骤：粘贴或抓取 → 转换 → 下载。示例：发布说明的标题和表格变成 Word 样式。粘贴内容留在本标签页；网址代抓一次、不落盘。',
	tool_convert_html_web_pages_to_word_document_download: '下载',
	tool_convert_html_web_pages_to_word_document_empty: '请先粘贴 HTML 或填写网页地址。',
	tool_convert_html_web_pages_to_word_document_err_convert: '这段 HTML 没能生成 Word 文件，请检查标记后再试。',
	tool_convert_html_web_pages_to_word_document_err_load: 'Word 库没加载成功，刷新后再试。',
	tool_convert_html_web_pages_to_word_document_err_url: '这个地址加载失败。请核对链接，或对方站点拦截了抓取。',
	tool_convert_html_web_pages_to_word_document_err_url_empty: '请先填写有效的 http(s) 网页地址。',
	tool_convert_html_web_pages_to_word_document_example:
		'载入样例会填入发布说明 HTML（一个 H1、一个列表、一个两列表格、一条链接），自动转换并启用下载。.docx 里是真正的标题和表格样式，可以改字。切到「网页地址」再点转换才会去抓线上网址。',
	tool_convert_html_web_pages_to_word_document_example_title: '示例',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'粘贴的 HTML 不出本标签页。如果转换的是网址，我们会把地址发到服务器代抓一次 HTML，并不保存。Word 文件在你的浏览器里生成。',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'「将 HTML 转换为 PDF」会按 A4 分页，方便打印。本页把 HTML 映射成可改的段落、标题、列表和表格。同样是 HTML，产物不同。',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'「PDF 转 Word 文档」的输入是 PDF 文件和它的文字层。本页的输入是你粘贴的 HTML 或网页网址。手里已有 PDF 请用那个工具。',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'可以。打开「网页地址」粘贴一条 https，再点转换。脚本会被去掉。登录墙和靠 JS 画出来的应用往往对不上线上。CSS 布局不会像素级还原。',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'下载的是 .docx（HTML 转 DOCX）。用 Word 或其他能读 Office Open XML 的软件打开。不是老的 .doc，也不是 Chrome 的 .mhtml。',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'不行。请改成导出或复制 HTML。Chrome 完整网页 / MHTML 是另一种格式，本页不解析。',
	tool_convert_html_web_pages_to_word_document_faq_q1: '会上传并保存我的 HTML 或页面吗？',
	tool_convert_html_web_pages_to_word_document_faq_q2: '和「将 HTML 转换为 PDF」有什么不同？',
	tool_convert_html_web_pages_to_word_document_faq_q3: '和「PDF 转 Word 文档」有什么不同？',
	tool_convert_html_web_pages_to_word_document_faq_q4: '能不能把网页网址转成 Word？',
	tool_convert_html_web_pages_to_word_document_faq_q5: '结果是 .docx 吗？',
	tool_convert_html_web_pages_to_word_document_faq_q6: '能转 Chrome 的 .mhtml 吗？',
	tool_convert_html_web_pages_to_word_document_how_body:
		'粘贴 HTML（HTML 转 Word），或改填网页地址，点「转换」，再下载可改的 .docx。标题和表格会变成 Word 样式，不是一张图。',
	tool_convert_html_web_pages_to_word_document_how_item_1: '已有源码就留在「粘贴 HTML」。要把公开页转成 Word，切到「网页地址」贴一条 https。',
	tool_convert_html_web_pages_to_word_document_how_item_2: '点「转换」。脚本会被去掉。标题、列表、表格、链接映射进 Word。加载失败的图会跳过。',
	tool_convert_html_web_pages_to_word_document_how_item_3: 'HTML 里的图要不要嵌进 Word？打开「高级设置（可选）」。「嵌入图片」默认开，被拦的图仍会跳过。只要能复制的字、不要标题样式和表格对象，勾「纯文字」（会同时关掉嵌图）。',
	tool_convert_html_web_pages_to_word_document_how_item_4: '要 A4 打印请用「将 HTML 转换为 PDF」。要截图请用批量网页转 PNG 或 JPG。手里已是 PDF 请用「PDF 转 Word 文档」。',
	tool_convert_html_web_pages_to_word_document_how_item_5: '转换成功后再点「下载」。打开 .docx 就可以改字。',
	tool_convert_html_web_pages_to_word_document_how_title: '怎么用',
	tool_convert_html_web_pages_to_word_document_html_hint: '可以贴片段，也可以贴整份 HTML。转换前会去掉脚本。CSS 布局不会按像素重做。',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>发布说明</h1><p>把 HTML 贴在这里…</p>',
	tool_convert_html_web_pages_to_word_document_hud_download: '下载 Word 文件',
	tool_convert_html_web_pages_to_word_document_hud_elapsed_tpl: '已用 {s} 秒',
	tool_convert_html_web_pages_to_word_document_hud_fail_hint: '请核对 HTML 或网址，改完后再点「转换」。',
	tool_convert_html_web_pages_to_word_document_hud_fail_title: '转换失败',
	tool_convert_html_web_pages_to_word_document_hud_next: '转换完成。下一步：把 .docx 下载到本机，打开后就能改字。',
	tool_convert_html_web_pages_to_word_document_hud_pct_tpl: '{pct}%',
	tool_convert_html_web_pages_to_word_document_hud_step_fetch: '抓取',
	tool_convert_html_web_pages_to_word_document_hud_step_map: '映射',
	tool_convert_html_web_pages_to_word_document_hud_step_pack: '打包',
	tool_convert_html_web_pages_to_word_document_hud_title: '转换进度',
	tool_convert_html_web_pages_to_word_document_imgs_hint: '开启后会尝试把 <img> 嵌进 Word。损坏或被拦的图会跳过。只要文字就关掉。',
	tool_convert_html_web_pages_to_word_document_imgs_label: '嵌入图片',
	tool_convert_html_web_pages_to_word_document_opts_hint: '「嵌入图片」会尝试带上 HTML 里的图。「纯文字」会把标题、表格和链接收成普通段落。CSS 定位不会映射。输出始终是一份 .docx。',
	tool_convert_html_web_pages_to_word_document_plain_hint: '只保留可改段落：不要标题样式、不要表格对象、也不嵌图。链接写成「文案 (网址)」。表格单元格变成用制表符分开的行。',
	tool_convert_html_web_pages_to_word_document_plain_label: '纯文字',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'一次转换生成一份 .docx。标题、段落、列表、表格、链接和可选图片会被映射。绝对定位、固定底栏和脚本不会保留。',
	tool_convert_html_web_pages_to_word_document_rules_item_1: '粘贴的 HTML 留在本标签页。网页地址代抓一次、不落盘。',
	tool_convert_html_web_pages_to_word_document_rules_item_2: '默认：h1–h6 变成 Word 标题，ul/ol 变成列表，table 变成表格，a 变成超链接。高级设置里勾「纯文字」后，这些都变成普通段落。',
	tool_convert_html_web_pages_to_word_document_rules_item_3: '登录墙、JS 应用和打印 CSS 往往对不上线上。这不是网页截图。',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'对比「将 HTML 转换为 PDF」：可编辑 Word，不是 A4 页。对比「PDF 转 Word 文档」：输入是 HTML 或网址，不是 PDF 文件。对比「多图转 Word」：输入是标记，不是照片堆。',
	tool_convert_html_web_pages_to_word_document_rules_title: '规则与边界',
	tool_convert_html_web_pages_to_word_document_sample: '载入样例',
	tool_convert_html_web_pages_to_word_document_status_done: '转换完成——下一步请点「下载」。',
	tool_convert_html_web_pages_to_word_document_status_fetching: '正在抓取页面 HTML…',
	tool_convert_html_web_pages_to_word_document_status_mapping: '正在把 HTML 收成 Word 段落…',
	tool_convert_html_web_pages_to_word_document_status_packing: '正在打包 .docx…',
	tool_convert_html_web_pages_to_word_document_status_working: '正在生成 Word 文档…',
	tool_convert_html_web_pages_to_word_document_tab_html: '粘贴 HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: '网页地址',
	tool_convert_html_web_pages_to_word_document_title: '把 HTML 网页转成 Word 文档',
	tool_convert_html_web_pages_to_word_document_url_hint: '一条公开 http(s) 网址。代抓一次并改写 CSS/图片地址。转 Word 前会去掉脚本。',
	tool_convert_html_web_pages_to_word_document_url_label: '网页地址',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1: '把帮助中心导出的 HTML 变成法务能批注的 Word 稿——标题还是标题，不是压扁的图。',
	tool_convert_html_web_pages_to_word_document_usecase_2: '抓取一篇公开发布说明，表格仍是可改的 Word 表。',
	tool_convert_html_web_pages_to_word_document_usecase_3: 'A4 打印留在「将 HTML 转换为 PDF」，截图留在批量网页转 PNG；要可编辑 .docx 请用本页。',
	tool_convert_html_web_pages_to_word_document_usecases_title: '适合这些情况',
};

export default zh;
