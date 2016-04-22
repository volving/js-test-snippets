var devaddr = '1111111100',
	fcnt = 1024,
	rxpk = {
		tmst: Date.now()
	},
	gw = {
		gatewayEUI: 'gatewayEUI-12341234123'
	},
	msg = {
		type: 'pull_resp'
	}
console.log('--(Device Info:{"devaddr":"' + devaddr + '", "fcnt": +"' + fcnt + '", "tmst": "' + rxpk.tmst + '"}');

console.log(' Received Message from Gateway:{"GatewayEUI": "' + gw.gatewayEUI + '" , "MessageType": "' + msg.type + '", "time": "' + Date.now() + '"}');


