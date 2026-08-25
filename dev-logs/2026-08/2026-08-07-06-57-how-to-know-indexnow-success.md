Date: 2026-08-07 06:57
Summary: Explained how to verify IndexNow success (CLI HTTP codes vs Bing Webmaster panel).

[question]
怎么知道 indexnow有没有成功

[try to solve]
Two layers: (1) Script side — exit code 0 and batch HTTP 200/202 mean the endpoint accepted the payload (202 still counts as success; key verification may still be in progress). Before submit, use `--check-key` to confirm live `/{key}.txt`. (2) Bing side — check Bing Webmaster Tools → IndexNow for received records. IndexNow success only means “change notified,” not “already in search results.” Common failures: 403 (key unavailable/mismatch), 422 (URL does not match host).

[actions]
- (explanatory answer only; no code changes)
