#!/usr/bin/env bash

echo 'this could take a while...'
ampy --port /dev/cu.SLAB_USBtoUART put boot.py
ampy --port /dev/cu.SLAB_USBtoUART put main.py
ampy --port /dev/cu.SLAB_USBtoUART put config_reader.py
ampy --port /dev/cu.SLAB_USBtoUART put platr.py
ampy --port /dev/cu.SLAB_USBtoUART put platr_config.json

ampy --port /dev/cu.SLAB_USBtoUART ls

echo 'reboot your esp, then use the repl to upip install esp32-net-config'


