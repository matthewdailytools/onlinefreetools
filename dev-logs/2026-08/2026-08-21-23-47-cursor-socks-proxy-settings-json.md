Date: 2026-08-21 23:47
Summary: Give complete settings.json snippet for Cursor local SOCKS proxy (chat/login).

[question]
cursor 怎么设置 ssh socks代理,下面是目前 settings.json:{...用户粘贴的完整 settings.json...}

[try to solve]
场景仍是「Cursor 本机聊天/登录走 SOCKS」。在现有 settings.json 中追加三项：
- "http.proxy": "socks5://127.0.0.1:7890"（端口按本地代理改）
- "http.proxySupport": "on"
- "cursor.general.disableHttp2": true
保存后完全退出并重启 Cursor。若 SOCKS 不通，改用 HTTP 口："http.proxy": "http://127.0.0.1:7890"。

[actions]
- 无代码改动
