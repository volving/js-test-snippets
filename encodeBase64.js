var encodeBase64 = function(a) {
	if (0 === a.length)
		return "";
	var b, c, d = [],
		e = 0;
	for (a = encodeURI(a),
		b = a.length; b > e;)
		c = a[e],
		e += 1,
		"%" !== c ? d.push(c.charCodeAt(0)) : (c = a[e] + a[e + 1],
			d.push(parseInt(c, 16)),
			e += 2);
	var f, g, h = "=",
		i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		j = [],
		k = d.length - d.length % 3;
	for (f = 0; k > f; f += 3)
		g = d[f] << 16 | d[f + 1] << 8 | d[f + 2],
		j.push(i.charAt(g >> 18)),
		j.push(i.charAt(g >> 12 & 63)),
		j.push(i.charAt(g >> 6 & 63)),
		j.push(i.charAt(63 & g));
	switch (d.length - k) {
		case 1:
			g = d[f] << 16,
				j.push(i.charAt(g >> 18) + i.charAt(g >> 12 & 63) + h + h);
			break;
		case 2:
			g = d[f] << 16 | d[f + 1] << 8,
				j.push(i.charAt(g >> 18) + i.charAt(g >> 12 & 63) + i.charAt(g >> 6 & 63) + h)
	}
	return j.join("")
};
