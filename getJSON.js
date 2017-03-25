var getJSON = function(url) {
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.responseType = 'json';
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = handler;
		xhr.send();

		function handler(){
			if(this.readyState !== 4){
				return;
			}
			if(this.status === 200){
				resolve(this.response);
			}else{
				reject(new Error(this.statusText));
			}
		}
	});
};

//2038349
//api.openweathermap.org/data/2.5/weather?q=Beijing%20Shi
// getJSON()
getJSON('api.openweathermap.org/data/2.5/weather?q=London').then(function(value){
	console.log(value);
});

