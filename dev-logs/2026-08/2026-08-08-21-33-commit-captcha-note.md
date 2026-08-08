Date: 2026-08-08 21:33
Summary: Explain that image captcha blocks remote push/login, not local git commit; agent cannot solve captchas.

[question]
提交需要输入验证图片的验证码

[try to solve]
本地 `git commit` 通常不需要验证码。带图片的验证码一般出现在远程登录或 `git push` / 控制台部署（GitHub、Cloudflare 等）的人机验证步骤，必须由用户在浏览器中完成；AI 无法代填。

可行流程：本地先 commit → 用户在本机终端/浏览器完成验证后 push 或在 Cloudflare 拉 Git 部署。若需要，可再让 Agent 只做本地提交（不含 push）。

[actions]
- 无代码改动
