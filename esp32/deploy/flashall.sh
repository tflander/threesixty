#!/usr/bin/env bash

export AMPY_PORT=/dev/cu.SLAB_USBtoUART

echo 'this could take a while...'
ampy put ../boot.py
ampy put ../main.py
ampy put ../config_reader.py
ampy put ../platr.py
ampy put ../platr_config.json

echo 'rebooting...'
ampy run reboot.py
echo 'files:'
ampy ls
sleep 5
echo 'installing dependencies'
ampy run postinstall.py

