#!/usr/bin/env bash
# 启动本地开发服务器（构建静态页 + wrangler dev 后台）
# 用法: ./ops/dev/start-dev.sh
#       ./ops/dev/start-dev.sh --no-build
#       ./ops/dev/start-dev.sh --port 8787
set -euo pipefail
cd "$(dirname "$0")/../.."
exec node ops/dev/start-dev.mjs "$@"
