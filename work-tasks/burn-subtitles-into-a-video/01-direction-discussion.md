# Direction discussion

主方向 A（浏览器 JS 能力工具）。不同于字幕格式转换、软字幕封装或自动转写：这项作业把已有定时字幕逐帧写到视频像素，必须重编码图像。使用 Mediabunny 解码及逐帧 process、Canvas 排版、H.264/AAC MP4 和 OPFS 写出。V0 实时 MediaRecorder 对长片不可靠，故不选。现有字幕页无烧录控件，不能 absorb。竞品多覆盖泛 add subtitles 头词；本页以“把 SRT 烧进本地视频”场景承接。

IG：给出软/硬字幕区别；字幕时间轴与画面逐帧同步；可调字号/安全区/颜色并明确换行和重编码；输出再验轨；失败保留源文件。
