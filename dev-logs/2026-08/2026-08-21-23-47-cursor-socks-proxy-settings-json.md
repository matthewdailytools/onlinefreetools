Date: 2026-08-21 23:47
Summary: Give complete settings.json snippet for Cursor local SOCKS proxy (chat/login).

[question]
cursor 怎么设置 ssh socks代理,下面是目前 settings.json:{...用户粘贴的完整 settings.json...}

[try to solve]
Goal: route Cursor’s local chat/login traffic through SOCKS. Append these three keys to the existing settings.json:
- `"http.proxy": "socks5://127.0.0.1:7890"` (change the port to match the local proxy)
- `"http.proxySupport": "on"`
- `"cursor.general.disableHttp2": true`
Save, fully quit Cursor, and restart. If SOCKS fails, use the HTTP proxy port instead: `"http.proxy": "http://127.0.0.1:7890"`.

[actions]
- No code changes
