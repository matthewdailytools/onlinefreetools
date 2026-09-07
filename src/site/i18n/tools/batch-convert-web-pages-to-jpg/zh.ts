/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / zh)。
 * H1 用当地句「批量把网页转成 JPG」，不把 batch 硬塞进中文标题。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: '高级设置（可选）',
	tool_batch_convert_web_pages_to_jpg_article:
		'每行贴一个公开网页地址，按你选的视口在本标签页截成 JPEG，失败行跳过，成功项打成 ZIP。网址会经服务器代抓一次且不落盘；出图留在你的设备上。这是网页截图，不是 A4 PDF。',
	tool_batch_convert_web_pages_to_jpg_capture_first: '仅首屏',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: '隐藏的网页截图框',
	tool_batch_convert_web_pages_to_jpg_capture_full: '整页长图',
	tool_batch_convert_web_pages_to_jpg_capture_label: '截图范围',
	tool_batch_convert_web_pages_to_jpg_clear: '清空',
	tool_batch_convert_web_pages_to_jpg_col_file: '文件名',
	tool_batch_convert_web_pages_to_jpg_col_status: '状态',
	tool_batch_convert_web_pages_to_jpg_col_url: '网址',
	tool_batch_convert_web_pages_to_jpg_convert: '全部转换',
	tool_batch_convert_web_pages_to_jpg_desc:
		'把网址列表里的网页批量截成 JPG，再打包 ZIP；代抓一次、不落盘。',
	tool_batch_convert_web_pages_to_jpg_description:
		'批量把网页转成 JPG：把网址列表贴进来（一行也能做网页转 JPG / 网址转 JPG）。可选视口与 JPEG 画质、整页或首屏，再下载 ZIP。步骤：贴列表 → 全部转换 → 下载 ZIP。示例：两条帮助页变成两张 JPEG。每条网址代抓一次、不落盘。',
	tool_batch_convert_web_pages_to_jpg_download_zip: '下载 ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: '请先贴至少一条网页地址。',
	tool_batch_convert_web_pages_to_jpg_err_convert: '这一页没能转成 JPEG，已跳过。',
	tool_batch_convert_web_pages_to_jpg_err_fflate: '当前浏览器打不成 ZIP，换一个较新的浏览器再试。',
	tool_batch_convert_web_pages_to_jpg_err_load: '转换库没加载成功，刷新后再试。',
	tool_batch_convert_web_pages_to_jpg_err_too_many: '本页最多 10 条网址，多出来的行没有加入。',
	tool_batch_convert_web_pages_to_jpg_err_url: '这个地址加载失败。请核对链接，或对方站点拦截了抓取。',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: '这一行不是有效的 http(s) 网页地址，已跳过。',
	tool_batch_convert_web_pages_to_jpg_example:
		'载入样例会填入两条 example.com 地址，用本地示例页生成两张 JPEG（不访问线上站点），并启用下载 ZIP。点「全部转换」才会去抓你贴的真实网址。视口、质量和整页/首屏会改变图里的像素。',
	tool_batch_convert_web_pages_to_jpg_example_title: '示例',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'转换在本标签页完成。如果转换的是网址列表，我们会把每个地址发到服务器代抓一次 HTML，并不保存页面。JPEG 在你的浏览器里生成，再在这里打成 ZIP。',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'「批量把网页转成 PDF」会按 A4 分页，方便阅读和打印。本页按你选的宽度（桌面 1280、平板 768、手机 390）截成一张 JPEG，还可调质量和整页/首屏。同样是网址列表，产物不同。',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'「PDF 转 JPG」的输入是你上传的 PDF 文件。本页的输入是网页网址。手里已有 PDF 请用那个工具；手里是一串链接请用本页。',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'不会。脚本会被去掉。登录墙、付费墙和靠 JavaScript 渲染的应用常常对不上线上页面。响应式样式会跟着你选的视口宽度走。',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'成功的行各自一张 JPEG，打进一个 ZIP。只贴一行也可以（网页转 JPG / 网址转 JPG）。本页不会把多张图拼成一张。',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'视口宽度会换布局（手机站 vs 桌面站）。JPEG 质量是体积和压缩痕迹的取舍。整页按滚动高度截（超高首页会封顶，避免标签页崩溃）；首屏大约只留一个视口高度。',
	tool_batch_convert_web_pages_to_jpg_faq_q1: '这些网页会上传并保存在服务器上吗？',
	tool_batch_convert_web_pages_to_jpg_faq_q2: '和「批量把网页转成 PDF」有什么不同？',
	tool_batch_convert_web_pages_to_jpg_faq_q3: '和「PDF 转 JPG」有什么不同？',
	tool_batch_convert_web_pages_to_jpg_faq_q4: '登录后才能看的站、或很依赖脚本的站，截出来会一样吗？',
	tool_batch_convert_web_pages_to_jpg_faq_q5: '结果是一张 JPG 还是一个 ZIP？只转一个网址行不行？',
	tool_batch_convert_web_pages_to_jpg_faq_q6: '视口、JPEG 质量和「仅首屏」会改变什么？',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '队列里有 {n} 条网址',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'把公开网页的网址列表贴进来，点「全部转换」（默认桌面 1280、JPEG 85%、整页），再把成功的图打成 ZIP 带走。',
	tool_batch_convert_web_pages_to_jpg_how_item_1: '每行贴一个 https 网址（帮助中心或工单链接都合适）。只贴一行也能做网页转 JPG。',
	tool_batch_convert_web_pages_to_jpg_how_item_2: '点「全部转换」。默认是桌面 1280、JPEG 质量 85%、整页长图。每条公开网址代抓一次；失败行跳过。',
	tool_batch_convert_web_pages_to_jpg_how_item_3: '要手机宽度、只截首屏、或远程图还空着？打开「高级设置（可选）」改视口、JPEG 质量、截图范围和载入等待。',
	tool_batch_convert_web_pages_to_jpg_how_item_4: '若要可打印的 A4 文件而不是截图，请用「批量把网页转成 PDF」。已经有 PDF 文件请用「PDF 转 JPG」。',
	tool_batch_convert_web_pages_to_jpg_how_item_5: '至少一行成功后再点「下载 ZIP」。',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'点「载入样例」可用两张本地页试跑，进度面板会显示。',
	tool_batch_convert_web_pages_to_jpg_how_title: '怎么用',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '已用 {s} 秒',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: '抓取',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: '图片',
	tool_batch_convert_web_pages_to_jpg_hud_title: '批量进度',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'视口宽度会改布局。JPEG 质量会改文件体积。整页是长图；首屏大约只有一屏高。',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'JPEG 质量',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'每行一个 http(s) 网址，最多 10 条。串行转换。失败行跳过。成功的 JPEG 打进 ZIP。视口、质量和截图范围会改变像素——这不是把 PDF 换个后缀。',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'每条网址只发到服务器代抓一次 HTML，不落盘。JPEG 在本标签页生成。',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'私网、登录墙、打不开的页会让该行失败。其余行继续。',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'ZIP 里重名会变成 name (2).jpg。脚本和 noscript 刷新陷阱会去掉。特别高的首页会封顶，避免画布把标签页撑崩。',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'这不是整站爬虫。请贴你已经有的网址。',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'对比「批量把网页转成 PDF」：没有 A4 分页。对比「PDF 转 JPG」：输入是网址列表，不是上传 PDF。对比批量转图片：输入是网页，不是本地照片。',
	tool_batch_convert_web_pages_to_jpg_rules_title: '你需要知道的规则',
	tool_batch_convert_web_pages_to_jpg_sample: '载入样例',
	tool_batch_convert_web_pages_to_jpg_status_converting: '正在出 JPEG… 标签页可能会停几秒',
	tool_batch_convert_web_pages_to_jpg_status_done: '本批结束——先看表格，再下载 ZIP。',
	tool_batch_convert_web_pages_to_jpg_status_fetching: '正在抓取页面 HTML…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG 已就绪',
	tool_batch_convert_web_pages_to_jpg_status_queued: '排队中',
	tool_batch_convert_web_pages_to_jpg_status_skip: '已跳过',
	tool_batch_convert_web_pages_to_jpg_status_waiting: '正在等图片加载完…',
	tool_batch_convert_web_pages_to_jpg_status_working: '正在转换这一批…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} 成功 · {skip} 跳过',
	tool_batch_convert_web_pages_to_jpg_title: '批量把网页转成 JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'每行一个公开 http(s) 网址，最多 10 条。我们代抓一次并改写 CSS/图片地址。截图前会去掉脚本。',
	tool_batch_convert_web_pages_to_jpg_url_label: '网页地址（每行一条）',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: '把几条帮助中心或工单链接一次截成 JPEG，丢进聊天，不用逐个开标签页。',
	tool_batch_convert_web_pages_to_jpg_usecase_2: '同一条公开页用手机 390 和桌面 1280 各截一版首屏，评审前对照布局。',
	tool_batch_convert_web_pages_to_jpg_usecase_3: '要 A4 归档请用「批量把网页转成 PDF」；要从网址列表拿图片文件再用本页。',
	tool_batch_convert_web_pages_to_jpg_usecases_title: '适合这些事',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: '桌面 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: '视口宽度',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: '手机 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: '平板 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'图片开始加载后再多等几秒，让远程图跑完。默认 1 秒。如果 JPEG 里还是空图框，就把秒数调高。',
	tool_batch_convert_web_pages_to_jpg_wait_label: '载入等待（秒）',
};

export default zh;
