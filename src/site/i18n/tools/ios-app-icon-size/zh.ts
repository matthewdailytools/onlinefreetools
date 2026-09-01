/**
 * i18n 工具分片（ios-app-icon-size / zh）。
 * 检索向重写：H1 为「iOS 应用图标尺寸」；默认任务是 App Store 1024 不透明 PNG。
 */
import type { SiteLangDict } from '../../../types';

/** 中文可见文案：提交 1024 图标、可选倍率 ZIP、本机处理。 */
const zh: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'把应用标志做成 App Store 要的 1024×1024 不透明 PNG。需要时再打 ZIP，带上 iPhone 180、iPad 167 和 Play 高清 512。图片只在当前标签页处理，不会上传到服务器。',
	tool_ios_app_icon_size_bg_label: '不透明底色',
	tool_ios_app_icon_size_choose_image: '选择标志',
	tool_ios_app_icon_size_clear: '清空',
	tool_ios_app_icon_size_desc:
		'导出 iOS 应用图标尺寸 1024×1024 不透明 PNG；文件留在本机，不上传服务器。',
	tool_ios_app_icon_size_description:
		'iOS 应用图标尺寸：选一张标志，铺在不透明 1024×1024 方底上，下载 PNG 给 App Store Connect。步骤：选图 → 确认 1024 → 下载。示例：进页样例已按 1024×1024 铺好。可选 ZIP 含 iPhone 图标 180、iPad 167 与 Play 512。文件不出本机，不上传服务器。',
	tool_ios_app_icon_size_download: '下载 PNG',
	tool_ios_app_icon_size_download_zip: '下载多尺寸 ZIP',
	tool_ios_app_icon_size_drop_hint: '拖入一张方标志。会居中铺在不透明方底上，不预先切圆角。',
	tool_ios_app_icon_size_empty: '请先选择标志。',
	tool_ios_app_icon_size_err_decode: '读不了这张图。请改用 PNG 或 JPEG。',
	tool_ios_app_icon_size_err_fflate: 'ZIP 组件没加载成功。检查网络后再试。',
	tool_ios_app_icon_size_example:
		'点「加载示例」会画出占位标志，装进 1024×1024 不透明方底，并可以下载 PNG。ZIP 另含 180、167、Play 512 和更小槽位。',
	tool_ios_app_icon_size_example_title: '示例',
	tool_ios_app_icon_size_faq_a1:
		'不会。解码和铺底都在本标签页完成，标志不会上传到我们的服务器。',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect 仍要求 1024×1024、且不能透明。本页默认 iOS 应用图标尺寸就是这一档。',
	tool_ios_app_icon_size_faq_a3:
		'圆角由系统套。你导出整块正方形即可，不要自己切圆角。',
	tool_ios_app_icon_size_faq_a4:
		'180 是 iPhone 60pt 三倍图；167 是 iPad Pro 83.5pt 两倍图。它们是芯片，不是第二个标题。',
	tool_ios_app_icon_size_faq_a5:
		'Play 高清 512 放在 ZIP 里。不做 Adaptive 图标 XML，也不单独开 Play 素材包页面。',
	tool_ios_app_icon_size_faq_q1: '标志会上传吗？',
	tool_ios_app_icon_size_faq_q2: '为什么一定是 1024×1024？',
	tool_ios_app_icon_size_faq_q3: '要自己切圆角吗？',
	tool_ios_app_icon_size_faq_q4: '180 和 167 是干什么的？',
	tool_ios_app_icon_size_faq_q5: 'Google Play 图标呢？',
	tool_ios_app_icon_size_how_body:
		'先定提交商店用的那张标志，导出 1024×1024 不透明 PNG，再按需打包 iPhone / iPad / Play 尺寸。',
	tool_ios_app_icon_size_how_item_1: '选择要做 iOS 应用图标尺寸的标志——这一次默认是 App Store 1024。',
	tool_ios_app_icon_size_how_item_2: '除非要看 180 / 167 / Play 512，否则保持 1024。',
	tool_ios_app_icon_size_how_item_3: '保持不透明底，避免 Connect 因透明通道拒图。',
	tool_ios_app_icon_size_how_item_4: '下载 PNG 或尺寸 ZIP。进页示例已经跑过。',
	tool_ios_app_icon_size_how_title: '怎么用',
	tool_ios_app_icon_size_load_sample: '加载示例',
	tool_ios_app_icon_size_out_size_label: '输出尺寸',
	tool_ios_app_icon_size_rules_body:
		'商店图标要正方形、实心底，并且跟网站 apple-touch-icon 页分开。',
	tool_ios_app_icon_size_rules_item_1:
		'默认画布 1024×1024 PNG。标志按 contain 居中，不拉伸变形。',
	tool_ios_app_icon_size_rules_item_2:
		'底色不透明（默认白）。透明通道会被铺实。',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 进 ZIP，不改 H1。',
	tool_ios_app_icon_size_rules_item_4:
		'这不是 Assets.xcassets 工程，也不是 Adaptive 图标包。',
	tool_ios_app_icon_size_rules_title: '需要知道的规则',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: '图标已就绪——下载或换一张标志。',
	tool_ios_app_icon_size_status_working: '正在铺方底…',
	tool_ios_app_icon_size_title: 'iOS 应用图标尺寸',
	tool_ios_app_icon_size_usecase_1:
		'提交 App Store Connect：先导出 1024×1024 iOS 应用图标，再传截图。',
	tool_ios_app_icon_size_usecase_2:
		'看 iPhone 主屏：从 ZIP 取 180，对照 60pt 三倍图。',
	tool_ios_app_icon_size_usecase_3:
		'上架 Play：取 512 高清芯片，不必另开素材包页。',
	tool_ios_app_icon_size_usecases_title: '适合这些事',
};

export default zh;
