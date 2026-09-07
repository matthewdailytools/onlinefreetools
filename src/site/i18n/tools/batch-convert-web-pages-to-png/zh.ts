/**
 * i18n tool shard (batch-convert-web-pages-to-png / zh)。
 * H1 用当地句「批量把网页转成 PNG」；增量是无损锐利边与透明底，不是 JPEG 换后缀。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: '高级设置（可选）',
	tool_batch_convert_web_pages_to_png_article:
		'按你选的宽度把公开网址截成无损 PNG。可以白底或透明底，也可以 1× 或 2× 像素，成功项打 ZIP。适合要对齐组件库、保留 1 像素描边的界面图，不是聊天用的 JPEG，也不是 A4 打印件。每条地址代抓一次、不落盘。体积更小的聊天图请用「批量把网页转成 JPG」。',
	tool_batch_convert_web_pages_to_png_bg_label: '背景',
	tool_batch_convert_web_pages_to_png_bg_transparent: '透明',
	tool_batch_convert_web_pages_to_png_bg_white: '白底',
	tool_batch_convert_web_pages_to_png_capture_first: '仅首屏',
	tool_batch_convert_web_pages_to_png_capture_frame_title: '隐藏的网页截图框',
	tool_batch_convert_web_pages_to_png_capture_full: '整页长图',
	tool_batch_convert_web_pages_to_png_capture_label: '截图范围',
	tool_batch_convert_web_pages_to_png_clear: '清空',
	tool_batch_convert_web_pages_to_png_col_file: '文件名',
	tool_batch_convert_web_pages_to_png_col_status: '状态',
	tool_batch_convert_web_pages_to_png_col_url: '网址',
	tool_batch_convert_web_pages_to_png_convert: '全部转换',
	tool_batch_convert_web_pages_to_png_desc: '把网址列表截成无损 PNG，可选透明底和 2×，打包 ZIP；不是 JPEG，不是 A4。',
	tool_batch_convert_web_pages_to_png_description:
		'批量把网页转成 PNG：网址列表导出无损截图（一行也能做网页转 PNG / 网址转 PNG）。可选白底或透明底、1× 或 2×，再下载 ZIP。步骤：贴列表 → 全部转换 → 下载 ZIP。示例：两个组件页变成两张锐利 PNG。每条网址代抓一次、不落盘。',
	tool_batch_convert_web_pages_to_png_download_zip: '下载 ZIP',
	tool_batch_convert_web_pages_to_png_empty: '请先贴至少一条网页地址。',
	tool_batch_convert_web_pages_to_png_err_convert: '这一页没能转成 PNG，已跳过。',
	tool_batch_convert_web_pages_to_png_err_fflate: '当前浏览器打不成 ZIP，换一个较新的浏览器再试。',
	tool_batch_convert_web_pages_to_png_err_load: '转换库没加载成功，刷新后再试。',
	tool_batch_convert_web_pages_to_png_err_too_many: '本页最多 10 条网址，多出来的行没有加入。',
	tool_batch_convert_web_pages_to_png_err_url: '这个地址加载失败。请核对链接，或对方站点拦截了抓取。',
	tool_batch_convert_web_pages_to_png_err_url_empty: '这一行不是有效的 http(s) 网页地址，已跳过。',
	tool_batch_convert_web_pages_to_png_example:
		'载入样例会填入组件库页和半透明浮层页，用本地 HTML 生成两张 PNG（1 像素边保持清晰；背景选透明时浮层能透出棋盘格），不访问线上站点，并启用下载 ZIP。点「全部转换」才会去抓你贴的真实网址。',
	tool_batch_convert_web_pages_to_png_example_title: '示例',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'「批量把网页转成 JPG」是有损 JPEG，适合聊天附图。本页写无损 PNG，文字和 1 像素边更利落，还能选透明底和 1×/2×。同样是网址列表，产物不同。',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'转换在本标签页完成。网址列表会代抓一次 HTML，并不保存页面。PNG 在你的浏览器里生成，再打成 ZIP。',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'「批量把网页转成 PDF」按 A4 分页。本页每条网址一张 PNG 栅格。要打印请用 PDF 那页。',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'不会。脚本会被去掉。登录墙和靠 JS 画出来的应用往往对不上线上。布局跟着你选的视口宽度走。',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'成功行各自一张 PNG，打进一个 ZIP。一行网址也能做网页转 PNG。本页不会把多图合成一张。',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'透明只在页面自己有透明或没有实心底色时看得出来。常见白底首页仍然是白的。2× 像素更多、文件更大。实心色块抠不穿成棋盘格。本地照片请用「批量把图片转成 PNG」。',
	tool_batch_convert_web_pages_to_png_faq_q1: '和「批量把网页转成 JPG」有什么不同？',
	tool_batch_convert_web_pages_to_png_faq_q2: '会上传并保存我的页面吗？',
	tool_batch_convert_web_pages_to_png_faq_q3: '和批量网页转 PDF 有何不同？',
	tool_batch_convert_web_pages_to_png_faq_q4: '登录墙或大量 JS 的站点会和线上一样吗？',
	tool_batch_convert_web_pages_to_png_faq_q5: '结果是一张 PNG 还是 ZIP？一条网址行不行？',
	tool_batch_convert_web_pages_to_png_faq_q6: '透明底什么时候看得出来？2× 改什么？',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '队列里有 {n} 条网址',
	tool_batch_convert_web_pages_to_png_how_body:
		'贴上要对齐界面的网址，点「全部转换」（默认桌面 1280、白底、1×、整页），再下载成功项的 ZIP。',
	tool_batch_convert_web_pages_to_png_how_item_1: '每行贴一个 https 网址（组件库、公开 UI 文档很合适）。一行也能做网页转 PNG。',
	tool_batch_convert_web_pages_to_png_how_item_2: '点「全部转换」。默认桌面 1280、白底、1×、整页。每条公开网址代抓一次；失败行跳过。',
	tool_batch_convert_web_pages_to_png_how_item_3: '要透明底、2×、手机宽度或只截首屏？打开「高级设置（可选）」。',
	tool_batch_convert_web_pages_to_png_how_item_4: '聊天用小图请用「批量把网页转成 JPG」。要 A4 请用「批量把网页转成 PDF」。手里已是图片请用「批量把图片转成 PNG」。',
	tool_batch_convert_web_pages_to_png_how_item_5: '至少一行成功后再点「下载 ZIP」。',
	tool_batch_convert_web_pages_to_png_how_item_6: '点「载入样例」可试两个本地界面页，进度面板会显示。',
	tool_batch_convert_web_pages_to_png_how_title: '怎么用',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '已用 {s} 秒',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: '抓取',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: '图片',
	tool_batch_convert_web_pages_to_png_hud_title: '批量进度',
	tool_batch_convert_web_pages_to_png_opts_hint: '视口改布局。透明底保留透明度。2× 像素加倍。整页是长图，首屏大约一屏高。',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'一行一个 http(s) 网址，最多 10 条。串行转换，失败跳过。成功的 PNG 打进 ZIP。背景和倍率会改像素——这不是改后缀的 JPEG，也不是 PDF。',
	tool_batch_convert_web_pages_to_png_rules_item_1: '每个网址代抓一次 HTML，不落盘。PNG 在本标签页生成。',
	tool_batch_convert_web_pages_to_png_rules_item_2: '内网、登录墙、缺页会让该行失败，其余继续。',
	tool_batch_convert_web_pages_to_png_rules_item_3: 'ZIP 重名变成 name (2).png。脚本和 noscript 刷新会被去掉。特别高的首页会封顶，避免画布撑爆标签页。',
	tool_batch_convert_web_pages_to_png_rules_item_4: '这不是整站爬虫。请贴你已经有的网址。',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'对比 JPG 批处理：无损、无画质滑条、可透明底。对比 PDF 批处理：不分 A4 页。对比「批量把图片转成 PNG」：输入是网页地址，不是本地照片。',
	tool_batch_convert_web_pages_to_png_rules_title: '规则与边界',
	tool_batch_convert_web_pages_to_png_sample: '载入样例',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2×（更锐）',
	tool_batch_convert_web_pages_to_png_scale_label: '像素倍率',
	tool_batch_convert_web_pages_to_png_status_converting: '正在生成 PNG… 标签页可能会停几秒',
	tool_batch_convert_web_pages_to_png_status_done: '本批结束——看表格，再下载 ZIP。',
	tool_batch_convert_web_pages_to_png_status_fetching: '正在抓取页面 HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG 已就绪',
	tool_batch_convert_web_pages_to_png_status_queued: '排队中',
	tool_batch_convert_web_pages_to_png_status_skip: '已跳过',
	tool_batch_convert_web_pages_to_png_status_waiting: '正在等图片加载完…',
	tool_batch_convert_web_pages_to_png_status_working: '正在转换这一批…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} 成功 · {skip} 跳过',
	tool_batch_convert_web_pages_to_png_title: '批量把网页转成 PNG',
	tool_batch_convert_web_pages_to_png_url_hint: '每行一个公开 http(s) 网址，最多 10 条。代抓一次并改写 CSS/图片地址。截 PNG 前会去掉脚本。布局跟着视口走。',
	tool_batch_convert_web_pages_to_png_url_label: '网页地址（一行一条）',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1: '把组件库或设计预览页存成锐利 PNG，1 像素边和标签还认得清；JPEG 会把边糊掉。',
	tool_batch_convert_web_pages_to_png_usecase_2: '导出带透明底的浮层，再叠到设计稿上。实心白底首页看起来仍是白的。',
	tool_batch_convert_web_pages_to_png_usecase_3: '聊天小图留在「批量把网页转成 JPG」，A4 归档留在「批量把网页转成 PDF」；要对齐界面请用本页。',
	tool_batch_convert_web_pages_to_png_usecases_title: '适合这些情况',
	tool_batch_convert_web_pages_to_png_viewport_desktop: '桌面 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: '视口',
	tool_batch_convert_web_pages_to_png_viewport_mobile: '手机 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: '平板 768',
	tool_batch_convert_web_pages_to_png_wait_hint: '图片开始加载后再多等几秒。默认 1。若 PNG 里是空图框，把秒数调高。',
	tool_batch_convert_web_pages_to_png_wait_label: '载入等待（秒）',
};

export default zh;
