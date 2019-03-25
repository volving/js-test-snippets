#class Iterable:
#	def __init__(z):
#		z.num = 1
#		z.top = 10
#	def __iter__(z):
#		z.num = 1
#		return z
#	
#	def __next__(z):
#		if z.num <=20:
#			x = z.num
#			z.num += 1
#			return x
#		else:
#			raise StopIteration
#
#it = Iterable()
#iters = iter(it)
#
#for x in iters:
#	print(x)
#	
	
class Fibonacci:
	def __init__(z):
		z.a = 0
		z.b = 1
	def __iter__(z):
		z.a, z.b = z.b, z.a + z.b
		return z
	def __next__(z):
		a = z.a
		z.a, z.b = z.b, z.a + z.b
		return a

f = Fibonacci()
for i in range(0, 10):
	print(next(f))