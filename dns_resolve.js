var dns = require('dns');

dns.resolve("216.58.197.110", function (err, addresses) {
	console.log(addresses);
})