/**
 * i18n tool shard (make-a-30-second-mp3-ringtone / zh).
 * H1：做成 30 秒 MP3 铃声；铃声制作 / mp3 转铃声收进 FAQ，不拆 URL。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：把本地歌曲裁成约 30 秒并淡化，导出 MP3 铃声。 */
const zh: SiteLangDict = {
  tool_make_a_30_second_mp3_ringtone_advanced: '高级设置（可选）',
  tool_make_a_30_second_mp3_ringtone_article:
    '在本标签页做成 30 秒 MP3 铃声：打开本机歌曲，框大约 30 秒，加上淡入淡出，点「做成铃声」，再「导出 MP3」。文件不出本机，不上传服务器。要铃声制作或 mp3 转铃声就是这一页，不是完整波形编辑器，也不写苹果 M4R。',
  tool_make_a_30_second_mp3_ringtone_bitrate: 'MP3 码率',
  tool_make_a_30_second_mp3_ringtone_bitrate_hint: '默认 128 kbps。只有点「导出 MP3」时才会用到。',
  tool_make_a_30_second_mp3_ringtone_choose_file: '选择音频文件',
  tool_make_a_30_second_mp3_ringtone_clear: '清除',
  tool_make_a_30_second_mp3_ringtone_desc:
    '在本机做成 30 秒 MP3 铃声：裁一段本地歌曲、淡化头尾，再导出 MP3。文件不出本机，不上传服务器。',
  tool_make_a_30_second_mp3_ringtone_description:
    '在本机做成 30 秒 MP3 铃声：裁一段本地歌曲，给头尾做淡入淡出，再下载 MP3——文件留在设备，不上传服务器。步骤：打开文件，设起点和时长（默认 30 秒，芯片 15 / 20 / 30 / 40），淡入 0.5 秒、淡出 1.5 秒，点「做成铃声」，用「播放」试听，再「导出 MP3」。示例：32 秒样例从 1.00 秒起取 30 秒，带上述淡化后约 30.00 秒。要铃声制作、制作铃声、手机铃声、mp3 转铃声、歌曲做成铃声、铃声裁剪或安卓铃声，都是这一套。不是完整波形编辑器；不写苹果 M4R、不做任意时长裁剪页、不扒 YouTube。',
  tool_make_a_30_second_mp3_ringtone_disclaimer:
    '请确认你有权处理这份文件。本页不提供音乐授权，不生成 M4R，也不代抓在线流。',
  tool_make_a_30_second_mp3_ringtone_drop_hint: '也可把 WAV、MP3、M4A 或 OGG 拖到这里。处理留在本标签页。',
  tool_make_a_30_second_mp3_ringtone_duration: '时长（秒）',
  tool_make_a_30_second_mp3_ringtone_duration_hint: '默认 30 秒。芯片从当前起点改成 15 / 20 / 30 / 40 秒。超过 40 秒会拒绝。',
  tool_make_a_30_second_mp3_ringtone_empty: '请先选择音频文件。',
  tool_make_a_30_second_mp3_ringtone_err_caps:
    '这个文件超过本设备上限（电脑大约 40 MB / 20 分钟，窄屏大约 20 MB / 8 分钟）。请先在别处裁短，或换更短的文件。',
  tool_make_a_30_second_mp3_ringtone_err_decode:
    '这个浏览器解不了这份文件。请改试 WAV 或 MP3，或没有 DRM 的素材。',
  tool_make_a_30_second_mp3_ringtone_err_empty: '还没有可做成铃声的材料。请先载入文件或样例。',
  tool_make_a_30_second_mp3_ringtone_err_fade:
    '淡入加淡出必须短于时长。请把淡化调短，或把片段加长。',
  tool_make_a_30_second_mp3_ringtone_err_lame: 'MP3 编码器没加载成功。请留在本标签页，再点一次「导出 MP3」。',
  tool_make_a_30_second_mp3_ringtone_err_long: '铃声片段不能超过 40 秒。请缩短时长或改起点。',
  tool_make_a_30_second_mp3_ringtone_err_range: '时长必须落在起点之后、解码后的文件之内。',
  tool_make_a_30_second_mp3_ringtone_err_video:
    '本页不接受视频当主输入。请先抽出音频，再用声音文件做铃声。',
  tool_make_a_30_second_mp3_ringtone_example:
    '载入样例会在内存里生成 32.00 秒音调，起点 1.00、时长 30，淡入 0.5 秒、淡出 1.5 秒，点「做成铃声」后约 30.00 秒。「导出 MP3」默认 128 kbps，可在高级设置改。',
  tool_make_a_30_second_mp3_ringtone_example_title: '示例',
  tool_make_a_30_second_mp3_ringtone_export_mp3: '导出 MP3',
  tool_make_a_30_second_mp3_ringtone_fade_hint:
    '默认淡入 0.5 秒、淡出 1.5 秒，副歌不会硬切。线性音量；淡化不缩短文件。',
  tool_make_a_30_second_mp3_ringtone_fade_in: '淡入（秒）',
  tool_make_a_30_second_mp3_ringtone_fade_out: '淡出（秒）',
  tool_make_a_30_second_mp3_ringtone_faq_a1:
    '不会。解码和淡化都在本标签页完成。脚本从本站加载。文件不会发到我们的服务器。',
  tool_make_a_30_second_mp3_ringtone_faq_a2:
    '不是另一套工具。铃声制作、制作铃声、手机铃声、mp3 转铃声、铃声裁剪，都是：留下大约 30 秒，做淡入淡出，再导出 MP3。',
  tool_make_a_30_second_mp3_ringtone_faq_a3:
    '大家做手机铃声通常就取 30 秒。芯片还有 15、20、40 秒。超过 40 秒会拒绝，避免做成普通长裁剪。',
  tool_make_a_30_second_mp3_ringtone_faq_a4:
    '淡入淡出是选区上的线性音量坡。默认开头 0.5 秒、结尾 1.5 秒。只改响度，不改导出时长。两者之和必须短于时长。',
  tool_make_a_30_second_mp3_ringtone_faq_a5:
    '本页只出 MP3（默认 128 kbps），不写 M4R/M4A。安卓、三星可以直接拿 MP3 当铃声。iPhone 还要经过 GarageBand 或访达，浏览器没法写入系统铃声库。',
  tool_make_a_30_second_mp3_ringtone_faq_a6:
    '安卓：下载 MP3 后拷进铃声文件夹，或在「设置 → 声音」里选这份文件。三星等皮肤也是同一份 MP3。',
  tool_make_a_30_second_mp3_ringtone_faq_a7:
    '不是。任意时长裁剪请用裁剪页。无缝循环是首尾交叉淡化，不是铃声淡入淡出。本页也不是完整音频编辑器，不扒 YouTube。',
  tool_make_a_30_second_mp3_ringtone_faq_a8:
    '电脑大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限会在解码前拒绝，不会悄悄截断。铃声选区本身不能超过 40 秒。',
  tool_make_a_30_second_mp3_ringtone_faq_q1: '音频会上传吗？',
  tool_make_a_30_second_mp3_ringtone_faq_q2: '我搜的是铃声制作、mp3 转铃声或手机铃声，这是另一页吗？',
  tool_make_a_30_second_mp3_ringtone_faq_q3: '为什么默认做成 30 秒铃声？',
  tool_make_a_30_second_mp3_ringtone_faq_q4: '铃声的淡入淡出怎么工作？',
  tool_make_a_30_second_mp3_ringtone_faq_q5: '能直接做出 iPhone 的 M4R 铃声吗？',
  tool_make_a_30_second_mp3_ringtone_faq_q6: '安卓或三星怎么把这份 MP3 设为铃声？',
  tool_make_a_30_second_mp3_ringtone_faq_q7: '这是音频裁剪、无缝循环还是音频编辑器？',
  tool_make_a_30_second_mp3_ringtone_faq_q8: '文件可以有多大？',
  tool_make_a_30_second_mp3_ringtone_how_body:
    '从本机歌曲里留下大约 30 秒，给头尾做淡化，避免硬切，再下载 MP3；文件不上服务器。',
  tool_make_a_30_second_mp3_ringtone_how_item_1: '打开音频文件（或点「载入样例」）。',
  tool_make_a_30_second_mp3_ringtone_how_item_2:
    '拖波形，或填写起点和时长（默认 30 秒；芯片 15 / 20 / 30 / 40）。淡入 0.5 秒、淡出 1.5 秒不合适再改。',
  tool_make_a_30_second_mp3_ringtone_how_item_3: '点「做成铃声」。',
  tool_make_a_30_second_mp3_ringtone_how_item_4: '点「播放」循环试听，再「导出 MP3」。',
  tool_make_a_30_second_mp3_ringtone_how_title: '怎么做成铃声',
  tool_make_a_30_second_mp3_ringtone_hud_decode: '正在本标签页解码…',
  tool_make_a_30_second_mp3_ringtone_hud_decoded: '已解码。设好起点、时长和淡化，再点「做成铃声」。',
  tool_make_a_30_second_mp3_ringtone_hud_elapsed_tpl: '已用 {s} 秒',
  tool_make_a_30_second_mp3_ringtone_hud_encode: '正在编码 MP3…',
  tool_make_a_30_second_mp3_ringtone_hud_fail_hint: '请改文件、时间或淡化，再点「做成铃声」。',
  tool_make_a_30_second_mp3_ringtone_hud_fail_title: '做成铃声已停下',
  tool_make_a_30_second_mp3_ringtone_hud_fade: '正在做淡入淡出…',
  tool_make_a_30_second_mp3_ringtone_hud_next: '完成。下一步：点「播放」听铃声，再「导出 MP3」。',
  tool_make_a_30_second_mp3_ringtone_hud_next_mp3: '完成。MP3 下载应已开始。',
  tool_make_a_30_second_mp3_ringtone_hud_pct_tpl: '{pct}%',
  tool_make_a_30_second_mp3_ringtone_hud_step_decode: '解码',
  tool_make_a_30_second_mp3_ringtone_hud_step_encode: '编码',
  tool_make_a_30_second_mp3_ringtone_hud_step_fade: '淡化',
  tool_make_a_30_second_mp3_ringtone_hud_title: '铃声进度',
  tool_make_a_30_second_mp3_ringtone_hud_working: '开始处理…',
  tool_make_a_30_second_mp3_ringtone_make: '做成铃声',
  tool_make_a_30_second_mp3_ringtone_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} 声道',
  tool_make_a_30_second_mp3_ringtone_pause: '暂停',
  tool_make_a_30_second_mp3_ringtone_play: '播放',
  tool_make_a_30_second_mp3_ringtone_preview_hint:
    '点击或拖动波形来设起点和时长。做成铃声后，「播放」会循环这段淡化后的铃声，像来电在响。',
  tool_make_a_30_second_mp3_ringtone_result_tpl:
    '铃声 {dur} 秒（{start}–{end} 秒），淡入 {fadeIn} 秒、淡出 {fadeOut} 秒。可以导出 MP3。',
  tool_make_a_30_second_mp3_ringtone_rules_body:
    '按起点 + 时长复制选区（最长 40 秒）。线性淡入淡出只改增益，导出时长仍是选区长度。点「导出 MP3」后按所选码率做 CBR。',
  tool_make_a_30_second_mp3_ringtone_rules_item_1:
    '电脑上限大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限拒绝，不截断。铃声选区不能超过 40 秒。',
  tool_make_a_30_second_mp3_ringtone_rules_item_2:
    '文件留在设备，不上传服务器。MP3 编码器只在点「导出 MP3」后从本站加载。',
  tool_make_a_30_second_mp3_ringtone_rules_item_3:
    '默认时长 30 秒。淡入 0.5 秒加淡出 1.5 秒必须短于时长。淡化不缩短文件。',
  tool_make_a_30_second_mp3_ringtone_rules_item_4:
    '解码取决于浏览器。有 DRM、部分编码或视频容器会明确报错。',
  tool_make_a_30_second_mp3_ringtone_rules_item_5:
    '本页不写 M4R/M4A、不往 iPhone 装铃声、不做没有 40 秒帽的任意裁剪、不做无缝循环、不扒 YouTube。一份文件、一个窗口、一条 MP3。',
  tool_make_a_30_second_mp3_ringtone_rules_title: '你应预期的规则',
  tool_make_a_30_second_mp3_ringtone_sample: '载入样例',
  tool_make_a_30_second_mp3_ringtone_start: '起点（秒）',
  tool_make_a_30_second_mp3_ringtone_status_done: '完成。',
  tool_make_a_30_second_mp3_ringtone_title: '做成 30 秒 MP3 铃声',
  tool_make_a_30_second_mp3_ringtone_usecase_1:
    '把你有权使用的歌曲副歌裁成 30 秒 MP3，在安卓或三星里设为来电铃声。',
  tool_make_a_30_second_mp3_ringtone_usecase_2:
    '用 15 秒或 20 秒芯片做闹钟、短信提示，保留淡出，再导出 MP3。',
  tool_make_a_30_second_mp3_ringtone_usecase_3:
    '先导出 MP3，若还要做 iPhone 自定义铃声，再把文件交给 GarageBand——本页不写 M4R。',
  tool_make_a_30_second_mp3_ringtone_usecases_title: '适合什么时候用',
  tool_make_a_30_second_mp3_ringtone_why_choose_body:
    '只做铃声长度的 MP3：淡化听得见，40 秒上限写在页上。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_1:
    '解码和淡化留在本标签页；第一次加载编码器是点「导出 MP3」。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_2:
    '默认 30 秒，另有 15 / 20 / 40 秒芯片；超过 40 秒直接拒绝。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_3:
    '淡入 0.5 秒、淡出 1.5 秒就在首屏，默认不会硬切副歌。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_4:
    '页上不假装能写出 M4R，也不会从浏览器装进 iPhone。',
  tool_make_a_30_second_mp3_ringtone_why_choose_title: '为什么用本站的做成 30 秒 MP3 铃声',
  tool_make_a_30_second_mp3_ringtone_zerocross: '把窗口边缘吸到附近过零点',
  tool_make_a_30_second_mp3_ringtone_zerocross_hint: '默认开启，切口更干净。要精确到采样可关掉。',
};
export default zh;
