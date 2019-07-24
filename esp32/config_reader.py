import ujson

filename = 'platr_config.json'

config_file = open(filename, 'r')

config_dict = ujson.loads(config_file.read())

config_file.close()

def loadConfig():
    wifi_ssid = config_dict['wifi_ssid']
    wifi_password = config_dict['wifi_password']
    polling_url = config_dict['polling_url']
    return wifi_ssid, wifi_password, polling_url
