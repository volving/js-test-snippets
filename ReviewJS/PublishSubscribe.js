function Event(name){
	this.handlers = [];
	this.getName = function(){
		return name;
	};
	this.getHandlers = function(){
		return this.handlers.length;
	}
	this.addHandler = function(h){
		this.handlers.push(h);
	};
	this.removeHandler = function(handler){
		var len = this.handler.length;
		for (var i = 0; i < len; i++) {
			if(this.handlers[i] === handler){
				this.handlers.splice(i, 1);
				break;
			}
		}
	};
	this.fire = function(args){
		this.handlers.map(function(h){
			h(args);
		});
	}
}

/*

var e = new Event('abc');
var hh = function(args){
	console.log('heya');
};
e.addHandler(hh);
console.log(e.getHandlers());


var ee = new Event('def');

console.log(ee.getHandlers())

*/

function EventAggregator(){
	this.events = [];
	
	this.getEvent = function(name){
		for(var i = this.events.length-1; i > -1; i--){
			if(this.events[i].getname === name){
				return e;
			}
		}
		/*
		return $.grep(events, function(e){
			return e.getName === name;
		});
		*/
	}
	this.publish = function(name, args){
		var e = this.getEvent(name);
		if(!e){
			e = new Event(name);
			this.events.push(e);
		}
		e.fire(args);
	};
	
	this.subscribe = function(name, handler){
		var e = this.getEvent(name);
		if(!e){
			e = new Event(name);
			this.events.push(e);
		}
		e.addHandler(handler);
	};
}



var ea = new EventAggregator();
var cb = function(arg){
	console.log(arg + ' was kicked!!!');
};
ea.subscribe('kick', cb);

setTimeout(function () {
	ea.publish('kick', 'omg')
}, 5000);