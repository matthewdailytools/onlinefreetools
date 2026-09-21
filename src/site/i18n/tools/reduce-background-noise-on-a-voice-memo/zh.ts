import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：给人声备忘录降低背景噪音（S24）。
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / 去嗡嗡 / 闷声 EQ。
 */
const zh: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "给人声备忘录降低背景噪音",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "用轻度、适中或强烈的高通加噪声底门控预设压低备忘录里的风扇/空调稳态嘶声，然后下载 16-bit WAV。仅本机近似处理。",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "用人声备忘录降噪：轻度、适中或强烈的高通加噪声底门控预设，压低风扇、空调一类稳态背景噪音。步骤：降噪、试听、下载 16 位 WAV。示例：加载带嘶声的样例即可体验。浏览器近似——不是 Adobe Enhance Speech、不是去 50/60 Hz 嗡嗡、不是闷声 EQ。音频始终留在本机，绝不会上传。",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "人声备忘录常叠着风扇、空调或房间稳态嘶声，盖住人声。本页先高通去掉隆隆，再从安静帧估计噪声底，并对接近噪声底的帧做轻柔门控。轻度、适中、强烈决定安静帧被压多少。这是诚实的浏览器近似，不是云端 Adobe Enhance、不是窄带市电嗡嗡陷波、也不是三频段闷声 EQ。音乐与鼓点可能变闷。声道保持 1 或 2。保留原文件；下载是新的 16-bit WAV。处理在浏览器本机完成。",
  tool_reduce_background_noise_on_a_voice_memo_choose: "选择音频文件",
  tool_reduce_background_noise_on_a_voice_memo_hint: "拖入一个 WAV、MP3、M4A、AAC 或 OGG。最大 40 MiB、10 分钟；单声道或立体声。",
  tool_reduce_background_noise_on_a_voice_memo_convert: "降噪",
  tool_reduce_background_noise_on_a_voice_memo_download: "下载 WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "加载样例",
  tool_reduce_background_noise_on_a_voice_memo_clear: "清除",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "降噪强度",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "降噪强度",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "轻度",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "适中",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "强烈",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "默认适中兼顾人声与稳态嘶声。人声偏弱时选轻度。强烈会更狠地压安静帧，辅音可能变薄。这是高通加噪声底门控，不是机器学习 Enhance。",
  tool_reduce_background_noise_on_a_voice_memo_progress: "降噪进度",
  tool_reduce_background_noise_on_a_voice_memo_read: "读取",
  tool_reduce_background_noise_on_a_voice_memo_decode: "解码",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "降噪",
  tool_reduce_background_noise_on_a_voice_memo_write: "写入",
  tool_reduce_background_noise_on_a_voice_memo_done: "完成。试听降噪后的 WAV，然后下载 WAV。",
  tool_reduce_background_noise_on_a_voice_memo_failed: "降噪失败。请换更小、有效的音频文件重试。",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "已用时 {s} 秒",
  tool_reduce_background_noise_on_a_voice_memo_preview: "试听降噪后的 WAV",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds} 秒 · {preset} · 噪声底 {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "三秒嘶声备忘录演示",
  tool_reduce_background_noise_on_a_voice_memo_empty: "请先选择音频文件或加载样例。",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "请只拖入一个音频文件。",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "不支持或损坏的音频。请使用浏览器可解码的文件（WAV、MP3、M4A、AAC 或 OGG）。",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "请使用不超过 40 MiB 或 10 分钟、且为 1–2 声道的文件。",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "浏览器无法解码此音频。请换有效录音。",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "无法写入降噪后的 WAV。请检查强度后重试降噪。",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "电平近乎静音——无需降噪。请换有可听电平的录音。",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "如何给人声备忘录降低背景噪音",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "选择强度，运行高通与噪声底门控，试听后下载 16-bit WAV——文件不会上传。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "选择音频文件，或点「加载样例」使用三秒嘶声备忘录演示。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "打开降噪强度，选择轻度、适中（默认）或强烈。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "点击「降噪」，等待读取 → 解码 → 降噪 → 写入完成。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "试听更安静的底噪，查看结果行，然后点击「下载 WAV」。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "为什么选择我们的给人声备忘录降低背景噪音工具",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "保存前可看到强度名称、估计噪声底与输出 KiB。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "三档清晰强度——只做备忘录降噪，不是埋在 DAW 机架里或云端 Enhance 推销。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "解码、高通、噪声底门控与 WAV 写入在本机完成；页面不会上传录音去处理。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "改强度或换输入会清空旧下载，避免误存过期 WAV。",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "强度、噪声底与诚实的浏览器上限",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "每档先高通，再从安静帧估计噪声底，并对近底噪帧轻柔门控。风扇/空调稳态嘶声改善最多；辅音与音乐可能变薄。软峰值保护避免削波。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "轻度、适中、强烈改变高通截止与安静帧保留增益。默认适中。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "这是浏览器近似。不是 Adobe Enhance Speech，不是 50/60 Hz 嗡嗡陷波，也不是闷声 EQ。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "导出保持 1 或 2 声道。不复制标签。绝不覆盖原文件。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "单文件最大 40 MiB、十分钟。强烈可能留伪影；人声发空就退回轻度或适中。",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "试一段真实嘶声备忘录",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "「加载样例」生成三秒带稳态嘶声的类人声，并自动以适中强度降噪。不会自动播放——若要听更安静的底噪，请自行点预览播放。",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "什么时候有用",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "手机备忘录底下有风扇或空调嘶声——选适中，降噪，下载 WAV。",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "野外速记想先压房间嘶声，再去做淡入淡出或闷声 EQ。",
  tool_reduce_background_noise_on_a_voice_memo_usecase_3: "风扇或空调底噪稳定，希望压低间隙噪声。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "这和 Adobe Enhance Speech 一样吗？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "不一样。云端 Enhance 用大模型重建人声。本页只在浏览器里做高通与噪声底门控。效果克制、诚实——不是工作室级 AI 清晰度。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "能去掉 50/60 Hz 市电嗡嗡吗？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "不是专门的去嗡嗡作业。稳态宽带嘶声与隆隆改善最多。窄带 50/60 Hz 市电嗡嗡请用从录音中去除市电嗡嗡。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "这和「给人声闷录音做均衡」一样吗？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "不一样。那一页用清晰度/温暖感/在场感改音色。本页压稳态背景噪音。降噪后再调闷声，请用给人声闷录音做均衡。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "强烈会伤人声或音乐吗？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "会。强烈更狠地压安静帧，辅音可能变薄、鼓点变闷。多数备忘录用适中；人声已经偏弱时用轻度。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "轻度、适中、强烈改了什么？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "略提高通截止，并降低接近估计噪声底时的保留增益。默认适中。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "音频会上传到服务器吗？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "不会。解码、降噪与 WAV 写入在浏览器本机完成。首次打开页面需要网络；不保证离线可用。柔化头尾请用给音频剪辑加淡入淡出；闷声音色请用给人声闷录音做均衡。",
};
export default zh;
