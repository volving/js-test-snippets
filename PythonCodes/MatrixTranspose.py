matrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
]

print(matrix)

tran1 = []
for i in range(4):
	mrow = []
	for row in matrix:
		mrow.append(row[i])
	tran1.append(mrow)
print(tran1)
		

tran2 = []
for i in range(4):
	tran2.append([row[i] for row in matrix])

print(tran2)


tran3 = [[row[i] for row in matrix] for i in range(4)]
print(tran3)