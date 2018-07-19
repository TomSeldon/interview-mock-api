#!/bin/sh

set -e
set -u

npm install -g serverless@$SERVERLESS_FRAMEWORK_VERSION

echo "Deploying API"
serverless deploy --verbose
