import platr, time
import network, socket
import machine
import config_reader

wifi_credentials, polling_url = config_reader.loadConfig()


def findWorkingWifiNetwork(credentials):
    for login in credentials:
        is_connected = connectToNetwork(login.get('ssid'), login.get('password'), 30)
        time.sleep_ms(200)

        if is_connected:
            attempt_request = urequests.get(polling_url)
            if attempt_request.status_code is 200:
                print("Connection successfull !")


def connectToNetwork(ssid, password, retries):
    onboardLed = machine.Pin(2, machine.Pin.OUT)
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)

    print('attempting network: ' + ssid)

    sta_if.connect(ssid, password)
    print('waiting for connection...')
    onboardLed.on()

    while not sta_if.isconnected() and retries > 0:
        time.sleep_ms(200)
        retries = retries - 1

    onboardLed.off()

    socket.getaddrinfo('0.0.0.0', 80)[0][-1]
    return sta_if.isconnected()


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

findWorkingWifiNetwork(wifi_credentials)

while True:

    response = urequests.get(polling_url)

    if 200 == response.status_code:
        handleResponse(response.text)
    # handleResponse(randomCommand())

    # response.close()
    time.sleep_ms(500)
