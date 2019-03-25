import zlib
import gzip


s = b'Whenever sang my songs, on the stage on my own'
print(len(s))

t = zlib.compress(s)
gzt = gzip.compress(s)

print(t, gzt)
print(len(t), len(gzt))

print(zlib.decompress(t))
print(gzip.decompress(gzt))