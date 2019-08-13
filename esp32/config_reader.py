import ujson

filename = 'platr_config.json'

config_file = open(filename, 'r')

config_dict = ujson.loads(config_file.read())

config_file.close()

def loadConfig():
    polling_url = config_dict['polling_url']
    return polling_url
