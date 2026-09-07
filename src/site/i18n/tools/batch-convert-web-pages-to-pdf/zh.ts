/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / zh).
 * H1 用当地句「批量把网页转成 PDF」。
 * 相对 JPG 邻页的增量：A4 纵向分页、打印/归档，不是视口截图。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'贴公开网页的网址，本标签页把每一篇切成 A4 纵向 PDF，方便打印和按页阅读，不是一张无限高的 JPEG。失败行跳过，成功项打进 ZIP。每条地址经服务器代抓一次且不落盘。要丢进聊天的截图、或对照手机/桌面首屏，请用「批量把网页转成 JPG」。',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: '隐藏的网页截图框',
	tool_batch_convert_web_pages_to_pdf_clear: '清空',
	tool_batch_convert_web_pages_to_pdf_col_file: '文件名',
	tool_batch_convert_web_pages_to_pdf_col_status: '状态',
	tool_batch_convert_web_pages_to_pdf_col_url: '网址',
	tool_batch_convert_web_pages_to_pdf_convert: '全部转换',
	tool_batch_convert_web_pages_to_pdf_desc:
		'把网址列表存成可打印的 A4 纵向 PDF，打包 ZIP；不是网页长图。',
	tool_batch_convert_web_pages_to_pdf_description:
		'批量把网页转成 PDF：网址列表一次出 A4 纵向分页文件，方便打印和按页阅读，不是一张 JPEG 长图。步骤：贴列表 → 全部转换 → 下载 ZIP。示例：帮助页和政策页变成两份 PDF。每条网址代抓一次、不落盘。只要一段 HTML，请用「将 HTML 转换为 PDF」。',
	tool_batch_convert_web_pages_to_pdf_download_zip: '下载 ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: '请先贴至少一条网页地址。',
	tool_batch_convert_web_pages_to_pdf_err_convert: '这一页没能转成 PDF，已跳过。',
	tool_batch_convert_web_pages_to_pdf_err_fflate: '当前浏览器打不成 ZIP，换一个较新的浏览器再试。',
	tool_batch_convert_web_pages_to_pdf_err_load: '转换库没加载成功，刷新后再试。',
	tool_batch_convert_web_pages_to_pdf_err_too_many: '本页最多 10 条网址，多出来的行没有加入。',
	tool_batch_convert_web_pages_to_pdf_err_url: '这个地址加载失败。请核对链接，或对方站点拦截了抓取。',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: '这一行不是有效的 http(s) 网页地址，已跳过。',
	tool_batch_convert_web_pages_to_pdf_example:
		'载入样例会填入两条 example.com 帮助页和政策页地址，用本地 HTML 生成两份带 CSS 分页的 A4 纵向 PDF（不访问线上站点），并启用下载 ZIP。点「全部转换」才会去抓你贴的真实网址。打印样式会影响每一页从哪切开。',
	tool_batch_convert_web_pages_to_pdf_example_title: '示例',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'「批量把网页转成 JPG」按你选的视口（桌面 1280、平板 768、手机 390）截成一张 JPEG，还可调画质和整页/首屏。本页把每篇网页切成 A4 纵向多页，方便打印和按页翻。同样是网址列表，一个是分页文档，一个是截图。',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'本页吃网址列表：多篇公开网页变成多份 A4 PDF，再打进 ZIP。只要一段 HTML，或单条地址加预览编辑，请用「将 HTML 转换为 PDF」。',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'纸张固定 A4 纵向。长页面会按 CSS 分页规则切开（另有传统分页兜底），不会变成一张无限高的长页。要长图请用「批量把网页转成 JPG」。',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'PDF 在本标签页生成。网址列表会把每条地址发给服务器抓一次 HTML，页面内容不落盘。文件在你的设备上打包 ZIP。',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'成功的每一行是一份独立 PDF，打进同一个 ZIP。本页不会合成一本——若要合并，下载后再用「将文件合并为一个 PDF」。',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'不会。脚本会被去掉。登录墙、付费墙、靠 JavaScript 渲染的应用通常对不上线上效果。打印 CSS 也可能让分页位置和屏幕浏览时不同。',
	tool_batch_convert_web_pages_to_pdf_faq_q1: '和「批量把网页转成 JPG」有什么不同？',
	tool_batch_convert_web_pages_to_pdf_faq_q2: '和「将 HTML 转换为 PDF」有什么不同？',
	tool_batch_convert_web_pages_to_pdf_faq_q3: '纸张是什么尺寸？会不会变成一张超长页？',
	tool_batch_convert_web_pages_to_pdf_faq_q4: '网页会上传并保存在服务器上吗？',
	tool_batch_convert_web_pages_to_pdf_faq_q5: '结果是一份 PDF 还是多份打成 ZIP？',
	tool_batch_convert_web_pages_to_pdf_faq_q6: '登录后的页面或重度 JS 站点会跟线上一样吗？',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '队列里有 {n} 条网址',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'把要归档、要打印的公开网址贴进来，逐条转成 A4 纵向 PDF，再把成功的文件打成 ZIP。',
	tool_batch_convert_web_pages_to_pdf_how_item_1: '每行贴一个 https 网址。政策页、帮助中心、需要打印的公开文档最合适。',
	tool_batch_convert_web_pages_to_pdf_how_item_2: '载入等待默认约 1 秒；若某一页 PDF 里图片是空框，再把秒数调高。',
	tool_batch_convert_web_pages_to_pdf_how_item_3: '点「全部转换」。每条公开网址代抓一次，并按 A4 纵向分页（CSS 分页会参与切页）。失败行跳过。',
	tool_batch_convert_web_pages_to_pdf_how_item_4: '只要粘贴一段 HTML、要预览编辑？请用「将 HTML 转换为 PDF」。要按视口截一张图而不是分页文档，请用「批量把网页转成 JPG」。',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'至少一行成功后再下载 ZIP。点「载入样例」可试用两份带分页的本地 A4 页。',
	tool_batch_convert_web_pages_to_pdf_how_item_6: '若要把多份 PDF 合成一本，下载后再用「将文件合并为一个 PDF」。',
	tool_batch_convert_web_pages_to_pdf_how_title: '怎么用',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: '本批进度',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '已用 {s} 秒',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: '抓取',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: '等图',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: '出 PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'一行一个 http(s) 网址，最多 10 条。产物是 A4 纵向分页 PDF，不是整页长图。按顺序转换。失败跳过。成功项打进 ZIP。',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'每条网址发给服务器抓一次 HTML，不落盘。PDF 在本标签页生成，纸张固定 A4 纵向。',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'分页走 CSS 分页规则（另有传统分页兜底）。打印样式可能和屏幕版不一样。特别高的页面仍会封顶，避免标签页崩溃。',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'内网、登录墙、打不开的页只让该行失败。ZIP 重名变成 name (2).pdf。转之前会去掉脚本。',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'这不是整站爬虫，也不是把网页拍成一张图。请贴已经准备好的公开网址。',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'对比「批量把网页转成 JPG」：那边按视口截一张 JPEG，没有 A4 分页。对比「将 HTML 转换为 PDF」：那边吃一段 HTML，不是网址列表。对比「将文件合并为一个 PDF」：本页不把多份合成一本。',
	tool_batch_convert_web_pages_to_pdf_rules_title: '你需要知道的规则',
	tool_batch_convert_web_pages_to_pdf_sample: '载入样例',
	tool_batch_convert_web_pages_to_pdf_status_done: '本批完成——先看表格，再下载 ZIP。',
	tool_batch_convert_web_pages_to_pdf_status_fetching: '正在抓取页面 HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF 已就绪',
	tool_batch_convert_web_pages_to_pdf_status_skip: '已跳过',
	tool_batch_convert_web_pages_to_pdf_status_waiting: '正在等待图片加载完…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'正在生成 PDF…这一步较重，页面可能会停几秒',
	tool_batch_convert_web_pages_to_pdf_status_queued: '排队中',
	tool_batch_convert_web_pages_to_pdf_status_working: '正在转换这一批…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} 成功 · {skip} 跳过',
	tool_batch_convert_web_pages_to_pdf_title: '批量把网页转成 PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'每行一个公开 http(s) 网址，最多 10 条。我们代抓一次并改写 CSS/图片地址。转成 A4 纵向 PDF 前会去掉脚本；分页走 CSS。',
	tool_batch_convert_web_pages_to_pdf_url_label: '网页地址（一行一个）',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: '开会前把帮助中心或多篇公开文档一次存成可打印的 A4 PDF，按页翻，不必每个标签页点打印。',
	tool_batch_convert_web_pages_to_pdf_usecase_2: '把政策、条款、公告的网址列表归档成 ZIP，方便稍后离线阅读或当邮件附件。',
	tool_batch_convert_web_pages_to_pdf_usecase_3: '单段 HTML 请留在「将 HTML 转换为 PDF」；聊天贴图或手机/桌面首屏对照请用「批量把网页转成 JPG」。本页只做多条链接的分页文档。',
	tool_batch_convert_web_pages_to_pdf_usecases_title: '适合这些情况',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'图片开始加载后再多等几秒，远程图才来得及画进每一页 A4。默认 1 秒。某一页出现空图框时再调高。',
	tool_batch_convert_web_pages_to_pdf_wait_label: '载入等待（秒）',
};

export default zh;
