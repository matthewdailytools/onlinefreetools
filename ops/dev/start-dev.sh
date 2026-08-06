#!/usr/bin/env bash
# 启动本地开发服务器（构建静态页 + wrangler dev 后台）
#
# 用法:
#   ./ops/dev/start-dev.sh
#   ./ops/dev/start-dev.sh --no-build
#   ./ops/dev/start-dev.sh --port 8788
#   ./ops/dev/start-dev.sh -p 8788
#   ./ops/dev/start-dev.sh 8788
#   ./ops/dev/start-dev.sh --no-build -p 8788
set -euo pipefail
cd "$(dirname "$0")/../.."

PORT=""
NO_BUILD=0
EXTRA=()

# 解析 CLI：--port / -p / 纯数字端口、--no-build；其余原样转发
while [[ $# -gt 0 ]]; do
  case "$1" in
    --port|-p)
      if [[ $# -lt 2 || ! "$2" =~ ^[0-9]+$ ]]; then
        echo "Usage: $0 [--no-build] [--port|-p <port>] [<port>]" >&2
        exit 1
      fi
      PORT="$2"
      shift 2
      ;;
    --no-build)
      NO_BUILD=1
      shift
      ;;
    -h|--help)
      cat <<'EOF'
启动本地开发服务器（构建静态页 + wrangler dev 后台）

用法:
  ./ops/dev/start-dev.sh
  ./ops/dev/start-dev.sh --no-build
  ./ops/dev/start-dev.sh --port 8788
  ./ops/dev/start-dev.sh -p 8788
  ./ops/dev/start-dev.sh 8788
  ./ops/dev/start-dev.sh --no-build -p 8788
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
if [[ "$NO_BUILD" -eq 1 ]]; then
  NODE_ARGS+=(--no-build)
fi
if [[ -n "$PORT" ]]; then
  NODE_ARGS+=(--port "$PORT")
fi
if [[ ${#EXTRA[@]} -gt 0 ]]; then
  NODE_ARGS+=("${EXTRA[@]}")
fi

exec node ops/dev/start-dev.mjs "${NODE_ARGS[@]}"
