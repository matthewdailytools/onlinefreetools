/**
 * i18n 工具分片（instagram-post-size / zh）。
 * 检索向 H1：Instagram 发帖尺寸；默认 1080×1080 方图，不是快拍。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_instagram_post_size_article:
		'把照片裁成 Instagram 发帖尺寸 1080×1080（1:1），再下载 JPEG。4:5 和横图是同页芯片。文件留在本机，不上传服务器。',
	tool_instagram_post_size_choose_image: '选择图片',
	tool_instagram_post_size_clear: '清空',
	tool_instagram_post_size_desc: '导出 Instagram 发帖尺寸 1080×1080（1:1）；文件留在本机，不上传服务器。',
	tool_instagram_post_size_description:
		'Instagram 发帖尺寸：选一张图，cover 铺满 1080×1080（1:1），下载 JPEG。示例：进页样例已裁到方形动态画幅。4:5（1080×1350）和横图（1080×566）是芯片。文件不出本机，不上传服务器。这不是 9:16 快拍，也不是 1200×630 链接卡。',
	tool_instagram_post_size_download: '下载 JPEG',
	tool_instagram_post_size_drop_hint: '拖入一张图。cover 可能裁边。',
	tool_instagram_post_size_empty: '请先选择图片。',
	tool_instagram_post_size_err_decode: '读不了这张图。请改用 JPEG、PNG 或 WebP。',
	tool_instagram_post_size_example: '加载示例画出方图，铺满 1080×1080，并启用下载 JPEG。4:5 和横图是芯片。',
	tool_instagram_post_size_example_title: '示例',
	tool_instagram_post_size_faq_a1: '不会。图在这个标签页解码。不会上传到 Instagram 或我们的服务器。',
	tool_instagram_post_size_faq_a2: '动态方帖仍常用 1080×1080。这是本页默认的 Instagram 发帖尺寸。',
	tool_instagram_post_size_faq_a3: '4:5 在本页是 1080×1350。换芯片即可，不必另开网址。',
	tool_instagram_post_size_faq_a4: '快拍是 9:16。那是 Instagram 快拍尺寸页的事，不是这条动态。',
	tool_instagram_post_size_faq_a5: 'Facebook 动态配图经常也是 1:1。大约 1200×630 的链接卡请用 Open Graph 页。',
	tool_instagram_post_size_faq_q1: '图片会上传吗？',
	tool_instagram_post_size_faq_q2: '为什么是 1080×1080？',
	tool_instagram_post_size_faq_q3: '4:5 在哪？',
	tool_instagram_post_size_faq_q4: '这是快拍吗？',
	tool_instagram_post_size_faq_q5: 'Facebook 动态配图呢？',
	tool_instagram_post_size_how_body: '选今天要发的动态图，铺满 1080×1080，再下载。快拍和链接卡在相关页。',
	tool_instagram_post_size_how_item_1: '为 Instagram 发帖尺寸选图——任务是 1080×1080 方形动态。',
	tool_instagram_post_size_how_item_2: '保持方图，除非你要 4:5 或横图芯片。',
	tool_instagram_post_size_how_item_3: '下载 JPEG。cover 可能裁边，避免黑边。',
	tool_instagram_post_size_how_item_4: '进页已经跑过示例。快拍和 OG 卡走相关页。',
	tool_instagram_post_size_how_title: '怎么用',
	tool_instagram_post_size_load_sample: '加载示例',
	tool_instagram_post_size_out_size_label: '输出尺寸',
	tool_instagram_post_size_quality_label: 'JPEG 质量',
	tool_instagram_post_size_rules_body: '动态默认是 1:1 cover，不是 9:16 快拍，也不是链接卡。',
	tool_instagram_post_size_rules_item_1: '默认画布是 1080×1080 JPEG。cover 直到方框铺满。',
	tool_instagram_post_size_rules_item_2: '4:5 是 1080×1350，横图是 1080×566。芯片不改 H1。',
	tool_instagram_post_size_rules_item_3: '快拍仍是 9:16，在相关快拍页。',
	tool_instagram_post_size_rules_item_4: 'Open Graph 1200×630 是另一件事。Facebook 方图可用本页 1:1。',
	tool_instagram_post_size_rules_title: '会碰到的规则',
	tool_instagram_post_size_size_45: '4:5 1080×1350',
	tool_instagram_post_size_size_land: '横图 1080×566',
	tool_instagram_post_size_size_square: '方图 1080×1080',
	tool_instagram_post_size_status_done: '帖子好了——下载或换图。',
	tool_instagram_post_size_status_working: '正在铺满画幅…',
	tool_instagram_post_size_title: 'Instagram 发帖尺寸',
	tool_instagram_post_size_usecase_1: '今天的动态：点分享前先导出 1080×1080。',
	tool_instagram_post_size_usecase_2: '人像多裁一点：换成 4:5，竖图在动态里留得更多。',
	tool_instagram_post_size_usecase_3: '不小心开了快拍：来这里重裁成 1:1，别用 9:16。',
	tool_instagram_post_size_usecases_title: '适合这些情况',
};

export default zh;
