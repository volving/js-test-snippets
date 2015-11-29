var value = 1023;
//通过函数字面量创建的函数对象包含一个连到外部上下文的链接。这被称为“毕包”
function shows(){
//	var value = 0;
//	很扯淡的情况如下，先标记一下，等有空研究源码了，找出原因。
	console.log(value);
	console.log(this.value); // nodejs环境认为这个是undefined
	
//	alert(this.value);	//	1023
//	alert(value);		//	0
}

shows();


//真正的闭包效果
var trueClosure = function(para){
	var consts = para;
	return function () {
		console.log(consts);
	}
}
var me = trueClosure(123)
me();
