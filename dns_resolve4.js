var dns = require('dns');

dns.resolve4('google.com', function (err, addresses) {
	if (err) throw err;

	console.log('addresses: ' + JSON.stringify(addresses));

	addresses.forEach(function (a) {
		dns.reverse(a, function (err, hostnames) {
			if (err) {
				throw err;
			}

			console.log('reverse for ' + a + ': ' + JSON.stringify(hostnames));
		});
	});
});