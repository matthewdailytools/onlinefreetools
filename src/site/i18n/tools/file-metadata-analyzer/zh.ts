/**
 * i18n tool shard (file-metadata-analyzer / zh).
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文文案键表。 */
const zh: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: '分析中…',
	tool_file_metadata_analyzer_article:
		'拖放或选择本地文件，查看名称、大小、MIME 类型与修改时间。图片会显示宽×高；浏览器能解码的音视频会显示时长。可选 magic-byte 提示常见容器。文件留在本机，不上传服务器。',
	tool_file_metadata_analyzer_choose_file: '选择文件',
	tool_file_metadata_analyzer_clear: '清空',
	tool_file_metadata_analyzer_decode_fail: '未能解码额外媒体字段，基础文件信息仍会显示。',
	tool_file_metadata_analyzer_desc:
		'查看本地文件元数据：大小、类型、尺寸、时长。文件不出本机，不上传服务器。',
	tool_file_metadata_analyzer_description:
		'文件元数据分析器：拖放或选择文件，读取名称、字节大小、MIME 类型与修改时间。图片显示宽×高；音视频在可解码时显示时长。magic-byte 提示覆盖 PNG、JPEG、GIF、WebP、PDF、ZIP、MP4。示例：进页自动加载 16×16 样例 PNG。深度 EXIF 请用相关 EXIF 工具。文件留在设备，不上传服务器。',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} 像素',
	tool_file_metadata_analyzer_drop_hint: '或把文件拖到这里。分析在本标签页完成。',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: '请先选择或拖入文件。',
	tool_file_metadata_analyzer_example:
		'加载示例会在内存生成名为 sample-icon.png 的 16×16 PNG。表格显示约百余字节、image/png、当天修改时间、尺寸 16×16 像素及 PNG magic 提示，无需上传。',
	tool_file_metadata_analyzer_example_title: '示例',
	tool_file_metadata_analyzer_faq_a1:
		'不会。文件在本标签页用 File API 读取，不会 POST 到我们的服务器，可在 DevTools 网络面板确认。',
	tool_file_metadata_analyzer_faq_a2:
		'本页展示容器基础字段（名称、大小、MIME、修改时间）及可解码时的图片尺寸或音视频时长。EXIF 工具用于读取或清除相机 EXIF（GPS、快门等），需要深度 EXIF 请用那个工具。',
	tool_file_metadata_analyzer_faq_a3:
		'非常见扩展名时浏览器常留空 file.type。仍会显示大小与名称，magic-byte 可能根据文件头提示 PNG/JPEG/PDF 等。',
	tool_file_metadata_analyzer_faq_a4:
		'部分编解码器或损坏文件无法在 video/audio 或 createImageBitmap 中解码。仍显示 File API 字段，解码说明行会提示失败。',
	tool_file_metadata_analyzer_faq_a5:
		'读取前约 12 字节匹配常见签名（PNG、JPEG、GIF、WebP、PDF、ZIP、MP4 ftyp）。仅为提示，非完整文件类型库。',
	tool_file_metadata_analyzer_faq_q1: '文件会上传吗？',
	tool_file_metadata_analyzer_faq_q2: '和 EXIF 工具有什么区别？',
	tool_file_metadata_analyzer_faq_q3: '为什么 MIME 类型是空的？',
	tool_file_metadata_analyzer_faq_q4: '为什么没有尺寸或时长？',
	tool_file_metadata_analyzer_faq_q5: 'magic-byte 提示是什么？',
	tool_file_metadata_analyzer_field_decode_note: '解码说明',
	tool_file_metadata_analyzer_field_dimensions: '尺寸',
	tool_file_metadata_analyzer_field_duration: '时长',
	tool_file_metadata_analyzer_field_magic: 'Magic-byte 提示',
	tool_file_metadata_analyzer_field_modified: '最后修改',
	tool_file_metadata_analyzer_field_name: '文件名',
	tool_file_metadata_analyzer_field_size: '大小（字节）',
	tool_file_metadata_analyzer_field_size_human: '大小（可读）',
	tool_file_metadata_analyzer_field_type: 'MIME / 类型',
	tool_file_metadata_analyzer_how_body:
		'选择或拖入一个本地文件。先列出 File 基础字段，再对图片读宽×高，对音视频在可解码时读时长。',
	tool_file_metadata_analyzer_how_item_1: '拖文件到区域或点击选择文件。',
	tool_file_metadata_analyzer_how_item_2: '在表格中查看名称、字节大小、可读大小、MIME 与修改时间。',
	tool_file_metadata_analyzer_how_item_3: '图片看宽×高；音视频看时长（视频还可看画面尺寸）。',
	tool_file_metadata_analyzer_how_item_4: '用加载示例重播内置 PNG，或清空重置。',
	tool_file_metadata_analyzer_how_title: '使用方法',
	tool_file_metadata_analyzer_load_sample: '加载示例',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: '文件元数据结果',
	tool_file_metadata_analyzer_rules_body: '字段来源与边界——本工具保证什么、什么需要专用工具。',
	tool_file_metadata_analyzer_rules_item_1: '名称、大小、类型、lastModified 直接来自浏览器 File 对象。',
	tool_file_metadata_analyzer_rules_item_2: '图片尺寸优先 createImageBitmap，否则 Image 元素，同页不上传。',
	tool_file_metadata_analyzer_rules_item_3: '音视频时长用 muted 媒体元素 preload=metadata；冷门编解码可能失败。',
	tool_file_metadata_analyzer_rules_item_4: 'magic-byte 为浅层容器提示，不能替代文件哈希或深度 EXIF 表。',
	tool_file_metadata_analyzer_rules_title: '规则说明',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: '分析完成。',
	tool_file_metadata_analyzer_title: '文件元数据分析器',
	tool_file_metadata_analyzer_usecase_1: '上传到 CMS 或广告平台前，确认导出真的是 1920×1080。',
	tool_file_metadata_analyzer_usecase_2: '不用桌面媒体工具，快速看语音备忘录或录屏有多长。',
	tool_file_metadata_analyzer_usecase_3: '扩展名可疑时，对照 MIME 与 magic-byte 再决定是否信任下载。',
	tool_file_metadata_analyzer_usecases_title: '适用场景',
	tool_file_metadata_analyzer_waiting: '选择文件或加载示例以查看元数据。',
};

export default zh;
