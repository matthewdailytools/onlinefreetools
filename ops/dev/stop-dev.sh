#!/usr/bin/env bash
# 停止本地 wrangler dev 与 Ops UI（sitemap:ui / ops:ui）
#
# 用法:
#   ./ops/dev/stop-dev.sh
#   ./ops/dev/stop-dev.sh --port 8788
#   ./ops/dev/stop-dev.sh -p 8788
#   ./ops/dev/stop-dev.sh 8788
set -euo pipefail
cd "$(dirname "$0")/../.."

PORT=""
EXTRA=()

# 解析 CLI：--port / -p / 纯数字端口；其余原样转发
while [[ $# -gt 0 ]]; do
  case "$1" in
    --port|-p)
      if [[ $# -lt 2 || ! "$2" =~ ^[0-9]+$ ]]; then
        echo "Usage: $0 [--port|-p <port>] [<port>]" >&2
        exit 1
      fi
      PORT="$2"
      shift 2
      ;;
    -h|--help)
      cat <<'EOF'
停止本地 wrangler dev 与 Ops UI（sitemap:ui / ops:ui）

用法:
  ./ops/dev/stop-dev.sh
  ./ops/dev/stop-dev.sh --port 8788
  ./ops/dev/stop-dev.sh -p 8788
  ./ops/dev/stop-dev.sh 8788

会同时停止:
  - wrangler dev（默认端口 8787，可用 --port 覆盖）
  - Ops UI（默认 8791，可用环境变量 SITEMAP_UI_PORT）
EOF
      exit 0
      ;;
    *)
      if [[ "$1" =~ ^[0-9]+$ ]]; then
        PORT="$1"
        shift
      else
        EXTRA+=("$1")
        shift
      fi
      ;;
  esac
done

NODE_ARGS=()
if [[ -n "$PORT" ]]; then
  NODE_ARGS+=(--port "$PORT")
fi
if [[ ${#EXTRA[@]} -gt 0 ]]; then
  NODE_ARGS+=("${EXTRA[@]}")
fi

exec node ops/dev/stop-dev.mjs "${NODE_ARGS[@]}"
