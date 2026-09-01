/**
 * i18n 工具分片（instagram-story-size / zh）。
 * 检索向 H1：Instagram 快拍尺寸；默认 1080×1920 Story 与顶底安全区。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_instagram_story_size_article:
		'把图裁成 Instagram 快拍尺寸 1080×1920（9:16），预览顶部进度条和底部回复栏会挡住哪一块，再下载 JPEG。Reels、TikTok、Shorts 封面是同画幅芯片。文件留在本机，不上传服务器。',
	tool_instagram_story_size_choose_image: '选择图片',
	tool_instagram_story_size_clear: '清空',
	tool_instagram_story_size_desc:
		'导出 Instagram 快拍尺寸 1080×1920 并预览界面安全区；文件留在本机，不上传服务器。',
	tool_instagram_story_size_description:
		'Instagram 快拍尺寸：选一张图，cover 铺满 1080×1920（9:16），下载 JPEG。示例：进页样例已裁到快拍画幅。半透明叠层标出进度条和回复栏，不会写进下载文件。Reels、TikTok、YouTube Shorts 封面是芯片。文件不出本机，不上传服务器。这不是方形发帖，也不是 16:9 视频缩略图。',
	tool_instagram_story_size_download: '下载 JPEG',
	tool_instagram_story_size_drop_hint: '拖入一张图。cover 可能裁边。文字请避开发暗的叠层。',
	tool_instagram_story_size_empty: '请先选择图片。',
	tool_instagram_story_size_err_decode: '读不了这张图。请改用 JPEG、PNG 或 WebP。',
	tool_instagram_story_size_example:
		'点「加载示例」画出竖向占位图，铺满 1080×1920，显示 Story 叠层，并可以下载 JPEG。其它芯片仍是 9:16，只换叠层。',
	tool_instagram_story_size_example_title: '示例',
	tool_instagram_story_size_faq_a1: '不会。解码在本标签页完成，不会上传到 Instagram 或我们的服务器。',
	tool_instagram_story_size_faq_a2: '快拍仍是 1080×1920。本页默认 Instagram 快拍尺寸就是这一档。',
	tool_instagram_story_size_faq_a3: '发暗条带只是预览界面。下载的 JPEG 不含遮罩。',
	tool_instagram_story_size_faq_a4: '1:1 和 4:5 信息流是另一件事。本页 H1 只做 Story，不当发帖尺寸页。',
	tool_instagram_story_size_faq_a5: 'YouTube 16:9 视频缩略图不在本页。Shorts 封面以 9:16 芯片留在这里。',
	tool_instagram_story_size_faq_q1: '图片会上传吗？',
	tool_instagram_story_size_faq_q2: '为什么是 1080×1920？',
	tool_instagram_story_size_faq_q3: '暗色叠层会进下载文件吗？',
	tool_instagram_story_size_faq_q4: '方形发帖也能用吗？',
	tool_instagram_story_size_faq_q5: 'YouTube 视频缩略图呢？',
	tool_instagram_story_size_how_body: '选定今天的快拍图，铺满 1080×1920，把文字挪出叠层，再下载。',
	tool_instagram_story_size_how_item_1: '选择要做 Instagram 快拍尺寸的图——这一次是 1080×1920 Story。',
	tool_instagram_story_size_how_item_2: '除非要 Reels / TikTok / Shorts 芯片，否则保持 Story。',
	tool_instagram_story_size_how_item_3: '看发暗叠层：人脸和标题避开顶部和底部界面。',
	tool_instagram_story_size_how_item_4: '下载 JPEG。进页示例已经跑过。',
	tool_instagram_story_size_how_title: '怎么用',
	tool_instagram_story_size_load_sample: '加载示例',
	tool_instagram_story_size_out_size_label: '输出尺寸',
	tool_instagram_story_size_quality_label: 'JPEG 质量',
	tool_instagram_story_size_rules_body: '快拍是 9:16 cover，要对照界面遮挡，不是方帖，也不是 16:9 缩略图。',
	tool_instagram_story_size_rules_item_1: '默认画布 1080×1920 JPEG。cover 直到铺满。',
	tool_instagram_story_size_rules_item_2: '叠层只用于预览。下载像素没有遮罩。',
	tool_instagram_story_size_rules_item_3: 'Reels / TikTok / Shorts 仍是 1080×1920，只换叠层，不改 H1。',
	tool_instagram_story_size_rules_item_4: 'Facebook Story 同一套 9:16。只在问答说明，不另开 URL。',
	tool_instagram_story_size_rules_title: '需要知道的规则',
	tool_instagram_story_size_safe_hint: '发暗叠层 = 界面挡住的地方。不会写进 JPEG。',
	tool_instagram_story_size_size_reels: 'Reels',
	tool_instagram_story_size_size_shorts: 'Shorts',
	tool_instagram_story_size_size_story: 'Story 1080×1920',
	tool_instagram_story_size_size_tiktok: 'TikTok',
	tool_instagram_story_size_status_done: '快拍已就绪——下载或换图。',
	tool_instagram_story_size_status_working: '正在铺满画幅…',
	tool_instagram_story_size_title: 'Instagram 快拍尺寸',
	tool_instagram_story_size_usecase_1: '今天的 Story：先导出 1080×1920，文字避开回复栏。',
	tool_instagram_story_size_usecase_2: 'Reels 封面：切芯片，仍是 9:16，核对更厚的底栏。',
	tool_instagram_story_size_usecase_3: 'Shorts 或 TikTok 封面：同一像素、不同叠层，不另开页。',
	tool_instagram_story_size_usecases_title: '适合这些事',
};

export default zh;
