/*


*/
function show(msg){
	console.log(msg);
}
// Array:2

function sum(arr) {
	if(Array.prototype.reduce){
		return arr.reduce(function(p,v,i){
			return (p+v);
		});
	}else{
		var v = 0;
		for(var i=arr.length-1; i>-1; i--){
			v += arr[i];
		};
		return v;
	}
}

//console.log(sum([1,2,3,4,5]));


//Array: 3
function remove(arr, item) {
	var tmp = [];
	if(Array.prototype.map){
		arr.map(function(v,i){
			if(arr[i]!=item){
				tmp.push(arr[i]);
			}
		});
	}else{
		var len = arr.length;
		for(var i = 0; i< len; i++){
			if(arr[i] == item){
				tmp.push(arr[i]);
			}
		}
	}
	return tmp;
}

//console.log(remove([1,2,3,4,5], 3));

//Array: 4
//console.log(typeof 0);
//console.log(([1,2,3]));

function removeWithoutCopy(arr, item) {
	if(typeof item == 'number' && arr && arr instanceof Array){
		var len = arr.length;
		if(len){
			for(var i=0; i < len; i++){
				if(arr[i]==item){
					arr.splice(i,1);
					i--;
					len--;
				}
			}
			
		}
	}
    return arr;
}
var array = [1,2,3,2,3,4,2];
removeWithoutCopy(array, 2);
//console.log(array);




// Array: count.js
function count(start, end) {
	var iid; //interval id
	var num;
	var span;
	function tick(){
		num = start;
		console.log(num)
		
		if(start <= end){
			num++;
			iid = setInterval(job, 3000);
		}else{
			num--;
			iid = setInterval(boj, 3000);
		}
	} 

	function cancel() {
		clearInterval(iid);
	}
	
	function job() {
		
		if (num <= end) {
			console.log(num++);
			
		}else{
			cancel();
		}
	}
	function boj(){
		if (num >= end) {
			console.log(num--);
		}else{
			cancel();
		}
	}
	tick();
	return {'cancel': cancel };
}

//count(3, 1);
//count(3, 1);
/*
实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
2、如果 num 能被 3 整除，返回字符串 fizz
3、如果 num 能被 5 整除，返回字符串 buzz
4、如果参数为空或者不是 Number 类型，返回 false
5、其余情况，返回参数 num 
*/

function fizzBuzz(num){
	var msg = '';
	if(num && typeof num == 'number'){
		if(num%3 == 0){
			msg = 'fizz';
		}
		if(num%5 == 0){
			msg += 'buzz';
		}
		if(msg){
			return msg;
		}else{
			return num;
		}
	}else{
		return false;
	}
}

fizzBuzz(1);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(10);
fizzBuzz(15);
fizzBuzz(7);
fizzBuzz([1,2,3]);

/*Array: deduplicates

题目描述
找出数组 arr 中重复出现过的元素
输入例子:

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()


输出例子:

[1, 3, 4]

*/
function duplicates(arr){
	if(arr && arr instanceof Array){
		var a = [];
		var b = [];
		arr.map(function(v, i, arr){
			if(b.indexOf(v) == -1){
				b.push(v);
			}else if(a.indexOf(v) == -1){
				a.push(v);
			}
		});
		return a;
	}
	return [];
}
//console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort());


/* Array: ...

*/

function functions(flag) {
	var msg;
	if (flag) {
		msg = 'a';
	} else {
		msg = 'b';
	}
	var getValue = function(){ 
		return msg; 
	}
	return getValue();
}
//console.log(functions(true));

/* Array:...

*/


function append(arr, item) {
	if(arr && arr instanceof Array && item){
	return arr.append(item);
    }
}

var a = [1,2,3,4];
var b = [];
var c = [];
var cp = function(arr){ return arr};
b = cp(a);
b = a.map(function(v,i){
	return v
});

//console.log(b);
//console.log(a===b?'a===b':'a!==b');
//console.log('-----------------------');

function append(arr, item) {
	if(arr && arr instanceof Array && item){
		var b =arr.map(function(v,i){
			return v;
		});
		b.push(item);
		return b;
    };
    return [];
}

//console.log(append([1, 2, 3, 4],  10));


/* Array:
题目描述

在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组 
输入例子:

insert([1, 2, 3, 4], 'z', 2)

输出例子:

[1, 2, 'z', 3, 4]
*/
var aa = [1, 2, 3, 4, 5];
//console.log(aa.copyWithin(0, 3));
//console.log(aa);
function insert(arr, item, index) {
	if(arr && arr instanceof Array && (0==item || item) && (typeof index == 'number' && index >=0)){
		var tmp=arr.slice(0);
		tmp.splice(index, 0, item);
		return tmp;
	}
}
//Array.prototype.concat();
//console.log([1,2,3,4].concat([5,6,7,8]));

function insert(arr, item, index) {
	return arr.slice(0, index).concat(item, arr.slice(index))
}

//console.log(insert([1, 2, 3, 4], 'z', 2));




/* Array:
题目描述

为 Array 对象添加一个去除重复项的方法 
输入例子:

[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq()

输出例子:

[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
*/

//console.log(['a',false, true, undefined, null, NaN, 0, 1, {}, {}, 'a'].indexOf('a',110));

Array.prototype.uniq = function () {
	var me = Object(this);
	var tmp = [];
	var nan = -1;
	me.map(function (v, i, arr) {
		if(-1 === me.indexOf(v,i+1) && -1 == tmp.indexOf(v)){
			if(isNaN(v) && 'number' == typeof v){
				if(-1 == nan){
					tmp.push(NaN);
					nan = tmp.length;
				}
			}else{
				tmp.push(v);
			}
		}
	});
	return tmp;
}

//console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq());



//console.log([NaN].indexOf(NaN));



/* window

题目描述
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
输入例子:

getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key')


输出例子:

['1', '2', '3']

*/
function getUrlParam(sUrl, sKey) {
	var t = [];
	var m = new Map();
	
	sUrl.substring(u.indexOf('?')+1).split('&').map(function(v,i){
		t = v.split('=');
		m.set(t[1], t[0]);

	});
	var k = '';
	if (sKey) {
		t = [];
		m.forEach(function (v, k) {
//			show(sKey);
//			show(k);
			if (v==sKey) {
				t.push(k);
			}			
		});
		if (t.length == 1) {
			t = t[0];
		}else if(t.length == 0){
			t = '';
		}
	}else{
		t={};
		m.forEach(function(v, k){
			t[k] = v;
		});	
	}
	
	return t;
}

var u = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';

//show(getUrlParam(u, 'key'));
show(getUrlParam('http://www.nowcoder.com'));
show(getUrlParam('http://www.nowcoder.com', 'test'));
show(getUrlParam('http://www.nowcoder.com?key=1'));
show(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'));
show(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'test'));







/* Array:
题目描述

在数组 arr 中，查找值与 item 相等的元素出现的位置 
输入例子:

findAllOccurrences('abcdefabc'.split(''), 'a').sort()

输出例子:

[0, 6]
*/

function findAllOccurrences(arr, target) {
	var t = [];
	if(arr && arr instanceof Array && target){
		var f = arr.indexOf(target);
		while(f > -1){
			t.push(f);
			f = arr.indexOf(target, f+1);
		}
	}
	return t;
}


show(findAllOccurrences('abcdefabc'.split(''), 'a').sort());


/* Array
输入例子:

truncate([1, 2, 3, 4])


输出例子:

[1, 2, 3]
*/

function truncate(arr) {
	if(arr && arr.length && arr instanceof Array){
		arr.pop();
    }
	return arr;
}