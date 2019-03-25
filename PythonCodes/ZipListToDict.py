import sys
print(sys.path)
names = [
	'vno',
	'volving',
	'bryan'
]

touse = [
	2018,
	2012,
	2010
]

# zipper
tupleList = list(zip(names, touse))
name_touse = dict(tupleList)
print(name_touse)


# 列表推导
nt = {
	x: y for x in names for y in touse
}

print(nt)