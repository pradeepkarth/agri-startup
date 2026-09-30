#!/usr/bin/env bash
# One-command launcher for the Bosqen dev server.
# Ensures http://localhost:5173 is alive: starts it if missing,
# restarts it if a stale/zombie server is squatting on the port.
# Usage: ./launch.sh   (or: npm run launch)

set -u

PORT=5173
URL="http://localhost:${PORT}"
LOG="logs/dev-server.log"

mkdir -p logs

healthy() {
  curl -sf -o /dev/null "$URL"
}

echo "==> Checking ${URL} ..."

if healthy; then
  echo "==> Dev server already running at ${URL} — nothing to do."
  exit 0
fi

echo "==> No healthy server on port ${PORT}. Clearing stale processes..."

# Kill anything squatting on the port (e.g. a dead Vite from a previous session).
lsof -ti ":${PORT}" | xargs kill 2>/dev/null || true
sleep 1

echo "==> Starting Vite dev server..."

# Prefer a screen session so the server survives this script exiting.
if command -v screen >/dev/null 2>&1; then
  screen -S devserver -X quit 2>/dev/null || true
  screen -dmS devserver bash -c "npm run dev > '${LOG}' 2>&1"
  RUNNER="screen session 'devserver' (stop: screen -S devserver -X quit)"
else
  nohup npm run dev > "${LOG}" 2>&1 &
  RUNNER="background process (logs: ${LOG})"
fi

# Wait up to 30s for the server to respond.
for _ in $(seq 1 30); do
  if healthy; then
    echo ""
    echo "==> Bosqen dev server is live at ${URL}"
    echo "    Running in: ${RUNNER}"
    exit 0
  fi
  printf "."
  sleep 1
done

echo ""
echo "==> ERROR: server did not become healthy within 30s. Last log lines:"
tail -20 "${LOG}" 2>/dev/null
exit 1
