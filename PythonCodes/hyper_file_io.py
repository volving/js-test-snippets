import requests
import json
url = 'https://api.github.com/search/repositories?q=language:python&sort=stars'
fileName = 'hio.json'
# download file and store locally
result = requests.get(url)
data = result.json()
print(data)
dumped = json.dumps(data)
print(dumped)

with open(fileName, 'w', encoding='UTF-8') as f:
	f.write(dumped)
	print('file (re)written down to file:' + fileName)



# read local file and parse to JSON
with open(fileName, 'r', encoding='UTF-8') as ff:
	dataFile = json.load(ff)
	print(dataFile)

if data == dataFile:
	print('They are the same!')