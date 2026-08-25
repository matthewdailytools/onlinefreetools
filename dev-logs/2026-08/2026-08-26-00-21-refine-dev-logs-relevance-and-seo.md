Date: 2026-08-26 00:21
Summary: Refined dev-log rules: relevance screening each turn, English SEO-quality entries, and skip git-only sessions.

[question]
开发日志重新梳理生成规则，目标每一遍都进行相关梳理筛选，每一篇都要符合seo规则，采用英文。另外git的add，commit 和push不需要单独写日志

[try to solve]
Updated the durable logging policy so agents no longer write a log for every Q&A.

**Relevance gate (required every turn):** Log only when the exchange has reusable decisions, real delivery, information gain, or a clear root-cause fix. Skip pure confirmations, thin/no-conclusion chats, secrets, and **git-only** `add` / `commit` / `push` sessions. Prefer one consolidated entry over many thin follow-ups on the same topic.

**SEO content quality (every published entry):** Align with people-first / anti–scaled-thin-content guidance in `seo-google-policy.mdc`. Devlogs remain `noindex` and Disallow’d, but each new post must still have a unique English `Summary`, a consolidated English answer, and no keyword stuffing or empty “done” lists. Keep the user’s original question text; write the answer in English. Do not rewrite historical logs.

**Synced files:** `.cursor/rules/dev-logs.mdc` (source of truth), `.cursor/rules/project-core.mdc` (one-line pointer), `.github/copilot-instructions.md` (agent summary).

[actions]
- .cursor/rules/dev-logs.mdc
- .cursor/rules/project-core.mdc
- .github/copilot-instructions.md
