/**
 * Topic leaf IG：video-editor（浏览器视频任务簇）。
 * 导出 EN/ZH 完整 TopicCopy，以及 rest 八语的 expand 紧凑包（rows 为 [job, need, skip]）。
 * 由 topic-ig-copy-en/zh/rest* 引用；勿在 i18n-topic-ig.mjs 手改扁平键。
 * fr/ja/ru/de 在 companion `topic-ig-copy-video-editor-rest.mjs`，避免单文件超限。
 */
import { EXPAND_FR_JA_RU_DE } from './topic-ig-copy-video-editor-rest.mjs';

/** @param {string} job @param {string} need @param {string} skip @param {string} [card] */
const r = (job, need, skip, card) => ({ job, need, skip, card: card || need });

/**
 * 英文母版：人们先完成的任务句作 H1；表行写清输入与何时跳过；本地处理、不上传、不扒流。
 * @type {import('./topic-ig-copy-en.mjs').TopicCopy | object}
 */
export const videoEditorEn = {
  title: 'Convert, trim, extract audio, or add soft subtitles to a video',
  desc: 'Convert, trim, extract audio, or subtitle a local video in this tab. Files stay on the device and are not uploaded. Not a timeline NLE or stream ripper.',
  intro:
    'Use this cluster when the file is already on your device: inspect tracks, remux or re-encode containers, trim or compress clips, extract or replace audio, add soft or burned subtitles, pull frames or make a GIF. A full timeline NLE is a later hub, not these single jobs.',
  tableTitle: 'Convert, trim, extract audio, or subtitle a video in the browser',
  groups: {
    convert: 'Containers and audio layout',
    extract: 'Audio out of video',
    edit: 'Trim, merge, speed, rotate, compress',
    tracks: 'Mute, replace, or add audio; waveform video',
    subtitles: 'Soft, burned, and subtitle formats',
    frames: 'Stills and GIF',
    inspect: 'See what is inside the file',
  },
  rows: {
    'convert-an-mkv-file-to-an-mp4-file': r(
      'Remux or re-encode one MKV into an MP4 the browser can play',
      'A local MKV the tab can decode; you need MP4 for a player or LMS.',
      'You need a desktop NLE timeline, DVD authoring, or a stream rip.'
    ),
    'convert-a-mov-file-to-an-mp4-file': r(
      'Turn a QuickTime MOV into an MP4 for wider playback',
      'A local MOV (often phone or camera) that should become MP4.',
      'You need ProRes mastering, camera LUT grading, or a YouTube rip.'
    ),
    'convert-a-webm-file-to-an-mp4-file': r(
      'Convert a WebM recording into MP4 for apps that reject WebM',
      'A local WebM (screen capture or browser record) that must be MP4.',
      'You need live streaming setup, VP9 tuning for CDN, or a stream rip.'
    ),
    'convert-an-mp4-file-to-a-webm-file': r(
      'Export MP4 as WebM for web players that prefer WebM',
      'A local MP4 you want as WebM for a site or embed.',
      'You need HLS packaging, broadcast MXF, or a YouTube rip.'
    ),
    'convert-a-video-to-an-mp4-with-aac-audio': r(
      'Rewrap or encode so the video is MP4 with AAC audio',
      'A local video whose audio layout fails on a target player that wants AAC in MP4.',
      'You need multitrack stems, Dolby Atmos mastering, or a stream rip.'
    ),
    'batch-convert-mkv-files-to-mp4-files': r(
      'Convert many MKV files to MP4 and download a ZIP',
      'Several local MKVs that should all become MP4 in one pass.',
      'You need one file only, a timeline edit, or a stream rip.'
    ),
    'batch-convert-mov-files-to-mp4-files': r(
      'Convert many MOV files to MP4 and download a ZIP',
      'Several local MOVs (phone dumps, camera cards) that should become MP4.',
      'You need one file only, color grading, or a stream rip.'
    ),
    'batch-convert-webm-files-to-mp4-files': r(
      'Convert many WebM files to MP4 and download a ZIP',
      'Several local WebMs that a destination rejects.',
      'You need one file only, live ingest, or a stream rip.'
    ),
    'extract-audio-from-a-video-file': r(
      'Pull the audio track from a generic video into a sound file',
      'A local video the browser can decode; you want audio without picture.',
      'You need stem separation, karaoke vocal removal, or a YouTube rip.'
    ),
    'extract-audio-from-an-mp4-file': r(
      'Extract audio from an MP4 into a downloadable sound file',
      'A local MP4 with an audio track you want as WAV or MP3.',
      'You need video mute only, multitrack DAW work, or a stream rip.'
    ),
    'extract-audio-from-a-mov-file': r(
      'Extract audio from a MOV into a sound file',
      'A local QuickTime MOV whose soundtrack you want alone.',
      'You need ProRes picture export, stem split, or a YouTube rip.'
    ),
    'extract-audio-from-an-mkv-file': r(
      'Extract audio from an MKV into a sound file',
      'A local MKV with audio you want without the video stream.',
      'You need soft-sub demux only, chapter ripping, or a stream rip.'
    ),
    'extract-audio-from-a-webm-file': r(
      'Extract audio from a WebM into a sound file',
      'A local WebM recording whose audio you want alone.',
      'You need Opus remux for streaming, stem split, or a YouTube rip.'
    ),
    'batch-extract-audio-from-video-files': r(
      'Extract audio from many mixed videos and download a ZIP',
      'Several local videos of mixed containers; you want sound files in bulk.',
      'You need one file, vocal isolation, or a stream rip.'
    ),
    'batch-extract-audio-from-mp4-files': r(
      'Extract audio from many MP4s and download a ZIP',
      'Several local MP4s whose audio you want as files.',
      'You need one MP4 only, video mute, or a YouTube rip.'
    ),
    'batch-extract-audio-from-mov-files': r(
      'Extract audio from many MOVs and download a ZIP',
      'Several local MOVs to pull sound from in one pass.',
      'You need one MOV only, picture-only export, or a stream rip.'
    ),
    'batch-extract-audio-from-mkv-files': r(
      'Extract audio from many MKVs and download a ZIP',
      'Several local MKVs whose audio tracks you want as files.',
      'You need one MKV only, subtitle demux, or a YouTube rip.'
    ),
    'batch-extract-audio-from-webm-files': r(
      'Extract audio from many WebMs and download a ZIP',
      'Several local WebMs to pull sound from in one pass.',
      'You need one WebM only, live capture setup, or a stream rip.'
    ),
    'trim-a-video-clip-and-export': r(
      'Keep a named start–end range and export a shorter video',
      'A local video and start/end times you can name.',
      'You need multi-clip timeline editing, color grade, or a stream rip.'
    ),
    'batch-trim-video-clips-by-time': r(
      'Trim many videos by the same clock window and download a ZIP',
      'Several local videos that share the same start–end rule.',
      'You need per-clip different in/out, a full NLE, or a YouTube rip.'
    ),
    'merge-video-clips-in-order': r(
      'Concatenate clips in order into one downloadable video',
      'Two or more local clips you want played back-to-back.',
      'You need transitions, picture-in-picture, or a stream rip.'
    ),
    'change-video-speed': r(
      'Speed up or slow down a clip and export the result',
      'A local video and a speed factor (for example 0.5× or 2×).',
      'You need time-remapping keyframes, optical flow, or a YouTube rip.'
    ),
    'rotate-a-video-file': r(
      'Rotate or flip orientation and export a corrected video',
      'A local video shot sideways or upside down.',
      'You need 3D camera tracking, lens warp, or a stream rip.'
    ),
    'compress-a-video-file': r(
      'Reduce file size while keeping a watchable MP4 or similar',
      'A local video that is too large for email, LMS, or chat.',
      'You need broadcast mezzanine, lossless archive, or a YouTube rip.'
    ),
    'batch-compress-video-files': r(
      'Compress many videos and download a ZIP of lighter files',
      'Several local videos that all need a smaller footprint.',
      'You need one file only, lossless masters, or a stream rip.'
    ),
    'remove-the-audio-track-from-a-video': r(
      'Export the picture with no audio track',
      'A local video whose soundtrack should be gone in the download.',
      'You need stem mix, dialogue edit, or a YouTube rip.'
    ),
    'replace-the-audio-in-a-video-file': r(
      'Swap the soundtrack for another local audio file',
      'A local video plus a replacement audio file of suitable length.',
      'You need beat-synced multicam, ADR session, or a stream rip.'
    ),
    'add-an-audio-track-to-a-video': r(
      'Mux a silent or music-less video with a local audio file',
      'A local video missing usable audio, plus the track to add.',
      'You need ducking automation, stem bus, or a YouTube rip.'
    ),
    'make-a-waveform-video-from-audio': r(
      'Render a simple waveform visualization video from audio',
      'A local audio file you want as a shareable waveform video.',
      'You need After Effects motion design, music video NLE, or a stream rip.'
    ),
    'add-soft-subtitles-to-an-mp4': r(
      'Mux soft (toggleable) subtitles into an MP4',
      'A local MP4 plus an SRT/VTT (or similar) you want as a soft track.',
      'You need burned-in captions forever on picture, or a YouTube rip.'
    ),
    'burn-subtitles-into-a-video': r(
      'Hardcode subtitle text into the picture so every player shows it',
      'A local video plus subtitle file; viewers must see text without toggling.',
      'You need soft tracks only, multi-language toggle, or a stream rip.'
    ),
    'convert-subtitle-files-between-srt-vtt-and-ass': r(
      'Convert subtitle files among SRT, VTT, and ASS',
      'A local subtitle file in one of those formats that another tool rejects.',
      'You need speech-to-text from video, or a YouTube caption scrape.'
    ),
    'make-srt-subtitles-from-a-video-file': r(
      'Draft an SRT from a local video (speech or timing workflow on the page)',
      'A local video you own; you need a starting SRT, not a polished script.',
      'You need professional caption QC, live CART, or a stream rip.'
    ),
    'extract-frames-from-a-video-as-images': r(
      'Export still frames from a video as image files',
      'A local video and the frame times or interval you want.',
      'You need RAW cinema stills pipeline, or a YouTube rip.'
    ),
    'batch-extract-frames-from-videos': r(
      'Pull frames from many videos and download a ZIP of images',
      'Several local videos that need thumbnails or stills in bulk.',
      'You need one video only, storyboard NLE, or a stream rip.'
    ),
    'convert-a-video-file-to-a-gif': r(
      'Turn a short clip into an animated GIF',
      'A short local clip; GIFs get heavy—keep duration modest.',
      'You need long-form MP4 sharing, APNG mastering, or a YouTube rip.'
    ),
    'inspect-video-file-tracks': r(
      'List video, audio, and subtitle tracks and basic tech facts',
      'A local video you want to understand before converting or trimming.',
      'You need frame-accurate NLE markers, DRM unlock, or a stream rip.'
    ),
  },
  flow: [
    'Open inspect tracks when you need to see codecs and streams before changing anything.',
    'Open an MKV→MP4 (or sibling convert) tool when the player or LMS rejects the container.',
    'Open trim when you already know the start and end, then export a shorter clip in the tab.',
    'Open extract audio from MP4 when you need the soundtrack alone as a sound file.',
    'Open add soft subtitles when you have an SRT/VTT and want a toggleable track in MP4.',
  ],
  exampleTitle: 'Phone dump, LMS upload, podcast pull, and soft captions',
  exampleBody:
    'A camera MKV that Moodle rejects belongs on MKV→MP4 (or the batch twin). A sideways phone clip belongs on rotate, then trim if you only need the middle minute. A lecture MP4 that should become a podcast belongs on extract audio. Soft captions for a class MP4 belong on add soft subtitles; burned text for a player with no subtitle menu belongs on burn. Frames for a thumbnail belong on extract frames; a short reaction loop belongs on video→GIF. Searching “online video editor” for a full timeline is a later hub.',
  boundary:
    'Files stay on the device and are not uploaded. Caps reject huge files before decode. Not a timeline NLE, DVD author, DRM stripper, or stream ripper.',
  secondary: {},
  faq: [
    {
      q: 'Is this the same as an online video editor?',
      a: 'Not a full timeline. These are single jobs: convert containers, trim or compress, extract or replace audio, soft or burned subtitles, frames or GIF, and inspect tracks. A waveform or timeline hub would be a separate later slug.',
    },
    {
      q: 'I searched mkv to mp4 or extract audio from video. Separate URLs?',
      a: 'Those jobs are the matching tools in this cluster (and their batch twins). We do not add doorway addresses that only rename the same job.',
    },
    {
      q: 'Does the file upload?',
      a: 'Decode and export run in the tab for these jobs. Files stay on the device; we do not post them to our servers.',
    },
    {
      q: 'Can I rip YouTube or strip DRM?',
      a: 'No. This cluster does not rip streams or remove DRM. Use files you have rights to process on your device.',
    },
  ],
  cites: {
    'mdn-videodecoder': 'MDN: VideoDecoder — decode video frames in the browser',
  },
};

