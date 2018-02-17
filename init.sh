#!/bin/bash
set -e

echo "Starting SSH ..."
service ssh start

node server runserver 0.0.0.0:8000
