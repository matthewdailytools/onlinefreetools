/**
 * i18n 工具分片（youtube-thumbnail-size / zh）。
 * 检索向 H1：YouTube 缩略图尺寸；默认 1280×720 16:9，不是链接卡也不是 Shorts。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_youtube_thumbnail_size_article:
		'把剧照裁成 YouTube 缩略图尺寸 1280×720（16:9），再下载 JPEG。640×360 是最低档芯片。文件留在本机，不上传服务器。',
	tool_youtube_thumbnail_size_choose_image: '选择图片',
	tool_youtube_thumbnail_size_clear: '清空',
	tool_youtube_thumbnail_size_desc: '导出 YouTube 缩略图尺寸 1280×720（16:9）；文件留在本机，不上传服务器。',
	tool_youtube_thumbnail_size_description:
		'YouTube 缩略图尺寸：选一张剧照，cover 铺满 1280×720（16:9），下载 JPEG。示例：进页样例已裁到缩略图画幅。640×360 是最低档芯片。文件不出本机，不上传服务器。这不是 1200×630 链接分享卡，也不是 9:16 Shorts 封面。',
	tool_youtube_thumbnail_size_download: '下载 JPEG',
	tool_youtube_thumbnail_size_drop_hint: '拖入一张图。cover 可能裁边。',
	tool_youtube_thumbnail_size_empty: '请先选择图片。',
	tool_youtube_thumbnail_size_err_decode: '读不了这张图。请改用 JPEG、PNG 或 WebP。',
	tool_youtube_thumbnail_size_example: '加载示例画出横图，铺满 1280×720，并启用下载 JPEG。640×360 是最低档芯片。',
	tool_youtube_thumbnail_size_example_title: '示例',
	tool_youtube_thumbnail_size_faq_a1: '不会。图在这个标签页解码。不会上传到 YouTube 或我们的服务器。',
	tool_youtube_thumbnail_size_faq_a2: 'YouTube 自定义缩略图仍建议 1280×720。这是本页默认的 YouTube 缩略图尺寸。',
	tool_youtube_thumbnail_size_faq_a3: '链接卡大约 1200×630。本 H1 只管视频缩略图；分享卡请用相关 Open Graph 页。',
	tool_youtube_thumbnail_size_faq_a4: 'Shorts 封面是 9:16。那是 Instagram 快拍尺寸页的事，不是这张 16:9 缩略图。',
	tool_youtube_thumbnail_size_faq_a5: '640×360 是文档写明的最低档。只在要更小文件时用；默认仍是 1280×720。',
	tool_youtube_thumbnail_size_faq_q1: '图片会上传吗？',
	tool_youtube_thumbnail_size_faq_q2: '为什么是 1280×720？',
	tool_youtube_thumbnail_size_faq_q3: '这和 Open Graph 分享卡一样吗？',
	tool_youtube_thumbnail_size_faq_q4: 'Shorts 封面怎么办？',
	tool_youtube_thumbnail_size_faq_q5: '什么时候用 640×360？',
	tool_youtube_thumbnail_size_how_body: '选今天这条视频的剧照，铺满 1280×720，再下载。链接卡和 Shorts 封面在相关页。',
	tool_youtube_thumbnail_size_how_item_1: '为 YouTube 缩略图尺寸选图——任务是 1280×720 的 16:9 视频缩略图。',
	tool_youtube_thumbnail_size_how_item_2: '保持 1280×720，除非你明确要 640×360 最低档。',
	tool_youtube_thumbnail_size_how_item_3: '下载 JPEG。cover 可能裁边，避免黑边。',
	tool_youtube_thumbnail_size_how_item_4: '进页已经跑过示例。OG 卡和 Shorts 封面走相关页。',
	tool_youtube_thumbnail_size_how_title: '怎么用',
	tool_youtube_thumbnail_size_load_sample: '加载示例',
	tool_youtube_thumbnail_size_out_size_label: '输出尺寸',
	tool_youtube_thumbnail_size_quality_label: 'JPEG 质量',
	tool_youtube_thumbnail_size_rules_body: '视频缩略图是 16:9 cover，不是 1.91:1 分享卡，也不是 9:16 Shorts 封面。',
	tool_youtube_thumbnail_size_rules_item_1: '默认画布是 1280×720 JPEG。cover 直到 16:9 铺满。',
	tool_youtube_thumbnail_size_rules_item_2: '640×360 是文档最低档芯片。不改 H1。',
	tool_youtube_thumbnail_size_rules_item_3: 'Open Graph 1200×630 是另一件事。请用相关分享卡页。',
	tool_youtube_thumbnail_size_rules_item_4: 'Shorts 和快拍仍是 9:16，在相关快拍页。',
	tool_youtube_thumbnail_size_rules_title: '会碰到的规则',
	tool_youtube_thumbnail_size_size_360: '640×360 最低',
	tool_youtube_thumbnail_size_size_720: '1280×720',
	tool_youtube_thumbnail_size_status_done: '缩略图好了——下载或换图。',
	tool_youtube_thumbnail_size_status_working: '正在铺满画幅…',
	tool_youtube_thumbnail_size_title: 'YouTube 缩略图尺寸',
	tool_youtube_thumbnail_size_usecase_1: '今天要上的视频：设自定义缩略图前先导出 1280×720。',
	tool_youtube_thumbnail_size_usecase_2: '竖图剧照：cover 成 16:9，让脸留在画面中间。',
	tool_youtube_thumbnail_size_usecase_3: '不小心导出了 1200×630：来这里重裁成 1280×720，别用分享卡页。',
	tool_youtube_thumbnail_size_usecases_title: '适合这些情况',
};

export default zh;
