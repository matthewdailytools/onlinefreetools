import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：给音频剪辑加淡入淡出（S22）。
 * 头尾包络；≠ 无缝循环交叉淡化（S5）、≠ 限幅/EQ。
 */
const zh: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "给音频剪辑加淡入淡出",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "用 0.5–3 秒芯片与线性或等功率曲线柔化突兀起止，再下载 16 位 WAV。全程本机处理。",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "给音频剪辑加淡入淡出：两端可选 0.5、1、2 或 3 秒，曲线可选线性或等功率。步骤：淡化、试听、下载 WAV。示例：加载突兀样例即可体验。只做头尾软起软收——不是无缝循环的首尾交叉淡化，也不是限幅或均衡。音频始终留在本机，绝不上传到服务器。",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "剪辑硬切开头或结尾常在扬声器上咔一声，放进时间线也显得突兀。本页在片头施加淡入、片尾施加淡出包络。每端可选 0.5、1、2、3 秒；线性是直线增益斜坡，等功率用正弦/余弦斜坡让听感更稳。若两端时长之和超过片长，会按比例一起缩短，中间仍保留一段。这是单段头尾淡化——不是把尾叠进头做成无缝循环，也不是限幅或 EQ。声道保持 1 或 2。请保留原文件；下载是新的 16 位 WAV。处理在浏览器本机完成。",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "选择音频文件",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "拖入一个 WAV、MP3、M4A、AAC 或 OGG。最多 40 MiB、10 分钟；单声道或立体声均可。",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "淡化",
  tool_fade_in_and_fade_out_an_audio_clip_download: "下载 WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "加载样例",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "清空",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "淡化设置",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "淡入",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "淡出",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "曲线",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "线性",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "等功率",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "默认淡入 1 秒、淡出 1 秒、等功率。鼓点宜短、铺垫与旁白宜长。两端之和超过片长时会一起缩短。",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "淡化进度",
  tool_fade_in_and_fade_out_an_audio_clip_read: "读取",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "解码",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "淡化",
  tool_fade_in_and_fade_out_an_audio_clip_write: "写入",
  tool_fade_in_and_fade_out_an_audio_clip_done: "完成。请试听淡化后的 WAV，再点击「下载 WAV」。",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "淡化失败。请换较小且有效的音频文件重试。",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "已用 {s} 秒",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "试听淡化后的 WAV",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds} 秒 · 入 {fadeIn}s · 出 {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "四秒突兀演示",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "请先选择音频文件或加载样例。",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "请只放入一个音频文件。",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "不支持或已损坏的音频。请使用浏览器可解码的文件（WAV、MP3、M4A、AAC 或 OGG）。",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit: "请使用不超过 40 MiB 或 10 分钟、且为 1 或 2 声道的文件。",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode: "浏览器无法解码此音频，请换一份有效录音。",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder: "无法写入淡化后的 WAV。请检查设置后再次点击「淡化」。",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence: "电平接近静音，无法淡化。请换有可听见内容的录音。",
  tool_fade_in_and_fade_out_an_audio_clip_err_short: "片段过短，无法有效淡化。请使用长于约 50 毫秒的文件。",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "如何给音频剪辑加淡入淡出",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "选好两端时长与曲线，施加淡化，试听后再下载 16 位 WAV——文件无需上传。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1: "选择音频文件，或点「加载样例」试听约四秒突兀示范。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2: "打开「淡化设置」，为淡入、淡出各选 0.5 / 1 / 2 / 3 秒（默认各 1 秒）。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3: "选择线性或等功率（默认），点击「淡化」，等待读取 → 解码 → 淡化 → 写入。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4: "试听软起软收，核对结果行，再点击「下载 WAV」。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "为什么选择我们的给音频剪辑加淡入淡出工具",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1: "保存前可看到淡入、淡出秒数、曲线名与输出 KiB。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2: "时长芯片与两种曲线一目了然——专做头尾淡化，不是无缝循环交叉淡化，也不是限幅/EQ。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "解码、包络淡化与 WAV 写入都在本机完成；页面不会上传你的录音去处理。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4: "改芯片、曲线或输入会作废旧下载，避免误存过期 WAV。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "淡化时长、曲线与限制",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "淡入在片头从静音升起；淡出在片尾落到静音。线性为直线斜坡；等功率为正弦/余弦斜坡。两端重叠请求会按比例缩短。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1: "每端提供 0.5、1、2、3 秒。默认淡入 1 秒、淡出 1 秒、等功率。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "只淡化单段头尾。不会把尾叠进头做无缝循环，也不会限幅或改 EQ 频段。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3: "导出走道保持 1 或 2。不复制标签。原文件不会被覆盖。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "单文件最多 40 MiB、十分钟。淡入加淡出超过片长时两端同比例缩小，中间仍保留。",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "试一次真实头尾淡化",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "「加载样例」生成约四秒起止突兀的音调，并以 1 秒 / 1 秒等功率自动淡化。不会自动播放——若要听软边，请自行点预览播放。",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "适用场景",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1: "旁白或音乐床切点咔哒——选 1 秒 / 1 秒，淡化后下载 WAV。",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2: "先要软边再去别处裁切或上时间线——不必做成无缝循环。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "这和「把音频做成无缝循环」一样吗？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "不一样。那一页把选区尾叠到头做交叉淡化，让循环接缝干净。本页只柔化单段起止。要无缝循环请用「把音频做成无缝循环」。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "会限幅或做均衡吗？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "不会。只按包络乘采样。限幅请用峰值限制工具；低音请用「给 MP3 增强低音」；闷声 EQ 请用闷人声均衡页。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "等功率和线性有何区别？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "线性是直线增益斜坡。等功率淡入用正弦、淡出用对应余弦形状，听感更顺。默认为等功率。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "两端都选 3 秒但片子更短怎么办？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "两端会按比例缩短，使淡入加淡出不超过片长。结果行会显示实际应用的秒数。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "能不能只淡一端？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "芯片会同时设定两端；不想动的一端选最短 0.5 秒，或先用「裁剪一段音频并导出」再淡化。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "音频会上传到服务器吗？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "不会。解码、淡化与 WAV 写入都在浏览器本机完成。首次加载需要网络；不保证可离线使用。无缝循环请用对应工具；裁长度请用「裁剪一段音频并导出」。",
};
export default zh;
