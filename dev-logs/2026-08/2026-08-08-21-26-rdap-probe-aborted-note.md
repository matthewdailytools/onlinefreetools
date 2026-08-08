Date: 2026-08-08 21:26
Summary: Note that an early rdap.org probe shell task was aborted; implementation used Verisign RDAP successfully.

[question]
Briefly inform the user about the task result and perform any follow-up actions (if needed). If there's no follow-ups needed, don't explicitly say that.

[try to solve]
先前探测 `rdap.org` 的后台 curl 任务已中止（超时/无输出）。后续改用 `rdap.verisign.com` 与 IANA bootstrap，RDAP 冒烟 200，`domain-lookup` 实现不受影响。

[actions]
- 无代码改动
