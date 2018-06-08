var json = {
	name: "json",
	age: 18,
	gender: "男",
	eat: function () {
		console.log("一顿吃五碗饭！");
	},
	sleep: function () {
		console.log('一天一晚！');
	}
};

var GG = {
	name : "小明",
	age : 18,
	gender : "男",
	introduce : function () {
		console.log("我叫" + this.name +",我今年" + this.age +"岁");
	},
	run : function () {
		alert("你跑了几圈！");
	}
};
console.log("我的名字叫"+json.name+'，'+"我有一个弟弟，他的名字叫："+GG.name);
json.sleep();
GG.introduce();
delete json.age;
console.log(json);
for (var key in json){
	if('function' != (typeof json[key])){
		continue;
	}
	else{
		console.log(key);
	}
}
