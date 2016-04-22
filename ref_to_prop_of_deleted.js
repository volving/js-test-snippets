

var client_obj = {
	name_str: 'volving`s robot',
	addr_obj: {
		street: 'Jiangtaixi Rd',
		district: 'Chaoyang'
	}
}
var name_alias = client_obj.name_str;
var addr_obj = client_obj.addr_obj;

console.log('name_str: '+name_alias);

if (addr_obj) {
	
}

console.log('addr_obj: '+addr_obj);

delete client_obj;

console.log('name_str: '+name_alias);
console.log('addr_obj: '+addr_obj);