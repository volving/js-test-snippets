with open('/tmp/frp.txt', 'r+') as f:
	print(repr(f.readline()))
	f.write('Whenever sang my songs, on the stage on my own, wherever said my words, wishing they would be heard\n')
	f.write('Here we are is not perfect word, 会骗了爱情远走高飞...\n')
	print(f.tell())
	f.seek(0, 0)
	print(f.tell())
	print('----------------------------------------------------------------------')
	line = f.readline()
	while len(line) > 0:
		print(line.replace('\n', ''))
		line = f.readline()