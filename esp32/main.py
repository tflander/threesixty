import platr, time
import network, socket


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

localAddress, ipConfiguration = wifiConnect('TheForge', 'speed2VALUE!')

commands = ["clockwiseMedium", "clockwiseNudge", "stop", "counterClockwiseMedium", "counterClockwiseNudge"]
def handleResponse(command):
    if len(command) == 0:
        print('no commands queued')
        return
    else:
        print(command)
        if command == "clockwiseSlow":
            turntable.rotateClockwiseSlow()
        elif command == "clockwiseMedium":
            turntable.rotateClockwiseMedium()
        elif command == "clockwiseNudge":
            turntable.nudgeClockwise()
        elif command == "stop":
            turntable.stop()
        elif command == "counterClockwiseSlow":
            turntable.rotateCounterlockwiseSlow()
        elif command == "counterClockwiseMedium":
            turntable.rotateCounterClockwiseMedium()
        elif command == "counterClockwiseNudge":
            turntable.nudgeCounterClockwise()
        else:
            print("unrecognized command " + command)



import random
def randomCommand():
    return commands[random.randrange(0, len(commands))]

import urequests

while True:
    response = urequests.get('https://gentle-plains-83953.herokuapp.com/command')

    if 200 == response.status_code:
        handleResponse(response.text)
    # handleResponse(randomCommand())

    # response.close()
    time.sleep(1)
