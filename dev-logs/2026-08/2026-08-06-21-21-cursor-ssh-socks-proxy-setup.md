Date: 2026-08-06 21:21
Summary: Explain Cursor SOCKS proxy setup for local chat/login networking (scenario 1).

[question]
cursor 怎么设置 ssh socks代理

（用户随后选择场景 1：Cursor 聊天/登录走 SOCKS）

[try to solve]
场景 1：让 Cursor 本机联网（聊天/登录）走 SOCKS。

在本机 settings.json 加上（端口改成你本地 SOCKS 口）：

```json
"http.proxy": "socks5://127.0.0.1:7890",
"http.proxySupport": "on",
"cursor.general.disableHttp2": true
```

操作：Cmd+Shift+P → Preferences: Open User Settings (JSON) → 粘贴上述三项 → 完全退出并重启 Cursor。

若 SOCKS 不通，改用代理软件的 HTTP 口，例如 `"http.proxy": "http://127.0.0.1:7890"`。Clash/Surge 常见 SOCKS 7891、HTTP 7890，以客户端显示为准。

[actions]
- 无代码改动；查阅了本机 Cursor User/settings.json（尚无 proxy 配置）
