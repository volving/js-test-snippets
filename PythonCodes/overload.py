class Vector2D:
	def __init__(z, a, b):
		z.r = a
		z.v = b
	
	def __str__(z):
		return 'Vector (%d, %d)' %(z.r,z.v)
	
	def __add__(z, other):
		return Vector2D(z.r + other.r, z.v + other.v)

v1 = Vector2D(2, 4)
v2 = Vector2D(1, -1)

print(v1 + v2)

'''
init
del
len
add
sub
mod
pow
mul
truediv
'''