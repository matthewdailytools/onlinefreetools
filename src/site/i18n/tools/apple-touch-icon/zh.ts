/**
 * i18n 工具分片（apple-touch-icon / zh）。
 * 检索向重写：H1 为 apple-touch-icon 180×180；隐私须写清本机且不上传。
 */
import type { SiteLangDict } from '../../../types';

/** 中文可见文案：主屏 180 图标、可选 ZIP 尺寸、不透明底。 */
const zh: SiteLangDict = {
	tool_apple_touch_icon_article:
		'把网站标志做成主屏幕用的 apple-touch-icon：默认导出 180×180 不透明 PNG。需要时再打 ZIP，带上小 favicon 32 和 PWA 常用的 192、512。图片只在当前标签页处理，不会上传到服务器。',
	tool_apple_touch_icon_bg_label: '不透明底色',
	tool_apple_touch_icon_choose_image: '选择标志',
	tool_apple_touch_icon_clear: '清空',
	tool_apple_touch_icon_desc:
		'导出 apple-touch-icon 180×180 不透明 PNG；文件留在本机，不上传服务器。',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180：选一张标志，铺在不透明方底上，下载 PNG。步骤：选图 → 确认 180 → 下载。示例：进页样例已按 180×180 铺好。可选 ZIP 含网站图标 favicon 32 与 PWA 图标 192 / 512。文件不出本机，不上传服务器。',
	tool_apple_touch_icon_download: '下载 PNG',
	tool_apple_touch_icon_download_zip: '下载多尺寸 ZIP',
	tool_apple_touch_icon_drop_hint: '拖入一张标志。会居中铺在不透明方底上。',
	tool_apple_touch_icon_empty: '请先选择标志。',
	tool_apple_touch_icon_err_decode: '读不了这张图。请改用 PNG、JPEG，或把 SVG 先截成位图。',
	tool_apple_touch_icon_err_fflate: 'ZIP 组件没加载成功。检查网络后再试。',
	tool_apple_touch_icon_example:
		'点「加载示例」会画出占位标志，装进 180×180 不透明方底，并可以下载 PNG。ZIP 另含 32、192、512。',
	tool_apple_touch_icon_example_title: '示例',
	tool_apple_touch_icon_faq_a1:
		'会。iOS 把站点加到主屏幕时，常用 180×180 的 apple-touch-icon.png。先导出这一张，再写 link 标签。',
	tool_apple_touch_icon_faq_a2:
		'不会。解码和铺底都在本标签页完成，标志不会上传到我们的服务器。',
	tool_apple_touch_icon_faq_a3:
		'苹果触摸图标历史上更希望不透明（类似 precomposed）。透明图在主屏幕上可能被系统叠一层高光，所以本页会铺实底。',
	tool_apple_touch_icon_faq_a4:
		'32 是小 favicon PNG；192 和 512 给 PWA 清单用。它们进 ZIP，默认任务仍是 180×180。',
	tool_apple_touch_icon_faq_a5:
		'旧 iPad 的 167 / 152 / 120 可放进 ZIP 套装，但默认仍导出 180×180。',
	tool_apple_touch_icon_faq_q1: '加到主屏幕一定要 180×180 吗？',
	tool_apple_touch_icon_faq_q2: '标志会上传吗？',
	tool_apple_touch_icon_faq_q3: '为什么要用不透明底？',
	tool_apple_touch_icon_faq_q4: 'ZIP 里的 32、192、512 是干什么的？',
	tool_apple_touch_icon_faq_q5: '还出 167 或 152 吗？',
	tool_apple_touch_icon_how_body:
		'先准备「添加到主屏幕」要用的那张标志，导出 180×180 不透明 PNG；若清单还要小图标或 PWA 尺寸，再打一份 ZIP。',
	tool_apple_touch_icon_how_item_1: '选择用于 apple-touch-icon 180×180 的标志。',
	tool_apple_touch_icon_how_item_2: '默认勾选 180；只有需要 32 / 192 / 512 时再加芯片。',
	tool_apple_touch_icon_how_item_3: '保留不透明底，避免主屏幕上看起来像镂空。',
	tool_apple_touch_icon_how_item_4: '下载 PNG，或下载多尺寸 ZIP。进页已自动跑过示例。',
	tool_apple_touch_icon_how_title: '怎么用',
	tool_apple_touch_icon_load_sample: '加载示例',
	tool_apple_touch_icon_out_size_label: '输出尺寸',
	tool_apple_touch_icon_rules_body:
		'主屏幕图标要正方形、实心底，并和整包 ICO 生成站分开：本页主任务是 180 的 PNG。',
	tool_apple_touch_icon_rules_item_1: '默认画布 180×180 PNG。标志按比例装入（不拉伸）并居中。',
	tool_apple_touch_icon_rules_item_2: '底色不透明（默认白）。透明会被故意铺平。',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 只作为 ZIP 附加项，不改变默认导出。',
	tool_apple_touch_icon_rules_item_4: '不打包 ICO，也不写 browserconfig.xml。',
	tool_apple_touch_icon_rules_title: '你会看到的规则',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: '图标好了——下载或换一张标志。',
	tool_apple_touch_icon_status_working: '正在铺方底…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1: '写 link 之前，先导出 180×180 的 apple-touch-icon.png 给「添加到主屏幕」。',
	tool_apple_touch_icon_usecase_2: '做 PWA 时从 ZIP 取出 192 和 512 填进 web app manifest。',
	tool_apple_touch_icon_usecase_3: '浏览器还要一张小方 PNG 时，用 ZIP 里的 favicon 32，不必另找整包生成站。',
	tool_apple_touch_icon_usecases_title: '适合这些情况',
};

export default zh;
