with open('/tmp/abc.txt', 'r+') as f:
	lines = []
	while True:
		try:
			line = f.readline()
			if len(line) > 0:
				lines.append(line.strip('\n'))
			else:
				break
		except EOFError:
			break
	
	for i in lines:
		print(i)

with open('/tmp/abc.txt', 'a+') as f:
	lines2 = f.readlines()
	outs = [l.replace('\n', '') for l in lines2]
	print(outs)
	with open('/tmp/cba.txt', 'w+') as w:
		w.write(''.join(outs))