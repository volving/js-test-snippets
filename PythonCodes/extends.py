class Tanker:
	capacity = 2000
	speed = 100
	def __init__(z, **args):
		if 'name' in args:
			z.cname = args.name
		else:
			z.cname = 'Tanker'
	
	def showCapacity(z):
		print(z.capacity)
		
	def info(z):
		print(z.cname)

class Aircraft:
	capacity = 100
	height = 0
	ccname = 'Aircraft'
	def __init__(z, **args):
		if 'name' in args:
			z.cname = args.name
		else:
			z.cname = 'Aircraft'

	def takeOff(z):
		z.height = 2000
		print(repr(z.height))
	
	def info(z):
		print('{} instance'.format(z.cname))
		
class TankerAircraft(Tanker, Aircraft):		
	def __init__(z):
		z.cname = 'TankerAircraft'
	def showCapacity(z):
		print(repr(z.capacity))
	
	def takeOff(z):
		z.height = 30000
		print(repr(z.height))
	
	def info(z):
		print('---',z.cname, super(TankerAircraft, z).ccname)
		
class AircraftTanker(Aircraft, Tanker):
	name = 'AircraftTanker'
	def showCapacity(z):
		print(repr(z.capacity))
	
	def takeOff(z):
		z.height = 30000
		print(repr(z.height))
	
# 多重继承, 方法搜索顺序
ta = TankerAircraft()
at = AircraftTanker()

ta.showCapacity() # Tanker 2000
at.showCapacity() # Aircraft 100
# 多重继承, super方法搜索顺序

ta.info()							# --- TankerAircraft
super(TankerAircraft, ta).info()	# TankerAircraft

at.info()
super(AircraftTanker, at).info()
