a = 0
b = 1
print(a, b)
for i in range(0, 3):
	b, a = a+b, b

	print(a, b)
	
print('.......................')

a = 0
b = 1
print(a, b)
for i in range(0, 3):
	a, b = b, a+b

	print(a, b)
	
	