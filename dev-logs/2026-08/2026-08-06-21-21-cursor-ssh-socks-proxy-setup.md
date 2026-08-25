Date: 2026-08-06 21:21
Summary: Explained Cursor SOCKS proxy setup for local chat/login networking (scenario 1).

[question]
cursor 怎么设置 ssh socks代理

（用户随后选择场景 1：Cursor 聊天/登录走 SOCKS）

[try to solve]
Scenario 1: route Cursor’s local networking (chat/login) through SOCKS.

Add to local settings.json (change the port to your local SOCKS port):

```json
"http.proxy": "socks5://127.0.0.1:7890",
"http.proxySupport": "on",
"cursor.general.disableHttp2": true
```

Steps: Cmd+Shift+P → Preferences: Open User Settings (JSON) → paste the three keys → fully quit and restart Cursor.

If SOCKS fails, use the proxy app’s HTTP port instead, e.g. `"http.proxy": "http://127.0.0.1:7890"`. Clash/Surge often use SOCKS 7891 and HTTP 7890 — confirm in the client UI.

[actions]
- No code changes; checked local Cursor User/settings.json (no proxy config yet)
