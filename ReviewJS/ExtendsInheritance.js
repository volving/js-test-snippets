var Cat = function(){
	this.name = 'Nya';
	age = 1;
	this.greet = this.speak = function(){
		return this.name + ' ' + this.name;
	}
}

var cat = new Cat();

//console.log(cat.speak());



var Garfield = function(){};
Garfield.prototype = cat;

var ccat = new Garfield();
//console.log(ccat);



// B 继承 A
var A = { a:3, b:4};

var B = function(){
	this.b=1024;
	this.gets = function(){
		return this.a+this.b;	
	}
};

B.prototype = A;

var bb = new B();
console.log(bb.gets());