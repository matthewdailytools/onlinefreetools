/**
 * i18n 工具分片（amazon-main-image-size / zh）。
 * 仅含本工具键；H1 锁定「Amazon 主图尺寸」，像素要求写在描述与 FAQ。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文工具站文案：主图尺寸场景，非英模直译。 */
const zh: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'把一张商品照片铺到白底正方形里，导出可当亚马逊主图用的 JPEG。文件留在本机，不会上传到服务器。',
	tool_amazon_main_image_size_check_fill: '约占画幅 85%',
	tool_amazon_main_image_size_choose_image: '选择图片',
	tool_amazon_main_image_size_clear: '清空',
	tool_amazon_main_image_size_desc:
		'白底导出亚马逊主图，默认 2000×2000，并核对缩放 1000 像素——文件不出本机。',
	tool_amazon_main_image_size_description:
		'Amazon 主图尺寸：选一张商品图，导出白底 RGB 255 的 2000×2000 JPEG，并对照缩放 1000 像素门槛。步骤：加载示例后商品约占正方形 85%。文件留在本机设备，不会上传到服务器。本页不能代替卖家平台的官方审核，请自行对照后台要求。',
	tool_amazon_main_image_size_download: '下载 JPEG',
	tool_amazon_main_image_size_drop_hint: '把商品图拖进这里。处理只在当前标签页进行。',
	tool_amazon_main_image_size_empty: '请先选一张商品照片。',
	tool_amazon_main_image_size_err_decode: '读不了这张图。请换 JPEG、PNG 或 WebP。',
	tool_amazon_main_image_size_example:
		'点「加载示例」会画出占位商品图，铺进 2000×2000 白底、约占 85% 画幅，然后可以下载 JPEG。缩放芯片会显示最长边已超过 1000 像素。',
	tool_amazon_main_image_size_example_title: '示例',
	tool_amazon_main_image_size_faq_a1:
		'主图习惯铺纯白底。本页用 RGB 255,255,255 填满画布，也可把商品缩到大约 85% 画幅，避免贴边被裁。',
	tool_amazon_main_image_size_faq_a2:
		'不会。照片只在当前浏览器标签页解码，不会上传到我们的服务器，也不会替你提交到亚马逊。',
	tool_amazon_main_image_size_faq_a3:
		'附图、信息图、A+ 模块用途不同。本页只做主图。自由裁切请用相关的裁剪工具。',
	tool_amazon_main_image_size_faq_a4:
		'亚马逊缩放通常要求最长边至少 1000 像素。芯片拿导出边长跟这个门槛比。把很小的图硬放大，数字能过，画面仍可能发糊。',
	tool_amazon_main_image_size_faq_a5:
		'默认导出 2000×2000。1600 是仍常见的旧尺寸，页面用芯片提供。像素数字不写进主标题。',
	tool_amazon_main_image_size_faq_q1: '白底和占画幅 85% 是怎么回事？',
	tool_amazon_main_image_size_faq_q2: '照片会上传到亚马逊或本站吗？',
	tool_amazon_main_image_size_faq_q3: '能一起导出附图吗？',
	tool_amazon_main_image_size_faq_q4: '为什么不到 1000 像素缩放会失败？',
	tool_amazon_main_image_size_faq_q5: '为什么默认不是 1600？',
	tool_amazon_main_image_size_fill_label: '占画幅比例',
	tool_amazon_main_image_size_how_body:
		'先选定要当主图的那张商品照，铺白底、导出正方形，再看缩放芯片。其他边长只是芯片，不是第二个工具。',
	tool_amazon_main_image_size_how_item_1: '选出要当亚马逊主图的那张照片——这就是本页要办的事。',
	tool_amazon_main_image_size_how_item_2: '除非仍要旧的 1600 正方形，否则保持 2000×2000。',
	tool_amazon_main_image_size_how_item_3: '商品已经铺满你想要的构图时，再关掉 85% 适配。',
	tool_amazon_main_image_size_how_item_4: '下载 JPEG，并读缩放门槛芯片。进页时示例已经跑过一遍。',
	tool_amazon_main_image_size_how_title: '怎么出主图',
	tool_amazon_main_image_size_load_sample: '加载示例',
	tool_amazon_main_image_size_out_size_label: '输出尺寸',
	tool_amazon_main_image_size_quality_label: 'JPEG 画质',
	tool_amazon_main_image_size_rules_body:
		'浏览器里出主图，需要正方形画布、白底填充、缩放门槛，以及「不是官方审核」这条边界。',
	tool_amazon_main_image_size_rules_item_1:
		'默认画布 2000×2000，可选 1600×1600。照片等比放入，不拉伸，底色为 RGB 255 白。',
	tool_amazon_main_image_size_rules_item_2:
		'可选 85% 适配会把商品缩进正方形内部，避免贴边。',
	tool_amazon_main_image_size_rules_item_3:
		'缩放芯片：导出最长边应 ≥1000 像素。页面不保证亚马逊会收下这张文件。',
	tool_amazon_main_image_size_rules_item_4:
		'附图、信息图、A+ 模块不在范围内。这里也不是卖家平台。',
	tool_amazon_main_image_size_rules_title: '使用时请留意',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: '主图已就绪——下载或换一张照片。',
	tool_amazon_main_image_size_status_working: '正在铺正方形…',
	tool_amazon_main_image_size_title: 'Amazon 主图尺寸',
	tool_amazon_main_image_size_usecase_1:
		'新链接上架前：先把手机拍的商品图做成白底主图，再打开卖家后台。',
	tool_amazon_main_image_size_usecase_2:
		'缩放点不开：先看最长边是不是还不到 1000 像素，再按 2000 边长重出一版。',
	tool_amazon_main_image_size_usecase_3:
		'接手来的小主图要换掉：本页先铺方，JPEG 太大再去相关的图片压缩工具。',
	tool_amazon_main_image_size_usecases_title: '适合什么时候',
	tool_amazon_main_image_size_zoom_fail: '最长边不足 1000 像素——缩放可能失败。',
	tool_amazon_main_image_size_zoom_ok: '最长边已达到 1000 像素缩放门槛。',
	tool_amazon_main_image_size_zoom_label: '缩放门槛',
};

export default zh;
