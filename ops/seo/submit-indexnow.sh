#!/usr/bin/env bash
# Bing IndexNow 多场景提交通知（转发到 Node 实现）
#
# 用法:
#   ./ops/seo/submit-indexnow.sh
#   ./ops/seo/submit-indexnow.sh --check-key
#   ./ops/seo/submit-indexnow.sh --sitemap --dry-run --limit 10
#   ./ops/seo/submit-indexnow.sh --remote-sitemap
#   ./ops/seo/submit-indexnow.sh --sitemap https://onlinefreetools.org/sitemap.xml
#   ./ops/seo/submit-indexnow.sh --sitemap-only --include /tools/
#   ./ops/seo/submit-indexnow.sh --tool html-entity --lang zh,en
#   ./ops/seo/submit-indexnow.sh --incremental --remote-sitemap
#   ./ops/seo/submit-indexnow.sh --baseline --remote-sitemap
#   ./ops/seo/submit-indexnow.sh --since-git HEAD~1
#   ./ops/seo/submit-indexnow.sh --help
#
# 等价 npm：npm run indexnow -- [options...]
set -euo pipefail

# 切换到仓库根（ops/seo → ops → 根）
cd "$(dirname "$0")/../.."

# 全部参数原样交给 Node CLI
exec node ops/seo/submit-indexnow.mjs "$@"
