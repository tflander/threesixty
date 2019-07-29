import ujson

filename = 'platr_config.json'

config_file = open(filename, 'r')

config_dict = ujson.loads(config_file.read())

config_file.close()

def loadConfig():
    wifi_credentials = config_dict['wifi']
    polling_url = config_dict['polling_url']
    return wifi_credentials, polling_url