/**
 * 简体中文：按中文检索习惯独立重写（非英模锁句）。
 * @type {typeof videoEditorEn}
 */
export const videoEditorZh = {
  title: '转换、裁剪、抽取音频，或给视频加软字幕',
  desc: '在标签页里做容器转换、裁剪压缩、抽音换音、软硬字幕、抽帧或转 GIF。文件留在设备，不上传。不是时间线剪辑器，也不扒流。',
  intro:
    '手里已有本地视频时用本簇：先看轨道，再转容器或重编码，裁剪合并变速旋转压缩，抽音/换音/静音，软字幕或烧录字幕，抽帧或做成 GIF。完整时间线剪辑是后续宿主，不是这些单点任务。',
  tableTitle: '在浏览器里转换、裁剪、抽音或给视频加字幕',
  groups: {
    convert: '容器与音频布局',
    extract: '从视频抽出音频',
    edit: '裁剪、合并、变速、旋转、压缩',
    tracks: '静音、换音、加音轨；波形视频',
    subtitles: '软字幕、烧录与字幕格式',
    frames: '静帧与 GIF',
    inspect: '先看清文件里有什么',
  },
  rows: {
    'convert-an-mkv-file-to-an-mp4-file': r(
      '把单个 MKV 转成浏览器或课件站能播的 MP4',
      '本地 MKV，标签页能解码；目标只要 MP4。',
      '你要桌面时间线、DVD 制作或扒流。'
    ),
    'convert-a-mov-file-to-an-mp4-file': r(
      '把 QuickTime MOV 转成更通用的 MP4',
      '本地手机或相机 MOV，需要变成 MP4。',
      '你要 ProRes 母版、调色 LUT 或 YouTube 扒带。'
    ),
    'convert-a-webm-file-to-an-mp4-file': r(
      '把 WebM 录屏转成拒收 WebM 的应用可用的 MP4',
      '本地 WebM（录屏或浏览器录制），目标必须是 MP4。',
      '你要直播推流配置、CDN 的 VP9 调参或扒流。'
    ),
    'convert-an-mp4-file-to-a-webm-file': r(
      '把 MP4 导出为站点更爱用的 WebM',
      '本地 MP4，要嵌到偏 WebM 的页面。',
      '你要 HLS 打包、广播 MXF 或 YouTube 扒带。'
    ),
    'convert-a-video-to-an-mp4-with-aac-audio': r(
      '整理成带 AAC 音轨的 MP4，好过挑剔的播放器',
      '本地视频音轨布局让目标播放器报错，对方只要 MP4+AAC。',
      '你要多轨分轨、杜比全景声母带或扒流。'
    ),
    'batch-convert-mkv-files-to-mp4-files': r(
      '批量把多个 MKV 转成 MP4 并下载 ZIP',
      '多个本地 MKV，一次都要变成 MP4。',
      '你只要一个文件、时间线剪辑或扒流。'
    ),
    'batch-convert-mov-files-to-mp4-files': r(
      '批量把多个 MOV 转成 MP4 并下载 ZIP',
      '多个本地 MOV（手机导出、卡拷），都要 MP4。',
      '你只要一个文件、调色或扒流。'
    ),
    'batch-convert-webm-files-to-mp4-files': r(
      '批量把多个 WebM 转成 MP4 并下载 ZIP',
      '多个本地 WebM，目标端拒收 WebM。',
      '你只要一个文件、直播采集或扒流。'
    ),
    'extract-audio-from-a-video-file': r(
      '从通用视频里抽出音轨成声音文件',
      '浏览器能解码的本地视频；只要声音不要画面。',
      '你要分轨人声、消人声卡拉 OK 或 YouTube 扒带。'
    ),
    'extract-audio-from-an-mp4-file': r(
      '从 MP4 抽出音频并下载',
      '本地 MP4，音轨要做成 WAV 或 MP3。',
      '你只要消音留画面、多轨宿主或扒流。'
    ),
    'extract-audio-from-a-mov-file': r(
      '从 MOV 抽出音频成声音文件',
      '本地 QuickTime MOV，只要声轨。',
      '你要导出画面、分轨或 YouTube 扒带。'
    ),
    'extract-audio-from-an-mkv-file': r(
      '从 MKV 抽出音频成声音文件',
      '本地 MKV，不要视频流只要音频。',
      '你只要拆软字幕、章节扒取或扒流。'
    ),
    'extract-audio-from-a-webm-file': r(
      '从 WebM 抽出音频成声音文件',
      '本地 WebM 录制，只要声音。',
      '你要为推流重封装 Opus、分轨或 YouTube 扒带。'
    ),
    'batch-extract-audio-from-video-files': r(
      '从多种容器视频批量抽音并下载 ZIP',
      '多个本地视频、容器不一；要批量声音文件。',
      '你只要一个文件、人声分离或扒流。'
    ),
    'batch-extract-audio-from-mp4-files': r(
      '从多个 MP4 批量抽音并下载 ZIP',
      '多个本地 MP4，都要抽出音轨。',
      '你只要一个 MP4、消音或 YouTube 扒带。'
    ),
    'batch-extract-audio-from-mov-files': r(
      '从多个 MOV 批量抽音并下载 ZIP',
      '多个本地 MOV，一次抽出声音。',
      '你只要一个 MOV、只导画面或扒流。'
    ),
    'batch-extract-audio-from-mkv-files': r(
      '从多个 MKV 批量抽音并下载 ZIP',
      '多个本地 MKV，都要音轨文件。',
      '你只要一个 MKV、拆字幕或 YouTube 扒带。'
    ),
    'batch-extract-audio-from-webm-files': r(
      '从多个 WebM 批量抽音并下载 ZIP',
      '多个本地 WebM，一次抽出声音。',
      '你只要一个 WebM、直播采集或扒流。'
    ),
    'trim-a-video-clip-and-export': r(
      '只保留起止区间并导出更短视频',
      '本地视频，以及你说得出的起止时间。',
      '你要多段时间线、调色或扒流。'
    ),
    'batch-trim-video-clips-by-time': r(
      '按同一时钟窗口批量裁剪并下载 ZIP',
      '多个本地视频，共用同一套起止规则。',
      '你要每条不同出入点、完整剪辑器或 YouTube 扒带。'
    ),
    'merge-video-clips-in-order': r(
      '按顺序拼接多段并下载一个视频',
      '两段及以上本地片段，要首尾相接播放。',
      '你要转场、画中画或扒流。'
    ),
    'change-video-speed': r(
      '加快或放慢片段并导出',
      '本地视频和一个速度倍数（如 0.5× 或 2×）。',
      '你要关键帧时间重映射、光流补帧或 YouTube 扒带。'
    ),
    'rotate-a-video-file': r(
      '旋转或翻转方向并导出纠正后的视频',
      '本地视频横拍或倒拍需要扶正。',
      '你要三维跟踪、镜头畸变或扒流。'
    ),
    'compress-a-video-file': r(
      '压小体积，仍保持可看的 MP4 一类格式',
      '本地视频太大，邮件、课件站或聊天发不出。',
      '你要广播中间片、无损归档或 YouTube 扒带。'
    ),
    'batch-compress-video-files': r(
      '批量压缩多个视频并下载更轻的 ZIP',
      '多个本地视频都要更小体积。',
      '你只要一个文件、无损母版或扒流。'
    ),
    'remove-the-audio-track-from-a-video': r(
      '导出只有画面、没有音轨的视频',
      '本地视频，下载结果里不要声音。',
      '你要分轨混音、对白精剪或 YouTube 扒带。'
    ),
    'replace-the-audio-in-a-video-file': r(
      '用另一段本地音频替换原声',
      '本地视频加上长度合适的替换音频。',
      '你要多机位卡点、ADR 配音棚或扒流。'
    ),
    'add-an-audio-track-to-a-video': r(
      '给无声或缺音的视频叠上本地音轨',
      '本地视频缺可用音频，再加要叠上的音轨。',
      '你要闪避自动化、分轨总线或 YouTube 扒带。'
    ),
    'make-a-waveform-video-from-audio': r(
      '把音频渲染成简单波形可视化视频',
      '本地音频，要做成可分享的波形视频。',
      '你要 After Effects 动效、MV 时间线或扒流。'
    ),
    'add-soft-subtitles-to-an-mp4': r(
      '把可开关的软字幕封装进 MP4',
      '本地 MP4 加上 SRT/VTT（或同类），要做成软轨。',
      '你要永远烧在画面上的字幕，或 YouTube 扒带。'
    ),
    'burn-subtitles-into-a-video': r(
      '把字幕烧进画面，任何播放器都看得见',
      '本地视频加字幕文件；观众不能靠开关字幕。',
      '你只要软轨多语切换，或扒流。'
    ),
    'convert-subtitle-files-between-srt-vtt-and-ass': r(
      '在 SRT、VTT、ASS 之间转换字幕文件',
      '本地字幕是其中一种格式，另一工具不认。',
      '你要视频转写出字幕，或刮 YouTube 字幕。'
    ),
    'make-srt-subtitles-from-a-video-file': r(
      '从本地视频起草一份 SRT（页内语音或打轴流程）',
      '你有权处理的本地视频；要起步稿，不是精修台本。',
      '你要专业字幕质检、现场速记或扒流。'
    ),
    'extract-frames-from-a-video-as-images': r(
      '把视频里的静帧导出成图片',
      '本地视频，以及你要的时间点或间隔。',
      '你要电影级 RAW 静帧流水线，或 YouTube 扒带。'
    ),
    'batch-extract-frames-from-videos': r(
      '从多个视频批量抽帧并下载图片 ZIP',
      '多个本地视频，要批量封面或静帧。',
      '你只要一个视频、分镜时间线或扒流。'
    ),
    'convert-a-video-file-to-a-gif': r(
      '把短片段做成动态 GIF',
      '较短的本地片段；GIF 很重，时长宜短。',
      '你要长视频 MP4 分享、APNG 母版或 YouTube 扒带。'
    ),
    'inspect-video-file-tracks': r(
      '列出视频、音频、字幕轨和基本技术信息',
      '本地视频，转换或裁剪前想先看清里面有什么。',
      '你要帧级时间线标记、破解 DRM 或扒流。'
    ),
  },
  flow: [
    '转换前先打开检视轨道，看清编码与流再动手。',
    '播放器或课件站拒收容器时，打开 MKV 转 MP4（或同类转换）。',
    '已经知道起止时，打开裁剪，在标签页导出更短片段。',
    '只要音轨不要画面时，打开从 MP4 抽取音频。',
    '已有 SRT/VTT、要可开关软轨时，打开给 MP4 加软字幕。',
  ],
  exampleTitle: '手机导出、课件上传、播客抽音与软字幕',
  exampleBody:
    '课件站拒收的相机 MKV：用 MKV 转 MP4（或批量版）。横拍手机片：先旋转，只要中间一分钟再裁剪。课堂 MP4 要当播客：用抽取音频。课堂要可开关字幕：用加软字幕；没有字幕菜单的播放器：用烧录。封面静帧：用抽帧；短反应循环：用视频转 GIF。搜「在线视频编辑」要完整时间线时，那是以后的宿主。',
  boundary:
    '文件留在设备，不上传服务器。过大文件在解码前拒绝。不是时间线剪辑器、DVD 制作器、DRM 破解器或扒流器。',
  secondary: {},
  faq: [
    {
      q: '这就是在线视频编辑器吗？',
      a: '不是完整时间线。这里是单点任务：容器转换、裁剪压缩、抽音换音、软硬字幕、抽帧或 GIF、检视轨道。波形或时间线宿主以后另开。',
    },
    {
      q: '搜 mkv 转 mp4 或视频提取音频，会另有网址吗？',
      a: '对应作业就在本簇（含批量版）。同一作业不会另开只换标题的空壳地址。',
    },
    {
      q: '文件会上传吗？',
      a: '这几项任务的解码和导出在标签页完成。文件留在设备，不会发到我们的服务器。',
    },
    {
      q: '能扒 YouTube 或去掉 DRM 吗？',
      a: '不能。本簇不扒流、不破解 DRM。请只处理你有权在本机加工的文件。',
    },
  ],
  cites: {
    'mdn-videodecoder': 'MDN：VideoDecoder — 在浏览器里解码视频帧',
  },
};

