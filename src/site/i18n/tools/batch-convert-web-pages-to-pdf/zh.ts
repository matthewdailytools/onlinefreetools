/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / zh).
 * H1 用当地句「批量把网页转成 PDF」，不把 batch 硬塞进中文标题。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'每行贴一个公开网页地址，在本标签页逐条转成 A4 PDF，失败行跳过，成功项打成 ZIP。网址会经服务器代抓一次且不落盘；转 PDF 留在你的设备上。',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: '隐藏的网页截图框',
	tool_batch_convert_web_pages_to_pdf_clear: '清空',
	tool_batch_convert_web_pages_to_pdf_col_file: '文件名',
	tool_batch_convert_web_pages_to_pdf_col_status: '状态',
	tool_batch_convert_web_pages_to_pdf_col_url: '网址',
	tool_batch_convert_web_pages_to_pdf_convert: '全部转换',
	tool_batch_convert_web_pages_to_pdf_desc:
		'把网址列表里的网页批量转成 PDF，打包 ZIP 下载；代抓一次、不落盘，转换留在本机。',
	tool_batch_convert_web_pages_to_pdf_description:
		'批量把网页转成 PDF：把网址列表贴进来（每行一个 https，最多 10 条），一次把多个网页转成 A4 PDF，失败行跳过，再下载 ZIP。步骤：贴列表 → 全部转换 → 看表格 → 下载。示例：两条样例帮助页和政策页会变成 ZIP 里的两份 PDF。网址经服务器代抓一次且不保存；转文件留在你的设备上。只要粘贴一段 HTML，请用「HTML 转 PDF」。',
	tool_batch_convert_web_pages_to_pdf_download_zip: '下载 ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: '请先贴至少一条网页地址。',
	tool_batch_convert_web_pages_to_pdf_err_convert: '这一页没能转成 PDF，已跳过。',
	tool_batch_convert_web_pages_to_pdf_err_fflate: '当前浏览器打不成 ZIP，换一个较新的浏览器再试。',
	tool_batch_convert_web_pages_to_pdf_err_load: '转换库没加载成功，刷新后再试。',
	tool_batch_convert_web_pages_to_pdf_err_too_many: '本页最多 10 条网址，多出来的行没有加入。',
	tool_batch_convert_web_pages_to_pdf_err_url: '这个地址加载失败。请核对链接，或对方站点拦截了抓取。',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: '这一行不是有效的 http(s) 网页地址，已跳过。',
	tool_batch_convert_web_pages_to_pdf_example:
		'载入样例会填入两条 example.com 地址，用本地示例页生成两份 PDF（不访问线上站点），并启用下载 ZIP。点「全部转换」才会去抓你贴的真实网址。',
	tool_batch_convert_web_pages_to_pdf_example_title: '示例',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'转 PDF 在本标签页完成。转换网址列表时，我们会把每条地址发给服务器抓一次 HTML，页面内容不落盘。PDF 在你的设备上生成，再在本机打成 ZIP。',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'本页做网址列表：多个网页转 PDF 再打包。只要一段 HTML 或单条地址加预览编辑，请用「HTML 转 PDF」。',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'不会。脚本会被去掉。登录墙、付费墙、靠 JavaScript 渲染的应用通常对不上线上效果，打印 CSS 也可能不同。',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'成功的每一行是一份独立 PDF，打进同一个 ZIP。本页不会合成一份文件——若要合并，下载后再用「合并文件成一个 PDF」。',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'最多 10 条 http(s) 网址。多出的行会被忽略。失败行跳过，其余条目继续转。',
	tool_batch_convert_web_pages_to_pdf_faq_q1: '网页会上传并保存在服务器上吗？',
	tool_batch_convert_web_pages_to_pdf_faq_q2: '和「HTML 转 PDF」有什么不同？',
	tool_batch_convert_web_pages_to_pdf_faq_q3: '登录后的页面或重度 JS 站点会跟线上一样吗？',
	tool_batch_convert_web_pages_to_pdf_faq_q4: '结果是一份 PDF 还是多份打成 ZIP？',
	tool_batch_convert_web_pages_to_pdf_faq_q5: '一次能转多少条网址？',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '队列里有 {n} 条网址',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'把公开网页的网址列表贴进来，逐条转成 PDF，再把成功的文件打成 ZIP 带走。',
	tool_batch_convert_web_pages_to_pdf_how_item_1: '每行贴一个 https 网址（帮助中心或政策页很合适）。',
	tool_batch_convert_web_pages_to_pdf_how_item_2: '载入等待默认约 1 秒；若 PDF 里图片是空框，再把秒数调高。',
	tool_batch_convert_web_pages_to_pdf_how_item_3: '点「全部转换」。每条公开网址代抓一次，失败行跳过。',
	tool_batch_convert_web_pages_to_pdf_how_item_4: '只要粘贴一段 HTML、不是列表？请用「HTML 转 PDF」。',
	tool_batch_convert_web_pages_to_pdf_how_item_5: '至少一行成功后再下载 ZIP。进页时已经自动跑过载入样例。',
	tool_batch_convert_web_pages_to_pdf_how_title: '怎么用',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: '本批进度',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '已用 {s} 秒',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: '抓取',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: '等图',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: '出 PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'一行一个 http(s) 网址，最多 10 条。按顺序转换。失败跳过。成功的 PDF 打进 ZIP。',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'每条网址发给服务器抓一次 HTML，不落盘。PDF 在本标签页生成。',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'内网、登录墙、打不开的页面只让该行失败，整批其余行继续。',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'ZIP 里重名会变成 name (2).pdf。截图前会去掉脚本。',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'这不是整站爬虫。请自己贴已经准备好的网址。',
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
		'每行一个公开 http(s) 网址，最多 10 条。我们代抓一次并改写 CSS/图片地址。转 PDF 前会去掉脚本。',
	tool_batch_convert_web_pages_to_pdf_url_label: '网页地址（一行一个）',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: '把帮助中心或文档里的多篇页面存成 PDF，不必逐个打开转换。',
	tool_batch_convert_web_pages_to_pdf_usecase_2: '把政策页的网址列表归档成 ZIP，方便稍后阅读。',
	tool_batch_convert_web_pages_to_pdf_usecase_3: '单段 HTML 请留在「HTML 转 PDF」；手里已经有很多链接时再用本页。',
	tool_batch_convert_web_pages_to_pdf_usecases_title: '适合这些情况',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'图片开始加载后再多等几秒，远程图才来得及画完。默认 1 秒。PDF 里出现空图框时再调高。',
	tool_batch_convert_web_pages_to_pdf_wait_label: '载入等待（秒）',
};

export default zh;
