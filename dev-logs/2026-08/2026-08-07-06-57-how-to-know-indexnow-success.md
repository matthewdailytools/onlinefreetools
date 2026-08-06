Date: 2026-08-07 06:57
Summary: Explain how to verify IndexNow submission success (CLI HTTP codes vs Bing panel).

[question]
怎么知道 indexnow有没有成功

[try to solve]
分两层：1) 脚本侧：退出码 0 且批次 HTTP 200/202 即表示端点已接收（202 也算成功，可能 key 仍在校验）；提交前可用 `--check-key` 确认线上 `/{key}.txt`。2) Bing 侧：在 Bing Webmaster Tools → IndexNow 查看是否收到记录。IndexNow 成功只代表「已通知变更」，不等于已收录进搜索结果。常见失败：403（key 不可用/不匹配）、422（URL 与 host 不符）。

[actions]
- （说明性回答，无代码改动）
