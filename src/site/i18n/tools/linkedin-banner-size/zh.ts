/**
 * i18n 工具分片（linkedin-banner-size / zh）。
 * 检索向 H1：LinkedIn 横幅尺寸；默认个人背景 1584×396 与头像安全区。
 */
import type { SiteLangDict } from '../../../types';

/** 中文：领英个人横幅、封面芯片、本机处理。 */
const zh: SiteLangDict = {
	tool_linkedin_banner_size_article:
		'把横图裁成 LinkedIn 横幅尺寸 1584×396，预览头像会挡住哪一块，再下载 JPEG。需要时切到 Facebook 封面、X 头图或 YouTube 频道图。图片留在本机，不上传服务器。',
	tool_linkedin_banner_size_choose_image: '选择图片',
	tool_linkedin_banner_size_clear: '清空',
	tool_linkedin_banner_size_desc:
		'导出 LinkedIn 横幅尺寸 1584×396 并预览头像安全区；文件留在本机，不上传服务器。',
	tool_linkedin_banner_size_description:
		'LinkedIn 横幅尺寸：选一张横图，cover 铺满个人背景 1584×396，下载 JPEG。示例：进页样例已裁到 1584×396。半透明叠层标出头像位置，不会写进下载文件。Facebook 封面、X 头图、YouTube 频道图是芯片。文件不出本机，不上传服务器。这不是链接分享卡。',
	tool_linkedin_banner_size_download: '下载 JPEG',
	tool_linkedin_banner_size_drop_hint: '拖入一张横图。cover 可能裁边。文字请避开发暗的叠层。',
	tool_linkedin_banner_size_empty: '请先选择图片。',
	tool_linkedin_banner_size_err_decode: '读不了这张图。请改用 JPEG、PNG 或 WebP。',
	tool_linkedin_banner_size_example:
		'点「加载示例」画出超宽占位图，铺满 1584×396，显示头像叠层，并可以下载 JPEG。其它芯片会换画幅。',
	tool_linkedin_banner_size_example_title: '示例',
	tool_linkedin_banner_size_faq_a1: '不会。解码在本标签页完成，不会上传到 LinkedIn 或我们的服务器。',
	tool_linkedin_banner_size_faq_a2: '领英个人背景仍是 1584×396。本页默认 LinkedIn 横幅尺寸就是这一档。',
	tool_linkedin_banner_size_faq_a3: '发暗区域只是预览头像重叠。下载的 JPEG 不含遮罩。',
	tool_linkedin_banner_size_faq_a4: '公司页封面比例不同。本页 H1 仍是个人横幅，公司页只在问答说明，不另开 URL。',
	tool_linkedin_banner_size_faq_a5: '1200×630 分享卡在 Open Graph 图片尺寸工具。本页是超宽封面加安全区。',
	tool_linkedin_banner_size_faq_q1: '图片会上传吗？',
	tool_linkedin_banner_size_faq_q2: '为什么是 1584×396？',
	tool_linkedin_banner_size_faq_q3: '暗色叠层会进下载文件吗？',
	tool_linkedin_banner_size_faq_q4: '公司页封面呢？',
	tool_linkedin_banner_size_faq_q5: '这和 Open Graph 图是一回事吗？',
	tool_linkedin_banner_size_how_body: '选定领英背景图，铺满 1584×396，把文字挪出头像叠层，再下载。',
	tool_linkedin_banner_size_how_item_1: '选择要做 LinkedIn 横幅尺寸的图——这一次是个人背景 1584×396。',
	tool_linkedin_banner_size_how_item_2: '除非要 Facebook / X / YouTube 芯片，否则保持领英档。',
	tool_linkedin_banner_size_how_item_3: '看发暗叠层：人脸和标题避开头像区。',
	tool_linkedin_banner_size_how_item_4: '下载 JPEG。进页示例已经跑过。',
	tool_linkedin_banner_size_how_title: '怎么用',
	tool_linkedin_banner_size_load_sample: '加载示例',
	tool_linkedin_banner_size_out_size_label: '输出尺寸',
	tool_linkedin_banner_size_quality_label: 'JPEG 质量',
	tool_linkedin_banner_size_rules_body: '个人横幅是超宽 cover，要对照头像重叠，不是 1.91:1 分享卡。',
	tool_linkedin_banner_size_rules_item_1: '默认画布 1584×396 JPEG。cover 直到铺满。',
	tool_linkedin_banner_size_rules_item_2: '叠层只用于预览。下载像素没有遮罩。',
	tool_linkedin_banner_size_rules_item_3: 'Facebook 851×315、X 1500×500、YouTube 2560×1440 是芯片，不改 H1。',
	tool_linkedin_banner_size_rules_item_4: 'YouTube 芯片会压暗 1546×423 安全区以外。不单独开频道图包 URL。',
	tool_linkedin_banner_size_rules_title: '需要知道的规则',
	tool_linkedin_banner_size_safe_hint: '发暗叠层 = 界面挡住的地方。不会写进 JPEG。',
	tool_linkedin_banner_size_size_facebook: 'FB 封面',
	tool_linkedin_banner_size_size_linkedin: '1584×396',
	tool_linkedin_banner_size_size_x: 'X 头图',
	tool_linkedin_banner_size_size_youtube: 'YT 频道',
	tool_linkedin_banner_size_status_done: '横幅已就绪——下载或换图。',
	tool_linkedin_banner_size_status_working: '正在铺满画幅…',
	tool_linkedin_banner_size_title: 'LinkedIn 横幅尺寸',
	tool_linkedin_banner_size_usecase_1: '个人资料：上传领英背景前先导出 1584×396。',
	tool_linkedin_banner_size_usecase_2: '标题别压头像：先看叠层再下载。',
	tool_linkedin_banner_size_usecase_3: 'YouTube 频道图：切芯片得到 2560×1440 和设备安全窗。',
	tool_linkedin_banner_size_usecases_title: '适合这些事',
};

export default zh;
