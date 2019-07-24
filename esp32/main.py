import platr, time
import network, socket

import config_reader

wifi_ssid, wifi_password, polling_url = config_reader.loadConfig()


def wifiConnect(ssid, password):
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect(ssid, password)
    print('waiting for connection...')
    while not sta_if.isconnected():
        pass

    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]
    return addr, sta_if.ifconfig()


turntable = platr.Platr(servoPinNumber=22)

localAddress, ipConfiguration = wifiConnect(wifi_ssid, wifi_password)

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

while True:

    response = urequests.get(polling_url)

    if 200 == response.status_code:
        handleResponse(response.text)
    # handleResponse(randomCommand())

    # response.close()
    time.sleep_ms(500)
