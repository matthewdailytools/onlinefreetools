/**
 * i18n 工具分片（open-graph-image-size / zh）。
 * 主检索词落在 H1「Open Graph 图片尺寸」；短词 og image 不进标题。
 * 次词：分享图 1200×630、og:image 尺寸、Facebook 分享图 → description / FAQ / Use cases。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_open_graph_image_size_article:
		'把一张图裁成 1200×630 的 Open Graph 分享卡（约 1.91:1），再下载 JPEG。图片留在本机浏览器，不上传服务器。',
	tool_open_graph_image_size_choose_image: '选择图片',
	tool_open_graph_image_size_clear: '清空',
	tool_open_graph_image_size_desc:
		'导出 1200×630 的 Open Graph 图片，文件留在本机、不上传服务器。',
	tool_open_graph_image_size_description:
		'Open Graph 图片尺寸：选一张图，铺满裁切到 1200×630（约 1.91:1），再下载 JPEG。步骤是先选分享图，再确认画布，最后导出。示例：进页样例已按分享卡画幅裁好。LinkedIn 常用 1200×627，本页做成可选小条。图片不出本机、不上传服务器。要查网页上的 og:image 标签，请用关联预览页，不是本页标题。短词 og image 不作为标题。',
	tool_open_graph_image_size_download: '下载 JPEG',
	tool_open_graph_image_size_drop_hint: '拖入一张图。铺满裁切可能切掉边缘。',
	tool_open_graph_image_size_empty: '请先选择图片。',
	tool_open_graph_image_size_err_decode: '读不了这张图。请改用 JPEG、PNG 或 WebP。',
	tool_open_graph_image_size_example:
		'加载示例会画一张横图占位，铺满 1200×630，并打开下载 JPEG。1200×627 是 LinkedIn 那条近似尺寸。',
	tool_open_graph_image_size_example_title: '示例',
	tool_open_graph_image_size_faq_a1:
		'不会。照片只在当前标签页里处理，不会传到 Facebook、LinkedIn，也不会上传到我们的服务器。',
	tool_open_graph_image_size_faq_a2:
		'短检索「og image」容易被口语劫持。本页标题写全称：Open Graph 图片尺寸。',
	tool_open_graph_image_size_faq_a3:
		'1200×630 是常见 1.91:1 分享卡。1200×627 几乎一样，是 LinkedIn 常用像素对。Story、频道封面不在本页。',
	tool_open_graph_image_size_faq_a4:
		'本页只导出像素。要检查某个网址的 og:image 是否显示，请用关联的 Open Graph 预览工具。',
	tool_open_graph_image_size_faq_a5:
		'会。铺满裁切会放大到填满 1200×630，多出来的边会被切掉。',
	tool_open_graph_image_size_faq_q1: '照片会上传吗？',
	tool_open_graph_image_size_faq_q2: '标题为什么不写 og image？',
	tool_open_graph_image_size_faq_q3: '1200×630 和 1200×627 差在哪？',
	tool_open_graph_image_size_faq_q4: '想确认 og:image 有没有显示，去哪查？',
	tool_open_graph_image_size_faq_q5: '边缘会被裁掉吗？',
	tool_open_graph_image_size_how_body:
		'先选定链接被分享时该出现的那张图，铺满 1200×630，再下载。标签排查放在预览页。',
	tool_open_graph_image_size_how_item_1: '选择要用在 Open Graph 分享卡上的照片——这就是本页要办的事。',
	tool_open_graph_image_size_how_item_2: '默认保持 1200×630；只有对方点名要 1200×627 时再改。',
	tool_open_graph_image_size_how_item_3: '下载 JPEG。铺满裁切可能切边，避免分享卡出现黑边。',
	tool_open_graph_image_size_how_item_4: '进页已自动跑过加载示例。查标签请到关联预览工具。',
	tool_open_graph_image_size_how_title: '怎么用',
	tool_open_graph_image_size_load_sample: '加载示例',
	tool_open_graph_image_size_out_size_label: '输出尺寸',
	tool_open_graph_image_size_quality_label: 'JPEG 画质',
	tool_open_graph_image_size_rules_body:
		'分享卡导出需要约 1.91:1 画幅、铺满裁切，以及和标签预览分开。',
	tool_open_graph_image_size_rules_item_1:
		'默认画布 1200×630。可选 1200×627。比例大约 1.91:1。',
	tool_open_graph_image_size_rules_item_2:
		'铺满裁切（不留黑边）。多出的部分会被切掉。',
	tool_open_graph_image_size_rules_item_3:
		'排查 og:image 标签请用关联预览页，不是本页标题要做的事。',
	tool_open_graph_image_size_rules_item_4:
		'Story、YouTube 缩略图、频道封面不在本页范围。',
	tool_open_graph_image_size_rules_title: '你应预期的规则',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: '分享卡已就绪——可下载或换一张图。',
	tool_open_graph_image_size_status_working: '正在铺满裁切…',
	tool_open_graph_image_size_title: 'Open Graph 图片尺寸',
	tool_open_graph_image_size_usecase_1:
		'发博文前：先导出 1200×630 JPEG，再去填 og:image。',
	tool_open_graph_image_size_usecase_2:
		'商品链接：把包装图裁进分享卡画幅，不必打开设计软件。',
	tool_open_graph_image_size_usecase_3:
		'对方点名 LinkedIn 1200×627 时，改用那条小尺寸即可。',
	tool_open_graph_image_size_usecases_title: '适合这些情况',
};

export default zh;