/** @typedef {[string, string, string]} RowTrip */

/**
 * @typedef {{
 *   title: string, desc: string, intro: string, tableTitle: string,
 *   groups: Record<string, string>,
 *   rows: Record<string, RowTrip>,
 *   flow: string[],
 *   exampleTitle: string, exampleBody: string,
 *   boundary: string,
 *   secondary: Record<string, string>,
 *   faq: Array<{q: string, a: string}>,
 *   cites: Record<string, string>,
 * }} ExpandTopic
 */

/** @type {Record<string, ExpandTopic>} */
const EXPAND_BY_LANG = {
  es: {
    title: 'Convierte, recorta, saca el audio o añade subtítulos blandos a un vídeo',
    desc: 'En la pestaña: convierte, recorta, extrae audio o subtitula un vídeo local. El archivo se queda en el dispositivo y no se sube. No es un NLE de línea de tiempo ni un ripper.',
    intro:
      'Si el archivo ya está en el dispositivo: inspecciona pistas, remuxea o recodifica contenedores, recorta o comprime, extrae o sustituye audio, añade subtítulos blandos o quemados, saca fotogramas o haz un GIF. El NLE completo llega después, no son estos oficios sueltos.',
    tableTitle: 'Convierte, recorta, saca el audio o subtitula un vídeo en el navegador',
    groups: {
      convert: 'Contenedores y audio',
      extract: 'Audio fuera del vídeo',
      edit: 'Recortar, unir, velocidad, girar, comprimir',
      tracks: 'Silenciar, sustituir o añadir audio; vídeo de onda',
      subtitles: 'Blandos, quemados y formatos',
      frames: 'Fotogramas y GIF',
      inspect: 'Ver qué hay dentro del archivo',
    },
    rows: {
      'convert-an-mkv-file-to-an-mp4-file': ['Pasar un MKV a MP4 que el navegador o el campus puedan reproducir', 'Un MKV local que la pestaña sepa decodificar; necesitas MP4.', 'Necesitas un NLE de escritorio, authoring de DVD o un rip de stream.'],
      'convert-a-mov-file-to-an-mp4-file': ['Convertir un MOV de QuickTime en MP4 más compatible', 'Un MOV local (móvil o cámara) que debe ser MP4.', 'Necesitas master ProRes, LUTs o un rip de YouTube.'],
      'convert-a-webm-file-to-an-mp4-file': ['Convertir un WebM en MP4 porque la app rechaza WebM', 'Un WebM local (captura o grabación) que debe ser MP4.', 'Necesitas configuración de directo, afinado VP9 o un rip.'],
      'convert-an-mp4-file-to-a-webm-file': ['Exportar MP4 como WebM para reproductores web', 'Un MP4 local que quieres como WebM para una web o embed.', 'Necesitas empaquetado HLS, MXF de broadcast o un rip de YouTube.'],
      'convert-a-video-to-an-mp4-with-aac-audio': ['Dejar el vídeo en MP4 con audio AAC', 'Un vídeo local cuyo audio falla en un reproductor que pide AAC en MP4.', 'Necesitas stems multipista, Atmos o un rip.'],
      'batch-convert-mkv-files-to-mp4-files': ['Convertir muchos MKV a MP4 y bajar un ZIP', 'Varios MKV locales que deben ser MP4 de una vez.', 'Solo quieres un archivo, un montaje o un rip.'],
      'batch-convert-mov-files-to-mp4-files': ['Convertir muchos MOV a MP4 y bajar un ZIP', 'Varios MOV locales (móvil, tarjeta) que deben ser MP4.', 'Solo quieres un archivo, etalonaje o un rip.'],
      'batch-convert-webm-files-to-mp4-files': ['Convertir muchos WebM a MP4 y bajar un ZIP', 'Varios WebM locales que el destino rechaza.', 'Solo quieres un archivo, ingest en vivo o un rip.'],
      'extract-audio-from-a-video-file': ['Sacar la pista de audio de un vídeo genérico', 'Un vídeo local que el navegador decodifica; quieres audio sin imagen.', 'Necesitas separar stems, karaoke o un rip de YouTube.'],
      'extract-audio-from-an-mp4-file': ['Extraer el audio de un MP4 a un archivo de sonido', 'Un MP4 local con audio que quieres como WAV o MP3.', 'Solo quieres silenciar el vídeo, un DAW o un rip.'],
      'extract-audio-from-a-mov-file': ['Extraer el audio de un MOV', 'Un MOV local cuya banda sonora quieres sola.', 'Necesitas exportar imagen ProRes, stems o un rip de YouTube.'],
      'extract-audio-from-an-mkv-file': ['Extraer el audio de un MKV', 'Un MKV local con audio que quieres sin el vídeo.', 'Solo quieres demux de subtítulos, capítulos o un rip.'],
      'extract-audio-from-a-webm-file': ['Extraer el audio de un WebM', 'Un WebM local cuya pista quieres sola.', 'Necesitas remux Opus para streaming, stems o un rip de YouTube.'],
      'batch-extract-audio-from-video-files': ['Extraer audio de muchos vídeos mixtos y bajar un ZIP', 'Varios vídeos locales de contenedores mixtos; quieres sonidos en lote.', 'Solo quieres un archivo, aislar voces o un rip.'],
      'batch-extract-audio-from-mp4-files': ['Extraer audio de muchos MP4 y bajar un ZIP', 'Varios MP4 locales cuyos audios quieres como archivos.', 'Solo quieres un MP4, silenciar o un rip de YouTube.'],
      'batch-extract-audio-from-mov-files': ['Extraer audio de muchos MOV y bajar un ZIP', 'Varios MOV locales para sacar sonido de una vez.', 'Solo quieres un MOV, solo imagen o un rip.'],
      'batch-extract-audio-from-mkv-files': ['Extraer audio de muchos MKV y bajar un ZIP', 'Varios MKV locales cuyas pistas de audio quieres como archivos.', 'Solo quieres un MKV, demux de subtítulos o un rip de YouTube.'],
      'batch-extract-audio-from-webm-files': ['Extraer audio de muchos WebM y bajar un ZIP', 'Varios WebM locales para sacar sonido de una vez.', 'Solo quieres un WebM, captura en vivo o un rip.'],
      'trim-a-video-clip-and-export': ['Conservar un tramo inicio–fin y exportar un vídeo más corto', 'Un vídeo local y tiempos que puedas nombrar.', 'Necesitas montaje multipista, etalonaje o un rip.'],
      'batch-trim-video-clips-by-time': ['Recortar muchos vídeos con la misma ventana de tiempo y bajar un ZIP', 'Varios vídeos locales con la misma regla inicio–fin.', 'Necesitas entradas distintas por clip, un NLE o un rip de YouTube.'],
      'merge-video-clips-in-order': ['Concatenar clips en orden en un solo vídeo', 'Dos o más clips locales que deben ir uno detrás de otro.', 'Necesitas transiciones, PIP o un rip.'],
      'change-video-speed': ['Acelerar o ralentizar un clip y exportar', 'Un vídeo local y un factor de velocidad (p. ej. 0,5× o 2×).', 'Necesitas keyframes de time-remap, optical flow o un rip de YouTube.'],
      'rotate-a-video-file': ['Girar o voltear la orientación y exportar', 'Un vídeo local grabado de lado o al revés.', 'Necesitas tracking 3D, distorsión de lente o un rip.'],
      'compress-a-video-file': ['Reducir el tamaño manteniendo un MP4 usable', 'Un vídeo local demasiado grande para correo, campus o chat.', 'Necesitas mezzanine de broadcast, archivo sin pérdida o un rip de YouTube.'],
      'batch-compress-video-files': ['Comprimir muchos vídeos y bajar un ZIP más ligero', 'Varios vídeos locales que necesitan ocupar menos.', 'Solo quieres un archivo, masters sin pérdida o un rip.'],
      'remove-the-audio-track-from-a-video': ['Exportar la imagen sin pista de audio', 'Un vídeo local cuya banda sonora no debe salir en la descarga.', 'Necesitas mezcla de stems, edición de diálogo o un rip de YouTube.'],
      'replace-the-audio-in-a-video-file': ['Sustituir la banda sonora por otro audio local', 'Un vídeo local más un audio de recambio de longitud adecuada.', 'Necesitas multicámara al beat, ADR o un rip.'],
      'add-an-audio-track-to-a-video': ['Añadir un audio local a un vídeo mudo o sin música', 'Un vídeo local sin audio usable más la pista a añadir.', 'Necesitas ducking, buses de stems o un rip de YouTube.'],
      'make-a-waveform-video-from-audio': ['Renderizar un vídeo sencillo de forma de onda desde audio', 'Un audio local que quieres como vídeo de onda para compartir.', 'Necesitas motion en After Effects, NLE de videoclip o un rip.'],
      'add-soft-subtitles-to-an-mp4': ['Meter subtítulos blandos (conmutables) en un MP4', 'Un MP4 local más un SRT/VTT que quieres como pista blanda.', 'Necesitas texto quemado para siempre, o un rip de YouTube.'],
      'burn-subtitles-into-a-video': ['Quemar el texto en la imagen para que todo reproductor lo muestre', 'Un vídeo local más el archivo de subtítulos; el texto debe verse sin menú.', 'Solo quieres pistas blandas multiidioma, o un rip.'],
      'convert-subtitle-files-between-srt-vtt-and-ass': ['Convertir subtítulos entre SRT, VTT y ASS', 'Un archivo de subtítulos local en uno de esos formatos que otra app rechaza.', 'Necesitas transcripción desde vídeo, o raspar subtítulos de YouTube.'],
      'make-srt-subtitles-from-a-video-file': ['Borrar un SRT de partida desde un vídeo local', 'Un vídeo local tuyo; necesitas un SRT inicial, no un guion cerrado.', 'Necesitas QC profesional de subtítulos, CART en vivo o un rip.'],
      'extract-frames-from-a-video-as-images': ['Exportar fotogramas fijos como imágenes', 'Un vídeo local y los tiempos o el intervalo que quieres.', 'Necesitas pipeline de stills RAW, o un rip de YouTube.'],
      'batch-extract-frames-from-videos': ['Sacar fotogramas de muchos vídeos y bajar un ZIP de imágenes', 'Varios vídeos locales que necesitan miniaturas o stills en lote.', 'Solo quieres un vídeo, storyboard NLE o un rip.'],
      'convert-a-video-file-to-a-gif': ['Convertir un clip corto en un GIF animado', 'Un clip local corto; los GIF pesan—mantén poca duración.', 'Necesitas compartir MP4 largo, master APNG o un rip de YouTube.'],
      'inspect-video-file-tracks': ['Listar pistas de vídeo, audio y subtítulos y datos técnicos básicos', 'Un vídeo local que quieres entender antes de convertir o recortar.', 'Necesitas marcadores de NLE a fotograma, quitar DRM o un rip.'],
    },
    flow: [
      'Abre inspeccionar pistas cuando necesites ver códecs y streams antes de cambiar nada.',
      'Abre MKV→MP4 (u otro convert) cuando el reproductor o el campus rechace el contenedor.',
      'Abre recortar cuando ya sepas inicio y fin, y exporta un clip más corto en la pestaña.',
      'Abre extraer audio de MP4 cuando quieras solo la banda sonora como archivo de sonido.',
      'Abre añadir subtítulos blandos cuando tengas SRT/VTT y quieras una pista conmutable en MP4.',
    ],
    exampleTitle: 'Volcado del móvil, subida al campus, podcast y subtítulos blandos',
    exampleBody:
      'Un MKV de cámara que Moodle rechaza: MKV→MP4 (o el lote). Un clip del móvil de lado: gira, luego recorta si solo quieres el minuto del medio. Una clase en MP4 que debe ser podcast: extrae audio. Subtítulos conmutables: subtítulos blandos; texto fijo sin menú: quemar. Miniatura: fotogramas; reacción corta: vídeo→GIF. Quien busca un editor de línea de tiempo espera un hub posterior.',
    boundary:
      'Los archivos se quedan en el dispositivo y no se suben. Los topes rechazan ficheros enormes antes de decodificar. No es un NLE de línea de tiempo, authoring de DVD, quita-DRM ni ripper.',
    secondary: {},
    faq: [
      { q: '¿Es un editor de vídeo online?', a: 'No es una línea de tiempo completa. Oficios sueltos: convertir contenedores, recortar o comprimir, extraer o sustituir audio, subtítulos blandos o quemados, fotogramas o GIF, e inspeccionar pistas. Un hub de timeline sería otro slug más adelante.' },
      { q: 'Busqué mkv a mp4 o extraer audio de vídeo. ¿Otra URL?', a: 'Esos oficios son las herramientas de este grupo (y sus lotes). No añadimos direcciones doorway que solo renombran el mismo trabajo.' },
      { q: '¿Se sube el archivo?', a: 'La decodificación y la exportación corren en la pestaña. El archivo se queda en el dispositivo; no lo enviamos a nuestros servidores en estos oficios.' },
      { q: '¿Puedo ripar YouTube o quitar DRM?', a: 'No. Este grupo no ripa streams ni quita DRM. Usa archivos que tengas derecho a procesar en tu dispositivo.' },
    ],
    cites: {
      'mdn-videodecoder': 'MDN: VideoDecoder — decodificar fotogramas de vídeo en el navegador',
    },
  },
  ar: {
    title: 'حوّل أو قصّ أو استخرج الصوت أو أضف ترجمة ناعمة لفيديو',
    desc: 'في التبويب: حوّل الحاويات، قصّ أو اضغط، استخرج الصوت، أضف ترجمة ناعمة أو محروقة، واسحب إطارات. الملفات تبقى على الجهاز ولا تُرفع. ليس محرر خط زمني ولا ساحب بث.',
    intro:
      'الملف على جهازك: افحص المسارات، أعد تغليف الحاويات أو الترميز، قصّ أو اضغط، استخرج أو استبدل الصوت، أضف ترجمة ناعمة أو محروقة، اسحب إطارات أو اصنع GIF. محرر الخط الزمني الكامل لاحق، ليست هذه المهام المنفردة.',
    tableTitle: 'في المتصفح حوّل أو قصّ أو استخرج الصوت أو أضف ترجمة لفيديو',
    groups: {
      convert: 'الحاويات وتخطيط الصوت',
      extract: 'الصوت خارج الفيديو',
      edit: 'قص ودمج وسرعة وتدوير وضغط',
      tracks: 'كتم أو استبدال أو إضافة صوت؛ فيديو موجة',
      subtitles: 'ناعمة ومحروقة وصيغ الترجمة',
      frames: 'لقطات ثابتة وGIF',
      inspect: 'اعرف ما داخل الملف',
    },
    rows: {
      'convert-an-mkv-file-to-an-mp4-file': ['تحويل MKV واحد إلى MP4 يشغّله المتصفح أو المنصة', 'MKV محلي تفكّه الصفحة؛ تحتاج MP4.', 'تحتاج محرر سطح مكتب أو DVD أو سحب بث.'],
      'convert-a-mov-file-to-an-mp4-file': ['تحويل MOV من QuickTime إلى MP4 أوسع توافقًا', 'MOV محلي (هاتف أو كاميرا) يجب أن يصبح MP4.', 'تحتاج ProRes أو تدرّج ألوان أو سحب يوتيوب.'],
      'convert-a-webm-file-to-an-mp4-file': ['تحويل WebM إلى MP4 لأن التطبيق يرفض WebM', 'WebM محلي (تسجيل شاشة) يجب أن يكون MP4.', 'تحتاج إعداد بث مباشر أو ضبط VP9 أو سحب بث.'],
      'convert-an-mp4-file-to-a-webm-file': ['تصدير MP4 كـ WebM لمشغّلات الويب', 'MP4 محلي تريده WebM لموقع أو تضمين.', 'تحتاج حزم HLS أو MXF أو سحب يوتيوب.'],
      'convert-a-video-to-an-mp4-with-aac-audio': ['جعل الفيديو MP4 بصوت AAC', 'فيديو محلي يفشل صوته على مشغّل يطلب AAC في MP4.', 'تحتاج سيقان متعددة أو Atmos أو سحب بث.'],
      'batch-convert-mkv-files-to-mp4-files': ['تحويل عدة MKV إلى MP4 وتنزيل ZIP', 'عدة ملفات MKV محلية يجب أن تصبح MP4 دفعة واحدة.', 'تحتاج ملفًا واحدًا أو مونتاجًا أو سحب بث.'],
      'batch-convert-mov-files-to-mp4-files': ['تحويل عدة MOV إلى MP4 وتنزيل ZIP', 'عدة MOV محلية يجب أن تصبح MP4.', 'تحتاج ملفًا واحدًا أو تلوينًا أو سحب بث.'],
      'batch-convert-webm-files-to-mp4-files': ['تحويل عدة WebM إلى MP4 وتنزيل ZIP', 'عدة WebM محلية يرفضها الوجهة.', 'تحتاج ملفًا واحدًا أو التقاطًا حيًا أو سحب بث.'],
      'extract-audio-from-a-video-file': ['سحب مسار الصوت من فيديو عام', 'فيديو محلي يفكّه المتصفح؛ تريد صوتًا بلا صورة.', 'تحتاج فصل سيقان أو كاريوكي أو سحب يوتيوب.'],
      'extract-audio-from-an-mp4-file': ['استخراج الصوت من MP4 إلى ملف صوت', 'MP4 محلي فيه صوت تريده WAV أو MP3.', 'تحتاج كتم الفيديو فقط أو استوديو أو سحب بث.'],
      'extract-audio-from-a-mov-file': ['استخراج الصوت من MOV', 'MOV محلي تريد صوته وحده.', 'تحتاج تصدير صورة أو سيقان أو سحب يوتيوب.'],
      'extract-audio-from-an-mkv-file': ['استخراج الصوت من MKV', 'MKV محلي تريد صوته دون الفيديو.', 'تحتاج فك ترجمة فقط أو فصول أو سحب بث.'],
      'extract-audio-from-a-webm-file': ['استخراج الصوت من WebM', 'WebM محلي تريد صوته وحده.', 'تحتاج إعادة تغليف Opus أو سيقان أو سحب يوتيوب.'],
      'batch-extract-audio-from-video-files': ['استخراج الصوت من فيديوهات مختلطة وتنزيل ZIP', 'عدة فيديوهات محلية بحاويات مختلفة؛ تريد أصواتًا بالجملة.', 'تحتاج ملفًا واحدًا أو عزل صوت أو سحب بث.'],
      'batch-extract-audio-from-mp4-files': ['استخراج الصوت من عدة MP4 وتنزيل ZIP', 'عدة MP4 محلية تريد أصواتها كملفات.', 'تحتاج MP4 واحدًا أو كتمًا أو سحب يوتيوب.'],
      'batch-extract-audio-from-mov-files': ['استخراج الصوت من عدة MOV وتنزيل ZIP', 'عدة MOV محلية لسحب الصوت دفعة واحدة.', 'تحتاج MOV واحدًا أو صورة فقط أو سحب بث.'],
      'batch-extract-audio-from-mkv-files': ['استخراج الصوت من عدة MKV وتنزيل ZIP', 'عدة MKV محلية تريد مسارات صوتها كملفات.', 'تحتاج MKV واحدًا أو فك ترجمة أو سحب يوتيوب.'],
      'batch-extract-audio-from-webm-files': ['استخراج الصوت من عدة WebM وتنزيل ZIP', 'عدة WebM محلية لسحب الصوت دفعة واحدة.', 'تحتاج WebM واحدًا أو التقاطًا حيًا أو سحب بث.'],
      'trim-a-video-clip-and-export': ['الإبقاء على مدى بداية–نهاية وتصدير فيديو أقصر', 'فيديو محلي وأزمنة تستطيع تسميتها.', 'تحتاج مونتاج متعدد أو تلوينًا أو سحب بث.'],
      'batch-trim-video-clips-by-time': ['قص عدة فيديوهات بنفس نافذة الوقت وتنزيل ZIP', 'عدة فيديوهات محلية بنفس قاعدة البداية–النهاية.', 'تحتاج نقاط دخول مختلفة لكل مقطع أو محررًا كاملًا أو سحب يوتيوب.'],
      'merge-video-clips-in-order': ['دمج المقاطع بالترتيب في فيديو واحد', 'مقطعان محليان أو أكثر يجب أن يتتابعا.', 'تحتاج انتقالات أو صورة داخل صورة أو سحب بث.'],
      'change-video-speed': ['تسريع أو إبطاء مقطع وتصديره', 'فيديو محلي وعامل سرعة (مثل 0.5× أو 2×).', 'تحتاج إطارات زمنية أو تدفق بصري أو سحب يوتيوب.'],
      'rotate-a-video-file': ['تدوير أو قلب الاتجاه وتصدير فيديو مصحّح', 'فيديو محلي صُوّر جانبًا أو مقلوبًا.', 'تحتاج تتبّعًا ثلاثيًا أو تشويه عدسة أو سحب بث.'],
      'compress-a-video-file': ['تصغير الحجم مع الإبقاء على MP4 قابل للمشاهدة', 'فيديو محلي كبير جدًا للبريد أو المنصة أو الدردشة.', 'تحتاج وسيط بث أو أرشيف بلا فقدان أو سحب يوتيوب.'],
      'batch-compress-video-files': ['ضغط عدة فيديوهات وتنزيل ZIP أخف', 'عدة فيديوهات محلية تحتاج حجمًا أصغر.', 'تحتاج ملفًا واحدًا أو أصولًا بلا فقدان أو سحب بث.'],
      'remove-the-audio-track-from-a-video': ['تصدير الصورة بلا مسار صوت', 'فيديو محلي يجب ألا يظهر صوته في التنزيل.', 'تحتاج مزج سيقان أو حوارًا أو سحب يوتيوب.'],
      'replace-the-audio-in-a-video-file': ['استبدال الصوت بملف صوت محلي آخر', 'فيديو محلي مع صوت بديل بطول مناسب.', 'تحتاج كاميرات متعددة على الإيقاع أو ADR أو سحب بث.'],
      'add-an-audio-track-to-a-video': ['إضافة مسار صوت محلي إلى فيديو صامت أو بلا موسيقى', 'فيديو محلي بلا صوت صالح مع المسار المراد إضافته.', 'تحتاج خفضًا آليًا أو حافلات سيقان أو سحب يوتيوب.'],
      'make-a-waveform-video-from-audio': ['صنع فيديو موجة بسيط من صوت', 'ملف صوت محلي تريده فيديو موجة للمشاركة.', 'تحتاج تصميم حركة أو محرر كليب أو سحب بث.'],
      'add-soft-subtitles-to-an-mp4': ['دمج ترجمة ناعمة (قابلة للتشغيل/الإيقاف) في MP4', 'MP4 محلي مع SRT/VTT تريدها مسارًا ناعمًا.', 'تحتاج نصًا محروقًا دائمًا أو سحب يوتيوب.'],
      'burn-subtitles-into-a-video': ['حرق نص الترجمة في الصورة ليظهر على كل مشغّل', 'فيديو محلي مع ملف ترجمة؛ يجب أن يُرى النص بلا قائمة.', 'تحتاج مسارات ناعمة متعددة اللغات فقط أو سحب بث.'],
      'convert-subtitle-files-between-srt-vtt-and-ass': ['تحويل ملفات الترجمة بين SRT وVTT وASS', 'ملف ترجمة محلي بصيغة يرفضها أداة أخرى.', 'تحتاج تفريغ كلام من فيديو أو كشط ترجمات يوتيوب.'],
      'make-srt-subtitles-from-a-video-file': ['صياغة SRT أولي من فيديو محلي', 'فيديو محلي تملك حقه؛ تريد مسودة SRT لا نصًا نهائيًا.', 'تحتاج تدقيق ترجمة احترافيًا أو CART حيًا أو سحب بث.'],
      'extract-frames-from-a-video-as-images': ['تصدير إطارات ثابتة كصور', 'فيديو محلي وأوقات الإطارات أو الفاصل.', 'تحتاج خط إنتاج لقطات RAW أو سحب يوتيوب.'],
      'batch-extract-frames-from-videos': ['سحب إطارات من عدة فيديوهات وتنزيل ZIP صور', 'عدة فيديوهات محلية تحتاج مصغّرات أو لقطات بالجملة.', 'تحتاج فيديو واحدًا أو لوحة قصص أو سحب بث.'],
      'convert-a-video-file-to-a-gif': ['تحويل مقطع قصير إلى GIF متحرّك', 'مقطع محلي قصير؛ الـGIF ثقيل—أبقِ المدة قصيرة.', 'تحتاج مشاركة MP4 طويل أو APNG أو سحب يوتيوب.'],
      'inspect-video-file-tracks': ['عرض مسارات الفيديو والصوت والترجمة وحقائق تقنية أساسية', 'فيديو محلي تريد فهمه قبل التحويل أو القص.', 'تحتاج علامات محرر بإطار أو فك DRM أو سحب بث.'],
    },
    flow: [
      'افتح فحص المسارات عندما تحتاج رؤية الترميزات والتيارات قبل أي تغيير.',
      'افتح MKV→MP4 (أو تحويلًا شقيقًا) عندما يرفض المشغّل أو المنصة الحاوية.',
      'افتح القص عندما تعرف البداية والنهاية، ثم صدّر مقطعًا أقصر في التبويب.',
      'افتح استخراج الصوت من MP4 عندما تريد الشريط الصوتي وحده كملف صوت.',
      'افتح إضافة ترجمة ناعمة عندما لديك SRT/VTT وتريد مسارًا قابلاً للتشغيل في MP4.',
    ],
    exampleTitle: 'تفريغ هاتف ورفع للمنصة وبودكاست وترجمة ناعمة',
    exampleBody:
      'MKV من كاميرا ترفضه Moodle: MKV→MP4 (أو الدفعة). مقطع هاتف مائل: دوّر ثم قص إن أردت الدقيقة الوسطى فقط. محاضرة MP4 لبودكاست: استخرج الصوت. ترجمة قابلة للتشغيل: ترجمة ناعمة؛ نص ثابت بلا قائمة: حرق. مصغّر: إطارات؛ رد فعل قصير: فيديو→GIF. من يبحث عن محرر خط زمني ينتظر منصة لاحقة.',
    boundary:
      'الملفات تبقى على الجهاز ولا تُرفع. الحدود ترفض الملفات الضخمة قبل الفك. ليس محرر خط زمني ولا مؤلّف DVD ولا كاسر DRM ولا ساحب بث.',
    secondary: {},
    faq: [
      { q: 'هل هذا محرر فيديو عبر الإنترنت؟', a: 'ليس خطًا زمنيًا كاملًا. مهام منفردة: تحويل الحاويات، قص أو ضغط، استخراج أو استبدال صوت، ترجمة ناعمة أو محروقة، إطارات أو GIF، وفحص المسارات. منصة الخط الزمني عنوان لاحق.' },
      { q: 'بحثت عن mkv إلى mp4 أو استخراج صوت من فيديو. هل هناك عنوان آخر؟', a: 'تلك المهام هي أدوات هذه المجموعة (ودفعاتها). لا نضيف عناوين وهمية تعيد تسمية العمل نفسه.' },
      { q: 'هل يُرفع الملف؟', a: 'الفك والتصدير يجريان في التبويب. الملفات تبقى على الجهاز؛ لا نرسلها إلى خوادمنا لهذه المهام.' },
      { q: 'هل أسحب يوتيوب أو أزيل DRM؟', a: 'لا. هذه المجموعة لا تسحب بثًا ولا تزيل DRM. استخدم ملفات تملك حق معالجتها على جهازك.' },
    ],
    cites: {
      'mdn-videodecoder': 'MDN: VideoDecoder — فك إطارات الفيديو في المتصفح',
    },
  },
  pt: {
    title: 'Converta, corte, extraia o áudio ou adicione legendas suaves a um vídeo',
    desc: 'Na aba: converta, corte, extraia áudio ou legende um vídeo local. O arquivo fica no dispositivo e não é enviado. Não é um NLE de timeline nem ripper de stream.',
    intro:
      'Se o arquivo já está no dispositivo: inspecione faixas, remuxe ou recodifique containers, corte ou comprima, extraia ou troque áudio, adicione legendas suaves ou queimadas, tire frames ou faça um GIF. O NLE completo vem depois, não são estes ofícios avulsos.',
    tableTitle: 'Converta, corte, extraia áudio ou legende um vídeo no navegador',
    groups: {
      convert: 'Containers e layout de áudio',
      extract: 'Áudio fora do vídeo',
      edit: 'Cortar, unir, velocidade, girar, comprimir',
      tracks: 'Mudo, trocar ou adicionar áudio; vídeo de forma de onda',
      subtitles: 'Suaves, queimadas e formatos',
      frames: 'Frames e GIF',
      inspect: 'Ver o que há no arquivo',
    },
    rows: {
      'convert-an-mkv-file-to-an-mp4-file': ['Remuxar ou recodificar um MKV em MP4 reproduzível', 'Um MKV local que a aba decodifica; você precisa de MP4.', 'Você quer NLE de desktop, authoring de DVD ou rip de stream.'],
      'convert-a-mov-file-to-an-mp4-file': ['Transformar um MOV QuickTime em MP4 mais compatível', 'Um MOV local (celular ou câmera) que deve virar MP4.', 'Você quer master ProRes, LUT ou rip de YouTube.'],
      'convert-a-webm-file-to-an-mp4-file': ['Converter um WebM em MP4 porque o app rejeita WebM', 'Um WebM local (captura) que precisa ser MP4.', 'Você quer setup de live, ajuste VP9 ou rip.'],
      'convert-an-mp4-file-to-a-webm-file': ['Exportar MP4 como WebM para players web', 'Um MP4 local que você quer como WebM para site ou embed.', 'Você quer empacote HLS, MXF ou rip de YouTube.'],
      'convert-a-video-to-an-mp4-with-aac-audio': ['Deixar o vídeo em MP4 com áudio AAC', 'Um vídeo local cujo áudio falha em player que pede AAC no MP4.', 'Você quer stems, Atmos ou rip.'],
      'batch-convert-mkv-files-to-mp4-files': ['Converter vários MKV em MP4 e baixar um ZIP', 'Vários MKV locais que devem virar MP4 de uma vez.', 'Você quer um arquivo só, timeline ou rip.'],
      'batch-convert-mov-files-to-mp4-files': ['Converter vários MOV em MP4 e baixar um ZIP', 'Vários MOV locais que devem virar MP4.', 'Você quer um arquivo só, correção de cor ou rip.'],
      'batch-convert-webm-files-to-mp4-files': ['Converter vários WebM em MP4 e baixar um ZIP', 'Vários WebM locais que o destino rejeita.', 'Você quer um arquivo só, ingest ao vivo ou rip.'],
      'extract-audio-from-a-video-file': ['Puxar a faixa de áudio de um vídeo genérico', 'Um vídeo local que o navegador decodifica; você quer áudio sem imagem.', 'Você quer stems, karaokê ou rip de YouTube.'],
      'extract-audio-from-an-mp4-file': ['Extrair áudio de um MP4 para um arquivo de som', 'Um MP4 local com áudio que você quer como WAV ou MP3.', 'Você quer só silenciar o vídeo, DAW ou rip.'],
      'extract-audio-from-a-mov-file': ['Extrair áudio de um MOV', 'Um MOV local cuja trilha você quer sozinha.', 'Você quer exportar imagem, stems ou rip de YouTube.'],
      'extract-audio-from-an-mkv-file': ['Extrair áudio de um MKV', 'Um MKV local com áudio sem o vídeo.', 'Você quer só demux de legendas, capítulos ou rip.'],
      'extract-audio-from-a-webm-file': ['Extrair áudio de um WebM', 'Um WebM local cuja faixa você quer sozinha.', 'Você quer remux Opus, stems ou rip de YouTube.'],
      'batch-extract-audio-from-video-files': ['Extrair áudio de vários vídeos mistos e baixar um ZIP', 'Vários vídeos locais de containers mistos; sons em lote.', 'Você quer um arquivo, isolamento vocal ou rip.'],
      'batch-extract-audio-from-mp4-files': ['Extrair áudio de vários MP4 e baixar um ZIP', 'Vários MP4 locais cujos áudios você quer como arquivos.', 'Você quer um MP4 só, mudo ou rip de YouTube.'],
      'batch-extract-audio-from-mov-files': ['Extrair áudio de vários MOV e baixar um ZIP', 'Vários MOV locais para puxar som de uma vez.', 'Você quer um MOV só, só imagem ou rip.'],
      'batch-extract-audio-from-mkv-files': ['Extrair áudio de vários MKV e baixar um ZIP', 'Vários MKV locais cujas faixas de áudio você quer como arquivos.', 'Você quer um MKV só, demux de legendas ou rip de YouTube.'],
      'batch-extract-audio-from-webm-files': ['Extrair áudio de vários WebM e baixar um ZIP', 'Vários WebM locais para puxar som de uma vez.', 'Você quer um WebM só, captura ao vivo ou rip.'],
      'trim-a-video-clip-and-export': ['Manter um intervalo início–fim e exportar um vídeo mais curto', 'Um vídeo local e tempos que você consiga nomear.', 'Você quer edição multipista, correção de cor ou rip.'],
      'batch-trim-video-clips-by-time': ['Cortar vários vídeos com a mesma janela de tempo e baixar um ZIP', 'Vários vídeos locais com a mesma regra início–fim.', 'Você quer entradas diferentes por clipe, NLE completo ou rip de YouTube.'],
      'merge-video-clips-in-order': ['Concatenar clipes em ordem em um único vídeo', 'Dois ou mais clipes locais para tocar em sequência.', 'Você quer transições, PIP ou rip.'],
      'change-video-speed': ['Acelerar ou desacelerar um clipe e exportar', 'Um vídeo local e um fator de velocidade (ex.: 0,5× ou 2×).', 'Você quer keyframes de time-remap, optical flow ou rip de YouTube.'],
      'rotate-a-video-file': ['Girar ou inverter a orientação e exportar', 'Um vídeo local gravado de lado ou de cabeça para baixo.', 'Você quer tracking 3D, distorção de lente ou rip.'],
      'compress-a-video-file': ['Reduzir o tamanho mantendo um MP4 assistível', 'Um vídeo local grande demais para e-mail, LMS ou chat.', 'Você quer mezzanine de broadcast, arquivo sem perda ou rip de YouTube.'],
      'batch-compress-video-files': ['Comprimir vários vídeos e baixar um ZIP mais leve', 'Vários vídeos locais que precisam ocupar menos.', 'Você quer um arquivo só, masters sem perda ou rip.'],
      'remove-the-audio-track-from-a-video': ['Exportar a imagem sem faixa de áudio', 'Um vídeo local cuja trilha não deve sair no download.', 'Você quer mix de stems, diálogo ou rip de YouTube.'],
      'replace-the-audio-in-a-video-file': ['Trocar a trilha por outro áudio local', 'Um vídeo local mais um áudio substituto de duração adequada.', 'Você quer multicâmera no beat, ADR ou rip.'],
      'add-an-audio-track-to-a-video': ['Adicionar um áudio local a um vídeo mudo ou sem música', 'Um vídeo local sem áudio utilizável mais a faixa a adicionar.', 'Você quer ducking, barramento de stems ou rip de YouTube.'],
      'make-a-waveform-video-from-audio': ['Renderizar um vídeo simples de forma de onda a partir do áudio', 'Um áudio local que você quer como vídeo de onda para compartilhar.', 'Você quer motion no After Effects, NLE de clipe ou rip.'],
      'add-soft-subtitles-to-an-mp4': ['Muxar legendas suaves (ativáveis) em um MP4', 'Um MP4 local mais um SRT/VTT que você quer como faixa suave.', 'Você quer texto queimado para sempre, ou rip de YouTube.'],
      'burn-subtitles-into-a-video': ['Queimar o texto na imagem para todo player mostrar', 'Um vídeo local mais o arquivo de legenda; o texto deve aparecer sem menu.', 'Você quer só faixas suaves multilíngues, ou rip.'],
      'convert-subtitle-files-between-srt-vtt-and-ass': ['Converter legendas entre SRT, VTT e ASS', 'Um arquivo de legenda local num formato que outra ferramenta rejeita.', 'Você quer transcrição do vídeo, ou raspar legendas do YouTube.'],
      'make-srt-subtitles-from-a-video-file': ['Rascunhar um SRT a partir de um vídeo local', 'Um vídeo local seu; você precisa de um SRT inicial, não de roteiro fechado.', 'Você quer QC profissional, CART ao vivo ou rip.'],
      'extract-frames-from-a-video-as-images': ['Exportar frames estáticos como imagens', 'Um vídeo local e os tempos ou o intervalo desejados.', 'Você quer pipeline de stills RAW, ou rip de YouTube.'],
      'batch-extract-frames-from-videos': ['Puxar frames de vários vídeos e baixar um ZIP de imagens', 'Vários vídeos locais que precisam de miniaturas ou stills em lote.', 'Você quer um vídeo só, storyboard NLE ou rip.'],
      'convert-a-video-file-to-a-gif': ['Transformar um clipe curto em GIF animado', 'Um clipe local curto; GIFs pesam—mantenha a duração curta.', 'Você quer compartilhar MP4 longo, master APNG ou rip de YouTube.'],
      'inspect-video-file-tracks': ['Listar faixas de vídeo, áudio e legenda e dados técnicos básicos', 'Um vídeo local que você quer entender antes de converter ou cortar.', 'Você quer marcadores de NLE por frame, remover DRM ou rip.'],
    },
    flow: [
      'Abra inspecionar faixas quando precisar ver codecs e streams antes de mudar qualquer coisa.',
      'Abra MKV→MP4 (ou outro convert) quando o player ou o LMS rejeitar o container.',
      'Abra cortar quando já souber início e fim, e exporte um clipe mais curto na aba.',
      'Abra extrair áudio de MP4 quando quiser só a trilha como arquivo de som.',
      'Abra adicionar legendas suaves quando tiver SRT/VTT e quiser uma faixa ativável no MP4.',
    ],
    exampleTitle: 'Dump do celular, upload no LMS, podcast e legendas suaves',
    exampleBody:
      'Um MKV de câmera que o Moodle rejeita: MKV→MP4 (ou o lote). Clipe de celular de lado: gire, depois corte se só quiser o minuto do meio. Aula em MP4 para virar podcast: extraia áudio. Legendas ativáveis: legendas suaves; texto fixo sem menu: queimar. Miniatura: frames; reação curta: vídeo→GIF. Quem busca editor de timeline espera um hub depois.',
    boundary:
      'Os arquivos ficam no dispositivo e não são enviados. Os limites rejeitam arquivos enormes antes da decodificação. Não é NLE de timeline, authoring de DVD, removedor de DRM nem ripper.',
    secondary: {},
    faq: [
      { q: 'Isso é um editor de vídeo online?', a: 'Não é uma timeline completa. Ofícios avulsos: converter containers, cortar ou comprimir, extrair ou trocar áudio, legendas suaves ou queimadas, frames ou GIF, e inspecionar faixas. Um hub de timeline seria outro slug depois.' },
      { q: 'Busquei mkv para mp4 ou extrair áudio de vídeo. Outra URL?', a: 'Esses ofícios são as ferramentas deste grupo (e os lotes). Não adicionamos endereços doorway que só renomeiam o mesmo trabalho.' },
      { q: 'O arquivo é enviado?', a: 'Decodificação e exportação rodam na aba. O arquivo fica no dispositivo; não o enviamos aos nossos servidores nestes ofícios.' },
      { q: 'Posso ripar YouTube ou remover DRM?', a: 'Não. Este grupo não ripa streams nem remove DRM. Use arquivos que você tem direito de processar no dispositivo.' },
    ],
    cites: {
      'mdn-videodecoder': 'MDN: VideoDecoder — decodificar frames de vídeo no navegador',
    },
  },
  id: {
    title: 'Konversi, potong, ekstrak audio, atau tambah subtitle lunak ke video',
    desc: 'Di tab: konversi, potong, ekstrak audio, atau subtitulkan video lokal. Berkas tetap di perangkat dan tidak diunggah. Bukan NLE timeline, bukan perobek siaran.',
    intro:
      'Berkas sudah di perangkat: periksa trek, remux atau encode ulang kontainer, potong atau kompres, ekstrak atau ganti audio, tambah subtitle lunak atau bakar, ambil bingkai atau buat GIF. NLE penuh belakangan, bukan tugas-tugas tunggal ini.',
    tableTitle: 'Di peramban konversi, potong, ekstrak audio, atau subtitulkan video',
    groups: {
      convert: 'Kontainer dan tata audio',
      extract: 'Audio keluar dari video',
      edit: 'Potong, gabung, kecepatan, putar, kompres',
      tracks: 'Bisukan, ganti, atau tambah audio; video gelombang',
      subtitles: 'Lunak, dibakar, dan format subtitle',
      frames: 'Bingkai diam dan GIF',
      inspect: 'Lihat isi berkas',
    },
    rows: {
      'convert-an-mkv-file-to-an-mp4-file': ['Remux atau encode ulang satu MKV menjadi MP4 yang bisa diputar', 'MKV lokal yang bisa didekode tab; Anda butuh MP4.', 'Anda butuh NLE desktop, authoring DVD, atau unduh siaran tanpa hak.'],
      'convert-a-mov-file-to-an-mp4-file': ['Ubah MOV QuickTime menjadi MP4 yang lebih luas kompatibilitasnya', 'MOV lokal (ponsel atau kamera) yang harus jadi MP4.', 'Anda butuh master ProRes, LUT, atau unduh YouTube tanpa hak.'],
      'convert-a-webm-file-to-an-mp4-file': ['Konversi WebM menjadi MP4 karena aplikasi menolak WebM', 'WebM lokal (rekam layar) yang harus jadi MP4.', 'Anda butuh setup siaran langsung, penyetelan VP9, atau unduh siaran tanpa hak.'],
      'convert-an-mp4-file-to-a-webm-file': ['Ekspor MP4 sebagai WebM untuk pemutar web', 'MP4 lokal yang ingin jadi WebM untuk situs atau embed.', 'Anda butuh paket HLS, MXF, atau unduh YouTube tanpa hak.'],
      'convert-a-video-to-an-mp4-with-aac-audio': ['Jadikan video MP4 dengan audio AAC', 'Video lokal yang audio-nya gagal di pemutar yang minta AAC dalam MP4.', 'Anda butuh stem multipista, Atmos, atau unduh siaran tanpa hak.'],
      'batch-convert-mkv-files-to-mp4-files': ['Konversi banyak MKV ke MP4 lalu unduh ZIP', 'Beberapa MKV lokal yang semua harus jadi MP4 sekali jalan.', 'Anda hanya butuh satu berkas, suntingan timeline, atau unduh siaran tanpa hak.'],
      'batch-convert-mov-files-to-mp4-files': ['Konversi banyak MOV ke MP4 lalu unduh ZIP', 'Beberapa MOV lokal yang harus jadi MP4.', 'Anda hanya butuh satu berkas, grading, atau unduh siaran tanpa hak.'],
      'batch-convert-webm-files-to-mp4-files': ['Konversi banyak WebM ke MP4 lalu unduh ZIP', 'Beberapa WebM lokal yang ditolak tujuan.', 'Anda hanya butuh satu berkas, ingest langsung, atau unduh siaran tanpa hak.'],
      'extract-audio-from-a-video-file': ['Ambil trek audio dari video umum menjadi berkas suara', 'Video lokal yang bisa didekode; Anda ingin audio tanpa gambar.', 'Anda butuh pemisah stem, karaoke, atau unduh YouTube tanpa hak.'],
      'extract-audio-from-an-mp4-file': ['Ekstrak audio dari MP4 menjadi berkas suara', 'MP4 lokal dengan trek audio yang ingin jadi WAV atau MP3.', 'Anda hanya ingin bisukan video, DAW, atau unduh siaran tanpa hak.'],
      'extract-audio-from-a-mov-file': ['Ekstrak audio dari MOV', 'MOV lokal yang suaranya ingin sendirian.', 'Anda butuh ekspor gambar, stem, atau unduh YouTube tanpa hak.'],
      'extract-audio-from-an-mkv-file': ['Ekstrak audio dari MKV', 'MKV lokal dengan audio tanpa aliran video.', 'Anda hanya ingin demux subtitle, bab, atau unduh siaran tanpa hak.'],
      'extract-audio-from-a-webm-file': ['Ekstrak audio dari WebM', 'WebM lokal yang suaranya ingin sendirian.', 'Anda butuh remux Opus, stem, atau unduh YouTube tanpa hak.'],
      'batch-extract-audio-from-video-files': ['Ekstrak audio dari banyak video campur lalu unduh ZIP', 'Beberapa video lokal kontainer campur; ingin berkas suara massal.', 'Anda hanya butuh satu berkas, isolasi vokal, atau unduh siaran tanpa hak.'],
      'batch-extract-audio-from-mp4-files': ['Ekstrak audio dari banyak MP4 lalu unduh ZIP', 'Beberapa MP4 lokal yang audionya ingin jadi berkas.', 'Anda hanya butuh satu MP4, bisukan, atau unduh YouTube tanpa hak.'],
      'batch-extract-audio-from-mov-files': ['Ekstrak audio dari banyak MOV lalu unduh ZIP', 'Beberapa MOV lokal untuk menarik suara sekali jalan.', 'Anda hanya butuh satu MOV, hanya gambar, atau unduh siaran tanpa hak.'],
      'batch-extract-audio-from-mkv-files': ['Ekstrak audio dari banyak MKV lalu unduh ZIP', 'Beberapa MKV lokal yang trek audionya ingin jadi berkas.', 'Anda hanya butuh satu MKV, demux subtitle, atau unduh YouTube tanpa hak.'],
      'batch-extract-audio-from-webm-files': ['Ekstrak audio dari banyak WebM lalu unduh ZIP', 'Beberapa WebM lokal untuk menarik suara sekali jalan.', 'Anda hanya butuh satu WebM, tangkap langsung, atau unduh siaran tanpa hak.'],
      'trim-a-video-clip-and-export': ['Simpan rentang awal–akhir lalu ekspor video lebih pendek', 'Video lokal dan waktu yang bisa Anda sebut.', 'Anda butuh suntingan multipista, grading, atau unduh siaran tanpa hak.'],
      'batch-trim-video-clips-by-time': ['Potong banyak video dengan jendela waktu sama lalu unduh ZIP', 'Beberapa video lokal dengan aturan awal–akhir yang sama.', 'Anda butuh in/out berbeda per klip, NLE penuh, atau unduh YouTube tanpa hak.'],
      'merge-video-clips-in-order': ['Gabungkan klip berurutan menjadi satu video', 'Dua atau lebih klip lokal yang harus diputar beruntun.', 'Anda butuh transisi, PIP, atau unduh siaran tanpa hak.'],
      'change-video-speed': ['Percepat atau perlambat klip lalu ekspor', 'Video lokal dan faktor kecepatan (mis. 0,5× atau 2×).', 'Anda butuh keyframe time-remap, optical flow, atau unduh YouTube tanpa hak.'],
      'rotate-a-video-file': ['Putar atau balik orientasi lalu ekspor video yang sudah benar', 'Video lokal yang diambil miring atau terbalik.', 'Anda butuh tracking 3D, lensa warp, atau unduh siaran tanpa hak.'],
      'compress-a-video-file': ['Perkecil ukuran sambil tetap bisa ditonton sebagai MP4', 'Video lokal terlalu besar untuk surel, LMS, atau obrolan.', 'Anda butuh mezzanine siaran, arsip lossless, atau unduh YouTube tanpa hak.'],
      'batch-compress-video-files': ['Kompres banyak video lalu unduh ZIP yang lebih ringan', 'Beberapa video lokal yang semua perlu lebih kecil.', 'Anda hanya butuh satu berkas, master lossless, atau unduh siaran tanpa hak.'],
      'remove-the-audio-track-from-a-video': ['Ekspor gambar tanpa trek audio', 'Video lokal yang suaranya tidak boleh ikut unduhan.', 'Anda butuh mix stem, sunting dialog, atau unduh YouTube tanpa hak.'],
      'replace-the-audio-in-a-video-file': ['Ganti soundtrack dengan berkas audio lokal lain', 'Video lokal plus audio pengganti dengan durasi cocok.', 'Anda butuh multicam ke beat, ADR, atau unduh siaran tanpa hak.'],
      'add-an-audio-track-to-a-video': ['Tambahkan trek audio lokal ke video bisu atau tanpa musik', 'Video lokal tanpa audio layak plus trek yang akan ditambah.', 'Anda butuh ducking, bus stem, atau unduh YouTube tanpa hak.'],
      'make-a-waveform-video-from-audio': ['Render video visual gelombang sederhana dari audio', 'Berkas audio lokal yang ingin jadi video gelombang untuk dibagikan.', 'Anda butuh motion After Effects, NLE klip musik, atau unduh siaran tanpa hak.'],
      'add-soft-subtitles-to-an-mp4': ['Mux subtitle lunak (bisa dinyalakan/dimatikan) ke MP4', 'MP4 lokal plus SRT/VTT yang ingin jadi trek lunak.', 'Anda butuh teks dibakar selamanya, atau unduh YouTube tanpa hak.'],
      'burn-subtitles-into-a-video': ['Bakar teks subtitle ke gambar agar semua pemutar menampilkannya', 'Video lokal plus berkas subtitle; teks harus terlihat tanpa menu.', 'Anda hanya ingin trek lunak multibahasa, atau unduh siaran tanpa hak.'],
      'convert-subtitle-files-between-srt-vtt-and-ass': ['Konversi berkas subtitle antara SRT, VTT, dan ASS', 'Berkas subtitle lokal dalam salah satu format yang ditolak alat lain.', 'Anda butuh speech-to-text dari video, atau mengikis subtitle YouTube.'],
      'make-srt-subtitles-from-a-video-file': ['Buat draf SRT dari video lokal', 'Video lokal yang Anda punya haknya; butuh SRT awal, bukan naskah final.', 'Anda butuh QC subtitle profesional, CART langsung, atau unduh siaran tanpa hak.'],
      'extract-frames-from-a-video-as-images': ['Ekspor bingkai diam dari video sebagai gambar', 'Video lokal plus waktu bingkai atau interval yang diinginkan.', 'Anda butuh pipeline still RAW, atau unduh YouTube tanpa hak.'],
      'batch-extract-frames-from-videos': ['Ambil bingkai dari banyak video lalu unduh ZIP gambar', 'Beberapa video lokal yang butuh thumbnail atau still massal.', 'Anda hanya butuh satu video, storyboard NLE, atau unduh siaran tanpa hak.'],
      'convert-a-video-file-to-a-gif': ['Ubah klip pendek menjadi GIF animasi', 'Klip lokal pendek; GIF berat—jaga durasi singkat.', 'Anda butuh berbagi MP4 panjang, master APNG, atau unduh YouTube tanpa hak.'],
      'inspect-video-file-tracks': ['Cantumkan trek video, audio, subtitle, dan fakta teknis dasar', 'Video lokal yang ingin Anda pahami sebelum konversi atau potong.', 'Anda butuh penanda NLE per bingkai, buka DRM, atau unduh siaran tanpa hak.'],
    },
    flow: [
      'Buka periksa trek saat perlu melihat codec dan aliran sebelum mengubah apa pun.',
      'Buka MKV→MP4 (atau konversi serupa) saat pemutar atau LMS menolak kontainer.',
      'Buka potong saat awal dan akhir sudah jelas, lalu ekspor klip lebih pendek di tab.',
      'Buka ekstrak audio dari MP4 saat Anda hanya butuh soundtrack sebagai berkas suara.',
      'Buka tambah subtitle lunak saat punya SRT/VTT dan ingin trek yang bisa dinyalakan di MP4.',
    ],
    exampleTitle: 'Dump ponsel, unggah LMS, podcast, dan subtitle lunak',
    exampleBody:
      'MKV kamera yang ditolak Moodle: MKV→MP4 (atau batch). Klip ponsel miring: putar, lalu potong jika hanya butuh menit tengah. Kuliah MP4 jadi podcast: ekstrak audio. Subtitle bisa dinyalakan: subtitle lunak; teks tetap tanpa menu: bakar. Thumbnail: bingkai; reaksi pendek: video→GIF. Yang mencari editor timeline menunggu hub belakangan.',
    boundary:
      'Berkas tetap di perangkat dan tidak diunggah. Batas menolak berkas raksasa sebelum dekode. Bukan NLE timeline, authoring DVD, pembuka DRM, atau perobek siaran.',
    secondary: {},
    faq: [
      { q: 'Apakah ini editor video daring?', a: 'Bukan timeline penuh. Tugas terpisah: konversi kontainer, potong atau kompres, ekstrak atau ganti audio, subtitle lunak atau bakar, bingkai atau GIF, dan periksa trek. Hub timeline slug terpisah nanti.' },
      { q: 'Saya cari mkv ke mp4 atau ekstrak audio dari video. URL lain?', a: 'Pekerjaan itu adalah alat di rumpun ini (dan batch-nya). Kami tidak menambah alamat doorway yang hanya mengganti nama pekerjaan yang sama.' },
      { q: 'Apakah berkas diunggah?', a: 'Dekode dan ekspor berjalan di tab. Berkas tetap di perangkat; kami tidak mengirimnya ke server untuk tugas ini.' },
      { q: 'Bisa merobek YouTube atau membuka DRM?', a: 'Tidak. Rumpun ini tidak merobek siaran dan tidak membuka DRM. Pakai berkas yang Anda punya hak untuk diproses di perangkat.' },
    ],
    cites: {
      'mdn-videodecoder': 'MDN: VideoDecoder — mendekode bingkai video di peramban',
    },
  },
};

/** @type {Record<string, ExpandTopic>} */
const EXPAND_BY_LANG_ALL = { ...EXPAND_BY_LANG, ...EXPAND_FR_JA_RU_DE };

/**
 * 返回某语 expand 紧凑包（rows 为 [job, need, skip]），供 rest-* 的 expand() 展开。
 * @param {'es'|'ar'|'pt'|'id'|'fr'|'ja'|'ru'|'de'} lang
 */
export function buildVideoEditorExpand(lang) {
  const t = EXPAND_BY_LANG_ALL[lang];
  if (!t) throw new Error(`video-editor expand missing lang: ${lang}`);
  return t;
}
