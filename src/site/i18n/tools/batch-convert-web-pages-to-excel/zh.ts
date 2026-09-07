/**
 * i18n tool shard (batch-convert-web-pages-to-excel / zh)。
 * H1：批量把网页转成 Excel。增量是 HTML 表格进一本工作簿，不是截图、不是 A4 PDF、不是 Word 段落。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: '高级设置（可选）',
	tool_batch_convert_web_pages_to_excel_article:
		'把公开网址里的 HTML 表格抽进一本 Excel：每张表变成可筛选、可写公式的格子。正文和截图都不要。这不是 A4 打印件，也不是 Word 文稿。每个地址代抓一次、不落盘。粘贴的 HTML 留在本标签页。要分页打印请用「批量把网页转成 PDF」。要改标题段落请用「把 HTML 网页转成 Word 文档」。',
	tool_batch_convert_web_pages_to_excel_clear: '清空',
	tool_batch_convert_web_pages_to_excel_col_file: '工作表',
	tool_batch_convert_web_pages_to_excel_col_status: '状态',
	tool_batch_convert_web_pages_to_excel_col_url: '网址',
	tool_batch_convert_web_pages_to_excel_convert: '全部转换',
	tool_batch_convert_web_pages_to_excel_desc: '从网址列表抽出 HTML 表格，合成一本 Excel；不是截图，不是 PDF，不是 Word。',
	tool_batch_convert_web_pages_to_excel_description:
		'批量把网页转成 Excel（网页转 Excel / HTML 表格转 Excel / HTML 转 xlsx）：把网址里的表格抽进一本 .xlsx，不是截图也不是 A4 PDF。步骤：粘贴网址 → 全部转换 → 下载 Excel。示例：价目表和库存表变成两张工作表。网址代抓一次、不落盘。',
	tool_batch_convert_web_pages_to_excel_download: '下载 Excel',
	tool_batch_convert_web_pages_to_excel_empty: '请先粘贴至少一个网页地址，或切到「粘贴 HTML」。',
	tool_batch_convert_web_pages_to_excel_err_convert: '这个页面没有可用的 HTML 表格，已跳过。',
	tool_batch_convert_web_pages_to_excel_err_html_empty: '请先粘贴包含 <table> 的 HTML。',
	tool_batch_convert_web_pages_to_excel_err_load: 'Excel 库没加载成功，刷新后再试。',
	tool_batch_convert_web_pages_to_excel_err_too_many: '最多 10 条网址，多出来的行没有加入。',
	tool_batch_convert_web_pages_to_excel_err_url: '这个地址加载失败。请核对链接，或对方站点拦截了抓取。',
	tool_batch_convert_web_pages_to_excel_err_url_empty: '这一行不是有效的 http(s) 网页地址，已跳过。',
	tool_batch_convert_web_pages_to_excel_example:
		'载入样例会填入价目表和库存表两个网址，用本地 HTML 表生成一本工作簿（不访问线上站点），并启用下载 Excel。点全部转换才会去抓你粘贴的真实地址。粘贴 HTML 是同一套表格映射，只是不用网址。',
	tool_batch_convert_web_pages_to_excel_example_title: '示例',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'粘贴的 HTML 不会离开本标签页。如果你转的是网址列表，我们只把每个地址发给服务器抓一次 HTML，页面不落盘。.xlsx 在你的浏览器里生成。',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'Word 那页会把标题、列表、段落映射成可改的 .docx。本页不管散文，只把 HTML 表格格子写进 Excel。同样是代抓，产物不同。',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG 批处理是视口截图（图片 ZIP）。PDF 批处理是 A4 分页打印件。本页写出能在 Excel 里筛选的数字和文字——一本工作簿，不是一包图片。',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'可以。一行就够做网页转 Excel。成功的地址会进同一本 .xlsx，多张工作表。',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'不能。这里没有 OCR，也不读 PDF。请转换 HTML 页面，或粘贴表格源码。手里已是 CSV 请用 CSV ↔ JSON。',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'切到「粘贴 HTML」（HTML 转 Excel / HTML 表格转 Excel）。Chrome 完整网页 / .mhtml 不做——请另存为 HTML 或复制表格标记。这不是网页版 Excel 套件。',
	tool_batch_convert_web_pages_to_excel_faq_q1: '我的页面会上传并保存吗？',
	tool_batch_convert_web_pages_to_excel_faq_q2: '和「把 HTML 网页转成 Word 文档」有什么不同？',
	tool_batch_convert_web_pages_to_excel_faq_q3: '和批量网页转 JPG、PNG、PDF 有什么不同？',
	tool_batch_convert_web_pages_to_excel_faq_q4: '只转一个网址可以吗？',
	tool_batch_convert_web_pages_to_excel_faq_q5: '能从 PDF 里抽表格吗？',
	tool_batch_convert_web_pages_to_excel_faq_q6: '我手里是 HTML 或 HTML 表格，不是网址。Excel 网页版或 mhtml 呢？',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '队列里有 {n} 条网址',
	tool_batch_convert_web_pages_to_excel_how_body:
		'粘贴带 HTML 表格的公开网址，点全部转换，再下载一本 Excel。正文会跳过，只有 <table> 格子变成工作表。',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'一行一个 https 网址（价目表、公开 HTML 表很合适）。网页转 Excel 只贴一行也行。',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'点全部转换。每个公开地址代抓一次；没有可用表格的行会跳过，其余继续。',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'没有网址、只有源码（HTML 转 Excel / HTML 表格转 Excel）？切到「粘贴 HTML」，贴进去再点全部转换。',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'想按网址合成一张表，或保留很小的导航表？打开高级设置。',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'要 A4 打印件请用「批量把网页转成 PDF」。要改标题请用「把 HTML 网页转成 Word 文档」。已有 CSV 请用 CSV ↔ JSON。',
	tool_batch_convert_web_pages_to_excel_how_item_6: '至少抽出一张表之后，再点下载 Excel。',
	tool_batch_convert_web_pages_to_excel_how_title: '怎么用',
	tool_batch_convert_web_pages_to_excel_html_hint: '可粘贴片段或整份含 <table> 的 HTML。映射留在本标签页，不会上传。',
	tool_batch_convert_web_pages_to_excel_html_label: '含表格的 HTML',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>数量</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: '工作表',
	tool_batch_convert_web_pages_to_excel_layout_table: '每张 HTML 表一张工作表',
	tool_batch_convert_web_pages_to_excel_layout_url: '每个网址一张工作表（表格上下拼接）',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'默认一本工作簿里「一表一工作表」。改成按网址拼接时，同一页的多张表会叠在一张表里、中间空一行。默认跳过不到两行或两列的小表，避免导航格子挤进文件。',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'只复制 HTML <table> 格子。一行一个 http(s) 网址，最多 10 条。失败行跳过。成功的表进同一本 .xlsx。这不是截图换后缀，也不是 PDF 导出。',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'每个网址发给服务器抓一次 HTML，不落盘。粘贴内容不离开本标签页。工作簿在本机生成。',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'内网、登录墙、没有 <table> 的页面会让该行失败，其余继续。',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan 用空格占位。rowspan 摊平（每行独立）。脚本会去掉，所以纯 JS 画出来的表会是空的。',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'这不是整站爬虫，也不是网页版 Excel。请粘贴你已有的网址或 HTML。工作表名最长 31 个字符。',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'相对「把 HTML 网页转成 Word 文档」：只要表格，不要标题列表。相对 JPG/PNG/PDF 批处理：一本工作簿里的格子，不是图片 ZIP 或 A4 页。相对 CSV ↔ JSON：输入是网页，不是你已有的文件。',
	tool_batch_convert_web_pages_to_excel_rules_title: '规则与边界',
	tool_batch_convert_web_pages_to_excel_sample: '载入样例',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: '跳过过小的表（不足 2×2）',
	tool_batch_convert_web_pages_to_excel_status_converting: '正在映射 HTML 表格…',
	tool_batch_convert_web_pages_to_excel_status_done: '本批结束——看表格，再下载 Excel。',
	tool_batch_convert_web_pages_to_excel_status_fetching: '正在抓取页面 HTML…',
	tool_batch_convert_web_pages_to_excel_status_ok: '表格已映射',
	tool_batch_convert_web_pages_to_excel_status_queued: '排队中',
	tool_batch_convert_web_pages_to_excel_status_skip: '已跳过',
	tool_batch_convert_web_pages_to_excel_status_working: '正在转换本批…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} 成功 · {skip} 跳过',
	tool_batch_convert_web_pages_to_excel_tab_html: '粘贴 HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: '网页地址',
	tool_batch_convert_web_pages_to_excel_title: '批量把网页转成 Excel',
	tool_batch_convert_web_pages_to_excel_url_hint: '一行一个公开 http(s) 网址，最多 10 条。每个页面代抓一次。脚本会去掉。只有 HTML 表格会变成工作表。',
	tool_batch_convert_web_pages_to_excel_url_label: '网页地址（一行一个）',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'把公开价目或 SKU 的 HTML 表存进 Excel，数量仍是可筛选的数字——PNG 截图只是像素。',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'从两个帮助页抓参数表进同一本工作簿，再自己加 SUM 列。Word 会把标题留成段落。',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'A4 打印件走「批量把网页转成 PDF」，已有 CSV 走 CSV ↔ JSON；源还是网页表格时用本页。',
	tool_batch_convert_web_pages_to_excel_usecases_title: '适合这些情况',
};

export default zh;
