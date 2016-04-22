var http = require('http');
var postData = JSON.stringify({
	'status' : 'OK'
});

var options = {
	protocol: 'http:',
	hostname: 'sensoro-cloud.chinacloudapp.cn',
	family: '4',
	port: 8001,
	path: '/station/:sn/heartbeat',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': postData.length
	}
};

http.request(options, (res) => {
//	console.log(`STATUS: ${res.statusCode}`);
//	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`Returned: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data in response.')
	})
}).on('error', (e) => {
	console.log(`problem with request: ${e.message}`);
}).end(postData);


var sendHeartBeatInfo = function(data_str){
			
	
}