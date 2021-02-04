def consumer():
    r = ''
    while True:
        print('heya.....')
        n = yield r
        print('heya.....2')
        if not n:
            return
        print('[CONSUMER] Consuming %s...' % n)
        r = '200 OK'

def produce(c):
    c.send(None)
    print('first sent')
    n = 0
    while n < 5:
        n = n + 1
        print('[PRODUCER] Producing %s...' % n)
        r = c.send(n)
        print('[PRODUCER] Consumer return: %s' % r)
    c.close()

c = consumer()
print('------------------')
produce(c)

# generator does nothing when initiated!
# 

"""
------------------
heya.....                                    c.send(None)`
first sent                                    
[PRODUCER] Producing 1...
heya.....2
[CONSUMER] Consuming 1...
heya.....
[PRODUCER] Consumer return: 200 OK
[PRODUCER] Producing 2...
heya.....2
[CONSUMER] Consuming 2...
heya.....
[PRODUCER] Consumer return: 200 OK
[PRODUCER] Producing 3...
heya.....2
[CONSUMER] Consuming 3...
heya.....
[PRODUCER] Consumer return: 200 OK
[PRODUCER] Producing 4...
heya.....2
[CONSUMER] Consuming 4...
heya.....
[PRODUCER] Consumer return: 200 OK
[PRODUCER] Producing 5...
heya.....2
[CONSUMER] Consuming 5...
heya.....
[PRODUCER] Consumer return: 200 OK

"""