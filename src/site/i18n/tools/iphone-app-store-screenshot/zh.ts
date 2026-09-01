/**
 * i18n tool shard (iphone-app-store-screenshot / zh).
 * H1 锁定「iPhone 6.9 截图尺寸」；6.7 只写 FAQ，不进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文工具文案：检索向口语，非英模直译。 */
const zh: SiteLangDict = {
	/** 页内短说明：导出 + 隐私边界。 */
	tool_iphone_app_store_screenshot_article:
		'把一张截图导出成当前 iPhone 6.9 App Store 像素，再下载 JPEG，或把三档打成 ZIP。文件留在本机，不上传服务器。',
	/** 选图按钮。 */
	tool_iphone_app_store_screenshot_choose_image: '选择截图',
	/** 清空按钮。 */
	tool_iphone_app_store_screenshot_clear: '清空',
	/** 首页卡片短描述。 */
	tool_iphone_app_store_screenshot_desc:
		'按 1320×2868 导出 iPhone 6.9 App Store 截图——文件留在本机，不上传服务器。',
	/** Meta 描述：须含示例/步骤，且 ≥120 字。 */
	tool_iphone_app_store_screenshot_description:
		'iPhone 6.9 截图尺寸：选一张图，铺满裁到 1320×2868（也可 1290×2796 / 1260×2736），再下载 JPEG。步骤：进页会先跑示例，立刻看到铺满裁切。文件留在本机浏览器，不上传服务器。以前的 6.7 英寸规格已并入 6.9。这不是 App Review。',
	/** 单张 JPEG 下载。 */
	tool_iphone_app_store_screenshot_download: '下载 JPEG',
	/** 三档打包下载。 */
	tool_iphone_app_store_screenshot_download_zip: '下载全部尺寸 ZIP',
	/** 拖放区提示。 */
	tool_iphone_app_store_screenshot_drop_hint: '拖入一张截图。铺满裁切可能切掉边缘。',
	/** 未选图空态。 */
	tool_iphone_app_store_screenshot_empty: '请先选择截图。',
	/** 解码失败。 */
	tool_iphone_app_store_screenshot_err_decode: '读不了这张图。请改用 PNG 或 JPEG 截图。',
	/** ZIP 引擎加载失败。 */
	tool_iphone_app_store_screenshot_err_fflate: 'ZIP 引擎没加载成功。检查网络后再试。',
	/** 可见 Example 正文。 */
	tool_iphone_app_store_screenshot_example:
		'加载示例会画一张竖屏占位图，铺满裁到 1320×2868，并点亮「下载 JPEG」。另外两档是芯片；ZIP 一次打齐三档。',
	/** Example 小节标题。 */
	tool_iphone_app_store_screenshot_example_title: '示例',
	tool_iphone_app_store_screenshot_faq_a1:
		'不会。字节只留在这个标签页，既不上传到 Apple，也不上传到我们的服务器。',
	tool_iphone_app_store_screenshot_faq_a2:
		'苹果现在要求的 iPhone 档是 6.9 英寸。以前的 6.7 英寸像素表已并进这三档。搜 6.7 也能在这里对上号。',
	tool_iphone_app_store_screenshot_faq_a3:
		'默认是 1320×2868。1290×2796 和 1260×2736 是另外两对仍被接受的 6.9 英寸尺寸。选一档，或下载三档 ZIP。',
	tool_iphone_app_store_screenshot_faq_a4:
		'会。铺满会先放大到框满，再裁掉多出来的边。要换构图请用相关的裁剪工具。',
	tool_iphone_app_store_screenshot_faq_a5:
		'iPad 截图尺寸不在首屏。本页只做 iPhone 6.9 这一套必填规格。',
	tool_iphone_app_store_screenshot_faq_q1: '截图会不会被上传？',
	tool_iphone_app_store_screenshot_faq_q2: '为什么不是 iPhone 6.7 截图尺寸？',
	tool_iphone_app_store_screenshot_faq_q3: '1320×2868、1290×2796、1260×2736 分别是什么？',
	tool_iphone_app_store_screenshot_faq_q4: '边缘会被裁掉吗？',
	tool_iphone_app_store_screenshot_faq_q5: '能导出 iPad 截图吗？',
	tool_iphone_app_store_screenshot_how_body:
		'先选要进 App Store Connect 的那张图，铺满到 6.9 英寸尺寸，再下载。多出来的尺寸是芯片，不是第二套设计器。',
	tool_iphone_app_store_screenshot_how_item_1: '选择要上架的 iPhone 6.9 必填截图。',
	tool_iphone_app_store_screenshot_how_item_2: '默认留在 1320×2868；除非 Connect 点名另外两档 6.9 尺寸。',
	tool_iphone_app_store_screenshot_how_item_3: '下载 JPEG，或把三档打进一个 ZIP。',
	tool_iphone_app_store_screenshot_how_item_4: '进页已经跑过「加载示例」，能马上看到铺满裁切。',
	tool_iphone_app_store_screenshot_how_title: '怎么用',
	tool_iphone_app_store_screenshot_load_sample: '加载示例',
	tool_iphone_app_store_screenshot_out_size_label: '输出尺寸',
	tool_iphone_app_store_screenshot_quality_label: 'JPEG 质量',
	tool_iphone_app_store_screenshot_rules_body:
		'App Store 截图导出要精确像素、铺满裁切，并说清 6.7 已并入 6.9。',
	tool_iphone_app_store_screenshot_rules_item_1:
		'默认画布是 1320×2868。另外两档仍被接受的 6.9 英寸尺寸是 1290×2796 和 1260×2736。',
	tool_iphone_app_store_screenshot_rules_item_2: '用铺满裁切（不要留黑边）。多出来的部分会被裁掉。',
	tool_iphone_app_store_screenshot_rules_item_3: '搜 6.7 英寸的人看 FAQ 就能对上；不必另开一套规格。',
	tool_iphone_app_store_screenshot_rules_item_4: '这不是 App Review。构图、文案或机框仍可能被苹果拒。',
	tool_iphone_app_store_screenshot_rules_title: '你该预期的规则',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: '截图已就绪——下载或换一张图。',
	tool_iphone_app_store_screenshot_status_working: '正在铺满裁切…',
	/** 锁定 H1：与 03 brief 完全一致。 */
	tool_iphone_app_store_screenshot_title: 'iPhone 6.9 截图尺寸',
	tool_iphone_app_store_screenshot_usecase_1: '上架前：先导出 6.9 英寸必填截图，再上传 Connect。',
	tool_iphone_app_store_screenshot_usecase_2: '尺寸报错：别再用旧 6.7，改导出 1320×2868。',
	tool_iphone_app_store_screenshot_usecase_3: '把三档 6.9 尺寸打成 ZIP，交给稍后上传的同事。',
	tool_iphone_app_store_screenshot_usecases_title: '适合这些情况',
};

export default zh;
