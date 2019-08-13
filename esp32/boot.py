import network, socket, time

def wifiConnect(ssid, password):
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect(ssid, password)
    if not waitForNetwork(sta_if, retriesForTimeout=80):
        print("giving up on network " + ssid)
        sta_if.active(False)
        return None, None

    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]
    return addr, sta_if.ifconfig()

def waitForNetwork(sta_if, retriesForTimeout):
    count = 0
    while not sta_if.isconnected():
        time.sleep_ms(200)
        count += 1
        if(count > retriesForTimeout):
            return False
    return True


try:
    import esp32_net_config
except:
    print('espNetConfig is not installed')
    print('run the following commands:')
    print('wifiConnect(<ssid>, <password>)')
    print('import upip')
    print("upip.install('esp32-net-config')")
