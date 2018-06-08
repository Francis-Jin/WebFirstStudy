/*function sum(){
	var res = 0;
	for (var i = 0; i < arguments.length; i++){
		if (typeof arguments[i] !== 'number'){
			continue;
		}
		res += arguments[i];
	}
	arguments[arguments.length-1]();
	return res;
}
var sum = sum(1,2,4,null,5,6,77,8,'hello',function (){alert("helloWorld!")});
console.log(sum);*/
// 函数做为参数
/*function fn(){
	var res = 0;
	for(var i = 0; i < arguments.length; i++){
		res += arguments[i]();
	}
	return res;
}
function one(){
	return 1;
}
function two(){
	var a = 0;
	for(var i = 0; i < arguments.length; i++){
		a += arguments[i];
	}
	return a;
}
var m = two(1,3,4,2);
console.log(m);
var result = fn(one);
console.log(result);*/
// eval()函数
/*function test(){
	alert("I am a function!");
	
	//jsonP跨域时使用eval函数，data.callback;
	
}
eval('test()');*/