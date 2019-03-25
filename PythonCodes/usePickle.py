import pickle

obj = {
	"name": "NonofUrBusiness",
	"sizes": [1,2,3,4,5],
	"number": 123
}
print(repr(obj))
with open('/tmp/pickles.pkl', 'wb') as outf:
	pickle.dump(obj, outf)

with open('/tmp/pickles.pkl', 'rb') as inf:
	obj2 = pickle.load(inf)
	print(repr(obj2))	