#!/usr/bin/env bash

set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: bun run deploy -- <ec2-host-or-ip> <ssh-key-path>"
  exit 1
fi

EC2_HOST="$1"
SSH_KEY_PATH="$2"
REMOTE_USER="ec2-user"
REMOTE_PATH="/home/ec2-user/app/"

rsync \
  -avz \
  --delete \
  --exclude "node_modules" \
  --exclude ".git" \
  --exclude ".DS_Store" \
  --exclude "dist" \
  --exclude .env \
  -e "ssh -i ${SSH_KEY_PATH}" \
  ./ "${REMOTE_USER}@${EC2_HOST}:${REMOTE_PATH}"

echo "Deploy completed: ${REMOTE_USER}@${EC2_HOST}:${REMOTE_PATH}"
