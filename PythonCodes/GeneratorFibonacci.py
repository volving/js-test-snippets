import sys

def febonacci(n):
	a,b,counter = 0,1,0
	while True:
		if(counter == n):
			return
#			raise StopIteration
		yield a
		
		a, b = b, a+b
		
		counter += 1
	
f = febonacci(20)
while True:
	try:
		print(next(f), ' ')
	except StopIteration:
		sys.exit()
			