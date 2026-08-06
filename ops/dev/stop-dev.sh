#!/usr/bin/env bash
# 停止本地 wrangler dev 开发服务器
# 用法: ./ops/dev/stop-dev.sh
#       ./ops/dev/stop-dev.sh --port 8787
set -euo pipefail
cd "$(dirname "$0")/../.."
exec node ops/dev/stop-dev.mjs "$@"
