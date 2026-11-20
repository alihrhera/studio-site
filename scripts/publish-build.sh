#!/usr/bin/env bash
# Build the site locally and publish dist/ to the `build` branch.
# The server runs `git pull` on that branch, so it never needs Node.
set -euo pipefail

SITE="${SITE:-https://pollenbyte.com}"
BASE="${BASE:-/}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WT="$(mktemp -d)/build-wt"

cd "$ROOT"
SITE="$SITE" BASE="$BASE" npm run build

# Commit on top of origin/build so the server gets a fast-forward pull.
git fetch -q origin
if git ls-remote --exit-code --heads origin build >/dev/null; then BASE_REF=origin/build; else BASE_REF=HEAD; fi
git worktree add --detach "$WT" "$BASE_REF"
cd "$WT"
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r "$ROOT/dist/." .
git add -A
git diff --cached --quiet || git commit -q -m "build: $(date +%F_%T)"
git push origin HEAD:build

cd "$ROOT"
git worktree remove --force "$WT"
echo "Published build to origin/build (SITE=$SITE BASE=$BASE)"

# Pull on the server. DEPLOY_SSH is the ssh target, e.g. user@host.
: "${DEPLOY_SSH:?set DEPLOY_SSH=user@host}"
ssh "$DEPLOY_SSH" "cd /var/www/03pollenbyte/site && git fetch && git pull"
echo "Deployed to $DEPLOY_SSH"
