import platr, time
import network, socket
import machine
import config_reader
import esp32_net_config

polling_url = config_reader.loadConfig()

turntable = platr.Platr(servoPinNumber=22)

commands = ["clockwiseSmall", "clockwiseMedium", "clockwiseLarge", "stop", "counterClockwiseSmall",
            "counterClockwiseMedium", "counterClockwiseLarge"]


def handleResponse(command):
    if len(command) == 0:
        print("no commands queued")
        return
    else:
        print(command)
        if command == "clockwiseSmall":
            turntable.rotateClockwiseSmall()
        elif command == "clockwiseMedium":
            turntable.rotateClockwiseMedium()
        elif command == "clockwiseLarge":
            turntable.rotateClockwiseLarge()
        elif command == "stop":
            turntable.stop()
        elif command == "counterClockwiseSmall":
            turntable.rotateCounterClockwiseSmall()
        elif command == "counterClockwiseMedium":
            turntable.rotateCounterClockwiseMedium()
        elif command == "counterClockwiseLarge":
            turntable.rotateCounterClockwiseLarge()
        else:
            print("unrecognized command " + command)
            turntable.stop()


import urequests

esp32_net_config.connect_network_or_go_into_config_mode()

while True:

    response = urequests.get(polling_url)

    if 200 == response.status_code:
        handleResponse(response.text)
    time.sleep_ms(500)
