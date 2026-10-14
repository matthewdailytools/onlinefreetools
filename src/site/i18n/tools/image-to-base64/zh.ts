/**
 * i18n tool shard (image-to-base64 / zh)。
 * 图片转 Base64 / Base64 转图片：编码与解码同页切换，文件在浏览器内处理、不上传服务器。
 * 键集须与 en.ts 完全一致；只改本工具键。按钮词：编码 / 解码 / 复制 / 下载 / 加载样例 / 清空。
 * 占位符保持原样：{mime} {chars} {bytes} {s}。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文文案字典（按中文用户「图片转Base64 / Base64转图片 / data URL」搜法重写）。 */
const zh: SiteLangDict = {
	tool_image_to_base64_title: '图片转 Base64 — 本地编码与解码',
	tool_image_to_base64_desc: '图片转 Base64 / data URL，或把 Base64 转回图片；不上传服务器。',
	tool_image_to_base64_description:
		'在线把图片转成 Base64 / data URL，也能把 Base64 转回图片；文件只在浏览器里处理，不上传服务器。步骤：选择图片→点「编码」→「复制」或「下载」；解码时粘贴字符串再点「解码」。示例：样例 PNG → data:image/png;base64,…，可直接填进 HTML 的 img src。',
	tool_image_to_base64_mode_label: '模式',
	tool_image_to_base64_tab_encode: '编码',
	tool_image_to_base64_tab_decode: '解码',
	tool_image_to_base64_choose_file: '选择图片',
	tool_image_to_base64_drop_hint: '也可以把 JPEG、PNG、WebP 或 GIF 拖到这里，处理全程留在当前标签页。',
	tool_image_to_base64_encode: '编码',
	tool_image_to_base64_decode_btn: '解码',
	tool_image_to_base64_copy: '复制',
	tool_image_to_base64_copy_done: '已复制',
	tool_image_to_base64_download: '下载',
	tool_image_to_base64_sample: '加载样例',
	tool_image_to_base64_clear: '清空',
	tool_image_to_base64_advanced: '高级设置（可选）',
	tool_image_to_base64_strip_prefix: '去掉 data: 前缀（只要纯 Base64）',
	tool_image_to_base64_strip_hint: '默认关闭：保留 data:image/…;base64, 前缀，可直接贴进 HTML。打开后只复制逗号后面的 Base64 正文。',
	tool_image_to_base64_decode_mime_label: '纯 Base64 的默认 MIME',
	tool_image_to_base64_decode_mime_hint: '只在粘贴内容没有 data: 前缀时生效；完整 data URL 会沿用自带的 MIME。',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: '粘贴 data:image/…;base64,… 或纯 Base64 字符串',
	tool_image_to_base64_output_label: '输出',
	tool_image_to_base64_preview_label: '预览',
	tool_image_to_base64_progress: '处理中…',
	tool_image_to_base64_step_read: '读取文件',
	tool_image_to_base64_step_encode: '编码',
	tool_image_to_base64_step_ready: '完成',
	tool_image_to_base64_read_step: '正在读取文件…',
	tool_image_to_base64_encode_step: '正在生成 data URL…',
	tool_image_to_base64_ready_step: '输出已就绪',
	tool_image_to_base64_decode_step_parse: '解析',
	tool_image_to_base64_decode_step_blob: '还原图片',
	tool_image_to_base64_decode_step_ready: '完成',
	tool_image_to_base64_parse_step: '正在解析 Base64…',
	tool_image_to_base64_blob_step: '正在还原图片数据…',
	tool_image_to_base64_elapsed: '已用 {s} 秒',
	tool_image_to_base64_empty: '请先选择一张图片。',
	tool_image_to_base64_empty_decode: '请先粘贴 data URL 或 Base64 字符串。',
	tool_image_to_base64_err_decode: '解码失败，请确认粘贴的是有效的图片 data URL 或 Base64。',
	tool_image_to_base64_err_encode: '这个文件无法编码，换成 JPEG、PNG 或 WebP 再试。',
	tool_image_to_base64_err_invalid: 'Base64 或 data URL 格式无效。',
	tool_image_to_base64_warn_large: '文件较大（超过 25 MB），转换可能变慢并占用大量内存。',
	tool_image_to_base64_status_working: '处理中…',
	tool_image_to_base64_status_done: '完成 — 可以复制字符串，或点「下载」保存图片。',
	tool_image_to_base64_status_decoded: '完成 — 预览已生成，点「下载」即可保存图片。',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} 个字符 · {bytes}',
	tool_image_to_base64_how_title: '图片怎么转 Base64',
	tool_image_to_base64_how_body:
		'编码会把整张图片读成一串 data URL；解码则接受完整 data URL 或纯 Base64（纯 Base64 的图片类型取「高级设置」里的默认 MIME）。两个方向都在浏览器里完成，文件不上传服务器。',
	tool_image_to_base64_how_item_1: '停在「编码」页签，点「选择图片」或把文件拖进来，再点「编码」。',
	tool_image_to_base64_how_item_2: '接口只收纯 Base64 时，展开「高级设置」勾选去掉 data: 前缀。',
	tool_image_to_base64_how_item_3: '点「复制」把字符串放进剪贴板，或点「下载」保存原图。',
	tool_image_to_base64_how_item_4: 'Base64 转图片：切到「解码」，粘贴 data URL 或 Base64，点「解码」，确认预览后点「下载」。',
	tool_image_to_base64_why_choose_title: '为什么用本站的图片转 Base64',
	tool_image_to_base64_why_choose_item_1: '图片转 Base64 和 Base64 转图片在同一个页面切换，不用来回找两个工具。',
	tool_image_to_base64_why_choose_item_2: '编码或解码后立刻显示预览，能直接核对图片对不对，而不是只看一长串字符。',
	tool_image_to_base64_why_choose_item_3: '一键去掉 data: 前缀，适配只接受纯 Base64 字段的接口和表单。',
	tool_image_to_base64_why_choose_item_4: '文件超过约 25 MB 会先提示，避免浏览器卡死后才发现。',
	tool_image_to_base64_why_choose_item_5: '文件留在本机标签页内处理，不上传到我们的服务器。',
	tool_image_to_base64_rules_title: '转换规则',
	tool_image_to_base64_rules_body: '编码按文件原始字节生成 data URL，不重新压缩；解码把字符串还原成图片文件供下载。',
	tool_image_to_base64_rules_item_1: '默认输出完整的 data:image/…;base64,… 字符串，可直接当作 HTML img 的 src。',
	tool_image_to_base64_rules_item_2: '去前缀会删掉第一个逗号之前的全部内容，只留 Base64 正文，适合只收裸 Base64 的 API。',
	tool_image_to_base64_rules_item_3: '没有前缀的纯 Base64 按「高级设置」里的默认 MIME 解释（默认 image/png）。',
	tool_image_to_base64_rules_item_4: '含非法字符或被截断的字符串会直接报错，不会上传任何内容。',
	tool_image_to_base64_rules_item_5: '动图 GIF 整个文件一起编码，本页不拆帧、不改动画。',
	tool_image_to_base64_example_title: '示例',
	tool_image_to_base64_example:
		'点「加载样例」会生成一张 320×200、写着“Base64”的 PNG，自动执行「编码」，输出框里得到 data:image/png;base64,…。把它粘进 HTML 的 <img src="…"> 就能显示。再切到「解码」粘贴同一串，点「解码」，即可「下载」decoded.png。',
	tool_image_to_base64_usecases_title: '适合什么场景',
	tool_image_to_base64_usecase_1: '把小图标或 Logo 直接内嵌进 HTML / CSS，省掉一次图片请求。',
	tool_image_to_base64_usecase_2: '排查邮件模板或 Markdown 里已经内嵌的 data URL 图片显示异常。',
	tool_image_to_base64_usecase_3: '接口返回了一段 Base64，想把它转回图片看看到底是什么。',
	tool_image_to_base64_usecase_4: '后台表单字段不接受 data: 前缀，需要交一段纯 Base64。',
	tool_image_to_base64_faq_q1: '图片会被上传吗？',
	tool_image_to_base64_faq_a1:
		'不会。读取、编码和解码都在你的浏览器标签页里完成，文件不出本机、不上传服务器。',
	tool_image_to_base64_faq_q2: 'data URL 和纯 Base64 有什么区别？',
	tool_image_to_base64_faq_a2:
		'data URL 是 data:image/png;base64, 加上正文，可以直接放进 HTML；纯 Base64 只有正文部分。需要后者时，在「高级设置」里打开去掉 data: 前缀再复制。',
	tool_image_to_base64_faq_q3: '大图片能转吗？',
	tool_image_to_base64_faq_a3:
		'能，但很吃内存：Base64 会比原文件大约 33%。超过约 25 MB 时建议先压缩或缩小尺寸再转。',
	tool_image_to_base64_faq_q4: '解码时图片格式怎么判断？',
	tool_image_to_base64_faq_a4:
		'有 data URL 前缀时直接用前缀里的 MIME；纯 Base64 则用「高级设置」里的默认 MIME（默认 image/png）。',
	tool_image_to_base64_faq_q5: 'GIF 动图能转 Base64 吗？',
	tool_image_to_base64_faq_a5:
		'可以，整个文件原样编码成 data URL，动画保留；本页不拆分或编辑帧。',
	tool_image_to_base64_faq_q6: '和图片格式转换有什么不同？',
	tool_image_to_base64_faq_a6:
		'本页产出的是一段文本（或从文本还原图片）。只想把 JPEG / PNG / WebP 互相转换、不需要 Base64，请用图片格式转换工具。',
	tool_image_to_base64_faq_q7: '为什么「复制」是灰的或复制出来是空的？',
	tool_image_to_base64_faq_a7:
		'「复制」需要先有编码结果：选择图片、点「编码」后再复制。在解码模式下要保存图片，请用「下载」。',
	tool_image_to_base64_article:
		'编码把图片读成 data URL；解码支持 data URL 或纯 Base64，纯 Base64 的 MIME 可在高级设置中指定。',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — Data URL',
};

/** 默认导出：由 merge:tools 合并进站点 zh 语言包。 */
export default zh;
