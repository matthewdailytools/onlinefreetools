import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：给 MP3 增强低音（S21）。
 * 单节 lowshelf；≠ 闷声全 EQ（S20）、≠ 整段增益（S15）。
 */
const zh: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "给 MP3 增强低音",
  tool_boost_bass_on_an_mp3_desc: "用轻柔、适中或强烈低架式预设加厚偏薄低音，再下载 16 位 WAV。全程本机处理。",
  tool_boost_bass_on_an_mp3_description:
    "给 MP3 增强低音：用轻柔、适中或强烈低架式（lowshelf）预设抬升低频。步骤：增强低音、试听、下载 WAV。示例：加载偏薄低音样例即可体验。只做低音架式增强——不是闷声三频段均衡，也不是整段音量放大。音频始终留在本机，绝不上传到服务器。",
  tool_boost_bass_on_an_mp3_article:
    "手机导出的 MP3 和笔记本喇叭常让底鼓、贝斯发虚：中频够，约 100 Hz 以下却不够沉。本页在 OfflineAudioContext 里跑一节 BiquadFilter lowshelf：轻柔温和抬升；适中（默认）适合日常曲目；强烈推得更沉。若增强后会削波，软峰值保护会等比回缩。这是低音增强——不是 Clarity/Warmth/Presence 闷声三频段 EQ，也不是整段同 dB 变响。导出走道保持 1 或 2。请保留母带；下载是新的 16 位 WAV。处理在浏览器本机完成。",
  tool_boost_bass_on_an_mp3_choose: "选择音频文件",
  tool_boost_bass_on_an_mp3_hint: "拖入一个 WAV、MP3、M4A、AAC 或 OGG。最多 40 MiB、10 分钟；单声道或立体声均可。",
  tool_boost_bass_on_an_mp3_convert: "增强低音",
  tool_boost_bass_on_an_mp3_download: "下载 WAV",
  tool_boost_bass_on_an_mp3_sample: "加载样例",
  tool_boost_bass_on_an_mp3_clear: "清空",
  tool_boost_bass_on_an_mp3_advanced: "低音预设",
  tool_boost_bass_on_an_mp3_preset_label: "低架式低音预设",
  tool_boost_bass_on_an_mp3_preset_mild: "轻柔",
  tool_boost_bass_on_an_mp3_preset_medium: "适中",
  tool_boost_bass_on_an_mp3_preset_strong: "强烈",
  tool_boost_bass_on_an_mp3_settings_hint:
    "默认「适中」在约 90 Hz 附近低架式抬升。轻柔更温和；强烈更沉。软峰值保护避免增强后削波。",
  tool_boost_bass_on_an_mp3_progress: "低音增强进度",
  tool_boost_bass_on_an_mp3_read: "读取",
  tool_boost_bass_on_an_mp3_decode: "解码",
  tool_boost_bass_on_an_mp3_boost: "增强",
  tool_boost_bass_on_an_mp3_write: "写入",
  tool_boost_bass_on_an_mp3_done: "完成。请试听增强后的 WAV，再点击「下载 WAV」。",
  tool_boost_bass_on_an_mp3_failed: "低音增强失败。请换较小且有效的音频文件重试。",
  tool_boost_bass_on_an_mp3_elapsed: "已用 {s} 秒",
  tool_boost_bass_on_an_mp3_preview: "试听增强低音后的 WAV",
  tool_boost_bass_on_an_mp3_result: "{seconds} 秒 · {preset} · 峰值 {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "两秒偏薄低音演示",
  tool_boost_bass_on_an_mp3_empty: "请先选择音频文件或加载样例。",
  tool_boost_bass_on_an_mp3_err_file: "请只放入一个音频文件。",
  tool_boost_bass_on_an_mp3_err_format: "不支持或已损坏的音频。请使用浏览器可解码的文件（WAV、MP3、M4A、AAC 或 OGG）。",
  tool_boost_bass_on_an_mp3_err_limit: "请使用不超过 40 MiB 或 10 分钟、且为 1 或 2 声道的文件。",
  tool_boost_bass_on_an_mp3_err_decode: "浏览器无法解码此音频，请换一份有效录音。",
  tool_boost_bass_on_an_mp3_err_encoder: "无法写入增强后的 WAV。请检查预设后再次点击「增强低音」。",
  tool_boost_bass_on_an_mp3_err_silence: "电平接近静音，无法增强。请换有可听见内容的录音。",
  tool_boost_bass_on_an_mp3_how_title: "如何给 MP3 增强低音",
  tool_boost_bass_on_an_mp3_how_body: "选好低架式预设，抬升低音，试听后再下载 16 位 WAV——文件无需上传。",
  tool_boost_bass_on_an_mp3_how_item_1: "选择音频文件，或点「加载样例」试听约两秒偏薄低音示范。",
  tool_boost_bass_on_an_mp3_how_item_2: "打开「低音预设」，选轻柔、适中（默认）或强烈。",
  tool_boost_bass_on_an_mp3_how_item_3: "点击「增强低音」，等待读取 → 解码 → 增强 → 写入完成。",
  tool_boost_bass_on_an_mp3_how_item_4: "试听结果，核对预设与峰值数字，再点击「下载 WAV」。",
  tool_boost_bass_on_an_mp3_why_choose_title: "为何选择本站的低音增强工具",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "保存前即可看到预设名、峰值前后与输出 KiB。",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "三档清晰低架式预设——单一低音作业，不是埋在十段均衡或整段音量墙里。",
  tool_boost_bass_on_an_mp3_why_choose_item_3: "解码、lowshelf 增强与写 WAV 都在本机完成；页面不会上传音频再处理。",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "改预设或换输入会清空旧下载，避免误存过期的 WAV。",
  tool_boost_bass_on_an_mp3_rules_title: "轻柔、适中、强烈与限制",
  tool_boost_bass_on_an_mp3_rules_body:
    "每档都是一节 lowshelf Biquad。轻柔温和；适中为日常抬升；强烈更沉。若增强会削波，软峰值保护会回缩。",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "默认「适中」约在 90 Hz、约 +8 dB。轻柔约 +4 dB；强烈约 +12 dB，架点略低。",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "只做低架式低音。不会像闷声 EQ 那样重塑中高频，也不会像音量放大器那样整段同比例变响。",
  tool_boost_bass_on_an_mp3_rules_item_3: "导出走道数保持 1 或 2。不复制标签。原文件不会被覆盖。",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "单文件上限 40 MiB、十分钟。选用「强烈」后若峰值过高，软峰值保护可能降低整体电平，使 WAV 不超满幅。",
  tool_boost_bass_on_an_mp3_example_title: "试用真实低音增强",
  tool_boost_bass_on_an_mp3_example:
    "「加载样例」会生成约两秒中频偏强、低频偏弱的音调，并以「适中」自动增强。不会自动播放——若要听更沉的效果，请在预览中按播放。",
  tool_boost_bass_on_an_mp3_usecases_title: "适用场景",
  tool_boost_bass_on_an_mp3_usecase_1: "导出的 MP3 在喇叭上发薄——选「适中」增强后下载 WAV。",
  tool_boost_bass_on_an_mp3_usecase_2: "想加厚底鼓重量，又不想开全段图形均衡或把整首曲调大。",
  tool_boost_bass_on_an_mp3_faq_q1: "这和「给人声闷录音做均衡」是一回事吗？",
  tool_boost_bass_on_an_mp3_faq_a1:
    "不是。那一页用 Clarity/Warmth/Presence 三频段预设扫闷人声。本页只用 lowshelf 抬升低频。闷声 EQ 请用「给人声闷录音做均衡」。",
  tool_boost_bass_on_an_mp3_faq_q2: "这和「把安静的录音调大声」一样吗？",
  tool_boost_bass_on_an_mp3_faq_a2:
    "不一样。音量放大是整段样本同 dB 增益。本页只架式抬升低音。整段变响请用「把安静的录音调大声」。",
  tool_boost_bass_on_an_mp3_faq_q3: "轻柔、适中、强烈分别做什么？",
  tool_boost_bass_on_an_mp3_faq_a3:
    "轻柔是温和低架式。适中（默认）是日常低音抬升。强烈是更沉的低频。软峰值保护防止增强后削波。",
  tool_boost_bass_on_an_mp3_faq_q4: "增强后文件变烫（更响）怎么办？",
  tool_boost_bass_on_an_mp3_faq_a4:
    "lowshelf 之后，若峰值将超过约 −0.2 dBFS，软峰值保护会等比回缩，使 WAV 安全。专用峰值限制请用「限制峰值以免文件削波」。",
  tool_boost_bass_on_an_mp3_faq_q5: "我的音频会上传到服务器吗？",
  tool_boost_bass_on_an_mp3_faq_a5:
    "不会。解码、低音增强与写 WAV 都在本机浏览器完成。首次打开页面需要联网；不保证可离线使用。",
  tool_boost_bass_on_an_mp3_faq_q6: "只能用 MP3 吗？WAV、M4A 可以吗？",
  tool_boost_bass_on_an_mp3_faq_a6:
    "浏览器能解码的格式都可以——WAV、MP3、M4A、AAC 或 OGG。标题沿用常见「MP3」搜法；导出始终是新的 16 位 WAV。",
};
export default zh;
