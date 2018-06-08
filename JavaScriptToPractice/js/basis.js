/*function abs(x){
	if(x>2){
		return x;
	}else{
		return -x;
	}
}
abs(5);*/
window.onload=function(){
	//第一种方法定义函数
	/*function abs(x){
		if(x>0){
			return x;
		}else{
			return -x;
		}
	}*/
	//方法二
/*	var abs=function(x){
		if(x>0){
			return x;
		}else{
			return -x;
		}
	};*///这种方法得需要在末尾加个分号；
//	alert(abs(0));
	/*function abs(x){
		if(typeof x !='number'){
			throw "Not a number";
		}
		if(x>0){
			alert("你输入的是个正数"+x);
		}else if(x==0){
			alert("输入的是0");
		}else{
			alert("你输入的是负数"+x);
		}
	}
	
	abs(-8);*/
	//JavaScript中的arguments,使用arguments可以知道输入者输入的所有参数，不定义也可以知道
	/*function foo(x){
		alert(x);
		for (var i=0;i<arguments.length;i++){
			alert(arguments[i]);
		}
	}
	foo(10,20,30);*/
	/*function foo(a,b,c){
		if(arguments.length==2){
			//实际拿到的参数是a和b，c为undefined
			c=b;
			b=null;
		}
	}
	alert(foo(1,2,3));
	alert(foo(2))
	alert(("王尼玛"));*/
	//rest参数
	/*function foo(a,b){
		var i,rest=[];
		if(arguments.length>2){
			for(i=2;i<arguments.length;i++){
				rest.push(arguments[i]);
			}
		}
	}
	console.log('a='+a);
	console.log('b='+b);
	console.log(rest);*/
	/*function foo(a,b,...rest){
		console.log('a='+a);
		console.log('b='+b);
		console.log(rest);
	}
	foo(1,2,3,4,5);*/
	
	//小心你的return语句
/*	function foo(){
		return{
			name:"foo"
		};
	}
	foo();*/
	//为什么return换行之后不是报错就是undefined？
	/*function max(a,b){
		if(a>b){
			return 
			a;
		}else{
			return
			b;
		};
	};
	
	alert(max(10,9));*/
	/*var a=['a','b','c'];
	a.name="tom";
	var s=new Set(['A','B','C']);
	var m=new Map([[1,'x'],[2,'y'],[3,'z']]);*/
/*	for(var x of a){
		alert(x);
	}
	for(var x of s){
		alert(x);
	}
	for(var x of m){
		alert(x);
	}*/
	/*for(var x in a){
		alert(x);
	}*/
	/*for(var x of a){
		alert(x);
	}*/
	//立即执行函数
	/*a.forEach(function(element,index,array){
		//element是指向当前元素的值
		//index是指向当前索引
		//array是指向Array对象本身
		alert(element);
	});*/
	/*s.forEach(function(element,sameElement,set){
		alert(element);
	});*/
	/*m.forEach(function(value,key,map){
		alert(value);
	});*/
	
	/*function getAge(){
		var y=new Date().getFullYear();
		return y-this.birth;
	}
	var xiaoming = {
		name:'小明',
		birth:1993,
		age:getAge
	};
	alert(xiaoming.age());*/
	var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age; // function xiaoming.age()
xiaoming.age(); // 今年调用是25,明年调用就变成26了
	
	
	
	
	
	
	
}
